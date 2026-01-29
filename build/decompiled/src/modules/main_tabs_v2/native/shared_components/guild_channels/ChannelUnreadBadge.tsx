// modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MUTED_OPACITY_CONTENT;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 0,
        'flexShrink': 0,
        'position': 'absolute'
    };
    var3.unreadBadge = var9;
    var9 = {};
    var10 = -16;
    var9.marginLeft = var10;
    var3.unreadBadgePanel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChannelUnreadBadge, environment: var1
        _fun101709: for (var _fun101709_ip = 0;;) switch (_fun101709_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.unread;
                var13 = var0.resolvedUnreadSetting;
                var11 = var0.muted;
                var8 = var0.isThread;
                var9 = var0.layout;
                var6 = var0.launchpad;
                var14 = var0.panelVariant;
                var4 = undefined;
                if (!(var14 === var4)) {
                    _fun101709_ip = 53;
                    continue _fun101709
                }
            case 51:
                var14 = false;
            case 53:
                var0 = _closure1_slot7;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 6;
                var0 = var3[var7];
                var5 = var2.bind(var4)(var0);
                var0 = var5.getLayoutStyles;
                var6 = var0.bind(var5)(var9, var6);
                var0 = 7;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useFontScale;
                var15 = var0.bind(var2)();
                var0 = null;
                if (!var1) {
                    _fun101709_ip = 366;
                    continue _fun101709
                }
            case 126:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var9 = var12.unreadBadge;
                var5 = new Array(4);
                var5[0] = var9;
                var9 = undefined;
                if (!var14) {
                    _fun101709_ip = 161;
                    continue _fun101709
                }
            case 155:
                var9 = var12.unreadBadgePanel;
            case 161:
                var5[1] = var9;
                var9 = var6.unreadBadge;
                if (var8) {
                    _fun101709_ip = 181;
                    continue _fun101709
                }
            case 174:
                var8 = var9.position;
                _fun101709_ip = 187;
                continue _fun101709;
            case 181:
                var8 = var9.positionThread;
            case 187:
                var5[2] = var8;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = var12[var7];
                var8 = var9.bind(var4)(var7);
                var7 = var8.makeSizeStyle;
                var6 = var6.unreadBadge;
                var6 = var6.size;
                var6 = var7.bind(var8)(var6);
                var5[3] = var6;
                var1.style = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var8 = 8;
                var5 = var12[var8];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.classic = var14;
                var8 = var12[var8];
                var8 = var9.bind(var4)(var8);
                var12 = var8.CHANNEL_BADGE_SIZE;
                var8 = global;
                var14 = var8.Math;
                var9 = var14.max;
                var8 = 1;
                var9 = var9.bind(var14)(var15, var8);
                var9 = var12 * var9;
                var5.size = var9;
                var9 = {};
                var12 = _closure1_slot5;
                var12 = var12.ALL_MESSAGES;
                if (!(var13 === var12)) {
                    _fun101709_ip = 329;
                    continue _fun101709
                }
            case 326:
                if (!var11) {
                    _fun101709_ip = 333;
                    continue _fun101709
                }
            case 329:
                var8 = _closure1_slot4;
            case 333:
                var9.opacity = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var5.badgeStyle = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 366:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8743, 4261, 33, 1297, 8744, 4043, 8850, 2]);