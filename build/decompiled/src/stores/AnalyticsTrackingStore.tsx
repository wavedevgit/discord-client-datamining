// stores/AnalyticsTrackingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.Endpoints;
    var1 = 2;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.analyticsTrackingStoreMaker;
    var1 = {};
    var10 = 3;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var1.dispatcher = var10;
    var10 = {};
    var11 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.AnalyticsActionHandlers;
        var1 = var2.handleConnectionOpen;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10.CONNECTION_OPEN = var11;
    var11 = function(arg0) { // Original name: OVERLAY_INITIALIZE, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.AnalyticsActionHandlers;
        var1 = var2.handleConnectionOpen;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10.OVERLAY_INITIALIZE = var11;
    var11 = function(arg0) { // Original name: CURRENT_USER_UPDATE, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.AnalyticsActionHandlers;
        var1 = var2.handleConnectionOpen;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10.CURRENT_USER_UPDATE = var11;
    var11 = function() { // Original name: CONNECTION_CLOSED, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.AnalyticsActionHandlers;
        var0 = var1.handleConnectionClosed;
        var0 = var0.bind(var1)();
        return var0;
    };
    var10.CONNECTION_CLOSED = var11;
    var11 = function() { // Original name: FINGERPRINT, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.AnalyticsActionHandlers;
        var0 = var1.handleFingerprint;
        var0 = var0.bind(var1)();
        return var0;
    };
    var10.FINGERPRINT = var11;
    var11 = function(arg0) { // Original name: TRACK, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.AnalyticsActionHandlers;
        var1 = var2.handleTrack;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10.TRACK = var11;
    var1.actionHandler = var10;
    var9 = var9.TRACK;
    var1.TRACKING_URL = var9;
    var9 = new Array(1);
    var9[0] = var8;
    var1.waitFor = var9;
    var8 = var8.getFingerprint;
    var1.getFingerprint = var8;
    var8 = function() { // Original name: getSessionId, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getSession;
        var2 = var0.bind(var1)();
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun39577: for (var _fun39577_ip = 0;;) switch (_fun39577_ip) {
                case 0:
                    var2 = arg0;
                    var0 = {};
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun39577_ip = 22;
                        continue _fun39577
                    }
                case 16:
                    var1 = var2.uuid;
                case 22:
                    var0.sessionId = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getSessionId = var8;
    var7 = function() { // Original name: getLaunchSignature, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.launchSignature;
        return var0;
    };
    var1.getLaunchSignature = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.requestSafeIdleCallback;
    var1.scheduleWhenIdle = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/AnalyticsTrackingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 660, 481, 806, 4271, 795, 794, 2]);