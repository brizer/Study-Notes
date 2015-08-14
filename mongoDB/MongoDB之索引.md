索引是用来加快查询的,这里不讲解索引的原理和数据结构，其实大部分数据库的索引就是B+Tree，想要了解的同学可以看[索引原理](https://github.com/brizer/Study-Notes/blob/master/mysql/mysql%E6%B7%B1%E5%85%A5.markdown)，要掌握如何为查询配置最佳索引会有些难度。

MongoDB索引几乎和关系型数据库的索引一样.绝大数优化关系型数据库索引的技巧同样适用于MongoDB。
我们举一个例子，现在集合中插入多个文档：

```
db.lf.insert({“name”:”lf”,”age”:23,”isactive”:true})
db.lf.insert({“name”:”lf”,”age”:24,”isactive”:false})
db.lf.insert({“name”:”aaaa”,”age”:24,”isactive”:false})
db.lf.insert({“name”:”bbbb”,”age”:24,”isactive”:false})
db.lf.insert({“name”:”cccc”,”age”:24,”isactive”:false})
db.lf.insert({“name”:”aaaaa”,”age”:24,”isactive”:false})
db.lf.insert({“name”:”bbbb”,”age”:28,”isactive”:true})
db.lf.insert({“name”:”bbbb”,”age”:21,”isactive”:false})
db.lf.insert({“name”:”rrrr”,”age”:11,”isactive”:true})

```
![这里写图片描述](http://img.blog.csdn.net/20150814152229051)

接下来，我们该创建索引了。

------

##**创建索引**
要按照name键进行查找,就可以在此键上建立索引,来提高查询速度。
使用ensureIndex方法来创建索引：

```
db.lf.ensureIndex({"name":1})
```
![这里写图片描述](http://img.blog.csdn.net/20150814152351585)

对某个键创建索引会加速对该键的查询,但是对于其他的查询可能没有帮助,即便查询中包含了被索引的键。
那么如何查看自己创建了哪些索引呢？

------
##**查看索引**
使用db.system.indexes.find()就可以查看自己创建的索引了。
![这里写图片描述](http://img.blog.csdn.net/20150814152520151)

可以看到，id是一定会有一个索引的，我们创建的name索引在后面。

这里要介绍一个概念，叫做**表扫描**，表扫描就是在没有索引的集合中查找内容，从第一个到最后一个。当集合过大时，这种需找方式会显得很慢，所以我们要避免表扫描。

------
##**删除索引**
使用dropIndexes命令来删除索引。
例如：

```
> db.runCommand({"dropIndexes":"lf","index":"*"})
{
"nIndexesWas" : 2,
"msg" : "non-_id indexes dropped for collection",
"ok" : 1
}
> db.lf.ensureIndex({"name":1,"age":1})
> db.lf.ensureIndex({"name":1,"age":-1})
> db.system.indexes.find()
{ "v" : 1, "key" : { "_id" : 1 }, "ns" : "test.lf", "name" : "_id_" }
{ "v" : 1, "key" : { "_id" : 1 }, "ns" : "test.lf", "name" : "_id_" }
{ "v" : 1, "key" : { "_id" : 1 }, "ns" : "test.lf", "name" : "_id_" }
{ "v" : 1, "key" : { "name" : 1, "age" : 1 }, "ns" : "test.lf", "name"
: "name_1_age_1" }
{ "v" : 1, "key" : { "name" : 1, "age" : -1 }, "ns" : "test.lf", "name
" : "name_1_age_-1" }

```

可以看到，创建的所有会有一个name，在删除对应索引时指定名称就行了。

如果以{"age":1, "name":1,}这种方式创建索引,MongoDB会按如下方式组织:
![这里写图片描述](http://img.blog.csdn.net/20150814154226185)
用户名安装字母升序排列，同名的组按照年龄升序排列。

创建索引的缺点是每次插入,更新,删除都会产生额外的开销,因为数据库不但需要执行这些操作,还要将这些操作在集合的索引中标记.因此,尽可能少的创建索引。
一般来说,要是查询要返回集合中一半以上的结果,用表扫描会比几乎每条文档都要索引要快,所以,查询是否存在某个键,或者检查摸个布尔类型的值是真是假,就没有必要利用索引。

------
##**扩展索引**

假设有个集合存储了用户的状态信息。现在要查询用户和日期,取出某一用户最近的状态.我们可能会建立如下索引:

```
db.users.ensureIndex({"user":1,"date":-1})
```

这会使对用户和日期的查询非常快,但是并不是最好的方式。
因为应用会有数百万的用户,每人每天都有数十条状态更新.若是每条用户状态的索引值咱用类似一页纸的磁盘控件,那么对每次"最新状态"的查询,数据库将会将不同的页载入内存。若是站点太热门,内存放不下所有索引,就会很慢。要是改变索引的顺序{"date":-1,"user":1},则数据库可以将最后几天的索引保存在内存中,可以有效的减少内存交换,这样查询任何用户的最新状态都会快很多。


------
##**索引内嵌文档中的键**
那么索引如何作用于NoSQL复杂灵活的内嵌文档呢？
其实和普通的没有什么区别，还是利用点操作符：

```
db.blog.insert(
　　{
　　　　"title":" blog",
　　　　"author":
　　　　{
　　　　　　"name":"lf",
　　　　　　"email":"362512489@qq.com"
　　　　}　　
　　}
)

```

为author.name创建索引：

```
db.blog.ensureIndex({"author.name":1})
```
对内嵌文档的键索引和普通键索引没有什么区别，所以说两者可以联合组成复合索引。

------
##**索引名称**
集合中的每个索引都有一个字符串类型的名字,来唯一标识索引,服务器通过这个名字来删除或操作索引.默认情况下,索引名类似

```
keyname1_dir1_keyname2_dir2
```

这种形式,其中keyname代表索引的键,dir代表索引的方向(1或-1)。当然了，我们也可以通过ensureIndex来指定索引的名称：

```
db.blog.ensureIndex({"author.name":1},{"name":"author_name_index"})
```
注意一点，自定义的索引名称是不能修改的，只能通过删除索引再重建。

------
##**唯一索引**
唯一索引可以确保集合的每一个文档的指定键都有唯一值.如果想保证文档的username键都有不同的值:

```
db.lf.ensureIndex({"username":1},{"unique":true})
```
默认情况下，insert并不会去检测文档是否插入过，所以为了避免插入的文档包含与唯一键重复的值，可能要用到安全插入才能满足要求。

------
##**消除重复**
当我们为已有的集合创建唯一索引的时候，可能有些值已经重复了，所以会创建失败。我们可能会希望价格所有包含重复值的文档都删掉，这个时候我们就可以使用dropDups方法，来保留发现的第一个文档而删除接下来的有重复值的文档：

```
db.lf.ensureIndex({"username":1},{"unique":true,"dropDups":true})
```
当然了，如果是重要数据，这样做未免显得有些鲁莽，还是写个脚本预处理比较好。

