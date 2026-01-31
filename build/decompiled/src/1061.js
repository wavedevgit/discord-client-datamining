// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function(arg0) { // Original name: _onElementTiming, environment: var1
        _fun10893: for (var _fun10893_ip = 0;;) switch (_fun10893_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.entries;
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 3;
                var4 = var0[var5];
                var0 = undefined;
                var6 = var6.bind(var0)(var4);
                var4 = var6.getActiveSpan;
                var8 = var4.bind(var6)();
                var6 = undefined;
                if (!var8) {
                    _fun10893_ip = 79;
                    continue _fun10893
                }
            case 51:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var7 = var7.bind(var0)(var4);
                var4 = var7.getRootSpan;
                var6 = var4.bind(var7)(var8);
            case 79:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var4.bind(var0)(var2);
                if (var6) {
                    _fun10893_ip = 127;
                    continue _fun10893
                }
            case 99:
                var2 = var5.getCurrentScope;
                var4 = var2.bind(var5)();
                var2 = var4.getScopeData;
                var2 = var2.bind(var4)();
                var2 = var2.transactionName;
                _fun10893_ip = 143;
                continue _fun10893;
            case 127:
                var4 = var5.spanToJSON;
                var4 = var4.bind(var5)(var6);
                var2 = var4.description;
            case 143:
                var _closure2_slot0 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun10894: for (var _fun10894_ip = 0;;) switch (_fun10894_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = var6.identifier;
                            if (!var1) {
                                _fun10894_ip = 778;
                                continue _fun10894
                            }
                        case 17:
                            var9 = var6.name;
                            var12 = var6.renderTime;
                            var11 = var6.loadTime;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            if (var11) {
                                _fun10894_ip = 143;
                                continue _fun10894
                            }
                        case 48:
                            if (var12) {
                                _fun10894_ip = 95;
                                continue _fun10894
                            }
                        case 51:
                            var2 = 3;
                            var4 = var3[var2];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var2 = var4.timestampInSeconds;
                            var2 = var2.bind(var4)();
                            var4 = new Array(2);
                            var4[0] = var2;
                            var2 = 'entry-emission';
                            var4[1] = var2;
                            _fun10894_ip = 141;
                            continue _fun10894;
                        case 95:
                            var2 = 2;
                            var7 = var3[var2];
                            var2 = undefined;
                            var7 = var5.bind(var2)(var7);
                            var2 = var7.msToSec;
                            var7 = var2.bind(var7)(var12);
                            var2 = new Array(2);
                            var2[0] = var7;
                            var7 = 'render-time';
                            var2[1] = var7;
                            var4 = var2;
                        case 141:
                            _fun10894_ip = 189;
                            continue _fun10894;
                        case 143:
                            var2 = 2;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.msToSec;
                            var3 = var2.bind(var3)(var11);
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = 'load-time';
                            var2[1] = var3;
                            var4 = var2;
                        case 189:
                            var2 = _closure1_slot3;
                            var3 = undefined;
                            var8 = 2;
                            var5 = var2.bind(var3)(var4, var8);
                            var15 = 0;
                            var4 = var5[var15];
                            var _closure3_slot0 = var4;
                            var2 = 1;
                            var13 = var5[var2];
                            var5 = 'image-paint';
                            var2 = 0;
                            if (!(var5 === var9)) {
                                _fun10894_ip = 310;
                                continue _fun10894
                            }
                        case 233:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var8];
                            var8 = var7.bind(var3)(var5);
                            var7 = var8.msToSec;
                            var5 = global;
                            var14 = var5.Math;
                            var10 = var14.max;
                            var5 = null;
                            var17 = var5 != var12;
                            var16 = 0;
                            if (!var17) {
                                _fun10894_ip = 283;
                                continue _fun10894
                            }
                        case 280:
                            var16 = var12;
                        case 283:
                            var17 = var5 != var11;
                            var5 = 0;
                            if (!var17) {
                                _fun10894_ip = 295;
                                continue _fun10894
                            }
                        case 292:
                            var5 = var11;
                        case 295:
                            var5 = var16 - var5;
                            var5 = var10.bind(var14)(var15, var5);
                            var2 = var7.bind(var8)(var5);
                        case 310:
                            var _closure3_slot1 = var2;
                            var8 = _closure1_slot2;
                            var10 = {};
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var7 = 3;
                            var14 = var2[var7];
                            var14 = var5.bind(var3)(var14);
                            var15 = var14.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var14 = 'auto.ui.browser.elementtiming';
                            var16 = var8.bind(var3)(var10, var15, var14);
                            var14 = var2[var7];
                            var14 = var5.bind(var3)(var14);
                            var15 = var14.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var14 = 'ui.elementtiming';
                            var14 = var8.bind(var3)(var16, var15, var14);
                            var2 = var2[var7];
                            var2 = var5.bind(var3)(var2);
                            var5 = var2.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var2 = 'component';
                            var5 = var8.bind(var3)(var14, var5, var2);
                            var2 = 'sentry.span_start_time_source';
                            var13 = var8.bind(var3)(var5, var2, var13);
                            var5 = _closure2_slot0;
                            var2 = 'sentry.transaction_name';
                            var13 = var8.bind(var3)(var13, var2, var5);
                            var5 = var6.id;
                            var2 = 'element.id';
                            var13 = var8.bind(var3)(var13, var2, var5);
                            var14 = var6.element;
                            var2 = null;
                            var15 = var2 == var14;
                            var5 = undefined;
                            if (var15) {
                                _fun10894_ip = 506;
                                continue _fun10894
                            }
                        case 481:
                            var14 = var14.tagName;
                            var2 = var2 == var14;
                            var5 = undefined;
                            if (var2) {
                                _fun10894_ip = 506;
                                continue _fun10894
                            }
                        case 496:
                            var2 = var14.toLowerCase;
                            var5 = var2.bind(var14)();
                        case 506:
                            if (var5) {
                                _fun10894_ip = 513;
                                continue _fun10894
                            }
                        case 509:
                            var5 = 'unknown';
                        case 513:
                            var2 = 'element.type';
                            var13 = var8.bind(var3)(var13, var2, var5);
                            var2 = var6.naturalWidth;
                            var5 = undefined;
                            if (!var2) {
                                _fun10894_ip = 588;
                                continue _fun10894
                            }
                        case 537:
                            var2 = var6.naturalHeight;
                            var5 = undefined;
                            if (!var2) {
                                _fun10894_ip = 588;
                                continue _fun10894
                            }
                        case 548:
                            var17 = var6.naturalWidth;
                            var16 = var6.naturalHeight;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var15 = var2.concat;
                            var14 = '';
                            var2 = 'x';
                            var5 = var15.bind(var14)(var17, var2, var16);
                        case 588:
                            var2 = 'element.size';
                            var5 = var8.bind(var3)(var13, var2, var5);
                            var2 = 'element.render_time';
                            var5 = var8.bind(var3)(var5, var2, var12);
                            var2 = 'element.load_time';
                            var2 = var8.bind(var3)(var5, var2, var11);
                            var8 = _closure1_slot2;
                            var5 = var6.url;
                            if (var5) {
                                _fun10894_ip = 641;
                                continue _fun10894
                            }
                        case 639:
                            var5 = undefined;
                        case 641:
                            var2 = 'element.url';
                            var10 = var8.bind(var3)(var10, var2, var5);
                            var5 = var6.identifier;
                            var2 = 'element.identifier';
                            var5 = var8.bind(var3)(var10, var2, var5);
                            var2 = 'element.paint_type';
                            var5 = var8.bind(var3)(var5, var2, var9);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var7];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.startSpan;
                            var1 = {};
                            var9 = var6.identifier;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var8 = var6.concat;
                            var7 = 'element[';
                            var6 = ']';
                            var6 = var8.bind(var7)(var9, var6);
                            var1.name = var6;
                            var1.attributes = var5;
                            var1.startTime = var4;
                            var4 = true;
                            var1.onlyIfParent = var4;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.end;
                                var3 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var3 + var0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 778:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var2._onElementTiming = var3;
    var1 = function() { // Original name: startTrackingElementTiming, environment: var1
        _fun10896: for (var _fun10896_ip = 0;;) switch (_fun10896_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.getBrowserPerformanceAPI;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun10896_ip = 71;
                    continue _fun10896
                }
            case 38:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.browserPerformanceTimeOrigin;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun10896_ip = 80;
                    continue _fun10896
                }
            case 71:
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                _fun10896_ip = 120;
                continue _fun10896;
            case 80:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.addPerformanceInstrumentationHandler;
                var2 = _closure1_slot4;
                var1 = 'element';
                var0 = var3.bind(var4)(var1, var2);
            case 120:
                return var0;
        }
    };
    var2.startTrackingElementTiming = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 57, 1057, 817, 1031]);