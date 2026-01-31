// modules/create_guild/native/components/GuildInvite.tsx
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
        var0 = arg0;
        var4 = var0.openInviteSheet;
        var0 = _closure1_slot21;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot19;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 15;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var9 = _closure1_slot19;
        var6 = _closure1_slot6;
        var5 = {};
        var11 = var11.friendIcon;
        var5.style = var11;
        var12 = _closure1_slot19;
        var10 = 16;
        var10 = var8[var10];
        var10 = var7.bind(var3)(var10);
        var11 = var10.GroupIcon;
        var10 = {};
        var13 = 'sm';
        var10.size = var13;
        var10 = var12.bind(var3)(var11, var10);
        var5.children = var10;
        var5 = var9.bind(var3)(var6, var5);
        var0.icon = var5;
        var0.onPress = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.zrLIIz;
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var4 = true;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun80157: for (var _fun80157_ip = 0;;) switch (_fun80157_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.invite;
                var _closure2_slot0 = var1;
                var11 = var0.suggestions;
                var _closure2_slot1 = var11;
                var13 = var0.openInviteSheet;
                var0 = _closure1_slot21;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var8
                    var3 = _closure2_slot1;
                    var2 = var3.slice;
                    var1 = 0;
                    var0 = 6;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var14 = var2.bind(var3)(var0, var1);
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun80157_ip = 230;
                    continue _fun80157
                }
            case 90:
                var3 = _closure1_slot19;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var12.suggestionsContainer;
                var1.style = var5;
                var7 = _closure1_slot19;
                var6 = _closure1_slot7;
                var5 = {};
                var5.data = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var5 = var0.index;
                    var3 = _closure1_slot19;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.row = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.code;
                    var0.code = var4;
                    var4 = 0;
                    var4 = var4 === var5;
                    var0.start = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderItem = var14;
                var12 = var12.suggestionRowsContainer;
                var5.contentContainerStyle = var12;
                var12 = var11.length;
                var11 = 6;
                var11 = var12 > var11;
                var9 = null;
                if (!var11) {
                    _fun80157_ip = 185;
                    continue _fun80157
                }
            case 164:
                var12 = _closure1_slot19;
                var11 = _closure1_slot22;
                var10 = {};
                var10.openInviteSheet = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 185:
                var5.ListFooterComponent = var9;
                var9 = function() {
                    var3 = _closure1_slot19;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormDivider;
                    var0 = {};
                    var4 = true;
                    var0.iconPush = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.ItemSeparatorComponent = var9;
                var8 = function arg0() {
                    var0 = arg0;
                    var0 = var0.item;
                    var0 = var0.id;
                    return var0;
                };
                var5.keyExtractor = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 230:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.FlatList;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useInstantInviteSendStates;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var13 = 8;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CreateGuildModalStates;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot14 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot15 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot16 = var6;
    var6 = var3.Permissions;
    var _closure1_slot17 = var6;
    var3 = var3.SearchTypes;
    var _closure1_slot18 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot19 = var6;
    var3 = var3.jsxs;
    var _closure1_slot20 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 12;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.NAV_BAR_HEIGHT;
    var8.marginTop = var12;
    var8.flex = var10;
    var10 = 13;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var12 = 'center';
    var8.alignItems = var12;
    var3.container = var8;
    var8 = {};
    var8.marginBottom = var13;
    var3.header = var8;
    var12 = 16;
    var8 = {
        'lineHeight': 18,
        'marginBottom': 8,
        'paddingHorizontal': 16,
        'textAlign': 'center'
    };
    var3.description = var8;
    var8 = {};
    var8.marginVertical = var12;
    var3.headerImage = var8;
    var8 = {
        'paddingHorizontal': 16,
        'width': '100%'
    };
    var3.linkContainer = var8;
    var8 = {
        'marginTop': 16,
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 12,
        'justifyContent': 'space-between'
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var8.borderRadius = var14;
    var3.linkButton = var8;
    var8 = {};
    var8.marginLeft = var12;
    var3.searchButton = var8;
    var8 = {};
    var8.marginLeft = var13;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var14;
    var3.linkButtonIcon = var8;
    var8 = {};
    var8.marginTop = var13;
    var3.inviteDetail = var8;
    var8 = {};
    var8.marginVertical = var12;
    var3.shareButton = var8;
    var8 = {
        'width': '100%',
        'flex': 1,
        'alignContent': 'flex-start'
    };
    var3.suggestionsContainer = var8;
    var8 = {
        'backgroundColor': null,
        'height': 32,
        'width': 32,
        'padding': 8,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xxl;
    var8.borderRadius = var10;
    var3.friendIcon = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.suggestionRowsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/GuildInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80162: for (var _fun80162_ip = 0;;) switch (_fun80162_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.closeOnEditInviteLink;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun80162_ip = 19;
                    continue _fun80162
                }
            case 17:
                var1 = true;
            case 19:
                var _closure2_slot0 = var1;
                var10 = var0.onClose;
                var _closure2_slot1 = var10;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var0 = _closure1_slot21;
                var15 = var0.bind(var4)();
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 20;
                var0 = var3[var0];
                var1 = var8.bind(var4)(var0);
                var0 = var1.useNavigation;
                var11 = var0.bind(var1)();
                _closure2_slot2 = var11;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var1 = var1.bind(var2)(var0);
                var6 = _closure1_slot3;
                var0 = 2;
                var1 = var6.bind(var4)(var1, var0);
                var2 = 0;
                var0 = var1[var2];
                _closure2_slot3 = var0;
                var5 = 1;
                var1 = var1[var5];
                _closure2_slot4 = var1;
                var7 = 21;
                var1 = var3[var7];
                var16 = var8.bind(var4)(var1);
                var13 = var16.useStateFromStores;
                var1 = _closure1_slot10;
                var12 = new Array(1);
                var12[0] = var1;
                var9 = function() { // Environment: var23
                    var1 = _closure1_slot10;
                    var0 = var1.getInvite;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var13.bind(var16)(var12, var9);
                _closure2_slot5 = var9;
                var7 = var3[var7];
                var12 = var8.bind(var4)(var7);
                var8 = var12.useStateFromStores;
                var7 = new Array(3);
                var7[0] = var1;
                var1 = _closure1_slot9;
                var7[1] = var1;
                var1 = _closure1_slot11;
                var7[2] = var1;
                var1 = function() { // Environment: var23
                    _fun80164: for (var _fun80164_ip = 0;;) switch (_fun80164_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getInviteSettings;
                            var3 = var1.bind(var2)();
                            var1 = null;
                            var4 = var1 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun80164_ip = 33;
                                continue _fun80164
                            }
                        case 28:
                            var2 = var3.channelId;
                        case 33:
                            if (!(var1 == var2)) {
                                _fun80164_ip = 91;
                                continue _fun80164
                            }
                        case 37:
                            var4 = _closure1_slot10;
                            var3 = var4.getGuildId;
                            var7 = var3.bind(var4)();
                            var3 = var1 != var7;
                            var1 = null;
                            if (!var3) {
                                _fun80164_ip = 89;
                                continue _fun80164
                            }
                        case 60:
                            var6 = _closure1_slot11;
                            var5 = var6.getDefaultChannel;
                            var3 = _closure1_slot17;
                            var4 = var3.CREATE_INSTANT_INVITE;
                            var3 = true;
                            var1 = var5.bind(var6)(var7, var3, var4);
                        case 89:
                            return var1;
                        case 91:
                            var1 = _closure1_slot9;
                            var0 = var1.getChannel;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var26 = var8.bind(var12)(var7, var1);
                _closure2_slot6 = var26;
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var1 = function() { // Environment: var23
                    var1 = _closure1_slot12;
                    var0 = var1.getInviteSuggestionRows;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var7.bind(var8)(var1);
                var1 = var6.bind(var4)(var1, var5);
                var7 = var1[var2];
                var1 = _closure1_slot8;
                var5 = var1.bind(var4)();
                _closure2_slot7 = var5;
                var1 = _closure1_slot1;
                var6 = 22;
                var6 = var3[var6];
                var8 = var1.bind(var4)(var6);
                var6 = function() { // Environment: var23
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.loadInviteSuggestions;
                    var1 = {};
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var5;
                    var4 = new var7[var4](var6);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var1.omitUserIds = var4;
                    var4 = _closure2_slot6;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var8.bind(var4)(var6);
                var12 = _closure1_slot4;
                var8 = var12.useEffect;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var9;
                var5 = function() { // Environment: var23
                    _fun80167: for (var _fun80167_ip = 0;;) switch (_fun80167_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun80167_ip = 47;
                                continue _fun80167
                            }
                        case 13:
                            var3 = _closure2_slot7;
                            var1 = _closure2_slot5;
                            var1 = var1.code;
                            var1 = var3[var1];
                            if (!(var2 != var1)) {
                                _fun80167_ip = 47;
                                continue _fun80167
                            }
                        case 34:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var12)(var5, var6);
                var8 = _closure1_slot4;
                var6 = var8.useLayoutEffect;
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var0;
                var0 = function() { // Environment: var23
                    _fun80168: for (var _fun80168_ip = 0;;) switch (_fun80168_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 24;
                            var7 = var7[var0];
                            var0 = undefined;
                            var8 = var8.bind(var0)(var7);
                            var7 = var8.getHeaderTextButton;
                            var6 = _closure2_slot3;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 17;
                            var9 = var12[var5];
                            var9 = var11.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var5 = var12[var5];
                            var5 = var11.bind(var0)(var5);
                            var5 = var5.t;
                            if (var6) {
                                _fun80168_ip = 112;
                                continue _fun80168
                            }
                        case 99:
                            var6 = var5["5Wxrcd"];
                            var6 = var9.bind(var10)(var6);
                            _fun80168_ip = 123;
                            continue _fun80168;
                        case 112:
                            var5 = var5.i4jeWR;
                            var6 = var9.bind(var10)(var5);
                        case 123:
                            var5 = function() { // Environment: var4
                                var8 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 25;
                                var1 = var3[var0];
                                var0 = undefined;
                                var1 = var8.bind(var0)(var1);
                                var4 = var1.AccessibilityAnnouncer;
                                var2 = var4.announce;
                                var1 = 17;
                                var5 = var3[var1];
                                var5 = var8.bind(var0)(var5);
                                var7 = var5.intl;
                                var5 = var7.string;
                                var1 = var3[var1];
                                var1 = var8.bind(var0)(var1);
                                var1 = var1.t;
                                var1 = var1["FY/yLY"];
                                var1 = var5.bind(var7)(var1);
                                var1 = var2.bind(var4)(var1);
                                var2 = _closure2_slot1;
                                var2 = var2.bind(var0)();
                                var1 = _closure2_slot3;
                                var5 = !var1;
                                var2 = _closure1_slot1;
                                var1 = 14;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot14;
                                var2 = var1.USER_FLOW_TRANSITION;
                                var1 = {};
                                var7 = _closure1_slot15;
                                var7 = var7.GUILD_CREATE_MODAL;
                                var1.flow_type = var7;
                                var6 = _closure1_slot13;
                                var6 = var6.GUILD_INVITE;
                                var1.from_step = var6;
                                var6 = 'modal_closed';
                                var1.to_step = var6;
                                var1.skip = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5 = var7.bind(var8)(var6, var5);
                            var1.headerRight = var5;
                            var4 = function() {
                                var0 = null;
                                return var0;
                            };
                            var1.headerLeft = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var6.bind(var8)(var0, var5);
                var0 = 26;
                var0 = var3[var0];
                var3 = var1.bind(var4)(var0);
                var0 = null;
                var5 = var0 == var9;
                var1 = undefined;
                if (var5) {
                    _fun80162_ip = 429;
                    continue _fun80162
                }
            case 424:
                var1 = var9.code;
            case 429:
                var19 = var3.bind(var4)(var1);
                _closure2_slot8 = var19;
                var8 = var0 != var7;
                if (!var8) {
                    _fun80162_ip = 454;
                    continue _fun80162
                }
            case 445:
                var1 = var7.length;
                var8 = var1 > var2;
            case 454:
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var26;
                var1 = function() { // Environment: var23
                    _fun80171: for (var _fun80171_ip = 0;;) switch (_fun80171_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80171_ip = 53;
                                continue _fun80171
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openGuildInviteScreen;
                            var0 = _closure2_slot6;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var26;
                var6 = var0 == var9;
                var1 = undefined;
                if (var6) {
                    _fun80162_ip = 515;
                    continue _fun80162
                }
            case 510:
                var1 = var9.code;
            case 515:
                var2[1] = var1;
                var2[2] = var19;
                var1 = function() { // Environment: var23
                    _fun80172: for (var _fun80172_ip = 0;;) switch (_fun80172_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun80172_ip = 120;
                                continue _fun80172
                            }
                        case 13:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 28;
                            var3 = var2[var8];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var3);
                            var5 = var6.handleOpenShareSheet;
                            var3 = _closure2_slot5;
                            var3 = var4 == var3;
                            var4 = undefined;
                            if (var3) {
                                _fun80172_ip = 66;
                                continue _fun80172
                            }
                        case 57:
                            var3 = _closure2_slot5;
                            var4 = var3.code;
                        case 66:
                            var3 = _closure2_slot6;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var8 = var7.bind(var2)(var1);
                            var7 = var8.getShareMessage;
                            var1 = _closure2_slot8;
                            var1 = var7.bind(var8)(var1);
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var1 = _closure2_slot4;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 120:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var26;
                var1 = function() { // Environment: var23
                    _fun80173: for (var _fun80173_ip = 0;;) switch (_fun80173_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun80173_ip = 24;
                                continue _fun80173
                            }
                        case 16:
                            var1 = _closure2_slot6;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun80173_ip = 155;
                                continue _fun80173
                            }
                        case 30:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 29;
                            var0 = var3[var0];
                            var2 = undefined;
                            var7 = var1.bind(var2)(var0);
                            var6 = var7.trackWithMetadata;
                            var0 = _closure1_slot14;
                            var1 = var0.SEARCH_STARTED;
                            var0 = {};
                            var8 = _closure1_slot18;
                            var8 = var8.INSTANT_INVITE;
                            var0.search_type = var8;
                            var0 = var6.bind(var7)(var1, var0);
                            var1 = _closure1_slot0;
                            var0 = 28;
                            var0 = var3[var0];
                            var3 = var1.bind(var2)(var0);
                            var2 = var3.showInstantInviteActionSheet;
                            var1 = _closure2_slot6;
                            var0 = {};
                            var5 = _closure1_slot16;
                            var5 = var5.GUILD_CREATE;
                            var0.source = var5;
                            var4 = _closure2_slot5;
                            var4 = var4.code;
                            var0.code = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                if (!(var0 != var9)) {
                    _fun80162_ip = 1447;
                    continue _fun80162
                }
            case 577:
                if (!(var0 != var26)) {
                    _fun80162_ip = 1447;
                    continue _fun80162
                }
            case 584:
                var6 = var8;
                if (!var6) {
                    _fun80162_ip = 621;
                    continue _fun80162
                }
            case 590:
                var3 = _closure1_slot19;
                var2 = _closure1_slot23;
                var1 = {};
                var1.invite = var9;
                var1.suggestions = var7;
                var1.openInviteSheet = var5;
                var6 = var3.bind(var4)(var2, var1);
            case 621:
                var3 = _closure1_slot20;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 30;
                var1 = var11[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.SafeAreaPaddingView;
                var1 = {};
                var25 = true;
                var1.top = var25;
                var5 = var15.container;
                var1.style = var5;
                var9 = _closure1_slot19;
                var12 = 31;
                var5 = var11[var12];
                var5 = var18.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var15.header;
                var5.style = var10;
                var22 = 17;
                var10 = var11[var22];
                var10 = var18.bind(var4)(var10);
                var16 = var10.intl;
                var13 = var16.string;
                var10 = var11[var22];
                var10 = var18.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.OZ1qhO;
                var10 = var13.bind(var16)(var10);
                var5.children = var10;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(5);
                var5[0] = var7;
                var10 = _closure1_slot19;
                var7 = var11[var12];
                var7 = var18.bind(var4)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var15.description;
                var7.style = var13;
                var13 = var11[var22];
                var13 = var18.bind(var4)(var13);
                var16 = var13.intl;
                var13 = var16.string;
                var11 = var11[var22];
                var11 = var18.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.eU2ZaK;
                var11 = var13.bind(var16)(var11);
                var7.children = var11;
                var7 = var10.bind(var4)(var9, var7);
                var5[1] = var7;
                var7 = !var8;
                if (var8) {
                    _fun80162_ip = 948;
                    continue _fun80162
                }
            case 890:
                var10 = _closure1_slot19;
                var9 = _closure1_slot5;
                var8 = {};
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 32;
                var11 = var16[var11];
                var11 = var13.bind(var4)(var11);
                var8.source = var11;
                var11 = 'contain';
                var8.resizeMode = var11;
                var11 = var15.headerImage;
                var8.style = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 948:
                var5[2] = var7;
                var9 = _closure1_slot20;
                var8 = _closure1_slot6;
                var7 = {};
                var10 = var15.linkContainer;
                var7.style = var10;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 33;
                var10 = var18[var10];
                var10 = var21.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var13 = var15.linkButton;
                var10.style = var13;
                var13 = 'button';
                var10.accessibilityRole = var13;
                var13 = var18[var22];
                var13 = var21.bind(var4)(var13);
                var20 = var13.intl;
                var16 = var20.string;
                var13 = var18[var22];
                var13 = var21.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["3XVNyt"];
                var13 = var16.bind(var20)(var13);
                var10.accessibilityLabel = var13;
                var13 = function() {
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.handleCopy;
                    var3 = _closure2_slot5;
                    var4 = var3.code;
                    var3 = _closure2_slot6;
                    var2 = _closure1_slot16;
                    var2 = var2.GUILD_CREATE;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var2 = _closure2_slot4;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onPress = var13;
                var16 = _closure1_slot19;
                var12 = var18[var12];
                var12 = var21.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var12.children = var19;
                var13 = var16.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var20 = _closure1_slot19;
                var19 = _closure1_slot1;
                var13 = 34;
                var13 = var18[var13];
                var16 = var19.bind(var4)(var13);
                var13 = {};
                var27 = 35;
                var27 = var18[var27];
                var27 = var19.bind(var4)(var27);
                var13.source = var27;
                var27 = var15.linkButtonIcon;
                var13.style = var27;
                var13 = var20.bind(var4)(var16, var13);
                var12[1] = var13;
                var10.children = var12;
                var11 = var9.bind(var4)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var13 = _closure1_slot19;
                var12 = _closure1_slot6;
                var11 = {};
                var16 = var15.inviteDetail;
                var11.style = var16;
                var20 = _closure1_slot19;
                var16 = 36;
                var16 = var18[var16];
                var19 = var19.bind(var4)(var16);
                var16 = {};
                var16.channel = var26;
                var16.canEditInvite = var25;
                var16.callbackActionSheet = var24;
                var23 = function() {
                    _fun80175: for (var _fun80175_ip = 0;;) switch (_fun80175_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun80175_ip = 20;
                                continue _fun80175
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16.onEdit = var23;
                var23 = _closure1_slot16;
                var23 = var23.GUILD_CREATE;
                var16.source = var23;
                var16 = var20.bind(var4)(var19, var16);
                var11.children = var16;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var13 = _closure1_slot19;
                var12 = _closure1_slot6;
                var11 = {};
                var15 = var15.shareButton;
                var11.style = var15;
                var16 = _closure1_slot19;
                var14 = 37;
                var14 = var18[var14];
                var14 = var21.bind(var4)(var14);
                var15 = var14.Button;
                var14 = {};
                var19 = var18[var22];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.Ej3B3Y;
                var18 = var19.bind(var20)(var18);
                var14.text = var18;
                var14.onPress = var17;
                var14 = var16.bind(var4)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5[3] = var7;
                var5[4] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1447:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8356, 1372, 8290, 1662, 8307, 7505, 660, 33, 1297, 4666, 671, 795, 4861, 4816, 1234, 8355, 5340, 1469, 566, 4062, 8308, 4668, 3165, 6511, 10148, 8289, 4266, 4697, 3900, 10170, 4865, 4045, 8323, 8352, 4043, 2]);