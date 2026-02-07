// lib/VideoHealthManager.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoToggleState;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1, arg2, arg3() {
            var6 = arg0;
            var11 = arg3;
            var4 = this;
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var3.bind(var0)(var4, var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var1 = var3.prototype;
            var2 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var18 = 'VideoHealthManager';
            var19 = var2;
            var1 = new var19[var3](var18, var17);
            var1 = var1 instanceof Object ? var1 : var2;
            var4.logger = var1;
            var1 = false;
            var4.disabled = var1;
            var1 = {};
            var4.perUserFpsWindow = var1;
            var1 = {};
            var4.prevFramesCodec = var1;
            var1 = {};
            var4.prevTimestamp = var1;
            var1 = global;
            var2 = var1.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var19 = var3;
            var2 = new var19[var2](var18);
            var2 = var2 instanceof Object ? var2 : var3;
            var4.streamDisabledUsers = var2;
            var2 = {};
            var4.retryBackoffCache = var2;
            var2 = {};
            var4.timeoutIdCache = var2;
            var2 = {};
            var4.currentVideoAutoToggleState = var2;
            var2 = new Array(0);
            var4.enableQueue = var2;
            var4.windowLength = var6;
            var2 = arg2;
            var4.fpsThreshold = var2;
            var5 = var1.Math;
            var3 = var5.ceil;
            var2 = arg1;
            var2 = var6 * var2;
            var2 = var3.bind(var5)(var2);
            var4.fpsWindowBorderlineCount = var2;
            var4.backoffTimeSec = var11;
            var3 = var4.logger;
            var2 = var3.info;
            var18 = var4.windowLength;
            var16 = var4.fpsWindowBorderlineCount;
            var14 = var4.fpsThreshold;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var19 = 'constructor with windowLength = ';
            var17 = ',\n      fpsWindowBorderlineCount = ';
            var15 = ',\n      fpsThreshold = ';
            var13 = ',\n      backoffTimeSec = ';
            var12 = var11;
            var1 = var19[var7](var18, var17, var16, var15, var14, var13, var12, var11);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'calculateFps';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun94487: for (var _fun94487_ip = 0;;) switch (_fun94487_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arg1;
                    var3 = arg2;
                    var0 = this;
                    var1 = var0.prevFramesCodec;
                    var5 = var1[var2];
                    var1 = -1;
                    if (!(var1 !== var5)) {
                        _fun94487_ip = 199;
                        continue _fun94487
                    }
                case 35:
                    var1 = var0.prevFramesCodec;
                    var1 = var1[var2];
                    if (!(!(var4 < var1))) {
                        _fun94487_ip = 199;
                        continue _fun94487
                    }
                case 52:
                    var1 = var0.prevTimestamp;
                    var1 = var1[var2];
                    if (!(!(var3 < var1))) {
                        _fun94487_ip = 199;
                        continue _fun94487
                    }
                case 69:
                    var1 = var0.prevTimestamp;
                    var5 = var1[var2];
                    var6 = var0.windowLength;
                    var1 = 1000;
                    var1 = var1 * var6;
                    var1 = var5 + var1;
                    if (!(!(var3 > var1))) {
                        _fun94487_ip = 199;
                        continue _fun94487
                    }
                case 103:
                    var1 = var0.prevTimestamp;
                    var5 = var1[var2];
                    var1 = 900;
                    var1 = var5 + var1;
                    if (!(!(var3 < var1))) {
                        _fun94487_ip = 189;
                        continue _fun94487
                    }
                case 127:
                    var5 = var0.elapsedSeconds;
                    var1 = var0.prevTimestamp;
                    var1 = var1[var2];
                    var5 = var5.bind(var0)(var3, var1);
                    var1 = var0.prevTimestamp;
                    var1[var2] = var3;
                    var1 = var0.prevFramesCodec;
                    var1 = var1[var2];
                    var1 = var4 - var1;
                    var1 = var1 / var5;
                    var5 = var0.prevFramesCodec;
                    var5[var2] = var4;
                    return var1;
                case 189:
                    var1 = global;
                    var1 = var1.NaN;
                    return var1;
                case 199:
                    var1 = var0.prevFramesCodec;
                    var1[var2] = var4;
                    var1 = var0.prevTimestamp;
                    var1[var2] = var3;
                    var1 = var0.perUserFpsWindow;
                    var0 = new Array(0);
                    var1[var2] = var0;
                    var0 = global;
                    var0 = var0.NaN;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(12);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateFps';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun94488: for (var _fun94488_ip = 0;;) switch (_fun94488_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.disabled;
                    if (var0) {
                        _fun94488_ip = 534;
                        continue _fun94488
                    }
                case 23:
                    var4 = var1.streamDisabledUsers;
                    var0 = var4.has;
                    var0 = var0.bind(var4)(var2);
                    if (var0) {
                        _fun94488_ip = 534;
                        continue _fun94488
                    }
                case 45:
                    var5 = var1.calculateFps;
                    var4 = arg1;
                    var0 = arg2;
                    var6 = var5.bind(var1)(var2, var4, var0);
                    var0 = 0;
                    if (!(!(var6 < var0))) {
                        _fun94488_ip = 530;
                        continue _fun94488
                    }
                case 75:
                    var0 = global;
                    var5 = var0.Number;
                    var4 = var5.isFinite;
                    var4 = var4.bind(var5)(var6);
                    if (!var4) {
                        _fun94488_ip = 530;
                        continue _fun94488
                    }
                case 100:
                    var4 = var1.perUserFpsWindow;
                    var5 = var4[var2];
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var6);
                    var4 = var1.perUserFpsWindow;
                    var4 = var4[var2];
                    var5 = var4.length;
                    var4 = var1.windowLength;
                    if (!(!(var5 < var4))) {
                        _fun94488_ip = 526;
                        continue _fun94488
                    }
                case 148:
                    var4 = var1.perUserFpsWindow;
                    var4 = var4[var2];
                    var5 = var4.length;
                    var4 = var1.windowLength;
                    if (!(var5 > var4)) {
                        _fun94488_ip = 193;
                        continue _fun94488
                    }
                case 173:
                    var4 = var1.perUserFpsWindow;
                    var5 = var4[var2];
                    var4 = var5.shift;
                    var4 = var4.bind(var5)();
                case 193:
                    var4 = var1.perUserFpsWindow;
                    var5 = var4[var2];
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var3
                        var0 = _closure3_slot0;
                        var1 = var0.fpsThreshold;
                        var0 = arg0;
                        var0 = var0 < var1;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.length;
                    var3 = var1.fpsWindowBorderlineCount;
                    if (!(!(var4 >= var3))) {
                        _fun94488_ip = 366;
                        continue _fun94488
                    }
                case 238:
                    var3 = var1.currentVideoAutoToggleState;
                    var5 = var3[var2];
                    var3 = _closure1_slot5;
                    var3 = var3.AUTO_PROBING;
                    if (!(var5 === var3)) {
                        _fun94488_ip = 496;
                        continue _fun94488
                    }
                case 268:
                    var6 = var1.currentVideoAutoToggleState;
                    var3 = _closure1_slot5;
                    var5 = var3.AUTO_ENABLED;
                    var6[var2] = var5;
                    var7 = var1.logger;
                    var6 = var7.info;
                    var5 = var0.HermesInternal;
                    var8 = var5.concat;
                    var5 = 'acceptable conditions reached, will reset and send a AUTO_ENABLED for user ';
                    var5 = var8.bind(var5)(var2);
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 4;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var3 = var3.AUTO_ENABLED;
                    var3 = var4.bind(var5)(var2, var3);
                    _fun94488_ip = 496;
                    continue _fun94488;
                case 366:
                    var4 = var1.logger;
                    var3 = var4.info;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = ': detected poor network quality, turning off video';
                    var0 = var6.bind(var5)(var2, var0);
                    var0 = var3.bind(var4)(var0);
                    var3 = var1.streamDisabledUsers;
                    var0 = var3.add;
                    var0 = var0.bind(var3)(var2);
                    var5 = var1.currentVideoAutoToggleState;
                    var0 = _closure1_slot5;
                    var4 = var0.DISABLED;
                    var5[var2] = var4;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var0 = var0.DISABLED;
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = var1.startReenableBackoffTimer;
                    var0 = var0.bind(var1)(var2);
                case 496:
                    var0 = var1.probingUserId;
                    if (!(var0 === var2)) {
                        _fun94488_ip = 534;
                        continue _fun94488
                    }
                case 506:
                    var0 = undefined;
                    var1.probingUserId = var0;
                    var0 = var1.tryReenableQueue;
                    var0 = var0.bind(var1)();
                    _fun94488_ip = 534;
                    continue _fun94488;
                case 526:
                    var0 = undefined;
                    return var0;
                case 530:
                    var0 = undefined;
                    return var0;
                case 534:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'startReenableBackoffTimer';
        var0.key = var5;
        var5 = function arg0() {
            _fun94490: for (var _fun94490_ip = 0;;) switch (_fun94490_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var2;
                    var3 = var1.disabled;
                    if (var3) {
                        _fun94490_ip = 357;
                        continue _fun94490
                    }
                case 27:
                    var6 = var1.logger;
                    var5 = var6.info;
                    var3 = global;
                    var4 = var3.HermesInternal;
                    var7 = var4.concat;
                    var4 = 'startReenableBackoffTimer for user ';
                    var4 = var7.bind(var4)(var2);
                    var4 = var5.bind(var6)(var4);
                    var4 = var1.retryBackoffCache;
                    var4 = var4[var2];
                    var9 = var4.lastBackoffTime;
                    var5 = var4.expBackoffFactor;
                    var6 = 1;
                    var4 = null;
                    var7 = var6;
                    if (!(var4 !== var9)) {
                        _fun94490_ip = 184;
                        continue _fun94490
                    }
                case 102:
                    var4 = 16;
                    var4 = var5 > var4;
                    var7 = var6;
                    if (var4) {
                        _fun94490_ip = 184;
                        continue _fun94490
                    }
                case 115:
                    var8 = var1.elapsedSeconds;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var10 = var10[var4];
                    var4 = undefined;
                    var10 = var11.bind(var4)(var10);
                    var4 = var10.now;
                    var4 = var4.bind(var10)();
                    var8 = var8.bind(var1)(var4, var9);
                    var4 = 600;
                    var4 = var8 > var4;
                    var7 = var6;
                    if (var4) {
                        _fun94490_ip = 184;
                        continue _fun94490
                    }
                case 177:
                    var4 = 2;
                    var7 = var5 * var4;
                case 184:
                    var9 = var1.retryBackoffCache;
                    var6 = {};
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var10 = var8[var5];
                    var5 = undefined;
                    var11 = var11.bind(var5)(var10);
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var6.lastBackoffTime = var10;
                    var6.expBackoffFactor = var7;
                    var9[var2] = var6;
                    var6 = var1.backoffTimeSec;
                    var6 = var7 * var6;
                    var7 = _closure1_slot1;
                    var4 = 6;
                    var4 = var8[var4];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.Millis;
                    var4 = var4.SECOND;
                    var4 = var6 * var4;
                    var8 = var1.logger;
                    var7 = var8.info;
                    var6 = var3.HermesInternal;
                    var10 = var6.concat;
                    var9 = 'starting backoff timer with time = ';
                    var6 = ' milliseconds';
                    var6 = var10.bind(var9)(var4, var6);
                    var6 = var7.bind(var8)(var6);
                    var1 = var1.timeoutIdCache;
                    var3 = var3.setTimeout;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.queueReenable;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var3.bind(var5)(var0, var4);
                    var1[var2] = var0;
                case 357:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'queueReenable';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var3 = var1.enableQueue;
            var2 = var3.push;
            var0 = arg0;
            var0 = var2.bind(var3)(var0);
            var0 = var1.tryReenableQueue;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'tryReenableQueue';
        var0.key = var5;
        var5 = function() {
            _fun94493: for (var _fun94493_ip = 0;;) switch (_fun94493_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.disabled;
                    if (var0) {
                        _fun94493_ip = 94;
                        continue _fun94493
                    }
                case 11:
                    var0 = var3.probingUserId;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun94493_ip = 42;
                        continue _fun94493
                    }
                case 23:
                    var1 = var3.probingUserId;
                    var0 = var3.perUserFpsWindow;
                    var0 = var1 in var0;
                    if (var0) {
                        _fun94493_ip = 94;
                        continue _fun94493
                    }
                case 42:
                    var1 = var3.enableQueue;
                    var0 = var1.shift;
                    var1 = var0.bind(var1)();
                    if (!(var2 != var1)) {
                        _fun94493_ip = 94;
                        continue _fun94493
                    }
                case 62:
                    var0 = var3.reenableVideo;
                    var0 = var0.bind(var3)(var1);
                    if (var0) {
                        _fun94493_ip = 94;
                        continue _fun94493
                    }
                case 76:
                    if (!(var2 != var1)) {
                        _fun94493_ip = 94;
                        continue _fun94493
                    }
                case 80:
                    var0 = var3.reenableVideo;
                    var0 = var0.bind(var3)(var1);
                    if (!var0) {
                        _fun94493_ip = 76;
                        continue _fun94493
                    }
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'reenableVideo';
        var0.key = var5;
        var5 = function arg0() {
            _fun94494: for (var _fun94494_ip = 0;;) switch (_fun94494_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var0 = var5.perUserFpsWindow;
                    var0 = var4 in var0;
                    if (!var0) {
                        _fun94494_ip = 174;
                        continue _fun94494
                    }
                case 22:
                    var8 = var5.logger;
                    var7 = var8.info;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var1 = var6[var1];
                    var3 = undefined;
                    var9 = var9.bind(var3)(var1);
                    var1 = var9.now;
                    var11 = var1.bind(var9)();
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var9 = 'reenableVideo called for user ';
                    var1 = ' - time = ';
                    var1 = var10.bind(var9)(var4, var1, var11);
                    var1 = var7.bind(var8)(var1);
                    var1 = var5.stateCleanupBeforeEnable;
                    var1 = var1.bind(var5)(var4);
                    var8 = var5.currentVideoAutoToggleState;
                    var1 = _closure1_slot5;
                    var7 = var1.AUTO_PROBING;
                    var8[var4] = var7;
                    var5.probingUserId = var4;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var1 = var1.AUTO_PROBING;
                    var1 = var2.bind(var3)(var4, var1);
                    var0 = true;
                case 174:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'elapsedSeconds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = arg0;
            var0 = arg1;
            var1 = var1 - var0;
            var0 = 1000;
            var0 = var1 / var0;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'stateCleanupBeforeEnable';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var0 = this;
            var4 = var0.logger;
            var3 = var4.info;
            var1 = 'VideoHealthManager::stateCleanupBeforeEnable';
            var1 = var3.bind(var4)(var1);
            var3 = var0.perUserFpsWindow;
            var1 = new Array(0);
            var3[var2] = var1;
            var3 = var0.prevFramesCodec;
            var1 = -1;
            var3[var2] = var1;
            var1 = var0.streamDisabledUsers;
            var0 = var1.delete;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getCurrentVideoToggleState';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.currentVideoAutoToggleState;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'createUser';
        var0.key = var5;
        var5 = function arg0() {
            _fun94498: for (var _fun94498_ip = 0;;) switch (_fun94498_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var4 = var0.logger;
                    var3 = var4.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'VideoHealthManager::createUser ';
                    var1 = var5.bind(var1)(var2);
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.perUserFpsWindow;
                    var1 = var2 in var1;
                    if (var1) {
                        _fun94498_ip = 137;
                        continue _fun94498
                    }
                case 60:
                    var3 = var0.perUserFpsWindow;
                    var1 = new Array(0);
                    var3[var2] = var1;
                    var3 = var0.prevFramesCodec;
                    var1 = -1;
                    var3[var2] = var1;
                    var3 = var0.currentVideoAutoToggleState;
                    var1 = _closure1_slot5;
                    var1 = var1.NONE;
                    var3[var2] = var1;
                    var1 = var0.retryBackoffCache;
                    var0 = {
                        'lastBackoffTime': null,
                        'expBackoffFactor': 1
                    };
                    var1[var2] = var0;
                case 137:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'deleteUser';
        var0.key = var5;
        var5 = function arg0() {
            _fun94499: for (var _fun94499_ip = 0;;) switch (_fun94499_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var5 = var1.logger;
                    var4 = var5.info;
                    var0 = global;
                    var3 = var0.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'VideoHealthManager::deleteUser ';
                    var3 = var6.bind(var3)(var2);
                    var3 = var4.bind(var5)(var3);
                    var3 = var1.perUserFpsWindow;
                    var3 = delete var3[var2];
                    var3 = var1.prevFramesCodec;
                    var3 = delete var3[var2];
                    var3 = var1.retryBackoffCache;
                    var3 = delete var3[var2];
                    var3 = var1.currentVideoAutoToggleState;
                    var3 = delete var3[var2];
                    var4 = var1.streamDisabledUsers;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var2);
                    var3 = var1.probingUserId;
                    if (!(var2 === var3)) {
                        _fun94499_ip = 131;
                        continue _fun94499
                    }
                case 113:
                    var3 = undefined;
                    var1.probingUserId = var3;
                    var3 = var1.tryReenableQueue;
                    var3 = var3.bind(var1)();
                case 131:
                    var4 = var0.clearTimeout;
                    var0 = var1.timeoutIdCache;
                    var3 = var0[var2];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var1 = var1.timeoutIdCache;
                    var1 = delete var1[var2];
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'disable';
        var0.key = var5;
        var4 = function() {
            _fun94500: for (var _fun94500_ip = 0;;) switch (_fun94500_ip) {
                case 0:
                    var5 = this;
                    var0 = true;
                    var5.disabled = var0;
                    var3 = var5.perUserFpsWindow;
                    for (var0 in var3)
                        case 25: {
                            case 34: var7 = var0;
                            var6 = var5.deleteUser;
                            var6 = var6.bind(var5)(var7);
                            _fun94500_ip = 25;
                            continue _fun94500;
                        }
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[11] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = {
        'featureEnabled': null,
        'windowLength': 5,
        'allowedPoorFpsRatio': 1,
        'fpsThreshold': 5,
        'backoffTimeSec': 15
    };
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.isMobile;
    var3.featureEnabled = var6;
    var1.defaultConfig = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/VideoHealthManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.VideoHealthManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 3, 12339, 3530, 667, 3361, 2]);