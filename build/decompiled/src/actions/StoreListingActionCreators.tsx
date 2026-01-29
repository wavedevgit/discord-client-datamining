// actions/StoreListingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['pathname'];
    var _closure1_slot3 = var0;
    var0 = ['pathname'];
    var _closure1_slot4 = var0;
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
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Endpoints;
    var _closure1_slot11 = var6;
    var3 = var3.Routes;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/StoreListingActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: fetchStoreListingsForApplications, environment: var1
        _fun98561: for (var _fun98561_ip = 0;;) switch (_fun98561_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun98562: for (var _fun98562_ip = 0;;) switch (_fun98562_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getApplication;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun98562_ip = 63;
                                continue _fun98562
                            }
                        case 27:
                            var4 = var0.destinationSkuId;
                            var0 = var2 == var4;
                            if (var0) {
                                _fun98562_ip = 61;
                                continue _fun98562
                            }
                        case 42:
                            var3 = _closure1_slot9;
                            var1 = var3.getForSKU;
                            var1 = var1.bind(var3)(var4);
                            var0 = var2 == var1;
                        case 61:
                            return var0;
                        case 63:
                            var0 = true;
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var1);
                var2 = var5.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun98561_ip = 129;
                    continue _fun98561
                }
            case 33:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.httpGetWithCountryCodeQuery;
                var1 = {};
                var4 = _closure1_slot11;
                var4 = var4.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
                var1.url = var4;
                var4 = {};
                var4.application_ids = var5;
                var1.query = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var1.type = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var1.storeListings = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun98561_ip = 147;
                continue _fun98561;
            case 129:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 147:
                return var0;
        }
    };
    var2.fetchStoreListingsForApplications = var3;
    var3 = function(arg0) { // Original name: fetchAllStoreListingsForApplication, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.httpGetWithCountryCodeQuery;
        var0 = {};
        var3 = _closure1_slot11;
        var3 = var3.STORE_PUBLISHED_LISTINGS_SKUS;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.application_id = var4;
        var0.query = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'STORE_LISTINGS_FETCH_SUCCESS';
            var1.type = var4;
            var6 = var0.body;
            var5 = var6.map;
            var4 = function(arg0) { // Environment: var4
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = true;
                var1 = 'published';
                var0[var1] = var2;
                return var0;
            };
            var4 = var5.bind(var6)(var4);
            var1.storeListings = var4;
            var1 = var2.bind(var3)(var1);
            var0 = var0.body;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchAllStoreListingsForApplication = var3;
    var3 = function(arg0) { // Original name: fetchStoreListingForSku, environment: var1
        _fun98567: for (var _fun98567_ip = 0;;) switch (_fun98567_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot8;
                var1 = var2.get;
                var2 = var1.bind(var2)(var7);
                var1 = null;
                var4 = var1 != var2;
                if (!var4) {
                    _fun98567_ip = 81;
                    continue _fun98567
                }
            case 35:
                var6 = _closure1_slot10;
                var3 = var6.inTestModeForApplication;
                var1 = var2.applicationId;
                var1 = var3.bind(var6)(var1);
                if (var1) {
                    _fun98567_ip = 78;
                    continue _fun98567
                }
            case 58:
                var6 = _closure1_slot6;
                var3 = var6.inDevModeForApplication;
                var2 = var2.applicationId;
                var1 = var3.bind(var6)(var2);
            case 78:
                var4 = var1;
            case 81:
                var _closure2_slot1 = var4;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var2.bind(var3)(var1);
                var2 = var8.dispatch;
                var1 = {};
                var9 = 'STORE_LISTINGS_FETCH_START';
                var1.type = var9;
                var1.skuId = var7;
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.httpGetWithCountryCodeQuery;
                var1 = {};
                var6 = _closure1_slot11;
                if (var4) {
                    _fun98567_ip = 176;
                    continue _fun98567
                }
            case 163:
                var4 = var6.STORE_PUBLISHED_LISTINGS_SKU;
                var4 = var4.bind(var6)(var7);
                _fun98567_ip = 187;
                continue _fun98567;
            case 176:
                var5 = var6.STORE_LISTINGS_SKU;
                var4 = var5.bind(var6)(var7);
            case 187:
                var1.url = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun98568: for (var _fun98568_ip = 0;;) switch (_fun98568_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = _closure2_slot1;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            if (var5) {
                                _fun98568_ip = 70;
                                continue _fun98568
                            }
                        case 45:
                            var5 = 'STORE_LISTING_FETCH_SUCCESS';
                            var1.type = var5;
                            var5 = var4.body;
                            var1.storeListing = var5;
                            var5 = var2.bind(var3)(var1);
                            _fun98568_ip = 93;
                            continue _fun98568;
                        case 70:
                            var5 = 'STORE_LISTINGS_FETCH_SUCCESS';
                            var1.type = var5;
                            var4 = var4.body;
                            var1.storeListings = var4;
                            var1 = var2.bind(var3)(var1);
                        case 93:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SKU_FETCH_FAIL';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.skuId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.fetchStoreListingForSku = var3;
    var3 = function(arg0) { // Original name: fetchStoreListingById, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.httpGetWithCountryCodeQuery;
        var0 = {};
        var5 = _closure1_slot11;
        var4 = var5.STORE_LISTING;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'STORE_LISTING_FETCH_SUCCESS';
            var1.type = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.storeListing = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchStoreListingById = var3;
    var3 = function(arg0) { // Original name: fetchStoreListingForApplication, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.httpGetWithCountryCodeQuery;
        var0 = {};
        var5 = _closure1_slot11;
        var4 = var5.STORE_PUBLISHED_LISTINGS_APPLICATION;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'STORE_LISTING_FETCH_SUCCESS';
            var1.type = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.storeListing = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchStoreListingForApplication = var3;
    var3 = function() { // Original name: matureAgree, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_STORE_MATURE_AGREE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.matureAgree = var3;
    var3 = function() { // Original name: matureDisagree, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.transitionTo;
        var1 = _closure1_slot12;
        var1 = var1.APPLICATION_STORE;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.matureDisagree = var3;
    var3 = function(arg0) { // Original name: joinPublishedStoreListingSkuGuild, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var5 = _closure1_slot11;
        var4 = var5.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.joinPublishedStoreListingSkuGuild = var3;
    var3 = function(arg0, arg1) { // Original name: goToSKUStoreListing, environment: var1
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var3 = var5[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var3);
        var6 = var7.getStoreListingLocation;
        var4 = arg0;
        var3 = arg1;
        var6 = var6.bind(var7)(var4, var3);
        var4 = var6.pathname;
        var3 = _closure1_slot5;
        var1 = _closure1_slot3;
        var3 = var3.bind(var0)(var6, var1);
        var1 = 9;
        var1 = var5[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.transitionTo;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var2.goToSKUStoreListing = var3;
    var1 = function(arg0, arg1) { // Original name: goToApplicationStoreListing, environment: var1
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var3 = var5[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var3);
        var6 = var7.getApplicationStoreListingLocation;
        var4 = arg0;
        var3 = arg1;
        var6 = var6.bind(var7)(var4, var3);
        var4 = var6.pathname;
        var3 = _closure1_slot5;
        var1 = _closure1_slot4;
        var3 = var3.bind(var0)(var6, var1);
        var1 = 9;
        var1 = var5[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.transitionTo;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var2.goToApplicationStoreListing = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 7181, 3413, 3458, 12809, 7182, 660, 3320, 806, 1220, 507, 2]);