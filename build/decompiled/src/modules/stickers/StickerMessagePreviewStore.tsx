// modules/stickers/StickerMessagePreviewStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun38469: for (var _fun38469_ip = 0;;) switch (_fun38469_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun38469_ip = 74;
                continue _fun38469;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.DraftType;
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38473: for (var _fun38473_ip = 0;;) switch (_fun38473_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38473_ip = 69;
                        continue _fun38473
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38473_ip = 105;
                    continue _fun38473;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'getStickerPreview';
        var4.key = var5;
        var0 = function arg0, arg1() {
            _fun38474: for (var _fun38474_ip = 0;;) switch (_fun38474_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.FirstThreadMessage;
                    var1 = arg1;
                    if (!(var1 !== var2)) {
                        _fun38474_ip = 26;
                        continue _fun38474
                    }
                case 20:
                    var1 = _closure1_slot6;
                    _fun38474_ip = 30;
                    continue _fun38474;
                case 26:
                    var1 = _closure1_slot7;
                case 30:
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StickerMessagePreviewStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun38475: for (var _fun38475_ip = 0;;) switch (_fun38475_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = var0.sticker;
                var4 = var0.draftType;
                var1 = _closure1_slot5;
                var1 = var1.FirstThreadMessage;
                if (!(var4 !== var1)) {
                    _fun38475_ip = 43;
                    continue _fun38475
                }
            case 37:
                var1 = _closure1_slot6;
                _fun38475_ip = 47;
                continue _fun38475;
            case 43:
                var1 = _closure1_slot7;
            case 47:
                var0 = new Array(1);
                var0[0] = var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.ADD_STICKER_PREVIEW = var8;
    var8 = function arg0() {
        _fun38476: for (var _fun38476_ip = 0;;) switch (_fun38476_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var3 = var0.draftType;
                var0 = _closure1_slot5;
                var0 = var0.FirstThreadMessage;
                if (!(var3 !== var0)) {
                    _fun38476_ip = 37;
                    continue _fun38476
                }
            case 31:
                var0 = _closure1_slot6;
                _fun38476_ip = 41;
                continue _fun38476;
            case 37:
                var0 = _closure1_slot7;
            case 41:
                var3 = var0[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun38476_ip = 55;
                    continue _fun38476
                }
            case 51:
                var0 = delete var0[var1];
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var1.CLEAR_STICKER_PREVIEW = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot6 = var0;
        var0 = {};
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/StickerMessagePreviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3992, 566, 806, 2]);