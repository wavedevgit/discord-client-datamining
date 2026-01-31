// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.Linking;
    var _closure1_slot3 = var4;
    var3 = var3.NativeModules;
    var4 = var3.RNIapModule;
    var _closure1_slot4 = var4;
    var5 = var3.RNIapModule;
    var _closure1_slot5 = var5;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58343: for (var _fun58343_ip = 0;;) switch (_fun58343_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58343_ip = 133;
                            continue _fun58343
                        }
                    case 10:
                        var1 = arg0;
                        var7 = var1.sku;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.checkNativeAndroidAvailable;
                        var2 = var2.bind(var3)();
                        var4 = _closure1_slot3;
                        var3 = var4.openURL;
                        var2 = _closure1_slot4;
                        var1 = var2.getPackageName;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58343_ip = 130;
                            continue _fun58343
                        }
                    case 90:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var5 = 'https://play.google.com/store/account/subscriptions?package=';
                        var2 = '&sku=';
                        var2 = var6.bind(var5)(var1, var2, var7);
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 130:
                        return var1;
                    case 133:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: deepLinkToSubscriptionsAndroid, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58347: for (var _fun58347_ip = 0;;) switch (_fun58347_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58347_ip = 259;
                            continue _fun58347
                        }
                    case 13:
                        var12 = var1.packageName;
                        var11 = var1.productId;
                        var10 = var1.productToken;
                        var9 = var1.accessToken;
                        var1 = var1.isSub;
                        var8 = 'products';
                        if (!var1) {
                            _fun58347_ip = 58;
                            continue _fun58347
                        }
                    case 54:
                        var8 = 'subscriptions';
                    case 58:
                        var2 = global;
                        var1 = var2.HermesInternal;
                        var7 = var1.concat;
                        var22 = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/';
                        var20 = '/purchases/';
                        var18 = '/';
                        var16 = '/tokens/';
                        var14 = '?access_token=';
                        var21 = var12;
                        var19 = var8;
                        var17 = var11;
                        var15 = var10;
                        var13 = var9;
                        var5 = var22[var7](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                        var4 = var2.fetch;
                        var3 = {};
                        var1 = 'GET';
                        var3.method = var1;
                        var1 = {};
                        var6 = 'application/json';
                        var1['Content-Type'] = var6;
                        var3.headers = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var5, var3);
                        SaveGenerator(address = 165);
                    case 163:
                        return var1;
                    case 165:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58347_ip = 256;
                            continue _fun58347
                        }
                    case 171:
                        var3 = var1.ok;
                        if (var3) {
                            _fun58347_ip = 243;
                            continue _fun58347
                        }
                    case 180:
                        var5 = var2.Object;
                        var4 = var5.assign;
                        var6 = var2.Error;
                        var21 = var1.statusText;
                        var3 = var6.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var22 = var3;
                        var2 = new var22[var6](var21, var20);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = {};
                        var6 = var1.status;
                        var2.statusCode = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        throw var2;
                    case 243:
                        var2 = var1.json;
                        var2 = var2.bind(var1)();
                        return var2;
                    case 256:
                        return var1;
                    case 259:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: validateReceiptAndroid, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var2.AndroidModule = var5;
    var5 = function() { // Original name: getInstallSourceAndroid, environment: var1
        _fun58349: for (var _fun58349_ip = 0;;) switch (_fun58349_ip) {
            case 0:
                var0 = _closure1_slot4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.InstallSourceAndroid;
                if (var0) {
                    _fun58349_ip = 46;
                    continue _fun58349
                }
            case 38:
                var0 = var1.AMAZON;
                _fun58349_ip = 52;
                continue _fun58349;
            case 46:
                var0 = var1.GOOGLE_PLAY;
            case 52:
                return var0;
        }
    };
    var2.getInstallSourceAndroid = var5;
    var2.deepLinkToSubscriptionsAndroid = var4;
    var2.validateReceiptAndroid = var3;
    var3 = function(arg0) { // Original name: acknowledgePurchaseAndroid, environment: var1
        var0 = arg0;
        var3 = var0.token;
        var2 = var0.developerPayload;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var0 = var1.getAndroidModule;
        var1 = var0.bind(var1)();
        var0 = var1.acknowledgePurchase;
        var0 = var0.bind(var1)(var3, var2);
        return var0;
    };
    var2.acknowledgePurchaseAndroid = var3;
    var1 = function(arg0) { // Original name: isFeatureSupported, environment: var1
        _fun58351: for (var _fun58351_ip = 0;;) switch (_fun58351_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.isAndroid;
                if (!var0) {
                    _fun58351_ip = 41;
                    continue _fun58351
                }
            case 34:
                var0 = _closure1_slot4;
                if (var0) {
                    _fun58351_ip = 68;
                    continue _fun58351
                }
            case 41:
                var0 = global;
                var3 = var0.Promise;
                var2 = var3.reject;
                var0 = 'This is only available on Android clients';
                var0 = var2.bind(var3)(var0);
                _fun58351_ip = 86;
                continue _fun58351;
            case 68:
                var3 = _closure1_slot5;
                var2 = var3.isFeatureSupported;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var2.isFeatureSupported = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7105, 7106]);