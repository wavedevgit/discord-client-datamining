// modules/guild_scheduled_events/StartEventUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun67014: for (var _fun67014_ip = 0;;) switch (_fun67014_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg1;
                        var4 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67014_ip = 252;
                            continue _fun67014
                        }
                    case 16:
                        var5 = undefined;
                        if (!(var4 === var5)) {
                            _fun67014_ip = 26;
                            continue _fun67014
                        }
                    case 22:
                        var4 = new Array(0);
                    case 26:
                        SaveGenerator(address = 30);
                    case 28:
                        return var5;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun67014_ip = 249;
                            continue _fun67014
                        }
                    case 39:
                        var7 = new Array(0);
                        var3 = var7.push;
                        var2 = new Array(0);
                        var10 = 0;
                        var14 = var2;
                        var13 = var4;
                        var12 = 0;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.createChannel;
                        var2 = {};
                        var8 = arg0;
                        var8 = var8.id;
                        var2.guildId = var8;
                        var8 = _closure1_slot9;
                        var8 = var8.GUILD_STAGE_VOICE;
                        var2.type = var8;
                        var9 = var11.substring;
                        var8 = 100;
                        var8 = var9.bind(var11)(var10, var8);
                        var2.name = var8;
                        var2.permissionOverwrites = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 169);
                    case 167:
                        return var2;
                    case 169:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67014_ip = 246;
                            continue _fun67014
                        }
                    case 175:
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun67014_ip = 210;
                            continue _fun67014
                        }
                    case 181:
                        var6 = var2.status;
                        var4 = 201;
                        if (!(var4 === var6)) {
                            _fun67014_ip = 210;
                            continue _fun67014
                        }
                    case 193:
                        var4 = _closure1_slot4;
                        var3 = var2.body;
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 210:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var14 = "Can't create channel for event";
                        var15 = var4;
                        var3 = new var15[var5](var14, var13);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 246:
                        return var2;
                    case 249:
                        return var1;
                    case 252:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = function arg0, arg1() {
        _fun67015: for (var _fun67015_ip = 0;;) switch (_fun67015_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guild_id;
                var5 = var1.channel_id;
                var2 = _closure1_slot6;
                var0 = var2.getGuild;
                var6 = var0.bind(var2)(var4);
                var2 = null;
                if (!(var2 != var6)) {
                    _fun67015_ip = 98;
                    continue _fun67015
                }
            case 36:
                var4 = _closure1_slot5;
                var0 = var4.getChannel;
                var5 = var0.bind(var4)(var5);
                if (!(var2 != var5)) {
                    _fun67015_ip = 75;
                    continue _fun67015
                }
            case 54:
                var0 = global;
                var4 = var0.Promise;
                var0 = var4.resolve;
                var0 = var0.bind(var4)(var5);
                _fun67015_ip = 96;
                continue _fun67015;
            case 75:
                var5 = _closure1_slot10;
                var4 = var1.name;
                var3 = undefined;
                var1 = arg1;
                var0 = var5.bind(var3)(var6, var4, var1);
            case 96:
                return var0;
            case 98:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun67018: for (var _fun67018_ip = 0;;) switch (_fun67018_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67018_ip = 104;
                            continue _fun67018
                        }
                    case 10:
                        var3 = var4.entity_type;
                        var1 = _closure1_slot7;
                        var1 = var1.STAGE_INSTANCE;
                        if (!(var3 === var1)) {
                            _fun67018_ip = 96;
                            continue _fun67018
                        }
                    case 33:
                        var3 = _closure1_slot12;
                        var5 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var5)(var4, var1);
                        SaveGenerator(address = 52);
                    case 50:
                        return var1;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67018_ip = 101;
                            continue _fun67018
                        }
                    case 58:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var2 = var4[var2];
                        var4 = var3.bind(var5)(var2);
                        var2 = null;
                        var3 = var2 != var1;
                        var2 = 'could not find or create channel';
                        var2 = var4.bind(var5)(var3, var2);
                    case 96:
                        var2 = undefined;
                        return var2;
                    case 101:
                        return var1;
                    case 104:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun67021: for (var _fun67021_ip = 0;;) switch (_fun67021_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var9 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67021_ip = 345;
                            continue _fun67021
                        }
                    case 16:
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun67021_ip = 24;
                            continue _fun67021
                        }
                    case 22:
                        var9 = false;
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var3;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67021_ip = 342;
                            continue _fun67021
                        }
                    case 37:
                        var8 = var2.channel_id;
                        var5 = var2.entity_type;
                        var7 = var2.name;
                        var6 = var2.id;
                        var10 = var2.guild_id;
                        var4 = _closure1_slot7;
                        var4 = var4.STAGE_INSTANCE;
                        if (!(var4 !== var5)) {
                            _fun67021_ip = 237;
                            continue _fun67021
                        }
                    case 83:
                        var4 = _closure1_slot7;
                        var4 = var4.VOICE;
                        if (!(var4 !== var5)) {
                            _fun67021_ip = 162;
                            continue _fun67021
                        }
                    case 97:
                        var4 = _closure1_slot7;
                        var4 = var4.EXTERNAL;
                        if (!(var4 === var5)) {
                            _fun67021_ip = 336;
                            continue _fun67021
                        }
                    case 114:
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 9;
                        var4 = var11[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.startEvent;
                        var4 = var4.bind(var5)(var6, var10);
                        SaveGenerator(address = 150);
                    case 148:
                        return var4;
                    case 150:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun67021_ip = 336;
                            continue _fun67021
                        }
                    case 159:
                        return var4;
                    case 162:
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 7;
                        var4 = var11[var4];
                        var13 = var5.bind(var3)(var4);
                        var4 = null;
                        var12 = var4 != var8;
                        var4 = 'channel_id is required';
                        var4 = var13.bind(var3)(var12, var4);
                        var4 = 9;
                        var4 = var11[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.startEvent;
                        var4 = var4.bind(var5)(var6, var10);
                        SaveGenerator(address = 228);
                    case 226:
                        return var4;
                    case 228:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun67021_ip = 336;
                            continue _fun67021
                        }
                    case 234:
                        return var4;
                    case 237:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 7;
                        var4 = var10[var4];
                        var11 = var5.bind(var3)(var4);
                        var4 = null;
                        var5 = var4 != var8;
                        var4 = 'channel_id is required';
                        var4 = var11.bind(var3)(var5, var4);
                        var5 = _closure1_slot0;
                        var4 = 8;
                        var4 = var10[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.startStageInstance;
                        var2 = _closure1_slot8;
                        var16 = var2.GUILD_ONLY;
                        var19 = var5;
                        var18 = var8;
                        var17 = var7;
                        var15 = var9;
                        var14 = var6;
                        var2 = var19[var4](var18, var17, var16, var15, var14, var13);
                        SaveGenerator(address = 330);
                    case 328:
                        return var2;
                    case 330:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67021_ip = 339;
                            continue _fun67021
                        }
                    case 336:
                        return var3;
                    case 339:
                        return var2;
                    case 342:
                        return var1;
                    case 345:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.createChannelRecordFromServer;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var8;
    var5 = var5.GuildScheduledEventPrivacyLevel;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ChannelTypes;
    var _closure1_slot9 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/StartEventUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.createStageChannelForEvent = var4;
    var2.findOrCreateEventChannel = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.preStartEventActions = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.setEventAsActive = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1376, 1372, 1410, 1378, 660, 8095, 44, 5890, 8064, 2]);