// modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MEDIA_MODAL_KEY;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot6 = var6;
    var6 = var3.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var _closure1_slot7 = var6;
    var3 = var3.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100029: for (var _fun100029_ip = 0;;) switch (_fun100029_ip) {
            case 0:
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.shouldDisableSafeAreas;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var4.bind(var3)(var2);
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useOpenModalKey;
                var8 = var2.bind(var4)();
                var2 = null;
                var4 = var2 != var8;
                if (!var4) {
                    _fun100029_ip = 149;
                    continue _fun100029
                }
            case 66:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isVoiceChannelModalKey;
                var2 = var2.bind(var6)(var8);
                if (var2) {
                    _fun100029_ip = 146;
                    continue _fun100029
                }
            case 100:
                var6 = _closure1_slot5;
                var7 = new Array(4);
                var7[0] = var6;
                var6 = _closure1_slot6;
                var7[1] = var6;
                var6 = _closure1_slot8;
                var7[2] = var6;
                var6 = _closure1_slot7;
                var7[3] = var6;
                var6 = var7.includes;
                var2 = var6.bind(var7)(var8);
            case 146:
                var4 = var2;
            case 149:
                var _closure2_slot1 = var4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var _closure2_slot2 = var6;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun100031: for (var _fun100031_ip = 0;;) switch (_fun100031_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = !var0;
                            if (!var3) {
                                _fun100031_ip = 20;
                                continue _fun100031
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            var3 = !var0;
                        case 20:
                            var0 = {};
                            var5 = _closure2_slot0;
                            var4 = undefined;
                            if (var5) {
                                _fun100031_ip = 49;
                                continue _fun100031
                            }
                        case 31:
                            var5 = _closure2_slot1;
                            var4 = undefined;
                            if (var5) {
                                _fun100031_ip = 49;
                                continue _fun100031
                            }
                        case 40:
                            var5 = _closure2_slot2;
                            var4 = var5.right;
                        case 49:
                            var0.paddingRight = var4;
                            var1 = undefined;
                            if (!var3) {
                                _fun100031_ip = 68;
                                continue _fun100031
                            }
                        case 59:
                            var2 = _closure2_slot2;
                            var1 = var2.left;
                        case 68:
                            var0.paddingLeft = var1;
                            var1 = 1;
                            var0.flex = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8104, 660, 7841, 3921, 7903, 1568, 2]);