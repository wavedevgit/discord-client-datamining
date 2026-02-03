// modules/collectibles/hooks/useProductDescription.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun87599: for (var _fun87599_ip = 0;;) switch (_fun87599_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87599_ip = 46;
                    continue _fun87599
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87599_ip = 55;
                    continue _fun87599
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87599_ip = 345;
                    continue _fun87599
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87599_ip = 323;
                    continue _fun87599
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87599_ip = 283;
                    continue _fun87599
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87599_ip = 270;
                    continue _fun87599
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
                    _fun87599_ip = 163;
                    continue _fun87599
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87599_ip = 179;
                    continue _fun87599
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87599_ip = 249;
                    continue _fun87599
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87599_ip = 249;
                    continue _fun87599
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87599_ip = 234;
                    continue _fun87599
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87599_ip = 247;
                    continue _fun87599
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87599_ip = 265;
                continue _fun87599;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87599_ip = 283;
                continue _fun87599;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87599_ip = 323;
                    continue _fun87599
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
                    _fun87599_ip = 330;
                    continue _fun87599
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87600: for (var _fun87600_ip = 0;;) switch (_fun87600_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87600_ip = 56;
                                continue _fun87600
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
                            _fun87600_ip = 67;
                            continue _fun87600;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun87601: for (var _fun87601_ip = 0;;) switch (_fun87601_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87601_ip = 23;
                    continue _fun87601
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87601_ip = 33;
                    continue _fun87601
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
                    _fun87601_ip = 70;
                    continue _fun87601
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87601_ip = 55;
                    continue _fun87601
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = function arg0() {
        _fun87602: for (var _fun87602_ip = 0;;) switch (_fun87602_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun87602_ip = 14;
                    continue _fun87602
                }
            case 12:
                var1 = false;
            case 14:
                if (var1) {
                    _fun87602_ip = 656;
                    continue _fun87602
                }
            case 23:
                var3 = new Array(0);
                var2 = _closure1_slot4;
                var1 = var5.bundledProducts;
                var6 = null;
                if (!(var6 == var1)) {
                    _fun87602_ip = 47;
                    continue _fun87602
                }
            case 43:
                var1 = new Array(0);
            case 47:
                var11 = var2.bind(var4)(var1);
                var6 = var11.bind(var4)();
                var2 = var6.done;
                var8 = 1;
                var9 = 2;
                var7 = var6;
                var6 = false;
                var1 = false;
                if (var2) {
                    _fun87602_ip = 471;
                    continue _fun87602
                }
            case 80:
                var17 = var7.value;
                var13 = var17.type;
                var12 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var2 = var12.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.AVATAR_DECORATION;
                if (!(var2 !== var13)) {
                    _fun87602_ip = 367;
                    continue _fun87602
                }
            case 126:
                var12 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var2 = var12.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.PROFILE_EFFECT;
                if (!(var2 !== var13)) {
                    _fun87602_ip = 285;
                    continue _fun87602
                }
            case 162:
                var12 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var2 = var12.bind(var4)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.NAMEPLATE;
                var12 = var6;
                if (!(var2 === var13)) {
                    _fun87602_ip = 447;
                    continue _fun87602
                }
            case 201:
                var13 = var3.push;
                var14 = _closure1_slot0;
                var2 = _closure1_slot1;
                var15 = var2[var8];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var2 = var2[var8];
                var2 = var14.bind(var4)(var2);
                var2 = var2.t;
                var14 = var2["2keXky"];
                var2 = {};
                var18 = var17.name;
                var2.itemName = var18;
                var2 = var15.bind(var16)(var14, var2);
                var2 = var13.bind(var3)(var2);
                var12 = true;
                _fun87602_ip = 447;
                continue _fun87602;
            case 285:
                var13 = var3.push;
                var14 = _closure1_slot0;
                var2 = _closure1_slot1;
                var15 = var2[var8];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var2 = var2[var8];
                var2 = var14.bind(var4)(var2);
                var2 = var2.t;
                var14 = var2["3Y8q7a"];
                var2 = {};
                var18 = var17.name;
                var2.itemName = var18;
                var2 = var15.bind(var16)(var14, var2);
                var2 = var13.bind(var3)(var2);
                var12 = var6;
                _fun87602_ip = 447;
                continue _fun87602;
            case 367:
                var13 = var3.push;
                var14 = _closure1_slot0;
                var2 = _closure1_slot1;
                var15 = var2[var8];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var2 = var2[var8];
                var2 = var14.bind(var4)(var2);
                var2 = var2.t;
                var14 = var2.Ntv9Jt;
                var2 = {};
                var17 = var17.name;
                var2.itemName = var17;
                var2 = var15.bind(var16)(var14, var2);
                var2 = var13.bind(var3)(var2);
                var12 = var6;
            case 447:
                var13 = var11.bind(var4)();
                var2 = var13.done;
                var6 = var12;
                var7 = var13;
                var1 = var6;
                if (!var2) {
                    _fun87602_ip = 80;
                    continue _fun87602
                }
            case 471:
                var2 = var3.join;
                if (var1) {
                    _fun87602_ip = 552;
                    continue _fun87602
                }
            case 479:
                var1 = ' & ';
                var10 = var2.bind(var3)(var1);
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = var1[var8];
                var7 = var6.bind(var4)(var7);
                var9 = var7.intl;
                var7 = var9.formatToPlainString;
                var1 = var1[var8];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var6 = var1.Ofrqj6;
                var1 = {};
                var1.joinedItems = var10;
                var1 = var7.bind(var9)(var6, var1);
                return var1;
            case 552:
                var1 = ', ';
                var6 = var2.bind(var3)(var1);
                var3 = var6.replace;
                var2 = /, ([^,]*)$/;
                var1 = ' & $1';
                var7 = var3.bind(var6)(var2, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var8];
                var3 = var2.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var1[var8];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.Ofrqj6;
                var1 = {};
                var1.joinedItems = var7;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 656:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 1;
                var2 = var6[var0];
                var2 = var1.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.t;
                var1 = var0["/0Yndu"];
                var0 = {};
                var5 = var5.bundledProducts;
                var6 = null;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun87602_ip = 732;
                    continue _fun87602
                }
            case 727:
                var4 = var5.length;
            case 732:
                var0.num = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useProductDescription.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun87603: for (var _fun87603_ip = 0;;) switch (_fun87603_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var4 = arguments[2];
                var _closure2_slot0 = var6;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun87603_ip = 23;
                    continue _fun87603
                }
            case 21:
                var5 = false;
            case 23:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot2;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun87604: for (var _fun87604_ip = 0;;) switch (_fun87604_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun87604_ip = 558;
                                continue _fun87604
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun87604_ip = 59;
                                continue _fun87604
                            }
                        case 24:
                            var1 = _closure2_slot0;
                            var1 = var1.summary;
                            if (!(var2 != var1)) {
                                _fun87604_ip = 59;
                                continue _fun87604
                            }
                        case 38:
                            var1 = _closure2_slot0;
                            var3 = var1.summary;
                            var1 = '';
                            if (!(var1 === var3)) {
                                _fun87604_ip = 430;
                                continue _fun87604
                            }
                        case 59:
                            var1 = _closure2_slot0;
                            var1 = var2 == var1;
                            var5 = undefined;
                            var3 = undefined;
                            if (var1) {
                                _fun87604_ip = 83;
                                continue _fun87604
                            }
                        case 74:
                            var1 = _closure2_slot0;
                            var3 = var1.type;
                        case 83:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var6 = 2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.AVATAR_DECORATION;
                            if (!(var2 !== var3)) {
                                _fun87604_ip = 371;
                                continue _fun87604
                            }
                        case 125:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.PROFILE_EFFECT;
                            if (!(var2 !== var3)) {
                                _fun87604_ip = 312;
                                continue _fun87604
                            }
                        case 161:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.NAMEPLATE;
                            if (!(var2 !== var3)) {
                                _fun87604_ip = 253;
                                continue _fun87604
                            }
                        case 194:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.BUNDLE;
                            if (!(var2 !== var3)) {
                                _fun87604_ip = 233;
                                continue _fun87604
                            }
                        case 227:
                            var2 = '';
                            return var2;
                        case 233:
                            var4 = _closure1_slot3;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var5)(var3, var2);
                            return var2;
                        case 253:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 1;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.ik37EZ;
                            var2 = var3.bind(var4)(var2);
                            return var2;
                        case 312:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 1;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.VhJL72;
                            var2 = var3.bind(var4)(var2);
                            return var2;
                        case 371:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 1;
                            var2 = var6[var1];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1["3lv7q2"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 430:
                            var1 = _closure2_slot0;
                            var3 = var1.type;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 2;
                            var2 = var5[var2];
                            var5 = undefined;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.BUNDLE;
                            if (!(var3 === var2)) {
                                _fun87604_ip = 509;
                                continue _fun87604
                            }
                        case 480:
                            var2 = _closure2_slot0;
                            var3 = var2.summary;
                            var2 = var3.includes;
                            var4 = '{joinedItems}';
                            var2 = var2.bind(var3)(var4);
                            if (var2) {
                                _fun87604_ip = 521;
                                continue _fun87604
                            }
                        case 509:
                            var2 = _closure2_slot0;
                            var2 = var2.summary;
                            return var2;
                        case 521:
                            var3 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var3 = var3.bind(var5)(var1, var2);
                            var2 = var1.summary;
                            var1 = var2.replace;
                            var1 = var1.bind(var2)(var4, var3);
                            return var1;
                        case 558:
                            var2 = _closure2_slot2;
                            var1 = 3;
                            if (!(var1 !== var2)) {
                                _fun87604_ip = 711;
                                continue _fun87604
                            }
                        case 572:
                            var1 = _closure2_slot2;
                            var0 = 7;
                            if (!(var0 !== var1)) {
                                _fun87604_ip = 647;
                                continue _fun87604
                            }
                        case 583:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 1;
                            var1 = var5[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0["o+VpXZ"];
                            var0 = var1.bind(var2)(var0);
                            _fun87604_ip = 709;
                            continue _fun87604;
                        case 647:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 1;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.yPxJA2;
                            var0 = var2.bind(var3)(var1);
                        case 709:
                            _fun87604_ip = 773;
                            continue _fun87604;
                        case 711:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 1;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.QUjmjp;
                            var0 = var2.bind(var3)(var1);
                        case 773:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useProductDescription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1234, 3493, 2]);