// modules/instant_invite/native/InviteRolesDisplay.tsx
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
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 8;
    var8.marginTop = var10;
    var3.container = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.label = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.rolesRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/InviteRolesDisplay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73554: for (var _fun73554_ip = 0;;) switch (_fun73554_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.roleIds;
                var _closure2_slot0 = var7;
                var0 = var0.guildId;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot7;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStoresArray;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    var3 = _closure2_slot0;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot4;
                        var2 = var3.getRole;
                        var1 = _closure2_slot1;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var3.bind(var6)(var2, var0, var1);
                var2 = var10.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun73554_ip = 306;
                    continue _fun73554
                }
            case 117:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var9.container;
                var1.style = var6;
                var7 = _closure1_slot5;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 6;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-muted'
                };
                var11 = var9.label;
                var5.style = var11;
                var11 = 7;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.stcSfI;
                var11 = var12.bind(var13)(var11);
                var5.children = var11;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var9 = var9.rolesRow;
                var6.style = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.role = var0;
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var6.children = var8;
                var6 = var7.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 306:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 33, 1297, 566, 3942, 1234, 9223, 2]);