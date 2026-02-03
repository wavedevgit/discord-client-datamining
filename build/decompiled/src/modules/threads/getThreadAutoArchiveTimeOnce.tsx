// modules/threads/getThreadAutoArchiveTimeOnce.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun41314: for (var _fun41314_ip = 0;;) switch (_fun41314_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.threadMetadata;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun41314_ip = 175;
                    continue _fun41314
                }
            case 18:
                var5 = _closure1_slot2;
                var4 = var5.lastMessageId;
                var3 = var0.id;
                var4 = var4.bind(var5)(var3);
                if (!(var2 == var4)) {
                    _fun41314_ip = 50;
                    continue _fun41314
                }
            case 45:
                var4 = var0.id;
            case 50:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.extractTimestamp;
                var3 = var1.bind(var3)(var4);
                var1 = var0.threadMetadata;
                var1 = var1.archiveTimestamp;
                var1 = var2 != var1;
                var2 = 0;
                if (!var1) {
                    _fun41314_ip = 154;
                    continue _fun41314
                }
            case 104:
                var1 = global;
                var4 = var1.Date;
                var0 = var0.threadMetadata;
                var7 = var0.archiveTimestamp;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var1;
                var0 = new var8[var4](var7, var6);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.getTime;
                var2 = var0.bind(var1)();
            case 154:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.max;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
            case 175:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/getThreadAutoArchiveTimeOnce.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun41315: for (var _fun41315_ip = 0;;) switch (_fun41315_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.threadMetadata;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun41315_ip = 83;
                    continue _fun41315
                }
            case 15:
                var0 = var3.threadMetadata;
                var4 = var0.autoArchiveDuration;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.Millis;
                var1 = var1.MINUTE;
                var1 = var4 * var1;
                var0 = _closure1_slot3;
                var0 = var0.bind(var2)(var3);
                var0 = var0 + var1;
                return var0;
            case 83:
                var0 = 0;
                return var0;
        }
    };
    var2.default = var3;
    var2.getThreadLastActivityTime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3947, 667, 21, 2]);