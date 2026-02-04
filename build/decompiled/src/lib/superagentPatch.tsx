// lib/superagentPatch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
        var2 = require;
        var5 = metroImportDefault;
        var3 = dependencyMap;
        var _closure1_slot0 = var2;
        var _closure1_slot1 = var5;
        var0 = metroImportAll;
        var _closure1_slot2 = var0;
        var _closure1_slot3 = var3;
        var0 = function arg0() {
            _fun112310: for (var _fun112310_ip = 0;;) switch (_fun112310_ip) {
                case 0:
                    var0 = arg0;
                case 3: // try_start_0
                    var1 = global;
                    var3 = var1.URL;
                    var4 = var0;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = var1.pathname;
                    var2 = _closure1_slot8;
                    var1 = var2.test;
                    var1 = var1.bind(var2)(var3);
                case 57: // try_end0
                    return var1;
                case 59: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2 = _closure1_slot8;
                    var1 = var2.test;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var _closure1_slot9 = var0;
        var0 = 0;
        var4 = var3[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure1_slot4 = var4;
        var4 = 1;
        var4 = var3[var4];
        var4 = var2.bind(var0)(var4);
        var4 = var4.AbortCodes;
        var _closure1_slot5 = var4;
        var4 = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'];
        var _closure1_slot6 = var4;
        var4 = 2;
        var4 = var3[var4];
        var4 = var5.bind(var0)(var4);
        var5 = var4.parse;
        var4 = global;
        var4 = var4.JSON;
        var4 = var4.parse;
        var5[''] = var4;
        var4 = 3;
        var4 = var3[var4];
        var4 = var2.bind(var0)(var4);
        var4 = var4.IdGenerator;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var10 = var5;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot7 = var4;
        var4 = /\\/api(\\/v\d+)?\\/science / ;
            var _closure1_slot8 = var4; var4 = 5; var5 = var3[var4]; var7 = var2.bind(var0)(var5); var6 = var7.setRequestPatch; var5 = {}; var8 = function arg0() {
                _fun112311: for (var _fun112311_ip = 0;;) switch (_fun112311_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = var4;
                        var _closure2_slot0 = var4;
                        var0 = undefined;
                        var6 = undefined;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 6;
                        var5 = var9[var5];
                        var5 = var12.bind(var0)(var5);
                        var11 = var5.default;
                        var5 = 7;
                        var5 = var9[var5];
                        var5 = var12.bind(var0)(var5);
                        var5 = var5.default;
                        var7 = 8;
                        var7 = var9[var7];
                        var7 = var12.bind(var0)(var7);
                        var8 = var7.default;
                        var7 = 9;
                        var7 = var9[var7];
                        var7 = var12.bind(var0)(var7);
                        var7 = var7.default;
                        var10 = 10;
                        var10 = var9[var10];
                        var10 = var12.bind(var0)(var10);
                        var10 = var10.default;
                        var13 = 11;
                        var9 = var9[var13];
                        var9 = var12.bind(var0)(var9);
                        var9 = var9.isPlatformEmbedded;
                        var12 = var4.url;
                        var4 = 0;
                        var12 = var12[var4];
                        var4 = '/';
                        if (!(var4 === var12)) {
                            _fun112311_ip = 1019;
                            continue _fun112311
                        }
                    case 152:
                        var4 = var2;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var12 = 5;
                        var12 = var15[var12];
                        var14 = var14.bind(var0)(var12);
                        var12 = var14.getAPIBaseURL;
                        var14 = var12.bind(var14)();
                        var12 = var4.url;
                        var12 = var14 + var12;
                        var4.url = var12;
                        var4 = var4.header;
                        var15 = 'Authorization';
                        var4 = var15 in var4;
                        if (var4) {
                            _fun112311_ip = 232;
                            continue _fun112311
                        }
                    case 216:
                        var12 = var2;
                        var14 = var12.header;
                        var12 = 'authorization';
                        var4 = var12 in var14;
                    case 232:
                        if (var4) {
                            _fun112311_ip = 259;
                            continue _fun112311
                        }
                    case 235:
                        var14 = var2;
                        var12 = var14.set;
                        var4 = var11.getToken;
                        var4 = var4.bind(var11)();
                        var4 = var12.bind(var14)(var15, var4);
                    case 259:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var4 = 12;
                        var4 = var14[var4];
                        var12 = var12.bind(var0)(var4);
                        var4 = var12.updateDynamicSuperProperties;
                        var4 = var4.bind(var12)();
                        var4 = var10.getSuperPropertiesBase64;
                        var15 = var4.bind(var10)();
                        var4 = null;
                        if (!(var4 != var15)) {
                            _fun112311_ip = 323;
                            continue _fun112311
                        }
                    case 305:
                        var14 = var2;
                        var12 = var14.set;
                        var10 = 'X-Super-Properties';
                        var10 = var12.bind(var14)(var10, var15);
                    case 323:
                        var10 = var11.getFingerprint;
                        var15 = var10.bind(var11)();
                        var10 = var4 != var15;
                        if (!var10) {
                            _fun112311_ip = 348;
                            continue _fun112311
                        }
                    case 340:
                        var12 = '';
                        var10 = var12 !== var15;
                    case 348:
                        if (!var10) {
                            _fun112311_ip = 369;
                            continue _fun112311
                        }
                    case 351:
                        var14 = var2;
                        var12 = var14.set;
                        var10 = 'X-Fingerprint';
                        var10 = var12.bind(var14)(var10, var15);
                    case 369:
                        var10 = var11.getInstallationForTracking;
                        var14 = var10.bind(var11)();
                        var10 = var4 != var14;
                        if (!var10) {
                            _fun112311_ip = 394;
                            continue _fun112311
                        }
                    case 386:
                        var11 = '';
                        var10 = var11 !== var14;
                    case 394:
                        if (!var10) {
                            _fun112311_ip = 415;
                            continue _fun112311
                        }
                    case 397:
                        var12 = var2;
                        var11 = var12.set;
                        var10 = 'X-Installation-ID';
                        var10 = var11.bind(var12)(var10, var14);
                    case 415:
                        if (!var9) {
                            _fun112311_ip = 571;
                            continue _fun112311
                        }
                    case 421:
                        var10 = new Array(0);
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var9 = 13;
                        var9 = var11[var9];
                        var9 = var12.bind(var0)(var9);
                        var11 = var11[var13];
                        var12 = var12.bind(var0)(var11);
                        var11 = var12.isAndroid;
                        var11 = var11.bind(var12)();
                        if (var11) {
                            _fun112311_ip = 481;
                            continue _fun112311
                        }
                    case 467:
                        var9 = var9.NativeModules;
                        var11 = var9.LocalizationManager;
                        _fun112311_ip = 506;
                        continue _fun112311;
                    case 481:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var9 = 14;
                        var9 = var13[var9];
                        var9 = var12.bind(var0)(var9);
                        var11 = var9.default;
                    case 506:
                        if (!(var4 != var11)) {
                            _fun112311_ip = 539;
                            continue _fun112311
                        }
                    case 510:
                        var9 = var11.getConstants;
                        var9 = var9.bind(var11)();
                        var9 = var9.Languages;
                        if (!(var4 == var9)) {
                            _fun112311_ip = 536;
                            continue _fun112311
                        }
                    case 532:
                        var9 = new Array(0);
                    case 536:
                        var10 = var9;
                    case 539:
                        var9 = function arg0() {
                            var3 = arg0;
                            var1 = 10;
                            var _closure3_slot0 = var1;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun112313: for (var _fun112313_ip = 0;;) switch (_fun112313_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = arg1;
                                        var4 = _closure3_slot0;
                                        var1 = 10;
                                        if (!(var1 !== var4)) {
                                            _fun112313_ip = 66;
                                            continue _fun112313
                                        }
                                    case 20:
                                        var4 = var0.push;
                                        var7 = _closure3_slot0;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var6 = var1.concat;
                                        var5 = '';
                                        var1 = ';q=0.';
                                        var1 = var6.bind(var5)(var3, var1, var7);
                                        var1 = var4.bind(var0)(var1);
                                        _fun112313_ip = 76;
                                        continue _fun112313;
                                    case 66:
                                        var1 = var0.push;
                                        var1 = var1.bind(var0)(var3);
                                    case 76:
                                        var1 = global;
                                        var5 = var1.Math;
                                        var4 = var5.max;
                                        var1 = _closure3_slot0;
                                        var3 = 1;
                                        var1 = var1 - var3;
                                        var1 = var4.bind(var5)(var1, var3);
                                        _closure3_slot0 = var1;
                                        return var0;
                                }
                            };
                            var0 = new Array(0);
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.join;
                            var0 = ',';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var12 = var9.bind(var0)(var10);
                        var11 = var2;
                        var10 = var11.set;
                        var9 = 'Accept-Language';
                        var9 = var10.bind(var11)(var9, var12);
                    case 571:
                        var11 = var2;
                        var10 = var11.set;
                        var9 = var8.locale;
                        var8 = 'X-Discord-Locale';
                        var8 = var10.bind(var11)(var8, var9);
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var8 = 15;
                        var8 = var10[var8];
                        var8 = var9.bind(var0)(var8);
                        var11 = var8.bind(var0)();
                        if (!(var4 != var11)) {
                            _fun112311_ip = 645;
                            continue _fun112311
                        }
                    case 625:
                        var10 = var2;
                        var9 = var10.set;
                        var8 = 'X-Discord-Timezone';
                        var8 = var9.bind(var10)(var8, var11);
                    case 645:
                        var8 = var5.getDebugOptionsHeaderValue;
                        var11 = var8.bind(var5)();
                        var8 = var4 != var11;
                        if (!var8) {
                            _fun112311_ip = 670;
                            continue _fun112311
                        }
                    case 662:
                        var9 = '';
                        var8 = var9 !== var11;
                    case 670:
                        if (!var8) {
                            _fun112311_ip = 693;
                            continue _fun112311
                        }
                    case 673:
                        var10 = var2;
                        var9 = var10.set;
                        var8 = 'X-Debug-Options';
                        var8 = var9.bind(var10)(var8, var11);
                    case 693:
                        var5 = var5.isTracingRequests;
                        if (!var5) {
                            _fun112311_ip = 1019;
                            continue _fun112311
                        }
                    case 705:
                        var5 = var7.getCurrentUser;
                        var5 = var5.bind(var7)();
                        var8 = _closure1_slot7;
                        var7 = var8.generate;
                        var10 = var4 == var5;
                        var9 = undefined;
                        if (var10) {
                            _fun112311_ip = 738;
                            continue _fun112311
                        }
                    case 733:
                        var9 = var5.id;
                    case 738:
                        var10 = var4 != var9;
                        var5 = '0';
                        if (!var10) {
                            _fun112311_ip = 754;
                            continue _fun112311
                        }
                    case 751:
                        var5 = var9;
                    case 754:
                        var9 = var7.bind(var8)(var5);
                        var6 = var9;
                        var8 = var2;
                        var7 = var8.set;
                        var5 = 'x-client-trace-id';
                        var5 = var7.bind(var8)(var5, var9);
                    case 782: // try_start_0
                        var8 = _closure1_slot9;
                        var5 = global;
                        var10 = var5.URL;
                        var7 = var2;
                        var18 = var7.url;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var10
                            }
                        });
                        var19 = var9;
                        var7 = new var19[var10](var18, var17);
                        var7 = var7 instanceof Object ? var7 : var9;
                        var7 = var7.pathname;
                        var7 = var8.bind(var0)(var7);
                        if (var7) {
                            _fun112311_ip = 1015;
                            continue _fun112311
                        }
                    case 839:
                        var11 = var6;
                        var6 = var5.URLSearchParams;
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var19 = var7;
                        var6 = new var19[var6](var18);
                        var9 = var6 instanceof Object ? var6 : var7;
                        var8 = var9.append;
                        var6 = var5.HermesInternal;
                        var10 = var6.concat;
                        var7 = '@http.x_client_trace_id:"';
                        var6 = '"';
                        var7 = var10.bind(var7)(var11, var6);
                        var6 = 'query';
                        var6 = var8.bind(var9)(var6, var7);
                        var8 = var9.append;
                        var7 = 'showAllSpans';
                        var6 = 'true';
                        var6 = var8.bind(var9)(var7, var6);
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var6 = 4;
                        var6 = var8[var6];
                        var8 = var7.bind(var0)(var6);
                        var7 = var8.toURLSafe;
                        var6 = var9.toString;
                        var9 = var6.bind(var9)();
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'traces?';
                        var6 = var6.bind(var5)(var9);
                        var5 = 'https://datadog.discord.tools/apm/';
                        var5 = var7.bind(var8)(var6, var5);
                        if (!(var4 != var5)) {
                            _fun112311_ip = 1015;
                            continue _fun112311
                        }
                    case 1006:
                        var4 = var5.toString;
                        var4 = var4.bind(var5)();
                    case 1015: // try_end0
                        _fun112311_ip = 1019;
                        continue _fun112311;
                    case 1017: // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 1019:
                        var4 = var2;
                        var7 = var4.url;
                        var6 = var4.method;
                        var8 = 'string';
                        var4 = typeof var7;
                        var4 = var8 === var4;
                        if (!var4) {
                            _fun112311_ip = 1054;
                            continue _fun112311
                        }
                    case 1047:
                        var5 = typeof var6;
                        var4 = var8 === var5;
                    case 1054:
                        if (!var4) {
                            _fun112311_ip = 1069;
                            continue _fun112311
                        }
                    case 1057:
                        var5 = _closure1_slot9;
                        var5 = var5.bind(var0)(var7);
                        var4 = !var5;
                    case 1069:
                        if (!var4) {
                            _fun112311_ip = 1104;
                            continue _fun112311
                        }
                    case 1072:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 16;
                        var4 = var8[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.trackHttpRequest;
                        var4 = var4.bind(var5)(var7, var6);
                    case 1104:
                        var4 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var3 = 17;
                        var3 = var5[var3];
                        var6 = var4.bind(var0)(var3);
                        var5 = var6.report;
                        var4 = var2;
                        var9 = var4.method;
                        var8 = var4.url;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var3 = 'Sending ';
                        var2 = ' to ';
                        var3 = var7.bind(var3)(var9, var2, var8);
                        var2 = 'Network';
                        var2 = var5.bind(var6)(var2, var3);
                        var5 = var4.on;
                        var3 = 'response';
                        var2 = function(arg0) { // Environment: var1
                            _fun112314: for (var _fun112314_ip = 0;;) switch (_fun112314_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = null;
                                    var0 = var2 != var1;
                                    var4 = null;
                                    if (!var0) {
                                        _fun112314_ip = 39;
                                        continue _fun112314
                                    }
                                case 14:
                                    var3 = var1.status;
                                    var0 = 400;
                                    var0 = var3 >= var0;
                                    var4 = null;
                                    if (!var0) {
                                        _fun112314_ip = 39;
                                        continue _fun112314
                                    }
                                case 34:
                                    var4 = var1.text;
                                case 39:
                                    var0 = var2 == var4;
                                    var11 = '';
                                    if (var0) {
                                        _fun112314_ip = 74;
                                        continue _fun112314
                                    }
                                case 50:
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var0 = 'and body: ';
                                    var11 = var3.bind(var0)(var4);
                                case 74:
                                    var4 = _closure1_slot2;
                                    var3 = _closure1_slot3;
                                    var0 = 17;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.report;
                                    var5 = _closure2_slot0;
                                    var10 = var5.method;
                                    var9 = var5.url;
                                    var2 = var2 == var1;
                                    var8 = undefined;
                                    if (var2) {
                                        _fun112314_ip = 137;
                                        continue _fun112314
                                    }
                                case 132:
                                    var8 = var1.status;
                                case 137:
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var7 = var1.concat;
                                    var19 = 'Completed ';
                                    var17 = ' to ';
                                    var15 = ' with status: ';
                                    var13 = ' ';
                                    var18 = var10;
                                    var16 = var9;
                                    var14 = var8;
                                    var12 = var11;
                                    var2 = var19[var7](var18, var17, var16, var15, var14, var13, var12, var11);
                                    var1 = 'Network';
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var0;
                            }
                        };
                        var2 = var5.bind(var4)(var3, var2);
                        var3 = var4.on;
                        var2 = 'error';
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun112315: for (var _fun112315_ip = 0;;) switch (_fun112315_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg1;
                                    var4 = _closure1_slot2;
                                    var3 = _closure1_slot3;
                                    var0 = 17;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var8 = var4.bind(var0)(var3);
                                    var6 = var8.report;
                                    var3 = _closure2_slot0;
                                    var15 = var3.method;
                                    var14 = var3.url;
                                    var3 = null;
                                    var4 = var3 == var5;
                                    var13 = undefined;
                                    if (var4) {
                                        _fun112315_ip = 71;
                                        continue _fun112315
                                    }
                                case 66:
                                    var13 = var5.status;
                                case 71:
                                    var4 = var3 == var2;
                                    var12 = undefined;
                                    if (var4) {
                                        _fun112315_ip = 85;
                                        continue _fun112315
                                    }
                                case 80:
                                    var12 = var2.text;
                                case 85:
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var11 = var2.concat;
                                    var23 = 'Failed ';
                                    var21 = ' to ';
                                    var19 = ' with status ';
                                    var17 = ' and body: ';
                                    var22 = var15;
                                    var20 = var14;
                                    var18 = var13;
                                    var16 = var12;
                                    var4 = var23[var11](var22, var21, var20, var19, var18, var17, var16, var15);
                                    var2 = 'Network';
                                    var2 = var6.bind(var8)(var2, var4);
                                    if (!(var3 != var5)) {
                                        _fun112315_ip = 360;
                                        continue _fun112315
                                    }
                                case 157:
                                    var2 = 'parse';
                                    var2 = var2 in var5;
                                    if (!var2) {
                                        _fun112315_ip = 360;
                                        continue _fun112315
                                    }
                                case 171:
                                    var2 = var5.parse;
                                    if (!var2) {
                                        _fun112315_ip = 360;
                                        continue _fun112315
                                    }
                                case 183:
                                    var6 = _closure1_slot6;
                                    var4 = var6.includes;
                                    var2 = _closure2_slot0;
                                    var2 = var2.url;
                                    var2 = var4.bind(var6)(var2);
                                    var6 = '[FILTERED]';
                                    if (!var2) {
                                        _fun112315_ip = 271;
                                        continue _fun112315
                                    }
                                case 215:
                                    var2 = _closure2_slot0;
                                    var4 = var2.xhr;
                                    var8 = var3 == var4;
                                    var2 = undefined;
                                    if (var8) {
                                        _fun112315_ip = 268;
                                        continue _fun112315
                                    }
                                case 234:
                                    var9 = var4.responseText;
                                    var3 = var3 == var9;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun112315_ip = 268;
                                        continue _fun112315
                                    }
                                case 249:
                                    var8 = var9.slice;
                                    var4 = 0;
                                    var3 = 1000;
                                    var2 = var8.bind(var9)(var4, var3);
                                case 268:
                                    var6 = var2;
                                case 271:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var1 = 18;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.addBreadcrumb;
                                    var1 = {
                                        'category': 'superagent',
                                        'message': 'Failed to parse HTTP response.'
                                    };
                                    var4 = {};
                                    var7 = _closure2_slot0;
                                    var8 = var7.method;
                                    var4.method = var8;
                                    var7 = var7.url;
                                    var4.url = var7;
                                    var4.responseText = var6;
                                    var5 = var5.status;
                                    var4.status = var5;
                                    var1.data = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 360:
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            }; var5.prepareRequest = var8; var8 = function arg0, arg1, arg2() {
                _fun112316: for (var _fun112316_ip = 0;;) switch (_fun112316_ip) {
                    case 0:
                        var12 = arg0;
                        var3 = arg2;
                        var _closure2_slot0 = var12;
                        var0 = arg1;
                        var _closure2_slot1 = var0;
                        var _closure2_slot2 = var3;
                        var2 = var12.statusCode;
                        var0 = 400;
                        if (!(var0 === var2)) {
                            _fun112316_ip = 62;
                            continue _fun112316
                        }
                    case 39:
                        var0 = var12.body;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun112316_ip = 62;
                            continue _fun112316
                        }
                    case 50:
                        var0 = var0.captcha_key;
                        if (var0) {
                            _fun112316_ip = 543;
                            continue _fun112316
                        }
                    case 62:
                        var2 = var12.statusCode;
                        var0 = 401;
                        if (!(var0 === var2)) {
                            _fun112316_ip = 139;
                            continue _fun112316
                        }
                    case 78:
                        var0 = var12.body;
                        var4 = null;
                        var2 = var4 == var0;
                        var6 = undefined;
                        var5 = undefined;
                        if (var2) {
                            _fun112316_ip = 101;
                            continue _fun112316
                        }
                    case 96:
                        var5 = var0.code;
                    case 101:
                        var0 = _closure1_slot5;
                        var0 = var0.MFA_REQUIRED;
                        if (!(var5 === var0)) {
                            _fun112316_ip = 139;
                            continue _fun112316
                        }
                    case 118:
                        var0 = var12.body;
                        if (!(var4 != var0)) {
                            _fun112316_ip = 139;
                            continue _fun112316
                        }
                    case 127:
                        var0 = var0.mfa;
                        if (var0) {
                            _fun112316_ip = 470;
                            continue _fun112316
                        }
                    case 139:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var0 = 23;
                        var0 = var5[var0];
                        var8 = undefined;
                        var10 = var4.bind(var8)(var0);
                        var7 = var10.isLimitedAccessErrorCode;
                        var5 = var12.statusCode;
                        var11 = var12.body;
                        var0 = null;
                        var13 = var0 == var11;
                        var4 = undefined;
                        if (var13) {
                            _fun112316_ip = 197;
                            continue _fun112316
                        }
                    case 192:
                        var4 = var11.code;
                    case 197:
                        var5 = var7.bind(var10)(var5, var4);
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        if (var5) {
                            _fun112316_ip = 419;
                            continue _fun112316
                        }
                    case 217:
                        var5 = 25;
                        var5 = var4[var5];
                        var11 = var7.bind(var8)(var5);
                        var10 = var11.isLimitedAccessErrorCode;
                        var5 = var12.statusCode;
                        var13 = var12.body;
                        var14 = var0 == var13;
                        var0 = undefined;
                        if (var14) {
                            _fun112316_ip = 260;
                            continue _fun112316
                        }
                    case 255:
                        var0 = var13.code;
                    case 260:
                        var0 = var10.bind(var11)(var5, var0);
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        if (var0) {
                            _fun112316_ip = 368;
                            continue _fun112316
                        }
                    case 277:
                        var0 = 27;
                        var0 = var5[var0];
                        var11 = var10.bind(var8)(var0);
                        var0 = var11.isBlockedByProxyErrorCode;
                        var0 = var0.bind(var11)(var12);
                        var11 = !var0;
                        var0 = !var11;
                        if (var11) {
                            _fun112316_ip = 366;
                            continue _fun112316
                        }
                    case 309:
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var11 = 20;
                        var11 = var9[var11];
                        var12 = var12.bind(var8)(var11);
                        var11 = 28;
                        var11 = var9[var11];
                        var9 = var9.paths;
                        var12 = var12.bind(var8)(var11, var9);
                        var11 = var12.then;
                        var9 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.handleBlockedByProxy;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var9 = var11.bind(var12)(var9);
                        var0 = false;
                    case 366:
                        _fun112316_ip = 417;
                        continue _fun112316;
                    case 368:
                        var9 = 20;
                        var9 = var5[var9];
                        var10 = var10.bind(var8)(var9);
                        var9 = 26;
                        var9 = var5[var9];
                        var5 = var5.paths;
                        var10 = var10.bind(var8)(var9, var5);
                        var9 = var10.then;
                        var5 = function(arg0) { // Environment: var1
                            _fun112321: for (var _fun112321_ip = 0;;) switch (_fun112321_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.default;
                                    var0 = _closure2_slot0;
                                    var3 = var0.body;
                                    var0 = null;
                                    var4 = var0 == var3;
                                    var0 = undefined;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun112321_ip = 38;
                                        continue _fun112321
                                    }
                                case 33:
                                    var1 = var3.guild_id;
                                case 38:
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var9.bind(var10)(var5);
                        var0 = false;
                    case 417:
                        _fun112316_ip = 468;
                        continue _fun112316;
                    case 419:
                        var5 = 20;
                        var5 = var4[var5];
                        var7 = var7.bind(var8)(var5);
                        var5 = 24;
                        var5 = var4[var5];
                        var4 = var4.paths;
                        var7 = var7.bind(var8)(var5, var4);
                        var5 = var7.then;
                        var4 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.default;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var4 = var5.bind(var7)(var4);
                        var0 = false;
                    case 468:
                        _fun112316_ip = 538;
                        continue _fun112316;
                    case 470:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var4 = 20;
                        var4 = var2[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = 22;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var5 = var5.bind(var6)(var4, var2);
                        var4 = var5.then;
                        var2 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var4 = var0.openMFAModal;
                            var1 = _closure2_slot0;
                            var1 = var1.body;
                            var3 = var1.mfa;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                        };
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.catch;
                        var2 = var2.bind(var4)(var3);
                        var0 = true;
                    case 538:
                        _fun112316_ip = 691;
                        continue _fun112316;
                    case 543:
                        var2 = global;
                        var5 = var2.Promise;
                        var4 = var5.all;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var7 = 20;
                        var2 = var6[var7];
                        var9 = undefined;
                        var11 = var8.bind(var9)(var2);
                        var2 = 19;
                        var10 = var6[var2];
                        var2 = var6.paths;
                        var10 = var11.bind(var9)(var10, var2);
                        var2 = new Array(2);
                        var2[0] = var10;
                        var7 = var6[var7];
                        var8 = var8.bind(var9)(var7);
                        var7 = 21;
                        var7 = var6[var7];
                        var6 = var6.paths;
                        var6 = var8.bind(var9)(var7, var6);
                        var2[1] = var6;
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.then;
                        var2 = function(arg0) { // Environment: var1
                            _fun112317: for (var _fun112317_ip = 0;;) switch (_fun112317_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = var6[Symbol.iterator];
                                    var6 = var1().next;
                                    var7 = undefined;
                                    var2 = undefined;
                                    var5 = undefined;
                                    var8 = var6().value;
                                    var9 = var1;
                                    var9 = var9 === var7;
                                    var2 = var9;
                                    if (var9) {
                                        _fun112317_ip = 32;
                                        continue _fun112317
                                    }
                                case 29:
                                    var5 = var8;
                                case 32: // try_start_0
                                    var8 = var5;
                                    var4 = var8.default;
                                case 40: // try_end0
                                    var5 = undefined;
                                    var8 = var2;
                                    if (var8) {
                                        _fun112317_ip = 68;
                                        continue _fun112317
                                    }
                                case 48:
                                    var6 = var6().value;
                                    var8 = var1;
                                    var8 = var8 === var7;
                                    var2 = var8;
                                    if (var8) {
                                        _fun112317_ip = 68;
                                        continue _fun112317
                                    }
                                case 65:
                                    var5 = var6;
                                case 68: // try_start_1
                                    var3 = var5.extractCaptchaPropsFromResponse;
                                case 74: // try_end1
                                    var5 = var2;
                                    if (var5) {
                                        _fun112317_ip = 83;
                                        continue _fun112317
                                    }
                                case 80:
                                    var1.return();
                                case 83:
                                    var5 = var4;
                                    var4 = var5.showCaptchaAsync;
                                    var6 = var3;
                                    var3 = _closure2_slot0;
                                    var3 = var3.body;
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var4.bind(var5)(var3);
                                    return var3;
                                case 119: // catch_target1
                                    CatchBlockStart(arg_register = 0);
                                    _fun112317_ip = 129;
                                    continue _fun112317;
                                case 123: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    _fun112317_ip = 129;
                                    continue _fun112317;
                                case 127:
                                    CatchBlockStart(arg_register = 0);
                                case 129:
                                    if (var2) {
                                        _fun112317_ip = 135;
                                        continue _fun112317
                                    }
                                case 132:
                                    var1.return();
                                case 135:
                                    throw var0;
                            }
                        };
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            _fun112318: for (var _fun112318_ip = 0;;) switch (_fun112318_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.captcha_key;
                                    var3 = var0.captcha_rqtoken;
                                    var0 = var0.captcha_session_id;
                                    var2 = {};
                                    var2['X-Captcha-Key'] = var1;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun112318_ip = 44;
                                        continue _fun112318
                                    }
                                case 36:
                                    var2['X-Captcha-Rqtoken'] = var3;
                                case 44:
                                    if (!(var1 != var0)) {
                                        _fun112318_ip = 56;
                                        continue _fun112318
                                    }
                                case 48:
                                    var2['X-Captcha-Session-Id'] = var0;
                                case 56:
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.catch;
                        var1 = var1.bind(var2)(var3);
                        var0 = true;
                    case 691:
                        return var0;
                }
            }; var5.interceptResponse = var8; var5 = var6.bind(var7)(var5); var4 = var3[var4]; var5 = var2.bind(var0)(var4); var4 = var5.setAwaitOnline; var1 = function() { // Environment: var1
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun112325: for (var _fun112325_ip = 0;;) switch (_fun112325_ip) {
                            case 0:
                                StartGenerator();
                                var8 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun112325_ip = 212;
                                    continue _fun112325
                                }
                            case 13:
                                var5 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var7 = 17;
                                var3 = var2[var7];
                                var1 = undefined;
                                var10 = var5.bind(var1)(var3);
                                var9 = var10.report;
                                var3 = global;
                                var5 = var3.HermesInternal;
                                var11 = var5.concat;
                                var6 = 'Request to ';
                                var5 = ' failed, will retry.';
                                var5 = var11.bind(var6)(var8, var5);
                                var6 = 'Network';
                                var5 = var9.bind(var10)(var6, var5);
                                var5 = _closure1_slot1;
                                var9 = 29;
                                var2 = var2[var9];
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.isOnline;
                                var2 = var2.bind(var5)();
                                if (var2) {
                                    _fun112325_ip = 209;
                                    continue _fun112325
                                }
                            case 116:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var2 = var2[var9];
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.awaitOnline;
                                var2 = var2.bind(var5)();
                                SaveGenerator(address = 147);
                            case 145:
                                return var2;
                            case 147:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun112325_ip = 206;
                                    continue _fun112325
                                }
                            case 153:
                                var5 = _closure1_slot2;
                                var4 = _closure1_slot3;
                                var4 = var4[var7];
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.report;
                                var3 = var3.HermesInternal;
                                var7 = var3.concat;
                                var3 = 'Network detected online, retrying ';
                                var3 = var7.bind(var3)(var8);
                                var3 = var4.bind(var5)(var6, var3);
                                _fun112325_ip = 209;
                                continue _fun112325;
                            case 206:
                                return var2;
                            case 209:
                                return var1;
                            case 212:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
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
            }; var1 = var1.bind(var0)(); var1 = var4.bind(var5)(var1); var1 = 30; var1 = var3[var1]; var3 = var2.bind(var0)(var1); var2 = var3.fileFinishedImporting; var1 = 'lib/superagentPatch.tsx'; var1 = var2.bind(var3)(var1);
            return var0;
        })(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 508, 14437, 1457, 507, 1216, 803, 1685, 1621, 795, 478, 14438, 27, 651, 14439, 14440, 12, 1207, 14441, 1307, 5259, 11215, 8025, 4680, 14448, 3717, 14449, 14450, 1444, 2]);