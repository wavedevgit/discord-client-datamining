// design/components/Icon/native/BaseIconImage.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = {
        'width': 12,
        'height': 12
    };
    var3.xxs = var6;
    var6 = {
        'width': 16,
        'height': 16
    };
    var3.xs = var6;
    var6 = {
        'width': 18,
        'height': 18
    };
    var3.sm = var6;
    var6 = {
        'width': 24,
        'height': 24
    };
    var3.md = var6;
    var6 = {
        'width': 32,
        'height': 32
    };
    var3.lg = var6;
    var6 = {};
    var6.width = var0;
    var6.height = var0;
    var3.custom = var6;
    var6 = {
        'width': 18,
        'height': 18
    };
    var3.refresh_sm = var6;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Icon/native/BaseIconImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun27310: for (var _fun27310_ip = 0;;) switch (_fun27310_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.source;
                var9 = var0.size;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun27310_ip = 23;
                    continue _fun27310
                }
            case 19:
                var9 = 'md';
            case 23:
                var2 = var0.color;
                var10 = var0.resizeMode;
                var7 = var0.style;
                var5 = var0.accessible;
                var4 = var0.accessibilityLabel;
                var1 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 3;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useToken;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                if (!(var0 == var1)) {
                    _fun27310_ip = 123;
                    continue _fun27310
                }
            case 88:
                var0 = var0 != var2;
                if (!var0) {
                    _fun27310_ip = 106;
                    continue _fun27310
                }
            case 95:
                var12 = 'string';
                var8 = typeof var2;
                var0 = var12 === var8;
            case 106:
                var8 = undefined;
                if (!var0) {
                    _fun27310_ip = 133;
                    continue _fun27310
                }
            case 111:
                var0 = {};
                var0.tintColor = var2;
                var8 = var0;
                _fun27310_ip = 133;
                continue _fun27310;
            case 123:
                var0 = {};
                var0.tintColor = var1;
                var8 = var0;
            case 133:
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var12 = 0;
                var0.fadeDuration = var12;
                var0.source = var11;
                var0.resizeMode = var10;
                var6 = _closure1_slot4;
                var9 = var6[var9];
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var0.style = var6;
                var0.accessible = var5;
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.BaseIconImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3142, 2]);