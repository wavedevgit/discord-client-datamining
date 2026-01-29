// modules/messages/createNonce.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var _closure1_slot2 = var0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.SnowflakeSequence;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var11 = var6;
    var3 = new var11[var3](var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/createNonce.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: createNonce, environment: var1
        _fun54170: for (var _fun54170_ip = 0;;) switch (_fun54170_ip) {
            case 0:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var3 = var0.bind(var1)();
                var1 = _closure1_slot2;
                if (!(var1 !== var3)) {
                    _fun54170_ip = 46;
                    continue _fun54170
                }
            case 28:
                var2 = _closure1_slot3;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                _closure1_slot2 = var3;
            case 46:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.fromTimestampWithSequence;
                var0 = _closure1_slot3;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createNonce = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [21, 2]);