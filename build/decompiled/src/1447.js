// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {
        'reachabilityUrl': 'https://clients3.google.com/generate_204',
        'reachabilityMethod': 'HEAD',
        'reachabilityHeaders': null,
        'reachabilityTest': null,
        'reachabilityShortTimeout': 5000,
        'reachabilityLongTimeout': 60000,
        'reachabilityRequestTimeout': 15000,
        'reachabilityShouldRun': null,
        'shouldFetchWiFiSSID': false,
        'useNativeReachability': true
    };
    var3 = {};
    var0.reachabilityHeaders = var3;
    var3 = function(arg0) { // Original name: reachabilityTest, environment: var2
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = arg0;
        var3 = var0.status;
        var0 = 204;
        var0 = var0 === var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.reachabilityTest = var3;
    var2 = function() { // Original name: reachabilityShouldRun, environment: var2
        var0 = true;
        return var0;
    };
    var0.reachabilityShouldRun = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);