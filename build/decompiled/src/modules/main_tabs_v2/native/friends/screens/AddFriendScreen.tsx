// modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
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
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var12 = 16;
    var8 = {
        'marginTop': 32,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var3.headerText = var8;
    var10 = 8;
    var8 = {
        'marginVertical': 8,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var3.subheaderText = var8;
    var8 = {};
    var8.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.input = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var3.otherOptionsContainer = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.rowContainer = var8;
    var8 = {};
    var12 = 20;
    var8.borderRadius = var12;
    var3.hubIcon = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var10;
    var3.background = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.shareButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109115: for (var _fun109115_ip = 0;;) switch (_fun109115_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.navigation;
                var _closure2_slot0 = var6;
                var1 = var1.route;
                var1 = var1.params;
                var11 = var1.sourcePage;
                var1 = _closure1_slot13;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 9;
                var2 = var20[var1];
                var4 = var19.bind(var3)(var2);
                var2 = var4.useContactSyncAccount;
                var5 = var2.bind(var4)();
                var _closure2_slot1 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = var20[var1];
                var7 = var19.bind(var3)(var1);
                var1 = var7.isContactSyncEnabled;
                var1 = var1.bind(var7)(var5);
                var1 = !var1;
                var7 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var7, var1);
                var1 = 0;
                var13 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var7 = var4.useCallback;
                var2 = function() { // Environment: var0
                    _fun109116: for (var _fun109116_ip = 0;;) switch (_fun109116_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var0 = var2.getCurrentUser;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var4;
                            var0 = undefined;
                            var8 = undefined;
                            if (!var2) {
                                _fun109116_ip = 60;
                                continue _fun109116
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getUserTag;
                            var8 = var2.bind(var3)(var4);
                        case 60:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 11;
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
                            var1 = 12;
                            var5 = var3[var1];
                            var5 = var2.bind(var0)(var5);
                            var7 = var5.intl;
                            var6 = var7.formatToPlainString;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.t;
                            var5 = var1["6E9a1J"];
                            var1 = {};
                            var9 = global;
                            var10 = var9.location;
                            var12 = var10.protocol;
                            var10 = var9.window;
                            var10 = var10.GLOBAL_ENV;
                            var11 = var10.WEBAPP_ENDPOINT;
                            var9 = var9.HermesInternal;
                            var10 = var9.concat;
                            var9 = '';
                            var9 = var10.bind(var9)(var12, var11);
                            var1.url = var9;
                            var1.username = var8;
                            var5 = var6.bind(var7)(var5, var1);
                            var1 = 13;
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
                var7 = var7.bind(var4)(var2, var1);
                var _closure2_slot3 = var7;
                var2 = var4.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var0 = {};
                    var4 = function arg0() {
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 14;
                        var0 = var7[var0];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var0);
                        var3 = var4.getRenderHeaderTextButton;
                        var0 = 12;
                        var1 = var7[var0];
                        var1 = var6.bind(var2)(var1);
                        var5 = var1.intl;
                        var1 = var5.string;
                        var0 = var7[var0];
                        var0 = var6.bind(var2)(var0);
                        var0 = var0.t;
                        var0 = var0.RDE0Sc;
                        var1 = var1.bind(var5)(var0);
                        var0 = _closure2_slot3;
                        var1 = var3.bind(var4)(var1, var0);
                        var0 = {};
                        var8 = arg0;
                        var9 = var0;
                        var3 = copyDataProperties(var9, var8);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.headerRight = var4;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.checkContactPermissions;
                    var3 = var2.bind(var3)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun109119: for (var _fun109119_ip = 0;;) switch (_fun109119_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure1_slot9;
                                var2 = var1.NOT_DETERMINED;
                                var2 = var3 === var2;
                                var1 = var1.UNAUTHORIZED;
                                var1 = var3 === var1;
                                if (var2) {
                                    _fun109119_ip = 36;
                                    continue _fun109119
                                }
                            case 33:
                                var2 = var1;
                            case 36:
                                if (var2) {
                                    _fun109119_ip = 82;
                                    continue _fun109119
                                }
                            case 39:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.isContactSyncEnabled;
                                var0 = _closure2_slot1;
                                var0 = var1.bind(var3)(var0);
                                var2 = !var0;
                            case 82:
                                var1 = _closure2_slot2;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var14 = _closure1_slot10;
                var9 = _closure1_slot1;
                var4 = 15;
                var4 = var20[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var6 = true;
                var4.absolute = var6;
                var5 = var14.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var7 = 'handled';
                var5.keyboardShouldPersistTaps = var7;
                var7 = var15.background;
                var5.style = var7;
                var10 = 16;
                var7 = var20[var10];
                var7 = var19.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var15.headerText;
                var7.style = var16;
                var16 = 12;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var18 = var21.string;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.GWMTSE;
                var17 = var18.bind(var21)(var17);
                var7.children = var17;
                var8 = var14.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = var20[var10];
                var8 = var19.bind(var3)(var8);
                var17 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var18 = var15.subheaderText;
                var8.style = var18;
                var18 = var20[var16];
                var18 = var19.bind(var3)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var16];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["Rn/sLl"];
                var18 = var21.bind(var22)(var18);
                var8.children = var18;
                var8 = var14.bind(var3)(var17, var8);
                var7[1] = var8;
                var8 = 17;
                var8 = var20[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var17 = var15.input;
                var8.style = var17;
                var17 = false;
                var8.autoFocusInput = var17;
                var8.sourcePage = var11;
                var8 = var14.bind(var3)(var9, var8);
                var7[2] = var8;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var15.otherOptionsContainer;
                var8.style = var11;
                var10 = var20[var10];
                var10 = var19.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.dukg0Z;
                var16 = var17.bind(var18)(var16);
                var10.children = var16;
                var11 = var14.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = null;
                if (!var13) {
                    _fun109115_ip = 701;
                    continue _fun109115
                }
            case 649:
                var14 = _closure1_slot10;
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 18;
                var12 = var16[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var15 = var15.rowContainer;
                var12.style = var15;
                var15 = 'Add Friend Modal';
                var12.location = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 701:
                var10[1] = var11;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[3] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 660, 10381, 33, 1297, 671, 10389, 3237, 795, 1234, 8343, 8972, 8795, 3942, 12595, 12596, 2]);