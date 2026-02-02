// modules/search/SearchAutocompleteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun71746: for (var _fun71746_ip = 0;;) switch (_fun71746_ip) {
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
                _fun71746_ip = 76;
                continue _fun71746;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot24 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun71749: for (var _fun71749_ip = 0;;) switch (_fun71749_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun71749_ip = 46;
                    continue _fun71749
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun71749_ip = 55;
                    continue _fun71749
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun71749_ip = 345;
                    continue _fun71749
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun71749_ip = 323;
                    continue _fun71749
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun71749_ip = 283;
                    continue _fun71749
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun71749_ip = 270;
                    continue _fun71749
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
                    _fun71749_ip = 163;
                    continue _fun71749
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun71749_ip = 179;
                    continue _fun71749
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun71749_ip = 249;
                    continue _fun71749
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun71749_ip = 249;
                    continue _fun71749
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun71749_ip = 234;
                    continue _fun71749
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun71749_ip = 247;
                    continue _fun71749
                }
            case 234:
                var8 = _closure1_slot26;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun71749_ip = 265;
                continue _fun71749;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun71749_ip = 283;
                continue _fun71749;
            case 270:
                var6 = _closure1_slot26;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun71749_ip = 323;
                    continue _fun71749
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
                    _fun71749_ip = 330;
                    continue _fun71749
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun71750: for (var _fun71750_ip = 0;;) switch (_fun71750_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun71750_ip = 56;
                                continue _fun71750
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
                            _fun71750_ip = 67;
                            continue _fun71750;
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
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun71751: for (var _fun71751_ip = 0;;) switch (_fun71751_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun71751_ip = 23;
                    continue _fun71751
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun71751_ip = 33;
                    continue _fun71751
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
                    _fun71751_ip = 70;
                    continue _fun71751
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun71751_ip = 55;
                    continue _fun71751
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun71752: for (var _fun71752_ip = 0;;) switch (_fun71752_ip) {
            case 0:
                var9 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var0 = var3[var0];
                var6 = undefined;
                var2 = var2.bind(var6)(var0);
                var0 = var2.getSearchContextId;
                var3 = var0.bind(var2)(var9);
                var2 = _closure1_slot21;
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var8 = null;
                if (!(var8 == var0)) {
                    _fun71752_ip = 123;
                    continue _fun71752
                }
            case 59:
                var2 = {};
                var4 = new Array(0);
                var2.results = var4;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 14;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getUserSearchContext;
                var7 = _closure1_slot31;
                var4 = var7.bind;
                var4 = var4.bind(var7)(var8, var9);
                var4 = var5.bind(var6)(var4);
                var2.context = var4;
                var0 = var2;
            case 123:
                var2 = _closure1_slot21;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.searchContext;
        var5 = var0.query;
        var4 = var0.mode;
        var3 = var0.tokens;
        var2 = var0.cursorScope;
        var1 = var0.autocompletes;
        var7 = _closure1_slot27;
        var0 = undefined;
        var0 = var7.bind(var0)(var6);
        var0 = {};
        var0.searchContext = var6;
        var0.query = var5;
        var0.mode = var4;
        var0.tokens = var3;
        var0.cursorScope = var2;
        var0.autocompletes = var1;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun71754: for (var _fun71754_ip = 0;;) switch (_fun71754_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun71754_ip = 49;
                    continue _fun71754
                }
            case 12:
                var1 = _closure1_slot16;
                var1 = var1.FILTER_FROM;
                var1 = var3 === var1;
                if (var1) {
                    _fun71754_ip = 46;
                    continue _fun71754
                }
            case 32:
                var2 = _closure1_slot16;
                var2 = var2.FILTER_MENTIONS;
                var1 = var3 === var2;
            case 46:
                var0 = var1;
            case 49:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun71755: for (var _fun71755_ip = 0;;) switch (_fun71755_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot29;
                var2 = var3.filter;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var4 = var3.type;
                var0 = _closure1_slot14;
                var0 = var0.FILTER_ALL;
                var0 = var4 === var0;
                if (var0) {
                    _fun71755_ip = 72;
                    continue _fun71755
                }
            case 44:
                var3 = var3.type;
                var1 = _closure1_slot14;
                var1 = var1.FILTER;
                var1 = var3 === var1;
                if (!var1) {
                    _fun71755_ip = 69;
                    continue _fun71755
                }
            case 66:
                var1 = var2;
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun71756: for (var _fun71756_ip = 0;;) switch (_fun71756_ip) {
            case 0:
                var8 = arg0;
                var0 = arg1;
                var7 = var0.results;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getSearchContextId;
                var5 = var2.bind(var3)(var8);
                var3 = _closure1_slot21;
                var2 = var3.get;
                var3 = var2.bind(var3)(var5);
                var4 = _closure1_slot20;
                var2 = var4.get;
                var4 = var2.bind(var4)(var5);
                var13 = null;
                if (!(var13 != var3)) {
                    _fun71756_ip = 402;
                    continue _fun71756
                }
            case 85:
                if (!(var13 != var4)) {
                    _fun71756_ip = 402;
                    continue _fun71756
                }
            case 92:
                var6 = _closure1_slot30;
                var2 = var4.mode;
                var2 = var6.bind(var0)(var2);
                if (!var2) {
                    _fun71756_ip = 402;
                    continue _fun71756
                }
            case 112:
                var2 = var4.mode;
                var6 = var2.type;
                var2 = _closure1_slot14;
                var2 = var2.FILTER;
                var12 = 3;
                if (!(var6 === var2)) {
                    _fun71756_ip = 142;
                    continue _fun71756
                }
            case 139:
                var12 = 10;
            case 142:
                if (!(var12 === var0)) {
                    _fun71756_ip = 149;
                    continue _fun71756
                }
            case 146:
                var12 = 10;
            case 149:
                var2 = new Array(0);
                var6 = _closure1_slot25;
                var11 = var6.bind(var0)(var7);
                var7 = var11.bind(var0)();
                var6 = var7.done;
                var10 = 15;
                var9 = var7;
                var7 = undefined;
                if (var6) {
                    _fun71756_ip = 293;
                    continue _fun71756
                }
            case 182:
                var6 = var9.value;
                var14 = var2.length;
                if (!(!(var14 >= var12))) {
                    _fun71756_ip = 293;
                    continue _fun71756
                }
            case 196:
                var15 = _closure1_slot13;
                var14 = var15.getUser;
                var6 = var6.id;
                var16 = var14.bind(var15)(var6);
                if (!(var13 != var16)) {
                    _fun71756_ip = 278;
                    continue _fun71756
                }
            case 220:
                var14 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var14 = var14.bind(var0)(var6);
                var6 = var14.getUserTag;
                var6 = var6.bind(var14)(var16);
                var7 = var6;
                if (!(var13 != var6)) {
                    _fun71756_ip = 278;
                    continue _fun71756
                }
            case 255:
                var15 = var2.push;
                var14 = {};
                var14.text = var6;
                var14.user = var16;
                var14 = var15.bind(var2)(var14);
                var7 = var6;
            case 278:
                var14 = var11.bind(var0)();
                var6 = var14.done;
                var9 = var14;
                if (!var6) {
                    _fun71756_ip = 182;
                    continue _fun71756
                }
            case 293:
                var3.results = var2;
                var9 = var4.query;
                var7 = var4.mode;
                var6 = var4.tokens;
                var3 = _closure1_slot28;
                var2 = {};
                var2.searchContext = var8;
                var2.query = var9;
                var2.mode = var7;
                var2.tokens = var6;
                var4 = var4.cursorScope;
                var2.cursorScope = var4;
                var4 = _closure1_slot36;
                var4 = var4.bind(var0)(var8, var7, var6);
                var2.autocompletes = var4;
                var4 = var3.bind(var0)(var2);
                var3 = _closure1_slot20;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot23;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
            case 402:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun71757: for (var _fun71757_ip = 0;;) switch (_fun71757_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = _closure1_slot19;
                var3 = var4.bind(var0)(var3, var2);
                if (var3) {
                    _fun71757_ip = 75;
                    continue _fun71757
                }
            case 41:
                _closure1_slot19 = var2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.clearTokenCache;
                var1 = var1.bind(var2)();
            case 75:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun71758: for (var _fun71758_ip = 0;;) switch (_fun71758_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.filter;
                var5 = var0.currentToken;
                var12 = var0.searchContext;
                var11 = var0.maxResults;
                var9 = undefined;
                if (!(var11 === var9)) {
                    _fun71758_ip = 37;
                    continue _fun71758
                }
            case 34:
                var11 = 10;
            case 37:
                var10 = var0.tokens;
                var _closure2_slot0 = var9;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun71758_ip = 434;
                    continue _fun71758
                }
            case 56:
                var3 = var0 == var5;
                var2 = undefined;
                if (var3) {
                    _fun71758_ip = 94;
                    continue _fun71758
                }
            case 65:
                var3 = var5.getFullMatch;
                var5 = var3.bind(var5)();
                var3 = var0 == var5;
                var2 = undefined;
                if (var3) {
                    _fun71758_ip = 94;
                    continue _fun71758
                }
            case 84:
                var3 = var5.trim;
                var2 = var3.bind(var5)();
            case 94:
                var3 = var0 != var2;
                var8 = '';
                if (!var3) {
                    _fun71758_ip = 108;
                    continue _fun71758
                }
            case 105:
                var8 = var2;
            case 108:
                var3 = var8.length;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var5 = var5.bind(var9)(var2);
                var2 = var5.isGuildLikeSearchContext;
                var2 = var2.bind(var5)(var12);
                if (!var2) {
                    _fun71758_ip = 185;
                    continue _fun71758
                }
            case 150:
                var2 = _closure1_slot29;
                var2 = var2.bind(var9)(var4);
                if (!var2) {
                    _fun71758_ip = 185;
                    continue _fun71758
                }
            case 162:
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun71758_ip = 185;
                    continue _fun71758
                }
            case 168:
                var2 = _closure1_slot27;
                var2 = var2.bind(var9)(var12);
                var5 = var2.results;
                _fun71758_ip = 264;
                continue _fun71758;
            case 185:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 19;
                var2 = var6[var2];
                var2 = var3.bind(var9)(var2);
                var2 = var2[var4];
                var3 = var0 == var2;
                var6 = undefined;
                if (var3) {
                    _fun71758_ip = 224;
                    continue _fun71758
                }
            case 218:
                var6 = var2.getAutocompletions;
            case 224:
                if (!(var0 == var6)) {
                    _fun71758_ip = 234;
                    continue _fun71758
                }
            case 228:
                var2 = new Array(0);
                _fun71758_ip = 261;
                continue _fun71758;
            case 234:
                var3 = {};
                var3.query = var8;
                var3.searchContext = var12;
                var3.maxResults = var11;
                var3.tokens = var10;
                var2 = var6.bind(var9)(var3);
            case 261:
                var5 = var2;
            case 264:
                var3 = var5;
                if (!(var0 != var3)) {
                    _fun71758_ip = 395;
                    continue _fun71758
                }
            case 274:
                var2 = _closure1_slot29;
                var2 = var2.bind(var9)(var4);
                var3 = var5;
                if (!var2) {
                    _fun71758_ip = 395;
                    continue _fun71758
                }
            case 289:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 19;
                var2 = var10[var2];
                var6 = var6.bind(var9)(var2);
                var2 = var6.isMeAutcompleteAnswer;
                var2 = var2.bind(var6)(var8);
                var3 = var5;
                if (!var2) {
                    _fun71758_ip = 395;
                    continue _fun71758
                }
            case 326:
                var6 = _closure1_slot13;
                var2 = var6.getCurrentUser;
                var6 = var2.bind(var6)();
                _closure2_slot0 = var6;
                var3 = var5;
                if (!(var0 != var6)) {
                    _fun71758_ip = 395;
                    continue _fun71758
                }
            case 350:
                var2 = var5.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun71759: for (var _fun71759_ip = 0;;) switch (_fun71759_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.user;
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun71759_ip = 24;
                                continue _fun71759
                            }
                        case 19:
                            var1 = var0.id;
                        case 24:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var1);
                var5 = var1.unshift;
                var2 = {};
                var7 = _closure1_slot17;
                var2.text = var7;
                var2.user = var6;
                var2 = var5.bind(var1)(var2);
                var3 = var1;
            case 395:
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun71758_ip = 432;
                    continue _fun71758
                }
            case 404:
                var5 = var3.length;
                var2 = 0;
                var1 = null;
                if (!(var2 !== var5)) {
                    _fun71758_ip = 432;
                    continue _fun71758
                }
            case 417:
                var2 = {};
                var2.group = var4;
                var2.results = var3;
                var1 = var2;
            case 432:
                return var1;
            case 434:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0, arg1() {
        _fun71760: for (var _fun71760_ip = 0;;) switch (_fun71760_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var1 = var1 != var3;
                var2 = '';
                if (!var1) {
                    _fun71760_ip = 28;
                    continue _fun71760
                }
            case 18:
                var1 = var3.getFullMatch;
                var2 = var1.bind(var3)();
            case 28:
                var1 = var2.trim;
                var4 = var1.bind(var2)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var5.bind(var3)(var1);
                var7 = var8.isChannelFilterSupported;
                var1 = arg1;
                var10 = var7.bind(var8)(var1);
                var1 = global;
                var8 = var1.Map;
                var1 = _closure1_slot16;
                var1 = var1.FILTER_FROM;
                var7 = new Array(2);
                var7[0] = var1;
                var1 = _closure1_slot12;
                var1 = var1.hidePersonalInformation;
                var1 = !var1;
                var7[1] = var1;
                var1 = new Array(9);
                var1[0] = var7;
                var7 = _closure1_slot16;
                var9 = var7.FILTER_MENTIONS;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = _closure1_slot12;
                var9 = var9.hidePersonalInformation;
                var9 = !var9;
                var7[1] = var9;
                var1[1] = var7;
                var7 = _closure1_slot16;
                var9 = var7.FILTER_HAS;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = true;
                var7[1] = var9;
                var1[2] = var7;
                var7 = _closure1_slot16;
                var11 = var7.FILTER_BEFORE;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var9;
                var1[3] = var7;
                var7 = _closure1_slot16;
                var11 = var7.FILTER_AFTER;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var9;
                var1[4] = var7;
                var7 = _closure1_slot16;
                var11 = var7.FILTER_ON;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var9;
                var1[5] = var7;
                var7 = _closure1_slot16;
                var11 = var7.FILTER_IN;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var1[6] = var7;
                var7 = _closure1_slot16;
                var10 = var7.FILTER_PINNED;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = false;
                var7[1] = var10;
                var1[7] = var7;
                var7 = _closure1_slot16;
                var10 = var7.FILTER_AUTHOR_TYPE;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var9;
                var1[8] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var7;
                var12 = var1;
                var1 = new var13[var8](var12, var11);
                var1 = var1 instanceof Object ? var1 : var7;
                var _closure2_slot0 = var1;
                var1 = 19;
                var1 = var6[var1];
                var3 = var5.bind(var3)(var1);
                var1 = var3.getSearchTokenFilterAutocompletions;
                var3 = var1.bind(var3)(var4);
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun71761: for (var _fun71761_ip = 0;;) switch (_fun71761_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.token;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun71761_ip = 47;
                                continue _fun71761
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var1 = var1.token;
                            var2 = var2.bind(var3)(var1);
                            var1 = true;
                            var0 = var1 === var2;
                        case 47:
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var2 = _closure1_slot15;
                var2 = var2.SEARCH_OPTIONS;
                var0.group = var2;
                var0.results = var1;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun71762: for (var _fun71762_ip = 0;;) switch (_fun71762_ip) {
            case 0:
                var5 = arg1;
                var _closure2_slot0 = var5;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = arg0;
                var4 = var0.token;
                var _closure2_slot2 = var4;
                var1 = null;
                var0 = var1 == var4;
                var3 = undefined;
                var7 = undefined;
                if (var0) {
                    _fun71762_ip = 71;
                    continue _fun71762
                }
            case 42:
                var0 = var4.getFullMatch;
                var6 = var0.bind(var4)();
                var0 = var1 == var6;
                var7 = undefined;
                if (var0) {
                    _fun71762_ip = 71;
                    continue _fun71762
                }
            case 61:
                var0 = var6.trim;
                var7 = var0.bind(var6)();
            case 71:
                var0 = new Array(0);
                var _closure2_slot3 = var0;
                if (!(var1 != var7)) {
                    _fun71762_ip = 683;
                    continue _fun71762
                }
            case 86:
                var6 = '';
                if (!(var6 !== var7)) {
                    _fun71762_ip = 683;
                    continue _fun71762
                }
            case 97:
                var7 = _closure1_slot16;
                var7 = var7.FILTER_HAS;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = _closure1_slot12;
                var7 = var7.hidePersonalInformation;
                if (var7) {
                    _fun71762_ip = 171;
                    continue _fun71762
                }
            case 131:
                var10 = var9.push;
                var7 = _closure1_slot16;
                var7 = var7.FILTER_FROM;
                var7 = var10.bind(var9)(var7);
                var10 = var9.push;
                var7 = _closure1_slot16;
                var7 = var7.FILTER_MENTIONS;
                var7 = var10.bind(var9)(var7);
            case 171:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 13;
                var7 = var11[var7];
                var10 = var10.bind(var3)(var7);
                var7 = var10.isChannelFilterSupported;
                var7 = var7.bind(var10)(var5);
                if (!var7) {
                    _fun71762_ip = 225;
                    continue _fun71762
                }
            case 205:
                var10 = var9.push;
                var7 = _closure1_slot16;
                var7 = var7.FILTER_IN;
                var7 = var10.bind(var9)(var7);
            case 225:
                var7 = var9.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun71763: for (var _fun71763_ip = 0;;) switch (_fun71763_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun71763_ip = 85;
                                continue _fun71763
                            }
                        case 9:
                            var4 = _closure1_slot33;
                            var3 = {};
                            var3.filter = var0;
                            var2 = _closure2_slot2;
                            var3.currentToken = var2;
                            var2 = _closure2_slot0;
                            var3.searchContext = var2;
                            var2 = 3;
                            var3.maxResults = var2;
                            var2 = _closure2_slot1;
                            var3.tokens = var2;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            if (!(var1 != var2)) {
                                _fun71763_ip = 85;
                                continue _fun71763
                            }
                        case 71:
                            var1 = _closure2_slot3;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var9)(var2);
                var2 = var1 != var4;
                var7 = var6;
                if (!var2) {
                    _fun71762_ip = 262;
                    continue _fun71762
                }
            case 252:
                var2 = var4.getFullMatch;
                var7 = var2.bind(var4)();
            case 262:
                var2 = var7.trim;
                var13 = var2.bind(var7)();
                var7 = var1 == var13;
                var2 = null;
                if (var7) {
                    _fun71762_ip = 669;
                    continue _fun71762
                }
            case 284:
                var2 = null;
                if (!(var6 !== var13)) {
                    _fun71762_ip = 669;
                    continue _fun71762
                }
            case 293:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var11 = 19;
                var6 = var6[var11];
                var7 = var7.bind(var3)(var6);
                var6 = _closure1_slot16;
                var6 = var6.FILTER_BEFORE;
                var10 = var7[var6];
                var7 = var1 == var10;
                var6 = undefined;
                if (var7) {
                    _fun71762_ip = 397;
                    continue _fun71762
                }
            case 336:
                var7 = var10.getAutocompletions;
                var7 = var1 == var7;
                var6 = undefined;
                if (var7) {
                    _fun71762_ip = 397;
                    continue _fun71762
                }
            case 351:
                var9 = var10.getAutocompletions;
                var7 = {};
                var7.query = var13;
                var7.searchContext = var5;
                var12 = 1;
                var7.maxResults = var12;
                var9 = var9.bind(var10)(var7);
                var7 = var1 == var9;
                var6 = undefined;
                if (var7) {
                    _fun71762_ip = 397;
                    continue _fun71762
                }
            case 391:
                var7 = 0;
                var6 = var9[var7];
            case 397:
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var9 = var9.bind(var3)(var7);
                var7 = _closure1_slot16;
                var7 = var7.FILTER_ON;
                var12 = var9[var7];
                var7 = var1 == var12;
                var10 = undefined;
                if (var7) {
                    _fun71762_ip = 498;
                    continue _fun71762
                }
            case 437:
                var7 = var12.getAutocompletions;
                var7 = var1 == var7;
                var10 = undefined;
                if (var7) {
                    _fun71762_ip = 498;
                    continue _fun71762
                }
            case 452:
                var9 = var12.getAutocompletions;
                var7 = {};
                var7.query = var13;
                var7.searchContext = var5;
                var14 = 1;
                var7.maxResults = var14;
                var9 = var9.bind(var12)(var7);
                var7 = var1 == var9;
                var10 = undefined;
                if (var7) {
                    _fun71762_ip = 498;
                    continue _fun71762
                }
            case 492:
                var7 = 0;
                var10 = var9[var7];
            case 498:
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var9 = var9.bind(var3)(var7);
                var7 = _closure1_slot16;
                var7 = var7.FILTER_AFTER;
                var12 = var9[var7];
                var7 = var1 == var12;
                var9 = undefined;
                if (var7) {
                    _fun71762_ip = 599;
                    continue _fun71762
                }
            case 538:
                var7 = var12.getAutocompletions;
                var7 = var1 == var7;
                var9 = undefined;
                if (var7) {
                    _fun71762_ip = 599;
                    continue _fun71762
                }
            case 553:
                var11 = var12.getAutocompletions;
                var7 = {};
                var7.query = var13;
                var7.searchContext = var5;
                var13 = 1;
                var7.maxResults = var13;
                var11 = var11.bind(var12)(var7);
                var7 = var1 == var11;
                var9 = undefined;
                if (var7) {
                    _fun71762_ip = 599;
                    continue _fun71762
                }
            case 593:
                var7 = 0;
                var9 = var11[var7];
            case 599:
                var7 = var1 == var6;
                var2 = null;
                if (var7) {
                    _fun71762_ip = 669;
                    continue _fun71762
                }
            case 608:
                var7 = new Array(1);
                var7[0] = var6;
                if (!(var1 != var10)) {
                    _fun71762_ip = 630;
                    continue _fun71762
                }
            case 620:
                var6 = var7.push;
                var6 = var6.bind(var7)(var10);
            case 630:
                if (!(var1 != var9)) {
                    _fun71762_ip = 644;
                    continue _fun71762
                }
            case 634:
                var6 = var7.push;
                var6 = var6.bind(var7)(var9);
            case 644:
                var6 = {};
                var8 = _closure1_slot15;
                var8 = var8.DATES;
                var6.group = var8;
                var6.results = var7;
                var2 = var6;
            case 669:
                if (!(var1 != var2)) {
                    _fun71762_ip = 683;
                    continue _fun71762
                }
            case 673:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 683:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.getTotalResults;
                var6 = var2.bind(var6)(var0);
                var2 = 5;
                if (!(var6 < var2)) {
                    _fun71762_ip = 744;
                    continue _fun71762
                }
            case 724:
                var2 = var0.push;
                var1 = _closure1_slot34;
                var1 = var1.bind(var3)(var4, var5);
                var1 = var2.bind(var0)(var1);
            case 744:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun71764: for (var _fun71764_ip = 0;;) switch (_fun71764_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = arg2;
                var2 = var5.type;
                var1 = _closure1_slot14;
                var1 = var1.FILTER;
                if (!(var1 !== var2)) {
                    _fun71764_ip = 112;
                    continue _fun71764
                }
            case 31:
                var1 = _closure1_slot14;
                var1 = var1.FILTER_ALL;
                if (!(var1 !== var2)) {
                    _fun71764_ip = 97;
                    continue _fun71764
                }
            case 45:
                var1 = _closure1_slot14;
                var1 = var1.EMPTY;
                if (!(var1 !== var2)) {
                    _fun71764_ip = 63;
                    continue _fun71764
                }
            case 59:
                var1 = undefined;
                return var1;
            case 63:
                var1 = new Array(0);
                var6 = var1.push;
                var8 = _closure1_slot34;
                var7 = var5.token;
                var2 = undefined;
                var2 = var8.bind(var2)(var7, var4);
                var2 = var6.bind(var1)(var2);
                return var1;
            case 97:
                var2 = _closure1_slot35;
                var1 = undefined;
                var1 = var2.bind(var1)(var5, var4, var0);
                return var1;
            case 112:
                var2 = _closure1_slot33;
                var1 = {};
                var6 = var5.filter;
                var1.filter = var6;
                var5 = var5.token;
                var1.currentToken = var5;
                var1.searchContext = var4;
                var3 = _closure1_slot22;
                var1.maxResults = var3;
                var1.tokens = var0;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun71764_ip = 176;
                    continue _fun71764
                }
            case 170:
                var0 = new Array(0);
                _fun71764_ip = 187;
                continue _fun71764;
            case 176:
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 187:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.clearTokenCache;
        var1 = var1.bind(var2)();
        return var0;
    };
    var0 = function arg0() {
        _fun71766: for (var _fun71766_ip = 0;;) switch (_fun71766_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot20;
                var1 = var4.get;
                var1 = var1.bind(var4)(var3);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun71766_ip = 145;
                    continue _fun71766
                }
            case 28:
                var9 = var1.searchContext;
                var8 = var1.query;
                var7 = var1.mode;
                var6 = var1.tokens;
                var5 = var1.cursorScope;
                var10 = var1.autocompletes;
                var1 = new Array(0);
                var _closure2_slot0 = var1;
                var4 = var10.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun71767: for (var _fun71767_ip = 0;;) switch (_fun71767_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.group;
                            var0 = _closure1_slot15;
                            var0 = var0.HISTORY;
                            if (!(var1 !== var0)) {
                                _fun71767_ip = 43;
                                continue _fun71767
                            }
                        case 26:
                            var1 = _closure2_slot0;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var10)(var2);
                var4 = _closure1_slot28;
                var2 = {};
                var2.searchContext = var9;
                var2.query = var8;
                var2.mode = var7;
                var2.tokens = var6;
                var2.cursorScope = var5;
                var2.autocompletes = var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = _closure1_slot20;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
            case 145:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun71768: for (var _fun71768_ip = 0;;) switch (_fun71768_ip) {
            case 0:
                var8 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getSearchContextId;
                var4 = var2.bind(var3)(var8);
                var3 = _closure1_slot20;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun71768_ip = 150;
                    continue _fun71768
                }
            case 59:
                var9 = var5.query;
                var7 = var5.mode;
                var6 = var5.tokens;
                var3 = _closure1_slot28;
                var2 = {};
                var2.searchContext = var8;
                var2.query = var9;
                var2.mode = var7;
                var2.tokens = var6;
                var5 = var5.cursorScope;
                var2.cursorScope = var5;
                var5 = _closure1_slot36;
                var5 = var5.bind(var0)(var8, var7, var6);
                var2.autocompletes = var5;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot20;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
            case 150:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var9 = var5[var1];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot13 = var9;
    var9 = 11;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var10 = var9.SearchPopoutModes;
    var _closure1_slot14 = var10;
    var10 = var9.SearchAutocompleteGroups;
    var _closure1_slot15 = var10;
    var10 = var9.SearchTokenTypes;
    var _closure1_slot16 = var10;
    var10 = var9.ME;
    var _closure1_slot17 = var10;
    var9 = var9.SearchTypes;
    var9 = 12;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.AutocompleterResultTypes;
    var _closure1_slot18 = var9;
    var9 = null;
    var _closure1_slot19 = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot20 = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun71770: for (var _fun71770_ip = 0;;) switch (_fun71770_ip) {
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
                    var0 = _closure1_slot24;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71770_ip = 69;
                        continue _fun71770
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71770_ip = 105;
                    continue _fun71770;
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
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot8;
            var12 = _closure1_slot9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var8 = _closure1_slot13;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function arg0() {
            _fun71772: for (var _fun71772_ip = 0;;) switch (_fun71772_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getSearchContextId;
                    var2 = var0.bind(var1)(var3);
                    var1 = _closure1_slot20;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun71772_ip = 135;
                        continue _fun71772
                    }
                case 59:
                    var1 = {};
                    var1.searchContext = var3;
                    var3 = '';
                    var1.query = var3;
                    var3 = {
                        'type': null,
                        'filter': null,
                        'token': null
                    };
                    var4 = _closure1_slot14;
                    var4 = var4.EMPTY;
                    var3.type = var4;
                    var1.mode = var3;
                    var3 = new Array(0);
                    var1.tokens = var3;
                    var1.cursorScope = var2;
                    var2 = new Array(0);
                    var1.autocompletes = var2;
                    var0 = var1;
                case 135:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSelectedSearchContext';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'SearchAutocompleteStore';
    var8.displayName = var1;
    var1 = 21;
    var1 = var5[var1];
    var13 = var7.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.searchContext;
        var3 = _closure1_slot32;
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot38;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.SEARCH_AUTOCOMPLETE_INITIALIZE = var9;
    var9 = function arg0() {
        _fun71775: for (var _fun71775_ip = 0;;) switch (_fun71775_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.searchContext;
                var8 = var0.tokens;
                var7 = var0.cursorScope;
                var0 = _closure1_slot32;
                var5 = undefined;
                var0 = var0.bind(var5)(var11);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var16 = 13;
                var3 = var0[var16];
                var4 = var2.bind(var5)(var3);
                var3 = var4.getQueryFromTokens;
                var10 = var3.bind(var4)(var8);
                var3 = var0[var16];
                var4 = var2.bind(var5)(var3);
                var3 = var4.getAutocompleteMode;
                var9 = var3.bind(var4)(var7, var8);
                var0 = var0[var16];
                var2 = var2.bind(var5)(var0);
                var0 = var2.getSearchContextId;
                var4 = var0.bind(var2)(var11);
                var2 = _closure1_slot20;
                var0 = var2.get;
                var2 = var0.bind(var2)(var4);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun71775_ip = 171;
                    continue _fun71775
                }
            case 127:
                var0 = var2.query;
                if (!(var10 === var0)) {
                    _fun71775_ip = 171;
                    continue _fun71775
                }
            case 137:
                var0 = var2.mode;
                if (!(var3 != var0)) {
                    _fun71775_ip = 536;
                    continue _fun71775
                }
            case 149:
                var0 = var2.mode;
                var6 = var0.filter;
                var0 = var9.filter;
                if (!(var6 !== var0)) {
                    _fun71775_ip = 536;
                    continue _fun71775
                }
            case 171:
                var0 = _closure1_slot30;
                var0 = var0.bind(var5)(var9);
                if (var0) {
                    _fun71775_ip = 244;
                    continue _fun71775
                }
            case 183:
                var6 = _closure1_slot21;
                var0 = var6.get;
                var6 = var0.bind(var6)(var4);
                if (!(var3 != var6)) {
                    _fun71775_ip = 226;
                    continue _fun71775
                }
            case 201:
                var12 = var6.context;
                var0 = var12.clearQuery;
                var0 = var0.bind(var12)();
                var0 = new Array(0);
                var6.results = var0;
            case 226:
                var0 = _closure1_slot36;
                var6 = var0.bind(var5)(var11, var9, var8);
                var0 = true;
                _fun71775_ip = 544;
                continue _fun71775;
            case 244:
                var12 = _closure1_slot27;
                var12 = var12.bind(var5)(var11);
                var14 = var9.token;
                var13 = var3 == var14;
                var15 = undefined;
                if (var13) {
                    _fun71775_ip = 297;
                    continue _fun71775
                }
            case 268:
                var13 = var14.getFullMatch;
                var14 = var13.bind(var14)();
                var13 = var3 == var14;
                var15 = undefined;
                if (var13) {
                    _fun71775_ip = 297;
                    continue _fun71775
                }
            case 287:
                var13 = var14.trim;
                var15 = var13.bind(var14)();
            case 297:
                if (!(var3 != var15)) {
                    _fun71775_ip = 312;
                    continue _fun71775
                }
            case 301:
                var14 = var15.length;
                var13 = 0;
                if (!(!(var14 > var13))) {
                    _fun71775_ip = 345;
                    continue _fun71775
                }
            case 312:
                var14 = var12.context;
                var13 = var14.clearQuery;
                var13 = var13.bind(var14)();
                var13 = _closure1_slot36;
                var6 = var13.bind(var5)(var11, var9, var8);
                var0 = true;
                _fun71775_ip = 544;
                continue _fun71775;
            case 345:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var14 = var14.bind(var5)(var13);
                var13 = var14.getGuildIdFromSearchContext;
                var17 = var13.bind(var14)(var11);
                if (!(var3 != var17)) {
                    _fun71775_ip = 414;
                    continue _fun71775
                }
            case 377:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 17;
                var13 = var16[var13];
                var16 = var14.bind(var5)(var13);
                var14 = var16.requestMembers;
                var13 = _closure1_slot22;
                var13 = var14.bind(var16)(var17, var15, var13);
            case 414:
                var14 = var12.context;
                var13 = var14.setQuery;
                var12 = {};
                var12.query = var15;
                var15 = {};
                var18 = var3 != var17;
                var16 = undefined;
                if (!var18) {
                    _fun71775_ip = 446;
                    continue _fun71775
                }
            case 443:
                var16 = var17;
            case 446:
                var15.guild = var16;
                var12.filters = var15;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 18;
                var15 = var17[var15];
                var17 = var16.bind(var5)(var15);
                var16 = var17.getBoosterMap;
                var15 = _closure1_slot18;
                var15 = var15.USER;
                var15 = var16.bind(var17)(var15);
                var12.boosters = var15;
                var12 = var13.bind(var14)(var12);
                var13 = var3 == var2;
                var12 = undefined;
                if (var13) {
                    _fun71775_ip = 521;
                    continue _fun71775
                }
            case 515:
                var12 = var2.autocompletes;
            case 521:
                if (!(var3 == var12)) {
                    _fun71775_ip = 529;
                    continue _fun71775
                }
            case 525:
                var12 = new Array(0);
            case 529:
                var0 = false;
                var6 = var12;
                _fun71775_ip = 544;
                continue _fun71775;
            case 536:
                var6 = var2.autocompletes;
                var0 = false;
            case 544:
                var3 = _closure1_slot28;
                var2 = {};
                var2.searchContext = var11;
                var2.query = var10;
                var2.mode = var9;
                var2.tokens = var8;
                var2.cursorScope = var7;
                var2.autocompletes = var6;
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot20;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
        }
    };
    var1.SEARCH_AUTOCOMPLETE_QUERY_UPDATE = var9;
    var9 = function arg0() {
        _fun71776: for (var _fun71776_ip = 0;;) switch (_fun71776_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.id;
                var2 = _closure1_slot21;
                var0 = var2.get;
                var3 = var0.bind(var2)(var4);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun71776_ip = 70;
                    continue _fun71776
                }
            case 31:
                var5 = var3.context;
                var2 = var5.destroy;
                var2 = var2.bind(var5)();
                var2 = new Array(0);
                var3.results = var2;
                var3 = _closure1_slot21;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
            case 70:
                var3 = _closure1_slot20;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                _closure1_slot19 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.SEARCH_EDITOR_STATE_CLEAR = var9;
    var1.CHANNEL_CREATE = var6;
    var1.CHANNEL_DELETE = var6;
    var6 = function() {
        _fun71777: for (var _fun71777_ip = 0;;) switch (_fun71777_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun71777_ip = 31;
                    continue _fun71777
                }
            case 16:
                var3 = _closure1_slot38;
                var2 = _closure1_slot19;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 31:
                return var0;
        }
    };
    var1.STREAMER_MODE_UPDATE = var6;
    var6 = function() {
        _fun71778: for (var _fun71778_ip = 0;;) switch (_fun71778_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun71778_ip = 31;
                    continue _fun71778
                }
            case 16:
                var3 = _closure1_slot38;
                var2 = _closure1_slot19;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 31:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var6;
    var6 = function() {
        _fun71779: for (var _fun71779_ip = 0;;) switch (_fun71779_ip) {
            case 0:
                var2 = _closure1_slot25;
                var1 = _closure1_slot20;
                var0 = var1.keys;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun71779_ip = 68;
                    continue _fun71779
                }
            case 39:
                var5 = _closure1_slot37;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun71779_ip = 39;
                    continue _fun71779
                }
            case 68:
                return var0;
        }
    };
    var1.LOGOUT = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.autocompleteStateId;
        var1 = _closure1_slot37;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.SEARCH_HISTORY_WEB_CLEAR_ITEMS = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var14 = var6;
    var12 = var1;
    var1 = new var14[var8](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot23 = var1;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/SearchAutocompleteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1672, 1410, 1661, 3198, 1613, 660, 5563, 8929, 6593, 3197, 4507, 5568, 5555, 8930, 566, 806, 2]);