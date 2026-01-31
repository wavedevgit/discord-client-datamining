// modules/user_settings/native/defs/StreamOutputVolumeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: getActiveApplicationStream, environment: var7
        _fun84354: for (var _fun84354_ip = 0;;) switch (_fun84354_ip) {
            case 0:
                var1 = arguments[0];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun84354_ip = 35;
                    continue _fun84354
                }
            case 9:
                var3 = _closure1_slot3;
                var0 = new Array(2);
                var0[0] = var3;
                var2 = _closure1_slot4;
                var0[1] = var2;
                var1 = var0;
            case 35:
                var3 = var1;
                var0 = var3[Symbol.iterator];
                var3 = var0().next;
                var4 = var3().value;
                var1 = var0;
                var2 = var1 === var6;
                var1 = undefined;
                if (var2) {
                    _fun84354_ip = 60;
                    continue _fun84354
                }
            case 57:
                var1 = var4;
            case 60:
                var5 = undefined;
                if (var2) {
                    _fun84354_ip = 90;
                    continue _fun84354
                }
            case 65:
                var4 = var3().value;
                var3 = var0;
                var3 = var3 === var6;
                var5 = undefined;
                var2 = var3;
                if (var3) {
                    _fun84354_ip = 90;
                    continue _fun84354
                }
            case 84:
                var5 = var4;
                var2 = var3;
            case 90:
                if (var2) {
                    _fun84354_ip = 96;
                    continue _fun84354
                }
            case 93:
                var0.return();
            case 96:
                var0 = var1.getLastActiveStream;
                var1 = var0.bind(var1)();
                var4 = null;
                var2 = var4 != var1;
                var0 = null;
                if (!var2) {
                    _fun84354_ip = 142;
                    continue _fun84354
                }
            case 117:
                var3 = var1.ownerId;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun84354_ip = 142;
                    continue _fun84354
                }
            case 139:
                var0 = var1;
            case 142:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createVolumeSlider;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.pEAl4b;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.VOICE;
    var1.parent = var8;
    var8 = 200;
    var1.maximum = var8;
    var8 = function() { // Original name: useStreamVolumeSettingValue, environment: var7
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(3);
        var1[0] = var4;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = _closure1_slot5;
        var1[2] = var0;
        var0 = function() { // Environment: var0
            _fun84357: for (var _fun84357_ip = 0;;) switch (_fun84357_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var3 = _closure1_slot3;
                    var0 = new Array(2);
                    var0[0] = var3;
                    var3 = _closure1_slot4;
                    var0[1] = var3;
                    var6 = undefined;
                    var2 = var2.bind(var6)(var0);
                    var0 = null;
                    var3 = var0 != var2;
                    var0 = 0;
                    if (!var3) {
                        _fun84357_ip = 99;
                        continue _fun84357
                    }
                case 45:
                    var4 = _closure1_slot5;
                    var3 = var4.getLocalVolume;
                    var2 = var2.ownerId;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 5;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.MediaEngineContextTypes;
                    var1 = var1.STREAM;
                    var0 = var3.bind(var4)(var2, var1);
                case 99:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: onStreamValueSettingValueChange, environment: var7
        var2 = _closure1_slot6;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var3 = var6[var3];
        var7 = var4.bind(var0)(var3);
        var3 = null;
        var5 = var3 != var2;
        var3 = 'Can not set stream volume without active stream';
        var3 = var7.bind(var0)(var5, var3);
        var3 = 7;
        var3 = var6[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.setLocalVolume;
        var3 = var2.ownerId;
        var2 = _closure1_slot0;
        var1 = 5;
        var1 = var6[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.MediaEngineContextTypes;
        var2 = var1.STREAM;
        var1 = arg0;
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var1.onValueChange = var8;
    var8 = function() { // Original name: useHasStreamVolumeSetting, environment: var7
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot4;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var3 = _closure1_slot3;
            var1 = new Array(2);
            var1[0] = var3;
            var0 = _closure1_slot4;
            var1[1] = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.usePredicate = var8;
    var7 = function() { // Original name: additionalSearchTerms, environment: var7
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var0 = var6[var1];
        var4 = undefined;
        var0 = var5.bind(var4)(var0);
        var3 = var0.intl;
        var2 = var3.string;
        var0 = var6[var1];
        var0 = var5.bind(var4)(var0);
        var0 = var0.t;
        var0 = var0["3182VD"];
        var2 = var2.bind(var3)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["DGq/PR"];
        var1 = var2.bind(var3)(var1);
        var0[1] = var1;
        return var0;
    };
    var1.additionalSearchTerms = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/StreamOutputVolumeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3673, 1216, 3435, 6967, 566, 3592, 44, 8169, 8943, 1234, 2]);