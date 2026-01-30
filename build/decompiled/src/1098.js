// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
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
    var1 = function(arg0) { // Original name: startProfileForSpan, environment: var1
        _fun12106: for (var _fun12106_ip = 0;;) switch (_fun12106_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = function() { // Original name: onProfileHandler, environment: var1
                    var0 = undefined;
                    var3 = _closure2_slot7;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot6 = var0;
                var0 = function() { // Original name: _onProfileHandler, environment: var1
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot2;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun12110: for (var _fun12110_ip = 0;;) switch (_fun12110_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun12110_ip = 208;
                                        continue _fun12110
                                    }
                                case 12:
                                    var3 = _closure2_slot0;
                                    if (!var3) {
                                        _fun12110_ip = 203;
                                        continue _fun12110
                                    }
                                case 25:
                                    var3 = _closure2_slot1;
                                    if (!var3) {
                                        _fun12110_ip = 203;
                                        continue _fun12110
                                    }
                                case 35:
                                    var3 = _closure2_slot3;
                                    if (var3) {
                                        _fun12110_ip = 90;
                                        continue _fun12110
                                    }
                                case 42:
                                    var4 = _closure2_slot1;
                                    var3 = var4.stop;
                                    var5 = var3.bind(var4)();
                                    var4 = var5.then;
                                    var3 = function(arg0) { // Environment: var2
                                        _fun12111: for (var _fun12111_ip = 0;;) switch (_fun12111_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = _closure2_slot4;
                                                if (!var0) {
                                                    _fun12111_ip = 63;
                                                    continue _fun12111
                                                }
                                            case 13:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot1;
                                                var0 = 4;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var2 = var3.bind(var0)(var2);
                                                var5 = var2.WINDOW;
                                                var3 = var5.clearTimeout;
                                                var2 = _closure2_slot4;
                                                var2 = var3.bind(var5)(var2);
                                                _closure2_slot4 = var0;
                                            case 63:
                                                var5 = _closure1_slot0;
                                                var0 = _closure1_slot1;
                                                var6 = 3;
                                                var3 = var0[var6];
                                                var0 = undefined;
                                                var3 = var5.bind(var0)(var3);
                                                var3 = var3.DEBUG_BUILD;
                                                if (!var3) {
                                                    _fun12111_ip = 186;
                                                    continue _fun12111
                                                }
                                            case 97:
                                                var8 = _closure1_slot0;
                                                var9 = _closure1_slot1;
                                                var3 = 2;
                                                var5 = var9[var3];
                                                var5 = var8.bind(var0)(var5);
                                                var7 = var5.debug;
                                                var5 = var7.log;
                                                var3 = var9[var3];
                                                var9 = var8.bind(var0)(var3);
                                                var8 = var9.spanToJSON;
                                                var3 = _closure2_slot0;
                                                var3 = var8.bind(var9)(var3);
                                                var9 = var3.description;
                                                var3 = global;
                                                var3 = var3.HermesInternal;
                                                var8 = var3.concat;
                                                var3 = '[Profiling] stopped profiling of span: ';
                                                var3 = var8.bind(var3)(var9);
                                                var3 = var5.bind(var7)(var3);
                                            case 186:
                                                if (var4) {
                                                    _fun12111_ip = 319;
                                                    continue _fun12111
                                                }
                                            case 192:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var0)(var3);
                                                var3 = var3.DEBUG_BUILD;
                                                if (!var3) {
                                                    _fun12111_ip = 359;
                                                    continue _fun12111
                                                }
                                            case 221:
                                                var5 = _closure1_slot0;
                                                var8 = _closure1_slot1;
                                                var3 = 2;
                                                var6 = var8[var3];
                                                var6 = var5.bind(var0)(var6);
                                                var7 = var6.debug;
                                                var6 = var7.log;
                                                var3 = var8[var3];
                                                var8 = var5.bind(var0)(var3);
                                                var5 = var8.spanToJSON;
                                                var3 = _closure2_slot0;
                                                var3 = var5.bind(var8)(var3);
                                                var8 = var3.description;
                                                var3 = global;
                                                var3 = var3.HermesInternal;
                                                var5 = var3.concat;
                                                var3 = '[Profiling] profiler returned null profile for: ';
                                                var5 = var5.bind(var3)(var8);
                                                var3 = 'this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started';
                                                var3 = var6.bind(var7)(var5, var3);
                                                _fun12111_ip = 359;
                                                continue _fun12111;
                                            case 319:
                                                _closure2_slot3 = var4;
                                                var3 = _closure1_slot0;
                                                var5 = _closure1_slot1;
                                                var2 = 1;
                                                var2 = var5[var2];
                                                var3 = var3.bind(var0)(var2);
                                                var2 = var3.addProfileToGlobalCache;
                                                var1 = _closure2_slot2;
                                                var1 = var2.bind(var3)(var1, var4);
                                            case 359:
                                                return var0;
                                        }
                                    };
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.catch;
                                    var2 = function(arg0) { // Environment: var2
                                        _fun12112: for (var _fun12112_ip = 0;;) switch (_fun12112_ip) {
                                            case 0:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot1;
                                                var0 = 3;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var2 = var3.bind(var0)(var2);
                                                var2 = var2.DEBUG_BUILD;
                                                if (!var2) {
                                                    _fun12112_ip = 80;
                                                    continue _fun12112
                                                }
                                            case 34:
                                                var2 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var1 = 2;
                                                var1 = var3[var1];
                                                var1 = var2.bind(var0)(var1);
                                                var4 = var1.debug;
                                                var3 = var4.log;
                                                var2 = '[Profiling] error while stopping profiler:';
                                                var1 = arg0;
                                                var1 = var3.bind(var4)(var2, var1);
                                            case 80:
                                                return var0;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var2;
                                case 90:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var3 = 3;
                                    var3 = var5[var3];
                                    var6 = undefined;
                                    var3 = var4.bind(var6)(var3);
                                    var3 = var3.DEBUG_BUILD;
                                    if (!var3) {
                                        _fun12110_ip = 203;
                                        continue _fun12110
                                    }
                                case 124:
                                    var3 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var2 = 2;
                                    var4 = var7[var2];
                                    var4 = var3.bind(var6)(var4);
                                    var5 = var4.debug;
                                    var4 = var5.log;
                                    var2 = var7[var2];
                                    var3 = var3.bind(var6)(var2);
                                    var2 = var3.spanToJSON;
                                    var1 = _closure2_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    var3 = var1.description;
                                    var2 = '[Profiling] profile for:';
                                    var1 = 'already exists, returning early';
                                    var1 = var4.bind(var5)(var2, var3, var1);
                                case 203:
                                    var1 = undefined;
                                    return var1;
                                case 208:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot7 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot7 = var0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var4 = var0[var7];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.isAutomatedPageLoadSpan;
                var4 = var4.bind(var5)(var2);
                var5 = undefined;
                if (!var4) {
                    _fun12106_ip = 108;
                    continue _fun12106
                }
            case 68:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.timestampInSeconds;
                var6 = var4.bind(var6)();
                var4 = 1000;
                var5 = var4 * var6;
            case 108:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var6 = var6.bind(var0)(var4);
                var4 = var6.startJSSelfProfile;
                var4 = var4.bind(var6)();
                var _closure2_slot1 = var4;
                if (!var4) {
                    _fun12106_ip = 429;
                    continue _fun12106
                }
            case 145:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun12106_ip = 259;
                    continue _fun12106
                }
            case 174:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 2;
                var6 = var10[var4];
                var6 = var9.bind(var0)(var6);
                var8 = var6.debug;
                var6 = var8.log;
                var4 = var10[var4];
                var9 = var9.bind(var0)(var4);
                var4 = var9.spanToJSON;
                var4 = var4.bind(var9)(var2);
                var10 = var4.description;
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var4 = '[Profiling] started profiling span: ';
                var4 = var9.bind(var4)(var10);
                var4 = var6.bind(var8)(var4);
            case 259:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 2;
                var8 = var3[var6];
                var9 = var4.bind(var0)(var8);
                var8 = var9.uuid4;
                var10 = var8.bind(var9)();
                var _closure2_slot2 = var10;
                var8 = null;
                var _closure2_slot3 = var8;
                var6 = var3[var6];
                var8 = var4.bind(var0)(var6);
                var6 = var8.getCurrentScope;
                var9 = var6.bind(var8)();
                var8 = var9.setContext;
                var6 = {};
                var6.profile_id = var10;
                var6.start_timestamp = var5;
                var5 = 'profile';
                var5 = var8.bind(var9)(var5, var6);
                var5 = 4;
                var5 = var3[var5];
                var5 = var4.bind(var0)(var5);
                var6 = var5.WINDOW;
                var5 = var6.setTimeout;
                var3 = var3[var7];
                var3 = var4.bind(var0)(var3);
                var4 = var3.MAX_PROFILE_DURATION_MS;
                var3 = function() { // Environment: var1
                    _fun12113: for (var _fun12113_ip = 0;;) switch (_fun12113_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.DEBUG_BUILD;
                            if (!var2) {
                                _fun12113_ip = 109;
                                continue _fun12113
                            }
                        case 34:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var3 = var5[var1];
                            var3 = var2.bind(var0)(var3);
                            var4 = var3.debug;
                            var3 = var4.log;
                            var1 = var5[var1];
                            var5 = var2.bind(var0)(var1);
                            var2 = var5.spanToJSON;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var5)(var1);
                            var2 = var1.description;
                            var1 = '[Profiling] max profile duration elapsed, stopping profiling for:';
                            var1 = var3.bind(var4)(var1, var2);
                        case 109:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var _closure2_slot4 = var3;
                var4 = var2.end;
                var3 = var4.bind;
                var3 = var3.bind(var4)(var2);
                var _closure2_slot5 = var3;
                var1 = function() { // Original name: profilingWrappedSpanEnd, environment: var1
                    _fun12114: for (var _fun12114_ip = 0;;) switch (_fun12114_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun12114_ip = 24;
                                continue _fun12114
                            }
                        case 12:
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var3.bind(var0)();
                            _fun12114_ip = 59;
                            continue _fun12114;
                        case 24:
                            var4 = _closure2_slot6;
                            var3 = undefined;
                            var5 = var4.bind(var3)();
                            var4 = var5.then;
                            var3 = function() { // Environment: var2
                                var1 = _closure2_slot5;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2 = function() { // Environment: var2
                                var1 = _closure2_slot5;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2 = var4.bind(var5)(var3, var2);
                            var0 = _closure2_slot0;
                        case 59:
                            return var0;
                    }
                };
                var2.end = var1;
            case 429:
                return var0;
        }
    };
    var2.startProfileForSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1096, 817, 1073, 1025]);