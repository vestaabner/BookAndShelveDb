db.createCollection('Persons')
db.createCollection('Book')
db.createCollection('Shelve')
db.createCollection('Librery')


show collections


db.Persons.insertOne({
    'Name': 'ahmadreza',
    'PhoneNumber': '093388383838',
    'age': 22
})
db.Persons.insertMany([{
    'Name': 'ahmadreza1',
    'PhoneNumber': '093389383838'
}, {
    'Name': 'ahmadreza3',
    'PhoneNumber': '0393388383838',
    'city': 'tehran'
}, {
    'Name': 'ahmadreza4',
    'PhoneNumber': '0943388383838'
}])




db.Persons.find({
    'age': 22
})

db.Persons.findOne()

db.Persons.find({
    'age': {
        $gt: 20
    }
})

db.Book.insertMany(
    [{
        'Name': 'Book1',
        'author': 'author1',
        'Description': 'addksdjs hshaschs sushxasi scschhc scus '
    }, {
        'Name': 'Book2',
        'author': 'author2'
    }, {
        'Name': 'Book3',
        'author': 'author3',
        'Description': 'addksdjs hshaschs sushxasi scschhc scus3 '
    }, {
        'Name': 'Book4'
    }]
)

db.Book.find()

db.Shelve.insertMany(
    [{
        'Name': 'Lovely',
        'Books': ['60b32baa285900009f005e40', '60b32baa285900009f005e41', '60b32baa285900009f005e3f']
    }, {
        'Name': 'sher',
        'Books': ['60b32baa285900009f005e3e', '60b32ba6285900009f005e3d', '60b32ba6285900009f005e3c']
    }, {
        'Name': 'adbiyat',
        'Books': ['60b32ba6285900009f005e3a', '60b32ba6285900009f005e3b']
    }]
)

db.Shelve.find()

db.Librery.insertOne(
    {
        "OwnerId": "60b327a3285900009f005e36",
        "shelveIds": ["60b32de8285900009f005e42", "60b32de8285900009f005e43", "60b32de8285900009f005e44"]
    }
)


db.Librery.findOne({
    "OwnerId": "60b327a3285900009f005e36"
})
