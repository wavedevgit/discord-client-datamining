// modules/activities/panel/native/ActivityPanelHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function arg0() {
        var0 = arg0;
        var14 = var0.landscape;
        var _closure2_slot0 = var14;
        var13 = var0.setMode;
        var _closure2_slot1 = var13;
        var9 = var0.wrapperOffset;
        var10 = var0.pipState;
        var1 = _closure1_slot14;
        var6 = undefined;
        var1 = var1.bind(var6)();
        var _closure2_slot2 = var1;
        var5 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 9;
        var2 = var12[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var2.bind(var6)();
        var _closure2_slot3 = var2;
        var11 = _closure1_slot4;
        var8 = var11.useMemo;
        var7 = new Array(1);
        var7[0] = var14;
        var3 = function() { // Environment: var4
            _fun110415: for (var _fun110415_ip = 0;;) switch (_fun110415_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = 0;
                    if (var0) {
                        _fun110415_ip = 48;
                        continue _fun110415
                    }
                case 12:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.radii;
                    var2 = var0.lg;
                case 48:
                    var0 = _closure1_slot6;
                    var1 = var0.absoluteFill;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var1.borderTopStartRadius = var2;
                    var1.borderTopEndRadius = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var3 = var8.bind(var11)(var3, var7);
        var11 = _closure1_slot4;
        var8 = var11.useMemo;
        var7 = new Array(4);
        var7[0] = var14;
        var7[1] = var2;
        var2 = var1.panelHeader;
        var7[2] = var2;
        var2 = var1.panelLandscape;
        var7[3] = var2;
        var2 = function() { // Environment: var4
            _fun110416: for (var _fun110416_ip = 0;;) switch (_fun110416_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var5 = 24;
                    var2 = var5;
                    if (var0) {
                        _fun110416_ip = 41;
                        continue _fun110416
                    }
                case 16:
                    var0 = _closure2_slot0;
                    var1 = 0;
                    if (!var0) {
                        _fun110416_ip = 34;
                        continue _fun110416
                    }
                case 25:
                    var0 = _closure2_slot3;
                    var1 = var0.top;
                case 34:
                    var0 = 8;
                    var2 = var0 + var1;
                case 41:
                    var0 = _closure2_slot2;
                    var1 = var0.panelHeader;
                    var0 = new Array(3);
                    var0[0] = var1;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    if (!var4) {
                        _fun110416_ip = 78;
                        continue _fun110416
                    }
                case 68:
                    var4 = _closure2_slot2;
                    var1 = var4.panelLandscape;
                case 78:
                    var0[1] = var1;
                    var1 = {};
                    var1.paddingTop = var2;
                    var6 = _closure2_slot0;
                    var4 = 8;
                    var2 = var4;
                    if (!var6) {
                        _fun110416_ip = 105;
                        continue _fun110416
                    }
                case 102:
                    var2 = var5;
                case 105:
                    var1.paddingBottom = var2;
                    var6 = _closure2_slot0;
                    var2 = 16;
                    var5 = var2;
                    if (var6) {
                        _fun110416_ip = 136;
                        continue _fun110416
                    }
                case 123:
                    var6 = _closure2_slot3;
                    var6 = var6.left;
                    var5 = var4 + var6;
                case 136:
                    var1.paddingLeft = var5;
                    var5 = _closure2_slot0;
                    if (var5) {
                        _fun110416_ip = 161;
                        continue _fun110416
                    }
                case 148:
                    var3 = _closure2_slot3;
                    var3 = var3.right;
                    var2 = var4 + var3;
                case 161:
                    var1.paddingRight = var2;
                    var0[2] = var1;
                    return var0;
            }
        };
        var2 = var8.bind(var11)(var2, var7);
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.runOnJS;
            var2 = _closure2_slot1;
            var2 = var3.bind(var4)(var2);
            var1 = _closure1_slot10;
            var1 = var1.PIP;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var14 = {};
        var11 = _closure1_slot0;
        var15 = 10;
        var15 = var12[var15];
        var15 = var11.bind(var6)(var15);
        var15 = var15.runOnJS;
        var14.runOnJS = var15;
        var14.setMode = var13;
        var15 = _closure1_slot10;
        var14.ActivityPanelModes = var15;
        var4.__closure = var14;
        var14 = 14504167937928.0;
        var4.__workletHash = var14;
        var0 = _closure1_slot15;
        var4.__initData = var0;
        var0 = new Array(1);
        var0[0] = var13;
        var8 = var7.bind(var8)(var4, var0);
        var0 = {};
        var7 = 11;
        var4 = var12[var7];
        var5 = var5.bind(var6)(var4);
        var4 = {};
        var7 = var12[var7];
        var7 = var11.bind(var6)(var7);
        var7 = var7.MorphablePanelModes;
        var7 = var7.PANEL;
        var4.mode = var7;
        var7 = true;
        var4.panGestureEnabled = var7;
        var4.pipState = var10;
        var4.swipeRequiresPop = var7;
        var4.wrapperOffset = var9;
        var4.onPanMinimizeGestureEnd = var8;
        var4.disableHorizontalSafeAreas = var7;
        var4 = var5.bind(var6)(var4);
        var0.gesture = var4;
        var0.headerWrapperStyles = var3;
        var0.headerStyles = var2;
        var0.styles = var1;
        return var0;
    };
    var _closure1_slot17 = var4;
    var3 = function arg0() {
        _fun110418: for (var _fun110418_ip = 0;;) switch (_fun110418_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.children;
                var1 = var0.hasConnectedActivity;
                var8 = var0.gesture;
                var11 = var0.headerWrapperStyles;
                var16 = var0.headerStyles;
                var13 = var0.landscape;
                var0 = _closure1_slot14;
                var4 = undefined;
                var19 = var0.bind(var4)();
                var0 = null;
                if (!var1) {
                    _fun110418_ip = 279;
                    continue _fun110418
                }
            case 59:
                var3 = _closure1_slot12;
                var6 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 12;
                var1 = var18[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var5 = _closure1_slot11;
                var5 = var5.DARK;
                var1.theme = var5;
                var7 = _closure1_slot12;
                var5 = 13;
                var5 = var18[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.GestureDetector;
                var5 = {};
                var5.gesture = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot5;
                var8 = {};
                var8.style = var11;
                var17 = _closure1_slot12;
                var14 = _closure1_slot1;
                var11 = 14;
                var11 = var18[var11];
                var14 = var14.bind(var4)(var11);
                var11 = {};
                var14 = var17.bind(var4)(var14, var11);
                var11 = new Array(3);
                var11[0] = var14;
                var13 = !var13;
                if (!var13) {
                    _fun110418_ip = 217;
                    continue _fun110418
                }
            case 191:
                var18 = _closure1_slot12;
                var17 = _closure1_slot5;
                var14 = {};
                var19 = var19.pullIndicator;
                var14.style = var19;
                var13 = var18.bind(var4)(var17, var14);
            case 217:
                var11[1] = var13;
                var14 = _closure1_slot12;
                var13 = _closure1_slot5;
                var12 = {};
                var12.style = var16;
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 279:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.context;
        var1 = _closure1_slot14;
        var0 = undefined;
        var6 = var1.bind(var0)();
        var _closure2_slot0 = var6;
        var1 = _closure1_slot4;
        var0 = var1.useContext;
        var0 = var0.bind(var1)(var2);
        var4 = var0.wrapperDimensions;
        var _closure2_slot1 = var4;
        var3 = var0.setMode;
        var2 = var0.wrapperOffset;
        var1 = var0.pipState;
        var0 = {};
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var9 = var6.headerContainer;
        var6 = new Array(2);
        var6[0] = var9;
        var9 = var4.isWindowLandscape;
        var6[1] = var9;
        var5 = function() { // Environment: var5
            _fun110420: for (var _fun110420_ip = 0;;) switch (_fun110420_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.isWindowLandscape;
                    if (var2) {
                        _fun110420_ip = 33;
                        continue _fun110420
                    }
                case 19:
                    var4 = _closure1_slot8;
                    var5 = 'auto';
                    var3 = 0;
                    var2 = null;
                    _fun110420_ip = 45;
                    continue _fun110420;
                case 33:
                    var5 = _closure1_slot9;
                    var4 = 'auto';
                    var3 = null;
                    var2 = 0;
                case 45:
                    var0 = _closure2_slot0;
                    var1 = var0.headerContainer;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var1.width = var5;
                    var1.height = var4;
                    var4 = 0;
                    var1.right = var4;
                    var1.left = var3;
                    var1.bottom = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var5 = var7.bind(var8)(var5, var6);
        var0.headerStyles = var5;
        var0.wrapperDimensions = var4;
        var0.setMode = var3;
        var0.wrapperOffset = var2;
        var0.pipState = var1;
        return var0;
    };
    var _closure1_slot19 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var14.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = arg3;
    var9 = var6.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.View;
    var _closure1_slot5 = var10;
    var13 = var6.StyleSheet;
    var _closure1_slot6 = var13;
    var6 = 3;
    var6 = var8[var6];
    var6 = var14.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
    var _closure1_slot8 = var10;
    var10 = var6.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot9 = var10;
    var6 = var6.ActivityPanelModes;
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot11 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.jsx;
    var _closure1_slot12 = var10;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 7;
    var6 = var8[var6];
    var11 = var7.bind(var0)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {};
    var17 = var13.absoluteFillObject;
    var18 = var12;
    var13 = copyDataProperties(var18, var17);
    var15 = 'space-between';
    var13 = 'justifyContent';
    var12[var13] = var15;
    var15 = 'center';
    var13 = 'alignItems';
    var12[var13] = var15;
    var15 = 'row';
    var13 = 'flexDirection';
    var12[var13] = var15;
    var13 = 8;
    var15 = 'gap';
    var12[var15] = var13;
    var6.panelHeader = var12;
    var12 = {};
    var15 = 'column-reverse';
    var12.flexDirection = var15;
    var6.panelLandscape = var12;
    var12 = {
        'position': 'absolute',
        'top': 0
    };
    var6.headerContainer = var12;
    var12 = {
        'backgroundColor': null,
        'borderRadius': null,
        'width': 32,
        'height': 4,
        'alignSelf': 'center',
        'marginTop': 4,
        'opacity': 0.3
    };
    var15 = var8[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var12.backgroundColor = var15;
    var13 = var8[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12.borderRadius = var13;
    var6.pullIndicator = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var6 = {};
    var10 = 'function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}';
    var6.code = var10;
    var _closure1_slot15 = var6;
    var10 = var9.memo;
    var6 = function arg0() {
        _fun110421: for (var _fun110421_ip = 0;;) switch (_fun110421_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.landscape;
                var _closure2_slot0 = var8;
                var7 = var1.setMode;
                var _closure2_slot1 = var7;
                var5 = var1.pipState;
                var6 = var1.wrapperOffset;
                var4 = undefined;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot17;
                var2 = {};
                var2.landscape = var8;
                var2.setMode = var7;
                var2.wrapperOffset = var6;
                var2.pipState = var5;
                var2 = var3.bind(var4)(var2);
                var11 = var2.gesture;
                var _closure2_slot2 = var11;
                var10 = var2.headerWrapperStyles;
                var _closure2_slot3 = var10;
                var9 = var2.headerStyles;
                var _closure2_slot4 = var9;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 15;
                var2 = var5[var2];
                var12 = var3.bind(var4)(var2);
                var6 = var12.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getSelfEmbeddedActivityForLocation;
                    var0 = var2.getConnectedActivityLocation;
                    var0 = var0.bind(var2)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = new Array(0);
                var12 = var6.bind(var12)(var5, var3, var2);
                var _closure2_slot5 = var12;
                var6 = null;
                var2 = var6 == var12;
                var5 = undefined;
                if (var2) {
                    _fun110421_ip = 182;
                    continue _fun110421
                }
            case 177:
                var5 = var12.applicationId;
            case 182:
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 16;
                var2 = var13[var2];
                var3 = var3.bind(var4)(var2);
                var2 = new Array(1);
                var2[0] = var5;
                var5 = var3.bind(var4)(var2);
                var3 = _closure1_slot3;
                var2 = 1;
                var3 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var5 = var3[var2];
                _closure2_slot6 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(8);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var9;
                var1[4] = var8;
                var1[5] = var7;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun110421_ip = 289;
                    continue _fun110421
                }
            case 284:
                var7 = var5.name;
            case 289:
                var1[6] = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun110421_ip = 307;
                    continue _fun110421
                }
            case 302:
                var4 = var5.id;
            case 307:
                var1[7] = var4;
                var0 = function() { // Environment: var0
                    _fun110423: for (var _fun110423_ip = 0;;) switch (_fun110423_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot18;
                            var1 = {};
                            var0 = _closure2_slot5;
                            var10 = null;
                            var0 = var10 != var0;
                            var1.hasConnectedActivity = var0;
                            var0 = _closure2_slot2;
                            var1.gesture = var0;
                            var0 = _closure2_slot3;
                            var1.headerWrapperStyles = var0;
                            var0 = _closure2_slot4;
                            var1.headerStyles = var0;
                            var11 = _closure2_slot0;
                            var1.landscape = var11;
                            var7 = _closure1_slot12;
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 17;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var4);
                            var4 = {};
                            var9 = undefined;
                            if (var11) {
                                _fun110423_ip = 122;
                                continue _fun110423
                            }
                        case 100:
                            var11 = _closure2_slot6;
                            var11 = var10 == var11;
                            var9 = undefined;
                            if (var11) {
                                _fun110423_ip = 122;
                                continue _fun110423
                            }
                        case 113:
                            var11 = _closure2_slot6;
                            var9 = var11.name;
                        case 122:
                            var4.activityName = var9;
                            var9 = _closure2_slot1;
                            var4.setMode = var9;
                            var6 = var7.bind(var0)(var6, var4);
                            var4 = new Array(3);
                            var4[0] = var6;
                            var9 = _closure1_slot12;
                            var7 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var6 = 18;
                            var6 = var11[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var11 = _closure2_slot6;
                            var12 = var10 == var11;
                            var11 = undefined;
                            if (var12) {
                                _fun110423_ip = 198;
                                continue _fun110423
                            }
                        case 189:
                            var12 = _closure2_slot6;
                            var11 = var12.id;
                        case 198:
                            var6.applicationId = var11;
                            var6 = var9.bind(var0)(var7, var6);
                            var4[1] = var6;
                            var7 = _closure1_slot12;
                            var6 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 19;
                            var5 = var9[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = {};
                            var9 = _closure2_slot5;
                            var10 = var10 != var9;
                            var9 = undefined;
                            if (!var10) {
                                _fun110423_ip = 255;
                                continue _fun110423
                            }
                        case 251:
                            var9 = _closure2_slot5;
                        case 255:
                            var5.selfEmbeddedActivity = var9;
                            var8 = _closure2_slot1;
                            var5.setMode = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var6 = var10.bind(var9)(var6);
    var _closure1_slot16 = var6;
    var6 = var9.memo;
    var5 = function() { // Environment: var5
        var1 = _closure1_slot19;
        var0 = {};
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 20;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var0.context = var2;
        var0 = var1.bind(var3)(var0);
        var5 = var0.headerStyles;
        var10 = var0.wrapperDimensions;
        var9 = var0.setMode;
        var8 = var0.wrapperOffset;
        var7 = var0.pipState;
        var2 = _closure1_slot12;
        var1 = _closure1_slot5;
        var0 = {};
        var0.style = var5;
        var6 = _closure1_slot12;
        var5 = _closure1_slot16;
        var4 = {};
        var10 = var10.isWindowLandscape;
        var4.landscape = var10;
        var4.setMode = var9;
        var4.wrapperOffset = var8;
        var4.pipState = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5 = var6.bind(var9)(var5);
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/panel/native/ActivityPanelHeader.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.useBaseActivityPanelHeaderContent = var4;
    var2.BaseActivityPanelContent = var3;
    var2.useBaseActivityPanelHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 7917, 483, 33, 1297, 671, 1568, 3720, 14211, 3159, 4961, 14215, 566, 6884, 14216, 14217, 14221, 14205, 2]);