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
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildIconSource;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot11 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot12 = var3;
    var12 = 8;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.jsxs;
    var _closure1_slot15 = var6;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var10 = 16;
    var8 = {
        'marginTop': 32,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var3.headerText = var8;
    var8 = {
        'marginVertical': 8,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var3.subheaderText = var8;
    var8 = {};
    var8.marginTop = var10;
    var10 = 11;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var3.input = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var3.otherOptionsContainer = var8;
    var8 = {};
    var8.marginTop = var12;
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
    var _closure1_slot17 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AddFriendScreen, environment: var1
        _fun108915: for (var _fun108915_ip = 0;;) switch (_fun108915_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.navigation;
                var _closure2_slot0 = var5;
                var0 = var0.route;
                var0 = var0.params;
                var11 = var0.sourcePage;
                var0 = _closure1_slot17;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var _closure2_slot1 = var19;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 12;
                var0 = var22[var1];
                var2 = var21.bind(var3)(var0);
                var0 = var2.useContactSyncAccount;
                var0 = var0.bind(var2)();
                var _closure2_slot2 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = var22[var1];
                var6 = var21.bind(var3)(var1);
                var1 = var6.isContactSyncEnabled;
                var1 = var1.bind(var6)(var0);
                var1 = !var1;
                var6 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var6, var1);
                var1 = 0;
                var16 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var6 = var4.useCallback;
                var2 = function() { // Environment: var12
                    _fun108916: for (var _fun108916_ip = 0;;) switch (_fun108916_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var0 = var2.getCurrentUser;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var4;
                            var0 = undefined;
                            var8 = undefined;
                            if (!var2) {
                                _fun108916_ip = 60;
                                continue _fun108916
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getUserTag;
                            var8 = var2.bind(var3)(var4);
                        case 60:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var2 = var3[var2];
                            var7 = var4.bind(var0)(var2);
                            var6 = var7.track;
                            var2 = _closure1_slot11;
                            var5 = var2.FRIEND_ADD_VIEWED;
                            var4 = 'Add Friend Modal';
                            var2 = {
                                'friend_add_type': 'Invite',
                                'source_page': 'Add Friend Modal'
                            };
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = _closure1_slot0;
                            var1 = 15;
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
                            var1 = 16;
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
                var6 = var6.bind(var4)(var2, var1);
                var _closure2_slot4 = var6;
                var2 = var4.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var12
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var0 = {};
                    var4 = function(arg0) { // Original name: headerRight, environment: var1
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 17;
                        var0 = var7[var0];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var0);
                        var3 = var4.getRenderHeaderTextButton;
                        var0 = 15;
                        var1 = var7[var0];
                        var1 = var6.bind(var2)(var1);
                        var5 = var1.intl;
                        var1 = var5.string;
                        var0 = var7[var0];
                        var0 = var6.bind(var2)(var0);
                        var0 = var0.t;
                        var0 = var0.RDE0Sc;
                        var1 = var1.bind(var5)(var0);
                        var0 = _closure2_slot4;
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
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.checkContactPermissions;
                    var3 = var2.bind(var3)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun108919: for (var _fun108919_ip = 0;;) switch (_fun108919_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure1_slot13;
                                var2 = var1.NOT_DETERMINED;
                                var2 = var3 === var2;
                                var1 = var1.UNAUTHORIZED;
                                var1 = var3 === var1;
                                if (var2) {
                                    _fun108919_ip = 36;
                                    continue _fun108919
                                }
                            case 33:
                                var2 = var1;
                            case 36:
                                if (var2) {
                                    _fun108919_ip = 82;
                                    continue _fun108919
                                }
                            case 39:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.isContactSyncEnabled;
                                var0 = _closure2_slot2;
                                var0 = var1.bind(var3)(var0);
                                var2 = !var0;
                            case 82:
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot9;
                var0 = var1.getGuildsArray;
                var2 = var0.bind(var1)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = _closure1_slot12;
                    var0 = var0.HUB;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot16;
                var0 = {};
                var15 = _closure1_slot14;
                var9 = _closure1_slot1;
                var4 = 19;
                var4 = var22[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var6 = true;
                var4.absolute = var6;
                var5 = var15.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var7 = 'handled';
                var5.keyboardShouldPersistTaps = var7;
                var7 = var19.background;
                var5.style = var7;
                var10 = 20;
                var7 = var22[var10];
                var7 = var21.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var19.headerText;
                var7.style = var17;
                var17 = 15;
                var18 = var22[var17];
                var18 = var21.bind(var3)(var18);
                var23 = var18.intl;
                var20 = var23.string;
                var18 = var22[var17];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.GWMTSE;
                var18 = var20.bind(var23)(var18);
                var7.children = var18;
                var8 = var15.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = var22[var10];
                var8 = var21.bind(var3)(var8);
                var18 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = var19.subheaderText;
                var8.style = var20;
                var20 = var22[var17];
                var20 = var21.bind(var3)(var20);
                var24 = var20.intl;
                var23 = var24.string;
                var20 = var22[var17];
                var20 = var21.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["Rn/sLl"];
                var20 = var23.bind(var24)(var20);
                var8.children = var20;
                var8 = var15.bind(var3)(var18, var8);
                var7[1] = var8;
                var8 = 21;
                var8 = var22[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var18 = var19.input;
                var8.style = var18;
                var18 = false;
                var8.autoFocusInput = var18;
                var8.sourcePage = var11;
                var8 = var15.bind(var3)(var9, var8);
                var7[2] = var8;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var19.otherOptionsContainer;
                var8.style = var11;
                var10 = var22[var10];
                var10 = var21.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var18 = var22[var17];
                var18 = var21.bind(var3)(var18);
                var20 = var18.intl;
                var18 = var20.string;
                var17 = var22[var17];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.dukg0Z;
                var17 = var18.bind(var20)(var17);
                var10.children = var17;
                var11 = var15.bind(var3)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var15 = null;
                if (!var16) {
                    _fun108915_ip = 736;
                    continue _fun108915
                }
            case 684:
                var18 = _closure1_slot14;
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var16 = 22;
                var16 = var20[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var19 = var19.rowContainer;
                var16.style = var19;
                var19 = 'Add Friend Modal';
                var16.location = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 736:
                var10[1] = var15;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 23;
                var13 = var16[var13];
                var15 = var15.bind(var3)(var13);
                var13 = var15.backToSchoolEnabled;
                var13 = var13.bind(var15)();
                var11 = null;
                if (!var13) {
                    _fun108915_ip = 792;
                    continue _fun108915
                }
            case 775:
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot14;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 24;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.FormCTA;
                    var1 = {};
                    var5 = function() { // Original name: onPress, environment: var5
                        _fun108922: for (var _fun108922_ip = 0;;) switch (_fun108922_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var4 = var0.id;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 14;
                                var2 = var2[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var2);
                                var5 = var6.track;
                                var2 = _closure1_slot11;
                                var3 = var2.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED;
                                var2 = {};
                                var2.guild_id = var4;
                                var2 = var5.bind(var6)(var3, var2);
                                var5 = _closure2_slot0;
                                var3 = var5.getParent;
                                var5 = var3.bind(var5)();
                                var3 = null;
                                if (!(var3 == var5)) {
                                    _fun108922_ip = 91;
                                    continue _fun108922
                                }
                            case 87:
                                var5 = _closure2_slot0;
                            case 91:
                                var2 = var5.goBack;
                                var2 = var2.bind(var5)();
                                var5 = _closure1_slot8;
                                var2 = var5.getDefaultChannel;
                                var2 = var2.bind(var5)(var4);
                                var5 = var3 == var2;
                                var3 = undefined;
                                if (var5) {
                                    _fun108922_ip = 130;
                                    continue _fun108922
                                }
                            case 125:
                                var3 = var2.id;
                            case 130:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 18;
                                var1 = var5[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.transitionToGuild;
                                var1 = var1.bind(var2)(var4, var3);
                                return var0;
                        }
                    };
                    var1.onPress = var5;
                    var5 = _closure2_slot1;
                    var7 = var5.rowContainer;
                    var1.style = var7;
                    var7 = _closure1_slot7;
                    var6 = 128;
                    var6 = var7.bind(var3)(var0, var6);
                    var1.iconSource = var6;
                    var5 = var5.hubIcon;
                    var1.iconStyle = var5;
                    var5 = var0.name;
                    var1.title = var5;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.P3mDze;
                    var5 = var6.bind(var7)(var5);
                    var1.subtitle = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11 = var13.bind(var14)(var12);
            case 792:
                var10[2] = var11;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1416, 1662, 1410, 1613, 660, 10206, 33, 1297, 671, 10214, 3195, 795, 1234, 8230, 8844, 1220, 8667, 3895, 12520, 12521, 10202, 5335, 2]);