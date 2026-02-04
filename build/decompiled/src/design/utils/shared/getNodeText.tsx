// design/utils/shared/getNodeText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var5 = var4[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot0 = var1;
    var1 = 1;
    var4 = var4[var1];
    var1 = require;
    var5 = var1.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var1 = 'design/utils/shared/getNodeText.tsx';
    var1 = var4.bind(var5)(var1);
    var1 = function arg0() {
        _fun27407: for (var _fun27407_ip = 0;;) switch (_fun27407_ip) {
            case 0:
                var4 = arg0;
                var2 = typeof var4;
                var1 = 'string';
                var0 = var4;
                if (!(var1 !== var2)) {
                    _fun27407_ip = 120;
                    continue _fun27407
                }
            case 17:
                var1 = 'number';
                var0 = var4;
                if (!(var1 !== var2)) {
                    _fun27407_ip = 120;
                    continue _fun27407
                }
            case 28:
                var1 = global;
                var1 = var1.Array;
                var1 = var4 instanceof var1;
                if (var1) {
                    _fun27407_ip = 89;
                    continue _fun27407
                }
            case 46:
                var3 = _closure1_slot0;
                var1 = var3.isValidElement;
                var3 = var1.bind(var3)(var4);
                var6 = undefined;
                var1 = undefined;
                if (!var3) {
                    _fun27407_ip = 87;
                    continue _fun27407
                }
            case 68:
                var5 = _closure1_slot1;
                var3 = var4.props;
                var3 = var3.children;
                var1 = var5.bind(var6)(var3);
            case 87:
                _fun27407_ip = 117;
                continue _fun27407;
            case 89:
                var3 = var4.map;
                var2 = _closure1_slot1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.join;
                var2 = '';
                var1 = var3.bind(var4)(var2);
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var2.getNodeText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);