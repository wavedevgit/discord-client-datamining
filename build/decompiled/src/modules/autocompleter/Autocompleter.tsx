// modules/autocompleter/Autocompleter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun54820: for (var _fun54820_ip = 0;;) switch (_fun54820_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54820_ip = 46;
                    continue _fun54820
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54820_ip = 55;
                    continue _fun54820
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54820_ip = 343;
                    continue _fun54820
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54820_ip = 323;
                    continue _fun54820
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54820_ip = 283;
                    continue _fun54820
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54820_ip = 270;
                    continue _fun54820
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
                    _fun54820_ip = 163;
                    continue _fun54820
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54820_ip = 179;
                    continue _fun54820
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54820_ip = 249;
                    continue _fun54820
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54820_ip = 249;
                    continue _fun54820
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54820_ip = 234;
                    continue _fun54820
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54820_ip = 247;
                    continue _fun54820
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54820_ip = 265;
                continue _fun54820;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54820_ip = 283;
                continue _fun54820;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54820_ip = 323;
                    continue _fun54820
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
                    _fun54820_ip = 330;
                    continue _fun54820
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54821: for (var _fun54821_ip = 0;;) switch (_fun54821_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54821_ip = 56;
                                continue _fun54821
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
                            _fun54821_ip = 67;
                            continue _fun54821;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun54822: for (var _fun54822_ip = 0;;) switch (_fun54822_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54822_ip = 23;
                    continue _fun54822
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54822_ip = 33;
                    continue _fun54822
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
                    _fun54822_ip = 70;
                    continue _fun54822
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54822_ip = 55;
                    continue _fun54822
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun54823: for (var _fun54823_ip = 0;;) switch (_fun54823_ip) {
            case 0:
                var0 = arg1;
                var0 = var0.frecencyBoosters;
                if (var0) {
                    _fun54823_ip = 16;
                    continue _fun54823
                }
            case 12:
                var0 = {};
                _fun54823_ip = 55;
                continue _fun54823;
            case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getBoosterMap;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 55:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AutocompleterResultTypes;
    var _closure1_slot10 = var6;
    var7 = var3.Object;
    var6 = var7.freeze;
    var3 = {};
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1() {
            _fun54825: for (var _fun54825_ip = 0;;) switch (_fun54825_ip) {
                case 0:
                    var2 = arguments[2];
                    var6 = arguments[3];
                    var1 = arguments[4];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun54825_ip = 27;
                        continue _fun54825
                    }
                case 24:
                    var2 = 100;
                case 27:
                    if (!(var6 === var0)) {
                        _fun54825_ip = 38;
                        continue _fun54825
                    }
                case 31:
                    var6 = _closure1_slot11;
                case 38:
                    if (!(var1 === var0)) {
                        _fun54825_ip = 44;
                        continue _fun54825
                    }
                case 42:
                    var1 = 0;
                case 44:
                    var8 = _closure1_slot3;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var0)(var3, var7);
                    var7 = '';
                    var3.query = var7;
                    var5 = _closure1_slot11;
                    var3.options = var5;
                    var5 = new Array(0);
                    var3.results = var5;
                    var5 = new Array(0);
                    var3._userResults = var5;
                    var5 = new Array(0);
                    var3._groupDMResults = var5;
                    var5 = new Array(0);
                    var3._textChannelResults = var5;
                    var5 = new Array(0);
                    var3._voiceChannelResults = var5;
                    var5 = new Array(0);
                    var3._guildResults = var5;
                    var5 = new Array(0);
                    var3._applicationResults = var5;
                    var5 = new Array(0);
                    var3._linkResults = var5;
                    var5 = new Array(0);
                    var3._inAppNavigations = var5;
                    var5 = null;
                    var3._userBlacklist = var5;
                    var5 = false;
                    var3._refetched = var5;
                    var5 = function(arg0) { // Environment: var4
                        _fun54826: for (var _fun54826_ip = 0;;) switch (_fun54826_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.results;
                                var4 = _closure3_slot0;
                                var3 = var4._include;
                                var1 = _closure1_slot10;
                                var1 = var1.USER;
                                var1 = var3.bind(var4)(var1);
                                if (!var1) {
                                    _fun54826_ip = 344;
                                    continue _fun54826
                                }
                            case 46:
                                var3 = _closure3_slot0;
                                var1 = new Array(0);
                                var3._userResults = var1;
                                var1 = _closure1_slot12;
                                var6 = undefined;
                                var5 = var1.bind(var6)(var2);
                                var2 = var5.bind(var6)();
                                var1 = var2.done;
                                var4 = 8;
                                var3 = null;
                                if (var1) {
                                    _fun54826_ip = 241;
                                    continue _fun54826
                                }
                            case 91:
                                var1 = var2.value;
                                var9 = var1.id;
                                var13 = var1.score;
                                var11 = var1.comparator;
                                var8 = _closure1_slot9;
                                var1 = var8.getUser;
                                var10 = var1.bind(var8)(var9);
                                if (!(var3 != var10)) {
                                    _fun54826_ip = 223;
                                    continue _fun54826
                                }
                            case 132:
                                var1 = _closure3_slot0;
                                var9 = var1._userResults;
                                var8 = var9.push;
                                var1 = {};
                                var12 = _closure1_slot10;
                                var12 = var12.USER;
                                var1.type = var12;
                                var1.record = var10;
                                var12 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var10 = var10[var4];
                                var12 = var12.bind(var6)(var10);
                                var10 = var12.calculateScore;
                                var10 = var10.bind(var12)(var13);
                                var1.score = var10;
                                var12 = var3 != var11;
                                var10 = undefined;
                                if (!var12) {
                                    _fun54826_ip = 213;
                                    continue _fun54826
                                }
                            case 210:
                                var10 = var11;
                            case 213:
                                var1.comparator = var10;
                                var1 = var8.bind(var9)(var1);
                            case 223:
                                var8 = var5.bind(var6)();
                                var1 = var8.done;
                                var2 = var8;
                                if (!var1) {
                                    _fun54826_ip = 91;
                                    continue _fun54826
                                }
                            case 241:
                                var2 = _closure3_slot0;
                                var1 = var2._willRefetchIfSingleCategoryResults;
                                var1 = var1.bind(var2)();
                                var2 = !var1;
                                if (!var2) {
                                    _fun54826_ip = 286;
                                    continue _fun54826
                                }
                            case 261:
                                var3 = _closure3_slot0;
                                var4 = var3._userResults;
                                var4 = var4.length;
                                var3 = var3._limit;
                                var2 = var4 > var3;
                            case 286:
                                if (!var2) {
                                    _fun54826_ip = 311;
                                    continue _fun54826
                                }
                            case 289:
                                var2 = _closure3_slot0;
                                var3 = var2._userResults;
                                var2 = var2._limit;
                                var3.length = var2;
                            case 311:
                                if (!var1) {
                                    _fun54826_ip = 330;
                                    continue _fun54826
                                }
                            case 314:
                                var2 = _closure3_slot0;
                                var1 = var2.refetchIfSingleCategoryResults;
                                var1 = var1.bind(var2)();
                            case 330:
                                var1 = _closure3_slot0;
                                var0 = var1.updateAllResults;
                                var0 = var0.bind(var1)();
                            case 344:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.parseUserResults = var5;
                    var4 = function() { // Environment: var4
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var4 = _closure3_slot0;
                        var1 = var4._asyncTimeout;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 9;
                        var1 = var6[var1];
                        var2 = var5.bind(var0)(var1);
                        var9 = var4._userResults;
                        var1 = new Array(0);
                        var8 = 0;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._groupDMResults;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._textChannelResults;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._voiceChannelResults;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._guildResults;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._linkResults;
                        var10 = var1;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = var4._inAppNavigations;
                        var10 = var1;
                        var3 = arraySpread(var10, var9, var8);
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.uniqBy;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var4 = var0.type;
                            var0 = var0.record;
                            var3 = var0.id;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = '-';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.sort;
                        var1 = 10;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.value;
                        var1 = var1.bind(var2)();
                        var4.results = var1;
                        var3 = var4.onResultsChange;
                        var2 = var4.results;
                        var1 = var4.query;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var3.updateAllResults = var4;
                    var4 = arg0;
                    var3.onResultsChange = var4;
                    var5 = var3.setOptions;
                    var4 = true;
                    var4 = var5.bind(var3)(var6, var4);
                    var3._limit = var2;
                    var3._refetchForSingleCategoryLimit = var1;
                    var1 = var3.createSearchContext;
                    var1 = var1.bind(var3)();
                    var2 = var3.setResultTypes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'createSearchContext';
        var0.key = var1;
        var1 = function() {
            _fun54829: for (var _fun54829_ip = 0;;) switch (_fun54829_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.userSearchContext;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun54829_ip = 70;
                        continue _fun54829
                    }
                case 15:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.getUserSearchContext;
                    var2 = var1.parseUserResults;
                    var0 = var1._limit;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.userSearchContext = var0;
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(23);
        var1[0] = var0;
        var0 = {};
        var5 = 'setLimit';
        var0.key = var5;
        var5 = function arg0() {
            _fun54830: for (var _fun54830_ip = 0;;) switch (_fun54830_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.userSearchContext;
                    var0._limit = var3;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun54830_ip = 35;
                        continue _fun54830
                    }
                case 24:
                    var1 = var2.setLimit;
                    var1 = var1.bind(var2)(var3);
                case 35:
                    var1 = var0._userResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 74;
                        continue _fun54830
                    }
                case 56:
                    var2 = var0._userResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 74:
                    var1 = var0._groupDMResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 113;
                        continue _fun54830
                    }
                case 95:
                    var2 = var0._groupDMResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 113:
                    var1 = var0._textChannelResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 152;
                        continue _fun54830
                    }
                case 134:
                    var2 = var0._textChannelResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 152:
                    var1 = var0._voiceChannelResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 191;
                        continue _fun54830
                    }
                case 173:
                    var2 = var0._voiceChannelResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 191:
                    var1 = var0._guildResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 230;
                        continue _fun54830
                    }
                case 212:
                    var2 = var0._guildResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 230:
                    var1 = var0._applicationResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 269;
                        continue _fun54830
                    }
                case 251:
                    var2 = var0._applicationResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 269:
                    var1 = var0._linkResults;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 308;
                        continue _fun54830
                    }
                case 290:
                    var2 = var0._linkResults;
                    var1 = var0._limit;
                    var2.length = var1;
                case 308:
                    var1 = var0._inAppNavigations;
                    var2 = var1.length;
                    var1 = var0._limit;
                    if (!(var2 > var1)) {
                        _fun54830_ip = 347;
                        continue _fun54830
                    }
                case 329:
                    var1 = var0._inAppNavigations;
                    var0 = var0._limit;
                    var1.length = var0;
                case 347:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setRefetchForSingleCategoryLimit';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._refetchForSingleCategoryLimit = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setResultTypes';
        var0.key = var5;
        var5 = function arg0() {
            _fun54832: for (var _fun54832_ip = 0;;) switch (_fun54832_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var0 = null;
                    var2 = var0 != var4;
                    if (!var2) {
                        _fun54832_ip = 46;
                        continue _fun54832
                    }
                case 15:
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var3;
                    var5 = var4;
                    var2 = new var6[var2](var5, var4);
                    var0 = var2 instanceof Object ? var2 : var3;
                case 46:
                    var1.resultTypes = var0;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.USER;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 85;
                        continue _fun54832
                    }
                case 79:
                    var2 = new Array(0);
                    _fun54832_ip = 91;
                    continue _fun54832;
                case 85:
                    var2 = var1._userResults;
                case 91:
                    var1._userResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.GROUP_DM;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 127;
                        continue _fun54832
                    }
                case 121:
                    var2 = new Array(0);
                    _fun54832_ip = 133;
                    continue _fun54832;
                case 127:
                    var2 = var1._groupDMResults;
                case 133:
                    var1._groupDMResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.TEXT_CHANNEL;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 169;
                        continue _fun54832
                    }
                case 163:
                    var2 = new Array(0);
                    _fun54832_ip = 175;
                    continue _fun54832;
                case 169:
                    var2 = var1._textChannelResults;
                case 175:
                    var1._textChannelResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.VOICE_CHANNEL;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 211;
                        continue _fun54832
                    }
                case 205:
                    var2 = new Array(0);
                    _fun54832_ip = 217;
                    continue _fun54832;
                case 211:
                    var2 = var1._voiceChannelResults;
                case 217:
                    var1._voiceChannelResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.GUILD;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 253;
                        continue _fun54832
                    }
                case 247:
                    var2 = new Array(0);
                    _fun54832_ip = 259;
                    continue _fun54832;
                case 253:
                    var2 = var1._guildResults;
                case 259:
                    var1._guildResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.APPLICATION;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 295;
                        continue _fun54832
                    }
                case 289:
                    var2 = new Array(0);
                    _fun54832_ip = 301;
                    continue _fun54832;
                case 295:
                    var2 = var1._applicationResults;
                case 301:
                    var1._applicationResults = var2;
                    var3 = var1._include;
                    var2 = _closure1_slot10;
                    var2 = var2.LINK;
                    var2 = var3.bind(var1)(var2);
                    if (var2) {
                        _fun54832_ip = 337;
                        continue _fun54832
                    }
                case 331:
                    var2 = new Array(0);
                    _fun54832_ip = 343;
                    continue _fun54832;
                case 337:
                    var2 = var1._linkResults;
                case 343:
                    var1._linkResults = var2;
                    var2 = var1._include;
                    var0 = _closure1_slot10;
                    var0 = var0.IN_APP_NAVIGATION;
                    var0 = var2.bind(var1)(var0);
                    if (var0) {
                        _fun54832_ip = 379;
                        continue _fun54832
                    }
                case 373:
                    var0 = new Array(0);
                    _fun54832_ip = 385;
                    continue _fun54832;
                case 379:
                    var0 = var1._inAppNavigations;
                case 385:
                    var1._inAppNavigations = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_include';
        var0.key = var5;
        var5 = function arg0() {
            _fun54833: for (var _fun54833_ip = 0;;) switch (_fun54833_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.resultTypes;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun54833_ip = 37;
                        continue _fun54833
                    }
                case 18:
                    var3 = var1.resultTypes;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 37:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_isAsyncSearch';
        var0.key = var5;
        var5 = function() {
            _fun54834: for (var _fun54834_ip = 0;;) switch (_fun54834_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._include;
                    var0 = _closure1_slot10;
                    var0 = var0.USER;
                    var0 = var2.bind(var1)(var0);
                    if (!var0) {
                        _fun54834_ip = 71;
                        continue _fun54834
                    }
                case 30:
                    var3 = var1.options;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun54834_ip = 67;
                        continue _fun54834
                    }
                case 46:
                    var3 = var3.userFilters;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun54834_ip = 67;
                        continue _fun54834
                    }
                case 61:
                    var1 = var3.thread;
                case 67:
                    var0 = var2 != var1;
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'setOptions';
        var0.key = var5;
        var5 = function arg0() {
            _fun54835: for (var _fun54835_ip = 0;;) switch (_fun54835_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun54835_ip = 19;
                        continue _fun54835
                    }
                case 17:
                    var4 = false;
                case 19:
                    var3 = var5;
                    if (!var4) {
                        _fun54835_ip = 52;
                        continue _fun54835
                    }
                case 25:
                    var4 = {};
                    var7 = var2.options;
                    var8 = var4;
                    var6 = copyDataProperties(var8, var7);
                    var8 = var4;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var3 = var4;
                case 52:
                    var2.options = var3;
                    var3 = var2.options;
                    var4 = var3.blacklist;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun54835_ip = 83;
                        continue _fun54835
                    }
                case 75:
                    var2._userBlacklist = var3;
                    _fun54835_ip = 148;
                    continue _fun54835;
                case 83:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.from;
                    var3 = var2.options;
                    var3 = var3.blacklist;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        _fun54836: for (var _fun54836_ip = 0;;) switch (_fun54836_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = var4.startsWith;
                                var3 = 'user:';
                                var1 = var0.bind(var4)(var3);
                                var2 = '';
                                var0 = var2;
                                if (!var1) {
                                    _fun54836_ip = 41;
                                    continue _fun54836
                                }
                            case 30:
                                var1 = var4.replace;
                                var0 = var1.bind(var4)(var3, var2);
                            case 41:
                                return var0;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = '';
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2._userBlacklist = var1;
                case 148:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = '_willRefetchIfSingleCategoryResults';
        var0.key = var5;
        var5 = function() {
            _fun54838: for (var _fun54838_ip = 0;;) switch (_fun54838_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._refetched;
                    if (var0) {
                        _fun54838_ip = 25;
                        continue _fun54838
                    }
                case 12:
                    var3 = var2._refetchForSingleCategoryLimit;
                    var1 = 5;
                    var0 = var3 <= var1;
                case 25:
                    var0 = !var0;
                    if (!var0) {
                        _fun54838_ip = 188;
                        continue _fun54838
                    }
                case 34:
                    var1 = var2.options;
                    var1 = var1.voiceChannelGuildFilter;
                    var4 = null;
                    var1 = var4 == var1;
                    if (!var1) {
                        _fun54838_ip = 69;
                        continue _fun54838
                    }
                case 54:
                    var3 = var2.options;
                    var3 = var3.userFilters;
                    var1 = var4 == var3;
                case 69:
                    if (!var1) {
                        _fun54838_ip = 185;
                        continue _fun54838
                    }
                case 72:
                    var3 = var2._userResults;
                    var4 = new Array(8);
                    var4[0] = var3;
                    var3 = var2._groupDMResults;
                    var4[1] = var3;
                    var3 = var2._textChannelResults;
                    var4[2] = var3;
                    var3 = var2._voiceChannelResults;
                    var4[3] = var3;
                    var3 = var2._guildResults;
                    var4[4] = var3;
                    var3 = var2._applicationResults;
                    var4[5] = var3;
                    var3 = var2._linkResults;
                    var4[6] = var3;
                    var2 = var2._inAppNavigations;
                    var4[7] = var2;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.length;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 1;
                    var1 = var2 === var3;
                case 185:
                    var0 = var1;
                case 188:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'refetchIfSingleCategoryResults';
        var0.key = var5;
        var5 = function() {
            _fun54840: for (var _fun54840_ip = 0;;) switch (_fun54840_ip) {
                case 0:
                    var4 = this;
                    var0 = var4._willRefetchIfSingleCategoryResults;
                    var0 = var0.bind(var4)();
                    if (!var0) {
                        _fun54840_ip = 387;
                        continue _fun54840
                    }
                case 19:
                    var0 = true;
                    var4._refetched = var0;
                    var3 = var4.query;
                    var0 = var4._userResults;
                    var0 = var0.length;
                    var1 = 0;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 366;
                        continue _fun54840
                    }
                case 53:
                    var0 = var4._groupDMResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 340;
                        continue _fun54840
                    }
                case 71:
                    var0 = var4._textChannelResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 314;
                        continue _fun54840
                    }
                case 89:
                    var0 = var4._voiceChannelResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 288;
                        continue _fun54840
                    }
                case 107:
                    var0 = var4._guildResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 262;
                        continue _fun54840
                    }
                case 125:
                    var0 = var4._applicationResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 233;
                        continue _fun54840
                    }
                case 140:
                    var0 = var4._linkResults;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun54840_ip = 202;
                        continue _fun54840
                    }
                case 155:
                    var0 = var4._inAppNavigations;
                    var0 = var0.length;
                    if (!(var0 > var1)) {
                        _fun54840_ip = 387;
                        continue _fun54840
                    }
                case 173:
                    var1 = var4.queryInAppNavigations;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._inAppNavigations = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 202:
                    var1 = var4.queryLink;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._linkResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 233:
                    var1 = var4.queryApplications;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._applicationResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 262:
                    var1 = var4.queryGuilds;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._guildResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 288:
                    var1 = var4.queryVoiceChannels;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._voiceChannelResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 314:
                    var1 = var4.queryTextChannels;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._textChannelResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 340:
                    var1 = var4.queryGroupDMs;
                    var0 = var4._refetchForSingleCategoryLimit;
                    var0 = var1.bind(var4)(var3, var0);
                    var4._groupDMResults = var0;
                    _fun54840_ip = 387;
                    continue _fun54840;
                case 366:
                    var2 = var4.queryUsers;
                    var1 = var4._refetchForSingleCategoryLimit;
                    var0 = null;
                    var0 = var2.bind(var4)(var3, var0, var1);
                case 387:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'search';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54841: for (var _fun54841_ip = 0;;) switch (_fun54841_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var2 = arg1;
                    var _closure3_slot2 = var2;
                    var1.query = var3;
                    var2 = false;
                    var1._refetched = var2;
                    var2 = var3.trim;
                    var3 = var2.bind(var3)();
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun54841_ip = 150;
                        continue _fun54841
                    }
                case 55:
                    var2 = var1.options;
                    var2 = var2.frecencyBoosters;
                    if (var2) {
                        _fun54841_ip = 89;
                        continue _fun54841
                    }
                case 69:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var3 = var2.bind(var3)();
                    _fun54841_ip = 130;
                    continue _fun54841;
                case 89:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var4 = var2.FrecencyUserSettingsActionCreators;
                    var2 = var4.loadIfNecessary;
                    var3 = var2.bind(var4)();
                case 130:
                    var2 = var3.finally;
                    var0 = function() { // Environment: var0
                        _fun54842: for (var _fun54842_ip = 0;;) switch (_fun54842_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var5 = var2.queryUsers;
                                var4 = _closure3_slot1;
                                var3 = _closure3_slot2;
                                var0 = var2._limit;
                                var0 = var5.bind(var2)(var4, var3, var0);
                                var3 = var2.queryGroupDMs;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._groupDMResults = var0;
                                var3 = var2.queryTextChannels;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._textChannelResults = var0;
                                var3 = var2.queryVoiceChannels;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._voiceChannelResults = var0;
                                var3 = var2.queryGuilds;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._guildResults = var0;
                                var3 = var2.queryApplications;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._applicationResults = var0;
                                var3 = var2.queryInAppNavigations;
                                var0 = var2._limit;
                                var0 = var3.bind(var2)(var4, var0);
                                var2._inAppNavigations = var0;
                                var0 = var2._isAsyncSearch;
                                var0 = var0.bind(var2)();
                                if (var0) {
                                    _fun54842_ip = 240;
                                    continue _fun54842
                                }
                            case 193:
                                var3 = _closure3_slot0;
                                var2 = var3._include;
                                var0 = _closure1_slot10;
                                var0 = var0.USER;
                                var0 = var2.bind(var3)(var0);
                                if (var0) {
                                    _fun54842_ip = 295;
                                    continue _fun54842
                                }
                            case 224:
                                var2 = _closure3_slot0;
                                var0 = var2.updateAllResults;
                                var0 = var0.bind(var2)();
                                _fun54842_ip = 295;
                                continue _fun54842;
                            case 240:
                                var0 = global;
                                var3 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var2 = var1._asyncTimeout;
                                var4 = undefined;
                                var2 = var3.bind(var4)(var2);
                                var3 = var0.setTimeout;
                                var2 = var1.updateAllResults;
                                var0 = 300;
                                var0 = var3.bind(var4)(var2, var0);
                                var1._asyncTimeout = var0;
                            case 295:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = undefined;
                    return var0;
                case 150:
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = var1.updateAllResults;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            _fun54843: for (var _fun54843_ip = 0;;) switch (_fun54843_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.userSearchContext;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun54843_ip = 25;
                        continue _fun54843
                    }
                case 15:
                    var0 = var2.clearQuery;
                    var0 = var0.bind(var2)();
                case 25:
                    var0 = new Array(0);
                    var1.results = var0;
                    var0 = new Array(0);
                    var1._userResults = var0;
                    var0 = new Array(0);
                    var1._groupDMResults = var0;
                    var0 = new Array(0);
                    var1._textChannelResults = var0;
                    var0 = new Array(0);
                    var1._voiceChannelResults = var0;
                    var0 = new Array(0);
                    var1._guildResults = var0;
                    var0 = new Array(0);
                    var1._applicationResults = var0;
                    var0 = new Array(0);
                    var1._linkResults = var0;
                    var0 = new Array(0);
                    var1._inAppNavigations = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'clean';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = var1.destroy;
            var0 = var0.bind(var1)();
            var0 = '';
            var1.query = var0;
            var0 = var1.updateAllResults;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'pause';
        var0.key = var5;
        var5 = function() {
            _fun54845: for (var _fun54845_ip = 0;;) switch (_fun54845_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.userSearchContext;
                    var3 = null;
                    var0 = var3 == var1;
                    if (var0) {
                        _fun54845_ip = 28;
                        continue _fun54845
                    }
                case 18:
                    var2 = var1.unsubscribe;
                    var0 = var3 == var2;
                case 28:
                    if (var0) {
                        _fun54845_ip = 41;
                        continue _fun54845
                    }
                case 31:
                    var0 = var1.unsubscribe;
                    var0 = var0.bind(var1)();
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'resume';
        var0.key = var5;
        var5 = function() {
            _fun54846: for (var _fun54846_ip = 0;;) switch (_fun54846_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.userSearchContext;
                    var3 = null;
                    var0 = var3 == var1;
                    if (var0) {
                        _fun54846_ip = 28;
                        continue _fun54846
                    }
                case 18:
                    var2 = var1.subscribe;
                    var0 = var3 == var2;
                case 28:
                    if (var0) {
                        _fun54846_ip = 41;
                        continue _fun54846
                    }
                case 31:
                    var0 = var1.subscribe;
                    var0 = var0.bind(var1)();
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() {
            _fun54847: for (var _fun54847_ip = 0;;) switch (_fun54847_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.userSearchContext;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun54847_ip = 31;
                        continue _fun54847
                    }
                case 15:
                    var2 = var3.destroy;
                    var2 = var2.bind(var3)();
                    var1.userSearchContext = var0;
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'queryTextChannels';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54848: for (var _fun54848_ip = 0;;) switch (_fun54848_ip) {
                case 0:
                    var4 = this;
                    var3 = var4._include;
                    var2 = _closure1_slot10;
                    var2 = var2.TEXT_CHANNEL;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun54848_ip = 38;
                        continue _fun54848
                    }
                case 32:
                    var2 = new Array(0);
                    return var2;
                case 38:
                    var6 = _closure1_slot14;
                    var2 = _closure1_slot10;
                    var5 = var2.TEXT_CHANNEL;
                    var3 = var4.options;
                    var2 = undefined;
                    var3 = var6.bind(var2)(var5, var3);
                    var4 = var4.options;
                    var5 = var4.allowSnowflake;
                    var4 = var4.blacklist;
                    var _closure3_slot0 = var4;
                    var6 = null;
                    var7 = var6 != var4;
                    var4 = undefined;
                    if (!var7) {
                        _fun54848_ip = 102;
                        continue _fun54848
                    }
                case 97:
                    var4 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var4 = var0.id;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = 'channel:';
                        var0 = var3.bind(var0)(var4);
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                case 102:
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.queryChannels;
                    var0 = {};
                    var7 = arg0;
                    var0.query = var7;
                    var0.guildId = var6;
                    var6 = arg1;
                    var0.limit = var6;
                    var6 = true;
                    var0.fuzzy = var6;
                    var0.allowSnowflake = var5;
                    var0.filter = var4;
                    var0.boosters = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'queryVoiceChannels';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54850: for (var _fun54850_ip = 0;;) switch (_fun54850_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._include;
                    var1 = _closure1_slot10;
                    var1 = var1.VOICE_CHANNEL;
                    var1 = var2.bind(var0)(var1);
                    if (var1) {
                        _fun54850_ip = 36;
                        continue _fun54850
                    }
                case 30:
                    var1 = new Array(0);
                    return var1;
                case 36:
                    var1 = var0.options;
                    var4 = var1.allowSnowflake;
                    var6 = var1.voiceChannelGuildFilter;
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot10;
                    var1 = var1.VOICE_CHANNEL;
                    var0 = var0.options;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1, var0);
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.queryChannels;
                    var0 = {};
                    var7 = arg0;
                    var0.query = var7;
                    var0.guildId = var6;
                    var6 = arg1;
                    var0.limit = var6;
                    var6 = true;
                    var0.fuzzy = var6;
                    var5 = _closure1_slot7;
                    var0.type = var5;
                    var0.allowSnowflake = var4;
                    var0.boosters = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'queryGuilds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54851: for (var _fun54851_ip = 0;;) switch (_fun54851_ip) {
                case 0:
                    var3 = this;
                    var4 = var3._include;
                    var2 = _closure1_slot10;
                    var2 = var2.GUILD;
                    var2 = var4.bind(var3)(var2);
                    if (var2) {
                        _fun54851_ip = 38;
                        continue _fun54851
                    }
                case 32:
                    var2 = new Array(0);
                    return var2;
                case 38:
                    var6 = _closure1_slot14;
                    var2 = _closure1_slot10;
                    var5 = var2.GUILD;
                    var4 = var3.options;
                    var2 = undefined;
                    var4 = var6.bind(var2)(var5, var4);
                    var5 = var3.options;
                    var3 = var5.allowSnowflake;
                    var6 = var5.blacklist;
                    var _closure3_slot0 = var6;
                    var5 = null;
                    var6 = var5 != var6;
                    var5 = undefined;
                    if (!var6) {
                        _fun54851_ip = 102;
                        continue _fun54851
                    }
                case 97:
                    var5 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var4 = var0.id;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = 'guild:';
                        var0 = var3.bind(var0)(var4);
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                case 102:
                    var1 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var0 = var6[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.queryGuilds;
                    var0 = {};
                    var6 = arg0;
                    var0.query = var6;
                    var6 = arg1;
                    var0.limit = var6;
                    var6 = true;
                    var0.fuzzy = var6;
                    var0.filter = var5;
                    var0.boosters = var4;
                    var0.allowSnowflake = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'queryUsers';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun54853: for (var _fun54853_ip = 0;;) switch (_fun54853_ip) {
                case 0:
                    var6 = arg0;
                    var9 = arg1;
                    var1 = arg2;
                    var4 = this;
                    var2 = var4.userSearchContext;
                    var28 = null;
                    if (!(var28 != var2)) {
                        _fun54853_ip = 582;
                        continue _fun54853
                    }
                case 27:
                    var5 = var4._include;
                    var3 = _closure1_slot10;
                    var3 = var3.USER;
                    var3 = var5.bind(var4)(var3);
                    if (!var3) {
                        _fun54853_ip = 582;
                        continue _fun54853
                    }
                case 57:
                    var3 = var4.options;
                    var12 = var3.allowSnowflake;
                    var5 = var3.userFilters;
                    var10 = _closure1_slot14;
                    var3 = _closure1_slot10;
                    var7 = var3.USER;
                    var3 = var4.options;
                    var8 = undefined;
                    var3 = var10.bind(var8)(var7, var3);
                    var10 = var28 == var5;
                    var7 = undefined;
                    if (var10) {
                        _fun54853_ip = 116;
                        continue _fun54853
                    }
                case 110:
                    var7 = var5.thread;
                case 116:
                    if (!(var28 != var7)) {
                        _fun54853_ip = 492;
                        continue _fun54853
                    }
                case 123:
                    var11 = _closure1_slot5;
                    var10 = var11.getMemberListSections;
                    var7 = var5.thread;
                    var27 = var10.bind(var11)(var7);
                    var13 = new Array(0);
                    var25 = var27;
                    var21 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    for (var22 in var25)
                        case 170: {
                            var14 = var21;
                            var11 = var20;
                            var10 = var19;
                            case 191: var7 = var22;
                            var17 = var27[var7];
                            var15 = _closure1_slot12;
                            var7 = var17.userIds;
                            var16 = var15.bind(var8)(var7);
                            var15 = var16.bind(var8)();
                            var7 = var15.done;
                            var21 = var14;
                            var20 = var11;
                            var19 = var10;
                            var14 = var21;
                            var11 = var20;
                            var10 = var19;
                            if (var7) {
                                _fun54853_ip = 170;
                                continue _fun54853
                            }
                            case 243: var31 = var15.value;
                            var7 = var28 != var5;
                            if (!var7) {
                                _fun54853_ip = 261;
                                continue _fun54853
                            }
                            case 255: var7 = var5.friends;
                            case 261: if (!var7) {
                                _fun54853_ip = 282;
                                continue _fun54853
                            }
                            case 264: var30 = _closure1_slot8;
                            var29 = var30.isFriend;
                            var29 = var29.bind(var30)(var31);
                            var7 = !var29;
                            case 282: var29 = var10;
                            if (var7) {
                                _fun54853_ip = 383;
                                continue _fun54853
                            }
                            case 288: var7 = var4._userBlacklist;
                            var32 = var28 == var7;
                            var30 = undefined;
                            if (var32) {
                                _fun54853_ip = 313;
                                continue _fun54853
                            }
                            case 303: var32 = var7.includes;
                            var30 = var32.bind(var7)(var31);
                            case 313: var32 = var28 != var30;
                            if (!var32) {
                                _fun54853_ip = 323;
                                continue _fun54853
                            }
                            case 320: var32 = var30;
                            case 323: if (var32) {
                                _fun54853_ip = 374;
                                continue _fun54853
                            }
                            case 326: var34 = var13.push;
                            var33 = {};
                            var33.userId = var31;
                            var32 = var17.usersById;
                            var32 = var32[var31];
                            var36 = var28 == var32;
                            var35 = undefined;
                            if (var36) {
                                _fun54853_ip = 361;
                                continue _fun54853
                            }
                            case 356: var35 = var32.displayName;
                            case 361: var33.nick = var35;
                            var33 = var34.bind(var13)(var33);
                            var10 = var32;
                            case 374: var29 = var10;
                            var14 = var30;
                            var11 = var7;
                            case 383: var30 = var16.bind(var8)();
                            var7 = var30.done;
                            var21 = var14;
                            var20 = var11;
                            var19 = var29;
                            var18 = var31;
                            var15 = var30;
                            var14 = var21;
                            var11 = var20;
                            var10 = var19;
                            if (var7) {
                                _fun54853_ip = 170;
                                continue _fun54853
                            }
                            case 422: _fun54853_ip = 243;
                            continue _fun54853;
                        }
                case 427:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 8;
                    var7 = var11[var7];
                    var11 = var10.bind(var8)(var7);
                    var10 = var11.queryUsers;
                    var7 = {};
                    var7.query = var6;
                    var7.users = var13;
                    var7.limit = var1;
                    var7.boosters = var3;
                    var7.allowSnowflake = var12;
                    var7 = var10.bind(var11)(var7);
                    var4._userResults = var7;
                    _fun54853_ip = 582;
                    continue _fun54853;
                case 492:
                    if (!(var8 !== var9)) {
                        _fun54853_ip = 532;
                        continue _fun54853
                    }
                case 496:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 13;
                    var0 = var10[var0];
                    var8 = var7.bind(var8)(var0);
                    var7 = var8.requestMembers;
                    var0 = 100;
                    var0 = var7.bind(var8)(var9, var6, var0);
                case 532:
                    var0 = var2.setLimit;
                    var0 = var0.bind(var2)(var1);
                    var1 = var2.setQuery;
                    var0 = {};
                    var0.query = var6;
                    var0.filters = var5;
                    var4 = var4._userBlacklist;
                    var0.blacklist = var4;
                    var0.boosters = var3;
                    var0 = var1.bind(var2)(var0);
                case 582:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'queryGroupDMs';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54854: for (var _fun54854_ip = 0;;) switch (_fun54854_ip) {
                case 0:
                    var2 = this;
                    var4 = var2._include;
                    var3 = _closure1_slot10;
                    var3 = var3.GROUP_DM;
                    var3 = var4.bind(var2)(var3);
                    if (var3) {
                        _fun54854_ip = 38;
                        continue _fun54854
                    }
                case 32:
                    var3 = new Array(0);
                    return var3;
                case 38:
                    var3 = var2.options;
                    var5 = var3.blacklist;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot14;
                    var3 = _closure1_slot10;
                    var4 = var3.GROUP_DM;
                    var3 = var2.options;
                    var2 = undefined;
                    var3 = var6.bind(var2)(var4, var3);
                    var4 = null;
                    var5 = var4 != var5;
                    var4 = undefined;
                    if (!var5) {
                        _fun54854_ip = 96;
                        continue _fun54854
                    }
                case 91:
                    var4 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var4 = var0.id;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = 'channel:';
                        var0 = var3.bind(var0)(var4);
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                case 96:
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 8;
                    var0 = var5[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.queryGroupDMs;
                    var0 = {};
                    var5 = arg0;
                    var0.query = var5;
                    var5 = arg1;
                    var0.limit = var5;
                    var5 = true;
                    var0.fuzzy = var5;
                    var0.filter = var4;
                    var0.boosters = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'queryApplications';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun54856: for (var _fun54856_ip = 0;;) switch (_fun54856_ip) {
                case 0:
                    var3 = this;
                    var2 = var3._include;
                    var0 = _closure1_slot10;
                    var0 = var0.APPLICATION;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun54856_ip = 36;
                        continue _fun54856
                    }
                case 30:
                    var0 = new Array(0);
                    _fun54856_ip = 93;
                    continue _fun54856;
                case 36:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.queryApplications;
                    var1 = {};
                    var4 = arg0;
                    var1.query = var4;
                    var4 = arg1;
                    var1.limit = var4;
                    var4 = true;
                    var1.fuzzy = var4;
                    var0 = var2.bind(var3)(var1);
                case 93:
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'queryLink';
        var0.key = var5;
        var5 = function arg0() {
            _fun54857: for (var _fun54857_ip = 0;;) switch (_fun54857_ip) {
                case 0:
                    var12 = this;
                    var7 = arg0;
                    var4 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var2 = undefined;
                    var1 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var0 = undefined;
                    var11 = var12._include;
                    var10 = _closure1_slot10;
                    var10 = var10.LINK;
                    var10 = var11.bind(var12)(var10);
                    if (var10) {
                        _fun54857_ip = 55;
                        continue _fun54857
                    }
                case 49:
                    var10 = new Array(0);
                    return var10;
                case 55:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 14;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = var11.sanitizeUrl;
                    var9 = var10.bind(var11)(var7);
                case 86: // try_start_0
                    var7 = global;
                    var11 = var7.URL;
                    var13 = var9;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var11
                        }
                    });
                    var14 = var10;
                    var9 = new var14[var11](var13, var12);
                    var8 = var9 instanceof Object ? var9 : var10;
                case 117: // try_end0
                    var2 = var8;
                    var1 = var8.pathname;
                    var8 = var8.hostname;
                    var5 = var8;
                    var10 = '';
                    if (!(var4 !== var8)) {
                        _fun54857_ip = 146;
                        continue _fun54857
                    }
                case 143:
                    var10 = var5;
                case 146:
                    var6 = var2.host;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 15;
                    var8 = var8[var5];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isDiscordHostname;
                    var8 = var8.bind(var9)(var10);
                    var2 = var8;
                    if (var8) {
                        _fun54857_ip = 210;
                        continue _fun54857
                    }
                case 189:
                    var7 = var7.window;
                    var7 = var7.location;
                    var7 = var7.host;
                    var2 = var7 === var6;
                case 210:
                    var0 = var2;
                    var6 = var1;
                    var2 = null;
                    if (!(var2 !== var6)) {
                        _fun54857_ip = 259;
                        continue _fun54857
                    }
                case 222:
                    if (!var0) {
                        _fun54857_ip = 259;
                        continue _fun54857
                    }
                case 225:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var4 = var2.bind(var4)(var0);
                    var2 = var4.isAppRoute;
                    var0 = var1;
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun54857_ip = 265;
                        continue _fun54857
                    }
                case 259:
                    var0 = new Array(0);
                    _fun54857_ip = 322;
                    continue _fun54857;
                case 265:
                    var2 = {};
                    var4 = _closure1_slot10;
                    var4 = var4.LINK;
                    var2.type = var4;
                    var4 = _closure1_slot6;
                    var3 = var4.fromPath;
                    var1 = var3.bind(var4)(var1);
                    var2.record = var1;
                    var1 = 1;
                    var2.score = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 322:
                    return var0;
                case 324: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'queryInAppNavigations';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun54858: for (var _fun54858_ip = 0;;) switch (_fun54858_ip) {
                case 0:
                    var3 = this;
                    var2 = var3._include;
                    var0 = _closure1_slot10;
                    var0 = var0.IN_APP_NAVIGATION;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun54858_ip = 36;
                        continue _fun54858
                    }
                case 30:
                    var0 = new Array(0);
                    _fun54858_ip = 93;
                    continue _fun54858;
                case 36:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.queryInAppNavigations;
                    var1 = {};
                    var4 = arg0;
                    var1.query = var4;
                    var4 = arg1;
                    var1.limit = var4;
                    var4 = true;
                    var1.fuzzy = var4;
                    var0 = var2.bind(var3)(var1);
                case 93:
                    return var0;
            }
        };
        var0.value = var4;
        var1[22] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/autocompleter/Autocompleter.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 6591, 6592, 1662, 3061, 1613, 5563, 5555, 22, 5567, 6593, 1355, 5568, 3107, 1457, 2]);