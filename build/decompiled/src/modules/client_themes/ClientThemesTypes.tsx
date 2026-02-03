// modules/client_themes/ClientThemesTypes.tsx
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
    var3 = var3.PROTO_THEME_MAP_WEB_REFRESH;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/client_themes/ClientThemesTypes.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ClientThemeType;
    var2.ClientThemeType = var3;
    var1 = function(arg0) { // Environment: var1
        _fun27724: for (var _fun27724_ip = 0;;) switch (_fun27724_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var2 = global;
                var5 = var2.Object;
                var4 = var5.entries;
                var3 = _closure1_slot3;
                var4 = var4.bind(var5)(var3);
                var3 = var4.find;
                var0 = function(arg0) { // Environment: var0
                    _fun27725: for (var _fun27725_ip = 0;;) switch (_fun27725_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3[Symbol.iterator];
                            var3 = var0().next;
                            var1 = var3().value;
                            var1 = var0;
                            var5 = undefined;
                            var2 = var1 === var5;
                            var1 = undefined;
                            if (var2) {
                                _fun27725_ip = 49;
                                continue _fun27725
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var0;
                            var3 = var3 === var5;
                            var1 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun27725_ip = 49;
                                continue _fun27725
                            }
                        case 43:
                            var1 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun27725_ip = 55;
                                continue _fun27725
                            }
                        case 52:
                            var0.return();
                        case 55:
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var5 = var3.bind(var4)(var0);
                var3 = undefined;
                if (!(var3 !== var5)) {
                    _fun27724_ip = 75;
                    continue _fun27724
                }
            case 56:
                var4 = var2.parseInt;
                var0 = 0;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                _fun27724_ip = 182;
                continue _fun27724;
            case 75:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 1;
                var5 = var4[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.captureException;
                var8 = var2.Error;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var2 = 'No ProtoTheme found for base theme: ';
                var10 = var7.bind(var2)(var9);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var2 = new var11[var8](var10, var9);
                var2 = var2 instanceof Object ? var2 : var7;
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot0;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.Theme;
                var0 = var1.UNSET;
            case 182:
                return var0;
        }
    };
    var2.getProtoThemeFromBaseTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3189, 1207, 1311, 2, 3198]);