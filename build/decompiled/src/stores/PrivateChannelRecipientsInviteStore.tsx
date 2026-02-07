// stores/PrivateChannelRecipientsInviteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun96620: for (var _fun96620_ip = 0;;) switch (_fun96620_ip) {
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
                _fun96620_ip = 76;
                continue _fun96620;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun96623: for (var _fun96623_ip = 0;;) switch (_fun96623_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96623_ip = 46;
                    continue _fun96623
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun96623_ip = 55;
                    continue _fun96623
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun96623_ip = 345;
                    continue _fun96623
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96623_ip = 323;
                    continue _fun96623
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96623_ip = 283;
                    continue _fun96623
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96623_ip = 270;
                    continue _fun96623
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
                    _fun96623_ip = 163;
                    continue _fun96623
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun96623_ip = 179;
                    continue _fun96623
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96623_ip = 249;
                    continue _fun96623
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96623_ip = 249;
                    continue _fun96623
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96623_ip = 234;
                    continue _fun96623
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96623_ip = 247;
                    continue _fun96623
                }
            case 234:
                var8 = _closure1_slot32;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun96623_ip = 265;
                continue _fun96623;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun96623_ip = 283;
                continue _fun96623;
            case 270:
                var6 = _closure1_slot32;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun96623_ip = 323;
                    continue _fun96623
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
                    _fun96623_ip = 330;
                    continue _fun96623
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96624: for (var _fun96624_ip = 0;;) switch (_fun96624_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96624_ip = 56;
                                continue _fun96624
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
                            _fun96624_ip = 67;
                            continue _fun96624;
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
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun96625: for (var _fun96625_ip = 0;;) switch (_fun96625_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96625_ip = 23;
                    continue _fun96625
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96625_ip = 33;
                    continue _fun96625
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
                    _fun96625_ip = 70;
                    continue _fun96625
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96625_ip = 55;
                    continue _fun96625
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        var1 = '';
        _closure1_slot20 = var1;
        var1 = 0;
        _closure1_slot21 = var1;
        _closure1_slot22 = var1;
        var1 = new Array(0);
        _closure1_slot23 = var1;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        _closure1_slot25 = var1;
        var1 = false;
        _closure1_slot19 = var1;
        var1 = null;
        _closure1_slot26 = var1;
        var1 = _closure1_slot27;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        var1 = arg0;
        _closure1_slot20 = var1;
        var1 = 0;
        _closure1_slot22 = var1;
        var1 = _closure1_slot35;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        _fun96628: for (var _fun96628_ip = 0;;) switch (_fun96628_ip) {
            case 0:
                var0 = _closure1_slot19;
                if (var0) {
                    _fun96628_ip = 14;
                    continue _fun96628
                }
            case 10:
                var0 = false;
                return var0;
            case 14:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var0 = _closure1_slot26;
                var3 = var2.bind(var3)(var0);
                var2 = _closure1_slot20;
                var0 = var2.trim;
                var0 = var0.bind(var2)();
                var2 = var0.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun96628_ip = 262;
                    continue _fun96628
                }
            case 60:
                var2 = null;
                if (!(var2 == var3)) {
                    _fun96628_ip = 72;
                    continue _fun96628
                }
            case 66:
                var5 = new Array(0);
                _fun96628_ip = 78;
                continue _fun96628;
            case 72:
                var5 = var3.recipients;
            case 78:
                var0 = _closure1_slot18;
                if (!(var2 != var0)) {
                    _fun96628_ip = 258;
                    continue _fun96628
                }
            case 89:
                var4 = _closure1_slot15;
                var0 = var4.getCurrentUser;
                var7 = var0.bind(var4)();
                var4 = var2 == var7;
                var6 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun96628_ip = 123;
                    continue _fun96628
                }
            case 113:
                var4 = var7.isStaff;
                var0 = var4.bind(var7)();
            case 123:
                var9 = var2 != var0;
                if (!var9) {
                    _fun96628_ip = 133;
                    continue _fun96628
                }
            case 130:
                var9 = var0;
            case 133:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 15;
                var0 = var4[var0];
                var4 = var2.bind(var6)(var0);
                var2 = var4.getConfig;
                var0 = {};
                var7 = 'PrivateChannelRecipientsInviteStore';
                var0.location = var7;
                var0 = var2.bind(var4)(var0);
                var8 = var0.enabled;
                var4 = _closure1_slot18;
                var2 = var4.setQuery;
                var0 = {};
                var7 = _closure1_slot20;
                var0.query = var7;
                var7 = undefined;
                if (var8) {
                    _fun96628_ip = 230;
                    continue _fun96628
                }
            case 207:
                var8 = {
                    'friends': true,
                    'staff': null,
                    'provisional': false
                };
                var8.staff = var9;
                var7 = var8;
            case 230:
                var0.filters = var7;
                var0.blacklist = var5;
                var5 = _closure1_slot40;
                var5 = var5.bind(var6)();
                var0.boosters = var5;
                var0 = var2.bind(var4)(var0);
            case 258:
                var0 = false;
                return var0;
            case 262:
                var2 = _closure1_slot18;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun96628_ip = 286;
                    continue _fun96628
                }
            case 272:
                var2 = _closure1_slot18;
                var0 = var2.clearQuery;
                var0 = var0.bind(var2)();
            case 286:
                var2 = function arg0() {
                    _fun96629: for (var _fun96629_ip = 0;;) switch (_fun96629_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var4 = _closure1_slot14;
                            var3 = var4.getFriendIDs;
                            var13 = var3.bind(var4)();
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 15;
                            var3 = var5[var3];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.getConfig;
                            var3 = {};
                            var7 = 'PrivateChannelRecipientsInviteStore';
                            var3.location = var7;
                            var3 = var4.bind(var5)(var3);
                            var5 = var3.enabled;
                            var4 = _closure1_slot15;
                            var3 = var4.getCurrentUser;
                            var7 = var3.bind(var4)();
                            var _closure3_slot1 = var7;
                            var3 = null;
                            var9 = var13;
                            if (!(var3 != var7)) {
                                _fun96629_ip = 235;
                                continue _fun96629
                            }
                        case 105:
                            var4 = var7.isStaff;
                            var4 = var4.bind(var7)();
                            var9 = var13;
                            if (!var4) {
                                _fun96629_ip = 235;
                                continue _fun96629
                            }
                        case 121:
                            var10 = _closure1_slot15;
                            var8 = var10.filter;
                            var7 = function(arg0) { // Environment: var1
                                _fun96630: for (var _fun96630_ip = 0;;) switch (_fun96630_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.isStaff;
                                        var0 = var0.bind(var1)();
                                        if (!var0) {
                                            _fun96630_ip = 37;
                                            continue _fun96630
                                        }
                                    case 16:
                                        var2 = var1.id;
                                        var1 = _closure3_slot1;
                                        var1 = var1.id;
                                        var0 = var2 !== var1;
                                    case 37:
                                        return var0;
                                }
                            };
                            var4 = false;
                            var8 = var8.bind(var10)(var7, var4);
                            var7 = var8.map;
                            var4 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var12 = var7.bind(var8)(var4);
                            var4 = global;
                            var8 = var4.Array;
                            var7 = var8.from;
                            var11 = var4.Set;
                            var4 = new Array(0);
                            var14 = 0;
                            var16 = var4;
                            var15 = var13;
                            var14 = arraySpread(var16, var15, var14);
                            var16 = var4;
                            var15 = var12;
                            var10 = arraySpread(var16, var15, var14);
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var17 = var10;
                            var16 = var4;
                            var4 = new var17[var11](var16, var15);
                            var4 = var4 instanceof Object ? var4 : var10;
                            var9 = var7.bind(var8)(var4);
                        case 235:
                            var7 = var3 != var2;
                            if (!var7) {
                                _fun96629_ip = 252;
                                continue _fun96629
                            }
                        case 242:
                            var4 = var2.isPrivate;
                            var7 = var4.bind(var2)();
                        case 252:
                            var4 = var9;
                            if (!var7) {
                                _fun96629_ip = 275;
                                continue _fun96629
                            }
                        case 258:
                            var8 = var9.filter;
                            var7 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var2 = var0.recipients;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var4 = var8.bind(var9)(var7);
                        case 275:
                            if (!var5) {
                                _fun96629_ip = 371;
                                continue _fun96629
                            }
                        case 278:
                            var3 = var3 != var2;
                            if (!var3) {
                                _fun96629_ip = 295;
                                continue _fun96629
                            }
                        case 285:
                            var5 = var2.isPrivate;
                            var3 = var5.bind(var2)();
                        case 295:
                            if (!var3) {
                                _fun96629_ip = 321;
                                continue _fun96629
                            }
                        case 298:
                            var5 = var2.recipients;
                            var3 = var5.forEach;
                            var2 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot27;
                                var1 = var2.delete;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var3.bind(var5)(var2);
                        case 321:
                            var2 = _closure1_slot31;
                            var5 = var2.bind(var6)(var4);
                            var3 = var5.bind(var6)();
                            var2 = var3.done;
                            if (var2) {
                                _fun96629_ip = 371;
                                continue _fun96629
                            }
                        case 342:
                            var7 = _closure1_slot37;
                            var2 = var3.value;
                            var2 = var7.bind(var6)(var2);
                            var7 = var5.bind(var6)();
                            var2 = var7.done;
                            var3 = var7;
                            if (!var2) {
                                _fun96629_ip = 342;
                                continue _fun96629
                            }
                        case 371:
                            var3 = var4.reduce;
                            var2 = function(arg0, arg1) { // Environment: var1
                                _fun96634: for (var _fun96634_ip = 0;;) switch (_fun96634_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure1_slot15;
                                        var2 = var4.getUser;
                                        var1 = arg1;
                                        var5 = var2.bind(var4)(var1);
                                        var1 = null;
                                        var1 = var1 == var5;
                                        if (var1) {
                                            _fun96634_ip = 39;
                                            continue _fun96634
                                        }
                                    case 33:
                                        var1 = var5.isProvisional;
                                    case 39:
                                        if (var1) {
                                            _fun96634_ip = 96;
                                            continue _fun96634
                                        }
                                    case 42:
                                        var2 = var0.push;
                                        var1 = {};
                                        var1.user = var5;
                                        var6 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var3 = 16;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var4 = var6.bind(var3)(var4);
                                        var3 = var4.getName;
                                        var3 = var3.bind(var4)(var5);
                                        var1.comparator = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 96:
                                        return var0;
                                }
                            };
                            var1 = new Array(0);
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.sort;
                            var0 = _closure1_slot38;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                _closure1_slot23 = var0;
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        _fun96635: for (var _fun96635_ip = 0;;) switch (_fun96635_ip) {
            case 0:
                var0 = _closure1_slot19;
                if (var0) {
                    _fun96635_ip = 14;
                    continue _fun96635
                }
            case 10:
                var0 = false;
                return var0;
            case 14:
                var1 = _closure1_slot24;
                var3 = _closure1_slot14;
                var0 = var3.getFriendCount;
                var3 = var0.bind(var3)();
                var0 = 0;
                var0 = var3 > var0;
                _closure1_slot24 = var0;
                var0 = var0 !== var1;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun96636: for (var _fun96636_ip = 0;;) switch (_fun96636_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot14;
                var1 = var3.getRelationshipType;
                var3 = var1.bind(var3)(var2);
                var1 = _closure1_slot17;
                var1 = var1.BLOCKED;
                if (!(var3 !== var1)) {
                    _fun96636_ip = 133;
                    continue _fun96636
                }
            case 35:
                var3 = _closure1_slot15;
                var1 = var3.getUser;
                var8 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var8)) {
                    _fun96636_ip = 117;
                    continue _fun96636
                }
            case 56:
                var5 = _closure1_slot27;
                var4 = var5.set;
                var3 = {};
                var3.user = var8;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 16;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = var7.getName;
                var6 = var6.bind(var7)(var8);
                var3.comparator = var6;
                var3 = var4.bind(var5)(var2, var3);
                return var1;
            case 117:
                var3 = _closure1_slot27;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 133:
                var1 = _closure1_slot27;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 17;
        var1 = var7[var3];
        var6 = undefined;
        var8 = var4.bind(var6)(var1);
        var2 = var8.stripDiacritics;
        var5 = _closure1_slot1;
        var0 = 16;
        var1 = var7[var0];
        var10 = var5.bind(var6)(var1);
        var9 = var10.getName;
        var1 = arg0;
        var1 = var1.user;
        var9 = var9.bind(var10)(var1);
        var1 = var9.toLocaleLowerCase;
        var1 = var1.bind(var9)();
        var2 = var2.bind(var8)(var1);
        var1 = var2.localeCompare;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.stripDiacritics;
        var0 = var7[var0];
        var6 = var5.bind(var6)(var0);
        var5 = var6.getName;
        var0 = arg1;
        var0 = var0.user;
        var5 = var5.bind(var6)(var0);
        var0 = var5.toLocaleLowerCase;
        var0 = var0.bind(var5)();
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun96638: for (var _fun96638_ip = 0;;) switch (_fun96638_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.results;
                var1 = _closure1_slot19;
                if (!var1) {
                    _fun96638_ip = 207;
                    continue _fun96638
                }
            case 22:
                var2 = _closure1_slot20;
                var1 = '';
                if (!(var1 !== var2)) {
                    _fun96638_ip = 207;
                    continue _fun96638
                }
            case 37:
                var1 = new Array(0);
                var4 = _closure1_slot27;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                var2 = _closure1_slot31;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if (var2) {
                    _fun96638_ip = 189;
                    continue _fun96638
                }
            case 80:
                var2 = var3.value;
                var9 = var2.id;
                var10 = var2.comparator;
                var7 = _closure1_slot15;
                var2 = var7.getUser;
                var11 = var2.bind(var7)(var9);
                var2 = var4 == var11;
                if (var2) {
                    _fun96638_ip = 124;
                    continue _fun96638
                }
            case 118:
                var2 = var11.isProvisional;
            case 124:
                if (var2) {
                    _fun96638_ip = 174;
                    continue _fun96638
                }
            case 127:
                var7 = var1.push;
                var2 = {};
                var2.user = var11;
                var2.comparator = var10;
                var2 = var7.bind(var1)(var2);
                var8 = _closure1_slot27;
                var7 = var8.set;
                var2 = {};
                var2.user = var11;
                var2.comparator = var10;
                var2 = var7.bind(var8)(var9, var2);
            case 174:
                var7 = var5.bind(var6)();
                var2 = var7.done;
                var3 = var7;
                if (!var2) {
                    _fun96638_ip = 80;
                    continue _fun96638
                }
            case 189:
                _closure1_slot23 = var1;
                var1 = _closure1_slot29;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
            case 207:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function() {
        var2 = _closure1_slot13;
        var0 = var2.getFrequentlyWithoutFetchingLatest;
        var3 = var0.bind(var2)();
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var1
            _fun96640: for (var _fun96640_ip = 0;;) switch (_fun96640_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot10;
                    var0 = var2 instanceof var0;
                    if (!var0) {
                        _fun96640_ip = 27;
                        continue _fun96640
                    }
                case 17:
                    var1 = var2.isDM;
                    var0 = var1.bind(var2)();
                case 27:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var0);
        var0 = global;
        var4 = var0.Math;
        var2 = var4.max;
        var5 = var3.map;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.id;
            var1 = _closure1_slot13;
            var0 = var1.getScoreWithoutFetchingLatest;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var8 = var5.bind(var3)(var0);
        var0 = new Array(0);
        var7 = 0;
        var9 = var0;
        var5 = arraySpread(var9, var8, var7);
        var9 = var2;
        var8 = var0;
        var7 = var4;
        var0 = apply(var9, var8, var7);
        var _closure2_slot0 = var0;
        var0 = {};
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun96642: for (var _fun96642_ip = 0;;) switch (_fun96642_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot13;
                    var3 = var4.getScoreWithoutFetchingLatest;
                    var1 = var2.id;
                    var5 = var3.bind(var4)(var1);
                    var1 = var2.getRecipientId;
                    var2 = var1.bind(var2)();
                    var3 = _closure1_slot14;
                    var1 = var3.isFriend;
                    var1 = var1.bind(var3)(var2);
                    var4 = 0;
                    if (!var1) {
                        _fun96642_ip = 66;
                        continue _fun96642
                    }
                case 56:
                    var4 = 0.2;
                case 66:
                    var1 = _closure1_slot11;
                    var0 = var1.getDMFromUserId;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    var0 = var0 != var1;
                    var3 = 0;
                    if (!var0) {
                        _fun96642_ip = 102;
                        continue _fun96642
                    }
                case 92:
                    var3 = 0.1;
                case 102:
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var5 = var5 / var0;
                    var0 = 1;
                    var0 = var0 + var5;
                    var0 = var0 + var4;
                    var0 = var0 + var3;
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function() {
        _fun96643: for (var _fun96643_ip = 0;;) switch (_fun96643_ip) {
            case 0:
                var2 = _closure1_slot18;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun96643_ip = 31;
                    continue _fun96643
                }
            case 13:
                var3 = _closure1_slot18;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                var _closure1_slot18 = var1;
            case 31:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getUserSearchContext;
                var1 = _closure1_slot39;
                var0 = 1000;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var11 = function arg0() {
        _fun96644: for (var _fun96644_ip = 0;;) switch (_fun96644_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var0 = _closure1_slot16;
                if (!(var2 === var0)) {
                    _fun96644_ip = 68;
                    continue _fun96644
                }
            case 19:
                var0 = true;
                _closure1_slot19 = var0;
                var2 = _closure1_slot36;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var2 = _closure1_slot41;
                var2 = var2.bind(var0)();
                _closure1_slot18 = var2;
                var2 = null;
                _closure1_slot26 = var2;
                var2 = _closure1_slot34;
                var1 = '';
                var1 = var2.bind(var0)(var1);
                return var0;
            case 68:
                var0 = false;
                return var0;
        }
    };
    var10 = function arg0() {
        _fun96645: for (var _fun96645_ip = 0;;) switch (_fun96645_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var1 = _closure1_slot16;
                if (!(var2 === var1)) {
                    _fun96645_ip = 31;
                    continue _fun96645
                }
            case 19:
                var1 = _closure1_slot42;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 31:
                var0 = false;
                return var0;
        }
    };
    var7 = function() {
        _fun96646: for (var _fun96646_ip = 0;;) switch (_fun96646_ip) {
            case 0:
                var2 = _closure1_slot18;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun96646_ip = 31;
                    continue _fun96646
                }
            case 13:
                var3 = _closure1_slot18;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                _closure1_slot18 = var1;
            case 31:
                var1 = _closure1_slot33;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot42 = var7;
    var3 = global;
    var12 = var3.Object;
    var9 = var12.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var1);
    var14 = 0;
    var1 = var6[var14];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var13 = 1;
    var1 = var6[var13];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PrivateChannelRecord;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot16 = var9;
    var9 = var1.Consents;
    var1 = var1.RelationshipTypes;
    var _closure1_slot17 = var1;
    var1 = {};
    var1.FRIENDS = var14;
    var12 = 'FRIENDS';
    var1[var14] = var12;
    var1.GUILD_MEMBERS = var13;
    var9 = 'GUILD_MEMBERS';
    var1[var13] = var9;
    var13 = false;
    var _closure1_slot19 = var13;
    var15 = '';
    var _closure1_slot20 = var15;
    var _closure1_slot21 = var14;
    var _closure1_slot22 = var14;
    var14 = new Array(0);
    var _closure1_slot23 = var14;
    var _closure1_slot24 = var13;
    var3 = var3.Set;
    var13 = var3.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var3
        }
    });
    var19 = var13;
    var3 = new var19[var3](var18);
    var3 = var3 instanceof Object ? var3 : var13;
    var _closure1_slot25 = var3;
    var3 = null;
    var _closure1_slot26 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var15 = var3.SecondaryIndexMap;
    var3 = var15.prototype;
    var13 = Object.create(var3, {
        constructor: {
            value: var15
        }
    });
    var18 = function arg0() {
        _fun96647: for (var _fun96647_ip = 0;;) switch (_fun96647_ip) {
            case 0:
                var2 = arg0;
                var0 = new Array(0);
                var4 = _closure1_slot15;
                var3 = var4.getCurrentUser;
                var4 = var3.bind(var4)();
                var6 = _closure1_slot14;
                var5 = var6.isFriend;
                var3 = var2.user;
                var3 = var3.id;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun96647_ip = 103;
                    continue _fun96647
                }
            case 51:
                var2 = var2.user;
                var3 = var2.id;
                var2 = null;
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun96647_ip = 77;
                    continue _fun96647
                }
            case 72:
                var2 = var4.id;
            case 77:
                if (!(var3 !== var2)) {
                    _fun96647_ip = 123;
                    continue _fun96647
                }
            case 81:
                var3 = var0.push;
                var2 = _closure1_slot28;
                var2 = var2.GuildMembers;
                var2 = var3.bind(var0)(var2);
                _fun96647_ip = 123;
                continue _fun96647;
            case 103:
                var2 = var0.push;
                var1 = _closure1_slot28;
                var1 = var1.Friends;
                var1 = var2.bind(var0)(var1);
            case 123:
                return var0;
        }
    };
    var17 = function arg0() {
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 17;
        var1 = var5[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.stripDiacritics;
        var3 = _closure1_slot1;
        var0 = 16;
        var0 = var5[var0];
        var4 = var3.bind(var4)(var0);
        var3 = var4.getName;
        var0 = arg0;
        var0 = var0.user;
        var3 = var3.bind(var4)(var0);
        var0 = var3.toLocaleLowerCase;
        var0 = var0.bind(var3)();
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var19 = var13;
    var3 = new var19[var15](var18, var17, var16);
    var3 = var3 instanceof Object ? var3 : var13;
    var _closure1_slot27 = var3;
    var3 = {};
    var3.Friends = var12;
    var3.GuildMembers = var9;
    var _closure1_slot28 = var3;
    var3 = 19;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun96650: for (var _fun96650_ip = 0;;) switch (_fun96650_ip) {
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
                    var0 = _closure1_slot30;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96650_ip = 69;
                        continue _fun96650
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96650_ip = 105;
                    continue _fun96650;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var9 = var3.waitFor;
            var16 = _closure1_slot11;
            var15 = _closure1_slot12;
            var14 = _closure1_slot8;
            var13 = _closure1_slot13;
            var12 = _closure1_slot14;
            var11 = _closure1_slot9;
            var10 = _closure1_slot15;
            var17 = var3;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
            var4 = var3.syncWith;
            var1 = _closure1_slot15;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot11;
            var2[1] = var1;
            var1 = _closure1_slot35;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot14;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot36;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getResults';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasFriends';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSelectedUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getQuery';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot20;
            var0.query = var2;
            var2 = _closure1_slot22;
            var0.selectedRow = var2;
            var2 = _closure1_slot21;
            var0.selectedSection = var2;
            var2 = _closure1_slot25;
            var0.selectedUsers = var2;
            var2 = _closure1_slot23;
            var0.results = var2;
            var1 = _closure1_slot24;
            var0.hasFriends = var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSections';
        var4.key = var6;
        var5 = function() {
            var2 = _closure1_slot27;
            var0 = var2.indexes;
            var2 = var0.bind(var2)();
            var0 = _closure1_slot28;
            var0 = var0.Friends;
            var3 = var2[var0];
            var0 = new Array(2);
            var0[0] = var3;
            var1 = _closure1_slot28;
            var1 = var1.GuildMembers;
            var1 = var2[var1];
            var0[1] = var1;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'PrivateChannelRecipientsInviteStore';
    var9.displayName = var3;
    var3 = 20;
    var3 = var6[var3];
    var18 = var8.bind(var0)(var3);
    var3 = {};
    var12 = function() {
        var1 = _closure1_slot33;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.CONNECTION_OPEN = var12;
    var12 = function arg0() {
        _fun96659: for (var _fun96659_ip = 0;;) switch (_fun96659_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var2 = var0.channelId;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun96659_ip = 54;
                    continue _fun96659
                }
            case 19:
                var3 = _closure1_slot19;
                var4 = _closure1_slot33;
                var1 = undefined;
                var4 = var4.bind(var1)();
                _closure1_slot19 = var3;
                _closure1_slot26 = var2;
                var0 = _closure1_slot35;
                var0 = var0.bind(var1)();
                return var0;
            case 54:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var12;
    var3.MODAL_PUSH = var11;
    var3.SHOW_ACTION_SHEET = var11;
    var11 = function arg0() {
        var0 = true;
        _closure1_slot19 = var0;
        var2 = _closure1_slot36;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot41;
        var2 = var2.bind(var0)();
        _closure1_slot18 = var2;
        var2 = arg0;
        var2 = var2.channelId;
        _closure1_slot26 = var2;
        var2 = _closure1_slot34;
        var1 = '';
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN = var11;
    var3.MODAL_POP = var10;
    var3.HIDE_ACTION_SHEET = var10;
    var3.PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        _closure1_slot26 = var2;
        var2 = _closure1_slot34;
        var1 = var0.query;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.section;
        _closure1_slot21 = var2;
        var0 = var0.row;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var3.PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot25;
        var0 = var2.add;
        var0 = var0.bind(var2)(var3);
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot25;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot25 = var0;
        var0 = undefined;
        return var0;
    };
    var3.PRIVATE_CHANNEL_RECIPIENTS_ADD_USER = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot25;
        var0 = var2.delete;
        var0 = var0.bind(var2)(var3);
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot25;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot25 = var0;
        var0 = undefined;
        return var0;
    };
    var3.PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var19 = var7;
    var17 = var3;
    var3 = new var19[var9](var18, var17, var16);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot29 = var3;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PrivateChannelRecipientsInviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SearchResultSections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 6841, 1376, 1372, 4559, 5649, 3102, 1621, 660, 3089, 12584, 3237, 1607, 6696, 566, 806, 2]);