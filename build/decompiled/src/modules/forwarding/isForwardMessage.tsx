// modules/forwarding/isForwardMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.MessageReferenceTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/isForwardMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun39439: for (var _fun39439_ip = 0;;) switch (_fun39439_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.messageReference;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun39439_ip = 25;
                    continue _fun39439
                }
            case 20:
                var1 = var0.type;
            case 25:
                var0 = _closure1_slot0;
                var0 = var0.FORWARD;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun39440: for (var _fun39440_ip = 0;;) switch (_fun39440_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.message_reference;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun39440_ip = 25;
                    continue _fun39440
                }
            case 20:
                var1 = var0.type;
            case 25:
                var0 = _closure1_slot0;
                var0 = var0.FORWARD;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isForwardServerMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);