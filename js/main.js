/*
    Jessica J. Hernandez
    Full Sail University
    Rich Media Optimization
    201511-01 Online
    Week 4 Assignment: Final Project
*/

$(document).ready(function() {
    
    $('audio,video').mediaelementplayer({
        //mode: 'shim',
        success: function(player, node) {
            $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
        }
    });
    
});