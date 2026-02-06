// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var3 = true;
    var1.value = var3;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var0 = undefined;
    var2.PLAY_MODE = var0;
    var2.PAUSE_MODE = var0;
    var2.MUTE_MODE = var0;
    var2.UNMUTE_MODE = var0;
    var2.PLAYER_STATES_NAMES = var0;
    var2.PLAYER_STATES = var0;
    var2.PLAYER_ERROR_NAMES = var0;
    var2.PLAYER_ERROR = var0;
    var2.CUSTOM_USER_AGENT = var0;
    var2.DEFAULT_BASE_URL = var0;
    var2.PLAY_MODE = var3;
    var1 = false;
    var2.PAUSE_MODE = var1;
    var2.MUTE_MODE = var3;
    var2.UNMUTE_MODE = var1;
    var3 = {
        'UNSTARTED': 'unstarted',
        'ENDED': 'ended',
        'PLAYING': 'playing',
        'PAUSED': 'paused',
        'BUFFERING': 'buffering',
        'VIDEO_CUED': 'video cued'
    };
    var2.PLAYER_STATES_NAMES = var3;
    var1 = {};
    var4 = var3.UNSTARTED;
    var1['-1'] = var4;
    var4 = var3.ENDED;
    var1[0] = var4;
    var4 = var3.PLAYING;
    var1[1] = var4;
    var4 = var3.PAUSED;
    var1[2] = var4;
    var4 = var3.BUFFERING;
    var1[3] = var4;
    var3 = var3.VIDEO_CUED;
    var1[5] = var3;
    var2.PLAYER_STATES = var1;
    var3 = {
        'INVALID_PARAMETER': 'invalid_parameter',
        'HTML5_ERROR': 'HTML5_error',
        'VIDEO_NOT_FOUND': 'video_not_found',
        'EMBED_NOT_ALLOWED': 'embed_not_allowed'
    };
    var2.PLAYER_ERROR_NAMES = var3;
    var1 = {};
    var4 = var3.INVALID_PARAMETER;
    var1[2] = var4;
    var4 = var3.HTML5_ERROR;
    var1[5] = var4;
    var4 = var3.VIDEO_NOT_FOUND;
    var1[100] = var4;
    var4 = var3.EMBED_NOT_ALLOWED;
    var1[101] = var4;
    var3 = var3.EMBED_NOT_ALLOWED;
    var1[150] = var3;
    var2.PLAYER_ERROR = var1;
    var1 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36';
    var2.CUSTOM_USER_AGENT = var1;
    var1 = 'https://lonelycpp.github.io/react-native-youtube-iframe/iframe.html';
    var2.DEFAULT_BASE_URL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);