// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: mergeAndOverwriteScopeData, environment: var1
        _fun99992: for (var _fun99992_ip = 0;;) switch (_fun99992_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arg2;
                if (!var6) {
                    _fun99992_ip = 133;
                    continue _fun99992
                }
            case 12:
                var5 = global;
                var1 = var5.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var6);
                var0 = var0.length;
                if (!var0) {
                    _fun99992_ip = 133;
                    continue _fun99992
                }
            case 38:
                var11 = var5.Object;
                var10 = var11.assign;
                var9 = var8[var7];
                var0 = {};
                var0 = var10.bind(var11)(var0, var9);
                var8[var7] = var0;
                var3 = var6;
                for (var0 in var3)
                    case 76: {
                        case 85: var11 = var0;
                        var9 = var5.Object;
                        var9 = var9.prototype;
                        var10 = var9.hasOwnProperty;
                        var9 = var10.call;
                        var9 = var9.bind(var10)(var6, var11);
                        if (!var9) {
                            _fun99992_ip = 76;
                            continue _fun99992
                        }
                        case 119: var10 = var8[var7];
                        var9 = var6[var11];
                        var10[var11] = var9;
                        _fun99992_ip = 76;
                        continue _fun99992;
                    }
            case 133:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = function(arg0, arg1) { // Original name: applyScopeDataToEvent, environment: var1
        _fun99993: for (var _fun99993_ip = 0;;) switch (_fun99993_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var5 = var0.fingerprint;
                var12 = var0.span;
                var7 = var0.breadcrumbs;
                var6 = var0.sdkProcessingMetadata;
                var15 = var0.extra;
                var14 = var0.tags;
                var13 = var0.user;
                var11 = var0.contexts;
                var4 = var0.level;
                var3 = var0.transactionName;
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 1;
                var8 = var0[var9];
                var0 = undefined;
                var10 = var10.bind(var0)(var8);
                var8 = var10.dropUndefinedKeys;
                var17 = var8.bind(var10)(var15);
                var8 = var17;
                if (!var8) {
                    _fun99993_ip = 130;
                    continue _fun99993
                }
            case 107:
                var10 = global;
                var15 = var10.Object;
                var10 = var15.keys;
                var10 = var10.bind(var15)(var17);
                var8 = var10.length;
            case 130:
                if (!var8) {
                    _fun99993_ip = 167;
                    continue _fun99993
                }
            case 133:
                var8 = global;
                var16 = var8.Object;
                var15 = var16.assign;
                var10 = var2.extra;
                var8 = {};
                var8 = var15.bind(var16)(var8, var17, var10);
                var2.extra = var8;
            case 167:
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var9];
                var10 = var10.bind(var0)(var8);
                var8 = var10.dropUndefinedKeys;
                var16 = var8.bind(var10)(var14);
                var8 = var16;
                if (!var8) {
                    _fun99993_ip = 224;
                    continue _fun99993
                }
            case 201:
                var10 = global;
                var14 = var10.Object;
                var10 = var14.keys;
                var10 = var10.bind(var14)(var16);
                var8 = var10.length;
            case 224:
                if (!var8) {
                    _fun99993_ip = 261;
                    continue _fun99993
                }
            case 227:
                var8 = global;
                var15 = var8.Object;
                var14 = var15.assign;
                var10 = var2.tags;
                var8 = {};
                var8 = var14.bind(var15)(var8, var16, var10);
                var2.tags = var8;
            case 261:
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var9];
                var10 = var10.bind(var0)(var8);
                var8 = var10.dropUndefinedKeys;
                var15 = var8.bind(var10)(var13);
                var8 = var15;
                if (!var8) {
                    _fun99993_ip = 318;
                    continue _fun99993
                }
            case 295:
                var10 = global;
                var13 = var10.Object;
                var10 = var13.keys;
                var10 = var10.bind(var13)(var15);
                var8 = var10.length;
            case 318:
                if (!var8) {
                    _fun99993_ip = 354;
                    continue _fun99993
                }
            case 321:
                var8 = global;
                var14 = var8.Object;
                var13 = var14.assign;
                var10 = var2.user;
                var8 = {};
                var8 = var13.bind(var14)(var8, var15, var10);
                var2.user = var8;
            case 354:
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var9];
                var10 = var10.bind(var0)(var8);
                var8 = var10.dropUndefinedKeys;
                var14 = var8.bind(var10)(var11);
                var8 = var14;
                if (!var8) {
                    _fun99993_ip = 411;
                    continue _fun99993
                }
            case 388:
                var10 = global;
                var11 = var10.Object;
                var10 = var11.keys;
                var10 = var10.bind(var11)(var14);
                var8 = var10.length;
            case 411:
                if (!var8) {
                    _fun99993_ip = 448;
                    continue _fun99993
                }
            case 414:
                var8 = global;
                var13 = var8.Object;
                var11 = var13.assign;
                var10 = var2.contexts;
                var8 = {};
                var8 = var11.bind(var13)(var8, var14, var10);
                var2.contexts = var8;
            case 448:
                if (!var4) {
                    _fun99993_ip = 457;
                    continue _fun99993
                }
            case 451:
                var2.level = var4;
            case 457:
                var4 = var3;
                if (!var4) {
                    _fun99993_ip = 476;
                    continue _fun99993
                }
            case 463:
                var10 = var2.type;
                var8 = 'transaction';
                var4 = var8 !== var10;
            case 476:
                if (!var4) {
                    _fun99993_ip = 485;
                    continue _fun99993
                }
            case 479:
                var2.transaction = var3;
            case 485:
                if (!var12) {
                    _fun99993_ip = 704;
                    continue _fun99993
                }
            case 491:
                var8 = global;
                var15 = var8.Object;
                var14 = var15.assign;
                var13 = {};
                var4 = _closure1_slot0;
                var10 = _closure1_slot1;
                var3 = 2;
                var11 = var10[var3];
                var16 = var4.bind(var0)(var11);
                var11 = var16.spanToTraceContext;
                var11 = var11.bind(var16)(var12);
                var13.trace = var11;
                var11 = var2.contexts;
                var11 = var14.bind(var15)(var13, var11);
                var2.contexts = var11;
                var14 = var8.Object;
                var13 = var14.assign;
                var11 = {};
                var8 = 3;
                var8 = var10[var8];
                var15 = var4.bind(var0)(var8);
                var8 = var15.getDynamicSamplingContextFromSpan;
                var8 = var8.bind(var15)(var12);
                var11.dynamicSamplingContext = var8;
                var8 = var2.sdkProcessingMetadata;
                var8 = var13.bind(var14)(var11, var8);
                var2.sdkProcessingMetadata = var8;
                var8 = var10[var3];
                var11 = var4.bind(var0)(var8);
                var8 = var11.getRootSpan;
                var8 = var8.bind(var11)(var12);
                var3 = var10[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.spanToJSON;
                var3 = var3.bind(var4)(var8);
                var3 = var3.description;
                var4 = var3;
                if (!var4) {
                    _fun99993_ip = 679;
                    continue _fun99993
                }
            case 670:
                var8 = var2.transaction;
                var4 = !var8;
            case 679:
                if (!var4) {
                    _fun99993_ip = 695;
                    continue _fun99993
                }
            case 682:
                var10 = var2.type;
                var8 = 'transaction';
                var4 = var8 === var10;
            case 695:
                if (!var4) {
                    _fun99993_ip = 704;
                    continue _fun99993
                }
            case 698:
                var2.transaction = var3;
            case 704:
                var3 = var2.fingerprint;
                if (var3) {
                    _fun99993_ip = 719;
                    continue _fun99993
                }
            case 713:
                var3 = new Array(0);
                _fun99993_ip = 753;
                continue _fun99993;
            case 719:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var9 = var8.bind(var0)(var4);
                var8 = var9.arrayify;
                var4 = var2.fingerprint;
                var3 = var8.bind(var9)(var4);
            case 753:
                var2.fingerprint = var3;
                if (!var5) {
                    _fun99993_ip = 784;
                    continue _fun99993
                }
            case 762:
                var4 = var2.fingerprint;
                var3 = var4.concat;
                var3 = var3.bind(var4)(var5);
                var2.fingerprint = var3;
            case 784:
                var3 = var2.fingerprint;
                if (!var3) {
                    _fun99993_ip = 807;
                    continue _fun99993
                }
            case 793:
                var4 = var2.fingerprint;
                var4 = var4.length;
                var3 = !var4;
            case 807:
                if (!var3) {
                    _fun99993_ip = 815;
                    continue _fun99993
                }
            case 810:
                var3 = delete var2.fingerprint;
            case 815:
                var5 = new Array(0);
                var4 = var5.concat;
                var8 = _closure1_slot2;
                var3 = var2.breadcrumbs;
                if (var3) {
                    _fun99993_ip = 841;
                    continue _fun99993
                }
            case 837:
                var3 = new Array(0);
            case 841:
                var3 = var8.bind(var0)(var3);
                var1 = _closure1_slot2;
                var1 = var1.bind(var0)(var7);
                var3 = var4.bind(var5)(var3, var1);
                var4 = var3.length;
                var1 = undefined;
                if (!var4) {
                    _fun99993_ip = 874;
                    continue _fun99993
                }
            case 871:
                var1 = var3;
            case 874:
                var2.breadcrumbs = var1;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var2.sdkProcessingMetadata;
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var6);
                var2.sdkProcessingMetadata = var1;
                return var0;
        }
    };
    var2.applyScopeDataToEvent = var4;
    var2.mergeAndOverwriteScopeData = var3;
    var1 = function(arg0, arg1) { // Original name: mergeScopeData, environment: var1
        _fun99994: for (var _fun99994_ip = 0;;) switch (_fun99994_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var17 = var0.extra;
                var16 = var0.tags;
                var15 = var0.user;
                var14 = var0.contexts;
                var5 = var0.level;
                var13 = var0.sdkProcessingMetadata;
                var11 = var0.breadcrumbs;
                var10 = var0.fingerprint;
                var9 = var0.eventProcessors;
                var7 = var0.attachments;
                var6 = var0.propagationContext;
                var4 = var0.transactionName;
                var3 = var0.span;
                var12 = _closure1_slot3;
                var0 = undefined;
                var8 = 'extra';
                var8 = var12.bind(var0)(var2, var8, var17);
                var8 = 'tags';
                var8 = var12.bind(var0)(var2, var8, var16);
                var8 = 'user';
                var8 = var12.bind(var0)(var2, var8, var15);
                var8 = 'contexts';
                var8 = var12.bind(var0)(var2, var8, var14);
                var8 = 'sdkProcessingMetadata';
                var8 = var12.bind(var0)(var2, var8, var13);
                if (!var5) {
                    _fun99994_ip = 156;
                    continue _fun99994
                }
            case 150:
                var2.level = var5;
            case 156:
                if (!var4) {
                    _fun99994_ip = 165;
                    continue _fun99994
                }
            case 159:
                var2.transactionName = var4;
            case 165:
                if (!var3) {
                    _fun99994_ip = 174;
                    continue _fun99994
                }
            case 168:
                var2.span = var3;
            case 174:
                var3 = var11.length;
                if (!var3) {
                    _fun99994_ip = 223;
                    continue _fun99994
                }
            case 182:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.breadcrumbs;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var11);
                var3 = var5.bind(var8)(var4, var3);
                var2.breadcrumbs = var3;
            case 223:
                var3 = var10.length;
                if (!var3) {
                    _fun99994_ip = 272;
                    continue _fun99994
                }
            case 231:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.fingerprint;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var10);
                var3 = var5.bind(var8)(var4, var3);
                var2.fingerprint = var3;
            case 272:
                var3 = var9.length;
                if (!var3) {
                    _fun99994_ip = 321;
                    continue _fun99994
                }
            case 280:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.eventProcessors;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var9);
                var3 = var5.bind(var8)(var4, var3);
                var2.eventProcessors = var3;
            case 321:
                var3 = var7.length;
                if (!var3) {
                    _fun99994_ip = 370;
                    continue _fun99994
                }
            case 329:
                var5 = new Array(0);
                var4 = var5.concat;
                var1 = _closure1_slot2;
                var3 = var2.attachments;
                var3 = var1.bind(var0)(var3);
                var1 = var1.bind(var0)(var7);
                var1 = var4.bind(var5)(var3, var1);
                var2.attachments = var1;
            case 370:
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var2.propagationContext;
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var6);
                var2.propagationContext = var1;
                return var0;
        }
    };
    var2.mergeScopeData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 12887, 12941, 12961]);