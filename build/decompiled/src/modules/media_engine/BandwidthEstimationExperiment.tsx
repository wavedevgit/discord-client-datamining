// modules/media_engine/BandwidthEstimationExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun93909: for (var _fun93909_ip = 0;;) switch (_fun93909_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93909_ip = 46;
                    continue _fun93909
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93909_ip = 55;
                    continue _fun93909
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93909_ip = 345;
                    continue _fun93909
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93909_ip = 323;
                    continue _fun93909
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93909_ip = 283;
                    continue _fun93909
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93909_ip = 270;
                    continue _fun93909
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun93909_ip = 163;
                    continue _fun93909
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93909_ip = 179;
                    continue _fun93909
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93909_ip = 249;
                    continue _fun93909
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93909_ip = 249;
                    continue _fun93909
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93909_ip = 234;
                    continue _fun93909
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93909_ip = 247;
                    continue _fun93909
                }
            case 234:
                var8 = _closure1_slot2;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93909_ip = 265;
                continue _fun93909;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93909_ip = 283;
                continue _fun93909;
            case 270:
                var6 = _closure1_slot2;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93909_ip = 323;
                    continue _fun93909
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun93909_ip = 330;
                    continue _fun93909
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93910: for (var _fun93910_ip = 0;;) switch (_fun93910_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93910_ip = 56;
                                continue _fun93910
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun93910_ip = 67;
                            continue _fun93910;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1() {
        _fun93911: for (var _fun93911_ip = 0;;) switch (_fun93911_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93911_ip = 23;
                    continue _fun93911
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93911_ip = 33;
                    continue _fun93911
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun93911_ip = 70;
                    continue _fun93911
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93911_ip = 55;
                    continue _fun93911
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2024-06_rtc_pacer__simulcast',
        'label': 'RTC Pacer & Golive Simulcast'
    };
    var3 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
        'simulcastEnabled': false
    };
    var1.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'Golive Simulcast without prober 720p@500k'
    };
    var3 = 1;
    var9 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
        'simulcastEnabled': true
    };
    var10.config = var9;
    var9 = new Array(6);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Golive Simulcast 720p@500k'
    };
    var11 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
        'simulcastEnabled': true
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Golive with pacing'
    };
    var11 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer',
        'simulcastEnabled': false
    };
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Golive with pacing and probing'
    };
    var11 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
        'simulcastEnabled': false
    };
    var10.config = var11;
    var9[3] = var10;
    var10 = {
        'id': 5,
        'label': 'Golive Simulcast 720p@750k'
    };
    var11 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k',
        'simulcastEnabled': true
    };
    var10.config = var11;
    var9[4] = var10;
    var10 = {
        'id': 6,
        'label': 'Golive Simulcast 720p@1000k'
    };
    var11 = {
        'enabled': true,
        'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k',
        'simulcastEnabled': true
    };
    var10.config = var11;
    var9[5] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot0 = var1;
    var1 = {};
    var7 = function arg0, arg1() {
        _fun93912: for (var _fun93912_ip = 0;;) switch (_fun93912_ip) {
            case 0:
                var4 = this;
                var3 = _closure1_slot0;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = 'e1c55b_1';
                var1.location = var0;
                var0 = {};
                var5 = arg0;
                var0.autoTrackExposure = var5;
                var0 = var2.bind(var3)(var1, var0);
                var3 = var4.supportsBandwidthEstimationExperimentFullname;
                var2 = var0.fullname;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                if (var1) {
                    _fun93912_ip = 76;
                    continue _fun93912
                }
            case 68:
                var1 = false;
                var0.enabled = var1;
            case 76:
                return var0;
        }
    };
    var1.getConfig = var7;
    var7 = function arg0, arg1() {
        _fun93913: for (var _fun93913_ip = 0;;) switch (_fun93913_ip) {
            case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.getMediaEngineExperiments;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun93913_ip = 93;
                    continue _fun93913
                }
            case 26:
                var0 = _closure1_slot1;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun93913_ip = 89;
                    continue _fun93913
                }
            case 52:
                var5 = var1.value;
                var0 = var4.includes;
                var0 = var0.bind(var4)(var5);
                if (var0) {
                    _fun93913_ip = 74;
                    continue _fun93913
                }
            case 70:
                var0 = false;
                return var0;
            case 74:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun93913_ip = 52;
                    continue _fun93913
                }
            case 89:
                var0 = true;
                return var0;
            case 93:
                var0 = false;
                return var0;
        }
    };
    var1.supportsBandwidthEstimationExperimentFullname = var7;
    var6 = function arg0() {
        _fun93914: for (var _fun93914_ip = 0;;) switch (_fun93914_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = '/';
                var2 = var1.bind(var2)(var0);
                var3 = var2.length;
                var1 = 3;
                var0 = null;
                if (!(var1 === var3)) {
                    _fun93914_ip = 89;
                    continue _fun93914
                }
            case 31:
                var1 = 0;
                var3 = var2[var1];
                var1 = 'bandwidth_estimation';
                var0 = null;
                if (!(var1 === var3)) {
                    _fun93914_ip = 89;
                    continue _fun93914
                }
            case 49:
                var1 = 1;
                var3 = var2[var1];
                var2 = var3.split;
                var1 = ',';
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 89:
                return var0;
        }
    };
    var1.getMediaEngineExperiments = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/BandwidthEstimationExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);