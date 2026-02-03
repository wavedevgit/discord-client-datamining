// modules/guilds_bar/native/GuildsBarDragPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun101194: for (var _fun101194_ip = 0;;) switch (_fun101194_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.dragRegion;
                var _closure2_slot0 = var15;
                var17 = var1.draggedHeight;
                var _closure2_slot1 = var17;
                var9 = var1.draggedNode;
                var12 = var1.dropComplete;
                var _closure2_slot2 = var12;
                var18 = var1.gestureState;
                var _closure2_slot3 = var18;
                var21 = var1.listInsets;
                var _closure2_slot4 = var21;
                var8 = var1.overNode;
                var _closure2_slot5 = var8;
                var11 = var1.overState;
                var _closure2_slot6 = var11;
                var19 = var1.scrollPosition;
                var _closure2_slot7 = var19;
                var14 = var1.windowSize;
                var _closure2_slot8 = var14;
                var20 = var1.dropPosition;
                var _closure2_slot9 = var20;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var13 = 5;
                var1 = var10[var13];
                var3 = undefined;
                var4 = var5.bind(var3)(var1);
                var2 = var4.useDerivedValue;
                var1 = function() {
                    _fun101195: for (var _fun101195_ip = 0;;) switch (_fun101195_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.max;
                            var4 = _closure2_slot7;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var5 = _closure2_slot0;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var1 = var1.min;
                            var4 = var4 < var1;
                            var1 = 0;
                            if (!var4) {
                                _fun101195_ip = 91;
                                continue _fun101195
                            }
                        case 56:
                            var5 = _closure2_slot0;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var5 = var4.min;
                            var6 = _closure2_slot7;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var1 = var5 - var4;
                        case 91:
                            var4 = _closure2_slot4;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var0.start;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var6 = {};
                var6.scrollPosition = var19;
                var6.dragRegion = var15;
                var6.listInsets = var21;
                var1.__closure = var6;
                var6 = 17436881889698.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot9;
                var1.__initData = var6;
                var16 = var2.bind(var4)(var1);
                var _closure2_slot10 = var16;
                var1 = var10[var13];
                var4 = var5.bind(var3)(var1);
                var2 = var4.useDerivedValue;
                var1 = function() {
                    _fun101196: for (var _fun101196_ip = 0;;) switch (_fun101196_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.min;
                            var4 = _closure2_slot7;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var5 = _closure2_slot8;
                            var6 = _closure2_slot4;
                            var1 = var6.get;
                            var1 = var1.bind(var6)();
                            var1 = var1.end;
                            var1 = var5 - var1;
                            var4 = var4 + var1;
                            var5 = _closure2_slot0;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var1 = var1.max;
                            if (!(!(var4 > var1))) {
                                _fun101196_ip = 117;
                                continue _fun101196
                            }
                        case 81:
                            var4 = _closure2_slot8;
                            var5 = _closure2_slot4;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var1 = var1.end;
                            var4 = var4 - var1;
                            var1 = _closure2_slot1;
                            var1 = var4 - var1;
                            _fun101196_ip = 160;
                            continue _fun101196;
                        case 117:
                            var5 = _closure2_slot0;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var5 = var4.max;
                            var4 = _closure2_slot1;
                            var5 = var5 - var4;
                            var6 = _closure2_slot7;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var1 = var5 - var4;
                        case 160:
                            var5 = _closure2_slot8;
                            var6 = _closure2_slot4;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var4 = var4.end;
                            var4 = var5 - var4;
                            var0 = _closure2_slot1;
                            var0 = var4 - var0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var6 = {};
                var6.scrollPosition = var19;
                var6.windowSize = var14;
                var6.listInsets = var21;
                var6.dragRegion = var15;
                var6.draggedHeight = var17;
                var1.__closure = var6;
                var6 = 4371355784.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot10;
                var1.__initData = var6;
                var15 = var2.bind(var4)(var1);
                var _closure2_slot11 = var15;
                var1 = var10[var13];
                var4 = var5.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun101197: for (var _fun101197_ip = 0;;) switch (_fun101197_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun101197_ip = 49;
                                continue _fun101197
                            }
                        case 13:
                            var2 = _closure2_slot3;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = var0.absoluteY;
                            var3 = _closure2_slot1;
                            var0 = 2;
                            var0 = var3 / var0;
                            var5 = var2 - var0;
                            _fun101197_ip = 70;
                            continue _fun101197;
                        case 49:
                            var2 = _closure2_slot9;
                            var3 = _closure2_slot7;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var5 = var2 - var0;
                        case 70:
                            var2 = _closure2_slot3;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var0 = var0.mode;
                            if (!(var1 != var0)) {
                                _fun101197_ip = 100;
                                continue _fun101197
                            }
                        case 92:
                            var0 = _closure2_slot9;
                            if (!(var1 != var0)) {
                                _fun101197_ip = 149;
                                continue _fun101197
                            }
                        case 100:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.max;
                            var1 = _closure2_slot1;
                            var1 = -var1;
                            var6 = var0.Math;
                            var4 = var6.min;
                            var0 = _closure2_slot8;
                            var0 = var4.bind(var6)(var5, var0);
                            var7 = var2.bind(var3)(var1, var0);
                            _fun101197_ip = 211;
                            continue _fun101197;
                        case 149:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.min;
                            var4 = var0.Math;
                            var1 = var4.max;
                            var6 = _closure2_slot10;
                            var0 = var6.get;
                            var0 = var0.bind(var6)();
                            var1 = var1.bind(var4)(var5, var0);
                            var4 = _closure2_slot11;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var7 = var2.bind(var3)(var1, var0);
                        case 211:
                            var0 = {};
                            var2 = {};
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var3 = 6;
                            var3 = var13[var3];
                            var11 = undefined;
                            var6 = var12.bind(var11)(var3);
                            var5 = var6.withSpring;
                            var16 = _closure1_slot8;
                            var3 = function arg0() {
                                _fun101198: for (var _fun101198_ip = 0;;) switch (_fun101198_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun101198_ip = 19;
                                            continue _fun101198
                                        }
                                    case 6:
                                        var2 = _closure2_slot9;
                                        var1 = null;
                                        var0 = var1 != var2;
                                    case 19:
                                        if (!var0) {
                                            _fun101198_ip = 68;
                                            continue _fun101198
                                        }
                                    case 22:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 5;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot2;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 68:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = {};
                            var10 = _closure2_slot9;
                            var8.dropPosition = var10;
                            var10 = 5;
                            var10 = var13[var10];
                            var10 = var12.bind(var11)(var10);
                            var10 = var10.runOnJS;
                            var8.runOnJS = var10;
                            var9 = _closure2_slot2;
                            var8.dropComplete = var9;
                            var3.__closure = var8;
                            var8 = 12640145939434.0;
                            var3.__workletHash = var8;
                            var1 = _closure1_slot12;
                            var3.__initData = var1;
                            var15 = 'animate-always';
                            var18 = var6;
                            var17 = var7;
                            var14 = var3;
                            var1 = var18[var5](var17, var16, var15, var14, var13);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var6 = {};
                var6.dropPosition = var20;
                var6.scrollPosition = var19;
                var6.gestureState = var18;
                var6.draggedHeight = var17;
                var6.minY = var16;
                var6.maxY = var15;
                var6.windowSize = var14;
                var14 = 6;
                var14 = var10[var14];
                var14 = var5.bind(var3)(var14);
                var14 = var14.withSpring;
                var6.withSpring = var14;
                var14 = _closure1_slot8;
                var6.DRAG_SPRING_PHYSICS = var14;
                var13 = var10[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.runOnJS;
                var6.runOnJS = var13;
                var6.dropComplete = var12;
                var1.__closure = var6;
                var6 = 13691641005014.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot11;
                var1.__initData = var6;
                var6 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    _fun101199: for (var _fun101199_ip = 0;;) switch (_fun101199_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = 'convert-after';
                            if (!(var0 !== var2)) {
                                _fun101199_ip = 31;
                                continue _fun101199
                            }
                        case 17:
                            var2 = _closure2_slot6;
                            var0 = 'convert-before';
                            if (!(var0 === var2)) {
                                _fun101199_ip = 41;
                                continue _fun101199
                            }
                        case 31:
                            var2 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun101199_ip = 45;
                                continue _fun101199
                            }
                        case 41:
                            var0 = undefined;
                            return var0;
                        case 45:
                            var0 = {};
                            var2 = _closure1_slot4;
                            var2 = var2.FOLDER;
                            var0.type = var2;
                            var2 = -1;
                            var0.id = var2;
                            var2 = undefined;
                            var0.parentId = var2;
                            var0.name = var2;
                            var0.color = var2;
                            var2 = false;
                            var0.expanded = var2;
                            var2 = _closure2_slot5;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.children = var1;
                            return var0;
                    }
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot7;
                var11 = var4.dragPreview;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var6;
                var0.style = var4;
                var4 = 'guilds-bar-drag-preview';
                var0.nativeID = var4;
                var6 = _closure1_slot6;
                var4 = 8;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var10 = _closure1_slot17;
                var4.renderItem = var10;
                var10 = null;
                if (!(var10 != var8)) {
                    _fun101194_ip = 583;
                    continue _fun101194
                }
            case 580:
                var9 = var8;
            case 583:
                var8 = new Array(1);
                var8[0] = var9;
                var4.items = var8;
                var7 = _closure1_slot16;
                var4.getItemKey = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot6;
        var3 = _closure1_slot18;
        var2 = {};
        var0 = arg1;
        var2.node = var0;
        var0 = arg2;
        var2.transitionState = var0;
        var0 = arg3;
        var2.cleanUp = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun101202: for (var _fun101202_ip = 0;;) switch (_fun101202_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.node;
                var13 = var1.transitionState;
                var _closure2_slot0 = var13;
                var9 = var1.cleanUp;
                var _closure2_slot1 = var9;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 5;
                var2 = var1[var10];
                var4 = var6.bind(var3)(var2);
                var2 = var4.useSharedValue;
                var12 = 8;
                var1 = var1[var12];
                var1 = var6.bind(var3)(var1);
                var1 = var1.TransitionStates;
                var6 = var1.ENTERED;
                var1 = 1;
                if (!(var13 === var6)) {
                    _fun101202_ip = 103;
                    continue _fun101202
                }
            case 101:
                var1 = 0;
            case 103:
                var14 = var2.bind(var4)(var1);
                _closure2_slot2 = var14;
                var2 = var8.type;
                var1 = _closure1_slot4;
                var1 = var1.FOLDER;
                var15 = var2 === var1;
                _closure2_slot3 = var15;
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = var4[var10];
                var6 = var11.bind(var3)(var1);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
                    _fun101203: for (var _fun101203_ip = 0;;) switch (_fun101203_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var5 = 1;
                            if (var0) {
                                _fun101203_ip = 45;
                                continue _fun101203
                            }
                        case 26:
                            var15 = 0.33;
                            if (!(var5 === var1)) {
                                _fun101203_ip = 43;
                                continue _fun101203
                            }
                        case 40:
                            var15 = var5;
                        case 43:
                            _fun101203_ip = 65;
                            continue _fun101203;
                        case 45:
                            var0 = 0.3;
                            if (!(var5 === var1)) {
                                _fun101203_ip = 62;
                                continue _fun101203
                            }
                        case 59:
                            var0 = var5;
                        case 62:
                            var15 = var0;
                        case 65:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun101203_ip = 105;
                                continue _fun101203
                            }
                        case 72:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            if (!(var5 !== var0)) {
                                _fun101203_ip = 105;
                                continue _fun101203
                            }
                        case 89:
                            var0 = {
                                'translateX': 10,
                                'translateY': 4294967286
                            };
                            _fun101203_ip = 119;
                            continue _fun101203;
                        case 105:
                            var0 = {
                                'translateX': 0,
                                'translateY': 0
                            };
                        case 119:
                            var14 = var0.translateX;
                            var13 = var0.translateY;
                            var0 = {};
                            var2 = _closure2_slot3;
                            var1 = var5;
                            if (!var2) {
                                _fun101203_ip = 145;
                                continue _fun101203
                            }
                        case 143:
                            var1 = 0;
                        case 145:
                            var0.zIndex = var1;
                            var10 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 6;
                            var4 = var8[var2];
                            var3 = undefined;
                            var12 = var7.bind(var3)(var4);
                            var11 = var12.withSpring;
                            var9 = _closure1_slot8;
                            var4 = 'animate-always';
                            var9 = var11.bind(var12)(var13, var9, var4);
                            var10.translateY = var9;
                            var9 = new Array(3);
                            var9[0] = var10;
                            var10 = {};
                            var11 = var8[var2];
                            var13 = var7.bind(var3)(var11);
                            var12 = var13.withSpring;
                            var11 = _closure1_slot8;
                            var11 = var12.bind(var13)(var14, var11, var4);
                            var10.translateX = var11;
                            var9[1] = var10;
                            var10 = {};
                            var11 = var8[var2];
                            var14 = var7.bind(var3)(var11);
                            var13 = var14.withSpring;
                            var20 = _closure1_slot8;
                            var11 = function arg0() {
                                _fun101204: for (var _fun101204_ip = 0;;) switch (_fun101204_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun101204_ip = 54;
                                            continue _fun101204
                                        }
                                    case 6:
                                        var2 = _closure2_slot0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 8;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun101204_ip = 64;
                                            continue _fun101204
                                        }
                                    case 57:
                                        var0 = _closure2_slot3;
                                    case 64:
                                        if (!var0) {
                                            _fun101204_ip = 113;
                                            continue _fun101204
                                        }
                                    case 67:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 5;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot1;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 113:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var16 = {};
                            var17 = _closure2_slot0;
                            var16.transitionState = var17;
                            var17 = 8;
                            var17 = var8[var17];
                            var17 = var7.bind(var3)(var17);
                            var17 = var17.TransitionStates;
                            var16.TransitionStates = var17;
                            var17 = _closure2_slot3;
                            var16.isFolder = var17;
                            var17 = 5;
                            var17 = var8[var17];
                            var17 = var7.bind(var3)(var17);
                            var17 = var17.runOnJS;
                            var16.runOnJS = var17;
                            var17 = _closure2_slot1;
                            var16.cleanUp = var17;
                            var11.__closure = var16;
                            var16 = 9409925192880.0;
                            var11.__workletHash = var16;
                            var16 = _closure1_slot14;
                            var11.__initData = var16;
                            var22 = var14;
                            var21 = var15;
                            var19 = var4;
                            var18 = var11;
                            var11 = var22[var13](var21, var20, var19, var18, var17);
                            var10.scale = var11;
                            var9[2] = var10;
                            var0.transform = var9;
                            var2 = var8[var2];
                            var3 = var7.bind(var3)(var2);
                            var2 = var3.withSpring;
                            var7 = _closure2_slot3;
                            if (!var7) {
                                _fun101203_ip = 445;
                                continue _fun101203
                            }
                        case 432:
                            var7 = _closure2_slot2;
                            var6 = var7.get;
                            var5 = var6.bind(var7)();
                        case 445:
                            var1 = _closure1_slot8;
                            var1 = var2.bind(var3)(var5, var1, var4);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.isFolder = var15;
                var7.visible = var14;
                var14 = 6;
                var14 = var4[var14];
                var14 = var11.bind(var3)(var14);
                var14 = var14.withSpring;
                var7.withSpring = var14;
                var14 = _closure1_slot8;
                var7.DRAG_SPRING_PHYSICS = var14;
                var7.transitionState = var13;
                var12 = var4[var12];
                var12 = var11.bind(var3)(var12);
                var12 = var12.TransitionStates;
                var7.TransitionStates = var12;
                var10 = var4[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.runOnJS;
                var7.runOnJS = var10;
                var7.cleanUp = var9;
                var1.__closure = var7;
                var7 = 13465198693221.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot13;
                var1.__initData = var7;
                var6 = var2.bind(var6)(var1);
                var2 = _closure1_slot3;
                var1 = var2.useEffect;
                var0 = function() { // Environment: var0
                    _fun101205: for (var _fun101205_ip = 0;;) switch (_fun101205_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var4 = var1.YEETED;
                            var1 = 1;
                            if (!(var5 === var4)) {
                                _fun101205_ip = 62;
                                continue _fun101205
                            }
                        case 60:
                            var1 = 0;
                        case 62:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot7;
                var7 = var4.animatedPreviewStyle;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var6 = var8.type;
                var4 = _closure1_slot4;
                var4 = var4.FOLDER;
                if (!(var6 !== var4)) {
                    _fun101202_ip = 430;
                    continue _fun101202
                }
            case 380:
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 10;
                var4 = var9[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var9 = var8.id;
                var4.guildId = var9;
                var9 = true;
                var4.isDragPreview = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun101202_ip = 517;
                continue _fun101202;
            case 430:
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var8.id;
                var5.id = var9;
                var9 = var8.expanded;
                var5.expanded = var9;
                var9 = var8.color;
                var5.color = var9;
                var9 = var8.name;
                var5.name = var9;
                var8 = var8.children;
                var5.childNodes = var8;
                var8 = true;
                var5.isDragPreview = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 517:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var7 = var8.create;
    var3 = {};
    var10 = 'absolute';
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0
    };
    var3.dragPreview = var9;
    var9 = {};
    var9.position = var10;
    var3.animatedPreviewStyle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 0.5,
        'damping': 80,
        'stiffness': 320
    };
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})}]};}";
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}";
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun101206: for (var _fun101206_ip = 0;;) switch (_fun101206_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.shallow;
                var0 = function(arg0) { // Environment: var0
                    _fun101207: for (var _fun101207_ip = 0;;) switch (_fun101207_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = var0.dragSpecs;
                            var10 = var0.overSpecs;
                            var6 = var0.gestureState;
                            var5 = var0.scrollPosition;
                            var4 = var0.dragRegion;
                            var3 = var0.windowSize;
                            var2 = var0.dropComplete;
                            var1 = var0.listInsets;
                            var7 = var0.dropSpecs;
                            var0 = null;
                            if (!(var0 == var7)) {
                                _fun101207_ip = 177;
                                continue _fun101207
                            }
                        case 63:
                            if (!(var0 != var8)) {
                                _fun101207_ip = 71;
                                continue _fun101207
                            }
                        case 67:
                            if (!(var0 == var10)) {
                                _fun101207_ip = 73;
                                continue _fun101207
                            }
                        case 71:
                            return var0;
                        case 73:
                            var11 = var10.state;
                            var0 = {};
                            var9 = var8.node;
                            var0.draggedNode = var9;
                            var8 = var8.itemSize;
                            var0.draggedHeight = var8;
                            var0.overState = var11;
                            var9 = var11.startsWith;
                            var8 = 'convert';
                            var11 = var9.bind(var11)(var8);
                            var8 = undefined;
                            var9 = undefined;
                            if (!var11) {
                                _fun101207_ip = 135;
                                continue _fun101207
                            }
                        case 129:
                            var9 = var10.node;
                        case 135:
                            var0.overNode = var9;
                            var0.dropPosition = var8;
                            var0.gestureState = var6;
                            var0.scrollPosition = var5;
                            var0.dragRegion = var4;
                            var0.windowSize = var3;
                            var0.dropComplete = var2;
                            var0.listInsets = var1;
                            return var0;
                        case 177:
                            var10 = var7.overState;
                            var0 = {};
                            var8 = var7.dragNode;
                            var0.draggedNode = var8;
                            var8 = var7.itemSize;
                            var0.draggedHeight = var8;
                            var0.overState = var10;
                            var9 = var10.startsWith;
                            var8 = 'convert';
                            var9 = var9.bind(var10)(var8);
                            var8 = undefined;
                            if (!var9) {
                                _fun101207_ip = 238;
                                continue _fun101207
                            }
                        case 232:
                            var8 = var7.overNode;
                        case 238:
                            var0.overNode = var8;
                            var7 = var7.dropPosition;
                            var0.dropPosition = var7;
                            var0.gestureState = var6;
                            var0.scrollPosition = var5;
                            var0.dragRegion = var4;
                            var0.windowSize = var3;
                            var0.dropComplete = var2;
                            var0.listInsets = var1;
                            return var0;
                    }
                };
                var5 = var3.bind(var4)(var0, var2);
                var0 = null;
                var2 = var0 != var5;
                if (!var2) {
                    _fun101206_ip = 85;
                    continue _fun101206
                }
            case 59:
                var3 = _closure1_slot6;
                var2 = _closure1_slot15;
                var1 = {};
                var7 = var1;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var0 = var3.bind(var4)(var2, var1);
            case 85:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarDragPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4372, 13120, 33, 3711, 4072, 6453, 4019, 13131, 13151, 3067, 2]);