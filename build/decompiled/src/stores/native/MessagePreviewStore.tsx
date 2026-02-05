// stores/native/MessagePreviewStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun71103: for (var _fun71103_ip = 0;;) switch (_fun71103_ip) {
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
            case 72: // try_end0
                _fun71103_ip = 76;
                continue _fun71103;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = null;
    var _closure1_slot8 = var1;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun71107: for (var _fun71107_ip = 0;;) switch (_fun71107_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71107_ip = 69;
                        continue _fun71107
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71107_ip = 105;
                    continue _fun71107;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'messages';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'jumpTargetId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.find;
            var1 = _closure1_slot8;
            var0 = function(arg0) { // Environment: var0
                _fun71111: for (var _fun71111_ip = 0;;) switch (_fun71111_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = var0.nonce;
                        var0 = _closure3_slot0;
                        var0 = var3 === var0;
                        if (var0) {
                            _fun71111_ip = 36;
                            continue _fun71111
                        }
                    case 28:
                        var1 = _closure3_slot0;
                        var0 = var2 === var1;
                    case 36:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'MessagePreviewStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.around;
        var4 = var0.messages;
        var2 = new Array(0);
        _closure1_slot8 = var2;
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var2
            _fun71113: for (var _fun71113_ip = 0;;) switch (_fun71113_ip) {
                case 0:
                    var2 = _closure1_slot8;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun71113_ip = 64;
                        continue _fun71113
                    }
                case 13:
                    var2 = _closure1_slot8;
                    var1 = var2.unshift;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 5;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.createMessageRecord;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOAD_MESSAGES_AROUND_SUCCESS = var8;
    var3 = function() {
        var0 = null;
        _closure1_slot8 = var0;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLEAR_MESSAGES_AROUND_SUCCESS = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/native/MessagePreviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3971, 22, 566, 806, 2]);