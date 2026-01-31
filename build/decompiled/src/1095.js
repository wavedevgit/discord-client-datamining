// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        var0 = {};
        var2 = 'BrowserProfiling';
        var0.name = var2;
        var2 = function arg0() {
            _fun12049: for (var _fun12049_ip = 0;;) switch (_fun12049_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4.getOptions;
                    var9 = var0.bind(var4)();
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var8 = 0;
                    var3 = var0[var8];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.hasLegacyProfiling;
                    var3 = var3.bind(var5)(var9);
                    if (var3) {
                        _fun12049_ip = 59;
                        continue _fun12049
                    }
                case 53:
                    var3 = var9.profileLifecycle;
                case 59:
                    if (var3) {
                        _fun12049_ip = 72;
                        continue _fun12049
                    }
                case 62:
                    var3 = 'manual';
                    var9.profileLifecycle = var3;
                case 72:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.hasLegacyProfiling;
                    var3 = var3.bind(var5)(var9);
                    if (!var3) {
                        _fun12049_ip = 191;
                        continue _fun12049
                    }
                case 103:
                    var3 = var9.profilesSampleRate;
                    if (var3) {
                        _fun12049_ip = 191;
                        continue _fun12049
                    }
                case 112:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 1;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.DEBUG_BUILD;
                    if (!var3) {
                        _fun12049_ip = 880;
                        continue _fun12049
                    }
                case 144:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 2;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var6 = var3.debug;
                    var5 = var6.log;
                    var3 = '[Profiling] Profiling disabled, no profiling options found.';
                    var3 = var5.bind(var6)(var3);
                    _fun12049_ip = 880;
                    continue _fun12049;
                case 191:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var12 = 2;
                    var3 = var3[var12];
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.getActiveSpan;
                    var7 = var3.bind(var5)();
                    var5 = var7;
                    if (!var5) {
                        _fun12049_ip = 255;
                        continue _fun12049
                    }
                case 227:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var6 = var6.bind(var0)(var3);
                    var3 = var6.getRootSpan;
                    var5 = var3.bind(var6)(var7);
                case 255:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var6 = var6.bind(var0)(var3);
                    var3 = var6.hasLegacyProfiling;
                    var3 = var3.bind(var6)(var9);
                    if (!var3) {
                        _fun12049_ip = 296;
                        continue _fun12049
                    }
                case 286:
                    var6 = var9.profileSessionSampleRate;
                    var3 = var0 !== var6;
                case 296:
                    if (!var3) {
                        _fun12049_ip = 325;
                        continue _fun12049
                    }
                case 299:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 1;
                    var6 = var10[var6];
                    var6 = var7.bind(var0)(var6);
                    var3 = var6.DEBUG_BUILD;
                case 325:
                    if (!var3) {
                        _fun12049_ip = 367;
                        continue _fun12049
                    }
                case 328:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var3 = var6.bind(var0)(var3);
                    var7 = var3.debug;
                    var6 = var7.warn;
                    var3 = '[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.';
                    var3 = var6.bind(var7)(var3);
                case 367:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var6 = var6.bind(var0)(var3);
                    var3 = var6.hasLegacyProfiling;
                    var3 = var3.bind(var6)(var9);
                    if (var3) {
                        _fun12049_ip = 735;
                        continue _fun12049
                    }
                case 401:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var6 = var6.bind(var0)(var3);
                    var3 = var6.shouldProfileSession;
                    var7 = var3.bind(var6)(var9);
                    if (var7) {
                        _fun12049_ip = 500;
                        continue _fun12049
                    }
                case 432:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 1;
                    var3 = var10[var3];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.DEBUG_BUILD;
                    if (!var3) {
                        _fun12049_ip = 500;
                        continue _fun12049
                    }
                case 461:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var3 = var6.bind(var0)(var3);
                    var10 = var3.debug;
                    var6 = var10.log;
                    var3 = '[Profiling] Session not sampled. Skipping lifecycle profiler initialization.';
                    var3 = var6.bind(var10)(var3);
                case 500:
                    var6 = var9.profileLifecycle;
                    var3 = 'trace';
                    if (!(var3 === var6)) {
                        _fun12049_ip = 880;
                        continue _fun12049
                    }
                case 517:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var6 = var6.bind(var0)(var3);
                    var3 = var6.hasSpansEnabled;
                    var3 = var3.bind(var6)(var9);
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    if (var3) {
                        _fun12049_ip = 620;
                        continue _fun12049
                    }
                case 556:
                    var3 = 1;
                    var3 = var9[var3];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.DEBUG_BUILD;
                    if (!var3) {
                        _fun12049_ip = 616;
                        continue _fun12049
                    }
                case 577:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var12];
                    var10 = var11.bind(var0)(var10);
                    var12 = var10.debug;
                    var11 = var12.warn;
                    var10 = "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.";
                    var3 = var11.bind(var12)(var10);
                case 616:
                    var3 = undefined;
                    return var3;
                case 620:
                    var3 = 3;
                    var3 = var9[var3];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.UIProfiler;
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var6;
                    var3 = new var15[var3](var14);
                    var6 = var3 instanceof Object ? var3 : var6;
                    var _closure3_slot0 = var6;
                    var3 = var6.initialize;
                    var3 = var3.bind(var6)(var4, var7);
                    if (!var5) {
                        _fun12049_ip = 688;
                        continue _fun12049
                    }
                case 677:
                    var3 = var6.notifyRootSpanActive;
                    var3 = var3.bind(var6)(var5);
                case 688:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var0)(var3);
                    var7 = var3.WINDOW;
                    var6 = var7.setTimeout;
                    var3 = function() { // Environment: var1
                        _fun12052: for (var _fun12052_ip = 0;;) switch (_fun12052_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var5 = 2;
                                var2 = var0[var5];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getActiveSpan;
                                var4 = var2.bind(var3)();
                                var3 = var4;
                                if (!var3) {
                                    _fun12052_ip = 69;
                                    continue _fun12052
                                }
                            case 41:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var5];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getRootSpan;
                                var3 = var1.bind(var2)(var4);
                            case 69:
                                if (!var3) {
                                    _fun12052_ip = 90;
                                    continue _fun12052
                                }
                            case 72:
                                var2 = _closure3_slot0;
                                var1 = var2.notifyRootSpanActive;
                                var1 = var1.bind(var2)(var3);
                            case 90:
                                return var0;
                        }
                    };
                    var3 = var6.bind(var7)(var3, var8);
                    _fun12049_ip = 880;
                    continue _fun12049;
                case 735:
                    var3 = var5;
                    if (!var3) {
                        _fun12049_ip = 769;
                        continue _fun12049
                    }
                case 741:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.isAutomatedPageLoadSpan;
                    var3 = var6.bind(var7)(var5);
                case 769:
                    if (!var3) {
                        _fun12049_ip = 800;
                        continue _fun12049
                    }
                case 772:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.shouldProfileSpanLegacy;
                    var3 = var6.bind(var7)(var5);
                case 800:
                    if (!var3) {
                        _fun12049_ip = 834;
                        continue _fun12049
                    }
                case 803:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var2 = var6[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.startProfileForSpan;
                    var2 = var2.bind(var3)(var5);
                case 834:
                    var5 = var4.on;
                    var3 = 'spanStart';
                    var2 = function(arg0) { // Environment: var1
                        _fun12050: for (var _fun12050_ip = 0;;) switch (_fun12050_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 2;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var2);
                                var2 = var4.getRootSpan;
                                var2 = var2.bind(var4)(var3);
                                var2 = var3 === var2;
                                if (!var2) {
                                    _fun12050_ip = 76;
                                    continue _fun12050
                                }
                            case 46:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var4 = 0;
                                var4 = var6[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.shouldProfileSpanLegacy;
                                var2 = var4.bind(var5)(var3);
                            case 76:
                                if (!var2) {
                                    _fun12050_ip = 110;
                                    continue _fun12050
                                }
                            case 79:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 5;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.startProfileForSpan;
                                var1 = var1.bind(var2)(var3);
                            case 110:
                                return var0;
                        }
                    };
                    var2 = var5.bind(var4)(var3, var2);
                    var3 = var4.on;
                    var2 = 'beforeEnvelope';
                    var1 = function(arg0) { // Environment: var1
                        _fun12051: for (var _fun12051_ip = 0;;) switch (_fun12051_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = undefined;
                                var1 = undefined;
                                var14 = undefined;
                                var15 = undefined;
                                var16 = undefined;
                                var17 = undefined;
                                var18 = undefined;
                                var19 = undefined;
                                var20 = undefined;
                                var21 = undefined;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var5 = 0;
                                var3 = var3[var5];
                                var6 = var6.bind(var0)(var3);
                                var3 = var6.getActiveProfilesCount;
                                var3 = var3.bind(var6)();
                                if (!var3) {
                                    _fun12051_ip = 658;
                                    continue _fun12051
                                }
                            case 61:
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var5];
                                var6 = var6.bind(var0)(var3);
                                var3 = var6.findProfiledTransactionsFromEnvelope;
                                var3 = var3.bind(var6)(var4);
                                var6 = var3.length;
                                if (!var6) {
                                    _fun12051_ip = 658;
                                    continue _fun12051
                                }
                            case 100:
                                var1 = new Array(0);
                                var13 = var3;
                                var6 = var13[Symbol.iterator];
                                var13 = var6().next;
                                var12 = 2;
                                var11 = global;
                                var10 = '[Profiling] Could not retrieve profile for span: ';
                                var9 = 1;
                                var8 = null;
                                var7 = '[Profiling] cannot find profile for a span without a profile context';
                                var3 = 'string';
                            case 136:
                                var22 = var13().value;
                                var23 = var6;
                                if (!(var23 !== var0)) {
                                    _fun12051_ip = 629;
                                    continue _fun12051
                                }
                            case 150: // try_start_0
                                var14 = var22;
                                var23 = var8 == var22;
                                var22 = undefined;
                                if (var23) {
                                    _fun12051_ip = 171;
                                    continue _fun12051
                                }
                            case 162:
                                var23 = var14;
                                var22 = var23.contexts;
                            case 171:
                                var17 = var22;
                                var23 = var8 == var22;
                                var22 = undefined;
                                if (var23) {
                                    _fun12051_ip = 213;
                                    continue _fun12051
                                }
                            case 183:
                                var23 = var17;
                                var23 = var23.profile;
                                var15 = var23;
                                var23 = var8 == var23;
                                var22 = undefined;
                                if (var23) {
                                    _fun12051_ip = 213;
                                    continue _fun12051
                                }
                            case 204:
                                var23 = var15;
                                var22 = var23.profile_id;
                            case 213:
                                var18 = var22;
                                var22 = var17;
                                var23 = var8 == var22;
                                var22 = undefined;
                                if (var23) {
                                    _fun12051_ip = 258;
                                    continue _fun12051
                                }
                            case 228:
                                var23 = var17;
                                var23 = var23.profile;
                                var16 = var23;
                                var23 = var8 == var23;
                                var22 = undefined;
                                if (var23) {
                                    _fun12051_ip = 258;
                                    continue _fun12051
                                }
                            case 249:
                                var23 = var16;
                                var22 = var23.start_timestamp;
                            case 258:
                                var19 = var22;
                                var22 = var18;
                                var22 = typeof var22;
                                if (!(var3 !== var22)) {
                                    _fun12051_ip = 338;
                                    continue _fun12051
                                }
                            case 271:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var9];
                                var22 = var23.bind(var0)(var22);
                                var22 = var22.DEBUG_BUILD;
                                if (!var22) {
                                    _fun12051_ip = 617;
                                    continue _fun12051
                                }
                            case 300:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var12];
                                var22 = var23.bind(var0)(var22);
                                var23 = var22.debug;
                                var22 = var23.log;
                                var22 = var22.bind(var23)(var7);
                                _fun12051_ip = 617;
                                continue _fun12051;
                            case 338:
                                var22 = var18;
                                if (var22) {
                                    _fun12051_ip = 411;
                                    continue _fun12051
                                }
                            case 344:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var9];
                                var22 = var23.bind(var0)(var22);
                                var22 = var22.DEBUG_BUILD;
                                if (!var22) {
                                    _fun12051_ip = 617;
                                    continue _fun12051
                                }
                            case 373:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var12];
                                var22 = var23.bind(var0)(var22);
                                var23 = var22.debug;
                                var22 = var23.log;
                                var22 = var22.bind(var23)(var7);
                                _fun12051_ip = 617;
                                continue _fun12051;
                            case 411:
                                var23 = var17;
                                var23 = var8 != var23;
                                var22 = var23;
                                if (!var23) {
                                    _fun12051_ip = 433;
                                    continue _fun12051
                                }
                            case 424:
                                var23 = var17;
                                var22 = var23.profile;
                            case 433:
                                if (!var22) {
                                    _fun12051_ip = 444;
                                    continue _fun12051
                                }
                            case 436:
                                var22 = var17;
                                var22 = delete var22.profile;
                            case 444:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var5];
                                var24 = var23.bind(var0)(var22);
                                var23 = var24.takeProfileFromGlobalCache;
                                var22 = var18;
                                var24 = var23.bind(var24)(var22);
                                var20 = var24;
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                if (var24) {
                                    _fun12051_ip = 561;
                                    continue _fun12051
                                }
                            case 489:
                                var24 = var22[var9];
                                var24 = var23.bind(var0)(var24);
                                var24 = var24.DEBUG_BUILD;
                                if (!var24) {
                                    _fun12051_ip = 617;
                                    continue _fun12051
                                }
                            case 507:
                                var25 = _closure1_slot0;
                                var24 = _closure1_slot1;
                                var24 = var24[var12];
                                var24 = var25.bind(var0)(var24);
                                var26 = var24.debug;
                                var25 = var26.log;
                                var27 = var18;
                                var24 = var11.HermesInternal;
                                var24 = var24.concat;
                                var24 = var24.bind(var10)(var27);
                                var24 = var25.bind(var26)(var24);
                                _fun12051_ip = 617;
                                continue _fun12051;
                            case 561:
                                var22 = var22[var5];
                                var27 = var23.bind(var0)(var22);
                                var26 = var27.createProfilingEvent;
                                var31 = var18;
                                var30 = var19;
                                var29 = var20;
                                var28 = var14;
                                var32 = var27;
                                var22 = var32[var26](var31, var30, var29, var28, var27);
                                var21 = var22;
                                if (!var22) {
                                    _fun12051_ip = 617;
                                    continue _fun12051
                                }
                            case 601:
                                var24 = var1;
                                var23 = var24.push;
                                var22 = var21;
                                var22 = var23.bind(var24)(var22);
                            case 617: // try_end0
                                _fun12051_ip = 136;
                                continue _fun12051;
                            case 622: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var6.return();
                                throw var3;
                            case 629:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var5];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.addProfilesToEnvelope;
                                var1 = var2.bind(var3)(var4, var1);
                            case 658:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                case 880:
                    return var0;
            }
        };
        var0.setup = var2;
        var1 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.attachProfiledThreadToEvent;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.processEvent = var1;
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.browserProfilingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1096, 1073, 817, 1097, 1025, 1098]);