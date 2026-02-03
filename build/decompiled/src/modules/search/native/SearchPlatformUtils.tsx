// modules/search/native/SearchPlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var0 = function arg0, arg1() {
        _fun89831: for (var _fun89831_ip = 0;;) switch (_fun89831_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89831_ip = 46;
                    continue _fun89831
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89831_ip = 55;
                    continue _fun89831
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89831_ip = 345;
                    continue _fun89831
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89831_ip = 323;
                    continue _fun89831
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89831_ip = 283;
                    continue _fun89831
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89831_ip = 270;
                    continue _fun89831
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
                    _fun89831_ip = 163;
                    continue _fun89831
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89831_ip = 179;
                    continue _fun89831
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89831_ip = 249;
                    continue _fun89831
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89831_ip = 249;
                    continue _fun89831
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89831_ip = 234;
                    continue _fun89831
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89831_ip = 247;
                    continue _fun89831
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89831_ip = 265;
                continue _fun89831;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89831_ip = 283;
                continue _fun89831;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89831_ip = 323;
                    continue _fun89831
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
                    _fun89831_ip = 330;
                    continue _fun89831
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89832: for (var _fun89832_ip = 0;;) switch (_fun89832_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89832_ip = 56;
                                continue _fun89832
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
                            _fun89832_ip = 67;
                            continue _fun89832;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun89833: for (var _fun89833_ip = 0;;) switch (_fun89833_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89833_ip = 23;
                    continue _fun89833
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89833_ip = 33;
                    continue _fun89833
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
                    _fun89833_ip = 70;
                    continue _fun89833
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89833_ip = 55;
                    continue _fun89833
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var8 = function arg0() {
        _fun89834: for (var _fun89834_ip = 0;;) switch (_fun89834_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.getKeyboardIsOpen;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun89834_ip = 80;
                    continue _fun89834
                }
            case 47:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.isIOS;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun89834_ip = 86;
                    continue _fun89834
                }
            case 80:
                var3 = var3.bind(var0)();
                _fun89834_ip = 140;
                continue _fun89834;
            case 86:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var1 = 100;
                var1 = var3.bind(var0)(var2, var1);
            case 140:
                return var0;
        }
    };
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var1 = 200;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = function arg0() {
        _fun89838: for (var _fun89838_ip = 0;;) switch (_fun89838_ip) {
            case 0:
                var6 = arg0;
                var5 = null;
                if (!(var5 != var6)) {
                    _fun89838_ip = 241;
                    continue _fun89838
                }
            case 12:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var4 = 12;
                var1 = var1[var4];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.safeParseWithQuery;
                var1 = var1.bind(var3)(var6);
                if (!(var5 != var1)) {
                    _fun89838_ip = 213;
                    continue _fun89838
                }
            case 55:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isDiscordUrl;
                var1 = var1.bind(var3)(var6);
                if (var1) {
                    _fun89838_ip = 185;
                    continue _fun89838
                }
            case 86:
                var1 = _closure1_slot13;
                var1 = var1.length;
                var4 = 0;
                var1 = var4 < var1;
                if (!var1) {
                    _fun89838_ip = 155;
                    continue _fun89838
                }
            case 104:
                var1 = _closure1_slot13;
                var1 = var1[var4];
                var7 = var1.REGEX;
                var1 = var1.Icon;
                var3 = var7.exec;
                var3 = var3.bind(var7)(var6);
                if (!(var5 == var3)) {
                    _fun89838_ip = 183;
                    continue _fun89838
                }
            case 139:
                var4 = var4 + 1;
                var3 = _closure1_slot13;
                var3 = var3.length;
                if (var4 < var3) {
                    _fun89838_ip = 104;
                    continue _fun89838
                }
            case 155:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var3 = var3.LinkIcon;
                return var3;
            case 183:
                return var1;
            case 185:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ClydeIcon;
                return var1;
            case 213:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.LinkIcon;
                return var0;
            case 241:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.LinkIcon;
                return var0;
        }
    };
    var5 = function arg0() {
        _fun89839: for (var _fun89839_ip = 0;;) switch (_fun89839_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.itemIndex;
                var0 = var1.numItems;
                var3 = var1.numColumns;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.ceil;
                var0 = var0 / var3;
                var0 = var4.bind(var5)(var0);
                var5 = var1.Math;
                var4 = var5.floor;
                var1 = var2 / var3;
                var5 = var4.bind(var5)(var1);
                var1 = 1;
                var4 = var0 - var1;
                var7 = 0;
                if (!(var7 !== var2)) {
                    _fun89839_ip = 262;
                    continue _fun89839
                }
            case 81:
                var6 = var3 - var1;
                if (!(var2 !== var6)) {
                    _fun89839_ip = 214;
                    continue _fun89839
                }
            case 92:
                var6 = var2 % var3;
                if (!(var6 == var7)) {
                    _fun89839_ip = 104;
                    continue _fun89839
                }
            case 100:
                if (!(var5 !== var4)) {
                    _fun89839_ip = 166;
                    continue _fun89839
                }
            case 104:
                var0 = var0 * var3;
                var1 = var0 - var1;
                var4 = undefined;
                var0 = undefined;
                if (!(var2 === var1)) {
                    _fun89839_ip = 164;
                    continue _fun89839
                }
            case 120:
                var1 = {};
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderBottomRightRadius = var2;
                var0 = var1;
            case 164:
                _fun89839_ip = 212;
                continue _fun89839;
            case 166:
                var1 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderBottomLeftRadius = var2;
                var0 = var1;
            case 212:
                _fun89839_ip = 260;
                continue _fun89839;
            case 214:
                var1 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderTopRightRadius = var2;
                var0 = var1;
            case 260:
                _fun89839_ip = 308;
                continue _fun89839;
            case 262:
                var1 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderTopLeftRadius = var2;
                var0 = var1;
            case 308:
                return var0;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function arg0() {
        var0 = arg0;
        var6 = var0.itemIndex;
        var3 = var0.numItems;
        var4 = var0.numColumns;
        var5 = var0.spacing;
        var0 = {};
        var7 = _closure1_slot19;
        var2 = {};
        var2.itemIndex = var6;
        var2.numItems = var3;
        var2.numColumns = var4;
        var3 = undefined;
        var9 = var7.bind(var3)(var2);
        var10 = var0;
        var2 = copyDataProperties(var10, var9);
        var2 = _closure1_slot20;
        var1 = {};
        var1.itemIndex = var6;
        var1.spacing = var5;
        var1.numColumns = var4;
        var9 = var2.bind(var3)(var1);
        var10 = var0;
        var1 = copyDataProperties(var10, var9);
        return var0;
    };
    var3 = function arg0() {
        _fun89841: for (var _fun89841_ip = 0;;) switch (_fun89841_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.itemIndex;
                var4 = var0.spacing;
                var3 = var0.numColumns;
                var0 = 1;
                var1 = var3 - var0;
                var1 = var4 * var1;
                var1 = var1 / var3;
                var2 = var2 % var3;
                var4 = 0;
                if (!(var4 !== var2)) {
                    _fun89841_ip = 78;
                    continue _fun89841
                }
            case 45:
                var0 = var3 - var0;
                if (!(var0 !== var2)) {
                    _fun89841_ip = 69;
                    continue _fun89841
                }
            case 53:
                var0 = {};
                var2 = 2;
                var2 = var1 / var2;
                var0.marginHorizontal = var2;
                return var0;
            case 69:
                var0 = {};
                var0.marginStart = var1;
                return var0;
            case 78:
                var0 = {};
                var0.marginEnd = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var1 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.text;
        var0.id = var2;
        var1 = var1.text;
        var0.text = var1;
        return var0;
    };
    var0 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.min;
        var1 = _closure1_slot6;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot21;
        var1 = _closure1_slot9;
        var0 = arg0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot21;
        var1 = _closure1_slot9;
        var0 = arg0;
        var1 = var1[var0];
        var0 = 2;
        var1 = var0 * var1;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun89846: for (var _fun89846_ip = 0;;) switch (_fun89846_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.searchContext;
                var2 = var0.tabEntries;
                var1 = var2.every;
                var0 = function(arg0) { // Environment: var0
                    _fun89847: for (var _fun89847_ip = 0;;) switch (_fun89847_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3[Symbol.iterator];
                            var3 = var0().next;
                            var1 = var3().value;
                            var1 = var0;
                            var5 = undefined;
                            var2 = var1 === var5;
                            var1 = undefined;
                            if (var2) {
                                _fun89847_ip = 49;
                                continue _fun89847
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var0;
                            var3 = var3 === var5;
                            var1 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun89847_ip = 49;
                                continue _fun89847
                            }
                        case 43:
                            var1 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun89847_ip = 55;
                                continue _fun89847
                            }
                        case 52:
                            var0.return();
                        case 55:
                            var2 = var1.total_results;
                            var0 = 0;
                            var0 = var0 === var2;
                            if (var0) {
                                _fun89847_ip = 82;
                                continue _fun89847
                            }
                        case 70:
                            var2 = var1.total_results;
                            var1 = null;
                            var0 = var1 == var2;
                        case 82:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                if (!var0) {
                    _fun89846_ip = 81;
                    continue _fun89846
                }
            case 38:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.trackSearchEmptyMessageResult;
                var0 = {};
                var0.searchContext = var3;
                var0 = var1.bind(var2)(var0);
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.searchContext;
        var1 = var1.searchQueryString;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = var2.setState;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.setSearchResultsQuery;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot25 = var0;
    var19 = function arg0() {
        _fun89850: for (var _fun89850_ip = 0;;) switch (_fun89850_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var1 = var9.type;
                var0 = _closure1_slot16;
                var0 = var0.THREAD;
                if (!(var1 === var0)) {
                    _fun89850_ip = 87;
                    continue _fun89850
                }
            case 31:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getCurrentConfig;
                var0 = {};
                var5 = 'ChannelActionButtons';
                var0.location = var5;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enabled;
                if (!var0) {
                    _fun89850_ip = 484;
                    continue _fun89850
                }
            case 87:
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var0 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var1.bind(var2)(var9, var0);
                var5 = _closure1_slot4;
                var2 = var5.getState;
                var1 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var2.bind(var5)(var9, var1);
                var _closure2_slot1 = var5;
                if (var0) {
                    _fun89850_ip = 146;
                    continue _fun89850
                }
            case 140:
                var7 = _closure1_slot7;
                _fun89850_ip = 192;
                continue _fun89850;
            case 146:
                var1 = var9.type;
                var0 = _closure1_slot16;
                var0 = var0.GUILD_CHANNEL;
                if (!(var0 !== var1)) {
                    _fun89850_ip = 185;
                    continue _fun89850
                }
            case 165:
                var0 = _closure1_slot16;
                var0 = var0.CHANNEL;
                if (!(var0 !== var1)) {
                    _fun89850_ip = 185;
                    continue _fun89850
                }
            case 179:
                var0 = _closure1_slot8;
                _fun89850_ip = 189;
                continue _fun89850;
            case 185:
                var0 = _closure1_slot5;
            case 189:
                var7 = var0;
            case 192:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.getSearchTabFetchId;
                var0 = 0;
                var0 = var7[var0];
                var8 = var1.bind(var2)(var9, var0, var5);
                var1 = _closure1_slot3;
                var0 = var1.getIsFetching;
                var0 = var0.bind(var1)(var8);
                if (var0) {
                    _fun89850_ip = 484;
                    continue _fun89850
                }
            case 254:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var10 = var2[var0];
                var11 = var1.bind(var6)(var10);
                var10 = var11.clearAllSearchMesssages;
                var10 = var10.bind(var11)();
                var10 = 16;
                var10 = var2[var10];
                var12 = var1.bind(var6)(var10);
                var11 = var12.trackSearchStarted;
                var10 = {};
                var10.searchContext = var9;
                var10 = var11.bind(var12)(var10);
                var0 = var2[var0];
                var2 = var1.bind(var6)(var0);
                var1 = var2.fetchTabMessages;
                var0 = {};
                var0.searchContext = var9;
                var0.searchTabs = var7;
                var0.searchQueryString = var5;
                var4 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getSearchTabFetchId;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var0.getId = var4;
                var4 = _closure1_slot22;
                var0.getLimit = var4;
                var4 = _closure1_slot25;
                var0.onFetchStart = var4;
                var4 = _closure1_slot24;
                var0.onFetchSuccess = var4;
                var4 = {};
                var7 = _closure1_slot3;
                var5 = var7.getCursor;
                var7 = var5.bind(var7)(var8);
                var5 = null;
                var8 = var5 != var7;
                if (!var8) {
                    _fun89850_ip = 414;
                    continue _fun89850
                }
            case 411:
                var5 = var7;
            case 414:
                var4.cursor = var5;
                var0.pagination = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 15;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var5 = var4.SearchResultExactCountEnabled;
                var4 = var5.getSetting;
                var4 = var4.bind(var5)();
                var0.trackExactTotalHits = var4;
                var3 = _closure1_slot15;
                var3 = var3.NEWEST;
                var0.searchMode = var3;
                var0 = var1.bind(var2)(var0);
            case 484:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot26 = var19;
    var16 = function arg0() {
        var7 = arg0;
        var3 = _closure1_slot4;
        var2 = var3.getState;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.getQueryString;
            var0 = true;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var2.bind(var3)(var7, var0);
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var6 = var3[var2];
        var0 = undefined;
        var8 = var5.bind(var0)(var6);
        var6 = var8.tokenizeQuery;
        var6 = var6.bind(var8)(var4);
        var2 = var3[var2];
        var9 = var5.bind(var0)(var2);
        var8 = var9.getSelectionScope;
        var2 = var4.length;
        var10 = 1;
        var5 = var2 - var10;
        var2 = var4.length;
        var2 = var2 - var10;
        var5 = var8.bind(var9)(var6, var5, var2);
        var2 = _closure1_slot1;
        var1 = 18;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.updateAutocompleteQuery;
        var1 = {};
        var1.searchContext = var7;
        var1.tokens = var6;
        var1.cursorScope = var5;
        var1.queryString = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var0 = global;
    var15 = var0.Object;
    var11 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var13[var0];
    var0 = undefined;
    var10 = var14.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var13[var10];
    var10 = var14.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var13[var10];
    var10 = var12.bind(var0)(var10);
    var11 = var10.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot5 = var11;
    var11 = var10.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot6 = var11;
    var11 = var10.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot7 = var11;
    var11 = var10.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot8 = var11;
    var11 = var10.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot9 = var11;
    var11 = var10.SearchFileTypes;
    var _closure1_slot10 = var11;
    var11 = var10.SearchLinkTypes;
    var _closure1_slot11 = var11;
    var10 = var10.SearchMediaTypes;
    var _closure1_slot12 = var10;
    var10 = 3;
    var10 = var13[var10];
    var10 = var12.bind(var0)(var10);
    var11 = var10.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot13 = var11;
    var15 = var10.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var10 = 4;
    var10 = var13[var10];
    var10 = var12.bind(var0)(var10);
    var11 = var10.MessageFlags;
    var _closure1_slot14 = var11;
    var11 = var10.SearchModes;
    var _closure1_slot15 = var11;
    var10 = var10.SearchTypes;
    var _closure1_slot16 = var10;
    var10 = {};
    var10.performKeyboardAwareNavigation = var8;
    var10.delayUntilNavigationComplete = var7;
    var10.getUrlIcon = var6;
    var10.getGridItemBorderStyles = var5;
    var10.getMediaGridItemStyles = var4;
    var10.getGridItemSpacingStyles = var3;
    var10.toSearchBarTag = var1;
    var10.fetchInitialMessages = var19;
    var11 = 19;
    var17 = var13[var11];
    var18 = var14.bind(var0)(var17);
    var17 = var18.debounce;
    var17 = var17.bind(var18)(var19, var15);
    var10.fetchInitialMessagesDebounced = var17;
    var17 = function arg0, arg1, arg2() {
        _fun89856: for (var _fun89856_ip = 0;;) switch (_fun89856_ip) {
            case 0:
                var8 = arg0;
                var10 = arg1;
                var _closure2_slot0 = var8;
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var0 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var1.bind(var2)(var8, var0);
                var _closure2_slot1 = var6;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var3 = var2[var0];
                var7 = undefined;
                var9 = var1.bind(var7)(var3);
                var3 = var9.getSearchTabFetchId;
                var9 = var3.bind(var9)(var8, var10, var6);
                var3 = _closure1_slot22;
                var12 = var3.bind(var7)(var10);
                var0 = var2[var0];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getSearchTabFetchId;
                var13 = var0.bind(var1)(var8, var10, var6);
                var1 = _closure1_slot3;
                var0 = var1.getIsInitialFetchComplete;
                var0 = var0.bind(var1)(var13);
                var3 = true;
                if (!var0) {
                    _fun89856_ip = 269;
                    continue _fun89856
                }
            case 131:
                var1 = _closure1_slot3;
                var0 = var1.getCursor;
                var1 = var0.bind(var1)(var13);
                var2 = _closure1_slot3;
                var0 = var2.getTotalCount;
                var11 = var0.bind(var2)(var13);
                var2 = _closure1_slot3;
                var0 = var2.getMessages;
                var2 = var0.bind(var2)(var13);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var0 = var14[var0];
                var0 = var13.bind(var7)(var0);
                var13 = var0.SearchResultExactCountEnabled;
                var0 = var13.getSetting;
                var0 = var0.bind(var13)();
                if (var0) {
                    _fun89856_ip = 231;
                    continue _fun89856
                }
            case 215:
                var0 = null;
                if (!(var0 != var11)) {
                    _fun89856_ip = 225;
                    continue _fun89856
                }
            case 221:
                if (!(!(var11 < var12))) {
                    _fun89856_ip = 231;
                    continue _fun89856
                }
            case 225:
                var0 = var0 != var1;
                _fun89856_ip = 266;
                continue _fun89856;
            case 231:
                var12 = null;
                var1 = var12 != var1;
                if (!var1) {
                    _fun89856_ip = 244;
                    continue _fun89856
                }
            case 240:
                var1 = var12 != var11;
            case 244:
                if (!var1) {
                    _fun89856_ip = 251;
                    continue _fun89856
                }
            case 247:
                var1 = var12 != var2;
            case 251:
                if (!var1) {
                    _fun89856_ip = 263;
                    continue _fun89856
                }
            case 254:
                var2 = var2.length;
                var1 = var2 < var11;
            case 263:
                var0 = var1;
            case 266:
                var3 = var0;
            case 269:
                var1 = _closure1_slot3;
                var0 = var1.getIsFetching;
                var1 = var0.bind(var1)(var9);
                var2 = _closure1_slot3;
                var0 = var2.getIsInitialFetchComplete;
                var2 = var0.bind(var2)(var9);
                var0 = !var3;
                if (!var3) {
                    _fun89856_ip = 308;
                    continue _fun89856
                }
            case 305:
                var0 = !var2;
            case 308:
                if (var0) {
                    _fun89856_ip = 314;
                    continue _fun89856
                }
            case 311:
                var0 = var1;
            case 314:
                var0 = !var0;
                if (!var0) {
                    _fun89856_ip = 511;
                    continue _fun89856
                }
            case 323:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = var2.bind(var7)(var1);
                var2 = var3.fetchTabMessages;
                var1 = {};
                var1.searchContext = var8;
                var8 = new Array(1);
                var8[0] = var10;
                var1.searchTabs = var8;
                var1.searchQueryString = var6;
                var6 = _closure1_slot23;
                var1.getLimit = var6;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getSearchTabFetchId;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var1.getId = var5;
                var5 = _closure1_slot25;
                var1.onFetchStart = var5;
                var5 = arg2;
                var1.onFetchSuccess = var5;
                var5 = {};
                var8 = _closure1_slot3;
                var6 = var8.getCursor;
                var8 = var6.bind(var8)(var9);
                var6 = null;
                var9 = var6 != var8;
                if (!var9) {
                    _fun89856_ip = 441;
                    continue _fun89856
                }
            case 438:
                var6 = var8;
            case 441:
                var5.cursor = var6;
                var1.pagination = var5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 15;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var6 = var5.SearchResultExactCountEnabled;
                var5 = var6.getSetting;
                var5 = var5.bind(var6)();
                var1.trackExactTotalHits = var5;
                var4 = _closure1_slot15;
                var4 = var4.NEWEST;
                var1.searchMode = var4;
                var0 = var2.bind(var3)(var1);
            case 511:
                return var0;
        }
    };
    var10.fetchNextMessages = var17;
    var10.syncAutocomplete = var16;
    var11 = var13[var11];
    var14 = var14.bind(var0)(var11);
    var11 = var14.debounce;
    var11 = var11.bind(var14)(var16, var15);
    var10.syncAutocompleteDebounced = var11;
    var11 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 18;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var3);
        var3 = var5.initializeAutocomplete;
        var3 = var3.bind(var5)(var1);
        var2 = _closure1_slot26;
        var2 = var2.bind(var0)(var1);
        var3 = var4.navigate;
        var2 = {};
        var2.searchContext = var1;
        var1 = 'search';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var10.navigateToSearchWithPrefetch = var11;
    var11 = 20;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/search/native/SearchPlatformUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.default = var10;
    var10 = function arg0, arg1() {
        _fun89860: for (var _fun89860_ip = 0;;) switch (_fun89860_ip) {
            case 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.getGuildIdFromSearchContext;
                var2 = arg0;
                var2 = var4.bind(var5)(var2);
                var4 = null;
                var4 = var4 != var2;
                if (!var4) {
                    _fun89860_ip = 56;
                    continue _fun89860
                }
            case 53:
                var0 = var2;
            case 56:
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun89861: for (var _fun89861_ip = 0;;) switch (_fun89861_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var0 = 0;
                            var _closure3_slot1 = var0;
                            var4 = var5.attachments;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun89861_ip = 44;
                                continue _fun89861
                            }
                        case 27:
                            var3 = var4.forEach;
                            var1 = function(arg0, arg1) { // Environment: var2
                                _fun89862: for (var _fun89862_ip = 0;;) switch (_fun89862_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var3 = 6;
                                        var1 = var0[var3];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isThumbnailAttachment;
                                        var1 = var1.bind(var2)(var6);
                                        if (var1) {
                                            _fun89862_ip = 259;
                                            continue _fun89862
                                        }
                                    case 45:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isValidImageAttachment;
                                        var1 = var1.bind(var2)(var6);
                                        if (var1) {
                                            _fun89862_ip = 110;
                                            continue _fun89862
                                        }
                                    case 76:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isValidVideoAttachment;
                                        var1 = var1.bind(var2)(var6);
                                        if (!var1) {
                                            _fun89862_ip = 259;
                                            continue _fun89862
                                        }
                                    case 110:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var9 = var2.bind(var0)(var1);
                                        var8 = var9.extractMediaFromAttachment;
                                        var12 = _closure3_slot0;
                                        var10 = _closure2_slot0;
                                        var11 = arg1;
                                        var14 = var9;
                                        var13 = var6;
                                        var5 = var14[var8](var13, var12, var11, var10, var9);
                                        var3 = null;
                                        if (!(var3 != var5)) {
                                            _fun89862_ip = 259;
                                            continue _fun89862
                                        }
                                    case 166:
                                        var4 = _closure2_slot1;
                                        var3 = var4.push;
                                        var1 = {};
                                        var7 = _closure1_slot12;
                                        var7 = var7.ATTACHMENT;
                                        var1.type = var7;
                                        var1.attachment = var6;
                                        var6 = _closure3_slot0;
                                        var7 = var6.id;
                                        var1.messageId = var7;
                                        var7 = var6.channel_id;
                                        var1.channelId = var7;
                                        var6 = var6.author;
                                        var1.author = var6;
                                        var6 = _closure3_slot1;
                                        var1.mediaIndex = var6;
                                        var1.sources = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure3_slot1;
                                        var1 = var1 + 1;
                                        _closure3_slot1 = var1;
                                    case 259:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                        case 44:
                            var3 = var5.embeds;
                            if (!(var0 != var3)) {
                                _fun89861_ip = 71;
                                continue _fun89861
                            }
                        case 54:
                            var1 = var3.forEach;
                            var0 = function(arg0, arg1) { // Environment: var2
                                _fun89863: for (var _fun89863_ip = 0;;) switch (_fun89863_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var3 = 6;
                                        var1 = var0[var3];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isValidImageEmbed;
                                        var1 = var1.bind(var2)(var6);
                                        if (var1) {
                                            _fun89863_ip = 76;
                                            continue _fun89863
                                        }
                                    case 42:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isValidVideoEmbed;
                                        var1 = var1.bind(var2)(var6);
                                        if (!var1) {
                                            _fun89863_ip = 231;
                                            continue _fun89863
                                        }
                                    case 76:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var3];
                                        var9 = var2.bind(var0)(var1);
                                        var8 = var9.extractMediaFromEmbed;
                                        var5 = _closure3_slot0;
                                        var10 = _closure2_slot0;
                                        var11 = arg1;
                                        var15 = var9;
                                        var14 = var6;
                                        var13 = var5;
                                        var12 = var5;
                                        var5 = var15[var8](var14, var13, var12, var11, var10, var9);
                                        var3 = null;
                                        if (!(var3 != var5)) {
                                            _fun89863_ip = 231;
                                            continue _fun89863
                                        }
                                    case 138:
                                        var4 = _closure2_slot1;
                                        var3 = var4.push;
                                        var1 = {};
                                        var7 = _closure1_slot12;
                                        var7 = var7.EMBED;
                                        var1.type = var7;
                                        var1.embed = var6;
                                        var6 = _closure3_slot0;
                                        var7 = var6.id;
                                        var1.messageId = var7;
                                        var7 = var6.channel_id;
                                        var1.channelId = var7;
                                        var6 = var6.author;
                                        var1.author = var6;
                                        var6 = _closure3_slot1;
                                        var1.mediaIndex = var6;
                                        var1.sources = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure3_slot1;
                                        var1 = var1 + 1;
                                        _closure3_slot1 = var1;
                                    case 231:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var3)(var0);
                        case 71:
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var1);
                            var7 = var8.extractMediaFromMessageComponents;
                            var3 = _closure2_slot0;
                            var3 = var7.bind(var8)(var5, var3);
                            var7 = var4.bind(var0)(var3);
                            var4 = var7.bind(var0)();
                            var3 = var4.done;
                            if (var3) {
                                _fun89861_ip = 257;
                                continue _fun89861
                            }
                        case 136:
                            var10 = var4.value;
                            var9 = _closure2_slot1;
                            var8 = var9.push;
                            var3 = {};
                            var11 = _closure1_slot12;
                            var11 = var11.COMPONENT;
                            var3.type = var11;
                            var11 = var5.id;
                            var3.messageId = var11;
                            var11 = var5.channel_id;
                            var3.channelId = var11;
                            var11 = var5.author;
                            var3.author = var11;
                            var11 = _closure3_slot1;
                            var3.mediaIndex = var11;
                            var11 = var10.sources;
                            var3.sources = var11;
                            var10 = var10.unfurledMediaItem;
                            var3.unfurledMediaItem = var10;
                            var3 = var8.bind(var9)(var3);
                            var3 = _closure3_slot1;
                            var3 = var3 + 1;
                            _closure3_slot1 = var3;
                            var8 = var7.bind(var0)();
                            var3 = var8.done;
                            var4 = var8;
                            if (!var3) {
                                _fun89861_ip = 136;
                                continue _fun89861
                            }
                        case 257:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 7;
                            var3 = var7[var3];
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.hasFlag;
                            var4 = var5.flags;
                            var3 = _closure1_slot14;
                            var3 = var3.IS_VOICE_MESSAGE;
                            var3 = var7.bind(var8)(var4, var3);
                            if (!var3) {
                                _fun89861_ip = 386;
                                continue _fun89861
                            }
                        case 307:
                            var4 = _closure2_slot1;
                            var3 = var4.push;
                            var1 = {};
                            var6 = _closure1_slot12;
                            var6 = var6.AUDIO;
                            var1.type = var6;
                            var6 = var5.id;
                            var1.messageId = var6;
                            var6 = var5.channel_id;
                            var1.channelId = var6;
                            var5 = var5.author;
                            var1.author = var5;
                            var5 = _closure3_slot1;
                            var1.mediaIndex = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = _closure3_slot1;
                            var1 = var1 + 1;
                            _closure3_slot1 = var1;
                        case 386:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.getMedia = var10;
    var10 = function arg0() {
        _fun89864: for (var _fun89864_ip = 0;;) switch (_fun89864_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var3 = var2.attachments;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun89864_ip = 46;
                    continue _fun89864
                }
            case 29:
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun89865: for (var _fun89865_ip = 0;;) switch (_fun89865_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = arg1;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 6;
                            var1 = var0[var3];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isValidImageAttachment;
                            var1 = var1.bind(var2)(var4);
                            if (var1) {
                                _fun89865_ip = 277;
                                continue _fun89865
                            }
                        case 48:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isValidVideoAttachment;
                            var1 = var1.bind(var2)(var4);
                            if (var1) {
                                _fun89865_ip = 277;
                                continue _fun89865
                            }
                        case 82:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var8 = var2.bind(var0)(var1);
                            var3 = var8.hasFlag;
                            var1 = _closure2_slot0;
                            var2 = var1.flags;
                            var1 = _closure1_slot14;
                            var1 = var1.IS_VOICE_MESSAGE;
                            var9 = var3.bind(var8)(var2, var1);
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var1 = {};
                            var8 = _closure1_slot10;
                            if (var9) {
                                _fun89865_ip = 217;
                                continue _fun89865
                            }
                        case 154:
                            var9 = var8.ATTACHMENT;
                            var1.type = var9;
                            var9 = _closure2_slot0;
                            var10 = var9.id;
                            var1.messageId = var10;
                            var10 = var9.channel_id;
                            var1.channelId = var10;
                            var9 = var9.author;
                            var1.author = var9;
                            var1.fileIndex = var5;
                            var1.attachment = var4;
                            var9 = var2.bind(var3)(var1);
                            _fun89865_ip = 353;
                            continue _fun89865;
                        case 217:
                            var8 = var8.AUDIO;
                            var1.type = var8;
                            var6 = _closure2_slot0;
                            var8 = var6.id;
                            var1.messageId = var8;
                            var8 = var6.channel_id;
                            var1.channelId = var8;
                            var6 = var6.author;
                            var1.author = var6;
                            var1.fileIndex = var5;
                            var1.attachment = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun89865_ip = 353;
                            continue _fun89865;
                        case 277:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var1 = {};
                            var7 = _closure1_slot10;
                            var7 = var7.MEDIA_ATTACHMENT;
                            var1.type = var7;
                            var6 = _closure2_slot0;
                            var7 = var6.id;
                            var1.messageId = var7;
                            var7 = var6.channel_id;
                            var1.channelId = var7;
                            var6 = var6.author;
                            var1.author = var6;
                            var1.fileIndex = var5;
                            var1.attachment = var4;
                            var1 = var2.bind(var3)(var1);
                        case 353:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 46:
                return var0;
        }
    };
    var2.getFiles = var10;
    var9 = function arg0, arg1() {
        _fun89866: for (var _fun89866_ip = 0;;) switch (_fun89866_ip) {
            case 0:
                var4 = arg1;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var3 = var6.getGuildIdFromSearchContext;
                var2 = arg0;
                var3 = var3.bind(var6)(var2);
                var2 = null;
                var6 = var2 != var3;
                if (!var6) {
                    _fun89866_ip = 60;
                    continue _fun89866
                }
            case 57:
                var0 = var3;
            case 60:
                var _closure2_slot1 = var0;
                var0 = new Array(0);
                var _closure2_slot2 = var0;
                var3 = 0;
                var _closure2_slot3 = var3;
                var6 = var4.embeds;
                if (!(var2 != var6)) {
                    _fun89866_ip = 105;
                    continue _fun89866
                }
            case 88:
                var2 = var6.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun89867: for (var _fun89867_ip = 0;;) switch (_fun89867_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 6;
                            var1 = var0[var3];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isValidImageEmbed;
                            var1 = var1.bind(var2)(var5);
                            if (var1) {
                                _fun89867_ip = 76;
                                continue _fun89867
                            }
                        case 42:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isValidVideoEmbed;
                            var1 = var1.bind(var2)(var5);
                            if (!var1) {
                                _fun89867_ip = 228;
                                continue _fun89867
                            }
                        case 76:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var8 = var2.bind(var0)(var1);
                            var6 = var8.extractMediaFromEmbed;
                            var4 = _closure2_slot0;
                            var9 = _closure2_slot1;
                            var10 = arg1;
                            var14 = var8;
                            var13 = var5;
                            var12 = var4;
                            var11 = var4;
                            var6 = var14[var6](var13, var12, var11, var10, var9, var8);
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun89867_ip = 228;
                                continue _fun89867
                            }
                        case 135:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = {};
                            var7 = _closure1_slot11;
                            var7 = var7.EMBED;
                            var1.type = var7;
                            var7 = _closure2_slot0;
                            var8 = var7.id;
                            var1.messageId = var8;
                            var8 = var7.channel_id;
                            var1.channelId = var8;
                            var7 = var7.author;
                            var1.author = var7;
                            var7 = _closure2_slot3;
                            var1.linkIndex = var7;
                            var1.sources = var6;
                            var1.embed = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = _closure2_slot3;
                            var1 = var1 + 1;
                            _closure2_slot3 = var1;
                        case 228:
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1);
            case 105:
                var1 = var0.length;
                if (!(var3 === var1)) {
                    _fun89866_ip = 174;
                    continue _fun89866
                }
            case 114:
                var2 = var0.push;
                var1 = {};
                var5 = _closure1_slot11;
                var5 = var5.TEXT;
                var1.type = var5;
                var5 = var4.id;
                var1.messageId = var5;
                var5 = var4.channel_id;
                var1.channelId = var5;
                var4 = var4.author;
                var1.author = var4;
                var1.linkIndex = var3;
                var1 = var2.bind(var0)(var1);
            case 174:
                return var0;
        }
    };
    var2.getLinks = var9;
    var2.performKeyboardAwareNavigation = var8;
    var2.delayUntilNavigationComplete = var7;
    var2.getUrlIcon = var6;
    var2.getGridItemBorderStyles = var5;
    var2.getMediaGridItemStyles = var4;
    var2.getGridItemSpacingStyles = var3;
    var2.toSearchBarTag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4226, 8978, 8914, 11674, 660, 8980, 8856, 1384, 5399, 478, 1582, 3254, 1457, 7596, 671, 1348, 8977, 8973, 8987, 22, 2]);