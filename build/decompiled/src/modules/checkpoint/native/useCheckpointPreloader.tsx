// modules/checkpoint/native/useCheckpointPreloader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchStates;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var3 = new Array(13);
    var3[0] = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[1] = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[2] = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[3] = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[4] = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[5] = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[6] = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[7] = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[8] = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[9] = var6;
    var6 = 13;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[10] = var6;
    var6 = 14;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[11] = var6;
    var6 = 15;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var3[12] = var6;
    var _closure1_slot6 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/useCheckpointPreloader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useCheckpointPreloader, environment: var1
        _fun87079: for (var _fun87079_ip = 0;;) switch (_fun87079_ip) {
            case 0:
                var5 = _closure1_slot3;
                var1 = var5.useRef;
                var0 = 0;
                var1 = var1.bind(var5)(var0);
                var _closure2_slot0 = var1;
                var4 = var5.useRef;
                var1 = true;
                var1 = var4.bind(var5)(var1);
                var _closure2_slot1 = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 16;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = var4.useMaybeFetchCheckpointData;
                var6 = var1.bind(var4)();
                var1 = _closure1_slot5;
                var1 = var1.SUCCESS;
                var1 = var6 === var1;
                if (var1) {
                    _fun87079_ip = 104;
                    continue _fun87079
                }
            case 90:
                var4 = _closure1_slot5;
                var4 = var4.ERROR;
                var1 = var6 === var4;
            case 104:
                var7 = _closure1_slot3;
                var6 = var7.useState;
                var4 = false;
                var7 = var6.bind(var7)(var4);
                var6 = _closure1_slot2;
                var4 = 2;
                var6 = var6.bind(var5)(var7, var4);
                var0 = var6[var0];
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot2 = var4;
                var4 = _closure1_slot4;
                var6 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.HTTP;
                        var1 = var2.get;
                        var0 = {};
                        var3 = arg0;
                        var0.url = var3;
                        var3 = true;
                        var0.rejectWithError = var3;
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.then;
                        var0 = function() { // Environment: var0
                            _fun87082: for (var _fun87082_ip = 0;;) switch (_fun87082_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var1 = var1.current;
                                    if (!var1) {
                                        _fun87082_ip = 71;
                                        continue _fun87082
                                    }
                                case 15:
                                    var1 = _closure2_slot0;
                                    var3 = var1.current;
                                    var2 = 1;
                                    var2 = var3 + var2;
                                    var1.current = var2;
                                    var2 = var1.current;
                                    var1 = _closure1_slot6;
                                    var1 = var1.length;
                                    if (!(var2 === var1)) {
                                        _fun87082_ip = 71;
                                        continue _fun87082
                                    }
                                case 58:
                                    var2 = _closure2_slot2;
                                    var1 = undefined;
                                    var0 = true;
                                    var0 = var2.bind(var1)(var0);
                                case 71:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = new Array(0);
                var3 = var4.bind(var5)(var6, var3);
                var3 = function() { // Environment: var2
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var4.bind(var5)(var3, var2);
                if (!var0) {
                    _fun87079_ip = 192;
                    continue _fun87079
                }
            case 189:
                var0 = var1;
            case 192:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 11128, 3143, 3145, 11150, 3149, 11133, 11136, 11147, 11175, 11168, 11192, 11181, 11141, 11182, 11196, 507, 2]);