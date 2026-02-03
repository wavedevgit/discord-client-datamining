// records/MessageRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1, arg2() {
        _fun24977: for (var _fun24977_ip = 0;;) switch (_fun24977_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot13;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun24977_ip = 51;
                    continue _fun24977
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun24977_ip = 92;
                continue _fun24977;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun24977_ip = 71;
                    continue _fun24977
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        _fun24978: for (var _fun24978_ip = 0;;) switch (_fun24978_ip) {
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
            case 70: // try_end0
                _fun24978_ip = 74;
                continue _fun24978;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var9[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var9[var3];
    var4 = var5.bind(var0)(var3);
    var _closure1_slot4 = var4;
    var3 = 2;
    var3 = var9[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var9[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var9[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var9[var3];
    var6 = var5.bind(var0)(var3);
    var3 = 6;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var5 = var3.MessageFlags;
    var _closure1_slot8 = var5;
    var5 = var3.MessageStates;
    var _closure1_slot9 = var5;
    var3 = var3.MessageTypes;
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun24982: for (var _fun24982_ip = 0;;) switch (_fun24982_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var0 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var5, var3);
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var1)(var5, var3);
                    var1 = var2.type;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 59;
                        continue _fun24982
                    }
                case 49:
                    var4 = _closure1_slot10;
                    var1 = var4.DEFAULT;
                case 59:
                    var0.type = var1;
                    var4 = var2.content;
                    var5 = var3 != var4;
                    var1 = '';
                    if (!var5) {
                        _fun24982_ip = 84;
                        continue _fun24982
                    }
                case 81:
                    var1 = var4;
                case 84:
                    var0.content = var1;
                    var1 = var2.attachments;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 104;
                        continue _fun24982
                    }
                case 100:
                    var1 = new Array(0);
                case 104:
                    var0.attachments = var1;
                    var1 = var2.embeds;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 124;
                        continue _fun24982
                    }
                case 120:
                    var1 = new Array(0);
                case 124:
                    var0.embeds = var1;
                    var1 = var2.timestamp;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 168;
                        continue _fun24982
                    }
                case 140:
                    var4 = global;
                    var4 = var4.Date;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var1 = var4 instanceof Object ? var4 : var5;
                case 168:
                    var0.timestamp = var1;
                    var4 = var2.editedTimestamp;
                    var5 = var3 != var4;
                    var1 = null;
                    if (!var5) {
                        _fun24982_ip = 192;
                        continue _fun24982
                    }
                case 189:
                    var1 = var4;
                case 192:
                    var0.editedTimestamp = var1;
                    var4 = var2.flags;
                    var5 = var3 != var4;
                    var1 = 0;
                    if (!var5) {
                        _fun24982_ip = 215;
                        continue _fun24982
                    }
                case 212:
                    var1 = var4;
                case 215:
                    var0.flags = var1;
                    var1 = var2.components;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 235;
                        continue _fun24982
                    }
                case 231:
                    var1 = new Array(0);
                case 235:
                    var0.components = var1;
                    var1 = var2.codedLinks;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 255;
                        continue _fun24982
                    }
                case 251:
                    var1 = new Array(0);
                case 255:
                    var0.codedLinks = var1;
                    var1 = var2.stickers;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 275;
                        continue _fun24982
                    }
                case 271:
                    var1 = new Array(0);
                case 275:
                    var0.stickers = var1;
                    var1 = var2.sticker_items;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 297;
                        continue _fun24982
                    }
                case 291:
                    var1 = var2.stickerItems;
                case 297:
                    if (!(var3 == var1)) {
                        _fun24982_ip = 305;
                        continue _fun24982
                    }
                case 301:
                    var1 = new Array(0);
                case 305:
                    var0.stickerItems = var1;
                    var1 = var2.soundboard_sounds;
                    if (!(var3 == var1)) {
                        _fun24982_ip = 327;
                        continue _fun24982
                    }
                case 321:
                    var1 = var2.soundboardSounds;
                case 327:
                    var0.soundboardSounds = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'hasFlag';
        var4.key = var5;
        var0 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.flags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var3.bind(var0)(var6);
    var _closure1_slot11 = var5;
    var3 = function arg0() {
        var1 = arg0;
        var2 = this;
        var4 = _closure1_slot3;
        var3 = _closure1_slot14;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = var1.reporting_user_id;
        var2.reporting_user_id = var3;
        var3 = var1.reported_user_id;
        var2.reported_user_id = var3;
        var3 = var1.reporting_member;
        var2.reporting_member = var3;
        var1 = var1.reported_member;
        var2.reported_member = var1;
        return var0;
    };
    var _closure1_slot14 = var3;
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun24986: for (var _fun24986_ip = 0;;) switch (_fun24986_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)(var5, var4);
                    var4 = _closure1_slot11;
                    var7 = var1.message;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var3;
                    var2 = new var8[var4](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.message = var2;
                    var2 = var1.moderator_report;
                    var1 = null;
                    var3 = var1 != var2;
                    if (!var3) {
                        _fun24986_ip = 91;
                        continue _fun24986
                    }
                case 88:
                    var1 = var2;
                case 91:
                    var0.moderatorReport = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot4;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var6 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun24988: for (var _fun24988_ip = 0;;) switch (_fun24988_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var0 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var6, var5);
                    var3 = _closure1_slot12;
                    var0 = new Array(1);
                    var0[0] = var2;
                    var0 = var3.bind(var1)(var6, var5, var0);
                    var3 = var2.id;
                    var0.id = var3;
                    var3 = var2.channel_id;
                    var0.channel_id = var3;
                    var3 = var2.author;
                    var0.author = var3;
                    var3 = var2.customRenderedContent;
                    var0.customRenderedContent = var3;
                    var3 = var2.mentions;
                    if (var3) {
                        _fun24988_ip = 106;
                        continue _fun24988
                    }
                case 102:
                    var3 = new Array(0);
                case 106:
                    var0.mentions = var3;
                    var3 = var2.mentionRoles;
                    if (var3) {
                        _fun24988_ip = 125;
                        continue _fun24988
                    }
                case 121:
                    var3 = new Array(0);
                case 125:
                    var0.mentionRoles = var3;
                    var3 = var2.mentionChannels;
                    if (var3) {
                        _fun24988_ip = 144;
                        continue _fun24988
                    }
                case 140:
                    var3 = new Array(0);
                case 144:
                    var0.mentionChannels = var3;
                    var3 = var2.mentionGames;
                    if (var3) {
                        _fun24988_ip = 163;
                        continue _fun24988
                    }
                case 159:
                    var3 = new Array(0);
                case 163:
                    var0.mentionGames = var3;
                    var3 = var2.mentioned;
                    if (var3) {
                        _fun24988_ip = 180;
                        continue _fun24988
                    }
                case 178:
                    var3 = false;
                case 180:
                    var0.mentioned = var3;
                    var3 = var2.pinned;
                    if (var3) {
                        _fun24988_ip = 197;
                        continue _fun24988
                    }
                case 195:
                    var3 = false;
                case 197:
                    var0.pinned = var3;
                    var3 = var2.mentionEveryone;
                    if (var3) {
                        _fun24988_ip = 214;
                        continue _fun24988
                    }
                case 212:
                    var3 = false;
                case 214:
                    var0.mentionEveryone = var3;
                    var3 = var2.tts;
                    if (var3) {
                        _fun24988_ip = 231;
                        continue _fun24988
                    }
                case 229:
                    var3 = false;
                case 231:
                    var0.tts = var3;
                    var3 = var2.giftCodes;
                    if (var3) {
                        _fun24988_ip = 250;
                        continue _fun24988
                    }
                case 246:
                    var3 = new Array(0);
                case 250:
                    var0.giftCodes = var3;
                    var3 = var2.state;
                    if (var3) {
                        _fun24988_ip = 274;
                        continue _fun24988
                    }
                case 264:
                    var4 = _closure1_slot9;
                    var3 = var4.SENT;
                case 274:
                    var0.state = var3;
                    var4 = var2.nonce;
                    var3 = null;
                    var5 = var3 != var4;
                    var1 = undefined;
                    if (!var5) {
                        _fun24988_ip = 300;
                        continue _fun24988
                    }
                case 297:
                    var1 = var4;
                case 300:
                    var0.nonce = var1;
                    var1 = var2.blocked;
                    if (var1) {
                        _fun24988_ip = 317;
                        continue _fun24988
                    }
                case 315:
                    var1 = false;
                case 317:
                    var0.blocked = var1;
                    var1 = var2.ignored;
                    if (var1) {
                        _fun24988_ip = 334;
                        continue _fun24988
                    }
                case 332:
                    var1 = false;
                case 334:
                    var0.ignored = var1;
                    var1 = var2.call;
                    if (var1) {
                        _fun24988_ip = 350;
                        continue _fun24988
                    }
                case 348:
                    var1 = null;
                case 350:
                    var0.call = var1;
                    var1 = var2.bot;
                    if (var1) {
                        _fun24988_ip = 367;
                        continue _fun24988
                    }
                case 365:
                    var1 = false;
                case 367:
                    var0.bot = var1;
                    var1 = var2.webhookId;
                    if (var1) {
                        _fun24988_ip = 384;
                        continue _fun24988
                    }
                case 382:
                    var1 = null;
                case 384:
                    var0.webhookId = var1;
                    var1 = var2.reactions;
                    if (var1) {
                        _fun24988_ip = 403;
                        continue _fun24988
                    }
                case 399:
                    var1 = new Array(0);
                case 403:
                    var0.reactions = var1;
                    var1 = var2.application_id;
                    if (var1) {
                        _fun24988_ip = 423;
                        continue _fun24988
                    }
                case 418:
                    var1 = var2.applicationId;
                case 423:
                    if (var1) {
                        _fun24988_ip = 428;
                        continue _fun24988
                    }
                case 426:
                    var1 = null;
                case 428:
                    var0.applicationId = var1;
                    var1 = var2.application;
                    if (var1) {
                        _fun24988_ip = 444;
                        continue _fun24988
                    }
                case 442:
                    var1 = null;
                case 444:
                    var0.application = var1;
                    var1 = var2.activity;
                    if (var1) {
                        _fun24988_ip = 461;
                        continue _fun24988
                    }
                case 459:
                    var1 = null;
                case 461:
                    var0.activity = var1;
                    var1 = var2.activity_instance;
                    if (var1) {
                        _fun24988_ip = 482;
                        continue _fun24988
                    }
                case 476:
                    var1 = var2.activityInstance;
                case 482:
                    if (var1) {
                        _fun24988_ip = 487;
                        continue _fun24988
                    }
                case 485:
                    var1 = null;
                case 487:
                    var0.activityInstance = var1;
                    var1 = var2.messageReference;
                    if (var1) {
                        _fun24988_ip = 504;
                        continue _fun24988
                    }
                case 502:
                    var1 = null;
                case 504:
                    var0.messageReference = var1;
                    var1 = var2.hit;
                    if (var1) {
                        _fun24988_ip = 527;
                        continue _fun24988
                    }
                case 521:
                    var1 = var2.isSearchHit;
                case 527:
                    if (var1) {
                        _fun24988_ip = 532;
                        continue _fun24988
                    }
                case 530:
                    var1 = false;
                case 532:
                    var0.isSearchHit = var1;
                    var1 = var2.loggingName;
                    if (var1) {
                        _fun24988_ip = 549;
                        continue _fun24988
                    }
                case 547:
                    var1 = null;
                case 549:
                    var0.loggingName = var1;
                    var1 = var2.colorString;
                    var0.colorString = var1;
                    var1 = var2.nick;
                    var0.nick = var1;
                    var1 = var2.interaction;
                    if (var1) {
                        _fun24988_ip = 590;
                        continue _fun24988
                    }
                case 588:
                    var1 = null;
                case 590:
                    var0.interaction = var1;
                    var1 = var2.interactionData;
                    if (var1) {
                        _fun24988_ip = 607;
                        continue _fun24988
                    }
                case 605:
                    var1 = null;
                case 607:
                    var0.interactionData = var1;
                    var1 = var2.interactionMetadata;
                    if (var1) {
                        _fun24988_ip = 624;
                        continue _fun24988
                    }
                case 622:
                    var1 = null;
                case 624:
                    var0.interactionMetadata = var1;
                    var1 = var2.interactionError;
                    if (var1) {
                        _fun24988_ip = 641;
                        continue _fun24988
                    }
                case 639:
                    var1 = null;
                case 641:
                    var0.interactionError = var1;
                    var1 = var2.roleSubscriptionData;
                    var0.roleSubscriptionData = var1;
                    var1 = var2.purchaseNotification;
                    var0.purchaseNotification = var1;
                    var1 = var2.poll;
                    var0.poll = var1;
                    var1 = var2.shared_client_theme;
                    if (var1) {
                        _fun24988_ip = 698;
                        continue _fun24988
                    }
                case 692:
                    var1 = var2.sharedClientTheme;
                case 698:
                    var0.sharedClientTheme = var1;
                    var1 = var2.referralTrialOfferId;
                    if (var1) {
                        _fun24988_ip = 715;
                        continue _fun24988
                    }
                case 713:
                    var1 = null;
                case 715:
                    var0.referralTrialOfferId = var1;
                    var1 = var2.premiumGroupInviteId;
                    if (var1) {
                        _fun24988_ip = 732;
                        continue _fun24988
                    }
                case 730:
                    var1 = null;
                case 732:
                    var0.premiumGroupInviteId = var1;
                    var1 = var2.gift_info;
                    if (!(var3 == var1)) {
                        _fun24988_ip = 754;
                        continue _fun24988
                    }
                case 748:
                    var1 = var2.giftInfo;
                case 754:
                    var0.giftInfo = var1;
                    var1 = var2.giftingPrompt;
                    if (var1) {
                        _fun24988_ip = 771;
                        continue _fun24988
                    }
                case 769:
                    var1 = null;
                case 771:
                    var0.giftingPrompt = var1;
                    var1 = var2.messageSnapshots;
                    if (var1) {
                        _fun24988_ip = 790;
                        continue _fun24988
                    }
                case 786:
                    var1 = new Array(0);
                case 790:
                    var0.messageSnapshots = var1;
                    var1 = var2.isUnsupported;
                    if (var1) {
                        _fun24988_ip = 807;
                        continue _fun24988
                    }
                case 805:
                    var1 = false;
                case 807:
                    var0.isUnsupported = var1;
                    var1 = var2.changelog_id;
                    if (!(var3 == var1)) {
                        _fun24988_ip = 837;
                        continue _fun24988
                    }
                case 823:
                    var2 = var2.changelogId;
                    if (var2) {
                        _fun24988_ip = 834;
                        continue _fun24988
                    }
                case 832:
                    var2 = null;
                case 834:
                    var1 = var2;
                case 837:
                    var0.changelogId = var1;
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
        var0 = 'isEdited';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var1 = var0.editedTimestamp;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelId';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.channel_id;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getReaction';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.reactions;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.emojiEquals;
                var0 = arg0;
                var1 = var0.emoji;
                var0 = _closure3_slot0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getContentMessage';
        var4.key = var6;
        var6 = function() {
            _fun24993: for (var _fun24993_ip = 0;;) switch (_fun24993_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var3.bind(var2)(var0);
                    var2 = var0.bind(var2)(var1);
                    var0 = var1;
                    if (!var2) {
                        _fun24993_ip = 56;
                        continue _fun24993
                    }
                case 39:
                    var2 = var1.messageSnapshots;
                    var1 = 0;
                    var1 = var2[var1];
                    var0 = var1.message;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'userHasReactedWithEmoji';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = this;
            var2 = var1.reactions;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun24995: for (var _fun24995_ip = 0;;) switch (_fun24995_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var1);
                        var5 = var6.emojiEquals;
                        var4 = var2.emoji;
                        var3 = _closure3_slot0;
                        var3 = var5.bind(var6)(var4, var3);
                        if (var3) {
                            _fun24995_ip = 58;
                            continue _fun24995
                        }
                    case 56:
                        return var0;
                    case 58:
                        var0 = _closure3_slot1;
                        if (!var0) {
                            _fun24995_ip = 71;
                            continue _fun24995
                        }
                    case 65:
                        var0 = var2.me;
                    case 71:
                        if (var0) {
                            _fun24995_ip = 93;
                            continue _fun24995
                        }
                    case 74:
                        var1 = _closure3_slot1;
                        var1 = !var1;
                        if (!var1) {
                            _fun24995_ip = 90;
                            continue _fun24995
                        }
                    case 84:
                        var1 = var2.me_burst;
                    case 90:
                        var0 = var1;
                    case 93:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'addReaction';
        var4.key = var6;
        var6 = function arg0() {
            _fun24996: for (var _fun24996_ip = 0;;) switch (_fun24996_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arguments[1];
                    var4 = arguments[2];
                    var1 = arguments[3];
                    var3 = this;
                    var _closure3_slot0 = var6;
                    var8 = undefined;
                    if (!(var5 === var8)) {
                        _fun24996_ip = 29;
                        continue _fun24996
                    }
                case 27:
                    var5 = false;
                case 29:
                    var _closure3_slot1 = var5;
                    if (!(var4 === var8)) {
                        _fun24996_ip = 41;
                        continue _fun24996
                    }
                case 37:
                    var4 = new Array(0);
                case 41:
                    var _closure3_slot2 = var4;
                    if (!(var1 === var8)) {
                        _fun24996_ip = 84;
                        continue _fun24996
                    }
                case 49:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.ReactionTypes;
                    var1 = var2.NORMAL;
                case 84:
                    var _closure3_slot3 = var1;
                    var7 = -1;
                    var _closure3_slot4 = var7;
                    var10 = var3.reactions;
                    var9 = var10.map;
                    var2 = function(arg0, arg1) { // Environment: var0
                        _fun24997: for (var _fun24997_ip = 0;;) switch (_fun24997_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 8;
                                var1 = var2[var1];
                                var2 = undefined;
                                var7 = var3.bind(var2)(var1);
                                var6 = var7.emojiEquals;
                                var5 = var0.emoji;
                                var1 = _closure3_slot0;
                                var5 = var6.bind(var7)(var5, var1);
                                var1 = var0;
                                if (!var5) {
                                    _fun24997_ip = 633;
                                    continue _fun24997
                                }
                            case 62:
                                var5 = arg1;
                                _closure3_slot4 = var5;
                                var6 = _closure3_slot3;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var7 = 10;
                                var5 = var5[var7];
                                var5 = var8.bind(var2)(var5);
                                var5 = var5.ReactionTypes;
                                var5 = var5.BURST;
                                if (!(var6 !== var5)) {
                                    _fun24997_ip = 442;
                                    continue _fun24997
                                }
                            case 112:
                                var5 = _closure3_slot3;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var4 = var6.bind(var2)(var4);
                                var4 = var4.ReactionTypes;
                                var4 = var4.VOTE;
                                if (!(var5 !== var4)) {
                                    _fun24997_ip = 300;
                                    continue _fun24997
                                }
                            case 152:
                                var4 = _closure3_slot1;
                                if (!var4) {
                                    _fun24997_ip = 171;
                                    continue _fun24997
                                }
                            case 159:
                                var4 = var0.me_burst;
                                if (var4) {
                                    _fun24997_ip = 298;
                                    continue _fun24997
                                }
                            case 171:
                                var4 = _closure3_slot1;
                                if (!var4) {
                                    _fun24997_ip = 187;
                                    continue _fun24997
                                }
                            case 178:
                                var4 = var0.me;
                                if (var4) {
                                    _fun24997_ip = 202;
                                    continue _fun24997
                                }
                            case 187:
                                var5 = var0.count;
                                var4 = 1;
                                var7 = var5 + var4;
                                _fun24997_ip = 208;
                                continue _fun24997;
                            case 202:
                                var7 = var0.count;
                            case 208:
                                var4 = {};
                                var10 = var4;
                                var9 = var0;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'count';
                                var4[var5] = var7;
                                var6 = {};
                                var9 = var0.count_details;
                                var10 = var6;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'normal';
                                var6[var5] = var7;
                                var5 = 'count_details';
                                var4[var5] = var6;
                                var5 = _closure3_slot1;
                                var5 = !var5;
                                var6 = !var5;
                                if (!var5) {
                                    _fun24997_ip = 281;
                                    continue _fun24997
                                }
                            case 275:
                                var6 = var0.me;
                            case 281:
                                var5 = 'me';
                                var4[var5] = var6;
                                var1 = var4;
                                _fun24997_ip = 633;
                                continue _fun24997;
                            case 298:
                                return var0;
                            case 300:
                                var5 = var0.count_details;
                                var4 = null;
                                var6 = var4 == var5;
                                var2 = undefined;
                                if (var6) {
                                    _fun24997_ip = 323;
                                    continue _fun24997
                                }
                            case 317:
                                var2 = var5.vote;
                            case 323:
                                var5 = var4 != var2;
                                var4 = 0;
                                if (!var5) {
                                    _fun24997_ip = 335;
                                    continue _fun24997
                                }
                            case 332:
                                var4 = var2;
                            case 335:
                                var2 = _closure3_slot1;
                                if (!var2) {
                                    _fun24997_ip = 354;
                                    continue _fun24997
                                }
                            case 342:
                                var2 = var0.me_vote;
                                var6 = var4;
                                if (var2) {
                                    _fun24997_ip = 361;
                                    continue _fun24997
                                }
                            case 354:
                                var2 = 1;
                                var6 = var4 + var2;
                            case 361:
                                var2 = {};
                                var10 = var2;
                                var9 = var0;
                                var4 = copyDataProperties(var10, var9);
                                var5 = {};
                                var9 = var0.count_details;
                                var10 = var5;
                                var4 = copyDataProperties(var10, var9);
                                var4 = 'vote';
                                var5[var4] = var6;
                                var4 = 'count_details';
                                var2[var4] = var5;
                                var4 = _closure3_slot1;
                                var4 = !var4;
                                var5 = !var4;
                                if (!var4) {
                                    _fun24997_ip = 425;
                                    continue _fun24997
                                }
                            case 419:
                                var5 = var0.me_vote;
                            case 425:
                                var4 = 'me_vote';
                                var2[var4] = var5;
                                var1 = var2;
                                _fun24997_ip = 633;
                                continue _fun24997;
                            case 442:
                                var2 = _closure3_slot1;
                                if (!var2) {
                                    _fun24997_ip = 461;
                                    continue _fun24997
                                }
                            case 449:
                                var2 = var0.me;
                                if (var2) {
                                    _fun24997_ip = 635;
                                    continue _fun24997
                                }
                            case 461:
                                var2 = _closure3_slot1;
                                if (!var2) {
                                    _fun24997_ip = 477;
                                    continue _fun24997
                                }
                            case 468:
                                var2 = var0.me_burst;
                                if (var2) {
                                    _fun24997_ip = 492;
                                    continue _fun24997
                                }
                            case 477:
                                var4 = var0.burst_count;
                                var2 = 1;
                                var6 = var4 + var2;
                                _fun24997_ip = 498;
                                continue _fun24997;
                            case 492:
                                var6 = var0.burst_count;
                            case 498:
                                var4 = var0.burst_colors;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun24997_ip = 527;
                                    continue _fun24997
                                }
                            case 510:
                                var2 = var0.burst_colors;
                                var4 = var2.length;
                                var2 = 0;
                                if (!(!(var4 > var2))) {
                                    _fun24997_ip = 533;
                                    continue _fun24997
                                }
                            case 527:
                                var4 = _closure3_slot2;
                                _fun24997_ip = 539;
                                continue _fun24997;
                            case 533:
                                var4 = var0.burst_colors;
                            case 539:
                                var2 = {};
                                var10 = var2;
                                var9 = var0;
                                var5 = copyDataProperties(var10, var9);
                                var3 = _closure3_slot1;
                                var3 = !var3;
                                var5 = !var3;
                                if (!var3) {
                                    _fun24997_ip = 570;
                                    continue _fun24997
                                }
                            case 564:
                                var5 = var0.me_burst;
                            case 570:
                                var3 = 'me_burst';
                                var2[var3] = var5;
                                var3 = 'burst_count';
                                var2[var3] = var6;
                                var5 = {};
                                var9 = var0.count_details;
                                var10 = var5;
                                var3 = copyDataProperties(var10, var9);
                                var3 = 'burst';
                                var5[var3] = var6;
                                var3 = 'count_details';
                                var2[var3] = var5;
                                var3 = 'burst_colors';
                                var2[var3] = var4;
                                var1 = var2;
                            case 633:
                                return var1;
                            case 635:
                                return var0;
                        }
                    };
                    var2 = var9.bind(var10)(var2);
                    var0 = _closure3_slot4;
                    if (!(var7 === var0)) {
                        _fun24996_ip = 380;
                        continue _fun24996
                    }
                case 130:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = 10;
                    var7 = var7[var9];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.ReactionTypes;
                    var7 = var7.BURST;
                    if (!(var1 !== var7)) {
                        _fun24996_ip = 327;
                        continue _fun24996
                    }
                case 172:
                    var7 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var9];
                    var0 = var7.bind(var8)(var0);
                    var0 = var0.ReactionTypes;
                    var0 = var0.VOTE;
                    if (!(var1 !== var0)) {
                        _fun24996_ip = 264;
                        continue _fun24996
                    }
                case 205:
                    var1 = var2.push;
                    var0 = {
                        'emoji': null,
                        'me': null,
                        'me_burst': false,
                        'count': 1,
                        'count_details': null,
                        'burst_count': 0
                    };
                    var0.emoji = var6;
                    var0.me = var5;
                    var7 = {
                        'burst': 0,
                        'normal': 1
                    };
                    var0.count_details = var7;
                    var7 = new Array(0);
                    var0.burst_colors = var7;
                    var0 = var1.bind(var2)(var0);
                    _fun24996_ip = 380;
                    continue _fun24996;
                case 264:
                    var1 = var2.push;
                    var0 = {
                        'emoji': null,
                        'me': false,
                        'me_burst': false,
                        'me_vote': null,
                        'count': 0,
                        'count_details': null,
                        'burst_count': 0
                    };
                    var0.emoji = var6;
                    var0.me_vote = var5;
                    var7 = {
                        'burst': 0,
                        'normal': 0,
                        'vote': 1
                    };
                    var0.count_details = var7;
                    var7 = new Array(0);
                    var0.burst_colors = var7;
                    var0 = var1.bind(var2)(var0);
                    _fun24996_ip = 380;
                    continue _fun24996;
                case 327:
                    var1 = var2.push;
                    var0 = {
                        'emoji': null,
                        'me': false,
                        'me_burst': null,
                        'count': 0,
                        'count_details': null,
                        'burst_count': 1
                    };
                    var0.emoji = var6;
                    var0.me_burst = var5;
                    var5 = {
                        'burst': 1,
                        'normal': 0
                    };
                    var0.count_details = var5;
                    var0.burst_colors = var4;
                    var0 = var1.bind(var2)(var0);
                case 380:
                    var1 = var3.set;
                    var0 = 'reactions';
                    var0 = var1.bind(var3)(var0, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'addReactionBatch';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = arg0;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                var1 = arg1;
                var3 = var1.users;
                var2 = var1.emoji;
                var _closure4_slot0 = var2;
                var1 = var1.reactionType;
                var _closure4_slot1 = var1;
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var5 = arg0;
                    var4 = var5.addReaction;
                    var9 = _closure4_slot0;
                    var1 = _closure3_slot0;
                    var6 = _closure4_slot1;
                    var0 = arg1;
                    var8 = var0 === var1;
                    var7 = new Array(0);
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = this;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'removeReaction';
        var4.key = var6;
        var6 = function arg0() {
            _fun25001: for (var _fun25001_ip = 0;;) switch (_fun25001_ip) {
                case 0:
                    var4 = arguments[1];
                    var2 = arguments[2];
                    var3 = this;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = undefined;
                    if (!(var4 === var1)) {
                        _fun25001_ip = 26;
                        continue _fun25001
                    }
                case 24:
                    var4 = false;
                case 26:
                    var _closure3_slot1 = var4;
                    if (!(var2 === var1)) {
                        _fun25001_ip = 69;
                        continue _fun25001
                    }
                case 34:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.ReactionTypes;
                    var2 = var4.NORMAL;
                case 69:
                    var _closure3_slot2 = var2;
                    var10 = -1;
                    var _closure3_slot3 = var10;
                    var5 = var3.reactions;
                    var4 = var5.map;
                    var2 = function(arg0, arg1) { // Environment: var0
                        _fun25002: for (var _fun25002_ip = 0;;) switch (_fun25002_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var0 = var2[var0];
                                var2 = undefined;
                                var7 = var3.bind(var2)(var0);
                                var6 = var7.emojiEquals;
                                var5 = var4.emoji;
                                var0 = _closure3_slot0;
                                var5 = var6.bind(var7)(var5, var0);
                                var0 = var4;
                                if (!var5) {
                                    _fun25002_ip = 531;
                                    continue _fun25002
                                }
                            case 62:
                                var6 = _closure3_slot2;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var7 = 10;
                                var5 = var5[var7];
                                var5 = var8.bind(var2)(var5);
                                var5 = var5.ReactionTypes;
                                var5 = var5.BURST;
                                if (!(var6 !== var5)) {
                                    _fun25002_ip = 402;
                                    continue _fun25002
                                }
                            case 105:
                                var5 = _closure3_slot2;
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var7];
                                var1 = var6.bind(var2)(var1);
                                var1 = var1.ReactionTypes;
                                var1 = var1.VOTE;
                                if (!(var5 !== var1)) {
                                    _fun25002_ip = 266;
                                    continue _fun25002
                                }
                            case 145:
                                var1 = _closure3_slot1;
                                if (!var1) {
                                    _fun25002_ip = 169;
                                    continue _fun25002
                                }
                            case 152:
                                var1 = var4.me;
                                if (var1) {
                                    _fun25002_ip = 169;
                                    continue _fun25002
                                }
                            case 161:
                                var7 = var4.count;
                                _fun25002_ip = 182;
                                continue _fun25002;
                            case 169:
                                var5 = var4.count;
                                var1 = 1;
                                var7 = var5 - var1;
                            case 182:
                                var1 = {};
                                var10 = var1;
                                var9 = var4;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'count';
                                var1[var5] = var7;
                                var5 = _closure3_slot1;
                                var6 = !var5;
                                if (!var6) {
                                    _fun25002_ip = 219;
                                    continue _fun25002
                                }
                            case 213:
                                var6 = var4.me;
                            case 219:
                                var5 = 'me';
                                var1[var5] = var6;
                                var6 = {};
                                var9 = var4.count_details;
                                var10 = var6;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'normal';
                                var6[var5] = var7;
                                var5 = 'count_details';
                                var1[var5] = var6;
                                _fun25002_ip = 521;
                                continue _fun25002;
                            case 266:
                                var6 = var4.count_details;
                                var5 = null;
                                var7 = var5 == var6;
                                var2 = undefined;
                                if (var7) {
                                    _fun25002_ip = 289;
                                    continue _fun25002
                                }
                            case 283:
                                var2 = var6.vote;
                            case 289:
                                var6 = var5 != var2;
                                var5 = 0;
                                if (!var6) {
                                    _fun25002_ip = 301;
                                    continue _fun25002
                                }
                            case 298:
                                var5 = var2;
                            case 301:
                                var2 = _closure3_slot1;
                                if (!var2) {
                                    _fun25002_ip = 320;
                                    continue _fun25002
                                }
                            case 308:
                                var2 = var4.me_vote;
                                var7 = var5;
                                if (!var2) {
                                    _fun25002_ip = 327;
                                    continue _fun25002
                                }
                            case 320:
                                var2 = 1;
                                var7 = var5 - var2;
                            case 327:
                                var2 = {};
                                var10 = var2;
                                var9 = var4;
                                var5 = copyDataProperties(var10, var9);
                                var6 = {};
                                var9 = var4.count_details;
                                var10 = var6;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'vote';
                                var6[var5] = var7;
                                var5 = 'count_details';
                                var2[var5] = var6;
                                var5 = _closure3_slot1;
                                var6 = !var5;
                                if (!var6) {
                                    _fun25002_ip = 388;
                                    continue _fun25002
                                }
                            case 382:
                                var6 = var4.me_vote;
                            case 388:
                                var5 = 'me_vote';
                                var2[var5] = var6;
                                var1 = var2;
                                _fun25002_ip = 521;
                                continue _fun25002;
                            case 402:
                                var2 = _closure3_slot1;
                                if (!var2) {
                                    _fun25002_ip = 426;
                                    continue _fun25002
                                }
                            case 409:
                                var2 = var4.me_burst;
                                if (var2) {
                                    _fun25002_ip = 426;
                                    continue _fun25002
                                }
                            case 418:
                                var6 = var4.burst_count;
                                _fun25002_ip = 439;
                                continue _fun25002;
                            case 426:
                                var5 = var4.burst_count;
                                var2 = 1;
                                var6 = var5 - var2;
                            case 439:
                                var2 = {};
                                var10 = var2;
                                var9 = var4;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'burst_count';
                                var2[var5] = var6;
                                var5 = _closure3_slot1;
                                var7 = !var5;
                                if (!var7) {
                                    _fun25002_ip = 476;
                                    continue _fun25002
                                }
                            case 470:
                                var7 = var4.me_burst;
                            case 476:
                                var5 = 'me_burst';
                                var2[var5] = var7;
                                var5 = {};
                                var9 = var4.count_details;
                                var10 = var5;
                                var4 = copyDataProperties(var10, var9);
                                var4 = 'burst';
                                var5[var4] = var6;
                                var4 = 'count_details';
                                var2[var4] = var5;
                                var1 = var2;
                            case 521:
                                var2 = arg1;
                                _closure3_slot3 = var2;
                                var0 = var1;
                            case 531:
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure3_slot3;
                    var5 = var2[var4];
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun25001_ip = 120;
                        continue _fun25001
                    }
                case 118:
                    var5 = {};
                case 120:
                    var9 = var5.count;
                    var8 = var5.burst_count;
                    var11 = var5.count_details;
                    var5 = var4 == var11;
                    var6 = undefined;
                    if (var5) {
                        _fun25001_ip = 153;
                        continue _fun25001
                    }
                case 147:
                    var6 = var11.normal;
                case 153:
                    var12 = var4 != var6;
                    var5 = 0;
                    var7 = 0;
                    if (!var12) {
                        _fun25001_ip = 167;
                        continue _fun25001
                    }
                case 164:
                    var7 = var6;
                case 167:
                    var6 = var4 == var11;
                    var12 = undefined;
                    if (var6) {
                        _fun25001_ip = 182;
                        continue _fun25001
                    }
                case 176:
                    var12 = var11.burst;
                case 182:
                    var13 = var4 != var12;
                    var6 = 0;
                    if (!var13) {
                        _fun25001_ip = 194;
                        continue _fun25001
                    }
                case 191:
                    var6 = var12;
                case 194:
                    var12 = var4 == var11;
                    var1 = undefined;
                    if (var12) {
                        _fun25001_ip = 209;
                        continue _fun25001
                    }
                case 203:
                    var1 = var11.vote;
                case 209:
                    var11 = var4 != var1;
                    var4 = 0;
                    if (!var11) {
                        _fun25001_ip = 221;
                        continue _fun25001
                    }
                case 218:
                    var4 = var1;
                case 221:
                    var1 = _closure3_slot3;
                    var1 = var10 !== var1;
                    if (!var1) {
                        _fun25001_ip = 236;
                        continue _fun25001
                    }
                case 232:
                    var1 = var9 <= var5;
                case 236:
                    if (!var1) {
                        _fun25001_ip = 243;
                        continue _fun25001
                    }
                case 239:
                    var1 = var8 <= var5;
                case 243:
                    if (!var1) {
                        _fun25001_ip = 250;
                        continue _fun25001
                    }
                case 246:
                    var1 = var7 <= var5;
                case 250:
                    if (!var1) {
                        _fun25001_ip = 257;
                        continue _fun25001
                    }
                case 253:
                    var1 = var6 <= var5;
                case 257:
                    if (!var1) {
                        _fun25001_ip = 264;
                        continue _fun25001
                    }
                case 260:
                    var1 = var4 <= var5;
                case 264:
                    if (!var1) {
                        _fun25001_ip = 286;
                        continue _fun25001
                    }
                case 267:
                    var4 = var2.splice;
                    var1 = _closure3_slot3;
                    var0 = 1;
                    var0 = var4.bind(var2)(var1, var0);
                case 286:
                    var1 = var3.set;
                    var0 = 'reactions';
                    var0 = var1.bind(var3)(var0, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'removeReactionsForEmoji';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.set;
            var4 = var3.reactions;
            var1 = var4.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.emojiEquals;
                var0 = arg0;
                var1 = var0.emoji;
                var0 = _closure3_slot0;
                var0 = var2.bind(var3)(var1, var0);
                var0 = !var0;
                return var0;
            };
            var1 = var1.bind(var4)(var0);
            var0 = 'reactions';
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isSystemDM';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.author;
            var0 = var1.isSystemUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isCommandType';
        var4.key = var6;
        var6 = function() {
            _fun25006: for (var _fun25006_ip = 0;;) switch (_fun25006_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.type;
                    var0 = _closure1_slot10;
                    var0 = var0.CHAT_INPUT_COMMAND;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun25006_ip = 47;
                        continue _fun25006
                    }
                case 28:
                    var2 = var2.type;
                    var1 = _closure1_slot10;
                    var1 = var1.CONTEXT_MENU_COMMAND;
                    var0 = var2 === var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isPoll';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.poll;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isInteractionPlaceholder';
        var4.key = var6;
        var6 = function() {
            _fun25008: for (var _fun25008_ip = 0;;) switch (_fun25008_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.interaction;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun25008_ip = 34;
                        continue _fun25008
                    }
                case 18:
                    var2 = var1.author;
                    var1 = var2.isNonUserBot;
                    var0 = var1.bind(var2)();
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'canDeleteOwnMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun25009: for (var _fun25009_ip = 0;;) switch (_fun25009_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = var3.author;
                    var0 = var0.id;
                    if (!(var0 !== var1)) {
                        _fun25009_ip = 161;
                        continue _fun25009
                    }
                case 24:
                    var5 = var3.interactionMetadata;
                    var0 = null;
                    var6 = var0 == var5;
                    var4 = undefined;
                    var2 = undefined;
                    if (var6) {
                        _fun25009_ip = 49;
                        continue _fun25009
                    }
                case 43:
                    var2 = var5.authorizing_integration_owners;
                case 49:
                    if (!(var0 == var2)) {
                        _fun25009_ip = 55;
                        continue _fun25009
                    }
                case 53:
                    var2 = {};
                case 55:
                    var3 = var3.interactionMetadata;
                    var5 = var0 == var3;
                    var0 = undefined;
                    if (var5) {
                        _fun25009_ip = 80;
                        continue _fun25009
                    }
                case 70:
                    var3 = var3.user;
                    var0 = var3.id;
                case 80:
                    var0 = var0 === var1;
                    if (!var0) {
                        _fun25009_ip = 117;
                        continue _fun25009
                    }
                case 87:
                    var1 = global;
                    var3 = var1.Object;
                    var1 = var3.keys;
                    var1 = var1.bind(var3)(var2);
                    var3 = var1.length;
                    var1 = 1;
                    var0 = var1 === var3;
                case 117:
                    if (!var0) {
                        _fun25009_ip = 159;
                        continue _fun25009
                    }
                case 120:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ApplicationIntegrationType;
                    var1 = var1.USER_INSTALL;
                    var0 = var1 in var2;
                case 159:
                    return var0;
                case 161:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'toJS';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = {};
            var5 = var0;
            var4 = var1;
            var2 = copyDataProperties(var5, var4);
            var3 = var1.webhookId;
            var2 = 'webkhook_id';
            var0[var2] = var3;
            var3 = var1.editedTimestamp;
            var2 = 'edited_timestamp';
            var0[var2] = var3;
            var2 = var1.mentionEveryone;
            var1 = 'mention_everyone';
            var0[var1] = var2;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isFirstMessageInForumPost';
        var4.key = var6;
        var5 = function arg0() {
            _fun25011: for (var _fun25011_ip = 0;;) switch (_fun25011_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.id;
                    var0 = var0.channel_id;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun25011_ip = 33;
                        continue _fun25011
                    }
                case 23:
                    var1 = var2.isForumPost;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var5);
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'records/MessageRecord.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.MinimalMessageRecord = var5;
    var2.ModeratorReport = var4;
    var2.MessageSnapshotRecord = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hasFlag;
        var1 = arg0;
        var1 = var1.flags;
        var0 = _closure1_slot8;
        var0 = var0.IS_COMPONENTS_V2;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.isMessageComponentsV2 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 660, 1384, 3102, 4282, 6554, 5350, 2]);