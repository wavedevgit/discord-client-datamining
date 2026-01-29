// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: getScaledAssetPath, environment: var1
        _fun1525: for (var _fun1525_ip = 0;;) switch (_fun1525_ip) {
            case 0:
                var1 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var5 = var6.pickScale;
                var3 = var1.scales;
                var2 = 3;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var7 = var2.default;
                var2 = var7.get;
                var2 = var2.bind(var7)();
                var5 = var5.bind(var6)(var3, var2);
                var2 = '';
                var3 = 1;
                if (!(var3 !== var5)) {
                    _fun1525_ip = 98;
                    continue _fun1525
                }
            case 82:
                var3 = '@';
                var5 = var3 + var5;
                var3 = 'x';
                var2 = var5 + var3;
            case 98:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.getBasePath;
                var3 = var0.bind(var3)(var1);
                var0 = '/';
                var3 = var3 + var0;
                var0 = var1.name;
                var0 = var3 + var0;
                var1 = var1.type;
                var2 = var0 + var2;
                var0 = '.';
                var0 = var2 + var0;
                var0 = var0 + var1;
                return var0;
        }
    };
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0, arg1, arg2) { // Original name: AssetSourceResolver, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.serverUrl = var1;
            var1 = arg1;
            var2.jsbundleUrl = var1;
            var1 = arg2;
            var2.asset = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isLoadedFromServer';
        var0.key = var1;
        var1 = function() { // Original name: isLoadedFromServer, environment: var4
            _fun1528: for (var _fun1528_ip = 0;;) switch (_fun1528_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.serverUrl;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun1528_ip = 32;
                        continue _fun1528
                    }
                case 18:
                    var3 = var1.serverUrl;
                    var2 = '';
                    var0 = var2 !== var3;
                case 32:
                    if (!var0) {
                        _fun1528_ip = 57;
                        continue _fun1528
                    }
                case 35:
                    var1 = var1.asset;
                    var2 = var1.type;
                    var1 = 'xml';
                    var1 = var1 === var2;
                    var0 = !var1;
                case 57:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'isLoadedFromFileSystem';
        var0.key = var5;
        var5 = function() { // Original name: isLoadedFromFileSystem, environment: var4
            _fun1529: for (var _fun1529_ip = 0;;) switch (_fun1529_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.jsbundleUrl;
                    var1 = null;
                    var0 = var1 != var0;
                    if (!var0) {
                        _fun1529_ip = 53;
                        continue _fun1529
                    }
                case 18:
                    var4 = var2.jsbundleUrl;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun1529_ip = 50;
                        continue _fun1529
                    }
                case 33:
                    var3 = var4.startsWith;
                    var2 = 'file://';
                    var1 = var3.bind(var4)(var2);
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'defaultAsset';
        var0.key = var5;
        var5 = function() { // Original name: defaultAsset, environment: var4
            _fun1530: for (var _fun1530_ip = 0;;) switch (_fun1530_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isLoadedFromServer;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun1530_ip = 96;
                        continue _fun1530
                    }
                case 16:
                    var0 = var2.asset;
                    var1 = var0.resolver;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun1530_ip = 71;
                        continue _fun1530
                    }
                case 34:
                    var0 = var2.isLoadedFromFileSystem;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun1530_ip = 59;
                        continue _fun1530
                    }
                case 47:
                    var0 = var2.resourceIdentifierWithoutScale;
                    var0 = var0.bind(var2)();
                    _fun1530_ip = 69;
                    continue _fun1530;
                case 59:
                    var1 = var2.drawableFolderInBundle;
                    var0 = var1.bind(var2)();
                case 69:
                    _fun1530_ip = 94;
                    continue _fun1530;
                case 71:
                    var3 = var2.getAssetUsingResolver;
                    var1 = var2.asset;
                    var1 = var1.resolver;
                    var0 = var3.bind(var2)(var1);
                case 94:
                    _fun1530_ip = 106;
                    continue _fun1530;
                case 96:
                    var1 = var2.assetServerURL;
                    var0 = var1.bind(var2)();
                case 106:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getAssetUsingResolver';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getAssetUsingResolver, environment: var4
            _fun1531: for (var _fun1531_ip = 0;;) switch (_fun1531_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = 'android';
                    if (!(var0 !== var4)) {
                        _fun1531_ip = 168;
                        continue _fun1531
                    }
                case 17:
                    var0 = 'generic';
                    if (!(var0 !== var4)) {
                        _fun1531_ip = 156;
                        continue _fun1531
                    }
                case 28:
                    var0 = global;
                    var3 = var0.Error;
                    var1 = "Don't know how to get asset via provided resolver: ";
                    var5 = var1 + var4;
                    var8 = var0.JSON;
                    var4 = var8.stringify;
                    var1 = var2.asset;
                    var7 = null;
                    var6 = '\t';
                    var4 = var4.bind(var8)(var1, var7, var6);
                    var1 = '\nAsset: ';
                    var1 = var5 + var1;
                    var4 = var1 + var4;
                    var5 = var0.JSON;
                    var1 = var5.stringify;
                    var0 = ['android', 'generic'];
                    var1 = var1.bind(var5)(var0, var7, var6);
                    var0 = '\nPossible resolvers are:';
                    var0 = var4 + var0;
                    var11 = var0 + var1;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var3](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 156:
                    var0 = var2.scaledAssetURLNearBundle;
                    var0 = var0.bind(var2)();
                    return var0;
                case 168:
                    var0 = var2.isLoadedFromFileSystem;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun1531_ip = 193;
                        continue _fun1531
                    }
                case 181:
                    var0 = var2.resourceIdentifierWithoutScale;
                    var0 = var0.bind(var2)();
                    _fun1531_ip = 203;
                    continue _fun1531;
                case 193:
                    var1 = var2.drawableFolderInBundle;
                    var0 = var1.bind(var2)();
                case 203:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'assetServerURL';
        var0.key = var5;
        var5 = function() { // Original name: assetServerURL, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var2.serverUrl;
            var1 = null;
            var3 = var1 != var3;
            var1 = 'need server to load from';
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.fromSource;
            var3 = var2.serverUrl;
            var4 = _closure1_slot4;
            var0 = var2.asset;
            var0 = var4.bind(var5)(var0);
            var4 = var3 + var0;
            var0 = var2.asset;
            var3 = var0.hash;
            var0 = '?platform=android&hash=';
            var0 = var4 + var0;
            var0 = var0 + var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'scaledAssetPath';
        var0.key = var5;
        var5 = function() { // Original name: scaledAssetPath, environment: var4
            var2 = this;
            var1 = var2.fromSource;
            var4 = _closure1_slot4;
            var3 = var2.asset;
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'scaledAssetURLNearBundle';
        var0.key = var5;
        var5 = function() { // Original name: scaledAssetURLNearBundle, environment: var4
            _fun1534: for (var _fun1534_ip = 0;;) switch (_fun1534_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.jsbundleUrl;
                    var1 = null;
                    var1 = var1 != var0;
                    var3 = 'file://';
                    if (!var1) {
                        _fun1534_ip = 27;
                        continue _fun1534
                    }
                case 24:
                    var3 = var0;
                case 27:
                    var1 = var2.fromSource;
                    var5 = _closure1_slot4;
                    var4 = var2.asset;
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.replace;
                    var4 = /\.\.\\/ / g;
                    var0 = '_';
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var3 + var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'resourceIdentifierWithoutScale';
        var0.key = var5;
        var5 = function() { // Original name: resourceIdentifierWithoutScale, environment: var4
            var2 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 5;
            var0 = var5[var0];
            var3 = undefined;
            var6 = var4.bind(var3)(var0);
            var1 = true;
            var0 = 'resource identifiers work on Android';
            var0 = var6.bind(var3)(var1, var0);
            var1 = var2.fromSource;
            var0 = 4;
            var0 = var5[var0];
            var4 = var4.bind(var3)(var0);
            var3 = var4.getAndroidResourceIdentifier;
            var0 = var2.asset;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'drawableFolderInBundle';
        var0.key = var5;
        var5 = function() { // Original name: drawableFolderInBundle, environment: var4
            _fun1536: for (var _fun1536_ip = 0;;) switch (_fun1536_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.jsbundleUrl;
                    var1 = null;
                    var1 = var1 != var0;
                    var3 = 'file://';
                    if (!var1) {
                        _fun1536_ip = 27;
                        continue _fun1536
                    }
                case 24:
                    var3 = var0;
                case 27:
                    var1 = var2.fromSource;
                    var0 = var2.asset;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 2;
                    var4 = var8[var4];
                    var6 = undefined;
                    var10 = var7.bind(var6)(var4);
                    var9 = var10.pickScale;
                    var5 = var0.scales;
                    var4 = 3;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var11 = var4.default;
                    var4 = var11.get;
                    var4 = var4.bind(var11)();
                    var10 = var9.bind(var10)(var5, var4);
                    var4 = 4;
                    var5 = var8[var4];
                    var9 = var7.bind(var6)(var5);
                    var5 = var9.getAndroidResourceFolderName;
                    var9 = var5.bind(var9)(var0, var10);
                    var5 = '/';
                    var5 = var9 + var5;
                    var4 = var8[var4];
                    var6 = var7.bind(var6)(var4);
                    var4 = var6.getAndroidResourceIdentifier;
                    var4 = var4.bind(var6)(var0);
                    var5 = var5 + var4;
                    var4 = var0.type;
                    var0 = '.';
                    var0 = var5 + var0;
                    var0 = var0 + var4;
                    var0 = var3 + var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'fromSource';
        var0.key = var5;
        var4 = function(arg0) { // Original name: fromSource, environment: var4
            var1 = this;
            var0 = {};
            var2 = true;
            var0.__packager_asset = var2;
            var2 = var1.asset;
            var2 = var2.width;
            var0.width = var2;
            var2 = var1.asset;
            var2 = var2.height;
            var0.height = var2;
            var2 = arg0;
            var0.uri = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var3 = var4.pickScale;
            var1 = var1.asset;
            var2 = var1.scales;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var5 = var1.default;
            var1 = var5.get;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            var0.scale = var1;
            return var0;
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.pickScale;
    var1.pickScale = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 95, 96, 106, 44]);