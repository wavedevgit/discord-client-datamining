// modules/app_startup/ManagerRegistryShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        _fun117961: for (var _fun117961_ip = 0;;) switch (_fun117961_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117961_ip = 46;
                    continue _fun117961
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117961_ip = 55;
                    continue _fun117961
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117961_ip = 345;
                    continue _fun117961
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117961_ip = 323;
                    continue _fun117961
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117961_ip = 283;
                    continue _fun117961
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117961_ip = 270;
                    continue _fun117961
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun117961_ip = 163;
                    continue _fun117961
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117961_ip = 179;
                    continue _fun117961
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117961_ip = 249;
                    continue _fun117961
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117961_ip = 249;
                    continue _fun117961
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117961_ip = 234;
                    continue _fun117961
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117961_ip = 247;
                    continue _fun117961
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117961_ip = 265;
                continue _fun117961;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117961_ip = 283;
                continue _fun117961;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117961_ip = 323;
                    continue _fun117961
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun117961_ip = 330;
                    continue _fun117961
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117962: for (var _fun117962_ip = 0;;) switch (_fun117962_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117962_ip = 56;
                                continue _fun117962
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun117962_ip = 67;
                            continue _fun117962;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun117963: for (var _fun117963_ip = 0;;) switch (_fun117963_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117963_ip = 23;
                    continue _fun117963
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117963_ip = 33;
                    continue _fun117963
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun117963_ip = 70;
                    continue _fun117963
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117963_ip = 55;
                    continue _fun117963
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        var0 = arg1;
        var0 = var0.actions;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun117965: for (var _fun117965_ip = 0;;) switch (_fun117965_ip) {
            case 0:
                var5 = arg0;
                var4 = var5.actions;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun117965_ip = 19;
                    continue _fun117965
                }
            case 15:
                var4 = new Array(0);
            case 19:
                var0 = var5.hasStoreChangeListeners;
                if (var0) {
                    _fun117965_ip = 34;
                    continue _fun117965
                }
            case 28:
                var0 = var5.loadAfterConnectionOpen;
            case 34:
                var6 = var4;
                if (!var0) {
                    _fun117965_ip = 94;
                    continue _fun117965
                }
            case 40:
                var0 = var4.includes;
                var2 = 'POST_CONNECTION_OPEN';
                var1 = var0.bind(var4)(var2);
                var0 = var4;
                if (var1) {
                    _fun117965_ip = 91;
                    continue _fun117965
                }
            case 60:
                var1 = new Array(1);
                var8 = 0;
                var10 = var1;
                var9 = var4;
                var3 = arraySpread(var10, var9, var8);
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                var0 = var1;
            case 91:
                var6 = var0;
            case 94:
                var0 = var5.loadRightBeforeConnectionOpen;
                var2 = var6;
                if (!var0) {
                    _fun117965_ip = 160;
                    continue _fun117965
                }
            case 106:
                var0 = var6.includes;
                var3 = 'CONNECTION_OPEN';
                var1 = var0.bind(var6)(var3);
                var0 = var6;
                if (var1) {
                    _fun117965_ip = 157;
                    continue _fun117965
                }
            case 126:
                var1 = new Array(1);
                var8 = 0;
                var10 = var1;
                var9 = var6;
                var4 = arraySpread(var10, var9, var8);
                var1[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                var0 = var1;
            case 157:
                var2 = var0;
            case 160:
                var1 = _closure1_slot4;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun117965_ip = 247;
                    continue _fun117965
                }
            case 186:
                var6 = var2.value;
                var1 = _closure1_slot2;
                var1 = var6 in var1;
                if (var1) {
                    _fun117965_ip = 214;
                    continue _fun117965
                }
            case 202:
                var7 = _closure1_slot2;
                var1 = new Array(0);
                var7[var6] = var1;
            case 214:
                var1 = _closure1_slot2;
                var6 = var1[var6];
                var1 = var6.push;
                var1 = var1.bind(var6)(var5);
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun117965_ip = 186;
                    continue _fun117965
                }
            case 247:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun117966: for (var _fun117966_ip = 0;;) switch (_fun117966_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'CONNECTION_OPEN';
                var1 = var1 !== var2;
                if (!var1) {
                    _fun117966_ip = 32;
                    continue _fun117966
                }
            case 19:
                var3 = var0.type;
                var2 = 'OVERLAY_INITIALIZE';
                var1 = var2 !== var3;
            case 32:
                if (var1) {
                    _fun117966_ip = 44;
                    continue _fun117966
                }
            case 35:
                var1 = true;
                _closure1_slot3 = var1;
            case 44:
                var3 = var0.type;
                var2 = _closure1_slot2;
                var2 = var3 in var2;
                if (!var2) {
                    _fun117966_ip = 213;
                    continue _fun117966
                }
            case 66:
                var2 = new Array(0);
                var4 = _closure1_slot4;
                var5 = _closure1_slot2;
                var3 = var0.type;
                var3 = var5[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if (var3) {
                    _fun117966_ip = 174;
                    continue _fun117966
                }
            case 106:
                var7 = var4.value;
                var3 = _closure1_slot3;
                if (var3) {
                    _fun117966_ip = 139;
                    continue _fun117966
                }
            case 118:
                var3 = var7.neverLoadBeforeConnectionOpen;
                if (!var3) {
                    _fun117966_ip = 139;
                    continue _fun117966
                }
            case 127:
                var3 = var2.push;
                var3 = var3.bind(var2)(var7);
                _fun117966_ip = 159;
                continue _fun117966;
            case 139:
                var3 = var7.inlineRequire;
                var7 = var3.bind(var7)();
                var3 = var7.initialize;
                var3 = var3.bind(var7)();
            case 159:
                var7 = var5.bind(var6)();
                var3 = var7.done;
                var4 = var7;
                if (!var3) {
                    _fun117966_ip = 106;
                    continue _fun117966
                }
            case 174:
                var4 = var2.length;
                var3 = 0;
                if (!(!(var4 > var3))) {
                    _fun117966_ip = 200;
                    continue _fun117966
                }
            case 185:
                var4 = _closure1_slot2;
                var3 = var0.type;
                var3 = delete var4[var3];
                _fun117966_ip = 213;
                continue _fun117966;
            case 200:
                var1 = _closure1_slot2;
                var0 = var0.type;
                var1[var0] = var2;
            case 213:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var5 = var0.Set;
    var0 = var5.prototype;
    var11 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var10 = ['CHANNEL_SELECT', 'CHANNEL_PRELOAD', 'MESSAGE_CREATE'];
    var0 = new var11[var5](var10, var9);
    var0 = {};
    var _closure1_slot2 = var0;
    var0 = false;
    var _closure1_slot3 = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/ManagerRegistryShared.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117967: for (var _fun117967_ip = 0;;) switch (_fun117967_ip) {
            case 0:
                var7 = arg0;
                var5 = var7;
                var0 = undefined;
                for (var2 in var5)
                    case 19: {
                        case 28: var8 = var2;
                        var9 = var7[var8];
                        var8 = _closure1_slot6;
                        var8 = var8.bind(var0)(var0, var9);
                        var8 = _closure1_slot7;
                        var8 = var8.bind(var0)(var9);
                        _fun117967_ip = 19;
                        continue _fun117967;
                    }
            case 56:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.addInterceptor;
                var1 = _closure1_slot8;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.initialize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);