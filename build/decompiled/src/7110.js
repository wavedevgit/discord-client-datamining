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
    var3 = var3.NativeModules;
    var5 = var3.RNIapAmazonModule;
    var _closure1_slot3 = var5;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58274: for (var _fun58274_ip = 0;;) switch (_fun58274_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58274_ip = 164;
                            continue _fun58274
                        }
                    case 13:
                        var10 = var1.developerSecret;
                        var9 = var1.userId;
                        var8 = var1.receiptId;
                        var1 = var1.useSandbox;
                        var4 = undefined;
                        if (!(var4 !== var1)) {
                            _fun58274_ip = 55;
                            continue _fun58274
                        }
                    case 48:
                        var7 = '';
                        if (!var1) {
                            _fun58274_ip = 61;
                            continue _fun58274
                        }
                    case 55:
                        var7 = 'sandbox/';
                    case 61:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var18 = 'https://appstore-sdk.amazon.com/';
                        var16 = 'version/1.0/verifyReceiptId/developer/';
                        var14 = '/user/';
                        var12 = '/receiptId/';
                        var17 = var7;
                        var15 = var10;
                        var13 = var9;
                        var11 = var8;
                        var3 = var18[var6](var17, var16, var15, var14, var13, var12, var11, var10);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 2;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.enhancedFetch;
                        var1 = var1.bind(var2)(var3);
                        SaveGenerator(address = 152);
                    case 150:
                        return var1;
                    case 152:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58274_ip = 161;
                            continue _fun58274
                        }
                    case 158:
                        return var1;
                    case 161:
                        return var1;
                    case 164:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: validateReceiptAmazon, environment: var0
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
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58278: for (var _fun58278_ip = 0;;) switch (_fun58278_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58278_ip = 27;
                            continue _fun58278
                        }
                    case 7:
                        var2 = _closure1_slot3;
                        var1 = var2.verifyLicense;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 27:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Original name: verifyLicense, environment: var0
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58282: for (var _fun58282_ip = 0;;) switch (_fun58282_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58282_ip = 37;
                            continue _fun58282
                        }
                    case 7:
                        var1 = arg0;
                        var3 = var1.isAmazonDevice;
                        var2 = _closure1_slot3;
                        var1 = var2.deepLinkToSubscriptions;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    case 37:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: deepLinkToSubscriptionsAmazon, environment: var0
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
    var1 = var1.bind(var0)();
    var2.AmazonModule = var5;
    var2.validateReceiptAmazon = var4;
    var2.verifyLicense = var3;
    var2.deepLinkToSubscriptionsAmazon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7104]);