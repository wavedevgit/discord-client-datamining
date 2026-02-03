// modules/launchpad/native/shared/renderChannelItem.tsx
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
        var1 = arg0;
        var8 = var1.channel;
        var _closure2_slot0 = var8;
        var1 = _closure1_slot9;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var12 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 8;
        var1 = var9[var1];
        var1 = var12.bind(var3)(var1);
        var14 = var1.bind(var3)();
        var6 = _closure1_slot0;
        var1 = 9;
        var1 = var9[var1];
        var4 = var6.bind(var3)(var1);
        var2 = var4.useStateFromStores;
        var7 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var0.guild_id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var15 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var0 = {};
        var10 = _closure1_slot6;
        var7 = _closure1_slot3;
        var4 = {};
        var11 = var11.guildBadgeIcon;
        var4.style = var11;
        var13 = _closure1_slot6;
        var11 = 10;
        var11 = var9[var11];
        var12 = var12.bind(var3)(var11);
        var11 = {};
        var11.guild = var15;
        var14 = var14.icon;
        var14 = var14.guildBadgeIconSize;
        var11.size = var14;
        var11 = var13.bind(var3)(var12, var11);
        var4.children = var11;
        var7 = var10.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot6;
        var5 = 11;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.ChannelIcon;
        var5 = {
            'channel': null,
            'size': 'sm',
            'wrapperSize': 32
        };
        var5.channel = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'position': 'absolute',
            'zIndex': 1,
            'bottom': 4294967292,
            'right': 4294967292,
            'borderColor': null,
            'borderWidth': 2,
            'borderRadius': 6
        };
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_BASE_LOW;
        var1.borderColor = var2;
        var0.guildBadgeIcon = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/renderChannelItem.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun110053: for (var _fun110053_ip = 0;;) switch (_fun110053_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var21 = var0.channelCategoryName;
                var26 = var0.subtitle;
                var10 = var0.unreadBadge;
                var16 = var0.mentionBadge;
                var20 = var0.locked;
                var3 = undefined;
                if (!(var20 === var3)) {
                    _fun110053_ip = 46;
                    continue _fun110053
                }
            case 44:
                var20 = false;
            case 46:
                var25 = var0.unread;
                if (!(var25 === var3)) {
                    _fun110053_ip = 58;
                    continue _fun110053
                }
            case 56:
                var25 = false;
            case 58:
                var24 = var0.resolvedUnreadSetting;
                if (!(var24 === var3)) {
                    _fun110053_ip = 81;
                    continue _fun110053
                }
            case 68:
                var1 = _closure1_slot5;
                var24 = var1.ONLY_MENTIONS;
            case 81:
                var18 = var0.live;
                if (!(var18 === var3)) {
                    _fun110053_ip = 93;
                    continue _fun110053
                }
            case 91:
                var18 = false;
            case 93:
                var23 = var0.muted;
                if (!(var23 === var3)) {
                    _fun110053_ip = 105;
                    continue _fun110053
                }
            case 103:
                var23 = false;
            case 105:
                var2 = var0.latestMessageTimestamp;
                var12 = var0.end;
                var19 = var0.connected;
                var17 = var0.mentionCount;
                var27 = var0.channelName;
                var4 = var0.fontScale;
                var15 = var0.isSubscriptionGated;
                if (!(var15 === var3)) {
                    _fun110053_ip = 152;
                    continue _fun110053
                }
            case 150:
                var15 = false;
            case 152:
                var13 = var0.needSubscriptionToAccess;
                if (!(var13 === var3)) {
                    _fun110053_ip = 164;
                    continue _fun110053
                }
            case 162:
                var13 = false;
            case 164:
                var8 = null;
                var0 = var8 == var2;
                var22 = null;
                if (var0) {
                    _fun110053_ip = 214;
                    continue _fun110053
                }
            case 175:
                var22 = null;
                if (var23) {
                    _fun110053_ip = 214;
                    continue _fun110053
                }
            case 180:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getRelativeTimestamp;
                var22 = var0.bind(var1)(var2);
            case 214:
                var31 = _closure1_slot1;
                var32 = _closure1_slot2;
                var14 = 8;
                var0 = var32[var14];
                var0 = var31.bind(var3)(var0);
                var33 = var0.bind(var3)();
                var0 = 13;
                var0 = var32[var0];
                var2 = var31.bind(var3)(var0);
                var6 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var7 = new Array(4);
                var7[0] = var10;
                var28 = _closure1_slot6;
                var11 = _closure1_slot3;
                var10 = {};
                var29 = {
                    'position': 'relative',
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'flexShrink': 0,
                    'flexGrow': 0
                };
                var30 = 7;
                var30 = var32[var30];
                var30 = var31.bind(var3)(var30);
                var30 = var30.radii;
                var30 = var30.round;
                var29.borderRadius = var30;
                var30 = var33.icon;
                var30 = var30.wrapper;
                var30 = var30.size;
                var29.width = var30;
                var30 = var33.icon;
                var30 = var30.wrapper;
                var30 = var30.size;
                var29.height = var30;
                var30 = var33.icon;
                var35 = var30.margin;
                var36 = var29;
                var30 = copyDataProperties(var36, var35);
                var10.style = var29;
                var29 = var5.isGroupDM;
                var29 = var29.bind(var5)();
                var32 = _closure1_slot6;
                if (var29) {
                    _fun110053_ip = 420;
                    continue _fun110053
                }
            case 402:
                var30 = _closure1_slot10;
                var29 = {};
                var29.channel = var5;
                var29 = var32.bind(var3)(var30, var29);
                _fun110053_ip = 467;
                continue _fun110053;
            case 420:
                var31 = _closure1_slot1;
                var34 = _closure1_slot2;
                var30 = 14;
                var30 = var34[var30];
                var31 = var31.bind(var3)(var30);
                var30 = {};
                var30.channel = var5;
                var33 = var33.icon;
                var33 = var33.avatarSize;
                var30.size = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 467:
                var10.children = var29;
                var10 = var28.bind(var3)(var11, var10);
                var7[1] = var10;
                var11 = _closure1_slot1;
                var28 = _closure1_slot2;
                var10 = 15;
                var10 = var28[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                if (!(var8 == var27)) {
                    _fun110053_ip = 512;
                    continue _fun110053
                }
            case 507:
                var27 = var5.name;
            case 512:
                var10.name = var27;
                var10.subtitle = var26;
                var10.unread = var25;
                var10.resolvedUnreadSetting = var24;
                var10.muted = var23;
                var10.lastMessageTimestampString = var22;
                var10.channel = var5;
                var10.channelCategoryName = var21;
                var10.locked = var20;
                var10.connected = var19;
                var10.live = var18;
                var10.mentionCount = var17;
                var10.mentionBadge = var16;
                var10.isSubscriptionGated = var15;
                var10.needSubscriptionToAccess = var13;
                var10 = var11.bind(var3)(var10);
                var7[2] = var10;
                var10 = var8 != var12;
                var8 = null;
                if (!var10) {
                    _fun110053_ip = 634;
                    continue _fun110053
                }
            case 603:
                var11 = _closure1_slot6;
                var10 = _closure1_slot3;
                var9 = {};
                var13 = {};
                var13.paddingLeft = var14;
                var9.style = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 634:
                var7[3] = var8;
                var0.children = var7;
                var1 = var6.bind(var3)(var1, var0);
                var0 = {};
                var0.channel = var5;
                var0.fontScale = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
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
    var2.getChannelAccessibilityProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 4300, 33, 7870, 1297, 671, 14154, 566, 7388, 13730, 4218, 14156, 9020, 14159, 2]);