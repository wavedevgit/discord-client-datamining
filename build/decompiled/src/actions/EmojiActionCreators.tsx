// actions/EmojiActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _updateEmoji, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73303: for (var _fun73303_ip = 0;;) switch (_fun73303_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun73303_ip = 206;
                            continue _fun73303
                        }
                    case 13:
                        var9 = var1.guildId;
                        var6 = var1.emojiId;
                        var8 = var1.name;
                        var7 = var1.roles;
                        var5 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var5;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun73303_ip = 203;
                            continue _fun73303
                        }
                    case 50: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.patch;
                        var2 = {};
                        var11 = _closure1_slot7;
                        var10 = var11.GUILD_EMOJI;
                        var6 = var10.bind(var11)(var9, var6);
                        var2.url = var6;
                        var6 = {};
                        var6.name = var8;
                        var6.roles = var7;
                        var2.body = var6;
                        var6 = true;
                        var2.oldFormErrors = var6;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 141);
                    case 139:
                        return var2;
                    case 141:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun73303_ip = 150;
                            continue _fun73303
                        }
                    case 147: // try_end0
                        return var2;
                    case 150:
                        return var2;
                    case 153: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = var3;
                        var13 = var4;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 203:
                        return var1;
                    case 206:
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
    var0 = function(arg0) { // Original name: dedupeFavoriteEmojis, environment: var1
        _fun73304: for (var _fun73304_ip = 0;;) switch (_fun73304_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot6;
                var2 = var2.totalUnavailableGuilds;
                var3 = 0;
                if (!(!(var2 > var3))) {
                    _fun73304_ip = 146;
                    continue _fun73304
                }
            case 25:
                var4 = _closure1_slot5;
                var2 = var4.isConnected;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun73304_ip = 44;
                    continue _fun73304
                }
            case 42:
                return var0;
            case 44:
                var4 = var0.map;
                var2 = function(arg0) { // Environment: var2
                    _fun73305: for (var _fun73305_ip = 0;;) switch (_fun73305_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot4;
                            var0 = var2.getCustomEmojiById;
                            var0 = var0.bind(var2)(var3);
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun73305_ip = 60;
                                continue _fun73305
                            }
                        case 27:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getByName;
                            var0 = var1.bind(var2)(var3);
                        case 60:
                            return var0;
                    }
                };
                var7 = var4.bind(var0)(var2);
                var5 = var7.filter;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 14;
                var2 = var6[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var2 = var2.isNotNullish;
                var2 = var5.bind(var7)(var2);
                var5 = _closure1_slot1;
                var1 = 15;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var2 = var1.bind(var4)(var2);
                var1 = var2.keys;
                var10 = var1.bind(var2)();
                var1 = new Array(0);
                var11 = var1;
                var9 = 0;
                var2 = arraySpread(var11, var10, var9);
                return var1;
            case 146:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getFavoriteEmojiNameOrId, environment: var1
        _fun73306: for (var _fun73306_ip = 0;;) switch (_fun73306_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun73306_ip = 91;
                    continue _fun73306
                }
            case 14:
                var1 = var2.id;
                if (!(var3 == var1)) {
                    _fun73306_ip = 79;
                    continue _fun73306
                }
            case 23:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 13;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.convertSurrogateToBase;
                var5 = var2.surrogates;
                var5 = var6.bind(var7)(var5);
                var6 = var3 == var5;
                if (var6) {
                    _fun73306_ip = 76;
                    continue _fun73306
                }
            case 71:
                var4 = var5.name;
            case 76:
                var1 = var4;
            case 79:
                if (!(var3 == var1)) {
                    _fun73306_ip = 88;
                    continue _fun73306
                }
            case 83:
                var1 = var2.name;
            case 88:
                var0 = var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_FAVORITES;
    var _closure1_slot8 = var6;
    var3 = var3.UserSettingsDelay;
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/EmojiActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: setDiversityColor, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.PreloadedUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot9;
        var3 = var2.FREQUENT_USER_ACTION;
        var2 = 'textAndImages';
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var3 = var2.StringValue;
            var2 = var3.create;
            var2 = var2.bind(var3)();
            var1.diversitySurrogate = var2;
            var2 = var1.diversitySurrogate;
            var1 = _closure2_slot0;
            var2.value = var1;
            return var0;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.setDiversityColor = var3;
    var3 = function(arg0) { // Original name: fetchEmoji, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 8;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var3 = var6.dispatch;
        var2 = {};
        var8 = 'EMOJI_FETCH';
        var2.type = var8;
        var2.guildId = var7;
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot0;
        var2 = 9;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var6 = _closure1_slot7;
        var5 = var6.GUILD_EMOJIS;
        var5 = var5.bind(var6)(var7);
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'EMOJI_FETCH_SUCCESS';
            var0.type = var3;
            var3 = _closure2_slot0;
            var0.guildId = var3;
            var3 = arg0;
            var3 = var3.body;
            var0.emojis = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'EMOJI_FETCH_FAILURE';
            var0.type = var3;
            var3 = _closure2_slot0;
            var0.guildId = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.fetchEmoji = var3;
    var3 = function(arg0) { // Original name: uploadEmoji, environment: var1
        _fun73312: for (var _fun73312_ip = 0;;) switch (_fun73312_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.guildId;
                var _closure2_slot0 = var11;
                var9 = var1.image;
                var8 = var1.name;
                var7 = var1.roles;
                var6 = var1.analyticsLocation;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var5 = undefined;
                var10 = var2.bind(var5)(var1);
                var2 = var10.dispatch;
                var1 = {};
                var12 = 'EMOJI_UPLOAD_START';
                var1.type = var12;
                var1.guildId = var11;
                var1 = var2.bind(var10)(var1);
                var2 = _closure1_slot0;
                var1 = 9;
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var10 = _closure1_slot7;
                var4 = var10.GUILD_EMOJIS;
                var4 = var4.bind(var10)(var11);
                var1.url = var4;
                var4 = {};
                var4.image = var9;
                var4.name = var8;
                var4.roles = var7;
                var1.body = var4;
                var4 = {};
                var7 = null;
                var7 = var7 == var6;
                if (var7) {
                    _fun73312_ip = 173;
                    continue _fun73312
                }
            case 167:
                var5 = var6.page;
            case 173:
                var4.client_event_source = var5;
                var1.context = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'EMOJI_UPLOAD_STOP';
                    var0.type = var3;
                    var3 = _closure2_slot0;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var0 = var0.body;
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'EMOJI_UPLOAD_STOP';
                    var0.type = var3;
                    var3 = _closure2_slot0;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.reject;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.uploadEmoji = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: deleteEmoji, environment: var1
        _fun73315: for (var _fun73315_ip = 0;;) switch (_fun73315_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var5 = arg2;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var3 = undefined;
                var6 = var1.bind(var3)(var0);
                var1 = var6.dispatch;
                var0 = {};
                var9 = 'EMOJI_DELETE';
                var0.type = var9;
                var0.guildId = var8;
                var0.emojiId = var7;
                var0 = var1.bind(var6)(var0);
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.HTTP;
                var1 = var2.del;
                var0 = {};
                var6 = _closure1_slot7;
                var4 = var6.GUILD_EMOJI;
                var4 = var4.bind(var6)(var8, var7);
                var0.url = var4;
                var4 = null;
                var4 = var4 != var5;
                if (!var4) {
                    _fun73315_ip = 133;
                    continue _fun73315
                }
            case 121:
                var4 = {};
                var4.replaced_by = var5;
                var3 = var4;
            case 133:
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 11;
                    var4 = var7[var1];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.L3UUha;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.deleteEmoji = var3;
    var3 = function() { // Original name: updateEmoji, environment: var1
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateEmoji = var3;
    var3 = function(arg0) { // Original name: favoriteEmoji, environment: var1
        _fun73318: for (var _fun73318_ip = 0;;) switch (_fun73318_ip) {
            case 0:
                var4 = _closure1_slot12;
                var0 = undefined;
                var3 = arg0;
                var4 = var4.bind(var0)(var3);
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun73318_ip = 89;
                    continue _fun73318
                }
            case 29:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.FrecencyUserSettingsActionCreators;
                var4 = var5.updateAsync;
                var2 = _closure1_slot9;
                var3 = var2.INFREQUENT_USER_ACTION;
                var2 = 'favoriteEmojis';
                var1 = function(arg0) { // Environment: var1
                    _fun73319: for (var _fun73319_ip = 0;;) switch (_fun73319_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot11;
                            var0 = var2.emojis;
                            var9 = undefined;
                            var0 = var1.bind(var9)(var0);
                            var2.emojis = var0;
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 16;
                            var0 = var3[var0];
                            var3 = var1.bind(var9)(var0);
                            var1 = var3.size;
                            var0 = var2.emojis;
                            var1 = var1.bind(var3)(var0);
                            var0 = _closure1_slot8;
                            if (!(!(var1 >= var0))) {
                                _fun73319_ip = 129;
                                continue _fun73319
                            }
                        case 73:
                            var4 = var2.emojis;
                            var3 = var4.includes;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var0);
                            var0 = !var0;
                            if (!var0) {
                                _fun73319_ip = 124;
                                continue _fun73319
                            }
                        case 102:
                            var3 = var2.emojis;
                            var2 = var3.push;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            var0 = undefined;
                        case 124:
                            _fun73319_ip = 279;
                            continue _fun73319;
                        case 129:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 17;
                            var1 = var10[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = 11;
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
                        case 279:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var2, var1, var3);
            case 89:
                return var0;
        }
    };
    var2.favoriteEmoji = var3;
    var1 = function(arg0) { // Original name: unfavoriteEmoji, environment: var1
        _fun73320: for (var _fun73320_ip = 0;;) switch (_fun73320_ip) {
            case 0:
                var4 = _closure1_slot12;
                var0 = undefined;
                var3 = arg0;
                var4 = var4.bind(var0)(var3);
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun73320_ip = 89;
                    continue _fun73320
                }
            case 29:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.FrecencyUserSettingsActionCreators;
                var4 = var5.updateAsync;
                var2 = _closure1_slot9;
                var3 = var2.INFREQUENT_USER_ACTION;
                var2 = 'favoriteEmojis';
                var1 = function(arg0) { // Environment: var1
                    _fun73321: for (var _fun73321_ip = 0;;) switch (_fun73321_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot11;
                            var1 = var2.emojis;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var2.emojis = var1;
                            var4 = var2.emojis;
                            var3 = var4.includes;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun73321_ip = 59;
                                continue _fun73321
                            }
                        case 55:
                            var1 = false;
                            return var1;
                        case 59:
                            var4 = var2.emojis;
                            var3 = var4.filter;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure2_slot0;
                                var0 = arg0;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                            var2.emojis = var1;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var2, var1, var3);
            case 89:
                return var0;
        }
    };
    var2.unfavoriteEmoji = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4699, 3433, 3961, 660, 665, 1355, 1342, 806, 507, 3165, 1234, 3311, 3063, 1304, 4706, 22, 3962, 2]);