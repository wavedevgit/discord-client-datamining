// modules/connections/native/OfficialConnectionIcon.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot4 = var6;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'left': 0,
        'top': 0
    };
    var3.verifiedCheck = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/OfficialConnectionIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: OfficialConnectionIcon, environment: var1
        _fun77670: for (var _fun77670_ip = 0;;) switch (_fun77670_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var5 = var0.role;
                var12 = var0.roleId;
                var8 = var0.roleColor;
                var11 = var0.size;
                var7 = var0.style;
                var9 = var0.displayRoleIcon;
                var2 = _closure1_slot8;
                var3 = undefined;
                var16 = var2.bind(var3)();
                var6 = {};
                var6.width = var11;
                var6.height = var11;
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var2 = var10[var2];
                var10 = var4.bind(var3)(var2);
                var4 = var10.useRoleIcon;
                var2 = {};
                var2.guildId = var1;
                var1 = null;
                if (!(var1 == var12)) {
                    _fun77670_ip = 120;
                    continue _fun77670
                }
            case 103:
                var14 = var1 == var5;
                var13 = undefined;
                if (var14) {
                    _fun77670_ip = 117;
                    continue _fun77670
                }
            case 112:
                var13 = var5.id;
            case 117:
                var12 = var13;
            case 120:
                if (!(var1 == var12)) {
                    _fun77670_ip = 128;
                    continue _fun77670
                }
            case 124:
                var12 = _closure1_slot5;
            case 128:
                var2.roleId = var12;
                var2.size = var11;
                var4 = var4.bind(var10)(var2);
                var2 = false;
                if (!(var2 !== var9)) {
                    _fun77670_ip = 155;
                    continue _fun77670
                }
            case 148:
                if (!(var1 == var4)) {
                    _fun77670_ip = 541;
                    continue _fun77670
                }
            case 155:
                if (!(var1 == var8)) {
                    _fun77670_ip = 177;
                    continue _fun77670
                }
            case 159:
                var9 = var1 == var5;
                var2 = undefined;
                if (var9) {
                    _fun77670_ip = 174;
                    continue _fun77670
                }
            case 168:
                var2 = var5.colorString;
            case 174:
                var8 = var2;
            case 177:
                if (!(var1 == var8)) {
                    _fun77670_ip = 185;
                    continue _fun77670
                }
            case 181:
                var8 = _closure1_slot4;
            case 185:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 6;
                var1 = var10[var5];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var12 = var1.WHITE;
                var2 = _closure1_slot0;
                var1 = 7;
                var9 = var10[var1];
                var11 = var2.bind(var3)(var9);
                var9 = var11.hex2int;
                var9 = var9.bind(var11)(var8);
                var1 = var10[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getDarkness;
                var2 = var1.bind(var2)(var9);
                var1 = 0.3;
                var10 = var8;
                if (!(var2 < var1)) {
                    _fun77670_ip = 308;
                    continue _fun77670
                }
            case 280:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var12 = var1.PRIMARY_630;
            case 308:
                var5 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = new Array(2);
                var8[0] = var7;
                var8[1] = var6;
                var1.style = var8;
                var11 = _closure1_slot6;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 8;
                var8 = var15[var13];
                var9 = var14.bind(var3)(var8);
                var8 = {};
                var18 = var16.verifiedCheck;
                var17 = new Array(2);
                var17[0] = var18;
                var17[1] = var6;
                var8.style = var17;
                var17 = var15[var13];
                var17 = var14.bind(var3)(var17);
                var17 = var17.Sizes;
                var17 = var17.CUSTOM;
                var8.size = var17;
                var17 = 9;
                var17 = var15[var17];
                var17 = var14.bind(var3)(var17);
                var8.source = var17;
                var8.color = var10;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var15[var13];
                var10 = var14.bind(var3)(var9);
                var9 = {};
                var17 = var16.verifiedCheck;
                var16 = new Array(2);
                var16[0] = var17;
                var16[1] = var6;
                var9.style = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.CUSTOM;
                var9.size = var13;
                var13 = 10;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var9.source = var13;
                var9.color = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var1.children = var8;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 541:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 6695, 671, 668, 4045, 9810, 9811, 2]);