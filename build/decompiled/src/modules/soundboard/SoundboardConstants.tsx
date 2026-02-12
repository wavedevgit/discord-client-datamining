// modules/soundboard/SoundboardConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var4 = {};
    var1 = 0;
    var4.SUCCESS = var1;
    var3 = 'SUCCESS';
    var4[var1] = var3;
    var5 = 1;
    var4.INTERRUPTED = var5;
    var3 = 'INTERRUPTED';
    var4[var5] = var3;
    var5 = var0.Set;
    var3 = var4.SUCCESS;
    var0 = new Array(2);
    var0[0] = var3;
    var3 = var4.INTERRUPTED;
    var0[1] = var3;
    var3 = var5.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var10 = var3;
    var9 = var0;
    var0 = new var10[var5](var9, var8);
    var3 = var0 instanceof Object ? var0 : var3;
    var0 = dependencyMap;
    var5 = var0[var1];
    var1 = require;
    var0 = undefined;
    var6 = var1.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var1 = 'modules/soundboard/SoundboardConstants.tsx';
    var1 = var5.bind(var6)(var1);
    var1 = 32;
    var2.MAX_LENGTH_SOUND_NAME = var1;
    var1 = 512;
    var2.MAX_SOUND_FILE_SIZE_KILO_BYTES = var1;
    var1 = 524288;
    var2.MAX_SOUND_FILE_SIZE_BYTES = var1;
    var1 = 5;
    var2.MAX_SOUND_LENGTH_SECONDS = var1;
    var1 = '0';
    var2.DEFAULT_SOUND_GUILD_ID = var1;
    var2.SoundboardPlaybackStatus = var4;
    var2.SUCCESSFUL_SOUNDBOARD_PLAYBACKS = var3;
    var3 = {
        'width': 424,
        'height': 424,
        'padding': 100
    };
    var2.SoundboardWheelSize = var3;
    var3 = 'ctrl+`';
    var2.DEFAULT_KEYBIND = var3;
    var3 = new Array(0);
    var2.EMPTY_SOUND_LIST = var3;
    var2.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);