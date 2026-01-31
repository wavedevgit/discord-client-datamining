// ../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var8 = var3.TurboModuleRegistry;
    var3 = {};
    var4 = 'SPEAKERPHONE';
    var3.SPEAKERPHONE = var4;
    var4 = 'WIRED_HEADSET';
    var3.WIRED_HEADSET = var4;
    var4 = 'EARPIECE';
    var3.EARPIECE = var4;
    var4 = 'BLUETOOTH_HEADSET';
    var3.BLUETOOTH_HEADSET = var4;
    var4 = 'INVALID';
    var3.INVALID = var4;
    var _closure1_slot0 = var3;
    var5 = var8.getEnforcing;
    var4 = 'NativeAudioManagerModule';
    var4 = var5.bind(var8)(var4);
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.AudioDeviceType = var3;
    var1 = function() {
        var0 = {
            'deviceType': 0,
            'simpleDeviceType': null,
            'deviceId': 4294967295,
            'deviceName': 'Invalid'
        };
        var1 = _closure1_slot0;
        var1 = var1.INVALID;
        var0.simpleDeviceType = var1;
        return var0;
    };
    var2.getInvalidAndroidDevice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);