// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun10676: for (var _fun10676_ip = 0;;) switch (_fun10676_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var17 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun10676_ip = 846;
                            continue _fun10676
                        }
                    case 18:
                        var2 = var6;
                        var10 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var _closure4_slot0 = var10;
                        var3 = undefined;
                        var8 = undefined;
                        var4 = undefined;
                        var1 = _closure1_slot3;
                        var23 = var1[var6];
                        var11 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var15 = 1;
                        var6 = var1[var15];
                        var6 = var11.bind(var10)(var6);
                        var6 = var6.WINDOW;
                        var1 = var1[var15];
                        var1 = var11.bind(var10)(var1);
                        var1 = var1.WINDOW;
                        var1 = var1.Sentry;
                        if (var1) {
                            _fun10676_ip = 100;
                            continue _fun10676
                        }
                    case 98:
                        var1 = {};
                    case 100:
                        var6.Sentry = var1;
                        var5 = var1;
                        if (var23) {
                            _fun10676_ip = 167;
                            continue _fun10676
                        }
                    case 112:
                        var1 = global;
                        var11 = var1.Error;
                        var12 = var2;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var1 = 'Cannot lazy load integration: ';
                        var27 = var6.bind(var1)(var12);
                        var6 = var11.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var11
                            }
                        });
                        var28 = var6;
                        var1 = new var28[var11](var27, var26);
                        var1 = var1 instanceof Object ? var1 : var6;
                        throw var1;
                    case 167:
                        var6 = var5;
                        var1 = var2;
                        var1 = var6[var1];
                        var6 = 'function';
                        var11 = typeof var1;
                        if (!(var6 === var11)) {
                            _fun10676_ip = 204;
                            continue _fun10676
                        }
                    case 188:
                        var11 = '_isShim';
                        var11 = var11 in var1;
                        if (var11) {
                            _fun10676_ip = 204;
                            continue _fun10676
                        }
                    case 201:
                        return var1;
                    case 204:
                        var12 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var11 = 2;
                        var1 = var1[var11];
                        var12 = var12.bind(var10)(var1);
                        var1 = var12.getClient;
                        var14 = var1.bind(var12)();
                        var12 = null;
                        var1 = var12 == var14;
                        var20 = undefined;
                        if (var1) {
                            _fun10676_ip = 270;
                            continue _fun10676
                        }
                    case 245:
                        var1 = var14.getOptions;
                        var1 = var1.bind(var14)();
                        var14 = var12 == var1;
                        var20 = undefined;
                        if (var14) {
                            _fun10676_ip = 270;
                            continue _fun10676
                        }
                    case 264:
                        var20 = var1.cdnBaseUrl;
                    case 270:
                        if (var20) {
                            _fun10676_ip = 279;
                            continue _fun10676
                        }
                    case 273:
                        var20 = 'https://browser.sentry-cdn.com';
                    case 279:
                        var1 = global;
                        var19 = var1.URL;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var11 = var14[var11];
                        var11 = var16.bind(var10)(var11);
                        var27 = var11.SDK_VERSION;
                        var11 = var1.HermesInternal;
                        var21 = var11.concat;
                        var18 = '/';
                        var24 = '.min.js';
                        var28 = var18;
                        var26 = var18;
                        var25 = var23;
                        var27 = var28[var21](var27, var26, var25, var24, var23);
                        var18 = var19.prototype;
                        var18 = Object.create(var18, {
                            constructor: {
                                value: var19
                            }
                        });
                        var28 = var18;
                        var26 = var20;
                        var11 = new var28[var19](var27, var26, var25);
                        var18 = var11 instanceof Object ? var11 : var18;
                        var11 = var18.toString;
                        var11 = var11.bind(var18)();
                        var14 = var14[var15];
                        var14 = var16.bind(var10)(var14);
                        var14 = var14.WINDOW;
                        var18 = var14.document;
                        var16 = var18.createElement;
                        var14 = 'script';
                        var14 = var16.bind(var18)(var14);
                        var7 = var14;
                        _closure4_slot0 = var14;
                        var14.src = var11;
                        var11 = 'anonymous';
                        var14.crossOrigin = var11;
                        var11 = 'strict-origin';
                        var14.referrerPolicy = var11;
                        if (!var17) {
                            _fun10676_ip = 471;
                            continue _fun10676
                        }
                    case 452:
                        var16 = var7;
                        var14 = var16.setAttribute;
                        var11 = 'nonce';
                        var11 = var14.bind(var16)(var11, var17);
                    case 471:
                        var14 = var1.Promise;
                        var11 = var14.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var14
                            }
                        });
                        var27 = function(arg0, arg1) { // Environment: var9
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var4 = _closure4_slot0;
                            var3 = var4.addEventListener;
                            var2 = 'load';
                            var1 = function() { // Environment: var1
                                var1 = _closure5_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var3 = _closure4_slot0;
                            var2 = var3.addEventListener;
                            var1 = 'error';
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var28 = var11;
                        var9 = new var28[var14](var27, var26);
                        var3 = var9 instanceof Object ? var9 : var11;
                        var14 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var11 = var9[var15];
                        var11 = var14.bind(var10)(var11);
                        var11 = var11.WINDOW;
                        var11 = var11.document;
                        var11 = var11.currentScript;
                        var9 = var9[var15];
                        var9 = var14.bind(var10)(var9);
                        var9 = var9.WINDOW;
                        var9 = var9.document;
                        var9 = var9.body;
                        if (var9) {
                            _fun10676_ip = 601;
                            continue _fun10676
                        }
                    case 566:
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var10)(var13);
                        var13 = var13.WINDOW;
                        var13 = var13.document;
                        var9 = var13.head;
                    case 601:
                        if (var9) {
                            _fun10676_ip = 622;
                            continue _fun10676
                        }
                    case 604:
                        var12 = var12 == var11;
                        var10 = undefined;
                        if (var12) {
                            _fun10676_ip = 619;
                            continue _fun10676
                        }
                    case 613:
                        var10 = var11.parentElement;
                    case 619:
                        var9 = var10;
                    case 622:
                        var8 = var9;
                        if (var9) {
                            _fun10676_ip = 688;
                            continue _fun10676
                        }
                    case 628:
                        var11 = var1.Error;
                        var13 = var2;
                        var9 = var1.HermesInternal;
                        var12 = var9.concat;
                        var10 = 'Could not find parent element to insert lazy-loaded ';
                        var9 = ' script';
                        var27 = var12.bind(var10)(var13, var9);
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var28 = var10;
                        var9 = new var28[var11](var27, var26);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
                    case 688:
                        var9 = var8;
                        var8 = var9.appendChild;
                        var7 = var8.bind(var9)(var7);
                    case 702: // try_start_0
                        SaveGenerator(address = 706);
                    case 704:
                        return var3;
                    case 706:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun10676_ip = 788;
                            continue _fun10676
                        }
                    case 712: // try_end0
                        var7 = var5;
                        var5 = var2;
                        var5 = var7[var5];
                        var4 = var5;
                        var5 = typeof var5;
                        if (!(var6 === var5)) {
                            _fun10676_ip = 735;
                            continue _fun10676
                        }
                    case 732:
                        return var4;
                    case 735:
                        var6 = var1.Error;
                        var7 = var2;
                        var4 = var1.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'Could not load integration: ';
                        var27 = var5.bind(var4)(var7);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var28 = var5;
                        var4 = new var28[var6](var27, var26);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 788:
                        return var3;
                    case 791: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = var1.Error;
                        var4 = var2;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Error when loading integration: ';
                        var27 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var28 = var2;
                        var1 = new var28[var3](var27, var26);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 846:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = {
        'replayIntegration': 'replay',
        'replayCanvasIntegration': 'replay-canvas',
        'feedbackIntegration': 'feedback',
        'feedbackModalIntegration': 'feedback-modal',
        'feedbackScreenshotIntegration': 'feedback-screenshot',
        'captureConsoleIntegration': 'captureconsole',
        'contextLinesIntegration': 'contextlines',
        'linkedErrorsIntegration': 'linkederrors',
        'dedupeIntegration': 'dedupe',
        'extraErrorDataIntegration': 'extraerrordata',
        'graphqlClientIntegration': 'graphqlclient',
        'httpClientIntegration': 'httpclient',
        'reportingObserverIntegration': 'reportingobserver',
        'rewriteFramesIntegration': 'rewriteframes',
        'browserProfilingIntegration': 'browserprofiling',
        'moduleMetadataIntegration': 'modulemetadata',
        'instrumentAnthropicAiClient': 'instrumentanthropicaiclient',
        'instrumentOpenAiClient': 'instrumentopenaiclient',
        'instrumentGoogleGenAIClient': 'instrumentgooglegenaiclient'
    };
    var _closure1_slot3 = var3;
    var1 = function arg0, arg1() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.lazyLoadIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1026, 818]);