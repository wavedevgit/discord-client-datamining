// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: getAbsoluteTime, environment: var1
        _fun10886: for (var _fun10886_ip = 0;;) switch (_fun10886_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                if (!var0) {
                    _fun10886_ip = 75;
                    continue _fun10886
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.browserPerformanceTimeOrigin;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun10886_ip = 61;
                    continue _fun10886
                }
            case 47:
                var3 = global;
                var3 = var3.performance;
                var1 = var3.timeOrigin;
            case 61:
                var2 = var1 + var2;
                var1 = 1000;
                var0 = var2 / var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function(arg0) { // Original name: resourceTimingToSpanAttributes, environment: var1
        _fun10887: for (var _fun10887_ip = 0;;) switch (_fun10887_ip) {
            case 0:
                var7 = arg0;
                var6 = {};
                var0 = var7.nextHopProtocol;
                var8 = null;
                if (!(var8 != var0)) {
                    _fun10887_ip = 82;
                    continue _fun10887
                }
            case 17:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.extractNetworkProtocol;
                var0 = var7.nextHopProtocol;
                var1 = var1.bind(var2)(var0);
                var0 = var1.name;
                var1 = var1.version;
                var6['network.protocol.version'] = var1;
                var6['network.protocol.name'] = var0;
            case 82:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.browserPerformanceTimeOrigin;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun10887_ip = 175;
                    continue _fun10887
                }
            case 120:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getBrowserPerformanceAPI;
                var2 = var0.bind(var2)();
                var0 = var6;
                if (!(var8 != var2)) {
                    _fun10887_ip = 443;
                    continue _fun10887
                }
            case 160:
                var2 = var2.timeOrigin;
                var0 = var6;
                if (!var2) {
                    _fun10887_ip = 443;
                    continue _fun10887
                }
            case 175:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var2 = {};
                var9 = _closure1_slot3;
                var1 = var7.redirectStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.redirect_start'] = var1;
                var1 = var7.redirectEnd;
                var1 = var9.bind(var3)(var1);
                var2['http.request.redirect_end'] = var1;
                var1 = var7.workerStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.worker_start'] = var1;
                var1 = var7.fetchStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.fetch_start'] = var1;
                var1 = var7.domainLookupStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.domain_lookup_start'] = var1;
                var1 = var7.domainLookupEnd;
                var1 = var9.bind(var3)(var1);
                var2['http.request.domain_lookup_end'] = var1;
                var1 = var7.connectStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.connect_start'] = var1;
                var1 = var7.secureConnectionStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.secure_connection_start'] = var1;
                var1 = var7.connectEnd;
                var1 = var9.bind(var3)(var1);
                var2['http.request.connection_end'] = var1;
                var1 = var7.requestStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.request_start'] = var1;
                var1 = var7.responseStart;
                var1 = var9.bind(var3)(var1);
                var2['http.request.response_start'] = var1;
                var1 = var7.responseEnd;
                var1 = var9.bind(var3)(var1);
                var2['http.request.response_end'] = var1;
                var1 = var7.responseStart;
                var8 = var8 != var1;
                var1 = undefined;
                if (!var8) {
                    _fun10887_ip = 417;
                    continue _fun10887
                }
            case 401:
                var8 = var7.responseStart;
                var7 = 1000;
                var1 = var8 / var7;
            case 417:
                var2['http.request.time_to_first_byte'] = var1;
                var1 = {};
                var2 = var4.bind(var5)(var1, var6, var2);
                var1 = function(arg0) { // Original name: dropUndefinedKeysFromObject, environment: var1
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.fromEntries;
                    var4 = var0.Object;
                    var3 = var4.entries;
                    var0 = arg0;
                    var4 = var3.bind(var4)(var0);
                    var3 = var4.filter;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = 2;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var3)(var2);
            case 443:
                return var0;
        }
    };
    var2.resourceTimingToSpanAttributes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 817, 1057]);