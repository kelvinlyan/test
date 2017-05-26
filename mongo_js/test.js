IP = "127.0.0.1:27017";
DB_Name = "test";
Config = {
	user : "user",
	pwd : "passwd",
	mechanism : "MONGODB-CR",
	digestPassword: false
};

URL = "mongodb://user:passwd@127.0.0.1:27017/test?authMechanism=MONGODB-CR";

// connection method 1:
var conn1 = new Mongo(IP).getDB(DB_Name);
conn1.auth(Config);

// connection method 2:
var conn2 = connect(URL);

