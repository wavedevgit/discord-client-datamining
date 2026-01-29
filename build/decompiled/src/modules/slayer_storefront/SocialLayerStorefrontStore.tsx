// modules/slayer_storefront/SocialLayerStorefrontStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun93121: for (var _fun93121_ip = 0;;) switch (_fun93121_ip) {
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
            case 72: // try_end0
                _fun93121_ip = 76;
                continue _fun93121;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getUserKey, environment: var3
        _fun93124: for (var _fun93124_ip = 0;;) switch (_fun93124_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.length;
                var1 = 0;
                if (!(var1 !== var0)) {
                    _fun93124_ip = 64;
                    continue _fun93124
                }
            case 14:
                var3 = var2.length;
                var0 = 1;
                if (!(!(var3 > var0))) {
                    _fun93124_ip = 32;
                    continue _fun93124
                }
            case 26:
                var0 = var2[var1];
                _fun93124_ip = 62;
                continue _fun93124;
            case 32:
                var3 = new Array(0);
                var6 = var3;
                var5 = var2;
                var4 = 0;
                var1 = arraySpread(var6, var5, var4);
                var2 = var3.join;
                var1 = ',';
                var0 = var2.bind(var3)(var1);
            case 62:
                return var0;
            case 64:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'No user IDs provided';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: handleUserSettingsStoreUpdate, environment: var3
        _fun93125: for (var _fun93125_ip = 0;;) switch (_fun93125_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot6;
                var0 = var0.locale;
                if (!(var2 !== var0)) {
                    _fun93125_ip = 57;
                    continue _fun93125
                }
            case 21:
                var0 = _closure1_slot6;
                var0 = var0.locale;
                var _closure1_slot0 = var0;
                var0 = {};
                _closure1_slot7 = var0;
                var0 = {};
                _closure1_slot8 = var0;
                var0 = {};
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
            case 57:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: SocialLayerStorefrontStore, environment: var5
            _fun93127: for (var _fun93127_ip = 0;;) switch (_fun93127_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun93127_ip = 69;
                        continue _fun93127
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun93127_ip = 105;
                    continue _fun93127;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot2;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var2 = var4.waitFor;
            var0 = _closure1_slot6;
            var0 = var2.bind(var4)(var0);
            var3 = var4.syncWith;
            var0 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var0;
            var0 = _closure1_slot13;
            var0 = var3.bind(var4)(var2, var0);
            var0 = _closure1_slot6;
            var0 = var0.locale;
            _closure1_slot0 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getStorefrontData';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getStorefrontState';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot7;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'recommendationsByApplicationsAndUsers';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun93131: for (var _fun93131_ip = 0;;) switch (_fun93131_ip) {
                case 0:
                    var4 = arg1;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun93131_ip = 20;
                        continue _fun93131
                    }
                case 9:
                    var2 = var4.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun93131_ip = 24;
                        continue _fun93131
                    }
                case 20:
                    var1 = undefined;
                    return var1;
                case 24:
                    var3 = _closure1_slot9;
                    var2 = arg0;
                    var2 = var3[var2];
                    var5 = var0 == var2;
                    var3 = undefined;
                    var0 = undefined;
                    if (var5) {
                        _fun93131_ip = 62;
                        continue _fun93131
                    }
                case 49:
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var3)(var4);
                    var0 = var2[var1];
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAnnouncement';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'SocialLayerStorefrontStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() { // Original name: handleLogout, environment: var3
        var0 = {};
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontLoad, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var0 = _closure1_slot8;
        var6 = var0[var3];
        var2 = _closure1_slot8;
        var0 = {};
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var5 = 'loading';
        var4 = 'state';
        var0[var4] = var5;
        var2[var3] = var0;
        var0 = {};
        var6 = _closure1_slot8;
        var7 = var0;
        var2 = copyDataProperties(var7, var6);
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SOCIAL_LAYER_STOREFRONT_LOAD = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontLoadSuccess, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var4 = var0.storefront;
        var2 = _closure1_slot8;
        var0 = {};
        var0.storefront = var4;
        var4 = 'fetched';
        var0.state = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var0.fetchedAt = var4;
        var2[var3] = var0;
        var0 = {};
        var6 = _closure1_slot8;
        var7 = var0;
        var2 = copyDataProperties(var7, var6);
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontPartialLoadSuccess, environment: var3
        _fun93136: for (var _fun93136_ip = 0;;) switch (_fun93136_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var5 = var0.storefront;
                var0 = _closure1_slot8;
                var8 = var0[var4];
                var3 = null;
                var6 = var3 == var8;
                var0 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun93136_ip = 44;
                    continue _fun93136
                }
            case 38:
                var1 = var8.storefront;
            case 44:
                if (!(var3 == var1)) {
                    _fun93136_ip = 78;
                    continue _fun93136
                }
            case 48:
                var3 = _closure1_slot8;
                var1 = {
                    'storefront': null,
                    'state': 'partially-fetched',
                    'fetchedAt': null
                };
                var1.storefront = var5;
                var3[var4] = var1;
                _fun93136_ip = 165;
                continue _fun93136;
            case 78:
                var3 = _closure1_slot8;
                var1 = {};
                var10 = var1;
                var9 = var8;
                var6 = copyDataProperties(var10, var9);
                var6 = {};
                var9 = var8.storefront;
                var10 = var6;
                var7 = copyDataProperties(var10, var9);
                var7 = {};
                var8 = var8.storefront;
                var9 = var8.assets;
                var10 = var7;
                var8 = copyDataProperties(var10, var9);
                var9 = var5.assets;
                var10 = var7;
                var5 = copyDataProperties(var10, var9);
                var5 = 'assets';
                var6[var5] = var7;
                var5 = 'storefront';
                var1[var5] = var6;
                var3[var4] = var1;
            case 165:
                var1 = {};
                var9 = _closure1_slot8;
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                _closure1_slot8 = var1;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontLoadFailure, environment: var3
        _fun93137: for (var _fun93137_ip = 0;;) switch (_fun93137_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.eager;
                var0 = _closure1_slot8;
                if (var2) {
                    _fun93137_ip = 66;
                    continue _fun93137
                }
            case 24:
                var2 = {
                    'storefront': null,
                    'state': 'error'
                };
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var2.fetchedAt = var4;
                var0[var3] = var2;
                _fun93137_ip = 156;
                continue _fun93137;
            case 66:
                var4 = var0[var3];
                var2 = null;
                var5 = var2 == var4;
                var6 = undefined;
                if (var5) {
                    _fun93137_ip = 86;
                    continue _fun93137
                }
            case 81:
                var6 = var4.state;
            case 86:
                var5 = 'loading';
                if (!(var5 === var6)) {
                    _fun93137_ip = 113;
                    continue _fun93137
                }
            case 94:
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun93137_ip = 109;
                    continue _fun93137
                }
            case 103:
                var0 = var4.storefront;
            case 109:
                if (!(var2 == var0)) {
                    _fun93137_ip = 123;
                    continue _fun93137
                }
            case 113:
                var0 = _closure1_slot8;
                var0 = delete var0[var3];
                _fun93137_ip = 156;
                continue _fun93137;
            case 123:
                var2 = _closure1_slot8;
                var0 = {};
                var8 = var0;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var5 = 'fetched';
                var4 = 'state';
                var0[var4] = var5;
                var2[var3] = var0;
            case 156:
                var0 = {};
                var7 = _closure1_slot8;
                var8 = var0;
                var2 = copyDataProperties(var8, var7);
                _closure1_slot8 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE = var7;
    var7 = function(arg0) { // Original name: handleSetSocialLayerStorefrontState, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var5 = var0.pageIndex;
        var4 = var0.skuId;
        var2 = _closure1_slot7;
        var0 = {};
        var0.activePage = var5;
        var0.activeSkuId = var4;
        var2[var3] = var0;
        var0 = {};
        var6 = _closure1_slot7;
        var7 = var0;
        var2 = copyDataProperties(var7, var6);
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SET_SOCIAL_LAYER_STOREFRONT_STATE = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontRecommendationsFetchSuccess, environment: var3
        _fun93139: for (var _fun93139_ip = 0;;) switch (_fun93139_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.skus;
                var9 = var0.skusToRecommendationReasons;
                var3 = var0.userIds;
                var5 = var0.application;
                var8 = var0.numItemsRequested;
                var1 = _closure1_slot12;
                var0 = undefined;
                var6 = var1.bind(var0)(var3);
                var1 = {};
                var11 = _closure1_slot9;
                var12 = var1;
                var3 = copyDataProperties(var12, var11);
                var4 = var5.id;
                var3 = {};
                var7 = _closure1_slot9;
                var5 = var5.id;
                var5 = var7[var5];
                var7 = null;
                if (!(var7 == var5)) {
                    _fun93139_ip = 87;
                    continue _fun93139
                }
            case 85:
                var5 = {};
            case 87:
                var12 = var3;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var5 = {};
                var7 = 'success';
                var5.state = var7;
                var7 = {};
                var7.skus = var10;
                var7.skusToRecommendationReasons = var9;
                var7.numItemsRequested = var8;
                var5.data = var7;
                var3[var6] = var5;
                var1[var4] = var3;
                _closure1_slot9 = var1;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontRecommendationsFetchFailure, environment: var3
        _fun93140: for (var _fun93140_ip = 0;;) switch (_fun93140_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.applicationId;
                var3 = var0.userIds;
                var1 = _closure1_slot12;
                var0 = undefined;
                var6 = var1.bind(var0)(var3);
                var1 = _closure1_slot9;
                var1 = var1[var4];
                var7 = null;
                if (!(var7 != var1)) {
                    _fun93140_ip = 83;
                    continue _fun93140
                }
            case 42:
                var1 = _closure1_slot9;
                var1 = var1[var4];
                var1 = var1[var6];
                if (!(var7 != var1)) {
                    _fun93140_ip = 83;
                    continue _fun93140
                }
            case 58:
                var1 = _closure1_slot9;
                var1 = var1[var4];
                var1 = var1[var6];
                var3 = var1.state;
                var1 = 'success';
                if (!(var1 !== var3)) {
                    _fun93140_ip = 148;
                    continue _fun93140
                }
            case 83:
                var1 = {};
                var8 = _closure1_slot9;
                var9 = var1;
                var3 = copyDataProperties(var9, var8);
                var3 = {};
                var5 = _closure1_slot9;
                var5 = var5[var4];
                if (!(var7 == var5)) {
                    _fun93140_ip = 112;
                    continue _fun93140
                }
            case 110:
                var5 = {};
            case 112:
                var9 = var3;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = {};
                var7 = 'error';
                var5.state = var7;
                var3[var6] = var5;
                var1[var4] = var3;
                _closure1_slot9 = var1;
                return var0;
            case 148:
                var0 = false;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE = var7;
    var7 = function(arg0) { // Original name: handleSocialLayerStorefrontRecommendationsFetchStart, environment: var3
        _fun93141: for (var _fun93141_ip = 0;;) switch (_fun93141_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.applicationId;
                var3 = var0.userIds;
                var1 = _closure1_slot12;
                var0 = undefined;
                var6 = var1.bind(var0)(var3);
                var1 = {};
                var8 = _closure1_slot9;
                var9 = var1;
                var3 = copyDataProperties(var9, var8);
                var3 = {};
                var5 = _closure1_slot9;
                var5 = var5[var4];
                var7 = null;
                if (!(var7 == var5)) {
                    _fun93141_ip = 59;
                    continue _fun93141
                }
            case 57:
                var5 = {};
            case 59:
                var9 = var3;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = {};
                var7 = 'loading';
                var5.state = var7;
                var3[var6] = var5;
                var1[var4] = var3;
                _closure1_slot9 = var1;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START = var7;
    var3 = function(arg0) { // Original name: handleSocialLayerStorefrontAnnouncementFetchSuccess, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.announcement;
        var0 = _closure1_slot10;
        var0[var3] = var2;
        var0 = {};
        var4 = _closure1_slot10;
        var5 = var0;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/SocialLayerStorefrontStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1676, 566, 806, 2]);