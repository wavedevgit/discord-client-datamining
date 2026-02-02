// modules/premium/powerups/native/GuildPowerupsCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.bind(var0)(var6);
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.borderColor = var11;
    var8.borderWidth = var10;
    var10 = 'solid';
    var8.borderStyle = var10;
    var10 = var5[var9];
    var10 = var12.bind(var0)(var10);
    var10 = var10.shadows;
    var16 = var10.SHADOW_LOW;
    var17 = var8;
    var10 = copyDataProperties(var17, var16);
    var3.cardNormal = var8;
    var8 = {};
    var10 = 5;
    var11 = var5[var10];
    var13 = var12.bind(var0)(var11);
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var14 = var13.bind(var0)(var11);
    var13 = var14.alpha;
    var11 = 0.35;
    var14 = var13.bind(var14)(var11);
    var13 = var14.hex;
    var13 = var13.bind(var14)();
    var8.borderColor = var13;
    var3.cardActive = var8;
    var8 = {};
    var13 = var5[var10];
    var14 = var12.bind(var0)(var13);
    var13 = var5[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var14 = var14.bind(var0)(var13);
    var13 = var14.alpha;
    var14 = var13.bind(var14)(var11);
    var13 = var14.hex;
    var13 = var13.bind(var14)();
    var8.borderColor = var13;
    var3.cardExpiring = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var9 = var5[var9];
    var9 = var12.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.YELLOW_300;
    var10 = var10.bind(var0)(var9);
    var9 = var10.alpha;
    var10 = var9.bind(var10)(var11);
    var9 = var10.hex;
    var9 = var9.bind(var10)();
    var8.borderColor = var9;
    var3.cardRemoving = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102498: for (var _fun102498_ip = 0;;) switch (_fun102498_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.children;
                var6 = var2.containerStyle;
                var9 = var2.status;
                var1 = {
                    'children': 0,
                    'containerStyle': 0,
                    'status': 0
                };
                var11 = null;
                var16 = var1;
                var15 = null;
                var0 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var2;
                var14 = var1;
                var7 = copyDataProperties(var16, var15, var14);
                var0 = _closure1_slot4;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var12 = var10.cardNormal;
                var5 = new Array(5);
                var5[0] = var12;
                var12 = var11 == var9;
                var13 = undefined;
                if (var12) {
                    _fun102498_ip = 103;
                    continue _fun102498
                }
            case 98:
                var13 = var9.type;
            case 103:
                var12 = 'active';
                var12 = var12 === var13;
                if (!var12) {
                    _fun102498_ip = 120;
                    continue _fun102498
                }
            case 114:
                var12 = var10.cardActive;
            case 120:
                var5[1] = var12;
                var12 = var11 == var9;
                var13 = undefined;
                if (var12) {
                    _fun102498_ip = 138;
                    continue _fun102498
                }
            case 133:
                var13 = var9.type;
            case 138:
                var12 = 'expiring';
                var12 = var12 === var13;
                if (!var12) {
                    _fun102498_ip = 157;
                    continue _fun102498
                }
            case 151:
                var12 = var10.cardExpiring;
            case 157:
                var5[2] = var12;
                var12 = var11 == var9;
                var11 = undefined;
                if (var12) {
                    _fun102498_ip = 175;
                    continue _fun102498
                }
            case 170:
                var11 = var9.type;
            case 175:
                var9 = 'removing';
                var9 = var9 === var11;
                if (!var9) {
                    _fun102498_ip = 194;
                    continue _fun102498
                }
            case 188:
                var9 = var10.cardRemoving;
            case 194:
                var5[3] = var9;
                var5[4] = var6;
                var0.style = var5;
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Card;
                var4 = {};
                var9 = 'none';
                var4.border = var9;
                var16 = var4;
                var15 = var7;
                var7 = copyDataProperties(var16, var15);
                var7 = 'children';
                var4[var7] = var8;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 669, 4865, 2]);