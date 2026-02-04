// modules/hub/HubProgressBarUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun91296: for (var _fun91296_ip = 0;;) switch (_fun91296_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun91296_ip = 46;
                    continue _fun91296
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun91296_ip = 55;
                    continue _fun91296
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun91296_ip = 345;
                    continue _fun91296
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun91296_ip = 323;
                    continue _fun91296
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun91296_ip = 283;
                    continue _fun91296
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun91296_ip = 270;
                    continue _fun91296
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
                    _fun91296_ip = 163;
                    continue _fun91296
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun91296_ip = 179;
                    continue _fun91296
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun91296_ip = 249;
                    continue _fun91296
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun91296_ip = 249;
                    continue _fun91296
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun91296_ip = 234;
                    continue _fun91296
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun91296_ip = 247;
                    continue _fun91296
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun91296_ip = 265;
                continue _fun91296;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun91296_ip = 283;
                continue _fun91296;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun91296_ip = 323;
                    continue _fun91296
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
                    _fun91296_ip = 330;
                    continue _fun91296
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun91297: for (var _fun91297_ip = 0;;) switch (_fun91297_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun91297_ip = 56;
                                continue _fun91297
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
                            _fun91297_ip = 67;
                            continue _fun91297;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun91298: for (var _fun91298_ip = 0;;) switch (_fun91298_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun91298_ip = 23;
                    continue _fun91298
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun91298_ip = 33;
                    continue _fun91298
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
                    _fun91298_ip = 70;
                    continue _fun91298
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun91298_ip = 55;
                    continue _fun91298
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun91300: for (var _fun91300_ip = 0;;) switch (_fun91300_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var0;
                    var0 = 0;
                    if (var2) {
                        _fun91300_ip = 90;
                        continue _fun91300
                    }
                case 18:
                    var2 = _closure1_slot3;
                    var2 = var2.settings;
                    var5 = var2.guilds;
                    var7 = var3 == var5;
                    var2 = undefined;
                    if (var7) {
                        _fun91300_ip = 75;
                        continue _fun91300
                    }
                case 46:
                    var5 = var5.guilds;
                    var4 = _closure2_slot0;
                    var4 = var5[var4];
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun91300_ip = 75;
                        continue _fun91300
                    }
                case 69:
                    var2 = var4.hubProgress;
                case 75:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun91300_ip = 87;
                        continue _fun91300
                    }
                case 84:
                    var1 = var2;
                case 87:
                    var0 = var1;
                case 90:
                    return var0;
            }
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun91301: for (var _fun91301_ip = 0;;) switch (_fun91301_ip) {
                case 0:
                    var7 = _closure2_slot1;
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var0](var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot5;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = 9;
                    if (var1) {
                        _fun91301_ip = 130;
                        continue _fun91301
                    }
                case 68:
                    var8 = var2.value;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var9 = var9.bind(var5)(var1);
                    var1 = var9.hasFlag;
                    var1 = var1.bind(var9)(var7, var8);
                    if (!var1) {
                        _fun91301_ip = 115;
                        continue _fun91301
                    }
                case 105:
                    var1 = var0.add;
                    var1 = var1.bind(var0)(var8);
                case 115:
                    var8 = var4.bind(var5)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun91301_ip = 68;
                        continue _fun91301
                    }
                case 130:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubProgressBarUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun91302: for (var _fun91302_ip = 0;;) switch (_fun91302_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 6;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.JOIN_GUILD;
                if (!(var1 !== var3)) {
                    _fun91302_ip = 300;
                    continue _fun91302
                }
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.INVITE_USER;
                if (!(var1 !== var3)) {
                    _fun91302_ip = 243;
                    continue _fun91302
                }
            case 83:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.CONTACT_SYNC;
                if (!(var1 !== var3)) {
                    _fun91302_ip = 186;
                    continue _fun91302
                }
            case 116:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.NO_PROGRESS;
                if (!(var1 !== var3)) {
                    _fun91302_ip = 182;
                    continue _fun91302
                }
            case 149:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 8;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var4;
            case 182:
                var1 = null;
                return var1;
            case 186:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.HFvFte;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 243:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["3NlTYU"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 300:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 7;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.iNR25n;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getHubProgressTitleForStep = var3;
    var3 = function arg0() {
        _fun91303: for (var _fun91303_ip = 0;;) switch (_fun91303_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot9;
                var2 = null;
                var6 = var2 == var5;
                var3 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun91303_ip = 30;
                    continue _fun91303
                }
            case 25:
                var2 = var5.id;
            case 30:
                var5 = var4.bind(var3)(var2);
                var _closure2_slot0 = var5;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useStateFromStores;
                    var0 = _closure1_slot4;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot4;
                        var1 = var2.getLocalAccount;
                        var0 = _closure1_slot6;
                        var0 = var0.CONTACTS;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var2.bind(var3)();
                var _closure2_slot1 = var4;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun91306: for (var _fun91306_ip = 0;;) switch (_fun91306_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun91306_ip = 16;
                                continue _fun91306
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            return var1;
                        case 16:
                            var1 = global;
                            var2 = var1.Set;
                            var5 = _closure2_slot0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            var2 = var0.add;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.HubProgressStep;
                            var1 = var1.CONTACT_SYNC;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useHubProgressBarCompletedSteps = var3;
    var1 = function arg0() {
        _fun91307: for (var _fun91307_ip = 0;;) switch (_fun91307_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var0 = _closure1_slot5;
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun91307_ip = 68;
                    continue _fun91307
                }
            case 33:
                var0 = var1.value;
                var5 = var4.has;
                var5 = var5.bind(var4)(var0);
                if (var5) {
                    _fun91307_ip = 53;
                    continue _fun91307
                }
            case 51:
                return var0;
            case 53:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun91307_ip = 33;
                    continue _fun91307
                }
            case 68:
                var0 = null;
                return var0;
        }
    };
    var2.getNextHubProgressStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 4519, 8347, 660, 566, 1311, 1234, 1304, 1384, 2]);