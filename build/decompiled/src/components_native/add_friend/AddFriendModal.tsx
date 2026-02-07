// components_native/add_friend/AddFriendModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun96738: for (var _fun96738_ip = 0;;) switch (_fun96738_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.onSkip;
                var _closure2_slot0 = var1;
                var2 = var2.sourceMetadata;
                var _closure2_slot1 = var2;
                var2 = _closure1_slot12;
                var3 = undefined;
                var13 = var2.bind(var3)();
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 10;
                var4 = var18[var2];
                var5 = var17.bind(var3)(var4);
                var4 = var5.useContactSyncAccount;
                var7 = var4.bind(var5)();
                var _closure2_slot2 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var2 = var18[var2];
                var6 = var17.bind(var3)(var2);
                var2 = var6.isContactSyncEnabled;
                var2 = var2.bind(var6)(var7);
                var2 = !var2;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var11 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure2_slot3 = var2;
                var6 = _closure1_slot1;
                var2 = 11;
                var2 = var18[var2];
                var4 = var6.bind(var3)(var2);
                var2 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot8;
                    var4 = var2.FRIEND_ADD_VIEWED;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot0;
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.checkContactPermissions;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun96740: for (var _fun96740_ip = 0;;) switch (_fun96740_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure1_slot9;
                                var1 = var1.NOT_DETERMINED;
                                var2 = var3 === var1;
                                var1 = _closure1_slot9;
                                var1 = var1.UNAUTHORIZED;
                                var1 = var3 === var1;
                                if (var2) {
                                    _fun96740_ip = 40;
                                    continue _fun96740
                                }
                            case 37:
                                var2 = var1;
                            case 40:
                                if (var2) {
                                    _fun96740_ip = 86;
                                    continue _fun96740
                                }
                            case 43:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.isContactSyncEnabled;
                                var0 = _closure2_slot2;
                                var0 = var1.bind(var3)(var0);
                                var2 = !var0;
                            case 86:
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var2 = 13;
                var2 = var18[var2];
                var4 = var17.bind(var3)(var2);
                var2 = var4.useNavigation;
                var5 = var2.bind(var4)();
                var _closure2_slot4 = var5;
                var7 = _closure1_slot4;
                var4 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun96741: for (var _fun96741_ip = 0;;) switch (_fun96741_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun96741_ip = 23;
                                continue _fun96741
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var8 = var4.bind(var7)(var1, var2);
                var _closure2_slot5 = var8;
                var7 = _closure1_slot4;
                var4 = var7.useCallback;
                var2 = function() { // Environment: var0
                    _fun96742: for (var _fun96742_ip = 0;;) switch (_fun96742_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var0 = var2.getCurrentUser;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var4;
                            var0 = undefined;
                            var8 = undefined;
                            if (!var2) {
                                _fun96742_ip = 60;
                                continue _fun96742
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 15;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getUserTag;
                            var8 = var2.bind(var3)(var4);
                        case 60:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var2 = var3[var2];
                            var7 = var4.bind(var0)(var2);
                            var6 = var7.track;
                            var2 = _closure1_slot8;
                            var5 = var2.FRIEND_ADD_VIEWED;
                            var4 = 'Add Friend Modal';
                            var2 = {
                                'friend_add_type': 'Invite',
                                'source_page': 'Add Friend Modal'
                            };
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = _closure1_slot0;
                            var1 = 16;
                            var5 = var3[var1];
                            var5 = var2.bind(var0)(var5);
                            var7 = var5.intl;
                            var6 = var7.formatToPlainString;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.t;
                            var5 = var1["6E9a1J"];
                            var1 = {};
                            var9 = 'https://discord.com/';
                            var1.url = var9;
                            var1.username = var8;
                            var5 = var6.bind(var7)(var5, var1);
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showShareActionSheet;
                            var1 = {};
                            var1.message = var5;
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
                var1 = new Array(0);
                var7 = var4.bind(var7)(var2, var1);
                var _closure2_slot6 = var7;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    var0 = function() {
                        var3 = _closure1_slot10;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 18;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var5 = _closure1_slot1;
                        var4 = 19;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var0.source = var4;
                        var4 = _closure2_slot6;
                        var0.onPress = var4;
                        var4 = 16;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4.RDE0Sc;
                        var4 = var5.bind(var6)(var4);
                        var0.accessibilityLabel = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.headerRight = var0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 20;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getHeaderCloseButton;
                    var4 = _closure2_slot5;
                    var4 = var5.bind(var6)(var4);
                    var1.headerLeft = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var7 = _closure1_slot10;
                var8 = 21;
                var4 = var18[var8];
                var4 = var17.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var13.headerText;
                var4.style = var9;
                var14 = 16;
                var9 = var18[var14];
                var9 = var17.bind(var3)(var9);
                var15 = var9.intl;
                var12 = var15.string;
                var9 = var18[var14];
                var9 = var17.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.GWMTSE;
                var9 = var12.bind(var15)(var9);
                var4.children = var9;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var9 = _closure1_slot10;
                var5 = var18[var8];
                var5 = var17.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = var13.subheaderText;
                var5.style = var12;
                var12 = var18[var14];
                var12 = var17.bind(var3)(var12);
                var16 = var12.intl;
                var15 = var16.string;
                var12 = var18[var14];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["Rn/sLl"];
                var12 = var15.bind(var16)(var12);
                var5.children = var12;
                var5 = var9.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var5 = 22;
                var5 = var18[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var13.input;
                var5.style = var9;
                var9 = false;
                var5.autoFocusInput = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var13.otherOptionsContainer;
                var5.style = var9;
                var12 = _closure1_slot10;
                var8 = var18[var8];
                var8 = var17.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.dukg0Z;
                var14 = var15.bind(var16)(var14);
                var8.children = var14;
                var9 = var12.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if (!var11) {
                    _fun96738_ip = 745;
                    continue _fun96738
                }
            case 693:
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 23;
                var10 = var14[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var13 = var13.rowContainer;
                var10.style = var13;
                var13 = 'Add Friend Modal';
                var10.location = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 745:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var13 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var10 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var12 = var5[var9];
    var16 = var11.bind(var0)(var12);
    var15 = var10.DISPLAY_EXTRABOLD;
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var14 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var12 = 24;
    var18 = var16.bind(var0)(var15, var14, var12);
    var19 = var8;
    var12 = copyDataProperties(var19, var18);
    var14 = 32;
    var12 = 'marginTop';
    var8[var12] = var14;
    var12 = 16;
    var14 = 'marginHorizontal';
    var8[var14] = var12;
    var15 = 'center';
    var14 = 'textAlign';
    var8[var14] = var15;
    var3.headerText = var8;
    var8 = {
        'lineHeight': 18,
        'marginVertical': 8,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var3.subheaderText = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var3.friendInviteContainer = var8;
    var8 = {
        'fontSize': 12,
        'lineHeight': 16,
        'color': null,
        'marginTop': 4
    };
    var14 = 12;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_SUBTLE;
    var8.color = var15;
    var3.friendInviteSubtext = var8;
    var8 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.RED_400;
    var8.color = var15;
    var3.friendInviteRevoke = var8;
    var8 = {};
    var8.marginTop = var14;
    var13 = var13.hairlineWidth;
    var8.height = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.backgroundColor = var13;
    var3.divider = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.input = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var3.otherOptionsContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var8.marginTop = var9;
    var3.rowContainer = var8;
    var8 = {};
    var9 = 20;
    var8.borderRadius = var9;
    var3.hubIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/add_friend/AddFriendModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var8 = arg0;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 24;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var4 = var2.top;
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = function arg0() {
                var0 = {};
                var1 = {};
                var2 = true;
                var1.ignoreKeyboard = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.w5uwoI;
                var2 = var3.bind(var4)(var2);
                var1.title = var2;
                var2 = arg0;
                var1.initialParams = var2;
                var2 = function arg0() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var4 = arg0;
                    var5 = var1;
                    var0 = copyDataProperties(var5, var4);
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.render = var2;
                var0.ADD_FRIEND = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var5.bind(var7)(var1, var2);
        var2 = _closure1_slot10;
        var1 = _closure1_slot0;
        var0 = 25;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var5 = 'ADD_FRIEND';
        var0.initialRouteName = var5;
        var0.headerStatusBarHeight = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 660, 10381, 33, 1297, 4682, 671, 10389, 4103, 795, 1472, 4561, 3237, 1234, 8343, 5374, 12594, 4705, 3942, 12595, 12596, 1568, 5837, 2]);