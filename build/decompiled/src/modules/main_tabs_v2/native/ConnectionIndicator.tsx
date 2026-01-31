// modules/main_tabs_v2/native/ConnectionIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun101290: for (var _fun101290_ip = 0;;) switch (_fun101290_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.style;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.useToken;
                var3 = _closure1_slot1;
                var11 = 8;
                var0 = var7[var11];
                var0 = var3.bind(var5)(var0);
                var0 = var0.colors;
                var0 = var0.INTERACTIVE_ICON_DEFAULT;
                var13 = var2.bind(var4)(var0);
                var0 = 9;
                var0 = var7[var0];
                var4 = var1.bind(var5)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var1 = _closure1_slot6;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var4;
                var0 = function() {
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var0 = function() { // Environment: var1
                        _fun101293: for (var _fun101293_ip = 0;;) switch (_fun101293_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var0 = var2.getState;
                                var2 = var0.bind(var2)();
                                var0 = _closure1_slot10;
                                var0 = var0.ACTIVE;
                                if (!(var2 === var0)) {
                                    _fun101293_ip = 85;
                                    continue _fun101293
                                }
                            case 31:
                                var2 = _closure1_slot8;
                                var0 = var2.getLastActiveTime;
                                var3 = var0.bind(var2)();
                                var0 = null;
                                var0 = var0 == var3;
                                if (var0) {
                                    _fun101293_ip = 83;
                                    continue _fun101293
                                }
                            case 54:
                                var2 = global;
                                var4 = var2.Date;
                                var2 = var4.now;
                                var2 = var2.bind(var4)();
                                var2 = var2 - var3;
                                var1 = _closure1_slot12;
                                var0 = var2 < var1;
                            case 83:
                                return var0;
                            case 85:
                                var0 = true;
                                return var0;
                        }
                    };
                    var5 = var3.bind(var4)(var0);
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var0 = 2;
                    var4 = var4.bind(var3)(var5, var0);
                    var0 = 0;
                    var0 = var4[var0];
                    var3 = 1;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = function() { // Environment: var1
                        var2 = function() {
                            _fun101295: for (var _fun101295_ip = 0;;) switch (_fun101295_ip) {
                                case 0:
                                    var2 = _closure1_slot8;
                                    var1 = var2.getState;
                                    var2 = var1.bind(var2)();
                                    var1 = _closure1_slot10;
                                    var1 = var1.ACTIVE;
                                    if (!(var2 !== var1)) {
                                        _fun101295_ip = 52;
                                        continue _fun101295
                                    }
                                case 31:
                                    var3 = _closure3_slot0;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var2)(var1);
                                    _fun101295_ip = 190;
                                    continue _fun101295;
                                case 52:
                                    var2 = _closure1_slot8;
                                    var1 = var2.getLastActiveTime;
                                    var2 = var1.bind(var2)();
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun101295_ip = 90;
                                        continue _fun101295
                                    }
                                case 72:
                                    var4 = _closure3_slot0;
                                    var3 = undefined;
                                    var1 = true;
                                    var1 = var4.bind(var3)(var1);
                                    _fun101295_ip = 190;
                                    continue _fun101295;
                                case 90:
                                    var3 = global;
                                    var4 = var3.Date;
                                    var1 = var4.now;
                                    var1 = var1.bind(var4)();
                                    var2 = var1 - var2;
                                    var1 = _closure1_slot12;
                                    if (!(!(var2 >= var1))) {
                                        _fun101295_ip = 174;
                                        continue _fun101295
                                    }
                                case 119:
                                    var6 = var3.clearTimeout;
                                    var5 = _closure4_slot0;
                                    var4 = undefined;
                                    var5 = var6.bind(var4)(var5);
                                    var3 = var3.setTimeout;
                                    var0 = _closure1_slot12;
                                    var2 = var0 - var2;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = false;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var3.bind(var4)(var0, var2);
                                    _closure4_slot0 = var0;
                                    _fun101295_ip = 190;
                                    continue _fun101295;
                                case 174:
                                    var2 = _closure3_slot0;
                                    var1 = undefined;
                                    var0 = false;
                                    var0 = var2.bind(var1)(var0);
                                case 190:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot1 = var2;
                        var1 = null;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot8;
                        var1 = var3.addChangeListener;
                        var1 = var1.bind(var3)(var2);
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var3 = var0.clearTimeout;
                            var2 = _closure4_slot0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot8;
                            var2 = var3.removeChangeListener;
                            var1 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = new Array(0);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var0.bind(var5)();
                var _closure2_slot1 = var2;
                var9 = _closure1_slot4;
                var0 = var9.useRef;
                var1 = null;
                var0 = var0.bind(var9)(var1);
                var _closure2_slot2 = var0;
                var0 = 10;
                var0 = var7[var0];
                var7 = var3.bind(var5)(var0);
                var3 = var7.useConfig;
                var0 = {};
                var9 = 'ConnectionIndicator';
                var0.location = var9;
                var0 = var3.bind(var7)(var0);
                var3 = var0.hidden;
                var _closure2_slot3 = var3;
                var12 = _closure1_slot4;
                var9 = var12.useEffect;
                var7 = new Array(3);
                var7[0] = var2;
                var7[1] = var4;
                var7[2] = var3;
                var0 = function() { // Environment: var6
                    _fun101298: for (var _fun101298_ip = 0;;) switch (_fun101298_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var3 = var2.current;
                            var0 = _closure2_slot0;
                            var2.current = var0;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun101298_ip = 213;
                                continue _fun101298
                            }
                        case 31:
                            var2 = _closure1_slot7;
                            var2 = var2.ONLINE;
                            if (!(var3 === var2)) {
                                _fun101298_ip = 213;
                                continue _fun101298
                            }
                        case 51:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot7;
                            var2 = var2.ONLINE;
                            if (!(var3 !== var2)) {
                                _fun101298_ip = 213;
                                continue _fun101298
                            }
                        case 72:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot7;
                            var2 = var2.CONNECTING;
                            if (!(var3 === var2)) {
                                _fun101298_ip = 97;
                                continue _fun101298
                            }
                        case 90:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun101298_ip = 193;
                                continue _fun101298
                            }
                        case 97:
                            var2 = _closure2_slot3;
                            var6 = 'hidden';
                            if (var2) {
                                _fun101298_ip = 139;
                                continue _fun101298
                            }
                        case 108:
                            var4 = _closure2_slot0;
                            var2 = _closure1_slot7;
                            var3 = var2.OFFLINE;
                            var2 = 'connecting';
                            if (!(var4 === var3)) {
                                _fun101298_ip = 136;
                                continue _fun101298
                            }
                        case 132:
                            var2 = 'offline';
                        case 136:
                            var6 = var2;
                        case 139:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot9;
                            var3 = var2.CONNECTION_INDICATOR_SHOWN;
                            var2 = {};
                            var2.connection_indicator_type = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            _fun101298_ip = 213;
                            continue _fun101298;
                        case 193:
                            var1 = _closure2_slot2;
                            var0 = _closure1_slot7;
                            var0 = var0.ONLINE;
                            var1.current = var0;
                        case 213:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var9.bind(var12)(var0, var7);
                var0 = null;
                if (var3) {
                    _fun101290_ip = 609;
                    continue _fun101290
                }
            case 245:
                var3 = _closure1_slot7;
                var3 = var3.ONLINE;
                var0 = null;
                if (!(var4 !== var3)) {
                    _fun101290_ip = 609;
                    continue _fun101290
                }
            case 264:
                var3 = _closure1_slot7;
                var3 = var3.OFFLINE;
                if (!(var4 !== var3)) {
                    _fun101290_ip = 431;
                    continue _fun101290
                }
            case 281:
                var1 = null;
                if (var2) {
                    _fun101290_ip = 426;
                    continue _fun101290
                }
            case 289:
                var4 = _closure1_slot11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 12;
                var2 = var15[var2];
                var2 = var14.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var2.style = var8;
                var7 = 13;
                var9 = var15[var7];
                var9 = var14.bind(var5)(var9);
                var12 = var9.intl;
                var9 = var12.string;
                var7 = var15[var7];
                var7 = var14.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.xi7E7F;
                var7 = var9.bind(var12)(var7);
                var2['aria-label'] = var7;
                var7 = function() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 14;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'connection-connecting';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 13;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.xi7E7F;
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var4 = function() {
                        var3 = _closure1_slot11;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 15;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.ConnectionUnknownIcon;
                        var0 = {};
                        var4 = 'sm';
                        var0.size = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var7;
                var12 = _closure1_slot11;
                var9 = _closure1_slot5;
                var7 = {};
                var14 = 'small';
                var7.size = var14;
                var7.color = var13;
                var7 = var12.bind(var5)(var9, var7);
                var2.children = var7;
                var1 = var4.bind(var5)(var3, var2);
            case 426:
                _fun101290_ip = 606;
                continue _fun101290;
            case 431:
                var4 = _closure1_slot11;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var2.style = var8;
                var8 = 13;
                var12 = var9[var8];
                var12 = var7.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var9[var8];
                var8 = var7.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8["s+IpiQ"];
                var8 = var12.bind(var13)(var8);
                var2['aria-label'] = var8;
                var6 = function() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 14;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'connection-offline';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 13;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["s+IpiQ"];
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var4 = function() {
                        var3 = _closure1_slot11;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 15;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.ConnectionUnknownIcon;
                        var0 = {};
                        var4 = 'sm';
                        var0.size = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var6;
                var8 = _closure1_slot11;
                var6 = 15;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ConnectionUnknownIcon;
                var6 = {};
                var12 = 'sm';
                var6.size = var12;
                var10 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var10.bind(var5)(var9);
                var9 = var9.colors;
                var9 = var9.INTERACTIVE_ICON_DEFAULT;
                var6.color = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 606:
                var0 = var1;
            case 609:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 3;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ConnectivityState;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var3 = var3.AppStates;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 5000;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101303: for (var _fun101303_ip = 0;;) switch (_fun101303_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var2 = var3.useConfig;
                var0 = {};
                var5 = 'ConnectionIndicator';
                var0.location = var5;
                var0 = var2.bind(var3)(var0);
                var2 = var0.timeoutMs;
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun101303_ip = 89;
                    continue _fun101303
                }
            case 63:
                var3 = _closure1_slot11;
                var2 = _closure1_slot13;
                var1 = {};
                var6 = arg0;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var0 = var3.bind(var4)(var2, var1);
            case 89:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/ConnectionIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 12398, 5246, 660, 33, 3110, 671, 566, 12399, 795, 4865, 1234, 3107, 13162, 2]);