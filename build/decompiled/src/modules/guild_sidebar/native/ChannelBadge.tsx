// modules/guild_sidebar/native/ChannelBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var7 = var5[var0];
    var3 = metroImportAll;
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
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 4;
        var1.paddingStart = var2;
        var0.channelInfoContainer = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/ChannelBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102566: for (var _fun102566_ip = 0;;) switch (_fun102566_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.mentionCount;
                var7 = var1.isMentionLowImportance;
                var0 = var1.isNewChannel;
                var14 = var1.postsWithUnreadsCount;
                var1 = var1.muted;
                var2 = _closure1_slot6;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var2 = var9[var2];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var13 = var9.bind(var10)(var3, var2);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun102566_ip = 113;
                    continue _fun102566
                }
            case 104:
                var3 = 0;
                if (!(!(var8 > var3))) {
                    _fun102566_ip = 324;
                    continue _fun102566
                }
            case 113:
                if (var0) {
                    _fun102566_ip = 264;
                    continue _fun102566
                }
            case 119:
                var3 = var2 != var1;
                var0 = null;
                if (!var3) {
                    _fun102566_ip = 262;
                    continue _fun102566
                }
            case 131:
                var0 = null;
                if (var1) {
                    _fun102566_ip = 262;
                    continue _fun102566
                }
            case 139:
                var1 = var2 != var14;
                var0 = null;
                if (!var1) {
                    _fun102566_ip = 262;
                    continue _fun102566
                }
            case 148:
                var1 = 0;
                var1 = var14 > var1;
                var0 = null;
                if (!var1) {
                    _fun102566_ip = 262;
                    continue _fun102566
                }
            case 159:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var9 = var6.channelInfoContainer;
                var1.style = var9;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 8;
                var9 = var15[var9];
                var9 = var12.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-muted'
                };
                var11 = 9;
                var11 = var15[var11];
                var12 = var12.bind(var4)(var11);
                var11 = var12.humanizeValue;
                var11 = var11.bind(var12)(var14, var13);
                var9.children = var11;
                var9 = var3.bind(var4)(var10, var9);
                var1.children = var9;
                var0 = var3.bind(var4)(var2, var1);
            case 262:
                _fun102566_ip = 322;
                continue _fun102566;
            case 264:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var9 = var6.channelInfoContainer;
                var1.style = var9;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 7;
                var9 = var11[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9 = var3.bind(var4)(var10, var9);
                var1.children = var9;
                var0 = var3.bind(var4)(var2, var1);
            case 322:
                _fun102566_ip = 392;
                continue _fun102566;
            case 324:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.channelInfoContainer;
                var1.style = var6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 6;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.mentionsCount = var8;
                var5.isMentionLowImportance = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 392:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 33, 1297, 632, 13402, 11657, 3932, 1604, 2]);