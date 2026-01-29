// components_native/add_friend/AddFriendModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AddFriendModalScene, environment: var1
        _fun96546: for (var _fun96546_ip = 0;;) switch (_fun96546_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onSkip;
                var _closure2_slot0 = var1;
                var0 = var0.sourceMetadata;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var0 = function(arg0) { // Original name: studentHubCTA, environment: var10
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot14;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 25;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.FormCTA;
                    var0 = {};
                    var5 = function() { // Original name: onPress, environment: var5
                        _fun96548: for (var _fun96548_ip = 0;;) switch (_fun96548_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var4 = var0.id;
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 15;
                                var2 = var5[var0];
                                var0 = undefined;
                                var8 = var3.bind(var0)(var2);
                                var7 = var8.track;
                                var2 = _closure1_slot11;
                                var6 = var2.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED;
                                var2 = {};
                                var2.guild_id = var4;
                                var2 = var7.bind(var8)(var6, var2);
                                var2 = 17;
                                var2 = var5[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.pop;
                                var2 = var2.bind(var3)();
                                var3 = _closure1_slot8;
                                var2 = var3.getDefaultChannel;
                                var2 = var2.bind(var3)(var4);
                                var3 = null;
                                var5 = var3 == var2;
                                var3 = undefined;
                                if (var5) {
                                    _fun96548_ip = 117;
                                    continue _fun96548
                                }
                            case 112:
                                var3 = var2.id;
                            case 117:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 24;
                                var1 = var5[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.transitionToGuild;
                                var1 = var1.bind(var2)(var4, var3);
                                return var0;
                        }
                    };
                    var0.onPress = var5;
                    var9 = _closure2_slot2;
                    var9 = var9.rowContainer;
                    var0.style = var9;
                    var9 = _closure1_slot7;
                    var6 = 128;
                    var6 = var9.bind(var2)(var4, var6);
                    var0.iconSource = var6;
                    var5 = _closure2_slot2;
                    var5 = var5.hubIcon;
                    var0.iconStyle = var5;
                    var4 = var4.name;
                    var0.title = var4;
                    var4 = 19;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.P3mDze;
                    var4 = var5.bind(var6)(var4);
                    var0.subtitle = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var _closure2_slot8 = var0;
                var0 = _closure1_slot16;
                var16 = var0.bind(var3)();
                _closure2_slot2 = var16;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 13;
                var2 = var20[var0];
                var4 = var19.bind(var3)(var2);
                var2 = var4.useContactSyncAccount;
                var6 = var2.bind(var4)();
                var _closure2_slot3 = var6;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var0 = var20[var0];
                var5 = var19.bind(var3)(var0);
                var0 = var5.isContactSyncEnabled;
                var0 = var0.bind(var5)(var6);
                var0 = !var0;
                var4 = var2.bind(var4)(var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var3)(var4, var0);
                var0 = 0;
                var13 = var2[var0];
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot4 = var0;
                var6 = _closure1_slot1;
                var0 = 14;
                var0 = var20[var0];
                var2 = var6.bind(var3)(var0);
                var0 = function() { // Environment: var10
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 15;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot11;
                    var4 = var2.FRIEND_ADD_VIEWED;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot0;
                    var1 = 13;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.checkContactPermissions;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun96550: for (var _fun96550_ip = 0;;) switch (_fun96550_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure1_slot13;
                                var1 = var1.NOT_DETERMINED;
                                var2 = var3 === var1;
                                var1 = _closure1_slot13;
                                var1 = var1.UNAUTHORIZED;
                                var1 = var3 === var1;
                                if (var2) {
                                    _fun96550_ip = 40;
                                    continue _fun96550
                                }
                            case 37:
                                var2 = var1;
                            case 40:
                                if (var2) {
                                    _fun96550_ip = 86;
                                    continue _fun96550
                                }
                            case 43:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.isContactSyncEnabled;
                                var0 = _closure2_slot3;
                                var0 = var1.bind(var3)(var0);
                                var2 = !var0;
                            case 86:
                                var1 = _closure2_slot4;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = 16;
                var0 = var20[var0];
                var2 = var19.bind(var3)(var0);
                var0 = var2.useNavigation;
                var0 = var0.bind(var2)();
                var _closure2_slot5 = var0;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    _fun96551: for (var _fun96551_ip = 0;;) switch (_fun96551_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun96551_ip = 23;
                                continue _fun96551
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var7 = var4.bind(var5)(var1, var2);
                var _closure2_slot6 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = function() { // Environment: var10
                    _fun96552: for (var _fun96552_ip = 0;;) switch (_fun96552_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var0 = var2.getCurrentUser;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var4;
                            var0 = undefined;
                            var8 = undefined;
                            if (!var2) {
                                _fun96552_ip = 60;
                                continue _fun96552
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 18;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getUserTag;
                            var8 = var2.bind(var3)(var4);
                        case 60:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 15;
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
                            var1 = 19;
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
                            var1 = 20;
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
                var5 = var4.bind(var5)(var2, var1);
                var _closure2_slot7 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var10
                    var3 = _closure2_slot5;
                    var2 = var3.setOptions;
                    var1 = {};
                    var0 = function() { // Original name: headerRight, environment: var0
                        var3 = _closure1_slot14;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 21;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var5 = _closure1_slot1;
                        var4 = 22;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var0.source = var4;
                        var4 = _closure2_slot7;
                        var0.onPress = var4;
                        var4 = 19;
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
                    var0 = 23;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getHeaderCloseButton;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var1.headerLeft = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot9;
                var0 = var1.getGuildsArray;
                var2 = var0.bind(var1)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = _closure1_slot12;
                    var0 = var0.HUB;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var7 = _closure1_slot14;
                var8 = 26;
                var4 = var20[var8];
                var4 = var19.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var16.headerText;
                var4.style = var11;
                var15 = 19;
                var11 = var20[var15];
                var11 = var19.bind(var3)(var11);
                var17 = var11.intl;
                var14 = var17.string;
                var11 = var20[var15];
                var11 = var19.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.GWMTSE;
                var11 = var14.bind(var17)(var11);
                var4.children = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var11 = _closure1_slot14;
                var5 = var20[var8];
                var5 = var19.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var14 = var16.subheaderText;
                var5.style = var14;
                var14 = var20[var15];
                var14 = var19.bind(var3)(var14);
                var18 = var14.intl;
                var17 = var18.string;
                var14 = var20[var15];
                var14 = var19.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["Rn/sLl"];
                var14 = var17.bind(var18)(var14);
                var5.children = var14;
                var5 = var11.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = _closure1_slot14;
                var5 = 27;
                var5 = var20[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var11 = var16.input;
                var5.style = var11;
                var11 = false;
                var5.autoFocusInput = var11;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = var16.otherOptionsContainer;
                var5.style = var11;
                var14 = _closure1_slot14;
                var8 = var20[var8];
                var8 = var19.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var17 = var20[var15];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.dukg0Z;
                var15 = var17.bind(var18)(var15);
                var8.children = var15;
                var11 = var14.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var11 = null;
                if (!var13) {
                    _fun96546_ip = 795;
                    continue _fun96546
                }
            case 743:
                var15 = _closure1_slot14;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 28;
                var13 = var17[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var16 = var16.rowContainer;
                var13.style = var16;
                var16 = 'Add Friend Modal';
                var13.location = var16;
                var11 = var15.bind(var3)(var14, var13);
            case 795:
                var8[1] = var11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 29;
                var9 = var13[var9];
                var11 = var11.bind(var3)(var9);
                var9 = var11.backToSchoolEnabled;
                var9 = var9.bind(var11)();
                if (!var9) {
                    _fun96546_ip = 849;
                    continue _fun96546
                }
            case 832:
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var9 = var11.bind(var12)(var10);
            case 849:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = var12.bind(var0)(var3);
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
    var14 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildIconSource;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = var6.Fonts;
    var6 = var6.GuildFeatures;
    var _closure1_slot12 = var6;
    var10 = 8;
    var6 = var5[var10];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ContactPermissions;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot14 = var7;
    var6 = var6.jsxs;
    var _closure1_slot15 = var6;
    var6 = 10;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var11 = 11;
    var11 = var5[var11];
    var16 = var12.bind(var0)(var11);
    var15 = var3.DISPLAY_EXTRABOLD;
    var11 = 12;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.colors;
    var13 = var3.MOBILE_TEXT_HEADING_PRIMARY;
    var3 = 24;
    var18 = var16.bind(var0)(var15, var13, var3);
    var19 = var9;
    var3 = copyDataProperties(var19, var18);
    var3 = 32;
    var13 = 'marginTop';
    var9[var13] = var3;
    var13 = 16;
    var15 = 'marginHorizontal';
    var9[var15] = var13;
    var16 = 'center';
    var15 = 'textAlign';
    var9[var15] = var16;
    var6.headerText = var9;
    var9 = {
        'lineHeight': 18,
        'marginVertical': 8,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var6.subheaderText = var9;
    var9 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var6.friendInviteContainer = var9;
    var9 = {
        'fontSize': 12,
        'lineHeight': 16,
        'color': null,
        'marginTop': 4
    };
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_SUBTLE;
    var9.color = var15;
    var6.friendInviteSubtext = var9;
    var9 = {};
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.RED_400;
    var9.color = var15;
    var6.friendInviteRevoke = var9;
    var9 = {};
    var9.marginTop = var11;
    var14 = var14.hairlineWidth;
    var9.height = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.backgroundColor = var14;
    var6.divider = var9;
    var9 = {};
    var9.marginTop = var13;
    var6.input = var9;
    var9 = {
        'marginTop': 16,
        'paddingHorizontal': 16
    };
    var6.otherOptionsContainer = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var11;
    var9.marginTop = var10;
    var6.rowContainer = var9;
    var9 = {};
    var10 = 20;
    var9.borderRadius = var10;
    var6.hubIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/add_friend/AddFriendModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AddFriendModal, environment: var1
        var8 = arg0;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 30;
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
            var1 = function(arg0) { // Original name: getScreens, environment: var0
                var0 = {};
                var1 = {};
                var2 = true;
                var1.ignoreKeyboard = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
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
                var2 = function(arg0) { // Original name: render, environment: var2
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot17;
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
        var2 = _closure1_slot14;
        var1 = _closure1_slot0;
        var0 = 31;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1416, 1662, 1410, 1613, 660, 10206, 33, 1297, 4638, 671, 10214, 4056, 795, 1472, 4518, 3195, 1234, 8230, 5279, 12519, 4661, 1220, 5335, 3895, 12520, 12521, 10202, 1568, 5744, 2]);