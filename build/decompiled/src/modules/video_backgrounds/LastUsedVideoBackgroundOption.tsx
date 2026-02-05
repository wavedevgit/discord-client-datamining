// modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun66615: for (var _fun66615_ip = 0;;) switch (_fun66615_ip) {
            case 0:
                var6 = arg1;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var2 = var0[var5];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var8 = var9.getVideoBackgroundOptionFromProto;
                var7 = var6.id;
                var2 = arg0;
                var2 = var8.bind(var9)(var2, var7);
                var0 = var0[var5];
                var3 = var3.bind(var4)(var0);
                var0 = var3.isCustomBackgroundOption;
                var0 = var0.bind(var3)(var2);
                if (!var0) {
                    _fun66615_ip = 107;
                    continue _fun66615
                }
            case 71:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.canUseCustomBackgrounds;
                var3 = var0.bind(var3)(var6);
                var0 = null;
                if (!var3) {
                    _fun66615_ip = 157;
                    continue _fun66615
                }
            case 107:
                var6 = 'number';
                var3 = typeof var2;
                if (!(var6 === var3)) {
                    _fun66615_ip = 151;
                    continue _fun66615
                }
            case 118:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isDefaultBackgroundOption;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!var3) {
                    _fun66615_ip = 154;
                    continue _fun66615
                }
            case 151:
                var1 = var2;
            case 154:
                var0 = var1;
            case 157:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun66616: for (var _fun66616_ip = 0;;) switch (_fun66616_ip) {
            case 0:
                var3 = _closure1_slot6;
                var0 = _closure1_slot4;
                var0 = var0.settings;
                var0 = var0.voiceAndVideo;
                var1 = null;
                var4 = var1 == var0;
                var2 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun66616_ip = 42;
                    continue _fun66616
                }
            case 36:
                var1 = var0.videoBackgroundFilterDesktop;
            case 42:
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.getLastUsedVideoBackgroundOption = var3;
    var1 = function() {
        _fun66617: for (var _fun66617_ip = 0;;) switch (_fun66617_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var5 = undefined;
                var9 = var4.bind(var5)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.settings;
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var3 = var6[var3];
                var7 = var4.bind(var5)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var3);
                var _closure2_slot0 = var4;
                var2 = var2.voiceAndVideo;
                var3 = null;
                var3 = var3 == var2;
                if (var3) {
                    _fun66617_ip = 121;
                    continue _fun66617
                }
            case 115:
                var5 = var2.videoBackgroundFilterDesktop;
            case 121:
                var _closure2_slot1 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun66620: for (var _fun66620_ip = 0;;) switch (_fun66620_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun66620_ip = 39;
                                continue _fun66620
                            }
                        case 16:
                            var4 = _closure1_slot6;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 39:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useLastUsedVideoBackgroundOption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 1621, 8237, 3109, 566, 2]);