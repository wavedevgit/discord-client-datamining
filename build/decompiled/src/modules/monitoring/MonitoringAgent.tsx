// modules/monitoring/MonitoringAgent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var7 = var1.Set;
    var1 = var7.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var12 = ['darwin', 'linux', 'win32', 'ios', 'android'];
    var13 = var4;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot5 = var1;
    var1 = {};
    var4 = 'count';
    var1.COUNT = var4;
    var4 = 'distribution';
    var1.DISTRIBUTION = var4;
    var _closure1_slot6 = var1;
    var3 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() {
            _fun39067: for (var _fun39067_ip = 0;;) switch (_fun39067_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var5.bind(var0)(var4, var2);
                    var2 = new Array(0);
                    var4._metrics = var2;
                    var2 = global;
                    var6 = var2.setInterval;
                    var5 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._flush;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var2 = 120000;
                    var2 = var6.bind(var0)(var5, var2);
                    var4._intervalId = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var2 = var7[var2];
                    var4 = var6.bind(var0)(var2);
                    var2 = var4.NativeModules;
                    var4 = var4.NativeEventEmitter;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.isAndroid;
                    var5 = var5.bind(var6)();
                    if (var5) {
                        _fun39067_ip = 139;
                        continue _fun39067
                    }
                case 129:
                    var2 = var2.MetricMonitor;
                    _fun39067_ip = 164;
                    continue _fun39067;
                case 139:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var2 = var3.default;
                case 164:
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var10 = var3;
                    var9 = var2;
                    var2 = new var10[var4](var9, var8);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.addListener;
                    var2 = 'logMetric';
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.increment;
                        var1 = arg0;
                        var0 = false;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_getMetricWithDefaults';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun39070: for (var _fun39070_ip = 0;;) switch (_fun39070_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.name;
                    var5 = var0.tags;
                    var0 = {};
                    var0.name = var1;
                    var1 = arg1;
                    var0.type = var1;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 8;
                    var1 = var6[var1];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var1);
                    var1 = var4.getGlobalTagsArray;
                    var1 = var1.bind(var4)();
                    var0.tags = var1;
                    var _closure3_slot0 = var0;
                    var1 = null;
                    if (!(var1 != var5)) {
                        _fun39070_ip = 94;
                        continue _fun39070
                    }
                case 79:
                    var4 = var5.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var0 = _closure3_slot0;
                        var2 = var0.tags;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                case 94:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var5 = 3;
                    var2 = var2[var5];
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.isWeb;
                    var2 = var2.bind(var4)();
                    var8 = 'web';
                    if (var2) {
                        _fun39070_ip = 183;
                        continue _fun39070
                    }
                case 131:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.getPlatformName;
                    var4 = var2.bind(var4)();
                    var5 = _closure1_slot5;
                    var2 = var5.has;
                    var5 = var2.bind(var5)(var4);
                    var2 = null;
                    if (!var5) {
                        _fun39070_ip = 180;
                        continue _fun39070
                    }
                case 177:
                    var2 = var4;
                case 180:
                    var8 = var2;
                case 183:
                    if (!(var1 != var8)) {
                        _fun39070_ip = 227;
                        continue _fun39070
                    }
                case 187:
                    var5 = var0.tags;
                    var4 = var5.push;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'platform:';
                    var2 = var7.bind(var2)(var8);
                    var2 = var4.bind(var5)(var2);
                case 227:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.CurrentReleaseChannel;
                    var4 = var1 != var2;
                    var5 = null;
                    if (!var4) {
                        _fun39070_ip = 312;
                        continue _fun39070
                    }
                case 262:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.ReleaseChannelsSets;
                    var4 = var3.ALL;
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var2);
                    var5 = null;
                    if (!var3) {
                        _fun39070_ip = 312;
                        continue _fun39070
                    }
                case 309:
                    var5 = var2;
                case 312:
                    if (!(var1 != var5)) {
                        _fun39070_ip = 356;
                        continue _fun39070
                    }
                case 316:
                    var3 = var0.tags;
                    var2 = var3.push;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'release_channel:';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                case 356:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'increment';
        var0.key = var5;
        var5 = function arg0() {
            _fun39072: for (var _fun39072_ip = 0;;) switch (_fun39072_ip) {
                case 0:
                    var1 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39072_ip = 14;
                        continue _fun39072
                    }
                case 12:
                    var1 = false;
                case 14:
                    var5 = var2._getMetricWithDefaults;
                    var3 = _closure1_slot6;
                    var4 = var3.COUNT;
                    var3 = arg0;
                    var5 = var5.bind(var2)(var3, var4);
                    var4 = var2._metrics;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var5);
                    if (var1) {
                        _fun39072_ip = 79;
                        continue _fun39072
                    }
                case 61:
                    var3 = var2._metrics;
                    var4 = var3.length;
                    var3 = 100;
                    var1 = var4 >= var3;
                case 79:
                    if (!var1) {
                        _fun39072_ip = 92;
                        continue _fun39072
                    }
                case 82:
                    var1 = var2._flush;
                    var1 = var1.bind(var2)();
                case 92:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'distribution';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun39073: for (var _fun39073_ip = 0;;) switch (_fun39073_ip) {
                case 0:
                    var1 = arguments[2];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39073_ip = 14;
                        continue _fun39073
                    }
                case 12:
                    var1 = false;
                case 14:
                    var5 = {};
                    var6 = var2._getMetricWithDefaults;
                    var3 = _closure1_slot6;
                    var4 = var3.DISTRIBUTION;
                    var3 = arg0;
                    var7 = var6.bind(var2)(var3, var4);
                    var8 = var5;
                    var3 = copyDataProperties(var8, var7);
                    var4 = arg1;
                    var3 = 'value';
                    var5[var3] = var4;
                    var4 = var2._metrics;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var5);
                    if (var1) {
                        _fun39073_ip = 100;
                        continue _fun39073
                    }
                case 82:
                    var3 = var2._metrics;
                    var4 = var3.length;
                    var3 = 100;
                    var1 = var4 >= var3;
                case 100:
                    if (!var1) {
                        _fun39073_ip = 113;
                        continue _fun39073
                    }
                case 103:
                    var1 = var2._flush;
                    var1 = var1.bind(var2)();
                case 113:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_flush';
        var0.key = var5;
        var4 = function() {
            _fun39074: for (var _fun39074_ip = 0;;) switch (_fun39074_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._metrics;
                    var2 = var2.length;
                    var3 = 0;
                    if (!(var2 > var3)) {
                        _fun39074_ip = 169;
                        continue _fun39074
                    }
                case 29:
                    var8 = var1._metrics;
                    var6 = new Array(0);
                    var9 = var6;
                    var7 = 0;
                    var2 = arraySpread(var9, var8, var7);
                    var _closure3_slot1 = var6;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.METRICS_V2;
                    var2.url = var5;
                    var5 = {};
                    var5.metrics = var6;
                    var6 = {
                        'built_at': '1770013154254',
                        'build_number': '5107'
                    };
                    var5.client_info = var6;
                    var2.body = var5;
                    var5 = 1;
                    var2.retries = var5;
                    var5 = true;
                    var2.rejectWithError = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var0 = function() { // Environment: var0
                        _fun39075: for (var _fun39075_ip = 0;;) switch (_fun39075_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._metrics;
                                var1 = var0.length;
                                var0 = _closure3_slot1;
                                var0 = var0.length;
                                var1 = var1 + var0;
                                var0 = 100;
                                if (!(var1 < var0)) {
                                    _fun39075_ip = 78;
                                    continue _fun39075
                                }
                            case 38:
                                var1 = _closure3_slot0;
                                var6 = var1._metrics;
                                var0 = new Array(0);
                                var5 = 0;
                                var7 = var0;
                                var5 = arraySpread(var7, var6, var5);
                                var6 = _closure3_slot1;
                                var7 = var0;
                                var2 = arraySpread(var7, var6, var5);
                                var1._metrics = var0;
                            case 78:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                case 169:
                    var0 = new Array(0);
                    var1._metrics = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var13 = var4;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/monitoring/MonitoringAgent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MetricType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 478, 4228, 4229, 27, 4230, 4231, 507, 2]);