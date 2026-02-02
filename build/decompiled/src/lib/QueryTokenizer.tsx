// lib/QueryTokenizer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun71795: for (var _fun71795_ip = 0;;) switch (_fun71795_ip) {
            case 0:
                var13 = arg0;
                var12 = arg1;
                var11 = arg2;
                var0 = null;
                if (!(var0 != var12)) {
                    _fun71795_ip = 305;
                    continue _fun71795
                }
            case 18:
                var1 = var12.length;
                var6 = 0;
                var1 = var6 < var1;
                var10 = undefined;
                var8 = 0;
                var7 = undefined;
                if (!var1) {
                    _fun71795_ip = 246;
                    continue _fun71795
                }
            case 44:
                var14 = var12[var8];
                var2 = _closure1_slot5;
                var3 = var13.match;
                var1 = var14.regex;
                var1 = var3.bind(var13)(var1);
                var3 = var2.bind(var10)(var1, var11);
                if (!(var0 != var3)) {
                    _fun71795_ip = 231;
                    continue _fun71795
                }
            case 82:
                var5 = var14.cache;
                var2 = var0 != var5;
                var15 = undefined;
                if (!var2) {
                    _fun71795_ip = 118;
                    continue _fun71795
                }
            case 97:
                var4 = var5.get;
                var1 = var3[var6];
                var1 = var4.bind(var5)(var1);
                var2 = var0 != var1;
                var15 = var1;
            case 118:
                var1 = var15;
                if (!var2) {
                    _fun71795_ip = 165;
                    continue _fun71795
                }
            case 124:
                var2 = _closure1_slot3;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = var4;
                var17 = var15;
                var2 = new var18[var2](var17, var16);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = var3.index;
                var2.start = var4;
                var1 = var2;
            case 165:
                if (!(var0 == var1)) {
                    _fun71795_ip = 303;
                    continue _fun71795
                }
            case 172:
                var15 = _closure1_slot3;
                var16 = var14.type;
                var4 = var15.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var15
                    }
                });
                var18 = var4;
                var17 = var3;
                var2 = new var18[var15](var17, var16, var15);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = var14.validator;
                if (!(var0 != var4)) {
                    _fun71795_ip = 248;
                    continue _fun71795
                }
            case 214:
                var4 = var14.validator;
                var4 = var4.bind(var14)(var2);
                var7 = var5;
                if (var4) {
                    _fun71795_ip = 248;
                    continue _fun71795
                }
            case 231:
                var8 = var8 + 1;
                var4 = var12.length;
                if (var8 < var4) {
                    _fun71795_ip = 44;
                    continue _fun71795
                }
            case 246:
                return var0;
            case 248:
                var4 = var0 == var5;
                if (var4) {
                    _fun71795_ip = 279;
                    continue _fun71795
                }
            case 255:
                var7 = var0 != var5;
                if (!var7) {
                    _fun71795_ip = 276;
                    continue _fun71795
                }
            case 262:
                var9 = var5.has;
                var8 = var3[var6];
                var7 = var9.bind(var5)(var8);
            case 276:
                var4 = var7;
            case 279:
                var1 = var2;
                if (var4) {
                    _fun71795_ip = 303;
                    continue _fun71795
                }
            case 285:
                var4 = var5.set;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3, var2);
                var1 = var2;
            case 303:
                return var1;
            case 305:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun71796: for (var _fun71796_ip = 0;;) switch (_fun71796_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun71796_ip = 36;
                    continue _fun71796
                }
            case 9:
                var1 = new Array(0);
                var4 = 0;
                var6 = var1;
                var5 = var3;
                var2 = arraySpread(var6, var5, var4);
                var2 = arg1;
                var1.index = var2;
                return var1;
            case 36:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = /.+/g;
    var _closure1_slot2 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot1;
        var2 = function() {
            _fun71798: for (var _fun71798_ip = 0;;) switch (_fun71798_ip) {
                case 0:
                    var3 = arguments[0];
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun71798_ip = 22;
                        continue _fun71798
                    }
                case 18:
                    var3 = new Array(0);
                case 22:
                    var5 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var0)(var4, var2);
                    var2 = new Array(0);
                    var4._rules = var2;
                    var2 = {};
                    var4._followers = var2;
                    var2 = 'NON_TOKEN';
                    var4._nonTokenType = var2;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.addRule;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = new Array(0);
            var1._rules = var0;
            var0 = {};
            var1._followers = var0;
            var0 = 'NON_TOKEN';
            var1._nonTokenType = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'addRule';
        var0.key = var5;
        var5 = function arg0() {
            _fun71801: for (var _fun71801_ip = 0;;) switch (_fun71801_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var8 = var0.type;
                    var _closure3_slot2 = var8;
                    var3 = var0.follows;
                    var7 = var0.validator;
                    var _closure3_slot3 = var7;
                    var0 = var0.regex;
                    var _closure3_slot4 = var0;
                    var6 = var0.source;
                    var5 = var6.charAt;
                    var4 = 0;
                    var4 = var5.bind(var6)(var4);
                    var10 = '^';
                    var9 = var0;
                    if (!(var10 !== var4)) {
                        _fun71801_ip = 137;
                        continue _fun71801
                    }
                case 76:
                    var4 = global;
                    var6 = var4.RegExp;
                    var5 = var0.source;
                    var4 = var4.HermesInternal;
                    var4 = var4.concat;
                    var12 = var4.bind(var10)(var5);
                    var11 = var0.flags;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = var4;
                    var0 = new var13[var6](var12, var11, var10);
                    var0 = var0 instanceof Object ? var0 : var4;
                    _closure3_slot4 = var0;
                    var9 = var0;
                case 137:
                    var4 = null;
                    var5 = var4 != var7;
                    var0 = undefined;
                    var6 = undefined;
                    if (!var5) {
                        _fun71801_ip = 185;
                        continue _fun71801
                    }
                case 150:
                    var5 = global;
                    var5 = var5.Map;
                    var10 = var5.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var10;
                    var5 = new var13[var5](var12);
                    var5 = var5 instanceof Object ? var5 : var10;
                    var _closure3_slot1 = var5;
                    var6 = var5;
                case 185:
                    if (!(var4 == var3)) {
                        _fun71801_ip = 228;
                        continue _fun71801
                    }
                case 189:
                    var5 = var2._rules;
                    var4 = var5.push;
                    var2 = {};
                    var2.regex = var9;
                    var2.type = var8;
                    var2.validator = var7;
                    var2.cache = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun71801_ip = 245;
                    continue _fun71801;
                case 228:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun71802: for (var _fun71802_ip = 0;;) switch (_fun71802_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0._followers;
                                var2 = var0[var1];
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun71802_ip = 44;
                                    continue _fun71802
                                }
                            case 26:
                                var0 = _closure3_slot0;
                                var2 = var0._followers;
                                var0 = new Array(0);
                                var2[var1] = var0;
                            case 44:
                                var0 = _closure3_slot0;
                                var0 = var0._followers;
                                var2 = var0[var1];
                                var1 = var2.push;
                                var0 = {};
                                var4 = _closure3_slot4;
                                var0.regex = var4;
                                var4 = _closure3_slot2;
                                var0.type = var4;
                                var4 = _closure3_slot3;
                                var0.validator = var4;
                                var3 = _closure3_slot1;
                                var0.cache = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 245:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'tokenize';
        var0.key = var5;
        var5 = function arg0() {
            _fun71803: for (var _fun71803_ip = 0;;) switch (_fun71803_ip) {
                case 0:
                    var14 = arg0;
                    var1 = this;
                    var0 = new Array(0);
                    var2 = var14.length;
                    var13 = 0;
                    var5 = var2 > var13;
                    var7 = undefined;
                    var4 = '';
                    var2 = null;
                    var12 = 1;
                    var11 = undefined;
                    var10 = var4;
                    var8 = 0;
                    var9 = var10;
                    var6 = 0;
                    if (!var5) {
                        _fun71803_ip = 264;
                        continue _fun71803
                    }
                case 53:
                    var15 = var1._getMatch;
                    var5 = var10.length;
                    var5 = var8 + var5;
                    var18 = var15.bind(var1)(var14, var11, var5);
                    var20 = var14;
                    if (!(var2 == var18)) {
                        _fun71803_ip = 111;
                        continue _fun71803
                    }
                case 84:
                    var5 = var20[var13];
                    var16 = var10 + var5;
                    var5 = var20.substring;
                    var14 = var5.bind(var20)(var12);
                    var15 = var8;
                    _fun71803_ip = 240;
                    continue _fun71803;
                case 111:
                    var5 = var2 != var10;
                    if (!var5) {
                        _fun71803_ip = 122;
                        continue _fun71803
                    }
                case 118:
                    var5 = var4 !== var10;
                case 122:
                    if (!var5) {
                        _fun71803_ip = 190;
                        continue _fun71803
                    }
                case 125:
                    var17 = var0.push;
                    var22 = _closure1_slot3;
                    var19 = _closure1_slot5;
                    var21 = var10.match;
                    var5 = _closure1_slot2;
                    var5 = var21.bind(var10)(var5);
                    var25 = var19.bind(var7)(var5, var8);
                    var24 = var1._nonTokenType;
                    var19 = var22.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var22
                        }
                    });
                    var26 = var19;
                    var5 = new var26[var22](var25, var24, var23);
                    var5 = var5 instanceof Object ? var5 : var19;
                    var5 = var17.bind(var0)(var5);
                case 190:
                    var5 = var0.push;
                    var5 = var5.bind(var0)(var18);
                    var17 = var18.length;
                    var5 = var10.length;
                    var5 = var17 + var5;
                    var15 = var8 + var5;
                    var19 = var20.substring;
                    var17 = var18.length;
                    var14 = var19.bind(var20)(var17);
                    var11 = var18;
                    var16 = var4;
                case 240:
                    var5 = var14.length;
                    var10 = var16;
                    var8 = var15;
                    var9 = var10;
                    var6 = var8;
                    if (var5 > var13) {
                        _fun71803_ip = 53;
                        continue _fun71803
                    }
                case 264:
                    var2 = var2 != var9;
                    if (!var2) {
                        _fun71803_ip = 275;
                        continue _fun71803
                    }
                case 271:
                    var2 = var4 !== var9;
                case 275:
                    if (!var2) {
                        _fun71803_ip = 343;
                        continue _fun71803
                    }
                case 278:
                    var2 = var0.push;
                    var5 = _closure1_slot3;
                    var4 = _closure1_slot5;
                    var8 = var9.match;
                    var3 = _closure1_slot2;
                    var3 = var8.bind(var9)(var3);
                    var25 = var4.bind(var7)(var3, var6);
                    var24 = var1._nonTokenType;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var26 = var3;
                    var1 = new var26[var5](var25, var24, var23);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var1 = var2.bind(var0)(var1);
                case 343:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clearCache';
        var0.key = var5;
        var5 = function() {
            _fun71804: for (var _fun71804_ip = 0;;) switch (_fun71804_ip) {
                case 0:
                    var5 = this;
                    var8 = var5._rules;
                    var7 = var8.forEach;
                    var0 = function(arg0) { // Environment: var6
                        _fun71805: for (var _fun71805_ip = 0;;) switch (_fun71805_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.cache;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun71805_ip = 30;
                                    continue _fun71805
                                }
                            case 20:
                                var1 = var2.clear;
                                var0 = var1.bind(var2)();
                            case 30:
                                return var0;
                        }
                    };
                    var0 = var7.bind(var8)(var0);
                    var3 = var5._followers;
                    for (var0 in var3)
                        case 42: {
                            case 51: var8 = var0;
                            var7 = var5._followers;
                            var9 = var7[var8];
                            var8 = var9.forEach;
                            var7 = function(arg0) { // Environment: var6
                                _fun71806: for (var _fun71806_ip = 0;;) switch (_fun71806_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.cache;
                                        var0 = null;
                                        var1 = var0 == var2;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun71806_ip = 30;
                                            continue _fun71806
                                        }
                                    case 20:
                                        var1 = var2.clear;
                                        var0 = var1.bind(var2)();
                                    case 30:
                                        return var0;
                                }
                            };
                            var7 = var8.bind(var9)(var7);
                            _fun71804_ip = 42;
                            continue _fun71804;
                        }
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_getMatch';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun71807: for (var _fun71807_ip = 0;;) switch (_fun71807_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var4 = arg2;
                    var1 = this;
                    var2 = null;
                    var3 = var2 != var0;
                    var9 = null;
                    if (!var3) {
                        _fun71807_ip = 28;
                        continue _fun71807
                    }
                case 23:
                    var9 = var0.type;
                case 28:
                    var7 = var2 == var0;
                    var3 = undefined;
                    var6 = undefined;
                    if (var7) {
                        _fun71807_ip = 44;
                        continue _fun71807
                    }
                case 39:
                    var6 = var0.end;
                case 44:
                    var0 = undefined;
                    if (!(var6 === var4)) {
                        _fun71807_ip = 87;
                        continue _fun71807
                    }
                case 50:
                    var7 = _closure1_slot4;
                    var8 = var1._followers;
                    var6 = global;
                    var6 = var6.String;
                    var6 = var6.bind(var3)(var9);
                    var6 = var8[var6];
                    var0 = var7.bind(var3)(var5, var6, var4);
                case 87:
                    if (!(var2 == var0)) {
                        _fun71807_ip = 111;
                        continue _fun71807
                    }
                case 91:
                    var2 = _closure1_slot4;
                    var1 = var1._rules;
                    var0 = var2.bind(var3)(var5, var1, var4);
                case 111:
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = function() { // Environment: var4
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            _fun71809: for (var _fun71809_ip = 0;;) switch (_fun71809_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2, var4);
                    var4 = var1 instanceof var4;
                    if (var4) {
                        _fun71809_ip = 142;
                        continue _fun71809
                    }
                case 38:
                    var7 = null;
                    if (!(var7 == var1)) {
                        _fun71809_ip = 73;
                        continue _fun71809
                    }
                case 44:
                    var4 = new Array(0);
                    var2.match = var4;
                    var4 = 0;
                    var2.start = var4;
                    var2.type = var3;
                    _fun71809_ip = 213;
                    continue _fun71809;
                case 73:
                    var4 = new Array(0);
                    var11 = var4;
                    var10 = var1;
                    var9 = 0;
                    var6 = arraySpread(var11, var10, var9);
                    var2.match = var4;
                    var8 = 'string';
                    var6 = typeof var1;
                    var4 = 0;
                    if (!(var8 !== var6)) {
                        _fun71809_ip = 128;
                        continue _fun71809
                    }
                case 108:
                    var6 = var1.index;
                    var7 = var7 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun71809_ip = 125;
                        continue _fun71809
                    }
                case 122:
                    var5 = var6;
                case 125:
                    var4 = var5;
                case 128:
                    var2.start = var4;
                    var2.type = var3;
                    _fun71809_ip = 213;
                    continue _fun71809;
                case 142:
                    var10 = var1.match;
                    var3 = new Array(0);
                    var9 = 0;
                    var11 = var3;
                    var4 = arraySpread(var11, var10, var9);
                    var2.match = var3;
                    var3 = var1.start;
                    var2.start = var3;
                    var3 = var1.type;
                    var2.type = var3;
                    var4 = var1._data;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun71809_ip = 213;
                        continue _fun71809
                    }
                case 201:
                    var1 = var1._data;
                    var2._data = var1;
                case 213:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'end';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.start;
            var0 = var0.length;
            var0 = var1 + var0;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'length';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.match;
            var0 = 0;
            var0 = var1[var0];
            var0 = var0.length;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'valueOf';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.match;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getFullMatch';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.match;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getMatch';
        var0.key = var5;
        var5 = function() {
            _fun71814: for (var _fun71814_ip = 0;;) switch (_fun71814_ip) {
                case 0:
                    var1 = arguments[0];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun71814_ip = 11;
                        continue _fun71814
                    }
                case 9:
                    var1 = 0;
                case 11:
                    var0 = this;
                    var0 = var0.match;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setData';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun71815: for (var _fun71815_ip = 0;;) switch (_fun71815_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._data;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun71815_ip = 49;
                        continue _fun71815
                    }
                case 15:
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
                    var0._data = var1;
                case 49:
                    var3 = var0._data;
                    var2 = var3.set;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getData';
        var0.key = var5;
        var4 = function arg0() {
            _fun71816: for (var _fun71816_ip = 0;;) switch (_fun71816_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._data;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun71816_ip = 19;
                        continue _fun71816
                    }
                case 15:
                    var1 = undefined;
                    return var1;
                case 19:
                    var2 = var0._data;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot3 = var1;
    var4 = 'NON_TOKEN';
    var3.NON_TOKEN_TYPE = var4;
    var3.Token = var1;
    var5 = 2;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/QueryTokenizer.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var3;
    var2.NON_TOKEN_TYPE = var4;
    var2.QueryTokenizer = var3;
    var2.Token = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);