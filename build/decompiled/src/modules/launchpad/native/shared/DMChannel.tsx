// modules/launchpad/native/shared/DMChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: usePrivateChannelPressEvents, environment: var1
        var2 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var4;
        var0 = {};
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var8 = var2.id;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var4;
        var4 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.transitionToChannel;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = {};
            var5 = _closure2_slot1;
            var1.navigationReplace = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4 = var6.bind(var7)(var4, var5);
        var0.onPress = var4;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var5 = var2.id;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.openChannelLongPressActionSheet;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.onLongPress = var1;
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.pressable = var9;
    var9 = {};
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var10;
    var3.pressableUnderlayColor = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: DMChannel, environment: var1
        _fun110499: for (var _fun110499_ip = 0;;) switch (_fun110499_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var15 = var0.muted;
                var2 = undefined;
                if (!(var15 === var2)) {
                    _fun110499_ip = 22;
                    continue _fun110499
                }
            case 20:
                var15 = false;
            case 22:
                var6 = var0.navigationReplace;
                if (!(var6 === var2)) {
                    _fun110499_ip = 34;
                    continue _fun110499
                }
            case 32:
                var6 = false;
            case 34:
                var0 = _closure1_slot6;
                var5 = var0.bind(var2)();
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var21 = var0.bind(var2)();
                var4 = _closure1_slot0;
                var0 = 8;
                var0 = var3[var0];
                var4 = var4.bind(var2)(var0);
                var0 = var4.useBaseChannelUnreadBadgeState;
                var0 = var0.bind(var4)(var9, var15);
                var16 = var0.unread;
                var12 = var0.mentionCount;
                var0 = 9;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.unread = var16;
                var19 = var1.bind(var2)(var9, var0);
                var11 = null;
                var0 = var11 != var19;
                var10 = undefined;
                if (!var0) {
                    _fun110499_ip = 181;
                    continue _fun110499
                }
            case 145:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = var1.bind(var2)(var0);
                var1 = var3.extractTimestamp;
                var0 = var19.id;
                var10 = var1.bind(var3)(var0);
            case 181:
                var0 = 'text-muted';
                var18 = var0;
                if (!var16) {
                    _fun110499_ip = 205;
                    continue _fun110499
                }
            case 193:
                var18 = var0;
                if (var15) {
                    _fun110499_ip = 205;
                    continue _fun110499
                }
            case 199:
                var18 = 'text-default';
            case 205:
                var3 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 11;
                var0 = var17[var0];
                var1 = var3.bind(var2)(var0);
                var0 = var1.useFontScale;
                var7 = var0.bind(var1)();
                var13 = _closure1_slot1;
                var0 = 12;
                var0 = var17[var0];
                var1 = var13.bind(var2)(var0);
                var4 = _closure1_slot5;
                var0 = 13;
                var0 = var17[var0];
                var0 = var3.bind(var2)(var0);
                var3 = var0.PressableHighlight;
                var0 = {};
                var20 = var5.pressable;
                var14 = new Array(2);
                var14[0] = var20;
                var20 = {};
                var21 = var21.container;
                var21 = var21.borderRadius;
                var20.borderRadius = var21;
                var14[1] = var20;
                var0.style = var14;
                var5 = var5.pressableUnderlayColor;
                var5 = var5.backgroundColor;
                var0.underlayColor = var5;
                var5 = _closure1_slot7;
                var22 = var5.bind(var2)(var9, var6);
                var23 = var0;
                var5 = copyDataProperties(var23, var22);
                var5 = 14;
                var5 = var17[var5];
                var6 = var13.bind(var2)(var5);
                var5 = {};
                var5.channel = var9;
                var5.unread = var16;
                var14 = _closure1_slot4;
                var20 = var14.ALL_MESSAGES;
                var5.resolvedUnreadSetting = var20;
                var5.muted = var15;
                var5.mentionCount = var12;
                var12 = 15;
                var12 = var17[var12];
                var13 = var13.bind(var2)(var12);
                var12 = {};
                var12.unread = var16;
                var14 = var14.ALL_MESSAGES;
                var12.resolvedUnreadSetting = var14;
                var12.muted = var15;
                var12 = var4.bind(var2)(var13, var12);
                var5.unreadBadge = var12;
                var11 = var11 != var19;
                if (!var11) {
                    _fun110499_ip = 531;
                    continue _fun110499
                }
            case 447:
                var14 = _closure1_slot5;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 16;
                var12 = var17[var12];
                var12 = var16.bind(var2)(var12);
                var13 = var12.ChannelRowPreview;
                var12 = {};
                var12.channel = var9;
                var12.message = var19;
                var12.color = var18;
                var12.muted = var15;
                var15 = 17;
                var15 = var17[var15];
                var15 = var16.bind(var2)(var15);
                var15 = var15.ChannelListLayoutTypes;
                var15 = var15.COMPACT;
                var12.layout = var15;
                var11 = var14.bind(var2)(var13, var12);
            case 531:
                var5.subtitle = var11;
                var5.latestMessageTimestamp = var10;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 18;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.bind(var2)(var9);
                var5.channelName = var8;
                var5.fontScale = var7;
                var6 = var6.bind(var2)(var5);
                var5 = 'children';
                var0[var5] = var6;
                var0 = var4.bind(var2)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/DMChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4261, 33, 3897, 9053, 1297, 671, 14167, 13172, 10810, 21, 4043, 14168, 4858, 14180, 14171, 8732, 8745, 4748, 2]);