// ../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun32835: for (var _fun32835_ip = 0;;) switch (_fun32835_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun32835_ip = 46;
                    continue _fun32835
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun32835_ip = 55;
                    continue _fun32835
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun32835_ip = 343;
                    continue _fun32835
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun32835_ip = 323;
                    continue _fun32835
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun32835_ip = 283;
                    continue _fun32835
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun32835_ip = 270;
                    continue _fun32835
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
                    _fun32835_ip = 163;
                    continue _fun32835
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun32835_ip = 179;
                    continue _fun32835
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun32835_ip = 249;
                    continue _fun32835
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun32835_ip = 249;
                    continue _fun32835
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun32835_ip = 234;
                    continue _fun32835
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun32835_ip = 247;
                    continue _fun32835
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun32835_ip = 265;
                continue _fun32835;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun32835_ip = 283;
                continue _fun32835;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun32835_ip = 323;
                    continue _fun32835
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
                    _fun32835_ip = 330;
                    continue _fun32835
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun32836: for (var _fun32836_ip = 0;;) switch (_fun32836_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun32836_ip = 56;
                                continue _fun32836
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
                            _fun32836_ip = 67;
                            continue _fun32836;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun32837: for (var _fun32837_ip = 0;;) switch (_fun32837_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun32837_ip = 23;
                    continue _fun32837
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun32837_ip = 33;
                    continue _fun32837
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
                    _fun32837_ip = 70;
                    continue _fun32837
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun32837_ip = 55;
                    continue _fun32837
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.defaultVideoQualityOptions;
    var _closure1_slot2 = var6;
    var6 = var3.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot3 = var6;
    var6 = var3.VIDEO_QUALITY_FRAMERATE_MUTED_2;
    var _closure1_slot4 = var6;
    var3 = var3.VIDEO_QUALITY_FRAMERATE_MUTED;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            _fun32839: for (var _fun32839_ip = 0;;) switch (_fun32839_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun32839_ip = 19;
                        continue _fun32839
                    }
                case 12:
                    var3 = _closure1_slot2;
                case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var3 = var3.videoBudget;
                    var4 = var3.width;
                    var3 = var3.height;
                    var5 = 0;
                    if (!(!(var4 <= var5))) {
                        _fun32839_ip = 131;
                        continue _fun32839
                    }
                case 61:
                    if (!(!(var3 <= var5))) {
                        _fun32839_ip = 131;
                        continue _fun32839
                    }
                case 65:
                    var3 = var4 * var3;
                    var2.pixelBudget = var3;
                    var4 = _closure2_slot0;
                    var3 = var4.calculateLadder;
                    var1 = var2.pixelBudget;
                    var1 = var3.bind(var4)(var1);
                    var2.ladder = var1;
                    var3 = var4.calculateOrderedLadder;
                    var1 = var2.ladder;
                    var1 = var3.bind(var4)(var1);
                    var2.orderedLadder = var1;
                    return var0;
                case 131:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'Invalid argument';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var1 = 'getMaxSinkValue';
        var0.key = var1;
        var1 = function arg0() {
            _fun32840: for (var _fun32840_ip = 0;;) switch (_fun32840_ip) {
                case 0:
                    var1 = arg0;
                    var9 = arguments[1];
                    var8 = this;
                    var7 = undefined;
                    if (!(var9 === var7)) {
                        _fun32840_ip = 17;
                        continue _fun32840
                    }
                case 15:
                    var9 = 0;
                case 17:
                    var6 = 0;
                    if (!(!(var1 < var6))) {
                        _fun32840_ip = 149;
                        continue _fun32840
                    }
                case 26:
                    var0 = var8.orderedLadder;
                    var0 = var0[var6];
                    var0 = var0.wantValue;
                    var3 = _closure1_slot6;
                    var2 = var8.orderedLadder;
                    var5 = var3.bind(var7)(var2);
                    var3 = var5.bind(var7)();
                    var2 = var3.done;
                    var4 = var3;
                    var3 = var0;
                    var0 = var3;
                    if (var2) {
                        _fun32840_ip = 147;
                        continue _fun32840
                    }
                case 81:
                    var10 = var4.value;
                    var2 = var10.pixelCount;
                    var10 = var10.wantValue;
                    if (!(var9 > var6)) {
                        _fun32840_ip = 109;
                        continue _fun32840
                    }
                case 102:
                    var0 = var10;
                    if (!(!(var9 < var2))) {
                        _fun32840_ip = 147;
                        continue _fun32840
                    }
                case 109:
                    var11 = var2 * var1;
                    var2 = var8.pixelBudget;
                    var0 = var3;
                    if (!(!(var11 > var2))) {
                        _fun32840_ip = 147;
                        continue _fun32840
                    }
                case 126:
                    var11 = var5.bind(var7)();
                    var2 = var11.done;
                    var4 = var11;
                    var3 = var10;
                    var0 = var3;
                    if (!var2) {
                        _fun32840_ip = 81;
                        continue _fun32840
                    }
                case 147:
                    return var0;
                case 149:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = 'getMaxSinkValue: Requested ';
                    var12 = var0 + var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var1 = 'getResolution';
        var0.key = var1;
        var1 = function arg0() {
            _fun32841: for (var _fun32841_ip = 0;;) switch (_fun32841_ip) {
                case 0:
                    var8 = arg0;
                    var2 = this;
                    var1 = _closure1_slot6;
                    var0 = var2.orderedLadder;
                    var7 = undefined;
                    var6 = var1.bind(var7)(var0);
                    var1 = var6.bind(var7)();
                    var0 = var1.done;
                    var3 = null;
                    var5 = var1;
                    var4 = null;
                    var1 = null;
                    if (var0) {
                        _fun32841_ip = 86;
                        continue _fun32841
                    }
                case 47:
                    var9 = var5.value;
                    var0 = var9.wantValue;
                    var1 = var4;
                    if (!(var8 >= var0)) {
                        _fun32841_ip = 86;
                        continue _fun32841
                    }
                case 65:
                    var10 = var6.bind(var7)();
                    var0 = var10.done;
                    var5 = var10;
                    var4 = var9;
                    var1 = var4;
                    if (!var0) {
                        _fun32841_ip = 47;
                        continue _fun32841
                    }
                case 86:
                    var0 = {};
                    if (!(var3 == var1)) {
                        _fun32841_ip = 104;
                        continue _fun32841
                    }
                case 92:
                    var3 = var2.orderedLadder;
                    var2 = 0;
                    var1 = var3[var2];
                case 104:
                    var2 = var1.width;
                    var0.width = var2;
                    var2 = var1.height;
                    var0.height = var2;
                    var2 = var1.budgetPortion;
                    var0.budgetPortion = var2;
                    var2 = var1.mutedFramerate;
                    var0.mutedFramerate = var2;
                    var1 = var1.framerate;
                    var0.framerate = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'calculateLadder';
        var0.key = var1;
        var1 = function arg0() {
            _fun32842: for (var _fun32842_ip = 0;;) switch (_fun32842_ip) {
                case 0:
                    var12 = arg0;
                    var0 = global;
                    var2 = var0.Set;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var27 = [0, 4, 8, 10];
                    var28 = var1;
                    var0 = new var28[var2](var27, var26);
                    var4 = var0 instanceof Object ? var0 : var1;
                    var11 = new Array(0);
                    var10 = 1;
                    var3 = 4096;
                    var9 = 0;
                    var2 = 16;
                    var1 = 9;
                    var0 = var10;
                case 65:
                    var5 = var2 * var0;
                    var8 = var5 / var1;
                    var6 = var4.has;
                    var5 = var8 % var2;
                    var5 = var6.bind(var4)(var5);
                    if (!var5) {
                        _fun32842_ip = 150;
                        continue _fun32842
                    }
                case 90:
                    var6 = var4.has;
                    var5 = var0 % var2;
                    var5 = var6.bind(var4)(var5);
                    if (!var5) {
                        _fun32842_ip = 150;
                        continue _fun32842
                    }
                case 107:
                    var7 = var8 * var0;
                    var6 = var11.push;
                    var5 = {};
                    var5.pixelCount = var7;
                    var5.width = var8;
                    var5.height = var0;
                    var7 = var7 / var12;
                    var5.budgetPortion = var7;
                    var5.wantValue = var9;
                    var5 = var6.bind(var11)(var5);
                case 150:
                    var0 = var0 + 1;
                    if (var0 < var3) {
                        _fun32842_ip = 65;
                        continue _fun32842
                    }
                case 157:
                    var0 = {};
                    var8 = 100;
                    var7 = undefined;
                    var6 = 25;
                    var3 = 10;
                    var2 = 0;
                    var1 = undefined;
                case 180:
                    var13 = _closure1_slot6;
                    var21 = var13.bind(var7)(var11);
                    var14 = var21.bind(var7)();
                    var13 = var14.done;
                    var20 = var14;
                    var19 = 0;
                    var16 = 0;
                    var14 = 0;
                    var15 = 0;
                    var18 = 0;
                    var17 = 0;
                    if (var13) {
                        _fun32842_ip = 290;
                        continue _fun32842
                    }
                case 216:
                    var22 = var20.value;
                    var13 = var22.pixelCount;
                    var13 = var13 * var10;
                    var15 = var19;
                    var18 = var16;
                    var17 = var14;
                    var1 = var22;
                    if (!(!(var13 > var12))) {
                        _fun32842_ip = 290;
                        continue _fun32842
                    }
                case 247:
                    var19 = var22.width;
                    var16 = var22.height;
                    var14 = var22.budgetPortion;
                    var26 = var21.bind(var7)();
                    var13 = var26.done;
                    var20 = var26;
                    var15 = var19;
                    var18 = var16;
                    var17 = var14;
                    var1 = var22;
                    if (!var13) {
                        _fun32842_ip = 216;
                        continue _fun32842
                    }
                case 290:
                    var13 = var8;
                    if (!(var2 !== var15)) {
                        _fun32842_ip = 354;
                        continue _fun32842
                    }
                case 297:
                    var16 = _closure2_slot0;
                    var14 = var16.getMutedFramerate;
                    var16 = var14.bind(var16)(var8);
                    var14 = {};
                    var14.width = var15;
                    var14.height = var18;
                    var14.budgetPortion = var17;
                    var14.mutedFramerate = var16;
                    var16 = _closure1_slot3;
                    var14.framerate = var16;
                    var0[var8] = var14;
                    var13 = var8 - var3;
                    var2 = var15;
                case 354:
                    var10 = var10 + 1;
                    var8 = var13;
                    if (var10 <= var6) {
                        _fun32842_ip = 180;
                        continue _fun32842
                    }
                case 367:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var6 = 'getMutedFramerate';
        var0.key = var6;
        var6 = function arg0() {
            _fun32843: for (var _fun32843_ip = 0;;) switch (_fun32843_ip) {
                case 0:
                    var1 = arg0;
                    var0 = 20;
                    if (!(!(var1 <= var0))) {
                        _fun32843_ip = 19;
                        continue _fun32843
                    }
                case 10:
                    var0 = _closure1_slot5;
                    _fun32843_ip = 26;
                    continue _fun32843;
                case 19:
                    var0 = _closure1_slot4;
                case 26:
                    return var0;
            }
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'calculateOrderedLadder';
        var0.key = var6;
        var5 = function arg0() {
            _fun32844: for (var _fun32844_ip = 0;;) switch (_fun32844_ip) {
                case 0:
                    var6 = arg0;
                    var0 = new Array(0);
                    var2 = _closure1_slot6;
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var5 = var3.bind(var4)(var6);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        var0 = global;
                        var2 = var0.Number;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.sort;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = 0;
                    if (var1) {
                        _fun32844_ip = 160;
                        continue _fun32844
                    }
                case 86:
                    var9 = var2.value;
                    if (!(var3 !== var9)) {
                        _fun32844_ip = 145;
                        continue _fun32844
                    }
                case 95:
                    var8 = var6[var9];
                    var7 = var0.push;
                    var1 = {};
                    var11 = var8.width;
                    var10 = var8.height;
                    var10 = var11 * var10;
                    var1.pixelCount = var10;
                    var1.wantValue = var9;
                    var13 = var1;
                    var12 = var8;
                    var8 = copyDataProperties(var13, var12);
                    var1 = var7.bind(var0)(var1);
                case 145:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun32844_ip = 86;
                        continue _fun32844
                    }
                case 160:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MediaSinkWantsLadder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3510, 2]);