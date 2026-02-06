// modules/user_settings/native/account/handleDisableAccount.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/handleDisableAccount.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun81759: for (var _fun81759_ip = 0;;) switch (_fun81759_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun81759_ip = 13;
                    continue _fun81759
                }
            case 11:
                var2 = false;
            case 13:
                var3 = function() {
                    _fun81760: for (var _fun81760_ip = 0;;) switch (_fun81760_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var0 = var3.getCurrentUser;
                            var3 = var0.bind(var3)();
                            var _closure3_slot0 = var3;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun81760_ip = 63;
                                continue _fun81760
                            }
                        case 31:
                            var3 = _closure1_slot3;
                            var2 = var3.getGuildsArray;
                            var3 = var2.bind(var3)();
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.ownerId;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun81759_ip = 87;
                    continue _fun81759
                }
            case 27:
                if (var2) {
                    _fun81759_ip = 43;
                    continue _fun81759
                }
            case 30:
                var2 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 2;
                    var0 = var7[var2];
                    var5 = undefined;
                    var0 = var6.bind(var5)(var0);
                    var3 = var0.intl;
                    var1 = var3.string;
                    var0 = var7[var2];
                    var0 = var6.bind(var5)(var0);
                    var0 = var0.t;
                    var0 = var0["CIGa+7"];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.toUpperCase;
                    var1 = var0.bind(var1)();
                    var0 = {};
                    var3 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.disableAccount;
                        var1 = arg0;
                        var0 = false;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.onSubmit = var3;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.jf5GGb;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toUpperCase;
                    var2 = var2.bind(var3)();
                    var0.title = var2;
                    var0.placeholder = var1;
                    var1 = true;
                    var0.closeOnSuccess = var1;
                    return var0;
                };
                var2 = var2.bind(var0)();
                _fun81759_ip = 54;
                continue _fun81759;
            case 43:
                var1 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 2;
                    var0 = var7[var2];
                    var5 = undefined;
                    var0 = var6.bind(var5)(var0);
                    var3 = var0.intl;
                    var1 = var3.string;
                    var0 = var7[var2];
                    var0 = var6.bind(var5)(var0);
                    var0 = var0.t;
                    var0 = var0["CIGa+7"];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.toUpperCase;
                    var1 = var0.bind(var1)();
                    var0 = {};
                    var3 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.disableAccount;
                        var1 = arg0;
                        var0 = true;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.onSubmit = var3;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["8lQ2rR"];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toUpperCase;
                    var2 = var2.bind(var3)();
                    var0.title = var2;
                    var0.placeholder = var1;
                    var1 = true;
                    var0.closeOnSuccess = var1;
                    return var0;
                };
                var2 = var1.bind(var0)();
            case 54:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.bind(var0)(var2);
                _fun81759_ip = 230;
                continue _fun81759;
            case 87:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var4 = var3[var2];
                var4 = var7.bind(var0)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var3[var2];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.I5UrbV;
                var5 = var5.bind(var6)(var4);
                var4 = var3[var2];
                var4 = var7.bind(var0)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var3[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.UyVVan;
                var4 = var4.bind(var6)(var2);
                var2 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var1.title = var5;
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
            case 230:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1621, 1234, 5729, 10427, 4003, 2]);