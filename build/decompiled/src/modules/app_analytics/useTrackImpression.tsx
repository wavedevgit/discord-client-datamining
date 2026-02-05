// modules/app_analytics/useTrackImpression.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun46496: for (var _fun46496_ip = 0;;) switch (_fun46496_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun46496_ip = 14;
                    continue _fun46496
                }
            case 12:
                var3 = false;
            case 14:
                var5 = var4.name;
                var6 = var4.type;
                var10 = var4.properties;
                var7 = var4.type;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.ImpressionTypes;
                var2 = var2.MODAL;
                if (!(var7 === var2)) {
                    _fun46496_ip = 117;
                    continue _fun46496
                }
            case 74:
                var7 = var4.name;
                var2 = null;
                if (!(var2 == var7)) {
                    _fun46496_ip = 117;
                    continue _fun46496
                }
            case 85:
                var2 = _closure1_slot11;
                var8 = var2.bind(var0)();
                var7 = var8.some;
                var2 = function(arg0) { // Environment: var2
                    _fun46497: for (var _fun46497_ip = 0;;) switch (_fun46497_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0._stackContext;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun46497_ip = 30;
                                continue _fun46497
                            }
                        case 22:
                            var0 = var1.isSlide;
                        case 30:
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var2);
                if (var2) {
                    _fun46496_ip = 404;
                    continue _fun46496
                }
            case 117:
                var2 = _closure1_slot7;
                var2 = var2.bind(var0)(var4);
                var2 = null;
                var4 = var2 == var10;
                var17 = undefined;
                if (var4) {
                    _fun46496_ip = 142;
                    continue _fun46496
                }
            case 137:
                var17 = var10.guild_id;
            case 142:
                if (!(var2 == var17)) {
                    _fun46496_ip = 160;
                    continue _fun46496
                }
            case 146:
                var7 = _closure1_slot6;
                var4 = var7.getGuildId;
                var17 = var4.bind(var7)();
            case 160:
                var4 = var2 == var10;
                var15 = undefined;
                if (var4) {
                    _fun46496_ip = 174;
                    continue _fun46496
                }
            case 169:
                var15 = var10.channel_id;
            case 174:
                if (!(var2 == var15)) {
                    _fun46496_ip = 193;
                    continue _fun46496
                }
            case 178:
                var7 = _closure1_slot5;
                var4 = var7.getChannelId;
                var15 = var4.bind(var7)(var17);
            case 193:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 6;
                var4 = var13[var7];
                var9 = var12.bind(var0)(var4);
                var8 = var9.expandEventProperties;
                var4 = {};
                var4.impression_type = var6;
                var11 = _closure1_slot10;
                var11 = var11.bind(var0)();
                var4.location = var11;
                var11 = 8;
                var14 = var13[var11];
                var16 = var12.bind(var0)(var14);
                var14 = var16.collectGuildAnalyticsMetadata;
                var18 = var14.bind(var16)(var17);
                var19 = var4;
                var14 = copyDataProperties(var19, var18);
                var11 = var13[var11];
                var13 = var12.bind(var0)(var11);
                var12 = var13.collectChannelAnalyticsMetadata;
                var14 = _closure1_slot4;
                var11 = var14.getChannel;
                var11 = var11.bind(var14)(var15);
                var18 = var12.bind(var13)(var11);
                var19 = var4;
                var11 = copyDataProperties(var19, var18);
                var19 = var4;
                var18 = var10;
                var10 = copyDataProperties(var19, var18);
                var4 = var8.bind(var9)(var4);
                if (var3) {
                    _fun46496_ip = 394;
                    continue _fun46496
                }
            case 329:
                var3 = var2 != var5;
                if (!var3) {
                    _fun46496_ip = 340;
                    continue _fun46496
                }
            case 336:
                var3 = var2 != var6;
            case 340:
                if (!var3) {
                    _fun46496_ip = 382;
                    continue _fun46496
                }
            case 343:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var6 = var6.bind(var0)(var3);
                var3 = var6.debugLogEvent;
                var3 = var3.bind(var6)(var5, var4);
                var3 = _closure1_slot12;
                var3 = var3.bind(var0)(var5, var4);
            case 382:
                var3 = _closure1_slot9;
                var3 = var3.bind(var0)(var5, var4);
                _fun46496_ip = 404;
                continue _fun46496;
            case 394:
                var1 = _closure1_slot9;
                var1 = var1.bind(var0)(var2, var2);
            case 404:
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var10.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var10.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.setCurrentImpression;
    var _closure1_slot7 = var7;
    var7 = var4.cleanupImpression;
    var _closure1_slot8 = var7;
    var7 = var4.setDebugTrackedData;
    var _closure1_slot9 = var7;
    var7 = var4.getLocation;
    var _closure1_slot10 = var7;
    var4 = var4.getImpressionStack;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.trackMaker;
    var4 = {};
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.AnalyticEventConfigs;
    var4.analyticEventConfigs = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var4.dispatcher = var9;
    var9 = 'TRACK';
    var4.TRACK_ACTION_NAME = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/useTrackImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun46498: for (var _fun46498_ip = 0;;) switch (_fun46498_ip) {
            case 0:
                var2 = arguments[1];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun46498_ip = 32;
                    continue _fun46498
                }
            case 18:
                var2 = {
                    'disableTrack': false,
                    'trackOnInitialLoad': false
                };
            case 32:
                var _closure2_slot1 = var2;
                var2 = arguments[2];
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var0;
                var _closure2_slot5 = var0;
                var3 = _closure1_slot3;
                var4 = var3.useRef;
                var4 = var4.bind(var3)(var0);
                _closure2_slot3 = var4;
                var4 = var3.useRef;
                var4 = var4.bind(var3)(var0);
                _closure2_slot4 = var4;
                var4 = function() {
                    _fun46499: for (var _fun46499_ip = 0;;) switch (_fun46499_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var7 = 9;
                            var1 = var1[var7];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var1);
                            var3 = _closure2_slot3;
                            var5 = var3.current;
                            var3 = _closure2_slot0;
                            var3 = var6.bind(var4)(var5, var3);
                            var5 = !var3;
                            if (!var5) {
                                _fun46499_ip = 69;
                                continue _fun46499
                            }
                        case 55:
                            var6 = _closure2_slot3;
                            var3 = _closure2_slot0;
                            var6.current = var3;
                        case 69:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var7 = var6.bind(var4)(var3);
                            var3 = _closure2_slot4;
                            var6 = var3.current;
                            var3 = _closure2_slot2;
                            var3 = var7.bind(var4)(var6, var3);
                            var3 = !var3;
                            if (!var3) {
                                _fun46499_ip = 125;
                                continue _fun46499
                            }
                        case 111:
                            var7 = _closure2_slot4;
                            var6 = _closure2_slot2;
                            var7.current = var6;
                        case 125:
                            if (var5) {
                                _fun46499_ip = 133;
                                continue _fun46499
                            }
                        case 128:
                            if (var3) {
                                _fun46499_ip = 133;
                                continue _fun46499
                            }
                        case 131:
                            return var4;
                        case 133:
                            var3 = {};
                            var8 = _closure2_slot0;
                            var9 = var3;
                            var5 = copyDataProperties(var9, var8);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 10;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = 'impression_';
                            var6 = var6.bind(var4)(var5);
                            var5 = 'sequenceId';
                            var3[var5] = var6;
                            var _closure3_slot0 = var3;
                            var2 = _closure1_slot13;
                            var1 = _closure2_slot1;
                            var1 = var1.disableTrack;
                            var1 = var2.bind(var4)(var3, var1);
                            var0 = function() { // Environment: var0
                                _fun46500: for (var _fun46500_ip = 0;;) switch (_fun46500_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun46500_ip = 31;
                                            continue _fun46500
                                        }
                                    case 13:
                                        var2 = _closure1_slot8;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 31:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                _closure2_slot5 = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = function() { // Environment: var1
                    _fun46501: for (var _fun46501_ip = 0;;) switch (_fun46501_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.trackOnInitialLoad;
                            var1 = undefined;
                            if (var2) {
                                _fun46501_ip = 20;
                                continue _fun46501
                            }
                        case 18:
                            return var1;
                        case 20:
                            var0 = _closure2_slot5;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var2 = var4.bind(var0)(var2);
                var2 = var3.useEffect;
                var1 = function() { // Environment: var1
                    _fun46502: for (var _fun46502_ip = 0;;) switch (_fun46502_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.trackOnInitialLoad;
                            var0 = undefined;
                            if (var2) {
                                _fun46502_ip = 28;
                                continue _fun46502
                            }
                        case 18:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                            return var1;
                        case 28:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.default = var3;
    var2.trackImpression = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1670, 3213, 796, 481, 795, 806, 4302, 644, 4562, 4103, 2]);