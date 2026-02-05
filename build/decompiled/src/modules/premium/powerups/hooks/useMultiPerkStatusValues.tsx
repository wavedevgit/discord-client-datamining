// modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.PowerupActiveStatusType;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102551: for (var _fun102551_ip = 0;;) switch (_fun102551_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.guildId;
                var1 = var1.powerups;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var2 = var6[var2];
                var7 = undefined;
                var4 = var4.bind(var7)(var2);
                var2 = var4.usePowerupsActiveStatuses;
                var9 = var2.bind(var4)(var5, var1);
                var4 = var9.some;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot3;
                    var0 = var0.INACTIVE;
                    var0 = var1 !== var0;
                    return var0;
                };
                var8 = var4.bind(var9)(var2);
                var1 = var1.length;
                var6 = 0;
                if (!(!(var1 <= var6))) {
                    _fun102551_ip = 391;
                    continue _fun102551
                }
            case 85:
                var2 = var9.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun102553: for (var _fun102553_ip = 0;;) switch (_fun102553_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            var0 = var0.sourceEntitlement;
                            var1 = null;
                            var4 = var1 == var0;
                            var2 = undefined;
                            if (var4) {
                                _fun102553_ip = 29;
                                continue _fun102553
                            }
                        case 23:
                            var2 = var0.ends_at;
                        case 29:
                            var0 = var3;
                            if (!(var1 != var2)) {
                                _fun102553_ip = 53;
                                continue _fun102553
                            }
                        case 36:
                            if (!(var1 != var3)) {
                                _fun102553_ip = 47;
                                continue _fun102553
                            }
                        case 40:
                            var1 = var3;
                            if (!(var2 < var3)) {
                                _fun102553_ip = 50;
                                continue _fun102553
                            }
                        case 47:
                            var1 = var2;
                        case 50:
                            var0 = var1;
                        case 53:
                            return var0;
                    }
                };
                var4 = var2.bind(var9)(var1, var7);
                var2 = null;
                if (!(var2 == var4)) {
                    _fun102551_ip = 192;
                    continue _fun102551
                }
            case 110:
                var5 = undefined;
                if (!var8) {
                    _fun102551_ip = 212;
                    continue _fun102551
                }
            case 115:
                var1 = {};
                var10 = 'active';
                var1.type = var10;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 2;
                var10 = var13[var10];
                var10 = var11.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var12 = _closure1_slot1;
                var3 = 3;
                var3 = var13[var3];
                var3 = var12.bind(var7)(var3);
                var3 = var3.FFLkmx;
                var3 = var10.bind(var11)(var3);
                var1.statusText = var3;
                var5 = var1;
                _fun102551_ip = 212;
                continue _fun102551;
            case 192:
                var1 = {};
                var3 = 'expiring';
                var1.type = var3;
                var1.expiringAt = var4;
                var5 = var1;
            case 212:
                var3 = var9.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun102554: for (var _fun102554_ip = 0;;) switch (_fun102554_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            var4 = var0.type;
                            var1 = var0.powerup;
                            var0 = _closure1_slot3;
                            var3 = var0.POWERUP_ACTIVATED;
                            var0 = var2;
                            if (!(var4 === var3)) {
                                _fun102554_ip = 47;
                                continue _fun102554
                            }
                        case 37:
                            var1 = var1.cost;
                            var0 = var2 + var1;
                        case 47:
                            return var0;
                    }
                };
                var3 = var3.bind(var9)(var1, var6);
                var10 = var9.reduce;
                var11 = var9[var6];
                var12 = var2 == var11;
                var1 = undefined;
                if (var12) {
                    _fun102551_ip = 271;
                    continue _fun102551
                }
            case 250:
                var11 = var11.powerup;
                var12 = var2 == var11;
                var1 = undefined;
                if (var12) {
                    _fun102551_ip = 271;
                    continue _fun102551
                }
            case 265:
                var1 = var11.cost;
            case 271:
                var11 = var2 != var1;
                var2 = 0;
                if (!var11) {
                    _fun102551_ip = 283;
                    continue _fun102551
                }
            case 280:
                var2 = var1;
            case 283:
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun102555: for (var _fun102555_ip = 0;;) switch (_fun102555_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var4 = var1.powerup;
                            var3 = null;
                            var1 = var3 == var4;
                            var6 = undefined;
                            if (var1) {
                                _fun102555_ip = 29;
                                continue _fun102555
                            }
                        case 23:
                            var6 = var4.cost;
                        case 29:
                            var7 = var3 != var6;
                            var5 = 0;
                            if (!var7) {
                                _fun102555_ip = 41;
                                continue _fun102555
                            }
                        case 38:
                            var5 = var6;
                        case 41:
                            if (!(!(var0 < var5))) {
                                _fun102555_ip = 75;
                                continue _fun102555
                            }
                        case 45:
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun102555_ip = 60;
                                continue _fun102555
                            }
                        case 54:
                            var2 = var4.cost;
                        case 60:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun102555_ip = 72;
                                continue _fun102555
                            }
                        case 69:
                            var1 = var2;
                        case 72:
                            var0 = var1;
                        case 75:
                            return var0;
                    }
                };
                var2 = var10.bind(var9)(var1, var2);
                var1 = var9.reduce;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun102556: for (var _fun102556_ip = 0;;) switch (_fun102556_ip) {
                        case 0:
                            var0 = arg1;
                            var2 = var0.powerup;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun102556_ip = 26;
                                continue _fun102556
                            }
                        case 20:
                            var0 = var2.cost;
                        case 26:
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun102556_ip = 38;
                                continue _fun102556
                            }
                        case 35:
                            var1 = var0;
                        case 38:
                            var0 = arg0;
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var9)(var0, var6);
                var6 = var2;
                if (!var8) {
                    _fun102551_ip = 324;
                    continue _fun102551
                }
            case 321:
                var6 = var3;
            case 324:
                var0 = {};
                var0.isActive = var8;
                var0.status = var5;
                var0.cost = var6;
                var5 = undefined;
                if (var8) {
                    _fun102551_ip = 358;
                    continue _fun102551
                }
            case 345:
                var6 = var1 > var6;
                var5 = undefined;
                if (!var6) {
                    _fun102551_ip = 358;
                    continue _fun102551
                }
            case 354:
                var5 = '+';
            case 358:
                var0.costDecorator = var5;
                var0.expiringAt = var4;
                var0.activeCost = var3;
                var0.minCost = var2;
                var0.totalCost = var1;
                return var0;
            case 391:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6737, 13358, 1234, 1890, 2]);