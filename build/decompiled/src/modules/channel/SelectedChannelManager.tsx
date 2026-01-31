// modules/channel/SelectedChannelManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114145: for (var _fun114145_ip = 0;;) switch (_fun114145_ip) {
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
                _fun114145_ip = 76;
                continue _fun114145;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.findFirstVoiceChannelId;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot12 = var7;
    var7 = var3.Routes;
    var _closure1_slot13 = var7;
    var7 = var3.ME;
    var _closure1_slot14 = var7;
    var3 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: SelectedChannelManager, environment: var5
            _fun114149: for (var _fun114149_ip = 0;;) switch (_fun114149_ip) {
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
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114149_ip = 84;
                        continue _fun114149
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun114149_ip = 118;
                    continue _fun114149;
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
                    var2 = var0.handleGuildCreate;
                    var1.GUILD_CREATE = var2;
                    var2 = var0.handleChannelCreate;
                    var1.CHANNEL_CREATE = var2;
                    var2 = var0.handleLogout;
                    var1.LOGOUT = var2;
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
        var0 = 'handleGuildCreate';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun114150: for (var _fun114150_ip = 0;;) switch (_fun114150_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.guild;
                    var4 = _closure1_slot9;
                    var2 = var4.getChannelId;
                    var1 = _closure1_slot14;
                    var2 = var2.bind(var4)(var1);
                    var1 = var4.getVoiceChannelId;
                    var4 = var1.bind(var4)();
                    var1 = var0.id;
                    if (!(var1 === var2)) {
                        _fun114150_ip = 87;
                        continue _fun114150
                    }
                case 49:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.transitionToGuild;
                    var1 = var0.id;
                    var1 = var2.bind(var5)(var1);
                case 87:
                    var1 = var0.id;
                    var1 = var1 === var4;
                    if (!var1) {
                        _fun114150_ip = 111;
                        continue _fun114150
                    }
                case 99:
                    var5 = var0.unavailable;
                    var2 = false;
                    var1 = var2 !== var5;
                case 111:
                    if (!var1) {
                        _fun114150_ip = 120;
                        continue _fun114150
                    }
                case 114:
                    var2 = null;
                    var1 = var2 == var4;
                case 120:
                    if (!var1) {
                        _fun114150_ip = 170;
                        continue _fun114150
                    }
                case 123:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.selectVoiceChannel;
                    var3 = _closure1_slot10;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                case 170:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleChannelCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun114151: for (var _fun114151_ip = 0;;) switch (_fun114151_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.channel;
                    var3 = var1.type;
                    var2 = _closure1_slot12;
                    var2 = var2.GROUP_DM;
                    if (!(var3 === var2)) {
                        _fun114151_ip = 234;
                        continue _fun114151
                    }
                case 33:
                    var4 = var1.originChannelId;
                    var5 = _closure1_slot9;
                    var3 = var5.getChannelId;
                    var2 = _closure1_slot15;
                    var5 = var3.bind(var5)(var2);
                    var3 = _closure1_slot11;
                    var2 = var3.getGuildId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var3 = var2 == var3;
                    if (!var3) {
                        _fun114151_ip = 85;
                        continue _fun114151
                    }
                case 81:
                    var3 = var2 != var4;
                case 85:
                    if (!var3) {
                        _fun114151_ip = 92;
                        continue _fun114151
                    }
                case 88:
                    var3 = var4 === var5;
                case 92:
                    if (!var3) {
                        _fun114151_ip = 153;
                        continue _fun114151
                    }
                case 95:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var5 = var5[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.transitionTo;
                    var9 = _closure1_slot13;
                    var8 = var9.CHANNEL;
                    var7 = _closure1_slot14;
                    var3 = var1.id;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = var5.bind(var6)(var3);
                case 153:
                    var2 = var2 != var4;
                    if (!var2) {
                        _fun114151_ip = 178;
                        continue _fun114151
                    }
                case 160:
                    var5 = _closure1_slot9;
                    var3 = var5.getVoiceChannelId;
                    var3 = var3.bind(var5)();
                    var2 = var4 === var3;
                case 178:
                    if (!var2) {
                        _fun114151_ip = 234;
                        continue _fun114151
                    }
                case 181:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.selectVoiceChannel;
                    var1 = var1.id;
                    var4 = _closure1_slot8;
                    var0 = var4.isVideoEnabled;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                case 234:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {
                'type': 'VOICE_CHANNEL_SELECT',
                'channelId': null,
                'guildId': null,
                'video': false,
                'currentVoiceChannelId': null,
                'joinVoiceId': null
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
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
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/SelectedChannelManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3435, 1661, 3172, 660, 5577, 4195, 1220, 806, 4263, 2]);