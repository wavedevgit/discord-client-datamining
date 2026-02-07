// modules/quickswitcher/QuickSwitcherActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var10;
    var7 = function arg0() {
        _fun73154: for (var _fun73154_ip = 0;;) switch (_fun73154_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.charAt;
                var1 = 0;
                var6 = var0.bind(var7)(var1);
                var2 = _closure1_slot17;
                var4 = var2[var6];
                var3 = null;
                var5 = var3 != var4;
                var2 = null;
                if (!var5) {
                    _fun73154_ip = 41;
                    continue _fun73154
                }
            case 38:
                var2 = var4;
            case 41:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 11;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var5 = var5.AutocompleterQuerySymbols;
                var5 = var5.APPLICATION;
                if (!(var6 === var5)) {
                    _fun73154_ip = 81;
                    continue _fun73154
                }
            case 79:
                var2 = null;
            case 81:
                var6 = var7.replace;
                var5 = _closure1_slot18;
                var3 = '';
                var5 = var6.bind(var7)(var5, var3);
                var3 = new Array(2);
                var3[0] = var5;
                var3[1] = var2;
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var0 = {};
                var1 = var2[var1];
                var0.query = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.queryMode = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var7;
    var6 = function arg0() {
        _fun73155: for (var _fun73155_ip = 0;;) switch (_fun73155_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun73155_ip = 161;
                    continue _fun73155
                }
            case 23:
                var2 = _closure1_slot9;
                var1 = var2.getGuildId;
                var6 = var1.bind(var2)();
                var2 = _closure1_slot8;
                var1 = var2.getChannelId;
                var5 = var1.bind(var2)(var6);
                var1 = null;
                var2 = var1 != var5;
                var3 = undefined;
                var4 = undefined;
                if (!var2) {
                    _fun73155_ip = 96;
                    continue _fun73155
                }
            case 65:
                var7 = _closure1_slot6;
                var2 = var7.getChannel;
                var2 = var2.bind(var7)(var5);
                var7 = var1 != var2;
                var1 = null;
                if (!var7) {
                    _fun73155_ip = 93;
                    continue _fun73155
                }
            case 88:
                var1 = var2.type;
            case 93:
                var4 = var1;
            case 96:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.track;
                var0 = _closure1_slot12;
                var1 = var0.QUICKSWITCHER_OPENED;
                var0 = {};
                var7 = arg0;
                var0.source = var7;
                var0.current_guild_id = var6;
                var0.current_channel_id = var5;
                var0.current_channel_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 161:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var6;
    var5 = function arg0, arg1() {
        _fun73156: for (var _fun73156_ip = 0;;) switch (_fun73156_ip) {
            case 0:
                var9 = arg1;
                var2 = _closure1_slot10;
                var0 = var2.getProps;
                var0 = var0.bind(var2)();
                var7 = var0.results;
                var16 = var0.queryMode;
                var11 = var0.query;
                var2 = var0.maxQueryLength;
                var3 = _closure1_slot9;
                var0 = var3.getGuildId;
                var15 = var0.bind(var3)();
                var3 = _closure1_slot8;
                var0 = var3.getChannelId;
                var6 = var0.bind(var3)(var15);
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 11;
                var3 = var10[var8];
                var0 = undefined;
                var12 = var4.bind(var0)(var3);
                var5 = var12.findNextSelectedResult;
                var3 = var10[var8];
                var3 = var4.bind(var0)(var3);
                var3 = var3.FindResultDirections;
                var4 = var3.DOWN;
                var3 = -1;
                var3 = var5.bind(var12)(var4, var3, var7);
                var5 = var7[var3];
                var4 = _closure1_slot1;
                var3 = 13;
                var12 = var10[var3];
                var13 = var4.bind(var0)(var12);
                var12 = var13.isEmail;
                var14 = var12.bind(var13)(var11);
                var12 = var10[var3];
                var13 = var4.bind(var0)(var12);
                var12 = var13.isPhoneNumber;
                var13 = var12.bind(var13)(var11);
                var3 = var10[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isUserTagLike;
                var12 = var3.bind(var4)(var11);
                var3 = null;
                var18 = var3 != var6;
                if (!var18) {
                    _fun73156_ip = 224;
                    continue _fun73156
                }
            case 215:
                var4 = _closure1_slot15;
                var18 = var4.bind(var0)(var6);
            case 224:
                var10 = function arg0() {
                    _fun73157: for (var _fun73157_ip = 0;;) switch (_fun73157_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var1 = var0 == var2;
                            if (var1) {
                                _fun73157_ip = 96;
                                continue _fun73157
                            }
                        case 12:
                            var3 = var2.type;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var1 = var1.AutocompleterResultTypes;
                            var1 = var1.IN_APP_NAVIGATION;
                            if (!(var3 !== var1)) {
                                _fun73157_ip = 65;
                                continue _fun73157
                            }
                        case 58:
                            var1 = var2.type;
                            _fun73157_ip = 93;
                            continue _fun73157;
                        case 65:
                            var4 = var2.type;
                            var3 = '_';
                            var3 = var4 + var3;
                            var2 = var2.record;
                            var2 = var2.type;
                            var1 = var3 + var2;
                        case 93:
                            var0 = var1;
                        case 96:
                            return var0;
                    }
                };
                var4 = {};
                var17 = undefined;
                if (var18) {
                    _fun73156_ip = 243;
                    continue _fun73156
                }
            case 240:
                var17 = var6;
            case 243:
                var4.current_channel_id = var17;
                var17 = undefined;
                if (!var18) {
                    _fun73156_ip = 256;
                    continue _fun73156
                }
            case 253:
                var17 = var6;
            case 256:
                var4.current_channel_static_route = var17;
                var4.current_guild_id = var15;
                var17 = var3 != var16;
                var15 = 'GENERAL';
                if (!var17) {
                    _fun73156_ip = 282;
                    continue _fun73156
                }
            case 279:
                var15 = var16;
            case 282:
                var4.query_mode = var15;
                var15 = var11.length;
                var4.query_length = var15;
                var4.max_query_length = var2;
                var4.is_email_like = var14;
                var4.is_phone_like = var13;
                var4.is_username_like = var12;
                var2 = null;
                if (var14) {
                    _fun73156_ip = 343;
                    continue _fun73156
                }
            case 330:
                var2 = null;
                if (var13) {
                    _fun73156_ip = 343;
                    continue _fun73156
                }
            case 335:
                var2 = null;
                if (var12) {
                    _fun73156_ip = 343;
                    continue _fun73156
                }
            case 340:
                var2 = var11;
            case 343:
                var4.query = var2;
                var2 = var10.bind(var0)(var5);
                var4.top_result_type = var2;
                var11 = var3 != var5;
                var2 = null;
                if (!var11) {
                    _fun73156_ip = 375;
                    continue _fun73156
                }
            case 369:
                var2 = var5.score;
            case 375:
                var4.top_result_score = var2;
                var5 = _closure1_slot10;
                var2 = var5.getResultTotals;
                var2 = var2.bind(var5)();
                var4.num_results_total = var2;
                var13 = _closure1_slot10;
                var11 = var13.getResultTotals;
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = var2[var8];
                var5 = var12.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.USER;
                var5 = var11.bind(var13)(var5);
                var4.num_results_users = var5;
                var13 = _closure1_slot10;
                var11 = var13.getResultTotals;
                var5 = var2[var8];
                var5 = var12.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.TEXT_CHANNEL;
                var5 = var11.bind(var13)(var5);
                var4.num_results_text_channels = var5;
                var13 = _closure1_slot10;
                var11 = var13.getResultTotals;
                var5 = var2[var8];
                var5 = var12.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.VOICE_CHANNEL;
                var5 = var11.bind(var13)(var5);
                var4.num_results_voice_channels = var5;
                var13 = _closure1_slot10;
                var11 = var13.getResultTotals;
                var5 = var2[var8];
                var5 = var12.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.GUILD;
                var5 = var11.bind(var13)(var5);
                var4.num_results_guilds = var5;
                var11 = _closure1_slot10;
                var5 = var11.getResultTotals;
                var2 = var2[var8];
                var2 = var12.bind(var0)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.GROUP_DM;
                var2 = var5.bind(var11)(var2);
                var4.num_results_group_dms = var2;
                if (!(var3 != var6)) {
                    _fun73156_ip = 664;
                    continue _fun73156
                }
            case 630:
                var5 = _closure1_slot6;
                var2 = var5.getChannel;
                var5 = var2.bind(var5)(var6);
                var6 = var3 != var5;
                var2 = null;
                if (!var6) {
                    _fun73156_ip = 658;
                    continue _fun73156
                }
            case 653:
                var2 = var5.type;
            case 658:
                var4.current_channel_type = var2;
            case 664:
                if (!(var3 != var9)) {
                    _fun73156_ip = 987;
                    continue _fun73156
                }
            case 671:
                var6 = var9.type;
                var5 = var9.score;
                var2 = var9.record;
                var10 = var10.bind(var0)(var9);
                var4.selected_type = var10;
                var4.selected_score = var5;
                var5 = var7.indexOf;
                var5 = var5.bind(var7)(var9);
                var4.selected_index = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.GUILD;
                if (!(var5 !== var6)) {
                    _fun73156_ip = 976;
                    continue _fun73156
                }
            case 764:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.TEXT_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun73156_ip = 927;
                    continue _fun73156
                }
            case 800:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.VOICE_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun73156_ip = 927;
                    continue _fun73156
                }
            case 833:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.GROUP_DM;
                if (!(var5 !== var6)) {
                    _fun73156_ip = 914;
                    continue _fun73156
                }
            case 866:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.USER;
                if (!(var5 === var6)) {
                    _fun73156_ip = 987;
                    continue _fun73156
                }
            case 899:
                var5 = var2.id;
                var4.selected_user_id = var5;
                _fun73156_ip = 987;
                continue _fun73156;
            case 914:
                var5 = var2.id;
                var4.selected_channel_id = var5;
                _fun73156_ip = 987;
                continue _fun73156;
            case 927:
                var5 = _closure1_slot5;
                var5 = var2 instanceof var5;
                if (!var5) {
                    _fun73156_ip = 963;
                    continue _fun73156
                }
            case 938:
                var5 = var2.guild_id;
                var5 = var3 != var5;
                var3 = null;
                if (!var5) {
                    _fun73156_ip = 957;
                    continue _fun73156
                }
            case 952:
                var3 = var2.guild_id;
            case 957:
                var4.selected_guild_id = var3;
            case 963:
                var3 = var2.id;
                var4.selected_channel_id = var3;
                _fun73156_ip = 987;
                continue _fun73156;
            case 976:
                var2 = var2.id;
                var4.selected_guild_id = var2;
            case 987:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.track;
                var1 = arg0;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var _closure1_slot21 = var5;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUICKSWITCHER_HIDE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var4 = function() {
        _fun73159: for (var _fun73159_ip = 0;;) switch (_fun73159_ip) {
            case 0:
                var2 = arguments[0];
                var5 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun73159_ip = 16;
                    continue _fun73159
                }
            case 12:
                var2 = 'KEYBIND';
            case 16:
                if (!(var5 === var0)) {
                    _fun73159_ip = 24;
                    continue _fun73159
                }
            case 20:
                var5 = '';
            case 24:
                var1 = _closure1_slot20;
                var1 = var1.bind(var0)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'QUICKSWITCHER_SHOW';
                var1.type = var6;
                var4 = _closure1_slot19;
                var7 = var4.bind(var0)(var5);
                var8 = var1;
                var4 = copyDataProperties(var8, var7);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var3 = function() {
        var3 = _closure1_slot21;
        var0 = _closure1_slot12;
        var2 = var0.QUICKSWITCHER_CLOSED;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot22;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot24 = var3;
    var8 = global;
    var14 = var8.Object;
    var13 = var14.defineProperty;
    var11 = {};
    var0 = true;
    var11.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var11);
    var0 = 0;
    var11 = var10[var0];
    var0 = undefined;
    var11 = var12.bind(var0)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.InAppNavigationType;
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.ChannelRecordBase;
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot9 = var11;
    var11 = 7;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot10 = var11;
    var11 = 8;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var12 = var11.Layers;
    var12 = var11.ME;
    var _closure1_slot11 = var12;
    var12 = var11.AnalyticEvents;
    var _closure1_slot12 = var12;
    var12 = var11.AnalyticsLocations;
    var _closure1_slot13 = var12;
    var11 = var11.AnalyticsPages;
    var _closure1_slot14 = var11;
    var11 = 9;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.isStaticChannelRoute;
    var _closure1_slot15 = var11;
    var11 = 10;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.CollectibleShopTab;
    var _closure1_slot16 = var11;
    var14 = var8.Object;
    var13 = var14.freeze;
    var12 = {};
    var11 = 11;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterQuerySymbols;
    var16 = var15.USER;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterResultTypes;
    var15 = var15.USER;
    var12[var16] = var15;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterQuerySymbols;
    var16 = var15.TEXT_CHANNEL;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterResultTypes;
    var15 = var15.TEXT_CHANNEL;
    var12[var16] = var15;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterQuerySymbols;
    var16 = var15.VOICE_CHANNEL;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterResultTypes;
    var15 = var15.VOICE_CHANNEL;
    var12[var16] = var15;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterQuerySymbols;
    var16 = var15.GUILD;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterResultTypes;
    var15 = var15.GUILD;
    var12[var16] = var15;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterQuerySymbols;
    var16 = var15.APPLICATION;
    var15 = var10[var11];
    var15 = var9.bind(var0)(var15);
    var15 = var15.AutocompleterResultTypes;
    var15 = var15.APPLICATION;
    var12[var16] = var15;
    var12 = var13.bind(var14)(var12);
    var _closure1_slot17 = var12;
    var12 = var8.RegExp;
    var13 = var10[var11];
    var13 = var9.bind(var0)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var19 = var13.USER;
    var13 = var10[var11];
    var13 = var9.bind(var0)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var26 = var13.TEXT_CHANNEL;
    var13 = var10[var11];
    var13 = var9.bind(var0)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var24 = var13.VOICE_CHANNEL;
    var13 = var10[var11];
    var13 = var9.bind(var0)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var22 = var13.GUILD;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.AutocompleterQuerySymbols;
    var20 = var11.APPLICATION;
    var8 = var8.HermesInternal;
    var14 = var8.concat;
    var29 = '^';
    var11 = '|';
    var8 = '|\\';
    var28 = var19;
    var27 = var11;
    var25 = var11;
    var23 = var8;
    var21 = var8;
    var28 = var29[var14](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19);
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var29 = var11;
    var8 = new var29[var12](var28, var27);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot18 = var8;
    var8 = 26;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quickswitcher/QuickSwitcherActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getQuickSwitcherOptions = var7;
    var2.trackOpen = var6;
    var2.trackClose = var5;
    var2.show = var4;
    var2.hide = var3;
    var3 = function() {
        _fun73161: for (var _fun73161_ip = 0;;) switch (_fun73161_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun73161_ip = 13;
                    continue _fun73161
                }
            case 9:
                var3 = 'KEYBIND';
            case 13:
                var4 = _closure1_slot10;
                var2 = var4.isOpen;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun73161_ip = 44;
                    continue _fun73161
                }
            case 33:
                var2 = _closure1_slot23;
                var2 = var2.bind(var0)(var3);
                _fun73161_ip = 52;
                continue _fun73161;
            case 44:
                var1 = _closure1_slot24;
                var1 = var1.bind(var0)();
            case 52:
                return var0;
        }
    };
    var2.toggle = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'QUICKSWITCHER_SEARCH';
        var1.type = var5;
        var5 = _closure1_slot19;
        var4 = arg0;
        var6 = var5.bind(var0)(var4);
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.search = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUICKSWITCHER_SELECT';
        var1.type = var4;
        var4 = arg0;
        var1.selectedIndex = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.selectResult = var3;
    var1 = function arg0() {
        _fun73164: for (var _fun73164_ip = 0;;) switch (_fun73164_ip) {
            case 0:
                var4 = arg0;
                var5 = arguments[1];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73164_ip = 14;
                    continue _fun73164
                }
            case 12:
                var5 = false;
            case 14:
                var2 = _closure1_slot22;
                var2 = var2.bind(var0)();
                var3 = _closure1_slot21;
                var2 = _closure1_slot12;
                var2 = var2.QUICKSWITCHER_RESULT_SELECTED;
                var2 = var3.bind(var0)(var2, var4);
                var6 = var4.type;
                var2 = var4.record;
                var9 = {};
                var3 = _closure1_slot14;
                var3 = var3.QUICK_SWITCHER;
                var9.page = var3;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 11;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.GUILD;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 1244;
                    continue _fun73164
                }
            case 112:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.TEXT_CHANNEL;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 1160;
                    continue _fun73164
                }
            case 148:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.VOICE_CHANNEL;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 998;
                    continue _fun73164
                }
            case 184:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.USER;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 884;
                    continue _fun73164
                }
            case 220:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.GROUP_DM;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 796;
                    continue _fun73164
                }
            case 256:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.APPLICATION;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 732;
                    continue _fun73164
                }
            case 292:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.LINK;
                if (!(var3 !== var6)) {
                    _fun73164_ip = 686;
                    continue _fun73164
                }
            case 328:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var0)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.IN_APP_NAVIGATION;
                if (!(var3 === var6)) {
                    _fun73164_ip = 1290;
                    continue _fun73164
                }
            case 364:
                var3 = var4.record;
                var6 = var3.type;
                var3 = _closure1_slot4;
                var3 = var3.SETTINGS;
                if (!(var6 !== var3)) {
                    _fun73164_ip = 644;
                    continue _fun73164
                }
            case 392:
                var3 = var4.record;
                var6 = var3.type;
                var3 = _closure1_slot4;
                var3 = var3.PLAYGROUND;
                if (!(var6 !== var3)) {
                    _fun73164_ip = 599;
                    continue _fun73164
                }
            case 420:
                var3 = var4.record;
                var6 = var3.type;
                var3 = _closure1_slot4;
                var3 = var3.SHOP_ORBS_TAB;
                if (!(var6 !== var3)) {
                    _fun73164_ip = 491;
                    continue _fun73164
                }
            case 445:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 21;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var2.path;
                var3 = {};
                var8 = true;
                var3.navigationReplace = var8;
                var3 = var7.bind(var0)(var6, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 491:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 24;
                var3 = var11[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var7.openCollectiblesShop;
                var3 = {};
                var8 = _closure1_slot16;
                var8 = var8.ORBS;
                var3.tab = var8;
                var10 = _closure1_slot1;
                var8 = 25;
                var12 = var11[var8];
                var12 = var10.bind(var0)(var12);
                var13 = var12.QUICK_SWITCHER;
                var12 = new Array(1);
                var12[0] = var13;
                var3.analyticsLocations = var12;
                var8 = var11[var8];
                var8 = var10.bind(var0)(var8);
                var8 = var8.QUICK_SWITCHER;
                var3.analyticsSource = var8;
                var3 = var6.bind(var7)(var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 599:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 23;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var7.getHasPlaygroundAccess;
                var3 = 'quickswitcher_action';
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun73164_ip = 1290;
                    continue _fun73164
                }
            case 642:
                return var0;
            case 644:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 22;
                var3 = var7[var3];
                var6 = var6.bind(var0)(var3);
                var3 = var4.record;
                var3 = var3.path;
                var3 = var6.bind(var0)(var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 686:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 21;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var6 = var2.path;
                var3 = {};
                var8 = true;
                var3.navigationReplace = var8;
                var3 = var7.bind(var0)(var6, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 732:
                var7 = _closure1_slot7;
                var6 = var7.getActiveLibraryApplication;
                var3 = var2.id;
                var3 = var6.bind(var7)(var3);
                var3 = var2.id;
                var3 = _closure1_slot13;
                var6 = var3.QUICK_SWITCHER;
                var3 = var3.QUICK_SWITCHER;
                var3 = global;
                var6 = var3.Promise;
                var3 = var6.resolve;
                var3 = var3.bind(var6)();
                _fun73164_ip = 1290;
                continue _fun73164;
            case 796:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 16;
                var3 = var7[var3];
                var10 = var6.bind(var0)(var3);
                var8 = var10.transitionToChannel;
                var6 = var2.id;
                var3 = {};
                var11 = true;
                var3.navigationReplace = var11;
                var3 = var8.bind(var10)(var6, var3);
                var6 = _closure1_slot1;
                var3 = 20;
                var3 = var7[var3];
                var8 = var6.bind(var0)(var3);
                var7 = var8.channelListScrollTo;
                var6 = _closure1_slot11;
                var3 = var2.id;
                var3 = var7.bind(var8)(var6, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 884:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var10 = var6.bind(var0)(var3);
                var8 = var10.openPrivateChannel;
                var3 = {};
                var12 = var2.id;
                var11 = new Array(1);
                var11[0] = var12;
                var3.recipientIds = var11;
                var11 = 'Quickswitcher';
                var3.location = var11;
                var3 = var8.bind(var10)(var3);
                var3 = 20;
                var3 = var7[var3];
                var8 = var6.bind(var0)(var3);
                var7 = var8.channelListScrollTo;
                var6 = _closure1_slot11;
                var11 = _closure1_slot6;
                var10 = var11.getDMFromUserId;
                var3 = var2.id;
                var3 = var10.bind(var11)(var3);
                var3 = var7.bind(var8)(var6, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 998:
                var7 = _closure1_slot6;
                var6 = var7.getChannel;
                var3 = var2.id;
                var3 = var6.bind(var7)(var3);
                var6 = null;
                if (!(var6 != var3)) {
                    _fun73164_ip = 1290;
                    continue _fun73164
                }
            case 1026:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                if (var5) {
                    _fun73164_ip = 1067;
                    continue _fun73164
                }
            case 1037:
                var5 = 18;
                var5 = var7[var5];
                var10 = var6.bind(var0)(var5);
                var8 = var10.selectVoiceChannel;
                var5 = var2.id;
                var5 = var8.bind(var10)(var5);
                _fun73164_ip = 1098;
                continue _fun73164;
            case 1067:
                var5 = 17;
                var5 = var7[var5];
                var8 = var6.bind(var0)(var5);
                var7 = var8.updateChatOpen;
                var6 = var2.id;
                var5 = true;
                var5 = var7.bind(var8)(var6, var5);
            case 1098:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.transitionToChannel;
                var5 = var3.id;
                var3 = {};
                var8 = {};
                var8.analyticsSource = var9;
                var3.state = var8;
                var8 = true;
                var3.navigationReplace = var8;
                var3 = var6.bind(var7)(var5, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 1160:
                var6 = _closure1_slot6;
                var5 = var6.getChannel;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                var5 = null;
                if (!(var5 != var3)) {
                    _fun73164_ip = 1290;
                    continue _fun73164
                }
            case 1185:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.transitionToChannel;
                var5 = var3.id;
                var3 = {};
                var8 = {};
                var8.analyticsSource = var9;
                var3.state = var8;
                var8 = true;
                var3.navigationReplace = var8;
                var3 = var6.bind(var7)(var5, var3);
                _fun73164_ip = 1290;
                continue _fun73164;
            case 1244:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.transitionToGuild;
                var3 = var2.id;
                var2 = {};
                var7 = true;
                var2.navigationReplace = var7;
                var2 = var5.bind(var6)(var3, var2);
            case 1290:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'QUICKSWITCHER_SWITCH_TO';
                var1.type = var5;
                var1.result = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.switchToResult = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5643, 1376, 1372, 3490, 1672, 3214, 6691, 660, 1379, 3284, 6692, 795, 5947, 806, 5666, 3944, 7949, 4231, 3946, 9159, 5668, 9160, 9161, 4597, 5631, 2]);