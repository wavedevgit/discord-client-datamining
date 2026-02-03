// modules/stage_channels/native/StageBoostUpsellManager.tsx
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
        _fun114117: for (var _fun114117_ip = 0;;) switch (_fun114117_ip) {
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
                _fun114117_ip = 76;
                continue _fun114117;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot12 = var3;
    var3 = false;
    var _closure1_slot13 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114121: for (var _fun114121_ip = 0;;) switch (_fun114121_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114121_ip = 84;
                        continue _fun114121
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun114121_ip = 118;
                    continue _fun114121;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleVoiceChannelSelect;
                    var1.VOICE_CHANNEL_SELECT = var2;
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var0.actions = var1;
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
        var0 = 'handleVoiceChannelSelect';
        var4.key = var0;
        var0 = function arg0() {
            _fun114122: for (var _fun114122_ip = 0;;) switch (_fun114122_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = null;
                    var0 = var0 == var1;
                    if (!var0) {
                        _fun114122_ip = 42;
                        continue _fun114122
                    }
                case 17:
                    var3 = _closure1_slot8;
                    var2 = var3.getKey;
                    var2 = var2.bind(var3)();
                    var1 = _closure1_slot12;
                    var0 = var2 === var1;
                case 42:
                    if (!var0) {
                        _fun114122_ip = 85;
                        continue _fun114122
                    }
                case 45:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var0 = _closure1_slot12;
                    var0 = var1.bind(var2)(var0);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleVoiceStateUpdates';
        var4.key = var6;
        var5 = function() {
            _fun114123: for (var _fun114123_ip = 0;;) switch (_fun114123_ip) {
                case 0:
                    var0 = _closure1_slot13;
                    if (var0) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 13:
                    var2 = _closure1_slot11;
                    var0 = var2.getVoiceChannelId;
                    var4 = var0.bind(var2)();
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 36:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var6 = var2.bind(var3)(var4);
                    if (!(var0 != var6)) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 57:
                    if (!(var0 != var6)) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 64:
                    var0 = var6.isGuildStageVoice;
                    var0 = var0.bind(var6)();
                    if (!var0) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var0 = var3[var0];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var0);
                    var2 = var3.getStageHasMedia;
                    var0 = var6.id;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 124:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var0 = var3[var0];
                    var2 = var2.bind(var7)(var0);
                    var0 = var2.getChannelVideoLimit;
                    var0 = var0.bind(var2)(var6);
                    var0 = var0.reachedLimit;
                    if (!var0) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 167:
                    var3 = _closure1_slot10;
                    var2 = var3.can;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 13;
                    var0 = var5[var0];
                    var0 = var4.bind(var7)(var0);
                    var0 = var0.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var0 = var2.bind(var3)(var0, var6);
                    if (!var0) {
                        _fun114123_ip = 295;
                        continue _fun114123
                    }
                case 212:
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var2 = 10;
                    var2 = var0[var2];
                    var5 = var3.bind(var7)(var2);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 15;
                    var2 = var0[var2];
                    var3 = var3.bind(var7)(var2);
                    var2 = 14;
                    var2 = var0[var2];
                    var0 = var0.paths;
                    var3 = var3.bind(var7)(var2, var0);
                    var2 = _closure1_slot12;
                    var0 = {};
                    var0.channel = var6;
                    var0 = var4.bind(var5)(var3, var2, var0);
                    var0 = true;
                    _closure1_slot13 = var0;
                case 295:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
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
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/StageBoostUpsellManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3131, 1372, 3082, 1661, 4231, 3269, 4240, 8202, 1380, 12215, 1307, 4295, 2]);