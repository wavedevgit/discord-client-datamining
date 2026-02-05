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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var _closure1_slot3 = var8;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var7 = var8.create;
    var6 = {};
    var3 = {
        'flex': 1,
        'alignItems': 'center',
        'flexDirection': 'row',
        'height': null,
        'paddingHorizontal': 6,
        'justifyContent': 'space-between'
    };
    var9 = 3;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var3.height = var9;
    var6.navbarInner = var3;
    var3 = {
        'flexShrink': 1,
        'flexDirection': 'row',
        'marginRight': 8
    };
    var6.navbarLeft = var3;
    var3 = {
        'flexShrink': 0,
        'justifyContent': 'flex-end',
        'flexDirection': 'row',
        'gap': 8
    };
    var6.navbarRight = var3;
    var3 = {
        'flexShrink': 1,
        'alignItems': 'center',
        'height': 40,
        'marginLeft': 8
    };
    var6.navbarName = var3;
    var3 = 20;
    var9 = {
        'borderRadius': 20,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
        'flex': 1,
        'flexDirection': 'row',
        'paddingHorizontal': 18
    };
    var6.navbarNameInner = var9;
    var9 = {};
    var9.flexShrink = var10;
    var6.navbarNameShrinkWrapper = var9;
    var9 = {
        'width': 18,
        'height': 18,
        'marginRight': 6
    };
    var6.contextIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73275: for (var _fun73275_ip = 0;;) switch (_fun73275_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.onClose;
                var21 = var0.source;
                var7 = var0.disableDownload;
                var17 = var0.disableMediaOverlayButton;
                var6 = var0.shareable;
                var29 = var0.contextName;
                var31 = var0.contextIcon;
                var4 = var0.animationDriver;
                var1 = var0.channelId;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 4;
                var0 = var18[var0];
                var3 = undefined;
                var2 = var15.bind(var3)(var0);
                var0 = var2.useHeaderLayoutAnimation;
                var5 = var0.bind(var2)(var4);
                var0 = 5;
                var0 = var18[var0];
                var4 = var15.bind(var3)(var0);
                var2 = var4.useMediaShareActions;
                var0 = {};
                var0.source = var21;
                var0.disableDownload = var7;
                var0.shareable = var6;
                var19 = var2.bind(var4)(var0);
                var12 = _closure1_slot1;
                var0 = 6;
                var0 = var18[var0];
                var0 = var12.bind(var3)(var0);
                var10 = var0.bind(var3)(var1);
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var18[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = {};
                var4 = _closure1_slot3;
                var32 = var4.absoluteFillObject;
                var33 = var6;
                var4 = copyDataProperties(var33, var32);
                var4 = 'bottom';
                var6[var4] = var3;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = 8;
                var4 = var18[var4];
                var4 = var15.bind(var3)(var4);
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
                var11 = _closure1_slot7;
                var14 = var11.navbarInner;
                var6.style = var14;
                var6.pointerEvents = var9;
                var9 = {};
                var11 = var11.navbarLeft;
                var9.style = var11;
                var11 = 9;
                var11 = var18[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var14 = 10;
                var20 = var18[var14];
                var20 = var15.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.cpT0Cq;
                var14 = var20.bind(var22)(var14);
                var11.accessibilityLabel = var14;
                var14 = 11;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.XSmallIcon;
                var14 = {
                    'size': 'md',
                    'color': 'interactive-text-active'
                };
                var14 = var2.bind(var3)(var15, var14);
                var11.icon = var14;
                var11.onPress = var13;
                var12 = var2.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var15 = null;
                var12 = var15 != var29;
                if (!var12) {
                    _fun73275_ip = 698;
                    continue _fun73275
                }
            case 434:
                var18 = _closure1_slot5;
                var14 = _closure1_slot4;
                var13 = {};
                var23 = _closure1_slot7;
                var20 = var23.navbarName;
                var13.style = var20;
                var22 = _closure1_slot6;
                var20 = {};
                var23 = var23.navbarNameInner;
                var20.style = var23;
                var24 = var15 != var31;
                if (!var24) {
                    _fun73275_ip = 583;
                    continue _fun73275
                }
            case 481:
                var26 = _closure1_slot5;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var27 = 12;
                var23 = var30[var27];
                var25 = var28.bind(var3)(var23);
                var23 = {};
                var23.source = var31;
                var31 = 13;
                var31 = var30[var31];
                var31 = var28.bind(var3)(var31);
                var31 = var31.unsafe_rawColors;
                var31 = var31.PRIMARY_345;
                var23.color = var31;
                var27 = var30[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.Sizes;
                var27 = var27.CUSTOM;
                var23.size = var27;
                var27 = _closure1_slot7;
                var27 = var27.contextIcon;
                var23.style = var27;
                var24 = var26.bind(var3)(var25, var23);
            case 583:
                var23 = new Array(2);
                var23[0] = var24;
                var26 = _closure1_slot5;
                var25 = _closure1_slot4;
                var24 = {};
                var27 = _closure1_slot7;
                var27 = var27.navbarNameShrinkWrapper;
                var24.style = var27;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var27 = 14;
                var27 = var30[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.Text;
                var27 = {
                    'accessibilityRole': 'header',
                    'variant': 'heading-md/medium',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'color': 'always-white'
                };
                var27.children = var29;
                var27 = var26.bind(var3)(var28, var27);
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var20.children = var23;
                var20 = var22.bind(var3)(var14, var20);
                var13.children = var20;
                var12 = var18.bind(var3)(var14, var13);
            case 698:
                var11[1] = var12;
                var9.children = var11;
                var11 = var8.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun73275_ip = 871;
                    continue _fun73275
                }
            case 729:
                var13 = _closure1_slot6;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = _closure1_slot7;
                var14 = var14.navbarRight;
                var11.style = var14;
                var20 = _closure1_slot5;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var14 = 15;
                var14 = var22[var14];
                var18 = var18.bind(var3)(var14);
                var14 = {};
                var14.source = var21;
                var18 = var20.bind(var3)(var18, var14);
                var14 = new Array(2);
                var14[0] = var18;
                var15 = null;
                if (var17) {
                    _fun73275_ip = 857;
                    continue _fun73275
                }
            case 802:
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 16;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.ContextMenu;
                var16 = {};
                var16.items = var19;
                var19 = function arg0() {
                    _fun73276: for (var _fun73276_ip = 0;;) switch (_fun73276_ip) {
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
                            var0 = 9;
                            var0 = var9[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = _closure1_slot0;
                            var6 = 10;
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
                            var6 = 17;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.isAndroid;
                            var6 = var6.bind(var8)();
                            var9 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            if (var6) {
                                _fun73276_ip = 194;
                                continue _fun73276
                            }
                        case 154:
                            var6 = 19;
                            var6 = var10[var6];
                            var6 = var8.bind(var2)(var6);
                            var7 = var6.MoreHorizontalIcon;
                            var6 = {
                                'size': 'md',
                                'color': 'interactive-text-active'
                            };
                            var6 = var9.bind(var2)(var7, var6);
                            _fun73276_ip = 232;
                            continue _fun73276;
                        case 194:
                            var7 = 18;
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
            case 857:
                var14[1] = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 871:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4703, 9220, 8895, 9224, 3720, 4736, 9225, 1234, 4734, 4086, 671, 3941, 9226, 8966, 478, 9236, 8967, 2]);