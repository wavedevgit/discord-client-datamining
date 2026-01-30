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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun78442: for (var _fun78442_ip = 0;;) switch (_fun78442_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78442_ip = 45;
                    continue _fun78442
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun78442_ip = 54;
                    continue _fun78442
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun78442_ip = 344;
                    continue _fun78442
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78442_ip = 322;
                    continue _fun78442
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78442_ip = 282;
                    continue _fun78442
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78442_ip = 269;
                    continue _fun78442
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
                    _fun78442_ip = 162;
                    continue _fun78442
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun78442_ip = 178;
                    continue _fun78442
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78442_ip = 248;
                    continue _fun78442
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78442_ip = 248;
                    continue _fun78442
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78442_ip = 233;
                    continue _fun78442
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78442_ip = 246;
                    continue _fun78442
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun78442_ip = 264;
                continue _fun78442;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun78442_ip = 282;
                continue _fun78442;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun78442_ip = 322;
                    continue _fun78442
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
                    _fun78442_ip = 329;
                    continue _fun78442
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78443: for (var _fun78443_ip = 0;;) switch (_fun78443_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78443_ip = 56;
                                continue _fun78443
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
                            _fun78443_ip = 67;
                            continue _fun78443;
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
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun78444: for (var _fun78444_ip = 0;;) switch (_fun78444_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78444_ip = 23;
                    continue _fun78444
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78444_ip = 33;
                    continue _fun78444
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
                    _fun78444_ip = 70;
                    continue _fun78444
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78444_ip = 55;
                    continue _fun78444
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: useVisibilityData, environment: var1
        _fun78445: for (var _fun78445_ip = 0;;) switch (_fun78445_ip) {
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
                    var1 = function(arg0) { // Original name: initHandlers, environment: var0
                        _fun78447: for (var _fun78447_ip = 0;;) switch (_fun78447_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.adContentIds;
                                var3 = var2.setVisibilityPercentage;
                                var _closure4_slot0 = var3;
                                var3 = var2.visibilityRef;
                                var _closure4_slot1 = var3;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun78447_ip = 95;
                                    continue _fun78447
                                }
                            case 37:
                                var4 = function(arg0) { // Original name: _loop, environment: var0
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
                                    var4 = function() { // Original name: calculateVisibility, environment: var3
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
                                    _fun78447_ip = 95;
                                    continue _fun78447
                                }
                            case 70:
                                var0 = var1.value;
                                var0 = var4.bind(var3)(var0);
                                var5 = var2.bind(var3)();
                                var0 = var5.done;
                                var1 = var5;
                                if (!var0) {
                                    _fun78447_ip = 70;
                                    continue _fun78447
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
                    _fun78445_ip = 132;
                    continue _fun78445
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
    var3 = function(arg0) { // Original name: calculateVisibilityPercentage, environment: var1
        _fun78450: for (var _fun78450_ip = 0;;) switch (_fun78450_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.visibilityRef;
                var4 = var0.entityId;
                var3 = null;
                var2 = var3 == var1;
                var0 = undefined;
                if (var2) {
                    _fun78450_ip = 58;
                    continue _fun78450
                }
            case 26:
                var2 = var1.current;
                var5 = var3 == var2;
                var0 = undefined;
                if (var5) {
                    _fun78450_ip = 58;
                    continue _fun78450
                }
            case 40:
                var2 = var2.children;
                var5 = var3 == var2;
                var0 = undefined;
                if (var5) {
                    _fun78450_ip = 58;
                    continue _fun78450
                }
            case 54:
                var0 = var2[var4];
            case 58:
                var4 = var3 == var0;
                var2 = undefined;
                if (var4) {
                    _fun78450_ip = 73;
                    continue _fun78450
                }
            case 67:
                var2 = var0.layout;
            case 73:
                if (!(var3 != var2)) {
                    _fun78450_ip = 392;
                    continue _fun78450
                }
            case 80:
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun78450_ip = 114;
                    continue _fun78450
                }
            case 89:
                var4 = var1.current;
                var4 = var4.parent;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun78450_ip = 114;
                    continue _fun78450
                }
            case 108:
                var2 = var4.layout;
            case 114:
                if (!(var3 != var2)) {
                    _fun78450_ip = 392;
                    continue _fun78450
                }
            case 121:
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun78450_ip = 155;
                    continue _fun78450
                }
            case 130:
                var4 = var1.current;
                var4 = var4.parent;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun78450_ip = 155;
                    continue _fun78450
                }
            case 149:
                var2 = var4.scrollY;
            case 155:
                if (!(var3 != var2)) {
                    _fun78450_ip = 392;
                    continue _fun78450
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
    var1 = function(arg0) { // Original name: QuestContentImpressionTrackerNative, environment: var1
        _fun78451: for (var _fun78451_ip = 0;;) switch (_fun78451_ip) {
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
                    _fun78451_ip = 318;
                    continue _fun78451
                }
            case 298:
                var6 = var0.adCreativeType;
                var0 = 'adCreativeType';
                var4[var0] = var6;
                var0 = var4;
                _fun78451_ip = 362;
                continue _fun78451;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5245, 5269, 660, 5267, 566, 5265, 5268, 5266, 2]);