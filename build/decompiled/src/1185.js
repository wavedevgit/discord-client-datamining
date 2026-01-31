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
    var0 = function(arg0) { // Original name: getDefaultIntegrations, environment: var0
        _fun12897: for (var _fun12897_ip = 0;;) switch (_fun12897_ip) {
            case 0:
                var8 = arg0;
                var0 = new Array(0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 0;
                var2 = var2[var7];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.notWeb;
                var3 = var2.bind(var3)();
                var9 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 1;
                var10 = var2[var5];
                var11 = var6.bind(var4)(var10);
                if (var3) {
                    _fun12897_ip = 196;
                    continue _fun12897
                }
            case 72:
                var3 = var11.browserApiErrorsIntegration;
                var3 = var3.bind(var11)();
                var3 = var9.bind(var0)(var3);
                var10 = var0.push;
                var3 = var2[var5];
                var12 = var6.bind(var4)(var3);
                var3 = var12.browserGlobalHandlersIntegration;
                var3 = var3.bind(var12)();
                var3 = var10.bind(var0)(var3);
                var10 = var0.push;
                var3 = var2[var5];
                var12 = var6.bind(var4)(var3);
                var3 = var12.browserLinkedErrorsIntegration;
                var3 = var3.bind(var12)();
                var3 = var10.bind(var0)(var3);
                var3 = var8.enableAutoSessionTracking;
                if (!var3) {
                    _fun12897_ip = 254;
                    continue _fun12897
                }
            case 154:
                var10 = var0.push;
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var3 = 2;
                var3 = var13[var3];
                var12 = var12.bind(var4)(var3);
                var3 = var12.browserSessionIntegration;
                var3 = var3.bind(var12)();
                var3 = var10.bind(var0)(var3);
                _fun12897_ip = 254;
                continue _fun12897;
            case 196:
                var10 = var11.reactNativeErrorHandlersIntegration;
                var3 = {};
                var12 = var8.patchGlobalPromise;
                var3.patchGlobalPromise = var12;
                var3 = var10.bind(var11)(var3);
                var3 = var9.bind(var0)(var3);
                var3 = var0.push;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.nativeLinkedErrorsIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 254:
                var9 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.inboundFiltersIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.functionToStringIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.breadcrumbsIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.dedupeIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.httpContextIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.nativeReleaseIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.eventOriginIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.sdkInfoIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var9 = var0.push;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.reactNativeInfoIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var3 = var0.push;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.createReactNativeRewriteFrames;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
                var2 = var8.enableNative;
                if (!var2) {
                    _fun12897_ip = 871;
                    continue _fun12897
                }
            case 564:
                var9 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var5];
                var10 = var6.bind(var4)(var3);
                var3 = var10.deviceContextIntegration;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var0)(var3);
                var3 = var0.push;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.modulesLoaderIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
                var2 = var8.enableLogs;
                if (!var2) {
                    _fun12897_ip = 653;
                    continue _fun12897
                }
            case 639:
                var6 = var8.logsOrigin;
                var3 = 'native';
                var2 = var3 !== var6;
            case 653:
                if (!var2) {
                    _fun12897_ip = 725;
                    continue _fun12897
                }
            case 656:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = var9[var5];
                var10 = var6.bind(var4)(var2);
                var2 = var10.logEnricherIntegration;
                var2 = var2.bind(var10)();
                var2 = var3.bind(var0)(var2);
                var3 = var0.push;
                var2 = 2;
                var2 = var9[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.consoleLoggingIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 725:
                var2 = var8.attachScreenshot;
                if (!var2) {
                    _fun12897_ip = 771;
                    continue _fun12897
                }
            case 734:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.screenshotIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 771:
                var2 = var8.attachViewHierarchy;
                if (!var2) {
                    _fun12897_ip = 817;
                    continue _fun12897
                }
            case 780:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.viewHierarchyIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 817:
                var2 = var8.profilesSampleRate;
                var3 = 'number';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun12897_ip = 871;
                    continue _fun12897
                }
            case 834:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.hermesProfilingIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 871:
                var2 = var8.tracesSampleRate;
                var10 = 'number';
                var2 = typeof var2;
                var2 = var10 === var2;
                if (var2) {
                    _fun12897_ip = 908;
                    continue _fun12897
                }
            case 891:
                var3 = var8.tracesSampler;
                var6 = 'function';
                var3 = typeof var3;
                var2 = var6 === var3;
            case 908:
                var3 = var2;
                if (!var2) {
                    _fun12897_ip = 920;
                    continue _fun12897
                }
            case 914:
                var3 = var8.enableAppStartTracking;
            case 920:
                if (!var3) {
                    _fun12897_ip = 929;
                    continue _fun12897
                }
            case 923:
                var3 = var8.enableNative;
            case 929:
                if (!var3) {
                    _fun12897_ip = 969;
                    continue _fun12897
                }
            case 932:
                var6 = var0.push;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var9 = var9.bind(var4)(var3);
                var3 = var9.appStartIntegration;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
            case 969:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var9 = var6.bind(var4)(var3);
                var6 = var9.createNativeFramesIntegrations;
                var3 = var2;
                if (!var2) {
                    _fun12897_ip = 1004;
                    continue _fun12897
                }
            case 998:
                var3 = var8.enableNativeFramesTracking;
            case 1004:
                if (!var3) {
                    _fun12897_ip = 1013;
                    continue _fun12897
                }
            case 1007:
                var3 = var8.enableNative;
            case 1013:
                var6 = var6.bind(var9)(var3);
                if (!var6) {
                    _fun12897_ip = 1031;
                    continue _fun12897
                }
            case 1021:
                var3 = var0.push;
                var3 = var3.bind(var0)(var6);
            case 1031:
                var3 = var2;
                if (!var2) {
                    _fun12897_ip = 1043;
                    continue _fun12897
                }
            case 1037:
                var3 = var8.enableStallTracking;
            case 1043:
                if (!var3) {
                    _fun12897_ip = 1083;
                    continue _fun12897
                }
            case 1046:
                var6 = var0.push;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var9 = var9.bind(var4)(var3);
                var3 = var9.stallTrackingIntegration;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
            case 1083:
                var3 = var2;
                if (!var2) {
                    _fun12897_ip = 1095;
                    continue _fun12897
                }
            case 1089:
                var3 = var8.enableUserInteractionTracing;
            case 1095:
                if (!var3) {
                    _fun12897_ip = 1135;
                    continue _fun12897
                }
            case 1098:
                var6 = var0.push;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var9 = var9.bind(var4)(var3);
                var3 = var9.userInteractionIntegration;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
            case 1135:
                var3 = var2;
                if (!var3) {
                    _fun12897_ip = 1147;
                    continue _fun12897
                }
            case 1141:
                var3 = var8.enableAutoPerformanceTracing;
            case 1147:
                if (!var3) {
                    _fun12897_ip = 1219;
                    continue _fun12897
                }
            case 1150:
                var6 = var0.push;
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = var11[var5];
                var12 = var9.bind(var4)(var3);
                var3 = var12.appRegistryIntegration;
                var3 = var3.bind(var12)();
                var3 = var6.bind(var0)(var3);
                var6 = var0.push;
                var3 = 3;
                var3 = var11[var3];
                var9 = var9.bind(var4)(var3);
                var3 = var9.reactNativeTracingIntegration;
                var3 = var3.bind(var9)();
                var3 = var6.bind(var0)(var3);
            case 1219:
                if (!var2) {
                    _fun12897_ip = 1259;
                    continue _fun12897
                }
            case 1222:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.timeToDisplayIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 1259:
                var2 = var8.enableCaptureFailedRequests;
                if (!var2) {
                    _fun12897_ip = 1305;
                    continue _fun12897
                }
            case 1268:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.httpClientIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 1305:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.expoContextIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
                var2 = var8.spotlight;
                if (!var2) {
                    _fun12897_ip = 1421;
                    continue _fun12897
                }
            case 1351:
                var2 = var8.spotlight;
                var3 = 'string';
                var2 = typeof var2;
                var11 = undefined;
                if (!(var3 === var2)) {
                    _fun12897_ip = 1376;
                    continue _fun12897
                }
            case 1370:
                var11 = var8.spotlight;
            case 1376:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var9 = var6.bind(var4)(var2);
                var6 = var9.spotlightIntegration;
                var2 = {};
                var2.sidecarUrl = var11;
                var2 = var6.bind(var9)(var2);
                var2 = var3.bind(var0)(var2);
            case 1421:
                var2 = var8.replaysOnErrorSampleRate;
                var2 = typeof var2;
                var2 = var10 === var2;
                if (var2) {
                    _fun12897_ip = 1450;
                    continue _fun12897
                }
            case 1437:
                var3 = var8.replaysSessionSampleRate;
                var3 = typeof var3;
                var2 = var10 === var3;
            case 1450:
                var3 = var8._experiments;
                if (!var3) {
                    _fun12897_ip = 1478;
                    continue _fun12897
                }
            case 1459:
                var6 = var8._experiments;
                var6 = var6.replaysOnErrorSampleRate;
                var6 = typeof var6;
                var3 = var10 === var6;
            case 1478:
                if (var3) {
                    _fun12897_ip = 1512;
                    continue _fun12897
                }
            case 1481:
                var6 = var8._experiments;
                if (!var6) {
                    _fun12897_ip = 1509;
                    continue _fun12897
                }
            case 1490:
                var9 = var8._experiments;
                var9 = var9.replaysSessionSampleRate;
                var9 = typeof var9;
                var6 = var10 === var9;
            case 1509:
                var3 = var6;
            case 1512:
                var6 = !var2;
                if (var2) {
                    _fun12897_ip = 1521;
                    continue _fun12897
                }
            case 1518:
                var6 = var3;
            case 1521:
                if (!var6) {
                    _fun12897_ip = 1586;
                    continue _fun12897
                }
            case 1524:
                var9 = var8._experiments;
                var10 = null;
                var6 = undefined;
                if (!(var10 !== var9)) {
                    _fun12897_ip = 1550;
                    continue _fun12897
                }
            case 1538:
                var6 = undefined;
                if (!(var4 !== var9)) {
                    _fun12897_ip = 1550;
                    continue _fun12897
                }
            case 1544:
                var6 = var9.replaysOnErrorSampleRate;
            case 1550:
                var8.replaysOnErrorSampleRate = var6;
                var9 = var8._experiments;
                var6 = undefined;
                if (!(var10 !== var9)) {
                    _fun12897_ip = 1580;
                    continue _fun12897
                }
            case 1568:
                var6 = undefined;
                if (!(var6 !== var9)) {
                    _fun12897_ip = 1580;
                    continue _fun12897
                }
            case 1574:
                var6 = var9.replaysSessionSampleRate;
            case 1580:
                var8.replaysSessionSampleRate = var6;
            case 1586:
                if (var2) {
                    _fun12897_ip = 1592;
                    continue _fun12897
                }
            case 1589:
                var2 = var3;
            case 1592:
                if (!var2) {
                    _fun12897_ip = 1622;
                    continue _fun12897
                }
            case 1595:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var6 = var6.bind(var4)(var3);
                var3 = var6.notWeb;
                var2 = var3.bind(var6)();
            case 1622:
                if (!var2) {
                    _fun12897_ip = 1662;
                    continue _fun12897
                }
            case 1625:
                var3 = var0.push;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.mobileReplayIntegration;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var0)(var2);
            case 1662:
                var2 = var0.push;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.primitiveTagIntegration;
                var1 = var1.bind(var3)();
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var1.getDefaultIntegrations = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 811, 1021, 1186]);