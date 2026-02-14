// modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function arg0() {
        _fun101533: for (var _fun101533_ip = 0;;) switch (_fun101533_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.selected;
                var16 = var0.sharedId;
                var _closure2_slot0 = var16;
                var15 = var0.id;
                var _closure2_slot1 = var15;
                var10 = var0.transitionState;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun101533_ip = 77;
                    continue _fun101533
                }
            case 42:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.TransitionStates;
                var10 = var2.MOUNTED;
            case 77:
                var _closure2_slot2 = var10;
                var9 = var0.cleanUp;
                var _closure2_slot3 = var9;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)();
                _closure2_slot4 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var13 = 6;
                var5 = var5[var13];
                var5 = var6.bind(var3)(var5);
                var5 = var5.TransitionStates;
                var5 = var5.MOUNTED;
                var17 = var10 === var5;
                _closure2_slot5 = var17;
                var11 = 8;
                var7 = var11;
                if (!var4) {
                    _fun101533_ip = 206;
                    continue _fun101533
                }
            case 167:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var13];
                var4 = var5.bind(var3)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.YEETED;
                var7 = var11;
                if (!(var10 !== var4)) {
                    _fun101533_ip = 206;
                    continue _fun101533
                }
            case 203:
                var7 = 40;
            case 206:
                _closure2_slot6 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var10;
                var2 = var2.unreadIndicator;
                var4[2] = var2;
                var2 = function() { // Environment: var1
                    _fun101534: for (var _fun101534_ip = 0;;) switch (_fun101534_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = var0.unreadIndicator;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var3 = _closure2_slot6;
                            var1.height = var3;
                            var4 = _closure2_slot6;
                            var3 = 2;
                            var4 = var4 / var3;
                            var3 = -1;
                            var3 = var4 * var3;
                            var1.marginTop = var3;
                            var4 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var3);
                            var2 = var2.TransitionStates;
                            var3 = var2.YEETED;
                            var2 = 0;
                            if (!(var4 === var3)) {
                                _fun101534_ip = 109;
                                continue _fun101534
                            }
                        case 103:
                            var2 = -4;
                        case 109:
                            var1.marginLeft = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var2, var4);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = function arg0() {
                    _fun101535: for (var _fun101535_ip = 0;;) switch (_fun101535_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun101535_ip = 233;
                                continue _fun101535
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101535_ip = 50;
                                continue _fun101535
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0 = _closure2_slot1;
                            if (!(var1 === var0)) {
                                _fun101535_ip = 233;
                                continue _fun101535
                            }
                        case 50:
                            var0 = {};
                            var1 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 7;
                            var7 = var8[var4];
                            var5 = undefined;
                            var12 = var6.bind(var5)(var7);
                            var11 = var12.withSpring;
                            var10 = var3.targetOriginY;
                            var9 = _closure1_slot12;
                            var7 = 'animate-always';
                            var9 = var11.bind(var12)(var10, var9, var7);
                            var1.originY = var9;
                            var9 = var8[var4];
                            var12 = var6.bind(var5)(var9);
                            var11 = var12.withSpring;
                            var10 = var3.targetOriginX;
                            var9 = _closure1_slot12;
                            var9 = var11.bind(var12)(var10, var9, var7);
                            var1.originX = var9;
                            var4 = var8[var4];
                            var6 = var6.bind(var5)(var4);
                            var5 = var6.withSpring;
                            var4 = var3.targetHeight;
                            var3 = _closure1_slot12;
                            var3 = var5.bind(var6)(var4, var3, var7);
                            var1.height = var3;
                            var0.animations = var1;
                            var1 = {
                                'height': 8,
                                'originY': null,
                                'originX': 4294967284
                            };
                            var3 = _closure1_slot8;
                            var2 = 2;
                            var3 = var3 / var2;
                            var2 = 4;
                            var2 = var3 - var2;
                            var1.originY = var2;
                            var0.initialValues = var1;
                            _fun101535_ip = 252;
                            continue _fun101535;
                        case 233:
                            var1 = {};
                            var2 = {};
                            var1.animations = var2;
                            var2 = {};
                            var1.initialValues = var2;
                            var0 = var1;
                        case 252:
                            return var0;
                    }
                };
                var2 = {};
                var2.disableEntering = var17;
                var2.sharedId = var16;
                var2.id = var15;
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = 7;
                var18 = var7[var14];
                var18 = var12.bind(var3)(var18);
                var18 = var18.withSpring;
                var2.withSpring = var18;
                var18 = _closure1_slot12;
                var2.BAR_SPRING_PHYSICS = var18;
                var18 = _closure1_slot8;
                var2.WRAPPER_SIZE = var18;
                var5.__closure = var2;
                var2 = 16330603891282.0;
                var5.__workletHash = var2;
                var2 = _closure1_slot14;
                var5.__initData = var2;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var16;
                var2[2] = var15;
                var6 = var6.bind(var8)(var5, var2);
                var8 = _closure1_slot3;
                var5 = var8.useCallback;
                var2 = function arg0() {
                    var2 = arg0;
                    var0 = {};
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var7 = var8[var4];
                    var5 = undefined;
                    var12 = var6.bind(var5)(var7);
                    var11 = var12.withSpring;
                    var10 = var2.targetOriginY;
                    var9 = _closure1_slot12;
                    var7 = 'animate-always';
                    var9 = var11.bind(var12)(var10, var9, var7);
                    var1.originY = var9;
                    var9 = var8[var4];
                    var12 = var6.bind(var5)(var9);
                    var11 = var12.withSpring;
                    var10 = var2.targetOriginX;
                    var9 = _closure1_slot12;
                    var9 = var11.bind(var12)(var10, var9, var7);
                    var1.originX = var9;
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.withSpring;
                    var4 = var2.targetHeight;
                    var3 = _closure1_slot12;
                    var3 = var5.bind(var6)(var4, var3, var7);
                    var1.height = var3;
                    var0.animations = var1;
                    var1 = {};
                    var3 = var2.currentHeight;
                    var1.height = var3;
                    var3 = var2.currentOriginY;
                    var1.originY = var3;
                    var2 = var2.currentOriginX;
                    var1.originX = var2;
                    var0.initialValues = var1;
                    var1 = function arg0() {
                        _fun101537: for (var _fun101537_ip = 0;;) switch (_fun101537_ip) {
                            case 0:
                                var4 = arg0;
                                var5 = _closure2_slot2;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 6;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                var3 = var5 === var3;
                                if (!var3) {
                                    _fun101537_ip = 57;
                                    continue _fun101537
                                }
                            case 54:
                                var3 = var4;
                            case 57:
                                if (!var3) {
                                    _fun101537_ip = 70;
                                    continue _fun101537
                                }
                            case 60:
                                var5 = _closure2_slot3;
                                var4 = null;
                                var3 = var4 != var5;
                            case 70:
                                if (!var3) {
                                    _fun101537_ip = 111;
                                    continue _fun101537
                                }
                            case 73:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 8;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot3;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                            case 111:
                                return var0;
                        }
                    };
                    var0.callback = var1;
                    return var0;
                };
                var1 = {};
                var14 = var7[var14];
                var14 = var12.bind(var3)(var14);
                var14 = var14.withSpring;
                var1.withSpring = var14;
                var14 = _closure1_slot12;
                var1.BAR_SPRING_PHYSICS = var14;
                var1.transitionState = var10;
                var13 = var7[var13];
                var13 = var12.bind(var3)(var13);
                var13 = var13.TransitionStates;
                var1.TransitionStates = var13;
                var1.cleanUp = var9;
                var11 = var7[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.runOnJS;
                var1.runOnJS = var11;
                var2.__closure = var1;
                var1 = 10632665703864.0;
                var2.__workletHash = var1;
                var1 = _closure1_slot15;
                var2.__initData = var1;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var9;
                var5 = var5.bind(var8)(var2, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = false;
                var0.collapsable = var7;
                var0.entering = var6;
                var0.layout = var5;
                var0.style = var4;
                var4 = 'none';
                var0.pointerEvents = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var1;
    var0 = function arg0, arg1, arg2, arg3() {
        var1 = arg1;
        var0 = var1.selected;
        var5 = var1.sharedId;
        var1 = var1.id;
        var4 = _closure1_slot9;
        var3 = _closure1_slot18;
        var2 = {};
        var2.sharedId = var5;
        var2.id = var1;
        var2.selected = var0;
        var0 = arg2;
        var2.transitionState = var0;
        var0 = arg3;
        var2.cleanUp = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var14 = 0;
    var5 = var7[var14];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.IOS_POINTER_STYLE;
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var7[var12];
    var3 = var6.bind(var0)(var3);
    var5 = var3.GUILD_ITEM_SIZE;
    var _closure1_slot5 = var5;
    var5 = var3.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot6 = var5;
    var5 = var3.GUILD_ITEM_HIT_SLOP;
    var _closure1_slot7 = var5;
    var11 = var3.WRAPPER_SIZE;
    var _closure1_slot8 = var11;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot9 = var5;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = {
        'mass': 0.8,
        'damping': 100,
        'stiffness': 150
    };
    var _closure1_slot11 = var3;
    var3 = {
        'mass': 0.25,
        'damping': 100,
        'stiffness': 200
    };
    var _closure1_slot12 = var3;
    var3 = 4;
    var5 = var7[var3];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10.opacity = var14;
    var5.draggedElement = var10;
    var10 = {
        'position': 'relative',
        'overflow': 'visible'
    };
    var5.container = var10;
    var10 = {
        'position': 'absolute',
        'top': null,
        'left': 4294967292,
        'height': 8,
        'width': 8
    };
    var12 = var11 / var12;
    var10.top = var12;
    var12 = 5;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10.borderRadius = var14;
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var10.backgroundColor = var12;
    var5.unreadIndicator = var10;
    var10 = {
        'position': 'absolute',
        'left': null,
        'top': 0,
        'right': 16,
        'height': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = 16;
    var12 = var11 + var12;
    var10.left = var12;
    var10.height = var11;
    var5.expandedChildrenWrapper = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createStyles;
    var3 = function() { // Environment: var4
        _fun101539: for (var _fun101539_ip = 0;;) switch (_fun101539_ip) {
            case 0:
                var2 = arguments[0];
                var5 = arguments[1];
                var6 = undefined;
                if (!(var2 === var6)) {
                    _fun101539_ip = 14;
                    continue _fun101539
                }
            case 12:
                var2 = false;
            case 14:
                if (!(var5 === var6)) {
                    _fun101539_ip = 20;
                    continue _fun101539
                }
            case 18:
                var5 = false;
            case 20:
                var0 = {};
                var1 = {
                    'position': 'relative',
                    'paddingTop': 4,
                    'paddingBottom': 4,
                    'paddingLeft': 12
                };
                var3 = _closure1_slot8;
                var1.height = var3;
                var3 = _closure1_slot5;
                var7 = _closure1_slot7;
                var8 = var7.left;
                var8 = var3 + var8;
                var7 = var7.right;
                var7 = var8 + var7;
                var1.width = var7;
                var0.pressableWrapper = var1;
                var1 = {
                    'position': 'relative',
                    'width': null,
                    'height': null,
                    'overflow': 'hidden',
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var1.width = var3;
                var1.height = var3;
                var3 = 'transparent';
                var7 = var3;
                if (var5) {
                    _fun101539_ip = 149;
                    continue _fun101539
                }
            case 118:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 5;
                var8 = var10[var8];
                var8 = var9.bind(var6)(var8);
                var8 = var8.colors;
                var7 = var8.BACKGROUND_SURFACE_HIGH;
            case 149:
                var1.backgroundColor = var7;
                var0.itemShape = var1;
                var1 = {};
                var7 = var3;
                if (var5) {
                    _fun101539_ip = 197;
                    continue _fun101539
                }
            case 166:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 5;
                var8 = var10[var8];
                var8 = var9.bind(var6)(var8);
                var8 = var8.colors;
                var7 = var8.BACKGROUND_MOD_STRONG;
            case 197:
                var1.backgroundColor = var7;
                var0.itemShapeThemed = var1;
                var1 = {};
                if (var2) {
                    _fun101539_ip = 244;
                    continue _fun101539
                }
            case 211:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 5;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                _fun101539_ip = 281;
                continue _fun101539;
            case 244:
                if (var5) {
                    _fun101539_ip = 278;
                    continue _fun101539
                }
            case 247:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.colors;
                var3 = var4.BACKGROUND_SURFACE_HIGH;
            case 278:
                var2 = var3;
            case 281:
                var1.backgroundColor = var2;
                var0.itemShapeSelected = var1;
                return var0;
        }
    };
    var3 = var5.bind(var8)(var3);
    var5 = {};
    var8 = "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,WRAPPER_SIZE}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:WRAPPER_SIZE/2-4,originX:-12}};}";
    var5.code = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}";
    var5.code = var8;
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,GUILD_ITEM_SELECTED_BORDER_RADIUS,GUILD_ITEM_SIZE,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?GUILD_ITEM_SELECTED_BORDER_RADIUS:GUILD_ITEM_SIZE/2,CORNER_SPRING_PHYSICS,'animate-always')};}";
    var5.code = var8;
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = 'function GuildsBarAnimatedItemWrapperTsx4(){const{withSpring,panelX,MIN_OPACITY_REVEAL_WIDTH,MAX_OPACITY_REVEAL_WIDTH,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{opacity:withSpring(Math.max(0,Math.min(1,(panelX.get()-MIN_OPACITY_REVEAL_WIDTH)/MAX_OPACITY_REVEAL_WIDTH)),HOME_DRAWER_FLING_PHYSICS)};}';
    var5.code = var8;
    var _closure1_slot17 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun101540: for (var _fun101540_ip = 0;;) switch (_fun101540_ip) {
            case 0:
                var6 = arg0;
                var0 = var6.id;
                var _closure2_slot0 = var0;
                var27 = var6.selected;
                var _closure2_slot1 = var27;
                var5 = var6.unread;
                var30 = var6.circle;
                var _closure2_slot2 = var30;
                var21 = var6.children;
                var9 = var6.externalChildren;
                var10 = var6.expandedChildren;
                var14 = var6.config;
                var31 = var6.label;
                var17 = var6.draggable;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun101540_ip = 81;
                    continue _fun101540
                }
            case 79:
                var17 = false;
            case 81:
                var22 = var6.cutouts;
                var20 = var6.isDragTarget;
                if (!(var20 === var3)) {
                    _fun101540_ip = 99;
                    continue _fun101540
                }
            case 97:
                var20 = false;
            case 99:
                var _closure2_slot3 = var20;
                var39 = var6.dragState;
                var _closure2_slot4 = var39;
                var2 = var6.isDragPreview;
                if (!(var2 === var3)) {
                    _fun101540_ip = 125;
                    continue _fun101540
                }
            case 123:
                var2 = false;
            case 125:
                var38 = var6.draggedItemSize;
                if (!(var38 === var3)) {
                    _fun101540_ip = 137;
                    continue _fun101540
                }
            case 135:
                var38 = 0;
            case 137:
                var _closure2_slot5 = var38;
                var32 = var6.overState;
                var _closure2_slot6 = var32;
                var26 = var6.styles;
                var _closure2_slot7 = var26;
                var19 = var6.accessibilityActions;
                var18 = var6.onAccessibilityAction;
                var4 = var6.preventClipping;
                if (!(var4 === var3)) {
                    _fun101540_ip = 185;
                    continue _fun101540
                }
            case 183:
                var4 = false;
            case 185:
                var28 = var6.expanded;
                var _closure2_slot8 = var28;
                var12 = var6.entering;
                var8 = var6.exiting;
                var16 = var6.layout;
                var13 = var6.zIndex;
                if (!(var13 === var3)) {
                    _fun101540_ip = 225;
                    continue _fun101540
                }
            case 223:
                var13 = 0;
            case 225:
                var _closure2_slot9 = var13;
                var15 = var6.sharedId;
                var _closure2_slot10 = var15;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var7 = _closure1_slot13;
                var11 = var7.bind(var3)();
                _closure2_slot11 = var11;
                var23 = _closure1_slot1;
                var35 = _closure1_slot2;
                var7 = 10;
                var7 = var35[var7];
                var7 = var23.bind(var3)(var7);
                var14 = var7.bind(var3)(var14);
                var34 = _closure1_slot0;
                var7 = 8;
                var23 = var35[var7];
                var25 = var34.bind(var3)(var23);
                var24 = var25.useAnimatedStyle;
                var23 = function() {
                    _fun101541: for (var _fun101541_ip = 0;;) switch (_fun101541_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.withSpring;
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun101541_ip = 48;
                                continue _fun101541
                            }
                        case 42:
                            var3 = _closure1_slot6;
                            _fun101541_ip = 59;
                            continue _fun101541;
                        case 48:
                            var6 = _closure1_slot5;
                            var2 = 2;
                            var3 = var6 / var2;
                        case 59:
                            var2 = _closure1_slot11;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.borderRadius = var1;
                            return var0;
                    }
                };
                var29 = {};
                var37 = 7;
                var33 = var35[var37];
                var33 = var34.bind(var3)(var33);
                var33 = var33.withSpring;
                var29.withSpring = var33;
                var29.circle = var30;
                var30 = _closure1_slot6;
                var29.GUILD_ITEM_SELECTED_BORDER_RADIUS = var30;
                var30 = _closure1_slot5;
                var29.GUILD_ITEM_SIZE = var30;
                var30 = _closure1_slot11;
                var29.CORNER_SPRING_PHYSICS = var30;
                var23.__closure = var29;
                var29 = 11828610342492.0;
                var23.__workletHash = var29;
                var29 = _closure1_slot16;
                var23.__initData = var29;
                var24 = var24.bind(var25)(var23);
                var29 = _closure1_slot3;
                var25 = var29.useContext;
                var33 = 11;
                var23 = var35[var33];
                var23 = var34.bind(var3)(var23);
                var23 = var23.HomeDrawerStateContext;
                var23 = var25.bind(var29)(var23);
                var36 = var23.panelX;
                _closure2_slot12 = var36;
                var23 = 12;
                var23 = var35[var23];
                var29 = var34.bind(var3)(var23);
                var25 = var29.useClientThemesOverride;
                var23 = var26.itemShapeThemed;
                var25 = var25.bind(var29)(var23);
                var30 = _closure1_slot3;
                var29 = var30.useMemo;
                var23 = new Array(5);
                var23[0] = var20;
                var23[1] = var39;
                var23[2] = var38;
                var23[3] = var32;
                var23[4] = var13;
                var13 = function() { // Environment: var1
                    _fun101542: for (var _fun101542_ip = 0;;) switch (_fun101542_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun101542_ip = 38;
                                continue _fun101542
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var0 = 'dragging';
                            if (!(var0 === var2)) {
                                _fun101542_ip = 38;
                                continue _fun101542
                            }
                        case 22:
                            var2 = _closure2_slot6;
                            var4 = 'hide';
                            var0 = 'self';
                            if (!(var0 === var2)) {
                                _fun101542_ip = 85;
                                continue _fun101542
                            }
                        case 38:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101542_ip = 78;
                                continue _fun101542
                            }
                        case 48:
                            var2 = _closure2_slot6;
                            var0 = 'self';
                            if (!(var0 !== var2)) {
                                _fun101542_ip = 78;
                                continue _fun101542
                            }
                        case 60:
                            var3 = _closure2_slot4;
                            var0 = 'drag-target';
                            var2 = 'dragging';
                            if (!(var2 !== var3)) {
                                _fun101542_ip = 82;
                                continue _fun101542
                            }
                        case 78:
                            var0 = 'none';
                        case 82:
                            var4 = var0;
                        case 85:
                            var0 = {};
                            var3 = 'drag-target';
                            if (!(var3 !== var4)) {
                                _fun101542_ip = 116;
                                continue _fun101542
                            }
                        case 97:
                            var5 = 'hide';
                            var2 = 0;
                            if (!(var5 !== var4)) {
                                _fun101542_ip = 114;
                                continue _fun101542
                            }
                        case 107:
                            var2 = _closure1_slot8;
                        case 114:
                            _fun101542_ip = 131;
                            continue _fun101542;
                        case 116:
                            var6 = _closure1_slot8;
                            var5 = _closure2_slot5;
                            var2 = var6 + var5;
                        case 131:
                            var0.height = var2;
                            var2 = 0;
                            if (!(var3 === var4)) {
                                _fun101542_ip = 173;
                                continue _fun101542
                            }
                        case 141:
                            var4 = _closure2_slot6;
                            var3 = 'before';
                            if (!(var3 !== var4)) {
                                _fun101542_ip = 169;
                                continue _fun101542
                            }
                        case 153:
                            var4 = _closure2_slot6;
                            var3 = 'convert-before';
                            var2 = 0;
                            if (!(var3 === var4)) {
                                _fun101542_ip = 173;
                                continue _fun101542
                            }
                        case 169:
                            var2 = _closure2_slot5;
                        case 173:
                            var0.top = var2;
                            var1 = _closure2_slot9;
                            var0.zIndex = var1;
                            return var0;
                    }
                };
                var32 = var29.bind(var30)(var13, var23);
                var30 = _closure1_slot3;
                var29 = var30.useMemo;
                var13 = var26.pressableWrapper;
                var23 = new Array(3);
                var23[0] = var13;
                var23[1] = var20;
                var13 = var11.draggedElement;
                var23[2] = var13;
                var13 = function() { // Environment: var1
                    _fun101543: for (var _fun101543_ip = 0;;) switch (_fun101543_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var1 = var0.pressableWrapper;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var3 = _closure2_slot3;
                            var1 = undefined;
                            if (!var3) {
                                _fun101543_ip = 40;
                                continue _fun101543
                            }
                        case 30:
                            var2 = _closure2_slot11;
                            var1 = var2.draggedElement;
                        case 40:
                            var0[1] = var1;
                            var1 = _closure1_slot4;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var30 = var29.bind(var30)(var13, var23);
                var7 = var35[var7];
                var23 = var34.bind(var3)(var7);
                var13 = var23.useAnimatedStyle;
                var7 = function() {
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.withSpring;
                    var1 = global;
                    var9 = var1.Math;
                    var8 = var9.max;
                    var11 = var1.Math;
                    var10 = var11.min;
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 30;
                    var12 = var2 - var1;
                    var2 = 1;
                    var1 = 150;
                    var1 = var12 / var1;
                    var2 = var10.bind(var11)(var2, var1);
                    var1 = 0;
                    var2 = var8.bind(var9)(var1, var2);
                    var1 = 11;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.HOME_DRAWER_FLING_PHYSICS;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var29 = {};
                var37 = var35[var37];
                var37 = var34.bind(var3)(var37);
                var37 = var37.withSpring;
                var29.withSpring = var37;
                var29.panelX = var36;
                var36 = 30;
                var29.MIN_OPACITY_REVEAL_WIDTH = var36;
                var36 = 150;
                var29.MAX_OPACITY_REVEAL_WIDTH = var36;
                var33 = var35[var33];
                var33 = var34.bind(var3)(var33);
                var33 = var33.HOME_DRAWER_FLING_PHYSICS;
                var29.HOME_DRAWER_FLING_PHYSICS = var33;
                var7.__closure = var29;
                var29 = 97576264833.0;
                var7.__workletHash = var29;
                var29 = _closure1_slot17;
                var7.__initData = var29;
                var13 = var13.bind(var23)(var7);
                var23 = !var5;
                if (!var23) {
                    _fun101540_ip = 719;
                    continue _fun101540
                }
            case 716:
                var23 = !var27;
            case 719:
                if (var23) {
                    _fun101540_ip = 725;
                    continue _fun101540
                }
            case 722:
                var23 = var20;
            case 725:
                if (var23) {
                    _fun101540_ip = 731;
                    continue _fun101540
                }
            case 728:
                var23 = var2;
            case 731:
                _closure2_slot13 = var23;
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var2 = new Array(4);
                var2[0] = var23;
                var2[1] = var27;
                var2[2] = var15;
                var2[3] = var0;
                var0 = function() { // Environment: var1
                    _fun101545: for (var _fun101545_ip = 0;;) switch (_fun101545_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (var0) {
                                _fun101545_ip = 40;
                                continue _fun101545
                            }
                        case 10:
                            var0 = {};
                            var2 = _closure2_slot1;
                            var0.selected = var2;
                            var2 = _closure2_slot10;
                            var0.sharedId = var2;
                            var1 = _closure2_slot0;
                            var0.id = var1;
                            return var0;
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var29 = var5.bind(var7)(var0, var2);
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 13;
                var2 = var0[var2];
                var2 = var5.bind(var3)(var2);
                var7 = var2.MobileHomeDrawerExperiment;
                var5 = var7.useConfig;
                var2 = {};
                var15 = 'guilds_bar';
                var2.location = var15;
                var2 = var5.bind(var7)(var2);
                var7 = var2.enableHome;
                var5 = _closure1_slot3;
                var2 = var5.useRef;
                var2 = var2.bind(var5)(var3);
                _closure2_slot14 = var2;
                var15 = _closure1_slot3;
                var5 = var15.useEffect;
                var2 = new Array(1);
                var2[0] = var28;
                var1 = function() { // Environment: var1
                    _fun101546: for (var _fun101546_ip = 0;;) switch (_fun101546_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var2 = var0.current;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun101546_ip = 37;
                                continue _fun101546
                            }
                        case 18:
                            var3 = _closure2_slot14;
                            var2 = _closure2_slot8;
                            var3.current = var2;
                            _fun101546_ip = 193;
                            continue _fun101546;
                        case 37:
                            var2 = _closure2_slot14;
                            var3 = var2.current;
                            var2 = _closure2_slot8;
                            if (!(var3 !== var2)) {
                                _fun101546_ip = 193;
                                continue _fun101546
                            }
                        case 57:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var8 = 14;
                            var3 = var3[var8];
                            var3 = var4.bind(var0)(var3);
                            var5 = var3.intl;
                            var4 = var5.string;
                            var3 = _closure2_slot8;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.t;
                            if (var3) {
                                _fun101546_ip = 129;
                                continue _fun101546
                            }
                        case 119:
                            var3 = var6.jsudFd;
                            _fun101546_ip = 137;
                            continue _fun101546;
                        case 129:
                            var3 = var6.CUnsOR;
                        case 137:
                            var4 = var4.bind(var5)(var3);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 15;
                            var2 = var5[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var2 = var2.bind(var3)(var4);
                            var2 = _closure2_slot14;
                            var1 = _closure2_slot8;
                            var2.current = var1;
                        case 193:
                            return var0;
                    }
                };
                var1 = var5.bind(var15)(var1, var2);
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var15 = 9;
                var0 = var0[var15];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var33 = null;
                if (!var7) {
                    _fun101540_ip = 912;
                    continue _fun101540
                }
            case 907:
                var33 = var11.container;
            case 912:
                var23 = new Array(2);
                var23[0] = var33;
                var23[1] = var32;
                var0.style = var23;
                var0.layout = var16;
                var0.entering = var12;
                var0.exiting = var8;
                var0.preventClipping = var4;
                var23 = false;
                var0.collapsable = var23;
                var16 = _closure1_slot10;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 16;
                var4 = var12[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var42 = var4;
                var41 = var14;
                var12 = copyDataProperties(var42, var41);
                var12 = 'style';
                var4[var12] = var30;
                var30 = 'accessibilityLabel';
                var4[var30] = var31;
                var31 = true;
                var30 = 'accessible';
                var4[var30] = var31;
                var31 = 'button';
                var30 = 'accessibilityRole';
                var4[var30] = var31;
                var30 = {};
                var30.selected = var27;
                var30.expanded = var28;
                var28 = 'accessibilityState';
                var4[var28] = var30;
                var30 = _closure1_slot7;
                var28 = 'hitSlop';
                var4[var28] = var30;
                var28 = undefined;
                if (!var17) {
                    _fun101540_ip = 1129;
                    continue _fun101540
                }
            case 1072:
                var32 = _closure1_slot0;
                var33 = _closure1_slot2;
                var17 = 14;
                var30 = var33[var17];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var17 = var33[var17];
                var17 = var32.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.BGMUFB;
                var28 = var30.bind(var31)(var17);
            case 1129:
                var17 = 'accessibilityHint';
                var4[var17] = var28;
                var17 = 'collapsable';
                var4[var17] = var23;
                var17 = 'accessibilityActions';
                var4[var17] = var19;
                var17 = 'onAccessibilityAction';
                var4[var17] = var18;
                var17 = new Array(3);
                var17[0] = var9;
                var28 = _closure1_slot9;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 6;
                var9 = var23[var9];
                var9 = var18.bind(var3)(var9);
                var19 = var9.TransitionItem;
                var9 = {};
                var9.item = var29;
                var29 = _closure1_slot19;
                var9.renderItem = var29;
                var9 = var28.bind(var3)(var19, var9);
                var17[1] = var9;
                var19 = _closure1_slot9;
                var9 = 17;
                var9 = var23[var9];
                var9 = var18.bind(var3)(var9);
                var18 = var9.ClipViewAnimated;
                var9 = {};
                var28 = var26.itemShape;
                var23 = new Array(4);
                var23[0] = var28;
                var23[1] = var25;
                var25 = undefined;
                if (!var27) {
                    _fun101540_ip = 1281;
                    continue _fun101540
                }
            case 1275:
                var25 = var26.itemShapeSelected;
            case 1281:
                var23[2] = var25;
                var23[3] = var24;
                var9.style = var23;
                var9.cutouts = var22;
                var20 = !var20;
                if (!var20) {
                    _fun101540_ip = 1307;
                    continue _fun101540
                }
            case 1304:
                var20 = var21;
            case 1307:
                var9.children = var20;
                var9 = var19.bind(var3)(var18, var9);
                var17[2] = var9;
                var9 = 'children';
                var4[var9] = var17;
                var8 = var16.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = null;
                if (!var7) {
                    _fun101540_ip = 1416;
                    continue _fun101540
                }
            case 1349:
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var15];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var42 = var6;
                var41 = var14;
                var14 = copyDataProperties(var42, var41);
                var14 = var11.expandedChildrenWrapper;
                var11 = new Array(2);
                var11[0] = var14;
                var11[1] = var13;
                var6[var12] = var11;
                var6[var9] = var10;
                var5 = var8.bind(var3)(var7, var6);
            case 1416:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.useGuildsBarAnimatedWrapperStyles = var3;
    var2.UnreadIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4102, 13183, 33, 1297, 671, 4025, 4089, 3719, 6535, 13195, 13172, 8944, 3924, 1235, 3167, 6534, 5519, 2]);