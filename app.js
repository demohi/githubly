/**
 * Created by mdemo on 13-12-15.
 */
var leaderboard = require('./lib/leaderboard');

var js_daily = leaderboard.request({language:'javascript',since:'daily'},function(err,results){
    if(!err){
        console.log(results);
    }
});