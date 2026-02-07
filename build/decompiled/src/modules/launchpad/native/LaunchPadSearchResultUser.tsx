// modules/launchpad/native/LaunchPadSearchResultUser.tsx
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
        _fun110722: for (var _fun110722_ip = 0;;) switch (_fun110722_ip) {
            case 0:
                var1 = arg0;
                var24 = var1.user;
                var _closure2_slot0 = var24;
                var19 = var1.comparator;
                var27 = var1.channel;
                var26 = var1.lastMessage;
                var18 = var1.unread;
                var2 = undefined;
                if (!(var18 === var2)) {
                    _fun110722_ip = 47;
                    continue _fun110722
                }
            case 45:
                var18 = false;
            case 47:
                var16 = var1.mentionCount;
                if (!(var16 === var2)) {
                    _fun110722_ip = 59;
                    continue _fun110722
                }
            case 57:
                var16 = 0;
            case 59:
                var17 = var1.muted;
                if (!(var17 === var2)) {
                    _fun110722_ip = 71;
                    continue _fun110722
                }
            case 69:
                var17 = false;
            case 71:
                var22 = var1.isTyping;
                if (!(var22 === var2)) {
                    _fun110722_ip = 83;
                    continue _fun110722
                }
            case 81:
                var22 = false;
            case 83:
                var1 = _closure1_slot15;
                var5 = var1.bind(var2)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var28 = var1.bind(var2)();
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var1 = var24.id;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.recipientIds = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var6.bind(var7)(var1, var3);
                var3 = _closure1_slot0;
                var1 = 14;
                var1 = var4[var1];
                var7 = var3.bind(var2)(var1);
                var1 = var7.useFontScale;
                var8 = var1.bind(var7)();
                var1 = 15;
                var7 = var4[var1];
                var11 = var3.bind(var2)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.locale;
                    return var0;
                };
                var15 = var10.bind(var11)(var9, var7);
                var7 = var4[var1];
                var11 = var3.bind(var2)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var25 = var10.bind(var11)(var9, var7);
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var3 = var4.useStateFromStoresObject;
                var7 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var5 = _closure1_slot7;
                    var4 = var5.isMobileOnline;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isMobileOnline = var3;
                    var5 = _closure1_slot7;
                    var4 = var5.isVROnline;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isVROnline = var3;
                    var5 = _closure1_slot7;
                    var4 = var5.getStatus;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.status = var3;
                    var3 = _closure1_slot7;
                    var2 = var3.getActivities;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.activities = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var1, var0);
                var32 = var0.isMobileOnline;
                var29 = var0.isVROnline;
                var31 = var0.status;
                var30 = var0.activities;
                var20 = null;
                var0 = var20 != var26;
                var3 = undefined;
                if (!var0) {
                    _fun110722_ip = 370;
                    continue _fun110722
                }
            case 334:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 16;
                var0 = var4[var0];
                var4 = var1.bind(var2)(var0);
                var1 = var4.extractTimestamp;
                var0 = var26.id;
                var3 = var1.bind(var4)(var0);
            case 370:
                var0 = var20 != var3;
                var14 = null;
                if (!var0) {
                    _fun110722_ip = 410;
                    continue _fun110722
                }
            case 379:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getRelativeTimestamp;
                var14 = var0.bind(var1)(var3);
            case 410:
                var0 = 'text-muted';
                var23 = var0;
                if (!var18) {
                    _fun110722_ip = 434;
                    continue _fun110722
                }
            case 422:
                var23 = var0;
                if (var17) {
                    _fun110722_ip = 434;
                    continue _fun110722
                }
            case 428:
                var23 = 'text-default';
            case 434:
                var12 = _closure1_slot1;
                var33 = _closure1_slot2;
                var0 = 18;
                var0 = var33[var0];
                var1 = var12.bind(var2)(var0);
                var4 = _closure1_slot12;
                var3 = _closure1_slot0;
                var0 = 19;
                var0 = var33[var0];
                var0 = var3.bind(var2)(var0);
                var3 = var0.PressableHighlight;
                var0 = {};
                var0.onPress = var6;
                var6 = var5.pressableUnderlayColor;
                var6 = var6.backgroundColor;
                var0.underlayColor = var6;
                var6 = var5.pressable;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var28.container;
                var7 = var7.borderRadius;
                var6.borderRadius = var7;
                var5[1] = var6;
                var0.style = var5;
                var5 = 20;
                var5 = var33[var5];
                var7 = var12.bind(var2)(var5);
                var9 = _closure1_slot14;
                var6 = _closure1_slot13;
                var5 = {};
                var21 = _closure1_slot12;
                var10 = 21;
                var10 = var33[var10];
                var11 = var12.bind(var2)(var10);
                var10 = {};
                var10.unread = var18;
                var34 = _closure1_slot11;
                var34 = var34.ALL_MESSAGES;
                var10.resolvedUnreadSetting = var34;
                var11 = var21.bind(var2)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var21 = _closure1_slot12;
                var11 = 22;
                var11 = var33[var11];
                var12 = var12.bind(var2)(var11);
                var11 = {};
                var11.user = var24;
                var11.guildId = var2;
                var11.isMobileOnline = var32;
                var11.isVROnline = var29;
                var29 = var24.isSystemUser;
                var32 = var29.bind(var24)();
                var29 = null;
                if (var32) {
                    _fun110722_ip = 684;
                    continue _fun110722
                }
            case 665:
                var32 = _closure1_slot10;
                var32 = var32.OFFLINE;
                var29 = null;
                if (!(var31 !== var32)) {
                    _fun110722_ip = 684;
                    continue _fun110722
                }
            case 681:
                var29 = var31;
            case 684:
                var11.status = var29;
                var31 = _closure1_slot1;
                var32 = _closure1_slot2;
                var29 = 23;
                var29 = var32[var29];
                var29 = var31.bind(var2)(var29);
                var29 = var29.bind(var2)(var30);
                var11.streaming = var29;
                var29 = var28.icon;
                var29 = var29.margin;
                var11.style = var29;
                var28 = var28.icon;
                var28 = var28.avatarSize;
                var11.size = var28;
                var25 = !var25;
                if (!var25) {
                    _fun110722_ip = 766;
                    continue _fun110722
                }
            case 754:
                var28 = var22;
                if (var28) {
                    _fun110722_ip = 763;
                    continue _fun110722
                }
            case 760:
                var28 = var18;
            case 763:
                var25 = var28;
            case 766:
                var11.animate = var25;
                var11.typing = var22;
                var22 = true;
                var11.autoStatusCutout = var22;
                var11 = var21.bind(var2)(var12, var11);
                var10[1] = var11;
                var12 = _closure1_slot1;
                var21 = _closure1_slot2;
                var11 = 24;
                var11 = var21[var11];
                var12 = var12.bind(var2)(var11);
                var11 = {};
                if (!(var20 == var19)) {
                    _fun110722_ip = 850;
                    continue _fun110722
                }
            case 819:
                var22 = _closure1_slot1;
                var25 = _closure1_slot2;
                var21 = 25;
                var21 = var25[var21];
                var22 = var22.bind(var2)(var21);
                var21 = var22.getUserTag;
                var19 = var21.bind(var22)(var24);
            case 850:
                var11.name = var19;
                var21 = var20 != var26;
                var19 = undefined;
                if (!var21) {
                    _fun110722_ip = 956;
                    continue _fun110722
                }
            case 863:
                var20 = var20 != var27;
                var19 = undefined;
                if (!var20) {
                    _fun110722_ip = 956;
                    continue _fun110722
                }
            case 872:
                var22 = _closure1_slot12;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var20 = 26;
                var20 = var25[var20];
                var20 = var24.bind(var2)(var20);
                var21 = var20.ChannelRowPreview;
                var20 = {};
                var20.channel = var27;
                var20.message = var26;
                var20.color = var23;
                var20.muted = var17;
                var23 = 27;
                var23 = var25[var23];
                var23 = var24.bind(var2)(var23);
                var23 = var23.ChannelListLayoutTypes;
                var23 = var23.COMPACT;
                var20.layout = var23;
                var19 = var22.bind(var2)(var21, var20);
            case 956:
                var11.subtitle = var19;
                var11.unread = var18;
                var18 = _closure1_slot11;
                var18 = var18.ALL_MESSAGES;
                var11.resolvedUnreadSetting = var18;
                var11.muted = var17;
                var11.lastMessageTimestampString = var14;
                var11.mentionCount = var16;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 28;
                var13 = var17[var13];
                var14 = var14.bind(var2)(var13);
                var13 = {};
                var13.mentionCount = var16;
                var13.locale = var15;
                var13 = var14.bind(var2)(var13);
                var11.mentionBadge = var13;
                var11 = var12.bind(var2)(var11);
                var10[2] = var11;
                var5.children = var10;
                var6 = var9.bind(var2)(var6, var5);
                var5 = {};
                var5.fontScale = var8;
                var5 = var7.bind(var2)(var6, var5);
                var0.children = var5;
                var0 = var4.bind(var2)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var0 = var4.user;
        var _closure2_slot0 = var0;
        var10 = var4.channel;
        var _closure2_slot1 = var10;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 15;
        var6 = var9[var2];
        var3 = undefined;
        var11 = var5.bind(var3)(var6);
        var8 = var11.useStateFromStores;
        var6 = _closure1_slot9;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var1
            var3 = _closure1_slot9;
            var2 = var3.isChannelMuted;
            var0 = _closure2_slot1;
            var1 = var0.id;
            var0 = undefined;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var6 = var8.bind(var11)(var7, var6);
        var7 = 29;
        var7 = var9[var7];
        var8 = var5.bind(var3)(var7);
        var7 = var8.useBaseChannelUnreadBadgeState;
        var7 = var7.bind(var8)(var10, var6);
        var8 = var7.unread;
        var7 = var7.mentionCount;
        var2 = var9[var2];
        var11 = var5.bind(var3)(var2);
        var5 = var11.useStateFromStores;
        var12 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var12;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot8;
            var2 = var3.isTyping;
            var1 = _closure2_slot1;
            var1 = var1.id;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var5.bind(var11)(var2, var1);
        var2 = _closure1_slot1;
        var1 = 30;
        var1 = var9[var1];
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1.unread = var8;
        var9 = var2.bind(var3)(var10, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot16;
        var0 = {};
        var14 = var0;
        var13 = var4;
        var4 = copyDataProperties(var14, var13);
        var4 = 'channel';
        var0[var4] = var10;
        var4 = 'lastMessage';
        var0[var4] = var9;
        var4 = 'unread';
        var0[var4] = var8;
        var4 = 'mentionCount';
        var0[var4] = var7;
        var4 = 'muted';
        var0[var4] = var6;
        var4 = 'isTyping';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.Fragment;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.pressable = var9;
    var9 = {};
    var10 = 11;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var10;
    var3.pressableUnderlayColor = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun110730: for (var _fun110730_ip = 0;;) switch (_fun110730_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.user;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var7 = var6[var2];
                var4 = undefined;
                var11 = var3.bind(var4)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var7;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getDMFromUserId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var _closure2_slot1 = var8;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun110730_ip = 142;
                    continue _fun110730
                }
            case 114:
                var3 = _closure1_slot12;
                var2 = _closure1_slot16;
                var0 = {};
                var13 = var0;
                var12 = var5;
                var7 = copyDataProperties(var13, var12);
                var0 = var3.bind(var4)(var2, var0);
                _fun110730_ip = 177;
                continue _fun110730;
            case 142:
                var3 = _closure1_slot12;
                var2 = _closure1_slot17;
                var1 = {};
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var5 = 'channel';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 177:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadSearchResultUser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1687, 1372, 3611, 11705, 4303, 660, 4304, 33, 1297, 671, 14234, 3946, 4090, 566, 21, 4222, 14235, 4904, 14236, 14238, 5504, 5787, 14239, 3237, 8860, 8873, 14241, 13243, 10976, 2]);