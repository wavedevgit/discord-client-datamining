// modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun100535: for (var _fun100535_ip = 0;;) switch (_fun100535_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun100535_ip = 74;
                    continue _fun100535
                }
            case 12:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.isVoiceChannelModalKey;
                var1 = var1.bind(var3)(var4);
                var3 = !var1;
                var1 = !var3;
                if (!var3) {
                    _fun100535_ip = 71;
                    continue _fun100535
                }
            case 57:
                var3 = _closure1_slot5;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
            case 71:
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var9 = var6[var0];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var9);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var11 = var7.MEDIA_MODAL_KEY;
    var7 = 3;
    var7 = var6[var7];
    var8 = var5.bind(var0)(var7);
    var10 = var8.OAUTH2_AUTHORIZE_MODAL_KEY;
    var7 = var8.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var9 = var8.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var8 = var4.Set;
    var4 = new Array(4);
    var4[0] = var11;
    var4[1] = var10;
    var4[2] = var9;
    var4[3] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var15 = var7;
    var14 = var4;
    var4 = new var15[var8](var14, var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useSafeAreaGlobalHorizontalStyle.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.shouldDisableSafeAreas;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var4.bind(var3)(var2);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 5;
        var2 = var8[var2];
        var5 = var5.bind(var3)(var2);
        var2 = var5.useOpenModalKey;
        var2 = var2.bind(var5)();
        var5 = var4.bind(var3)(var2);
        var _closure2_slot1 = var5;
        var7 = _closure1_slot1;
        var2 = 6;
        var2 = var8[var2];
        var9 = var7.bind(var3)(var2);
        var4 = var9.useConfig;
        var2 = {};
        var10 = 'useSafeAreaGlobalHorizontalStyle';
        var2.location = var10;
        var2 = var4.bind(var9)(var2);
        var4 = var2.enabled;
        var _closure2_slot2 = var4;
        var2 = 7;
        var2 = var8[var2];
        var2 = var7.bind(var3)(var2);
        var7 = var2.bind(var3)();
        var _closure2_slot3 = var7;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun100538: for (var _fun100538_ip = 0;;) switch (_fun100538_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = !var0;
                    if (!var3) {
                        _fun100538_ip = 20;
                        continue _fun100538
                    }
                case 13:
                    var0 = _closure2_slot2;
                    var3 = !var0;
                case 20:
                    if (!var3) {
                        _fun100538_ip = 30;
                        continue _fun100538
                    }
                case 23:
                    var0 = _closure2_slot1;
                    var3 = !var0;
                case 30:
                    var0 = {};
                    var4 = undefined;
                    if (!var3) {
                        _fun100538_ip = 46;
                        continue _fun100538
                    }
                case 37:
                    var5 = _closure2_slot3;
                    var4 = var5.right;
                case 46:
                    var0.paddingRight = var4;
                    var1 = undefined;
                    if (!var3) {
                        _fun100538_ip = 65;
                        continue _fun100538
                    }
                case 56:
                    var2 = _closure2_slot3;
                    var1 = var2.left;
                case 65:
                    var0.paddingLeft = var1;
                    var1 = 1;
                    var0.flex = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.shouldExcludeSafeAreaForModalKey = var3;
    var1 = function() {
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 6;
        var2 = var6[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var5 = var7.useConfig;
        var2 = {};
        var8 = 'useLocalHorizontalSafeArea';
        var2.location = var8;
        var2 = var5.bind(var7)(var2);
        var5 = var2.enabled;
        var _closure2_slot0 = var5;
        var2 = 7;
        var2 = var6[var2];
        var2 = var4.bind(var3)(var2);
        var4 = var2.bind(var3)();
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = var4.left;
        var1[1] = var5;
        var4 = var4.right;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun100540: for (var _fun100540_ip = 0;;) switch (_fun100540_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun100540_ip = 22;
                        continue _fun100540
                    }
                case 10:
                    var0 = {
                        'left': 0,
                        'right': 0
                    };
                    _fun100540_ip = 49;
                    continue _fun100540;
                case 22:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var3 = var2.left;
                    var1.left = var3;
                    var2 = var2.right;
                    var1.right = var2;
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useLocalHorizontalSafeArea = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8138, 660, 7875, 7937, 3916, 13070, 1568, 2]);