// modules/premium/powerups/native/GuildPowerupsPerksSection.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var9 = 3;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.gap = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsPerksSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var10 = var0.listings;
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var7 = _closure1_slot4;
        var14 = _closure1_slot1;
        var15 = _closure1_slot2;
        var4 = 4;
        var4 = var15[var4];
        var6 = var14.bind(var3)(var4);
        var4 = {};
        var13 = _closure1_slot0;
        var12 = 5;
        var11 = var15[var12];
        var11 = var13.bind(var3)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = 6;
        var16 = var15[var11];
        var16 = var14.bind(var3)(var16);
        var16 = var16.TV3Vm8;
        var16 = var17.bind(var18)(var16);
        var4.title = var16;
        var12 = var15[var12];
        var12 = var13.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.STx9hp;
        var11 = var12.bind(var13)(var11);
        var4.description = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot3;
        var5 = {};
        var9 = var9.container;
        var5.style = var9;
        var9 = var10.map;
        var8 = function(arg0, arg1) { // Environment: var8
            _fun102494: for (var _fun102494_ip = 0;;) switch (_fun102494_ip) {
                case 0:
                    var0 = arg0;
                    var9 = arg1;
                    var2 = var0.type;
                    var1 = 'singlePerk';
                    if (!(var1 !== var2)) {
                        _fun102494_ip = 211;
                        continue _fun102494
                    }
                case 24:
                    var1 = 'multiPerk';
                    if (!(var1 !== var2)) {
                        _fun102494_ip = 121;
                        continue _fun102494
                    }
                case 34:
                    var1 = 'gameServer';
                    if (!(var1 !== var2)) {
                        _fun102494_ip = 46;
                        continue _fun102494
                    }
                case 42:
                    var1 = null;
                    return var1;
                case 46:
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.guildId = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'game-server-';
                    var1 = var6.bind(var1)(var9);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                case 121:
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.guildId = var1;
                    var2.listing = var0;
                    var8 = var0.group;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var1 = '-';
                    var1 = var7.bind(var6)(var8, var1, var9);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                case 211:
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = var0.powerup;
                    var1.powerup = var5;
                    var0 = var0.powerup;
                    var0 = var0.skuId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 13383, 1234, 1890, 13385, 13387, 13394, 2]);