// modules/go_live/utils/StreamerApplicationSelectors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot4;
        var0 = var0.PLAYING;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot5 = var0;
    var5 = function arg0, arg1() {
        var3 = arg1;
        var2 = var3.findActivity;
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var5;
    var4 = function arg0, arg1() {
        _fun54393: for (var _fun54393_ip = 0;;) switch (_fun54393_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun54393_ip = 36;
                    continue _fun54393
                }
            case 12:
                var4 = _closure1_slot6;
                var3 = var1.ownerId;
                var2 = undefined;
                var1 = arg1;
                var0 = var4.bind(var2)(var3, var1);
            case 36:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0, arg1() {
        _fun54394: for (var _fun54394_ip = 0;;) switch (_fun54394_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun54394_ip = 62;
                    continue _fun54394
                }
            case 9:
                var3 = _closure1_slot7;
                var2 = undefined;
                var1 = arg1;
                var3 = var3.bind(var2)(var4, var1);
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun54394_ip = 60;
                    continue _fun54394
                }
            case 36:
                var2 = {};
                var4 = var3.application_id;
                var2.id = var4;
                var3 = var3.name;
                var2.name = var3;
                var1 = var2;
            case 60:
                return var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function arg0, arg1() {
        _fun54395: for (var _fun54395_ip = 0;;) switch (_fun54395_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var5 === var4;
                if (var0) {
                    _fun54395_ip = 63;
                    continue _fun54395
                }
            case 13:
                var2 = null;
                var1 = var2 != var5;
                if (!var1) {
                    _fun54395_ip = 26;
                    continue _fun54395
                }
            case 22:
                var1 = var2 != var4;
            case 26:
                if (!var1) {
                    _fun54395_ip = 60;
                    continue _fun54395
                }
            case 29:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var1 = var2.bind(var3)(var5, var4);
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ActivityTypes;
    var _closure1_slot4 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/go_live/utils/StreamerApplicationSelectors.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getStreamerActivityByUserId = var5;
    var2.getStreamerActivity = var4;
    var2.getStreamerApplication = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var7 = _closure1_slot9;
        var9 = function() { // Environment: var0
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var11 = var5;
        var10 = var3;
        var8 = var2;
        var0 = var11[var4](var10, var9, var8, var7, var6);
        return var0;
    };
    var2.useGetStreamApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3610, 660, 628, 566, 2]);