// modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityLayoutMode;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FrameLayoutModes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.activityContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}";
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun111826: for (var _fun111826_ip = 0;;) switch (_fun111826_ip) {
            case 0:
                var17 = _closure1_slot3;
                var1 = var17.useContext;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var17)(var0);
                var10 = var0.windowDimensions;
                var _closure2_slot0 = var10;
                var5 = _closure1_slot0;
                var0 = 10;
                var0 = var7[var0];
                var1 = var5.bind(var4)(var0);
                var0 = var1.usePIPState;
                var14 = var0.bind(var1)();
                var _closure2_slot1 = var14;
                var0 = _closure1_slot11;
                var8 = var0.bind(var4)();
                var0 = 11;
                var1 = var7[var0];
                var9 = var5.bind(var4)(var1);
                var6 = var9.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var2
                    _fun111827: for (var _fun111827_ip = 0;;) switch (_fun111827_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var0 = var2.getConnectedActivityLocation;
                            var8 = var0.bind(var2)();
                            var0 = var2.getSelfEmbeddedActivityForLocation;
                            var4 = var0.bind(var2)(var8);
                            var3 = null;
                            var0 = var3 == var4;
                            var2 = undefined;
                            var5 = undefined;
                            if (var0) {
                                _fun111827_ip = 46;
                                continue _fun111827
                            }
                        case 41:
                            var5 = var4.applicationId;
                        case 46:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 12;
                            var6 = var9[var6];
                            var7 = var7.bind(var2)(var6);
                            var6 = var7.getEmbeddedActivityLocationChannelId;
                            var6 = var6.bind(var7)(var8);
                            var0.connectedEmbeddedActivityChannelId = var6;
                            var0.connectedEmbeddedActivity = var4;
                            var3 = var3 == var5;
                            var2 = undefined;
                            if (var3) {
                                _fun111827_ip = 113;
                                continue _fun111827
                            }
                        case 98:
                            var4 = _closure1_slot4;
                            var3 = var4.getPipOrientationLockStateForApp;
                            var2 = var3.bind(var4)(var5);
                        case 113:
                            var0.pipOrientationLockState = var2;
                            var2 = _closure1_slot4;
                            var1 = var2.getActivityPanelMode;
                            var1 = var1.bind(var2)();
                            var0.panelMode = var1;
                            return var0;
                    }
                };
                var3 = var6.bind(var9)(var3, var1);
                var16 = var3.connectedEmbeddedActivityChannelId;
                var _closure2_slot2 = var16;
                var1 = var3.connectedEmbeddedActivity;
                var12 = var3.pipOrientationLockState;
                var15 = var3.panelMode;
                var3 = var7[var0];
                var13 = var5.bind(var4)(var3);
                var9 = var13.useStateFromStoresObject;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var2
                    _fun111828: for (var _fun111828_ip = 0;;) switch (_fun111828_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getConnectedFrame;
                            var5 = var0.bind(var1)();
                            var3 = null;
                            var0 = var3 == var5;
                            var4 = undefined;
                            if (var0) {
                                _fun111828_ip = 33;
                                continue _fun111828
                            }
                        case 28:
                            var4 = var5.applicationId;
                        case 33:
                            var0 = {};
                            var0.connectedFrame = var5;
                            var6 = _closure1_slot5;
                            var5 = var6.getActivityPanelMode;
                            var5 = var5.bind(var6)();
                            var0.framePanelMode = var5;
                            var3 = var3 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun111828_ip = 83;
                                continue _fun111828
                            }
                        case 68:
                            var3 = _closure1_slot5;
                            var2 = var3.getPipOrientationLockStateForApp;
                            var1 = var2.bind(var3)(var4);
                        case 83:
                            var0.framePipOrientationLockState = var1;
                            return var0;
                    }
                };
                var3 = var9.bind(var13)(var6, var3);
                var6 = var3.connectedFrame;
                var9 = var3.framePanelMode;
                var3 = var3.framePipOrientationLockState;
                var0 = var7[var0];
                var13 = var5.bind(var4)(var0);
                var7 = var13.useStateFromStores;
                var0 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var7.bind(var13)(var5, var0);
                var18 = var14.width;
                var _closure2_slot3 = var18;
                var0 = var14.height;
                var _closure2_slot4 = var0;
                var7 = var17.useMemo;
                var5 = new Array(2);
                var5[0] = var18;
                var5[1] = var0;
                var0 = function() { // Environment: var2
                    var0 = {
                        'width': null,
                        'height': null,
                        'position': 'absolute',
                        'left': '50%',
                        'marginLeft': null,
                        'top': '50%'
                    };
                    var2 = _closure2_slot3;
                    var0.width = var2;
                    var5 = _closure2_slot4;
                    var0.height = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var1 = var7[var3];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var1);
                    var1 = 2;
                    var2 = var2 / var1;
                    var8 = var8.bind(var4)(var2);
                    var2 = -1;
                    var8 = var2 * var8;
                    var0.marginLeft = var8;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var1 = var5 / var1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 * var1;
                    var0.marginTop = var1;
                    return var0;
                };
                var5 = var7.bind(var17)(var0, var5);
                var0 = null;
                var1 = var0 != var1;
                if (!var1) {
                    _fun111826_ip = 343;
                    continue _fun111826
                }
            case 315:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var7 = 14;
                var7 = var18[var7];
                var7 = var17.bind(var4)(var7);
                var7 = var7.bind(var4)(var16);
                var1 = !var7;
            case 343:
                if (!var1) {
                    _fun111826_ip = 360;
                    continue _fun111826
                }
            case 346:
                var7 = _closure1_slot8;
                var7 = var7.PIP;
                var1 = var15 === var7;
            case 360:
                var7 = var0 != var6;
                if (!var7) {
                    _fun111826_ip = 381;
                    continue _fun111826
                }
            case 367:
                var6 = _closure1_slot8;
                var6 = var6.PIP;
                var7 = var9 === var6;
            case 381:
                if (!var7) {
                    _fun111826_ip = 387;
                    continue _fun111826
                }
            case 384:
                var12 = var3;
            case 387:
                var _closure2_slot5 = var12;
                var6 = _closure1_slot0;
                var17 = _closure1_slot2;
                var3 = 15;
                var3 = var17[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.useAnimatedStyle;
                var2 = function() {
                    _fun111831: for (var _fun111831_ip = 0;;) switch (_fun111831_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot1;
                            var5 = var4.width;
                            var0.pipWidth = var5;
                            var4 = var4.height;
                            var0.pipHeight = var4;
                            var4 = _closure2_slot5;
                            var0.pipOrientationLockState = var4;
                            var4 = _closure2_slot0;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var3.landscape;
                            var0.isLandscape = var3;
                            var1 = var1.bind(var2)(var0);
                            var4 = var1.width;
                            var2 = var1.height;
                            var3 = var1.shouldVerticallyCenter;
                            var0 = {};
                            var0.width = var4;
                            var0.height = var2;
                            var5 = var1.shouldHorizontallyCenter;
                            var2 = '0%';
                            var4 = var2;
                            if (!var5) {
                                _fun111831_ip = 142;
                                continue _fun111831
                            }
                        case 136:
                            var4 = '50%';
                        case 142:
                            var0.left = var4;
                            if (!var3) {
                                _fun111831_ip = 155;
                                continue _fun111831
                            }
                        case 149:
                            var2 = '50%';
                        case 155:
                            var0.top = var2;
                            var2 = var1.marginLeft;
                            var0.marginLeft = var2;
                            var1 = var1.marginTop;
                            var0.marginTop = var1;
                            return var0;
                    }
                };
                var9 = {};
                var16 = _closure1_slot1;
                var15 = 16;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var9.getActivityContainerPipStylesSpec = var15;
                var9.pipState = var14;
                var9.activePipOrientationLockState = var12;
                var9.windowDimensions = var10;
                var2.__closure = var9;
                var9 = 12186082276755.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot12;
                var2.__initData = var9;
                var9 = var3.bind(var6)(var2);
                if (var1) {
                    _fun111826_ip = 514;
                    continue _fun111826
                }
            case 506:
                var0 = null;
                if (!var7) {
                    _fun111826_ip = 700;
                    continue _fun111826
                }
            case 514:
                var3 = _closure1_slot10;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 17;
                var1 = var10[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var1.style = var5;
                var5 = 'none';
                var1.pointerEvents = var5;
                var5 = 18;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var10 = var8.activityContainer;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var7) {
                    _fun111826_ip = 645;
                    continue _fun111826
                }
            case 604:
                var7 = 20;
                var7 = var12[var7];
                var8 = var9.bind(var4)(var7);
                var7 = {};
                var7.channel = var13;
                var13 = _closure1_slot7;
                var13 = var13.PIP;
                var7.layoutMode = var13;
                var7 = var10.bind(var4)(var8, var7);
                _fun111826_ip = 680;
                continue _fun111826;
            case 645:
                var8 = 19;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var11 = _closure1_slot9;
                var11 = var11.PIP;
                var8.layoutMode = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 680:
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 700:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 7916, 1372, 3457, 7914, 7917, 33, 1297, 11815, 14259, 566, 3081, 13133, 7956, 3720, 14209, 6457, 6458, 14228, 8055, 2]);