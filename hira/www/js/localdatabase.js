//DATA BASE VARIABLE
var db = openDatabase('Hiramanek', '1.0', 'Hiramanek DB', 2 * 1024 * 1024);
//Creating Tables
db.transaction(function (ax) {
    ax.executeSql('Create table if not exists `bookmark`( news_id integer primary key,shortheadline varchar, artical text, headLine varchar, photo varchar, userid integer, timestamp timestamp, authorname varchar, language integer)');
    //ax.executeSql('Drop table bookmark');
});
var mydatabase = angular.module('Mydatabase', ['starter.controllers'])
    .factory('MyDatabase', function ($location, MyServices, $cordovaNetwork, $interval) {

        return {

            saveintobookmark: function (bookmarkdata, userid, scope) {
                db.transaction(function (tx) {
                    tx.executeSql("INSERT INTO bookmark(news_id,headLine,shortheadline,artical,photo,timestamp,authorname,userid, language) VALUES(?,?, ?,?,?,?,?,?,?)", [bookmarkdata.id, bookmarkdata.headLine, bookmarkdata.shortheadline, bookmarkdata.artical, bookmarkdata.photo, bookmarkdata.timeStamp, bookmarkdata.authorname, userid, bookmarkdata.language], function (tx, results) {
                        scope.showsuccesspop('Your news successfully saved !');
                    }, function (tx, results) {
                        console.log(results);
                        scope.showsuccesspop('Problems in saving this news !');
                    });

                });

            },
            getbookmarks: function (scope) {
                db.transaction(function (tx) {
                    tx.executeSql("SELECT * FROM `bookmark`", [], function (tx, results) {
                        var data = [];
                        for(var i=0; i<results.rows.length; i++)
                        {
                            console.log(results.rows.item(i));
                            data.push(results.rows.item(i));
                        };
                        
                        scope.bookmarknews(data);
                    }, function (tx, results) {
                        //scope.showsuccesspop('Problems in getting bookmarks !');
                    });

                });
            },









        }

    });