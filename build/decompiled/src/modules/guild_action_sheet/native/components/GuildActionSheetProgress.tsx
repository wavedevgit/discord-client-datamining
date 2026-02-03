// modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 3;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var8.color = var12;
    var3.title = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginHorizontal = var12;
    var8.padding = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.marginBottom = var9;
    var3.cardStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96633: for (var _fun96633_ip = 0;;) switch (_fun96633_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var0 = _closure1_slot5;
                var5 = undefined;
                var8 = var0.bind(var5)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 4;
                var1 = var11[var0];
                var2 = var10.bind(var5)(var1);
                var1 = var2.useIOSCompletionStates;
                var1 = var1.bind(var2)(var9);
                var4 = var1.completed;
                var2 = var1.dismissed;
                var0 = var11[var0];
                var1 = var10.bind(var5)(var0);
                var0 = var1.useIsEligibleForGuildProgress;
                var7 = var0.bind(var1)(var9);
                var3 = _closure1_slot3;
                var1 = var3.useContext;
                var0 = 5;
                var0 = var11[var0];
                var0 = var10.bind(var5)(var0);
                var0 = var0.RedesignCompatContext;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if (!var7) {
                    _fun96633_ip = 329;
                    continue _fun96633
                }
            case 125:
                var0 = null;
                if (var4) {
                    _fun96633_ip = 329;
                    continue _fun96633
                }
            case 133:
                var0 = null;
                if (!var2) {
                    _fun96633_ip = 329;
                    continue _fun96633
                }
            case 141:
                var4 = _closure1_slot4;
                if (var1) {
                    _fun96633_ip = 228;
                    continue _fun96633
                }
            case 148:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 8;
                var1 = var10[var1];
                var2 = var7.bind(var5)(var1);
                var1 = {};
                var3 = 7;
                var3 = var10[var3];
                var7 = var7.bind(var5)(var3);
                var3 = {};
                var3.guild = var9;
                var10 = var8.title;
                var3.titleStyle = var10;
                var10 = true;
                var3.longPressDisabled = var10;
                var3.resume = var10;
                var3 = var4.bind(var5)(var7, var3);
                var1.children = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun96633_ip = 326;
                continue _fun96633;
            case 228:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 6;
                var2 = var10[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Card;
                var2 = {};
                var7 = var8.cardStyle;
                var2.style = var7;
                var7 = _closure1_slot1;
                var6 = 7;
                var6 = var10[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var6.guild = var9;
                var8 = var8.title;
                var6.titleStyle = var8;
                var8 = true;
                var6.longPressDisabled = var8;
                var6.resume = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 326:
                var0 = var1;
            case 329:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 10248, 4897, 4900, 12595, 5436, 2]);