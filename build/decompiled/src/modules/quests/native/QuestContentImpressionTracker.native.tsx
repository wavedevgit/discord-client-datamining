// modules/quests/native/QuestContentImpressionTracker.native.tsx
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
        _fun78472: for (var _fun78472_ip = 0;;) switch (_fun78472_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78472_ip = 46;
                    continue _fun78472
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun78472_ip = 55;
                    continue _fun78472
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun78472_ip = 345;
                    continue _fun78472
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78472_ip = 323;
                    continue _fun78472
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78472_ip = 283;
                    continue _fun78472
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78472_ip = 270;
                    continue _fun78472
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
                    _fun78472_ip = 163;
                    continue _fun78472
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun78472_ip = 179;
                    continue _fun78472
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78472_ip = 249;
                    continue _fun78472
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78472_ip = 249;
                    continue _fun78472
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78472_ip = 234;
                    continue _fun78472
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78472_ip = 247;
                    continue _fun78472
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun78472_ip = 265;
                continue _fun78472;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun78472_ip = 283;
                continue _fun78472;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun78472_ip = 323;
                    continue _fun78472
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
                    _fun78472_ip = 330;
                    continue _fun78472
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78473: for (var _fun78473_ip = 0;;) switch (_fun78473_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78473_ip = 56;
                                continue _fun78473
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
                            _fun78473_ip = 67;
                            continue _fun78473;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun78474: for (var _fun78474_ip = 0;;) switch (_fun78474_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78474_ip = 23;
                    continue _fun78474
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78474_ip = 33;
                    continue _fun78474
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
                    _fun78474_ip = 70;
                    continue _fun78474
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78474_ip = 55;
                    continue _fun78474
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun78475: for (var _fun78475_ip = 0;;) switch (_fun78475_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.adContentIds;
                var _closure2_slot0 = var10;
                var8 = var1.visibilityRef;
                var _closure2_slot1 = var8;
                var2 = var1.overrideVisibility;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var4 = 0;
                var7 = var3.bind(var5)(var4);
                var6 = _closure1_slot3;
                var3 = undefined;
                var5 = 2;
                var6 = var6.bind(var3)(var7, var5);
                var4 = var6[var4];
                var5 = 1;
                var9 = var6[var5];
                var _closure2_slot2 = var9;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var9;
                var5[2] = var8;
                var0 = function() { // Environment: var0
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.adContentIds = var1;
                    var1 = _closure2_slot2;
                    var2.setVisibilityPercentage = var1;
                    var0 = _closure2_slot1;
                    var2.visibilityRef = var0;
                    var1 = function arg0() {
                        _fun78477: for (var _fun78477_ip = 0;;) switch (_fun78477_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.adContentIds;
                                var3 = var2.setVisibilityPercentage;
                                var _closure4_slot0 = var3;
                                var3 = var2.visibilityRef;
                                var _closure4_slot1 = var3;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun78477_ip = 95;
                                    continue _fun78477
                                }
                            case 37:
                                var4 = function arg0() {
                                    var2 = arg0;
                                    var _closure5_slot0 = var2;
                                    var4 = _closure4_slot1;
                                    var0 = var4.current;
                                    var1 = var0.children;
                                    var0 = {};
                                    var4 = var4.current;
                                    var4 = var4.children;
                                    var5 = var4[var2];
                                    var6 = var0;
                                    var4 = copyDataProperties(var6, var5);
                                    var4 = function() {
                                        var2 = _closure4_slot0;
                                        var3 = _closure1_slot9;
                                        var1 = {};
                                        var0 = _closure4_slot1;
                                        var1.visibilityRef = var0;
                                        var0 = _closure5_slot0;
                                        var1.entityId = var0;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var3 = 'calculateVisibility';
                                    var0[var3] = var4;
                                    var1[var2] = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = _closure1_slot10;
                                var3 = undefined;
                                var2 = var0.bind(var3)(var1);
                                var1 = var2.bind(var3)();
                                var0 = var1.done;
                                if (var0) {
                                    _fun78477_ip = 95;
                                    continue _fun78477
                                }
                            case 70:
                                var0 = var1.value;
                                var0 = var4.bind(var3)(var0);
                                var5 = var2.bind(var3)();
                                var0 = var5.done;
                                var1 = var5;
                                if (!var0) {
                                    _fun78477_ip = 70;
                                    continue _fun78477
                                }
                            case 95:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun78475_ip = 132;
                    continue _fun78475
                }
            case 124:
                var0 = _closure1_slot6;
                var2 = var4 >= var0;
            case 132:
                var0 = {};
                var0.visible = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                var1 = var2 !== var1;
                var0.visibleChanged = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var8 = var5[var3];
    var6 = arg3;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AppStates;
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createElement;
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun78480: for (var _fun78480_ip = 0;;) switch (_fun78480_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.visibilityRef;
                var4 = var0.entityId;
                var3 = null;
                var2 = var3 == var1;
                var0 = undefined;
                if (var2) {
                    _fun78480_ip = 58;
                    continue _fun78480
                }
            case 26:
                var2 = var1.current;
                var5 = var3 == var2;
                var0 = undefined;
                if (var5) {
                    _fun78480_ip = 58;
                    continue _fun78480
                }
            case 40:
                var2 = var2.children;
                var5 = var3 == var2;
                var0 = undefined;
                if (var5) {
                    _fun78480_ip = 58;
                    continue _fun78480
                }
            case 54:
                var0 = var2[var4];
            case 58:
                var4 = var3 == var0;
                var2 = undefined;
                if (var4) {
                    _fun78480_ip = 73;
                    continue _fun78480
                }
            case 67:
                var2 = var0.layout;
            case 73:
                if (!(var3 != var2)) {
                    _fun78480_ip = 392;
                    continue _fun78480
                }
            case 80:
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun78480_ip = 114;
                    continue _fun78480
                }
            case 89:
                var4 = var1.current;
                var4 = var4.parent;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun78480_ip = 114;
                    continue _fun78480
                }
            case 108:
                var2 = var4.layout;
            case 114:
                if (!(var3 != var2)) {
                    _fun78480_ip = 392;
                    continue _fun78480
                }
            case 121:
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun78480_ip = 155;
                    continue _fun78480
                }
            case 130:
                var4 = var1.current;
                var4 = var4.parent;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun78480_ip = 155;
                    continue _fun78480
                }
            case 149:
                var2 = var4.scrollY;
            case 155:
                if (!(var3 != var2)) {
                    _fun78480_ip = 392;
                    continue _fun78480
                }
            case 162:
                var2 = var0.layout;
                var2 = var2.y;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = var0.layout;
                var3 = var2.y;
                var2 = var0.layout;
                var2 = var2.height;
                var2 = var3 + var2;
                var4[1] = var2;
                var2 = var1.current;
                var2 = var2.parent;
                var3 = var2.scrollY;
                var2 = new Array(2);
                var2[0] = var3;
                var3 = var1.current;
                var3 = var3.parent;
                var3 = var3.scrollY;
                var1 = var1.current;
                var1 = var1.parent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var3 + var1;
                var2[1] = var1;
                var1 = global;
                var8 = var1.Math;
                var7 = var8.max;
                var6 = 0;
                var5 = var4[var6];
                var3 = var2[var6];
                var7 = var7.bind(var8)(var5, var3);
                var8 = var1.Math;
                var5 = var8.min;
                var3 = 1;
                var4 = var4[var3];
                var2 = var2[var3];
                var2 = var5.bind(var8)(var4, var2);
                var5 = var1.Math;
                var4 = var5.max;
                var2 = var2 - var7;
                var4 = var4.bind(var5)(var6, var2);
                var2 = var1.Math;
                var1 = var2.min;
                var0 = var0.layout;
                var0 = var0.height;
                var0 = var4 / var0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
            case 392:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestContentImpressionTracker.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78481: for (var _fun78481_ip = 0;;) switch (_fun78481_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var4.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var1);
                var1 = _closure1_slot7;
                var1 = var1.ACTIVE;
                var2 = var2 === var1;
                var8 = _closure1_slot4;
                var7 = var8.useRef;
                var1 = null;
                var11 = var7.bind(var8)(var1);
                var7 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                var7 = 7;
                var7 = var6[var7];
                var8 = var4.bind(var3)(var7);
                var7 = var8.useAdContentImpressionTrackerProps;
                var7 = var7.bind(var8)(var0);
                var10 = var7.key;
                var8 = var7.adContentIds;
                var12 = _closure1_slot12;
                var9 = {};
                var15 = var9;
                var14 = var0;
                var7 = copyDataProperties(var15, var14);
                var7 = 'adContentIds';
                var9[var7] = var8;
                var12 = var12.bind(var3)(var9);
                var9 = {};
                var15 = var9;
                var14 = var0;
                var13 = copyDataProperties(var15, var14);
                var15 = var9;
                var14 = var12;
                var12 = copyDataProperties(var15, var14);
                var12 = 'focused';
                var9[var12] = var2;
                var12 = var2 !== var1;
                var1 = 'focusedChanged';
                var9[var1] = var12;
                var1 = 'reference';
                var9[var1] = var11;
                var1 = 'isFocused';
                var9[var1] = var2;
                var2 = _closure1_slot8;
                var1 = 8;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.QuestContentImpressionTracker;
                var4 = 'questOrQuests';
                var6 = var4 in var0;
                var4 = {};
                var15 = var4;
                var14 = var9;
                var9 = copyDataProperties(var15, var14);
                var9 = 'key';
                var4[var9] = var10;
                var4[var7] = var8;
                if (var6) {
                    _fun78481_ip = 318;
                    continue _fun78481
                }
            case 298:
                var6 = var0.adCreativeType;
                var0 = 'adCreativeType';
                var4[var0] = var6;
                var0 = var4;
                _fun78481_ip = 362;
                continue _fun78481;
            case 318:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AdCreativeType;
                var6 = var5.QUEST;
                var5 = 'adCreativeType';
                var4[var5] = var6;
                var0 = var4;
            case 362:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.QuestContentImpressionTrackerNative = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5246, 5270, 660, 5268, 566, 5266, 5269, 5267, 2]);