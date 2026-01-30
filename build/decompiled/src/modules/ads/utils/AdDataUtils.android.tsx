// modules/ads/utils/AdDataUtils.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_TIMEOUT_MS;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/ads/utils/AdDataUtils.android.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getAdUser, environment: var1
        _fun46958: for (var _fun46958_ip = 0;;) switch (_fun46958_ip) {
            case 0:
                var2 = _closure1_slot4;
                var3 = var2.adUser;
                var1 = var2.isFetching;
                var2 = var2.hasFetchFailed;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun46958_ip = 110;
                    continue _fun46958
                }
            case 31:
                if (var2) {
                    _fun46958_ip = 110;
                    continue _fun46958
                }
            case 34:
                if (var1) {
                    _fun46958_ip = 73;
                    continue _fun46958
                }
            case 37:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchAdUser;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
            case 73:
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = false;
                    var _closure3_slot1 = var0;
                    var0 = global;
                    var5 = var0.setTimeout;
                    var3 = _closure1_slot5;
                    var0 = undefined;
                    var2 = function() { // Environment: var4
                        var2 = _closure3_slot4;
                        var1 = undefined;
                        var0 = null;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2 = var5.bind(var0)(var2, var3);
                    var _closure3_slot2 = var2;
                    var3 = function() { // Original name: handleUpdate, environment: var4
                        _fun46961: for (var _fun46961_ip = 0;;) switch (_fun46961_ip) {
                            case 0:
                                var1 = _closure1_slot4;
                                var2 = var1.adUser;
                                var1 = null;
                                var1 = var1 != var2;
                                if (var1) {
                                    _fun46961_ip = 32;
                                    continue _fun46961
                                }
                            case 22:
                                var2 = _closure1_slot4;
                                var1 = var2.hasFetchFailed;
                            case 32:
                                if (!var1) {
                                    _fun46961_ip = 59;
                                    continue _fun46961
                                }
                            case 35:
                                var2 = _closure3_slot4;
                                var0 = _closure1_slot4;
                                var1 = var0.adUser;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var3;
                    var2 = function(arg0) { // Original name: safeResolve, environment: var4
                        _fun46962: for (var _fun46962_ip = 0;;) switch (_fun46962_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                if (var1) {
                                    _fun46962_ip = 69;
                                    continue _fun46962
                                }
                            case 10:
                                var1 = true;
                                _closure3_slot1 = var1;
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var1 = _closure3_slot2;
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var4 = _closure1_slot4;
                                var3 = var4.removeChangeListener;
                                var1 = _closure3_slot3;
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 69:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot4 = var2;
                    var2 = _closure1_slot4;
                    var1 = var2.addChangeListener;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                _fun46958_ip = 129;
                continue _fun46958;
            case 110:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)(var3);
            case 129:
                return var0;
        }
    };
    var2.getAdUser = var3;
    var1 = function(arg0) { // Original name: useAdUser, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var2 = _closure1_slot4;
        var2 = var2.adUser;
        var6 = var3.bind(var4)(var2);
        var3 = _closure1_slot2;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var6, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun46964: for (var _fun46964_ip = 0;;) switch (_fun46964_ip) {
                case 0:
                    var3 = function() { // Original name: handleStoreChange, environment: var0
                        _fun46965: for (var _fun46965_ip = 0;;) switch (_fun46965_ip) {
                            case 0:
                                var1 = _closure1_slot4;
                                var2 = var1.adUser;
                                var1 = null;
                                var1 = var1 != var2;
                                if (var1) {
                                    _fun46965_ip = 32;
                                    continue _fun46965
                                }
                            case 22:
                                var2 = _closure1_slot4;
                                var1 = var2.hasFetchFailed;
                            case 32:
                                if (!var1) {
                                    _fun46965_ip = 59;
                                    continue _fun46965
                                }
                            case 35:
                                var2 = _closure2_slot1;
                                var0 = _closure1_slot4;
                                var1 = var0.adUser;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var3;
                    var2 = _closure1_slot4;
                    var6 = var2.adUser;
                    var5 = var2.isFetching;
                    var4 = var2.hasFetchFailed;
                    var2 = null;
                    var2 = var2 != var6;
                    if (var2) {
                        _fun46964_ip = 48;
                        continue _fun46964
                    }
                case 45:
                    var2 = var5;
                case 48:
                    if (var2) {
                        _fun46964_ip = 54;
                        continue _fun46964
                    }
                case 51:
                    var2 = var4;
                case 54:
                    if (var2) {
                        _fun46964_ip = 97;
                        continue _fun46964
                    }
                case 57:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.fetchAdUser;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                case 97:
                    var2 = _closure1_slot4;
                    var1 = var2.addChangeListener;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot4;
                        var1 = var2.removeChangeListener;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAdUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5234, 5235, 5236, 2]);