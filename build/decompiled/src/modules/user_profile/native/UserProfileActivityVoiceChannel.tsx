// modules/user_profile/native/UserProfileActivityVoiceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun62601: for (var _fun62601_ip = 0;;) switch (_fun62601_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.Permissions;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 4,
                'overflow': 'hidden'
            };
            var3.container = var8;
            var8 = {
                'flex': 1,
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 2
            };
            var3.channelButton = var8;
            var8 = {
                'flex': 1,
                'overflow': 'hidden'
            };
            var9 = 5;
            var9 = var5[var9];
            var10 = var4.bind(var0)(var9);
            var9 = var10.isAndroid;
            var10 = var9.bind(var10)();
            var9 = -1;
            if (!var10) {
                _fun62601_ip = 255;
                continue _fun62601
            }
        case 249:
            var9 = -2;
        case 255:
            var8.marginTop = var9;
            var3.channelName = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 29;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_profile/native/UserProfileActivityVoiceChannel.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun62602: for (var _fun62602_ip = 0;;) switch (_fun62602_ip) {
                    case 0:
                        var0 = arg0;
                        var14 = var0.guild;
                        var _closure2_slot0 = var14;
                        var19 = var0.channel;
                        var _closure2_slot1 = var19;
                        var1 = var0.onAction;
                        var _closure2_slot2 = var1;
                        var8 = var0.style;
                        var0 = _closure1_slot8;
                        var3 = undefined;
                        var17 = var0.bind(var3)();
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var0 = var6.bind(var3)(var0);
                        var0 = var0.bind(var3)();
                        var0 = var0.newestAnalyticsLocation;
                        var _closure2_slot3 = var0;
                        var1 = _closure1_slot0;
                        var0 = 7;
                        var0 = var2[var0];
                        var4 = var1.bind(var3)(var0);
                        var0 = var4.useUserProfileAnalyticsContext;
                        var0 = var0.bind(var4)();
                        var0 = var0.context;
                        var _closure2_slot4 = var0;
                        var0 = 8;
                        var0 = var2[var0];
                        var4 = var1.bind(var3)(var0);
                        var0 = var4.useIsScreenReaderEnabled;
                        var4 = var0.bind(var4)();
                        var0 = 9;
                        var0 = var2[var0];
                        var0 = var6.bind(var3)(var0);
                        var15 = var0.bind(var3)(var19);
                        var _closure2_slot5 = var15;
                        var0 = 10;
                        var0 = var2[var0];
                        var0 = var6.bind(var3)(var0);
                        var16 = var0.bind(var3)(var19);
                        var0 = 11;
                        var0 = var2[var0];
                        var6 = var1.bind(var3)(var0);
                        var2 = var6.useStateFromStores;
                        var0 = _closure1_slot4;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var10
                            _fun62603: for (var _fun62603_ip = 0;;) switch (_fun62603_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var0 = var2.isPrivate;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun62603_ip = 53;
                                        continue _fun62603
                                    }
                                case 20:
                                    var4 = _closure1_slot4;
                                    var3 = var4.can;
                                    var2 = _closure1_slot5;
                                    var2 = var2.CONNECT;
                                    var1 = _closure2_slot1;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 53:
                                    return var0;
                            }
                        };
                        var6 = var2.bind(var6)(var1, var0);
                        var0 = var19.isGuildStageVoice;
                        var0 = var0.bind(var19)();
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        if (var0) {
                            _fun62602_ip = 261;
                            continue _fun62602
                        }
                    case 241:
                        var0 = 13;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var12 = var0.VoiceNormalIcon;
                        _fun62602_ip = 279;
                        continue _fun62602;
                    case 261:
                        var0 = 12;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var12 = var0.StageIcon;
                    case 279:
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var9 = var17.container;
                        var7 = new Array(2);
                        var7[0] = var9;
                        var7[1] = var8;
                        var0.style = var7;
                        var9 = _closure1_slot6;
                        if (var4) {
                            _fun62602_ip = 442;
                            continue _fun62602
                        }
                    case 320:
                        var18 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var4 = 16;
                        var4 = var20[var4];
                        var4 = var18.bind(var3)(var4);
                        var7 = var4.PressableOpacity;
                        var4 = {};
                        var8 = 'button';
                        var4.accessibilityRole = var8;
                        var8 = var14.name;
                        var4.accessibilityLabel = var8;
                        var8 = function() {
                            var2 = _closure2_slot2;
                            var1 = {};
                            var0 = 'PRESS_VOICE_CHANNEL_ICON';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var5 = 'GUILD_NAME_TOAST';
                            var1.key = var5;
                            var4 = _closure2_slot0;
                            var4 = var4.name;
                            var1.content = var4;
                            var4 = function() {
                                var3 = _closure1_slot6;
                                var1 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 15;
                                var0 = var6[var4];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var5 = _closure1_slot0;
                                var4 = var6[var4];
                                var4 = var5.bind(var2)(var4);
                                var4 = var4.GuildIconSizes;
                                var4 = var4.XSMALL;
                                var0.size = var4;
                                var4 = _closure2_slot0;
                                var0.guild = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.icon = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4.onPress = var8;
                        var11 = _closure1_slot1;
                        var13 = 15;
                        var8 = var20[var13];
                        var11 = var11.bind(var3)(var8);
                        var8 = {};
                        var13 = var20[var13];
                        var13 = var18.bind(var3)(var13);
                        var13 = var13.GuildIconSizes;
                        var13 = var13.XXSMALL;
                        var8.size = var13;
                        var8.guild = var14;
                        var8 = var9.bind(var3)(var11, var8);
                        var4.children = var8;
                        var7 = var9.bind(var3)(var7, var4);
                        _fun62602_ip = 591;
                        continue _fun62602;
                    case 442:
                        var8 = _closure1_slot3;
                        var4 = {};
                        var11 = true;
                        var4.accessible = var11;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var11 = 14;
                        var13 = var21[var11];
                        var13 = var20.bind(var3)(var13);
                        var22 = var13.intl;
                        var18 = var22.formatToPlainString;
                        var11 = var21[var11];
                        var11 = var20.bind(var3)(var11);
                        var11 = var11.t;
                        var13 = var11.xm6W9D;
                        var11 = {};
                        var23 = var14.name;
                        var11.guildName = var23;
                        var11 = var18.bind(var22)(var13, var11);
                        var4.accessibilityLabel = var11;
                        var13 = _closure1_slot1;
                        var18 = 15;
                        var11 = var21[var18];
                        var13 = var13.bind(var3)(var11);
                        var11 = {};
                        var18 = var21[var18];
                        var18 = var20.bind(var3)(var18);
                        var18 = var18.GuildIconSizes;
                        var18 = var18.XXSMALL;
                        var11.size = var18;
                        var11.guild = var14;
                        var11 = var9.bind(var3)(var13, var11);
                        var4.children = var11;
                        var7 = var9.bind(var3)(var8, var4);
                    case 591:
                        var4 = new Array(4);
                        var4[0] = var7;
                        var9 = _closure1_slot6;
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 18;
                        var7 = var11[var7];
                        var7 = var8.bind(var3)(var7);
                        var8 = var7.ChevronSmallRightIcon;
                        var7 = {
                            'size': 'xxs',
                            'color': 'text-default'
                        };
                        var7 = var9.bind(var3)(var8, var7);
                        var4[1] = var7;
                        var9 = _closure1_slot7;
                        if (var6) {
                            _fun62602_ip = 791;
                            continue _fun62602
                        }
                    case 663:
                        var7 = _closure1_slot3;
                        var6 = {};
                        var8 = var17.channelButton;
                        var6.style = var8;
                        var14 = _closure1_slot6;
                        var8 = {
                            'size': 'xxs',
                            'color': 'text-default'
                        };
                        var11 = var14.bind(var3)(var12, var8);
                        var8 = new Array(2);
                        var8[0] = var11;
                        var13 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var11 = 19;
                        var11 = var18[var11];
                        var11 = var13.bind(var3)(var11);
                        var13 = var11.Text;
                        var11 = {
                            'style': null,
                            'variant': 'text-xs/normal',
                            'lineClamp': 1
                        };
                        var18 = var17.channelName;
                        var11.style = var18;
                        var11.children = var16;
                        var11 = var14.bind(var3)(var13, var11);
                        var8[1] = var11;
                        var6.children = var8;
                        var6 = var9.bind(var3)(var7, var6);
                        _fun62602_ip = 1028;
                        continue _fun62602;
                    case 791:
                        var13 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var7 = 16;
                        var7 = var18[var7];
                        var7 = var13.bind(var3)(var7);
                        var8 = var7.PressableOpacity;
                        var7 = {};
                        var11 = var17.channelButton;
                        var7.style = var11;
                        var11 = 'button';
                        var7.accessibilityRole = var11;
                        var14 = _closure1_slot1;
                        var11 = 20;
                        var11 = var18[var11];
                        var14 = var14.bind(var3)(var11);
                        var11 = {};
                        var11.channel = var19;
                        var11 = var14.bind(var3)(var11);
                        var7.accessibilityLabel = var11;
                        var11 = 14;
                        var14 = var18[var11];
                        var14 = var13.bind(var3)(var14);
                        var19 = var14.intl;
                        var14 = var19.string;
                        var11 = var18[var11];
                        var11 = var13.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11["9C444m"];
                        var11 = var14.bind(var19)(var11);
                        var7.accessibilityHint = var11;
                        var11 = function() {
                            var3 = _closure2_slot2;
                            var1 = {};
                            var0 = 'OPEN_VOICE_CHANNEL';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 21;
                            var4 = var3[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.openGuildVoiceModal;
                            var4 = _closure2_slot1;
                            var2 = _closure2_slot3;
                            var2 = var5.bind(var6)(var4, var2);
                            var2 = _closure1_slot1;
                            var1 = 22;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var7.onPress = var11;
                        var14 = _closure1_slot6;
                        var11 = {
                            'size': 'xxs',
                            'color': 'text-default'
                        };
                        var12 = var14.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var12 = 19;
                        var12 = var18[var12];
                        var12 = var13.bind(var3)(var12);
                        var13 = var12.Text;
                        var12 = {
                            'style': null,
                            'variant': 'text-xs/normal',
                            'lineClamp': 1
                        };
                        var17 = var17.channelName;
                        var12.style = var17;
                        var12.children = var16;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
                        var7.children = var11;
                        var6 = var9.bind(var3)(var8, var7);
                    case 1028:
                        var4[2] = var6;
                        var7 = _closure1_slot6;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 16;
                        var5 = var13[var5];
                        var5 = var12.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var8 = 'button';
                        var5.accessibilityRole = var8;
                        var8 = 14;
                        var9 = var13[var8];
                        var9 = var12.bind(var3)(var9);
                        var14 = var9.intl;
                        var11 = var14.formatToPlainString;
                        var8 = var13[var8];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.t;
                        var9 = var8.e95u3C;
                        var8 = {};
                        var16 = var15.length;
                        var8.count = var16;
                        var8 = var11.bind(var14)(var9, var8);
                        var5.accessibilityLabel = var8;
                        var8 = function() {
                            var3 = _closure2_slot2;
                            var2 = {};
                            var0 = 'PRESS_VOICE_CHANNEL_AVATARS';
                            var2.action = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var4 = 22;
                            var4 = var2[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 24;
                            var3 = var2[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 23;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var10 = var4.bind(var0)(var3, var2);
                            var3 = {};
                            var2 = _closure2_slot5;
                            var3.users = var2;
                            var1 = _closure2_slot1;
                            var3.channel = var1;
                            var1 = function arg0() {
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 25;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var5 = _closure2_slot4;
                                var6 = var0;
                                var3 = copyDataProperties(var6, var5);
                                var4 = arg0;
                                var3 = 'userId';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3.onPressUser = var1;
                            var9 = 'UserProfileActivityVoiceChannelUsers';
                            var7 = 'stack';
                            var11 = var6;
                            var8 = var3;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var5.onPress = var8;
                        var8 = 26;
                        var8 = var13[var8];
                        var8 = var12.bind(var3)(var8);
                        var9 = var8.AvatarPile;
                        var8 = {};
                        var11 = 27;
                        var11 = var13[var11];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.AvatarSizes;
                        var11 = var11.SIZE_16;
                        var8.size = var11;
                        var11 = var15.length;
                        var8.totalCount = var11;
                        var12 = var15.map;
                        var11 = function(arg0) { // Environment: var10
                            var0 = arg0;
                            var0 = var0.username;
                            return var0;
                        };
                        var11 = var12.bind(var15)(var11);
                        var8.names = var11;
                        var11 = var15.length;
                        var14 = 3;
                        var12 = var15;
                        if (!(!(var11 <= var14))) {
                            _fun62602_ip = 1252;
                            continue _fun62602
                        }
                    case 1239:
                        var13 = var15.slice;
                        var11 = 0;
                        var12 = var13.bind(var15)(var11, var14);
                    case 1252:
                        var11 = var12.map;
                        var10 = function(arg0) { // Environment: var10
                            var0 = arg0;
                            var4 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 28;
                            var1 = var7[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = 27;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.AvatarSizes;
                            var5 = var5.SIZE_16;
                            var1.size = var5;
                            var6 = _closure2_slot1;
                            var1.channel = var6;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var1.guildId = var5;
                            var1.user = var0;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var10 = var11.bind(var12)(var10);
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
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3082, 483, 33, 1297, 478, 5721, 6966, 4061, 7869, 4787, 566, 4855, 4858, 1234, 7388, 4897, 3139, 7735, 3932, 7870, 7871, 3269, 11906, 1307, 7345, 11425, 5449, 5447, 2]);