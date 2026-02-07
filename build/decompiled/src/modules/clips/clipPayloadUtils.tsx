// modules/clips/clipPayloadUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.CLIPS_MAX_PARTICIPANTS;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/clips/clipPayloadUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = global;
        var2 = var0.Date;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var1);
        var1 = var3.extractTimestamp;
        var0 = arg0;
        var4 = var1.bind(var3)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var1.toISOString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getClipCreatedAt = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.slice;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getClipParticipantIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3502, 21, 2]);