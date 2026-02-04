// modules/activities/stores/CustomActivityLinksStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun92447: for (var _fun92447_ip = 0;;) switch (_fun92447_ip) {
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
                _fun92447_ip = 76;
                continue _fun92447;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun92451: for (var _fun92451_ip = 0;;) switch (_fun92451_ip) {
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
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun92451_ip = 69;
                        continue _fun92451
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun92451_ip = 105;
                    continue _fun92451;
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
        var5 = 'getOne';
        var4.key = var5;
        var0 = function arg0, arg1() {
            _fun92452: for (var _fun92452_ip = 0;;) switch (_fun92452_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot6;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun92452_ip = 24;
                        continue _fun92452
                    }
                case 20:
                    var2 = undefined;
                    return var2;
                case 24:
                    var0 = _closure1_slot6;
                    var1 = var0[var1];
                    var0 = arg1;
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
    var6 = var1.bind(var0)(var6);
    var1 = 'CustomActivityLinksStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun92453: for (var _fun92453_ip = 0;;) switch (_fun92453_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var4 = var0.link;
                var1 = _closure1_slot6;
                var1 = var1[var2];
                var6 = null;
                if (!(var6 == var1)) {
                    _fun92453_ip = 57;
                    continue _fun92453
                }
            case 31:
                var3 = _closure1_slot6;
                var1 = global;
                var5 = var1.Object;
                var1 = var5.create;
                var1 = var1.bind(var5)(var6);
                var3[var2] = var1;
            case 57:
                var1 = _closure1_slot6;
                var2 = var1[var2];
                var1 = var4.link_id;
                var0 = _closure1_slot5;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var3;
                var7 = var4;
                var0 = new var8[var0](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS = var7;
    var3 = function() {
        var0 = {};
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/stores/CustomActivityLinksStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 12062, 566, 806, 2]);