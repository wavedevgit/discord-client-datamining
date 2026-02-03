// modules/collectibles/records/CollectiblesShopHomeRecord.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesUserDiscountRecord;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CountdownTimerBlockRecord;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeaturedBlockRecord;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedBlockRecord;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HeroBlockRecord;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ImmersiveBannerBlockRecord;
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RewardHeroBlockRecord;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ShelfBlockRecord;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WideBannerBlockRecord;
    var _closure1_slot13 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            _fun42561: for (var _fun42561_ip = 0;;) switch (_fun42561_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var6 = var1.shop_blocks;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var3
                        _fun42562: for (var _fun42562_ip = 0;;) switch (_fun42562_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = var2.type;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var6 = 12;
                                var3 = var1[var6];
                                var1 = undefined;
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.HERO;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 416;
                                    continue _fun42562
                                }
                            case 52:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.FEATURED;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 399;
                                    continue _fun42562
                                }
                            case 88:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.FEED;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 382;
                                    continue _fun42562
                                }
                            case 124:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.WIDE_BANNER;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 365;
                                    continue _fun42562
                                }
                            case 160:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.SHELF;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 348;
                                    continue _fun42562
                                }
                            case 196:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.COUNTDOWN_TIMER;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 331;
                                    continue _fun42562
                                }
                            case 229:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.IMMERSIVE_BANNER;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 314;
                                    continue _fun42562
                                }
                            case 262:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.ShopBlockType;
                                var3 = var3.REWARD_HERO;
                                if (!(var3 !== var4)) {
                                    _fun42562_ip = 297;
                                    continue _fun42562
                                }
                            case 295:
                                return var1;
                            case 297:
                                var3 = _closure1_slot11;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 314:
                                var3 = _closure1_slot10;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 331:
                                var3 = _closure1_slot6;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 348:
                                var3 = _closure1_slot12;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 365:
                                var3 = _closure1_slot13;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 382:
                                var3 = _closure1_slot8;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 399:
                                var3 = _closure1_slot7;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 416:
                                var1 = _closure1_slot9;
                                var0 = var1.fromServer;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.filter;
                    var4 = function(arg0) { // Environment: var3
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var2.shopBlocks = var4;
                    var6 = var1.categories;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot4;
                        var1 = var2.fromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var2.categories = var4;
                    var5 = var1.user_discounts;
                    var1 = null;
                    var4 = var1 == var5;
                    var1 = undefined;
                    if (var4) {
                        _fun42561_ip = 133;
                        continue _fun42561
                    }
                case 118:
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot5;
                        var1 = var2.fromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var3);
                case 133:
                    var2.userDiscounts = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
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
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesShopHomeRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CollectiblesShopHomeRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4618, 4625, 4634, 4635, 4638, 4639, 4640, 4641, 4642, 4643, 3316, 2]);