// modules/checkpoint/CheckpointActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _fetchCheckpointData, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86443: for (var _fun86443_ip = 0;;) switch (_fun86443_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86443_ip = 1270;
                            continue _fun86443
                        }
                    case 15:
                        var2 = undefined;
                        if (!(var6 === var2)) {
                            _fun86443_ip = 23;
                            continue _fun86443
                        }
                    case 21:
                        var6 = false;
                    case 23:
                        var31 = undefined;
                        var32 = undefined;
                        var28 = undefined;
                        var29 = undefined;
                        var25 = undefined;
                        var26 = undefined;
                        var22 = undefined;
                        var23 = undefined;
                        var27 = undefined;
                        var20 = undefined;
                        var21 = undefined;
                        var19 = undefined;
                        var14 = undefined;
                        var15 = undefined;
                        var17 = undefined;
                        var16 = undefined;
                        var13 = undefined;
                        SaveGenerator(address = 61);
                    case 59:
                        return var2;
                    case 61:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun86443_ip = 1267;
                            continue _fun86443
                        }
                    case 70:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 14;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'CHECKPOINT_FETCH_START';
                        var7.type = var10;
                        var7 = var8.bind(var9)(var7);
                        if (var6) {
                            _fun86443_ip = 1087;
                            continue _fun86443
                        }
                    case 121: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 15;
                        var6 = var8[var6];
                        var6 = var7.bind(var2)(var6);
                        var8 = var6.HTTP;
                        var7 = var8.get;
                        var6 = {
                            'url': '/checkpoint',
                            'rejectWithError': true
                        };
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address = 174);
                    case 172:
                        return var6;
                    case 174:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun86443_ip = 1038;
                            continue _fun86443
                        }
                    case 183:
                        var7 = var6.body;
                        var24 = var7.card_id;
                        var18 = var7.power_level;
                        var12 = var7.power_level_percentile;
                        var11 = var7.messages;
                        var27 = var11;
                        var20 = var7.emojis;
                        var21 = var7.voice;
                        var19 = var7.guilds;
                        var14 = var7.users;
                        var15 = var7.sidekick;
                        var17 = var7.applications;
                        var16 = var7.quests;
                        var13 = var7.avatar_decoration;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'CHECKPOINT_FETCH_SUCCESS';
                        var7.type = var10;
                        var10 = {};
                        var10.cardId = var24;
                        var10.powerLevel = var18;
                        var10.powerLevelPercentile = var12;
                        var12 = null;
                        var18 = var12 != var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun86443_ip = 458;
                            continue _fun86443
                        }
                    case 330:
                        var18 = {};
                        var30 = var27;
                        var24 = var30.num_messages_sent;
                        var18.numMessagesSent = var24;
                        var24 = var30.num_messages_sent_percentile;
                        var18.numMessagesSentPercentile = var24;
                        var24 = {};
                        var30 = var30.top_month;
                        var32 = var30;
                        var33 = var12 == var30;
                        var30 = undefined;
                        if (var33) {
                            _fun86443_ip = 385;
                            continue _fun86443
                        }
                    case 379:
                        var30 = var32.month;
                    case 385:
                        var31 = var30;
                        var32 = var12 != var30;
                        var30 = 1;
                        if (!var32) {
                            _fun86443_ip = 401;
                            continue _fun86443
                        }
                    case 398:
                        var30 = var31;
                    case 401:
                        var24.month = var30;
                        var27 = var27.top_month;
                        var29 = var27;
                        var30 = var12 == var27;
                        var27 = undefined;
                        if (var30) {
                            _fun86443_ip = 430;
                            continue _fun86443
                        }
                    case 424:
                        var27 = var29.num_messages_sent;
                    case 430:
                        var28 = var27;
                        var29 = var12 != var27;
                        var27 = 0;
                        if (!var29) {
                            _fun86443_ip = 445;
                            continue _fun86443
                        }
                    case 442:
                        var27 = var28;
                    case 445:
                        var24.numMessagesSent = var27;
                        var18.topMonth = var24;
                        var11 = var18;
                    case 458:
                        var10.messages = var11;
                        var11 = var20;
                        var18 = var12 != var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun86443_ip = 519;
                            continue _fun86443
                        }
                    case 475:
                        var18 = {};
                        var28 = var20.emojis;
                        var27 = var28.map;
                        var24 = function(arg0) { // Environment: var4
                            _fun86450: for (var _fun86450_ip = 0;;) switch (_fun86450_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = {};
                                    var7 = var0;
                                    var6 = var1;
                                    var2 = copyDataProperties(var7, var6);
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 16;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.isProbablyAValidSnowflake;
                                    var3 = var1.id;
                                    var3 = var4.bind(var5)(var3);
                                    if (!var3) {
                                        _fun86450_ip = 64;
                                        continue _fun86450
                                    }
                                case 59:
                                    var2 = var1.id;
                                case 64:
                                    var1 = 'id';
                                    var0[var1] = var2;
                                    return var0;
                            }
                        };
                        var24 = var27.bind(var28)(var24);
                        var18.emojis = var24;
                        var20 = var20.num_emojis_sent;
                        var18.numEmojisSent = var20;
                        var11 = var18;
                    case 519:
                        var10.emojis = var11;
                        var11 = var21;
                        var18 = var12 != var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun86443_ip = 669;
                            continue _fun86443
                        }
                    case 539:
                        var18 = {};
                        var24 = var21;
                        var20 = var24.total_voice_minutes;
                        var18.totalVoiceMinutes = var20;
                        var20 = var24.total_voice_minutes_percentile;
                        var18.totalVoiceMinutesPercentile = var20;
                        var20 = {};
                        var24 = var24.top_month;
                        var26 = var24;
                        var27 = var12 == var24;
                        var24 = undefined;
                        if (var27) {
                            _fun86443_ip = 594;
                            continue _fun86443
                        }
                    case 588:
                        var24 = var26.month;
                    case 594:
                        var25 = var24;
                        var26 = var12 != var24;
                        var24 = 1;
                        if (!var26) {
                            _fun86443_ip = 610;
                            continue _fun86443
                        }
                    case 607:
                        var24 = var25;
                    case 610:
                        var20.month = var24;
                        var21 = var21.top_month;
                        var23 = var21;
                        var24 = var12 == var21;
                        var21 = undefined;
                        if (var24) {
                            _fun86443_ip = 641;
                            continue _fun86443
                        }
                    case 633:
                        var21 = var23.num_minutes_in_voice;
                    case 641:
                        var22 = var21;
                        var23 = var12 != var21;
                        var21 = 0;
                        if (!var23) {
                            _fun86443_ip = 656;
                            continue _fun86443
                        }
                    case 653:
                        var21 = var22;
                    case 656:
                        var20.numMinutesInVoice = var21;
                        var18.topMonth = var20;
                        var11 = var18;
                    case 669:
                        var10.voice = var11;
                        var11 = var19;
                        var18 = var12 != var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun86443_ip = 732;
                            continue _fun86443
                        }
                    case 686:
                        var18 = {};
                        var22 = var19.guilds;
                        var21 = var22.map;
                        var20 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.num_messages_sent;
                            var0.numMessagesSent = var2;
                            var2 = var1.num_voice_minutes;
                            var0.numVoiceMinutes = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.fromServer;
                            var2 = var1.guild;
                            var6 = _closure1_slot11;
                            var5 = var6.getGuild;
                            var1 = var1.guild;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var1);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.guild = var1;
                            return var0;
                        };
                        var20 = var21.bind(var22)(var20);
                        var18.guilds = var20;
                        var19 = var19.num_guilds_joined;
                        var18.numGuildsJoined = var19;
                        var11 = var18;
                    case 732:
                        var10.guilds = var11;
                        var11 = var14;
                        var18 = var12 != var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun86443_ip = 769;
                            continue _fun86443
                        }
                    case 749:
                        var19 = var14;
                        var18 = var19.map;
                        var14 = function(arg0) { // Environment: var4
                            var0 = arg0;
                            var3 = var0.user;
                            var0 = _closure1_slot7;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var4 = var1;
                            var0 = new var4[var0](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11 = var18.bind(var19)(var14);
                    case 769:
                        var10.users = var11;
                        var11 = var17;
                        var14 = var12 != var11;
                        var11 = undefined;
                        if (!var14) {
                            _fun86443_ip = 832;
                            continue _fun86443
                        }
                    case 786:
                        var14 = {};
                        var20 = var17.applications;
                        var19 = var20.map;
                        var18 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            var0 = {};
                            var2 = {};
                            var5 = _closure1_slot9;
                            var4 = var1.game;
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var7 = var2;
                            var3 = copyDataProperties(var7, var6);
                            var3 = var1.game;
                            var4 = var3.cover_image_hash;
                            var3 = 'coverImageHash';
                            var2[var3] = var4;
                            var0.game = var2;
                            var1 = var1.num_sessions;
                            var0.numDaysPlayed = var1;
                            return var0;
                        };
                        var18 = var19.bind(var20)(var18);
                        var14.applications = var18;
                        var17 = var17.total_games_played;
                        var14.totalGamesPlayed = var17;
                        var11 = var14;
                    case 832:
                        var10.applications = var11;
                        var11 = var16;
                        var14 = var12 != var11;
                        var11 = undefined;
                        if (!var14) {
                            _fun86443_ip = 880;
                            continue _fun86443
                        }
                    case 849:
                        var14 = {};
                        var17 = var16.num_completed;
                        var14.numCompleted = var17;
                        var16 = var16.num_orbs;
                        var14.numOrbs = var16;
                        var11 = var14;
                    case 880:
                        var10.quests = var11;
                        var11 = var15;
                        var14 = var12 != var11;
                        var11 = undefined;
                        if (!var14) {
                            _fun86443_ip = 957;
                            continue _fun86443
                        }
                    case 897:
                        var14 = {};
                        var16 = var15.num_messages_sent;
                        var14.numMessagesSent = var16;
                        var16 = var15.num_voice_minutes;
                        var14.numVoiceMinutes = var16;
                        var17 = _closure1_slot7;
                        var34 = var15.user;
                        var16 = var17.prototype;
                        var16 = Object.create(var16, {
                            constructor: {
                                value: var17
                            }
                        });
                        var35 = var16;
                        var15 = new var35[var17](var34, var33);
                        var15 = var15 instanceof Object ? var15 : var16;
                        var14.user = var15;
                        var11 = var14;
                    case 957:
                        var10.sidekick = var11;
                        var11 = var13;
                        var12 = var12 != var11;
                        var11 = undefined;
                        if (!var12) {
                            _fun86443_ip = 1019;
                            continue _fun86443
                        }
                    case 974:
                        var12 = {};
                        var14 = var13.type;
                        var12.type = var14;
                        var14 = var13.asset;
                        var12.asset = var14;
                        var14 = var13.label;
                        var12.label = var14;
                        var13 = var13.sku_id;
                        var12.skuId = var13;
                        var11 = var12;
                    case 1019:
                        var10.avatarDecoration = var11;
                        var7.data = var10;
                        var7 = var8.bind(var9)(var7);
                    case 1033: // try_end0
                        _fun86443_ip = 1264;
                        continue _fun86443;
                    case 1038:
                        return var6;
                    case 1041: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'CHECKPOINT_FETCH_FAILED';
                        var6.type = var9;
                        var6 = var7.bind(var8)(var6);
                        _fun86443_ip = 1264;
                        continue _fun86443;
                    case 1087:
                        var4 = function() { // Original name: _getFakeData, environment: var4
                            var3 = _closure1_slot6;
                            var2 = var3.getUserAffinities;
                            var3 = var2.bind(var3)();
                            var2 = var3.slice;
                            var6 = 0;
                            var8 = 4;
                            var4 = var2.bind(var3)(var6, var8);
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot12;
                                var1 = var2.getUser;
                                var0 = arg0;
                                var0 = var0.otherUserId;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var0
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var5 = var3.bind(var4)(var2);
                            var2 = _closure1_slot10;
                            var4 = var2.affinities;
                            var3 = var4.slice;
                            var2 = 3;
                            var4 = var3.bind(var4)(var6, var2);
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var0
                                var3 = _closure1_slot11;
                                var2 = var3.getGuild;
                                var0 = arg0;
                                var0 = var0.guildId;
                                var4 = var2.bind(var3)(var0);
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 12;
                                var0 = var5[var0];
                                var3 = undefined;
                                var6 = var2.bind(var3)(var0);
                                var0 = null;
                                var2 = var0 != var4;
                                var0 = 'Guild must exist';
                                var0 = var6.bind(var3)(var2, var0);
                                var0 = {
                                    'guild': null,
                                    'numMessagesSent': 10382504,
                                    'numVoiceMinutes': 409516.21576666617
                                };
                                var2 = _closure1_slot0;
                                var1 = 13;
                                var1 = var5[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.fromGuildBasic;
                                var1 = {};
                                var9 = var1;
                                var8 = var4;
                                var5 = copyDataProperties(var9, var8);
                                var8 = var4.features;
                                var5 = new Array(0);
                                var7 = 0;
                                var9 = var5;
                                var4 = arraySpread(var9, var8, var7);
                                var4 = 'features';
                                var1[var4] = var5;
                                var1 = var2.bind(var3)(var1);
                                var0.guild = var1;
                                return var0;
                            };
                            var4 = var3.bind(var4)(var2);
                            var2 = _closure1_slot5;
                            var2 = var2.emojiFrecencyWithoutFetchingLatest;
                            var3 = var2.frequently;
                            var2 = var3.slice;
                            var7 = 5;
                            var9 = var2.bind(var3)(var6, var7);
                            var3 = var9.map;
                            var2 = function(arg0) { // Environment: var0
                                _fun86448: for (var _fun86448_ip = 0;;) switch (_fun86448_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = {};
                                        var2 = var1.id;
                                        var0.id = var2;
                                        var2 = 'surrogates';
                                        var2 = var2 in var1;
                                        if (var2) {
                                            _fun86448_ip = 32;
                                            continue _fun86448
                                        }
                                    case 25:
                                        var2 = var1.name;
                                        _fun86448_ip = 37;
                                        continue _fun86448;
                                    case 32:
                                        var2 = var1.surrogates;
                                    case 37:
                                        var0.name = var2;
                                        var1 = var1.animated;
                                        var0.animated = var1;
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var9)(var2);
                            var2 = _closure1_slot4;
                            var1 = var2._getAllApplications;
                            var2 = var1.bind(var2)();
                            var1 = var2.slice;
                            var2 = var1.bind(var2)(var6, var7);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var0 = {};
                                var1 = {};
                                var3 = var2.id;
                                var1.id = var3;
                                var3 = var2.name;
                                var1.name = var3;
                                var3 = var2.icon;
                                var1.icon = var3;
                                var2 = var2.coverImage;
                                var1.coverImageHash = var2;
                                var0.game = var1;
                                var1 = 289;
                                var0.numDaysPlayed = var1;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var0 = {
                                'cardId': 1,
                                'powerLevel': 10400246,
                                'powerLevelPercentile': 5
                            };
                            var7 = 1;
                            var1 = {
                                'numMessagesSent': 10400246,
                                'numMessagesSentPercentile': 99.99
                            };
                            var9 = {
                                'month': 8,
                                'numMessagesSent': 10400246
                            };
                            var1.topMonth = var9;
                            var0.messages = var1;
                            var1 = {
                                'totalVoiceMinutes': 2741198.975133333,
                                'totalVoiceMinutesPercentile': 99.99
                            };
                            var9 = {
                                'numMinutesInVoice': 2741198.975133333,
                                'month': 8
                            };
                            var1.topMonth = var9;
                            var0.voice = var1;
                            var1 = {
                                'numCompleted': 164,
                                'numOrbs': 122690
                            };
                            var0.quests = var1;
                            var1 = var5.slice;
                            var1 = var1.bind(var5)(var7, var8);
                            var0.users = var1;
                            var1 = {
                                'user': null,
                                'numMessagesSent': 10400246,
                                'numVoiceMinutes': 2741198.975133333
                            };
                            var5 = var5[var6];
                            var1.user = var5;
                            var0.sidekick = var1;
                            var1 = {};
                            var1.guilds = var4;
                            var4 = 203;
                            var1.numGuildsJoined = var4;
                            var0.guilds = var1;
                            var1 = {};
                            var1.emojis = var3;
                            var3 = 557927580;
                            var1.numEmojisSent = var3;
                            var0.emojis = var1;
                            var1 = {};
                            var1.applications = var2;
                            var2 = 4278;
                            var1.totalGamesPlayed = var2;
                            var0.applications = var1;
                            return var0;
                        };
                        var4 = var4.bind(var2)();
                        var10 = var4.users;
                        var11 = var4.guilds;
                        var13 = var4.emojis;
                        var9 = var4.applications;
                        var17 = var4.cardId;
                        var16 = var4.powerLevel;
                        var15 = var4.powerLevelPercentile;
                        var14 = var4.messages;
                        var12 = var4.voice;
                        var7 = var4.sidekick;
                        var8 = var4.quests;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CHECKPOINT_FETCH_SUCCESS';
                        var3.type = var6;
                        var6 = {};
                        var6.cardId = var17;
                        var6.powerLevel = var16;
                        var6.powerLevelPercentile = var15;
                        var6.messages = var14;
                        var6.emojis = var13;
                        var6.voice = var12;
                        var6.guilds = var11;
                        var6.users = var10;
                        var6.applications = var9;
                        var6.quests = var8;
                        var6.sidekick = var7;
                        var3.data = var6;
                        var3 = var4.bind(var5)(var3);
                    case 1264:
                        return var2;
                    case 1267:
                        return var1;
                    case 1270:
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
    var0 = function() { // Original name: _sendSidekickMessage, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun86456: for (var _fun86456_ip = 0;;) switch (_fun86456_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var13 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86456_ip = 317;
                            continue _fun86456
                        }
                    case 18:
                        var _closure4_slot0 = var10;
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 21;
                        var1 = var5[var1];
                        var5 = undefined;
                        var6 = var2.bind(var5)(var1);
                        var2 = var6.openPrivateChannel;
                        var1 = {
                            'recipientIds': null,
                            'location': 'checkpoint-sidekick',
                            'navigateToChannel': false
                        };
                        var1.recipientIds = var13;
                        var8 = 'checkpoint-sidekick';
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86456_ip = 314;
                            continue _fun86456
                        }
                    case 97:
                        var6 = _closure1_slot8;
                        var2 = var6.getChannel;
                        var2 = var2.bind(var6)(var1);
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun86456_ip = 278;
                            continue _fun86456
                        }
                    case 120:
                        var6 = _closure1_slot13;
                        var9 = var6.bind(var5)();
                        var6 = var9.findIndex;
                        var4 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            var0 = var1.trim;
                            var1 = var0.bind(var1)();
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var14 = var6.bind(var9)(var4);
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 22;
                        var6 = var9[var6];
                        var12 = var4.bind(var5)(var6);
                        var11 = var12.track;
                        var3 = _closure1_slot14;
                        var6 = var3.CHECKPOINT_SIDEKICK_MESSAGE_SENT;
                        var3 = {};
                        var3.other_user_id = var13;
                        var13 = var14.toString;
                        var13 = var13.bind(var14)();
                        var3.message_variant = var13;
                        var3 = var11.bind(var12)(var6, var3);
                        var3 = 19;
                        var3 = var9[var3];
                        var6 = var4.bind(var5)(var3);
                        var3 = var6.parse;
                        var17 = var3.bind(var6)(var2, var10);
                        var3 = 20;
                        var3 = var9[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.sendMessage;
                        var18 = var2.id;
                        var2 = {};
                        var2.location = var8;
                        var19 = var5;
                        var16 = false;
                        var15 = var2;
                        var2 = var19[var4](var18, var17, var16, var15, var14);
                        return var2;
                    case 278:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var18 = 'Failed to open private channel';
                        var19 = var3;
                        var2 = new var19[var4](var18, var17);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 314:
                        return var1;
                    case 317:
                        return var0;
                }
            };
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
    var0 = function() { // Original name: _claimAvatarDecoration, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86460: for (var _fun86460_ip = 0;;) switch (_fun86460_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86460_ip = 85;
                            continue _fun86460
                        }
                    case 7: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {
                            'url': '/checkpoint/loot',
                            'rejectWithError': true
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 66);
                    case 64:
                        return var1;
                    case 66:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86460_ip = 75;
                            continue _fun86460
                        }
                    case 72: // try_end0
                        return var1;
                    case 75:
                        return var1;
                    case 78: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = undefined;
                        return var1;
                    case 85:
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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.gameFromServer;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.CHECKPOINT_LOVE_LETTER_STRINGS;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot14 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun86463: for (var _fun86463_ip = 0;;) switch (_fun86463_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86463_ip = 173;
                            continue _fun86463
                        }
                    case 15:
                        var1 = arg1;
                        var1 = var1.withMessage;
                        var _closure4_slot0 = var1;
                        var3 = undefined;
                        SaveGenerator(address = 34);
                    case 32:
                        return var3;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86463_ip = 170;
                            continue _fun86463
                        }
                    case 43:
                        var2 = global;
                        var7 = var2.Promise;
                        var6 = var7.all;
                        var8 = var9.map;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 17;
                        var2 = var11[var2];
                        var2 = var10.bind(var3)(var2);
                        var2 = var2.getOrResolveChannelIdFromDestinationId;
                        var2 = var8.bind(var9)(var2);
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 105);
                    case 103:
                        return var2;
                    case 105:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun86463_ip = 167;
                            continue _fun86463
                        }
                    case 111:
                        var6 = var2.filter;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 18;
                        var5 = var8[var5];
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.isNotNullish;
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.forEach;
                        var4 = function(arg0) { // Environment: var4
                            _fun86464: for (var _fun86464_ip = 0;;) switch (_fun86464_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = _closure1_slot8;
                                    var1 = var2.getChannel;
                                    var6 = var1.bind(var2)(var5);
                                    var8 = null;
                                    if (!(var8 != var6)) {
                                        _fun86464_ip = 150;
                                        continue _fun86464
                                    }
                                case 29:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 19;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.parse;
                                    var1 = _closure4_slot0;
                                    var8 = var8 != var1;
                                    var1 = '';
                                    if (!var8) {
                                        _fun86464_ip = 79;
                                        continue _fun86464
                                    }
                                case 75:
                                    var1 = _closure4_slot0;
                                case 79:
                                    var4 = var3.bind(var4)(var6, var1);
                                    var1 = new Array(0);
                                    var4.components = var1;
                                    var1 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var0 = 20;
                                    var0 = var3[var0];
                                    var3 = var1.bind(var2)(var0);
                                    var2 = var3.sendMessage;
                                    var10 = false;
                                    var9 = {
                                        'location': 'checkpoint',
                                        'withCheckpoint': true
                                    };
                                    var13 = var3;
                                    var12 = var5;
                                    var11 = var4;
                                    var0 = var13[var2](var12, var11, var10, var9, var8);
                                case 150:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 167:
                        return var2;
                    case 170:
                        return var1;
                    case 173:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/CheckpointActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: fetchCheckpointData, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchCheckpointData = var4;
    var2.sendCheckpointMessage = var3;
    var3 = function() { // Original name: sendSidekickMessage, environment: var1
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendSidekickMessage = var3;
    var3 = function() { // Original name: claimAvatarDecoration, environment: var1
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.claimAvatarDecoration = var3;
    var3 = function(arg0) { // Original name: setVolume, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CHECKPOINT_SET_VOLUME';
        var0.type = var3;
        var3 = arg0;
        var0.volume = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.setVolume = var3;
    var3 = function() { // Original name: toggleMute, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CHECKPOINT_TOGGLE_MUTE';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.toggleMute = var3;
    var3 = function(arg0) { // Original name: setHighestSlideSeen, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CHECKPOINT_SET_HIGHEST_SLIDE_SEEN';
        var0.type = var3;
        var3 = arg0;
        var0.slide = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.setHighestSlideSeen = var3;
    var3 = function() { // Original name: afterCheckpointClosed, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CHECKPOINT_AFTER_CLOSED';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.afterCheckpointClosed = var3;
    var1 = function() { // Original name: markRewatchPopoverAsSeen, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.markRewatchPopoverAsSeen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3413, 4699, 6936, 1620, 1372, 3443, 8823, 1410, 1613, 9123, 660, 44, 1598, 806, 507, 21, 6584, 1304, 5549, 6487, 3905, 795, 2]);