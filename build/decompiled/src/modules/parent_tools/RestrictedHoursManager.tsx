// modules/parent_tools/RestrictedHoursManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun117932: for (var _fun117932_ip = 0;;) switch (_fun117932_ip) {
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
                _fun117932_ip = 76;
                continue _fun117932;
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
    var0 = function() {
        _fun117935: for (var _fun117935_ip = 0;;) switch (_fun117935_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var5 = undefined;
                var3 = var2.bind(var5)(var0);
                var2 = var3.getIsFamilyCenterV3Enabled;
                var0 = {};
                var4 = 'RestrictedHoursManager';
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun117935_ip = 119;
                    continue _fun117935
                }
            case 57:
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun117935_ip = 106;
                    continue _fun117935
                }
            case 81:
                var4 = var3.restrictedSchedule;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun117935_ip = 106;
                    continue _fun117935
                }
            case 96:
                var3 = var4.isInRestrictedHours;
                var2 = var3.bind(var4)();
            case 106:
                var1 = var1 != var2;
                if (!var1) {
                    _fun117935_ip = 116;
                    continue _fun117935
                }
            case 113:
                var1 = var2;
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun117936: for (var _fun117936_ip = 0;;) switch (_fun117936_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var3 = _closure1_slot8;
                if (!(var1 !== var3)) {
                    _fun117936_ip = 70;
                    continue _fun117936
                }
            case 21:
                _closure1_slot8 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                if (var1) {
                    _fun117936_ip = 60;
                    continue _fun117936
                }
            case 48:
                var1 = var2.closeRestrictedHoursModal;
                var1 = var1.bind(var2)();
                _fun117936_ip = 70;
                continue _fun117936;
            case 60:
                var1 = var2.openRestrictedHoursModal;
                var1 = var1.bind(var2)();
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = false;
    var _closure1_slot8 = var3;
    var3 = null;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117939: for (var _fun117939_ip = 0;;) switch (_fun117939_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117939_ip = 84;
                        continue _fun117939
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117939_ip = 118;
                    continue _fun117939;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.set;
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot13;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun117940: for (var _fun117940_ip = 0;;) switch (_fun117940_ip) {
                case 0:
                    var1 = _closure1_slot11;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    _closure1_slot8 = var1;
                    if (!var1) {
                        _fun117940_ip = 50;
                        continue _fun117940
                    }
                case 20:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 7;
                    var1 = var4[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.openRestrictedHoursModal;
                    var1 = var1.bind(var3)();
                case 50:
                    var1 = global;
                    var4 = var1.setInterval;
                    var3 = _closure1_slot12;
                    var1 = 60000;
                    var1 = var4.bind(var0)(var3, var1);
                    _closure1_slot9 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            _fun117941: for (var _fun117941_ip = 0;;) switch (_fun117941_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun117941_ip = 36;
                        continue _fun117941
                    }
                case 13:
                    var1 = global;
                    var4 = var1.clearInterval;
                    var3 = _closure1_slot9;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    _closure1_slot9 = var0;
                case 36:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.closeRestrictedHoursModal;
                    var1 = var1.bind(var3)();
                    var1 = false;
                    _closure1_slot8 = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/RestrictedHoursManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 4659, 15032, 4299, 2]);