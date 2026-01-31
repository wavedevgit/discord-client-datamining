// modules/parent_tools/native/FamilyCenterModalQRCode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: FamilyCenterModalQRCodeScreen, environment: var1
        _fun81735: for (var _fun81735_ip = 0;;) switch (_fun81735_ip) {
            case 0:
                var1 = _closure1_slot12;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var27 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 8;
                var1 = var13[var1];
                var1 = var27.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = false;
                var5 = var4.bind(var5)(var1);
                var4 = _closure1_slot3;
                var1 = 2;
                var4 = var4.bind(var3)(var5, var1);
                var1 = 0;
                var18 = var4[var1];
                var _closure2_slot0 = var18;
                var1 = 1;
                var1 = var4[var1];
                var _closure2_slot1 = var1;
                var20 = _closure1_slot0;
                var4 = 9;
                var1 = var13[var4];
                var5 = var20.bind(var3)(var1);
                var1 = var5.usePendingRequestCount;
                var1 = var1.bind(var5)();
                var _closure2_slot2 = var1;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var6 = var5.bind(var6)(var1);
                var _closure2_slot3 = var6;
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var0
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var8.bind(var0)(var2);
                    var4 = var5.presentFailedToast;
                    var2 = 11;
                    var6 = var3[var2];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var2 = var3[var2];
                    var2 = var8.bind(var0)(var2);
                    var2 = var2.t;
                    var2 = var2.R0RpRX;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 12;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var5 = new Array(0);
                var9 = var8.bind(var9)(var7, var5);
                var5 = 13;
                var5 = var13[var5];
                var8 = var20.bind(var3)(var5);
                var7 = var8.useFamilyCenterActions;
                var5 = {};
                var5.onError = var9;
                var5 = var7.bind(var8)(var5);
                var7 = var5.getLinkCode;
                var _closure2_slot4 = var7;
                var19 = var5.isGetLinkCodeLoading;
                var4 = var13[var4];
                var5 = var20.bind(var3)(var4);
                var4 = var5.useUserQRLinkUrl;
                var11 = var4.bind(var5)();
                var4 = 14;
                var4 = var13[var4];
                var5 = var27.bind(var3)(var4);
                var4 = !var2;
                var2 = 'FamilyCenterQRCodeModal should only be rendered for teens.';
                var2 = var5.bind(var3)(var4, var2);
                var2 = 15;
                var2 = var13[var2];
                var4 = var27.bind(var3)(var2);
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun81738: for (var _fun81738_ip = 0;;) switch (_fun81738_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot3;
                            var0 = var0.current;
                            if (!(var1 > var0)) {
                                _fun81738_ip = 55;
                                continue _fun81738
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var18;
                var0 = function() { // Environment: var0
                    _fun81739: for (var _fun81739_ip = 0;;) switch (_fun81739_ip) {
                        case 0:
                            var4 = _closure2_slot1;
                            var0 = undefined;
                            var3 = function(arg0) { // Environment: var1
                                _fun81740: for (var _fun81740_ip = 0;;) switch (_fun81740_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 16;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.track;
                                        var0 = _closure1_slot9;
                                        var1 = var0.FAMILY_CENTER_ACTION;
                                        var0 = {};
                                        var4 = _closure2_slot0;
                                        var5 = _closure1_slot6;
                                        if (var4) {
                                            _fun81740_ip = 64;
                                            continue _fun81740
                                        }
                                    case 56:
                                        var4 = var5.RevealQRCode;
                                        _fun81740_ip = 70;
                                        continue _fun81740;
                                    case 64:
                                        var4 = var5.HideQRCode;
                                    case 70:
                                        var0.action = var4;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = arg0;
                                        var0 = !var0;
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun81739_ip = 58;
                                continue _fun81739
                            }
                        case 30:
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = _closure1_slot8;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.pop;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1 = var3.bind(var0)(var1, var2);
                        case 58:
                            return var0;
                    }
                };
                var17 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var0 = 17;
                var0 = var13[var0];
                var0 = var20.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot11;
                var4 = 18;
                var4 = var13[var4];
                var4 = var20.bind(var3)(var4);
                var5 = var4.ModalContent;
                var4 = {};
                var10 = _closure1_slot11;
                var9 = _closure1_slot5;
                var7 = {};
                var8 = var12.noticeContainer;
                var7.style = var8;
                var16 = _closure1_slot10;
                var14 = _closure1_slot5;
                var8 = {};
                var21 = var12.noticeIconCircle;
                var8.style = var21;
                var23 = _closure1_slot10;
                var21 = 19;
                var21 = var13[var21];
                var22 = var27.bind(var3)(var21);
                var21 = {};
                var24 = var12.noticeIcon;
                var21.style = var24;
                var24 = 20;
                var24 = var13[var24];
                var24 = var27.bind(var3)(var24);
                var21.source = var24;
                var21 = var23.bind(var3)(var22, var21);
                var8.children = var21;
                var8 = var16.bind(var3)(var14, var8);
                var14 = new Array(2);
                var14[0] = var8;
                var24 = _closure1_slot10;
                var8 = 21;
                var16 = var13[var8];
                var16 = var20.bind(var3)(var16);
                var22 = var16.Text;
                var21 = {};
                var16 = var12.noticeText;
                var21.style = var16;
                var16 = 'text-sm/semibold';
                var21.variant = var16;
                var16 = 11;
                var23 = var13[var16];
                var23 = var20.bind(var3)(var23);
                var28 = var23.intl;
                var26 = var28.string;
                var23 = 22;
                var25 = var13[var23];
                var25 = var27.bind(var3)(var25);
                var25 = var25.iHYMAz;
                var25 = var26.bind(var28)(var25);
                var21.children = var25;
                var21 = var24.bind(var3)(var22, var21);
                var14[1] = var21;
                var7.children = var14;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(4);
                var7[0] = var9;
                var14 = _closure1_slot11;
                var10 = _closure1_slot5;
                var9 = {};
                var21 = var12.header;
                var9.style = var21;
                var24 = _closure1_slot10;
                var21 = var13[var8];
                var21 = var20.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'style': null,
                    'variant': 'text-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = var12.headerText;
                var21.style = var25;
                var25 = var13[var16];
                var25 = var20.bind(var3)(var25);
                var28 = var25.intl;
                var26 = var28.string;
                var25 = var13[var23];
                var25 = var27.bind(var3)(var25);
                var25 = var25.AVTZaN;
                var25 = var26.bind(var28)(var25);
                var21.children = var25;
                var22 = var24.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var25 = _closure1_slot10;
                var22 = 23;
                var22 = var13[var22];
                var22 = var20.bind(var3)(var22);
                var24 = var22.TextWithIOSLinkWorkaround;
                var22 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var26 = var12.description;
                var22.style = var26;
                var26 = var13[var16];
                var26 = var20.bind(var3)(var26);
                var29 = var26.intl;
                var28 = var29.format;
                var26 = var13[var23];
                var26 = var27.bind(var3)(var26);
                var27 = var26.LyyCsE;
                var26 = {};
                var30 = 'https://support.discord.com/hc/articles/14155060633623';
                var26.link = var30;
                var26 = var28.bind(var29)(var27, var26);
                var22.children = var26;
                var22 = var25.bind(var3)(var24, var22);
                var21[1] = var22;
                var9.children = var21;
                var9 = var14.bind(var3)(var10, var9);
                var7[1] = var9;
                var14 = _closure1_slot10;
                var9 = 24;
                var9 = var13[var9];
                var9 = var20.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var21 = var12.qrCode;
                var9.style = var21;
                var9.onPress = var17;
                var21 = 0.6;
                var9.activeOpacity = var21;
                var22 = _closure1_slot10;
                var24 = 25;
                var13 = var13[var24];
                var13 = var20.bind(var3)(var13);
                var21 = var13.QRCodeWithOverlay;
                var20 = {};
                var13 = 237;
                var20.size = var13;
                if (!var18) {
                    _fun81735_ip = 969;
                    continue _fun81735
                }
            case 960:
                if (var19) {
                    _fun81735_ip = 969;
                    continue _fun81735
                }
            case 963:
                var13 = null;
                if (!(var13 == var11)) {
                    _fun81735_ip = 973;
                    continue _fun81735
                }
            case 969:
                var11 = _closure1_slot7;
            case 973:
                var20.text = var11;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var24 = var11[var24];
                var24 = var13.bind(var3)(var24);
                var24 = var24.QRCodeOverlaySizes;
                var24 = var24.SIZE_60;
                var20.overlaySize = var24;
                var24 = !var18;
                var20.blur = var24;
                var20 = var22.bind(var3)(var21, var20);
                var9.children = var20;
                var9 = var14.bind(var3)(var10, var9);
                var7[2] = var9;
                var10 = _closure1_slot10;
                var8 = var11[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'text-default'
                };
                var12 = var12.reminder;
                var8.style = var12;
                var12 = var11[var16];
                var12 = var13.bind(var3)(var12);
                var20 = var12.intl;
                var14 = var20.string;
                var21 = _closure1_slot1;
                var12 = var11[var23];
                var12 = var21.bind(var3)(var12);
                var12 = var12.goDyoe;
                var12 = var14.bind(var20)(var12);
                var8.children = var12;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var5 = 26;
                var5 = var11[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.ModalFooter;
                var5 = {};
                var10 = _closure1_slot11;
                var8 = 27;
                var8 = var11[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.ButtonGroup;
                var8 = {};
                var14 = _closure1_slot10;
                var12 = 28;
                var11 = var11[var12];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Button;
                var11 = {};
                var20 = 'primary';
                var11.variant = var20;
                var11.disabled = var19;
                var11.loading = var19;
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var16];
                var20 = var21.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var22 = _closure1_slot1;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                if (var18) {
                    _fun81735_ip = 1307;
                    continue _fun81735
                }
            case 1292:
                var18 = var19["10dX6U"];
                var18 = var20.bind(var21)(var18);
                _fun81735_ip = 1320;
                continue _fun81735;
            case 1307:
                var19 = var19.wg2xwQ;
                var18 = var20.bind(var21)(var19);
            case 1320:
                var11.text = var18;
                var11.onPress = var17;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var14 = _closure1_slot10;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = var17[var12];
                var12 = var20.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var18 = 'tertiary';
                var12.variant = var18;
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var17[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.cpT0Cq;
                var16 = var18.bind(var19)(var16);
                var12.text = var16;
                var16 = _closure1_slot1;
                var15 = 12;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.pop;
                var12.onPress = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FamilyCenterAction;
    var _closure1_slot6 = var6;
    var6 = var3.PLACEHOLDER_QR_CODE_URL;
    var _closure1_slot7 = var6;
    var3 = var3.QR_CODE_AUTO_HIDE_TIMEOUT;
    var _closure1_slot8 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'padding': 12,
        'marginBottom': 24,
        'marginHorizontal': 4294967280
    };
    var11 = 'center';
    var9 = 7;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MESSAGE_MENTIONED_BACKGROUND_DEFAULT;
    var8.backgroundColor = var13;
    var3.noticeContainer = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'marginRight': 8,
        'width': 18,
        'height': 18
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_WARNING;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.noticeIconCircle = var8;
    var8 = {
        'width': 11,
        'height': 11
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.tintColor = var13;
    var3.noticeIcon = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_WARNING;
    var8.color = var13;
    var3.noticeText = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'textAlign': 'center',
        'marginBottom': 16
    };
    var3.header = var8;
    var8 = {};
    var8.marginBottom = var12;
    var3.headerText = var8;
    var8 = {};
    var8.textAlign = var11;
    var3.description = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.STATUS_WARNING;
    var8.tintColor = var9;
    var3.icon = var8;
    var8 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.reminder = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.qrCode = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterModalQRCode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: FamilyCenterModalQRCode, environment: var1
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = function() { // Environment: var1
            var1 = function() { // Original name: getScreens, environment: var0
                var0 = {};
                var1 = {};
                var3 = true;
                var1.headerShown = var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 29;
                var4 = var8[var4];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var4 = var5.getHeaderCloseButton;
                var6 = _closure1_slot1;
                var3 = 12;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.pop;
                var3 = var4.bind(var5)(var3);
                var1.headerLeft = var3;
                var3 = function() { // Original name: headerTitle, environment: var2
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var3;
                var2 = function() { // Original name: render, environment: var2
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1.render = var2;
                var0.QR_CODE = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var1 = new Array(0);
        var4 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 30;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Modal;
        var0 = {};
        var5 = 'QR_CODE';
        var0.initialRouteName = var5;
        var0.screens = var4;
        var4 = 11;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4558, 660, 33, 1297, 671, 6472, 6471, 3106, 1234, 4525, 10394, 44, 4062, 795, 6401, 6402, 4045, 10395, 3900, 1849, 5294, 4865, 8328, 10396, 6405, 4043, 4668, 7464, 2]);