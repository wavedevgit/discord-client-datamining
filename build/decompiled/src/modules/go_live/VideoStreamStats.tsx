// modules/go_live/VideoStreamStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun32220: for (var _fun32220_ip = 0;;) switch (_fun32220_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun32220_ip = 14;
                    continue _fun32220
                }
            case 12:
                var0 = 0;
            case 14:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun32220_ip = 38;
                    continue _fun32220
                }
            case 20:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.round;
                var0 = var1.bind(var2)(var3);
            case 38:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StreamLayouts;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = 0;
            var2._targetResolution = var4;
            var2._targetFPS = var4;
            var5 = false;
            var2._streamSettingsChanged = var5;
            var2._lastLayoutChanged = var4;
            var2._layoutChanges = var4;
            var2._automaticQualityChanges = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun32223: for (var _fun32223_ip = 0;;) switch (_fun32223_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1._layoutBuckets;
                        var3 = var1[var2];
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun32223_ip = 42;
                            continue _fun32223
                        }
                    case 26:
                        var1 = _closure3_slot0;
                        var3 = var1._layoutBuckets;
                        var1 = 0;
                        var3[var2] = var1;
                    case 42:
                        var0 = _closure3_slot0;
                        var1 = var0._layoutBuckets;
                        var3 = var1[var2];
                        var0 = arg1;
                        var0 = var3 + var0;
                        var1[var2] = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var2._incrementLayout = var4;
            var3 = function() { // Environment: var3
                _fun32224: for (var _fun32224_ip = 0;;) switch (_fun32224_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = var1.getState;
                        var0 = var0.bind(var1)();
                        var4 = var0.resolution;
                        var3 = var0.fps;
                        var1 = _closure3_slot0;
                        var0 = var1._targetResolution;
                        var0 = var4 !== var0;
                        if (var0) {
                            _fun32224_ip = 63;
                            continue _fun32224
                        }
                    case 49:
                        var2 = _closure3_slot0;
                        var2 = var2._targetFPS;
                        var0 = var3 !== var2;
                    case 63:
                        var1._streamSettingsChanged = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var2._sampleStats = var3;
            var3 = arg1;
            var2._isSender = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.Interval;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._statInterval = var1;
            var1 = arg0;
            var2._lastLayout = var1;
            var1 = {};
            var2._layoutBuckets = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var3 = var1.resolution;
            var1 = var1.fps;
            var2._targetResolution = var3;
            var2._targetFPS = var1;
            var5 = var2._statInterval;
            var4 = var5.start;
            var3 = var2._sampleStats;
            var1 = 1000;
            var1 = var4.bind(var5)(var1, var3);
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var1);
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2._lastLayoutChanged = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            var4 = this;
            var1 = var4._statInterval;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.now;
            var1 = var1.bind(var2)();
            var4._streamEnd = var1;
            var3 = var4._incrementLayout;
            var2 = var4._lastLayout;
            var5 = var4._streamEnd;
            var1 = var4._lastLayoutChanged;
            var5 = var5 - var1;
            var1 = 1000;
            var1 = var5 / var1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'autoQualityChange';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var2 = var1._automaticQualityChanges;
            var0 = 1;
            var0 = var2 + var0;
            var1._automaticQualityChanges = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'layoutChange';
        var0.key = var5;
        var5 = function arg0() {
            _fun32228: for (var _fun32228_ip = 0;;) switch (_fun32228_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._lastLayout;
                    if (!(var2 !== var0)) {
                        _fun32228_ip = 127;
                        continue _fun32228
                    }
                case 16:
                    var3 = var1._streamEnd;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun32228_ip = 127;
                        continue _fun32228
                    }
                case 28:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 5;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var5 = var1._incrementLayout;
                    var4 = var1._lastLayout;
                    var3 = var1._lastLayoutChanged;
                    var6 = var0 - var3;
                    var3 = 1000;
                    var3 = var6 / var3;
                    var3 = var5.bind(var1)(var4, var3);
                    var3 = var1._layoutChanges;
                    var3 = var3 + 1;
                    var1._layoutChanges = var3;
                    var1._lastLayout = var2;
                    var1._lastLayoutChanged = var0;
                case 127:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getLayout';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._lastLayout;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getStats';
        var0.key = var5;
        var4 = function() {
            _fun32230: for (var _fun32230_ip = 0;;) switch (_fun32230_ip) {
                case 0:
                    var2 = this;
                    var3 = {};
                    var0 = var2._layoutChanges;
                    var3.num_layout_changes = var0;
                    var4 = _closure1_slot6;
                    var5 = var2._layoutBuckets;
                    var0 = _closure1_slot5;
                    var1 = var0.FULL_SCREEN;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_fullscreen = var5;
                    var6 = var2._layoutBuckets;
                    var5 = var0.THEATRE;
                    var5 = var6[var5];
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_theatre = var5;
                    var6 = var2._layoutBuckets;
                    var5 = var0.PIP;
                    var5 = var6[var5];
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_pip = var5;
                    var6 = var2._layoutBuckets;
                    var5 = var0.POPOUT;
                    var5 = var6[var5];
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_popout = var5;
                    var6 = var2._layoutBuckets;
                    var5 = var0.PORTRAIT;
                    var5 = var6[var5];
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_portrait = var5;
                    var6 = var2._layoutBuckets;
                    var5 = var0.LANDSCAPE;
                    var5 = var6[var5];
                    var5 = var4.bind(var1)(var5);
                    var3.duration_layout_landscape = var5;
                    var5 = var2._layoutBuckets;
                    var0 = var0.MINIMIZED;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var3.duration_layout_minimized = var0;
                    var1 = var2._isSender;
                    var0 = var3;
                    if (!var1) {
                        _fun32230_ip = 322;
                        continue _fun32230
                    }
                case 239:
                    var1 = {};
                    var8 = var1;
                    var7 = var3;
                    var3 = copyDataProperties(var8, var7);
                    var4 = var2._targetFPS;
                    var3 = 'target_fps';
                    var1[var3] = var4;
                    var4 = var2._targetResolution;
                    var3 = 'target_resolution_height';
                    var1[var3] = var4;
                    var4 = var2._streamSettingsChanged;
                    var3 = 'stream_settings_changed';
                    var1[var3] = var4;
                    var3 = var2._automaticQualityChanges;
                    var2 = 'num_auto_quality_changes';
                    var1[var2] = var3;
                    var0 = var1;
                case 322:
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/VideoStreamStats.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3625, 660, 3631, 3530, 2]);