// lib/MuteTimers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2.timers = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = global;
            var3 = var0.Object;
            var2 = var3.values;
            var0 = var1.timers;
            var3 = var2.bind(var3)(var0);
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var0 = {};
            var1.timers = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'setTimer';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun24887: for (var _fun24887_ip = 0;;) switch (_fun24887_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun24887_ip = 176;
                        continue _fun24887
                    }
                case 15:
                    if (!(var0 != var2)) {
                        _fun24887_ip = 172;
                        continue _fun24887
                    }
                case 22:
                    var1 = var2.end_time;
                    var1 = var0 == var1;
                    var8 = null;
                    if (var1) {
                        _fun24887_ip = 100;
                        continue _fun24887
                    }
                case 37:
                    var1 = global;
                    var5 = var1.Date;
                    var10 = var2.end_time;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var11 = var3;
                    var2 = new var11[var5](var10, var9);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.getTime;
                    var2 = var2.bind(var3)();
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var8 = var2 - var1;
                case 100:
                    var0 = var0 != var8;
                    if (!var0) {
                        _fun24887_ip = 170;
                        continue _fun24887
                    }
                case 107:
                    var6 = 0;
                    var1 = var8 <= var6;
                    if (var1) {
                        _fun24887_ip = 167;
                        continue _fun24887
                    }
                case 116:
                    var2 = this;
                    var3 = var2.timers;
                    var2 = global;
                    var7 = var2.setTimeout;
                    var5 = var2.Math;
                    var2 = var5.max;
                    var6 = var2.bind(var5)(var6, var8);
                    var5 = undefined;
                    var2 = arg2;
                    var2 = var7.bind(var5)(var2, var6);
                    var3[var4] = var2;
                    var1 = false;
                case 167:
                    var0 = var1;
                case 170:
                    return var0;
                case 172:
                    var0 = false;
                    return var0;
                case 176:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'clearTimer';
        var0.key = var5;
        var4 = function arg0() {
            _fun24888: for (var _fun24888_ip = 0;;) switch (_fun24888_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = null;
                    var2 = var2 != var1;
                    if (!var2) {
                        _fun24888_ip = 25;
                        continue _fun24888
                    }
                case 15:
                    var3 = var0.timers;
                    var2 = var1 in var3;
                case 25:
                    if (!var2) {
                        _fun24888_ip = 63;
                        continue _fun24888
                    }
                case 28:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = var0.timers;
                    var3 = var2[var1];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var0 = var0.timers;
                    var0 = delete var0[var1];
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/MuteTimers.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun24889: for (var _fun24889_ip = 0;;) switch (_fun24889_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.muted;
                var3 = var1.mute_config;
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun24889_ip = 113;
                    continue _fun24889
                }
            case 24:
                var4 = null;
                var1 = var4 == var3;
                if (var1) {
                    _fun24889_ip = 43;
                    continue _fun24889
                }
            case 33:
                var2 = var3.end_time;
                var1 = var4 == var2;
            case 43:
                if (var1) {
                    _fun24889_ip = 110;
                    continue _fun24889
                }
            case 46:
                var2 = global;
                var5 = var2.Date;
                var6 = var3.end_time;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 >= var2;
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var2.computeIsMuted = var3;
    var1 = function arg0() {
        _fun24890: for (var _fun24890_ip = 0;;) switch (_fun24890_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.muted;
                var2 = var1.mute_config;
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun24890_ip = 30;
                    continue _fun24890
                }
            case 24:
                var1 = null;
                var0 = var1 != var2;
            case 30:
                if (!var0) {
                    _fun24890_ip = 45;
                    continue _fun24890
                }
            case 33:
                var3 = var2.end_time;
                var1 = null;
                var0 = var1 != var3;
            case 45:
                if (!var0) {
                    _fun24890_ip = 112;
                    continue _fun24890
                }
            case 48:
                var1 = global;
                var4 = var1.Date;
                var5 = var2.end_time;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var0 = var2 >= var1;
            case 112:
                return var0;
        }
    };
    var2.isTemporarilyMuted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);