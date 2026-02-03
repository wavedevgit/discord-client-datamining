// modules/messages/native/MessageImpressionAnalyticsHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot4 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot5 = var6;
    var3 = var3.MessageFlags;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LinkType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/MessageImpressionAnalyticsHelpers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun73650: for (var _fun73650_ip = 0;;) switch (_fun73650_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guild;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var7 = var0.messages;
                var _closure2_slot1 = var7;
                var8 = var0.isMessagesReady;
                var _closure2_slot2 = var8;
                var0 = var0.location;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if (var6) {
                    _fun73650_ip = 99;
                    continue _fun73650
                }
            case 61:
                var9 = var5.features;
                var5 = var4 == var9;
                var1 = undefined;
                if (var5) {
                    _fun73650_ip = 99;
                    continue _fun73650
                }
            case 76:
                var6 = var9.has;
                var5 = _closure1_slot5;
                var5 = var5.COMMUNITY;
                var1 = var6.bind(var9)(var5);
            case 99:
                var9 = var4 != var1;
                if (!var9) {
                    _fun73650_ip = 109;
                    continue _fun73650
                }
            case 106:
                var9 = var1;
            case 109:
                _closure2_slot3 = var9;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var11 = var10.type;
                var4 = new Array(5);
                var4[0] = var11;
                var10 = var10.guild_id;
                var4[1] = var10;
                var4[2] = var9;
                var4[3] = var8;
                var4[4] = var7;
                var2 = function() { // Environment: var2
                    _fun73651: for (var _fun73651_ip = 0;;) switch (_fun73651_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.type;
                            var0 = _closure1_slot4;
                            var0 = var0.GUILD_ANNOUNCEMENT;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun73651_ip = 36;
                                continue _fun73651
                            }
                        case 32:
                            var0 = _closure2_slot3;
                        case 36:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun73651_ip = 67;
                                continue _fun73651
                            }
                        case 43:
                            var4 = _closure2_slot1;
                            var3 = var4.some;
                            var2 = function(arg0) { // Environment: var2
                                _fun73652: for (var _fun73652_ip = 0;;) switch (_fun73652_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = var4.messageReference;
                                        var2 = null;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun73652_ip = 28;
                                            continue _fun73652
                                        }
                                    case 18:
                                        var1 = var4.webhookId;
                                        var0 = var2 != var1;
                                    case 28:
                                        if (!var0) {
                                            _fun73652_ip = 55;
                                            continue _fun73652
                                        }
                                    case 31:
                                        var3 = var4.hasFlag;
                                        var1 = _closure1_slot6;
                                        var1 = var1.IS_CROSSPOST;
                                        var0 = var3.bind(var4)(var1);
                                    case 55:
                                        if (!var0) {
                                            _fun73652_ip = 74;
                                            continue _fun73652
                                        }
                                    case 58:
                                        var1 = _closure2_slot0;
                                        var1 = var1.guild_id;
                                        var0 = var2 != var1;
                                    case 74:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2);
                        case 67:
                            if (var0) {
                                _fun73651_ip = 73;
                                continue _fun73651
                            }
                        case 70:
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var2, var4);
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var4 = !var4;
                var0.disable = var4;
                var4 = true;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useShouldTrackAnnouncementMessageViews = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.messages;
        var _closure2_slot0 = var5;
        var4 = var1.isMessagesReady;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun73654: for (var _fun73654_ip = 0;;) switch (_fun73654_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun73654_ip = 34;
                        continue _fun73654
                    }
                case 10:
                    var3 = _closure2_slot0;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        _fun73655: for (var _fun73655_ip = 0;;) switch (_fun73655_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.activity;
                                var2 = null;
                                var0 = var2 != var0;
                                if (!var0) {
                                    _fun73655_ip = 34;
                                    continue _fun73655
                                }
                            case 18:
                                var3 = var1.activity;
                                var3 = var3.party_id;
                                var0 = var2 != var3;
                            case 34:
                                if (!var0) {
                                    _fun73655_ip = 46;
                                    continue _fun73655
                                }
                            case 37:
                                var1 = var1.application;
                                var0 = var2 != var1;
                            case 46:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 34:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useShouldTrackRichPresenceInviteEmbedViews = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun73656: for (var _fun73656_ip = 0;;) switch (_fun73656_ip) {
            case 0:
                var3 = arg0;
                var2 = arg2;
                var _closure2_slot0 = var2;
                var1 = arg3;
                var _closure2_slot1 = var1;
                var1 = arg1;
                if (!var1) {
                    _fun73656_ip = 92;
                    continue _fun73656
                }
            case 25:
                var1 = null;
                if (!(var1 != var2)) {
                    _fun73656_ip = 92;
                    continue _fun73656
                }
            case 31:
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var1 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun73657: for (var _fun73657_ip = 0;;) switch (_fun73657_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.message;
                            var4 = var1.messageReference;
                            var3 = null;
                            var5 = var3 == var4;
                            var0 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun73657_ip = 32;
                                continue _fun73657
                            }
                        case 27:
                            var2 = var4.guild_id;
                        case 32:
                            var2 = var3 != var2;
                            if (!var2) {
                                _fun73657_ip = 49;
                                continue _fun73657
                            }
                        case 39:
                            var4 = var1.webhookId;
                            var2 = var3 != var4;
                        case 49:
                            if (!var2) {
                                _fun73657_ip = 76;
                                continue _fun73657
                            }
                        case 52:
                            var5 = var1.hasFlag;
                            var4 = _closure1_slot6;
                            var4 = var4.IS_CROSSPOST;
                            var2 = var5.bind(var1)(var4);
                        case 76:
                            var5 = var1.hasFlag;
                            var4 = _closure1_slot6;
                            var4 = var4.EPHEMERAL;
                            var4 = var5.bind(var1)(var4);
                            if (var4) {
                                _fun73657_ip = 336;
                                continue _fun73657
                            }
                        case 106:
                            var4 = _closure2_slot1;
                            var5 = var4.type;
                            var4 = _closure1_slot4;
                            var4 = var4.GUILD_ANNOUNCEMENT;
                            if (!(var5 !== var4)) {
                                _fun73657_ip = 138;
                                continue _fun73657
                            }
                        case 132:
                            if (!var2) {
                                _fun73657_ip = 336;
                                continue _fun73657
                            }
                        case 138:
                            if (!var2) {
                                _fun73657_ip = 151;
                                continue _fun73657
                            }
                        case 141:
                            var4 = var1.messageReference;
                            if (!(var3 == var4)) {
                                _fun73657_ip = 162;
                                continue _fun73657
                            }
                        case 151:
                            var4 = _closure2_slot1;
                            var5 = var4.id;
                            _fun73657_ip = 173;
                            continue _fun73657;
                        case 162:
                            var4 = var1.messageReference;
                            var5 = var4.channel_id;
                        case 173:
                            if (!var2) {
                                _fun73657_ip = 200;
                                continue _fun73657
                            }
                        case 176:
                            var7 = var1.messageReference;
                            var9 = var3 == var7;
                            var4 = undefined;
                            if (var9) {
                                _fun73657_ip = 196;
                                continue _fun73657
                            }
                        case 191:
                            var4 = var7.guild_id;
                        case 196:
                            if (!(var3 == var4)) {
                                _fun73657_ip = 206;
                                continue _fun73657
                            }
                        case 200:
                            var4 = _closure2_slot0;
                            _fun73657_ip = 217;
                            continue _fun73657;
                        case 206:
                            var7 = var1.messageReference;
                            var4 = var7.guild_id;
                        case 217:
                            if (!var2) {
                                _fun73657_ip = 230;
                                continue _fun73657
                            }
                        case 220:
                            var2 = var1.messageReference;
                            if (!(var3 == var2)) {
                                _fun73657_ip = 237;
                                continue _fun73657
                            }
                        case 230:
                            var7 = var1.id;
                            _fun73657_ip = 249;
                            continue _fun73657;
                        case 237:
                            var1 = var1.messageReference;
                            var7 = var1.message_id;
                        case 249:
                            var3 = _closure2_slot2;
                            var2 = var3.push;
                            var1 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 4;
                            var8 = var10[var8];
                            var8 = var9.bind(var0)(var8);
                            var8 = var8.MessageViewTrackingType;
                            var8 = var8.ANNOUNCEMENT;
                            var1.type = var8;
                            var1.messageId = var7;
                            var7 = _closure2_slot1;
                            var7 = var7.id;
                            var1.channelId = var7;
                            var6 = _closure2_slot0;
                            var1.guildId = var6;
                            var1.sourceChannelId = var5;
                            var1.sourceGuildId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 336:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.handleMessageListVisibilityChange;
                var0 = var0.bind(var1)(var2);
            case 92:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleAnnouncementMessageViewTracking = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun73658: for (var _fun73658_ip = 0;;) switch (_fun73658_ip) {
            case 0:
                var3 = arg0;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var1 = arg3;
                var _closure2_slot1 = var1;
                var1 = arg1;
                if (!var1) {
                    _fun73658_ip = 86;
                    continue _fun73658
                }
            case 25:
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var1 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun73659: for (var _fun73659_ip = 0;;) switch (_fun73659_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.message;
                            var1 = var4.hasFlag;
                            var0 = _closure1_slot6;
                            var0 = var0.EPHEMERAL;
                            var0 = var1.bind(var4)(var0);
                            if (var0) {
                                _fun73659_ip = 47;
                                continue _fun73659
                            }
                        case 35:
                            var2 = var4.activity;
                            var1 = null;
                            var0 = var1 == var2;
                        case 47:
                            if (var0) {
                                _fun73659_ip = 68;
                                continue _fun73659
                            }
                        case 50:
                            var1 = var4.activity;
                            var2 = var1.party_id;
                            var1 = null;
                            var0 = var1 == var2;
                        case 68:
                            if (var0) {
                                _fun73659_ip = 82;
                                continue _fun73659
                            }
                        case 71:
                            var2 = var4.application;
                            var1 = null;
                            var0 = var1 == var2;
                        case 82:
                            if (var0) {
                                _fun73659_ip = 201;
                                continue _fun73659
                            }
                        case 85:
                            var2 = _closure2_slot2;
                            var1 = var2.push;
                            var0 = {};
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 4;
                            var7 = var7[var6];
                            var6 = undefined;
                            var6 = var8.bind(var6)(var7);
                            var6 = var6.MessageViewTrackingType;
                            var6 = var6.APP_EMBED;
                            var0.type = var6;
                            var6 = var4.id;
                            var0.messageId = var6;
                            var6 = _closure2_slot1;
                            var6 = var6.id;
                            var0.channelId = var6;
                            var5 = _closure2_slot0;
                            var0.guildId = var5;
                            var4 = var4.application;
                            var4 = var4.id;
                            var0.applicationId = var4;
                            var3 = _closure1_slot7;
                            var3 = var3.RICH_PRESENCE_INVITE;
                            var0.linkType = var3;
                            var0 = var1.bind(var2)(var0);
                        case 201:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.handleMessageListVisibilityChange;
                var0 = var0.bind(var1)(var2);
            case 86:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleRichPresenceInviteEmbedViewTracking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 6538, 9252, 9253, 2]);