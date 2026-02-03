// modules/links/native/LinkingModule.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun27204: for (var _fun27204_ip = 0;;) switch (_fun27204_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun27204_ip = 64;
                    continue _fun27204
                }
            case 41:
                var0 = _closure1_slot3;
                var2 = var0.DCDLinkingManager;
                var0 = var2.tryOpenUrlAsUniversalLink;
                var0 = var0.bind(var2)(var3);
                _fun27204_ip = 95;
                continue _fun27204;
            case 64:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.tryOpenUrlAsUniversalLink;
                var0 = var1.bind(var2)(var3);
            case 95:
                return var0;
        }
    };
    var1.tryOpenUrlAsUniversalLink = var6;
    var3 = function arg0() {
        _fun27205: for (var _fun27205_ip = 0;;) switch (_fun27205_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun27205_ip = 64;
                    continue _fun27205
                }
            case 41:
                var0 = _closure1_slot3;
                var2 = var0.DCDLinkingManager;
                var0 = var2.tryOpenScheme;
                var0 = var0.bind(var2)(var3);
                _fun27205_ip = 95;
                continue _fun27205;
            case 64:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.tryOpenScheme;
                var0 = var1.bind(var2)(var3);
            case 95:
                return var0;
        }
    };
    var1.tryOpenScheme = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/native/LinkingModule.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 3142, 2]);