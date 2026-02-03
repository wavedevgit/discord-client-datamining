// modules/connections/native/VerifiedRoleIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot3 = var6;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.WHITE;
    var _closure1_slot6 = var3;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.PRIMARY_630;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.iconContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/VerifiedRoleIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73053: for (var _fun73053_ip = 0;;) switch (_fun73053_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var16 = var0.role;
                var4 = var0.roleId;
                var13 = var0.roleColor;
                var14 = var0.size;
                var15 = var0.style;
                var11 = var0.displayRoleIcon;
                var0 = _closure1_slot8;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var6 = null;
                if (!(var6 == var13)) {
                    _fun73053_ip = 79;
                    continue _fun73053
                }
            case 61:
                var1 = var6 == var16;
                var0 = undefined;
                if (var1) {
                    _fun73053_ip = 76;
                    continue _fun73053
                }
            case 70:
                var0 = var16.colorString;
            case 76:
                var13 = var0;
            case 79:
                if (!(var6 == var13)) {
                    _fun73053_ip = 87;
                    continue _fun73053
                }
            case 83:
                var13 = _closure1_slot3;
            case 87:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var9 = var1.bind(var3)(var0);
                var8 = var9.getHigherContrastColor;
                var0 = {};
                var0.backgroundColor = var13;
                var17 = _closure1_slot6;
                var10 = new Array(2);
                var10[0] = var17;
                var17 = _closure1_slot7;
                var10[1] = var17;
                var0.colors = var10;
                var8 = var8.bind(var9)(var0);
                var9 = 8;
                var10 = var14 / var9;
                var0 = 2;
                var0 = var10 * var0;
                var10 = var14 - var0;
                var0 = 7;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useRoleIcon;
                var0 = {};
                var0.guildId = var7;
                if (!(var6 == var4)) {
                    _fun73053_ip = 211;
                    continue _fun73053
                }
            case 194:
                var17 = var6 == var16;
                var7 = undefined;
                if (var17) {
                    _fun73053_ip = 208;
                    continue _fun73053
                }
            case 203:
                var7 = var16.id;
            case 208:
                var4 = var7;
            case 211:
                if (!(var6 == var4)) {
                    _fun73053_ip = 219;
                    continue _fun73053
                }
            case 215:
                var4 = _closure1_slot4;
            case 219:
                var0.roleId = var4;
                var0.size = var10;
                var4 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var7 = new Array(3);
                var7[0] = var15;
                var12 = var12.iconContainer;
                var7[1] = var12;
                var12 = {};
                var12.width = var14;
                var12.height = var14;
                var12.backgroundColor = var13;
                var7[2] = var12;
                var0.style = var7;
                var7 = false;
                if (!(var7 !== var11)) {
                    _fun73053_ip = 293;
                    continue _fun73053
                }
            case 289:
                if (!(var6 == var4)) {
                    _fun73053_ip = 354;
                    continue _fun73053
                }
            case 293:
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.LinkIcon;
                var5 = {};
                var9 = {};
                var9.width = var10;
                var9.height = var10;
                var5.style = var9;
                var9 = 'custom';
                var5.size = var9;
                var5.color = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 354:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 671, 1297, 9153, 6734, 3254, 2]);