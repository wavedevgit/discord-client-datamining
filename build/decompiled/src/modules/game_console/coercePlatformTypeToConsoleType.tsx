// modules/game_console/coercePlatformTypeToConsoleType.tsx
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
    var3 = var3.GameConsoleTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/coercePlatformTypeToConsoleType.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun68749: for (var _fun68749_ip = 0;;) switch (_fun68749_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var1 = var1.XBOX;
                if (!(var1 !== var2)) {
                    _fun68749_ip = 64;
                    continue _fun68749
                }
            case 20:
                var1 = _closure1_slot1;
                var1 = var1.PLAYSTATION;
                if (!(var1 !== var2)) {
                    _fun68749_ip = 52;
                    continue _fun68749
                }
            case 34:
                var1 = _closure1_slot1;
                var1 = var1.PLAYSTATION_STAGING;
                if (!(var1 !== var2)) {
                    _fun68749_ip = 52;
                    continue _fun68749
                }
            case 48:
                var1 = null;
                return var1;
            case 52:
                var1 = _closure1_slot0;
                var1 = var1.PLAYSTATION;
                return var1;
            case 64:
                var0 = _closure1_slot0;
                var0 = var0.XBOX;
                return var0;
        }
    };
    var2.coercePlatformTypeToConsoleType = var3;
    var1 = function arg0, arg1() {
        _fun68750: for (var _fun68750_ip = 0;;) switch (_fun68750_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = _closure1_slot0;
                var1 = var1.XBOX;
                if (!(var1 !== var3)) {
                    _fun68750_ip = 109;
                    continue _fun68750
                }
            case 25:
                var1 = _closure1_slot0;
                var1 = var1.PLAYSTATION;
                if (!(var1 !== var3)) {
                    _fun68750_ip = 43;
                    continue _fun68750
                }
            case 39:
                var1 = null;
                return var1;
            case 43:
                var3 = var4.some;
                var1 = function(arg0) { // Environment: var2
                    _fun68751: for (var _fun68751_ip = 0;;) switch (_fun68751_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var1 = var0.twoWayLink;
                            var0 = _closure1_slot1;
                            var0 = var0.PLAYSTATION_STAGING;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun68751_ip = 37;
                                continue _fun68751
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun68752: for (var _fun68752_ip = 0;;) switch (_fun68752_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var1 = var0.twoWayLink;
                            var0 = _closure1_slot1;
                            var0 = var0.PLAYSTATION;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun68752_ip = 37;
                                continue _fun68752
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun68750_ip = 97;
                    continue _fun68750
                }
            case 82:
                if (!var1) {
                    _fun68750_ip = 97;
                    continue _fun68750
                }
            case 85:
                var1 = _closure1_slot1;
                var1 = var1.PLAYSTATION_STAGING;
                _fun68750_ip = 107;
                continue _fun68750;
            case 97:
                var2 = _closure1_slot1;
                var1 = var2.PLAYSTATION;
            case 107:
                return var1;
            case 109:
                var0 = _closure1_slot1;
                var0 = var0.XBOX;
                return var0;
        }
    };
    var2.coerceConsoleTypeToPlatformType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5391, 660, 2]);