// modules/collectibles/records/CollectiblesMarketingRecord.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMarketingBadgeRecord;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMarketingBannerRecord;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMarketingCoachmarkRecord;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.marketingsBySurfaces = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
            _fun42538: for (var _fun42538_ip = 0;;) switch (_fun42538_ip) {
                case 0:
                    var7 = arg0;
                    var2 = _closure2_slot0;
                    var0 = global;
                    var3 = var0.Object;
                    var1 = var3.fromEntries;
                    var5 = var0.Object;
                    var4 = var5.entries;
                    var6 = null;
                    var8 = var6 == var7;
                    var0 = undefined;
                    if (var8) {
                        _fun42538_ip = 53;
                        continue _fun42538
                    }
                case 47:
                    var0 = var7.marketings;
                case 53:
                    if (!(var6 == var0)) {
                        _fun42538_ip = 59;
                        continue _fun42538
                    }
                case 57:
                    var0 = {};
                case 59:
                    var5 = var4.bind(var5)(var0);
                    var4 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun42539: for (var _fun42539_ip = 0;;) switch (_fun42539_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5[Symbol.iterator];
                                var5 = var0().next;
                                var4 = var5().value;
                                var2 = var0;
                                var1 = undefined;
                                var2 = var2 === var1;
                                var3 = undefined;
                                if (var2) {
                                    _fun42539_ip = 27;
                                    continue _fun42539
                                }
                            case 24:
                                var3 = var4;
                            case 27:
                                var4 = undefined;
                                if (var2) {
                                    _fun42539_ip = 57;
                                    continue _fun42539
                                }
                            case 32:
                                var6 = var5().value;
                                var5 = var0;
                                var5 = var5 === var1;
                                var4 = undefined;
                                var2 = var5;
                                if (var5) {
                                    _fun42539_ip = 57;
                                    continue _fun42539
                                }
                            case 51:
                                var4 = var6;
                                var2 = var5;
                            case 57:
                                if (var2) {
                                    _fun42539_ip = 63;
                                    continue _fun42539
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var0 = null;
                                var2 = var0 == var4;
                                var6 = undefined;
                                if (var2) {
                                    _fun42539_ip = 79;
                                    continue _fun42539
                                }
                            case 74:
                                var6 = var4.type;
                            case 79:
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var7 = 6;
                                var5 = var5[var7];
                                var5 = var8.bind(var1)(var5);
                                var5 = var5.CollectiblesMarketingType;
                                var5 = var5.COACHTIP;
                                if (!(var6 !== var5)) {
                                    _fun42539_ip = 375;
                                    continue _fun42539
                                }
                            case 121:
                                var5 = var0 == var4;
                                var6 = undefined;
                                if (var5) {
                                    _fun42539_ip = 135;
                                    continue _fun42539
                                }
                            case 130:
                                var6 = var4.type;
                            case 135:
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var7];
                                var5 = var8.bind(var1)(var5);
                                var5 = var5.CollectiblesMarketingType;
                                var5 = var5.BADGE;
                                if (!(var6 !== var5)) {
                                    _fun42539_ip = 343;
                                    continue _fun42539
                                }
                            case 171:
                                var5 = var0 == var4;
                                var6 = undefined;
                                if (var5) {
                                    _fun42539_ip = 185;
                                    continue _fun42539
                                }
                            case 180:
                                var6 = var4.type;
                            case 185:
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var7];
                                var5 = var8.bind(var1)(var5);
                                var5 = var5.CollectiblesMarketingType;
                                var5 = var5.BANNER;
                                if (!(var6 !== var5)) {
                                    _fun42539_ip = 311;
                                    continue _fun42539
                                }
                            case 218:
                                var0 = var0 == var4;
                                var5 = undefined;
                                if (var0) {
                                    _fun42539_ip = 232;
                                    continue _fun42539
                                }
                            case 227:
                                var5 = var4.type;
                            case 232:
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var0 = var0[var7];
                                var0 = var6.bind(var1)(var0);
                                var0 = var0.CollectiblesMarketingType;
                                var0 = var0.COACHMARK;
                                if (!(var5 !== var0)) {
                                    _fun42539_ip = 279;
                                    continue _fun42539
                                }
                            case 265:
                                var0 = new Array(2);
                                var0[0] = var3;
                                var0[1] = var1;
                                _fun42539_ip = 309;
                                continue _fun42539;
                            case 279:
                                var1 = new Array(2);
                                var1[0] = var3;
                                var6 = _closure1_slot6;
                                var5 = var6.fromServer;
                                var5 = var5.bind(var6)(var4);
                                var1[1] = var5;
                                var0 = var1;
                            case 309:
                                _fun42539_ip = 341;
                                continue _fun42539;
                            case 311:
                                var1 = new Array(2);
                                var1[0] = var3;
                                var6 = _closure1_slot5;
                                var5 = var6.fromServer;
                                var5 = var5.bind(var6)(var4);
                                var1[1] = var5;
                                var0 = var1;
                            case 341:
                                _fun42539_ip = 373;
                                continue _fun42539;
                            case 343:
                                var1 = new Array(2);
                                var1[0] = var3;
                                var6 = _closure1_slot4;
                                var5 = var6.fromServer;
                                var5 = var5.bind(var6)(var4);
                                var1[1] = var5;
                                var0 = var1;
                            case 373:
                                _fun42539_ip = 405;
                                continue _fun42539;
                            case 375:
                                var1 = new Array(2);
                                var1[0] = var3;
                                var3 = _closure1_slot7;
                                var2 = var3.fromServer;
                                var2 = var2.bind(var3)(var4);
                                var1[1] = var2;
                                var0 = var1;
                            case 405:
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var0);
                    var9 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesMarketingRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CollectiblesMarketingsRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4627, 4629, 4630, 4631, 4628, 2]);