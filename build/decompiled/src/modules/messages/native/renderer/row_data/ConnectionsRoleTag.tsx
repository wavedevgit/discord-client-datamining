// modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56133: for (var _fun56133_ip = 0;;) switch (_fun56133_ip) {
            case 0:
                var5 = arg0;
                var4 = var5.colorString;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun56133_ip = 22;
                    continue _fun56133
                }
            case 15:
                var4 = _closure1_slot4;
            case 22:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 2;
                var0 = var9[var7];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var2 = var0.WHITE;
                var6 = _closure1_slot0;
                var0 = 3;
                var8 = var9[var0];
                var10 = var6.bind(var3)(var8);
                var8 = var10.hex2int;
                var8 = var8.bind(var10)(var4);
                var0 = var9[var0];
                var6 = var6.bind(var3)(var0);
                var0 = var6.getDarkness;
                var6 = var0.bind(var6)(var8);
                var0 = 0.3;
                if (!(var6 < var0)) {
                    _fun56133_ip = 147;
                    continue _fun56133
                }
            case 119:
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var6.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var2 = var0.PRIMARY_630;
            case 147:
                var0 = {};
                var6 = var5.id;
                var0.id = var6;
                var5 = var5.name;
                var0.name = var5;
                var1 = _closure1_slot3;
                var4 = var1.bind(var3)(var4);
                var0.backgroundColor = var4;
                var1 = var1.bind(var3)(var2);
                var0.iconColor = var1;
                return var0;
        }
    };
    var2.createConnectionsRoleTag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 660, 671, 668, 2]);