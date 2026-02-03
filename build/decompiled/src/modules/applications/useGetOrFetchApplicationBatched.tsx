// modules/applications/useGetOrFetchApplicationBatched.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun78834: for (var _fun78834_ip = 0;;) switch (_fun78834_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun78834_ip = 28;
                        continue _fun78834
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = '';
                    var1 = var2 !== var3;
                case 28:
                    if (!var1) {
                        _fun78834_ip = 53;
                        continue _fun78834
                    }
                case 31:
                    var2 = _closure1_slot7;
                    var1 = var2.request;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot8 = var3;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = global;
            var5 = var4.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2._lastFetchedAttempted = var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var2._pending = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.DelayedCall;
            var3 = var5.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var8 = 32;
            var7 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1._flush;
                var0 = var0.bind(var1)();
                return var0;
            };
            var9 = var3;
            var1 = new var9[var5](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._flushHandler = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'request';
        var0.key = var1;
        var1 = function arg0() {
            _fun78838: for (var _fun78838_ip = 0;;) switch (_fun78838_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0._pending;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var3);
                    if (var1) {
                        _fun78838_ip = 119;
                        continue _fun78838
                    }
                case 25:
                    var2 = var0._lastFetchedAttempted;
                    var1 = var2.get;
                    var4 = var1.bind(var2)(var3);
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun78838_ip = 81;
                        continue _fun78838
                    }
                case 50:
                    var2 = global;
                    var5 = var2.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var4 = var2 - var4;
                    var2 = 60000;
                    var1 = var4 < var2;
                case 81:
                    if (var1) {
                        _fun78838_ip = 119;
                        continue _fun78838
                    }
                case 84:
                    var2 = var0._pending;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var2 = var0._flushHandler;
                    var1 = var2.delay;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = '_flush';
        var0.key = var5;
        var4 = function() {
            _fun78839: for (var _fun78839_ip = 0;;) switch (_fun78839_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = new Array(0);
                    var _closure3_slot1 = var3;
                    var5 = var1._pending;
                    var4 = var5.forEach;
                    var2 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var4 = var1._lastFetchedAttempted;
                        var3 = var4.set;
                        var1 = global;
                        var5 = var1.Date;
                        var1 = var5.now;
                        var1 = var1.bind(var5)();
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = _closure3_slot1;
                        var0 = var1.push;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = var1._pending;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var6 = new Array(0);
                    var _closure3_slot2 = var6;
                    var4 = new Array(0);
                    var _closure3_slot3 = var4;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun78841: for (var _fun78841_ip = 0;;) switch (_fun78841_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure1_slot6;
                                var0 = var1.didFetchingApplicationFail;
                                var1 = var0.bind(var1)(var2);
                                if (var1) {
                                    _fun78841_ip = 43;
                                    continue _fun78841
                                }
                            case 27:
                                var3 = _closure3_slot2;
                                var1 = var3.push;
                                var1 = var1.bind(var3)(var2);
                                _fun78841_ip = 57;
                                continue _fun78841;
                            case 43:
                                var1 = _closure3_slot3;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 57:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = var6.length;
                    var2 = 0;
                    if (!(var1 > var2)) {
                        _fun78839_ip = 157;
                        continue _fun78839
                    }
                case 100:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.chunk;
                    var1 = 20;
                    var5 = var3.bind(var5)(var6, var1);
                    var3 = var5.forEach;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.fetchApplications;
                        var2 = arg0;
                        var1 = false;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = var3.bind(var5)(var1);
                case 157:
                    var1 = var4.length;
                    if (!(var1 > var2)) {
                        _fun78839_ip = 223;
                        continue _fun78839
                    }
                case 166:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.chunk;
                    var1 = 20;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.fetchApplications;
                        var2 = arg0;
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 223:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var4.bind(var0)();
    var7 = var4.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var4
        }
    });
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useGetOrFetchApplicationBatched.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useRequestApplication = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var2 = _closure1_slot8;
        var4 = undefined;
        var2 = var2.bind(var4)(var5);
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun78845: for (var _fun78845_ip = 0;;) switch (_fun78845_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun78845_ip = 54;
                        continue _fun78845
                    }
                case 18:
                    var3 = _closure2_slot0;
                    var2 = '';
                    var0 = null;
                    if (!(var2 !== var3)) {
                        _fun78845_ip = 54;
                        continue _fun78845
                    }
                case 32:
                    var3 = _closure1_slot6;
                    var2 = var3.getApplication;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 54:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGetOrFetchApplicationBatched = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 3445, 3621, 22, 5339, 566, 2]);