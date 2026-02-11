// modules/applications/utils/ApplicationFlagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var3 = function arg0() {
        _fun48380: for (var _fun48380_ip = 0;;) switch (_fun48380_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun48380_ip = 202;
                    continue _fun48380
                }
            case 12:
                var2 = var0 != var1;
                if (!var2) {
                    _fun48380_ip = 127;
                    continue _fun48380
                }
            case 19:
                var3 = _closure1_slot2;
                var3 = var1 instanceof var3;
                if (var3) {
                    _fun48380_ip = 63;
                    continue _fun48380
                }
            case 33:
                var4 = 'flags';
                var4 = var4 in var1;
                if (!var4) {
                    _fun48380_ip = 60;
                    continue _fun48380
                }
            case 44:
                var5 = var1.flags;
                var6 = 'bigint';
                var5 = typeof var5;
                var4 = var6 === var5;
            case 60:
                var3 = var4;
            case 63:
                if (var3) {
                    _fun48380_ip = 124;
                    continue _fun48380
                }
            case 66:
                var4 = 'flags';
                var4 = var4 in var1;
                if (!var4) {
                    _fun48380_ip = 86;
                    continue _fun48380
                }
            case 77:
                var5 = var1.flags;
                var4 = var0 != var5;
            case 86:
                if (!var4) {
                    _fun48380_ip = 105;
                    continue _fun48380
                }
            case 89:
                var5 = var1.flags;
                var6 = 'object';
                var5 = typeof var5;
                var4 = var6 === var5;
            case 105:
                if (!var4) {
                    _fun48380_ip = 121;
                    continue _fun48380
                }
            case 108:
                var6 = var1.flags;
                var5 = 'parts';
                var4 = var5 in var6;
            case 121:
                var3 = var4;
            case 124:
                var2 = var3;
            case 127:
                if (var2) {
                    _fun48380_ip = 195;
                    continue _fun48380
                }
            case 130:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.deserialize;
                var4 = var1.flags_new;
                if (!(var0 == var4)) {
                    _fun48380_ip = 176;
                    continue _fun48380
                }
            case 171:
                var4 = var1.flags;
            case 176:
                var5 = var0 != var4;
                var0 = 0;
                if (!var5) {
                    _fun48380_ip = 188;
                    continue _fun48380
                }
            case 185:
                var0 = var4;
            case 188:
                var0 = var2.bind(var3)(var0);
                _fun48380_ip = 200;
                continue _fun48380;
            case 195:
                var0 = var1.flags;
            case 200:
                _fun48380_ip = 240;
                continue _fun48380;
            case 202:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.deserialize;
                var1 = 0;
                var0 = var2.bind(var3)(var1);
            case 240:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/utils/ApplicationFlagUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getApplicationFlags = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.has;
        var1 = _closure1_slot3;
        var0 = arg0;
        var1 = var1.bind(var4)(var0);
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.hasApplicationFlag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3452, 484, 2]);