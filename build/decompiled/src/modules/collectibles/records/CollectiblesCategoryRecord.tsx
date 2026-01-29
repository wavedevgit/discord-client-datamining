// modules/collectibles/records/CollectiblesCategoryRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun42184: for (var _fun42184_ip = 0;;) switch (_fun42184_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun42184_ip = 74;
                continue _fun42184;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: CollectiblesCategoryRecord, environment: var1
            _fun42188: for (var _fun42188_ip = 0;;) switch (_fun42188_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var3, var2);
                    var9 = new Array(1);
                    var9[0] = var1;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var4)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun42188_ip = 73;
                        continue _fun42188
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var9);
                    _fun42188_ip = 107;
                    continue _fun42188;
                case 73:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var4)(var3);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var2.bind(var4)(var3, var0);
                    var2 = var1.products;
                    var0.products = var2;
                    var2 = var1.heroRanking;
                    var0.heroRanking = var2;
                    var2 = global;
                    var5 = var2.Array;
                    var3 = var5.isArray;
                    var2 = var1.products;
                    var2 = var3.bind(var5)(var2);
                    if (!var2) {
                        _fun42188_ip = 181;
                        continue _fun42188
                    }
                case 164:
                    var3 = var1.products;
                    var5 = var3.length;
                    var3 = 0;
                    var2 = var5 > var3;
                case 181:
                    if (!var2) {
                        _fun42188_ip = 211;
                        continue _fun42188
                    }
                case 184:
                    var6 = var1.products;
                    var5 = var6.find;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isOrbsExclusiveProduct;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 === var3;
                case 211:
                    var0.isOrbsExclusive = var2;
                    var2 = var1.heroBannerUrl;
                    var0.heroBannerUrl = var2;
                    var2 = var1.heroBannerAnimatedUrl;
                    var0.heroBannerAnimatedUrl = var2;
                    var2 = var1.heroRiveUrl;
                    var0.heroRiveUrl = var2;
                    var2 = var1.heroLogoUrl;
                    var0.heroLogoUrl = var2;
                    var2 = var1.catalogBannerUrl;
                    var0.catalogBannerUrl = var2;
                    var2 = var1.catalogBannerAnimatedUrl;
                    var0.catalogBannerAnimatedUrl = var2;
                    var2 = var1.catalogBannerRiveUrl;
                    var0.catalogBannerRiveUrl = var2;
                    var2 = var1.featuredBlockUrl;
                    var0.featuredBlockUrl = var2;
                    var2 = var1.logoUrl;
                    var0.logoUrl = var2;
                    var2 = var1.pdpBgUrl;
                    var0.pdpBgUrl = var2;
                    var2 = var1.mobileBannerUrl;
                    var0.mobileBannerUrl = var2;
                    var2 = var1.mobileBgUrl;
                    var0.mobileBgUrl = var2;
                    var2 = var1.heroLogoDisplayConfig;
                    var0.heroLogoDisplayConfig = var2;
                    var1 = var1.heroBannerDisplayConfig;
                    var0.heroBannerDisplayConfig = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun42190: for (var _fun42190_ip = 0;;) switch (_fun42190_ip) {
                case 0:
                    var2 = arg0;
                    var25 = this;
                    var22 = var2.products;
                    var19 = var2.hero_ranking;
                    var9 = var2.hero_logo_display_config;
                    var4 = var2.hero_banner_display_config;
                    var18 = var2.hero_banner_url;
                    var17 = var2.hero_banner_animated_url;
                    var16 = var2.hero_rive_url;
                    var15 = var2.hero_logo_url;
                    var14 = var2.catalog_banner_url;
                    var13 = var2.catalog_banner_animated_url;
                    var12 = var2.catalog_banner_rive_url;
                    var11 = var2.featured_block_url;
                    var10 = var2.logo_url;
                    var8 = var2.pdp_bg_url;
                    var7 = var2.mobile_banner_url;
                    var6 = var2.mobile_bg_url;
                    var1 = {
                        'products': 0,
                        'hero_ranking': 0,
                        'hero_logo_display_config': 0,
                        'hero_banner_display_config': 0,
                        'hero_banner_url': 0,
                        'hero_banner_animated_url': 0,
                        'hero_rive_url': 0,
                        'hero_logo_url': 0,
                        'catalog_banner_url': 0,
                        'catalog_banner_animated_url': 0,
                        'catalog_banner_rive_url': 0,
                        'featured_block_url': 0,
                        'logo_url': 0,
                        'pdp_bg_url': 0,
                        'mobile_banner_url': 0,
                        'mobile_bg_url': 0
                    };
                    var27 = null;
                    var28 = var1;
                    var0 = silentSetPrototypeOf(var28, var27);
                    var28 = {};
                    var27 = var2;
                    var26 = var1;
                    var23 = copyDataProperties(var28, var27, var26);
                    var2 = _closure2_slot0;
                    var0 = {};
                    var _closure3_slot0 = var25;
                    var24 = _closure1_slot6;
                    var20 = _closure1_slot5;
                    var5 = undefined;
                    var21 = var20.bind(var5)(var2);
                    var20 = 'fromServer';
                    var21 = var24.bind(var5)(var21, var20, var25);
                    var _closure3_slot1 = var21;
                    var24 = 'function';
                    var20 = typeof var21;
                    if (!(var24 === var20)) {
                        _fun42190_ip = 201;
                        continue _fun42190
                    }
                case 196:
                    var21 = function(arg0) { // Environment: var3
                        var3 = _closure3_slot1;
                        var2 = var3.apply;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                case 201:
                    var20 = new Array(1);
                    var20[0] = var23;
                    var27 = var21.bind(var5)(var20);
                    var28 = var0;
                    var20 = copyDataProperties(var28, var27);
                    var21 = var22.reduce;
                    var20 = function(arg0, arg1) { // Environment: var3
                        _fun42192: for (var _fun42192_ip = 0;;) switch (_fun42192_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot8;
                                var2 = var4.fromServer;
                                var1 = arg1;
                                var2 = var2.bind(var4)(var1);
                                var4 = var2.type;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var7 = 8;
                                var1 = var1[var7];
                                var6 = undefined;
                                var1 = var5.bind(var6)(var1);
                                var1 = var1.CollectiblesItemType;
                                var1 = var1.VARIANTS_GROUP;
                                var1 = var4 !== var1;
                                if (!var1) {
                                    _fun42192_ip = 103;
                                    continue _fun42192
                                }
                            case 70:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var7];
                                var3 = var5.bind(var6)(var3);
                                var3 = var3.CollectiblesItemType;
                                var3 = var3.EXTERNAL_SKU;
                                var1 = var4 !== var3;
                            case 103:
                                if (!var1) {
                                    _fun42192_ip = 123;
                                    continue _fun42192
                                }
                            case 106:
                                var3 = var2.items;
                                var4 = var3.length;
                                var3 = 0;
                                var1 = var3 === var4;
                            case 123:
                                if (var1) {
                                    _fun42192_ip = 136;
                                    continue _fun42192
                                }
                            case 126:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 136:
                                return var0;
                        }
                    };
                    var3 = new Array(0);
                    var20 = var21.bind(var22)(var20, var3);
                    var3 = 'products';
                    var0[var3] = var20;
                    var3 = 'heroRanking';
                    var0[var3] = var19;
                    var3 = 'heroBannerUrl';
                    var0[var3] = var18;
                    var3 = 'heroBannerAnimatedUrl';
                    var0[var3] = var17;
                    var3 = 'heroRiveUrl';
                    var0[var3] = var16;
                    var3 = 'heroLogoUrl';
                    var0[var3] = var15;
                    var3 = 'catalogBannerUrl';
                    var0[var3] = var14;
                    var3 = 'catalogBannerAnimatedUrl';
                    var0[var3] = var13;
                    var3 = 'catalogBannerRiveUrl';
                    var0[var3] = var12;
                    var3 = 'featuredBlockUrl';
                    var0[var3] = var11;
                    var3 = 'logoUrl';
                    var0[var3] = var10;
                    var3 = 'pdpBgUrl';
                    var0[var3] = var8;
                    var3 = 'mobileBannerUrl';
                    var0[var3] = var7;
                    var3 = 'mobileBgUrl';
                    var0[var3] = var6;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 10;
                    var7 = var6[var1];
                    var8 = var3.bind(var5)(var7);
                    var7 = var8.getAssetDisplayConfig;
                    var8 = var7.bind(var8)(var9);
                    var7 = 'heroLogoDisplayConfig';
                    var0[var7] = var8;
                    var1 = var6[var1];
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.getAssetDisplayConfig;
                    var3 = var1.bind(var3)(var4);
                    var1 = 'heroBannerDisplayConfig';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var29 = var1;
                    var28 = var0;
                    var0 = new var29[var2](var28, var27);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesCategoryRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 4576, 4580, 3452, 4570, 4556, 2]);