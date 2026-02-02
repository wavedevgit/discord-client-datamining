// lib/NetworkTtlCache.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = {};
    var7 = 'idle';
    var3.IDLE = var7;
    var6 = 'loading';
    var3.LOADING = var6;
    var4 = 'success';
    var3.SUCCESS = var4;
    var4 = 'error';
    var3.ERROR = var4;
    var _closure1_slot2 = var3;
    var3 = {};
    var3.IDLE = var7;
    var3.LOADING = var6;
    var6 = 'valid';
    var3.VALID = var6;
    var6 = 'stale';
    var3.STALE = var6;
    var3.ERROR = var4;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            _fun95760: for (var _fun95760_ip = 0;;) switch (_fun95760_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun95760_ip = 14;
                        continue _fun95760
                    }
                case 12:
                    var3 = {};
                case 14:
                    var5 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var0)(var2, var1);
                    var1 = null;
                    var2.value = var1;
                    var4 = _closure1_slot2;
                    var4 = var4.IDLE;
                    var2.fetchState = var4;
                    var2.fetchedAt = var1;
                    var3 = var3.ttlMs;
                    var4 = var1 != var3;
                    if (!var4) {
                        _fun95760_ip = 80;
                        continue _fun95760
                    }
                case 77:
                    var1 = var3;
                case 80:
                    var2.ttlMs = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setTtl';
        var0.key = var1;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.ttlMs = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(18);
        var1[0] = var0;
        var0 = {};
        var5 = 'setLoading';
        var0.key = var5;
        var5 = function() {
            var0 = _closure1_slot2;
            var1 = var0.LOADING;
            var0 = this;
            var0.fetchState = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setValue';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var0 = arg0;
            var1.value = var0;
            var0 = _closure1_slot2;
            var0 = var0.SUCCESS;
            var1.fetchState = var0;
            var0 = global;
            var2 = var0.Date;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.fetchedAt = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setError';
        var0.key = var5;
        var5 = function() {
            var0 = _closure1_slot2;
            var1 = var0.ERROR;
            var0 = this;
            var0.fetchState = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = null;
            var1.value = var0;
            var2 = _closure1_slot2;
            var2 = var2.IDLE;
            var1.fetchState = var2;
            var1.fetchedAt = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getValue';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.value;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getFetchState';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.fetchState;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getFetchedAt';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.fetchedAt;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'forceExpire';
        var0.key = var5;
        var5 = function() {
            var1 = null;
            var0 = this;
            var0.fetchedAt = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isExpired';
        var0.key = var5;
        var5 = function() {
            _fun95770: for (var _fun95770_ip = 0;;) switch (_fun95770_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.ttlMs;
                    var3 = null;
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun95770_ip = 71;
                        continue _fun95770
                    }
                case 18:
                    var1 = var2.fetchedAt;
                    var1 = var3 == var1;
                    if (var1) {
                        _fun95770_ip = 68;
                        continue _fun95770
                    }
                case 31:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = var2.fetchedAt;
                    var3 = var4 - var3;
                    var2 = var2.ttlMs;
                    var1 = var3 >= var2;
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'shouldFetch';
        var0.key = var5;
        var5 = function() {
            _fun95771: for (var _fun95771_ip = 0;;) switch (_fun95771_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.fetchState;
                    var0 = _closure1_slot2;
                    var0 = var0.LOADING;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun95771_ip = 65;
                        continue _fun95771
                    }
                case 29:
                    var2 = var3.fetchState;
                    var1 = _closure1_slot2;
                    var1 = var1.IDLE;
                    var1 = var2 === var1;
                    if (var1) {
                        _fun95771_ip = 62;
                        continue _fun95771
                    }
                case 52:
                    var2 = var3.isExpired;
                    var1 = var2.bind(var3)();
                case 62:
                    var0 = var1;
                case 65:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'isLoading';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.fetchState;
            var0 = _closure1_slot2;
            var0 = var0.LOADING;
            var0 = var1 === var0;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'isValid';
        var0.key = var5;
        var5 = function() {
            _fun95773: for (var _fun95773_ip = 0;;) switch (_fun95773_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.fetchState;
                    var0 = _closure1_slot2;
                    var0 = var0.SUCCESS;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun95773_ip = 42;
                        continue _fun95773
                    }
                case 29:
                    var1 = var2.isExpired;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'isError';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.fetchState;
            var0 = _closure1_slot2;
            var0 = var0.ERROR;
            var0 = var1 === var0;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'getStatus';
        var0.key = var5;
        var5 = function() {
            _fun95775: for (var _fun95775_ip = 0;;) switch (_fun95775_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.fetchState;
                    var1 = _closure1_slot2;
                    var1 = var1.IDLE;
                    if (!(var1 !== var3)) {
                        _fun95775_ip = 129;
                        continue _fun95775
                    }
                case 26:
                    var1 = _closure1_slot2;
                    var1 = var1.LOADING;
                    if (!(var1 !== var3)) {
                        _fun95775_ip = 117;
                        continue _fun95775
                    }
                case 40:
                    var1 = _closure1_slot2;
                    var1 = var1.ERROR;
                    if (!(var1 !== var3)) {
                        _fun95775_ip = 105;
                        continue _fun95775
                    }
                case 54:
                    var1 = _closure1_slot2;
                    var1 = var1.SUCCESS;
                    if (!(var1 !== var3)) {
                        _fun95775_ip = 72;
                        continue _fun95775
                    }
                case 68:
                    var1 = undefined;
                    return var1;
                case 72:
                    var1 = var2.isExpired;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot3;
                    if (var1) {
                        _fun95775_ip = 97;
                        continue _fun95775
                    }
                case 89:
                    var1 = var2.VALID;
                    _fun95775_ip = 103;
                    continue _fun95775;
                case 97:
                    var1 = var2.STALE;
                case 103:
                    return var1;
                case 105:
                    var1 = _closure1_slot3;
                    var1 = var1.ERROR;
                    return var1;
                case 117:
                    var1 = _closure1_slot3;
                    var1 = var1.LOADING;
                    return var1;
                case 129:
                    var0 = _closure1_slot3;
                    var0 = var0.IDLE;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'getValueWithStatus';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = {};
            var1 = var2.value;
            var0.value = var1;
            var1 = var2.getStatus;
            var1 = var1.bind(var2)();
            var0.status = var1;
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'serialize';
        var0.key = var5;
        var5 = function() {
            _fun95777: for (var _fun95777_ip = 0;;) switch (_fun95777_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.value;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = null;
                    if (var1) {
                        _fun95777_ip = 59;
                        continue _fun95777
                    }
                case 19:
                    var1 = var2.fetchedAt;
                    var1 = var3 == var1;
                    var0 = null;
                    if (var1) {
                        _fun95777_ip = 59;
                        continue _fun95777
                    }
                case 34:
                    var1 = {};
                    var3 = var2.value;
                    var1.value = var3;
                    var2 = var2.fetchedAt;
                    var1.fetchedAt = var2;
                    var0 = var1;
                case 59:
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'restore';
        var0.key = var5;
        var4 = function arg0() {
            _fun95778: for (var _fun95778_ip = 0;;) switch (_fun95778_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun95778_ip = 54;
                        continue _fun95778
                    }
                case 12:
                    var2 = var0.value;
                    var1.value = var2;
                    var0 = var0.fetchedAt;
                    var1.fetchedAt = var0;
                    var0 = _closure1_slot2;
                    var0 = var0.SUCCESS;
                    var1.fetchState = var0;
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[17] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/NetworkTtlCache.tsx';
    var4 = var5.bind(var6)(var4);
    var2.NetworkTtlCacheStatus = var3;
    var2.NetworkTtlCache = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);