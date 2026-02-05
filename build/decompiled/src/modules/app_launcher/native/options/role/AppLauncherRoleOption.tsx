// modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108285: for (var _fun108285_ip = 0;;) switch (_fun108285_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.style;
                var9 = var1.option;
                var _closure2_slot0 = var9;
                var0 = var1.initialValue;
                var _closure2_slot1 = var0;
                var13 = var1.onRolePress;
                var _closure2_slot2 = var13;
                var0 = var1.onActionSheetDismiss;
                var _closure2_slot3 = var0;
                var0 = var1.channel;
                var _closure2_slot4 = var0;
                var4 = var1.autoFocus;
                var7 = var1.hasError;
                var1 = var1.onPress;
                var _closure2_slot5 = var1;
                var0 = var0.guild_id;
                var _closure2_slot6 = var0;
                var12 = _closure1_slot4;
                var1 = var12.useState;
                var0 = function() { // Environment: var6
                    _fun108286: for (var _fun108286_ip = 0;;) switch (_fun108286_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun108286_ip = 47;
                                continue _fun108286
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'roleMention';
                            var0 = null;
                            if (!(var2 === var3)) {
                                _fun108286_ip = 47;
                                continue _fun108286
                            }
                        case 37:
                            var1 = _closure2_slot1;
                            var0 = var1.roleId;
                        case 47:
                            return var0;
                    }
                };
                var2 = var1.bind(var12)(var0);
                var1 = _closure1_slot3;
                var3 = undefined;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var2[var0];
                var _closure2_slot7 = var0;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot8 = var1;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 4;
                var1 = var11[var1];
                var14 = var2.bind(var3)(var1);
                var8 = var14.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var6
                    _fun108287: for (var _fun108287_ip = 0;;) switch (_fun108287_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun108287_ip = 17;
                                continue _fun108287
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = _closure2_slot6;
                            var2 = var2 != var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun108287_ip = 57;
                                continue _fun108287
                            }
                        case 30:
                            var4 = _closure1_slot5;
                            var3 = var4.getRole;
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot7;
                            var0 = var3.bind(var4)(var2, var1);
                        case 57:
                            return var0;
                    }
                };
                var8 = var8.bind(var14)(var2, var1);
                var _closure2_slot9 = var8;
                var2 = var12.useEffect;
                var1 = new Array(4);
                var1[0] = var13;
                var13 = var9.name;
                var1[1] = var13;
                var1[2] = var8;
                var1[3] = var0;
                var0 = function() { // Environment: var6
                    _fun108288: for (var _fun108288_ip = 0;;) switch (_fun108288_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun108288_ip = 24;
                                continue _fun108288
                            }
                        case 16:
                            var3 = _closure2_slot9;
                            var2 = var0 == var3;
                        case 24:
                            if (!var2) {
                                _fun108288_ip = 45;
                                continue _fun108288
                            }
                        case 27:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var1.role = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var12)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var10;
                var0.option = var9;
                var0.hasError = var7;
                var7 = null;
                var9 = var7 != var8;
                var0.selected = var9;
                var9 = var7 != var8;
                var7 = undefined;
                if (!var9) {
                    _fun108285_ip = 307;
                    continue _fun108285
                }
            case 302:
                var7 = var8.name;
            case 307:
                var0.selectedItemName = var7;
                var6 = function() {
                    _fun108289: for (var _fun108289_ip = 0;;) switch (_fun108289_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108289_ip = 23;
                                continue _fun108289
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 6;
                            var2 = var7[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 8;
                            var1 = var7[var1];
                            var8 = var2.bind(var0)(var1);
                            var1 = 7;
                            var3 = var7[var1];
                            var1 = var7.paths;
                            var3 = var8.bind(var0)(var3, var1);
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var1.option = var7;
                            var7 = _closure2_slot4;
                            var1.channel = var7;
                            var7 = function arg0() {
                                var0 = arg0;
                                var3 = var0.role;
                                var4 = _closure2_slot8;
                                var2 = var3.id;
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = _closure2_slot2;
                                var1 = {};
                                var1.role = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onRolePress = var7;
                            var6 = _closure2_slot3;
                            var1.onActionSheetDismiss = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.onPress = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.RoleIcon;
                var5 = {};
                var5.role = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.leading = var5;
                var0.autoFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1674, 33, 632, 13986, 3278, 13990, 1307, 13990, 2]);