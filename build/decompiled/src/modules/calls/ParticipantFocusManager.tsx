// modules/calls/ParticipantFocusManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun114017: for (var _fun114017_ip = 0;;) switch (_fun114017_ip) {
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
                _fun114017_ip = 76;
                continue _fun114017;
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114021: for (var _fun114021_ip = 0;;) switch (_fun114021_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114021_ip = 84;
                        continue _fun114021
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114021_ip = 118;
                    continue _fun114021;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
                    var2 = _closure1_slot6;
                    var1 = var0.handleFocusParticipant;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
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
        var5 = 'handleFocusParticipant';
        var4.key = var5;
        var0 = function() {
            _fun114022: for (var _fun114022_ip = 0;;) switch (_fun114022_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var0 = var2.getChannelId;
                    var5 = var0.bind(var2)();
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun114022_ip = 115;
                        continue _fun114022
                    }
                case 25:
                    var4 = _closure1_slot6;
                    var2 = var4.getSelectedParticipantId;
                    var2 = var2.bind(var4)(var5);
                    var _closure3_slot0 = var2;
                    var2 = var4.getVideoParticipants;
                    var5 = var2.bind(var4)(var5);
                    var2 = _closure1_slot5;
                    var1 = var2.getRTCConnection;
                    var2 = var1.bind(var2)();
                    if (!(var0 != var2)) {
                        _fun114022_ip = 115;
                        continue _fun114022
                    }
                case 73:
                    var1 = var2.setSelectedParticipant;
                    var4 = var5.find;
                    var3 = function(arg0) { // Environment: var3
                        _fun114023: for (var _fun114023_ip = 0;;) switch (_fun114023_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.id;
                                var0 = _closure3_slot0;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun114023_ip = 31;
                                    continue _fun114023
                                }
                            case 22:
                                var1 = var1.localVideoDisabled;
                                var0 = !var1;
                            case 31:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = var0 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun114022_ip = 110;
                        continue _fun114022
                    }
                case 105:
                    var0 = var3.id;
                case 110:
                    var0 = var1.bind(var2)(var0);
                case 115:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
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
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/ParticipantFocusManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3477, 3907, 4263, 2]);