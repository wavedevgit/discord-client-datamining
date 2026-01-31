// modules/app_launcher/native/screens/home/FrecencySectionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun107291: for (var _fun107291_ip = 0;;) switch (_fun107291_ip) {
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
                _fun107291_ip = 76;
                continue _fun107291;
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
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
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
    var1 = {};
    var3 = 'apps';
    var1.APPS = var3;
    var3 = 'commands';
    var1.COMMANDS = var3;
    var _closure1_slot5 = var1;
    var3 = {};
    var7 = null;
    var3.selection = var7;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun107295: for (var _fun107295_ip = 0;;) switch (_fun107295_ip) {
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
                        _fun107295_ip = 69;
                        continue _fun107295
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun107295_ip = 105;
                    continue _fun107295;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun107296: for (var _fun107296_ip = 0;;) switch (_fun107296_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun107296_ip = 16;
                        continue _fun107296
                    }
                case 9:
                    _closure1_slot6 = var1;
                case 16:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSelection';
        var4.key = var6;
        var5 = function() {
            _fun107298: for (var _fun107298_ip = 0;;) switch (_fun107298_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var2 = var0.selection;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun107298_ip = 31;
                        continue _fun107298
                    }
                case 19:
                    var0 = _closure1_slot5;
                    var0 = var0.COMMANDS;
                    _fun107298_ip = 41;
                    continue _fun107298;
                case 31:
                    var1 = _closure1_slot6;
                    var0 = var1.selection;
                case 41:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'FrecencySectionStore';
    var7.displayName = var3;
    var7.persistKey = var3;
    var3 = 6;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = {};
    var4 = function arg0() {
        var1 = {};
        var4 = _closure1_slot6;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = arg0;
        var3 = var2.selection;
        var2 = 'selection';
        var1[var2] = var3;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var3.FRECENCY_SECTION_SET_SELECTION = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var7](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/FrecencySectionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FrecencySectionSelection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);