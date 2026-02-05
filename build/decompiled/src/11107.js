// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var3);
    var3 = global;
    var9 = var3.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var3 = true;
    var5.value = var3;
    var3 = '__esModule';
    var3 = var6.bind(var9)(var2, var3, var5);
    var2.PLAYER_FUNCTIONS = var0;
    var2.playMode = var0;
    var2.soundMode = var0;
    var2.MAIN_SCRIPT = var0;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var6 = var4.bind(var0)(var3);
    var4 = {
        'muteVideo': 'player.mute(); true;',
        'unMuteVideo': 'player.unMute(); true;',
        'playVideo': 'player.playVideo(); true;',
        'pauseVideo': 'player.pauseVideo(); true;',
        'getVideoUrlScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getVideoUrl', data: player.getVideoUrl()}));\ntrue;\n  ",
        'durationScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getDuration', data: player.getDuration()}));\ntrue;\n",
        'currentTimeScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getCurrentTime', data: player.getCurrentTime()}));\ntrue;\n",
        'isMutedScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'isMuted', data: player.isMuted()}));\ntrue;\n",
        'getVolumeScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getVolume', data: player.getVolume()}));\ntrue;\n",
        'getPlaybackRateScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getPlaybackRate', data: player.getPlaybackRate()}));\ntrue;\n",
        'getAvailablePlaybackRatesScript': "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getAvailablePlaybackRates', data: player.getAvailablePlaybackRates()}));\ntrue;\n"
    };
    var3 = function arg0() {
        var1 = 'player.setVolume(';
        var0 = arg0;
        var1 = var1 + var0;
        var0 = '); true;';
        var0 = var1 + var0;
        return var0;
    };
    var4.setVolume = var3;
    var3 = function arg0, arg1() {
        var1 = 'player.seekTo(';
        var0 = arg0;
        var1 = var1 + var0;
        var0 = ', ';
        var1 = var1 + var0;
        var0 = arg1;
        var1 = var1 + var0;
        var0 = '); true;';
        var0 = var1 + var0;
        return var0;
    };
    var4.seekToScript = var3;
    var3 = function arg0() {
        var1 = 'player.setPlaybackRate(';
        var0 = arg0;
        var1 = var1 + var0;
        var0 = '); true;';
        var0 = var1 + var0;
        return var0;
    };
    var4.setPlaybackRate = var3;
    var3 = function arg0, arg1, arg2() {
        _fun86076: for (var _fun86076_ip = 0;;) switch (_fun86076_ip) {
            case 0:
                var7 = arg0;
                var1 = arg1;
                if (var1) {
                    _fun86076_ip = 11;
                    continue _fun86076
                }
            case 9:
                var1 = 0;
            case 11:
                var5 = 'cuePlaylist';
                var0 = arg2;
                if (!var0) {
                    _fun86076_ip = 27;
                    continue _fun86076
                }
            case 23:
                var5 = 'loadPlaylist';
            case 27:
                var2 = 'string';
                var0 = typeof var7;
                var0 = var2 === var0;
                var2 = 'undefined';
                var3 = var2;
                if (!var0) {
                    _fun86076_ip = 60;
                    continue _fun86076
                }
            case 48:
                var6 = '"';
                var4 = var6 + var7;
                var3 = var4 + var6;
            case 60:
                var4 = var2;
                if (!var0) {
                    _fun86076_ip = 72;
                    continue _fun86076
                }
            case 66:
                var4 = '"undefined"';
            case 72:
                var0 = global;
                var6 = var0.Array;
                var0 = var6.isArray;
                var0 = var0.bind(var6)(var7);
                if (!var0) {
                    _fun86076_ip = 119;
                    continue _fun86076
                }
            case 93:
                var6 = var7.join;
                var0 = ',';
                var0 = var6.bind(var7)(var0);
                var6 = '"';
                var0 = var6 + var0;
                var2 = var0 + var6;
            case 119:
                var0 = 'player.';
                var5 = var0 + var5;
                var0 = '({listType: ';
                var0 = var5 + var0;
                var4 = var0 + var4;
                var0 = ', list: ';
                var0 = var4 + var0;
                var3 = var0 + var3;
                var0 = ', playlist: ';
                var0 = var3 + var0;
                var2 = var0 + var2;
                var0 = ', index: ';
                var0 = var2 + var0;
                var1 = var0 + var1;
                var0 = '}); true;';
                var0 = var1 + var0;
                return var0;
        }
    };
    var4.loadPlaylist = var3;
    var3 = function arg0, arg1() {
        _fun86077: for (var _fun86077_ip = 0;;) switch (_fun86077_ip) {
            case 0:
                var2 = 'cueVideoById';
                var0 = arg1;
                if (!var0) {
                    _fun86077_ip = 16;
                    continue _fun86077
                }
            case 12:
                var2 = 'loadVideoById';
            case 16:
                var0 = global;
                var3 = var0.JSON;
                var1 = var3.stringify;
                var0 = arg0;
                var1 = var1.bind(var3)(var0);
                var0 = 'player.';
                var2 = var0 + var2;
                var0 = '({videoId: ';
                var0 = var2 + var0;
                var1 = var0 + var1;
                var0 = '}); true;';
                var0 = var1 + var0;
                return var0;
        }
    };
    var4.loadVideoById = var3;
    var2.PLAYER_FUNCTIONS = var4;
    var3 = {};
    var11 = var6.default;
    var5 = 2;
    var9 = var8[var5];
    var9 = var7.bind(var0)(var9);
    var10 = var9.PLAY_MODE;
    var9 = var4.playVideo;
    var9 = var11.bind(var0)(var3, var10, var9);
    var11 = var6.default;
    var9 = var8[var5];
    var9 = var7.bind(var0)(var9);
    var10 = var9.PAUSE_MODE;
    var9 = var4.pauseVideo;
    var9 = var11.bind(var0)(var3, var10, var9);
    var2.playMode = var3;
    var3 = {};
    var11 = var6.default;
    var9 = var8[var5];
    var9 = var7.bind(var0)(var9);
    var10 = var9.MUTE_MODE;
    var9 = var4.muteVideo;
    var9 = var11.bind(var0)(var3, var10, var9);
    var6 = var6.default;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.UNMUTE_MODE;
    var4 = var4.unMuteVideo;
    var4 = var6.bind(var0)(var3, var5, var4);
    var2.soundMode = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun86078: for (var _fun86078_ip = 0;;) switch (_fun86078_ip) {
            case 0:
                var18 = arg0;
                var21 = arg1;
                var4 = arg2;
                var0 = arg3;
                var1 = arg4;
                var16 = var4.end;
                var14 = var4.rel;
                var13 = var4.color;
                var12 = var4.start;
                var11 = var4.playerLang;
                var2 = var4.loop;
                var3 = undefined;
                var10 = var3 !== var2;
                if (!var10) {
                    _fun86078_ip = 60;
                    continue _fun86078
                }
            case 57:
                var10 = var2;
            case 60:
                var8 = var4.cc_lang_pref;
                var7 = var4.iv_load_policy;
                var9 = var4.modestbranding;
                var2 = var4.controls;
                var6 = var3 === var2;
                if (var6) {
                    _fun86078_ip = 98;
                    continue _fun86078
                }
            case 95:
                var6 = var2;
            case 98:
                var2 = var4.showClosedCaptions;
                var5 = var4.preventFullScreen;
                var15 = 0;
                if (!var14) {
                    _fun86078_ip = 120;
                    continue _fun86078
                }
            case 117:
                var15 = 1;
            case 120:
                var14 = 0;
                if (!var10) {
                    _fun86078_ip = 128;
                    continue _fun86078
                }
            case 125:
                var14 = 1;
            case 128:
                if (var18) {
                    _fun86078_ip = 135;
                    continue _fun86078
                }
            case 131:
                var18 = '';
            case 135:
                var10 = 0;
                if (!var6) {
                    _fun86078_ip = 143;
                    continue _fun86078
                }
            case 140:
                var10 = 1;
            case 143:
                if (var8) {
                    _fun86078_ip = 150;
                    continue _fun86078
                }
            case 146:
                var8 = '';
            case 150:
                var6 = 0;
                if (!var9) {
                    _fun86078_ip = 158;
                    continue _fun86078
                }
            case 155:
                var6 = 1;
            case 158:
                var17 = 1;
                var9 = var17;
                if (!(var3 !== var5)) {
                    _fun86078_ip = 176;
                    continue _fun86078
                }
            case 168:
                var9 = var17;
                if (!var5) {
                    _fun86078_ip = 176;
                    continue _fun86078
                }
            case 174:
                var9 = 0;
            case 176:
                var4 = 0;
                if (!var2) {
                    _fun86078_ip = 184;
                    continue _fun86078
                }
            case 181:
                var4 = var17;
            case 184:
                var5 = 'number';
                var2 = typeof var1;
                if (!(var5 === var2)) {
                    _fun86078_ip = 198;
                    continue _fun86078
                }
            case 195:
                var17 = var1;
            case 198:
                var2 = 'string';
                var1 = typeof var21;
                var1 = var2 === var1;
                var22 = undefined;
                if (!var1) {
                    _fun86078_ip = 217;
                    continue _fun86078
                }
            case 214:
                var22 = var21;
            case 217:
                var2 = undefined;
                if (!var1) {
                    _fun86078_ip = 228;
                    continue _fun86078
                }
            case 222:
                var2 = 'playlist';
            case 228:
                var1 = 'initial-scale=';
                var5 = var1 + var17;
                var19 = var5;
                if (var0) {
                    _fun86078_ip = 258;
                    continue _fun86078
                }
            case 244:
                var1 = ', maximum-scale=';
                var1 = var1 + var17;
                var19 = var5 + var1;
            case 258:
                var5 = {};
                var5.end = var16;
                var5.list = var22;
                var5.start = var12;
                var5.color = var13;
                var5.rel_s = var15;
                var5.loop_s = var14;
                var5.listType = var2;
                var1 = global;
                var23 = var1.Array;
                var20 = var23.isArray;
                var23 = var20.bind(var23)(var21);
                var20 = undefined;
                if (!var23) {
                    _fun86078_ip = 335;
                    continue _fun86078
                }
            case 321:
                var24 = var21.join;
                var23 = ',';
                var20 = var24.bind(var21)(var23);
            case 335:
                var5.playlist = var20;
                var5.videoId_s = var18;
                var5.controls_s = var10;
                var5.playerLang = var11;
                var5.iv_load_policy = var7;
                var5.contentScale_s = var17;
                var5.cc_lang_pref_s = var8;
                var5.allowWebViewZoom = var0;
                var5.modestbranding_s = var6;
                var5.preventFullScreen_s = var9;
                var5.showClosedCaptions_s = var4;
                var0 = {};
                var17 = '\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta\n      name="viewport"\n      content="width=device-width, ';
                var19 = var17 + var19;
                var17 = '"\n    >\n    <style>\n      body {\n        margin: 0;\n      }\n      .container {\n        position: relative;\n        width: 100%;\n        height: 0;\n        padding-bottom: 56.25%;\n      }\n      .video {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="video" id="player" />\n    </div>\n\n    <script>\n      var tag = document.createElement(\'script\');\n\n      tag.src = "https://www.youtube.com/iframe_api";\n      var firstScriptTag = document.getElementsByTagName(\'script\')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n\n      var player;\n      function onYouTubeIframeAPIReady() {\n        player = new YT.Player(\'player\', {\n          width: \'1000\',\n          height: \'1000\',\n          videoId: \'';
                var17 = var19 + var17;
                var20 = var17 + var18;
                var17 = '';
                var18 = var17;
                if (!var22) {
                    _fun86078_ip = 462;
                    continue _fun86078
                }
            case 442:
                var19 = "list: '";
                var23 = var19 + var22;
                var19 = "',";
                var18 = var23 + var19;
            case 462:
                var19 = var17;
                if (!var2) {
                    _fun86078_ip = 488;
                    continue _fun86078
                }
            case 468:
                var2 = "listType: '";
                var22 = var2 + var22;
                var2 = "',";
                var19 = var22 + var2;
            case 488:
                if (!var21) {
                    _fun86078_ip = 511;
                    continue _fun86078
                }
            case 491:
                var2 = "playlist: '";
                var21 = var2 + var21;
                var2 = "',";
                var17 = var21 + var2;
            case 511:
                var2 = "',\n          playerVars: {\n            ";
                var2 = var20 + var2;
                var2 = var2 + var18;
                var18 = '\n            ';
                var2 = var2 + var18;
                var2 = var2 + var19;
                var2 = var2 + var18;
                var17 = var2 + var17;
                var2 = '\n\n            end: ';
                var2 = var17 + var2;
                var16 = var2 + var16;
                var2 = ',\n            rel: ';
                var2 = var16 + var2;
                var15 = var2 + var15;
                var2 = ',\n            playsinline: 1,\n            loop: ';
                var2 = var15 + var2;
                var14 = var2 + var14;
                var2 = ',\n            color: ';
                var2 = var14 + var2;
                var13 = var2 + var13;
                var2 = ',\n            start: ';
                var2 = var13 + var2;
                var12 = var2 + var12;
                var2 = ',\n            hl: ';
                var2 = var12 + var2;
                var11 = var2 + var11;
                var2 = ',\n            controls: ';
                var2 = var11 + var2;
                var10 = var2 + var10;
                var2 = ',\n            fs: ';
                var2 = var10 + var2;
                var9 = var2 + var9;
                var2 = ",\n            cc_lang_pref: '";
                var2 = var9 + var2;
                var8 = var2 + var8;
                var2 = "',\n            iv_load_policy: ";
                var2 = var8 + var2;
                var7 = var2 + var7;
                var2 = ',\n            modestbranding: ';
                var2 = var7 + var2;
                var6 = var2 + var6;
                var2 = ',\n            cc_load_policy: ';
                var2 = var6 + var2;
                var4 = var2 + var4;
                var2 = ",\n          },\n          events: {\n            'onReady': onPlayerReady,\n            'onStateChange': onPlayerStateChange,\n            'onError': onPlayerError,\n            'onPlaybackQualityChange': onPlaybackQualityChange,\n            'onPlaybackRateChange': onPlaybackRateChange,\n          }\n        });\n      }\n\n      function onPlayerError(event) {\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerError', data: event.data}))\n      }\n\n      function onPlaybackRateChange(event) {\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playbackRateChange', data: event.data}))\n      }\n\n      function onPlaybackQualityChange(event) {\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerQualityChange', data: event.data}))\n      }\n\n      function onPlayerReady(event) {\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))\n      }\n\n      var done = false;\n      function onPlayerStateChange(event) {\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerStateChange', data: event.data}))\n      }\n\n      var isFullScreen = false;\n      function onFullScreenChange() {\n        isFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;\n        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'fullScreenChange', data: Boolean(isFullScreen)}));\n      }\n\n      document.addEventListener('fullscreenchange', onFullScreenChange)\n      document.addEventListener('mozfullscreenchange', onFullScreenChange)\n      document.addEventListener('msfullscreenchange', onFullScreenChange)\n      document.addEventListener('webkitfullscreenchange', onFullScreenChange)\n    </script>\n  </body>\n</html>\n";
                var2 = var4 + var2;
                var0.htmlString = var2;
                var2 = var1.encodeURI;
                var4 = var1.JSON;
                var1 = var4.stringify;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                var0.urlEncodedJSON = var1;
                return var0;
        }
    };
    var2.MAIN_SCRIPT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5432, 77, 11103]);