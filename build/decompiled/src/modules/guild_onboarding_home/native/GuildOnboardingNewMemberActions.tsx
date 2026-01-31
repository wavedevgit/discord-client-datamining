// modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx
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
        _fun104816: for (var _fun104816_ip = 0;;) switch (_fun104816_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channelId;
                var _closure2_slot0 = var13;
                var17 = var1.title;
                var0 = var1.emoji;
                var12 = var1.icon;
                var9 = var1.completed;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var1 = _closure1_slot17;
                var10 = var1.bind(var4)();
                var2 = null;
                if (!(var2 == var0)) {
                    _fun104816_ip = 65;
                    continue _fun104816
                }
            case 63:
                var0 = {};
            case 65:
                var8 = var0.id;
                _closure2_slot1 = var8;
                var7 = var0.name;
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var15 = 15;
                var0 = var5[var15];
                var14 = var16.bind(var4)(var0);
                var6 = var14.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var14)(var1, var0);
                _closure2_slot2 = var0;
                var6 = _closure1_slot1;
                var1 = 16;
                var1 = var5[var1];
                var1 = var6.bind(var4)(var1);
                var14 = true;
                var21 = var1.bind(var4)(var0, var14);
                var1 = var5[var15];
                var20 = var16.bind(var4)(var1);
                var19 = var20.useStateFromStores;
                var1 = _closure1_slot9;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var3
                    var3 = _closure1_slot9;
                    var2 = var3.can;
                    var0 = _closure1_slot12;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var19.bind(var20)(var18, var1);
                var15 = var5[var15];
                var19 = var16.bind(var4)(var15);
                var18 = var19.useStateFromStores;
                var15 = _closure1_slot5;
                var16 = new Array(1);
                var16[0] = var15;
                var15 = new Array(1);
                var15[0] = var8;
                var8 = function() { // Environment: var3
                    _fun104819: for (var _fun104819_ip = 0;;) switch (_fun104819_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun104819_ip = 38;
                                continue _fun104819
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.getCustomEmojiById;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var16 = var18.bind(var19)(var16, var8, var15);
                var15 = 17;
                var5 = var5[var15];
                var8 = var6.bind(var4)(var5);
                var6 = var8.getNewMemberActionIconURL;
                var5 = {};
                var5.channelId = var13;
                var5.icon = var12;
                var8 = var6.bind(var8)(var5);
                var12 = _closure1_slot3;
                var6 = var12.useCallback;
                var5 = new Array(1);
                var5[0] = var0;
                var3 = function() { // Environment: var3
                    _fun104820: for (var _fun104820_ip = 0;;) switch (_fun104820_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun104820_ip = 68;
                                continue _fun104820
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.selectNewMemberActionChannel;
                            var1 = _closure2_slot2;
                            var1 = var1.guild_id;
                            var0 = _closure2_slot2;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var6.bind(var12)(var3, var5);
                var3 = var2 != var0;
                var0 = null;
                if (!var3) {
                    _fun104816_ip = 1088;
                    continue _fun104816
                }
            case 319:
                var0 = null;
                if (!var1) {
                    _fun104816_ip = 1088;
                    continue _fun104816
                }
            case 327:
                if (!(var2 == var8)) {
                    _fun104816_ip = 683;
                    continue _fun104816
                }
            case 334:
                if (!(var2 == var16)) {
                    _fun104816_ip = 571;
                    continue _fun104816
                }
            case 341:
                if (!(var2 != var7)) {
                    _fun104816_ip = 403;
                    continue _fun104816
                }
            case 345:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 20;
                var3 = var13[var1];
                var6 = var12.bind(var4)(var3);
                var3 = var6.getByName;
                var1 = var13[var1];
                var13 = var12.bind(var4)(var1);
                var12 = var13.convertSurrogateToName;
                var1 = false;
                var1 = var12.bind(var13)(var7, var1);
                var1 = var3.bind(var6)(var1);
                if (!(var2 == var1)) {
                    _fun104816_ip = 508;
                    continue _fun104816
                }
            case 403:
                var3 = _closure1_slot15;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var10.emojiPlaceholder;
                var1.style = var6;
                var13 = _closure1_slot15;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 22;
                var6 = var20[var18];
                var12 = var19.bind(var4)(var6);
                var6 = {};
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.Sizes;
                var18 = var18.REFRESH_SMALL_16;
                var6.size = var18;
                var18 = 23;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var6.source = var18;
                var6 = var13.bind(var4)(var12, var6);
                var1.children = var6;
                var6 = var3.bind(var4)(var2, var1);
                _fun104816_ip = 569;
                continue _fun104816;
            case 508:
                var3 = _closure1_slot15;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 21;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var12 = var10.textEmoji;
                var1.style = var12;
                var12 = 'heading-xxl/normal';
                var1.variant = var12;
                var1.children = var7;
                var6 = var3.bind(var4)(var2, var1);
            case 569:
                _fun104816_ip = 681;
                continue _fun104816;
            case 571:
                var3 = _closure1_slot15;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 19;
                var1 = var12[var1];
                var2 = var13.bind(var4)(var1);
                var1 = {};
                var7 = var10.emoji;
                var1.style = var7;
                var7 = {};
                var12 = var12[var15];
                var15 = var13.bind(var4)(var12);
                var13 = var15.getEmojiURL;
                var12 = {};
                var18 = var16.id;
                var12.id = var18;
                var16 = var16.animated;
                var12.animated = var16;
                var16 = _closure1_slot13;
                var12.size = var16;
                var12 = var13.bind(var15)(var12);
                var7.uri = var12;
                var1.source = var7;
                var7 = 'contain';
                var1.resizeMode = var7;
                var6 = var3.bind(var4)(var2, var1);
            case 681:
                _fun104816_ip = 742;
                continue _fun104816;
            case 683:
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 19;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = var10.icon;
                var1.style = var7;
                var7 = {};
                var7.uri = var8;
                var1.source = var7;
                var7 = 'contain';
                var1.resizeMode = var7;
                var6 = var3.bind(var4)(var2, var1);
            case 742:
                var3 = _closure1_slot16;
                var18 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 24;
                var1 = var13[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1.onPress = var5;
                var5 = var10.actionContainer;
                var1.style = var5;
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot16;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.channelNameContainer;
                var6.style = var10;
                var16 = _closure1_slot15;
                var12 = 21;
                var10 = var13[var12];
                var10 = var18.bind(var4)(var10);
                var15 = var10.Text;
                var10 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var10.children = var17;
                var15 = var16.bind(var4)(var15, var10);
                var10 = new Array(2);
                var10[0] = var15;
                var16 = _closure1_slot15;
                var12 = var13[var12];
                var12 = var18.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var17 = 25;
                var19 = var13[var17];
                var19 = var18.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var17 = var13[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.t;
                var18 = var17.MkzlDL;
                var17 = {};
                var17.channelName = var21;
                var17 = var19.bind(var20)(var18, var17);
                var12.children = var17;
                var12 = var16.bind(var4)(var15, var12);
                var10[1] = var12;
                var6.children = var10;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot15;
                var10 = _closure1_slot1;
                var12 = 22;
                var6 = var13[var12];
                var7 = var10.bind(var4)(var6);
                var6 = {};
                var6.disableColor = var14;
                var12 = var13[var12];
                var12 = var10.bind(var4)(var12);
                var12 = var12.Sizes;
                var12 = var12.MEDIUM;
                var6.size = var12;
                var12 = _closure1_slot2;
                if (var9) {
                    _fun104816_ip = 1052;
                    continue _fun104816
                }
            case 1043:
                var9 = 27;
                var9 = var12[var9];
                _fun104816_ip = 1059;
                continue _fun104816;
            case 1052:
                var11 = 26;
                var9 = var12[var11];
            case 1059:
                var9 = var10.bind(var4)(var9);
                var6.source = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1088:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot14 = var3;
    var10 = 12;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingHorizontal = var10;
    var3.actionsContainer = var8;
    var8 = {
        'display': 'flex',
        'marginBottom': 16
    };
    var3.actionsHeader = var8;
    var8 = {
        'backgroundColor': null,
        'marginBottom': 8,
        'padding': 12,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = 14;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.actionContainer = var8;
    var8 = {
        'flex': 1,
        'marginHorizontal': 8
    };
    var3.channelNameContainer = var8;
    var8 = {
        'width': 40,
        'height': 40
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.icon = var8;
    var8 = {
        'width': 40,
        'height': 40
    };
    var3.emoji = var8;
    var8 = {
        'width': 40,
        'textAlign': 'center'
    };
    var3.textEmoji = var8;
    var8 = {
        'width': 40,
        'height': 40,
        'backgroundColor': null,
        'borderRadius': 20,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var10;
    var3.emojiPlaceholder = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.completedText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104821: for (var _fun104821_ip = 0;;) switch (_fun104821_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot17;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 15;
                var0 = var5[var2];
                var10 = var3.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var0;
                var7 = new Array(1);
                var7[0] = var1;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot10;
                    var1 = var2.getNewMemberActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var9.bind(var10)(var8, var0, var7);
                var0 = var5[var2];
                var9 = var3.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot11;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot11;
                    var1 = var2.getCompletedActions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var8.bind(var9)(var7, var0);
                var _closure2_slot1 = var7;
                var0 = var5[var2];
                var10 = var3.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot7;
                    var1 = var2.getSelfMember;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var10)(var8, var0);
                var _closure2_slot2 = var0;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var6
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var5.bind(var8)(var3, var2);
                var _closure2_slot3 = var8;
                var5 = _closure1_slot3;
                var3 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var1;
                var7 = null;
                var9 = var7 == var0;
                var1 = undefined;
                if (var9) {
                    _fun104821_ip = 252;
                    continue _fun104821
                }
            case 247:
                var1 = var0.flags;
            case 252:
                var2[2] = var1;
                var1 = function() { // Environment: var6
                    _fun104826: for (var _fun104826_ip = 0;;) switch (_fun104826_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 == var1;
                            if (!var1) {
                                _fun104826_ip = 42;
                                continue _fun104826
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var4 = var3 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun104826_ip = 38;
                                continue _fun104826
                            }
                        case 29:
                            var4 = _closure2_slot2;
                            var2 = var4.flags;
                        case 38:
                            var1 = var3 != var2;
                        case 42:
                            if (!var1) {
                                _fun104826_ip = 113;
                                continue _fun104826
                            }
                        case 45:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 28;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.hasFlag;
                            var6 = _closure2_slot2;
                            var6 = var6.flags;
                            var7 = var3 != var6;
                            var3 = 0;
                            if (!var7) {
                                _fun104826_ip = 97;
                                continue _fun104826
                            }
                        case 94:
                            var3 = var6;
                        case 97:
                            var2 = _closure1_slot14;
                            var2 = var2.STARTED_HOME_ACTIONS;
                            var1 = var4.bind(var5)(var3, var2);
                        case 113:
                            if (!var1) {
                                _fun104826_ip = 156;
                                continue _fun104826
                            }
                        case 116:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchNewMemberActions;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 156:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var6
                    _fun104827: for (var _fun104827_ip = 0;;) switch (_fun104827_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun104827_ip = 43;
                                continue _fun104827
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var4 = var3 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun104827_ip = 39;
                                continue _fun104827
                            }
                        case 29:
                            var4 = _closure2_slot3;
                            var2 = var4.rulesChannelId;
                        case 39:
                            var1 = var3 != var2;
                        case 43:
                            if (!var1) {
                                _fun104827_ip = 98;
                                continue _fun104827
                            }
                        case 46:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.selectNewMemberActionChannel;
                            var0 = _closure2_slot3;
                            var1 = var0.id;
                            var0 = var0.rulesChannelId;
                            var0 = var2.bind(var3)(var1, var0);
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var3.bind(var5)(var1, var2);
                var1 = var7 == var0;
                var0 = null;
                if (var1) {
                    _fun104821_ip = 842;
                    continue _fun104821
                }
            case 311:
                var1 = var7 == var11;
                var0 = null;
                if (var1) {
                    _fun104821_ip = 842;
                    continue _fun104821
                }
            case 323:
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun104821_ip = 842;
                    continue _fun104821
                }
            case 339:
                var3 = _closure1_slot16;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var16.actionsContainer;
                var1.style = var5;
                var12 = _closure1_slot15;
                var9 = _closure1_slot4;
                var5 = {};
                var13 = var16.actionsHeader;
                var5.style = var13;
                var18 = _closure1_slot15;
                var23 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 21;
                var13 = var19[var14];
                var13 = var23.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = 25;
                var20 = var19[var21];
                var20 = var23.bind(var4)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var19[var21];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.LhlgY9;
                var19 = var20.bind(var22)(var19);
                var13.children = var19;
                var13 = var18.bind(var4)(var17, var13);
                var5.children = var13;
                var9 = var12.bind(var4)(var9, var5);
                var5 = new Array(3);
                var5[0] = var9;
                var9 = var11.map;
                var6 = function(arg0) { // Environment: var6
                    _fun104828: for (var _fun104828_ip = 0;;) switch (_fun104828_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot15;
                            var3 = _closure1_slot18;
                            var2 = {};
                            var1 = var0.channelId;
                            var2.channelId = var1;
                            var1 = var0.title;
                            var2.title = var1;
                            var1 = var0.emoji;
                            var2.emoji = var1;
                            var1 = var0.icon;
                            var2.icon = var1;
                            var1 = _closure2_slot1;
                            var5 = null;
                            var8 = var5 == var1;
                            var1 = undefined;
                            var6 = undefined;
                            if (var8) {
                                _fun104828_ip = 87;
                                continue _fun104828
                            }
                        case 74:
                            var8 = _closure2_slot1;
                            var7 = var0.channelId;
                            var6 = var8[var7];
                        case 87:
                            var5 = var5 != var6;
                            if (!var5) {
                                _fun104828_ip = 97;
                                continue _fun104828
                            }
                        case 94:
                            var5 = var6;
                        case 97:
                            var2.completed = var5;
                            var6 = var0.channelId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'member-action-';
                            var0 = var5.bind(var0)(var6);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6 = var9.bind(var11)(var6);
                var5[1] = var6;
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun104821_ip = 533;
                    continue _fun104821
                }
            case 527:
                var6 = var8.rulesChannelId;
            case 533:
                var6 = var7 != var6;
                if (!var6) {
                    _fun104821_ip = 828;
                    continue _fun104821
                }
            case 543:
                var9 = _closure1_slot16;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 24;
                var7 = var17[var7];
                var7 = var20.bind(var4)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var7.onPress = var10;
                var10 = var16.actionContainer;
                var7.style = var10;
                var12 = _closure1_slot15;
                var11 = _closure1_slot4;
                var10 = {};
                var13 = var16.emojiPlaceholder;
                var10.style = var13;
                var19 = _closure1_slot15;
                var23 = _closure1_slot1;
                var22 = 22;
                var13 = var17[var22];
                var18 = var23.bind(var4)(var13);
                var13 = {};
                var22 = var17[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.Sizes;
                var22 = var22.REFRESH_SMALL_16;
                var13.size = var22;
                var22 = 29;
                var22 = var17[var22];
                var22 = var23.bind(var4)(var22);
                var13.source = var22;
                var13 = var19.bind(var4)(var18, var13);
                var10.children = var13;
                var11 = var12.bind(var4)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot15;
                var12 = _closure1_slot4;
                var11 = {};
                var16 = var16.channelNameContainer;
                var11.style = var16;
                var16 = _closure1_slot15;
                var14 = var17[var14];
                var14 = var20.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = var17[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["K/i3iQ"];
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 828:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 842:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4700, 1372, 1672, 1410, 3050, 4272, 4273, 660, 1616, 3038, 33, 1297, 671, 566, 4755, 1417, 11611, 4667, 3063, 3900, 4045, 9972, 4865, 1234, 11616, 13635, 1384, 13429, 2]);