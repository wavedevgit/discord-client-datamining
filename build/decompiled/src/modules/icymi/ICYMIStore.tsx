// modules/icymi/ICYMIStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun70424: for (var _fun70424_ip = 0;;) switch (_fun70424_ip) {
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
                _fun70424_ip = 76;
                continue _fun70424;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot62 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot62 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun70427: for (var _fun70427_ip = 0;;) switch (_fun70427_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70427_ip = 45;
                    continue _fun70427
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun70427_ip = 54;
                    continue _fun70427
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun70427_ip = 344;
                    continue _fun70427
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70427_ip = 322;
                    continue _fun70427
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70427_ip = 282;
                    continue _fun70427
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70427_ip = 269;
                    continue _fun70427
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
                    _fun70427_ip = 162;
                    continue _fun70427
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun70427_ip = 178;
                    continue _fun70427
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70427_ip = 248;
                    continue _fun70427
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70427_ip = 248;
                    continue _fun70427
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70427_ip = 233;
                    continue _fun70427
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70427_ip = 246;
                    continue _fun70427
                }
            case 233:
                var8 = _closure1_slot64;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun70427_ip = 264;
                continue _fun70427;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun70427_ip = 282;
                continue _fun70427;
            case 269:
                var6 = _closure1_slot64;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun70427_ip = 322;
                    continue _fun70427
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
                    _fun70427_ip = 329;
                    continue _fun70427
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70428: for (var _fun70428_ip = 0;;) switch (_fun70428_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70428_ip = 56;
                                continue _fun70428
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
                            _fun70428_ip = 67;
                            continue _fun70428;
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
    var _closure1_slot63 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun70429: for (var _fun70429_ip = 0;;) switch (_fun70429_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70429_ip = 23;
                    continue _fun70429
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70429_ip = 33;
                    continue _fun70429
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
                    _fun70429_ip = 70;
                    continue _fun70429
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70429_ip = 55;
                    continue _fun70429
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var0 = function(arg0, arg1) { // Original name: tabHasNewContentOnInitialLoad, environment: var3
        _fun70430: for (var _fun70430_ip = 0;;) switch (_fun70430_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot34;
                var3 = var6 - var3;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.Millis;
                var6 = var2.HOUR;
                var2 = 6;
                var2 = var2 * var6;
                if (!(!(var3 > var2))) {
                    _fun70430_ip = 85;
                    continue _fun70430
                }
            case 81:
                var2 = false;
                return var2;
            case 85:
                var3 = var1.Set;
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var2.bind(var5)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var1;
                var3 = var4.slice;
                var2 = 0;
                var1 = 20;
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var1 = var0.length;
                var0 = 3;
                var0 = var1 >= var0;
                return var0;
        }
    };
    var _closure1_slot65 = var0;
    var0 = function(arg0) { // Original name: filterStaffGuild, environment: var3
        _fun70433: for (var _fun70433_ip = 0;;) switch (_fun70433_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot24;
                var2 = var3.filterStaffContent;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun70433_ip = 27;
                    continue _fun70433
                }
            case 23:
                var2 = true;
                return var2;
            case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.isGuildItem;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun70433_ip = 162;
                    continue _fun70433
                }
            case 63:
                var2 = var1.data;
                var3 = var2.guild_id;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 24;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.GAME_CONTENT_GUILD_ID;
                if (!(var3 !== var2)) {
                    _fun70433_ip = 170;
                    continue _fun70433
                }
            case 103:
                var3 = _closure1_slot18;
                var2 = var3.getGuild;
                var1 = var1.data;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun70433_ip = 166;
                    continue _fun70433
                }
            case 133:
                var2 = var1.features;
                var1 = var2.has;
                var0 = _closure1_slot27;
                var0 = var0.INTERNAL_EMPLOYEE_ONLY;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun70433_ip = 166;
                    continue _fun70433
                }
            case 162:
                var0 = true;
                return var0;
            case 166:
                var0 = false;
                return var0;
            case 170:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot66 = var0;
    var0 = function(arg0) { // Original name: processRawItems, environment: var3
        _fun70434: for (var _fun70434_ip = 0;;) switch (_fun70434_ip) {
            case 0:
                var6 = arg0;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 26;
                var1 = var7[var1];
                var3 = undefined;
                var8 = var9.bind(var3)(var1);
                var5 = var8.getICYMINewConversationSummaryExperiment;
                var4 = 'processRawItems';
                var1 = false;
                var1 = var5.bind(var8)(var4, var1);
                var5 = var1.contentGenerationEnabled;
                var4 = _closure1_slot24;
                var1 = var4.onlyShowRecentGeneratedCandidates;
                var1 = var1.bind(var4)();
                var4 = global;
                var10 = var4.Set;
                var8 = 24;
                var7 = var7[var8];
                var7 = var9.bind(var3)(var7);
                var12 = var7.SUPPORTED_ITEM_TYPES;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var9;
                var7 = new var13[var10](var12, var11);
                var9 = var7 instanceof Object ? var7 : var9;
                var _closure2_slot0 = var9;
                if (var1) {
                    _fun70434_ip = 167;
                    continue _fun70434
                }
            case 123:
                if (!var5) {
                    _fun70434_ip = 237;
                    continue _fun70434
                }
            case 126:
                var7 = var9.add;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ICYMIItemTypes;
                var5 = var5.GENERATED_CANDIDATE;
                var5 = var7.bind(var9)(var5);
                _fun70434_ip = 237;
                continue _fun70434;
            case 167:
                var7 = var4.Set;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var3)(var4);
                var4 = var4.ICYMIItemTypes;
                var5 = var4.GENERATED_CANDIDATE;
                var4 = new Array(1);
                var4[0] = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var13 = var5;
                var12 = var4;
                var4 = new var13[var7](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure2_slot0 = var4;
            case 237:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var2 = _closure1_slot66;
                var2 = var4.bind(var5)(var2);
                if (!var1) {
                    _fun70434_ip = 283;
                    continue _fun70434
                }
            case 271:
                var1 = function(arg0) { // Original name: sortByIdRecency, environment: var0
                    var2 = arg0;
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 25;
                        var1 = var4[var0];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var1);
                        var5 = var6.extractTimestamp;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var1);
                        var0 = var4[var0];
                        var3 = var3.bind(var2)(var0);
                        var2 = var3.extractTimestamp;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var3)(var2);
            case 283:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun70438: for (var _fun70438_ip = 0;;) switch (_fun70438_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 24;
                            var1 = var4[var1];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.MESSAGE;
                            if (!(var2 === var1)) {
                                _fun70438_ip = 515;
                                continue _fun70438
                            }
                        case 52:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun70438_ip = 515;
                                continue _fun70438
                            }
                        case 72:
                            var2 = {};
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.reply_message_id;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun70438_ip = 134;
                                continue _fun70438
                            }
                        case 98:
                            var4 = global;
                            var6 = var4.parseInt;
                            var4 = var0.data;
                            var4 = var4.message_context;
                            var4 = var4.reply_message_id;
                            var6 = var6.bind(var5)(var4);
                            var4 = 0;
                            var1 = var4 !== var6;
                        case 134:
                            if (!var1) {
                                _fun70438_ip = 160;
                                continue _fun70438
                            }
                        case 137:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.reply_message_id;
                            var2.reply_message_id = var1;
                        case 160:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.before_message_id;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun70438_ip = 220;
                                continue _fun70438
                            }
                        case 184:
                            var4 = global;
                            var6 = var4.parseInt;
                            var4 = var0.data;
                            var4 = var4.message_context;
                            var4 = var4.before_message_id;
                            var6 = var6.bind(var5)(var4);
                            var4 = 0;
                            var1 = var4 !== var6;
                        case 220:
                            if (!var1) {
                                _fun70438_ip = 246;
                                continue _fun70438
                            }
                        case 223:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.before_message_id;
                            var2.before_message_id = var1;
                        case 246:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.after_message_id;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun70438_ip = 306;
                                continue _fun70438
                            }
                        case 270:
                            var4 = global;
                            var6 = var4.parseInt;
                            var4 = var0.data;
                            var4 = var4.message_context;
                            var4 = var4.after_message_id;
                            var6 = var6.bind(var5)(var4);
                            var4 = 0;
                            var1 = var4 !== var6;
                        case 306:
                            if (!var1) {
                                _fun70438_ip = 332;
                                continue _fun70438
                            }
                        case 309:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.after_message_id;
                            var2.after_message_id = var1;
                        case 332:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.external_content_application_id;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun70438_ip = 392;
                                continue _fun70438
                            }
                        case 356:
                            var4 = global;
                            var6 = var4.parseInt;
                            var4 = var0.data;
                            var4 = var4.message_context;
                            var4 = var4.external_content_application_id;
                            var6 = var6.bind(var5)(var4);
                            var4 = 0;
                            var1 = var4 !== var6;
                        case 392:
                            if (!var1) {
                                _fun70438_ip = 418;
                                continue _fun70438
                            }
                        case 395:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.external_content_application_id;
                            var2.external_content_application_id = var1;
                        case 418:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.reference_message_id;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun70438_ip = 478;
                                continue _fun70438
                            }
                        case 442:
                            var3 = global;
                            var4 = var3.parseInt;
                            var3 = var0.data;
                            var3 = var3.message_context;
                            var3 = var3.reference_message_id;
                            var4 = var4.bind(var5)(var3);
                            var3 = 0;
                            var1 = var3 !== var4;
                        case 478:
                            if (!var1) {
                                _fun70438_ip = 504;
                                continue _fun70438
                            }
                        case 481:
                            var1 = var0.data;
                            var1 = var1.message_context;
                            var1 = var1.reference_message_id;
                            var2.reference_message_id = var1;
                        case 504:
                            var1 = var0.data;
                            var1.message_context = var2;
                        case 515:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot67 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: injectItemsIntoList, environment: var3
        var4 = arg0;
        var3 = arg1;
        var0 = arg2;
        var _closure2_slot0 = var0;
        var0 = arg3;
        var _closure2_slot1 = var0;
        var2 = var4.filter;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var2.bind(var4)(var0);
        var _closure2_slot2 = var0;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun70441: for (var _fun70441_ip = 0;;) switch (_fun70441_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var1 = 1;
                    var3 = var5 + var1;
                    var2 = _closure2_slot1;
                    var3 = var3 * var2;
                    var2 = _closure2_slot2;
                    var2 = var2.length;
                    if (!(!(var3 < var2))) {
                        _fun70441_ip = 53;
                        continue _fun70441
                    }
                case 37:
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    _fun70441_ip = 84;
                    continue _fun70441;
                case 53:
                    var3 = _closure2_slot2;
                    var2 = var3.splice;
                    var1 = var5 + var1;
                    var0 = _closure2_slot1;
                    var1 = var1 * var0;
                    var0 = 0;
                    var0 = var2.bind(var3)(var1, var0, var4);
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot68 = var0;
    var0 = function() { // Original name: injectAdditionalItems, environment: var3
        var2 = function() { // Original name: injectGuildEvents, environment: var1
            _fun70443: for (var _fun70443_ip = 0;;) switch (_fun70443_ip) {
                case 0:
                    var3 = _closure1_slot18;
                    var0 = var3.getGuildIds;
                    var5 = var0.bind(var3)();
                    var4 = new Array(0);
                    var3 = _closure1_slot63;
                    var0 = undefined;
                    var18 = var3.bind(var0)(var5);
                    var5 = var18.bind(var0)();
                    var3 = var5.done;
                    var17 = 0;
                    var16 = 1;
                    var8 = 24;
                    var15 = 10;
                    var14 = null;
                    var13 = 22;
                    var12 = 2;
                    var11 = var5;
                    var10 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if (var3) {
                        _fun70443_ip = 621;
                        continue _fun70443
                    }
                case 81:
                    var23 = var11.value;
                    var3 = _closure1_slot41;
                    var3 = var3[var23];
                    if (!(var14 != var3)) {
                        _fun70443_ip = 119;
                        continue _fun70443
                    }
                case 98:
                    var3 = _closure1_slot41;
                    var3 = var3[var23];
                    var20 = var6;
                    var19 = var5;
                    if (!(!(var3 < var17))) {
                        _fun70443_ip = 597;
                        continue _fun70443
                    }
                case 119:
                    var21 = _closure1_slot63;
                    var22 = _closure1_slot14;
                    var3 = var22.getGuildScheduledEventsForGuild;
                    var3 = var3.bind(var22)(var23);
                    var24 = var21.bind(var0)(var3);
                    var25 = var24.bind(var0)();
                    var3 = var25.done;
                    var23 = var25;
                    var22 = 0;
                    var21 = var5;
                    var10 = var23;
                    var9 = 0;
                    var7 = var24;
                    var20 = var6;
                    var19 = var21;
                    if (var3) {
                        _fun70443_ip = 597;
                        continue _fun70443
                    }
                case 180:
                    var26 = var23.value;
                    var3 = _closure1_slot12;
                    var3 = var3.bind(var0)(var26);
                    var27 = var22;
                    var25 = var21;
                    if (var3) {
                        _fun70443_ip = 558;
                        continue _fun70443
                    }
                case 206:
                    var3 = var26.channel_id;
                    if (!(var14 != var3)) {
                        _fun70443_ip = 272;
                        continue _fun70443
                    }
                case 215:
                    var29 = _closure1_slot16;
                    var28 = var29.getChannel;
                    var3 = var26.channel_id;
                    var30 = var28.bind(var29)(var3);
                    var29 = _closure1_slot20;
                    var28 = var29.can;
                    var3 = _closure1_slot28;
                    var3 = var3.VIEW_CHANNEL;
                    var3 = var28.bind(var29)(var3, var30);
                    var27 = var22;
                    var25 = var21;
                    if (!var3) {
                        _fun70443_ip = 558;
                        continue _fun70443
                    }
                case 272:
                    var28 = _closure1_slot11;
                    var29 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var13];
                    var3 = var29.bind(var0)(var3);
                    var3 = var3.Seconds;
                    var3 = var3.DAY;
                    var3 = var12 * var3;
                    var3 = var28.bind(var0)(var26, var3);
                    if (var3) {
                        _fun70443_ip = 339;
                        continue _fun70443
                    }
                case 318:
                    var3 = _closure1_slot13;
                    var3 = var3.bind(var0)(var26);
                    var27 = var22;
                    var25 = var21;
                    if (!var3) {
                        _fun70443_ip = 558;
                        continue _fun70443
                    }
                case 339:
                    var28 = _closure1_slot39;
                    var3 = var26.id;
                    var3 = var28[var3];
                    if (!(var14 == var3)) {
                        _fun70443_ip = 428;
                        continue _fun70443
                    }
                case 356:
                    var29 = _closure1_slot39;
                    var28 = var26.id;
                    var3 = {};
                    var30 = var26.id;
                    var3.id = var30;
                    var31 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var30 = var30[var8];
                    var30 = var31.bind(var0)(var30);
                    var30 = var30.ICYMIItemTypes;
                    var30 = var30.GUILD_EVENT;
                    var3.type = var30;
                    var3.score = var15;
                    var30 = var26.id;
                    var3.event_id = var30;
                    var29[var28] = var3;
                case 428:
                    var29 = var4.push;
                    var3 = {};
                    var28 = var26.id;
                    var3.id = var28;
                    var30 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var28 = var28[var8];
                    var28 = var30.bind(var0)(var28);
                    var28 = var28.ICYMIItemTypes;
                    var28 = var28.GUILD_EVENT;
                    var3.type = var28;
                    var3.score = var15;
                    var30 = {};
                    var28 = var26.guild_id;
                    var30.guild_id = var28;
                    var28 = var26.id;
                    var30.event_id = var28;
                    var28 = var26.channel_id;
                    var32 = var14 != var28;
                    var31 = undefined;
                    if (!var32) {
                        _fun70443_ip = 520;
                        continue _fun70443
                    }
                case 517:
                    var31 = var28;
                case 520:
                    var30.channel_id = var31;
                    var3.data = var30;
                    var3 = var29.bind(var4)(var3);
                    var27 = var22 + 1;
                    var25 = var28;
                    var10 = var23;
                    var7 = var24;
                    var20 = var26;
                    var19 = var25;
                    var9 = var27;
                    if (!(!(var9 >= var16))) {
                        _fun70443_ip = 597;
                        continue _fun70443
                    }
                case 558:
                    var28 = var24.bind(var0)();
                    var3 = var28.done;
                    var22 = var27;
                    var21 = var25;
                    var23 = var28;
                    var10 = var23;
                    var9 = var22;
                    var7 = var24;
                    var20 = var26;
                    var19 = var21;
                    if (!var3) {
                        _fun70443_ip = 180;
                        continue _fun70443
                    }
                case 597:
                    var21 = var18.bind(var0)();
                    var3 = var21.done;
                    var6 = var20;
                    var5 = var19;
                    var11 = var21;
                    if (!var3) {
                        _fun70443_ip = 81;
                        continue _fun70443
                    }
                case 621:
                    var5 = var4.sort;
                    var3 = function(arg0, arg1) { // Environment: var1
                        _fun70444: for (var _fun70444_ip = 0;;) switch (_fun70444_ip) {
                            case 0:
                                var3 = _closure1_slot17;
                                var2 = var3.getGuildAffinity;
                                var1 = arg0;
                                var1 = var1.data;
                                var1 = var1.guild_id;
                                var2 = var2.bind(var3)(var1);
                                var3 = _closure1_slot17;
                                var1 = var3.getGuildAffinity;
                                var0 = arg1;
                                var0 = var0.data;
                                var0 = var0.guild_id;
                                var4 = var1.bind(var3)(var0);
                                var3 = null;
                                var5 = var3 != var4;
                                var0 = 0;
                                if (!var5) {
                                    _fun70444_ip = 76;
                                    continue _fun70444
                                }
                            case 70:
                                var0 = var4.score;
                            case 76:
                                var3 = var3 != var2;
                                var1 = 0;
                                if (!var3) {
                                    _fun70444_ip = 91;
                                    continue _fun70444
                                }
                            case 85:
                                var1 = var2.score;
                            case 91:
                                var0 = var0 - var1;
                                return var0;
                        }
                    };
                    var3 = var5.bind(var4)(var3);
                    var10 = new Array(0);
                    var _closure3_slot0 = var10;
                    var6 = new Array(0);
                    var _closure3_slot1 = var6;
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun70445: for (var _fun70445_ip = 0;;) switch (_fun70445_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure1_slot38;
                                var1 = var2.id;
                                var3[var1] = var2;
                                var3 = _closure1_slot25;
                                var1 = var3.getReadTimestamp;
                                var0 = var2.id;
                                var1 = var1.bind(var3)(var0);
                                var0 = null;
                                if (!(var0 == var1)) {
                                    _fun70445_ip = 64;
                                    continue _fun70445
                                }
                            case 45:
                                var1 = _closure3_slot0;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                                _fun70445_ip = 81;
                                continue _fun70445;
                            case 64:
                                var1 = _closure3_slot1;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var5 = _closure1_slot68;
                    var9 = _closure1_slot50;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var3 = var1[var8];
                    var3 = var7.bind(var0)(var3);
                    var3 = var3.ICYMIItemTypes;
                    var34 = var3.GUILD_EVENT;
                    var4 = 7;
                    var37 = undefined;
                    var36 = var9;
                    var35 = var10;
                    var33 = var4;
                    var3 = var37[var5](var36, var35, var34, var33, var32);
                    _closure1_slot50 = var3;
                    var3 = _closure1_slot51;
                    var1 = var1[var8];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.ICYMIItemTypes;
                    var34 = var1.GUILD_EVENT;
                    var37 = undefined;
                    var36 = var3;
                    var35 = var6;
                    var1 = var37[var5](var36, var35, var34, var33, var32);
                    _closure1_slot51 = var1;
                    return var0;
            }
        };
        var0 = undefined;
        var2 = var2.bind(var0)();
        var1 = function() { // Original name: injectContentInventoryItems, environment: var1
            _fun70446: for (var _fun70446_ip = 0;;) switch (_fun70446_ip) {
                case 0:
                    var0 = global;
                    var0 = var0.Set;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var15 = var2;
                    var0 = new var15[var0](var14);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var _closure3_slot1 = var0;
                    var10 = new Array(0);
                    var _closure3_slot2 = var10;
                    var6 = new Array(0);
                    var _closure3_slot3 = var6;
                    var4 = _closure1_slot9;
                    var3 = var4.getFeed;
                    var0 = _closure1_slot29;
                    var0 = var0.GLOBAL_FEED;
                    var5 = var3.bind(var4)(var0);
                    var3 = null;
                    var7 = var3 == var5;
                    var0 = undefined;
                    var4 = undefined;
                    if (var7) {
                        _fun70446_ip = 103;
                        continue _fun70446
                    }
                case 97:
                    var4 = var5.entries;
                case 103:
                    if (!(var3 == var4)) {
                        _fun70446_ip = 111;
                        continue _fun70446
                    }
                case 107:
                    var4 = new Array(0);
                case 111:
                    var5 = var4.sort;
                    var3 = function(arg0, arg1) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.rank;
                        var0 = arg1;
                        var0 = var0.rank;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var8 = var5.bind(var4)(var3);
                    var7 = var8.slice;
                    var3 = 0;
                    var5 = 5;
                    var3 = var7.bind(var8)(var3, var5);
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun70448: for (var _fun70448_ip = 0;;) switch (_fun70448_ip) {
                            case 0:
                                var5 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.has;
                                var0 = var5.content;
                                var0 = var0.id;
                                var0 = var2.bind(var3)(var0);
                                if (var0) {
                                    _fun70448_ip = 737;
                                    continue _fun70448
                                }
                            case 36:
                                var0 = var5.content;
                                var4 = var0.content_type;
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var7 = 27;
                                var3 = var0[var7];
                                var0 = undefined;
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.ContentInventoryEntryType;
                                var3 = var3.PLAYED_GAME;
                                if (!(var4 !== var3)) {
                                    _fun70448_ip = 179;
                                    continue _fun70448
                                }
                            case 88:
                                var3 = var5.content;
                                var4 = var3.content_type;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var7];
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.ContentInventoryEntryType;
                                var3 = var3.CUSTOM_STATUS;
                                if (!(var4 !== var3)) {
                                    _fun70448_ip = 179;
                                    continue _fun70448
                                }
                            case 132:
                                var3 = var5.content;
                                var4 = var3.content_type;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var7];
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.ContentInventoryEntryType;
                                var3 = var3.TOP_GAME;
                                if (!(var4 === var3)) {
                                    _fun70448_ip = 737;
                                    continue _fun70448
                                }
                            case 179:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 28;
                                var3 = var6[var3];
                                var6 = var4.bind(var0)(var3);
                                var4 = var6.isEntryExpired;
                                var3 = var5.content;
                                var3 = var4.bind(var6)(var3);
                                if (var3) {
                                    _fun70448_ip = 737;
                                    continue _fun70448
                                }
                            case 221:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 29;
                                var3 = var6[var3];
                                var6 = var4.bind(var0)(var3);
                                var4 = var6.isGamingLikeEntry;
                                var3 = var5.content;
                                var3 = var4.bind(var6)(var3);
                                if (!var3) {
                                    _fun70448_ip = 433;
                                    continue _fun70448
                                }
                            case 263:
                                var4 = _closure3_slot1;
                                var3 = var5.content;
                                var3 = var3.author_id;
                                var4 = var4[var3];
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun70448_ip = 335;
                                    continue _fun70448
                                }
                            case 288:
                                var6 = _closure3_slot1;
                                var3 = var5.content;
                                var4 = var3.author_id;
                                var3 = global;
                                var3 = var3.Set;
                                var7 = var3.prototype;
                                var7 = Object.create(var7, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var12 = var7;
                                var3 = new var12[var3](var11);
                                var3 = var3 instanceof Object ? var3 : var7;
                                var6[var4] = var3;
                            case 335:
                                var4 = _closure3_slot1;
                                var3 = var5.content;
                                var3 = var3.author_id;
                                var6 = var4[var3];
                                var4 = var6.has;
                                var3 = var5.content;
                                var3 = var3.extra;
                                var3 = var3.application_id;
                                var3 = var4.bind(var6)(var3);
                                if (var3) {
                                    _fun70448_ip = 735;
                                    continue _fun70448
                                }
                            case 387:
                                var4 = _closure3_slot1;
                                var3 = var5.content;
                                var3 = var3.author_id;
                                var6 = var4[var3];
                                var4 = var6.add;
                                var3 = var5.content;
                                var3 = var3.extra;
                                var3 = var3.application_id;
                                var3 = var4.bind(var6)(var3);
                            case 433:
                                var4 = _closure1_slot39;
                                var3 = var5.content;
                                var3 = var3.id;
                                var3 = var4[var3];
                                var4 = null;
                                if (!(var4 == var3)) {
                                    _fun70448_ip = 545;
                                    continue _fun70448
                                }
                            case 457:
                                var7 = _closure1_slot39;
                                var3 = var5.content;
                                var6 = var3.id;
                                var3 = {};
                                var8 = var5.content;
                                var8 = var8.id;
                                var3.id = var8;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var8 = 24;
                                var8 = var10[var8];
                                var8 = var9.bind(var0)(var8);
                                var8 = var8.ICYMIItemTypes;
                                var8 = var8.ACTIVITY;
                                var3.type = var8;
                                var8 = 15;
                                var3.score = var8;
                                var8 = var5.content;
                                var3.activity = var8;
                                var7[var6] = var3;
                            case 545:
                                var3 = {};
                                var6 = var5.content;
                                var6 = var6.id;
                                var3.id = var6;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 24;
                                var6 = var8[var6];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.ICYMIItemTypes;
                                var6 = var6.ACTIVITY;
                                var3.type = var6;
                                var6 = 15;
                                var3.score = var6;
                                var6 = {};
                                var7 = var5.content;
                                var7 = var7.author_id;
                                var6.user_id = var7;
                                var7 = var5.content;
                                var7 = var7.id;
                                var6.content_id = var7;
                                var3.data = var6;
                                var7 = _closure3_slot0;
                                var6 = var7.add;
                                var5 = var5.content;
                                var5 = var5.id;
                                var5 = var6.bind(var7)(var5);
                                var6 = _closure1_slot38;
                                var5 = var3.id;
                                var6[var5] = var3;
                                var6 = _closure1_slot25;
                                var5 = var6.getReadTimestamp;
                                var2 = var3.id;
                                var2 = var5.bind(var6)(var2);
                                if (!(var4 == var2)) {
                                    _fun70448_ip = 719;
                                    continue _fun70448
                                }
                            case 703:
                                var4 = _closure3_slot2;
                                var2 = var4.push;
                                var2 = var2.bind(var4)(var3);
                                _fun70448_ip = 737;
                                continue _fun70448;
                            case 719:
                                var2 = _closure3_slot3;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                _fun70448_ip = 737;
                                continue _fun70448;
                            case 735:
                                return var0;
                            case 737:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var4 = _closure1_slot68;
                    var9 = _closure1_slot50;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 24;
                    var3 = var8[var1];
                    var3 = var7.bind(var0)(var3);
                    var3 = var3.ICYMIItemTypes;
                    var12 = var3.ACTIVITY;
                    var15 = undefined;
                    var14 = var9;
                    var13 = var10;
                    var11 = var5;
                    var3 = var15[var4](var14, var13, var12, var11, var10);
                    _closure1_slot50 = var3;
                    var3 = _closure1_slot51;
                    var1 = var8[var1];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.ICYMIItemTypes;
                    var12 = var1.ACTIVITY;
                    var15 = undefined;
                    var14 = var3;
                    var13 = var6;
                    var1 = var15[var4](var14, var13, var12, var11, var10);
                    _closure1_slot51 = var1;
                    return var0;
            }
        };
        var1 = var1.bind(var0)();
        var1 = _closure1_slot70;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot69 = var0;
    var0 = function() { // Original name: injectRecommendedGuildsRow, environment: var3
        _fun70449: for (var _fun70449_ip = 0;;) switch (_fun70449_ip) {
            case 0:
                var4 = _closure1_slot50;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ICYMIItemTypes;
                    var0 = var0.RECOMMENDED_GUILDS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot50 = var2;
                var4 = _closure1_slot51;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ICYMIItemTypes;
                    var0 = var0.RECOMMENDED_GUILDS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot51 = var2;
                var2 = _closure1_slot53;
                var2 = var2.length;
                var4 = 0;
                if (!(var4 !== var2)) {
                    _fun70449_ip = 500;
                    continue _fun70449
                }
            case 73:
                var3 = _closure1_slot18;
                var2 = var3.getGuildsArray;
                var3 = var2.bind(var3)();
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = _closure1_slot27;
                    var0 = var0.COMMUNITY;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = var0.length;
                var5 = 5;
                var0 = var0 >= var5;
                var6 = _closure1_slot25;
                var3 = var6.getReadTimestamp;
                var2 = 'recommendedGuilds';
                var3 = var3.bind(var6)(var2);
                if (!var0) {
                    _fun70449_ip = 209;
                    continue _fun70449
                }
            case 140:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun70449_ip = 209;
                    continue _fun70449
                }
            case 146:
                var2 = global;
                var7 = var2.Date;
                var6 = var7.now;
                var7 = var6.bind(var7)();
                var6 = _closure1_slot54;
                var7 = var7 - var6;
                var6 = _closure1_slot30;
                if (!(var7 > var6)) {
                    _fun70449_ip = 209;
                    continue _fun70449
                }
            case 179:
                var6 = var2.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var3 = var2 - var3;
                var2 = _closure1_slot31;
                if (!(!(var3 < var2))) {
                    _fun70449_ip = 500;
                    continue _fun70449
                }
            case 209:
                var2 = {
                    'id': 'recommendedGuilds',
                    'type': null,
                    'score': 50
                };
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 24;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.RECOMMENDED_GUILDS;
                var2.type = var3;
                var6 = _closure1_slot39;
                var3 = var2.id;
                var6[var3] = var2;
                var6 = _closure1_slot38;
                var3 = var2.id;
                var6[var3] = var2;
                var3 = _closure1_slot50;
                var3 = var3.length;
                if (!(var4 !== var3)) {
                    _fun70449_ip = 474;
                    continue _fun70449
                }
            case 305:
                if (var0) {
                    _fun70449_ip = 321;
                    continue _fun70449
                }
            case 308:
                var3 = _closure1_slot50;
                var3 = var3.length;
                if (!(!(var3 < var5))) {
                    _fun70449_ip = 439;
                    continue _fun70449
                }
            case 321:
                if (!var0) {
                    _fun70449_ip = 340;
                    continue _fun70449
                }
            case 324:
                var3 = _closure1_slot50;
                var6 = var3.length;
                var3 = 10;
                if (!(!(var6 < var3))) {
                    _fun70449_ip = 439;
                    continue _fun70449
                }
            case 340:
                if (var0) {
                    _fun70449_ip = 365;
                    continue _fun70449
                }
            case 343:
                var3 = _closure1_slot50;
                var0 = var3.splice;
                var0 = var0.bind(var3)(var5, var4, var2);
                _fun70449_ip = 500;
                continue _fun70449;
            case 365:
                var0 = global;
                var5 = var0.Math;
                var3 = var5.round;
                var6 = var0.Math;
                var0 = var6.random;
                var6 = var0.bind(var6)();
                var0 = 2;
                var0 = var0 * var6;
                var3 = var3.bind(var5)(var0);
                var0 = 3;
                var6 = var3 + var0;
                var5 = _closure1_slot50;
                var3 = var5.splice;
                var0 = 1;
                var0 = var6 - var0;
                var0 = var3.bind(var5)(var0, var4, var2);
                _fun70449_ip = 500;
                continue _fun70449;
            case 439:
                var9 = _closure1_slot50;
                var0 = new Array(1);
                var10 = var0;
                var8 = 0;
                var4 = arraySpread(var10, var9, var8);
                var0[var4] = var2;
                var3 = 1;
                var3 = var4 + var3;
                _closure1_slot50 = var0;
                _fun70449_ip = 500;
                continue _fun70449;
            case 474:
                var0 = new Array(1);
                var0[0] = var2;
                var9 = _closure1_slot51;
                var8 = 1;
                var10 = var0;
                var2 = arraySpread(var10, var9, var8);
                _closure1_slot51 = var0;
            case 500:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot70 = var0;
    var0 = function() { // Original name: finalizeNewDehydratedItemsContent, environment: var3
        _fun70453: for (var _fun70453_ip = 0;;) switch (_fun70453_ip) {
            case 0:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var2;
                var1 = new var10[var1](var9);
                var5 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot35;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot48;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun70453_ip = 265;
                    continue _fun70453
                }
            case 71:
                var3 = var5.has;
                var2 = _closure1_slot48;
                var2 = var2.id;
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot48;
                if (var3) {
                    _fun70453_ip = 144;
                    continue _fun70453
                }
            case 97:
                var3 = new Array(1);
                var3[0] = var2;
                var8 = _closure1_slot35;
                var7 = 1;
                var9 = var3;
                var4 = arraySpread(var9, var8, var7);
                _closure1_slot35 = var3;
                var4 = var5.add;
                var3 = _closure1_slot48;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                _fun70453_ip = 265;
                continue _fun70453;
            case 144:
                var2 = var2.id;
                var _closure2_slot1 = var2;
                var2 = _closure1_slot48;
                var2 = var2.type;
                var _closure2_slot2 = var2;
                var4 = _closure1_slot35;
                var3 = var4.findIndex;
                var2 = function(arg0) { // Environment: var0
                    _fun70455: for (var _fun70455_ip = 0;;) switch (_fun70455_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.id;
                            var0 = _closure2_slot1;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun70455_ip = 35;
                                continue _fun70455
                            }
                        case 22:
                            var2 = var2.type;
                            var1 = _closure2_slot2;
                            var0 = var2 === var1;
                        case 35:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = -1;
                if (!(var2 !== var3)) {
                    _fun70453_ip = 265;
                    continue _fun70453
                }
            case 198:
                var2 = _closure1_slot35;
                var2 = var2[var3];
                _closure1_slot48 = var2;
                var4 = _closure1_slot35;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot35 = var2;
                var3 = _closure1_slot48;
                var2 = new Array(1);
                var2[0] = var3;
                var8 = _closure1_slot35;
                var7 = 1;
                var9 = var2;
                var3 = arraySpread(var9, var8, var7);
                _closure1_slot35 = var2;
            case 265:
                var2 = _closure1_slot35;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun70457: for (var _fun70457_ip = 0;;) switch (_fun70457_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot38;
                            var0 = var1.id;
                            var3[var0] = var1;
                            var4 = var1.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 24;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.ICYMIItemTypes;
                            var3 = var3.CUSTOM_STATUS;
                            if (!(var4 === var3)) {
                                _fun70457_ip = 152;
                                continue _fun70457
                            }
                        case 62:
                            var5 = _closure1_slot22;
                            var4 = var5.isBlockedOrIgnored;
                            var3 = var1.data;
                            var3 = var3.user_id;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun70457_ip = 137;
                                continue _fun70457
                            }
                        case 91:
                            var5 = _closure1_slot39;
                            var4 = var1.id;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 23;
                            var3 = var7[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.customStatusToContentInventoryEntry;
                            var3 = var3.bind(var6)(var1);
                            var5[var4] = var3;
                            _fun70457_ip = 152;
                            continue _fun70457;
                        case 137:
                            var3 = _closure1_slot40;
                            var2 = var1.id;
                            var1 = true;
                            var3[var2] = var1;
                        case 152:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot71 = var0;
    var0 = function(arg0) { // Original name: reload, environment: var3
        _fun70458: for (var _fun70458_ip = 0;;) switch (_fun70458_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot35;
                var0 = var0.length;
                var6 = 0;
                if (!(var0 > var6)) {
                    _fun70458_ip = 45;
                    continue _fun70458
                }
            case 21:
                var0 = _closure1_slot35;
                _closure1_slot32 = var0;
                var0 = new Array(0);
                _closure1_slot35 = var0;
                var0 = new Array(0);
                _closure1_slot36 = var0;
            case 45:
                var0 = _closure1_slot43;
                var0 = var0 + 1;
                _closure1_slot43 = var0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun70458_ip = 111;
                    continue _fun70458
                }
            case 62:
                var4 = _closure1_slot73;
                var3 = _closure1_slot32;
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = _closure1_slot8;
                var3 = 2;
                var5 = var4.bind(var7)(var5, var3);
                var4 = var5[var6];
                var3 = 1;
                var3 = var5[var3];
                _closure1_slot50 = var4;
                _closure1_slot51 = var3;
                _fun70458_ip = 131;
                continue _fun70458;
            case 111:
                var3 = var1.newUnread;
                _closure1_slot50 = var3;
                var1 = var1.newRead;
                _closure1_slot51 = var1;
            case 131:
                var3 = _closure1_slot24;
                var1 = var3.onlyShowRecentGeneratedCandidates;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun70458_ip = 158;
                    continue _fun70458
                }
            case 148:
                var3 = _closure1_slot69;
                var1 = undefined;
                var1 = var3.bind(var1)();
            case 158:
                var1 = _closure1_slot37;
                var1 = var1.load_id;
                var1 = var0 != var1;
                if (!var1) {
                    _fun70458_ip = 193;
                    continue _fun70458
                }
            case 175:
                var4 = _closure1_slot33;
                var3 = _closure1_slot37;
                var3 = var3.load_id;
                var1 = var4 !== var3;
            case 193:
                if (!var1) {
                    _fun70458_ip = 316;
                    continue _fun70458
                }
            case 196:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var4 = var1.ICYMIAnalytics;
                var3 = var4.trackFeedLoaded;
                var1 = {};
                var5 = _closure1_slot37;
                var1.newTrackingProps = var5;
                var5 = _closure1_slot45;
                var1.hasNewContent = var5;
                var5 = _closure1_slot50;
                var1.unreadFeedItems = var5;
                var5 = _closure1_slot51;
                var1.readFeedItems = var5;
                var5 = 'gravity';
                var1.homeSessionId = var5;
                var1 = var3.bind(var4)(var1);
                var1 = _closure1_slot37;
                var1 = var1.load_id;
                var3 = var0 != var1;
                var0 = null;
                if (!var3) {
                    _fun70458_ip = 306;
                    continue _fun70458
                }
            case 303:
                var0 = var1;
            case 306:
                _closure1_slot33 = var0;
                var0 = {};
                _closure1_slot37 = var0;
            case 316:
                _closure1_slot52 = var6;
                var0 = _closure1_slot50;
                var1 = var0.length;
                var0 = _closure1_slot51;
                var0 = var0.length;
                var0 = var1 + var0;
                if (!(var0 === var6)) {
                    _fun70458_ip = 352;
                    continue _fun70458
                }
            case 346:
                var0 = true;
                _closure1_slot59 = var0;
            case 352:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 23;
                var1 = var8[var0];
                var0 = undefined;
                var5 = var7.bind(var0)(var1);
                var4 = var5.hydrateItems;
                var11 = _closure1_slot50;
                var3 = new Array(0);
                var12 = var3;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var11 = _closure1_slot51;
                var12 = var3;
                var1 = arraySpread(var12, var11, var10);
                var1 = 24;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.ICYMI_PAGE_SIZE;
                var1 = var4.bind(var5)(var3, var6, var1);
                var1 = false;
                _closure1_slot56 = var1;
                return var0;
        }
    };
    var _closure1_slot72 = var0;
    var0 = function(arg0) { // Original name: computeDisplayItems, environment: var3
        var6 = arg0;
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var4 = new Array(0);
        var _closure2_slot1 = var4;
        var5 = new Array(0);
        var _closure2_slot2 = var5;
        var2 = var6.forEach;
        var0 = function(arg0) { // Environment: var1
            _fun70460: for (var _fun70460_ip = 0;;) switch (_fun70460_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot25;
                    var2 = var4.getReadTimestamp;
                    var0 = var3.id;
                    var0 = var2.bind(var4)(var0);
                    var8 = null;
                    var7 = var8 != var0;
                    var6 = var3.type;
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 24;
                    var2 = var0[var5];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.ICYMIItemTypes;
                    var4 = var2.MESSAGE;
                    var2 = var7;
                    if (!(var6 === var4)) {
                        _fun70460_ip = 179;
                        continue _fun70460
                    }
                case 78:
                    var4 = var3.data;
                    var4 = var4.message_context;
                    var9 = var8 == var4;
                    var6 = undefined;
                    if (var9) {
                        _fun70460_ip = 104;
                        continue _fun70460
                    }
                case 98:
                    var6 = var4.external_content_application_id;
                case 104:
                    var4 = var7;
                    if (!(var8 == var6)) {
                        _fun70460_ip = 176;
                        continue _fun70460
                    }
                case 111:
                    var6 = var7;
                    if (var7) {
                        _fun70460_ip = 173;
                        continue _fun70460
                    }
                case 117:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 23;
                    var7 = var9[var7];
                    var10 = var8.bind(var0)(var7);
                    var9 = var10.isItemUnreadInChannel;
                    var7 = var3.data;
                    var8 = var7.channel_id;
                    var7 = var3.data;
                    var7 = var7.message_id;
                    var7 = var9.bind(var10)(var8, var7);
                    var6 = !var7;
                case 173:
                    var4 = var6;
                case 176:
                    var2 = var4;
                case 179:
                    if (var2) {
                        _fun70460_ip = 272;
                        continue _fun70460
                    }
                case 182:
                    var2 = var3.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.ICYMIItemTypes;
                    var1 = var1.MESSAGE;
                    if (!(var2 === var1)) {
                        _fun70460_ip = 234;
                        continue _fun70460
                    }
                case 220:
                    var1 = var3.data;
                    var1 = var1.has_mention;
                    if (var1) {
                        _fun70460_ip = 253;
                        continue _fun70460
                    }
                case 234:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun70460_ip = 289;
                    continue _fun70460;
                case 253:
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun70460_ip = 289;
                    continue _fun70460;
                case 272:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 289:
                    return var0;
            }
        };
        var0 = var2.bind(var6)(var0);
        var2 = new Array(0);
        var7 = 0;
        var9 = var2;
        var8 = var5;
        var7 = arraySpread(var9, var8, var7);
        var9 = var2;
        var8 = var4;
        var0 = arraySpread(var9, var8, var7);
        var0 = new Array(2);
        var0[0] = var2;
        var2 = var3.sort;
        var1 = function(arg0, arg1) { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 23;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.compareGravityUnreadIds;
            var0 = arg0;
            var1 = var0.id;
            var0 = arg1;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot73 = var0;
    var0 = function(arg0, arg1) { // Original name: getNewUnreadItems, environment: var3
        _fun70462: for (var _fun70462_ip = 0;;) switch (_fun70462_ip) {
            case 0:
                var10 = arg1;
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Set;
                var4 = _closure1_slot32;
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var18 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var19 = var2;
                var1 = new var19[var3](var18, var17);
                var8 = var1 instanceof Object ? var1 : var2;
                var2 = _closure1_slot63;
                var7 = undefined;
                var1 = arg0;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 23;
                var4 = 24;
                var3 = null;
                if (var1) {
                    _fun70462_ip = 337;
                    continue _fun70462
                }
            case 98:
                var11 = var2.value;
                var12 = var11.type;
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var13.bind(var7)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                if (!(var12 !== var1)) {
                    _fun70462_ip = 319;
                    continue _fun70462
                }
            case 144:
                var12 = var8.has;
                var1 = var11.id;
                var1 = var12.bind(var8)(var1);
                if (var1) {
                    _fun70462_ip = 319;
                    continue _fun70462
                }
            case 165:
                var13 = _closure1_slot25;
                var12 = var13.getReadTimestamp;
                var1 = var11.id;
                var1 = var12.bind(var13)(var1);
                var1 = var3 == var1;
                if (!var1) {
                    _fun70462_ip = 306;
                    continue _fun70462
                }
            case 192:
                var13 = var11.type;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var4];
                var12 = var14.bind(var7)(var12);
                var12 = var12.ICYMIItemTypes;
                var12 = var12.MESSAGE;
                var12 = var13 !== var12;
                if (var12) {
                    _fun70462_ip = 303;
                    continue _fun70462
                }
            case 233:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var5];
                var16 = var14.bind(var7)(var13);
                var15 = var16.isItemUnreadInChannel;
                var13 = var11.data;
                var14 = var13.channel_id;
                var13 = var11.data;
                var13 = var13.message_id;
                var13 = var15.bind(var16)(var14, var13);
                if (!var13) {
                    _fun70462_ip = 300;
                    continue _fun70462
                }
            case 286:
                var14 = var11.data;
                var14 = var14.channel_id;
                var13 = var14 !== var10;
            case 300:
                var12 = var13;
            case 303:
                var1 = var12;
            case 306:
                if (!var1) {
                    _fun70462_ip = 319;
                    continue _fun70462
                }
            case 309:
                var1 = var0.push;
                var1 = var1.bind(var0)(var11);
            case 319:
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun70462_ip = 98;
                    continue _fun70462
                }
            case 337:
                return var0;
        }
    };
    var _closure1_slot74 = var0;
    var0 = function(arg0, arg1) { // Original name: filterDehydratedItemListByChannel, environment: var3
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun70465: for (var _fun70465_ip = 0;;) switch (_fun70465_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.isGuildItem;
                    var0 = var0.bind(var2)(var1);
                    var0 = !var0;
                    if (var0) {
                        _fun70465_ip = 66;
                        continue _fun70465
                    }
                case 45:
                    var1 = var1.data;
                    var2 = var1.channel_id;
                    var1 = _closure2_slot0;
                    var0 = var2 !== var1;
                case 66:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot75 = var0;
    var0 = function(arg0, arg1) { // Original name: maybeFilterChannelItems, environment: var3
        _fun70466: for (var _fun70466_ip = 0;;) switch (_fun70466_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 23;
                var3 = var6[var1];
                var0 = undefined;
                var8 = var5.bind(var0)(var3);
                var7 = var8.numberToCustomScore;
                var3 = arg1;
                var3 = var7.bind(var8)(var3);
                var1 = var6[var1];
                var1 = var5.bind(var0)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                if (!(var3 === var1)) {
                    _fun70466_ip = 141;
                    continue _fun70466
                }
            case 67:
                var3 = _closure1_slot75;
                var1 = _closure1_slot32;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot32 = var1;
                var1 = _closure1_slot50;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot50 = var1;
                var1 = _closure1_slot51;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot51 = var1;
                var1 = _closure1_slot35;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot35 = var1;
                var1 = _closure1_slot36;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot36 = var1;
            case 141:
                return var0;
        }
    };
    var _closure1_slot76 = var0;
    var0 = function(arg0, arg1) { // Original name: filterDehydratedItemListByGuild, environment: var3
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun70468: for (var _fun70468_ip = 0;;) switch (_fun70468_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.isGuildItem;
                    var0 = var0.bind(var2)(var1);
                    var0 = !var0;
                    if (var0) {
                        _fun70468_ip = 66;
                        continue _fun70468
                    }
                case 45:
                    var1 = var1.data;
                    var2 = var1.guild_id;
                    var1 = _closure2_slot0;
                    var0 = var2 !== var1;
                case 66:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot77 = var0;
    var0 = function(arg0, arg1) { // Original name: maybeFilterGuildItems, environment: var3
        _fun70469: for (var _fun70469_ip = 0;;) switch (_fun70469_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 23;
                var3 = var6[var1];
                var0 = undefined;
                var8 = var5.bind(var0)(var3);
                var7 = var8.numberToCustomScore;
                var3 = arg1;
                var3 = var7.bind(var8)(var3);
                var1 = var6[var1];
                var1 = var5.bind(var0)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                if (!(var3 === var1)) {
                    _fun70469_ip = 141;
                    continue _fun70469
                }
            case 67:
                var3 = _closure1_slot77;
                var1 = _closure1_slot32;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot32 = var1;
                var1 = _closure1_slot50;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot50 = var1;
                var1 = _closure1_slot51;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot51 = var1;
                var1 = _closure1_slot35;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot35 = var1;
                var1 = _closure1_slot36;
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot36 = var1;
            case 141:
                return var0;
        }
    };
    var _closure1_slot78 = var0;
    var9 = function(arg0) { // Original name: handleReaction, environment: var3
        _fun70470: for (var _fun70470_ip = 0;;) switch (_fun70470_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.type;
                var2 = var3.messageId;
                var5 = var3.userId;
                var8 = var3.emoji;
                var7 = var3.reactionType;
                var0 = _closure1_slot39;
                var2 = var0[var2];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70470_ip = 183;
                    continue _fun70470
                }
            case 50:
                var9 = var2.type;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 24;
                var6 = var6[var0];
                var0 = undefined;
                var6 = var10.bind(var0)(var6);
                var6 = var6.ICYMIItemTypes;
                var6 = var6.MESSAGE;
                if (!(var9 === var6)) {
                    _fun70470_ip = 179;
                    continue _fun70470
                }
            case 93:
                var6 = _closure1_slot15;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                var6 = var1 === var5;
                var1 = 'MESSAGE_REACTION_ADD';
                if (!(var1 !== var4)) {
                    _fun70470_ip = 139;
                    continue _fun70470
                }
            case 119:
                var4 = var2.message;
                var1 = var4.removeReaction;
                var1 = var1.bind(var4)(var8, var6, var7);
                _fun70470_ip = 171;
                continue _fun70470;
            case 139:
                var5 = var2.message;
                var4 = var5.addReaction;
                var12 = var3.colors;
                var15 = var5;
                var14 = var8;
                var13 = var6;
                var11 = var7;
                var1 = var15[var4](var14, var13, var12, var11, var10);
            case 171:
                var2.message = var1;
                return var0;
            case 179:
                var0 = false;
                return var0;
            case 183:
                var0 = false;
                return var0;
        }
    };
    var8 = function(arg0) { // Original name: handleAck, environment: var3
        _fun70471: for (var _fun70471_ip = 0;;) switch (_fun70471_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
                var4 = new Array(0);
                var _closure2_slot1 = var4;
                var1 = new Array(0);
                var _closure2_slot2 = var1;
                var5 = _closure1_slot50;
                var3 = var5.forEach;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun70472: for (var _fun70472_ip = 0;;) switch (_fun70472_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot52;
                            var1 = arg1;
                            if (!(!(var1 > var3))) {
                                _fun70472_ip = 24;
                                continue _fun70472
                            }
                        case 17:
                            var1 = _closure1_slot46;
                            if (var1) {
                                _fun70472_ip = 88;
                                continue _fun70472
                            }
                        case 24:
                            var1 = var2.type;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 24;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.ICYMIItemTypes;
                            var0 = var0.MESSAGE;
                            if (!(var1 === var0)) {
                                _fun70472_ip = 88;
                                continue _fun70472
                            }
                        case 67:
                            var0 = var2.data;
                            var3 = var0.channel_id;
                            var1 = _closure2_slot0;
                            if (!(var3 !== var1)) {
                                _fun70472_ip = 107;
                                continue _fun70472
                            }
                        case 88:
                            var3 = _closure2_slot2;
                            var1 = var3.push;
                            var1 = var1.bind(var3)(var2);
                            _fun70472_ip = 121;
                            continue _fun70472;
                        case 107:
                            var1 = _closure2_slot1;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0);
                var6 = _closure1_slot45;
                var5 = _closure1_slot73;
                var3 = _closure1_slot35;
                var0 = undefined;
                var7 = var5.bind(var0)(var3);
                var5 = _closure1_slot8;
                var3 = 2;
                var9 = var5.bind(var0)(var7, var3);
                var5 = 0;
                var7 = var9[var5];
                var3 = 1;
                var3 = var9[var3];
                var3 = _closure1_slot74;
                var3 = var3.bind(var0)(var7, var8);
                _closure1_slot36 = var3;
                var3 = _closure1_slot46;
                if (var3) {
                    _fun70471_ip = 142;
                    continue _fun70471
                }
            case 120:
                var3 = var6;
                if (!var6) {
                    _fun70471_ip = 140;
                    continue _fun70471
                }
            case 126:
                var8 = _closure1_slot65;
                var7 = _closure1_slot35;
                var3 = var8.bind(var0)(var1, var7);
            case 140:
                _fun70471_ip = 190;
                continue _fun70471;
            case 142:
                var7 = var6;
                if (!var7) {
                    _fun70471_ip = 187;
                    continue _fun70471
                }
            case 148:
                var8 = _closure1_slot36;
                var9 = var8.length;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 24;
                var8 = var11[var8];
                var8 = var10.bind(var0)(var8);
                var8 = var8.MIN_ITEMS_FOR_NEW_PILL;
                var7 = var9 >= var8;
            case 187:
                var3 = var7;
            case 190:
                _closure1_slot45 = var3;
                var3 = var4.length;
                if (!(var5 === var3)) {
                    _fun70471_ip = 211;
                    continue _fun70471
                }
            case 203:
                var3 = _closure1_slot45;
                if (!(var6 !== var3)) {
                    _fun70471_ip = 257;
                    continue _fun70471
                }
            case 211:
                var3 = var4.length;
                if (!(var5 !== var3)) {
                    _fun70471_ip = 255;
                    continue _fun70471
                }
            case 220:
                _closure1_slot50 = var1;
                var13 = _closure1_slot51;
                var1 = new Array(0);
                var14 = var1;
                var12 = 0;
                var12 = arraySpread(var14, var13, var12);
                var14 = var1;
                var13 = var4;
                var3 = arraySpread(var14, var13, var12);
                _closure1_slot51 = var1;
            case 255:
                return var0;
            case 257:
                var0 = false;
                return var0;
        }
    };
    var10 = global;
    var12 = var10.Object;
    var7 = var12.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var7.bind(var12)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var7 = var5[var14];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var12 = 3;
    var7 = var5[var12];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var13 = var5[var7];
    var13 = var4.bind(var0)(var13);
    var15 = var13.eventScheduledToStartWithin;
    var _closure1_slot11 = var15;
    var15 = var13.isGuildEventEnded;
    var _closure1_slot12 = var15;
    var13 = var13.isGuildScheduledEventActive;
    var _closure1_slot13 = var13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot20 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot21 = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot22 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot23 = var7;
    var7 = 18;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot24 = var7;
    var7 = 19;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot25 = var7;
    var7 = 20;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var13 = var7.ChannelTypes;
    var _closure1_slot26 = var13;
    var13 = var7.GuildFeatures;
    var _closure1_slot27 = var13;
    var7 = var7.Permissions;
    var _closure1_slot28 = var7;
    var7 = 21;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ContentInventoryFeedKey;
    var _closure1_slot29 = var7;
    var7 = 22;
    var13 = var5[var7];
    var13 = var6.bind(var0)(var13);
    var13 = var13.Millis;
    var13 = var13.DAY;
    var13 = var14 * var13;
    var _closure1_slot30 = var13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.DAY;
    var7 = var12 * var7;
    var _closure1_slot31 = var7;
    var7 = new Array(0);
    var _closure1_slot32 = var7;
    var12 = null;
    var _closure1_slot33 = var12;
    var _closure1_slot34 = var1;
    var7 = new Array(0);
    var _closure1_slot35 = var7;
    var7 = new Array(0);
    var _closure1_slot36 = var7;
    var7 = {};
    var _closure1_slot37 = var7;
    var7 = {};
    var _closure1_slot38 = var7;
    var7 = {};
    var _closure1_slot39 = var7;
    var7 = {};
    var _closure1_slot40 = var7;
    var7 = {};
    var _closure1_slot41 = var7;
    var7 = {};
    var _closure1_slot42 = var7;
    var _closure1_slot43 = var1;
    var7 = false;
    var _closure1_slot44 = var7;
    var _closure1_slot45 = var7;
    var _closure1_slot46 = var7;
    var _closure1_slot47 = var12;
    var _closure1_slot48 = var12;
    var _closure1_slot49 = var1;
    var12 = new Array(0);
    var _closure1_slot50 = var12;
    var12 = new Array(0);
    var _closure1_slot51 = var12;
    var _closure1_slot52 = var1;
    var12 = new Array(0);
    var _closure1_slot53 = var12;
    var _closure1_slot54 = var1;
    var _closure1_slot55 = var11;
    var _closure1_slot56 = var7;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var19 = var11;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot57 = var10;
    var _closure1_slot58 = var7;
    var _closure1_slot59 = var7;
    var _closure1_slot60 = var1;
    var _closure1_slot61 = var1;
    var1 = 33;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ICYMIStore, environment: var5
            _fun70474: for (var _fun70474_ip = 0;;) switch (_fun70474_ip) {
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
                    var0 = _closure1_slot62;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun70474_ip = 69;
                        continue _fun70474
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun70474_ip = 105;
                    continue _fun70474;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun70475: for (var _fun70475_ip = 0;;) switch (_fun70475_ip) {
                case 0:
                    var2 = arg0;
                    var17 = this;
                    var16 = var17.waitFor;
                    var31 = _closure1_slot15;
                    var30 = _closure1_slot16;
                    var29 = _closure1_slot9;
                    var28 = _closure1_slot10;
                    var27 = _closure1_slot17;
                    var26 = _closure1_slot14;
                    var25 = _closure1_slot18;
                    var24 = _closure1_slot24;
                    var23 = _closure1_slot25;
                    var22 = _closure1_slot19;
                    var21 = _closure1_slot20;
                    var20 = _closure1_slot21;
                    var19 = _closure1_slot22;
                    var18 = _closure1_slot23;
                    var32 = var17;
                    var0 = var32[var16](var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun70475_ip = 244;
                        continue _fun70475
                    }
                case 87:
                    var5 = var2.dehydratedItems;
                    if (!(var3 == var5)) {
                        _fun70475_ip = 101;
                        continue _fun70475
                    }
                case 97:
                    var5 = new Array(0);
                case 101:
                    _closure1_slot32 = var5;
                    var4 = var5.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = _closure1_slot38;
                        var0 = var2.id;
                        var1[var0] = var2;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.customGuildScores;
                    if (!(var3 == var0)) {
                        _fun70475_ip = 136;
                        continue _fun70475
                    }
                case 134:
                    var0 = {};
                case 136:
                    _closure1_slot41 = var0;
                    var0 = var2.customChannelScoresByGuild;
                    if (!(var3 == var0)) {
                        _fun70475_ip = 152;
                        continue _fun70475
                    }
                case 150:
                    var0 = {};
                case 152:
                    _closure1_slot42 = var0;
                    var5 = var2.numOpens;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun70475_ip = 174;
                        continue _fun70475
                    }
                case 171:
                    var4 = var5;
                case 174:
                    _closure1_slot49 = var4;
                    var5 = var2.lastOpened;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun70475_ip = 196;
                        continue _fun70475
                    }
                case 193:
                    var4 = var5;
                case 196:
                    _closure1_slot34 = var4;
                    var5 = var2.lastJoinedRecommendedGuild;
                    var6 = var3 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun70475_ip = 218;
                        continue _fun70475
                    }
                case 215:
                    var4 = var5;
                case 218:
                    _closure1_slot54 = var4;
                    var2 = var2.lastTakenICYMISurvey;
                    var3 = var3 != var2;
                    var0 = 0;
                    if (!var3) {
                        _fun70475_ip = 240;
                        continue _fun70475
                    }
                case 237:
                    var0 = var2;
                case 240:
                    _closure1_slot61 = var0;
                case 244:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(33);
        var0[0] = var4;
        var4 = {};
        var6 = 'getVersion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot43;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getDehydratedItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot32;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNewDehydratedItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot35;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getDehydratedItem';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70480: for (var _fun70480_ip = 0;;) switch (_fun70480_ip) {
                case 0:
                    var1 = _closure1_slot38;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun70480_ip = 26;
                        continue _fun70480
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getHydratedItem';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70481: for (var _fun70481_ip = 0;;) switch (_fun70481_ip) {
                case 0:
                    var1 = _closure1_slot39;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun70481_ip = 26;
                        continue _fun70481
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70482: for (var _fun70482_ip = 0;;) switch (_fun70482_ip) {
                case 0:
                    var1 = _closure1_slot39;
                    var0 = arg0;
                    var1 = var1[var0];
                    var4 = null;
                    var3 = var4 == var1;
                    var0 = null;
                    if (var3) {
                        _fun70482_ip = 75;
                        continue _fun70482
                    }
                case 25:
                    var3 = var1.type;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.ICYMIItemTypes;
                    var2 = var2.MESSAGE;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun70482_ip = 75;
                        continue _fun70482
                    }
                case 70:
                    var0 = var1.message;
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getHydratedItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot39;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUnreadDisplayItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot50;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getNewUnreadDehydratedItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot36;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getReadDisplayItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot51;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getNextIndexToHydrate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot52;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getMissingItems';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot40;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'customMuted';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun70489: for (var _fun70489_ip = 0;;) switch (_fun70489_ip) {
                case 0:
                    var7 = arg0;
                    var6 = this;
                    var0 = var6.getCustomGuildScore;
                    var2 = var0.bind(var6)(var7);
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 23;
                    var0 = var0[var5];
                    var4 = undefined;
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.ICYMICustomScore;
                    var0 = var0.MUTED;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun70489_ip = 109;
                        continue _fun70489
                    }
                case 61:
                    var3 = var6.getCustomChannelScore;
                    var2 = arg1;
                    var2 = var3.bind(var6)(var7, var2);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ICYMICustomScore;
                    var1 = var1.MUTED;
                    var0 = var2 === var1;
                case 109:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getCustomChannelScore';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun70490: for (var _fun70490_ip = 0;;) switch (_fun70490_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var0 = _closure1_slot42;
                    var0 = var0[var5];
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun70490_ip = 86;
                        continue _fun70490
                    }
                case 23:
                    var0 = _closure1_slot42;
                    var0 = var0[var5];
                    var0 = var0[var4];
                    if (!(var2 != var0)) {
                        _fun70490_ip = 86;
                        continue _fun70490
                    }
                case 39:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.numberToCustomScore;
                    var0 = _closure1_slot42;
                    var0 = var0[var5];
                    var0 = var0[var4];
                    var0 = var2.bind(var3)(var0);
                    _fun70490_ip = 120;
                    continue _fun70490;
                case 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ICYMICustomScore;
                    var0 = var1.UNKNOWN;
                case 120:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getCustomGuildScore';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70491: for (var _fun70491_ip = 0;;) switch (_fun70491_ip) {
                case 0:
                    var1 = _closure1_slot41;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun70491_ip = 28;
                        continue _fun70491
                    }
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getCustomGuildScores';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot41;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'hasNewContent';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot45;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getCurrentStatusAttachments';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70494: for (var _fun70494_ip = 0;;) switch (_fun70494_ip) {
                case 0:
                    var2 = _closure1_slot47;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70494_ip = 43;
                        continue _fun70494
                    }
                case 13:
                    var2 = _closure1_slot47;
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = arg0;
                    if (!(var2 === var1)) {
                        _fun70494_ip = 43;
                        continue _fun70494
                    }
                case 30:
                    var1 = _closure1_slot47;
                    var0 = 1;
                    var0 = var1[var0];
                    _fun70494_ip = 47;
                    continue _fun70494;
                case 43:
                    var0 = new Array(0);
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getLoadId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot33;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'hasOpenedEnoughTimes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot49;
            var0 = 5;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'hasOpened';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot46;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getDiscoverableGuilds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot53;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'videosMuted';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot55;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'isRefreshing';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot56;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'isHydrating';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot57;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'notificationItem';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot48;
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getIsTabFocused';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot58;
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'isFirstPageHydrated';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot59;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'lastScrollEvent';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot60;
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'lastTakenICYMISurvey';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot61;
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'getIndexInHydratedFeed';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70507: for (var _fun70507_ip = 0;;) switch (_fun70507_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var0 = 'recommended_guilds';
                    if (!(var0 !== var2)) {
                        _fun70507_ip = 97;
                        continue _fun70507
                    }
                case 19:
                    var0 = 'recommendedGuilds';
                    if (!(var0 !== var2)) {
                        _fun70507_ip = 97;
                        continue _fun70507
                    }
                case 29:
                    var7 = _closure1_slot50;
                    var3 = new Array(0);
                    var6 = 0;
                    var8 = var3;
                    var6 = arraySpread(var8, var7, var6);
                    var7 = _closure1_slot51;
                    var8 = var3;
                    var0 = arraySpread(var8, var7, var6);
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var1
                        var1 = _closure1_slot39;
                        var0 = arg0;
                        var0 = var0.id;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.findIndex;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun70507_ip = 146;
                    continue _fun70507;
                case 97:
                    var7 = _closure1_slot50;
                    var3 = new Array(0);
                    var6 = 0;
                    var8 = var3;
                    var6 = arraySpread(var8, var7, var6);
                    var7 = _closure1_slot51;
                    var8 = var3;
                    var2 = arraySpread(var8, var7, var6);
                    var2 = var3.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.type;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 24;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.ICYMIItemTypes;
                        var0 = var0.RECOMMENDED_GUILDS;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 146:
                    return var0;
            }
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot32;
            var0.dehydratedItems = var2;
            var2 = _closure1_slot49;
            var0.numOpens = var2;
            var2 = _closure1_slot41;
            var0.customGuildScores = var2;
            var2 = _closure1_slot42;
            var0.customChannelScoresByGuild = var2;
            var2 = _closure1_slot34;
            var0.lastOpened = var2;
            var2 = _closure1_slot54;
            var0.lastJoinedRecommendedGuild = var2;
            var1 = _closure1_slot61;
            var0.lastTakenICYMISurvey = var1;
            return var0;
        };
        var4.value = var5;
        var0[32] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ICYMIStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 34;
    var1 = var5[var1];
    var18 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() { // Original name: handleLogout, environment: var3
        var0 = new Array(0);
        _closure1_slot32 = var0;
        var0 = new Array(0);
        _closure1_slot35 = var0;
        var0 = new Array(0);
        _closure1_slot36 = var0;
        var0 = {};
        _closure1_slot38 = var0;
        var0 = {};
        _closure1_slot37 = var0;
        var0 = {};
        _closure1_slot39 = var0;
        var0 = {};
        _closure1_slot40 = var0;
        var2 = null;
        _closure1_slot33 = var2;
        var0 = {};
        _closure1_slot41 = var0;
        var0 = {};
        _closure1_slot42 = var0;
        var0 = 0;
        _closure1_slot43 = var0;
        var3 = false;
        _closure1_slot44 = var3;
        _closure1_slot45 = var3;
        _closure1_slot46 = var3;
        var4 = new Array(0);
        _closure1_slot50 = var4;
        var4 = new Array(0);
        _closure1_slot51 = var4;
        _closure1_slot52 = var0;
        _closure1_slot34 = var0;
        _closure1_slot54 = var0;
        var4 = true;
        _closure1_slot55 = var4;
        _closure1_slot56 = var3;
        var4 = global;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot57 = var4;
        _closure1_slot48 = var2;
        _closure1_slot58 = var3;
        _closure1_slot59 = var3;
        _closure1_slot47 = var2;
        _closure1_slot60 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var10;
    var10 = function(arg0) { // Original name: handleLoadICYMIFromNotification, environment: var3
        _fun70513: for (var _fun70513_ip = 0;;) switch (_fun70513_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.messageItem;
                var1 = var0.customStatusItem;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun70513_ip = 361;
                    continue _fun70513
                }
            case 24:
                if (!(var2 == var8)) {
                    _fun70513_ip = 32;
                    continue _fun70513
                }
            case 28:
                var0 = false;
                return var0;
            case 32:
                var5 = {};
                var0 = var8.message;
                var0 = var0.id;
                var5.id = var0;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 24;
                var0 = var11[var0];
                var7 = undefined;
                var0 = var10.bind(var7)(var0);
                var0 = var0.ICYMIItemTypes;
                var0 = var0.MESSAGE;
                var5.type = var0;
                var0 = 50;
                var5.score = var0;
                var0 = {};
                var4 = var8.channel_id;
                var0.channel_id = var4;
                var4 = var8.message;
                var4 = var4.id;
                var0.message_id = var4;
                var4 = var8.guild_id;
                var0.guild_id = var4;
                var4 = _closure1_slot26;
                var4 = var4.GUILD_TEXT;
                var0.channel_type = var4;
                var5.data = var0;
                var4 = _closure1_slot38;
                var0 = var8.message;
                var0 = var0.id;
                var4[var0] = var5;
                var6 = _closure1_slot39;
                var0 = var8.message;
                var4 = var0.id;
                var0 = {};
                var14 = var0;
                var13 = var5;
                var9 = copyDataProperties(var14, var13);
                var9 = 32;
                var9 = var11[var9];
                var10 = var10.bind(var7)(var9);
                var9 = var10.createMessageRecord;
                var8 = var8.message;
                var9 = var9.bind(var10)(var8);
                var8 = 'message';
                var0[var8] = var9;
                var6[var4] = var0;
                var0 = _closure1_slot33;
                if (!(var2 == var0)) {
                    _fun70513_ip = 252;
                    continue _fun70513
                }
            case 244:
                var0 = _closure1_slot37;
                if (!(var2 != var0)) {
                    _fun70513_ip = 288;
                    continue _fun70513
                }
            case 252:
                var0 = new Array(1);
                var0[0] = var5;
                var13 = _closure1_slot35;
                var12 = 1;
                var14 = var0;
                var4 = arraySpread(var14, var13, var12);
                _closure1_slot35 = var0;
                var0 = _closure1_slot72;
                var0 = var0.bind(var7)();
                _fun70513_ip = 357;
                continue _fun70513;
            case 288:
                var4 = _closure1_slot73;
                var0 = new Array(1);
                var0[0] = var5;
                var13 = _closure1_slot32;
                var5 = 1;
                var14 = var0;
                var12 = var5;
                var6 = arraySpread(var14, var13, var12);
                _closure1_slot32 = var0;
                var6 = var4.bind(var7)(var0);
                var4 = _closure1_slot8;
                var0 = 2;
                var0 = var4.bind(var7)(var6, var0);
                var4 = 0;
                var4 = var0[var4];
                var0 = var0[var5];
                _closure1_slot50 = var4;
                _closure1_slot51 = var0;
            case 357:
                var0 = true;
                return var0;
            case 361:
                _closure1_slot48 = var1;
                var1 = _closure1_slot33;
                if (!(var2 != var1)) {
                    _fun70513_ip = 436;
                    continue _fun70513
                }
            case 376:
                var1 = _closure1_slot35;
                var1 = var1.length;
                var3 = 0;
                if (!(!(var1 > var3))) {
                    _fun70513_ip = 410;
                    continue _fun70513
                }
            case 391:
                var13 = _closure1_slot32;
                var1 = new Array(0);
                var14 = var1;
                var12 = 0;
                var2 = arraySpread(var14, var13, var12);
                _fun70513_ip = 414;
                continue _fun70513;
            case 410:
                var1 = _closure1_slot35;
            case 414:
                _closure1_slot35 = var1;
                var2 = _closure1_slot71;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var0 = _closure1_slot72;
                var0 = var0.bind(var1)();
            case 436:
                var0 = true;
                return var0;
        }
    };
    var1.LOAD_ICYMI_FROM_NOTIFICATION = var10;
    var10 = function(arg0) { // Original name: handleLoadDehydrated, environment: var3
        _fun70514: for (var _fun70514_ip = 0;;) switch (_fun70514_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.items;
                var5 = var0.loadId;
                var6 = var0.startTime;
                var2 = var0.isInitialLoad;
                var3 = var0.isReloading;
                var1 = _closure1_slot67;
                var0 = undefined;
                var1 = var1.bind(var0)(var7);
                _closure1_slot35 = var1;
                var1 = _closure1_slot71;
                var1 = var1.bind(var0)();
                var1 = {};
                var1.load_id = var5;
                var5 = global;
                var7 = var5.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var5 = var5 - var6;
                var1.load_time_millis = var5;
                var7 = _closure1_slot35;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.feed_item_ids = var5;
                _closure1_slot37 = var1;
                var5 = _closure1_slot73;
                var1 = _closure1_slot35;
                var6 = var5.bind(var0)(var1);
                var5 = _closure1_slot8;
                var1 = 2;
                var7 = var5.bind(var0)(var6, var1);
                var1 = 0;
                var6 = var7[var1];
                var5 = 1;
                var5 = var7[var5];
                var7 = _closure1_slot74;
                var7 = var7.bind(var0)(var6);
                _closure1_slot36 = var7;
                var7 = _closure1_slot46;
                if (!var7) {
                    _fun70514_ip = 371;
                    continue _fun70514
                }
            case 188:
                var7 = _closure1_slot43;
                if (!(var1 !== var7)) {
                    _fun70514_ip = 371;
                    continue _fun70514
                }
            case 199:
                if (var2) {
                    _fun70514_ip = 371;
                    continue _fun70514
                }
            case 205:
                var2 = _closure1_slot43;
                if (!(var2 > var1)) {
                    _fun70514_ip = 219;
                    continue _fun70514
                }
            case 213:
                var2 = null;
                _closure1_slot48 = var2;
            case 219:
                var2 = _closure1_slot36;
                var7 = var2.length;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 24;
                var2 = var2[var10];
                var2 = var8.bind(var0)(var2);
                var2 = var2.MIN_ITEMS_FOR_NEW_PILL;
                var2 = var7 > var2;
                if (var3) {
                    _fun70514_ip = 265;
                    continue _fun70514
                }
            case 261:
                _closure1_slot45 = var2;
            case 265:
                if (!var2) {
                    _fun70514_ip = 438;
                    continue _fun70514
                }
            case 271:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 23;
                var3 = var2[var3];
                var8 = var9.bind(var0)(var3);
                var7 = var8.hydrateItems;
                var3 = new Array(0);
                var14 = var3;
                var13 = var6;
                var12 = 0;
                var12 = arraySpread(var14, var13, var12);
                var14 = var3;
                var13 = var5;
                var11 = arraySpread(var14, var13, var12);
                var2 = var2[var10];
                var2 = var9.bind(var0)(var2);
                var2 = var2.ICYMI_PAGE_SIZE;
                var2 = var7.bind(var8)(var3, var1, var2);
                var3 = var6.length;
                var2 = var5.length;
                var2 = var3 + var2;
                if (!(var2 === var1)) {
                    _fun70514_ip = 438;
                    continue _fun70514
                }
            case 363:
                var2 = true;
                _closure1_slot59 = var2;
                _fun70514_ip = 438;
                continue _fun70514;
            case 371:
                _closure1_slot43 = var1;
                var1 = _closure1_slot58;
                if (var1) {
                    _fun70514_ip = 411;
                    continue _fun70514
                }
            case 382:
                var2 = _closure1_slot65;
                var1 = _closure1_slot35;
                var1 = var2.bind(var0)(var6, var1);
                if (!var1) {
                    _fun70514_ip = 411;
                    continue _fun70514
                }
            case 399:
                var1 = true;
                _closure1_slot45 = var1;
                _closure1_slot44 = var1;
                _fun70514_ip = 417;
                continue _fun70514;
            case 411:
                var1 = false;
                _closure1_slot45 = var1;
            case 417:
                var2 = _closure1_slot72;
                var1 = {};
                var1.newUnread = var6;
                var1.newRead = var5;
                var1 = var2.bind(var0)(var1);
            case 438:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 30;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.ICYMIAnalytics;
                var2 = var3.trackFeedLoaded;
                var1 = {};
                var7 = _closure1_slot37;
                var1.newTrackingProps = var7;
                var7 = _closure1_slot45;
                var1.hasNewContent = var7;
                var1.unreadFeedItems = var6;
                var1.readFeedItems = var5;
                var5 = _closure1_slot58;
                var4 = 'background_load';
                if (!var5) {
                    _fun70514_ip = 519;
                    continue _fun70514
                }
            case 513:
                var4 = 'foreground_load';
            case 519:
                var1.homeSessionId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.LOAD_ICYMI_DEHYDRATED = var10;
    var10 = function(arg0) { // Original name: handleLoadHydratedItems, environment: var3
        _fun70516: for (var _fun70516_ip = 0;;) switch (_fun70516_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.messageItems;
                var11 = var0.activityItems;
                var10 = var0.generatedCandidateItems;
                var8 = var0.requestMessageItems;
                var7 = var0.requestActivityItems;
                var3 = var0.requestGeneratedCandidateItems;
                var6 = var0.startingIndex;
                var5 = var0.endingIndex;
                var2 = true;
                _closure1_slot59 = var2;
                var2 = {};
                var13 = _closure1_slot39;
                var14 = var2;
                var4 = copyDataProperties(var14, var13);
                _closure1_slot39 = var2;
                var9 = var12.reduce;
                var4 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    var2 = arg1;
                    var1 = var2.message;
                    var1 = var1.id;
                    var0[var1] = var2;
                    return var0;
                };
                var2 = {};
                var2 = var9.bind(var12)(var4, var2);
                var _closure2_slot0 = var2;
                var9 = var11.reduce;
                var4 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    var2 = arg1;
                    var1 = var2.id;
                    var0[var1] = var2;
                    return var0;
                };
                var2 = {};
                var2 = var9.bind(var11)(var4, var2);
                var _closure2_slot1 = var2;
                var9 = var10.reduce;
                var4 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    var2 = arg1;
                    var1 = var2.content_id;
                    var0[var1] = var2;
                    return var0;
                };
                var2 = {};
                var2 = var9.bind(var10)(var4, var2);
                var _closure2_slot2 = var2;
                var4 = var8.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun70520: for (var _fun70520_ip = 0;;) switch (_fun70520_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot0;
                            var0 = var4.message_id;
                            var0 = var1[var0];
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun70520_ip = 50;
                                continue _fun70520
                            }
                        case 26:
                            var5 = _closure1_slot40;
                            var3 = var4.message_id;
                            var1 = true;
                            var5[var3] = var1;
                            _fun70520_ip = 358;
                            continue _fun70520;
                        case 50:
                            var5 = _closure1_slot38;
                            var3 = var4.message_id;
                            var5 = var5[var3];
                            if (!(var2 == var5)) {
                                _fun70520_ip = 199;
                                continue _fun70520
                            }
                        case 74:
                            var3 = {};
                            var4 = var4.message_id;
                            var3.id = var4;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 24;
                            var6 = var6[var4];
                            var4 = undefined;
                            var4 = var7.bind(var4)(var6);
                            var4 = var4.ICYMIItemTypes;
                            var4 = var4.MESSAGE;
                            var3.type = var4;
                            var4 = -1;
                            var3.score = var4;
                            var4 = {};
                            var6 = var0.guild_id;
                            var4.guild_id = var6;
                            var6 = var0.channel_id;
                            var4.channel_id = var6;
                            var6 = var0.message;
                            var6 = var6.id;
                            var4.message_id = var6;
                            var6 = _closure1_slot26;
                            var6 = var6.GUILD_TEXT;
                            var4.channel_type = var6;
                            var6 = false;
                            var4.has_mention = var6;
                            var3.data = var4;
                            var5 = var3;
                        case 199:
                            var7 = _closure1_slot19;
                            var6 = var7.getMessage;
                            var4 = var0.channel_id;
                            var3 = var0.message;
                            var3 = var3.id;
                            var4 = var6.bind(var7)(var4, var3);
                            if (!(var2 == var4)) {
                                _fun70520_ip = 288;
                                continue _fun70520
                            }
                        case 234:
                            var6 = _closure1_slot39;
                            var2 = var0.message;
                            var3 = var2.id;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 23;
                            var7 = var7[var2];
                            var2 = undefined;
                            var7 = var8.bind(var2)(var7);
                            var2 = var7.createGravityMessageFromServer;
                            var2 = var2.bind(var7)(var0, var5);
                            var6[var3] = var2;
                            _fun70520_ip = 358;
                            continue _fun70520;
                        case 288:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 23;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var2 = var3.createGravityMessageFromServer;
                            var9 = var2.bind(var3)(var0, var5);
                            var2 = _closure1_slot39;
                            var0 = var0.message;
                            var1 = var0.id;
                            var0 = {};
                            var10 = var0;
                            var3 = copyDataProperties(var10, var9);
                            var3 = 'message';
                            var0[var3] = var4;
                            var2[var1] = var0;
                        case 358:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var8)(var2);
                var4 = var7.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun70521: for (var _fun70521_ip = 0;;) switch (_fun70521_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot1;
                            var0 = var1.content_id;
                            var4 = var2[var0];
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun70521_ip = 47;
                                continue _fun70521
                            }
                        case 26:
                            var5 = _closure1_slot40;
                            var3 = var1.content_id;
                            var0 = true;
                            var5[var3] = var0;
                            _fun70521_ip = 120;
                            continue _fun70521;
                        case 47:
                            var5 = _closure1_slot38;
                            var3 = var1.content_id;
                            var3 = var5[var3];
                            if (!(var2 == var3)) {
                                _fun70521_ip = 86;
                                continue _fun70521
                            }
                        case 68:
                            var5 = _closure1_slot40;
                            var2 = var1.content_id;
                            var1 = true;
                            var5[var2] = var1;
                            _fun70521_ip = 120;
                            continue _fun70521;
                        case 86:
                            var2 = _closure1_slot39;
                            var1 = var4.id;
                            var0 = {};
                            var7 = var0;
                            var6 = var3;
                            var3 = copyDataProperties(var7, var6);
                            var3 = 'activity';
                            var0[var3] = var4;
                            var2[var1] = var0;
                        case 120:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var7)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun70522: for (var _fun70522_ip = 0;;) switch (_fun70522_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot2;
                            var1 = var0.content_id;
                            var5 = var2[var1];
                            var1 = null;
                            if (!(var1 == var5)) {
                                _fun70522_ip = 50;
                                continue _fun70522
                            }
                        case 26:
                            var4 = _closure1_slot40;
                            var3 = var0.content_id;
                            var2 = true;
                            var4[var3] = var2;
                            _fun70522_ip = 200;
                            continue _fun70522;
                        case 50:
                            var4 = _closure1_slot38;
                            var2 = var0.content_id;
                            var4 = var4[var2];
                            if (!(var1 != var4)) {
                                _fun70522_ip = 114;
                                continue _fun70522
                            }
                        case 71:
                            var2 = var4.type;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 24;
                            var1 = var6[var1];
                            var6 = undefined;
                            var1 = var7.bind(var6)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.GENERATED_CANDIDATE;
                            if (!(var2 !== var1)) {
                                _fun70522_ip = 132;
                                continue _fun70522
                            }
                        case 114:
                            var2 = _closure1_slot40;
                            var1 = var0.content_id;
                            var0 = true;
                            var2[var1] = var0;
                            _fun70522_ip = 200;
                            continue _fun70522;
                        case 132:
                            var2 = _closure1_slot39;
                            var1 = var5.content_id;
                            var0 = {};
                            var9 = var0;
                            var8 = var4;
                            var4 = copyDataProperties(var9, var8);
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 23;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.createGravityGeneratedCandidateFromServer;
                            var4 = var3.bind(var4)(var5);
                            var3 = 'candidate';
                            var0[var3] = var4;
                            var2[var1] = var0;
                        case 200:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot52;
                if (!(var6 === var1)) {
                    _fun70516_ip = 217;
                    continue _fun70516
                }
            case 213:
                _closure1_slot52 = var5;
            case 217:
                var3 = _closure1_slot57;
                var2 = var3.delete;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 23;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.generateHydrationId;
                var1 = var1.bind(var4)(var6, var5);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.LOAD_ICYMI_HYDRATED = var10;
    var10 = function(arg0) { // Original name: handleLoadCustomScores, environment: var3
        _fun70523: for (var _fun70523_ip = 0;;) switch (_fun70523_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.scores;
                var1 = _closure1_slot63;
                var0 = undefined;
                var8 = var1.bind(var0)(var3);
                var3 = var8.bind(var0)();
                var1 = var3.done;
                var7 = global;
                var6 = 0;
                var5 = null;
                var4 = var3;
                var3 = undefined;
                if (var1) {
                    _fun70523_ip = 246;
                    continue _fun70523
                }
            case 49:
                var11 = var4.value;
                var10 = _closure1_slot41;
                var9 = var11.guild_id;
                var1 = var11.guild_score;
                var10[var9] = var1;
                var10 = _closure1_slot78;
                var9 = var11.guild_id;
                var1 = var11.guild_score;
                var1 = var10.bind(var0)(var9, var1);
                var10 = var7.Object;
                var9 = var10.keys;
                var1 = var11.custom_channel_scores;
                var10 = var9.bind(var10)(var1);
                var1 = var10.length;
                var1 = var6 < var1;
                var9 = 0;
                if (!var1) {
                    _fun70523_ip = 228;
                    continue _fun70523
                }
            case 130:
                var12 = var10[var9];
                var13 = _closure1_slot42;
                var1 = var11.guild_id;
                var1 = var13[var1];
                if (!(var5 == var1)) {
                    _fun70523_ip = 166;
                    continue _fun70523
                }
            case 151:
                var14 = _closure1_slot42;
                var13 = var11.guild_id;
                var1 = {};
                var14[var13] = var1;
            case 166:
                var13 = _closure1_slot42;
                var1 = var11.guild_id;
                var13 = var13[var1];
                var1 = var11.custom_channel_scores;
                var1 = var1[var12];
                var13[var12] = var1;
                var13 = _closure1_slot76;
                var1 = var11.custom_channel_scores;
                var1 = var1[var12];
                var1 = var13.bind(var0)(var12, var1);
                var9 = var9 + 1;
                var1 = var10.length;
                var3 = var12;
                if (var9 < var1) {
                    _fun70523_ip = 130;
                    continue _fun70523
                }
            case 228:
                var9 = var8.bind(var0)();
                var1 = var9.done;
                var4 = var9;
                if (!var1) {
                    _fun70523_ip = 49;
                    continue _fun70523
                }
            case 246:
                var1 = {};
                var15 = _closure1_slot41;
                var16 = var1;
                var3 = copyDataProperties(var16, var15);
                _closure1_slot41 = var1;
                var1 = {};
                var15 = _closure1_slot42;
                var16 = var1;
                var3 = copyDataProperties(var16, var15);
                _closure1_slot42 = var1;
                return var0;
        }
    };
    var1.LOAD_ICYMI_CUSTOM_SCORES = var10;
    var10 = function(arg0) { // Original name: loadICYMIRecommendedGuilds, environment: var3
        var0 = arg0;
        var2 = var0.guilds;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 31;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.makeDiscoverableGuild;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var1.bind(var2)(var0);
        _closure1_slot53 = var1;
        var1 = _closure1_slot70;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOAD_ICYMI_RECOMMENDED_GUILDS = var10;
    var10 = function(arg0) { // Original name: handleCustomScoresUpdated, environment: var3
        _fun70526: for (var _fun70526_ip = 0;;) switch (_fun70526_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelScores;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var6 = var1.guildScore;
                var1 = null;
                if (!(var1 != var6)) {
                    _fun70526_ip = 72;
                    continue _fun70526
                }
            case 32:
                var3 = _closure1_slot41;
                var3[var7] = var6;
                var5 = _closure1_slot78;
                var3 = undefined;
                var3 = var5.bind(var3)(var7, var6);
                var3 = {};
                var8 = _closure1_slot41;
                var9 = var3;
                var5 = copyDataProperties(var9, var8);
                _closure1_slot41 = var3;
            case 72:
                if (!(var1 != var2)) {
                    _fun70526_ip = 93;
                    continue _fun70526
                }
            case 76:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun70527: for (var _fun70527_ip = 0;;) switch (_fun70527_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.channelId;
                            var3 = var0.score;
                            var5 = _closure1_slot42;
                            var1 = _closure2_slot0;
                            var5 = var5[var1];
                            var1 = null;
                            if (!(var1 == var5)) {
                                _fun70527_ip = 52;
                                continue _fun70527
                            }
                        case 38:
                            var6 = _closure1_slot42;
                            var5 = _closure2_slot0;
                            var1 = {};
                            var6[var5] = var1;
                        case 52:
                            var1 = _closure1_slot42;
                            var0 = _closure2_slot0;
                            var0 = var1[var0];
                            var0[var4] = var3;
                            var1 = _closure1_slot76;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4, var3);
                            var1 = {};
                            var7 = _closure1_slot42;
                            var8 = var1;
                            var3 = copyDataProperties(var8, var7);
                            _closure1_slot42 = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 93:
                var0 = undefined;
                return var0;
        }
    };
    var1.ICYMI_CUSTOM_SCORES_UPDATED = var10;
    var10 = function() { // Original name: handleReloadTab, environment: var3
        _fun70528: for (var _fun70528_ip = 0;;) switch (_fun70528_ip) {
            case 0:
                var0 = _closure1_slot35;
                var1 = var0.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun70528_ip = 36;
                    continue _fun70528
                }
            case 18:
                var1 = _closure1_slot72;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = false;
                _closure1_slot45 = var1;
                return var0;
            case 36:
                var0 = false;
                return var0;
        }
    };
    var1.RELOAD_ICYMI = var10;
    var10 = function() { // Original name: handleGravityTabOpened, environment: var3
        _fun70529: for (var _fun70529_ip = 0;;) switch (_fun70529_ip) {
            case 0:
                var0 = true;
                _closure1_slot46 = var0;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                _closure1_slot34 = var0;
                var0 = _closure1_slot44;
                if (!var0) {
                    _fun70529_ip = 47;
                    continue _fun70529
                }
            case 37:
                var0 = false;
                _closure1_slot44 = var0;
                _closure1_slot45 = var0;
            case 47:
                var2 = _closure1_slot49;
                var0 = 5;
                if (!(var2 < var0)) {
                    _fun70529_ip = 69;
                    continue _fun70529
                }
            case 58:
                var0 = _closure1_slot49;
                var0 = var0 + 1;
                _closure1_slot49 = var0;
            case 69:
                var0 = undefined;
                return var0;
        }
    };
    var1.ICYMI_TAB_OPENED = var10;
    var10 = function() { // Original name: handleGravityFeedback, environment: var3
        var0 = 6;
        _closure1_slot49 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_FEEDBACK_GIVEN = var10;
    var1.MESSAGE_REACTION_ADD = var9;
    var10 = function(arg0) { // Original name: handleReactionBatch, environment: var3
        _fun70531: for (var _fun70531_ip = 0;;) switch (_fun70531_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.messageId;
                var5 = var0.reactions;
                var0 = _closure1_slot39;
                var2 = var0[var2];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70531_ip = 117;
                    continue _fun70531
                }
            case 31:
                var4 = var2.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 24;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.MESSAGE;
                if (!(var4 === var3)) {
                    _fun70531_ip = 113;
                    continue _fun70531
                }
            case 74:
                var3 = _closure1_slot15;
                var1 = var3.getId;
                var4 = var1.bind(var3)();
                var3 = var2.message;
                var1 = var3.addReactionBatch;
                var1 = var1.bind(var3)(var5, var4);
                var2.message = var1;
                return var0;
            case 113:
                var0 = false;
                return var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD_MANY = var10;
    var1.MESSAGE_REACTION_REMOVE = var9;
    var9 = function(arg0) { // Original name: handleRemoveAllReactions, environment: var3
        _fun70532: for (var _fun70532_ip = 0;;) switch (_fun70532_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.messageId;
                var0 = _closure1_slot39;
                var3 = var0[var2];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun70532_ip = 109;
                    continue _fun70532
                }
            case 28:
                var2 = var3.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                if (!var1) {
                    _fun70532_ip = 106;
                    continue _fun70532
                }
            case 74:
                var6 = var3.message;
                var5 = var6.set;
                var4 = 'reactions';
                var2 = new Array(0);
                var2 = var5.bind(var6)(var4, var2);
                var3.message = var2;
                var1 = undefined;
            case 106:
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_ALL = var9;
    var9 = function(arg0) { // Original name: handleRemoveEmojiReactions, environment: var3
        _fun70533: for (var _fun70533_ip = 0;;) switch (_fun70533_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.messageId;
                var5 = var0.emoji;
                var0 = _closure1_slot39;
                var3 = var0[var2];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun70533_ip = 107;
                    continue _fun70533
                }
            case 34:
                var2 = var3.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var4);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                if (!var1) {
                    _fun70533_ip = 104;
                    continue _fun70533
                }
            case 80:
                var4 = var3.message;
                var2 = var4.removeReactionsForEmoji;
                var2 = var2.bind(var4)(var5);
                var3.message = var2;
                var1 = undefined;
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_EMOJI = var9;
    var1.CHANNEL_ACK = var8;
    var1.MESSAGE_ACK = var8;
    var8 = function() { // Original name: handleJoinedRecommendedGuild, environment: var3
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        _closure1_slot54 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_JOINED_RECOMMENDED_GUILD = var8;
    var8 = function(arg0) { // Original name: handleSetVideosMuted, environment: var3
        var0 = arg0;
        var1 = var0.muted;
        _closure1_slot55 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_SET_VIDEOS_MUTED = var8;
    var8 = function(arg0) { // Original name: handleSetRefreshing, environment: var3
        var0 = arg0;
        var1 = var0.refreshing;
        _closure1_slot56 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_SET_REFRESHING = var8;
    var8 = function(arg0) { // Original name: handleLoadHydratedAttempt, environment: var3
        var0 = arg0;
        var2 = var0.hydrationId;
        var1 = _closure1_slot57;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_ICYMI_HYDRATED_ATTEMPT = var8;
    var8 = function(arg0) { // Original name: handleLoadHydratedFailed, environment: var3
        var0 = arg0;
        var2 = var0.hydrationId;
        var1 = _closure1_slot57;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_ICYMI_HYDRATED_FAILED = var8;
    var8 = function(arg0) { // Original name: handleSetFocusedTab, environment: var3
        var0 = arg0;
        var1 = var0.focused;
        _closure1_slot58 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_SET_FOCUSED_TAB = var8;
    var8 = function(arg0) { // Original name: handleLoadCurrentStatusMedia, environment: var3
        _fun70540: for (var _fun70540_ip = 0;;) switch (_fun70540_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.attachments;
                var2 = var0.createdAtMs;
                var5 = null;
                var0 = var5 != var4;
                var1 = null;
                if (!var0) {
                    _fun70540_ip = 70;
                    continue _fun70540
                }
            case 26:
                var0 = var4.length;
                var3 = 0;
                var1 = null;
                if (!(var3 !== var0)) {
                    _fun70540_ip = 70;
                    continue _fun70540
                }
            case 39:
                var0 = new Array(2);
                var0[0] = var2;
                var2 = new Array(0);
                var8 = var2;
                var7 = var4;
                var6 = 0;
                var3 = arraySpread(var8, var7, var6);
                var0[1] = var2;
                var1 = var0;
            case 70:
                _closure1_slot47 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.LOAD_ICYMI_CURRENT_STATUS_MEDIA = var8;
    var8 = function(arg0) { // Original name: handleScrollEvent, environment: var3
        var0 = arg0;
        var1 = var0.timestamp;
        _closure1_slot60 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_SCROLL_EVENT = var8;
    var3 = function(arg0) { // Original name: handleTakeSurvey, environment: var3
        var0 = arg0;
        var1 = var0.takenAt;
        _closure1_slot61 = var1;
        var0 = undefined;
        return var0;
    };
    var1.ICYMI_TAKE_SURVEY = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var19 = var3;
    var17 = var1;
    var1 = new var19[var7](var18, var17, var16);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 7793, 1590, 3293, 1216, 1372, 8819, 1410, 4207, 3050, 3901, 3059, 4260, 8821, 8826, 660, 8831, 667, 8827, 6579, 21, 8822, 6793, 6798, 7789, 8832, 5572, 3926, 566, 806, 2]);