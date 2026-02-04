// ../discord_common/js/packages/media-engine/native/Devices.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1() {
        _fun32418: for (var _fun32418_ip = 0;;) switch (_fun32418_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var3;
                var0 = false;
                var _closure2_slot1 = var0;
                var1 = var4.map;
                var0 = function(arg0, arg1) { // Environment: var2
                    _fun32419: for (var _fun32419_ip = 0;;) switch (_fun32419_ip) {
                        case 0:
                            var1 = arg0;
                            var8 = arg1;
                            var7 = var1.guid;
                            var5 = var1.guid;
                            var16 = var1.name;
                            var6 = var1.name;
                            var0 = var1.index;
                            var4 = var1.facing;
                            var3 = var1.hardwareId;
                            var2 = var1.containerId;
                            var1 = var1.effects;
                            var12 = _closure2_slot0;
                            var10 = _closure1_slot4;
                            var10 = var10.VIDEO_INPUT;
                            if (!(var12 === var10)) {
                                _fun32419_ip = 108;
                                continue _fun32419
                            }
                        case 81:
                            var12 = /^front/i;
                            var10 = var12.test;
                            var10 = var10.bind(var12)(var16);
                            if (var10) {
                                _fun32419_ip = 194;
                                continue _fun32419
                            }
                        case 108:
                            var12 = /^default/;
                            var10 = var12.test;
                            var10 = var10.bind(var12)(var16);
                            if (var10) {
                                _fun32419_ip = 163;
                                continue _fun32419
                            }
                        case 135:
                            var12 = null;
                            var10 = var16;
                            if (!(var12 != var7)) {
                                _fun32419_ip = 158;
                                continue _fun32419
                            }
                        case 144:
                            var12 = '';
                            var10 = var16;
                            if (!(var12 !== var7)) {
                                _fun32419_ip = 158;
                                continue _fun32419
                            }
                        case 155:
                            var10 = var7;
                        case 158:
                            var7 = var16;
                            _fun32419_ip = 202;
                            continue _fun32419;
                        case 163:
                            var12 = true;
                            _closure2_slot1 = var12;
                            var10 = _closure1_slot3;
                            var15 = var16.replace;
                            var14 = 'default';
                            var12 = 'Default';
                            var7 = var15.bind(var16)(var14, var12);
                            _fun32419_ip = 202;
                            continue _fun32419;
                        case 194:
                            var10 = _closure1_slot3;
                            var7 = 'Default';
                        case 202:
                            var11 = null;
                            if (!(var11 != var0)) {
                                _fun32419_ip = 211;
                                continue _fun32419
                            }
                        case 208:
                            var8 = var0;
                        case 211:
                            var0 = {};
                            var0.id = var10;
                            var9 = _closure2_slot0;
                            var0.type = var9;
                            var0.index = var8;
                            var0.name = var7;
                            var0.originalName = var6;
                            var0.originalId = var5;
                            var0.facing = var4;
                            var0.hardwareId = var3;
                            var0.containerId = var2;
                            var0.effects = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var4)(var0);
                var1 = _closure1_slot4;
                var1 = var1.VIDEO_INPUT;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun32418_ip = 60;
                    continue _fun32418
                }
            case 53:
                var2 = _closure2_slot1;
                var1 = !var2;
            case 60:
                if (!var1) {
                    _fun32418_ip = 138;
                    continue _fun32418
                }
            case 63:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var9 = 1;
                var2 = var2[var9];
                var8 = undefined;
                var2 = var5.bind(var8)(var2);
                var5 = null;
                var6 = var5 == var2;
                var2 = undefined;
                if (var6) {
                    _fun32418_ip = 134;
                    continue _fun32418
                }
            case 96:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.os;
                var7 = var5 == var6;
                var2 = undefined;
                if (var7) {
                    _fun32418_ip = 134;
                    continue _fun32418
                }
            case 128:
                var2 = var6.family;
            case 134:
                var1 = var5 != var2;
            case 138:
                if (!var1) {
                    _fun32418_ip = 199;
                    continue _fun32418
                }
            case 141:
                var6 = /^win/i;
                var5 = var6.test;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 1;
                var7 = var7[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var7);
                var2 = var2.os;
                var2 = var2.family;
                var1 = var5.bind(var6)(var2);
            case 199:
                if (!var1) {
                    _fun32418_ip = 245;
                    continue _fun32418
                }
            case 202:
                var2 = var0.unshift;
                var1 = {};
                var4 = _closure1_slot3;
                var1.id = var4;
                var1.type = var3;
                var3 = -1;
                var1.index = var3;
                var3 = 'Default';
                var1.name = var3;
                var1 = var2.bind(var0)(var1);
            case 245:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var7 = var4.DEFAULT_DEVICE_ID;
    var _closure1_slot3 = var7;
    var4 = var4.DeviceTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/Devices.tsx';
    var4 = var5.bind(var6)(var4);
    var2.sanitizeDevices = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.getVoiceEngine;
            var3 = var2.bind(var3)();
            var2 = var3.getInputDevices;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var4 = _closure1_slot5;
                var0 = _closure1_slot4;
                var3 = var0.AUDIO_INPUT;
                var1 = undefined;
                var0 = arg0;
                var0 = var4.bind(var1)(var3, var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getAudioInputDevices = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.getVoiceEngine;
            var3 = var2.bind(var3)();
            var2 = var3.getOutputDevices;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var4 = _closure1_slot5;
                var0 = _closure1_slot4;
                var3 = var0.AUDIO_OUTPUT;
                var1 = undefined;
                var0 = arg0;
                var0 = var4.bind(var1)(var3, var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getAudioOutputDevices = var3;
    var1 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.getVoiceEngine;
            var3 = var2.bind(var3)();
            var2 = var3.getVideoInputDevices;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var4 = _closure1_slot5;
                var0 = _closure1_slot4;
                var3 = var0.VIDEO_INPUT;
                var1 = undefined;
                var0 = arg0;
                var0 = var4.bind(var1)(var3, var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getVideoInputDevices = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3635, 654, 3478, 2]);