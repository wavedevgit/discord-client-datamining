// modules/activities/useSubscribeMissingActivities.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun77590: for (var _fun77590_ip = 0;;) switch (_fun77590_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun77590_ip = 46;
                    continue _fun77590
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun77590_ip = 55;
                    continue _fun77590
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun77590_ip = 345;
                    continue _fun77590
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun77590_ip = 323;
                    continue _fun77590
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun77590_ip = 283;
                    continue _fun77590
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun77590_ip = 270;
                    continue _fun77590
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
                    _fun77590_ip = 163;
                    continue _fun77590
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun77590_ip = 179;
                    continue _fun77590
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun77590_ip = 249;
                    continue _fun77590
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun77590_ip = 249;
                    continue _fun77590
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun77590_ip = 234;
                    continue _fun77590
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun77590_ip = 247;
                    continue _fun77590
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun77590_ip = 265;
                continue _fun77590;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun77590_ip = 283;
                continue _fun77590;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun77590_ip = 323;
                    continue _fun77590
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
                    _fun77590_ip = 330;
                    continue _fun77590
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun77591: for (var _fun77591_ip = 0;;) switch (_fun77591_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun77591_ip = 56;
                                continue _fun77591
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
                            _fun77591_ip = 67;
                            continue _fun77591;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun77592: for (var _fun77592_ip = 0;;) switch (_fun77592_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun77592_ip = 23;
                    continue _fun77592
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun77592_ip = 33;
                    continue _fun77592
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
                    _fun77592_ip = 70;
                    continue _fun77592
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun77592_ip = 55;
                    continue _fun77592
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        var6 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = function arg0, arg1() {
                _fun77595: for (var _fun77595_ip = 0;;) switch (_fun77595_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var1 = var2.isPrivate;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77595_ip = 46;
                            continue _fun77595
                        }
                    case 21:
                        var4 = _closure1_slot8;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var2 = _closure1_slot7;
                        var1[1] = var2;
                        return var1;
                    case 46:
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            _fun77596: for (var _fun77596_ip = 0;;) switch (_fun77596_ip) {
                                case 0:
                                    var3 = arg0;
                                    var4 = var3.application;
                                    var2 = null;
                                    var5 = var2 == var4;
                                    var0 = undefined;
                                    if (var5) {
                                        _fun77596_ip = 24;
                                        continue _fun77596
                                    }
                                case 19:
                                    var0 = var4.id;
                                case 24:
                                    var0 = var2 != var0;
                                    if (!var0) {
                                        _fun77596_ip = 56;
                                        continue _fun77596
                                    }
                                case 31:
                                    var3 = var3.activity;
                                    var4 = var2 == var3;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun77596_ip = 52;
                                        continue _fun77596
                                    }
                                case 46:
                                    var1 = var3.party_id;
                                case 52:
                                    var0 = var2 != var1;
                                case 56:
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var1 = var1.bind(var2)(var0);
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                }
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot2;
        var5 = undefined;
        var2 = 2;
        var3 = var3.bind(var5)(var4, var2);
        var2 = 0;
        var6 = var3[var2];
        var _closure2_slot2 = var6;
        var2 = 1;
        var2 = var3[var2];
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 4;
        var3 = var7[var3];
        var8 = var4.bind(var5)(var3);
        var7 = var8.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() { // Environment: var0
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var3 = _closure2_slot2;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun77599: for (var _fun77599_ip = 0;;) switch (_fun77599_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var6 = _closure1_slot5;
                        var5 = var6.findActivity;
                        var2 = var0.author;
                        var10 = var2.id;
                        var9 = function(arg0) { // Environment: var1
                            _fun77600: for (var _fun77600_ip = 0;;) switch (_fun77600_ip) {
                                case 0:
                                    var1 = arg0;
                                    var5 = var1.application_id;
                                    var0 = _closure4_slot0;
                                    var6 = var0.application;
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var0 = undefined;
                                    if (var7) {
                                        _fun77600_ip = 37;
                                        continue _fun77600
                                    }
                                case 32:
                                    var0 = var6.id;
                                case 37:
                                    var0 = var5 === var0;
                                    if (!var0) {
                                        _fun77600_ip = 93;
                                        continue _fun77600
                                    }
                                case 44:
                                    var5 = var1.party;
                                    var6 = var4 == var5;
                                    var1 = undefined;
                                    if (var6) {
                                        _fun77600_ip = 64;
                                        continue _fun77600
                                    }
                                case 59:
                                    var1 = var5.id;
                                case 64:
                                    var3 = _closure4_slot0;
                                    var3 = var3.activity;
                                    var4 = var4 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun77600_ip = 89;
                                        continue _fun77600
                                    }
                                case 83:
                                    var2 = var3.party_id;
                                case 89:
                                    var0 = var1 === var2;
                                case 93:
                                    return var0;
                            }
                        };
                        var2 = null;
                        var7 = true;
                        var11 = var6;
                        var8 = null;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        if (!(var2 != var1)) {
                            _fun77599_ip = 79;
                            continue _fun77599
                        }
                    case 57:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                    case 79:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var7.bind(var8)(var5, var3, var4);
        var _closure2_slot3 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot2;
            var2 = _closure2_slot3;
            var1 = function arg0, arg1() {
                _fun77602: for (var _fun77602_ip = 0;;) switch (_fun77602_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var2 = var3.length;
                        var0 = 0;
                        if (!(var0 !== var2)) {
                            _fun77602_ip = 50;
                            continue _fun77602
                        }
                    case 23:
                        var0 = new Array(0);
                        var _closure4_slot1 = var0;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun77603: for (var _fun77603_ip = 0;;) switch (_fun77603_ip) {
                                case 0:
                                    var4 = arg0;
                                    var1 = var4.application;
                                    var2 = null;
                                    var3 = var2 == var1;
                                    var0 = undefined;
                                    var6 = undefined;
                                    if (var3) {
                                        _fun77603_ip = 26;
                                        continue _fun77603
                                    }
                                case 21:
                                    var6 = var1.id;
                                case 26:
                                    var1 = var4.activity;
                                    var3 = var2 == var1;
                                    var5 = undefined;
                                    if (var3) {
                                        _fun77603_ip = 47;
                                        continue _fun77603
                                    }
                                case 41:
                                    var5 = var1.party_id;
                                case 47:
                                    var7 = var4.id;
                                    var3 = _closure4_slot0;
                                    var3 = var7 in var3;
                                    if (var3) {
                                        _fun77603_ip = 153;
                                        continue _fun77603
                                    }
                                case 66:
                                    if (!(var2 != var6)) {
                                        _fun77603_ip = 153;
                                        continue _fun77603
                                    }
                                case 70:
                                    if (!(var2 != var5)) {
                                        _fun77603_ip = 153;
                                        continue _fun77603
                                    }
                                case 74:
                                    var3 = var4.timestamp;
                                    var2 = var3.getTime;
                                    var2 = var2.bind(var3)();
                                    var3 = {};
                                    var7 = var4.author;
                                    var7 = var7.id;
                                    var3.userId = var7;
                                    var3.applicationId = var6;
                                    var3.partyId = var5;
                                    var5 = var4.id;
                                    var3.messageId = var5;
                                    var4 = var4.channel_id;
                                    var3.channelId = var4;
                                    var3.inviteTime = var2;
                                    var2 = _closure4_slot1;
                                    var1 = var2.push;
                                    var1 = var1.bind(var2)(var3);
                                case 153:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    case 50:
                        var0 = _closure1_slot6;
                        return var0;
                }
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = new Array(0);
    var _closure1_slot6 = var3;
    var3 = new Array(0);
    var _closure1_slot7 = var3;
    var3 = new Array(0);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useSubscribeMissingActivities.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var4 = _closure1_slot11;
        var5 = undefined;
        var2 = arg0;
        var1 = arg1;
        var4 = var4.bind(var5)(var2, var1);
        var2 = _closure1_slot2;
        var1 = 2;
        var4 = var2.bind(var5)(var4, var1);
        var1 = 0;
        var2 = var4[var1];
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var0 = function() { // Environment: var0
            _fun77605: for (var _fun77605_ip = 0;;) switch (_fun77605_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    var3 = 5;
                    if (var1) {
                        _fun77605_ip = 102;
                        continue _fun77605
                    }
                case 36:
                    var7 = var2.value;
                    var6 = _closure1_slot4;
                    var1 = var6.isSubscribed;
                    var1 = var1.bind(var6)(var7);
                    if (var1) {
                        _fun77605_ip = 87;
                        continue _fun77605
                    }
                case 59:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var6 = var6.bind(var0)(var1);
                    var1 = var6.subscribe;
                    var1 = var1.bind(var6)(var7);
                case 87:
                    var6 = var4.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun77605_ip = 36;
                        continue _fun77605
                    }
                case 102:
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9885, 3612, 566, 9887, 2]);