// modules/phone/native/CountryCallingCodeSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun60933: for (var _fun60933_ip = 0;;) switch (_fun60933_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun60933_ip = 46;
                    continue _fun60933
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun60933_ip = 55;
                    continue _fun60933
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun60933_ip = 343;
                    continue _fun60933
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun60933_ip = 323;
                    continue _fun60933
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun60933_ip = 283;
                    continue _fun60933
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun60933_ip = 270;
                    continue _fun60933
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
                    _fun60933_ip = 163;
                    continue _fun60933
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun60933_ip = 179;
                    continue _fun60933
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun60933_ip = 249;
                    continue _fun60933
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun60933_ip = 249;
                    continue _fun60933
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun60933_ip = 234;
                    continue _fun60933
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun60933_ip = 247;
                    continue _fun60933
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun60933_ip = 265;
                continue _fun60933;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun60933_ip = 283;
                continue _fun60933;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun60933_ip = 323;
                    continue _fun60933
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
                    _fun60933_ip = 330;
                    continue _fun60933
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun60934: for (var _fun60934_ip = 0;;) switch (_fun60934_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun60934_ip = 56;
                                continue _fun60934
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
                            _fun60934_ip = 67;
                            continue _fun60934;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun60935: for (var _fun60935_ip = 0;;) switch (_fun60935_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun60935_ip = 23;
                    continue _fun60935
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun60935_ip = 33;
                    continue _fun60935
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
                    _fun60935_ip = 70;
                    continue _fun60935
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun60935_ip = 55;
                    continue _fun60935
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getI18NCountryName;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingVertical = var12;
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingBottom = var9;
    var3.searchFieldContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/phone/native/CountryCallingCodeSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60936: for (var _fun60936_ip = 0;;) switch (_fun60936_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.onCountrySelected;
                var _closure2_slot0 = var10;
                var13 = var1.onClose;
                var _closure2_slot1 = var13;
                var1 = _closure1_slot9;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var12 = '';
                var5 = var1.bind(var4)(var12);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var6 = 0;
                var7 = var2[var6];
                var _closure2_slot2 = var7;
                var1 = 1;
                var16 = var2[var1];
                var5 = var4.useMemo;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.flatMap;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var4 = var1.alpha2;
                        var _closure4_slot0 = var4;
                        var2 = var1.phoneCountryCodes;
                        var1 = var1.name;
                        var _closure4_slot1 = var1;
                        var1 = arg1;
                        var _closure4_slot2 = var1;
                        var3 = _closure1_slot6;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4);
                        var _closure4_slot3 = var1;
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var3 = arg0;
                            var0 = {};
                            var1 = _closure4_slot3;
                            var0.translatedName = var1;
                            var6 = _closure4_slot2;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var4 = '';
                            var1 = '-';
                            var1 = var5.bind(var4)(var6, var1, var3);
                            var0.key = var1;
                            var1 = {};
                            var1.code = var3;
                            var3 = _closure4_slot0;
                            var1.alpha2 = var3;
                            var2 = _closure4_slot1;
                            var1.name = var2;
                            var0.country = var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var4)(var2, var1);
                var _closure2_slot3 = var1;
                var5 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 8;
                var2 = var17[var2];
                var2 = var5.bind(var3)(var2);
                var8 = var2.bind(var3)();
                var5 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var7;
                var1 = function() { // Environment: var0
                    _fun60940: for (var _fun60940_ip = 0;;) switch (_fun60940_ip) {
                        case 0:
                            var1 = new Array(0);
                            var2 = _closure1_slot10;
                            var0 = _closure2_slot3;
                            var7 = undefined;
                            var6 = var2.bind(var7)(var0);
                            var2 = var6.bind(var7)();
                            var0 = var2.done;
                            var5 = 9;
                            var4 = '';
                            var3 = 0;
                            if (var0) {
                                _fun60940_ip = 294;
                                continue _fun60940
                            }
                        case 49:
                            var10 = var2.value;
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun60940_ip = 146;
                                continue _fun60940
                            }
                        case 70:
                            var11 = var10.country;
                            var13 = var11.code;
                            var12 = var13.replace;
                            var11 = /\+|\s/g;
                            var13 = var12.bind(var13)(var11, var4);
                            var12 = var13.startsWith;
                            var15 = _closure2_slot2;
                            var14 = var15.replace;
                            var11 = /\+|\s/g;
                            var11 = var14.bind(var15)(var11, var4);
                            var0 = var12.bind(var13)(var11);
                        case 146:
                            if (var0) {
                                _fun60940_ip = 207;
                                continue _fun60940
                            }
                        case 149:
                            var12 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var11 = var11[var5];
                            var13 = var12.bind(var7)(var11);
                            var12 = _closure2_slot2;
                            var11 = var12.toLowerCase;
                            var12 = var11.bind(var12)();
                            var11 = var10.country;
                            var14 = var11.name;
                            var11 = var14.toLowerCase;
                            var11 = var11.bind(var14)();
                            var0 = var13.bind(var7)(var12, var11);
                        case 207:
                            if (var0) {
                                _fun60940_ip = 263;
                                continue _fun60940
                            }
                        case 210:
                            var12 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var11 = var11[var5];
                            var13 = var12.bind(var7)(var11);
                            var12 = _closure2_slot2;
                            var11 = var12.toLowerCase;
                            var12 = var11.bind(var12)();
                            var14 = var10.translatedName;
                            var11 = var14.toLowerCase;
                            var11 = var11.bind(var14)();
                            var0 = var13.bind(var7)(var12, var11);
                        case 263:
                            if (!var0) {
                                _fun60940_ip = 276;
                                continue _fun60940
                            }
                        case 266:
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var10);
                        case 276:
                            var10 = var6.bind(var7)();
                            var0 = var10.done;
                            var2 = var10;
                            if (!var0) {
                                _fun60940_ip = 49;
                                continue _fun60940
                            }
                        case 294:
                            var0 = {};
                            var0.rows = var1;
                            var2 = var1.length;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.sections = var1;
                            return var0;
                    }
                };
                var1 = var5.bind(var4)(var1, var2);
                var5 = var1.rows;
                var _closure2_slot4 = var5;
                var11 = var1.sections;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var13;
                var1[1] = var10;
                var1[2] = var5;
                var0 = function(arg0, arg1) { // Environment: var0
                    var10 = arg1;
                    var9 = _closure2_slot4;
                    var0 = var9[var10];
                    var5 = var0.translatedName;
                    var7 = var0.country;
                    var _closure3_slot0 = var7;
                    var3 = _closure1_slot7;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var6.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var11 = 0;
                    var11 = var11 === var10;
                    var0.start = var11;
                    var11 = var9.length;
                    var9 = 1;
                    var9 = var11 - var9;
                    var9 = var10 === var9;
                    var0.end = var9;
                    var0.label = var5;
                    var5 = 11;
                    var5 = var8[var5];
                    var5 = var6.bind(var2)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var8 = 'text-md/semibold';
                    var5.variant = var8;
                    var7 = var7.code;
                    var5.children = var7;
                    var5 = var3.bind(var2)(var6, var5);
                    var0.trailing = var5;
                    var4 = function() {
                        _fun60942: for (var _fun60942_ip = 0;;) switch (_fun60942_ip) {
                            case 0:
                                var3 = _closure2_slot0;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure2_slot1;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun60942_ip = 39;
                                    continue _fun60942
                                }
                            case 31:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)();
                            case 39:
                                return var0;
                        }
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var13 = _closure1_slot7;
                var4 = {};
                var14 = var14.searchFieldContainer;
                var4.style = var14;
                var15 = _closure1_slot0;
                var14 = 12;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.SearchField;
                var14 = {};
                var17 = 'md';
                var14.size = var17;
                var14.onChange = var16;
                var14 = var13.bind(var3)(var15, var14);
                var4.children = var14;
                var13 = var13.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var13;
                if (!(var12 !== var7)) {
                    _fun60936_ip = 319;
                    continue _fun60936
                }
            case 310:
                var5 = var5.length;
                if (!(var6 !== var5)) {
                    _fun60936_ip = 386;
                    continue _fun60936
                }
            case 319:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 16;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.sections = var11;
                var5.renderItem = var10;
                var5.itemSize = var8;
                var8 = 'windowSize';
                var5.estimatedListSize = var8;
                var8 = 'always';
                var5.keyboardShouldPersistTaps = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun60936_ip = 491;
                continue _fun60936;
            case 386:
                var8 = _closure1_slot7;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 13;
                var6 = var13[var6];
                var7 = var11.bind(var3)(var6);
                var6 = {};
                var10 = 14;
                var10 = var13[var10];
                var10 = var11.bind(var3)(var10);
                var6.source = var10;
                var12 = _closure1_slot0;
                var9 = 15;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.wEHnxW;
                var9 = var10.bind(var11)(var9);
                var6.text = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 491:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3924, 33, 1297, 671, 3925, 7521, 5564, 4861, 3900, 6971, 7522, 7523, 1234, 7524, 2]);