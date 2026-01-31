// modules/launchpad/native/shared/TextChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getThemedRippleConfig;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun110086: for (var _fun110086_ip = 0;;) switch (_fun110086_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var1 = {
                    'flex': 1,
                    'borderRadius': null,
                    'marginBottom': 1
                };
                var2 = 1;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 10;
                var8 = var5[var7];
                var7 = undefined;
                var8 = var6.bind(var7)(var8);
                var8 = var8.bind(var7)();
                var8 = var8.container;
                var8 = var8.borderRadius;
                var1.borderRadius = var8;
                var0.pressable = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0,
                    'borderWidth': 1
                };
                var8 = 11;
                var9 = var5[var8];
                var9 = var6.bind(var7)(var9);
                var9 = var9.colors;
                var9 = var9.BORDER_MUTED;
                var1.borderColor = var9;
                var9 = var5[var8];
                var9 = var6.bind(var7)(var9);
                var9 = var9.radii;
                var9 = var9.md;
                var1.borderRadius = var9;
                var0.selectedBorder = var1;
                var1 = {};
                var9 = var5[var8];
                var9 = var6.bind(var7)(var9);
                var9 = var9.radii;
                var9 = var9.md;
                var1.borderRadius = var9;
                var9 = var5[var8];
                var9 = var6.bind(var7)(var9);
                var9 = var9.colors;
                var9 = var9.BACKGROUND_MOD_MUTED;
                var1.backgroundColor = var9;
                var0.rowSelected = var1;
                var1 = {};
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var5 = var5.radii;
                var5 = var5.md;
                var1.borderRadius = var5;
                var0.rowSelectedThemed = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var0.subtitleWrapper = var1;
                var1 = {
                    'flexGrow': 1,
                    'flexShrink': 1
                };
                var0.subtitle = var1;
                var1 = {
                    'marginRight': 4,
                    'marginTop': 1
                };
                var0.subtitleIcon = var1;
                var1 = {};
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var6 = var5.colors;
                if (var4) {
                    _fun110086_ip = 329;
                    continue _fun110086
                }
            case 307:
                var5 = arg1;
                if (var5) {
                    _fun110086_ip = 321;
                    continue _fun110086
                }
            case 313:
                var5 = var6.TEXT_MUTED;
                _fun110086_ip = 327;
                continue _fun110086;
            case 321:
                var5 = var6.TEXT_STRONG;
            case 327:
                _fun110086_ip = 335;
                continue _fun110086;
            case 329:
                var5 = var6.ICON_MUTED;
            case 335:
                var1.tintColor = var5;
                if (var4) {
                    _fun110086_ip = 347;
                    continue _fun110086
                }
            case 343:
                var2 = _closure1_slot8;
            case 347:
                var1.opacity = var2;
                var0.icon = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110087: for (var _fun110087_ip = 0;;) switch (_fun110087_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.channel;
                var _closure2_slot0 = var16;
                var26 = var1.subtitle;
                var17 = var1.muted;
                var2 = undefined;
                if (!(var17 === var2)) {
                    _fun110087_ip = 34;
                    continue _fun110087
                }
            case 32:
                var17 = false;
            case 34:
                var35 = var1.navigationReplace;
                if (!(var35 === var2)) {
                    _fun110087_ip = 46;
                    continue _fun110087
                }
            case 44:
                var35 = false;
            case 46:
                var11 = var1.showGuildBadgeIcon;
                var7 = var1.selected;
                if (!(var7 === var2)) {
                    _fun110087_ip = 64;
                    continue _fun110087
                }
            case 62:
                var7 = false;
            case 64:
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var2;
                var10 = var16.id;
                var1 = var16.isForumLikeChannel;
                var28 = var1.bind(var16)();
                var6 = var16.guild_id;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var3 = var4.bind(var2)(var1);
                var1 = var3.useChannelUnreadBadgeState;
                var1 = var1.bind(var3)(var16, var17);
                var29 = var1.newChannel;
                var30 = var1.optInEnabled;
                var20 = var1.unread;
                var19 = var1.resolvedUnreadSetting;
                var18 = var1.mentionCount;
                var24 = var1.isMentionLowImportance;
                var1 = _closure1_slot13;
                var34 = var1.bind(var2)(var17, var20);
                var1 = 13;
                var1 = var5[var1];
                var3 = var4.bind(var2)(var1);
                var1 = var3.useHasActiveThreads;
                var1 = var1.bind(var3)(var16);
                var21 = var1.hasActiveThreads;
                var1 = 14;
                var3 = var5[var1];
                var12 = var4.bind(var2)(var3);
                var9 = var12.useStateFromStores;
                var3 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getNewThreadCount;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var25 = var9.bind(var12)(var8, var3);
                var3 = var5[var1];
                var12 = var4.bind(var2)(var3);
                var9 = var12.useStateFromStores;
                var3 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var0
                    _fun110089: for (var _fun110089_ip = 0;;) switch (_fun110089_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var0.parent_id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110089_ip = 46;
                                continue _fun110089
                            }
                        case 41:
                            var0 = var1.name;
                        case 46:
                            return var0;
                    }
                };
                var33 = var9.bind(var12)(var8, var3);
                var3 = 15;
                var3 = var5[var3];
                var9 = var4.bind(var2)(var3);
                var8 = var9.useUnreadThreadsCountForParent;
                var4 = var16.guild_id;
                var3 = var16.id;
                var27 = var8.bind(var9)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 16;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var5 = var20;
                if (!var5) {
                    _fun110087_ip = 344;
                    continue _fun110087
                }
            case 341:
                var5 = !var17;
            case 344:
                var3.unread = var5;
                var5 = var4.bind(var2)(var16, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = 17;
                var8 = var4[var8];
                var9 = var3.bind(var2)(var8);
                var8 = var9.useFontScale;
                var14 = var8.bind(var9)();
                var1 = var4[var1];
                var9 = var3.bind(var2)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var23 = var8.bind(var9)(var3, var1);
                var3 = _closure1_slot1;
                var1 = 18;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var22 = var1.bind(var2)();
                var1 = 19;
                var1 = var4[var1];
                var8 = var3.bind(var2)(var1);
                var1 = var16.id;
                var1 = var8.bind(var2)(var1);
                var13 = var1.isSubscriptionGated;
                var12 = var1.needSubscriptionToAccess;
                var1 = 20;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var9 = var1.bind(var2)(var16);
                _closure2_slot1 = var9;
                var8 = null;
                if (!(var8 == var5)) {
                    _fun110087_ip = 558;
                    continue _fun110087
                }
            case 505:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var3 = var4.renderChannelSubtitle;
                var1 = {};
                var1.subtitle = var26;
                var1.muted = var17;
                var1.channelId = var10;
                var1.guildId = var6;
                var32 = var3.bind(var4)(var1);
                _fun110087_ip = 648;
                continue _fun110087;
            case 558:
                var4 = _closure1_slot11;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 21;
                var1 = var10[var1];
                var1 = var6.bind(var2)(var1);
                var3 = var1.ChannelRowPreview;
                var1 = {};
                var1.channel = var16;
                var1.message = var5;
                var5 = 'text-muted';
                var1.color = var5;
                var1.muted = var17;
                var5 = 22;
                var5 = var10[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ChannelListLayoutTypes;
                var5 = var5.COMPACT;
                var1.layout = var5;
                var32 = var4.bind(var2)(var3, var1);
            case 648:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 24;
                var1 = var5[var1];
                var6 = var3.bind(var2)(var1);
                var4 = var6.useIsActivitiesInTextEnabled;
                var1 = var16.id;
                var10 = var4.bind(var6)(var1);
                var1 = var9.length;
                var26 = 0;
                var31 = var1 > var26;
                _closure2_slot2 = var31;
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var31;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    _fun110091: for (var _fun110091_ip = 0;;) switch (_fun110091_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!var1) {
                                _fun110091_ip = 58;
                                continue _fun110091
                            }
                        case 12:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1.embeddedApps = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 58:
                            return var0;
                    }
                };
                var9 = var4.bind(var6)(var0, var1);
                var1 = _closure1_slot1;
                var0 = 26;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var4 = _closure1_slot12;
                var0 = 27;
                var0 = var5[var0];
                var0 = var3.bind(var2)(var0);
                var3 = var0.PressableHighlight;
                var0 = {};
                var6 = var34.pressable;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = undefined;
                if (!var7) {
                    _fun110087_ip = 798;
                    continue _fun110087
                }
            case 792:
                var6 = var34.rowSelected;
            case 798:
                var5[1] = var6;
                var0.style = var5;
                var0.underlayColor = var22;
                var6 = _closure1_slot10;
                var5 = {};
                var5.color = var22;
                var5 = var6.bind(var2)(var5);
                var0.androidRippleConfig = var5;
                var22 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 28;
                var5 = var6[var5];
                var31 = var22.bind(var2)(var5);
                var5 = var31.useTextChannelPressEvents;
                var36 = var5.bind(var31)(var16, var35);
                var37 = var0;
                var5 = copyDataProperties(var37, var36);
                var5 = 29;
                var6 = var6[var5];
                var31 = var22.bind(var2)(var6);
                var22 = var31.getChannelAccessibilityProps;
                var6 = {};
                var6.channel = var16;
                var6.unread = var20;
                var6.mentionCount = var18;
                var36 = var22.bind(var31)(var6);
                var37 = var0;
                var6 = copyDataProperties(var37, var36);
                if (!var7) {
                    _fun110087_ip = 954;
                    continue _fun110087
                }
            case 919:
                var31 = _closure1_slot11;
                var22 = _closure1_slot4;
                var6 = {};
                var34 = var34.selectedBorder;
                var6.style = var34;
                var34 = 'none';
                var6.pointerEvents = var34;
                var7 = var31.bind(var2)(var22, var6);
            case 954:
                var6 = new Array(2);
                var6[0] = var7;
                var22 = _closure1_slot1;
                var31 = _closure1_slot2;
                var5 = var31[var5];
                var7 = var22.bind(var2)(var5);
                var5 = {};
                var5.channel = var16;
                var5.channelCategoryName = var33;
                var5.subtitle = var32;
                var5.hasActiveThreads = var21;
                var33 = _closure1_slot11;
                var21 = 30;
                var21 = var31[var21];
                var32 = var22.bind(var2)(var21);
                var21 = {};
                var21.unread = var20;
                var21.resolvedUnreadSetting = var19;
                var34 = var16.isThread;
                var34 = var34.bind(var16)();
                var21.isThread = var34;
                var21.muted = var17;
                var21 = var33.bind(var2)(var32, var21);
                var5.unreadBadge = var21;
                var21 = 31;
                var21 = var31[var21];
                var22 = var22.bind(var2)(var21);
                var21 = {};
                if (!var29) {
                    _fun110087_ip = 1079;
                    continue _fun110087
                }
            case 1076:
                var29 = var30;
            case 1079:
                var21.newChannel = var29;
                var21.mentionCount = var18;
                var21.isMentionLowImportance = var24;
                var24 = undefined;
                if (!var28) {
                    _fun110087_ip = 1132;
                    continue _fun110087
                }
            case 1099:
                var29 = var27 > var26;
                var24 = undefined;
                if (!var29) {
                    _fun110087_ip = 1132;
                    continue _fun110087
                }
            case 1108:
                var24 = undefined;
                if (var17) {
                    _fun110087_ip = 1132;
                    continue _fun110087
                }
            case 1113:
                var29 = _closure1_slot9;
                var29 = var29.ALL_MESSAGES;
                var24 = undefined;
                if (!(var19 === var29)) {
                    _fun110087_ip = 1132;
                    continue _fun110087
                }
            case 1129:
                var24 = var27;
            case 1132:
                var21.postsWithUnreadsCount = var24;
                var24 = undefined;
                if (!var28) {
                    _fun110087_ip = 1159;
                    continue _fun110087
                }
            case 1142:
                var26 = var27 > var26;
                var24 = undefined;
                if (!var26) {
                    _fun110087_ip = 1159;
                    continue _fun110087
                }
            case 1151:
                var24 = undefined;
                if (var17) {
                    _fun110087_ip = 1159;
                    continue _fun110087
                }
            case 1156:
                var24 = var25;
            case 1159:
                var21.newPostCount = var24;
                var21.locale = var23;
                var21 = var22.bind(var2)(var21);
                var5.mentionBadge = var21;
                var5.unread = var20;
                var5.resolvedUnreadSetting = var19;
                var5.mentionCount = var18;
                var5.muted = var17;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 32;
                var15 = var18[var15];
                var15 = var17.bind(var2)(var15);
                var15 = var15.bind(var2)(var16);
                var5.channelName = var15;
                var5.fontScale = var14;
                var5.isSubscriptionGated = var13;
                var5.needSubscriptionToAccess = var12;
                var5.showGuildBadgeIcon = var11;
                var8 = null;
                if (!var10) {
                    _fun110087_ip = 1257;
                    continue _fun110087
                }
            case 1254:
                var8 = var9;
            case 1257:
                var5.end = var8;
                var5 = var7.bind(var2)(var5);
                var6[1] = var5;
                var5 = 'children';
                var0[var5] = var6;
                var0 = var4.bind(var2)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/TextChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4514, 1676, 1372, 8747, 4268, 4837, 33, 1297, 14123, 671, 13134, 6659, 566, 8863, 10818, 4049, 14132, 4754, 13371, 8736, 8749, 14134, 6781, 13376, 14124, 4865, 14135, 14136, 14127, 14130, 4755, 2]);