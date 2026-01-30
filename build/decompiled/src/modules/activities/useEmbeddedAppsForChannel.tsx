// modules/activities/useEmbeddedAppsForChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun103242: for (var _fun103242_ip = 0;;) switch (_fun103242_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun103242_ip = 45;
                    continue _fun103242
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun103242_ip = 54;
                    continue _fun103242
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun103242_ip = 344;
                    continue _fun103242
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun103242_ip = 322;
                    continue _fun103242
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun103242_ip = 282;
                    continue _fun103242
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun103242_ip = 269;
                    continue _fun103242
                }
            case 109:
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
                    _fun103242_ip = 162;
                    continue _fun103242
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun103242_ip = 178;
                    continue _fun103242
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun103242_ip = 248;
                    continue _fun103242
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun103242_ip = 248;
                    continue _fun103242
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun103242_ip = 233;
                    continue _fun103242
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun103242_ip = 246;
                    continue _fun103242
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun103242_ip = 264;
                continue _fun103242;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun103242_ip = 282;
                continue _fun103242;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun103242_ip = 322;
                    continue _fun103242
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun103242_ip = 329;
                    continue _fun103242
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun103243: for (var _fun103243_ip = 0;;) switch (_fun103243_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun103243_ip = 56;
                                continue _fun103243
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
                            _fun103243_ip = 67;
                            continue _fun103243;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun103244: for (var _fun103244_ip = 0;;) switch (_fun103244_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun103244_ip = 23;
                    continue _fun103244
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun103244_ip = 33;
                    continue _fun103244
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
                    _fun103244_ip = 70;
                    continue _fun103244
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun103244_ip = 55;
                    continue _fun103244
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function(arg0, arg1) { // Original name: useEmbeddedApps, environment: var1
        _fun103245: for (var _fun103245_ip = 0;;) switch (_fun103245_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var4;
                var2 = var7.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.applicationId;
                    return var0;
                };
                var3 = var2.bind(var7)(var1);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var8 = undefined;
                var2 = var5.bind(var8)(var2);
                var6 = var2.bind(var8)(var3);
                var _closure2_slot2 = var6;
                var2 = global;
                var5 = var2.Set;
                var2 = var5.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var15 = new Array(0);
                var16 = var3;
                var2 = new var16[var5](var15, var14);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot3 = var2;
                var3 = _closure1_slot8;
                var9 = var3.bind(var8)(var7);
                var5 = var9.bind(var8)();
                var3 = var5.done;
                if (var3) {
                    _fun103245_ip = 201;
                    continue _fun103245
                }
            case 124:
                var10 = _closure1_slot8;
                var3 = var5.value;
                var3 = var3.userIds;
                var11 = var10.bind(var8)(var3);
                var10 = var11.bind(var8)();
                var3 = var10.done;
                if (var3) {
                    _fun103245_ip = 186;
                    continue _fun103245
                }
            case 156:
                var12 = var10.value;
                var3 = var2.add;
                var3 = var3.bind(var2)(var12);
                var12 = var11.bind(var8)();
                var3 = var12.done;
                var10 = var12;
                if (!var3) {
                    _fun103245_ip = 156;
                    continue _fun103245
                }
            case 186:
                var10 = var9.bind(var8)();
                var3 = var10.done;
                var5 = var10;
                if (!var3) {
                    _fun103245_ip = 124;
                    continue _fun103245
                }
            case 201:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 4;
                var3 = var9[var3];
                var9 = var5.bind(var8)(var3);
                var8 = var9.useStateFromStoresArray;
                var3 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun103247: for (var _fun103247_ip = 0;;) switch (_fun103247_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot8;
                            var1 = _closure2_slot3;
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun103247_ip = 82;
                                continue _fun103247
                            }
                        case 37:
                            var8 = var2.value;
                            var6 = var0.push;
                            var7 = _closure1_slot5;
                            var1 = var7.getUser;
                            var1 = var1.bind(var7)(var8);
                            var1 = var6.bind(var0)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun103247_ip = 37;
                                continue _fun103247
                            }
                        case 82:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5, var2, var3);
                var _closure2_slot4 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var1](var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot4;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var0
                        _fun103249: for (var _fun103249_ip = 0;;) switch (_fun103249_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun103249_ip = 32;
                                    continue _fun103249
                                }
                            case 9:
                                var2 = _closure3_slot0;
                                var1 = var2.set;
                                var0 = var3.id;
                                var0 = var1.bind(var2)(var0, var3);
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun103250: for (var _fun103250_ip = 0;;) switch (_fun103250_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure2_slot2;
                                var0 = arg1;
                                var3 = var1[var0];
                                var2 = new Array(0);
                                var1 = _closure1_slot8;
                                var0 = var4.userIds;
                                var9 = undefined;
                                var8 = var1.bind(var9)(var0);
                                var5 = var8.bind(var9)();
                                var1 = var5.done;
                                var0 = null;
                                var6 = var5;
                                var5 = undefined;
                                if (var1) {
                                    _fun103250_ip = 147;
                                    continue _fun103250
                                }
                            case 63:
                                var12 = var6.value;
                                var11 = _closure3_slot0;
                                var1 = var11.get;
                                var12 = var1.bind(var11)(var12);
                                var11 = var5;
                                if (!(var0 != var12)) {
                                    _fun103250_ip = 129;
                                    continue _fun103250
                                }
                            case 89:
                                var1 = _closure2_slot1;
                                var11 = var5;
                                if (!(var0 != var1)) {
                                    _fun103250_ip = 129;
                                    continue _fun103250
                                }
                            case 100:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var9)(var12);
                                var11 = var1;
                                if (!(var0 != var1)) {
                                    _fun103250_ip = 129;
                                    continue _fun103250
                                }
                            case 116:
                                var12 = var2.push;
                                var12 = var12.bind(var2)(var1);
                                var11 = var1;
                            case 129:
                                var12 = var8.bind(var9)();
                                var1 = var12.done;
                                var5 = var11;
                                var6 = var12;
                                if (!var1) {
                                    _fun103250_ip = 63;
                                    continue _fun103250
                                }
                            case 147:
                                var1 = var0 == var3;
                                var0 = null;
                                if (var1) {
                                    _fun103250_ip = 177;
                                    continue _fun103250
                                }
                            case 156:
                                var1 = {};
                                var1.embeddedActivity = var4;
                                var1.application = var3;
                                var1.userParticipantAvatarUrls = var2;
                                var0 = var1;
                            case 177:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NO_ACTIVITIES;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useEmbeddedAppsForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: useEmbeddedAppsForChannel, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot10;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var4 = var4[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var4);
        var4 = var5.useStateFromStoresArray;
        var6 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            _fun103252: for (var _fun103252_ip = 0;;) switch (_fun103252_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun103252_ip = 43;
                        continue _fun103252
                    }
                case 13:
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    if (!(var2 != var0)) {
                        _fun103252_ip = 43;
                        continue _fun103252
                    }
                case 26:
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var0 = '';
                    if (!(var0 === var2)) {
                        _fun103252_ip = 52;
                        continue _fun103252
                    }
                case 43:
                    var0 = _closure1_slot7;
                    _fun103252_ip = 79;
                    continue _fun103252;
                case 52:
                    var3 = _closure1_slot6;
                    var2 = var3.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 79:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1, var0);
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var4;
    var4 = function(arg0) { // Original name: useEmbeddedAppsByChannel, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot10;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun103254: for (var _fun103254_ip = 0;;) switch (_fun103254_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun103254_ip = 22;
                        continue _fun103254
                    }
                case 13:
                    var0 = _closure1_slot7;
                    _fun103254_ip = 44;
                    continue _fun103254;
                case 22:
                    var3 = _closure1_slot6;
                    var2 = var3.getEmbeddedActivitiesForGuild;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 44:
                    return var0;
            }
        };
        var2 = var6.bind(var7)(var5, var2);
        var4 = var4.bind(var3)(var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = global;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var3 = _closure2_slot1;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun103256: for (var _fun103256_ip = 0;;) switch (_fun103256_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getEmbeddedActivityLocationChannelId;
                        var1 = var5.embeddedActivity;
                        var1 = var1.location;
                        var4 = var2.bind(var3)(var1);
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun103256_ip = 106;
                            continue _fun103256
                        }
                    case 56:
                        var6 = _closure3_slot0;
                        var3 = var6.get;
                        var3 = var3.bind(var6)(var4);
                        if (!(var2 == var3)) {
                            _fun103256_ip = 81;
                            continue _fun103256
                        }
                    case 77:
                        var3 = new Array(0);
                    case 81:
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var5);
                        var2 = _closure3_slot0;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var4, var3);
                    case 106:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useEmbeddedAppsByChannel = var4;
    var2.useEmbeddedApps = var3;
    var1 = function(arg0) { // Original name: useEmbeddedAppsWithPresence, environment: var1
        var9 = arg0;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 4;
        var3 = var8[var1];
        var6 = undefined;
        var5 = var7.bind(var6)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var10 = var1.statesWillNeverBeEqual;
        var12 = function() { // Environment: var0
            var0 = global;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun103259: for (var _fun103259_ip = 0;;) switch (_fun103259_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot4;
                        var3 = var4.findActivity;
                        var7 = null;
                        var6 = var7 == var5;
                        var0 = undefined;
                        var2 = undefined;
                        if (var6) {
                            _fun103259_ip = 70;
                            continue _fun103259
                        }
                    case 35:
                        var6 = var5.embeddedActivity;
                        var8 = var6.userIds;
                        var6 = var8.values;
                        var8 = var6.bind(var8)();
                        var6 = var8.next;
                        var6 = var6.bind(var8)();
                        var2 = var6.value;
                    case 70:
                        var1 = function(arg0) { // Environment: var1
                            _fun103260: for (var _fun103260_ip = 0;;) switch (_fun103260_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.application_id;
                                    var0 = _closure4_slot0;
                                    var3 = null;
                                    var5 = var3 == var0;
                                    var0 = undefined;
                                    if (var5) {
                                        _fun103260_ip = 50;
                                        continue _fun103260
                                    }
                                case 27:
                                    var2 = _closure4_slot0;
                                    var2 = var2.application;
                                    var3 = var3 == var2;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun103260_ip = 50;
                                        continue _fun103260
                                    }
                                case 45:
                                    var0 = var2.id;
                                case 50:
                                    var0 = var1 === var0;
                                    return var0;
                            }
                        };
                        var6 = var3.bind(var4)(var2, var1);
                        var4 = _closure3_slot0;
                        var3 = var4.set;
                        var1 = var7 == var5;
                        var2 = undefined;
                        if (var1) {
                            _fun103259_ip = 123;
                            continue _fun103259
                        }
                    case 104:
                        var1 = var5.application;
                        var7 = var7 == var1;
                        var2 = undefined;
                        if (var7) {
                            _fun103259_ip = 123;
                            continue _fun103259
                        }
                    case 118:
                        var2 = var1.id;
                    case 123:
                        var1 = {};
                        var10 = var1;
                        var9 = var5;
                        var5 = copyDataProperties(var10, var9);
                        var5 = 'presenceActivity';
                        var1[var5] = var6;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var14 = var5;
        var13 = var3;
        var11 = var2;
        var0 = var14[var4](var13, var12, var11, var10, var9);
        return var0;
    };
    var2.useEmbeddedAppsWithPresence = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3569, 1613, 1371, 566, 3040, 6842, 1304, 2]);