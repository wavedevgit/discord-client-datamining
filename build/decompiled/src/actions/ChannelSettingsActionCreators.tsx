// actions/ChannelSettingsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var15;
    var11 = function(arg0, arg1, arg2) { // Original name: init, environment: var13
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_INIT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.location = var4;
        var4 = arg2;
        var1.subsection = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot8 = var11;
    var10 = function(arg0, arg1, arg2) { // Original name: open, environment: var13
        _fun53064: for (var _fun53064_ip = 0;;) switch (_fun53064_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getRootNavigationRef;
                var4 = var1.bind(var3)();
                var3 = null;
                if (!(var3 != var4)) {
                    _fun53064_ip = 141;
                    continue _fun53064
                }
            case 44:
                var1 = var4.isReady;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun53064_ip = 141;
                    continue _fun53064
                }
            case 57:
                var7 = _closure1_slot8;
                var6 = arg1;
                var1 = arg2;
                var1 = var7.bind(var0)(var5, var6, var1);
                var6 = _closure1_slot4;
                var1 = var6.getSection;
                var1 = var1.bind(var6)();
                if (!(var3 == var1)) {
                    _fun53064_ip = 102;
                    continue _fun53064
                }
            case 92:
                var2 = _closure1_slot7;
                var1 = var2.OVERVIEW;
            case 102:
                var3 = var4.navigate;
                var2 = {};
                var2.channelId = var5;
                var2.initialRouteName = var1;
                var1 = 'channel-settings-action-creators-open';
                var2.source = var1;
                var1 = 'sidebar';
                var1 = var3.bind(var4)(var1, var2);
            case 141:
                return var0;
        }
    };
    var9 = function() { // Original name: close, environment: var13
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot9 = var9;
    var8 = function(arg0) { // Original name: setSection, environment: var13
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_SET_SECTION';
        var1.type = var4;
        var4 = arg0;
        var1.section = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var7 = function(arg0) { // Original name: selectPermissionOverwrite, environment: var13
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_SETTINGS_OVERWRITE_SELECT';
        var1.type = var4;
        var4 = arg0;
        var1.overwriteId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6 = function(arg0) { // Original name: updateChannel, environment: var13
        var0 = arg0;
        var26 = var0.name;
        var25 = var0.type;
        var24 = var0.topic;
        var23 = var0.bitrate;
        var22 = var0.userLimit;
        var21 = var0.nsfw;
        var20 = var0.flags;
        var19 = var0.rateLimitPerUser;
        var18 = var0.defaultThreadRateLimitPerUser;
        var17 = var0.defaultAutoArchiveDuration;
        var16 = var0.template;
        var15 = var0.defaultReactionEmoji;
        var14 = var0.rtcRegion;
        var13 = var0.videoQualityMode;
        var12 = var0.autoArchiveDuration;
        var11 = var0.locked;
        var10 = var0.invitable;
        var9 = var0.availableTags;
        var8 = var0.defaultSortOrder;
        var7 = var0.defaultForumLayout;
        var6 = var0.defaultTagSetting;
        var5 = var0.iconEmoji;
        var4 = var0.themeColor;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var27 = 'CHANNEL_SETTINGS_UPDATE';
        var1.type = var27;
        var1.name = var26;
        var1.channelType = var25;
        var1.topic = var24;
        var1.bitrate = var23;
        var1.userLimit = var22;
        var1.nsfw = var21;
        var1.flags = var20;
        var1.rateLimitPerUser = var19;
        var1.defaultThreadRateLimitPerUser = var18;
        var1.defaultAutoArchiveDuration = var17;
        var1.template = var16;
        var1.defaultReactionEmoji = var15;
        var1.rtcRegion = var14;
        var1.videoQualityMode = var13;
        var1.autoArchiveDuration = var12;
        var1.locked = var11;
        var1.invitable = var10;
        var1.availableTags = var9;
        var1.defaultSortOrder = var8;
        var1.defaultForumLayout = var7;
        var1.defaultTagSetting = var6;
        var1.iconEmoji = var5;
        var1.themeColor = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var5 = function() { // Original name: saveChannel, environment: var13
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _saveChannel, environment: var13
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun53072: for (var _fun53072_ip = 0;;) switch (_fun53072_ip) {
                    case 0:
                        StartGenerator();
                        var35 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53072_ip = 635;
                            continue _fun53072
                        }
                    case 18:
                        var _closure4_slot0 = var35;
                        var33 = var1.name;
                        var32 = var1.type;
                        var31 = var1.position;
                        var30 = var1.topic;
                        var29 = var1.bitrate;
                        var28 = var1.userLimit;
                        var27 = var1.nsfw;
                        var26 = var1.flags;
                        var25 = var1.permissionOverwrites;
                        var24 = var1.rateLimitPerUser;
                        var23 = var1.defaultThreadRateLimitPerUser;
                        var22 = var1.defaultAutoArchiveDuration;
                        var21 = var1.template;
                        var19 = var1.defaultReactionEmoji;
                        var20 = var1.rtcRegion;
                        var17 = var1.videoQualityMode;
                        var16 = var1.autoArchiveDuration;
                        var15 = var1.locked;
                        var10 = var1.invitable;
                        var18 = var1.availableTags;
                        var14 = var1.defaultSortOrder;
                        var13 = var1.defaultForumLayout;
                        var12 = var1.defaultTagSetting;
                        var11 = var1.iconEmoji;
                        var8 = var1.themeColor;
                        var9 = undefined;
                        var _closure4_slot1 = var9;
                        SaveGenerator(address = 178);
                    case 176:
                        return var9;
                    case 178:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53072_ip = 632;
                            continue _fun53072
                        }
                    case 187:
                        var4 = _closure1_slot5;
                        var2 = var4.getChannel;
                        var2 = var2.bind(var4)(var35);
                        _closure4_slot1 = var2;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var34 = var4.bind(var9)(var2);
                        var6 = var34.dispatch;
                        var2 = {};
                        var36 = 'CHANNEL_SETTINGS_SUBMIT';
                        var2.type = var36;
                        var2 = var6.bind(var34)(var2);
                        var2 = 6;
                        var2 = var5[var2];
                        var4 = var4.bind(var9)(var2);
                        var2 = var4.unarchiveThreadIfNecessary;
                        var2 = var2.bind(var4)(var35);
                        SaveGenerator(address = 277);
                    case 275:
                        return var2;
                    case 277:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53072_ip = 629;
                            continue _fun53072
                        }
                    case 286:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var4 = var6[var4];
                        var4 = var5.bind(var9)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.patch;
                        var4 = {};
                        var34 = _closure1_slot6;
                        var7 = var34.CHANNEL;
                        var7 = var7.bind(var34)(var35);
                        var4.url = var7;
                        var7 = {};
                        var7.name = var33;
                        var7.type = var32;
                        var7.position = var31;
                        var7.topic = var30;
                        var7.bitrate = var29;
                        var7.user_limit = var28;
                        var7.nsfw = var27;
                        var7.flags = var26;
                        var7.permission_overwrites = var25;
                        var7.rate_limit_per_user = var24;
                        var7.default_thread_rate_limit_per_user = var23;
                        var7.default_auto_archive_duration = var22;
                        var7.template = var21;
                        var7.rtc_region = var20;
                        var7.video_quality_mode = var17;
                        var7.auto_archive_duration = var16;
                        var7.locked = var15;
                        var7.invitable = var10;
                        var10 = null;
                        if (!(var10 == var19)) {
                            _fun53072_ip = 442;
                            continue _fun53072
                        }
                    case 432:
                        var15 = undefined;
                        if (!(var10 === var19)) {
                            _fun53072_ip = 440;
                            continue _fun53072
                        }
                    case 438:
                        var15 = null;
                    case 440:
                        _fun53072_ip = 487;
                        continue _fun53072;
                    case 442:
                        var16 = {};
                        var20 = var10 == var19;
                        var17 = undefined;
                        if (var20) {
                            _fun53072_ip = 459;
                            continue _fun53072
                        }
                    case 453:
                        var17 = var19.emojiId;
                    case 459:
                        var16.emoji_id = var17;
                        var20 = var10 == var19;
                        var17 = undefined;
                        if (var20) {
                            _fun53072_ip = 479;
                            continue _fun53072
                        }
                    case 473:
                        var17 = var19.emojiName;
                    case 479:
                        var16.emoji_name = var17;
                        var15 = var16;
                    case 487:
                        var7.default_reaction_emoji = var15;
                        var16 = var10 == var18;
                        var15 = undefined;
                        if (var16) {
                            _fun53072_ip = 516;
                            continue _fun53072
                        }
                    case 501:
                        var17 = var18.map;
                        var16 = function(arg0) { // Environment: var3
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.id;
                            var0.id = var2;
                            var2 = var1.name;
                            var0.name = var2;
                            var2 = var1.emojiId;
                            var0.emoji_id = var2;
                            var2 = var1.emojiName;
                            var0.emoji_name = var2;
                            var1 = var1.moderated;
                            var0.moderated = var1;
                            return var0;
                        };
                        var15 = var17.bind(var18)(var16);
                    case 516:
                        var7.available_tags = var15;
                        var7.default_sort_order = var14;
                        var7.default_forum_layout = var13;
                        var7.default_tag_setting = var12;
                        if (!(var10 == var11)) {
                            _fun53072_ip = 550;
                            continue _fun53072
                        }
                    case 540:
                        var9 = undefined;
                        if (!(var10 === var11)) {
                            _fun53072_ip = 548;
                            continue _fun53072
                        }
                    case 546:
                        var9 = null;
                    case 548:
                        _fun53072_ip = 573;
                        continue _fun53072;
                    case 550:
                        var10 = {};
                        var12 = var11.id;
                        var10.id = var12;
                        var11 = var11.name;
                        var10.name = var11;
                        var9 = var10;
                    case 573:
                        var7.icon_emoji = var9;
                        var7.theme_color = var8;
                        var4.body = var7;
                        var7 = true;
                        var4.oldFormErrors = var7;
                        var7 = false;
                        var4.rejectWithError = var7;
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.then;
                        var4 = function(arg0) { // Environment: var3
                            _fun53074: for (var _fun53074_ip = 0;;) switch (_fun53074_ip) {
                                case 0:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var4 = var2.bind(var3)(var1);
                                    var2 = var4.dispatch;
                                    var1 = {};
                                    var5 = 'CHANNEL_SETTINGS_SUBMIT_SUCCESS';
                                    var1.type = var5;
                                    var6 = _closure4_slot0;
                                    var1.channelId = var6;
                                    var1 = var2.bind(var4)(var1);
                                    var1 = _closure4_slot1;
                                    var6 = null;
                                    var1 = var6 == var1;
                                    var2 = undefined;
                                    if (var1) {
                                        _fun53074_ip = 87;
                                        continue _fun53074
                                    }
                                case 73:
                                    var4 = _closure4_slot1;
                                    var1 = var4.getGuildId;
                                    var2 = var1.bind(var4)();
                                case 87:
                                    var1 = var6 == var2;
                                    if (var1) {
                                        _fun53074_ip = 122;
                                        continue _fun53074
                                    }
                                case 94:
                                    var4 = _closure4_slot1;
                                    var4 = var6 != var4;
                                    if (!var4) {
                                        _fun53074_ip = 119;
                                        continue _fun53074
                                    }
                                case 105:
                                    var6 = _closure4_slot1;
                                    var5 = var6.isThread;
                                    var4 = var5.bind(var6)();
                                case 119:
                                    var1 = var4;
                                case 122:
                                    if (var1) {
                                        _fun53074_ip = 156;
                                        continue _fun53074
                                    }
                                case 125:
                                    var1 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var0 = 8;
                                    var0 = var4[var0];
                                    var1 = var1.bind(var3)(var0);
                                    var0 = var1.checkGuildTemplateDirty;
                                    var0 = var0.bind(var1)(var2);
                                case 156:
                                    var0 = arg0;
                                    return var0;
                            }
                        };
                        var3 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CHANNEL_SETTINGS_SUBMIT_FAILURE';
                            var1.type = var4;
                            var4 = var0.body;
                            var1.errors = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        return var3;
                    case 629:
                        return var2;
                    case 632:
                        return var1;
                    case 635:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var4 = function() { // Original name: deleteChannel, environment: var13
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _deleteChannel, environment: var13
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun53079: for (var _fun53079_ip = 0;;) switch (_fun53079_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53079_ip = 205;
                            continue _fun53079
                        }
                    case 13:
                        var2 = _closure1_slot5;
                        var1 = var2.getChannel;
                        var8 = var1.bind(var2)(var9);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var7 = _closure1_slot6;
                        var6 = var7.CHANNEL;
                        var6 = var6.bind(var7)(var9);
                        var1.url = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53079_ip = 202;
                            continue _fun53079
                        }
                    case 109:
                        var5 = null;
                        var4 = var5 == var8;
                        var6 = undefined;
                        if (var4) {
                            _fun53079_ip = 130;
                            continue _fun53079
                        }
                    case 120:
                        var4 = var8.getGuildId;
                        var6 = var4.bind(var8)();
                    case 130:
                        var4 = var5 == var6;
                        if (var4) {
                            _fun53079_ip = 157;
                            continue _fun53079
                        }
                    case 137:
                        var5 = var5 != var8;
                        if (!var5) {
                            _fun53079_ip = 154;
                            continue _fun53079
                        }
                    case 144:
                        var7 = var8.isThread;
                        var5 = var7.bind(var8)();
                    case 154:
                        var4 = var5;
                    case 157:
                        if (var4) {
                            _fun53079_ip = 191;
                            continue _fun53079
                        }
                    case 160:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 8;
                        var4 = var7[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.checkGuildTemplateDirty;
                        var4 = var4.bind(var5)(var6);
                    case 191:
                        var3 = _closure1_slot9;
                        var3 = var3.bind(var2)();
                        return var2;
                    case 202:
                        return var1;
                    case 205:
                        return var0;
                }
            };
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
    var3 = function(arg0, arg1) { // Original name: updateVoiceChannelStatus, environment: var13
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.UPDATE_VOICE_CHANNEL_STATUS;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1 = function(arg0) { // Original name: removeLinkedLobby, environment: var13
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.CHANNEL_LINKED_LOBBY;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0 = global;
    var18 = var0.Object;
    var17 = var18.defineProperty;
    var12 = {};
    var0 = true;
    var12.value = var0;
    var0 = '__esModule';
    var0 = var17.bind(var18)(var2, var0, var12);
    var0 = 0;
    var12 = var15[var0];
    var0 = undefined;
    var12 = var16.bind(var0)(var12);
    var _closure1_slot3 = var12;
    var12 = 1;
    var12 = var15[var12];
    var12 = var16.bind(var0)(var12);
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var15[var12];
    var12 = var16.bind(var0)(var12);
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var15[var12];
    var12 = var14.bind(var0)(var12);
    var16 = var12.Endpoints;
    var _closure1_slot6 = var16;
    var16 = var12.Layers;
    var12 = var12.ChannelSettingsSections;
    var _closure1_slot7 = var12;
    var12 = {};
    var12.init = var11;
    var12.open = var10;
    var12.close = var9;
    var12.setSection = var8;
    var12.selectPermissionOverwrite = var7;
    var12.updateChannel = var6;
    var12.saveChannel = var5;
    var12.deleteChannel = var4;
    var12.updateVoiceChannelStatus = var3;
    var12.removeLinkedLobby = var1;
    var13 = 9;
    var13 = var15[var13];
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'actions/ChannelSettingsActionCreators.tsx';
    var13 = var14.bind(var15)(var13);
    var2.default = var12;
    var2.init = var11;
    var2.open = var10;
    var2.close = var9;
    var2.setSection = var8;
    var2.selectPermissionOverwrite = var7;
    var2.updateChannel = var6;
    var2.saveChannel = var5;
    var2.deleteChannel = var4;
    var2.updateVoiceChannelStatus = var3;
    var2.removeLinkedLobby = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6424, 1372, 660, 806, 3873, 6425, 507, 6445, 2]);