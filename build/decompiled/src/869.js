// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = arg1;
        var4 = _closure1_slot0;
        var0 = _closure1_slot1;
        var7 = 1;
        var1 = var0[var7];
        var0 = undefined;
        var6 = var4.bind(var0)(var1);
        var5 = var6.merge;
        var4 = var3[var2];
        var1 = arg2;
        var1 = var5.bind(var6)(var4, var1, var7);
        var3[var2] = var1;
        return var0;
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
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = function arg0, arg1() {
        _fun9198: for (var _fun9198_ip = 0;;) switch (_fun9198_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var4 = var0.fingerprint;
                var11 = var0.span;
                var8 = var0.breadcrumbs;
                var6 = var0.sdkProcessingMetadata;
                var15 = var0.extra;
                var14 = var0.tags;
                var13 = var0.user;
                var12 = var0.contexts;
                var3 = var0.level;
                var0 = var0.transactionName;
                var1 = global;
                var7 = var1.Object;
                var5 = var7.keys;
                var5 = var5.bind(var7)(var15);
                var5 = var5.length;
                if (!var5) {
                    _fun9198_ip = 123;
                    continue _fun9198
                }
            case 91:
                var10 = var1.Object;
                var9 = var10.assign;
                var7 = var2.extra;
                var5 = {};
                var5 = var9.bind(var10)(var5, var15, var7);
                var2.extra = var5;
            case 123:
                var7 = var1.Object;
                var5 = var7.keys;
                var5 = var5.bind(var7)(var14);
                var5 = var5.length;
                if (!var5) {
                    _fun9198_ip = 179;
                    continue _fun9198
                }
            case 147:
                var10 = var1.Object;
                var9 = var10.assign;
                var7 = var2.tags;
                var5 = {};
                var5 = var9.bind(var10)(var5, var14, var7);
                var2.tags = var5;
            case 179:
                var7 = var1.Object;
                var5 = var7.keys;
                var5 = var5.bind(var7)(var13);
                var5 = var5.length;
                if (!var5) {
                    _fun9198_ip = 234;
                    continue _fun9198
                }
            case 203:
                var10 = var1.Object;
                var9 = var10.assign;
                var7 = var2.user;
                var5 = {};
                var5 = var9.bind(var10)(var5, var13, var7);
                var2.user = var5;
            case 234:
                var7 = var1.Object;
                var5 = var7.keys;
                var5 = var5.bind(var7)(var12);
                var5 = var5.length;
                if (!var5) {
                    _fun9198_ip = 290;
                    continue _fun9198
                }
            case 258:
                var10 = var1.Object;
                var9 = var10.assign;
                var7 = var2.contexts;
                var5 = {};
                var5 = var9.bind(var10)(var5, var12, var7);
                var2.contexts = var5;
            case 290:
                if (!var3) {
                    _fun9198_ip = 299;
                    continue _fun9198
                }
            case 293:
                var2.level = var3;
            case 299:
                var3 = var0;
                if (!var3) {
                    _fun9198_ip = 318;
                    continue _fun9198
                }
            case 305:
                var7 = var2.type;
                var5 = 'transaction';
                var3 = var5 !== var7;
            case 318:
                if (!var3) {
                    _fun9198_ip = 327;
                    continue _fun9198
                }
            case 321:
                var2.transaction = var0;
            case 327:
                if (!var11) {
                    _fun9198_ip = 549;
                    continue _fun9198
                }
            case 333:
                var13 = var1.Object;
                var12 = var13.assign;
                var10 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 2;
                var5 = var9[var0];
                var3 = undefined;
                var14 = var7.bind(var3)(var5);
                var5 = var14.spanToTraceContext;
                var5 = var5.bind(var14)(var11);
                var10.trace = var5;
                var5 = var2.contexts;
                var5 = var12.bind(var13)(var10, var5);
                var2.contexts = var5;
                var13 = var1.Object;
                var12 = var13.assign;
                var10 = {};
                var5 = 3;
                var5 = var9[var5];
                var14 = var7.bind(var3)(var5);
                var5 = var14.getDynamicSamplingContextFromSpan;
                var5 = var5.bind(var14)(var11);
                var10.dynamicSamplingContext = var5;
                var5 = var2.sdkProcessingMetadata;
                var5 = var12.bind(var13)(var10, var5);
                var2.sdkProcessingMetadata = var5;
                var5 = var9[var0];
                var10 = var7.bind(var3)(var5);
                var5 = var10.getRootSpan;
                var5 = var5.bind(var10)(var11);
                var0 = var9[var0];
                var3 = var7.bind(var3)(var0);
                var0 = var3.spanToJSON;
                var0 = var0.bind(var3)(var5);
                var0 = var0.description;
                var3 = var0;
                if (!var3) {
                    _fun9198_ip = 524;
                    continue _fun9198
                }
            case 515:
                var5 = var2.transaction;
                var3 = !var5;
            case 524:
                if (!var3) {
                    _fun9198_ip = 540;
                    continue _fun9198
                }
            case 527:
                var7 = var2.type;
                var5 = 'transaction';
                var3 = var5 === var7;
            case 540:
                if (!var3) {
                    _fun9198_ip = 549;
                    continue _fun9198
                }
            case 543:
                var2.transaction = var0;
            case 549:
                var0 = var2.fingerprint;
                if (var0) {
                    _fun9198_ip = 564;
                    continue _fun9198
                }
            case 558:
                var0 = new Array(0);
                _fun9198_ip = 611;
                continue _fun9198;
            case 564:
                var7 = var1.Array;
                var5 = var7.isArray;
                var3 = var2.fingerprint;
                var3 = var5.bind(var7)(var3);
                var5 = var2.fingerprint;
                if (var3) {
                    _fun9198_ip = 605;
                    continue _fun9198
                }
            case 595:
                var3 = new Array(1);
                var3[0] = var5;
                _fun9198_ip = 608;
                continue _fun9198;
            case 605:
                var3 = var5;
            case 608:
                var0 = var3;
            case 611:
                var2.fingerprint = var0;
                if (!var4) {
                    _fun9198_ip = 642;
                    continue _fun9198
                }
            case 620:
                var3 = var2.fingerprint;
                var0 = var3.concat;
                var0 = var0.bind(var3)(var4);
                var2.fingerprint = var0;
            case 642:
                var0 = var2.fingerprint;
                var0 = var0.length;
                if (var0) {
                    _fun9198_ip = 661;
                    continue _fun9198
                }
            case 656:
                var0 = delete var2.fingerprint;
            case 661:
                var7 = new Array(0);
                var5 = var7.concat;
                var9 = _closure1_slot2;
                var4 = var2.breadcrumbs;
                if (var4) {
                    _fun9198_ip = 690;
                    continue _fun9198
                }
            case 686:
                var4 = new Array(0);
            case 690:
                var0 = undefined;
                var4 = var9.bind(var0)(var4);
                var3 = _closure1_slot2;
                var3 = var3.bind(var0)(var8);
                var4 = var5.bind(var7)(var4, var3);
                var5 = var4.length;
                var3 = undefined;
                if (!var5) {
                    _fun9198_ip = 725;
                    continue _fun9198
                }
            case 722:
                var3 = var4;
            case 725:
                var2.breadcrumbs = var3;
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
    var1 = function arg0, arg1() {
        _fun9199: for (var _fun9199_ip = 0;;) switch (_fun9199_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var17 = var0.extra;
                var16 = var0.tags;
                var14 = var0.user;
                var13 = var0.contexts;
                var5 = var0.level;
                var15 = var0.sdkProcessingMetadata;
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
                var8 = var12.bind(var0)(var2, var8, var14);
                var8 = 'contexts';
                var8 = var12.bind(var0)(var2, var8, var13);
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var8 = 1;
                var8 = var13[var8];
                var14 = var12.bind(var0)(var8);
                var13 = var14.merge;
                var12 = var2.sdkProcessingMetadata;
                var8 = 2;
                var8 = var13.bind(var14)(var12, var15, var8);
                var2.sdkProcessingMetadata = var8;
                if (!var5) {
                    _fun9199_ip = 193;
                    continue _fun9199
                }
            case 187:
                var2.level = var5;
            case 193:
                if (!var4) {
                    _fun9199_ip = 202;
                    continue _fun9199
                }
            case 196:
                var2.transactionName = var4;
            case 202:
                if (!var3) {
                    _fun9199_ip = 211;
                    continue _fun9199
                }
            case 205:
                var2.span = var3;
            case 211:
                var3 = var11.length;
                if (!var3) {
                    _fun9199_ip = 260;
                    continue _fun9199
                }
            case 219:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.breadcrumbs;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var11);
                var3 = var5.bind(var8)(var4, var3);
                var2.breadcrumbs = var3;
            case 260:
                var3 = var10.length;
                if (!var3) {
                    _fun9199_ip = 309;
                    continue _fun9199
                }
            case 268:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.fingerprint;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var10);
                var3 = var5.bind(var8)(var4, var3);
                var2.fingerprint = var3;
            case 309:
                var3 = var9.length;
                if (!var3) {
                    _fun9199_ip = 358;
                    continue _fun9199
                }
            case 317:
                var8 = new Array(0);
                var5 = var8.concat;
                var3 = _closure1_slot2;
                var4 = var2.eventProcessors;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var9);
                var3 = var5.bind(var8)(var4, var3);
                var2.eventProcessors = var3;
            case 358:
                var3 = var7.length;
                if (!var3) {
                    _fun9199_ip = 407;
                    continue _fun9199
                }
            case 366:
                var5 = new Array(0);
                var4 = var5.concat;
                var1 = _closure1_slot2;
                var3 = var2.attachments;
                var3 = var1.bind(var0)(var3);
                var1 = var1.bind(var0)(var7);
                var1 = var4.bind(var5)(var3, var1);
                var2.attachments = var1;
            case 407:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 845, 819, 855]);