本文主要介绍MongoDB数据库增删改查操作。

------
##**增**##
mongoDB和其他关系型数据库一样，通过insert来增加数据到集合中去。
![这里写图片描述](http://img.blog.csdn.net/20150812145514308)


```
db.collectionName.insert(内容)
```

显示数据库中所有集合：

```
show collections
```
![这里写图片描述](http://img.blog.csdn.net/20150812145658877)

------
##**删**##

MongoDB中通过remove来删除集合中符合一定条件的文档。
remove接受一个参数，作为寻找要删除文档的条件：
![这里写图片描述](http://img.blog.csdn.net/20150812150029100)

当然了，也可以直接删除一整个集合，通过drop方法：

```
db.person.drop()
```
![这里写图片描述](http://img.blog.csdn.net/20150812150404502)

删除集合然后重建索引比删除集合中所有的文档速度要快。

------
##**改**##
修改操作相比增加和删除而言较为复杂，因为MongoDB不仅仅可以使用update方法，还可以使用很多的辅助修改器，我们先来说说update方法。
###**update**###
update方法接受两个参数，第一个是找到文档的限定条件，第二个需要修改的新文档：

![这里写图片描述](http://img.blog.csdn.net/20150812150917186)

上面update中的`({“name”:”liufang”},post)`,中的`name:liufang`相当于关系型数据库中的where中的判断条件，而post则相对于set语句后的执行内容。

更新最简单的就是使用一个新文档来替代匹配的文档,这适用于模式结构发生较大变化的时候.如将下面的文档：

```
{
　　"name":"tyq",
　　"age":22,
　　“date”:new Date()
}

```

修改为：

```
{
　　"name":"tyq",
	“age”:22,
	“friends”:”liufang”
}

```
如下图：
![这里写图片描述](http://img.blog.csdn.net/20150812151214356)

###**修改器**###
再来谈谈MongoDB强大的**修改器**。
MongoDB有着一些辅助**修改器**，比如$inc,$set,$unset,$unset,$push,$pop,$addToset,$each等等。我们来一一介绍：

####**$inc**####
$inc用来增加和减少键或者值。
当其用来增加已有键的值时，如果不存在键，就增加该键。通常用于分析数据，投票等位置。如：

```
db.person.insert(
　　{"url":"blog.csdn.net/mevicky"}
)

```

使用$inc增加一个键pageViews，默认值为10000

```
db.person.update(
　　{"url":"blog.csdn.net/mevicky"},
　　{"$inc":{"pageViews":10000}}
)

```
使用$inc给键pageViews再添加10000

```
db.person.update(
　　{"url":"blog.csdn.net/mevicky"},
　　{"$inc":{"pageViews":10000}}
)

```
也可以使用$inc给键pageViews减少10000

```
db.person.update(
　　{"url":"blog.csdn.net/mevicky"},
　　{"$inc":{"pageViews":-10000}}
)

```
示例如下：
![这里写图片描述](http://img.blog.csdn.net/20150812152133142)


####**$set**####
$set用来指定一个键的值，如果键不存在，则创建该键，一般用于更新值或者增加新定义的键。如：

```
db.person.insert(
　　{
　　　　"name":"lf",
　　　　"age":23,
　　　　"sex":"male"
　　}
)

```
添加喜欢的书籍：

```
db.person.update(
　　{
　　　　"name":"lf"
　　},
　　{
　　　　"$set":{"book":"war and peace"}
　　}
)

```
修改喜欢的书籍：

```
db.person.update(
　　{
　　　　"name":"lf"
　　},
　　{
　　　　"$set":{"book":"war and peace2"}
　　}
)

```
示例如下：
![这里写图片描述](http://img.blog.csdn.net/20150812152436446)

####**$unset**####
$unset用于将键删除，如果没有找到也不会报错。

```
db.person.update(
　　{
　　　　"name":"lf"
　　},
　　{
　　　　"$unset":{"book":1}
　　}
)

```

####**$push**####
$push和$pop只能用在数组类型，如果指定的键已存在，$push会向已有数组的末尾加入一个元素，如果键不存在，就创建一个新数组。
例如，向以上文档中,添加一个包含一个数组的"comment"键,还向 comment 数组push一个评论.
这个数组会自动创建,并加入评论:

```
db.person.update(
　　{"name":"lf"},
　　{	
　　　　$push:
　　　　{
　　　　　　"comments":
　　　　　　{
　　　　　　　　"name":"tyq",
　　　　　　　　"content":"nice"
　　　　　　}
　　　　}
　　}
)

```

示例如下：
![这里写图片描述](http://img.blog.csdn.net/20150812152749785)

####**$pop**####
$pop和$push类似，只不过其是从数组删除元素，其可以从数组任何一端删除元素：

```
{$pop:{key:1}}//从数组末尾删除一个元素
{$pop:{key:-1}}//从数组头部删除一个元素

```

####**$pull**####
$pull可以根据指定的特定条件删除元素，也可以根据位置删除元素：

```
db.person.update(
　　{"name":"lf"},
　　{
　　　　"$pull":
　　　　{
　　　　　　"emails":"362512489@qq.com"
　　　　}
　　}
)

```

$pull会将所有匹配的部分删掉，比如数组【1,2,3,4,4,4】，执行pull 4后，得到的数组是【1,2,3】

####**$addToSet**####
$addToSet用于向数组添加数据，如果数组中有，则不再重复添加。
####**$each**####

$each用来运行修改器向集合多次操作数据，可以利用`$addToSet`和`$each`一起来添加不同的值：

```
db.users.update(
　　{"name":"lf"},
　　{
　　　　"$addToSet":
　　　　{
　　　　　　"emails":
　　　　　　{
　　　　　　　　"$each":
　　　　　　　　[
　　　　　　　　　　"362512489@111.com",
　　　　　　　　　　"362512489@112.com",
　　　　　　　　　　"362512489@113.com"
　　　　　　　　]
　　　　　　}
　　　　}
　　}
)

```
这里只介绍了一部分修改器，如果想了解所有的修改器可以查阅官方文档：
[修改器介绍](https://docs.mongodb.org/manual/reference/operator/update/)
