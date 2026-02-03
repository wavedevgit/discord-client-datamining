// modules/network/NetStats.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var8 = function arg0() {
        _fun39757: for (var _fun39757_ip = 0;;) switch (_fun39757_ip) {
            case 0:
                var1 = arg0;
                _closure1_slot14 = var1;
                var3 = _closure1_slot15;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun39757_ip = 24;
                    continue _fun39757
                }
            case 20:
                _closure1_slot15 = var1;
            case 24:
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var0 = function() {
        _fun39758: for (var _fun39758_ip = 0;;) switch (_fun39758_ip) {
            case 0:
                var1 = _closure1_slot6;
                var1 = var1.SystemResourceManager;
                var2 = var1.getNetworkUsage;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun39758_ip = 53;
                    continue _fun39758
                }
            case 25:
                var0 = _closure1_slot6;
                var2 = var0.SystemResourceManager;
                var1 = var2.getNetworkUsage;
                var0 = function(arg0) { // Environment: var0
                    _fun39759: for (var _fun39759_ip = 0;;) switch (_fun39759_ip) {
                        case 0:
                            var1 = arg0;
                            _closure1_slot12 = var1;
                            var3 = _closure1_slot13;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun39759_ip = 24;
                                continue _fun39759
                            }
                        case 20:
                            _closure1_slot13 = var1;
                        case 24:
                            var4 = _closure1_slot11;
                            var3 = var4.fileOnly;
                            var2 = {};
                            var1 = _closure1_slot14;
                            var2.state = var1;
                            var1 = _closure1_slot12;
                            var2.nativeStats = var1;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var1);
                            var1 = var5.getRTCTotalBytes;
                            var1 = var1.bind(var5)();
                            var2.rtc = var1;
                            var1 = 'Updating Network Info';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 53:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var7 = var9.AppState;
    var9 = var9.NativeModules;
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.AnalyticEvents;
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var5[var9];
    var11 = var6.bind(var0)(var9);
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var14 = 'NetStats';
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot11 = var9;
    var9 = null;
    var10 = {
        'signalStrengthLevel': null,
        'isNetworkRoaming': false,
        'cellularReceiveBytes': 0,
        'cellularSendBytes': 0,
        'totalReceiveBytes': 0,
        'totalSendBytes': 0,
        'uidReceiveBytes': 0,
        'uidSendBytes': 0,
        'socketBytesReceived': 0,
        'otaBytesReceived': 0,
        'otaNumRequests': 0,
        'xhrBytesReceived': 0,
        'xhrNumRequests': 0,
        'frescoBytesReceived': 0,
        'frescoNumRequests': 0,
        'downloadBytesReceived': 0,
        'downloadNumRequests': 0,
        'mediaPlayerBytesReceived': 0
    };
    var _closure1_slot12 = var10;
    var _closure1_slot13 = var9;
    var10 = {
        'type': null,
        'effectiveSpeed': null,
        'serviceProvider': null
    };
    var11 = 9;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NetInfoStateType;
    var11 = var11.unknown;
    var10.type = var11;
    var _closure1_slot14 = var10;
    var _closure1_slot15 = var9;
    var9 = var7.currentState;
    var7 = 'active';
    var7 = var7 === var9;
    var _closure1_slot16 = var7;
    var _closure1_slot17 = var3;
    var _closure1_slot18 = var3;
    var _closure1_slot19 = var3;
    var _closure1_slot20 = var3;
    var3 = 10;
    var7 = var5[var3];
    var9 = var6.bind(var0)(var7);
    var7 = var9.addChangeCallback;
    var7 = var7.bind(var9)(var8);
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.getNetworkInformation;
    var7 = var3.bind(var7)();
    var3 = var7.then;
    var3 = var3.bind(var7)(var8);
    var3 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            _fun39761: for (var _fun39761_ip = 0;;) switch (_fun39761_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot4;
                    var4 = _closure2_slot2;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var6 = _closure1_slot16;
                    var5 = 0;
                    if (!var6) {
                        _fun39761_ip = 98;
                        continue _fun39761
                    }
                case 40:
                    var6 = global;
                    var8 = var6.setTimeout;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 12;
                    var6 = var9[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.Millis;
                    var7 = var6.MINUTE;
                    var6 = 1;
                    var7 = var6 * var7;
                    var6 = function() { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1.track;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = var8.bind(var0)(var6, var7);
                case 98:
                    var2.trackTimeout = var5;
                    var5 = _closure1_slot16;
                    var4 = 0;
                    if (!var5) {
                        _fun39761_ip = 171;
                        continue _fun39761
                    }
                case 113:
                    var5 = global;
                    var7 = var5.setInterval;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 12;
                    var5 = var8[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.Millis;
                    var6 = var5.SECOND;
                    var5 = 5;
                    var6 = var5 * var6;
                    var5 = function() { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1.writeExistingEventStorage;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var4 = var7.bind(var0)(var5, var6);
                case 171:
                    var2.flushStorageInterval = var4;
                    var4 = false;
                    var2.didEverTrack = var4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var6 = var4.Storage;
                    var5 = var6.get;
                    var4 = 'previousNetStatsEvents';
                    var4 = var5.bind(var6)(var4);
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun39761_ip = 237;
                        continue _fun39761
                    }
                case 233:
                    var4 = new Array(0);
                case 237:
                    var2.existingEvents = var4;
                    var3 = function() { // Environment: var3
                        _fun39764: for (var _fun39764_ip = 0;;) switch (_fun39764_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.existingEvents;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun39764_ip = 85;
                                    continue _fun39764
                                }
                            case 26:
                                var3 = _closure1_slot8;
                                var2 = var3.submitEventsImmediately;
                                var1 = _closure3_slot0;
                                var1 = var1.existingEvents;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function() { // Environment: var0
                                    var4 = _closure1_slot11;
                                    var3 = var4.fileOnly;
                                    var1 = _closure3_slot0;
                                    var2 = var1.existingEvents;
                                    var0 = 'Successfully logged existing network usage events';
                                    var0 = var3.bind(var4)(var0, var2);
                                    var0 = new Array(0);
                                    var1.existingEvents = var0;
                                    var0 = var1.writeExistingEventStorage;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.catch;
                                var0 = function(arg0) { // Environment: var0
                                    _fun39766: for (var _fun39766_ip = 0;;) switch (_fun39766_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var1 = var4.status;
                                            var0 = 429;
                                            var0 = var0 === var1;
                                            if (var0) {
                                                _fun39766_ip = 23;
                                                continue _fun39766
                                            }
                                        case 21:
                                            var0 = false;
                                        case 23:
                                            if (!var0) {
                                                _fun39766_ip = 64;
                                                continue _fun39766
                                            }
                                        case 26:
                                            var3 = _closure1_slot11;
                                            var2 = var3.error;
                                            var0 = _closure3_slot0;
                                            var1 = var0.existingEvents;
                                            var0 = 'Failed to log log existing network usage events';
                                            var0 = var2.bind(var3)(var0, var1, var4);
                                        case 64:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 85:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.trackExistingEvents = var3;
                    var4 = _closure1_slot7;
                    var3 = var4.isConnected;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun39761_ip = 315;
                        continue _fun39761
                    }
                case 271:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.subscribe;
                    var3 = var2.trackExistingEvents;
                    var1 = 'CONNECTION_OPEN';
                    var1 = var4.bind(var5)(var1, var3);
                    _fun39761_ip = 325;
                    continue _fun39761;
                case 315:
                    var1 = var2.trackExistingEvents;
                    var1 = var1.bind(var2)();
                case 325:
                    return var0;
            }
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'handleAppStateChange';
        var4.key = var1;
        var1 = function arg0() {
            _fun39767: for (var _fun39767_ip = 0;;) switch (_fun39767_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.didEverTrack;
                    if (var2) {
                        _fun39767_ip = 152;
                        continue _fun39767
                    }
                case 21:
                    var2 = _closure1_slot16;
                    var4 = arg0;
                    if (var4) {
                        _fun39767_ip = 48;
                        continue _fun39767
                    }
                case 34:
                    if (!var2) {
                        _fun39767_ip = 152;
                        continue _fun39767
                    }
                case 37:
                    var4 = var1.track;
                    var4 = var4.bind(var1)();
                    _fun39767_ip = 152;
                    continue _fun39767;
                case 48:
                    if (var2) {
                        _fun39767_ip = 152;
                        continue _fun39767
                    }
                case 51:
                    var2 = true;
                    _closure1_slot16 = var2;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.Millis;
                    var5 = var3.MINUTE;
                    var3 = 1;
                    var5 = var3 * var5;
                    var3 = function() { // Environment: var0
                        var1 = _closure1_slot21;
                        var0 = var1.track;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var6.bind(var4)(var3, var5);
                    var1.trackTimeout = var3;
                    var3 = var2.setInterval;
                    var2 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.writeExistingEventStorage;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = 5000;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.flushStorageInterval = var0;
                case 152:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(4);
        var1[0] = var4;
        var4 = {};
        var6 = 'writeExistingEventStorage';
        var4.key = var6;
        var7 = _closure1_slot3;
        var0 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39771: for (var _fun39771_ip = 0;;) switch (_fun39771_ip) {
                    case 0:
                        StartGenerator();
                        var1 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun39771_ip = 199;
                            continue _fun39771
                        }
                    case 13:
                        var2 = var1.didEverTrack;
                        if (var2) {
                            _fun39771_ip = 65;
                            continue _fun39771
                        }
                    case 22:
                        var2 = _closure1_slot16;
                        if (!var2) {
                            _fun39771_ip = 65;
                            continue _fun39771
                        }
                    case 32:
                        var2 = var1.getQueuedEvent;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 46);
                    case 44:
                        return var2;
                    case 46:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39771_ip = 62;
                            continue _fun39771
                        }
                    case 52:
                        var3 = new Array(1);
                        var3[0] = var2;
                        _fun39771_ip = 69;
                        continue _fun39771;
                    case 62:
                        return var2;
                    case 65:
                        var3 = new Array(0);
                    case 69:
                        var2 = var1.existingEvents;
                        var1 = var2.concat;
                        var4 = var1.bind(var2)(var3);
                        var2 = var4.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun39771_ip = 146;
                            continue _fun39771
                        }
                    case 96:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.set;
                        var1 = 'previousNetStatsEvents';
                        var1 = var2.bind(var3)(var1, var4);
                        _fun39771_ip = 194;
                        continue _fun39771;
                    case 146:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.remove;
                        var1 = 'previousNetStatsEvents';
                        var1 = var2.bind(var3)(var1);
                    case 194:
                        var1 = undefined;
                        return var1;
                    case 199:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'track';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39774: for (var _fun39774_ip = 0;;) switch (_fun39774_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39774_ip = 170;
                            continue _fun39774
                        }
                    case 15:
                        var _closure4_slot0 = var4;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var2 = var4.didEverTrack;
                        if (var2) {
                            _fun39774_ip = 167;
                            continue _fun39774
                        }
                    case 37:
                        var2 = true;
                        var4.didEverTrack = var2;
                        var2 = global;
                        var6 = var2.clearTimeout;
                        var5 = var4.trackTimeout;
                        var5 = var6.bind(var1)(var5);
                        var5 = var2.clearInterval;
                        var2 = var4.flushStorageInterval;
                        var2 = var5.bind(var1)(var2);
                        var2 = var4.getQueuedEvent;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address = 95);
                    case 93:
                        return var2;
                    case 95:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun39774_ip = 164;
                            continue _fun39774
                        }
                    case 101:
                        var6 = new Array(1);
                        var6[0] = var2;
                        _closure4_slot1 = var6;
                        var5 = _closure1_slot8;
                        var4 = var5.submitEventsImmediately;
                        var6 = var4.bind(var5)(var6);
                        var5 = var6.then;
                        var4 = function() { // Environment: var3
                            var4 = _closure1_slot11;
                            var3 = var4.fileOnly;
                            var2 = _closure4_slot1;
                            var1 = 'Successfully tracked latest network usage';
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = _closure4_slot0;
                            var0 = var1.writeExistingEventStorage;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.catch;
                        var3 = function(arg0) { // Environment: var3
                            _fun39776: for (var _fun39776_ip = 0;;) switch (_fun39776_ip) {
                                case 0:
                                    var4 = arg0;
                                    var1 = var4.status;
                                    var0 = 429;
                                    if (!(var0 !== var1)) {
                                        _fun39776_ip = 50;
                                        continue _fun39776
                                    }
                                case 18:
                                    var3 = _closure1_slot11;
                                    var2 = var3.error;
                                    var1 = _closure4_slot1;
                                    var0 = 'Failed to track latest network usage';
                                    var0 = var2.bind(var3)(var0, var1, var4);
                                case 50:
                                    var1 = _closure4_slot0;
                                    var3 = var1.existingEvents;
                                    var2 = var3.push;
                                    var4 = _closure4_slot1;
                                    var0 = 0;
                                    var0 = var4[var0];
                                    var0 = var2.bind(var3)(var0);
                                    var0 = var1.writeExistingEventStorage;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun39774_ip = 167;
                        continue _fun39774;
                    case 164:
                        return var2;
                    case 167:
                        return var1;
                    case 170:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'getQueuedEvent';
        var4.key = var6;
        var5 = function() {
            var2 = _closure1_slot22;
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot6;
            var2 = var2.TTIManager;
            var2 = var2.AppOpenedTimestamp;
            var _closure3_slot0 = var2;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getSession;
            var2 = var1.bind(var2)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun39779: for (var _fun39779_ip = 0;;) switch (_fun39779_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = _closure1_slot10;
                        var1 = var1.APP_NETWORK_USAGE;
                        var0.type = var1;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 16;
                        var6 = var5[var4];
                        var5 = undefined;
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.getDeviceMetadata;
                        var10 = var6.bind(var7)();
                        var11 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var6 = global;
                        var7 = var6.Date;
                        var6 = var7.now;
                        var7 = var6.bind(var7)();
                        var6 = 'client_track_timestamp';
                        var1[var6] = var7;
                        var7 = null;
                        var8 = var7 == var2;
                        var6 = undefined;
                        if (var8) {
                            _fun39779_ip = 106;
                            continue _fun39779
                        }
                    case 100:
                        var6 = var2.uuid;
                    case 106:
                        var2 = 'client_heartbeat_session_id';
                        var1[var2] = var6;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.currentLoadId;
                        var6 = var4.bind(var6)();
                        var4 = 'load_id';
                        var1[var4] = var6;
                        var6 = _closure1_slot9;
                        var4 = var6.getGuildCount;
                        var6 = var4.bind(var6)();
                        var4 = 'num_guilds';
                        var1[var4] = var6;
                        var4 = _closure1_slot1;
                        var6 = 17;
                        var8 = var2[var6];
                        var8 = var4.bind(var5)(var8);
                        var9 = var8.wasAuthenticated;
                        var8 = 'was_authenticated';
                        var1[var8] = var9;
                        var8 = var2[var6];
                        var8 = var4.bind(var5)(var8);
                        var9 = var8.didBackgroundApp;
                        var8 = 'did_background_app';
                        var1[var8] = var9;
                        var8 = var2[var6];
                        var8 = var4.bind(var5)(var8);
                        var8 = var8.extraProperties;
                        var9 = var8.headless_task_ran;
                        var8 = 'headless_task_ran';
                        var1[var8] = var9;
                        var2 = var2[var6];
                        var2 = var4.bind(var5)(var2);
                        var9 = var2.ready;
                        var8 = var9.serializeEnd;
                        var4 = _closure3_slot0;
                        var8 = var8.bind(var9)(var4);
                        var4 = 'ready_payload_duration_ms';
                        var1[var4] = var8;
                        var8 = _closure1_slot13;
                        var9 = var7 == var8;
                        var4 = undefined;
                        if (var9) {
                            _fun39779_ip = 326;
                            continue _fun39779
                        }
                    case 320:
                        var4 = var8.signalStrengthLevel;
                    case 326:
                        var9 = var7 != var4;
                        var8 = undefined;
                        if (!var9) {
                            _fun39779_ip = 338;
                            continue _fun39779
                        }
                    case 335:
                        var8 = var4;
                    case 338:
                        var4 = 'initial_signal_strength_level';
                        var1[var4] = var8;
                        var4 = _closure1_slot12;
                        var4 = var4.signalStrengthLevel;
                        var9 = var7 != var4;
                        var8 = undefined;
                        if (!var9) {
                            _fun39779_ip = 371;
                            continue _fun39779
                        }
                    case 368:
                        var8 = var4;
                    case 371:
                        var4 = 'final_signal_strength_level';
                        var1[var4] = var8;
                        var8 = _closure1_slot15;
                        var9 = var7 == var8;
                        var4 = undefined;
                        if (var9) {
                            _fun39779_ip = 400;
                            continue _fun39779
                        }
                    case 395:
                        var4 = var8.type;
                    case 400:
                        var9 = var7 != var4;
                        var8 = undefined;
                        if (!var9) {
                            _fun39779_ip = 412;
                            continue _fun39779
                        }
                    case 409:
                        var8 = var4;
                    case 412:
                        var4 = 'initial_network_type';
                        var1[var4] = var8;
                        var4 = _closure1_slot14;
                        var8 = var4.type;
                        var4 = 'final_network_type';
                        var1[var4] = var8;
                        var8 = _closure1_slot15;
                        var9 = var7 == var8;
                        var4 = undefined;
                        if (var9) {
                            _fun39779_ip = 462;
                            continue _fun39779
                        }
                    case 456:
                        var4 = var8.effectiveSpeed;
                    case 462:
                        var8 = var7 != var4;
                        var7 = undefined;
                        if (!var8) {
                            _fun39779_ip = 474;
                            continue _fun39779
                        }
                    case 471:
                        var7 = var4;
                    case 474:
                        var4 = 'initial_cellular_generation';
                        var1[var4] = var7;
                        var4 = _closure1_slot14;
                        var7 = var4.effectiveSpeed;
                        var4 = 'final_cellular_generation';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.isNetworkRoaming;
                        var4 = 'is_network_roaming';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.cellularReceiveBytes;
                        var4 = 'cellular_receive_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.cellularSendBytes;
                        var4 = 'cellular_send_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.totalReceiveBytes;
                        var4 = 'total_receive_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.totalSendBytes;
                        var4 = 'total_send_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.uidReceiveBytes;
                        var4 = 'uid_receive_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.uidSendBytes;
                        var4 = 'uid_send_bytes';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.socketBytesReceived;
                        var4 = 'socket_bytes_received';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.otaBytesReceived;
                        var4 = 'ota_bytes_received';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.otaNumRequests;
                        var4 = 'ota_num_requests';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.xhrBytesReceived;
                        var4 = 'xhr_bytes_received';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.xhrNumRequests;
                        var4 = 'xhr_num_requests';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.frescoBytesReceived;
                        var4 = 'fresco_bytes_received';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.frescoNumRequests;
                        var4 = 'fresco_num_requests';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.downloadBytesReceived;
                        var4 = 'download_bytes_received';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.downloadNumRequests;
                        var4 = 'download_num_requests';
                        var1[var4] = var7;
                        var4 = _closure1_slot12;
                        var7 = var4.mediaPlayerBytesReceived;
                        var4 = 'media_player_bytes_received';
                        var1[var4] = var7;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 11;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.getRTCTotalBytes;
                        var7 = var4.bind(var7)();
                        var4 = 'rtc_bytes';
                        var1[var4] = var7;
                        var7 = _closure1_slot17;
                        var4 = 'num_message_sends';
                        var1[var4] = var7;
                        var4 = _closure1_slot17;
                        var8 = 0;
                        var7 = undefined;
                        if (!(var8 !== var4)) {
                            _fun39779_ip = 935;
                            continue _fun39779
                        }
                    case 931:
                        var7 = _closure1_slot18;
                    case 935:
                        var4 = 'max_message_send_duration';
                        var1[var4] = var7;
                        var4 = _closure1_slot17;
                        var7 = undefined;
                        if (!(var8 !== var4)) {
                            _fun39779_ip = 960;
                            continue _fun39779
                        }
                    case 956:
                        var7 = _closure1_slot19;
                    case 960:
                        var4 = 'max_message_queue_length';
                        var1[var4] = var7;
                        var7 = _closure1_slot20;
                        var4 = 'num_message_send_fails';
                        var1[var4] = var7;
                        var7 = _closure1_slot7;
                        var4 = var7.getSocket;
                        var4 = var4.bind(var7)();
                        var7 = var4.identifyCount;
                        var4 = 'num_identifies';
                        var1[var4] = var7;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var3 = var4.bind(var5)(var3);
                        var4 = var3.renderLatestMessages;
                        var3 = var4.serialize;
                        var2 = _closure3_slot0;
                        var3 = var3.bind(var4)(var2);
                        var2 = 'render_latest_messages_duration_ms';
                        var1[var2] = var3;
                        var0.properties = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var1[3] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var15 = var7;
    var3 = new var15[var3](var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot21 = var3;
    var3 = 14;
    var7 = var5[var3];
    var10 = var6.bind(var0)(var7);
    var9 = var10.subscribe;
    var8 = 'APP_STATE_UPDATE';
    var7 = function(arg0) { // Environment: var1
        var2 = _closure1_slot21;
        var1 = var2.handleAppStateChange;
        var0 = arg0;
        var3 = var0.state;
        var0 = 'active';
        var0 = var0 === var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var7 = var9.bind(var10)(var8, var7);
    var7 = var5[var3];
    var10 = var6.bind(var0)(var7);
    var9 = var10.subscribe;
    var8 = 'MESSAGE_CREATE';
    var7 = function(arg0) { // Environment: var1
        _fun39781: for (var _fun39781_ip = 0;;) switch (_fun39781_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.sendMessageOptions;
                var3 = null;
                var5 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun39781_ip = 28;
                    continue _fun39781
                }
            case 22:
                var2 = var4.sendAnalytics;
            case 28:
                if (!(var3 != var2)) {
                    _fun39781_ip = 133;
                    continue _fun39781
                }
            case 32:
                var3 = _closure1_slot17;
                var3 = var3 + 1;
                _closure1_slot17 = var3;
                var3 = global;
                var7 = var3.Math;
                var6 = var7.max;
                var5 = _closure1_slot18;
                var4 = var1.sendMessageOptions;
                var4 = var4.sendAnalytics;
                var4 = var4.duration;
                var4 = var6.bind(var7)(var5, var4);
                _closure1_slot18 = var4;
                var5 = var3.Math;
                var4 = var5.max;
                var3 = _closure1_slot19;
                var1 = var1.sendMessageOptions;
                var1 = var1.sendAnalytics;
                var1 = var1.queueSize;
                var1 = var4.bind(var5)(var3, var1);
                _closure1_slot19 = var1;
            case 133:
                return var0;
        }
    };
    var7 = var9.bind(var10)(var8, var7);
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var7 = var8.subscribe;
    var6 = 'MESSAGE_SEND_FAILED';
    var3 = function() { // Environment: var1
        var0 = _closure1_slot20;
        var0 = var0 + 1;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var3 = var7.bind(var8)(var6, var3);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/network/NetStats.android.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun39783: for (var _fun39783_ip = 0;;) switch (_fun39783_ip) {
            case 0:
                var0 = _closure1_slot14;
                var1 = var0.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.NetInfoStateType;
                var0 = var0.cellular;
                var0 = var1 === var0;
                if (!var0) {
                    _fun39783_ip = 126;
                    continue _fun39783
                }
            case 53:
                var1 = _closure1_slot12;
                var3 = var1.signalStrengthLevel;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun39783_ip = 89;
                    continue _fun39783
                }
            case 72:
                var3 = _closure1_slot12;
                var4 = var3.signalStrengthLevel;
                var3 = 2;
                var1 = var4 <= var3;
            case 89:
                if (var1) {
                    _fun39783_ip = 110;
                    continue _fun39783
                }
            case 92:
                var3 = _closure1_slot14;
                var4 = var3.effectiveSpeed;
                var3 = '2g';
                var1 = var3 === var4;
            case 110:
                if (var1) {
                    _fun39783_ip = 123;
                    continue _fun39783
                }
            case 113:
                var2 = _closure1_slot12;
                var1 = var2.isNetworkRoaming;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var2.isSlowNetwork = var3;
    var1 = function() {
        var0 = _closure1_slot12;
        var0 = var0.signalStrengthLevel;
        return var0;
    };
    var2.getSignalStrength = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 27, 3474, 4313, 1410, 660, 3, 1446, 1445, 4363, 667, 587, 806, 4314, 4364, 14, 2]);