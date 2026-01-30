// modules/forums/ForumActivePostStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun61277: for (var _fun61277_ip = 0;;) switch (_fun61277_ip) {
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
                _fun61277_ip = 74;
                continue _fun61277;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot29 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun61280: for (var _fun61280_ip = 0;;) switch (_fun61280_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun61280_ip = 45;
                    continue _fun61280
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun61280_ip = 54;
                    continue _fun61280
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun61280_ip = 342;
                    continue _fun61280
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun61280_ip = 322;
                    continue _fun61280
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun61280_ip = 282;
                    continue _fun61280
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun61280_ip = 269;
                    continue _fun61280
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
                    _fun61280_ip = 162;
                    continue _fun61280
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun61280_ip = 178;
                    continue _fun61280
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun61280_ip = 248;
                    continue _fun61280
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun61280_ip = 248;
                    continue _fun61280
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun61280_ip = 233;
                    continue _fun61280
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun61280_ip = 246;
                    continue _fun61280
                }
            case 233:
                var8 = _closure1_slot31;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun61280_ip = 264;
                continue _fun61280;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun61280_ip = 282;
                continue _fun61280;
            case 269:
                var6 = _closure1_slot31;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun61280_ip = 322;
                    continue _fun61280
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
                    _fun61280_ip = 329;
                    continue _fun61280
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun61281: for (var _fun61281_ip = 0;;) switch (_fun61281_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun61281_ip = 56;
                                continue _fun61281
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
                            _fun61281_ip = 67;
                            continue _fun61281;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun61282: for (var _fun61282_ip = 0;;) switch (_fun61282_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun61282_ip = 23;
                    continue _fun61282
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun61282_ip = 33;
                    continue _fun61282
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
                    _fun61282_ip = 70;
                    continue _fun61282
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun61282_ip = 55;
                    continue _fun61282
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: getLastMessageId, environment: var1
        _fun61283: for (var _fun61283_ip = 0;;) switch (_fun61283_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot12;
                var1 = var2.lastMessageId;
                var1 = var1.bind(var2)(var0);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun61283_ip = 30;
                    continue _fun61283
                }
            case 27:
                var0 = var1;
            case 30:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: getSortFunction, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun61285: for (var _fun61285_ip = 0;;) switch (_fun61285_ip) {
                case 0:
                    var8 = arg0;
                    var4 = arg1;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 14;
                    var0 = var0[var5];
                    var7 = undefined;
                    var1 = var1.bind(var7)(var0);
                    var0 = var1.isForumPostPinned;
                    var1 = var0.bind(var1)(var8);
                    var0 = -1;
                    if (var1) {
                        _fun61285_ip = 220;
                        continue _fun61285
                    }
                case 54:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var2 = var2.bind(var7)(var1);
                    var1 = var2.isForumPostPinned;
                    var2 = var1.bind(var2)(var4);
                    var1 = 1;
                    if (var2) {
                        _fun61285_ip = 217;
                        continue _fun61285
                    }
                case 91:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.ThreadSortOrder;
                    var2 = var2.LATEST_ACTIVITY;
                    if (!(var5 !== var2)) {
                        _fun61285_ip = 168;
                        continue _fun61285
                    }
                case 134:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var5 = var5.bind(var7)(var2);
                    var2 = var5.compare;
                    var2 = var2.bind(var5)(var4, var8);
                    _fun61285_ip = 214;
                    continue _fun61285;
                case 168:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 15;
                    var5 = var9[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.compare;
                    var3 = _closure1_slot32;
                    var4 = var3.bind(var7)(var4);
                    var3 = var3.bind(var7)(var8);
                    var2 = var5.bind(var6)(var4, var3);
                case 214:
                    var1 = var2;
                case 217:
                    var0 = var1;
                case 220:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() { // Original name: resetState, environment: var1
        var0 = new Array(0);
        _closure1_slot22 = var0;
        var0 = null;
        var _closure1_slot14 = var0;
        _closure1_slot17 = var0;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var9 = var2;
        var0 = new var9[var0](var8);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot18 = var0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 11;
        var2 = var4[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = var2.ThreadSortOrder;
        var2 = var2.LATEST_ACTIVITY;
        _closure1_slot19 = var2;
        var2 = 12;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var2 = var2.ThreadSearchTagSetting;
        var2 = var2.MATCH_SOME;
        _closure1_slot20 = var2;
        var2 = 0;
        _closure1_slot21 = var2;
        var2 = new Array(0);
        _closure1_slot24 = var2;
        var3 = _closure1_slot1;
        var2 = 13;
        var5 = var4[var2];
        var7 = var3.bind(var0)(var5);
        var6 = var7.chain;
        var5 = _closure1_slot15;
        var5 = var6.bind(var7)(var5);
        _closure1_slot25 = var5;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.chain;
        var2 = _closure1_slot15;
        var2 = var3.bind(var4)(var2);
        _closure1_slot26 = var2;
        var3 = _closure1_slot28;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot27;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot34 = var0;
    var4 = function() { // Original name: maybeRebuildState, environment: var1
        _fun61287: for (var _fun61287_ip = 0;;) switch (_fun61287_ip) {
            case 0:
                var2 = _closure1_slot13;
                var1 = var2.getChannelId;
                var4 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var4)) {
                    _fun61287_ip = 76;
                    continue _fun61287
                }
            case 23:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var4);
                if (!(var1 != var2)) {
                    _fun61287_ip = 76;
                    continue _fun61287
                }
            case 41:
                var1 = var2.isForumLikeChannel;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun61287_ip = 76;
                    continue _fun61287
                }
            case 54:
                var3 = _closure1_slot35;
                var2 = {};
                var1 = true;
                var2.refreshThreadIds = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            case 76:
                var1 = _closure1_slot34;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
        }
    };
    var0 = function(arg0) { // Original name: rebuildState, environment: var1
        _fun61288: for (var _fun61288_ip = 0;;) switch (_fun61288_ip) {
            case 0:
                var6 = arg0;
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var0 = _closure1_slot17;
                var3 = var3.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun61288_ip = 617;
                    continue _fun61288
                }
            case 35:
                var4 = var0 != var6;
                if (!var4) {
                    _fun61288_ip = 48;
                    continue _fun61288
                }
            case 42:
                var4 = var6.refreshThreadIds;
            case 48:
                if (!var4) {
                    _fun61288_ip = 126;
                    continue _fun61288
                }
            case 51:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var9 = _closure1_slot8;
                var8 = var9.getThreadsForParent;
                var7 = var3.guild_id;
                var3 = var3.id;
                var3 = var8.bind(var9)(var7, var3);
                var5 = var4.bind(var5)(var3);
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                _closure1_slot24 = var3;
                var3 = 0;
                _closure1_slot21 = var3;
                var3 = true;
                _closure1_slot23 = var3;
            case 126:
                var3 = _closure1_slot27;
                var3 = var3.size;
                var5 = 0;
                if (!(var5 !== var3)) {
                    _fun61288_ip = 178;
                    continue _fun61288
                }
            case 141:
                var7 = _closure1_slot24;
                var4 = var7.filter;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot27;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var4.bind(var7)(var3);
                _closure1_slot24 = var3;
                var4 = _closure1_slot27;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
            case 178:
                var3 = _closure1_slot28;
                var3 = var3.size;
                if (!(var5 !== var3)) {
                    _fun61288_ip = 284;
                    continue _fun61288
                }
            case 191:
                var3 = global;
                var7 = var3.Array;
                var4 = var7.from;
                var9 = var3.Set;
                var15 = _closure1_slot24;
                var3 = new Array(0);
                var16 = var3;
                var14 = 0;
                var14 = arraySpread(var16, var15, var14);
                var15 = _closure1_slot28;
                var16 = var3;
                var8 = arraySpread(var16, var15, var14);
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var17 = var8;
                var16 = var3;
                var3 = new var17[var9](var16, var15);
                var3 = var3 instanceof Object ? var3 : var8;
                var3 = var4.bind(var7)(var3);
                _closure1_slot24 = var3;
                var4 = _closure1_slot28;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
            case 284:
                var3 = var0 != var6;
                if (!var3) {
                    _fun61288_ip = 297;
                    continue _fun61288
                }
            case 291:
                var3 = var6.refreshThreadIds;
            case 297:
                if (var3) {
                    _fun61288_ip = 316;
                    continue _fun61288
                }
            case 300:
                var4 = var0 != var6;
                if (!var4) {
                    _fun61288_ip = 313;
                    continue _fun61288
                }
            case 307:
                var4 = var6.sortThreadIds;
            case 313:
                var3 = var4;
            case 316:
                if (!var3) {
                    _fun61288_ip = 476;
                    continue _fun61288
                }
            case 322:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 13;
                var3 = var10[var4];
                var8 = undefined;
                var9 = var6.bind(var8)(var3);
                var7 = var9.chain;
                var3 = _closure1_slot24;
                var13 = var7.bind(var9)(var3);
                var12 = var13.sort;
                var7 = _closure1_slot33;
                var9 = _closure1_slot0;
                var3 = 11;
                var11 = var10[var3];
                var11 = var9.bind(var8)(var11);
                var11 = var11.ThreadSortOrder;
                var11 = var11.LATEST_ACTIVITY;
                var11 = var7.bind(var8)(var11);
                var11 = var12.bind(var13)(var11);
                _closure1_slot26 = var11;
                var4 = var10[var4];
                var11 = var6.bind(var8)(var4);
                var6 = var11.chain;
                var4 = _closure1_slot24;
                var6 = var6.bind(var11)(var4);
                var4 = var6.sort;
                var3 = var10[var3];
                var3 = var9.bind(var8)(var3);
                var3 = var3.ThreadSortOrder;
                var3 = var3.CREATION_DATE;
                var3 = var7.bind(var8)(var3);
                var3 = var4.bind(var6)(var3);
                _closure1_slot25 = var3;
            case 476:
                var4 = _closure1_slot19;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 11;
                var3 = var7[var3];
                var9 = undefined;
                var3 = var6.bind(var9)(var3);
                var3 = var3.ThreadSortOrder;
                var3 = var3.LATEST_ACTIVITY;
                if (!(var4 !== var3)) {
                    _fun61288_ip = 524;
                    continue _fun61288
                }
            case 518:
                var4 = _closure1_slot25;
                _fun61288_ip = 528;
                continue _fun61288;
            case 524:
                var4 = _closure1_slot26;
            case 528:
                var3 = var4.value;
                var6 = var3.bind(var4)();
                var3 = _closure1_slot18;
                var3 = var3.size;
                var4 = var6;
                if (!(var5 !== var3)) {
                    _fun61288_ip = 582;
                    continue _fun61288
                }
            case 553:
                var5 = var6.filter;
                var8 = _closure1_slot18;
                var7 = _closure1_slot20;
                var3 = function(arg0, arg1) { // Original name: getFilterFunction, environment: var2
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var0 = function(arg0) { // Environment: var0
                        _fun61292: for (var _fun61292_ip = 0;;) switch (_fun61292_ip) {
                            case 0:
                                var3 = _closure1_slot11;
                                var2 = var3.getChannel;
                                var0 = arg0;
                                var3 = var2.bind(var3)(var0);
                                var0 = null;
                                var5 = var0 == var3;
                                var4 = undefined;
                                var2 = undefined;
                                if (var5) {
                                    _fun61292_ip = 39;
                                    continue _fun61292
                                }
                            case 33:
                                var2 = var3.appliedTags;
                            case 39:
                                if (!(var0 != var2)) {
                                    _fun61292_ip = 198;
                                    continue _fun61292
                                }
                            case 46:
                                var3 = var2.length;
                                var0 = 0;
                                if (!(var0 !== var3)) {
                                    _fun61292_ip = 198;
                                    continue _fun61292
                                }
                            case 60:
                                var5 = _closure3_slot1;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 12;
                                var3 = var7[var3];
                                var3 = var6.bind(var4)(var3);
                                var3 = var3.ThreadSearchTagSetting;
                                var3 = var3.MATCH_SOME;
                                if (!(var5 !== var3)) {
                                    _fun61292_ip = 178;
                                    continue _fun61292
                                }
                            case 103:
                                var1 = _closure1_slot30;
                                var3 = _closure3_slot0;
                                var0 = var3.values;
                                var0 = var0.bind(var3)();
                                var3 = var1.bind(var4)(var0);
                                var1 = var3.bind(var4)();
                                var0 = var1.done;
                                if (var0) {
                                    _fun61292_ip = 174;
                                    continue _fun61292
                                }
                            case 137:
                                var5 = var1.value;
                                var0 = var2.includes;
                                var0 = var0.bind(var2)(var5);
                                if (var0) {
                                    _fun61292_ip = 159;
                                    continue _fun61292
                                }
                            case 155:
                                var0 = false;
                                return var0;
                            case 159:
                                var5 = var3.bind(var4)();
                                var0 = var5.done;
                                var1 = var5;
                                if (!var0) {
                                    _fun61292_ip = 137;
                                    continue _fun61292
                                }
                            case 174:
                                var0 = true;
                                return var0;
                            case 178:
                                var1 = var2.some;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure3_slot0;
                                    var1 = var2.has;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            case 198:
                                var0 = false;
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var9)(var8, var7);
                var4 = var5.bind(var6)(var3);
            case 582:
                _closure1_slot22 = var4;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    _fun61294: for (var _fun61294_ip = 0;;) switch (_fun61294_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getCount;
                            var0 = arg0;
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 === var2;
                            if (var0) {
                                _fun61294_ip = 36;
                                continue _fun61294
                            }
                        case 30:
                            var1 = 0;
                            var0 = var1 === var2;
                        case 36:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var3 = var0 == var2;
                var0 = null;
                if (var3) {
                    _fun61288_ip = 613;
                    continue _fun61288
                }
            case 610:
                var0 = var2;
            case 613:
                _closure1_slot14 = var0;
            case 617:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var8 = 0;
    var9 = var6[var8];
    var0 = undefined;
    var9 = var7.bind(var0)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot11 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot12 = var9;
    var9 = 10;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot13 = var9;
    var10 = new Array(0);
    var _closure1_slot15 = var10;
    var9 = null;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var9;
    var9 = var3.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var15 = var11;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot18 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.ThreadSortOrder;
    var9 = var9.LATEST_ACTIVITY;
    var _closure1_slot19 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.ThreadSearchTagSetting;
    var9 = var9.MATCH_SOME;
    var _closure1_slot20 = var9;
    var _closure1_slot21 = var8;
    var8 = new Array(0);
    var _closure1_slot22 = var8;
    var8 = false;
    var _closure1_slot23 = var8;
    var8 = new Array(0);
    var _closure1_slot24 = var8;
    var8 = 13;
    var9 = var6[var8];
    var11 = var7.bind(var0)(var9);
    var9 = var11.chain;
    var9 = var9.bind(var11)(var10);
    var _closure1_slot25 = var9;
    var8 = var6[var8];
    var9 = var7.bind(var0)(var8);
    var8 = var9.chain;
    var8 = var8.bind(var9)(var10);
    var _closure1_slot26 = var8;
    var8 = var3.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot27 = var8;
    var3 = var3.Set;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var15 = var8;
    var3 = new var15[var3](var14);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot28 = var3;
    var3 = 17;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ForumActivePostStore, environment: var5
            _fun61296: for (var _fun61296_ip = 0;;) switch (_fun61296_ip) {
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
                    var0 = _closure1_slot29;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun61296_ip = 69;
                        continue _fun61296
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun61296_ip = 105;
                    continue _fun61296;
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
        var0 = function() { // Original name: value, environment: var5
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot8;
            var12 = _closure1_slot10;
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var8 = _closure1_slot9;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getNewThreadCount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCanAckThreads';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getThreadIds';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun61300: for (var _fun61300_ip = 0;;) switch (_fun61300_ip) {
                case 0:
                    var7 = arg0;
                    var5 = arg1;
                    var9 = arg2;
                    var8 = arg3;
                    var6 = _closure1_slot17;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.areSetsEqual;
                    var1 = _closure1_slot18;
                    var1 = var2.bind(var4)(var9, var1);
                    var1 = !var1;
                    var4 = _closure1_slot19;
                    var2 = _closure1_slot20;
                    var2 = var8 !== var2;
                    _closure1_slot17 = var7;
                    _closure1_slot18 = var9;
                    _closure1_slot19 = var5;
                    _closure1_slot20 = var8;
                    if (!(var7 === var6)) {
                        _fun61300_ip = 135;
                        continue _fun61300
                    }
                case 92:
                    if (!(var5 === var4)) {
                        _fun61300_ip = 115;
                        continue _fun61300
                    }
                case 96:
                    if (var1) {
                        _fun61300_ip = 102;
                        continue _fun61300
                    }
                case 99:
                    var1 = var2;
                case 102:
                    if (!var1) {
                        _fun61300_ip = 153;
                        continue _fun61300
                    }
                case 105:
                    var1 = _closure1_slot35;
                    var1 = var1.bind(var3)();
                    _fun61300_ip = 153;
                    continue _fun61300;
                case 115:
                    var2 = _closure1_slot35;
                    var1 = {};
                    var4 = true;
                    var1.sortThreadIds = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun61300_ip = 153;
                    continue _fun61300;
                case 135:
                    var2 = _closure1_slot35;
                    var1 = {};
                    var4 = true;
                    var1.refreshThreadIds = var4;
                    var1 = var2.bind(var3)(var1);
                case 153:
                    var0 = _closure1_slot22;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getCurrentThreadIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAndDeleteMostRecentUserCreatedThreadId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            var1 = null;
            _closure1_slot16 = var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFirstNoReplyThreadId';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ForumActivePostStore';
    var8.displayName = var3;
    var3 = 18;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var3.CONNECTION_OPEN = var4;
    var3.OVERLAY_INITIALIZE = var4;
    var3.GUILD_CREATE = var4;
    var3.CHANNEL_SELECT = var4;
    var4 = function(arg0) { // Original name: handleChannelDelete, environment: var1
        _fun61304: for (var _fun61304_ip = 0;;) switch (_fun61304_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.parent_id;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun61304_ip = 49;
                    continue _fun61304
                }
            case 20:
                var2 = var0.parent_id;
                var1 = _closure1_slot17;
                if (!(var2 === var1)) {
                    _fun61304_ip = 49;
                    continue _fun61304
                }
            case 37:
                var1 = _closure1_slot34;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 49:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_DELETE = var4;
    var4 = function(arg0) { // Original name: handleThreadListSync, environment: var1
        _fun61305: for (var _fun61305_ip = 0;;) switch (_fun61305_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var0 = _closure1_slot17;
                var1 = null;
                var0 = var1 != var0;
                if (!var0) {
                    _fun61305_ip = 88;
                    continue _fun61305
                }
            case 24:
                var6 = _closure1_slot11;
                var5 = var6.getChannel;
                var2 = _closure1_slot17;
                var5 = var5.bind(var6)(var2);
                var6 = var1 == var5;
                var2 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun61305_ip = 58;
                    continue _fun61305
                }
            case 53:
                var1 = var5.guild_id;
            case 58:
                var1 = var4 === var1;
                if (!var1) {
                    _fun61305_ip = 85;
                    continue _fun61305
                }
            case 65:
                var4 = _closure1_slot35;
                var3 = {};
                var5 = true;
                var3.refreshThreadIds = var5;
                var3 = var4.bind(var2)(var3);
                var1 = undefined;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var3.THREAD_LIST_SYNC = var4;
    var4 = function(arg0) { // Original name: handleThreadCreate, environment: var1
        _fun61306: for (var _fun61306_ip = 0;;) switch (_fun61306_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var1 = var0.isNewlyCreated;
                var3 = var2.parent_id;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun61306_ip = 46;
                    continue _fun61306
                }
            case 29:
                var4 = var2.parent_id;
                var3 = _closure1_slot17;
                var0 = var4 === var3;
            case 46:
                if (!var0) {
                    _fun61306_ip = 118;
                    continue _fun61306
                }
            case 49:
                var3 = !var1;
                var1 = !var3;
                if (var3) {
                    _fun61306_ip = 115;
                    continue _fun61306
                }
            case 58:
                var4 = var2.ownerId;
                var6 = _closure1_slot10;
                var3 = var6.getId;
                var3 = var3.bind(var6)();
                if (!(var4 === var3)) {
                    _fun61306_ip = 96;
                    continue _fun61306
                }
            case 85:
                var2 = var2.id;
                _closure1_slot16 = var2;
                _fun61306_ip = 113;
                continue _fun61306;
            case 96:
                var3 = _closure1_slot21;
                var3 = parseFloat(var3);
                var4 = var3 + 1;
                _closure1_slot21 = var4;
                var2 = var3;
            case 113:
                var1 = undefined;
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var3.THREAD_CREATE = var4;
    var4 = function(arg0) { // Original name: handleThreadUpdate, environment: var1
        _fun61307: for (var _fun61307_ip = 0;;) switch (_fun61307_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var1 = var2.parent_id;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun61307_ip = 194;
                    continue _fun61307
                }
            case 23:
                var3 = var2.parent_id;
                var0 = _closure1_slot17;
                if (!(var3 === var0)) {
                    _fun61307_ip = 194;
                    continue _fun61307
                }
            case 43:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 14;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.isForumPostPinned;
                var3 = var2.id;
                var4 = var4.bind(var5)(var3);
                var6 = _closure1_slot28;
                var5 = var6.has;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                if (!var4) {
                    _fun61307_ip = 145;
                    continue _fun61307
                }
            case 103:
                if (var3) {
                    _fun61307_ip = 145;
                    continue _fun61307
                }
            case 106:
                var7 = _closure1_slot28;
                var6 = var7.add;
                var5 = var2.id;
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot35;
                var5 = {};
                var7 = true;
                var5.sortThreadIds = var7;
                var5 = var6.bind(var0)(var5);
                _fun61307_ip = 188;
                continue _fun61307;
            case 145:
                if (var4) {
                    _fun61307_ip = 190;
                    continue _fun61307
                }
            case 148:
                if (!var3) {
                    _fun61307_ip = 190;
                    continue _fun61307
                }
            case 151:
                var4 = _closure1_slot28;
                var3 = var4.delete;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot35;
                var1 = {};
                var3 = true;
                var1.sortThreadIds = var3;
                var1 = var2.bind(var0)(var1);
            case 188:
                return var0;
            case 190:
                var0 = false;
                return var0;
            case 194:
                var0 = false;
                return var0;
        }
    };
    var3.THREAD_UPDATE = var4;
    var4 = function(arg0) { // Original name: handleThreadDelete, environment: var1
        _fun61308: for (var _fun61308_ip = 0;;) switch (_fun61308_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var2 = var1.parent_id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun61308_ip = 78;
                    continue _fun61308
                }
            case 20:
                var3 = var1.parent_id;
                var2 = _closure1_slot17;
                if (!(var3 === var2)) {
                    _fun61308_ip = 78;
                    continue _fun61308
                }
            case 37:
                var3 = _closure1_slot27;
                var2 = var3.add;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot35;
                var1 = {};
                var0 = true;
                var1.sortThreadIds = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 78:
                var0 = false;
                return var0;
        }
    };
    var3.THREAD_DELETE = var4;
    var4 = function(arg0) { // Original name: handleResortThreads, environment: var1
        _fun61309: for (var _fun61309_ip = 0;;) switch (_fun61309_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun61309_ip = 47;
                    continue _fun61309
                }
            case 14:
                var1 = _closure1_slot17;
                if (!(var2 === var1)) {
                    _fun61309_ip = 47;
                    continue _fun61309
                }
            case 25:
                var2 = _closure1_slot35;
                var1 = {};
                var0 = true;
                var1.refreshThreadIds = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 47:
                var0 = false;
                return var0;
        }
    };
    var3.RESORT_THREADS = var4;
    var4 = function(arg0) { // Original name: handleChannelAck, environment: var1
        _fun61310: for (var _fun61310_ip = 0;;) switch (_fun61310_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun61310_ip = 35;
                    continue _fun61310
                }
            case 14:
                var0 = _closure1_slot17;
                if (!(var2 === var0)) {
                    _fun61310_ip = 35;
                    continue _fun61310
                }
            case 25:
                var0 = false;
                _closure1_slot23 = var0;
                var0 = undefined;
                return var0;
            case 35:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_ACK = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumActivePostStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Original name: computeThreadIdsSnapshot, environment: var1
        _fun61311: for (var _fun61311_ip = 0;;) switch (_fun61311_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun61311_ip = 115;
                    continue _fun61311
                }
            case 26:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var6 = _closure1_slot8;
                var5 = var6.getThreadsForParent;
                var4 = var1.guild_id;
                var1 = var1.id;
                var1 = var5.bind(var6)(var4, var1);
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.sort;
                var4 = _closure1_slot33;
                var3 = _closure1_slot19;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var1.bind(var2)(var0);
                _fun61311_ip = 119;
                continue _fun61311;
            case 115:
                var0 = new Array(0);
            case 119:
                return var0;
        }
    };
    var2.computeThreadIdsSnapshot = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4188, 6434, 1216, 1372, 3907, 1661, 1381, 1383, 22, 6438, 21, 1413, 566, 806, 2]);