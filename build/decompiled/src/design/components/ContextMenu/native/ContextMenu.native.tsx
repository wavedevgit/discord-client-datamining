// design/components/ContextMenu/native/ContextMenu.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function ContextMenuNativeTsx1(){const{measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;const measurements=measure(buttonRef);if(measurements!=null){const{pageX:pageX,pageY:pageY,height:height,width:width}=measurements;const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}}}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function onPanGestureEnd_ContextMenuNativeTsx2(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ContextMenuNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ContextMenuNativeTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function ContextMenuNativeTsx5(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function ContextMenuNativeTsx6(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function ContextMenuNativeTsx7(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ContextMenu/native/ContextMenu.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71380: for (var _fun71380_ip = 0;;) switch (_fun71380_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.children;
                var2 = var1.items;
                var _closure2_slot0 = var2;
                var10 = var1.triggerOnLongPress;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun71380_ip = 33;
                    continue _fun71380
                }
            case 31:
                var10 = false;
            case 33:
                var _closure2_slot1 = var10;
                var15 = var1.triggerOnTap;
                if (!(var15 === var4)) {
                    _fun71380_ip = 49;
                    continue _fun71380
                }
            case 47:
                var15 = false;
            case 49:
                var _closure2_slot2 = var15;
                var0 = var1.disableGesture;
                if (!(var0 === var4)) {
                    _fun71380_ip = 67;
                    continue _fun71380
                }
            case 65:
                var0 = false;
            case 67:
                var19 = var1.align;
                if (!(var19 === var4)) {
                    _fun71380_ip = 81;
                    continue _fun71380
                }
            case 77:
                var19 = 'auto';
            case 81:
                var _closure2_slot3 = var19;
                var22 = var1.title;
                var _closure2_slot4 = var22;
                var28 = var1.onOpen;
                var _closure2_slot5 = var28;
                var8 = var1.onClose;
                var _closure2_slot6 = var8;
                var18 = var1.keyboardShouldPersistTaps;
                var _closure2_slot7 = var18;
                var7 = var1.returnRef;
                var _closure2_slot8 = var7;
                var9 = var1.enabled;
                if (!(var9 === var4)) {
                    _fun71380_ip = 147;
                    continue _fun71380
                }
            case 145:
                var9 = true;
            case 147:
                var _closure2_slot9 = var9;
                var3 = var1.buttonRef;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var26 = 2;
                var11 = var11[var26];
                var12 = var12.bind(var4)(var11);
                var11 = var12.useAnimatedRef;
                var11 = var11.bind(var12)();
                var12 = null;
                if (!(var12 != var3)) {
                    _fun71380_ip = 259;
                    continue _fun71380
                }
            case 256:
                var11 = var3;
            case 259:
                _closure2_slot10 = var11;
                var13 = _closure1_slot3;
                var12 = var13.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var5
                    _fun71381: for (var _fun71381_ip = 0;;) switch (_fun71381_ip) {
                        case 0:
                            var5 = _closure2_slot0;
                            var1 = global;
                            var4 = var1.Array;
                            var2 = var4.isArray;
                            var1 = 0;
                            var1 = var5[var1];
                            var4 = var2.bind(var4)(var1);
                            var5 = _closure2_slot0;
                            if (var4) {
                                _fun71381_ip = 45;
                                continue _fun71381
                            }
                        case 40:
                            var2 = var5;
                            _fun71381_ip = 55;
                            continue _fun71381;
                        case 45:
                            var1 = var5.flat;
                            var2 = var1.bind(var5)();
                        case 55:
                            var _closure3_slot0 = var2;
                            var1 = new Array(0);
                            var _closure3_slot1 = var1;
                            if (!var4) {
                                _fun71381_ip = 91;
                                continue _fun71381
                            }
                        case 70:
                            var4 = _closure2_slot0;
                            var3 = var4.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun71382: for (var _fun71382_ip = 0;;) switch (_fun71382_ip) {
                                    case 0:
                                        var0 = arg1;
                                        var5 = 0;
                                        if (!(var0 > var5)) {
                                            _fun71382_ip = 48;
                                            continue _fun71382
                                        }
                                    case 9:
                                        var2 = _closure3_slot1;
                                        var1 = var2.push;
                                        var4 = _closure3_slot0;
                                        var3 = var4.indexOf;
                                        var0 = arg0;
                                        var0 = var0[var5];
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var1.bind(var2)(var0);
                                    case 48:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var0);
                        case 91:
                            var0 = {};
                            var0.items = var2;
                            var0.dividerIndexes = var1;
                            return var0;
                    }
                };
                var3 = var12.bind(var13)(var2, var3);
                var2 = var3.items;
                _closure2_slot11 = var2;
                var16 = var3.dividerIndexes;
                _closure2_slot12 = var16;
                var21 = var2.length;
                _closure2_slot13 = var21;
                var12 = _closure1_slot1;
                var23 = _closure1_slot2;
                var3 = 3;
                var3 = var23[var3];
                var12 = var12.bind(var4)(var3);
                var3 = {};
                var14 = _closure1_slot0;
                var13 = 4;
                var13 = var23[var13];
                var17 = var14.bind(var4)(var13);
                var13 = var17.isAndroid;
                var13 = var13.bind(var17)();
                var3.ignoreKeyboard = var13;
                var3 = var12.bind(var4)(var3);
                var17 = var3.width;
                _closure2_slot14 = var17;
                var20 = var3.height;
                _closure2_slot15 = var20;
                var12 = 5;
                var3 = var23[var12];
                var13 = var14.bind(var4)(var3);
                var3 = var13.useContextMenuState;
                var3 = var3.bind(var13)();
                _closure2_slot16 = var3;
                var29 = var3.activeIndex;
                _closure2_slot17 = var29;
                var13 = 6;
                var13 = var23[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.useFontScale;
                var30 = var13.bind(var14)();
                if (!(var4 === var7)) {
                    _fun71380_ip = 462;
                    continue _fun71380
                }
            case 459:
                var7 = var11;
            case 462:
                _closure2_slot8 = var7;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var12 = var24[var12];
                var13 = var25.bind(var4)(var12);
                var12 = var13.useActiveContextMenu;
                var12 = var12.bind(var13)();
                _closure2_slot18 = var12;
                var13 = var24[var26];
                var23 = var25.bind(var4)(var13);
                var14 = var23.useSharedValue;
                var13 = global;
                var32 = var13.Math;
                var31 = var32.max;
                var27 = 7;
                var13 = var24[var27];
                var13 = var25.bind(var4)(var13);
                var33 = var13.CONTEXT_MENU_ITEM_BASE_HEIGHT;
                var13 = var24[var27];
                var13 = var25.bind(var4)(var13);
                var13 = var13.CONTEXT_MENU_ITEM_PADDING;
                var13 = var26 * var13;
                var13 = var33 - var13;
                var33 = var13 * var30;
                var13 = var24[var27];
                var13 = var25.bind(var4)(var13);
                var13 = var13.CONTEXT_MENU_ITEM_PADDING;
                var13 = var26 * var13;
                var30 = var24[var27];
                var30 = var25.bind(var4)(var30);
                var30 = var30.CONTEXT_MENU_ITEM_BASE_HEIGHT;
                var13 = var33 + var13;
                var13 = var31.bind(var32)(var13, var30);
                var23 = var14.bind(var23)(var13);
                _closure2_slot19 = var23;
                var13 = _closure1_slot3;
                var14 = var13.useRef;
                var14 = var14.bind(var13)(var2);
                _closure2_slot20 = var14;
                var31 = var13.useLayoutEffect;
                var30 = new Array(1);
                var30[0] = var2;
                var14 = function() { // Environment: var5
                    var1 = _closure2_slot20;
                    var0 = _closure2_slot11;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var14 = var31.bind(var13)(var14, var30);
                var30 = var13.useLayoutEffect;
                var14 = new Array(2);
                var14[0] = var12;
                var14[1] = var3;
                var12 = function() { // Environment: var5
                    _fun71384: for (var _fun71384_ip = 0;;) switch (_fun71384_ip) {
                        case 0:
                            var2 = _closure2_slot18;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun71384_ip = 53;
                                continue _fun71384
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.resetContextMenuState;
                            var0 = _closure2_slot16;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var30.bind(var13)(var12, var14);
                var14 = var13.useCallback;
                var12 = new Array(2);
                var12[0] = var29;
                var12[1] = var8;
                var8 = function(arg0) { // Environment: var5
                    _fun71385: for (var _fun71385_ip = 0;;) switch (_fun71385_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun71385_ip = 27;
                                continue _fun71385
                            }
                        case 13:
                            var4 = _closure2_slot6;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                        case 27:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 5;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.hideContextMenu;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot17;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = -1;
                            if (!(var4 !== var3)) {
                                _fun71385_ip = 111;
                                continue _fun71385
                            }
                        case 85:
                            var2 = _closure2_slot20;
                            var2 = var2.current;
                            var2 = var2[var3];
                            if (!(var1 != var2)) {
                                _fun71385_ip = 111;
                                continue _fun71385
                            }
                        case 102:
                            var1 = var2.action;
                            var1 = var1.bind(var2)();
                        case 111:
                            return var0;
                    }
                };
                var12 = var14.bind(var13)(var8, var12);
                _closure2_slot21 = var12;
                var14 = var13.useCallback;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setAccessibilityFocus;
                    var1 = {};
                    var4 = _closure2_slot8;
                    var1.ref = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var14.bind(var13)(var7, var8);
                _closure2_slot22 = var7;
                var14 = var13.useCallback;
                var8 = new Array(8);
                var8[0] = var28;
                var8[1] = var3;
                var8[2] = var2;
                var8[3] = var22;
                var8[4] = var18;
                var8[5] = var12;
                var8[6] = var7;
                var8[7] = var16;
                var7 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var5
                    _fun71387: for (var _fun71387_ip = 0;;) switch (_fun71387_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun71387_ip = 23;
                                continue _fun71387
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var6 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var5 = var4[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var5);
                            var5 = var7.uid;
                            var5 = var5.bind(var7)();
                            var6.key = var5;
                            var5 = arg0;
                            var6.x = var5;
                            var5 = arg1;
                            var6.y = var5;
                            var5 = arg2;
                            var6.positionX = var5;
                            var5 = arg3;
                            var6.positionY = var5;
                            var5 = arg4;
                            var6.height = var5;
                            var5 = arg5;
                            var6.width = var5;
                            var5 = _closure2_slot16;
                            var6.state = var5;
                            var5 = _closure2_slot11;
                            var6.items = var5;
                            var5 = _closure2_slot4;
                            var6.title = var5;
                            var5 = _closure2_slot7;
                            var6.keyboardShouldPersistTaps = var5;
                            var5 = _closure2_slot21;
                            var6.requestClose = var5;
                            var5 = _closure2_slot22;
                            var6.onClose = var5;
                            var2 = _closure2_slot12;
                            var6.dividerIndexes = var2;
                            var2 = 5;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var2 = var5.showContextMenu;
                            var2 = var2.bind(var5)(var6);
                            var2 = 4;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun71387_ip = 300;
                                continue _fun71387
                            }
                        case 216:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 11;
                            var4 = var7[var1];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.ZqK0uI;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                        case 300:
                            return var0;
                    }
                };
                var18 = var14.bind(var13)(var7, var8);
                _closure2_slot23 = var18;
                var14 = var13.useCallback;
                var8 = function() {
                    _fun71388: for (var _fun71388_ip = 0;;) switch (_fun71388_ip) {
                        case 0:
                            var3 = function arg0() {
                                _fun71389: for (var _fun71389_ip = 0;;) switch (_fun71389_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 7;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var0 = var0.CONTEXT_MENU_OFFSET;
                                        var0 = {};
                                        var3 = _closure3_slot6;
                                        var5 = _closure3_slot5;
                                        var1 = _closure3_slot1;
                                        var1 = var5 < var1;
                                        if (!(var3 !== var1)) {
                                            _fun71389_ip = 80;
                                            continue _fun71389
                                        }
                                    case 59:
                                        var3 = _closure3_slot6;
                                        var1 = 'below';
                                        if (!var3) {
                                            _fun71389_ip = 78;
                                            continue _fun71389
                                        }
                                    case 72:
                                        var1 = 'above';
                                    case 78:
                                        _fun71389_ip = 110;
                                        continue _fun71389;
                                    case 80:
                                        var5 = _closure3_slot4;
                                        var3 = _closure3_slot5;
                                        var5 = var5 > var3;
                                        var3 = 'above';
                                        if (!var5) {
                                            _fun71389_ip = 107;
                                            continue _fun71389
                                        }
                                    case 101:
                                        var3 = 'below';
                                    case 107:
                                        var1 = var3;
                                    case 110:
                                        var3 = 'above';
                                        if (!(var3 !== var1)) {
                                            _fun71389_ip = 126;
                                            continue _fun71389
                                        }
                                    case 120:
                                        var3 = _closure3_slot2;
                                        _fun71389_ip = 130;
                                        continue _fun71389;
                                    case 126:
                                        var3 = _closure3_slot3;
                                    case 130:
                                        var2 = null;
                                        var5 = var2 != var4;
                                        var2 = 0;
                                        if (!var5) {
                                            _fun71389_ip = 144;
                                            continue _fun71389
                                        }
                                    case 141:
                                        var2 = var4;
                                    case 144:
                                        var2 = var3 + var2;
                                        var0.y = var2;
                                        var0.positionY = var1;
                                        return var0;
                                }
                            };
                            var2 = function() {
                                _fun71390: for (var _fun71390_ip = 0;;) switch (_fun71390_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var1 = 7;
                                        var3 = var8[var1];
                                        var6 = undefined;
                                        var3 = var7.bind(var6)(var3);
                                        var3 = var3.CONTEXT_MENU_EDGE_OFFSET;
                                        var4 = var2 - var3;
                                        var5 = _closure2_slot14;
                                        var3 = var8[var1];
                                        var3 = var7.bind(var6)(var3);
                                        var3 = var3.CONTEXT_MENU_EDGE_OFFSET;
                                        var3 = var5 - var3;
                                        var5 = _closure3_slot0;
                                        var1 = var8[var1];
                                        var1 = var7.bind(var6)(var1);
                                        var1 = var1.CONTEXT_MENU_MIN_WIDTH;
                                        var1 = var5 + var1;
                                        var3 = var3 - var1;
                                        var1 = 'left';
                                        if (!(var4 > var3)) {
                                            _fun71390_ip = 111;
                                            continue _fun71390
                                        }
                                    case 103:
                                        var2 = _closure3_slot7;
                                        var1 = 'right';
                                    case 111:
                                        var0 = {};
                                        var0.x = var2;
                                        var0.positionX = var1;
                                        return var0;
                                }
                            };
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var10 = 2;
                            var1 = var0[var10];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var1);
                            var6 = var7.measure;
                            var4 = _closure2_slot10;
                            var4 = var6.bind(var7)(var4);
                            var11 = null;
                            if (!(var11 != var4)) {
                                _fun71388_ip = 764;
                                continue _fun71388
                            }
                        case 68:
                            var9 = var4.pageX;
                            var _closure3_slot0 = var9;
                            var17 = var4.pageY;
                            var13 = var4.height;
                            var7 = var4.width;
                            var4 = _closure2_slot4;
                            if (!(var11 == var4)) {
                                _fun71388_ip = 108;
                                continue _fun71388
                            }
                        case 102:
                            var6 = _closure2_slot13;
                            _fun71388_ip = 119;
                            continue _fun71388;
                        case 108:
                            var12 = _closure2_slot13;
                            var4 = 1;
                            var6 = var12 + var4;
                        case 119:
                            var4 = _closure2_slot4;
                            var4 = var11 != var4;
                            var11 = 0;
                            if (!var4) {
                                _fun71388_ip = 135;
                                continue _fun71388
                            }
                        case 132:
                            var11 = 1;
                        case 135:
                            var4 = _closure2_slot12;
                            var4 = var4.length;
                            var12 = var11 + var4;
                            var11 = _closure2_slot19;
                            var4 = var11.get;
                            var4 = var4.bind(var11)();
                            var6 = var4 * var6;
                            var18 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var11 = 7;
                            var4 = var14[var11];
                            var4 = var18.bind(var0)(var4);
                            var4 = var4.CONTEXT_MENU_DIVIDER_HEIGHT;
                            var4 = var4 * var12;
                            var6 = var6 + var4;
                            var _closure3_slot1 = var6;
                            var12 = var17 + var13;
                            var4 = var14[var11];
                            var4 = var18.bind(var0)(var4);
                            var4 = var4.CONTEXT_MENU_OFFSET;
                            var12 = var12 + var4;
                            var _closure3_slot2 = var12;
                            var4 = _closure2_slot15;
                            var15 = var4 - var17;
                            var4 = var14[var11];
                            var4 = var18.bind(var0)(var4);
                            var4 = var4.CONTEXT_MENU_OFFSET;
                            var4 = var15 + var4;
                            var _closure3_slot3 = var4;
                            var15 = _closure2_slot15;
                            var16 = var15 - var12;
                            var15 = var14[var11];
                            var15 = var18.bind(var0)(var15);
                            var15 = var15.CONTEXT_MENU_EDGE_OFFSET;
                            var15 = var16 - var15;
                            var _closure3_slot4 = var15;
                            var16 = var14[var11];
                            var16 = var18.bind(var0)(var16);
                            var16 = var16.CONTEXT_MENU_EDGE_OFFSET;
                            var16 = var17 - var16;
                            var _closure3_slot5 = var16;
                            var15 = var15 < var6;
                            var _closure3_slot6 = var15;
                            var15 = global;
                            var17 = var15.Math;
                            var16 = var17.max;
                            var15 = _closure2_slot14;
                            var15 = var15 - var9;
                            var15 = var15 - var7;
                            var14 = var14[var11];
                            var14 = var18.bind(var0)(var14);
                            var14 = var14.CONTEXT_MENU_EDGE_OFFSET;
                            var14 = var16.bind(var17)(var15, var14);
                            var _closure3_slot7 = var14;
                            var15 = _closure2_slot3;
                            var5 = 'auto';
                            if (!(var5 !== var15)) {
                                _fun71388_ip = 688;
                                continue _fun71388
                            }
                        case 388:
                            var15 = _closure2_slot3;
                            var5 = 'above';
                            if (!(var5 !== var15)) {
                                _fun71388_ip = 608;
                                continue _fun71388
                            }
                        case 405:
                            var16 = _closure2_slot3;
                            var15 = 'below';
                            if (!(var15 !== var16)) {
                                _fun71388_ip = 608;
                                continue _fun71388
                            }
                        case 422:
                            var17 = _closure2_slot3;
                            var16 = 'left';
                            var15 = var16;
                            if (!(var15 === var17)) {
                                _fun71388_ip = 441;
                                continue _fun71388
                            }
                        case 437:
                            var15 = 'right';
                        case 441:
                            if (!(var16 !== var15)) {
                                _fun71388_ip = 478;
                                continue _fun71388
                            }
                        case 445:
                            var16 = var14 + var7;
                            var17 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var14 = var14[var11];
                            var14 = var17.bind(var0)(var14);
                            var14 = var14.CONTEXT_MENU_OFFSET;
                            var14 = var16 + var14;
                            _fun71388_ip = 509;
                            continue _fun71388;
                        case 478:
                            var16 = var9 + var7;
                            var17 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var9 = var17.bind(var0)(var9);
                            var9 = var9.CONTEXT_MENU_OFFSET;
                            var14 = var16 + var9;
                        case 509:
                            var16 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var11 = var9[var11];
                            var11 = var16.bind(var0)(var11);
                            var11 = var11.CONTEXT_MENU_OFFSET;
                            var13 = var11 + var13;
                            var11 = -1;
                            var11 = var11 * var13;
                            var11 = var3.bind(var0)(var11);
                            var23 = var11.y;
                            var21 = var11.positionY;
                            var9 = var9[var10];
                            var17 = var16.bind(var0)(var9);
                            var16 = var17.runOnJS;
                            var9 = _closure2_slot23;
                            var9 = var16.bind(var17)(var9);
                            var25 = undefined;
                            var24 = var14;
                            var22 = var15;
                            var20 = var6;
                            var19 = var7;
                            var9 = var25[var9](var24, var23, var22, var21, var20, var19, var18);
                            _fun71388_ip = 764;
                            continue _fun71388;
                        case 608:
                            var11 = _closure2_slot3;
                            if (!(var5 === var11)) {
                                _fun71388_ip = 619;
                                continue _fun71388
                            }
                        case 616:
                            var12 = var4;
                        case 619:
                            var4 = var2.bind(var0)();
                            var9 = var4.x;
                            var22 = var4.positionX;
                            var13 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var10];
                            var14 = var13.bind(var0)(var4);
                            var13 = var14.runOnJS;
                            var4 = _closure2_slot23;
                            var4 = var13.bind(var14)(var4);
                            var25 = undefined;
                            var24 = var9;
                            var23 = var12;
                            var21 = var11;
                            var20 = var6;
                            var19 = var7;
                            var4 = var25[var4](var24, var23, var22, var21, var20, var19, var18);
                            _fun71388_ip = 764;
                            continue _fun71388;
                        case 688:
                            var3 = var3.bind(var0)();
                            var23 = var3.y;
                            var21 = var3.positionY;
                            var2 = var2.bind(var0)();
                            var3 = var2.x;
                            var22 = var2.positionX;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var10];
                            var9 = var9.bind(var0)(var8);
                            var8 = var9.runOnJS;
                            var1 = _closure2_slot23;
                            var1 = var8.bind(var9)(var1);
                            var25 = undefined;
                            var24 = var3;
                            var20 = var6;
                            var19 = var7;
                            var1 = var25[var1](var24, var23, var22, var21, var20, var19, var18);
                        case 764:
                            return var0;
                    }
                };
                var7 = {};
                var28 = var24[var26];
                var28 = var25.bind(var4)(var28);
                var28 = var28.measure;
                var7.measure = var28;
                var7.buttonRef = var11;
                var7.title = var22;
                var7.itemCount = var21;
                var7.dividerIndexes = var16;
                var7.approximateItemHeight = var23;
                var28 = var24[var27];
                var28 = var25.bind(var4)(var28);
                var28 = var28.CONTEXT_MENU_DIVIDER_HEIGHT;
                var7.CONTEXT_MENU_DIVIDER_HEIGHT = var28;
                var28 = var24[var27];
                var28 = var25.bind(var4)(var28);
                var28 = var28.CONTEXT_MENU_OFFSET;
                var7.CONTEXT_MENU_OFFSET = var28;
                var7.screenHeight = var20;
                var28 = var24[var27];
                var28 = var25.bind(var4)(var28);
                var28 = var28.CONTEXT_MENU_EDGE_OFFSET;
                var7.CONTEXT_MENU_EDGE_OFFSET = var28;
                var7.screenWidth = var17;
                var27 = var24[var27];
                var27 = var25.bind(var4)(var27);
                var27 = var27.CONTEXT_MENU_MIN_WIDTH;
                var7.CONTEXT_MENU_MIN_WIDTH = var27;
                var7.menuAlign = var19;
                var24 = var24[var26];
                var24 = var25.bind(var4)(var24);
                var24 = var24.runOnJS;
                var7.runOnJS = var24;
                var7.showMenu = var18;
                var8.__closure = var7;
                var7 = 2477764733179.0;
                var8.__workletHash = var7;
                var7 = _closure1_slot6;
                var8.__initData = var7;
                var7 = new Array(9);
                var7[0] = var11;
                var7[1] = var23;
                var7[2] = var22;
                var7[3] = var21;
                var7[4] = var20;
                var7[5] = var19;
                var7[6] = var18;
                var7[7] = var17;
                var7[8] = var16;
                var14 = var14.bind(var13)(var8, var7);
                _closure2_slot24 = var14;
                var8 = var13.useMemo;
                var7 = new Array(6);
                var7[0] = var10;
                var7[1] = var15;
                var7[2] = var12;
                var7[3] = var9;
                var7[4] = var3;
                var7[5] = var14;
                var3 = function() { // Environment: var5
                    _fun71391: for (var _fun71391_ip = 0;;) switch (_fun71391_ip) {
                        case 0:
                            var0 = function() { // Environment: var2
                                var0 = function() {
                                    var0 = _closure2_slot16;
                                    var2 = var0.activeIndex;
                                    var0 = var2.get;
                                    var3 = var0.bind(var2)();
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 2;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var2);
                                    var2 = var4.runOnJS;
                                    var1 = _closure2_slot21;
                                    var2 = var2.bind(var4)(var1);
                                    var1 = -1;
                                    var1 = var1 === var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2 = {};
                                var1 = _closure2_slot16;
                                var2.state = var1;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var4 = 2;
                                var5 = var5[var4];
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var4 = var4.runOnJS;
                                var2.runOnJS = var4;
                                var3 = _closure2_slot21;
                                var2.requestClose = var3;
                                var0.__closure = var2;
                                var2 = 15045613912826.0;
                                var0.__workletHash = var2;
                                var1 = _closure1_slot7;
                                var0.__initData = var1;
                                return var0;
                            };
                            var4 = undefined;
                            var7 = var0.bind(var4)();
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun71391_ip = 399;
                                continue _fun71391
                            }
                        case 31:
                            var0 = _closure2_slot2;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 12;
                            var1 = var12[var1];
                            var1 = var11.bind(var4)(var1);
                            var3 = var1.Gesture;
                            if (var0) {
                                _fun71391_ip = 312;
                                continue _fun71391
                            }
                        case 67:
                            var0 = var3.Pan;
                            var5 = var0.bind(var3)();
                            var1 = var5.enabled;
                            var0 = _closure2_slot9;
                            var5 = var1.bind(var5)(var0);
                            var1 = var5.onBegin;
                            var0 = function() {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 2;
                                var1 = var4[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var1);
                                var5 = var6.runOnJS;
                                var1 = 13;
                                var2 = var4[var1];
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.triggerHapticFeedback;
                                var2 = var5.bind(var6)(var2);
                                var1 = var4[var1];
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.HapticFeedbackTypes;
                                var1 = var1.IMPACT_MEDIUM;
                                var1 = var2.bind(var0)(var1);
                                var1 = _closure2_slot24;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var6 = {};
                            var9 = 2;
                            var9 = var12[var9];
                            var9 = var11.bind(var4)(var9);
                            var9 = var9.runOnJS;
                            var6.runOnJS = var9;
                            var9 = 13;
                            var13 = var12[var9];
                            var13 = var11.bind(var4)(var13);
                            var13 = var13.triggerHapticFeedback;
                            var6.triggerHapticFeedback = var13;
                            var9 = var12[var9];
                            var9 = var11.bind(var4)(var9);
                            var9 = var9.HapticFeedbackTypes;
                            var6.HapticFeedbackTypes = var9;
                            var9 = _closure2_slot24;
                            var6.measureButtonAndShowMenu = var9;
                            var0.__closure = var6;
                            var6 = 3614426364216.0;
                            var0.__workletHash = var6;
                            var6 = _closure1_slot12;
                            var0.__initData = var6;
                            var5 = var1.bind(var5)(var0);
                            var1 = var5.onUpdate;
                            var0 = function arg0() {
                                var1 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.updateContextMenuState;
                                var3 = var1.absoluteX;
                                var2 = var1.absoluteY;
                                var1 = _closure2_slot16;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var6 = {};
                            var9 = 5;
                            var9 = var12[var9];
                            var9 = var11.bind(var4)(var9);
                            var9 = var9.updateContextMenuState;
                            var6.updateContextMenuState = var9;
                            var9 = _closure2_slot16;
                            var6.state = var9;
                            var0.__closure = var6;
                            var6 = 8243568905832.0;
                            var0.__workletHash = var6;
                            var6 = _closure1_slot11;
                            var0.__initData = var6;
                            var1 = var1.bind(var5)(var0);
                            var0 = var1.onEnd;
                            var0 = var0.bind(var1)(var7);
                            _fun71391_ip = 397;
                            continue _fun71391;
                        case 312:
                            var1 = var3.Tap;
                            var5 = var1.bind(var3)();
                            var3 = var5.enabled;
                            var1 = _closure2_slot9;
                            var5 = var3.bind(var5)(var1);
                            var3 = var5.onStart;
                            var1 = function() {
                                var1 = _closure2_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var6 = {};
                            var9 = _closure2_slot24;
                            var6.measureButtonAndShowMenu = var9;
                            var1.__closure = var6;
                            var6 = 806186984867.0;
                            var1.__workletHash = var6;
                            var6 = _closure1_slot10;
                            var1.__initData = var6;
                            var0 = var3.bind(var5)(var1);
                        case 397:
                            return var0;
                        case 399:
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var3 = var5[var0];
                            var3 = var1.bind(var4)(var3);
                            var6 = var3.Gesture;
                            var3 = var6.Pan;
                            var6 = var3.bind(var6)();
                            var3 = var6.enabled;
                            var9 = _closure2_slot9;
                            var11 = var3.bind(var6)(var9);
                            var6 = var11.onUpdate;
                            var3 = function arg0() {
                                var1 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 5;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.updateContextMenuState;
                                var3 = var1.absoluteX;
                                var2 = var1.absoluteY;
                                var1 = _closure2_slot16;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var12 = {};
                            var13 = 5;
                            var13 = var5[var13];
                            var13 = var1.bind(var4)(var13);
                            var13 = var13.updateContextMenuState;
                            var12.updateContextMenuState = var13;
                            var13 = _closure2_slot16;
                            var12.state = var13;
                            var3.__closure = var12;
                            var12 = 16675037579085.0;
                            var3.__workletHash = var12;
                            var12 = _closure1_slot8;
                            var3.__initData = var12;
                            var6 = var6.bind(var11)(var3);
                            var3 = var6.onEnd;
                            var3 = var3.bind(var6)(var7);
                            var6 = var5[var0];
                            var6 = var1.bind(var4)(var6);
                            var7 = var6.Gesture;
                            var6 = var7.LongPress;
                            var7 = var6.bind(var7)();
                            var6 = var7.enabled;
                            var9 = var6.bind(var7)(var9);
                            var7 = var9.shouldCancelWhenOutside;
                            var6 = false;
                            var7 = var7.bind(var9)(var6);
                            var6 = var7.onStart;
                            var2 = function() {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 2;
                                var1 = var4[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var1);
                                var5 = var6.runOnJS;
                                var1 = 13;
                                var2 = var4[var1];
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.triggerHapticFeedback;
                                var2 = var5.bind(var6)(var2);
                                var1 = var4[var1];
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.HapticFeedbackTypes;
                                var1 = var1.IMPACT_MEDIUM;
                                var1 = var2.bind(var0)(var1);
                                var1 = _closure2_slot24;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var9 = {};
                            var11 = 2;
                            var11 = var5[var11];
                            var11 = var1.bind(var4)(var11);
                            var11 = var11.runOnJS;
                            var9.runOnJS = var11;
                            var11 = 13;
                            var12 = var5[var11];
                            var12 = var1.bind(var4)(var12);
                            var12 = var12.triggerHapticFeedback;
                            var9.triggerHapticFeedback = var12;
                            var11 = var5[var11];
                            var11 = var1.bind(var4)(var11);
                            var11 = var11.HapticFeedbackTypes;
                            var9.HapticFeedbackTypes = var11;
                            var10 = _closure2_slot24;
                            var9.measureButtonAndShowMenu = var10;
                            var2.__closure = var9;
                            var9 = 15422046945883.0;
                            var2.__workletHash = var9;
                            var8 = _closure1_slot9;
                            var2.__initData = var8;
                            var2 = var6.bind(var7)(var2);
                            var0 = var5[var0];
                            var0 = var1.bind(var4)(var0);
                            var1 = var0.Gesture;
                            var0 = var1.Simultaneous;
                            var0 = var0.bind(var1)(var2, var3);
                            return var0;
                    }
                };
                var7 = var8.bind(var13)(var3, var7);
                var9 = var13.useMemo;
                var8 = new Array(1);
                var8[0] = var2;
                var3 = function() { // Environment: var5
                    var2 = _closure2_slot11;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.label;
                        var0.name = var2;
                        var1 = var1.label;
                        var0.label = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var9.bind(var13)(var3, var8);
                var9 = var13.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function(arg0) { // Environment: var5
                    _fun71401: for (var _fun71401_ip = 0;;) switch (_fun71401_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot11;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.label;
                                var0 = _closure3_slot0;
                                var0 = var0.nativeEvent;
                                var0 = var0.actionName;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var3 = null;
                            var0 = var3 == var1;
                            if (var0) {
                                _fun71401_ip = 51;
                                continue _fun71401
                            }
                        case 42:
                            var2 = var1.action;
                            var0 = var3 == var2;
                        case 51:
                            if (var0) {
                                _fun71401_ip = 63;
                                continue _fun71401
                            }
                        case 54:
                            var0 = var1.action;
                            var0 = var0.bind(var1)();
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var13)(var2, var8);
                var12 = var13.useCallback;
                var9 = new Array(1);
                var9[0] = var14;
                var8 = function() { // Environment: var5
                    _fun71403: for (var _fun71403_ip = 0;;) switch (_fun71403_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun71403_ip = 68;
                                continue _fun71403
                            }
                        case 38:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 14;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.getIsScreenReaderEnabled;
                            var2 = var3.bind(var4)();
                        case 68:
                            if (!var2) {
                                _fun71403_ip = 113;
                                continue _fun71403
                            }
                        case 71:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 2;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnUI;
                            var1 = _closure2_slot24;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                        case 113:
                            return var0;
                    }
                };
                var8 = var12.bind(var13)(var8, var9);
                var12 = var13.useCallback;
                var9 = new Array(1);
                var9[0] = var14;
                var5 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnUI;
                    var1 = _closure2_slot24;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9 = var12.bind(var13)(var5, var9);
                var5 = {};
                var5.ref = var11;
                var5.onPress = var8;
                var8 = undefined;
                if (!var10) {
                    _fun71380_ip = 1258;
                    continue _fun71380
                }
            case 1250:
                var8 = undefined;
                if (!var0) {
                    _fun71380_ip = 1258;
                    continue _fun71380
                }
            case 1255:
                var8 = var9;
            case 1258:
                var5.onLongPress = var8;
                var5.accessibilityActions = var3;
                var5.onAccessibilityAction = var2;
                var3 = _closure1_slot5;
                if (var0) {
                    _fun71380_ip = 1330;
                    continue _fun71380
                }
            case 1280:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var7;
                var7 = var6.bind(var4)(var5);
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun71380_ip = 1351;
                continue _fun71380;
            case 1330:
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var6.bind(var4)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1351:
                return var0;
        }
    };
    var2.ContextMenu = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3681, 1464, 478, 5185, 4051, 5184, 4850, 4892, 3167, 1234, 4926, 3240, 4031, 2]);