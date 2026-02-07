// modules/forums/native/ForumGuidelinesActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
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
    var3 = var3.FORUM_GUIDELINES_ACTION_SHEET;
    var _closure1_slot6 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 16;
    var8.paddingHorizontal = var12;
    var3.scrollContainer = var8;
    var8 = {
        'alignItems': 'center',
        'paddingTop': 20,
        'paddingBottom': 24
    };
    var3.header = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.headerTitle = var8;
    var8 = {};
    var8.padding = var12;
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.guidelinesContainer = var8;
    var8 = {};
    var8.paddingBottom = var12;
    var3.footer = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var8.marginHorizontal = var12;
    var3.button = var8;
    var8 = {
        'marginTop': 16,
        'position': 'absolute',
        'left': 16,
        'right': 16,
        'shadowColor': null,
        'shadowOffset': null,
        'shadowOpacity': 0.25,
        'shadowRadius': 4
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var8.shadowColor = var12;
    var12 = {
        'width': 0,
        'height': 1
    };
    var8.shadowOffset = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.floatingButtonContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'position': 'absolute',
        'top': 12,
        'right': 0
    };
    var3.editButton = var8;
    var8 = {};
    var8.marginRight = var11;
    var3.editText = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var8.color = var9;
    var3.editIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumGuidelinesActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun74513: for (var _fun74513_ip = 0;;) switch (_fun74513_ip) {
            case 0:
                var1 = arg0;
                var27 = var1.channel;
                var _closure2_slot0 = var27;
                var2 = var1.onPress;
                var _closure2_slot1 = var2;
                var8 = var1.onClose;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot10;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useCanManageChannel;
                var14 = var1.bind(var2)(var27);
                var4 = _closure1_slot1;
                var1 = 8;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var16 = var1.bottom;
                var _closure2_slot2 = var16;
                var9 = _closure1_slot4;
                var1 = var9.useState;
                var5 = var1.bind(var9)();
                var2 = _closure1_slot3;
                var1 = 2;
                var7 = var2.bind(var3)(var5, var1);
                var5 = 0;
                var1 = var7[var5];
                var _closure2_slot3 = var1;
                var2 = 1;
                var2 = var7[var2];
                var _closure2_slot4 = var2;
                var2 = 9;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.bind(var3)();
                var7 = var9.useMemo;
                var6 = new Array(2);
                var6[0] = var16;
                var6[1] = var1;
                var2 = function() { // Environment: var0
                    _fun74514: for (var _fun74514_ip = 0;;) switch (_fun74514_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun74514_ip = 85;
                                continue _fun74514
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            var3 = 0;
                            if (!var2) {
                                _fun74514_ip = 62;
                                continue _fun74514
                            }
                        case 58:
                            var3 = _closure2_slot2;
                        case 62:
                            var2 = 72;
                            var3 = var2 + var3;
                            var2 = _closure2_slot3;
                            var2 = var3 + var2;
                            var1 = _closure2_slot2;
                            var0 = var2 + var1;
                        case 85:
                            return var0;
                    }
                };
                var2 = var7.bind(var9)(var2, var6);
                var6 = null;
                var6 = var6 != var2;
                if (!var6) {
                    _fun74513_ip = 219;
                    continue _fun74513
                }
            case 216:
                var5 = var2;
            case 219:
                var5 = var4 < var5;
                _closure2_slot5 = var5;
                var20 = undefined;
                if (var5) {
                    _fun74513_ip = 235;
                    continue _fun74513
                }
            case 232:
                var20 = var2;
            case 235:
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun74515: for (var _fun74515_ip = 0;;) switch (_fun74515_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = _closure2_slot3;
                            if (!(var2 !== var1)) {
                                _fun74515_ip = 25;
                                continue _fun74515
                            }
                        case 14:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var4.bind(var6)(var1, var2);
                var4 = var6.useEffect;
                var1 = var27.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.markAsSeen;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var6)(var1, var2);
                var9 = function() {
                    _fun74517: for (var _fun74517_ip = 0;;) switch (_fun74517_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74517_ip = 23;
                                continue _fun74517
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var1 = _closure1_slot6;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var19 = !var5;
                if (var5) {
                    _fun74513_ip = 459;
                    continue _fun74513
                }
            case 312:
                var4 = _closure1_slot7;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var1 = 13;
                var1 = var21[var1];
                var1 = var18.bind(var3)(var1);
                var2 = var1.SafeAreaPaddingView;
                var1 = {};
                var6 = true;
                var1.bottom = var6;
                var6 = var12.footer;
                var1.style = var6;
                var7 = _closure1_slot1;
                var6 = 14;
                var6 = var21[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = 15;
                var15 = var21[var10];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var10 = var21[var10];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["NX+WJN"];
                var10 = var15.bind(var17)(var10);
                var6.text = var10;
                var6.onPress = var9;
                var10 = var12.button;
                var6.style = var10;
                var6 = var4.bind(var3)(var7, var6);
                var1.children = var6;
                var19 = var4.bind(var3)(var2, var1);
            case 459:
                var4 = _closure1_slot4;
                var6 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var16;
                var2[1] = var5;
                var1 = function() { // Environment: var0
                    _fun74518: for (var _fun74518_ip = 0;;) switch (_fun74518_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = 0;
                            if (!var2) {
                                _fun74518_ip = 30;
                                continue _fun74518
                            }
                        case 12:
                            var2 = _closure2_slot2;
                            var1 = 40;
                            var2 = var2 + var1;
                            var1 = 32;
                            var0 = var2 + var1;
                        case 30:
                            return var0;
                    }
                };
                var18 = var6.bind(var4)(var1, var2);
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 16;
                var1 = var17[var15];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useLocation;
                var1 = var1.bind(var2)();
                var1 = var1.pathname;
                _closure2_slot6 = var1;
                var2 = var4.useRef;
                var26 = true;
                var2 = var2.bind(var4)(var26);
                _closure2_slot7 = var2;
                var6 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var27.id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun74519: for (var _fun74519_ip = 0;;) switch (_fun74519_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.tryParseChannelPath;
                            var3 = _closure2_slot6;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot7;
                            var4 = var4.current;
                            if (var4) {
                                _fun74519_ip = 116;
                                continue _fun74519
                            }
                        case 55:
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun74519_ip = 116;
                                continue _fun74519
                            }
                        case 61:
                            var4 = var3.channelId;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            if (!(var4 !== var3)) {
                                _fun74519_ip = 116;
                                continue _fun74519
                            }
                        case 79:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.hideActionSheet;
                            var2 = _closure1_slot6;
                            var2 = var3.bind(var4)(var2);
                            _fun74519_ip = 128;
                            continue _fun74519;
                        case 116:
                            var2 = _closure2_slot7;
                            var1 = false;
                            var2.current = var1;
                        case 128:
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var6 = var27.id;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var4 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.hideActionSheet;
                    var1 = _closure1_slot6;
                    var1 = var4.bind(var5)(var1);
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var21 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = _closure1_slot7;
                var4 = 19;
                var4 = var17[var4];
                var4 = var10.bind(var3)(var4);
                var6 = var4.BottomSheet;
                var4 = {};
                var4.scrollable = var26;
                var4.contentHeight = var20;
                var4.footer = var19;
                var4.onDismiss = var8;
                var8 = 20;
                var8 = var17[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.BottomSheetScrollView;
                var8 = {};
                var17 = var12.scrollContainer;
                var8.style = var17;
                var17 = {};
                var17.bottom = var16;
                var8.scrollIndicatorInsets = var17;
                var17 = {};
                var17.paddingBottom = var18;
                var8.contentContainerStyle = var17;
                var8.onContentSizeChange = var13;
                var17 = _closure1_slot5;
                var13 = {};
                var18 = var12.header;
                var13.style = var18;
                if (!var14) {
                    _fun74513_ip = 1025;
                    continue _fun74513
                }
            case 748:
                var20 = _closure1_slot8;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var18 = 21;
                var18 = var25[var18];
                var18 = var23.bind(var3)(var18);
                var19 = var18.PressableOpacity;
                var18 = {};
                var28 = 15;
                var22 = var25[var28];
                var22 = var23.bind(var3)(var22);
                var29 = var22.intl;
                var24 = var29.string;
                var22 = var25[var28];
                var22 = var23.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.bt75uw;
                var22 = var24.bind(var29)(var22);
                var18.accessibilityLabel = var22;
                var22 = 'button';
                var18.accessibilityRole = var22;
                var22 = var12.editButton;
                var18.style = var22;
                var18.onPress = var21;
                var24 = _closure1_slot7;
                var21 = 22;
                var21 = var25[var21];
                var21 = var23.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var29 = var12.editText;
                var21.style = var29;
                var29 = var25[var28];
                var29 = var23.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var25[var28];
                var28 = var23.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.bt75uw;
                var28 = var29.bind(var30)(var28);
                var21.children = var28;
                var22 = var24.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var22 = 23;
                var22 = var25[var22];
                var22 = var23.bind(var3)(var22);
                var23 = var22.PencilIcon;
                var22 = {};
                var25 = var12.editIcon;
                var25 = var25.color;
                var22.color = var25;
                var25 = 'xs';
                var22.size = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var18.children = var21;
                var14 = var20.bind(var3)(var19, var18);
            case 1025:
                var18 = new Array(3);
                var18[0] = var14;
                var19 = _closure1_slot7;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var14 = 24;
                var14 = var24[var14];
                var20 = var23.bind(var3)(var14);
                var14 = {};
                var21 = _closure1_slot0;
                var22 = 25;
                var22 = var24[var22];
                var22 = var21.bind(var3)(var22);
                var22 = var22.BookCheckIcon;
                var14.IconComponent = var22;
                var14 = var19.bind(var3)(var20, var14);
                var18[1] = var14;
                var20 = 22;
                var14 = var24[var20];
                var14 = var21.bind(var3)(var14);
                var25 = var14.Text;
                var22 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.headerTitle;
                var22.style = var14;
                var14 = 15;
                var28 = var24[var14];
                var28 = var21.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var24[var14];
                var28 = var21.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28["4d4T4l"];
                var28 = var29.bind(var30)(var28);
                var22.children = var28;
                var22 = var19.bind(var3)(var25, var22);
                var18[2] = var22;
                var13.children = var18;
                var17 = var2.bind(var3)(var17, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var18 = _closure1_slot5;
                var17 = {};
                var22 = var12.guidelinesContainer;
                var17.style = var22;
                var20 = var24[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var22 = 26;
                var22 = var24[var22];
                var25 = var23.bind(var3)(var22);
                var24 = var25.parseForumPostGuidelines;
                var23 = var27.topic;
                var22 = {
                    'channelId': null,
                    'allowHeading': true,
                    'allowList': true,
                    'allowLinks': true
                };
                var27 = var27.id;
                var22.channelId = var27;
                var22 = var24.bind(var25)(var23, var26, var22);
                var20.children = var22;
                var20 = var19.bind(var3)(var21, var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var13[1] = var17;
                var8.children = var13;
                var8 = var2.bind(var3)(var10, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun74513_ip = 1494;
                    continue _fun74513
                }
            case 1374:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 14;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var13 = var12.floatingButtonContainer;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var15 = var16 + var15;
                var13.bottom = var15;
                var12[1] = var13;
                var6.style = var12;
                var13 = _closure1_slot0;
                var11 = var10[var14];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["NX+WJN"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1494:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 12;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 28;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 27;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot6;
        var1 = {};
        var8 = arg0;
        var9 = var1;
        var6 = copyDataProperties(var9, var8);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openForumGuidelinesActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6545, 33, 1297, 671, 8987, 1568, 9355, 478, 9356, 3279, 4736, 4875, 1234, 3468, 3464, 6532, 4933, 4935, 4904, 3942, 7584, 5978, 4844, 4783, 9354, 1307, 2]);