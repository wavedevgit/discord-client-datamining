// modules/profile_customization/native/EditIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.editIcon = var8;
    var8 = {
        'width': 24,
        'height': 24
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.xs = var8;
    var8 = {
        'width': 32,
        'height': 32
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.sm = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/EditIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80419: for (var _fun80419_ip = 0;;) switch (_fun80419_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.style;
                var _closure2_slot0 = var7;
                var6 = var1.size;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun80419_ip = 29;
                    continue _fun80419
                }
            case 25:
                var6 = 'xs';
            case 29:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)();
                _closure2_slot2 = var8;
                var5 = _closure1_slot2;
                var2 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun80420: for (var _fun80420_ip = 0;;) switch (_fun80420_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot2;
                            var3 = var1.editIcon;
                            var1 = new Array(3);
                            var1[0] = var3;
                            var4 = _closure2_slot1;
                            var3 = 'sm';
                            if (!(var3 !== var4)) {
                                _fun80420_ip = 47;
                                continue _fun80420
                            }
                        case 35:
                            var3 = _closure2_slot2;
                            var3 = var3.xs;
                            _fun80420_ip = 57;
                            continue _fun80420;
                        case 47:
                            var4 = _closure2_slot2;
                            var3 = var4.sm;
                        case 57:
                            var1[1] = var3;
                            var2 = _closure2_slot0;
                            var1[2] = var2;
                            var0.iconContainerStyle = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var5)(var0, var1);
                var5 = var0.iconContainerStyle;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 5;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PencilIcon;
                var4 = {};
                var4.size = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 7540, 2]);