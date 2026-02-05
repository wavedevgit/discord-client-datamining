// modules/premium/useTrialOffer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun55407: for (var _fun55407_ip = 0;;) switch (_fun55407_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun55407_ip = 22;
                    continue _fun55407
                }
            case 12:
                var2 = var1.expires_at;
                var0 = var3 != var2;
            case 22:
                if (!var0) {
                    _fun55407_ip = 69;
                    continue _fun55407
                }
            case 25:
                var3 = global;
                var4 = var3.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var4 = var3.Date;
                var3 = var4.parse;
                var1 = var1.expires_at;
                var1 = var3.bind(var4)(var1);
                var0 = var2 > var1;
            case 69:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
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
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/useTrialOffer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.hasUserTrialOfferExpired = var3;
    var1 = function arg0() {
        _fun55408: for (var _fun55408_ip = 0;;) switch (_fun55408_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var1 = var7[var2];
                var5 = undefined;
                var9 = var6.bind(var5)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getUserTrialOffer;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var4, var1);
                var _closure2_slot1 = var1;
                var9 = _closure1_slot3;
                var8 = var9.useState;
                var4 = _closure1_slot6;
                var4 = var4.bind(var5)(var1);
                var9 = var8.bind(var9)(var4);
                var8 = _closure1_slot2;
                var4 = 2;
                var9 = var8.bind(var5)(var9, var4);
                var4 = 0;
                var4 = var9[var4];
                var _closure2_slot2 = var4;
                var8 = 1;
                var8 = var9[var8];
                var _closure2_slot3 = var8;
                var2 = var7[var2];
                var7 = var6.bind(var5)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isPremium;
                    var3 = _closure1_slot4;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var2);
                var2 = !var2;
                if (var2) {
                    _fun55408_ip = 180;
                    continue _fun55408
                }
            case 166:
                var6 = _closure1_slot5;
                var5 = var6.canFractionalPremiumUserUseOffer;
                var2 = var5.bind(var6)();
            case 180:
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var1;
                var0 = function() { // Environment: var0
                    _fun55411: for (var _fun55411_ip = 0;;) switch (_fun55411_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun55411_ip = 29;
                                continue _fun55411
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var1 = var1.expires_at;
                            if (!(var2 == var1)) {
                                _fun55411_ip = 33;
                                continue _fun55411
                            }
                        case 29:
                            var1 = undefined;
                            return var1;
                        case 33:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.Timeout;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var5 = var3;
                            var1 = new var5[var1](var4);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure3_slot0 = var1;
                            var1 = function() {
                                _fun55412: for (var _fun55412_ip = 0;;) switch (_fun55412_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var0 = var0.expires_at;
                                        var2 = null;
                                        var0 = var2 != var0;
                                        var3 = 0;
                                        if (!var0) {
                                            _fun55412_ip = 72;
                                            continue _fun55412
                                        }
                                    case 24:
                                        var0 = global;
                                        var5 = var0.Date;
                                        var4 = var5.parse;
                                        var1 = _closure2_slot1;
                                        var1 = var1.expires_at;
                                        var1 = var4.bind(var5)(var1);
                                        var4 = var0.Date;
                                        var0 = var4.now;
                                        var0 = var0.bind(var4)();
                                        var3 = var1 - var0;
                                    case 72:
                                        var1 = _closure3_slot0;
                                        if (!(var2 != var1)) {
                                            _fun55412_ip = 105;
                                            continue _fun55412
                                        }
                                    case 83:
                                        var2 = _closure3_slot0;
                                        var1 = var2.start;
                                        var0 = function() { // Environment: var0
                                            _fun55413: for (var _fun55413_ip = 0;;) switch (_fun55413_ip) {
                                                case 0:
                                                    var1 = _closure2_slot2;
                                                    if (var1) {
                                                        _fun55413_ip = 44;
                                                        continue _fun55413
                                                    }
                                                case 10:
                                                    var3 = _closure1_slot6;
                                                    var1 = _closure2_slot1;
                                                    var2 = undefined;
                                                    var1 = var3.bind(var2)(var1);
                                                    if (!var1) {
                                                        _fun55413_ip = 44;
                                                        continue _fun55413
                                                    }
                                                case 31:
                                                    var1 = _closure2_slot3;
                                                    var0 = true;
                                                    var0 = var1.bind(var2)(var0);
                                                    _fun55413_ip = 57;
                                                    continue _fun55413;
                                                case 44:
                                                    var1 = _closure3_slot1;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)();
                                                case 57:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 105:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var1;
                            var1 = var1.bind(var2)();
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.stop;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var3);
                var0 = null;
                if (var4) {
                    _fun55408_ip = 225;
                    continue _fun55408
                }
            case 217:
                var0 = null;
                if (!var2) {
                    _fun55408_ip = 225;
                    continue _fun55408
                }
            case 222:
                var0 = var1;
            case 225:
                return var0;
        }
    };
    var2.useTrialOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1621, 6664, 566, 3109, 3630, 2]);