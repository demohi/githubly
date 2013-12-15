/**
 * Created by mdemo on 13-12-15.
 */
//just name
var request = require('request');
var cheerio = require('cheerio');
exports.request = function(options,callback){
    var url = 'https://github.com/trending';
    if(options.language){
        url += ('?l=' + options.language);
    }
    else if(options.since){
        url += ('?since='+ options.since)
    }
    if(options.language && options.since){
        url += ('&since=' + options.since)
    }
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            var owners = $('.owner-name');
            var repositories = $('.repository-name strong');
            var results = [];
            console.log(owners.length)
            for(var i=0;i<owners.length;i++){
                    results[i] = owners[i].children[0].data + '/' + repositories[i].children[0].data;
            }
            callback(null,results);
        }
        else{
            callback(error);
        }
    })
}