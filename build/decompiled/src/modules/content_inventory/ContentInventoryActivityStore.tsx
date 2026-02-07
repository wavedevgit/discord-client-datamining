// modules/content_inventory/ContentInventoryActivityStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun62928: for (var _fun62928_ip = 0;;) switch (_fun62928_ip) {
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
            case 70: // try_end0
                _fun62928_ip = 74;
                continue _fun62928;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun62931: for (var _fun62931_ip = 0;;) switch (_fun62931_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun62931_ip = 46;
                    continue _fun62931
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun62931_ip = 55;
                    continue _fun62931
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun62931_ip = 343;
                    continue _fun62931
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun62931_ip = 323;
                    continue _fun62931
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun62931_ip = 283;
                    continue _fun62931
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun62931_ip = 270;
                    continue _fun62931
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
                    _fun62931_ip = 163;
                    continue _fun62931
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun62931_ip = 179;
                    continue _fun62931
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun62931_ip = 249;
                    continue _fun62931
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun62931_ip = 249;
                    continue _fun62931
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun62931_ip = 234;
                    continue _fun62931
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun62931_ip = 247;
                    continue _fun62931
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun62931_ip = 265;
                continue _fun62931;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun62931_ip = 283;
                continue _fun62931;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun62931_ip = 323;
                    continue _fun62931
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
                    _fun62931_ip = 330;
                    continue _fun62931
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun62932: for (var _fun62932_ip = 0;;) switch (_fun62932_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun62932_ip = 56;
                                continue _fun62932
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
                            _fun62932_ip = 67;
                            continue _fun62932;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun62933: for (var _fun62933_ip = 0;;) switch (_fun62933_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun62933_ip = 23;
                    continue _fun62933
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun62933_ip = 33;
                    continue _fun62933
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
                    _fun62933_ip = 70;
                    continue _fun62933
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun62933_ip = 55;
                    continue _fun62933
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.author_id;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot16 = var1;
    var0 = function arg0() {
        _fun62935: for (var _fun62935_ip = 0;;) switch (_fun62935_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 9;
                var0 = var0[var6];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.isEntryExpired;
                var1 = var0.bind(var1)(var3);
                var0 = null;
                if (var1) {
                    _fun62935_ip = 166;
                    continue _fun62935
                }
            case 50:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var5 = var5.bind(var7)(var1);
                var1 = var5.isEntryActive;
                var5 = var1.bind(var5)(var3);
                var1 = undefined;
                if (!var5) {
                    _fun62935_ip = 163;
                    continue _fun62935
                }
            case 83:
                var6 = var3.author_type;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 10;
                var5 = var9[var5];
                var5 = var8.bind(var7)(var5);
                var5 = var5.ContentInventoryAuthorType;
                var5 = var5.USER;
                var1 = undefined;
                if (!(var6 === var5)) {
                    _fun62935_ip = 163;
                    continue _fun62935
                }
            case 127:
                var5 = _closure1_slot8;
                var4 = var5.getActivities;
                var3 = var3.author_id;
                var4 = var4.bind(var5)(var3);
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    _fun62936: for (var _fun62936_ip = 0;;) switch (_fun62936_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4.type;
                            var0 = _closure1_slot10;
                            var0 = var0.PLAYING;
                            if (!(var1 === var0)) {
                                _fun62936_ip = 68;
                                continue _fun62936
                            }
                        case 25:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 11;
                            var0 = var3[var0];
                            var5 = undefined;
                            var6 = var1.bind(var5)(var0);
                            var3 = var6.isApplicationEntry;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var6)(var0);
                            if (var0) {
                                _fun62936_ip = 182;
                                continue _fun62936
                            }
                        case 68:
                            var3 = var4.type;
                            var0 = _closure1_slot10;
                            var0 = var0.LISTENING;
                            var3 = var3 !== var0;
                            if (var3) {
                                _fun62936_ip = 133;
                                continue _fun62936
                            }
                        case 90:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var6 = var6[var0];
                            var0 = undefined;
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.isListenedSessionEntry;
                            var0 = _closure2_slot0;
                            var0 = var6.bind(var7)(var0);
                            var3 = !var0;
                        case 133:
                            var0 = !var3;
                            if (var3) {
                                _fun62936_ip = 180;
                                continue _fun62936
                            }
                        case 139:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 12;
                            var6 = var6[var3];
                            var3 = undefined;
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.isMatchingListeningActivity;
                            var3 = _closure2_slot0;
                            var0 = var6.bind(var7)(var3, var4);
                        case 180:
                            _fun62936_ip = 218;
                            continue _fun62936;
                        case 182:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 12;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.isMatchingApplicationActivity;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var4);
                        case 218:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 163:
                var0 = var1;
            case 166:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun62937: for (var _fun62937_ip = 0;;) switch (_fun62937_ip) {
            case 0:
                var0 = global;
                var1 = var0.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var13 = var2;
                var1 = new var13[var1](var12);
                var2 = var1 instanceof Object ? var1 : var2;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var1;
                var0 = new var13[var0](var12);
                var1 = var0 instanceof Object ? var0 : var1;
                var3 = _closure1_slot14;
                var6 = undefined;
                var0 = arg0;
                var5 = var3.bind(var6)(var0);
                var3 = var5.bind(var6)();
                var0 = var3.done;
                var4 = var3;
                var3 = undefined;
                if (var0) {
                    _fun62937_ip = 199;
                    continue _fun62937
                }
            case 88:
                var0 = var4.value;
                var9 = _closure1_slot17;
                var8 = var0.content;
                var10 = var9.bind(var6)(var8);
                if (!(var6 !== var10)) {
                    _fun62937_ip = 184;
                    continue _fun62937
                }
            case 111:
                var8 = _closure1_slot16;
                var0 = var0.content;
                var0 = var8.bind(var6)(var0);
                var8 = var1.add;
                var8 = var8.bind(var1)(var0);
                var9 = _closure1_slot12;
                var8 = var9.get;
                var8 = var8.bind(var9)(var0);
                var3 = var0;
                if (!(var10 !== var8)) {
                    _fun62937_ip = 184;
                    continue _fun62937
                }
            case 156:
                var8 = var2.add;
                var8 = var8.bind(var2)(var0);
                var9 = _closure1_slot12;
                var8 = var9.set;
                var8 = var8.bind(var9)(var0, var10);
                var3 = var0;
            case 184:
                var8 = var5.bind(var6)();
                var0 = var8.done;
                var4 = var8;
                if (!var0) {
                    _fun62937_ip = 88;
                    continue _fun62937
                }
            case 199:
                var0 = {};
                var0.updatedKeys = var2;
                var0.matchedKeys = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun62938: for (var _fun62938_ip = 0;;) switch (_fun62938_ip) {
            case 0:
                var0 = global;
                var3 = var0.Array;
                var2 = var3.from;
                var4 = _closure1_slot12;
                var1 = var4.keys;
                var1 = var1.bind(var4)();
                var7 = var2.bind(var3)(var1);
                var1 = var0.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var2;
                var1 = new var20[var1](var19);
                var10 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var10;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var1;
                var0 = new var20[var0](var19);
                var9 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot14;
                var2 = _closure1_slot9;
                var0 = var2.getFeeds;
                var2 = var0.bind(var2)();
                var0 = var2.values;
                var0 = var0.bind(var2)();
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var8 = 0;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun62938_ip = 351;
                    continue _fun62938
                }
            case 152:
                var13 = var3.value;
                var12 = _closure1_slot18;
                var1 = var10.size;
                if (!(!(var1 > var8))) {
                    _fun62938_ip = 178;
                    continue _fun62938
                }
            case 170:
                var1 = var13.entries;
                _fun62938_ip = 199;
                continue _fun62938;
            case 178:
                var15 = var13.entries;
                var14 = var15.filter;
                var13 = function(arg0) { // Environment: var11
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var4 = _closure1_slot16;
                    var0 = arg0;
                    var3 = var0.content;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var14.bind(var15)(var13);
            case 199:
                var12 = var12.bind(var5)(var1);
                var1 = var12.updatedKeys;
                var13 = var12.matchedKeys;
                var12 = _closure1_slot14;
                var15 = var12.bind(var5)(var1);
                var14 = var15.bind(var5)();
                var12 = var14.done;
                if (var12) {
                    _fun62938_ip = 267;
                    continue _fun62938
                }
            case 237:
                var16 = var14.value;
                var12 = var10.add;
                var12 = var12.bind(var10)(var16);
                var16 = var15.bind(var5)();
                var12 = var16.done;
                var14 = var16;
                if (!var12) {
                    _fun62938_ip = 237;
                    continue _fun62938
                }
            case 267:
                var12 = _closure1_slot14;
                var14 = var12.bind(var5)(var13);
                var13 = var14.bind(var5)();
                var12 = var13.done;
                if (var12) {
                    _fun62938_ip = 318;
                    continue _fun62938
                }
            case 288:
                var15 = var13.value;
                var12 = var9.add;
                var12 = var12.bind(var9)(var15);
                var15 = var14.bind(var5)();
                var12 = var15.done;
                var13 = var15;
                if (!var12) {
                    _fun62938_ip = 288;
                    continue _fun62938
                }
            case 318:
                if (var2) {
                    _fun62938_ip = 330;
                    continue _fun62938
                }
            case 321:
                var1 = var1.size;
                var2 = var1 > var8;
            case 330:
                var13 = var4.bind(var5)();
                var1 = var13.done;
                var3 = var13;
                var0 = var2;
                if (!var1) {
                    _fun62938_ip = 152;
                    continue _fun62938
                }
            case 351:
                var2 = _closure1_slot14;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var4 = var3.bind(var5)(var1);
                var3 = var4.difference;
                var1 = new Array(0);
                var19 = var1;
                var18 = var9;
                var17 = 0;
                var8 = arraySpread(var19, var18, var17);
                var1 = var3.bind(var4)(var7, var1);
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                if (var1) {
                    _fun62938_ip = 456;
                    continue _fun62938
                }
            case 420:
                var8 = var2.value;
                var7 = _closure1_slot12;
                var1 = var7.delete;
                var1 = var1.bind(var7)(var8);
                var7 = var4.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                var0 = true;
                if (!var1) {
                    _fun62938_ip = 420;
                    continue _fun62938
                }
            case 456:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.ActivityTypes;
    var _closure1_slot10 = var8;
    var10 = var3.Set;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.ContentInventoryEntryType;
    var9 = var8.LISTENED_SESSION;
    var8 = new Array(1);
    var8[0] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var14 = var9;
    var13 = var8;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var3 = var3.Map;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var14 = var8;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot12 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function arg0() {
            _fun62941: for (var _fun62941_ip = 0;;) switch (_fun62941_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun62941_ip = 86;
                        continue _fun62941
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun62941_ip = 120;
                    continue _fun62941;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function(arg0) { // Environment: var1
                        _fun62942: for (var _fun62942_ip = 0;;) switch (_fun62942_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var0 = var2.isEntryExpired;
                                var0 = var0.bind(var2)(var4);
                                var0 = !var0;
                                if (!var0) {
                                    _fun62942_ip = 98;
                                    continue _fun62942
                                }
                            case 45:
                                var3 = _closure1_slot11;
                                var2 = var3.has;
                                var1 = var4.content_type;
                                var1 = var2.bind(var3)(var1);
                                var1 = !var1;
                                if (var1) {
                                    _fun62942_ip = 95;
                                    continue _fun62942
                                }
                            case 71:
                                var3 = _closure3_slot0;
                                var2 = var3.getMatchingActivity;
                                var3 = var2.bind(var3)(var4);
                                var2 = null;
                                var1 = var2 != var3;
                            case 95:
                                var0 = var1;
                            case 98:
                                return var0;
                        }
                    };
                    var0.canRenderContent = var1;
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
            var4 = var3.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot8;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot19;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMatchingActivity';
        var4.key = var6;
        var5 = function arg0() {
            _fun62944: for (var _fun62944_ip = 0;;) switch (_fun62944_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var0 = var3[var0];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.isEntryExpired;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    if (var2) {
                        _fun62944_ip = 67;
                        continue _fun62944
                    }
                case 44:
                    var3 = _closure1_slot12;
                    var2 = var3.get;
                    var1 = _closure1_slot16;
                    var1 = var1.bind(var4)(var5);
                    var0 = var2.bind(var3)(var1);
                case 67:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ContentInventoryActivityStore';
    var8.displayName = var3;
    var3 = 15;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var1 = _closure1_slot12;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var9;
    var4 = function arg0() {
        var0 = arg0;
        var0 = var0.feed;
        var2 = _closure1_slot18;
        var1 = var0.entries;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.updatedKeys;
        var1 = var0.size;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var3.CONTENT_INVENTORY_SET_FEED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/ContentInventoryActivityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.entryToKey = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3611, 7904, 660, 6909, 6914, 7907, 7900, 7905, 22, 566, 806, 2]);