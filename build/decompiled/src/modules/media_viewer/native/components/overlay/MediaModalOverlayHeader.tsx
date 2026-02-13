// modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'flexDirection': 'row',
        'height': null,
        'paddingHorizontal': 6,
        'justifyContent': 'space-between'
    };
    var10 = 4;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var8.height = var10;
    var3.navbarInner = var8;
    var8 = {
        'flexShrink': 1,
        'flexDirection': 'row',
        'marginRight': 8
    };
    var3.navbarLeft = var8;
    var8 = {
        'flexShrink': 0,
        'justifyContent': 'flex-end',
        'flexDirection': 'row',
        'gap': 8
    };
    var3.navbarRight = var8;
    var8 = {
        'flexShrink': 1,
        'alignItems': 'center',
        'height': 40,
        'marginLeft': 8
    };
    var3.navbarName = var8;
    var8 = {
        'borderRadius': 20,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
        'flex': 1,
        'flexDirection': 'row',
        'paddingHorizontal': 18
    };
    var3.navbarNameInner = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.navbarNameShrinkWrapper = var8;
    var8 = {
        'width': 18,
        'height': 18,
        'marginRight': 6
    };
    var3.contextIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73731: for (var _fun73731_ip = 0;;) switch (_fun73731_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.onClose;
                var21 = var0.source;
                var7 = var0.disableDownload;
                var17 = var0.disableMediaOverlayButton;
                var6 = var0.shareable;
                var30 = var0.contextName;
                var32 = var0.contextIcon;
                var4 = var0.animationDriver;
                var1 = var0.channelId;
                var0 = _closure1_slot7;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 5;
                var0 = var20[var0];
                var2 = var18.bind(var3)(var0);
                var0 = var2.useHeaderLayoutAnimation;
                var5 = var0.bind(var2)(var4);
                var0 = 6;
                var0 = var20[var0];
                var4 = var18.bind(var3)(var0);
                var2 = var4.useMediaShareActions;
                var0 = {};
                var0.source = var21;
                var0.disableDownload = var7;
                var0.shareable = var6;
                var19 = var2.bind(var4)(var0);
                var12 = _closure1_slot1;
                var0 = 7;
                var0 = var20[var0];
                var0 = var12.bind(var3)(var0);
                var10 = var0.bind(var3)(var1);
                var2 = _closure1_slot5;
                var0 = 8;
                var0 = var20[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = {};
                var4 = _closure1_slot3;
                var33 = var4.absoluteFillObject;
                var34 = var6;
                var4 = copyDataProperties(var34, var33);
                var4 = 'bottom';
                var6[var4] = var3;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = 9;
                var4 = var20[var4];
                var4 = var18.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {
                    'top': true,
                    'left': true,
                    'right': true,
                    'pointerEvents': 'box-none'
                };
                var9 = 'box-none';
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var11 = var14.navbarInner;
                var6.style = var11;
                var6.pointerEvents = var9;
                var9 = {};
                var11 = var14.navbarLeft;
                var9.style = var11;
                var11 = 10;
                var11 = var20[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var15 = 11;
                var22 = var20[var15];
                var22 = var18.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var15 = var20[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.cpT0Cq;
                var15 = var22.bind(var23)(var15);
                var11.accessibilityLabel = var15;
                var15 = 12;
                var15 = var20[var15];
                var15 = var18.bind(var3)(var15);
                var18 = var15.XSmallIcon;
                var15 = {
                    'size': 'md',
                    'color': 'interactive-text-active'
                };
                var15 = var2.bind(var3)(var18, var15);
                var11.icon = var15;
                var11.onPress = var13;
                var12 = var2.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var15 = null;
                var12 = var15 != var30;
                if (!var12) {
                    _fun73731_ip = 690;
                    continue _fun73731
                }
            case 438:
                var20 = _closure1_slot5;
                var18 = _closure1_slot4;
                var13 = {};
                var22 = var14.navbarName;
                var13.style = var22;
                var23 = _closure1_slot6;
                var22 = {};
                var24 = var14.navbarNameInner;
                var22.style = var24;
                var25 = var15 != var32;
                if (!var25) {
                    _fun73731_ip = 579;
                    continue _fun73731
                }
            case 481:
                var27 = _closure1_slot5;
                var29 = _closure1_slot1;
                var31 = _closure1_slot2;
                var28 = 13;
                var24 = var31[var28];
                var26 = var29.bind(var3)(var24);
                var24 = {};
                var24.source = var32;
                var32 = 14;
                var32 = var31[var32];
                var32 = var29.bind(var3)(var32);
                var32 = var32.unsafe_rawColors;
                var32 = var32.PRIMARY_345;
                var24.color = var32;
                var28 = var31[var28];
                var28 = var29.bind(var3)(var28);
                var28 = var28.Sizes;
                var28 = var28.CUSTOM;
                var24.size = var28;
                var28 = var14.contextIcon;
                var24.style = var28;
                var25 = var27.bind(var3)(var26, var24);
            case 579:
                var24 = new Array(2);
                var24[0] = var25;
                var27 = _closure1_slot5;
                var26 = _closure1_slot4;
                var25 = {};
                var28 = var14.navbarNameShrinkWrapper;
                var25.style = var28;
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var28 = 15;
                var28 = var31[var28];
                var28 = var29.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'accessibilityRole': 'header',
                    'variant': 'heading-md/medium',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'color': 'always-white'
                };
                var28.children = var30;
                var28 = var27.bind(var3)(var29, var28);
                var25.children = var28;
                var25 = var27.bind(var3)(var26, var25);
                var24[1] = var25;
                var22.children = var24;
                var22 = var23.bind(var3)(var18, var22);
                var13.children = var22;
                var12 = var20.bind(var3)(var18, var13);
            case 690:
                var11[1] = var12;
                var9.children = var11;
                var11 = var8.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun73731_ip = 859;
                    continue _fun73731
                }
            case 721:
                var13 = _closure1_slot6;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var14.navbarRight;
                var11.style = var14;
                var20 = _closure1_slot5;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var14 = 16;
                var14 = var22[var14];
                var18 = var18.bind(var3)(var14);
                var14 = {};
                var14.source = var21;
                var18 = var20.bind(var3)(var18, var14);
                var14 = new Array(2);
                var14[0] = var18;
                var15 = null;
                if (var17) {
                    _fun73731_ip = 845;
                    continue _fun73731
                }
            case 790:
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 17;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.ContextMenu;
                var16 = {};
                var16.items = var19;
                var19 = function arg0() {
                    _fun73732: for (var _fun73732_ip = 0;;) switch (_fun73732_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = var2.ref;
                            var0 = null;
                            var1 = Object.create(var0);
                            var0 = 0;
                            var1.ref = var0;
                            var14 = {};
                            var13 = var2;
                            var12 = var1;
                            var4 = copyDataProperties(var14, var13, var12);
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 10;
                            var0 = var9[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = _closure1_slot0;
                            var6 = 11;
                            var10 = var9[var6];
                            var10 = var8.bind(var2)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var6 = var9[var6];
                            var6 = var8.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.PdRCRg;
                            var6 = var10.bind(var11)(var6);
                            var0.accessibilityLabel = var6;
                            var6 = 18;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.isAndroid;
                            var6 = var6.bind(var8)();
                            var9 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            if (var6) {
                                _fun73732_ip = 194;
                                continue _fun73732
                            }
                        case 154:
                            var6 = 20;
                            var6 = var10[var6];
                            var6 = var8.bind(var2)(var6);
                            var7 = var6.MoreHorizontalIcon;
                            var6 = {
                                'size': 'md',
                                'color': 'interactive-text-active'
                            };
                            var6 = var9.bind(var2)(var7, var6);
                            _fun73732_ip = 232;
                            continue _fun73732;
                        case 194:
                            var7 = 19;
                            var7 = var10[var7];
                            var7 = var8.bind(var2)(var7);
                            var8 = var7.MoreVerticalIcon;
                            var7 = {
                                'size': 'md',
                                'color': 'interactive-text-active'
                            };
                            var6 = var9.bind(var2)(var8, var7);
                        case 232:
                            var0.icon = var6;
                            var0.ref = var5;
                            var14 = var0;
                            var13 = var4;
                            var4 = copyDataProperties(var14, var13);
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var16.children = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 845:
                var14[1] = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 859:
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
    var2.MediaModalOverlayHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4708, 9261, 8935, 9265, 3717, 4741, 9266, 1235, 4739, 4092, 671, 3938, 9267, 9006, 478, 9277, 9007, 2]);