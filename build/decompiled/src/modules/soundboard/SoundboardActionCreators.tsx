// modules/soundboard/SoundboardActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50178: for (var _fun50178_ip = 0;;) switch (_fun50178_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50178_ip = 214;
                            continue _fun50178
                        }
                    case 13:
                        var6 = var1.guildId;
                        var13 = var1.name;
                        var12 = var1.sound;
                        var11 = var1.volume;
                        var10 = var1.emojiId;
                        var9 = var1.emojiName;
                        var5 = undefined;
                        SaveGenerator(address = 53);
                    case 51:
                        return var5;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50178_ip = 211;
                            continue _fun50178
                        }
                    case 62:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.post;
                        var2 = {};
                        var14 = _closure1_slot6;
                        var8 = var14.GUILD_SOUNDBOARD_SOUNDS;
                        var8 = var8.bind(var14)(var6);
                        var2.url = var8;
                        var8 = {};
                        var8.name = var13;
                        var8.sound = var12;
                        var8.volume = var11;
                        var8.emoji_id = var10;
                        var8.emoji_name = var9;
                        var2.body = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 162);
                    case 160:
                        return var2;
                    case 162:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50178_ip = 208;
                            continue _fun50178
                        }
                    case 168:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.soundboardSoundFromAPI;
                        var3 = var2.body;
                        var3 = var4.bind(var5)(var3, var6);
                        return var3;
                    case 208:
                        return var2;
                    case 211:
                        return var1;
                    case 214:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50181: for (var _fun50181_ip = 0;;) switch (_fun50181_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50181_ip = 210;
                            continue _fun50181
                        }
                    case 13:
                        var6 = var1.guildId;
                        var14 = var1.soundId;
                        var12 = var1.name;
                        var11 = var1.volume;
                        var10 = var1.emojiId;
                        var9 = var1.emojiName;
                        var5 = undefined;
                        SaveGenerator(address = 53);
                    case 51:
                        return var5;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50181_ip = 207;
                            continue _fun50181
                        }
                    case 62:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.patch;
                        var2 = {};
                        var13 = _closure1_slot6;
                        var8 = var13.GUILD_SOUNDBOARD_SOUND;
                        var8 = var8.bind(var13)(var6, var14);
                        var2.url = var8;
                        var8 = {};
                        var8.name = var12;
                        var8.volume = var11;
                        var8.emoji_id = var10;
                        var8.emoji_name = var9;
                        var2.body = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 158);
                    case 156:
                        return var2;
                    case 158:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50181_ip = 204;
                            continue _fun50181
                        }
                    case 164:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.soundboardSoundFromAPI;
                        var3 = var2.body;
                        var3 = var4.bind(var5)(var3, var6);
                        return var3;
                    case 204:
                        return var2;
                    case 207:
                        return var1;
                    case 210:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun50184: for (var _fun50184_ip = 0;;) switch (_fun50184_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50184_ip = 106;
                            continue _fun50184
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot6;
                        var7 = var8.GUILD_SOUNDBOARD_SOUND;
                        var6 = arg0;
                        var5 = arg1;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 94);
                    case 92:
                        return var1;
                    case 94:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun50184_ip = 103;
                            continue _fun50184
                        }
                    case 100:
                        return var2;
                    case 103:
                        return var1;
                    case 106:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun50187: for (var _fun50187_ip = 0;;) switch (_fun50187_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50187_ip = 205;
                            continue _fun50187
                        }
                    case 10:
                        var8 = arg0;
                        var7 = arg1;
                        var4 = undefined;
                        var3 = undefined;
                    case 20: // try_start_0
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var2 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot6;
                        var9 = var10.SOUNDBOARD_SOUND_GUILD_DATA;
                        var7 = var9.bind(var10)(var8, var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50187_ip = 152;
                            continue _fun50187
                        }
                    case 96:
                        var3 = var1;
                        var6 = var1.body;
                        var2 = null;
                        var6 = var2 != var6;
                        if (!var6) {
                            _fun50187_ip = 149;
                            continue _fun50187
                        }
                    case 113:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 15;
                        var5 = var7[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.makeDiscoverableGuild;
                        var3 = var3.body;
                        var2 = var5.bind(var6)(var3);
                    case 149: // try_end0
                        return var2;
                    case 152:
                        return var1;
                    case 155: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 205:
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Endpoints;
    var _closure1_slot6 = var4;
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.MAX_FAVORITES;
    var _closure1_slot8 = var4;
    var3 = var3.UserSettingsDelay;
    var _closure1_slot9 = var3;
    var3 = false;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun50190: for (var _fun50190_ip = 0;;) switch (_fun50190_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50190_ip = 243;
                            continue _fun50190
                        }
                    case 10: // try_start_0
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.SOUNDBOARD_DEFAULT_SOUNDS;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50190_ip = 154;
                            continue _fun50190
                        }
                    case 82:
                        var6 = var1.body;
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.soundboardSoundFromAPI;
                            var1 = _closure1_slot5;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var6 = var5.bind(var6)(var4);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                        var3.type = var7;
                        var3.soundboardSounds = var6;
                        var3 = var4.bind(var5)(var3);
                    case 151: // try_end0
                        return var2;
                    case 154:
                        return var1;
                    case 157: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var6 = var7.dispatch;
                        var1 = {};
                        var8 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE';
                        var1.type = var8;
                        var1 = var6.bind(var7)(var1);
                        var1 = 8;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var3;
                        var1 = new var10[var1](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 243:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var4 = var5.unsubscribe;
                var3 = _closure2_slot0;
                var2 = _closure3_slot1;
                var2 = var4.bind(var5)(var3, var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = _closure3_slot0;
                var1 = 0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure3_slot1 = var4;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.subscribe;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot12 = var3;
    var3 = function() {
        _fun50196: for (var _fun50196_ip = 0;;) switch (_fun50196_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = var2.shouldFetchDefaultSounds;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun50196_ip = 42;
                    continue _fun50196
                }
            case 22:
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.resolve;
                var0 = var0.bind(var2)();
                return var0;
            case 42:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var3.bind(var2)(var0);
                var3 = var4.dispatch;
                var0 = {};
                var5 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS';
                var0.type = var5;
                var0 = var3.bind(var4)(var0);
                var3 = _closure1_slot12;
                var0 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                var0 = var3.bind(var2)(var0);
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = function() {
        _fun50197: for (var _fun50197_ip = 0;;) switch (_fun50197_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getGuildIdsToFetchSoundsFor;
                var4 = var0.bind(var2)();
                var2 = var4.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun50197_ip = 139;
                    continue _fun50197
                }
            case 46:
                var2 = _closure1_slot12;
                var0 = 'SOUNDBOARD_SOUNDS_RECEIVED';
                var0 = var2.bind(var3)(var0);
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var6 = var5[var1];
                var8 = var2.bind(var3)(var6);
                var7 = var8.dispatch;
                var6 = {};
                var9 = 'GUILD_SOUNDBOARD_FETCH';
                var6.type = var9;
                var6 = var7.bind(var8)(var6);
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'REQUEST_SOUNDBOARD_SOUNDS';
                var1.type = var5;
                var1.guildIds = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 139:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun50200: for (var _fun50200_ip = 0;;) switch (_fun50200_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50200_ip = 175;
                            continue _fun50200
                        }
                    case 10:
                        var3 = global;
                        var2 = var3.performance;
                        var1 = var2.now;
                        var7 = var1.bind(var2)();
                        var4 = _closure1_slot10;
                        var1 = true;
                        _closure1_slot10 = var1;
                        var8 = var3.Promise;
                        var6 = var8.all;
                        var1 = _closure1_slot13;
                        var5 = undefined;
                        var9 = var1.bind(var5)();
                        var1 = new Array(2);
                        var1[0] = var9;
                        var9 = _closure1_slot14;
                        var9 = var9.bind(var5)();
                        var1[1] = var9;
                        var1 = var6.bind(var8)(var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun50200_ip = 172;
                            continue _fun50200
                        }
                    case 97:
                        if (var4) {
                            _fun50200_ip = 169;
                            continue _fun50200
                        }
                    case 100:
                        var4 = var3.performance;
                        var3 = var4.now;
                        var6 = var3.bind(var4)();
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot7;
                        var3 = var2.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED;
                        var2 = {};
                        var6 = var6 - var7;
                        var2.elapsed_ms = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 169:
                        return var1;
                    case 172:
                        return var1;
                    case 175:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/SoundboardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.maybeFetchSoundboardSounds = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.uploadSound = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateSound = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteSound = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 11;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot9;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteSoundboardSounds';
        var1 = function(arg0) { // Environment: var1
            _fun50206: for (var _fun50206_ip = 0;;) switch (_fun50206_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var0 = var3[var0];
                    var9 = undefined;
                    var3 = var1.bind(var9)(var0);
                    var1 = var3.size;
                    var0 = var2.soundIds;
                    var1 = var1.bind(var3)(var0);
                    var0 = _closure1_slot8;
                    if (!(!(var1 >= var0))) {
                        _fun50206_ip = 108;
                        continue _fun50206
                    }
                case 52:
                    var4 = var2.soundIds;
                    var3 = var4.includes;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var0 = !var0;
                    if (!var0) {
                        _fun50206_ip = 103;
                        continue _fun50206
                    }
                case 81:
                    var3 = var2.soundIds;
                    var2 = var3.push;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0 = undefined;
                case 103:
                    _fun50206_ip = 258;
                    continue _fun50206;
                case 108:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 13;
                    var1 = var10[var1];
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 14;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6["+XYXtZ"];
                    var6 = var7.bind(var11)(var6);
                    var1.title = var6;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.t;
                    var5 = var4.JaIyFi;
                    var4 = {};
                    var8 = _closure1_slot8;
                    var4.count = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = false;
                case 258:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.addFavoriteSound = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 11;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot9;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteSoundboardSounds';
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var3 = var1.soundIds;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure2_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.soundIds = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.removeFavoriteSound = var3;
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
    var2.fetchSoundGuildData = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
        var1.type = var4;
        var4 = arg1;
        var1.sound = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg2;
        var1.trigger = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.playSoundLocally = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SOUNDBOARD_SOUND_PLAY_START';
        var1.type = var4;
        var4 = arg0;
        var1.soundId = var4;
        var4 = arg1;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.reportSoundStartedPlaying = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SOUNDBOARD_SOUND_PLAY_END';
        var1.type = var4;
        var4 = arg0;
        var1.soundId = var4;
        var4 = arg1;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.reportSoundFinishedPlaying = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SOUNDBOARD_SET_VOLUME';
        var1.type = var4;
        var4 = arg0;
        var1.volume = var4;
        var4 = arg1;
        var1.location = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateUserSoundboardVolume = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SOUNDBOARD_MUTE_JOIN_SOUND';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.muteCustomJoinSound = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3956, 3957, 660, 665, 507, 4801, 806, 3353, 5664, 795, 1355, 22, 4002, 1234, 5665, 2]);