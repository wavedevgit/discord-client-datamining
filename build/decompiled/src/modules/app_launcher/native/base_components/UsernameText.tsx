// modules/app_launcher/native/base_components/UsernameText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot2 = var6;
    var6 = var3.Fragment;
    var _closure1_slot3 = var6;
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/UsernameText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108205: for (var _fun108205_ip = 0;;) switch (_fun108205_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var5 = var0.guildId;
                var2 = var0.variant;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun108205_ip = 28;
                    continue _fun108205
                }
            case 24:
                var2 = 'text-md/medium';
            case 28:
                var0 = var0.color;
                if (!(var0 === var3)) {
                    _fun108205_ip = 43;
                    continue _fun108205
                }
            case 37:
                var0 = 'text-default';
            case 43:
                var12 = {};
                var12.variant = var2;
                var12.color = var0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.getName;
                var0 = null;
                var10 = var2.bind(var4)(var5, var0, var1);
                var4 = var0 != var10;
                if (!var4) {
                    _fun108205_ip = 111;
                    continue _fun108205
                }
            case 98:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                var4 = var10 !== var0;
            case 111:
                var0 = var1.hasUniqueUsername;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun108205_ip = 257;
                    continue _fun108205
                }
            case 127:
                var5 = _closure1_slot2;
                var2 = _closure1_slot3;
                var0 = {};
                var6 = var1.toString;
                var7 = var6.bind(var1)();
                var6 = new Array(2);
                var6[0] = var7;
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 3;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var16 = var7;
                var15 = var12;
                var11 = copyDataProperties(var16, var15);
                var13 = 'text-muted';
                var11 = 'color';
                var7[var11] = var13;
                var11 = var1.discriminator;
                var13 = ['#'];
                var13[1] = var11;
                var11 = 'children';
                var7[var11] = var13;
                var7 = var5.bind(var3)(var8, var7);
                var6[1] = var7;
                var0.children = var6;
                var11 = var5.bind(var3)(var2, var0);
                _fun108205_ip = 266;
                continue _fun108205;
            case 257:
                var0 = var1.toString;
                var11 = var0.bind(var1)();
            case 266:
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var13 = 3;
                var0 = var0[var13];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var16 = var0;
                var15 = var12;
                var5 = copyDataProperties(var16, var15);
                var5 = var11;
                if (!var4) {
                    _fun108205_ip = 444;
                    continue _fun108205
                }
            case 316:
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = {};
                var8 = new Array(3);
                var8[0] = var10;
                var10 = ' ';
                var8[1] = var10;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var16 = var9;
                var15 = var12;
                var12 = copyDataProperties(var16, var15);
                var13 = 'text-muted';
                var12 = 'color';
                var9[var12] = var13;
                var12 = ['('];
                var12[1] = var11;
                var11 = ')';
                var12[2] = var11;
                var11 = 'children';
                var9[var11] = var12;
                var9 = var7.bind(var3)(var10, var9);
                var8[2] = var9;
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 444:
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3920, 3900, 2]);