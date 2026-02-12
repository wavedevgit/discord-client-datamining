// modules/auth/makeAuthenticated.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LoginStates;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = 4;
    var8 = var5[var3];
    var9 = var6.bind(var0)(var8);
    var8 = {};
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot5 = var8;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/makeAuthenticated.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun107766: for (var _fun107766_ip = 0;;) switch (_fun107766_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var0 = arguments[2];
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var6;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun107766_ip = 37;
                    continue _fun107766
                }
            case 25:
                var1 = {};
                var4 = true;
                var1.passProps = var4;
                var0 = var1;
            case 37:
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var5;
                var0 = function arg0() {
                    _fun107767: for (var _fun107767_ip = 0;;) switch (_fun107767_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 5;
                            var0 = var3[var0];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isAuthenticated;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun107767_ip = 111;
                                continue _fun107767
                            }
                        case 41:
                            var2 = _closure1_slot2;
                            var0 = var2.getLoginStatus;
                            var2 = var0.bind(var2)();
                            var0 = _closure1_slot3;
                            var0 = var0.LOGGING_IN;
                            if (!(var2 !== var0)) {
                                _fun107767_ip = 111;
                                continue _fun107767
                            }
                        case 69:
                            var2 = _closure1_slot2;
                            var0 = var2.allowLogoutRedirect;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun107767_ip = 111;
                                continue _fun107767
                            }
                        case 86:
                            var3 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun107767_ip = 105;
                                continue _fun107767
                            }
                        case 99:
                            var0 = _closure1_slot5;
                            _fun107767_ip = 109;
                            continue _fun107767;
                        case 105:
                            var0 = _closure2_slot3;
                        case 109:
                            _fun107767_ip = 158;
                            continue _fun107767;
                        case 111:
                            var3 = _closure1_slot4;
                            var2 = _closure2_slot0;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var7 = var5.passProps;
                            var5 = null;
                            if (!var7) {
                                _fun107767_ip = 142;
                                continue _fun107767
                            }
                        case 139:
                            var5 = var6;
                        case 142:
                            var9 = var1;
                            var8 = var5;
                            var5 = copyDataProperties(var9, var8);
                            var0 = var3.bind(var4)(var2, var1);
                        case 158:
                            return var0;
                    }
                };
                var4 = _closure1_slot4;
                var1 = {};
                var7 = _closure1_slot6;
                var1.renderRedirect = var7;
                var1 = var4.bind(var5)(var6, var1);
                _closure2_slot3 = var1;
                var1 = var3.displayName;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun107766_ip = 98;
                    continue _fun107766
                }
            case 93:
                var1 = var3.name;
            case 98:
                var2 = var2 != var1;
                var4 = '<Unknown>';
                if (!var2) {
                    _fun107766_ip = 114;
                    continue _fun107766
                }
            case 111:
                var4 = var1;
            case 114:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'Authenticated(';
                var1 = ')';
                var1 = var3.bind(var2)(var4, var1);
                var0.displayName = var1;
                return var0;
        }
    };
    var2.makeAuthenticated = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 660, 33, 13899, 3204, 2]);