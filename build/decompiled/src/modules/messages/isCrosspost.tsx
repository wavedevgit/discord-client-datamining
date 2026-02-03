// modules/messages/isCrosspost.tsx
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
    var6 = var3.MessageReferenceTypes;
    var _closure1_slot0 = var6;
    var3 = var3.MessageTypes;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/isCrosspost.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55946: for (var _fun55946_ip = 0;;) switch (_fun55946_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot1;
                var0 = var0.DEFAULT;
                var0 = var3 === var0;
                if (!var0) {
                    _fun55946_ip = 40;
                    continue _fun55946
                }
            case 28:
                var4 = var2.messageReference;
                var3 = null;
                var0 = var3 != var4;
            case 40:
                if (!var0) {
                    _fun55946_ip = 68;
                    continue _fun55946
                }
            case 43:
                var2 = var2.messageReference;
                var2 = var2.type;
                var1 = _closure1_slot0;
                var1 = var1.FORWARD;
                var0 = var2 !== var1;
            case 68:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);