// ../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = metroImportDefault;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var3 = function arg0() {
        _fun6183: for (var _fun6183_ip = 0;;) switch (_fun6183_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var3 = var0[var2];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun6183_ip = 52;
                    continue _fun6183
                }
            case 23:
                var1 = _closure1_slot4;
                var2 = var1[var2];
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var0 = var2 > var1;
            case 52:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var4 = 0;
    var7 = var6[var4];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var9 = var7.analyticsTrackingStoreMaker;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.AnalyticsActionHandlers;
    var4 = 1;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.ImpressionTypes;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ImpressionGroups;
    var10 = {};
    var _closure1_slot4 = var10;
    var10 = {};
    var _closure1_slot5 = var10;
    var10 = 5;
    var10 = var6[var10];
    var12 = var5.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = '../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.encodeProperties;
    var2.encodeProperties = var10;
    var2.analyticsTrackingStoreMaker = var9;
    var2.AnalyticsActionHandlers = var8;
    var2.ImpressionTypes = var7;
    var2.ImpressionGroups = var4;
    var4 = 7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.ImpressionNames;
    var2.ImpressionNames = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NetworkActionNames;
    var2.NetworkActionNames = var4;
    var4 = 8;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getSuperProperties;
    var2.getSuperProperties = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getSuperPropertiesBase64;
    var2.getSuperPropertiesBase64 = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.extendSuperProperties;
    var2.extendSuperProperties = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getOS;
    var2.getOS = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.getDevice;
    var2.getDevice = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.getCampaignParams;
    var2.getCampaignParams = var4;
    var2.isThrottled = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var2 = var1.analyticEventConfigs;
        var _closure2_slot0 = var2;
        var4 = var1.dispatcher;
        var3 = var1.TRACK_ACTION_NAME;
        var5 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var1 = var2.queueTrackingEventMaker;
        var1 = var1.bind(var2)(var4, var3);
        var _closure2_slot1 = var1;
        var0 = function arg0, arg1() {
            _fun6185: for (var _fun6185_ip = 0;;) switch (_fun6185_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = arguments[2];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun6185_ip = 17;
                        continue _fun6185
                    }
                case 15:
                    var3 = {};
                case 17:
                    var0 = _closure1_slot0;
                    var1 = var0.isServerRendering;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun6185_ip = 55;
                        continue _fun6185
                    }
                case 36:
                    var1 = _closure1_slot0;
                    var6 = var1.isServerRendering;
                    var1 = true;
                    if (!(var1 !== var6)) {
                        _fun6185_ip = 510;
                        continue _fun6185
                    }
                case 55:
                    var10 = var4;
                    if (!(var0 == var10)) {
                        _fun6185_ip = 64;
                        continue _fun6185
                    }
                case 62:
                    var10 = {};
                case 64:
                    var6 = _closure2_slot0;
                    var8 = var6[var5];
                    var11 = 'function';
                    var9 = typeof var8;
                    var6 = var8;
                    if (!(var11 === var9)) {
                        _fun6185_ip = 109;
                        continue _fun6185
                    }
                case 89:
                    var9 = var8.bind(var2)(var10);
                    var11 = var0 != var9;
                    var8 = null;
                    if (!var11) {
                        _fun6185_ip = 106;
                        continue _fun6185
                    }
                case 103:
                    var8 = var9;
                case 106:
                    var6 = var8;
                case 109:
                    if (!(var0 != var6)) {
                        _fun6185_ip = 439;
                        continue _fun6185
                    }
                case 116:
                    var0 = 'throttlePeriod';
                    var0 = var0 in var6;
                    if (var0) {
                        _fun6185_ip = 244;
                        continue _fun6185
                    }
                case 127:
                    var0 = 'throttlePercent';
                    var0 = var0 in var6;
                    if (var0) {
                        _fun6185_ip = 195;
                        continue _fun6185
                    }
                case 138:
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var0 = 4;
                    var0 = var9[var0];
                    var9 = var8.bind(var2)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var0 = 'Unsupported analytics event config: ';
                    var8 = var8.bind(var0)(var6);
                    var0 = false;
                    var0 = var9.bind(var2)(var0, var8);
                    _fun6185_ip = 439;
                    continue _fun6185;
                case 195:
                    var0 = global;
                    var9 = var0.Math;
                    var8 = var9.random;
                    var9 = var8.bind(var9)();
                    var8 = var6.throttlePercent;
                    if (!(var9 > var8)) {
                        _fun6185_ip = 439;
                        continue _fun6185
                    }
                case 226:
                    var8 = var0.Promise;
                    var0 = var8.resolve;
                    var0 = var0.bind(var8)();
                    return var0;
                case 244:
                    var9 = new Array(1);
                    var9[0] = var5;
                    var0 = var6.throttleKeys;
                    var15 = var0.bind(var6)(var10);
                    var14 = 1;
                    var16 = var9;
                    var0 = arraySpread(var16, var15, var14);
                    var8 = var9.join;
                    var0 = '_';
                    var8 = var8.bind(var9)(var0);
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)(var8);
                    if (var0) {
                        _fun6185_ip = 490;
                        continue _fun6185
                    }
                case 302:
                    var0 = var6.throttlePercent;
                    var9 = 'number';
                    var0 = typeof var0;
                    if (!(var9 === var0)) {
                        _fun6185_ip = 350;
                        continue _fun6185
                    }
                case 319:
                    var0 = global;
                    var11 = var0.Math;
                    var9 = var11.random;
                    var11 = var9.bind(var11)();
                    var9 = var6.throttlePercent;
                    if (!(!(var11 > var9))) {
                        _fun6185_ip = 472;
                        continue _fun6185
                    }
                case 350:
                    var9 = var6.deduplicate;
                    if (!var9) {
                        _fun6185_ip = 404;
                        continue _fun6185
                    }
                case 359:
                    var9 = _closure1_slot5;
                    var11 = var9[var8];
                    var12 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var9 = 3;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.bind(var2)(var11, var10);
                    if (var9) {
                        _fun6185_ip = 452;
                        continue _fun6185
                    }
                case 396:
                    var9 = _closure1_slot5;
                    var9[var8] = var10;
                case 404:
                    var7 = _closure1_slot4;
                    var9 = global;
                    var10 = var9.Date;
                    var9 = var10.now;
                    var9 = var9.bind(var10)();
                    var6 = var6.throttlePeriod;
                    var6 = var9 + var6;
                    var7[var8] = var6;
                case 439:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)(var5, var4, var3);
                    return var1;
                case 452:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
                case 472:
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
                case 490:
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
                case 510:
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        return var0;
    };
    var2.trackMaker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [482, 642, 643, 644, 44, 2, 647, 648, 649]);