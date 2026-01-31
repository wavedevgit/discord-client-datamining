// modules/guild_settings/roles/native/InRolePromptNotice.tsx
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
    var3 = var3.RoleFlags;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.paddingBottom = var11;
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = 'center';
    var8.alignItems = var11;
    var3.promptRow = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginLeft = var9;
    var3.promptText = var8;
    var8 = {
        'height': 16,
        'width': 16
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/InRolePromptNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun116006: for (var _fun116006_ip = 0;;) switch (_fun116006_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.role;
                var0 = _closure1_slot7;
                var5 = undefined;
                var10 = var0.bind(var5)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var4 = var1.bind(var5)(var0);
                var2 = var4.hasFlag;
                var1 = var3.flags;
                var0 = _closure1_slot4;
                var0 = var0.IN_PROMPT;
                var1 = var2.bind(var4)(var1, var0);
                var0 = null;
                if (!var1) {
                    _fun116006_ip = 503;
                    continue _fun116006
                }
            case 77:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.isRolePowerful;
                var1 = var1.bind(var2)(var3);
                var4 = _closure1_slot6;
                var3 = _closure1_slot3;
                var2 = {};
                var6 = var10.promptRow;
                var2.style = var6;
                var9 = _closure1_slot5;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 8;
                var6 = var14[var6];
                var8 = var12.bind(var5)(var6);
                if (var1) {
                    _fun116006_ip = 318;
                    continue _fun116006
                }
            case 158:
                var1 = {};
                var6 = var10.icon;
                var1.style = var6;
                var6 = 9;
                var6 = var14[var6];
                var6 = var12.bind(var5)(var6);
                var1.source = var6;
                var6 = var9.bind(var5)(var8, var1);
                var1 = new Array(2);
                var1[0] = var6;
                var17 = _closure1_slot0;
                var6 = 10;
                var6 = var14[var6];
                var6 = var17.bind(var5)(var6);
                var11 = var6.Text;
                var6 = {};
                var13 = var10.promptText;
                var6.style = var13;
                var13 = 'text-sm/medium';
                var6.variant = var13;
                var13 = 11;
                var15 = var14[var13];
                var15 = var17.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var14[var13];
                var13 = var17.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.mqeO2v;
                var13 = var15.bind(var16)(var13);
                var6.children = var13;
                var6 = var9.bind(var5)(var11, var6);
                var1[1] = var6;
                var2.children = var1;
                var1 = var4.bind(var5)(var3, var2);
                _fun116006_ip = 500;
                continue _fun116006;
            case 318:
                var6 = {};
                var11 = var10.icon;
                var6.style = var11;
                var11 = 9;
                var11 = var14[var11];
                var11 = var12.bind(var5)(var11);
                var6.source = var11;
                var11 = 5;
                var11 = var14[var11];
                var11 = var12.bind(var5)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.YELLOW_300;
                var6.color = var11;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var13 = _closure1_slot0;
                var7 = 10;
                var7 = var14[var7];
                var7 = var13.bind(var5)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = var10.promptText;
                var7.style = var10;
                var10 = 'text-sm/medium';
                var7.variant = var10;
                var10 = 11;
                var11 = var14[var10];
                var11 = var13.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.YRbgXz;
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 500:
                var0 = var1;
            case 503:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1384, 14736, 4045, 7474, 3900, 1234, 2]);