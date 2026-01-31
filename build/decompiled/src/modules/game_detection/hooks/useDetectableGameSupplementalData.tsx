// modules/game_detection/hooks/useDetectableGameSupplementalData.tsx
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
            _fun62300: for (var _fun62300_ip = 0;;) switch (_fun62300_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun62300_ip = 35;
                        continue _fun62300
                    }
                case 13:
                    var2 = _closure1_slot7;
                    var1 = var2.request;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 35:
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
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2._fetched = var5;
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
            _fun62304: for (var _fun62304_ip = 0;;) switch (_fun62304_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0._pending;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var3);
                    if (var1) {
                        _fun62304_ip = 41;
                        continue _fun62304
                    }
                case 25:
                    var4 = var0._fetched;
                    var2 = var4.has;
                    var1 = var2.bind(var4)(var3);
                case 41:
                    if (var1) {
                        _fun62304_ip = 79;
                        continue _fun62304
                    }
                case 44:
                    var2 = var0._pending;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var2 = var0._flushHandler;
                    var1 = var2.delay;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 79:
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
            var0 = this;
            var _closure3_slot0 = var0;
            var5 = new Array(0);
            var _closure3_slot1 = var5;
            var4 = var0._pending;
            var3 = var4.forEach;
            var2 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = _closure3_slot0;
                var3 = var1._fetched;
                var1 = var3.add;
                var1 = var1.bind(var3)(var2);
                var1 = _closure3_slot1;
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var2 = var3.bind(var4)(var2);
            var2 = var0._pending;
            var0 = var2.clear;
            var0 = var0.bind(var2)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 5;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.chunk;
            var2 = 20;
            var3 = var3.bind(var4)(var5, var2);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getDetectableGamesSupplemental;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
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
    var4 = 'modules/game_detection/hooks/useDetectableGameSupplementalData.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useRequestDetectableGameSupplementalData = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot8;
        var4 = undefined;
        var3 = var3.bind(var4)(var5);
        var6 = _closure1_slot5;
        var5 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun62309: for (var _fun62309_ip = 0;;) switch (_fun62309_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    var1 = var0 != var1;
                    var0 = undefined;
                    if (!var1) {
                        _fun62309_ip = 39;
                        continue _fun62309
                    }
                case 18:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var2 = var2.coverImageSize;
                    var1.size = var2;
                    var0 = var1;
                case 39:
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var2, var3);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 7;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun62310: for (var _fun62310_ip = 0;;) switch (_fun62310_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun62310_ip = 101;
                        continue _fun62310
                    }
                case 13:
                    var0 = {};
                    var4 = _closure1_slot6;
                    var2 = var4.isFetching;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.isFetching = var2;
                    var2 = var4.getLocalizedName;
                    var2 = var2.bind(var4)(var3);
                    var0.localizedName = var2;
                    var2 = var4.getThemes;
                    var2 = var2.bind(var4)(var3);
                    var0.themes = var2;
                    var2 = var4.getCoverImageUrl;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var3, var1);
                    var0.coverImageUrl = var1;
                    _fun62310_ip = 130;
                    continue _fun62310;
                case 101:
                    var1 = {};
                    var2 = false;
                    var1.isFetching = var2;
                    var2 = undefined;
                    var1.localizedName = var2;
                    var1.themes = var2;
                    var1.coverImageUrl = var2;
                    var0 = var1;
                case 130:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useDetectableGameSupplementalData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 4634, 3589, 22, 4632, 566, 2]);