// modules/video-qoe/SimpleMuxWrapper.tsx
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
    var7 = var3.Logger;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'SimpleMuxWrapper';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var1 = arg0;
            var2 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = false;
            var2.isMonitoring = var4;
            var2.config = var1;
            var4 = var1.videoElement;
            var2.videoElement = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var4 = var3.SessionManager;
            var3 = var4.generateSessionId;
            var3 = var3.bind(var4)();
            var2.sessionId = var3;
            var1 = var1.hlsInstance;
            var2.hlsInstance = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() {
            _fun83024: for (var _fun83024_ip = 0;;) switch (_fun83024_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var5 = {
                        'debug': null,
                        'disableCookies': true,
                        'respectDoNotTrack': true
                    };
                    var1 = var2.config;
                    var3 = var1.debug;
                    var6 = null;
                    var1 = var6 != var3;
                    if (!var1) {
                        _fun83024_ip = 44;
                        continue _fun83024
                    }
                case 41:
                    var1 = var3;
                case 44:
                    var5.debug = var1;
                    var3 = true;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var10 = var7.MuxIntegration;
                    var9 = var10.mapDiscordToMuxMetadata;
                    var8 = var2.config;
                    var7 = var2.sessionId;
                    var7 = var9.bind(var10)(var8, var7);
                    var5.data = var7;
                    var4 = var5;
                    var5 = var2.hlsInstance;
                    if (!(var6 != var5)) {
                        _fun83024_ip = 155;
                        continue _fun83024
                    }
                case 123:
                    var6 = var4;
                    var5 = var2.hlsInstance;
                    var6.hlsjs = var5;
                    var5 = var2.hlsInstance;
                    var5 = var5.constructor;
                    var6.Hls = var5;
                case 155: // try_start_0
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.monitor;
                    var5 = var2.videoElement;
                    var4 = var6.bind(var7)(var5, var4);
                    var2.isMonitoring = var3;
                case 199: // try_end0
                    _fun83024_ip = 232;
                    continue _fun83024;
                case 201: // catch_target0
                    CatchBlockStart(arg_register = 5);
                    var4 = _closure1_slot5;
                    var3 = var4.error;
                    var1 = 'Error creating Mux monitor';
                    var1 = var3.bind(var4)(var1, var5);
                    var1 = false;
                    var2.isMonitoring = var1;
                case 232:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'endSession';
        var0.key = var5;
        var5 = function() {
            _fun83025: for (var _fun83025_ip = 0;;) switch (_fun83025_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isMonitoring;
                    if (!var0) {
                        _fun83025_ip = 124;
                        continue _fun83025
                    }
                case 12: // try_start_0
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 5;
                    var2 = var2[var4];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.destroyMonitor;
                    var5 = 'function';
                    var2 = typeof var2;
                    if (!(var5 === var2)) {
                        _fun83025_ip = 88;
                        continue _fun83025
                    }
                case 54:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.destroyMonitor;
                    var0 = var1.videoElement;
                    var0 = var2.bind(var3)(var0);
                case 88:
                    var0 = false;
                    var1.isMonitoring = var0;
                case 96: // try_end0
                    _fun83025_ip = 124;
                    continue _fun83025;
                case 98: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error ending Mux session';
                    var0 = var1.bind(var2)(var0, var3);
                case 124:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() {
            _fun83026: for (var _fun83026_ip = 0;;) switch (_fun83026_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isMonitoring;
                    if (!var0) {
                        _fun83026_ip = 124;
                        continue _fun83026
                    }
                case 12: // try_start_0
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 5;
                    var2 = var2[var4];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.destroyMonitor;
                    var5 = 'function';
                    var2 = typeof var2;
                    if (!(var5 === var2)) {
                        _fun83026_ip = 88;
                        continue _fun83026
                    }
                case 54:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.destroyMonitor;
                    var0 = var1.videoElement;
                    var0 = var2.bind(var3)(var0);
                case 88:
                    var0 = false;
                    var1.isMonitoring = var0;
                case 96: // try_end0
                    _fun83026_ip = 124;
                    continue _fun83026;
                case 98: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error destroying Mux monitor';
                    var0 = var1.bind(var2)(var0, var3);
                case 124:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSessionId';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0.sessionId;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video-qoe/SimpleMuxWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SimpleMuxWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 10635, 10636, 10637, 2]);