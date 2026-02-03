// modules/welcome_screen/native/GuildWelcomeActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot4 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var12 = 4;
    var1 = var6[var12];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var4 = var6[var1];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.NO_WELCOME_SCREEN;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.WELCOME_SCREEN_TYPE;
    var _closure1_slot12 = var1;
    var13 = 8;
    var1 = var6[var13];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot13 = var4;
    var14 = var1.Fonts;
    var1 = var1.Routes;
    var _closure1_slot14 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.EMOJI_URL_BASE_SIZE;
    var _closure1_slot15 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Permissions;
    var _closure1_slot16 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot17 = var4;
    var1 = var1.jsxs;
    var _closure1_slot18 = var1;
    var1 = 12;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 16,
        'width': '100%',
        'paddingVertical': 32
    };
    var18 = 'center';
    var4 = 32;
    var10 = 13;
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var15;
    var1.container = var9;
    var9 = {
        'borderRadius': null,
        'width': 64,
        'height': 64,
        'marginBottom': 16
    };
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var1.guildIcon = var9;
    var9 = {};
    var15 = 14;
    var16 = var6[var15];
    var20 = var11.bind(var0)(var16);
    var19 = var14.DISPLAY_EXTRABOLD;
    var16 = var6[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_SUBTLE;
    var17 = 24;
    var22 = var20.bind(var0)(var19, var16, var17);
    var23 = var9;
    var16 = copyDataProperties(var23, var22);
    var16 = 'marginBottom';
    var9[var16] = var13;
    var16 = 'textAlign';
    var9[var16] = var18;
    var1.header = var9;
    var9 = {};
    var15 = var6[var15];
    var16 = var11.bind(var0)(var15);
    var15 = var14.DISPLAY_EXTRABOLD;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var22 = var16.bind(var0)(var15, var14, var17);
    var23 = var9;
    var14 = copyDataProperties(var23, var22);
    var1.headerGuildName = var9;
    var9 = {
        'textAlign': 'center',
        'marginBottom': 30
    };
    var1.guildDescription = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var9.marginTop = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var1.welcomeChannel = var9;
    var9 = {};
    var13 = 'flex-start';
    var9.alignSelf = var13;
    var1.channelsTitle = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var1.emoji = var9;
    var9 = {};
    var9.padding = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9.borderRadius = var10;
    var1.placeholderEmojiWrapper = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot19 = var1;
    var1 = function arg0() {
        _fun91096: for (var _fun91096_ip = 0;;) switch (_fun91096_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.welcomeChannel;
                var _closure2_slot0 = var14;
                var7 = var1.trackOptionSelect;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot19;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var1 = var6[var2];
                var10 = var3.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var8, var1);
                var _closure2_slot2 = var9;
                var8 = _closure1_slot1;
                var1 = 16;
                var1 = var6[var1];
                var8 = var8.bind(var4)(var1);
                var1 = true;
                var12 = var8.bind(var4)(var9, var1);
                var1 = var6[var2];
                var11 = var3.bind(var4)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var0
                    _fun91098: for (var _fun91098_ip = 0;;) switch (_fun91098_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun91098_ip = 49;
                                continue _fun91098
                            }
                        case 16:
                            var4 = _closure1_slot9;
                            var3 = var4.can;
                            var2 = _closure1_slot16;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var8, var1);
                var2 = var6[var2];
                var10 = var3.bind(var4)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = var14.emoji_id;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun91099: for (var _fun91099_ip = 0;;) switch (_fun91099_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.emoji_id;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun91099_ip = 50;
                                continue _fun91099
                            }
                        case 22:
                            var3 = _closure1_slot6;
                            var2 = var3.getCustomEmojiById;
                            var1 = _closure2_slot0;
                            var1 = var1.emoji_id;
                            var0 = var2.bind(var3)(var1);
                        case 50:
                            return var0;
                    }
                };
                var17 = var8.bind(var10)(var6, var2, var3);
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var7;
                var0 = function() { // Environment: var0
                    _fun91100: for (var _fun91100_ip = 0;;) switch (_fun91100_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun91100_ip = 113;
                                continue _fun91100
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            var2 = undefined;
                            var0 = var0.bind(var2)();
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 17;
                            var4 = var3[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.transitionTo;
                            var8 = _closure1_slot14;
                            var7 = var8.CHANNEL;
                            var1 = _closure2_slot2;
                            var6 = var1.guild_id;
                            var1 = var1.id;
                            var1 = var7.bind(var8)(var6, var1);
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure1_slot1;
                            var0 = 18;
                            var0 = var3[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var0, var2);
                var7 = null;
                var2 = var7 != var9;
                var0 = null;
                if (!var2) {
                    _fun91096_ip = 845;
                    continue _fun91096
                }
            case 257:
                var0 = null;
                if (!var1) {
                    _fun91096_ip = 845;
                    continue _fun91096
                }
            case 265:
                if (!(var7 == var17)) {
                    _fun91096_ip = 514;
                    continue _fun91096
                }
            case 272:
                var1 = var14.emoji_name;
                if (!(var7 != var1)) {
                    _fun91096_ip = 346;
                    continue _fun91096
                }
            case 282:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 21;
                var2 = var10[var1];
                var3 = var8.bind(var4)(var2);
                var2 = var3.getByName;
                var1 = var10[var1];
                var11 = var8.bind(var4)(var1);
                var10 = var11.convertSurrogateToName;
                var8 = var14.emoji_name;
                var1 = false;
                var1 = var10.bind(var11)(var8, var1);
                var1 = var2.bind(var3)(var1);
                if (!(var7 == var1)) {
                    _fun91096_ip = 447;
                    continue _fun91096
                }
            case 346:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var15.placeholderEmojiWrapper;
                var1.style = var8;
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 23;
                var8 = var16[var11];
                var10 = var13.bind(var4)(var8);
                var8 = {};
                var11 = var16[var11];
                var11 = var13.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.REFRESH_SMALL_16;
                var8.size = var11;
                var11 = 24;
                var11 = var16[var11];
                var11 = var13.bind(var4)(var11);
                var8.source = var11;
                var8 = var3.bind(var4)(var10, var8);
                var1.children = var8;
                var13 = var3.bind(var4)(var2, var1);
                _fun91096_ip = 512;
                continue _fun91096;
            case 447:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 22;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var8 = var15.emoji;
                var1.style = var8;
                var8 = 'text-sm/medium';
                var1.variant = var8;
                var8 = var14.emoji_name;
                var1.children = var8;
                var13 = var3.bind(var4)(var2, var1);
            case 512:
                _fun91096_ip = 627;
                continue _fun91096;
            case 514:
                var3 = _closure1_slot17;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 19;
                var1 = var16[var1];
                var2 = var11.bind(var4)(var1);
                var1 = {};
                var8 = var15.emoji;
                var1.style = var8;
                var8 = {};
                var10 = 20;
                var10 = var16[var10];
                var16 = var11.bind(var4)(var10);
                var11 = var16.getEmojiURL;
                var10 = {};
                var18 = var17.id;
                var10.id = var18;
                var17 = var17.animated;
                var10.animated = var17;
                var17 = _closure1_slot15;
                var10.size = var17;
                var10 = var11.bind(var16)(var10);
                var8.uri = var10;
                var1.source = var8;
                var8 = 'contain';
                var1.resizeMode = var8;
                var13 = var3.bind(var4)(var2, var1);
            case 627:
                var3 = _closure1_slot17;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 25;
                var1 = var10[var8];
                var1 = var11.bind(var4)(var1);
                var2 = var1.FormRow;
                var1 = {};
                var15 = var15.welcomeChannel;
                var1.DEPRECATED_style = var15;
                var1.leading = var13;
                var13 = 22;
                var10 = var10[var13];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-active'
                };
                var14 = var14.description;
                var10.children = var14;
                var10 = var3.bind(var4)(var11, var10);
                var1.label = var10;
                var9 = var7 != var9;
                var7 = null;
                if (!var9) {
                    _fun91096_ip = 784;
                    continue _fun91096
                }
            case 734:
                var11 = _closure1_slot17;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var9.children = var12;
                var7 = var11.bind(var4)(var10, var9);
            case 784:
                var1.subLabel = var7;
                var1.onPress = var6;
                var7 = _closure1_slot17;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var6.bind(var4)(var5);
                var5 = var5.FormRow;
                var6 = var5.Arrow;
                var5 = {};
                var5 = var7.bind(var4)(var6, var5);
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 845:
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/welcome_screen/native/GuildWelcomeActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun91101: for (var _fun91101_ip = 0;;) switch (_fun91101_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var1 = var1.onHide;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot19;
                var4 = undefined;
                var14 = var2.bind(var4)();
                var _closure2_slot2 = var14;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 15;
                var6 = var5[var2];
                var11 = var3.bind(var4)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var9
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var10.bind(var11)(var7, var6);
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStoresObject;
                var2 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var9
                    var0 = {};
                    var2 = _closure1_slot10;
                    var3 = var2.get;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    var0.welcomeScreen = var1;
                    var1 = var2.isFetching;
                    var1 = var1.bind(var2)();
                    var0.fetching = var1;
                    var1 = var2.hasError;
                    var1 = var1.bind(var2)();
                    var0.hasError = var1;
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2);
                var10 = var2.welcomeScreen;
                var _closure2_slot3 = var10;
                var7 = var2.fetching;
                var _closure2_slot4 = var7;
                var2 = var2.hasError;
                var _closure2_slot5 = var2;
                var3 = _closure1_slot3;
                var11 = var3.useEffect;
                var6 = new Array(2);
                var6[0] = var0;
                var6[1] = var10;
                var5 = function() { // Environment: var9
                    _fun91104: for (var _fun91104_ip = 0;;) switch (_fun91104_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun91104_ip = 58;
                                continue _fun91104
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 27;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchWelcomeScreen;
                                var0 = _closure2_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var11.bind(var3)(var5, var6);
                var6 = var3.useEffect;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var2;
                var2 = function() { // Environment: var9
                    _fun91106: for (var _fun91106_ip = 0;;) switch (_fun91106_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = false;
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun91106_ip = 26;
                                continue _fun91106
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var1 = true;
                            var0 = var1 === var2;
                        case 26:
                            if (!var0) {
                                _fun91106_ip = 64;
                                continue _fun91106
                            }
                        case 29:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var3)(var2, var5);
                var6 = var3.useEffect;
                var5 = new Array(2);
                var5[0] = var0;
                var5[1] = var10;
                var2 = function() { // Environment: var9
                    _fun91107: for (var _fun91107_ip = 0;;) switch (_fun91107_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun91107_ip = 58;
                                continue _fun91107
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 27;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.welcomeScreenViewed;
                                var0 = _closure2_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var3)(var2, var5);
                var6 = var3.useEffect;
                var5 = new Array(1);
                var5[0] = var10;
                var2 = function() { // Environment: var9
                    _fun91109: for (var _fun91109_ip = 0;;) switch (_fun91109_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = _closure1_slot11;
                            if (!(var2 === var1)) {
                                _fun91109_ip = 50;
                                continue _fun91109
                            }
                        case 18:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var3)(var2, var5);
                var6 = var3.useEffect;
                var5 = new Array(1);
                var5[0] = var0;
                var2 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot12;
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.guild_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var6.bind(var3)(var2, var5);
                var5 = var3.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    var0 = function() { // Environment: var0
                        _fun91112: for (var _fun91112_ip = 0;;) switch (_fun91112_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun91112_ip = 23;
                                    continue _fun91112
                                }
                            case 13:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var5.bind(var3)(var1, var2);
                var2 = var3.useCallback;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var10;
                var0 = function(arg0) { // Environment: var9
                    _fun91113: for (var _fun91113_ip = 0;;) switch (_fun91113_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun91113_ip = 164;
                                continue _fun91113
                            }
                        case 18:
                            var7 = new Array(0);
                            var _closure3_slot0 = var7;
                            var6 = new Array(0);
                            var _closure3_slot1 = var6;
                            var0 = false;
                            var _closure3_slot2 = var0;
                            var5 = _closure2_slot3;
                            var2 = var5.welcome_channels;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var4
                                _fun91114: for (var _fun91114_ip = 0;;) switch (_fun91114_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure3_slot0;
                                        var3 = var4.push;
                                        var2 = var0.description;
                                        var2 = var3.bind(var4)(var2);
                                        var4 = _closure3_slot1;
                                        var3 = var4.push;
                                        var2 = var0.channel_id;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = var0.emoji_id;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun91114_ip = 62;
                                            continue _fun91114
                                        }
                                    case 56:
                                        var0 = true;
                                        _closure3_slot2 = var0;
                                    case 62:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot13;
                            var1 = var0.GUILD_WELCOME_SCREEN_OPTION_SELECTED;
                            var0 = {};
                            var9 = arg0;
                            var0.index = var9;
                            var8 = _closure2_slot0;
                            var0.guild_id = var8;
                            var0.options = var7;
                            var0.options_channel_ids = var6;
                            var5 = var5.description;
                            var0.guild_description = var5;
                            var4 = _closure3_slot2;
                            var0.has_custom_emojis = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 164:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var _closure2_slot6 = var0;
                var2 = null;
                var1 = var2 == var22;
                var0 = null;
                if (var1) {
                    _fun91101_ip = 879;
                    continue _fun91101
                }
            case 381:
                var1 = var2 == var10;
                var0 = null;
                if (var1) {
                    _fun91101_ip = 879;
                    continue _fun91101
                }
            case 393:
                var3 = _closure1_slot17;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 29;
                var1 = var17[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var5 = true;
                var1.startExpanded = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = var14.container;
                var5.contentContainerStyle = var11;
                var13 = _closure1_slot1;
                var12 = 30;
                var8 = var17[var12];
                var11 = var13.bind(var4)(var8);
                var8 = {};
                var15 = var14.guildIcon;
                var8.style = var15;
                var8.guild = var22;
                var12 = var17[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.Sizes;
                var12 = var12.MEDIUM;
                var8.size = var12;
                var12 = 2;
                var8.textScale = var12;
                var11 = var3.bind(var4)(var11, var8);
                var8 = new Array(5);
                var8[0] = var11;
                var11 = 22;
                var12 = var17[var11];
                var12 = var16.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'text-default'
                };
                var13 = var14.header;
                var12.style = var13;
                var13 = 31;
                var18 = var17[var13];
                var18 = var16.bind(var4)(var18);
                var21 = var18.intl;
                var20 = var21.format;
                var18 = var17[var13];
                var18 = var16.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18["0aydCN"];
                var18 = {};
                var22 = var22.name;
                var18.guildName = var22;
                var22 = function arg0, arg1() {
                    var4 = _closure1_slot17;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'style': null,
                        'variant': 'heading-xl/extrabold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = _closure2_slot2;
                    var0 = var0.headerGuildName;
                    var1.style = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var18.guildNameHook = var22;
                var18 = var20.bind(var21)(var19, var18);
                var12.children = var18;
                var12 = var3.bind(var4)(var15, var12);
                var8[1] = var12;
                var12 = var17[var11];
                var12 = var16.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var18 = var14.guildDescription;
                var12.style = var18;
                var18 = var10.description;
                var12.children = var18;
                var12 = var3.bind(var4)(var15, var12);
                var8[2] = var12;
                var11 = var17[var11];
                var11 = var16.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var14 = var14.channelsTitle;
                var11.style = var14;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["haj5+i"];
                var14 = var14.bind(var15)(var13);
                var13 = var14.toUpperCase;
                var13 = var13.bind(var14)();
                var11.children = var13;
                var11 = var3.bind(var4)(var12, var11);
                var8[3] = var11;
                var11 = var10.welcome_channels;
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot20;
                    var1 = {};
                    var5 = arg0;
                    var1.welcomeChannel = var5;
                    var0 = function() {
                        var2 = _closure2_slot6;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.trackOptionSelect = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 879:
                return var0;
        }
    };
    var2.default = var3;
    var2.WelcomeChannelRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4732, 1372, 1410, 3082, 11828, 11832, 660, 1616, 483, 33, 1297, 671, 4677, 566, 4787, 1220, 3269, 4699, 1417, 3095, 3932, 4077, 10051, 5373, 806, 11830, 795, 5203, 10257, 1234, 2]);