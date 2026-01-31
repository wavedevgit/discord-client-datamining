// stores/PermissionVADStore.tsx
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
        _fun97328: for (var _fun97328_ip = 0;;) switch (_fun97328_ip) {
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
                _fun97328_ip = 76;
                continue _fun97328;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var8 = function() {
        _fun97331: for (var _fun97331_ip = 0;;) switch (_fun97331_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = var1.getChannelId;
                var6 = var0.bind(var1)();
                var8 = null;
                var1 = var8 == var6;
                var0 = false;
                var4 = true;
                var3 = false;
                if (var1) {
                    _fun97331_ip = 320;
                    continue _fun97331
                }
            case 35:
                var2 = _closure1_slot9;
                var1 = var2.getChannel;
                var11 = var1.bind(var2)(var6);
                var7 = _closure1_slot13;
                var6 = var7.getVoiceState;
                var1 = var8 == var11;
                var9 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun97331_ip = 80;
                    continue _fun97331
                }
            case 70:
                var1 = var11.getGuildId;
                var2 = var1.bind(var11)();
            case 80:
                var10 = _closure1_slot8;
                var1 = var10.getId;
                var1 = var1.bind(var10)();
                var7 = var6.bind(var7)(var2, var1);
                var2 = _closure1_slot10;
                var1 = var2.getMode;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot14;
                var1 = var1.VOICE_ACTIVITY;
                var1 = var2 === var1;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 12;
                var2 = var10[var2];
                var9 = var6.bind(var9)(var2);
                var6 = var9.getPushToTalkLatchingExperimentConfig;
                var2 = {
                    'location': 'doPTT',
                    'autoTrackExposure': false
                };
                var2 = var6.bind(var9)(var2);
                var6 = var2.enableLatching;
                if (!var6) {
                    _fun97331_ip = 202;
                    continue _fun97331
                }
            case 182:
                var9 = _closure1_slot10;
                var2 = var9.getModeOptions;
                var2 = var2.bind(var9)();
                var6 = var2.pttLatchingEnabled;
            case 202:
                var2 = var1;
                if (var1) {
                    _fun97331_ip = 211;
                    continue _fun97331
                }
            case 208:
                var2 = var6;
            case 211:
                var2 = !var2;
                if (var2) {
                    _fun97331_ip = 221;
                    continue _fun97331
                }
            case 217:
                var2 = var8 == var11;
            case 221:
                if (var2) {
                    _fun97331_ip = 234;
                    continue _fun97331
                }
            case 224:
                var6 = var11.isPrivate;
                var2 = var6.bind(var11)();
            case 234:
                if (var2) {
                    _fun97331_ip = 247;
                    continue _fun97331
                }
            case 237:
                var6 = var11.isGuildStageVoice;
                var2 = var6.bind(var11)();
            case 247:
                if (var2) {
                    _fun97331_ip = 276;
                    continue _fun97331
                }
            case 250:
                var10 = _closure1_slot11;
                var9 = var10.can;
                var6 = _closure1_slot15;
                var6 = var6.USE_VAD;
                var2 = var9.bind(var10)(var6, var11);
            case 276:
                if (var2) {
                    _fun97331_ip = 314;
                    continue _fun97331
                }
            case 279:
                var6 = var8 == var7;
                if (var6) {
                    _fun97331_ip = 298;
                    continue _fun97331
                }
            case 286:
                var9 = var7.suppress;
                var9 = !var9;
                var6 = !var9;
            case 298:
                if (var6) {
                    _fun97331_ip = 311;
                    continue _fun97331
                }
            case 301:
                var7 = var7.requestToSpeakTimestamp;
                var6 = var8 != var7;
            case 311:
                var2 = var6;
            case 314:
                var4 = var2;
                var3 = var1;
            case 320:
                var2 = var4;
                if (var4) {
                    _fun97331_ip = 329;
                    continue _fun97331
                }
            case 326:
                var2 = !var3;
            case 329:
                var1 = var4;
                if (var1) {
                    _fun97331_ip = 338;
                    continue _fun97331
                }
            case 335:
                var1 = var3;
            case 338:
                var3 = _closure1_slot16;
                if (!(var3 === var4)) {
                    _fun97331_ip = 354;
                    continue _fun97331
                }
            case 346:
                var3 = _closure1_slot17;
                if (!(var3 !== var1)) {
                    _fun97331_ip = 432;
                    continue _fun97331
                }
            case 354:
                _closure1_slot18 = var2;
                _closure1_slot16 = var2;
                _closure1_slot17 = var1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'SET_VAD_PERMISSION';
                var2.type = var6;
                var6 = _closure1_slot16;
                var2.hasPermission = var6;
                var5 = _closure1_slot17;
                var2.hasLatchPermission = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            case 432:
                return var0;
        }
    };
    var _closure1_slot20 = var8;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7.value = var1;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.InputModes;
    var _closure1_slot14 = var9;
    var7 = var7.Permissions;
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var1;
    var _closure1_slot17 = var1;
    var _closure1_slot18 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun97333: for (var _fun97333_ip = 0;;) switch (_fun97333_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun97333_ip = 69;
                        continue _fun97333
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun97333_ip = 105;
                    continue _fun97333;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot8;
            var12 = _closure1_slot9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var8 = _closure1_slot13;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldShowWarning';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'canUseVoiceActivity';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'canUseLatching';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PermissionVADStore';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.RTC_CONNECTION_STATE = var8;
    var1.MEDIA_ENGINE_SET_AUDIO_ENABLED = var8;
    var1.AUDIO_SET_MODE = var8;
    var1.CHANNEL_UPDATES = var8;
    var1.THREAD_UPDATE = var8;
    var1.GUILD_ROLE_UPDATE = var8;
    var1.GUILD_MEMBER_UPDATE = var8;
    var1.IMPERSONATE_UPDATE = var8;
    var1.IMPERSONATE_STOP = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.voiceStates;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            _fun97339: for (var _fun97339_ip = 0;;) switch (_fun97339_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.userId;
                    var3 = _closure1_slot8;
                    var0 = var3.getId;
                    var0 = var0.bind(var3)();
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun97339_ip = 42;
                        continue _fun97339
                    }
                case 32:
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 42:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var8;
    var8 = function() {
        var0 = _closure1_slot16;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.AUDIO_TOGGLE_SELF_MUTE = var8;
    var3 = function() {
        var0 = true;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.PERMISSION_CLEAR_VAD_WARNING = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PermissionVADStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 3435, 3050, 3477, 3480, 660, 8583, 806, 566, 2]);