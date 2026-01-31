// modules/soundboard/SoundboardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function arg0, arg1() {
        _fun50594: for (var _fun50594_ip = 0;;) switch (_fun50594_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var4 = null;
                var5 = var4 == var3;
                var0 = undefined;
                if (var5) {
                    _fun50594_ip = 22;
                    continue _fun50594
                }
            case 17:
                var0 = var3.guild_id;
            case 22:
                var0 = var4 == var0;
                if (var0) {
                    _fun50594_ip = 58;
                    continue _fun50594
                }
            case 29:
                var7 = _closure1_slot6;
                var6 = var7.can;
                var5 = _closure1_slot11;
                var5 = var5.USE_EXTERNAL_SOUNDS;
                var0 = var6.bind(var7)(var5, var3);
            case 58:
                if (var0) {
                    _fun50594_ip = 77;
                    continue _fun50594
                }
            case 61:
                var6 = var1.guildId;
                var5 = _closure1_slot10;
                var0 = var6 === var5;
            case 77:
                if (var0) {
                    _fun50594_ip = 103;
                    continue _fun50594
                }
            case 80:
                var1 = var1.guildId;
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun50594_ip = 99;
                    continue _fun50594
                }
            case 94:
                var2 = var3.guild_id;
            case 99:
                var0 = var1 === var2;
            case 103:
                return var0;
        }
    };
    var _closure1_slot14 = var6;
    var5 = function arg0, arg1, arg2() {
        _fun50595: for (var _fun50595_ip = 0;;) switch (_fun50595_ip) {
            case 0:
                var2 = arg1;
                var5 = arg2;
                var1 = arguments[3];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun50595_ip = 17;
                    continue _fun50595
                }
            case 15:
                var1 = true;
            case 17:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var7 = var6.bind(var4)(var0);
                var6 = var7.canUseSoundboardEverywhere;
                var0 = arg0;
                var0 = var6.bind(var7)(var0);
                if (var0) {
                    _fun50595_ip = 82;
                    continue _fun50595
                }
            case 57:
                var7 = var2.guildId;
                var6 = null;
                var8 = var6 == var5;
                var6 = undefined;
                if (var8) {
                    _fun50595_ip = 78;
                    continue _fun50595
                }
            case 73:
                var6 = var5.guild_id;
            case 78:
                var0 = var7 === var6;
            case 82:
                if (var0) {
                    _fun50595_ip = 98;
                    continue _fun50595
                }
            case 85:
                var7 = var2.guildId;
                var6 = _closure1_slot10;
                var0 = var7 === var6;
            case 98:
                if (!var0) {
                    _fun50595_ip = 111;
                    continue _fun50595
                }
            case 101:
                var3 = _closure1_slot14;
                var0 = var3.bind(var4)(var2, var5);
            case 111:
                if (!var0) {
                    _fun50595_ip = 129;
                    continue _fun50595
                }
            case 114:
                var1 = !var1;
                if (var1) {
                    _fun50595_ip = 126;
                    continue _fun50595
                }
            case 120:
                var1 = var2.available;
            case 126:
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function arg0() {
        _fun50596: for (var _fun50596_ip = 0;;) switch (_fun50596_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getMuteStates;
                var0 = {};
                var3 = arg0;
                var0.channel = var3;
                var1 = var1.bind(var2)(var0);
                var0 = var1.mute;
                var1 = var1.suppress;
                var0 = !var0;
                if (!var0) {
                    _fun50596_ip = 66;
                    continue _fun50596
                }
            case 63:
                var0 = !var1;
            case 66:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var3 = function() {
        _fun50597: for (var _fun50597_ip = 0;;) switch (_fun50597_ip) {
            case 0:
                var0 = _closure1_slot4;
                var0 = var0.settings;
                var1 = var0.guilds;
                var0 = null;
                var3 = var0 == var1;
                var2 = undefined;
                if (var3) {
                    _fun50597_ip = 36;
                    continue _fun50597
                }
            case 30:
                var2 = var1.guilds;
            case 36:
                if (!(var0 == var2)) {
                    _fun50597_ip = 42;
                    continue _fun50597
                }
            case 40:
                var2 = {};
            case 42:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.values;
                var2 = var0.bind(var1)(var2);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.joinSound;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50601: for (var _fun50601_ip = 0;;) switch (_fun50601_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50601_ip = 447;
                            continue _fun50601
                        }
                    case 10:
                        var2 = _closure1_slot7;
                        var1 = var2.getCurrentUser;
                        var11 = var1.bind(var2)();
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var5 = var2.bind(var1)();
                        var3 = _closure1_slot0;
                        var2 = 16;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getCustomJoinSound;
                        var2 = arg0;
                        var3 = var3.bind(var4)(var2);
                        var9 = null;
                        if (!(var9 != var5)) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 91:
                        var7 = _closure1_slot5;
                        var4 = var7.has;
                        var2 = var5.type;
                        var2 = var4.bind(var7)(var2);
                        if (var2) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 116:
                        if (!(var9 != var3)) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 123:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.canUseCustomCallSounds;
                        var2 = var2.bind(var4)(var11);
                        if (!var2) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 160:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 17;
                        var2 = var7[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.canSelectedVoiceChannelUseSoundboard;
                        var2 = var2.bind(var4)();
                        if (!var2) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 196:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 12;
                        var2 = var2[var4];
                        var7 = var7.bind(var1)(var2);
                        var2 = var7.maybeFetchSoundboardSounds;
                        var2 = var2.bind(var7)();
                        SaveGenerator(address = 230);
                    case 228:
                        return var2;
                    case 230:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (var7) {
                            _fun50601_ip = 441;
                            continue _fun50601
                        }
                    case 239:
                        var8 = var3.guildId;
                        var7 = _closure1_slot9;
                        if (!(var8 !== var7)) {
                            _fun50601_ip = 259;
                            continue _fun50601
                        }
                    case 252:
                        var10 = var3.guildId;
                        _fun50601_ip = 263;
                        continue _fun50601;
                    case 259:
                        var10 = _closure1_slot10;
                    case 263:
                        var8 = _closure1_slot8;
                        var7 = var8.getSound;
                        var3 = var3.soundId;
                        var8 = var7.bind(var8)(var10, var3);
                        if (!(var9 != var8)) {
                            _fun50601_ip = 444;
                            continue _fun50601
                        }
                    case 292:
                        var3 = _closure1_slot14;
                        var7 = var3.bind(var1)(var8, var5);
                        var3 = null;
                        if (!var7) {
                            _fun50601_ip = 438;
                            continue _fun50601
                        }
                    case 310:
                        var10 = _closure1_slot15;
                        var12 = true;
                        var16 = undefined;
                        var15 = var11;
                        var14 = var8;
                        var13 = var5;
                        var7 = var16[var10](var15, var14, var13, var12, var11);
                        var3 = null;
                        if (!var7) {
                            _fun50601_ip = 438;
                            continue _fun50601
                        }
                    case 336:
                        var7 = _closure1_slot16;
                        var7 = var7.bind(var1)(var5);
                        var3 = null;
                        if (!var7) {
                            _fun50601_ip = 438;
                            continue _fun50601
                        }
                    case 350:
                        var7 = var5.id;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = var6[var4];
                        var10 = var5.bind(var1)(var4);
                        var9 = var10.playSoundLocally;
                        var4 = 13;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.LocalSoundTrigger;
                        var4 = var4.JOINED_VOICE_CHANNEL;
                        var4 = var9.bind(var10)(var7, var8, var4);
                        var4 = 14;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.sendVoiceChannelCustomCallSoundEffect;
                        var4 = false;
                        var4 = var5.bind(var6)(var7, var8, var4);
                        var3 = undefined;
                    case 438:
                        return var3;
                    case 441:
                        return var2;
                    case 444:
                        return var1;
                    case 447:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun50602: for (var _fun50602_ip = 0;;) switch (_fun50602_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var7 = var0.changeType;
                var6 = var0.soundType;
                var5 = var0.soundSource;
                var8 = var0.location;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 22;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot12;
                var2 = var1.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
                var1 = {};
                var1.location_stack = var8;
                var9 = '';
                var8 = 0;
                if (!(var9 !== var10)) {
                    _fun50602_ip = 101;
                    continue _fun50602
                }
            case 88:
                var9 = global;
                var9 = var9.Number;
                var8 = var9.bind(var0)(var10);
            case 101:
                var1.guild_id = var8;
                var1.change_type = var7;
                var1.sound_type = var6;
                var1.sound_source = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot9 = var10;
    var7 = var7.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.Permissions;
    var _closure1_slot11 = var10;
    var7 = var7.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ExpressionPickerViewType;
    var _closure1_slot13 = var7;
    var7 = 24;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/soundboard/SoundboardUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function() {
        _fun50603: for (var _fun50603_ip = 0;;) switch (_fun50603_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 9;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var2 = var0.SoundboardSettings;
                var0 = var2.getSetting;
                var2 = var0.bind(var2)();
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun50603_ip = 56;
                    continue _fun50603
                }
            case 50:
                var1 = var2.volume;
            case 56:
                var2 = var0 != var1;
                var0 = 100;
                if (!var2) {
                    _fun50603_ip = 69;
                    continue _fun50603
                }
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var2.getAmplitudinalSoundboardVolume = var7;
    var2.hasPermissionToPlaySound = var6;
    var2.canUseSoundboardSound = var5;
    var2.canMakeSound = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        var7 = arg0;
        var6 = arg1;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 12;
        var1 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.playSoundLocally;
        var1 = 13;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.LocalSoundTrigger;
        var1 = var1.SOUNDBOARD;
        var1 = var4.bind(var5)(var6, var7, var1);
        var1 = 14;
        var1 = var3[var1];
        var5 = var2.bind(var0)(var1);
        var4 = var5.sendVoiceChannelSoundboardEffect;
        var10 = false;
        var9 = arg2;
        var8 = arg3;
        var13 = var5;
        var12 = var6;
        var11 = var7;
        var1 = var13[var4](var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var2.playSound = var4;
    var2.hasSetAnyCustomJoinSound = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybePlayCustomJoinSound = var3;
    var3 = function arg0() {
        _fun50606: for (var _fun50606_ip = 0;;) switch (_fun50606_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isSoundboardButtonDisabled;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun50606_ip = 19;
                    continue _fun50606
                }
            case 17:
                var2 = false;
            case 19:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var5.bind(var6)(var3, var0);
                var0 = new Array(0);
                if (var2) {
                    _fun50606_ip = 199;
                    continue _fun50606
                }
            case 79:
                var2 = _closure1_slot17;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun50606_ip = 199;
                    continue _fun50606
                }
            case 90:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.ageEligibleForPremiumUpsell;
                var3 = var2.bind(var3)(var6);
                var5 = _closure1_slot1;
                var2 = 10;
                var2 = var7[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.canUseCustomCallSounds;
                var2 = var2.bind(var5)(var6);
                if (var2) {
                    _fun50606_ip = 154;
                    continue _fun50606
                }
            case 151:
                var2 = var3;
            case 154:
                if (!var2) {
                    _fun50606_ip = 199;
                    continue _fun50606
                }
            case 157:
                var2 = var0.push;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 20;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.CUSTOM_CALL_SOUNDS_PICKER_UPSELL;
                var1 = var2.bind(var0)(var1);
            case 199:
                return var0;
        }
    };
    var2.useSoundBoardDismissContentTypes = var3;
    var3 = function arg0, arg1() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 21;
        var3 = var7[var2];
        var0 = undefined;
        var4 = var6.bind(var0)(var3);
        var3 = var4.updateUserGuildSettings;
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.UserSettingsDelay;
        var2 = var2.INFREQUENT_USER_ACTION;
        var1 = function(arg0) { // Environment: var1
            var0 = undefined;
            var1 = arg0;
            var1.joinSound = var0;
            var2 = _closure1_slot19;
            var1 = {};
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 13;
            var7 = var6[var4];
            var7 = var5.bind(var0)(var7);
            var7 = var7.AnalyticsChangeType;
            var7 = var7.REMOVED;
            var1.changeType = var7;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.AnalyticsSoundType;
            var4 = var4.ENTRY;
            var1.soundType = var4;
            var3 = _closure2_slot1;
            var1.location = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var5, var1, var2);
        return var0;
    };
    var2.removeCustomJoinSound = var3;
    var3 = function arg0, arg1, arg2() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 21;
        var3 = var7[var2];
        var0 = undefined;
        var4 = var6.bind(var0)(var3);
        var3 = var4.updateUserGuildSettings;
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.UserSettingsDelay;
        var2 = var2.INFREQUENT_USER_ACTION;
        var1 = function(arg0) { // Environment: var1
            _fun50611: for (var _fun50611_ip = 0;;) switch (_fun50611_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot1;
                    var1 = var0.guildId;
                    var0 = _closure1_slot10;
                    var8 = var1 === var0;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 13;
                    var1 = var0[var6];
                    var0 = undefined;
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.AnalyticsSoundSource;
                    if (var8) {
                        _fun50611_ip = 65;
                        continue _fun50611
                    }
                case 57:
                    var5 = var1.CUSTOM;
                    _fun50611_ip = 71;
                    continue _fun50611;
                case 65:
                    var5 = var1.DEFAULT;
                case 71:
                    var7 = var2.joinSound;
                    var1 = null;
                    if (!(var1 == var7)) {
                        _fun50611_ip = 114;
                        continue _fun50611
                    }
                case 83:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.AnalyticsChangeType;
                    var7 = var1.ADDED;
                    _fun50611_ip = 143;
                    continue _fun50611;
                case 114:
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var9.bind(var0)(var1);
                    var1 = var1.AnalyticsChangeType;
                    var7 = var1.UPDATED;
                case 143:
                    var1 = {};
                    var9 = _closure2_slot1;
                    var9 = var9.soundId;
                    var1.soundId = var9;
                    if (var8) {
                        _fun50611_ip = 174;
                        continue _fun50611
                    }
                case 163:
                    var8 = _closure2_slot1;
                    var8 = var8.guildId;
                    _fun50611_ip = 178;
                    continue _fun50611;
                case 174:
                    var8 = _closure1_slot9;
                case 178:
                    var1.guildId = var8;
                    var2.joinSound = var1;
                    var2 = _closure1_slot19;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var1.guildId = var8;
                    var1.changeType = var7;
                    var1.soundSource = var5;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AnalyticsSoundType;
                    var4 = var4.ENTRY;
                    var1.soundType = var4;
                    var3 = _closure2_slot2;
                    var1.location = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var5, var1, var2);
        return var0;
    };
    var2.updateCustomJoinSound = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.location;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 22;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot12;
        var2 = var1.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED;
        var1 = {};
        var1.location_stack = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackCustomCallSoundExternallyDeleted = var3;
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.sound;
        var7 = var0.location;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot12;
        var2 = var1.EXPRESSION_FAVORITED;
        var1 = {};
        var1.location = var7;
        var6 = _closure1_slot13;
        var6 = var6.SOUNDBOARD;
        var1.expression_type = var6;
        var6 = var5.soundId;
        var1.expression_id = var6;
        var6 = var5.name;
        var1.expression_name = var6;
        var5 = var5.guildId;
        var1.expression_guild_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackSoundFavorited = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1310, 1376, 3050, 1613, 3915, 3916, 660, 1565, 1348, 3068, 5652, 5574, 4762, 5653, 5680, 5681, 5682, 632, 3195, 1358, 1355, 795, 4266, 2]);