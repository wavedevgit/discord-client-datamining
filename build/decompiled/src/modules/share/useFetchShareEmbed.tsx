// modules/share/useFetchShareEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/useFetchShareEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useFetchShareEmbed, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var1 = var6.useState;
        var5 = undefined;
        var1 = var1.bind(var6)(var5);
        var10 = _closure1_slot4;
        var9 = 2;
        var2 = var10.bind(var5)(var1, var9);
        var1 = 0;
        var3 = var2[var1];
        var8 = 1;
        var2 = var2[var8];
        var _closure2_slot1 = var2;
        var2 = var6.useState;
        var11 = false;
        var2 = var2.bind(var6)(var11);
        var4 = var10.bind(var5)(var2, var9);
        var2 = var4[var1];
        var4 = var4[var8];
        var _closure2_slot2 = var4;
        var4 = var6.useState;
        var4 = var4.bind(var6)(var11);
        var4 = var10.bind(var5)(var4, var9);
        var1 = var4[var1];
        var4 = var4[var8];
        var _closure2_slot3 = var4;
        var8 = var6.useRef;
        var4 = true;
        var4 = var8.bind(var6)(var4);
        var _closure2_slot4 = var4;
        var4 = var6.useRef;
        var4 = var4.bind(var6)(var5);
        var _closure2_slot5 = var4;
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var7;
        var0 = function() { // Environment: var0
            _fun96397: for (var _fun96397_ip = 0;;) switch (_fun96397_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun96397_ip = 229;
                        continue _fun96397
                    }
                case 18:
                    var3 = _closure2_slot0;
                    var1 = '';
                    if (!(var1 !== var3)) {
                        _fun96397_ip = 229;
                        continue _fun96397
                    }
                case 33:
                    var6 = _closure2_slot0;
                    var5 = var6.match;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.URL_REGEX;
                    var7 = var5.bind(var6)(var3);
                    var5 = var4 == var7;
                    var3 = undefined;
                    if (var5) {
                        _fun96397_ip = 101;
                        continue _fun96397
                    }
                case 88:
                    var6 = var7.at;
                    var5 = 0;
                    var3 = var6.bind(var7)(var5);
                case 101:
                    var _closure3_slot0 = var3;
                    var5 = _closure2_slot5;
                    var5 = var5.current;
                    if (!(var3 === var5)) {
                        _fun96397_ip = 120;
                        continue _fun96397
                    }
                case 118:
                    return var1;
                case 120:
                    var5 = _closure2_slot5;
                    var5.current = var3;
                    if (!(var4 != var3)) {
                        _fun96397_ip = 206;
                        continue _fun96397
                    }
                case 134:
                    var3 = function() { // Environment: var2
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun96400: for (var _fun96400_ip = 0;;) switch (_fun96400_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun96400_ip = 341;
                                            continue _fun96400
                                        }
                                    case 12:
                                        var5 = undefined;
                                        var9 = undefined;
                                    case 16: // try_start_0 // try_start_2
                                        var3 = _closure2_slot2;
                                        var1 = true;
                                        var1 = var3.bind(var5)(var1);
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var1 = 4;
                                        var1 = var7[var1];
                                        var7 = var6.bind(var5)(var1);
                                        var6 = var7.unfurlEmbedUrl;
                                        var10 = _closure3_slot0;
                                        var1 = new Array(1);
                                        var1[0] = var10;
                                        var1 = var6.bind(var7)(var1);
                                        SaveGenerator(address = 83);
                                    case 81:
                                        return var1;
                                    case 83:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun96400_ip = 197;
                                            continue _fun96400
                                        }
                                    case 89:
                                        var9 = var1;
                                        var6 = var1.embeds;
                                        var6 = var6.length;
                                        var10 = 0;
                                        if (!(var10 !== var6)) {
                                            _fun96400_ip = 145;
                                            continue _fun96400
                                        }
                                    case 109:
                                        var7 = _closure2_slot1;
                                        var6 = {};
                                        var9 = var9.embeds;
                                        var9 = var9[var10];
                                        var6.embed = var9;
                                        var8 = _closure3_slot0;
                                        var6.url = var8;
                                        var6 = var7.bind(var5)(var6);
                                    case 143: // try_end0
                                        _fun96400_ip = 252;
                                        continue _fun96400;
                                    case 145: // try_start_1
                                        var4 = _closure2_slot1;
                                        var4 = var4.bind(var5)(var5);
                                    case 154: // try_end1 // try_end2
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 5;
                                        var6 = var8[var6];
                                        var8 = var7.bind(var5)(var6);
                                        var7 = var8.batchUpdates;
                                        var6 = function() { // Environment: var2
                                            var3 = _closure2_slot3;
                                            var0 = undefined;
                                            var2 = true;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = _closure2_slot2;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var6 = var7.bind(var8)(var6);
                                        var4 = undefined;
                                        return var4;
                                    case 197:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 5;
                                        var3 = var6[var3];
                                        var6 = var4.bind(var5)(var3);
                                        var4 = var6.batchUpdates;
                                        var3 = function() { // Environment: var2
                                            var3 = _closure2_slot3;
                                            var0 = undefined;
                                            var2 = true;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = _closure2_slot2;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var3 = var4.bind(var6)(var3);
                                        return var1;
                                    case 238: // try_start_3 // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 1);
                                        var1 = _closure2_slot1;
                                        var1 = var1.bind(var5)(var5);
                                    case 252: // try_end3
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 5;
                                        var1 = var4[var1];
                                        var4 = var3.bind(var5)(var1);
                                        var3 = var4.batchUpdates;
                                        var1 = function() { // Environment: var2
                                            var3 = _closure2_slot3;
                                            var0 = undefined;
                                            var2 = true;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = _closure2_slot2;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1 = var3.bind(var4)(var1);
                                        return var5;
                                    case 296: // catch_target2 // catch_target3
                                        CatchBlockStart(arg_register = 1);
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 5;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.batchUpdates;
                                        var2 = function() { // Environment: var2
                                            var3 = _closure2_slot3;
                                            var0 = undefined;
                                            var2 = true;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = _closure2_slot2;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var2 = var3.bind(var4)(var2);
                                        throw var1;
                                    case 341:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var5 = var3.bind(var1)();
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if (!var3) {
                        _fun96397_ip = 173;
                        continue _fun96397
                    }
                case 157:
                    var4 = _closure2_slot4;
                    var3 = false;
                    var4.current = var3;
                    var3 = var5.bind(var1)();
                case 173:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = 1000;
                    var3 = var4.bind(var1)(var5, var3);
                    var _closure3_slot1 = var3;
                    var2 = function() { // Environment: var2
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var2;
                case 206:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var1);
                    var3 = _closure2_slot4;
                    var2 = false;
                    var3.current = var2;
                    return var1;
                case 229:
                    var2 = _closure2_slot4;
                    var1 = false;
                    var2.current = var1;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.embed = var3;
        var0.isLoading = var2;
        var0.hasTriedResolving = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1457, 10045, 802, 2]);