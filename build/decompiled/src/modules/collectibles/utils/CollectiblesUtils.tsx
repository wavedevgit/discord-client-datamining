// modules/collectibles/utils/CollectiblesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.ApplicationStreamPresets;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun42736: for (var _fun42736_ip = 0;;) switch (_fun42736_ip) {
            case 0:
                var2 = arg2;
                var0 = {};
                var3 = {};
                var4 = _closure1_slot3;
                var4 = var4.PRESET_CUSTOM;
                var3.preset = var4;
                var4 = arg0;
                var3.resolution = var4;
                var4 = arg1;
                var3.frameRate = var4;
                var0.qualityOptions = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.MediaEngineContextTypes;
                var1 = var1.STREAM;
                var0.context = var1;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun42736_ip = 183;
                    continue _fun42736
                }
            case 90:
                var1 = var2.desktopSource;
                if (!(var3 != var1)) {
                    _fun42736_ip = 131;
                    continue _fun42736
                }
            case 100:
                var1 = {};
                var4 = var2.desktopSource;
                var4 = var4.id;
                var1.sourceId = var4;
                var4 = true;
                var1.sound = var4;
                var0.desktopSettings = var1;
            case 131:
                var1 = var2.cameraSource;
                if (!(var3 != var1)) {
                    _fun42736_ip = 183;
                    continue _fun42736
                }
            case 141:
                var1 = {};
                var3 = var2.cameraSource;
                var3 = var3.videoDeviceGuid;
                var1.videoDeviceGuid = var3;
                var2 = var2.cameraSource;
                var2 = var2.audioDeviceGuid;
                var1.audioDeviceGuid = var2;
                var0.cameraSettings = var1;
            case 183:
                return var0;
        }
    };
    var2.constructGoLiveSource = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun42737: for (var _fun42737_ip = 0;;) switch (_fun42737_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = {};
                var3 = null;
                if (!(var3 != var2)) {
                    _fun42737_ip = 20;
                    continue _fun42737
                }
            case 14:
                var0.tab = var2;
            case 20:
                if (!(var3 != var1)) {
                    _fun42737_ip = 291;
                    continue _fun42737
                }
            case 27:
                var4 = var1.noCache;
                var2 = true;
                if (!(var2 === var4)) {
                    _fun42737_ip = 47;
                    continue _fun42737
                }
            case 39:
                var0.no_cache = var2;
            case 47:
                var4 = var1.includeUnpublished;
                if (!(var2 === var4)) {
                    _fun42737_ip = 63;
                    continue _fun42737
                }
            case 57:
                var0.include_unpublished = var2;
            case 63:
                var4 = var1.includeBundles;
                if (!(var2 === var4)) {
                    _fun42737_ip = 79;
                    continue _fun42737
                }
            case 73:
                var0.include_bundles = var2;
            case 79:
                var4 = var1.includeDynamicBlocks;
                if (!(var2 === var4)) {
                    _fun42737_ip = 97;
                    continue _fun42737
                }
            case 89:
                var0.include_dynamic_blocks = var2;
            case 97:
                var2 = var1.countryCode;
                var2 = var3 != var2;
                if (!var2) {
                    _fun42737_ip = 124;
                    continue _fun42737
                }
            case 110:
                var5 = var1.countryCode;
                var4 = '';
                var2 = var4 !== var5;
            case 124:
                if (!var2) {
                    _fun42737_ip = 139;
                    continue _fun42737
                }
            case 127:
                var2 = var1.countryCode;
                var0.country_code = var2;
            case 139:
                var2 = var1.paymentGateway;
                if (!(var3 !== var2)) {
                    _fun42737_ip = 161;
                    continue _fun42737
                }
            case 149:
                var2 = var1.paymentGateway;
                var0.payment_gateway = var2;
            case 161:
                var7 = var1.variantsReturnStyle;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 2;
                var4 = var4[var6];
                var5 = undefined;
                var4 = var8.bind(var5)(var4);
                var4 = var4.ShopVariantsReturnStyle;
                var4 = var4.VARIANTS_GROUP;
                if (!(var7 === var4)) {
                    _fun42737_ip = 243;
                    continue _fun42737
                }
            case 208:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ShopVariantsReturnStyle;
                var2 = var2.VARIANTS_GROUP;
                var0.variants_return_style = var2;
            case 243:
                var2 = var1.shopHomeConfig;
                if (!(var3 != var2)) {
                    _fun42737_ip = 267;
                    continue _fun42737
                }
            case 253:
                var2 = var1.shopHomeConfig;
                var0.shop_home_config = var2;
            case 267:
                var2 = var1.skipNumCategories;
                if (!(var3 != var2)) {
                    _fun42737_ip = 291;
                    continue _fun42737
                }
            case 277:
                var1 = var1.skipNumCategories;
                var0.skip_num_categories = var1;
            case 291:
                return var0;
        }
    };
    var2.buildFetchCollectiblesOptionsQuery = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42738: for (var _fun42738_ip = 0;;) switch (_fun42738_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun42738_ip = 13;
                    continue _fun42738
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '?width=100&height=195';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var2.getOptimizedProfileEffectThumbnailUrl = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 3;
        var1 = var4[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = true;
        var1.forceFetch = var5;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot0;
        var0 = 4;
        var0 = var4[var0];
        var4 = var1.bind(var3)(var0);
        var3 = var4.dateFormat;
        var1 = var2.endsAt;
        var0 = 'L';
        var1 = var3.bind(var4)(var1, var0);
        var0 = {};
        var3 = var2.fetched;
        var3 = !var3;
        var0.isLoading = var3;
        var2 = var2.isFractionalPremiumActive;
        var0.isFractionalPremiumActive = var2;
        var0.expiresAt = var1;
        return var0;
    };
    var2.useFetchFractionalPremiumInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3499, 3630, 4654, 4655, 3137, 2]);