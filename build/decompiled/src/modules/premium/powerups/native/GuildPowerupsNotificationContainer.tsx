// modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: Tier3OverrideNotice, environment: var1
        var0 = arg0;
        var7 = var0.text;
        var0 = _closure1_slot6;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var5.staffContainer;
        var0.style = var5;
        var6 = _closure1_slot4;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 4;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {};
        var8 = 'text-sm/medium';
        var4.variant = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 3;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.gap = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.margin = var12;
    var3.container = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var8.borderRadius = var12;
    var8.borderWidth = var11;
    var11 = 'solid';
    var8.borderStyle = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderColor = var9;
    var3.staffContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildPowerupsNotificationContainer, environment: var1
        _fun102969: for (var _fun102969_ip = 0;;) switch (_fun102969_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var0 = _closure1_slot6;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var13 = var0.bind(var4)(var11);
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var10 = var0.bind(var4)(var11);
                var0 = var13.shouldShow;
                if (var0) {
                    _fun102969_ip = 86;
                    continue _fun102969
                }
            case 72:
                var1 = var10.shouldShow;
                var0 = null;
                if (!var1) {
                    _fun102969_ip = 336;
                    continue _fun102969
                }
            case 86:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var5.container;
                var1.style = var5;
                var8 = _closure1_slot4;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 4;
                var5 = var16[var5];
                var5 = var12.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'eyebrow',
                    'color': 'text-subtle'
                };
                var9 = 7;
                var9 = var16[var9];
                var9 = var12.bind(var4)(var9);
                var14 = var9.intl;
                var12 = var14.string;
                var15 = _closure1_slot1;
                var9 = 8;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var9 = var9["3FRirU"];
                var9 = var12.bind(var14)(var9);
                var5.children = var9;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = var13.shouldShow;
                if (!var6) {
                    _fun102969_ip = 251;
                    continue _fun102969
                }
            case 226:
                var12 = _closure1_slot4;
                var9 = _closure1_slot7;
                var8 = {};
                var13 = var13.text;
                var8.text = var13;
                var6 = var12.bind(var4)(var9, var8);
            case 251:
                var5[1] = var6;
                var6 = var10.shouldShow;
                if (!var6) {
                    _fun102969_ip = 322;
                    continue _fun102969
                }
            case 264:
                var9 = _closure1_slot4;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 9;
                var7 = var12[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.guildId = var11;
                var11 = var10.expiringPowerupNames;
                var7.powerupNames = var11;
                var10 = var10.warnings;
                var7.warnings = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 322:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 336:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3901, 13373, 13374, 1234, 1881, 13377, 2]);