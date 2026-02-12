// modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var4 = var1.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var14 = var1.StyleSheet;
    var _closure1_slot5 = var14;
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.getIsChannelDetailsSearchActive;
    var _closure1_slot7 = var8;
    var1 = var1.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var12 = var1.MIDNIGHT_BORDER_WIDTH;
    var _closure1_slot9 = var12;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.AnalyticEvents;
    var _closure1_slot10 = var8;
    var8 = var1.ComponentActions;
    var _closure1_slot11 = var8;
    var1 = var1.ThemeTypes;
    var _closure1_slot12 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot13 = var8;
    var1 = var1.jsxs;
    var _closure1_slot14 = var1;
    var1 = 7;
    var1 = var6[var1];
    var10 = var7.bind(var0)(var1);
    var1 = var10.prototype;
    var9 = Object.create(var1, {
        constructor: {
            value: var10
        }
    });
    var19 = 'SwipeForMemberListWrapper';
    var20 = var9;
    var1 = new var20[var10](var19, var18);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot15 = var1;
    var1 = var4.createContext;
    var1 = var1.bind(var4)(var0);
    var _closure1_slot16 = var1;
    var4 = 8;
    var4 = var6[var4];
    var10 = var5.bind(var0)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'flex-start',
        'overflow': 'hidden'
    };
    var15 = 'hidden';
    var13 = 9;
    var16 = var6[var13];
    var16 = var7.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var16;
    var4.memberListPreview = var11;
    var11 = {};
    var18 = var14.absoluteFillObject;
    var19 = var11;
    var14 = copyDataProperties(var19, var18);
    var14 = 'overflow';
    var11[var14] = var15;
    var4.content = var11;
    var11 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var14 = var6[var13];
    var14 = var7.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MODAL_BACKGROUND;
    var11.backgroundColor = var14;
    var4.memberListContainer = var11;
    var11 = {};
    var13 = var6[var13];
    var13 = var7.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var11.borderLeftColor = var13;
    var11.borderLeftWidth = var12;
    var4.midnightBorder = var11;
    var11 = {};
    var12 = -var12;
    var11.right = var12;
    var4.midnightRightOverflow = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}';
    var4.code = var9;
    var _closure1_slot18 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}';
    var4.code = var9;
    var _closure1_slot19 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}';
    var4.code = var9;
    var _closure1_slot20 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}';
    var4.code = var9;
    var _closure1_slot21 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}';
    var4.code = var9;
    var _closure1_slot22 = var4;
    var4 = {};
    var9 = 'function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,MIDNIGHT_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.MIDNIGHT||isChatBesideChannelList)return translateX.get();return translateX.get()-MIDNIGHT_BORDER_WIDTH;}';
    var4.code = var9;
    var _closure1_slot23 = var4;
    var4 = {};
    var9 = "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}";
    var4.code = var9;
    var _closure1_slot24 = var4;
    var4 = 15;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = {
        'absolute': true,
        'withOverlay': true,
        'overlayOpacity': 0.5
    };
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot25 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun105665: for (var _fun105665_ip = 0;;) switch (_fun105665_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channelId;
                var _closure2_slot0 = var13;
                var0 = var1.screenIndex;
                var _closure2_slot1 = var0;
                var2 = var1.isBackEnabled;
                var _closure2_slot2 = var2;
                var10 = var1.children;
                var11 = var1.style;
                var1 = _closure1_slot17;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var16 = var1.bind(var3)();
                var _closure2_slot3 = var16;
                var1 = 12;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var15 = var1.isChatBesideChannelList;
                var _closure2_slot4 = var15;
                var8 = _closure1_slot4;
                var1 = var8.useState;
                var4 = var1.bind(var8)(var13);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var29 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot5 = var1;
                var4 = var8.useEffect;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var9
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runAfterInteractions;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot5;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 200;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var4.bind(var8)(var1, var2);
                var4 = var8.useCallback;
                var2 = function() { // Environment: var9
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var12 = var4.bind(var8)(var2, var1);
                var1 = 19;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var26 = var1.bind(var3)(var0);
                var _closure2_slot6 = var26;
                var4 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var16;
                var2[1] = var26;
                var1 = function() { // Environment: var9
                    _fun105670: for (var _fun105670_ip = 0;;) switch (_fun105670_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var0 = _closure1_slot12;
                            var0 = var0.MIDNIGHT;
                            if (!(var3 !== var0)) {
                                _fun105670_ip = 30;
                                continue _fun105670
                            }
                        case 24:
                            var0 = _closure2_slot6;
                            _fun105670_ip = 42;
                            continue _fun105670;
                        case 30:
                            var2 = _closure2_slot6;
                            var1 = _closure1_slot9;
                            var0 = var2 + var1;
                        case 42:
                            return var0;
                    }
                };
                var4 = var4.bind(var8)(var1, var2);
                var5 = var8.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var0;
                var1 = function(arg0) { // Environment: var9
                    _fun105671: for (var _fun105671_ip = 0;;) switch (_fun105671_ip) {
                        case 0:
                            var0 = arg0;
                            if (var0) {
                                _fun105671_ip = 97;
                                continue _fun105671
                            }
                        case 6:
                            var6 = _closure1_slot8;
                            var5 = _closure2_slot0;
                            var3 = undefined;
                            var2 = false;
                            var1 = 'initial';
                            var1 = var6.bind(var3)(var5, var2, var1);
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 20;
                            var1 = var6[var1];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.ComponentDispatch;
                            var2 = var3.dispatch;
                            var0 = _closure1_slot11;
                            var1 = var0.CHANNEL_DETAILS_HIDDEN;
                            var0 = {};
                            var0.channelId = var5;
                            var4 = _closure2_slot1;
                            var0.screenIndex = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var1, var2);
                var1 = 21;
                var1 = var7[var1];
                var2 = var6.bind(var3)(var1);
                var1 = {
                    'canDrag': true,
                    'onDragStart': null,
                    'onPreMovement': null,
                    'startShown': false,
                    'cancelOnSwipeRightFromStart': true
                };
                var1.onDragStart = var12;
                var1.onPreMovement = var5;
                var28 = false;
                var1.openWidth = var4;
                var1 = var2.bind(var3)(var1);
                var4 = var1.gesture;
                var14 = var1.panelGestureContext;
                var _closure2_slot7 = var14;
                var2 = var1.isDragging;
                var25 = var1.translateX;
                var _closure2_slot8 = var25;
                var20 = var1.movePanel;
                var _closure2_slot9 = var20;
                var22 = var1.maxWidth;
                var _closure2_slot10 = var22;
                var5 = _closure1_slot0;
                var18 = 13;
                var1 = var7[var18];
                var21 = var5.bind(var3)(var1);
                var12 = var21.useDerivedValue;
                var1 = function() {
                    var1 = _closure2_slot10;
                    var2 = _closure2_slot8;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var23 = {};
                var23.maxWidth = var22;
                var23.translateX = var25;
                var1.__closure = var23;
                var23 = 10842481670591.0;
                var1.__workletHash = var23;
                var23 = _closure1_slot22;
                var1.__initData = var23;
                var12 = var12.bind(var21)(var1);
                var _closure2_slot11 = var12;
                var1 = 22;
                var1 = var7[var1];
                var23 = var5.bind(var3)(var1);
                var21 = var23.useDerivedStateFromSharedValue;
                var1 = function(arg0) { // Environment: var9
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var30 = var21.bind(var23)(var12, var1);
                var _closure2_slot12 = var30;
                var23 = var8.useEffect;
                var21 = new Array(3);
                var21[0] = var30;
                var21[1] = var13;
                var21[2] = var0;
                var1 = function() { // Environment: var9
                    _fun105674: for (var _fun105674_ip = 0;;) switch (_fun105674_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            if (!var0) {
                                _fun105674_ip = 81;
                                continue _fun105674
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 20;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.ComponentDispatch;
                            var2 = var3.dispatch;
                            var0 = _closure1_slot11;
                            var1 = var0.CHANNEL_DETAILS_SHOWN;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.channelId = var5;
                            var4 = _closure2_slot1;
                            var0.screenIndex = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var23.bind(var8)(var1, var21);
                var1 = var7[var18];
                var23 = var5.bind(var3)(var1);
                var21 = var23.useDerivedValue;
                var1 = function() {
                    _fun105675: for (var _fun105675_ip = 0;;) switch (_fun105675_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = _closure1_slot12;
                            var2 = var2.MIDNIGHT;
                            if (!(var3 === var2)) {
                                _fun105675_ip = 54;
                                continue _fun105675
                            }
                        case 24:
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun105675_ip = 54;
                                continue _fun105675
                            }
                        case 31:
                            var3 = _closure2_slot8;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var0 = _closure1_slot9;
                            var0 = var2 - var0;
                            _fun105675_ip = 67;
                            continue _fun105675;
                        case 54:
                            var2 = _closure2_slot8;
                            var1 = var2.get;
                            var0 = var1.bind(var2)();
                        case 67:
                            return var0;
                    }
                };
                var24 = {};
                var24.theme = var16;
                var27 = _closure1_slot12;
                var24.ThemeTypes = var27;
                var24.isChatBesideChannelList = var15;
                var24.translateX = var25;
                var25 = _closure1_slot9;
                var24.MIDNIGHT_BORDER_WIDTH = var25;
                var1.__closure = var24;
                var24 = 5498466465211.0;
                var1.__workletHash = var24;
                var24 = _closure1_slot23;
                var1.__initData = var24;
                var23 = var21.bind(var23)(var1);
                var24 = var8.useCallback;
                var21 = new Array(3);
                var21[0] = var13;
                var21[1] = var0;
                var21[2] = var20;
                var1 = function(arg0) { // Environment: var9
                    _fun105676: for (var _fun105676_ip = 0;;) switch (_fun105676_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.channelId;
                            var2 = _closure2_slot0;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun105676_ip = 36;
                                continue _fun105676
                            }
                        case 22:
                            var4 = var1.screenIndex;
                            var3 = _closure2_slot1;
                            var2 = var4 === var3;
                        case 36:
                            if (!var2) {
                                _fun105676_ip = 124;
                                continue _fun105676
                            }
                        case 39:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 18;
                            var3 = var4[var3];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.dismissKeyboard;
                            var3 = var3.bind(var5)();
                            var5 = var1.search;
                            var3 = true;
                            if (!(var3 === var5)) {
                                _fun105676_ip = 106;
                                continue _fun105676
                            }
                        case 86:
                            var5 = _closure1_slot8;
                            var2 = var1.channelId;
                            var1 = 'initial';
                            var1 = var5.bind(var4)(var2, var3, var1);
                        case 106:
                            var2 = _closure2_slot9;
                            var8 = false;
                            var7 = 0;
                            var10 = undefined;
                            var9 = true;
                            var6 = true;
                            var0 = var10[var2](var9, var8, var7, var6, var5);
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var24.bind(var8)(var1, var21);
                var _closure2_slot13 = var1;
                var24 = var8.useCallback;
                var21 = new Array(1);
                var21[0] = var20;
                var20 = function() { // Environment: var9
                    var4 = _closure2_slot9;
                    var0 = undefined;
                    var6 = 0;
                    var5 = true;
                    var9 = undefined;
                    var8 = false;
                    var7 = false;
                    var1 = var9[var4](var8, var7, var6, var5, var4);
                    return var0;
                };
                var25 = var24.bind(var8)(var20, var21);
                var _closure2_slot14 = var25;
                var24 = var8.useEffect;
                var21 = new Array(1);
                var21[0] = var25;
                var20 = function() { // Environment: var9
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addRouteChangeListener;
                    var1 = function() { // Environment: var0
                        var1 = _closure2_slot14;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var20 = var24.bind(var8)(var20, var21);
                var21 = var8.useEffect;
                var20 = new Array(2);
                var20[0] = var1;
                var20[1] = var25;
                var1 = function() { // Environment: var9
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var1 = var5[var2];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var9 = var1.ComponentDispatch;
                    var8 = var9.subscribe;
                    var1 = _closure1_slot11;
                    var7 = var1.SHOW_CHANNEL_DETAILS;
                    var6 = _closure2_slot13;
                    var6 = var8.bind(var9)(var7, var6);
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.subscribe;
                    var1 = var1.HIDE_CHANNEL_DETAILS;
                    var0 = _closure2_slot14;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = function() { // Environment: var0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var2 = var5[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        var9 = var2.ComponentDispatch;
                        var8 = var9.unsubscribe;
                        var2 = _closure1_slot11;
                        var7 = var2.SHOW_CHANNEL_DETAILS;
                        var6 = _closure2_slot13;
                        var6 = var8.bind(var9)(var7, var6);
                        var3 = var5[var3];
                        var3 = var4.bind(var0)(var3);
                        var4 = var3.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var2 = var2.HIDE_CHANNEL_DETAILS;
                        var1 = _closure2_slot14;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var21.bind(var8)(var1, var20);
                var21 = var8.useCallback;
                var20 = new Array(3);
                var20[0] = var12;
                var20[1] = var25;
                var20[2] = var13;
                var1 = function() { // Environment: var9
                    _fun105683: for (var _fun105683_ip = 0;;) switch (_fun105683_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            if (!(!(var2 <= var1))) {
                                _fun105683_ip = 469;
                                continue _fun105683
                            }
                        case 25:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 24;
                            var1 = var4[var1];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.getRootNavigationRef;
                            var2 = var1.bind(var2)();
                            var11 = null;
                            var1 = var11 == var2;
                            var7 = undefined;
                            if (var1) {
                                _fun105683_ip = 81;
                                continue _fun105683
                            }
                        case 71:
                            var1 = var2.getCurrentRoute;
                            var7 = var1.bind(var2)();
                        case 81:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 12;
                            var2 = var1[var2];
                            var6 = var5.bind(var4)(var2);
                            var2 = var6.getChatLayout;
                            var2 = var2.bind(var6)();
                            var2 = var2.isChatLockedOpen;
                            var6 = 25;
                            var1 = var1[var6];
                            var5 = var5.bind(var4)(var1);
                            var1 = var5.coerceChannelRoute;
                            var5 = var1.bind(var5)(var7);
                            var1 = var11 == var5;
                            if (!var1) {
                                _fun105683_ip = 150;
                                continue _fun105683
                            }
                        case 147:
                            var1 = var2;
                        case 150:
                            var10 = var5;
                            if (!var1) {
                                _fun105683_ip = 184;
                                continue _fun105683
                            }
                        case 156:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var5 = var5.bind(var4)(var1);
                            var1 = var5.coerceGuildsRoute;
                            var10 = var1.bind(var5)(var7);
                        case 184:
                            var8 = _closure1_slot15;
                            var5 = var8.verbose;
                            var1 = {};
                            var1.route = var10;
                            var6 = _closure2_slot0;
                            var1.channelId = var6;
                            var1.currentRoute = var7;
                            var1.isChatLockedOpen = var2;
                            var9 = var11 == var10;
                            var6 = undefined;
                            if (var9) {
                                _fun105683_ip = 234;
                                continue _fun105683
                            }
                        case 228:
                            var6 = var10.params;
                        case 234:
                            var1.routeParams = var6;
                            var6 = 'handleBackPress';
                            var1 = var5.bind(var8)(var6, var1);
                            if (!(var11 != var10)) {
                                _fun105683_ip = 430;
                                continue _fun105683
                            }
                        case 260:
                            var1 = var10.params;
                            var8 = var11 == var1;
                            var5 = undefined;
                            if (var8) {
                                _fun105683_ip = 280;
                                continue _fun105683
                            }
                        case 275:
                            var5 = var1.channelId;
                        case 280:
                            var1 = _closure2_slot0;
                            if (!(var5 === var1)) {
                                _fun105683_ip = 363;
                                continue _fun105683
                            }
                        case 288:
                            var5 = _closure1_slot7;
                            var1 = _closure2_slot0;
                            var1 = var5.bind(var4)(var1);
                            if (var1) {
                                _fun105683_ip = 316;
                                continue _fun105683
                            }
                        case 304:
                            var1 = _closure2_slot14;
                            var1 = var1.bind(var4)();
                            var1 = true;
                            _fun105683_ip = 428;
                            continue _fun105683;
                        case 316:
                            var9 = _closure1_slot15;
                            var8 = var9.verbose;
                            var5 = 'cancelling search before closing panel';
                            var5 = var8.bind(var9)(var6, var5);
                            var12 = _closure1_slot8;
                            var9 = _closure2_slot0;
                            var8 = false;
                            var5 = 'initial';
                            var5 = var12.bind(var4)(var9, var8, var5);
                            var1 = true;
                            _fun105683_ip = 428;
                            continue _fun105683;
                        case 363:
                            var9 = _closure1_slot15;
                            var8 = var9.verbose;
                            var5 = {};
                            var10 = var10.params;
                            var11 = var11 == var10;
                            var4 = undefined;
                            if (var11) {
                                _fun105683_ip = 395;
                                continue _fun105683
                            }
                        case 390:
                            var4 = var10.channelId;
                        case 395:
                            var5.routeChannelId = var4;
                            var4 = _closure2_slot0;
                            var5.expectedChannelId = var4;
                            var4 = 'route channelId mismatch';
                            var4 = var8.bind(var9)(var6, var4, var5);
                            var1 = false;
                        case 428:
                            _fun105683_ip = 467;
                            continue _fun105683;
                        case 430:
                            var5 = _closure1_slot15;
                            var4 = var5.verbose;
                            var3 = {};
                            var3.currentRoute = var7;
                            var3.isChatLockedOpen = var2;
                            var2 = 'route is null';
                            var2 = var4.bind(var5)(var6, var2, var3);
                            var1 = false;
                        case 467:
                            return var1;
                        case 469:
                            var4 = _closure1_slot15;
                            var3 = var4.verbose;
                            var2 = {};
                            var1 = _closure2_slot11;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var2.shownPixels = var0;
                            var1 = 'handleBackPress';
                            var0 = 'shownPixels <= 0';
                            var0 = var3.bind(var4)(var1, var0, var2);
                            var0 = false;
                            return var0;
                    }
                };
                var27 = var21.bind(var8)(var1, var20);
                var1 = 26;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)(var27, var30);
                var20 = var8.useEffect;
                var6 = new Array(3);
                var6[0] = var13;
                var6[1] = var0;
                var6[2] = var25;
                var1 = function() { // Environment: var9
                    var1 = _closure2_slot14;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var20.bind(var8)(var1, var6);
                var1 = 27;
                var1 = var7[var1];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useNavigation;
                var1 = var1.bind(var6)();
                var _closure2_slot15 = var1;
                var1 = function arg0, arg1, arg2, arg3() {
                    var6 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var7 = arg3;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var4;
                    var _closure3_slot3 = var7;
                    var3 = _closure1_slot4;
                    var8 = var3.useEffect;
                    var2 = new Array(3);
                    var2[0] = var6;
                    var2[1] = var5;
                    var2[2] = var7;
                    var1 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot10;
                        var2 = var1.MEMBER_LIST_SWIPE_TOGGLED;
                        var1 = {};
                        var6 = _closure3_slot0;
                        var1.channel_id = var6;
                        var6 = global;
                        var7 = var6.String;
                        var6 = _closure3_slot1;
                        var6 = var7.bind(var0)(var6);
                        var1.screen_index = var6;
                        var5 = _closure3_slot3;
                        var1.member_list_open = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = var8.bind(var3)(var1, var2);
                    var2 = var3.useEffect;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        _fun105687: for (var _fun105687_ip = 0;;) switch (_fun105687_ip) {
                            case 0:
                                var0 = _closure3_slot3;
                                if (!var0) {
                                    _fun105687_ip = 23;
                                    continue _fun105687
                                }
                            case 10:
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var0 = var1.bind(var2)();
                            case 23:
                                if (!var0) {
                                    _fun105687_ip = 105;
                                    continue _fun105687
                                }
                            case 26:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 10;
                                var1 = var3[var1];
                                var6 = undefined;
                                var3 = var2.bind(var6)(var1);
                                var2 = var3.trackWithMetadata;
                                var0 = _closure1_slot10;
                                var1 = var0.MEMBER_LIST_SWIPE_PEEK;
                                var0 = {};
                                var5 = _closure3_slot0;
                                var0.channel_id = var5;
                                var5 = global;
                                var5 = var5.String;
                                var4 = _closure3_slot1;
                                var4 = var5.bind(var6)(var4);
                                var0.screen_index = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 105:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var35 = undefined;
                var34 = var13;
                var33 = var0;
                var32 = var2;
                var31 = var30;
                var1 = var35[var1](var34, var33, var32, var31, var30);
                var1 = function arg0, arg1, arg2() {
                    _fun105688: for (var _fun105688_ip = 0;;) switch (_fun105688_ip) {
                        case 0:
                            var8 = arg0;
                            var15 = arg1;
                            var _closure3_slot0 = var8;
                            var _closure3_slot1 = var15;
                            var3 = _closure1_slot4;
                            var5 = var3.useContext;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var2 = var6[var0];
                            var4 = undefined;
                            var2 = var7.bind(var4)(var2);
                            var2 = var5.bind(var3)(var2);
                            var7 = var2.gesture;
                            var _closure3_slot2 = var7;
                            var17 = var2.disallowGesture;
                            var _closure3_slot3 = var17;
                            var12 = var2.translateX;
                            var _closure3_slot4 = var12;
                            var2 = var3.useContext;
                            var5 = _closure1_slot0;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.MainTabsChannelScreenStackContext;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun105688_ip = 124;
                                continue _fun105688
                            }
                        case 122:
                            var2 = {};
                        case 124:
                            var0 = var2.gesture;
                            var _closure3_slot5 = var0;
                            var16 = var2.disallowGesture;
                            var _closure3_slot6 = var16;
                            var10 = var2.translateX;
                            var _closure3_slot7 = var10;
                            var2 = arg2;
                            var11 = var2.disallowGesture;
                            var _closure3_slot8 = var11;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 12;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var4)();
                            var13 = var2.isChatLockedOpen;
                            var _closure3_slot9 = var13;
                            var6 = _closure1_slot4;
                            var3 = var6.useMemo;
                            var2 = new Array(3);
                            var2[0] = var8;
                            var2[1] = var7;
                            var2[2] = var0;
                            var0 = function() { // Environment: var1
                                _fun105689: for (var _fun105689_ip = 0;;) switch (_fun105689_ip) {
                                    case 0:
                                        var2 = _closure3_slot5;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun105689_ip = 39;
                                            continue _fun105689
                                        }
                                    case 13:
                                        var4 = _closure3_slot0;
                                        var3 = var4.simultaneousWithExternalGesture;
                                        var2 = _closure3_slot2;
                                        var0 = _closure3_slot5;
                                        var0 = var3.bind(var4)(var2, var0);
                                        _fun105689_ip = 58;
                                        continue _fun105689;
                                    case 39:
                                        var3 = _closure3_slot0;
                                        var2 = var3.simultaneousWithExternalGesture;
                                        var1 = _closure3_slot2;
                                        var0 = var2.bind(var3)(var1);
                                    case 58:
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var6)(var0, var2);
                            var3 = _closure1_slot0;
                            var2 = 13;
                            var6 = var5[var2];
                            var14 = var3.bind(var4)(var6);
                            var8 = var14.useAnimatedReaction;
                            var7 = function() {
                                var1 = _closure3_slot1;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var0 = 0;
                                var0 = var1 > var0;
                                return var0;
                            };
                            var6 = {};
                            var6.shownPixels = var15;
                            var7.__closure = var6;
                            var6 = 15116046915956.0;
                            var7.__workletHash = var6;
                            var6 = _closure1_slot18;
                            var7.__initData = var6;
                            var6 = function arg0, arg1() {
                                _fun105691: for (var _fun105691_ip = 0;;) switch (_fun105691_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = arg1;
                                        if (!(var1 !== var0)) {
                                            _fun105691_ip = 70;
                                            continue _fun105691
                                        }
                                    case 10:
                                        var3 = _closure3_slot3;
                                        var2 = var3.set;
                                        var2 = var2.bind(var3)(var1);
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun105691_ip = 51;
                                            continue _fun105691
                                        }
                                    case 37:
                                        var3 = _closure3_slot6;
                                        var2 = var3.set;
                                        var2 = var2.bind(var3)(var1);
                                    case 51:
                                        if (var1) {
                                            _fun105691_ip = 70;
                                            continue _fun105691
                                        }
                                    case 54:
                                        var2 = _closure3_slot8;
                                        var1 = var2.set;
                                        var0 = false;
                                        var0 = var1.bind(var2)(var0);
                                    case 70:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var15 = {};
                            var15.mainDisallowGesture = var17;
                            var15.stackDisallowGesture = var16;
                            var15.panelDisallowGesture = var11;
                            var6.__closure = var15;
                            var15 = 13681610289748.0;
                            var6.__workletHash = var15;
                            var15 = _closure1_slot19;
                            var6.__initData = var15;
                            var6 = var8.bind(var14)(var7, var6);
                            var2 = var5[var2];
                            var8 = var3.bind(var4)(var2);
                            var7 = var8.useAnimatedReaction;
                            var6 = function() {
                                _fun105692: for (var _fun105692_ip = 0;;) switch (_fun105692_ip) {
                                    case 0:
                                        var0 = _closure3_slot9;
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun105692_ip = 32;
                                            continue _fun105692
                                        }
                                    case 13:
                                        var3 = _closure3_slot4;
                                        var1 = var3.get;
                                        var3 = var1.bind(var3)();
                                        var1 = 0;
                                        var0 = var3 > var1;
                                    case 32:
                                        if (var0) {
                                            _fun105692_ip = 70;
                                            continue _fun105692
                                        }
                                    case 35:
                                        var3 = _closure3_slot7;
                                        var1 = null;
                                        var1 = var1 != var3;
                                        if (!var1) {
                                            _fun105692_ip = 67;
                                            continue _fun105692
                                        }
                                    case 48:
                                        var3 = _closure3_slot7;
                                        var2 = var3.get;
                                        var3 = var2.bind(var3)();
                                        var2 = 0;
                                        var1 = var3 > var2;
                                    case 67:
                                        var0 = var1;
                                    case 70:
                                        return var0;
                                }
                            };
                            var2 = {};
                            var2.isChatLockedOpen = var13;
                            var2.mainTranslateX = var12;
                            var2.stackTranslateX = var10;
                            var6.__closure = var2;
                            var2 = 11938850302839.0;
                            var6.__workletHash = var2;
                            var2 = _closure1_slot20;
                            var6.__initData = var2;
                            var2 = function arg0, arg1() {
                                _fun105693: for (var _fun105693_ip = 0;;) switch (_fun105693_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = arg1;
                                        if (!(var2 !== var0)) {
                                            _fun105693_ip = 27;
                                            continue _fun105693
                                        }
                                    case 10:
                                        var1 = _closure3_slot8;
                                        var0 = var1.set;
                                        var0 = var0.bind(var1)(var2);
                                    case 27:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var10 = {};
                            var10.panelDisallowGesture = var11;
                            var2.__closure = var10;
                            var10 = 3362957347102.0;
                            var2.__workletHash = var10;
                            var9 = _closure1_slot21;
                            var2.__initData = var9;
                            var2 = var7.bind(var8)(var6, var2);
                            var2 = 14;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.useUnmountEffect;
                            var1 = function() { // Environment: var1
                                _fun105694: for (var _fun105694_ip = 0;;) switch (_fun105694_ip) {
                                    case 0:
                                        var3 = _closure3_slot8;
                                        var1 = var3.set;
                                        var2 = false;
                                        var1 = var1.bind(var3)(var2);
                                        var3 = _closure3_slot3;
                                        var1 = var3.set;
                                        var1 = var1.bind(var3)(var2);
                                        var3 = _closure3_slot6;
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun105694_ip = 57;
                                            continue _fun105694
                                        }
                                    case 43:
                                        var1 = _closure3_slot6;
                                        var0 = var1.set;
                                        var0 = var0.bind(var1)(var2);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var1.bind(var3)(var4, var12, var14);
                var4 = var8.useMemo;
                var1 = new Array(4);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var0;
                var1[3] = var30;
                var0 = function() { // Environment: var9
                    var0 = {};
                    var4 = _closure2_slot7;
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure2_slot0;
                    var2 = 'channelId';
                    var0[var2] = var3;
                    var3 = _closure2_slot1;
                    var2 = 'screenIndex';
                    var0[var2] = var3;
                    var2 = _closure2_slot12;
                    var1 = 'isPanelActive';
                    var0[var1] = var2;
                    return var0;
                };
                var4 = var4.bind(var8)(var0, var1);
                var0 = 28;
                var0 = var7[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.useMainTabsChannelScreenStyles;
                var14 = var0.bind(var1)(var2, var23, var22);
                var0 = var7[var18];
                var2 = var5.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun105696: for (var _fun105696_ip = 0;;) switch (_fun105696_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = 300;
                            var3 = var1 > var0;
                            var0 = {};
                            var1 = 'flex';
                            if (!var3) {
                                _fun105696_ip = 39;
                                continue _fun105696
                            }
                        case 35:
                            var1 = 'none';
                        case 39:
                            var0.display = var1;
                            var1 = 0;
                            if (var3) {
                                _fun105696_ip = 75;
                                continue _fun105696
                            }
                        case 48:
                            var3 = _closure2_slot11;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 150;
                            var3 = var3 / var2;
                            var2 = 1;
                            var1 = var2 - var3;
                        case 75:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var8 = {};
                var8.shownPixels = var12;
                var12 = 150;
                var8.PEEK_PIXEL_THRESHOLD = var12;
                var0.__closure = var8;
                var8 = 9468759128012.0;
                var0.__workletHash = var8;
                var8 = _closure1_slot24;
                var0.__initData = var8;
                var20 = var1.bind(var2)(var0);
                var2 = _closure1_slot13;
                var0 = _closure1_slot16;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 29;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot6;
                var6 = {};
                var6.style = var11;
                var9 = function() {
                    _fun105697: for (var _fun105697_ip = 0;;) switch (_fun105697_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun105697_ip = 24;
                                continue _fun105697
                            }
                        case 10:
                            var1 = _closure2_slot15;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 24:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onAccessibilityEscape = var9;
                var9 = {};
                var11 = var19.content;
                var9.style = var11;
                var12 = !var30;
                var11 = !var12;
                if (!var12) {
                    _fun105665_ip = 1138;
                    continue _fun105665
                }
            case 1136:
                var11 = undefined;
            case 1138:
                var9.accessibilityElementsHidden = var11;
                var11 = undefined;
                if (!var30) {
                    _fun105665_ip = 1154;
                    continue _fun105665
                }
            case 1148:
                var11 = 'no-hide-descendants';
            case 1154:
                var9.importantForAccessibility = var11;
                var11 = new Array(2);
                var11[0] = var10;
                var21 = _closure1_slot13;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 30;
                var12 = var10[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.MainTabsContentScrim;
                var12 = {};
                var12.translateX = var23;
                var12.maxWidth = var22;
                var12 = var21.bind(var3)(var13, var12);
                var11[1] = var12;
                var9.children = var11;
                var11 = var8.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot14;
                var11 = _closure1_slot1;
                var10 = var10[var18];
                var10 = var11.bind(var3)(var10);
                var11 = var10.View;
                var10 = {};
                var13 = new Array(4);
                var13[0] = var14;
                var14 = var19.memberListContainer;
                var13[1] = var14;
                var14 = _closure1_slot12;
                var21 = var14.MIDNIGHT;
                var14 = undefined;
                if (!(var16 === var21)) {
                    _fun105665_ip = 1301;
                    continue _fun105665
                }
            case 1295:
                var14 = var19.midnightBorder;
            case 1301:
                var13[2] = var14;
                var14 = undefined;
                if (var15) {
                    _fun105665_ip = 1332;
                    continue _fun105665
                }
            case 1310:
                var15 = _closure1_slot12;
                var15 = var15.MIDNIGHT;
                var14 = undefined;
                if (!(var16 === var15)) {
                    _fun105665_ip = 1332;
                    continue _fun105665
                }
            case 1326:
                var14 = var19.midnightRightOverflow;
            case 1332:
                var13[3] = var14;
                var10.style = var13;
                var13 = !var30;
                if (var13) {
                    _fun105665_ip = 1348;
                    continue _fun105665
                }
            case 1346:
                var13 = undefined;
            case 1348:
                var10.accessibilityElementsHidden = var13;
                var13 = 'no-hide-descendants';
                if (!var30) {
                    _fun105665_ip = 1364;
                    continue _fun105665
                }
            case 1362:
                var13 = undefined;
            case 1364:
                var10.importantForAccessibility = var13;
                var14 = _closure1_slot25;
                var13 = new Array(3);
                var13[0] = var14;
                var16 = _closure1_slot13;
                var21 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = 31;
                var15 = var14[var15];
                var15 = var21.bind(var3)(var15);
                var22 = var15.LayerScope;
                var21 = {};
                var15 = _closure1_slot1;
                var23 = 32;
                var23 = var14[var23];
                var24 = var15.bind(var3)(var23);
                var23 = {};
                var23.isShowing = var30;
                var23.channelId = var29;
                var23.isSearchLocked = var28;
                var23.onBackPress = var27;
                var23.componentWidth = var26;
                var23.onChannelDeleted = var25;
                var23 = var16.bind(var3)(var24, var23);
                var21.children = var23;
                var21 = var16.bind(var3)(var22, var21);
                var13[1] = var21;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var15 = var14.View;
                var14 = {};
                var18 = _closure1_slot5;
                var21 = var18.absoluteFill;
                var18 = new Array(2);
                var18[0] = var21;
                var18[1] = var20;
                var14.style = var18;
                var18 = _closure1_slot6;
                var17 = {};
                var19 = var19.memberListPreview;
                var17.style = var19;
                var17 = var16.bind(var3)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.SwipeForMemberListContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7720, 7705, 660, 33, 3, 1297, 671, 4308, 13698, 3919, 3717, 4109, 7690, 3247, 5929, 3715, 9833, 1229, 13695, 7643, 12921, 3917, 3916, 4085, 1470, 13701, 4937, 13699, 5229, 13758, 2]);