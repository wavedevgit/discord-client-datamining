// modules/changelog/useChangelogRenderedAnalytics.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/changelog/useChangelogRenderedAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90529: for (var _fun90529_ip = 0;;) switch (_fun90529_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 5;
                var2 = var9[var0];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var8 = var2.bind(var0)(var4);
                var _closure2_slot1 = var8;
                var6 = _closure1_slot0;
                var10 = 6;
                var2 = var9[var10];
                var12 = var6.bind(var0)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var2 = var11.bind(var12)(var5, var2);
                var _closure2_slot2 = var2;
                var5 = var9[var10];
                var13 = var6.bind(var0)(var5);
                var12 = var13.useStateFromStores;
                var5 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var5;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var2;
                var5 = function() { // Environment: var1
                    _fun90531: for (var _fun90531_ip = 0;;) switch (_fun90531_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getChangelog;
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 != var4;
                            var1 = '';
                            if (!var4) {
                                _fun90531_ip = 37;
                                continue _fun90531
                            }
                        case 33:
                            var1 = _closure2_slot1;
                        case 37:
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var5 = var12.bind(var13)(var11, var5, var6);
                var _closure2_slot3 = var5;
                var6 = 7;
                var6 = var9[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.bind(var0)(var4);
                var _closure2_slot4 = var6;
                var11 = _closure1_slot3;
                var9 = var11.useRef;
                var7 = null;
                if (!var6) {
                    _fun90529_ip = 201;
                    continue _fun90529
                }
            case 184:
                var12 = global;
                var13 = var12.Date;
                var12 = var13.now;
                var7 = var12.bind(var13)();
            case 201:
                var7 = var9.bind(var11)(var7);
                var _closure2_slot5 = var7;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var11 = var9.bind(var0)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getUnreadCount;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var10.bind(var11)(var9, var4, var7);
                var _closure2_slot6 = var7;
                var4 = _closure1_slot3;
                var3 = var4.useRef;
                var3 = var3.bind(var4)(var7);
                var _closure2_slot7 = var3;
                var7 = var4.useEffect;
                var3 = function() { // Environment: var1
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot6;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var7.bind(var4)(var3);
                var9 = var4.useEffect;
                var7 = new Array(1);
                var7[0] = var6;
                var3 = function() { // Environment: var1
                    var1 = _closure2_slot5;
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var9.bind(var4)(var3, var7);
                var7 = var4.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var2;
                var3[2] = var6;
                var2 = function() { // Environment: var1
                    _fun90535: for (var _fun90535_ip = 0;;) switch (_fun90535_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun90535_ip = 20;
                                continue _fun90535
                            }
                        case 10:
                            var3 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            if (!var1) {
                                _fun90535_ip = 71;
                                continue _fun90535
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchChangelog;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var0 = true;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var4)(var2, var3);
                var7 = var4.useEffect;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var5;
                var2 = function() { // Environment: var1
                    _fun90536: for (var _fun90536_ip = 0;;) switch (_fun90536_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun90536_ip = 20;
                                continue _fun90536
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = null;
                            var0 = var1 != var2;
                        case 20:
                            if (!var0) {
                                _fun90536_ip = 134;
                                continue _fun90536
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot7;
                            var1 = var0.CHANGE_LOG_OPENED;
                            var0 = {};
                            var5 = _closure2_slot3;
                            var9 = var5.date;
                            var8 = var5.revision;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var7 = var5.concat;
                            var6 = '';
                            var5 = ':';
                            var5 = var7.bind(var6)(var9, var5, var8);
                            var0.change_log_id = var5;
                            var4 = _closure2_slot7;
                            var4 = var4.current;
                            var0.unread_count = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 134:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var4)(var2, var3);
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun90538: for (var _fun90538_ip = 0;;) switch (_fun90538_ip) {
                            case 0:
                                var1 = _closure2_slot4;
                                if (!var1) {
                                    _fun90538_ip = 20;
                                    continue _fun90538
                                }
                            case 10:
                                var3 = _closure2_slot3;
                                var2 = null;
                                var1 = var2 != var3;
                            case 20:
                                if (!var1) {
                                    _fun90538_ip = 36;
                                    continue _fun90538
                                }
                            case 23:
                                var3 = _closure3_slot0;
                                var2 = null;
                                var1 = var2 != var3;
                            case 36:
                                if (!var1) {
                                    _fun90538_ip = 222;
                                    continue _fun90538
                                }
                            case 42:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 9;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.track;
                                var1 = _closure1_slot7;
                                var2 = var1.CHANGE_LOG_CLOSED;
                                var1 = {};
                                var5 = global;
                                var8 = var5.Math;
                                var7 = var8.round;
                                var9 = var5.Date;
                                var6 = var9.now;
                                var9 = var6.bind(var9)();
                                var6 = _closure3_slot0;
                                var9 = var9 - var6;
                                var6 = 1000;
                                var6 = var9 / var6;
                                var6 = var7.bind(var8)(var6);
                                var1.seconds_open = var6;
                                var6 = _closure2_slot3;
                                var9 = var6.date;
                                var8 = var6.revision;
                                var5 = var5.HermesInternal;
                                var7 = var5.concat;
                                var6 = '';
                                var5 = ':';
                                var5 = var7.bind(var6)(var9, var5, var8);
                                var1.change_log_id = var5;
                                var5 = _closure2_slot7;
                                var5 = var5.current;
                                var1.unread_count = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = _closure2_slot5;
                                var0 = 0;
                                var1.current = var0;
                            case 222:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1676, 3908, 3907, 660, 11719, 566, 5858, 6740, 795, 2]);