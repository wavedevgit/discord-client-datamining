// modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx
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
    var3 = var3.BoostInfoType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingVertical = var9;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'display': 'flex'
    };
    var3.headerContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildPowerupsBoostInfo, environment: var1
        _fun102964: for (var _fun102964_ip = 0;;) switch (_fun102964_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.count;
                var10 = var0.type;
                var0 = _closure1_slot7;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var5.container;
                var0.style = var4;
                var4 = {};
                var5 = var5.headerContainer;
                var4.style = var5;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 5;
                var5 = var9[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.BoostGemIcon;
                var5 = {};
                var9 = 'sm';
                var5.size = var9;
                var9 = _closure1_slot4;
                var9 = var9.AVAILABLE;
                if (!(var10 !== var9)) {
                    _fun102964_ip = 145;
                    continue _fun102964
                }
            case 112:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 4;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.colors;
                var9 = var9.TEXT_MUTED;
                _fun102964_ip = 176;
                continue _fun102964;
            case 145:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 4;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.unsafe_rawColors;
                var9 = var12.GUILD_BOOSTING_PINK;
            case 176:
                var5.color = var9;
                var5 = var8.bind(var3)(var7, var5);
                var7 = new Array(2);
                var7[0] = var5;
                var12 = _closure1_slot5;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 6;
                var8 = var8[var5];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                var13 = 'text-lg/medium';
                var8.variant = var13;
                var13 = _closure1_slot4;
                var14 = var13.AVAILABLE;
                var13 = 'text-subtle';
                if (!(var10 === var14)) {
                    _fun102964_ip = 261;
                    continue _fun102964
                }
            case 255:
                var13 = 'text-strong';
            case 261:
                var8.color = var13;
                var8.children = var11;
                var8 = var12.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var7 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot5;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var8 = 7;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.getGuildPowerupsBoostInfoText;
                var8 = var8.bind(var9)(var11, var10);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 6678, 33, 1297, 671, 7641, 3901, 13371, 2]);