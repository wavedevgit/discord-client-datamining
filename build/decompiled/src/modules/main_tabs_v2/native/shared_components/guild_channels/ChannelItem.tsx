// modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105482: for (var _fun105482_ip = 0;;) switch (_fun105482_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channel;
                var _closure2_slot0 = var13;
                var10 = var1.layout;
                var1 = _closure1_slot9;
                var3 = undefined;
                var7 = var1.bind(var3)(var10);
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 8;
                var1 = var9[var11];
                var2 = var12.bind(var3)(var1);
                var1 = var2.getLayoutStyles;
                var16 = var1.bind(var2)(var10);
                var1 = 9;
                var1 = var9[var1];
                var4 = var12.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var5 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = _closure1_slot6;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var7.guildBadgeIcon;
                var4.style = var7;
                var15 = _closure1_slot6;
                var14 = _closure1_slot1;
                var7 = 10;
                var7 = var9[var7];
                var14 = var14.bind(var3)(var7);
                var7 = {};
                var7.guild = var17;
                var16 = var16.icon;
                var16 = var16.guildBadgeIconSize;
                var7.size = var16;
                var7 = var15.bind(var3)(var14, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var5 = 11;
                var5 = var9[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.ChannelIcon;
                var5 = {};
                var5.channel = var13;
                var9 = var9[var11];
                var12 = var12.bind(var3)(var9);
                var9 = var12.isLayoutCozy;
                var12 = var9.bind(var12)(var10);
                var9 = 'sm';
                if (!var12) {
                    _fun105482_ip = 261;
                    continue _fun105482
                }
            case 257:
                var9 = 'md';
            case 261:
                var5.size = var9;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var9 = var9.bind(var3)(var8);
                var8 = var9.isLayoutCozy;
                var9 = var8.bind(var9)(var10);
                var8 = 32;
                if (!var9) {
                    _fun105482_ip = 302;
                    continue _fun105482
                }
            case 299:
                var8 = 48;
            case 302:
                var5.wrapperSize = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun105484: for (var _fun105484_ip = 0;;) switch (_fun105484_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'position': 'absolute',
                    'zIndex': 1,
                    'bottom': 4294967292,
                    'right': 4294967292,
                    'borderColor': null,
                    'borderWidth': 2
                };
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 7;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.BACKGROUND_BASE_LOW;
                var1.borderColor = var3;
                var3 = _closure1_slot0;
                var2 = 8;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.isLayoutCozy;
                var2 = arg0;
                var3 = var3.bind(var4)(var2);
                var2 = 6;
                if (!var3) {
                    _fun105484_ip = 97;
                    continue _fun105484
                }
            case 94:
                var2 = 9;
            case 97:
                var1.borderRadius = var2;
                var0.guildBadgeIcon = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.channel;
        var7 = var0.unread;
        var6 = var0.mentionCount;
        var5 = var0.userCount;
        var4 = var0.embeddedActivitiesCount;
        var0 = {
            'accessible': true,
            'accessibilityRole': 'button'
        };
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1.channel = var8;
        var1.unread = var7;
        var1.mentionCount = var6;
        var1.userCount = var5;
        var1.embeddedActivitiesCount = var4;
        var1 = var2.bind(var3)(var1);
        var0.accessibilityLabel = var1;
        return var0;
    };
    var2.getChannelAccessibilityProps = var3;
    var1 = function arg0() {
        _fun105486: for (var _fun105486_ip = 0;;) switch (_fun105486_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var30 = var0.subtitle;
                var14 = var0.unreadBadge;
                var21 = var0.mentionBadge;
                var25 = var0.locked;
                var10 = undefined;
                if (!(var25 === var10)) {
                    _fun105486_ip = 40;
                    continue _fun105486
                }
            case 38:
                var25 = false;
            case 40:
                var29 = var0.unread;
                if (!(var29 === var10)) {
                    _fun105486_ip = 52;
                    continue _fun105486
                }
            case 50:
                var29 = false;
            case 52:
                var28 = var0.resolvedUnreadSetting;
                if (!(var28 === var10)) {
                    _fun105486_ip = 75;
                    continue _fun105486
                }
            case 62:
                var1 = _closure1_slot5;
                var28 = var1.ONLY_MENTIONS;
            case 75:
                var23 = var0.live;
                if (!(var23 === var10)) {
                    _fun105486_ip = 87;
                    continue _fun105486
                }
            case 85:
                var23 = false;
            case 87:
                var27 = var0.muted;
                if (!(var27 === var10)) {
                    _fun105486_ip = 99;
                    continue _fun105486
                }
            case 97:
                var27 = false;
            case 99:
                var2 = var0.latestMessageTimestamp;
                var7 = var0.layout;
                var16 = var0.end;
                var24 = var0.connected;
                var22 = var0.mentionCount;
                var6 = var0.launchpad;
                var31 = var0.channelName;
                var5 = var0.fontScale;
                var20 = var0.isSubscriptionGated;
                if (!(var20 === var10)) {
                    _fun105486_ip = 158;
                    continue _fun105486
                }
            case 156:
                var20 = false;
            case 158:
                var19 = var0.needSubscriptionToAccess;
                if (!(var19 === var10)) {
                    _fun105486_ip = 170;
                    continue _fun105486
                }
            case 168:
                var19 = false;
            case 170:
                var4 = var0.panelVariant;
                if (!(var4 === var10)) {
                    _fun105486_ip = 182;
                    continue _fun105486
                }
            case 180:
                var4 = false;
            case 182:
                var12 = null;
                var0 = var12 == var2;
                var26 = null;
                if (var0) {
                    _fun105486_ip = 232;
                    continue _fun105486
                }
            case 193:
                var26 = null;
                if (var27) {
                    _fun105486_ip = 232;
                    continue _fun105486
                }
            case 198:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var1 = var1.bind(var10)(var0);
                var0 = var1.getRelativeTimestamp;
                var26 = var0.bind(var1)(var2);
            case 232:
                var34 = _closure1_slot0;
                var33 = _closure1_slot2;
                var18 = 8;
                var0 = var33[var18];
                var1 = var34.bind(var10)(var0);
                var0 = var1.getLayoutStyles;
                var36 = var0.bind(var1)(var7);
                var0 = 13;
                var0 = var33[var0];
                var3 = var34.bind(var10)(var0);
                var2 = var3.renderChannelWrapper;
                var9 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var11 = new Array(4);
                var11[0] = var14;
                var17 = _closure1_slot6;
                var15 = _closure1_slot3;
                var14 = {};
                var32 = {
                    'position': 'relative',
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'flexShrink': 0,
                    'flexGrow': 0
                };
                var37 = _closure1_slot1;
                var35 = 7;
                var35 = var33[var35];
                var35 = var37.bind(var10)(var35);
                var35 = var35.radii;
                var35 = var35.round;
                var32.borderRadius = var35;
                var33 = var33[var18];
                var35 = var34.bind(var10)(var33);
                var34 = var35.makeSizeStyle;
                var33 = var36.icon;
                var33 = var33.wrapper;
                var33 = var33.size;
                var38 = var34.bind(var35)(var33);
                var39 = var32;
                var33 = copyDataProperties(var39, var38);
                var33 = var36.icon;
                var38 = var33.margin;
                var39 = var32;
                var33 = copyDataProperties(var39, var38);
                var14.style = var32;
                var32 = var8.isGroupDM;
                var32 = var32.bind(var8)();
                var35 = _closure1_slot6;
                if (var32) {
                    _fun105486_ip = 463;
                    continue _fun105486
                }
            case 440:
                var33 = _closure1_slot10;
                var32 = {};
                var32.channel = var8;
                var32.layout = var7;
                var32 = var35.bind(var10)(var33, var32);
                _fun105486_ip = 510;
                continue _fun105486;
            case 463:
                var34 = _closure1_slot1;
                var37 = _closure1_slot2;
                var33 = 14;
                var33 = var37[var33];
                var34 = var34.bind(var10)(var33);
                var33 = {};
                var33.channel = var8;
                var36 = var36.icon;
                var36 = var36.avatarSize;
                var33.size = var36;
                var32 = var35.bind(var10)(var34, var33);
            case 510:
                var14.children = var32;
                var14 = var17.bind(var10)(var15, var14);
                var11[1] = var14;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 15;
                var14 = var17[var14];
                var17 = var15.bind(var10)(var14);
                var15 = var17.renderChannelContent;
                var14 = {};
                var14.layout = var7;
                if (!(var12 == var31)) {
                    _fun105486_ip = 566;
                    continue _fun105486
                }
            case 561:
                var31 = var8.name;
            case 566:
                var14.name = var31;
                var14.subtitle = var30;
                var14.unread = var29;
                var14.resolvedUnreadSetting = var28;
                var14.muted = var27;
                var14.lastMessageTimestampString = var26;
                var14.channel = var8;
                var14.locked = var25;
                var14.connected = var24;
                var14.live = var23;
                var14.mentionCount = var22;
                var14.mentionBadge = var21;
                var14.isSubscriptionGated = var20;
                var14.needSubscriptionToAccess = var19;
                var14 = var15.bind(var17)(var14);
                var11[2] = var14;
                var14 = var12 != var16;
                var12 = null;
                if (!var14) {
                    _fun105486_ip = 683;
                    continue _fun105486
                }
            case 652:
                var15 = _closure1_slot6;
                var14 = _closure1_slot3;
                var13 = {};
                var17 = {};
                var17.paddingLeft = var18;
                var13.style = var17;
                var13.children = var16;
                var12 = var15.bind(var10)(var14, var13);
            case 683:
                var11[3] = var12;
                var0.children = var11;
                var1 = var9.bind(var10)(var1, var0);
                var0 = {};
                var0.channel = var8;
                var0.layout = var7;
                var0.launchpad = var6;
                var0.fontScale = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.renderChannelItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 4304, 33, 7878, 1297, 671, 8804, 566, 7396, 13742, 4222, 13498, 9042, 13739, 2]);