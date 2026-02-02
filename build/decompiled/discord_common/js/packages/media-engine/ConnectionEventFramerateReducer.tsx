// ../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.SpeakingFlags;
    var _closure1_slot4 = var6;
    var3 = var3.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Logger;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'ConnectionEventFramerateReducer';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            var5 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var6.bind(var0)(var2, var4);
            var2.connection = var5;
            var4 = arg1;
            var2.sinkWants = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun32715: for (var _fun32715_ip = 0;;) switch (_fun32715_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.connection;
                        var2 = var1.userId;
                        var1 = arg0;
                        if (!(var1 === var2)) {
                            _fun32715_ip = 60;
                            continue _fun32715
                        }
                    case 25:
                        var2 = _closure3_slot0;
                        var1 = var2.userSpeakingChange;
                        var0 = _closure1_slot4;
                        var3 = var0.NONE;
                        var0 = arg1;
                        var0 = var0 === var3;
                        var0 = var1.bind(var2)(var0);
                    case 60:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleSpeaking = var4;
            var3 = function(arg0) { // Environment: var3
                _fun32716: for (var _fun32716_ip = 0;;) switch (_fun32716_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.connection;
                        var1 = var2.hasDesktopSource;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun32716_ip = 65;
                            continue _fun32716
                        }
                    case 26:
                        var1 = _closure3_slot0;
                        var0 = var1.destroyFramerateScaleFactorTimers;
                        var0 = var0.bind(var1)();
                        var2 = var1.sinkWants;
                        var0 = arg0;
                        var2.isMuted = var0;
                        var0 = var1.updateRemoteWantsFramerate;
                        var0 = var0.bind(var1)();
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleSelfMute = var3;
            var6 = _closure1_slot6;
            var4 = var6.enableNativeLogger;
            var3 = true;
            var3 = var4.bind(var6)(var3);
            var8 = var5.on;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var4 = var6[var1];
            var4 = var3.bind(var0)(var4);
            var4 = var4.BaseConnectionEvent;
            var7 = var4.Speaking;
            var4 = var2.handleSpeaking;
            var4 = var8.bind(var5)(var7, var4);
            var4 = var5.on;
            var1 = var6[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var3 = var1.Mute;
            var1 = var2.handleSelfMute;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() {
            var2 = this;
            var1 = var2.userSpeakingChange;
            var0 = true;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'userSpeakingChange';
        var0.key = var5;
        var5 = function arg0() {
            _fun32718: for (var _fun32718_ip = 0;;) switch (_fun32718_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1.connection;
                    var2 = var3.hasDesktopSource;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun32718_ip = 119;
                        continue _fun32718
                    }
                case 28:
                    var2 = var1.destroyFramerateScaleFactorTimers;
                    var2 = var2.bind(var1)();
                    var2 = arg0;
                    if (var2) {
                        _fun32718_ip = 85;
                        continue _fun32718
                    }
                case 44:
                    var2 = var1.sinkWants;
                    var2 = var2.isMuted;
                    if (!var2) {
                        _fun32718_ip = 119;
                        continue _fun32718
                    }
                case 59:
                    var3 = var1.sinkWants;
                    var2 = false;
                    var3.isMuted = var2;
                    var2 = var1.updateRemoteWantsFramerate;
                    var2 = var2.bind(var1)();
                    _fun32718_ip = 119;
                    continue _fun32718;
                case 85:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var0 = function() { // Environment: var0
                        _fun32719: for (var _fun32719_ip = 0;;) switch (_fun32719_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.connection;
                                var1 = var1.destroyed;
                                if (var1) {
                                    _fun32719_ip = 111;
                                    continue _fun32719
                                }
                            case 22:
                                var3 = _closure1_slot6;
                                var2 = var3.info;
                                var6 = _closure1_slot5;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var4 = 'BaseConnection.userSpeakingChange: Reduced framerate after ';
                                var1 = ' ms.';
                                var1 = var5.bind(var4)(var6, var1);
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1.framerateReductionTimeout = var0;
                                var2 = var1.sinkWants;
                                var0 = true;
                                var2.isMuted = var0;
                                var0 = var1.updateRemoteWantsFramerate;
                                var0 = var0.bind(var1)();
                            case 111:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var4.bind(var2)(var0, var3);
                    var1.framerateReductionTimeout = var0;
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'destroyFramerateScaleFactorTimers';
        var0.key = var5;
        var5 = function() {
            _fun32720: for (var _fun32720_ip = 0;;) switch (_fun32720_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.framerateReductionTimeout;
                    var2 = 'number';
                    var0 = typeof var0;
                    if (!(var2 === var0)) {
                        _fun32720_ip = 47;
                        continue _fun32720
                    }
                case 20:
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var2 = var1.framerateReductionTimeout;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1.framerateReductionTimeout = var0;
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updateRemoteWantsFramerate';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.connection;
            var1 = var2.updateVideoQuality;
            var0 = ['remoteSinkWantsMaxFramerate'];
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = var1.destroyFramerateScaleFactorTimers;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3471, 4, 3594, 2]);