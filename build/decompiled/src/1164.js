// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function() {
        var0 = {};
        var1 = 'UserInteraction';
        var0.name = var1;
        return var0;
    };
    var1.userInteractionIntegration = var2;
    var0 = function arg0() {
        _fun12703: for (var _fun12703_ip = 0;;) switch (_fun12703_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var2 = var0[var6];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.getClient;
                var11 = var2.bind(var4)();
                if (!var11) {
                    _fun12703_ip = 1073;
                    continue _fun12703
                }
            case 43:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getCurrentReactNativeTracingIntegration;
                var15 = var2.bind(var4)();
                if (var15) {
                    _fun12703_ip = 149;
                    continue _fun12703
                }
            case 76:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var0)(var2);
                var5 = var2.debug;
                var4 = var5.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var8 = '[';
                var7 = 'UserInteraction';
                var2 = '] Tracing integration is not available. Can not start user interaction span.';
                var2 = var9.bind(var8)(var7, var2);
                var2 = var4.bind(var5)(var2);
                _fun12703_ip = 1073;
                continue _fun12703;
            case 149:
                var2 = var11.getOptions;
                var2 = var2.bind(var11)();
                var8 = var3.elementId;
                var10 = var3.op;
                var2 = var2.enableUserInteractionTracing;
                if (var2) {
                    _fun12703_ip = 252;
                    continue _fun12703
                }
            case 179:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var4 = var2.debug;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var7 = '[';
                var5 = 'UserInteraction';
                var2 = '] User Interaction Tracing is disabled.';
                var2 = var9.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                _fun12703_ip = 1073;
                continue _fun12703;
            case 252:
                if (var8) {
                    _fun12703_ip = 328;
                    continue _fun12703
                }
            case 255:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var4 = var2.debug;
                var3 = var4.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var7 = '[';
                var5 = 'UserInteraction';
                var2 = '] User Interaction Tracing can not create transaction with undefined elementId.';
                var2 = var9.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                _fun12703_ip = 1073;
                continue _fun12703;
            case 328:
                var2 = var15.state;
                var2 = var2.currentRoute;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var0)(var3);
                if (var2) {
                    _fun12703_ip = 415;
                    continue _fun12703
                }
            case 359:
                var5 = var3.debug;
                var4 = var5.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var9 = '[';
                var7 = 'UserInteraction';
                var2 = '] User Interaction Tracing can not create transaction without a current route.';
                var2 = var12.bind(var9)(var7, var2);
                var2 = var4.bind(var5)(var2);
                _fun12703_ip = 1073;
                continue _fun12703;
            case 415:
                var2 = var3.getActiveSpan;
                var5 = var2.bind(var3)();
                var2 = var5;
                if (!var2) {
                    _fun12703_ip = 465;
                    continue _fun12703
                }
            case 431:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isSentryInteractionSpan;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
            case 465:
                if (!var5) {
                    _fun12703_ip = 474;
                    continue _fun12703
                }
            case 468:
                if (var2) {
                    _fun12703_ip = 967;
                    continue _fun12703
                }
            case 474:
                var2 = var15.state;
                var7 = var2.currentRoute;
                var3 = global;
                var2 = var3.HermesInternal;
                var4 = var2.concat;
                var2 = '';
                var14 = '.';
                var13 = var4.bind(var2)(var7, var14, var8);
                if (!var5) {
                    _fun12703_ip = 705;
                    continue _fun12703
                }
            case 519:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.spanToJSON;
                var2 = var2.bind(var4)(var5);
                var2 = var2.description;
                if (!(var2 === var13)) {
                    _fun12703_ip = 705;
                    continue _fun12703
                }
            case 559:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.spanToJSON;
                var2 = var2.bind(var4)(var5);
                var2 = var2.op;
                if (!(var2 === var10)) {
                    _fun12703_ip = 705;
                    continue _fun12703
                }
            case 596:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = var2[var6];
                var4 = var8.bind(var0)(var4);
                var7 = var4.debug;
                var4 = var7.warn;
                var2 = var2[var6];
                var8 = var8.bind(var0)(var2);
                var2 = var8.spanToJSON;
                var2 = var2.bind(var8)(var5);
                var20 = var2.description;
                var2 = var3.HermesInternal;
                var17 = var2.concat;
                var25 = '[';
                var24 = 'UserInteraction';
                var23 = '] Did not create ';
                var21 = ' transaction because it the same transaction ';
                var19 = ' already exists on the scope.';
                var22 = var10;
                var2 = var25[var17](var24, var23, var22, var21, var20, var19, var18);
                var2 = var4.bind(var7)(var2);
                _fun12703_ip = 1073;
                continue _fun12703;
            case 705:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = var4[var6];
                var8 = var7.bind(var0)(var2);
                var2 = var8.getCurrentScope;
                var16 = var2.bind(var8)();
                var12 = {};
                var12.name = var13;
                var12.op = var10;
                var12.scope = var16;
                var2 = 2;
                var8 = var4[var2];
                var9 = var7.bind(var0)(var8);
                var8 = var9.clearActiveSpanFromScope;
                var8 = var8.bind(var9)(var16);
                var2 = var4[var2];
                var9 = var7.bind(var0)(var2);
                var8 = var9.startIdleSpan;
                var2 = {};
                var16 = var15.options;
                var16 = var16.idleTimeoutMs;
                var2.idleTimeout = var16;
                var15 = var15.options;
                var15 = var15.finalTimeoutMs;
                var2.finalTimeout = var15;
                var2 = var8.bind(var9)(var12, var2);
                var12 = var2.setAttribute;
                var8 = var4[var6];
                var8 = var7.bind(var0)(var8);
                var9 = var8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var8 = 3;
                var8 = var4[var8];
                var8 = var7.bind(var0)(var8);
                var8 = var8.SPAN_ORIGIN_MANUAL_INTERACTION;
                var8 = var12.bind(var2)(var9, var8);
                var8 = 4;
                var8 = var4[var8];
                var9 = var7.bind(var0)(var8);
                var8 = var9.onlySampleIfChildSpans;
                var8 = var8.bind(var9)(var11, var2);
                var4 = var4[var6];
                var4 = var7.bind(var0)(var4);
                var7 = var4.debug;
                var4 = var7.log;
                var3 = var3.HermesInternal;
                var12 = var3.concat;
                var25 = '[';
                var24 = 'UserInteraction';
                var23 = '] User Interaction Tracing Created ';
                var21 = ' transaction ';
                var22 = var10;
                var20 = var13;
                var19 = var14;
                var3 = var25[var12](var24, var23, var22, var21, var20, var19, var18);
                var3 = var4.bind(var7)(var3);
                return var2;
            case 967:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var6];
                var2 = var4.bind(var0)(var2);
                var3 = var2.debug;
                var2 = var3.warn;
                var1 = var1[var6];
                var4 = var4.bind(var0)(var1);
                var1 = var4.spanToJSON;
                var1 = var1.bind(var4)(var5);
                var20 = var1.description;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var25 = '[';
                var24 = 'UserInteraction';
                var23 = '] Did not create ';
                var21 = ' transaction because active transaction ';
                var19 = ' exists on the scope.';
                var22 = var10;
                var1 = var25[var8](var24, var23, var22, var21, var20, var19, var18);
                var1 = var2.bind(var3)(var1);
            case 1073:
                return var0;
        }
    };
    var1.startUserInteractionSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1165, 1159, 1157, 1160]);