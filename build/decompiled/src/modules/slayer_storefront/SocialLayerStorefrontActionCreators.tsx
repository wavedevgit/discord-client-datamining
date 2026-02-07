// modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93291: for (var _fun93291_ip = 0;;) switch (_fun93291_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93291_ip = 633;
                            continue _fun93291
                        }
                    case 13:
                        var7 = arg0;
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun93291_ip = 24;
                            continue _fun93291
                        }
                    case 22:
                        var3 = {};
                    case 24:
                        var6 = undefined;
                        var11 = undefined;
                        SaveGenerator(address = 32);
                    case 30:
                        return var2;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun93291_ip = 630;
                            continue _fun93291
                        }
                    case 41:
                        var5 = var3.eager;
                        var4 = var2 !== var5;
                        if (!var4) {
                            _fun93291_ip = 57;
                            continue _fun93291
                        }
                    case 54:
                        var4 = var5;
                    case 57:
                        var6 = var4;
                        var3 = var3.forceFetch;
                        var4 = var2 !== var3;
                        if (!var4) {
                            _fun93291_ip = 76;
                            continue _fun93291
                        }
                    case 73:
                        var4 = var3;
                    case 76:
                        var9 = _closure1_slot4;
                        var8 = var9.getStorefrontData;
                        var5 = var7;
                        var9 = var8.bind(var9)(var5);
                        var12 = null;
                        var5 = var12 == var9;
                        var10 = undefined;
                        if (var5) {
                            _fun93291_ip = 115;
                            continue _fun93291
                        }
                    case 110:
                        var10 = var9.state;
                    case 115:
                        var5 = var12 == var9;
                        var8 = undefined;
                        if (var5) {
                            _fun93291_ip = 129;
                            continue _fun93291
                        }
                    case 124:
                        var8 = var9.state;
                    case 129:
                        var5 = 'error';
                        var8 = var5 === var8;
                        if (!var8) {
                            _fun93291_ip = 159;
                            continue _fun93291
                        }
                    case 140:
                        var13 = var12 == var9;
                        var5 = undefined;
                        if (var13) {
                            _fun93291_ip = 155;
                            continue _fun93291
                        }
                    case 149:
                        var5 = var9.fetchedAt;
                    case 155:
                        var8 = var12 != var5;
                    case 159:
                        if (!var8) {
                            _fun93291_ip = 197;
                            continue _fun93291
                        }
                    case 162:
                        var5 = global;
                        var13 = var5.Date;
                        var5 = var13.now;
                        var13 = var5.bind(var13)();
                        var5 = var9.fetchedAt;
                        var13 = var13 - var5;
                        var5 = _closure1_slot6;
                        var8 = var13 < var5;
                    case 197:
                        var5 = var12 == var9;
                        var13 = undefined;
                        if (var5) {
                            _fun93291_ip = 211;
                            continue _fun93291
                        }
                    case 206:
                        var13 = var9.state;
                    case 211:
                        var5 = 'fetched';
                        var5 = var5 === var13;
                        if (!var5) {
                            _fun93291_ip = 241;
                            continue _fun93291
                        }
                    case 222:
                        var14 = var12 == var9;
                        var13 = undefined;
                        if (var14) {
                            _fun93291_ip = 237;
                            continue _fun93291
                        }
                    case 231:
                        var13 = var9.fetchedAt;
                    case 237:
                        var5 = var12 != var13;
                    case 241:
                        if (!var5) {
                            _fun93291_ip = 279;
                            continue _fun93291
                        }
                    case 244:
                        var13 = global;
                        var14 = var13.Date;
                        var13 = var14.now;
                        var13 = var13.bind(var14)();
                        var9 = var9.fetchedAt;
                        var13 = var13 - var9;
                        var9 = _closure1_slot7;
                        var5 = var13 < var9;
                    case 279:
                        var9 = 'loading';
                        if (!(var9 !== var10)) {
                            _fun93291_ip = 293;
                            continue _fun93291
                        }
                    case 287:
                        if (var8) {
                            _fun93291_ip = 293;
                            continue _fun93291
                        }
                    case 290:
                        if (!var5) {
                            _fun93291_ip = 299;
                            continue _fun93291
                        }
                    case 293:
                        if (!var4) {
                            _fun93291_ip = 627;
                            continue _fun93291
                        }
                    case 299: // try_start_0
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var9 = 4;
                        var4 = var8[var9];
                        var10 = var5.bind(var2)(var4);
                        var5 = var10.dispatch;
                        var4 = {};
                        var13 = 'SOCIAL_LAYER_STOREFRONT_LOAD';
                        var4.type = var13;
                        var14 = var7;
                        var4.guildId = var14;
                        var4 = var5.bind(var10)(var4);
                        var5 = _closure1_slot0;
                        var4 = 5;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var5 = var8.get;
                        var4 = {
                            'url': null,
                            'rejectWithError': true,
                            'retries': 3
                        };
                        var13 = _closure1_slot5;
                        var10 = var13.SOCIAL_LAYER_APPLICATION_STOREFRONT;
                        var10 = var10.bind(var13)(var14);
                        var4.url = var10;
                        var4 = var5.bind(var8)(var4);
                        SaveGenerator(address = 418);
                    case 416:
                        return var4;
                    case 418:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun93291_ip = 571;
                            continue _fun93291
                        }
                    case 427:
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var10 = var5[var9];
                        var14 = var8.bind(var2)(var10);
                        var13 = var14.dispatch;
                        var10 = {};
                        var15 = 'SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS';
                        var10.type = var15;
                        var15 = var7;
                        var10.guildId = var15;
                        var16 = _closure1_slot0;
                        var15 = 6;
                        var15 = var5[var15];
                        var17 = var16.bind(var2)(var15);
                        var16 = var17.transformSlayerApplicationStorefrontServer;
                        var15 = var4.body;
                        var15 = var16.bind(var17)(var15);
                        var10.storefront = var15;
                        var10 = var13.bind(var14)(var10);
                        var5 = var5[var9];
                        var9 = var8.bind(var2)(var5);
                        var8 = var9.dispatch;
                        var5 = {};
                        var10 = 'STORE_LISTINGS_FETCH_SUCCESS';
                        var5.type = var10;
                        var10 = var4.body;
                        var10 = var10.store_listings;
                        var11 = var10;
                        if (!(var12 == var10)) {
                            _fun93291_ip = 556;
                            continue _fun93291
                        }
                    case 550:
                        var10 = new Array(0);
                        _fun93291_ip = 559;
                        continue _fun93291;
                    case 556:
                        var10 = var11;
                    case 559:
                        var5.storeListings = var10;
                        var5 = var8.bind(var9)(var5);
                    case 569: // try_end0
                        _fun93291_ip = 627;
                        continue _fun93291;
                    case 571:
                        return var4;
                    case 574: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE';
                        var3.type = var8;
                        var3.guildId = var7;
                        var3.eager = var6;
                        var3 = var4.bind(var5)(var3);
                    case 627:
                        return var2;
                    case 630:
                        return var1;
                    case 633:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun93294: for (var _fun93294_ip = 0;;) switch (_fun93294_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93294_ip = 474;
                            continue _fun93294
                        }
                    case 10:
                        var12 = arg0;
                        var5 = arg1;
                        var1 = undefined;
                        var7 = undefined;
                    case 20: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 4;
                        var2 = var4[var6];
                        var8 = var3.bind(var1)(var2);
                        var3 = var8.dispatch;
                        var2 = {};
                        var9 = 'STORE_LISTINGS_FETCH_START';
                        var2.type = var9;
                        var13 = var5;
                        var2.skuId = var13;
                        var2 = var3.bind(var8)(var2);
                        var3 = _closure1_slot0;
                        var2 = 5;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var10 = _closure1_slot5;
                        var9 = var10.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU;
                        var8 = var12;
                        var8 = var9.bind(var10)(var8, var13);
                        var2.url = var8;
                        var8 = true;
                        var2.rejectWithError = var8;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 137);
                    case 135:
                        return var2;
                    case 137:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun93294_ip = 418;
                            continue _fun93294
                        }
                    case 146:
                        var7 = var2;
                        var4 = var2.body;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun93294_ip = 382;
                            continue _fun93294
                        }
                    case 163:
                        var3 = var7;
                        var3 = var3.ok;
                        if (!var3) {
                            _fun93294_ip = 382;
                            continue _fun93294
                        }
                    case 178:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = var3[var6];
                        var10 = var4.bind(var1)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var13 = 'SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS';
                        var8.type = var13;
                        var8.guildId = var12;
                        var12 = _closure1_slot0;
                        var11 = 6;
                        var11 = var3[var11];
                        var13 = var12.bind(var1)(var11);
                        var12 = var13.transformSlayerApplicationStorefrontServer;
                        var11 = {};
                        var14 = var7.body;
                        var14 = var14.store_listing;
                        var14 = var14.sku;
                        var14 = var14.application_id;
                        var11.application_id = var14;
                        var14 = '';
                        var11.title = var14;
                        var11.logo_asset_id = var1;
                        var11.light_theme_logo_asset_id = var1;
                        var14 = new Array(0);
                        var11.pages = var14;
                        var14 = new Array(0);
                        var11.store_listings = var14;
                        var14 = var7.body;
                        var14 = var14.assets;
                        var11.assets = var14;
                        var11 = var12.bind(var13)(var11);
                        var8.storefront = var11;
                        var8 = var9.bind(var10)(var8);
                        var3 = var3[var6];
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var8 = 'STORE_LISTING_FETCH_SUCCESS';
                        var3.type = var8;
                        var7 = var7.body;
                        var7 = var7.store_listing;
                        var3.storeListing = var7;
                        var3 = var4.bind(var6)(var3);
                    case 380: // try_end0
                        _fun93294_ip = 471;
                        continue _fun93294;
                    case 382: // try_start_1
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = 'Failed to fetch social layer storefront SKU';
                        var17 = var4;
                        var3 = new var17[var6](var16, var15);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 418: // try_end1
                        return var2;
                    case 421: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'STORE_LISTINGS_FETCH_FAIL';
                        var2.type = var6;
                        var2.skuId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 471:
                        return var1;
                    case 474:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93297: for (var _fun93297_ip = 0;;) switch (_fun93297_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93297_ip = 503;
                            continue _fun93297
                        }
                    case 13:
                        var7 = var1.applicationId;
                        var6 = var1.userIds;
                        var3 = var1.maxRecommendations;
                        var5 = undefined;
                        if (!(var3 === var5)) {
                            _fun93297_ip = 41;
                            continue _fun93297
                        }
                    case 38:
                        var3 = 6;
                    case 41:
                        var12 = var3;
                        var1 = var1.includeWishlists;
                        if (!(var1 === var5)) {
                            _fun93297_ip = 58;
                            continue _fun93297
                        }
                    case 56:
                        var1 = false;
                    case 58:
                        var13 = var1;
                        SaveGenerator(address = 65);
                    case 63:
                        return var5;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93297_ip = 500;
                            continue _fun93297
                        }
                    case 74:
                        var2 = var6;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun93297_ip = 178;
                            continue _fun93297
                        }
                    case 88:
                        var9 = _closure1_slot4;
                        var8 = var9.recommendationsByApplicationsAndUsers;
                        var4 = var7;
                        var2 = var6;
                        var4 = var8.bind(var9)(var4, var2);
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun93297_ip = 181;
                            continue _fun93297
                        }
                    case 121:
                        var9 = var4.state;
                        var8 = 'error';
                        if (!(var8 !== var9)) {
                            _fun93297_ip = 178;
                            continue _fun93297
                        }
                    case 134:
                        var9 = var4.state;
                        var8 = 'loading';
                        if (!(var8 !== var9)) {
                            _fun93297_ip = 178;
                            continue _fun93297
                        }
                    case 147:
                        var9 = var4.state;
                        var8 = 'success';
                        if (!(var8 === var9)) {
                            _fun93297_ip = 181;
                            continue _fun93297
                        }
                    case 160:
                        var4 = var4.data;
                        var8 = var4.numItemsRequested;
                        var4 = var12;
                        if (!(var8 >= var4)) {
                            _fun93297_ip = 181;
                            continue _fun93297
                        }
                    case 178:
                        return var5;
                    case 181: // try_start_0
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var11 = 4;
                        var4 = var9[var11];
                        var10 = var8.bind(var5)(var4);
                        var8 = var10.dispatch;
                        var4 = {};
                        var14 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START';
                        var4.type = var14;
                        var16 = var7;
                        var4.applicationId = var16;
                        var14 = var6;
                        var4.userIds = var14;
                        var4 = var8.bind(var10)(var4);
                        var8 = _closure1_slot0;
                        var4 = 5;
                        var4 = var9[var4];
                        var4 = var8.bind(var5)(var4);
                        var9 = var4.HTTP;
                        var8 = var9.get;
                        var4 = {};
                        var15 = _closure1_slot5;
                        var10 = var15.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS;
                        var10 = var10.bind(var15)(var16);
                        var4.url = var10;
                        var10 = true;
                        var4.rejectWithError = var10;
                        var10 = {};
                        var10.user_ids = var14;
                        var14 = var12;
                        var10.max_recommendations = var14;
                        var10.include_wishlists = var13;
                        var4.query = var10;
                        var4 = var8.bind(var9)(var4);
                        SaveGenerator(address = 329);
                    case 327:
                        return var4;
                    case 329:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun93297_ip = 441;
                            continue _fun93297
                        }
                    case 335:
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var8 = 6;
                        var8 = var9[var8];
                        var13 = var10.bind(var5)(var8);
                        var10 = var13.transformSocialLayerStorefrontRecommendationServer;
                        var8 = var4.body;
                        var8 = var10.bind(var13)(var8);
                        var10 = _closure1_slot1;
                        var9 = var9[var11];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var13 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS';
                        var9.type = var13;
                        var18 = var9;
                        var17 = var8;
                        var13 = copyDataProperties(var18, var17);
                        var14 = var6;
                        var13 = 'userIds';
                        var9[var13] = var14;
                        var13 = var12;
                        var12 = 'numItemsRequested';
                        var9[var12] = var13;
                        var9 = var10.bind(var11)(var9);
                    case 438: // try_end0
                        return var8;
                    case 441:
                        return var4;
                    case 444: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 4;
                        var3 = var8[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE';
                        var3.type = var8;
                        var3.applicationId = var7;
                        var3.userIds = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 500:
                        return var1;
                    case 503:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93300: for (var _fun93300_ip = 0;;) switch (_fun93300_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93300_ip = 308;
                            continue _fun93300
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var6 = 4;
                        var1 = var7[var6];
                        var5 = undefined;
                        var8 = var3.bind(var5)(var1);
                        var3 = var8.dispatch;
                        var1 = {};
                        var9 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START';
                        var1.type = var9;
                        var10 = var4;
                        var1.guildId = var10;
                        var1 = var3.bind(var8)(var1);
                        var3 = _closure1_slot0;
                        var1 = 5;
                        var1 = var7[var1];
                        var1 = var3.bind(var5)(var1);
                        var7 = var1.HTTP;
                        var3 = var7.get;
                        var1 = {};
                        var9 = _closure1_slot5;
                        var8 = var9.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT;
                        var8 = var8.bind(var9)(var10);
                        var1.url = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 129);
                    case 127:
                        return var1;
                    case 129:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun93300_ip = 247;
                            continue _fun93300
                        }
                    case 135:
                        var7 = var1.body;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var6 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS';
                        var2.type = var6;
                        var6 = var4;
                        var2.guildId = var6;
                        var6 = {};
                        var8 = var7.id;
                        var6.id = var8;
                        var8 = var7.application_id;
                        var6.applicationId = var8;
                        var8 = var7.application_name;
                        var6.applicationName = var8;
                        var8 = var7.asset_id;
                        var6.assetId = var8;
                        var7 = var7.background_image_asset_id;
                        var6.backgroundImageAssetId = var7;
                        var2.announcement = var6;
                        var2 = var3.bind(var5)(var2);
                    case 245: // try_end0
                        _fun93300_ip = 303;
                        continue _fun93300;
                    case 247:
                        return var1;
                    case 250: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE';
                        var1.type = var5;
                        var1.guildId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 303:
                        var1 = undefined;
                        return var1;
                    case 308:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Millis;
    var8 = var6.SECOND;
    var6 = 30;
    var8 = var6 * var8;
    var _closure1_slot6 = var8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var6 * var3;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 5;
    var2.MAX_USERS_PER_RECOMMENDATION = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSocialLayerStorefront = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSocialLayerStorefrontSku = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_SOCIAL_LAYER_STOREFRONT_STATE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.pageIndex = var4;
        var4 = arg2;
        var1.skuId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSocialLayerStorefrontState = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSocialLayerStorefrontRecommendations = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSocialLayerStorefrontAnnouncement = var3;
    var1 = function arg0, arg1, arg2() {
        _fun93306: for (var _fun93306_ip = 0;;) switch (_fun93306_ip) {
            case 0:
                var8 = arg1;
                var _closure2_slot0 = var8;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getIsEligibleForSocialLayerStorefrontSKUPurchaseEligibilityExperiment;
                var2 = {};
                var6 = arg2;
                var2.location = var6;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun93306_ip = 258;
                    continue _fun93306
                }
            case 60:
                var3 = _closure1_slot4;
                var2 = var3.getSKUEligibility;
                var4 = var2.bind(var3)(var8);
                var2 = 'checking';
                var2 = var2 !== var4;
                if (!var2) {
                    _fun93306_ip = 96;
                    continue _fun93306
                }
            case 88:
                var3 = 'eligible';
                var2 = var3 !== var4;
            case 96:
                if (!var2) {
                    _fun93306_ip = 107;
                    continue _fun93306
                }
            case 99:
                var3 = 'ineligible';
                var2 = var3 !== var4;
            case 107:
                if (!var2) {
                    _fun93306_ip = 258;
                    continue _fun93306
                }
            case 113:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var6 = var3.bind(var0)(var2);
                var3 = var6.dispatch;
                var2 = {};
                var7 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START';
                var2.type = var7;
                var2.skuId = var8;
                var2 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {};
                var7 = _closure1_slot5;
                var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY;
                var5 = arg0;
                var5 = var6.bind(var7)(var5, var8);
                var2.url = var5;
                var5 = true;
                var2.rejectWithError = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.skuId = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var4 = var4.interaction_id;
                    var1.interactionId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.skuId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 258:
                return var0;
        }
    };
    var2.fetchSocialLayerSKUPurchaseEligibility = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 12201, 660, 667, 806, 507, 3495, 12202, 2]);