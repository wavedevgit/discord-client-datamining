// design/components/Illustration/native/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Illustration/native/index.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun59205: for (var _fun59205_ip = 0;;) switch (_fun59205_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = 'light';
                if (!(var0 !== var3)) {
                    _fun59205_ip = 78;
                    continue _fun59205
                }
            case 14:
                var0 = 'darker';
                if (!(var0 !== var3)) {
                    _fun59205_ip = 55;
                    continue _fun59205
                }
            case 22:
                var0 = 'midnight';
                var2 = undefined;
                if (!(var0 === var3)) {
                    _fun59205_ip = 84;
                    continue _fun59205
                }
            case 32:
                var0 = var1.midnight;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun59205_ip = 50;
                    continue _fun59205
                }
            case 44:
                var0 = var1.darker;
            case 50:
                var2 = var0;
                _fun59205_ip = 84;
                continue _fun59205;
            case 55:
                var0 = var1.darker;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun59205_ip = 73;
                    continue _fun59205
                }
            case 67:
                var0 = var1.midnight;
            case 73:
                var2 = var0;
                _fun59205_ip = 84;
                continue _fun59205;
            case 78:
                var2 = var1.light;
            case 84:
                var0 = null;
                if (!(var0 == var2)) {
                    _fun59205_ip = 102;
                    continue _fun59205
                }
            case 90:
                var0 = var1.dark;
                var0 = var0.bind(var1)();
                _fun59205_ip = 108;
                continue _fun59205;
            case 102:
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 108:
                return var0;
        }
    };
    var2.getIllustrationSource = var3;
    var1 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = var1.useThemeContext;
        var0 = var0.bind(var1)();
        var1 = var0.theme;
        var0 = arg0;
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var2.useIllustrationSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3150, 2]);