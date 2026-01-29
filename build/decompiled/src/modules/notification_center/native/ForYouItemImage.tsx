// modules/notification_center/native/ForYouItemImage.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildAcronym;
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
    var3 = var4.bind(var0)(var3);
    var13 = var3.FRIEND_BACKGROUND;
    var12 = var3.MESSAGE_BACKGROUND;
    var14 = var3.PROFILE_BACKGROUND;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = function(arg0) { // Environment: var1
        _fun103650: for (var _fun103650_ip = 0;;) switch (_fun103650_ip) {
            case 0:
                var5 = arg0;
                var3 = 48;
                if (!var5) {
                    _fun103650_ip = 12;
                    continue _fun103650
                }
            case 9:
                var3 = 32;
            case 12:
                var0 = {};
                var1 = {};
                var1.height = var3;
                var1.width = var3;
                var2 = 2;
                var2 = var3 / var2;
                var1.borderRadius = var2;
                var4 = 12;
                if (!var5) {
                    _fun103650_ip = 44;
                    continue _fun103650
                }
            case 41:
                var4 = 8;
            case 44:
                var1.marginEnd = var4;
                var4 = 'center';
                var1.alignItems = var4;
                var1.justifyContent = var4;
                var0.container = var1;
                var1 = {};
                var1.height = var3;
                var1.width = var3;
                var1.borderRadius = var2;
                var0.rowImage = var1;
                var1 = {
                    'height': 'auto',
                    'maxHeight': null,
                    'width': 'auto'
                };
                var1.maxHeight = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.INTERACTIVE_TEXT_DEFAULT;
                var1.color = var6;
                var0.guildFallbackImage = var1;
                var1 = {
                    'position': 'absolute',
                    'bottom': 4294967289,
                    'right': 4294967289,
                    'width': 22,
                    'height': 22,
                    'padding': 3,
                    'borderRadius': 11
                };
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOW;
                var1.backgroundColor = var2;
                var0.maskContainer = var1;
                var1 = {
                    'height': 16,
                    'width': 16,
                    'borderRadius': 8,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'overflow': 'hidden'
                };
                var0.mask = var1;
                var1 = {
                    'height': 10,
                    'width': 10
                };
                var0.maskIcon = var1;
                return var0;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9.color = var15;
    var3.fallbackImage = var9;
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var15;
    var3.fallbackImageV2 = var9;
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var15;
    var3.accentBackground = var9;
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.STATUS_POSITIVE_BACKGROUND;
    var9.backgroundColor = var15;
    var3.successBackground = var9;
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var9.backgroundColor = var15;
    var3.brandBackground = var9;
    var9 = {};
    var9.backgroundColor = var14;
    var3.profileBackground = var9;
    var9 = {};
    var9.backgroundColor = var13;
    var3.friendBackground = var9;
    var9 = {};
    var9.backgroundColor = var12;
    var3.messageBackground = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var10;
    var3.guildGridBackground = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun103651: for (var _fun103651_ip = 0;;) switch (_fun103651_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.item;
                var _closure2_slot0 = var9;
                var11 = var0.compactMode;
                var _closure2_slot1 = var11;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot9;
                var5 = var1.bind(var3)(var11);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 20;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.analyticsLocations;
                var _closure2_slot2 = var10;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                var6 = var9.other_user;
                var7 = null;
                var8 = var7 == var6;
                var4 = undefined;
                if (var8) {
                    _fun103651_ip = 110;
                    continue _fun103651
                }
            case 105:
                var4 = var6.id;
            case 110:
                _closure2_slot3 = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 21;
                var4 = var8[var4];
                var12 = var6.bind(var3)(var4);
                var8 = var12.useStateFromStores;
                var4 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var2
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var8.bind(var12)(var6, var4);
                _closure2_slot4 = var12;
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var4 = new Array(6);
                var4[0] = var12;
                var4[1] = var11;
                var11 = var9.acked;
                var4[2] = var11;
                var11 = var9.guild_id;
                var4[3] = var11;
                var11 = var9.message_id;
                var4[4] = var11;
                var4[5] = var10;
                var2 = function() { // Environment: var2
                    _fun103653: for (var _fun103653_ip = 0;;) switch (_fun103653_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun103653_ip = 216;
                                continue _fun103653
                            }
                        case 19:
                            var4 = _closure1_slot8;
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 22;
                            var1 = var12[var1];
                            var3 = undefined;
                            var1 = var10.bind(var3)(var1);
                            var2 = var1.PressableOpacity;
                            var1 = {};
                            var5 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 23;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var4 = _closure2_slot4;
                                var4 = var4.id;
                                var1.userId = var4;
                                var4 = _closure2_slot4;
                                var1.localUser = var4;
                                var4 = _closure2_slot0;
                                var4 = var4.message_id;
                                var1.messageId = var4;
                                var3 = _closure2_slot2;
                                var1.sourceAnalyticsLocations = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var5;
                            var6 = _closure1_slot1;
                            var11 = 24;
                            var5 = var12[var11];
                            var6 = var6.bind(var3)(var5);
                            var5 = {};
                            var8 = 25;
                            var8 = var12[var8];
                            var14 = var10.bind(var3)(var8);
                            var13 = var14.getAvatarSource;
                            var18 = _closure2_slot4;
                            var8 = _closure2_slot0;
                            var17 = var8.guild_id;
                            var15 = var8.acked;
                            var19 = var14;
                            var16 = undefined;
                            var8 = var19[var13](var18, var17, var16, var15, var14);
                            var5.source = var8;
                            var8 = _closure2_slot1;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var9 = var10.bind(var3)(var9);
                            var9 = var9.AvatarSizes;
                            if (var8) {
                                _fun103653_ip = 175;
                                continue _fun103653
                            }
                        case 167:
                            var8 = var9.LARGE_48;
                            _fun103653_ip = 181;
                            continue _fun103653;
                        case 175:
                            var8 = var9.REFRESH_MEDIUM_32;
                        case 181:
                            var5.size = var8;
                            var7 = _closure2_slot4;
                            var7 = var7.avatarDecoration;
                            var5.avatarDecoration = var7;
                            var5 = var4.bind(var3)(var6, var5);
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 216:
                            return var0;
                    }
                };
                var8 = var6.bind(var8)(var2, var4);
                var2 = var9.icon_name;
                if (!(var7 == var2)) {
                    _fun103651_ip = 1709;
                    continue _fun103651
                }
            case 248:
                var2 = var9.icon_url;
                if (!(var7 == var2)) {
                    _fun103651_ip = 1620;
                    continue _fun103651
                }
            case 261:
                var2 = var7 != var8;
                var4 = var8;
                var6 = null;
                if (var2) {
                    _fun103651_ip = 1811;
                    continue _fun103651
                }
            case 276:
                var10 = var9.type;
                var2 = 'lifecycle_item';
                if (!(var2 !== var10)) {
                    _fun103651_ip = 1006;
                    continue _fun103651
                }
            case 294:
                var11 = _closure1_slot6;
                var10 = var11.getGuild;
                var2 = var9.guild_id;
                var10 = var10.bind(var11)(var2);
                var2 = var7 != var10;
                var14 = null;
                if (!var2) {
                    _fun103651_ip = 331;
                    continue _fun103651
                }
            case 322:
                var2 = _closure1_slot5;
                var14 = var2.bind(var3)(var10);
            case 331:
                var10 = var9.type;
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var12 = 9;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.MISSED_MESSAGES;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 750;
                    continue _fun103651
                }
            case 375:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.FRIEND_REQUEST_REMINDER;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 704;
                    continue _fun103651
                }
            case 411:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.GUILD_SCHEDULED_EVENT_STARTED;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 647;
                    continue _fun103651
                }
            case 447:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.TOP_MESSAGES;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 647;
                    continue _fun103651
                }
            case 483:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.MISSED_MESSAGES;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 647;
                    continue _fun103651
                }
            case 519:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var11.bind(var3)(var2);
                var2 = var2.NotificationCenterItems;
                var2 = var2.TOP_MESSAGES;
                if (!(var2 !== var10)) {
                    _fun103651_ip = 598;
                    continue _fun103651
                }
            case 552:
                var2 = {};
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 14;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var2.icon = var10;
                var10 = var1.fallbackImage;
                var10 = var10.color;
                var2.color = var10;
                _fun103651_ip = 794;
                continue _fun103651;
            case 598:
                var10 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 13;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var10.icon = var11;
                var11 = var1.fallbackImage;
                var11 = var11.color;
                var10.color = var11;
                var2 = var10;
                _fun103651_ip = 794;
                continue _fun103651;
            case 647:
                var10 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 12;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var10.icon = var11;
                var11 = var1.fallbackImageV2;
                var11 = var11.color;
                var10.color = var11;
                var11 = var1.guildGridBackground;
                var10.backgroundStyle = var11;
                var2 = var10;
                _fun103651_ip = 794;
                continue _fun103651;
            case 704:
                var10 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 11;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var10.icon = var11;
                var11 = var1.fallbackImage;
                var11 = var11.color;
                var10.color = var11;
                var2 = var10;
                _fun103651_ip = 794;
                continue _fun103651;
            case 750:
                var10 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 10;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var10.icon = var11;
                var11 = var1.fallbackImage;
                var11 = var11.color;
                var10.color = var11;
                var2 = var10;
            case 794:
                var11 = var2.icon;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 12;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                if (!(var11 === var10)) {
                    _fun103651_ip = 827;
                    continue _fun103651
                }
            case 823:
                if (!(var7 == var14)) {
                    _fun103651_ip = 879;
                    continue _fun103651
                }
            case 827:
                var12 = _closure1_slot8;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 17;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var13 = var2.icon;
                var10.source = var13;
                var13 = var2.color;
                var10.color = var13;
                var10 = var12.bind(var3)(var11, var10);
                _fun103651_ip = 979;
                continue _fun103651;
            case 879:
                var13 = _closure1_slot8;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 26;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {};
                var16 = var14.length;
                var15 = 4;
                var16 = var16 > var15;
                var15 = 'text-lg/normal';
                if (!var16) {
                    _fun103651_ip = 937;
                    continue _fun103651
                }
            case 931:
                var15 = 'text-md/normal';
            case 937:
                var11.variant = var15;
                var16 = var5.rowImage;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var5.guildFallbackImage;
                var15[1] = var16;
                var11.style = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 979:
                var2 = var2.backgroundStyle;
                if (!(var7 == var2)) {
                    _fun103651_ip = 995;
                    continue _fun103651
                }
            case 989:
                var2 = var1.brandBackground;
            case 995:
                var6 = var2;
                var4 = var10;
                _fun103651_ip = 1811;
                continue _fun103651;
            case 1006:
                var10 = var9.item_enum;
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 9;
                var2 = var2[var13];
                var2 = var11.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.UPDATE_PROFILE;
                if (!(var10 !== var2)) {
                    _fun103651_ip = 1378;
                    continue _fun103651
                }
            case 1051:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var11.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.FIND_FRIENDS;
                if (!(var10 !== var2)) {
                    _fun103651_ip = 1272;
                    continue _fun103651
                }
            case 1087:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var11.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.ADD_FRIEND;
                if (!(var10 !== var2)) {
                    _fun103651_ip = 1272;
                    continue _fun103651
                }
            case 1123:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var11.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.FIRST_MESSAGE;
                if (!(var10 !== var2)) {
                    _fun103651_ip = 1206;
                    continue _fun103651
                }
            case 1156:
                var11 = _closure1_slot8;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 17;
                var2 = var15[var2];
                var10 = var14.bind(var3)(var2);
                var2 = {};
                var12 = 14;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var2.source = var12;
                var10 = var11.bind(var3)(var10, var2);
                _fun103651_ip = 1270;
                continue _fun103651;
            case 1206:
                var12 = _closure1_slot8;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 15;
                var2 = var16[var2];
                var11 = var15.bind(var3)(var2);
                var2 = {};
                var14 = 19;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var2.source = var14;
                var14 = {};
                var15 = '105%';
                var14.width = var15;
                var2.style = var14;
                var10 = var12.bind(var3)(var11, var2);
            case 1270:
                _fun103651_ip = 1376;
                continue _fun103651;
            case 1272:
                var12 = _closure1_slot8;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 17;
                var2 = var16[var14];
                var11 = var15.bind(var3)(var2);
                var2 = {};
                var17 = 18;
                var17 = var16[var17];
                var17 = var15.bind(var3)(var17);
                var2.source = var17;
                var17 = _closure1_slot0;
                var14 = var16[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.IconSizes;
                var14 = var14.SMALL_20;
                var2.size = var14;
                var14 = 8;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.unsafe_rawColors;
                var14 = var14.WHITE;
                var2.color = var14;
                var10 = var12.bind(var3)(var11, var2);
            case 1376:
                _fun103651_ip = 1426;
                continue _fun103651;
            case 1378:
                var12 = _closure1_slot8;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 15;
                var2 = var16[var2];
                var11 = var15.bind(var3)(var2);
                var2 = {};
                var14 = 16;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var2.source = var14;
                var10 = var12.bind(var3)(var11, var2);
            case 1426:
                var11 = var9.item_enum;
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.UPDATE_PROFILE;
                if (!(var11 !== var2)) {
                    _fun103651_ip = 1591;
                    continue _fun103651
                }
            case 1468:
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.FIND_FRIENDS;
                if (!(var11 !== var2)) {
                    _fun103651_ip = 1583;
                    continue _fun103651
                }
            case 1501:
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.ADD_FRIEND;
                if (!(var11 !== var2)) {
                    _fun103651_ip = 1583;
                    continue _fun103651
                }
            case 1534:
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ItemEnum;
                var2 = var2.FIRST_MESSAGE;
                if (!(var11 !== var2)) {
                    _fun103651_ip = 1575;
                    continue _fun103651
                }
            case 1567:
                var11 = var1.brandBackground;
                _fun103651_ip = 1581;
                continue _fun103651;
            case 1575:
                var11 = var1.messageBackground;
            case 1581:
                _fun103651_ip = 1589;
                continue _fun103651;
            case 1583:
                var11 = var1.friendBackground;
            case 1589:
                _fun103651_ip = 1597;
                continue _fun103651;
            case 1591:
                var11 = var1.profileBackground;
            case 1597:
                var12 = var7 != var11;
                var2 = null;
                if (!var12) {
                    _fun103651_ip = 1609;
                    continue _fun103651
                }
            case 1606:
                var2 = var11;
            case 1609:
                var6 = var2;
                var4 = var10;
                _fun103651_ip = 1811;
                continue _fun103651;
            case 1620:
                var2 = var7 != var8;
                var4 = var8;
                var6 = null;
                if (var2) {
                    _fun103651_ip = 1811;
                    continue _fun103651
                }
            case 1635:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var7 = var7.bind(var3)(var2);
                var2 = {};
                var10 = var5.rowImage;
                var2.style = var10;
                var10 = {};
                var11 = var9.icon_url;
                var10.uri = var11;
                var2.source = var10;
                var10 = 'contain';
                var2.resizeMode = var10;
                var4 = var8.bind(var3)(var7, var2);
                var6 = var1.brandBackground;
                _fun103651_ip = 1811;
                continue _fun103651;
            case 1709:
                var8 = _closure1_slot8;
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 17;
                var2 = var7[var2];
                var7 = var10.bind(var3)(var2);
                var2 = {};
                var11 = var9.icon_name;
                var9 = 'icHighlight';
                if (!(var9 !== var11)) {
                    _fun103651_ip = 1764;
                    continue _fun103651
                }
            case 1751:
                var11 = _closure1_slot2;
                var9 = 14;
                var9 = var11[var9];
                _fun103651_ip = 1775;
                continue _fun103651;
            case 1764:
                var12 = _closure1_slot2;
                var11 = 13;
                var9 = var12[var11];
            case 1775:
                var9 = var10.bind(var3)(var9);
                var2.source = var9;
                var9 = var1.fallbackImage;
                var9 = var9.color;
                var2.color = var9;
                var4 = var8.bind(var3)(var7, var2);
                var6 = var1.brandBackground;
            case 1811:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var5.container;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouItemImage.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ForYouItemImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1416, 1410, 1613, 13483, 33, 1297, 671, 3925, 8340, 13484, 13485, 13486, 13487, 4660, 13488, 4039, 10244, 13489, 5684, 566, 4858, 7310, 5409, 5695, 3895, 2]);