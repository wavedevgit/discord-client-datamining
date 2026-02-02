// modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx
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
        var0 = arg0;
        var4 = var0.powerup;
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 7;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'color': 'always-white',
            'variant': 'text-sm/semibold'
        };
        var4 = var4.title;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.padding = var9;
    var9 = 6;
    var11 = var5[var9];
    var12 = var10.bind(var0)(var11);
    var11 = '#000000';
    var13 = var12.bind(var0)(var11);
    var12 = var13.alpha;
    var11 = 0.18;
    var12 = var12.bind(var13)(var11);
    var11 = var12.hex;
    var11 = var11.bind(var12)();
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var9 = var5[var9];
    var10 = var10.bind(var0)(var9);
    var9 = '#FFFFFF';
    var11 = var10.bind(var0)(var9);
    var10 = var11.alpha;
    var9 = 0.5;
    var10 = var10.bind(var11)(var9);
    var9 = var10.hex;
    var9 = var9.bind(var10)();
    var8.color = var9;
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78046: for (var _fun78046_ip = 0;;) switch (_fun78046_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot7;
                var3 = undefined;
                var8 = var2.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 8;
                var5 = var4[var5];
                var6 = var2.bind(var3)(var5);
                var5 = var0.id;
                var16 = var6.bind(var3)(var5);
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var9 = var0.id;
                var5 = new Array(1);
                var5[0] = var9;
                var1 = function() { // Environment: var1
                    _fun78047: for (var _fun78047_ip = 0;;) switch (_fun78047_ip) {
                        case 0:
                            var4 = _closure1_slot5;
                            var3 = var4.shouldFetchCatalogForGuild;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun78047_ip = 75;
                                continue _fun78047
                            }
                        case 33:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchPowerupCatalogForGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var1 = 10;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var0 = var0.id;
                var0 = var1.bind(var3)(var0);
                if (!var0) {
                    _fun78046_ip = 151;
                    continue _fun78046
                }
            case 117:
                var0 = null;
                var2 = var0 == var16;
                var1 = undefined;
                if (var2) {
                    _fun78046_ip = 133;
                    continue _fun78046
                }
            case 128:
                var1 = var16.length;
            case 133:
                var2 = var0 != var1;
                var15 = 0;
                var0 = 0;
                if (!var2) {
                    _fun78046_ip = 147;
                    continue _fun78046
                }
            case 144:
                var0 = var1;
            case 147:
                if (!(var15 === var0)) {
                    _fun78046_ip = 153;
                    continue _fun78046
                }
            case 151:
                return var3;
            case 153:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var8 = var8.text;
                var4.style = var8;
                var8 = 'text-sm/semibold';
                var4.variant = var8;
                var14 = 11;
                var8 = var7[var14];
                var8 = var9.bind(var3)(var8);
                var10 = var8.intl;
                var9 = var10.format;
                var8 = _closure1_slot1;
                var19 = 12;
                var7 = var7[var19];
                var7 = var8.bind(var3)(var7);
                var8 = var7["7lwpzR"];
                var7 = {};
                var11 = '';
                if (!(var3 !== var16)) {
                    _fun78046_ip = 482;
                    continue _fun78046
                }
            case 281:
                var13 = var16.length;
                var23 = 1;
                if (!(var23 !== var13)) {
                    _fun78046_ip = 457;
                    continue _fun78046
                }
            case 296:
                var17 = var16.length;
                var13 = 2;
                if (!(!(var17 > var13))) {
                    _fun78046_ip = 313;
                    continue _fun78046
                }
            case 308:
                var22 = var16;
                _fun78046_ip = 341;
                continue _fun78046;
            case 313:
                var13 = global;
                var17 = var13.Array;
                var13 = var17.from;
                var17 = var13.bind(var17)(var16);
                var13 = var17.reverse;
                var22 = var13.bind(var17)();
            case 341:
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var14];
                var14 = var17.bind(var3)(var14);
                var18 = var14.intl;
                var17 = var18.format;
                var14 = _closure1_slot1;
                var13 = var13[var19];
                var13 = var14.bind(var3)(var13);
                var14 = var13.MNO3sG;
                var13 = {};
                var20 = _closure1_slot6;
                var21 = _closure1_slot8;
                var19 = {};
                var24 = var22[var15];
                var19.powerup = var24;
                var19 = var20.bind(var3)(var21, var19);
                var13.perk1 = var19;
                var20 = _closure1_slot6;
                var19 = {};
                var22 = var22[var23];
                var19.powerup = var22;
                var19 = var20.bind(var3)(var21, var19);
                var13.perk2 = var19;
                var11 = var17.bind(var18)(var14, var13);
                _fun78046_ip = 482;
                continue _fun78046;
            case 457:
                var14 = _closure1_slot6;
                var13 = _closure1_slot8;
                var12 = {};
                var15 = var16[var15];
                var12.powerup = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 482:
                var7.perks = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6680, 33, 1297, 671, 669, 3902, 9873, 9879, 9882, 1234, 1881, 2]);