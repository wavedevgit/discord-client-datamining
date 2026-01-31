// modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun102186: for (var _fun102186_ip = 0;;) switch (_fun102186_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.indicator;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun102186_ip = 229;
                    continue _fun102186
                }
            case 18:
                var2 = var6.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.GuildPowerupNotificationIndicatorType;
                var1 = var1.WARNING;
                if (!(var1 !== var2)) {
                    _fun102186_ip = 150;
                    continue _fun102186
                }
            case 64:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var3.bind(var4)(var1);
                var1 = var1.GuildPowerupNotificationIndicatorType;
                var1 = var1.UNREAD;
                if (!(var1 !== var2)) {
                    _fun102186_ip = 99;
                    continue _fun102186
                }
            case 97:
                return var0;
            case 99:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var6.count;
                var1.value = var6;
                var6 = true;
                var1.isMentionLowImportance = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 150:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.CircleErrorIcon;
                var1 = {};
                var6 = _closure1_slot1;
                var5 = 6;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.STATUS_WARNING;
                var1.color = var5;
                var5 = 'sm';
                var1.size = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 229:
                return var0;
        }
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var9 = 8;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginVertical = var11;
    var8.marginHorizontal = var9;
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var8.borderRadius = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102187: for (var _fun102187_ip = 0;;) switch (_fun102187_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot6;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var6 = _closure1_slot3;
                var1 = var6.useRef;
                var10 = null;
                var4 = var1.bind(var6)(var10);
                var5 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.guildId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14 = var5.bind(var6)(var0, var1);
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var11 = var0.bind(var3)(var2);
                var0 = 11;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var5 = var10 == var11;
                var0 = undefined;
                if (var5) {
                    _fun102187_ip = 121;
                    continue _fun102187
                }
            case 115:
                var0 = var11.popout;
            case 121:
                var0 = var1.bind(var3)(var4, var2, var0);
                if (!(var10 != var11)) {
                    _fun102187_ip = 141;
                    continue _fun102187
                }
            case 132:
                var0 = var11.showUnread;
                if (var0) {
                    _fun102187_ip = 175;
                    continue _fun102187
                }
            case 141:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ChannelModes;
                var13 = var0.DEFAULT;
                _fun102187_ip = 207;
                continue _fun102187;
            case 175:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ChannelModes;
                var13 = var0.UNREAD_IMPORTANT;
            case 207:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var0.ref = var4;
                var12 = false;
                var0.collapsable = var12;
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var8 = 12;
                var4 = var4[var8];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onPress = var14;
                var9 = var9.container;
                var4.style = var9;
                var9 = true;
                var4.accessible = var9;
                var4.mode = var13;
                var14 = var10 == var11;
                var9 = undefined;
                if (var14) {
                    _fun102187_ip = 292;
                    continue _fun102187
                }
            case 286:
                var9 = var11.showUnread;
            case 292:
                var4.unread = var9;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var18 = 13;
                var9 = var15[var18];
                var9 = var14.bind(var3)(var9);
                var19 = var9.intl;
                var16 = var19.string;
                var20 = _closure1_slot1;
                var17 = 14;
                var9 = var15[var17];
                var9 = var20.bind(var3)(var9);
                var9 = var9.yv3DJJ;
                var9 = var16.bind(var19)(var9);
                var4.accessibilityLabel = var9;
                var9 = {};
                var9.selected = var12;
                var4.accessibilityState = var9;
                var16 = _closure1_slot5;
                var9 = var15[var8];
                var9 = var14.bind(var3)(var9);
                var12 = var9.BaseChannelName;
                var9 = {};
                var18 = var15[var18];
                var18 = var14.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var15[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.yv3DJJ;
                var17 = var18.bind(var19)(var17);
                var9.name = var17;
                var9.mode = var13;
                var9 = var16.bind(var3)(var12, var9);
                var4.name = var9;
                var12 = _closure1_slot5;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.BaseChannelIcon;
                var8 = {};
                var8.mode = var13;
                var13 = 15;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.BoostTier2Icon;
                var8.IconComponent = var13;
                var8 = var12.bind(var3)(var9, var8);
                var4.icon = var8;
                var9 = _closure1_slot5;
                var8 = _closure1_slot7;
                var7 = {};
                var12 = var10 == var11;
                var10 = undefined;
                if (var12) {
                    _fun102187_ip = 530;
                    continue _fun102187
                }
            case 524:
                var10 = var11.indicator;
            case 530:
                var7.indicator = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.channelInfo = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8747, 33, 13287, 5353, 671, 8589, 1297, 13288, 13296, 13360, 11648, 1234, 1881, 13364, 2]);