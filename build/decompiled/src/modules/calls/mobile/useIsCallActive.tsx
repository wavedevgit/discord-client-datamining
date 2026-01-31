// modules/calls/mobile/useIsCallActive.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun55390: for (var _fun55390_ip = 0;;) switch (_fun55390_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot2;
                var2 = var4.isCallActive;
                var0 = arg1;
                var0 = var2.bind(var4)(var3, var0);
                if (!var0) {
                    _fun55390_ip = 61;
                    continue _fun55390
                }
            case 28:
                var2 = _closure1_slot3;
                var1 = var2.getParticipants;
                var3 = var1.bind(var2)(var3);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun55391: for (var _fun55391_ip = 0;;) switch (_fun55391_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot4;
                            var0 = var0.USER;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun55391_ip = 37;
                                continue _fun55391
                            }
                        case 28:
                            var1 = var1.ringing;
                            var0 = !var1;
                        case 37:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 61:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/mobile/useIsCallActive.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.checkIsCallActive = var3;
    var1 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun55395: for (var _fun55395_ip = 0;;) switch (_fun55395_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun55395_ip = 39;
                        continue _fun55395
                    }
                case 16:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var2);
                case 39:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsCallActiveNullable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3434, 3907, 3482, 566, 2]);