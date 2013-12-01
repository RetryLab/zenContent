#db Schema

User
===============

```
uuid: {
	name: '',
	password: md5(''+ salt),
	email: '',
	created: time,
	updated: time
}

```


product
===============


```
uuid: {
	name: '',
	catID: ObjectId(''),
	gallery:[''],
	description: '',
	content: '',
	created: time,
	createdIP: '',
	createdBy: uuid,
	updated: time,
	updatedIP: '',
	updatedBy: uuid	
}

```


category
===========

```
{ "_id" : ObjectId("4f5ec858eb03303a11000002"),
  "name" : "Modal Jazz",
  "parent" : ObjectId("4f5ec858eb03303a11000001"),
  "slug" : "modal-jazz",
  "ancestors" : [
         { "_id" : ObjectId("4f5ec858eb03303a11000001"),
        "slug" : "bop",
        "name" : "Bop" },
         { "_id" : ObjectId("4f5ec858eb03303a11000000"),
           "slug" : "ragtime",
           "name" : "Ragtime" } ]
}

```


file
===========

* including big pdf file, small photo
* /file/b_uuid
* /file/s_uuid

```
fileIndex: {
	fileID:'',
	isUsed: false,
	isGfs: false,
	content: Binary
	fileName: ''
}
```

if more than 15 MB

```
GridFS: {}

```


