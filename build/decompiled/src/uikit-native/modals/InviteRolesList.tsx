// uikit-native/modals/InviteRolesList.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
        'gap': 4
    };
    var3.rolesRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/InviteRolesList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80311: for (var _fun80311_ip = 0;;) switch (_fun80311_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.invite;
                var5 = var0.style;
                var0 = _closure1_slot7;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var0 = var1.guild;
                var _closure2_slot0 = var0;
                var1 = var1.roles;
                var _closure2_slot1 = var1;
                var7 = _closure1_slot3;
                var3 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var1;
                var1 = function() { // Environment: var9
                    _fun80312: for (var _fun80312_ip = 0;;) switch (_fun80312_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun80312_ip = 116;
                                continue _fun80312
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun80312_ip = 116;
                                continue _fun80312
                            }
                        case 21:
                            var1 = _closure2_slot1;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun80312_ip = 116;
                                continue _fun80312
                            }
                        case 36:
                            var6 = _closure2_slot1;
                            var2 = new Array(0);
                            var7 = var2;
                            var5 = 0;
                            var0 = arraySpread(var7, var6, var5);
                            var1 = var2.sort;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 4;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.sortInviteRoles;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.inviteRoleToDisplayData;
                                var0 = _closure2_slot0;
                                var1 = var0.id;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun80312_ip = 120;
                            continue _fun80312;
                        case 116:
                            var0 = new Array(0);
                        case 120:
                            return var0;
                    }
                };
                var11 = var3.bind(var7)(var1, var2);
                var3 = null;
                var1 = var3 == var0;
                var0 = null;
                if (var1) {
                    _fun80311_ip = 312;
                    continue _fun80311
                }
            case 96:
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun80311_ip = 312;
                    continue _fun80311
                }
            case 112:
                var3 = _closure1_slot6;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 5;
                var1 = var16[var1];
                var1 = var15.bind(var4)(var1);
                var2 = var1.Stack;
                var1 = {};
                var7 = 4;
                var1.spacing = var7;
                var1.style = var5;
                var8 = _closure1_slot5;
                var5 = 6;
                var5 = var16[var5];
                var5 = var15.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var12 = 7;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.stcSfI;
                var12 = var13.bind(var14)(var12);
                var5.children = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.rolesRow;
                var6.style = var10;
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
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
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 312:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 1667, 4039, 3900, 1234, 9098, 2]);