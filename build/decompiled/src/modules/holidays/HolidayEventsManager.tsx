// modules/holidays/HolidayEventsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113426: for (var _fun113426_ip = 0;;) switch (_fun113426_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113426_ip = 76;
                continue _fun113426;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Soundpacks;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113430: for (var _fun113430_ip = 0;;) switch (_fun113430_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113430_ip = 86;
                        continue _fun113430
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113430_ip = 120;
                    continue _fun113430;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = var0.updateRingtone;
                    var2.NOTIFICATIONS_SET_DISABLED_SOUNDS = var3;
                    var0.actions = var2;
                    var1 = function() { // Environment: var1
                        _fun113431: for (var _fun113431_ip = 0;;) switch (_fun113431_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.isDesktopOnly;
                                var1 = !var1;
                                if (!var1) {
                                    _fun113431_ip = 66;
                                    continue _fun113431
                                }
                            case 37:
                                var2 = _closure3_slot0;
                                var1 = var2.updateSoundpack;
                                var1 = var1.bind(var2)();
                                var1 = var2.updateRingtone;
                                var1 = var1.bind(var2)();
                            case 66:
                                return var0;
                        }
                    };
                    var0.handleExperimentUpdated = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var1);
            var3 = var4.subscribe;
            var1 = var2.handleExperimentUpdated;
            var1 = var3.bind(var4)(var1);
            var2.subscription = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            _fun113433: for (var _fun113433_ip = 0;;) switch (_fun113433_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.subscription;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun113433_ip = 25;
                        continue _fun113433
                    }
                case 15:
                    var0 = var2.call;
                    var0 = var0.bind(var2)(var1);
                case 25:
                    var0 = undefined;
                    var1.subscription = var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateSoundpack';
        var4.key = var6;
        var6 = function() {
            _fun113434: for (var _fun113434_ip = 0;;) switch (_fun113434_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = var1.getSoundpack;
                    var3 = var0.bind(var1)();
                    var0 = var1.getLastSoundpackExperimentId;
                    var2 = var0.bind(var1)();
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var1 = var8[var6];
                    var0 = undefined;
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.experiment;
                    var1 = var1.definition;
                    var4 = var1.id;
                    var1 = 8;
                    var1 = var8[var1];
                    var7 = var7.bind(var0)(var1);
                    var1 = var7.isEligible;
                    var1 = var1.bind(var7)();
                    if (var1) {
                        _fun113434_ip = 160;
                        continue _fun113434
                    }
                case 93:
                    var10 = null;
                    if (!(var10 == var2)) {
                        _fun113434_ip = 113;
                        continue _fun113434
                    }
                case 99:
                    var7 = _closure1_slot9;
                    var7 = var7.CLASSIC;
                    if (!(var3 !== var7)) {
                        _fun113434_ip = 160;
                        continue _fun113434
                    }
                case 113:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 9;
                    var7 = var9[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.setSoundpack;
                    var7 = _closure1_slot9;
                    var7 = var7.CLASSIC;
                    var7 = var8.bind(var9)(var7, var10);
                    _fun113434_ip = 283;
                    continue _fun113434;
                case 160:
                    if (!var1) {
                        _fun113434_ip = 192;
                        continue _fun113434
                    }
                case 163:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var7 = var8.bind(var0)(var7);
                    var8 = var7.soundpack;
                    var7 = null;
                    var1 = var7 != var8;
                case 192:
                    if (!var1) {
                        _fun113434_ip = 199;
                        continue _fun113434
                    }
                case 195:
                    var1 = var4 !== var2;
                case 199:
                    if (!var1) {
                        _fun113434_ip = 229;
                        continue _fun113434
                    }
                case 202:
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var7.bind(var0)(var2);
                    var2 = var2.soundpack;
                    var1 = var3 !== var2;
                case 229:
                    if (!var1) {
                        _fun113434_ip = 283;
                        continue _fun113434
                    }
                case 232:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 9;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.setSoundpack;
                    var5 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.soundpack;
                    var1 = var2.bind(var3)(var1, var4);
                case 283:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'updateRingtone';
        var4.key = var6;
        var5 = function() {
            _fun113435: for (var _fun113435_ip = 0;;) switch (_fun113435_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.isEligible;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun113435_ip = 82;
                        continue _fun113435
                    }
                case 38:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.setIncomingRingtone;
                    var3 = 'call_ringing';
                    var1 = 'call_ringing.mp3';
                    var1 = var4.bind(var5)(var3, var1);
                    _fun113435_ip = 185;
                    continue _fun113435;
                case 82:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var3 = var3.bind(var0)(var1);
                    var4 = _closure1_slot8;
                    var1 = var4.getSoundpack;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var0)(var1);
                    var4 = var1.call_ringing;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun113435_ip = 185;
                        continue _fun113435
                    }
                case 133:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setIncomingRingtone;
                    var2 = var1.call_ringing;
                    var1 = '.mp3';
                    var2 = var2 + var1;
                    var1 = 'call_ringing';
                    var1 = var3.bind(var4)(var1, var2);
                case 185:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/holidays/HolidayEventsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8428, 8429, 14558, 14562, 14563, 14564, 8430, 4299, 2]);