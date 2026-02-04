// modules/libdiscore/libDiscoreSmokeTest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun118167: for (var _fun118167_ip = 0;;) switch (_fun118167_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118167_ip = 162;
                            continue _fun118167
                        }
                    case 10:
                        var1 = _closure1_slot6;
                        if (var1) {
                            _fun118167_ip = 157;
                            continue _fun118167
                        }
                    case 23: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.initLibdiscore;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 59);
                    case 57:
                        return var1;
                    case 59:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun118167_ip = 135;
                            continue _fun118167
                        }
                    case 65:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var7 = var5.bind(var4)(var3);
                        var6 = var7.rustMultiply;
                        var5 = 6;
                        var3 = 7;
                        var7 = var6.bind(var7)(var5, var3);
                        var6 = _closure1_slot5;
                        var5 = var6.info;
                        var3 = 'The answer for life the universe and everything is:';
                        var3 = var5.bind(var6)(var3, var7);
                        var3 = _closure1_slot8;
                        var3 = var3.bind(var4)();
                    case 133: // try_end0
                        _fun118167_ip = 151;
                        continue _fun118167;
                    case 135:
                        return var1;
                    case 138: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot10;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4);
                    case 151:
                        var1 = true;
                        _closure1_slot6 = var1;
                    case 157:
                        var1 = undefined;
                        return var1;
                    case 162:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var4 = function() {
        var5 = new Array(0);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 5;
        var3 = var4[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var6 = var3.ALL_LIBDISCORE_EXPERIMENTS;
        var3 = var6.forEach;
        var2 = function(arg0) { // Environment: var2
            _fun118169: for (var _fun118169_ip = 0;;) switch (_fun118169_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.getEnabledFeatureName;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun118169_ip = 38;
                        continue _fun118169
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot1;
        var2 = 6;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.LIBDISCORE_LOADED;
        var1 = {};
        var6 = true;
        var1.success = var6;
        var1.experimental_features = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot8 = var4;
    var3 = function arg0() {
        _fun118170: for (var _fun118170_ip = 0;;) switch (_fun118170_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var2 = var1.Error;
                var2 = var0 instanceof var2;
                if (var2) {
                    _fun118170_ip = 50;
                    continue _fun118170
                }
            case 18:
                var5 = null;
                var2 = var5 != var0;
                var6 = 'Unknown error';
                if (!var2) {
                    _fun118170_ip = 46;
                    continue _fun118170
                }
            case 33:
                var3 = var1.String;
                var2 = undefined;
                var6 = var3.bind(var2)(var0);
            case 46:
                var5 = null;
                _fun118170_ip = 60;
                continue _fun118170;
            case 50:
                var6 = var0.message;
                var5 = var0.name;
            case 60:
                var2 = var6.length;
                var0 = 1000;
                var4 = var6;
                if (!(var2 > var0)) {
                    _fun118170_ip = 108;
                    continue _fun118170
                }
            case 78:
                var3 = var6.substring;
                var2 = 0;
                var0 = 997;
                var2 = var3.bind(var6)(var2, var0);
                var0 = '...';
                var4 = var2 + var0;
            case 108:
                var2 = null;
                var0 = var4;
                if (!(var2 != var5)) {
                    _fun118170_ip = 145;
                    continue _fun118170
                }
            case 117:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 145:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var1 = function arg0() {
        var3 = arg0;
        var4 = _closure1_slot5;
        var2 = var4.error;
        var0 = 'Failed to execute smoke test:';
        var0 = var2.bind(var4)(var0, var3);
        var2 = _closure1_slot9;
        var0 = undefined;
        var5 = var2.bind(var0)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.LIBDISCORE_LOADED;
        var1 = {};
        var6 = false;
        var1.success = var6;
        var1.error = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot10 = var1;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var11 = var10.bind(var0)(var6);
    var6 = var11.prototype;
    var10 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var15 = 'libdiscore';
    var16 = var10;
    var6 = new var16[var11](var15, var14);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot5 = var6;
    var6 = false;
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/libdiscore/libDiscoreSmokeTest.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.libDiscoreSmokeTest = var5;
    var2.trackLibdiscoreSuccess = var4;
    var2.formatErrorMessage = var3;
    var2.trackLibdiscoreFailure = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3, 1619, 1616, 1613, 795, 2]);