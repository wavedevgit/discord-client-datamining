// modules/pomelo/useUsernameStatus.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/useUsernameStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun80957: for (var _fun80957_ip = 0;;) switch (_fun80957_ip) {
            case 0:
                var6 = arg0;
                var9 = arguments[1];
                var7 = arguments[2];
                var5 = arguments[3];
                var _closure2_slot0 = var6;
                var8 = undefined;
                if (!(var9 === var8)) {
                    _fun80957_ip = 26;
                    continue _fun80957
                }
            case 24:
                var9 = true;
            case 26:
                if (!(var7 === var8)) {
                    _fun80957_ip = 32;
                    continue _fun80957
                }
            case 30:
                var7 = false;
            case 32:
                if (!(var5 === var8)) {
                    _fun80957_ip = 38;
                    continue _fun80957
                }
            case 36:
                var5 = undefined;
            case 38:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var8;
                var _closure2_slot3 = var8;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 2;
                var2 = var2[var3];
                var4 = var4.bind(var8)(var2);
                var2 = var4.useUsernameLiveCheck;
                var7 = var2.bind(var4)(var6, var9, var7);
                _closure2_slot2 = var7;
                var4 = _closure1_slot3;
                var2 = var4.useState;
                var2 = var2.bind(var4)(var8);
                var0 = _closure1_slot2;
                var3 = var0.bind(var8)(var2, var3);
                var0 = 0;
                var0 = var3[var0];
                var2 = 1;
                var2 = var3[var2];
                _closure2_slot3 = var2;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun80958: for (var _fun80958_ip = 0;;) switch (_fun80958_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun80958_ip = 54;
                                continue _fun80958
                            }
                        case 15:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            if (!(var2 !== var1)) {
                                _fun80958_ip = 54;
                                continue _fun80958
                            }
                        case 27:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80958_ip = 65;
                                continue _fun80958
                            }
                        case 37:
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun80958_ip = 65;
                            continue _fun80958;
                        case 54:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var0);
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useUsernameStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 10257, 2]);