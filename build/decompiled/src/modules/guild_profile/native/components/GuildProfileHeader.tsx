// modules/guild_profile/native/components/GuildProfileHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var9 = 1;
    var1 = var6[var9];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.getBadgeTooltip;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot9 = var4;
    var1 = var1.jsxs;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var10 = 'flex';
    var8 = {
        'paddingHorizontal': 16,
        'marginTop': 4294967264,
        'display': 'flex',
        'flexDirection': 'column',
        'gap': 0
    };
    var1.header = var8;
    var8 = {
        'width': 86,
        'height': 86,
        'borderRadius': 28.666666666666668,
        'backgroundColor': null,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var1.avatarBackground = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': 8
    };
    var1.members = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var1.memberCount = var8;
    var8 = {
        'width': 8,
        'height': 8,
        'borderRadius': 4
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_STATUS_OFFLINE;
    var8.backgroundColor = var13;
    var1.dot = var8;
    var8 = {
        'width': 8,
        'height': 8,
        'borderRadius': 4
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_STATUS_ONLINE;
    var8.backgroundColor = var11;
    var1.dotOnline = var8;
    var8 = {};
    var8.display = var10;
    var1.established = var8;
    var8 = {
        'marginTop': 4,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var1.nameRow = var8;
    var8 = {};
    var8.flexShrink = var9;
    var1.guildName = var8;
    var8 = {
        'marginLeft': 8,
        'height': 24,
        'width': 24
    };
    var1.guildIcon = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot11 = var1;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GuildProfileHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun59669: for (var _fun59669_ip = 0;;) switch (_fun59669_ip) {
            case 0:
                var1 = arg0;
                var24 = var1.profile;
                var _closure2_slot0 = var24;
                var17 = var1.guildIconSource;
                var1 = _closure1_slot11;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var2 = var7[var1];
                var8 = var10.bind(var3)(var2);
                var6 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.locale;
                    return var0;
                };
                var11 = var6.bind(var8)(var4, var2);
                var2 = 10;
                var2 = var7[var2];
                var6 = var10.bind(var3)(var2);
                var4 = var6.getEstablishedDate;
                var8 = _closure1_slot1;
                var2 = 11;
                var2 = var7[var2];
                var13 = var8.bind(var3)(var2);
                var12 = var13.extractTimestamp;
                var2 = var24.id;
                var2 = var12.bind(var13)(var2);
                var14 = var4.bind(var6)(var2, var11);
                var2 = 12;
                var2 = var7[var2];
                var4 = var10.bind(var3)(var2);
                var2 = var4.fromGuildProfile;
                var18 = var2.bind(var4)(var24);
                var4 = _closure1_slot3;
                var11 = var4.useCallback;
                var6 = new Array(1);
                var6[0] = var24;
                var2 = function() { // Environment: var0
                    _fun59671: for (var _fun59671_ip = 0;;) switch (_fun59671_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var2 = var5[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var3 = var6.fromGuildProfile;
                            var2 = _closure2_slot0;
                            var6 = var3.bind(var6)(var2);
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.getGuildTraits;
                            var2 = var2.bind(var3)(var6);
                            var3 = 14;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.getBadgeCategory;
                            var4 = var3.bind(var4)(var2);
                            var3 = _closure1_slot8;
                            var2 = var2.visibility;
                            var2 = var3.bind(var0)(var4, var2);
                            var4 = var2.tooltipTitle;
                            var5 = var2.tooltipSubtitle;
                            var6 = null;
                            var2 = var6 == var4;
                            if (!var2) {
                                _fun59671_ip = 130;
                                continue _fun59671
                            }
                        case 126:
                            var2 = var6 == var5;
                        case 130:
                            if (var2) {
                                _fun59671_ip = 187;
                                continue _fun59671
                            }
                        case 133:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var7 = 'guild-badge-tooltip';
                            var1.key = var7;
                            if (!(var6 != var5)) {
                                _fun59671_ip = 178;
                                continue _fun59671
                            }
                        case 175:
                            var4 = var5;
                        case 178:
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                        case 187:
                            return var0;
                    }
                };
                var16 = var11.bind(var4)(var2, var6);
                var6 = var24.id;
                var _closure2_slot1 = var6;
                var1 = var7[var1];
                var13 = var10.bind(var3)(var1);
                var12 = var13.useStateFromStores;
                var1 = _closure1_slot7;
                var11 = new Array(2);
                var11[0] = var1;
                var1 = _closure1_slot6;
                var11[1] = var1;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var0
                    _fun59672: for (var _fun59672_ip = 0;;) switch (_fun59672_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getMember;
                            var1 = _closure2_slot1;
                            var4 = _closure1_slot6;
                            var0 = var4.getId;
                            var0 = var0.bind(var4)();
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun59672_ip = 57;
                                continue _fun59672
                            }
                        case 51:
                            var0 = var2.joinedAt;
                        case 57:
                            var0 = var1 != var0;
                            return var0;
                    }
                };
                var15 = var12.bind(var13)(var11, var1, var2);
                var _closure2_slot2 = var15;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var15;
                var0 = function() { // Environment: var0
                    _fun59673: for (var _fun59673_ip = 0;;) switch (_fun59673_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun59673_ip = 101;
                                continue _fun59673
                            }
                        case 10:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 16;
                            var2 = var4[var2];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.hideActionSheet;
                            var2 = _closure2_slot1;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var7 = var1.concat;
                            var1 = 'GuildProfileActionSheet:';
                            var1 = var7.bind(var1)(var2);
                            var1 = var5.bind(var6)(var1);
                            var1 = _closure1_slot0;
                            var0 = 17;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.transitionToGuild;
                            var0 = var0.bind(var1)(var2);
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.header;
                var0.style = var4;
                var11 = _closure1_slot9;
                var4 = {};
                var6 = var9.avatarBackground;
                var4.style = var6;
                var12 = 18;
                var6 = var7[var12];
                var8 = var8.bind(var3)(var6);
                var6 = {};
                var6.icon = var17;
                var12 = var7[var12];
                var12 = var10.bind(var3)(var12);
                var12 = var12.GuildIconSizes;
                var12 = var12.XXLARGE;
                var6.size = var12;
                var12 = true;
                var6.animate = var12;
                var12 = var24.name;
                var6.value = var12;
                var12 = false;
                var6.selected = var12;
                var6 = var11.bind(var3)(var8, var6);
                var4.children = var6;
                var6 = var11.bind(var3)(var1, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = {};
                var8 = var9.nameRow;
                var6.style = var8;
                var8 = 19;
                var7 = var7[var8];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'onPress': null,
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var12 = undefined;
                if (!var15) {
                    _fun59669_ip = 460;
                    continue _fun59669
                }
            case 457:
                var12 = var13;
            case 460:
                var7.onPress = var12;
                var12 = var9.guildName;
                var7.style = var12;
                var12 = var24.name;
                var7.children = var12;
                var7 = var11.bind(var3)(var10, var7);
                var10 = new Array(2);
                var10[0] = var7;
                var7 = _closure1_slot9;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 20;
                var12 = var15[var12];
                var12 = var11.bind(var3)(var12);
                var13 = var12.PressableHighlight;
                var12 = {};
                var12.onPress = var16;
                var17 = _closure1_slot1;
                var16 = 21;
                var16 = var15[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.guild = var18;
                var18 = var9.guildIcon;
                var16.style = var18;
                var16 = var7.bind(var3)(var17, var16);
                var12.children = var16;
                var12 = var7.bind(var3)(var13, var12);
                var10[1] = var12;
                var6.children = var10;
                var6 = var2.bind(var3)(var1, var6);
                var4[1] = var6;
                var12 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var9.members;
                var5.style = var10;
                var13 = {};
                var10 = var9.memberCount;
                var13.style = var10;
                var10 = {};
                var16 = var9.dotOnline;
                var10.style = var16;
                var10 = var7.bind(var3)(var6, var10);
                var16 = new Array(2);
                var16[0] = var10;
                var10 = var15[var8];
                var10 = var11.bind(var3)(var10);
                var18 = var10.Text;
                var17 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var10 = 22;
                var19 = var15[var10];
                var19 = var11.bind(var3)(var19);
                var22 = var19.intl;
                var21 = var22.format;
                var19 = var15[var10];
                var19 = var11.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["LC+S+m"];
                var19 = {};
                var23 = var24.onlineCount;
                var19.membersOnline = var23;
                var19 = var21.bind(var22)(var20, var19);
                var17.children = var19;
                var17 = var7.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var16 = var12.bind(var3)(var6, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var16 = {};
                var17 = var9.memberCount;
                var16.style = var17;
                var17 = {};
                var18 = var9.dot;
                var17.style = var18;
                var18 = var7.bind(var3)(var6, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var15[var8];
                var18 = var11.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var20 = var15[var10];
                var20 = var11.bind(var3)(var20);
                var23 = var20.intl;
                var22 = var23.format;
                var20 = var15[var10];
                var20 = var11.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20.zRl6XR;
                var20 = {};
                var24 = var24.memberCount;
                var20.count = var24;
                var20 = var22.bind(var23)(var21, var20);
                var18.children = var20;
                var18 = var7.bind(var3)(var19, var18);
                var17[1] = var18;
                var16.children = var17;
                var16 = var12.bind(var3)(var6, var16);
                var13[1] = var16;
                var5.children = var13;
                var5 = var12.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = {};
                var9 = var9.established;
                var5.style = var9;
                var8 = var15[var8];
                var8 = var11.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var12 = var15[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var15[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.zb2Q56;
                var10 = {};
                var10.createdAtDate = var14;
                var10 = var12.bind(var13)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 1216, 1672, 7352, 33, 1297, 671, 566, 3295, 21, 1598, 7353, 7354, 3107, 3237, 5577, 7355, 3900, 4865, 7357, 1234, 2]);