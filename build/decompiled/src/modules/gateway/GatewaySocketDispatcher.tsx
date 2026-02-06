// modules/gateway/GatewaySocketDispatcher.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun94654: for (var _fun94654_ip = 0;;) switch (_fun94654_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun94654_ip = 46;
                    continue _fun94654
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun94654_ip = 55;
                    continue _fun94654
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun94654_ip = 345;
                    continue _fun94654
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun94654_ip = 323;
                    continue _fun94654
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun94654_ip = 283;
                    continue _fun94654
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun94654_ip = 270;
                    continue _fun94654
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun94654_ip = 163;
                    continue _fun94654
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun94654_ip = 179;
                    continue _fun94654
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun94654_ip = 249;
                    continue _fun94654
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun94654_ip = 249;
                    continue _fun94654
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun94654_ip = 234;
                    continue _fun94654
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun94654_ip = 247;
                    continue _fun94654
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun94654_ip = 265;
                continue _fun94654;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun94654_ip = 283;
                continue _fun94654;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun94654_ip = 323;
                    continue _fun94654
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun94654_ip = 330;
                    continue _fun94654
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun94655: for (var _fun94655_ip = 0;;) switch (_fun94655_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun94655_ip = 56;
                                continue _fun94655
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun94655_ip = 67;
                            continue _fun94655;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun94656: for (var _fun94656_ip = 0;;) switch (_fun94656_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun94656_ip = 23;
                    continue _fun94656
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun94656_ip = 33;
                    continue _fun94656
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun94656_ip = 70;
                    continue _fun94656
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun94656_ip = 55;
                    continue _fun94656
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94657: for (var _fun94657_ip = 0;;) switch (_fun94657_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var7 = arg2;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun94657_ip = 130;
                    continue _fun94657
                }
            case 15:
                var3 = var5[var2];
                var1 = var5.length;
                var4 = 1;
                var1 = var1 - var4;
                var6 = var2 < var1;
                var8 = null;
                if (!var6) {
                    _fun94657_ip = 48;
                    continue _fun94657
                }
            case 40:
                var4 = var2 + var4;
                var8 = var5[var4];
            case 48:
                var5 = var0 == var7;
                var9 = undefined;
                if (var5) {
                    _fun94657_ip = 67;
                    continue _fun94657
                }
            case 57:
                var5 = var7.timeRemaining;
                var9 = var5.bind(var7)();
            case 67:
                var10 = var0 != var9;
                var6 = 0;
                var5 = 0;
                if (!var10) {
                    _fun94657_ip = 81;
                    continue _fun94657
                }
            case 78:
                var5 = var9;
            case 81:
                var3 = var3.type;
                var9 = var0 == var8;
                var4 = undefined;
                if (var9) {
                    _fun94657_ip = 100;
                    continue _fun94657
                }
            case 95:
                var4 = var8.type;
            case 100:
                var0 = var0 != var7;
                if (!var0) {
                    _fun94657_ip = 111;
                    continue _fun94657
                }
            case 107:
                var0 = var5 <= var6;
            case 111:
                if (!var0) {
                    _fun94657_ip = 121;
                    continue _fun94657
                }
            case 114:
                var3 = var3 === var4;
                var0 = !var3;
            case 121:
                if (!var0) {
                    _fun94657_ip = 128;
                    continue _fun94657
                }
            case 124:
                var0 = var2 !== var1;
            case 128:
                return var0;
            case 130:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var9 = 0;
    var6 = var5[var9];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var8 = 1;
    var6 = var5[var8];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var7 = 2;
    var6 = var5[var7];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var11 = var10.bind(var0)(var6);
    var6 = var11.prototype;
    var10 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var14 = 'GatewaySocket';
    var15 = var10;
    var6 = new var15[var11](var14, var13);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot7 = var6;
    var11 = var3.Set;
    var6 = var11.prototype;
    var10 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var14 = ['INITIAL_GUILD', 'READY'];
    var15 = var10;
    var6 = new var15[var11](var14, var13);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot8 = var6;
    var11 = var3.Set;
    var6 = var11.prototype;
    var10 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var14 = ['READY', 'INITIAL_GUILD'];
    var15 = var10;
    var6 = new var15[var11](var14, var13);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot9 = var6;
    var11 = var3.Set;
    var6 = var11.prototype;
    var10 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var14 = ['READY', 'READY_SUPPLEMENTAL', 'RESUMED'];
    var15 = var10;
    var6 = new var15[var11](var14, var13);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot10 = var6;
    var10 = var3.Set;
    var3 = var10.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var14 = ['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE'];
    var15 = var6;
    var3 = new var15[var10](var14, var13);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var3.NotStarted = var9;
    var6 = 'NotStarted';
    var3[var9] = var6;
    var3.Loading = var8;
    var6 = 'Loading';
    var3[var8] = var6;
    var3.Loaded = var7;
    var6 = 'Loaded';
    var3[var7] = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var _closure1_slot13 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = arg0;
            var2.socket = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.createDispatcherWorkScheduler;
            var3 = var3.bind(var6)();
            var2.scheduler = var3;
            var3 = new Array(0);
            var2.queue = var3;
            var3 = true;
            var2.paused = var3;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.createResumeAnalytics;
            var3 = var3.bind(var4)();
            var2.resumeAnalytics = var3;
            var3 = null;
            var2.getDispatchHandler = var3;
            var1 = function(arg0) { // Environment: var1
                _fun94660: for (var _fun94660_ip = 0;;) switch (_fun94660_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.paused;
                        if (var0) {
                            _fun94660_ip = 377;
                            continue _fun94660
                        }
                    case 19:
                        var1 = global;
                        var3 = var1.performance;
                        var0 = var3.now;
                        var3 = var0.bind(var3)();
                        var0 = _closure3_slot0;
                        var0 = var0.queue;
                        var0 = var0.length;
                        var7 = 0;
                        var0 = var7 < var0;
                        var5 = 0;
                        if (!var0) {
                            _fun94660_ip = 166;
                            continue _fun94660
                        }
                    case 62:
                        var0 = _closure3_slot0;
                        var0 = var0.queue;
                        var0 = var0[var7];
                        var4 = var0.status;
                        var0 = _closure1_slot12;
                        var0 = var0.Loaded;
                        var6 = 0;
                        var5 = 0;
                        if (!(var4 === var0)) {
                            _fun94660_ip = 166;
                            continue _fun94660
                        }
                    case 102:
                        var9 = var6 + 1;
                        var0 = _closure3_slot0;
                        var0 = var0.queue;
                        var0 = var0.length;
                        var5 = var9;
                        if (!(var9 < var0)) {
                            _fun94660_ip = 166;
                            continue _fun94660
                        }
                    case 127:
                        var0 = _closure3_slot0;
                        var0 = var0.queue;
                        var0 = var0[var9];
                        var4 = var0.status;
                        var0 = _closure1_slot12;
                        var0 = var0.Loaded;
                        var6 = var9;
                        var5 = var6;
                        if (var4 === var0) {
                            _fun94660_ip = 102;
                            continue _fun94660
                        }
                    case 166:
                        if (!(var7 !== var5)) {
                            _fun94660_ip = 373;
                            continue _fun94660
                        }
                    case 173:
                        var6 = _closure3_slot0;
                        var4 = var6.queue;
                        var0 = var4.splice;
                        var4 = var0.bind(var4)(var7, var5);
                        var5 = var6.dispatchMultiple;
                        var0 = arg0;
                        var0 = var5.bind(var6)(var4, var0);
                        if (!var0) {
                            _fun94660_ip = 279;
                            continue _fun94660
                        }
                    case 213:
                        var2 = _closure3_slot0;
                        var2 = var2.scheduler;
                        var6 = var2.telemetry;
                        var5 = var6.timeEnd;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var7 = var7[var2];
                        var2 = undefined;
                        var2 = var8.bind(var2)(var7);
                        var2 = var2.WorkSchedulerTelemetryTiming;
                        var2 = var2.TIME_TO_QUEUE_EMPTY;
                        var2 = var5.bind(var6)(var2);
                    case 279:
                        var5 = var1.performance;
                        var2 = var5.now;
                        var2 = var2.bind(var5)();
                        var8 = var2 - var3;
                        var3 = _closure1_slot6;
                        var3 = var8 > var3;
                        if (!var3) {
                            _fun94660_ip = 315;
                            continue _fun94660
                        }
                    case 312:
                        var3 = !var0;
                    case 315:
                        if (!var3) {
                            _fun94660_ip = 371;
                            continue _fun94660
                        }
                    case 318:
                        var3 = _closure1_slot7;
                        var2 = var3.log;
                        var13 = var4.length;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var14 = 'Dispatched ';
                        var12 = ' messages in ';
                        var10 = 'ms';
                        var11 = var8;
                        var1 = var14[var6](var13, var12, var11, var10, var9);
                        var1 = var2.bind(var3)(var1);
                    case 371:
                        return var0;
                    case 373:
                        var0 = true;
                        return var0;
                    case 377:
                        var0 = true;
                        return var0;
                }
            };
            var2.flush = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'hasStuffToDispatchNow';
        var0.key = var1;
        var1 = function() {
            _fun94661: for (var _fun94661_ip = 0;;) switch (_fun94661_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.queue;
                    var0 = var0.length;
                    var2 = 0;
                    var0 = var0 > var2;
                    if (!var0) {
                        _fun94661_ip = 55;
                        continue _fun94661
                    }
                case 23:
                    var1 = var1.queue;
                    var1 = var1[var2];
                    var2 = var1.status;
                    var1 = _closure1_slot12;
                    var1 = var1.Loaded;
                    var0 = var2 === var1;
                case 55:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'processFirstQueuedDispatch';
        var0.key = var5;
        var5 = function arg0() {
            _fun94662: for (var _fun94662_ip = 0;;) switch (_fun94662_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var1 = new Array(0);
                    var0 = var2.queue;
                    var0 = var0.length;
                    var5 = 0;
                    if (!(var0 > var5)) {
                        _fun94662_ip = 191;
                        continue _fun94662
                    }
                case 30:
                    var3 = var6.has;
                    var0 = var2.queue;
                    var0 = var0[var5];
                    var0 = var0.type;
                    var0 = var3.bind(var6)(var0);
                    if (!var0) {
                        _fun94662_ip = 191;
                        continue _fun94662
                    }
                case 61:
                    var0 = var2.queue;
                    var0 = var0[var5];
                    var3 = var0.status;
                    var0 = _closure1_slot12;
                    var0 = var0.Loaded;
                    if (!(var3 === var0)) {
                        _fun94662_ip = 191;
                        continue _fun94662
                    }
                case 93:
                    var3 = var1.push;
                    var7 = var2.queue;
                    var0 = var7.shift;
                    var0 = var0.bind(var7)();
                    var0 = var3.bind(var1)(var0);
                    var0 = var2.queue;
                    var0 = var0.length;
                    if (!(var0 > var5)) {
                        _fun94662_ip = 191;
                        continue _fun94662
                    }
                case 134:
                    var3 = var6.has;
                    var0 = var2.queue;
                    var0 = var0[var5];
                    var0 = var0.type;
                    var0 = var3.bind(var6)(var0);
                    if (!var0) {
                        _fun94662_ip = 191;
                        continue _fun94662
                    }
                case 162:
                    var0 = var2.queue;
                    var0 = var0[var5];
                    var3 = var0.status;
                    var0 = _closure1_slot12;
                    var0 = var0.Loaded;
                    if (var3 === var0) {
                        _fun94662_ip = 93;
                        continue _fun94662
                    }
                case 191:
                    var0 = var2.dispatchMultiple;
                    var0 = var0.bind(var2)(var1);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'unpauseDispatchQueue';
        var0.key = var5;
        var5 = function() {
            _fun94663: for (var _fun94663_ip = 0;;) switch (_fun94663_ip) {
                case 0:
                    var2 = this;
                    var0 = false;
                    var2.paused = var0;
                    var3 = _closure1_slot14;
                    var1 = var2.queue;
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.bind(var0)();
                    var1 = var3.done;
                    if (var1) {
                        _fun94663_ip = 74;
                        continue _fun94663
                    }
                case 43:
                    var5 = var3.value;
                    var1 = var2.maybePreload;
                    var1 = var1.bind(var2)(var5);
                    var5 = var4.bind(var0)();
                    var1 = var5.done;
                    var3 = var5;
                    if (!var1) {
                        _fun94663_ip = 43;
                        continue _fun94663
                    }
                case 74:
                    var1 = var2.flush;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'receiveDispatch';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun94664: for (var _fun94664_ip = 0;;) switch (_fun94664_ip) {
                case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1.getDispatchHandler;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun94664_ip = 111;
                        continue _fun94664
                    }
                case 18:
                    var3 = {};
                    var4 = arg0;
                    var3.data = var4;
                    var3.type = var2;
                    var4 = arg2;
                    var3.compressionAnalytics = var4;
                    var4 = _closure1_slot12;
                    var4 = var4.NotStarted;
                    var3.status = var4;
                    var3.preloadPromise = var0;
                    var3.preloadedData = var0;
                    var4 = var1.queue;
                    var0 = var4.push;
                    var0 = var0.bind(var4)(var3);
                    var0 = var1.maybePreload;
                    var0 = var0.bind(var1)(var3);
                    if (var0) {
                        _fun94664_ip = 107;
                        continue _fun94664
                    }
                case 96:
                    var0 = var1.scheduleFlush;
                    var0 = var0.bind(var1)(var2);
                case 107:
                    var0 = undefined;
                    return var0;
                case 111:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = undefined;
                    var0 = 'getDispatchHandler needs to be passed in first!';
                    var0 = var2.bind(var1)(var0);
                    throw var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'maybePreload';
        var0.key = var5;
        var5 = function arg0() {
            _fun94665: for (var _fun94665_ip = 0;;) switch (_fun94665_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var2;
                    var1 = var4.paused;
                    if (!var1) {
                        _fun94665_ip = 54;
                        continue _fun94665
                    }
                case 25:
                    var5 = _closure1_slot8;
                    var3 = var5.has;
                    var1 = var2.type;
                    var1 = var3.bind(var5)(var1);
                    if (var1) {
                        _fun94665_ip = 54;
                        continue _fun94665
                    }
                case 50:
                    var1 = false;
                    return var1;
                case 54:
                    var3 = var2.status;
                    var1 = _closure1_slot12;
                    var1 = var1.NotStarted;
                    if (!(var3 === var1)) {
                        _fun94665_ip = 161;
                        continue _fun94665
                    }
                case 76:
                    var3 = var4.getDispatchHandler;
                    var1 = var2.type;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var7;
                    var3 = undefined;
                    if (var4) {
                        _fun94665_ip = 119;
                        continue _fun94665
                    }
                case 103:
                    var6 = var7.preload;
                    var4 = var2.data;
                    var3 = var6.bind(var7)(var4);
                case 119:
                    if (!(var1 != var3)) {
                        _fun94665_ip = 135;
                        continue _fun94665
                    }
                case 123:
                    var4 = _closure1_slot12;
                    var4 = var4.Loading;
                    _fun94665_ip = 145;
                    continue _fun94665;
                case 135:
                    var5 = _closure1_slot12;
                    var4 = var5.Loaded;
                case 145:
                    var2.status = var4;
                    var2.preloadPromise = var3;
                    if (!(var1 == var3)) {
                        _fun94665_ip = 165;
                        continue _fun94665
                    }
                case 161:
                    var1 = false;
                    return var1;
                case 165:
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot1;
                        var2 = arg0;
                        var0.preloadedData = var2;
                        var2 = _closure1_slot12;
                        var2 = var2.Loaded;
                        var0.status = var2;
                        var2 = _closure3_slot0;
                        var1 = var2.scheduleFlush;
                        var0 = var0.type;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.socket;
                        var1 = var2.resetSocketOnDispatchError;
                        var0 = {};
                        var4 = arg0;
                        var0.error = var4;
                        var3 = _closure3_slot1;
                        var3 = var3.type;
                        var0.action = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'scheduleFlush';
        var0.key = var5;
        var5 = function arg0() {
            _fun94668: for (var _fun94668_ip = 0;;) switch (_fun94668_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.paused;
                    if (var1) {
                        _fun94668_ip = 130;
                        continue _fun94668
                    }
                case 15:
                    var4 = _closure1_slot9;
                    var2 = var4.has;
                    var2 = var2.bind(var4)(var3);
                    var4 = var0.scheduler;
                    if (var2) {
                        _fun94668_ip = 75;
                        continue _fun94668
                    }
                case 41:
                    var2 = var4.hasWorkScheduled;
                    if (var2) {
                        _fun94668_ip = 95;
                        continue _fun94668
                    }
                case 50:
                    var6 = var0.scheduler;
                    var5 = var6.requestWorkTimeout;
                    var2 = var0.flush;
                    var2 = var5.bind(var6)(var2);
                    _fun94668_ip = 95;
                    continue _fun94668;
                case 75:
                    var2 = var4.clearWorkTimeout;
                    var2 = var2.bind(var4)();
                    var2 = var0.flush;
                    var2 = var2.bind(var0)();
                case 95:
                    var2 = _closure1_slot11;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var3);
                    if (!var1) {
                        _fun94668_ip = 130;
                        continue _fun94668
                    }
                case 112:
                    var1 = var0.scheduler;
                    var0 = var1.markCriticalWorkScheduled;
                    var0 = var0.bind(var1)();
                case 130:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getDispatchTimings';
        var0.key = var5;
        var5 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getSchedulerTelemetry';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.scheduler;
            var0 = var0.telemetry;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getIsSchedulerBackgrounded';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.scheduler;
            var0 = var0.isBackgrounded;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'toggleRequestIdleCallback';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.scheduler;
            var1 = var2.toggleRequestIdleCallback;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getIsRequestIdleCallbackEnabled';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.scheduler;
            var0 = var0.isRequestIdleCallbackEnabled;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'dispatchMultiple';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun94674: for (var _fun94674_ip = 0;;) switch (_fun94674_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var4 = var1;
                    var _closure3_slot1 = var1;
                    var2 = arg1;
                    var _closure3_slot2 = var2;
                    var1 = var1.length;
                    var7 = 0;
                    if (!(var7 !== var1)) {
                        _fun94674_ip = 485;
                        continue _fun94674
                    }
                case 40:
                    var1 = 'none';
                    var _closure3_slot3 = var1;
                    var1 = false;
                    var _closure3_slot4 = var1;
                    var2 = var0.scheduler;
                    var10 = var2.telemetry;
                    var6 = var10.measure;
                    var11 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 7;
                    var5 = var5[var9];
                    var8 = undefined;
                    var5 = var11.bind(var8)(var5);
                    var5 = var5.WorkSchedulerTelemetryMeasurement;
                    var5 = var5.COUNT_INITIAL_DISPATCHS_LENGTH;
                    var4 = var4.length;
                    var4 = var6.bind(var10)(var5, var4);
                case 120: // try_start_0
                    var4 = new Array(0);
                    var _closure3_slot5 = var4;
                    var4 = var0.socket;
                    var5 = var4.connectionState;
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var4 = var6.bind(var8)(var4);
                    var4 = var4.RESUMING;
                    if (!(var5 === var4)) {
                        _fun94674_ip = 210;
                        continue _fun94674
                    }
                case 170:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var8)(var4);
                    var6 = var4.Emitter;
                    var5 = var6.pause;
                    var4 = 150;
                    var4 = var5.bind(var6)(var4);
                case 210:
                    var _closure3_slot6 = var7;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 9;
                    var4 = var4[var6];
                    var4 = var5.bind(var8)(var4);
                    var10 = var4.Emitter;
                    var5 = var10.batched;
                    var4 = function() { // Environment: var3
                        _fun94675: for (var _fun94675_ip = 0;;) switch (_fun94675_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                var0 = var0.length;
                                var5 = 0;
                                var3 = var5 < var0;
                                var0 = undefined;
                                var11 = 2;
                                var8 = 1;
                                var10 = global;
                                var4 = null;
                                var9 = 0;
                                if (!var3) {
                                    _fun94675_ip = 405;
                                    continue _fun94675
                                }
                            case 41:
                                var3 = _closure3_slot1;
                                var6 = var3[var9];
                                var3 = var6.type;
                                _closure3_slot3 = var3;
                                var7 = _closure3_slot4;
                                var3 = var9;
                                if (var7) {
                                    _fun94675_ip = 87;
                                    continue _fun94675
                                }
                            case 68:
                                var14 = _closure1_slot10;
                                var13 = var14.has;
                                var12 = var6.type;
                                var7 = var13.bind(var14)(var12);
                            case 87:
                                _closure3_slot4 = var7;
                                var12 = var10.performance;
                                var7 = var12.now;
                                var12 = var7.bind(var12)();
                                var13 = _closure3_slot0;
                                var7 = var13.dispatchOne;
                                var7 = var7.bind(var13)(var6);
                                var13 = var10.performance;
                                var7 = var13.now;
                                var7 = var7.bind(var13)();
                                var7 = var7 - var12;
                                _closure3_slot6 = var7;
                                var12 = var6.type;
                                var14 = _closure3_slot6;
                                var6 = _closure1_slot13;
                                var7 = var6[var12];
                                if (!(var4 == var7)) {
                                    _fun94675_ip = 177;
                                    continue _fun94675
                                }
                            case 167:
                                var7 = [0, 0];
                            case 177:
                                var6 = _closure1_slot5;
                                var7 = var6.bind(var0)(var7, var11);
                                var6 = var7[var5];
                                var13 = var7[var8];
                                var7 = _closure1_slot13;
                                var6 = var6 * var13;
                                var14 = var6 + var14;
                                var6 = var13 + var8;
                                var14 = var14 / var6;
                                var6 = new Array(2);
                                var6[0] = var14;
                                var13 = var13 + var8;
                                var6[1] = var13;
                                var7[var12] = var6;
                                var12 = _closure1_slot16;
                                var7 = _closure3_slot1;
                                var6 = _closure3_slot2;
                                var6 = var12.bind(var0)(var7, var3, var6);
                                var7 = _closure3_slot1;
                                if (var6) {
                                    _fun94675_ip = 281;
                                    continue _fun94675
                                }
                            case 261:
                                var9 = var3 + 1;
                                var6 = var7.length;
                                if (var9 < var6) {
                                    _fun94675_ip = 41;
                                    continue _fun94675
                                }
                            case 276:
                                _fun94675_ip = 405;
                                continue _fun94675;
                            case 281:
                                var6 = var7.slice;
                                var3 = var3 + var8;
                                var3 = var6.bind(var7)(var3);
                                _closure3_slot5 = var3;
                                var3 = _closure3_slot2;
                                var3 = var4 != var3;
                                if (!var3) {
                                    _fun94675_ip = 328;
                                    continue _fun94675
                                }
                            case 310:
                                var6 = _closure3_slot2;
                                var4 = var6.timeRemaining;
                                var4 = var4.bind(var6)();
                                var3 = var4 <= var5;
                            case 328:
                                if (!var3) {
                                    _fun94675_ip = 405;
                                    continue _fun94675
                                }
                            case 331:
                                var3 = _closure3_slot0;
                                var3 = var3.scheduler;
                                var5 = var3.telemetry;
                                var4 = var5.timeTrack;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 7;
                                var3 = var7[var3];
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.WorkSchedulerTelemetryTiming;
                                var3 = var3.TIME_OVER_DEADLINE;
                                var2 = _closure3_slot2;
                                var2 = var2.timeSinceExpiration;
                                var2 = var4.bind(var5)(var3, var2);
                            case 405:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 10;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.flush;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var4 = var5.bind(var10)(var4);
                    var4 = _closure3_slot4;
                    if (!var4) {
                        _fun94674_ip = 298;
                        continue _fun94674
                    }
                case 265:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var4 = var5.bind(var8)(var4);
                    var5 = var4.Emitter;
                    var4 = var5.resume;
                    var4 = var4.bind(var5)();
                case 298:
                    var4 = _closure3_slot5;
                    var4 = var4.length;
                    if (!(!(var4 > var7))) {
                        _fun94674_ip = 316;
                        continue _fun94674
                    }
                case 311: // try_end0
                    _fun94674_ip = 481;
                    continue _fun94674;
                case 316: // try_start_1
                    var4 = var0.scheduler;
                    var6 = var4.telemetry;
                    var5 = var6.measure;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var4.bind(var8)(var2);
                    var2 = var2.WorkSchedulerTelemetryMeasurement;
                    var4 = var2.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
                    var2 = _closure3_slot5;
                    var2 = var2.length;
                    var2 = var5.bind(var6)(var4, var2);
                    var5 = var0.queue;
                    var4 = var5.unshift;
                    var13 = _closure3_slot5;
                    var2 = new Array(0);
                    var14 = var2;
                    var12 = 0;
                    var6 = arraySpread(var14, var13, var12);
                    var14 = var4;
                    var13 = var2;
                    var12 = var5;
                    var2 = apply(var14, var13, var12);
                    var6 = var0.scheduler;
                    var5 = var6.requestWorkTimeout;
                    var4 = var0.flush;
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var2);
                case 446: // try_end1
                    return var1;
                case 448: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 4);
                    var2 = var0.socket;
                    var1 = var2.resetSocketOnDispatchError;
                    var0 = {};
                    var0.error = var4;
                    var3 = _closure3_slot3;
                    var0.action = var3;
                    var0 = var1.bind(var2)(var0);
                case 481:
                    var0 = true;
                    return var0;
                case 485:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'dispatchOne';
        var0.key = var5;
        var5 = function arg0() {
            _fun94676: for (var _fun94676_ip = 0;;) switch (_fun94676_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var11 = var0.data;
                    var13 = var0.type;
                    var10 = var0.compressionAnalytics;
                    var12 = var0.preloadedData;
                    var1 = global;
                    var3 = var1.performance;
                    var0 = var3.now;
                    var4 = var0.bind(var3)();
                    var0 = var2.socket;
                    var6 = var0.connectionState;
                    var8 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var7 = 8;
                    var5 = var0[var7];
                    var0 = undefined;
                    var5 = var8.bind(var0)(var5);
                    var5 = var5.RESUMING;
                    if (!(var6 === var5)) {
                        _fun94676_ip = 230;
                        continue _fun94676
                    }
                case 95:
                    var5 = var2.resumeAnalytics;
                    var5 = var5.lastUpdateTime;
                    var8 = var4 - var5;
                    var5 = var2.resumeAnalytics;
                    var6 = var5.numEvents;
                    var5 = 0;
                    if (!(var5 !== var6)) {
                        _fun94676_ip = 159;
                        continue _fun94676
                    }
                case 129:
                    var5 = var2.resumeAnalytics;
                    var5 = var5.largestWaitTime;
                    if (!(var8 > var5)) {
                        _fun94676_ip = 171;
                        continue _fun94676
                    }
                case 145:
                    var5 = var2.resumeAnalytics;
                    var5.largestWaitTime = var8;
                    _fun94676_ip = 171;
                    continue _fun94676;
                case 159:
                    var5 = var2.resumeAnalytics;
                    var5.initialWaitTime = var8;
                case 171:
                    var6 = var2.resumeAnalytics;
                    var5 = var6.totalWaitTime;
                    var5 = var5 + var8;
                    var6.totalWaitTime = var5;
                    var5 = var2.resumeAnalytics;
                    var5.lastUpdateTime = var4;
                    var6 = var2.resumeAnalytics;
                    var8 = var6.numEvents;
                    var5 = 1;
                    var5 = var8 + var5;
                    var6.numEvents = var5;
                case 230:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.flush;
                    var5 = var5.bind(var6)(var13, var11);
                    var5 = 'READY';
                    if (!(var5 !== var13)) {
                        _fun94676_ip = 429;
                        continue _fun94676
                    }
                case 273:
                    var5 = 'RESUMED';
                    if (!(var5 !== var13)) {
                        _fun94676_ip = 318;
                        continue _fun94676
                    }
                case 281:
                    var5 = var2.getDispatchHandler;
                    var6 = var5.bind(var2)(var13);
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun94676_ip = 537;
                        continue _fun94676
                    }
                case 301:
                    var5 = var6.dispatch;
                    var5 = var5.bind(var6)(var11, var13, var12);
                    _fun94676_ip = 537;
                    continue _fun94676;
                case 318:
                    var5 = var2.getDispatchHandler;
                    var6 = var5.bind(var2)(var13);
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun94676_ip = 347;
                        continue _fun94676
                    }
                case 335:
                    var5 = var6.dispatch;
                    var5 = var5.bind(var6)(var11, var13, var12);
                case 347:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var9 = var8[var5];
                    var15 = var6.bind(var0)(var9);
                    var14 = var15.logResumeAnalytics;
                    var9 = var2.resumeAnalytics;
                    var9 = var14.bind(var15)(var9);
                    var14 = var2.socket;
                    var9 = var14.handleResumeDispatched;
                    var9 = var9.bind(var14)();
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.createResumeAnalytics;
                    var5 = var5.bind(var6)();
                    var2.resumeAnalytics = var5;
                    _fun94676_ip = 537;
                    continue _fun94676;
                case 429:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 6;
                    var5 = var5[var8];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getReadyPayloadByteSizeAnalytics;
                    var9 = var5.bind(var6)(var11);
                    var5 = var2.getDispatchHandler;
                    var6 = var5.bind(var2)(var13);
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun94676_ip = 489;
                        continue _fun94676
                    }
                case 477:
                    var5 = var6.dispatch;
                    var5 = var5.bind(var6)(var11, var13, var12);
                case 489:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var6.bind(var0)(var5);
                    var6 = var8.logReadyPayloadReceived;
                    var20 = var2.socket;
                    var21 = var8;
                    var19 = var11;
                    var18 = var4;
                    var17 = var10;
                    var16 = var9;
                    var5 = var21[var6](var20, var19, var18, var17, var16, var15);
                case 537:
                    var5 = var2.socket;
                    var5 = var5.connectionState;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.RESUMING;
                    if (!(var5 === var3)) {
                        _fun94676_ip = 617;
                        continue _fun94676
                    }
                case 576:
                    var2 = var2.resumeAnalytics;
                    var3 = var2.dispatchTime;
                    var5 = var1.performance;
                    var1 = var5.now;
                    var1 = var1.bind(var5)();
                    var1 = var1 - var4;
                    var1 = var3 + var1;
                    var2.dispatchTime = var1;
                case 617:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = false;
            var0.paused = var1;
            var1 = var0.queue;
            var0 = 0;
            var1.length = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewaySocketDispatcher.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 57, 12426, 3, 12427, 12430, 12429, 12431, 566, 12432, 2]);