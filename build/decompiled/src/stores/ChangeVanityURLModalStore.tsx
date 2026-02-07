// stores/ChangeVanityURLModalStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun116832: for (var _fun116832_ip = 0;;) switch (_fun116832_ip) {
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
                _fun116832_ip = 76;
                continue _fun116832;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var1 = var1.FormStates;
    var _closure1_slot5 = var1;
    var7 = {};
    var _closure1_slot8 = var7;
    var1 = var1.CLOSED;
    var _closure1_slot9 = var1;
    var1 = null;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun116836: for (var _fun116836_ip = 0;;) switch (_fun116836_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun116836_ip = 69;
                        continue _fun116836
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun116836_ip = 105;
                    continue _fun116836;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'isOpen';
        var4.key = var0;
        var0 = function() {
            var1 = _closure1_slot9;
            var0 = _closure1_slot5;
            var0 = var0.CLOSED;
            var0 = var1 !== var0;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var2 = var2.SUBMITTING;
            var2 = var3 === var2;
            var0.submitting = var2;
            var2 = _closure1_slot10;
            var0.errorDetails = var2;
            var2 = _closure1_slot8;
            var0.errors = var2;
            var2 = _closure1_slot6;
            var0.guildId = var2;
            var1 = _closure1_slot7;
            var0.code = var1;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ChangeVanityURLModalStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot5;
        var2 = var2.OPEN;
        _closure1_slot9 = var2;
        var2 = var0.guildId;
        var _closure1_slot6 = var2;
        var0 = var0.code;
        var _closure1_slot7 = var0;
        var0 = null;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANGE_VANITY_URL_MODAL_OPEN = var8;
    var8 = function() {
        var0 = _closure1_slot5;
        var0 = var0.SUBMITTING;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANGE_VANITY_URL_MODAL_SUBMIT = var8;
    var8 = function arg0() {
        var0 = _closure1_slot5;
        var0 = var0.OPEN;
        _closure1_slot9 = var0;
        var0 = arg0;
        var0 = var0.error;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE = var8;
    var3 = function() {
        var0 = _closure1_slot5;
        var0 = var0.CLOSED;
        _closure1_slot9 = var0;
        var0 = null;
        _closure1_slot6 = var0;
        _closure1_slot7 = var0;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANGE_VANITY_URL_MODAL_CLOSE = var3;
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
    var3 = 'stores/ChangeVanityURLModalStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 566, 806, 2]);