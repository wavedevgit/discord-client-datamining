// ../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var11 = global;
    var7 = var11.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var7 = var1.NativeEventEmitter;
    var1 = 1;
    var3 = var6[var1];
    var9 = var4.bind(var0)(var3);
    var3 = var9.getConstants;
    var9 = var3.bind(var9)();
    var _closure1_slot2 = var9;
    var3 = ['getConstants', 'setInputDevice', 'setInputDeviceById', 'setOutputDevice', 'setOutputDeviceById', 'setVideoInputDevice', 'setVideoInputDeviceById', 'addListener', 'removeListeners'];
    var _closure1_slot3 = var3;
    var3 = {};
    var18 = var3;
    var17 = var9;
    var9 = copyDataProperties(var18, var17);
    var10 = function() {
        var0 = _closure1_slot2;
        return var0;
    };
    var9 = 'getConstants';
    var3[var9] = var10;
    var10 = function arg0() {
        _fun30391: for (var _fun30391_ip = 0;;) switch (_fun30391_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun30391_ip = 52;
                    continue _fun30391
                }
            case 14:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.setInputDevice;
                var0 = var0.bind(var1)(var3);
                _fun30391_ip = 90;
                continue _fun30391;
            case 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.setInputDeviceById;
                var0 = var1.bind(var2)(var3);
            case 90:
                return var0;
        }
    };
    var9 = 'setInputDevice';
    var3[var9] = var10;
    var10 = function arg0() {
        _fun30392: for (var _fun30392_ip = 0;;) switch (_fun30392_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun30392_ip = 52;
                    continue _fun30392
                }
            case 14:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.setOutputDevice;
                var0 = var0.bind(var1)(var3);
                _fun30392_ip = 90;
                continue _fun30392;
            case 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.setOutputDeviceById;
                var0 = var1.bind(var2)(var3);
            case 90:
                return var0;
        }
    };
    var9 = 'setOutputDevice';
    var3[var9] = var10;
    var10 = function arg0() {
        _fun30393: for (var _fun30393_ip = 0;;) switch (_fun30393_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun30393_ip = 52;
                    continue _fun30393
                }
            case 14:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.setVideoInputDevice;
                var0 = var0.bind(var1)(var3);
                _fun30393_ip = 90;
                continue _fun30393;
            case 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.setVideoInputDeviceById;
                var0 = var1.bind(var2)(var3);
            case 90:
                return var0;
        }
    };
    var9 = 'setVideoInputDevice';
    var3[var9] = var10;
    var10 = var11.Object;
    var9 = var10.fromEntries;
    var13 = var11.Object;
    var12 = var13.keys;
    var15 = var11.Object;
    var14 = var15.getPrototypeOf;
    var11 = var6[var1];
    var11 = var4.bind(var0)(var11);
    var11 = var14.bind(var15)(var11);
    var13 = var12.bind(var13)(var11);
    var12 = var13.filter;
    var11 = function(arg0) { // Environment: var8
        var2 = _closure1_slot3;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = !var0;
        return var0;
    };
    var12 = var12.bind(var13)(var11);
    var11 = var12.map;
    var8 = function(arg0) { // Environment: var8
        var2 = arg0;
        var _closure2_slot0 = var2;
        var0 = new Array(2);
        var0[0] = var2;
        var1 = function(arg0) { // Environment: var1
            var7 = 0;
            var6 = copyRestArgs(var7);
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var0 = _closure2_slot0;
            var1 = var2[var0];
            var0 = new Array(0);
            var7 = var0;
            var5 = 0;
            var3 = arraySpread(var7, var6, var5);
            var7 = var1;
            var6 = var0;
            var5 = var2;
            var0 = apply(var7, var6, var5);
            return var0;
        };
        var0[1] = var1;
        return var0;
    };
    var8 = var11.bind(var12)(var8);
    var17 = var9.bind(var10)(var8);
    var18 = var3;
    var8 = copyDataProperties(var18, var17);
    var1 = var6[var1];
    var18 = var4.bind(var0)(var1);
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var19 = var4;
    var1 = new var19[var7](var18, var17);
    var1 = var1 instanceof Object ? var1 : var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VoiceEngine = var3;
    var2.VoiceEngineEmitter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3442, 2]);