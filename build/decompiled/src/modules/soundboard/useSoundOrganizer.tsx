// modules/soundboard/useSoundOrganizer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun68908: for (var _fun68908_ip = 0;;) switch (_fun68908_ip) {
            case 0:
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun68908_ip = 13;
                    continue _fun68908
                }
            case 11:
                var4 = true;
            case 13:
                var5 = new Array(0);
                var7 = arg0;
                var6 = 0;
                var8 = var5;
                var0 = arraySpread(var8, var7, var6);
                var2 = var5.sort;
                var0 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var0 = arg0;
                    var1 = var0.soundId;
                    var0 = arg1;
                    var0 = var0.soundId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var5)(var0);
                var0 = var2;
                if (!var4) {
                    _fun68908_ip = 65;
                    continue _fun68908
                }
            case 53:
                var1 = function arg0() {
                    var2 = new Array(0);
                    var4 = arg0;
                    var3 = 0;
                    var5 = var2;
                    var0 = arraySpread(var5, var4, var3);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun68911: for (var _fun68911_ip = 0;;) switch (_fun68911_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = arg1;
                                var0 = var1.available;
                                if (!var0) {
                                    _fun68911_ip = 30;
                                    continue _fun68911
                                }
                            case 15:
                                var3 = var2.available;
                                var0 = -1;
                                if (!var3) {
                                    _fun68911_ip = 58;
                                    continue _fun68911
                                }
                            case 30:
                                var4 = var1.available;
                                var1 = 0;
                                if (var4) {
                                    _fun68911_ip = 55;
                                    continue _fun68911
                                }
                            case 41:
                                var2 = var2.available;
                                var1 = 0;
                                if (!var2) {
                                    _fun68911_ip = 55;
                                    continue _fun68911
                                }
                            case 52:
                                var1 = 1;
                            case 55:
                                var0 = var1;
                            case 58:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var3)(var2);
            case 65:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSoundOrganizer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.sortSoundsOldestToNewestCreationDate = var3;
    var1 = function() {
        var0 = _closure1_slot2;
        return var0;
    };
    var2.useSoundOrganizer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [21, 2]);