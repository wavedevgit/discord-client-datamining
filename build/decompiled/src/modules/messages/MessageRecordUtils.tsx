// modules/messages/MessageRecordUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: createMinimalMessageRecord, environment: var1
        _fun36406: for (var _fun36406_ip = 0;;) switch (_fun36406_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot5;
                var0 = {};
                var10 = var0;
                var9 = var1;
                var4 = copyDataProperties(var10, var9);
                var4 = global;
                var7 = var4.Date;
                var10 = var1.timestamp;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var5 = new var11[var7](var10, var9);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = 'timestamp';
                var0[var5] = var6;
                var5 = var1.edited_timestamp;
                var8 = null;
                var6 = var8 != var5;
                var5 = null;
                if (!var6) {
                    _fun36406_ip = 114;
                    continue _fun36406
                }
            case 82:
                var7 = var4.Date;
                var10 = var1.edited_timestamp;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var4 = new var11[var7](var10, var9);
                var5 = var4 instanceof Object ? var4 : var6;
            case 114:
                var4 = 'editedTimestamp';
                var0[var4] = var5;
                var5 = _closure1_slot18;
                var4 = undefined;
                var6 = var5.bind(var4)(var1);
                var5 = 'attachments';
                var0[var5] = var6;
                var5 = _closure1_slot20;
                var6 = var5.bind(var4)(var1);
                var5 = 'embeds';
                var0[var5] = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.transformComponents;
                var5 = var1.components;
                if (!(var8 == var5)) {
                    _fun36406_ip = 201;
                    continue _fun36406
                }
            case 197:
                var5 = new Array(0);
            case 201:
                var6 = var6.bind(var7)(var5);
                var5 = 'components';
                var0[var5] = var6;
                var5 = _closure1_slot14;
                var7 = var5.NON_PARSED;
                var6 = var7.has;
                var5 = var1.type;
                var5 = var6.bind(var7)(var5);
                if (var5) {
                    _fun36406_ip = 275;
                    continue _fun36406
                }
            case 243:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var1 = var1.content;
                var3 = var3.bind(var4)(var1);
                _fun36406_ip = 279;
                continue _fun36406;
            case 275:
                var3 = new Array(0);
            case 279:
                var1 = 'codedLinks';
                var0[var1] = var3;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var10 = var0;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var3 = function(arg0) { // Original name: createMessageRecord, environment: var1
        _fun36407: for (var _fun36407_ip = 0;;) switch (_fun36407_ip) {
            case 0:
                var6 = arg0;
                var0 = arguments[1];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun36407_ip = 16;
                    continue _fun36407
                }
            case 14:
                var0 = {};
            case 16:
                var12 = var0.reactions;
                var9 = var0.interactionData;
                var0 = _closure1_slot16;
                var8 = var0.bind(var4)(var6);
                var2 = var6.mentions;
                var5 = null;
                var0 = var5 == var2;
                var21 = undefined;
                if (var0) {
                    _fun36407_ip = 72;
                    continue _fun36407
                }
            case 57:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var18
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var21 = var1.bind(var2)(var0);
            case 72:
                if (!(var5 == var21)) {
                    _fun36407_ip = 80;
                    continue _fun36407
                }
            case 76:
                var21 = new Array(0);
            case 80:
                var19 = var6.mention_roles;
                if (!(var5 == var19)) {
                    _fun36407_ip = 94;
                    continue _fun36407
                }
            case 90:
                var19 = new Array(0);
            case 94:
                var17 = var6.mention_channels;
                if (!(var5 == var17)) {
                    _fun36407_ip = 108;
                    continue _fun36407
                }
            case 104:
                var17 = new Array(0);
            case 108:
                var20 = var6.mention_games;
                if (!(var5 == var20)) {
                    _fun36407_ip = 122;
                    continue _fun36407
                }
            case 118:
                var20 = new Array(0);
            case 122:
                var16 = var6.message_reference;
                var0 = var6.author;
                if (!(var5 != var0)) {
                    _fun36407_ip = 242;
                    continue _fun36407
                }
            case 138:
                var0 = var6.webhook_id;
                if (!(var5 == var0)) {
                    _fun36407_ip = 210;
                    continue _fun36407
                }
            case 148:
                var2 = _closure1_slot10;
                var1 = var2.getUser;
                var0 = var6.author;
                var0 = var0.id;
                var22 = var1.bind(var2)(var0);
                if (!(var5 == var22)) {
                    _fun36407_ip = 208;
                    continue _fun36407
                }
            case 178:
                var2 = _closure1_slot7;
                var27 = var6.author;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var28 = var1;
                var0 = new var28[var2](var27, var26);
                var22 = var0 instanceof Object ? var0 : var1;
            case 208:
                _fun36407_ip = 240;
                continue _fun36407;
            case 210:
                var2 = _closure1_slot7;
                var27 = var6.author;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var28 = var1;
                var0 = new var28[var2](var27, var26);
                var22 = var0 instanceof Object ? var0 : var1;
            case 240:
                _fun36407_ip = 246;
                continue _fun36407;
            case 242:
                var22 = _closure1_slot15;
            case 246:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.getMessageAuthor;
                var0 = {};
                var3 = var6.channel_id;
                var0.channel_id = var3;
                var0.author = var22;
                var11 = var1.bind(var2)(var0);
                var0 = var5 == var6;
                var1 = undefined;
                if (var0) {
                    _fun36407_ip = 308;
                    continue _fun36407
                }
            case 302:
                var1 = var6.gift_info;
            case 308:
                var3 = var6.gifting_prompt;
                var0 = var6.interaction;
                var0 = var5 != var0;
                var10 = null;
                if (!var0) {
                    _fun36407_ip = 350;
                    continue _fun36407
                }
            case 329:
                var13 = _closure1_slot3;
                var2 = var13.createFromServer;
                var0 = var6.interaction;
                var10 = var2.bind(var13)(var0);
            case 350:
                var2 = var6.type;
                var0 = _closure1_slot13;
                var0 = var0.THREAD_STARTER_MESSAGE;
                var25 = undefined;
                if (!(var2 === var0)) {
                    _fun36407_ip = 409;
                    continue _fun36407
                }
            case 371:
                var2 = var6.referenced_message;
                var13 = var5 == var2;
                var0 = undefined;
                if (var13) {
                    _fun36407_ip = 406;
                    continue _fun36407
                }
            case 386:
                var2 = var2.author;
                var13 = var5 == var2;
                var0 = undefined;
                if (var13) {
                    _fun36407_ip = 406;
                    continue _fun36407
                }
            case 401:
                var0 = var2.id;
            case 406:
                var25 = var0;
            case 409:
                var15 = var6.content;
                var2 = var6.type;
                var0 = _closure1_slot13;
                var0 = var0.PREMIUM_REFERRAL;
                var14 = undefined;
                if (!(var2 === var0)) {
                    _fun36407_ip = 488;
                    continue _fun36407
                }
            case 435:
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 11;
                var0 = var13[var0];
                var13 = var2.bind(var4)(var0);
                var2 = var13.isProbablyAValidSnowflake;
                var0 = var6.content;
                var0 = var2.bind(var13)(var0);
                var2 = undefined;
                if (!var0) {
                    _fun36407_ip = 481;
                    continue _fun36407
                }
            case 476:
                var2 = var6.content;
            case 481:
                var15 = '';
                var14 = var2;
            case 488:
                var2 = var6.type;
                var0 = _closure1_slot13;
                var0 = var0.PREMIUM_GROUP_INVITE;
                var13 = undefined;
                if (!(var2 === var0)) {
                    _fun36407_ip = 562;
                    continue _fun36407
                }
            case 509:
                var2 = _closure1_slot1;
                var23 = _closure1_slot2;
                var0 = 11;
                var0 = var23[var0];
                var23 = var2.bind(var4)(var0);
                var2 = var23.isProbablyAValidSnowflake;
                var0 = var6.content;
                var0 = var2.bind(var23)(var0);
                var2 = undefined;
                if (!var0) {
                    _fun36407_ip = 555;
                    continue _fun36407
                }
            case 550:
                var2 = var6.content;
            case 555:
                var15 = '';
                var13 = var2;
            case 562:
                var2 = _closure1_slot6;
                var0 = {};
                var27 = var0;
                var26 = var6;
                var23 = copyDataProperties(var27, var26);
                var27 = var0;
                var26 = var11;
                var11 = copyDataProperties(var27, var26);
                var11 = var8.toJS;
                var26 = var11.bind(var8)();
                var27 = var0;
                var11 = copyDataProperties(var27, var26);
                var11 = 'author';
                var0[var11] = var22;
                var22 = var6.webhook_id;
                var11 = 'webhookId';
                var0[var11] = var22;
                var22 = _closure1_slot9;
                var11 = var22.isBlockedForMessage;
                var22 = var11.bind(var22)(var6);
                if (var22) {
                    _fun36407_ip = 672;
                    continue _fun36407
                }
            case 647:
                var11 = var5 != var25;
                if (!var11) {
                    _fun36407_ip = 669;
                    continue _fun36407
                }
            case 654:
                var24 = _closure1_slot9;
                var23 = var24.isBlocked;
                var11 = var23.bind(var24)(var25);
            case 669:
                var22 = var11;
            case 672:
                var11 = 'blocked';
                var0[var11] = var22;
                var22 = _closure1_slot9;
                var11 = var22.isIgnoredForMessage;
                var22 = var11.bind(var22)(var6);
                if (var22) {
                    _fun36407_ip = 724;
                    continue _fun36407
                }
            case 699:
                var11 = var5 != var25;
                if (!var11) {
                    _fun36407_ip = 721;
                    continue _fun36407
                }
            case 706:
                var24 = _closure1_slot9;
                var23 = var24.isIgnored;
                var11 = var23.bind(var24)(var25);
            case 721:
                var22 = var11;
            case 724:
                var11 = 'ignored';
                var0[var11] = var22;
                var22 = var6.mention_everyone;
                var11 = 'mentionEveryone';
                var0[var11] = var22;
                var11 = 'mentions';
                var0[var11] = var21;
                var11 = 'mentionRoles';
                var0[var11] = var19;
                var11 = 'mentionChannels';
                var0[var11] = var17;
                var11 = 'mentionGames';
                var0[var11] = var20;
                var11 = 'messageReference';
                var0[var11] = var16;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 12;
                var11 = var17[var11];
                var17 = var16.bind(var4)(var11);
                var16 = var17.isMentioned;
                var11 = {};
                var23 = _closure1_slot8;
                var22 = var23.getId;
                var22 = var22.bind(var23)();
                var11.userId = var22;
                var22 = var6.channel_id;
                var11.channelId = var22;
                var23 = var6.mention_everyone;
                var22 = var5 != var23;
                if (!var22) {
                    _fun36407_ip = 864;
                    continue _fun36407
                }
            case 861:
                var22 = var23;
            case 864:
                var11.mentionEveryone = var22;
                var11.mentionUsers = var21;
                var11.mentionRoles = var19;
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var18 = var19.bind(var20)(var18);
                var11.mentionGames = var18;
                var16 = var16.bind(var17)(var11);
                var11 = 'mentioned';
                var0[var11] = var16;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var18 = 13;
                var11 = var11[var18];
                var16 = var16.bind(var4)(var11);
                var11 = var16.isGiftCodeEmbed;
                var11 = var11.bind(var16)(var6);
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var18];
                var18 = var17.bind(var4)(var16);
                var17 = var18.findGiftCodes;
                if (var11) {
                    _fun36407_ip = 982;
                    continue _fun36407
                }
            case 970:
                var11 = var6.content;
                var16 = var17.bind(var18)(var11);
                _fun36407_ip = 1013;
                continue _fun36407;
            case 982:
                var19 = var5 == var6;
                var11 = undefined;
                if (var19) {
                    _fun36407_ip = 1008;
                    continue _fun36407
                }
            case 991:
                var20 = var6.embeds;
                var19 = 0;
                var19 = var20[var19];
                var11 = var19.url;
            case 1008:
                var16 = var17.bind(var18)(var11);
            case 1013:
                var11 = 'giftCodes';
                var0[var11] = var16;
                var11 = 'content';
                var0[var11] = var15;
                var11 = 'referralTrialOfferId';
                var0[var11] = var14;
                var11 = 'premiumGroupInviteId';
                var0[var11] = var13;
                var13 = _closure1_slot19;
                var11 = var6.call;
                var8 = var8.timestamp;
                var11 = var13.bind(var4)(var11, var8);
                var8 = 'call';
                var0[var8] = var11;
                var8 = _closure1_slot22;
                var11 = var8.bind(var4)(var6);
                var8 = 'messageSnapshots';
                var0[var8] = var11;
                var11 = _closure1_slot21;
                if (!(var5 == var12)) {
                    _fun36407_ip = 1111;
                    continue _fun36407
                }
            case 1105:
                var12 = var6.reactions;
            case 1111:
                var8 = var6.poll;
                var11 = var11.bind(var4)(var12, var8);
                var8 = 'reactions';
                var0[var8] = var11;
                var8 = 'interaction';
                var0[var8] = var10;
                if (!(var5 == var9)) {
                    _fun36407_ip = 1151;
                    continue _fun36407
                }
            case 1145:
                var9 = var6.interaction_data;
            case 1151:
                var8 = 'interactionData';
                var0[var8] = var9;
                var9 = var6.interaction_metadata;
                var8 = 'interactionMetadata';
                var0[var8] = var9;
                var9 = var6.role_subscription_data;
                var8 = 'roleSubscriptionData';
                var0[var8] = var9;
                var9 = var6.purchase_notification;
                var8 = 'purchaseNotification';
                var0[var8] = var9;
                var8 = var6.poll;
                var9 = var5 == var8;
                var8 = undefined;
                if (var9) {
                    _fun36407_ip = 1251;
                    continue _fun36407
                }
            case 1220:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 14;
                var7 = var10[var7];
                var9 = var9.bind(var4)(var7);
                var7 = var6.poll;
                var8 = var9.bind(var4)(var7);
            case 1251:
                var7 = 'poll';
                var0[var7] = var8;
                var7 = var6.shared_client_theme;
                var6 = 'sharedClientTheme';
                var0[var6] = var7;
                var5 = var5 == var1;
                var4 = undefined;
                if (var5) {
                    _fun36407_ip = 1287;
                    continue _fun36407
                }
            case 1284:
                var4 = var1;
            case 1287:
                var1 = 'giftInfo';
                var0[var1] = var4;
                var1 = 'giftingPrompt';
                var0[var1] = var3;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var28 = var1;
                var27 = var0;
                var0 = new var28[var2](var27, var26);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = function(arg0) { // Original name: transformAttachments, environment: var1
        _fun36410: for (var _fun36410_ip = 0;;) switch (_fun36410_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.attachments;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun36410_ip = 40;
                    continue _fun36410
                }
            case 15:
                var2 = var0.attachments;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.filename;
                    var2 = var3.startsWith;
                    var1 = _closure1_slot11;
                    var2 = var2.bind(var3)(var1);
                    var1 = 'spoiler';
                    var0[var1] = var2;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun36410_ip = 44;
                continue _fun36410;
            case 40:
                var0 = new Array(0);
            case 44:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: transformMessageCall, environment: var1
        _fun36412: for (var _fun36412_ip = 0;;) switch (_fun36412_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun36412_ip = 11;
                    continue _fun36412
                }
            case 9:
                return var1;
            case 11:
                var0 = var3.ended_timestamp;
                var0 = var1 != var0;
                var2 = null;
                if (!var0) {
                    _fun36412_ip = 90;
                    continue _fun36412
                }
            case 26:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 15;
                var0 = var5[var0];
                var5 = undefined;
                var4 = var4.bind(var5)(var0);
                var0 = global;
                var7 = var0.Date;
                var8 = var3.ended_timestamp;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var0 = new var9[var7](var8, var7);
                var0 = var0 instanceof Object ? var0 : var6;
                var2 = var4.bind(var5)(var0);
            case 90:
                var0 = var1 != var2;
                var1 = null;
                if (!var0) {
                    _fun36412_ip = 148;
                    continue _fun36412
                }
            case 99:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 15;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.duration;
                var6 = var2.diff;
                var0 = arg1;
                var0 = var6.bind(var2)(var0);
                var1 = var4.bind(var5)(var0);
            case 148:
                var0 = {};
                var3 = var3.participants;
                var0.participants = var3;
                var0.endedTimestamp = var2;
                var0.duration = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: transformEmbeds, environment: var1
        _fun36413: for (var _fun36413_ip = 0;;) switch (_fun36413_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = var1.embeds;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun36413_ip = 80;
                    continue _fun36413
                }
            case 21:
                var2 = var1.embeds;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.sanitizeEmbed;
                    var0 = _closure2_slot0;
                    var2 = var0.channel_id;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.mergeEmbedsOnURL;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 80:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: transformReactions, environment: var1
        _fun36415: for (var _fun36415_ip = 0;;) switch (_fun36415_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun36415_ip = 33;
                    continue _fun36415
                }
            case 14:
                var3 = var4 == var1;
                var2 = undefined;
                if (var3) {
                    _fun36415_ip = 29;
                    continue _fun36415
                }
            case 23:
                var2 = var1.results;
            case 29:
                if (!(var4 != var2)) {
                    _fun36415_ip = 142;
                    continue _fun36415
                }
            case 33:
                var2 = var4 == var1;
                var3 = undefined;
                if (var2) {
                    _fun36415_ip = 80;
                    continue _fun36415
                }
            case 42:
                var1 = var1.results;
                var2 = var4 == var1;
                var3 = undefined;
                if (var2) {
                    _fun36415_ip = 80;
                    continue _fun36415
                }
            case 57:
                var6 = var1.answer_counts;
                var2 = var6.map;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var2 = {};
                    var3 = var1.count;
                    var2.vote = var3;
                    var0.count_details = var2;
                    var2 = var1.me_voted;
                    var0.me_vote = var2;
                    var3 = {
                        'id': null,
                        'name': '',
                        'animated': false
                    };
                    var4 = var1.id;
                    var2 = var4.toString;
                    var2 = var2.bind(var4)();
                    var3.id = var2;
                    var2 = false;
                    var0.emoji = var3;
                    var0.me = var2;
                    var0.me_burst = var2;
                    var1 = var1.count;
                    var0.count = var1;
                    var1 = 0;
                    var0.burst_count = var1;
                    return var0;
                };
                var3 = var2.bind(var6)(var1);
            case 80:
                if (!(var4 == var5)) {
                    _fun36415_ip = 88;
                    continue _fun36415
                }
            case 84:
                var5 = new Array(0);
            case 88:
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var8 = var5;
                var1 = arraySpread(var9, var8, var7);
                if (!(var4 == var3)) {
                    _fun36415_ip = 112;
                    continue _fun36415
                }
            case 108:
                var3 = new Array(0);
            case 112:
                var9 = var2;
                var8 = var3;
                var7 = var1;
                var1 = arraySpread(var9, var8, var7);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun36417: for (var _fun36417_ip = 0;;) switch (_fun36417_ip) {
                        case 0:
                            var0 = {};
                            var6 = arg0;
                            var7 = var0;
                            var1 = copyDataProperties(var7, var6);
                            var3 = null;
                            var2 = var3 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun36417_ip = 29;
                                continue _fun36417
                            }
                        case 23:
                            var1 = var0.count_details;
                        case 29:
                            if (!(var3 != var1)) {
                                _fun36417_ip = 93;
                                continue _fun36417
                            }
                        case 33:
                            var1 = var0.count_details;
                            var4 = var1.burst;
                            var5 = var3 != var4;
                            var2 = 0;
                            if (!var5) {
                                _fun36417_ip = 57;
                                continue _fun36417
                            }
                        case 54:
                            var2 = var4;
                        case 57:
                            var0.burst_count = var2;
                            var2 = var0.count_details;
                            var2 = var2.normal;
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun36417_ip = 87;
                                continue _fun36417
                            }
                        case 84:
                            var1 = var2;
                        case 87:
                            var0.count = var1;
                        case 93:
                            var2 = var0.count;
                            var1 = 0;
                            if (!(var2 < var1)) {
                                _fun36417_ip = 111;
                                continue _fun36417
                            }
                        case 105:
                            var0.count = var1;
                        case 111:
                            var2 = var0.burst_count;
                            if (!(var2 < var1)) {
                                _fun36417_ip = 127;
                                continue _fun36417
                            }
                        case 121:
                            var0.burst_count = var1;
                        case 127:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 142:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: transformMessageSnapshots, environment: var1
        _fun36418: for (var _fun36418_ip = 0;;) switch (_fun36418_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.message_snapshots;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun36418_ip = 40;
                    continue _fun36418
                }
            case 15:
                var2 = var0.message_snapshots;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.message;
                    var1 = var0.moderator_report;
                    var2 = _closure1_slot4;
                    var0 = {};
                    var4 = _closure1_slot16;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var5);
                    var0.message = var3;
                    var0.moderator_report = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var6 = var0;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun36418_ip = 44;
                continue _fun36418;
            case 40:
                var0 = new Array(0);
            case 44:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var9 = var8.MessageSnapshotRecord;
    var _closure1_slot4 = var9;
    var8 = var8.MinimalMessageRecord;
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var _closure1_slot7 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MessageFlags;
    var _closure1_slot12 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot13 = var7;
    var4 = var4.MessageTypesSets;
    var _closure1_slot14 = var4;
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = {
        'id': '???',
        'username': '???'
    };
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot15 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageRecordUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.createMessageRecord = var3;
    var3 = function(arg0, arg1) { // Original name: updateServerMessage, environment: var1
        _fun36420: for (var _fun36420_ip = 0;;) switch (_fun36420_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = var3.edited_timestamp;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun36420_ip = 42;
                    continue _fun36420
                }
            case 18:
                var0 = {};
                var6 = var0;
                var5 = var2;
                var1 = copyDataProperties(var6, var5);
                var6 = var0;
                var5 = var3;
                var1 = copyDataProperties(var6, var5);
                _fun36420_ip = 87;
                continue _fun36420;
            case 42:
                var1 = {};
                var6 = var1;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.reactions;
                var3 = 'reactions';
                var1[var3] = var4;
                var3 = var2.interaction_data;
                var2 = 'interaction_data';
                var1[var2] = var3;
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.updateServerMessage = var3;
    var3 = function(arg0, arg1) { // Original name: updateMessageRecord, environment: var1
        _fun36421: for (var _fun36421_ip = 0;;) switch (_fun36421_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = var3.edited_timestamp;
                var4 = null;
                if (!(var4 == var1)) {
                    _fun36421_ip = 955;
                    continue _fun36421
                }
            case 21:
                var1 = var3.call;
                var6 = var0;
                if (!(var4 != var1)) {
                    _fun36421_ip = 74;
                    continue _fun36421
                }
            case 33:
                var5 = var0.set;
                var8 = _closure1_slot19;
                var7 = var3.call;
                var2 = var0.timestamp;
                var1 = undefined;
                var2 = var8.bind(var1)(var7, var2);
                var1 = 'call';
                var6 = var5.bind(var0)(var1, var2);
            case 74:
                var1 = var3.attachments;
                var7 = var6;
                if (!(var4 != var1)) {
                    _fun36421_ip = 116;
                    continue _fun36421
                }
            case 87:
                var5 = var6.set;
                var2 = _closure1_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = 'attachments';
                var7 = var5.bind(var6)(var1, var2);
            case 116:
                var1 = var3.application;
                var6 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 148;
                    continue _fun36421
                }
            case 128:
                var5 = var7.set;
                var2 = var3.application;
                var1 = 'application';
                var6 = var5.bind(var7)(var1, var2);
            case 148:
                var1 = var3.activity;
                var7 = var6;
                if (!(var4 != var1)) {
                    _fun36421_ip = 182;
                    continue _fun36421
                }
            case 161:
                var5 = var6.set;
                var2 = var3.activity;
                var1 = 'activity';
                var7 = var5.bind(var6)(var1, var2);
            case 182:
                var1 = var3.content;
                var1 = var4 != var1;
                if (!var1) {
                    _fun36421_ip = 207;
                    continue _fun36421
                }
            case 194:
                var5 = var3.content;
                var2 = '';
                var1 = var2 !== var5;
            case 207:
                var6 = var7;
                if (!var1) {
                    _fun36421_ip = 233;
                    continue _fun36421
                }
            case 213:
                var5 = var7.set;
                var2 = var3.content;
                var1 = 'content';
                var6 = var5.bind(var7)(var1, var2);
            case 233:
                var1 = var3.embeds;
                var7 = var6;
                if (!(var4 != var1)) {
                    _fun36421_ip = 275;
                    continue _fun36421
                }
            case 246:
                var5 = var6.set;
                var2 = _closure1_slot20;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = 'embeds';
                var7 = var5.bind(var6)(var1, var2);
            case 275:
                var1 = var3.message_snapshots;
                var6 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 317;
                    continue _fun36421
                }
            case 288:
                var5 = var7.set;
                var2 = _closure1_slot22;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = 'messageSnapshots';
                var6 = var5.bind(var7)(var1, var2);
            case 317:
                var2 = var3.pinned;
                var1 = var6.pinned;
                var7 = var6;
                if (!(var2 !== var1)) {
                    _fun36421_ip = 357;
                    continue _fun36421
                }
            case 336:
                var5 = var6.set;
                var2 = var3.pinned;
                var1 = 'pinned';
                var7 = var5.bind(var6)(var1, var2);
            case 357:
                var1 = var7.webhookId;
                var1 = var4 != var1;
                if (!var1) {
                    _fun36421_ip = 380;
                    continue _fun36421
                }
            case 370:
                var2 = var3.author;
                var1 = var4 != var2;
            case 380:
                var6 = var7;
                if (!var1) {
                    _fun36421_ip = 434;
                    continue _fun36421
                }
            case 386:
                var5 = var7.set;
                var8 = _closure1_slot7;
                var11 = var3.author;
                var2 = var8.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var8
                    }
                });
                var12 = var2;
                var1 = new var12[var8](var11, var10);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = 'author';
                var6 = var5.bind(var7)(var1, var2);
            case 434:
                var1 = var3.flags;
                var1 = var4 != var1;
                if (!var1) {
                    _fun36421_ip = 460;
                    continue _fun36421
                }
            case 446:
                var5 = var3.flags;
                var2 = var6.flags;
                var1 = var5 !== var2;
            case 460:
                var7 = var6;
                if (!var1) {
                    _fun36421_ip = 486;
                    continue _fun36421
                }
            case 466:
                var5 = var6.set;
                var2 = var3.flags;
                var1 = 'flags';
                var7 = var5.bind(var6)(var1, var2);
            case 486:
                var1 = var3.components;
                var6 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 556;
                    continue _fun36421
                }
            case 499:
                var5 = var7.set;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var8.bind(var1)(var2);
                var2 = var8.transformComponents;
                var1 = var3.components;
                var2 = var2.bind(var8)(var1);
                var1 = 'components';
                var6 = var5.bind(var7)(var1, var2);
            case 556:
                var1 = var3.role_subscription_data;
                var7 = var6;
                if (!(var4 != var1)) {
                    _fun36421_ip = 590;
                    continue _fun36421
                }
            case 569:
                var5 = var6.set;
                var2 = var3.role_subscription_data;
                var1 = 'roleSubscriptionData';
                var7 = var5.bind(var6)(var1, var2);
            case 590:
                var1 = var3.reactions;
                var6 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 648;
                    continue _fun36421
                }
            case 603:
                var5 = var7.set;
                var8 = _closure1_slot21;
                var2 = var0.reactions;
                if (!(var4 == var2)) {
                    _fun36421_ip = 631;
                    continue _fun36421
                }
            case 625:
                var2 = var3.reactions;
            case 631:
                var1 = undefined;
                var2 = var8.bind(var1)(var2);
                var1 = 'reactions';
                var6 = var5.bind(var7)(var1, var2);
            case 648:
                var1 = var3.poll;
                var8 = var6;
                if (!(var4 != var1)) {
                    _fun36421_ip = 712;
                    continue _fun36421
                }
            case 661:
                var5 = var6.set;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var7 = undefined;
                var2 = var2.bind(var7)(var1);
                var1 = var3.poll;
                var2 = var2.bind(var7)(var1);
                var1 = 'poll';
                var8 = var5.bind(var6)(var1, var2);
            case 712:
                var1 = var3.mentions;
                var1 = var4 != var1;
                var7 = var8;
                var2 = false;
                if (!var1) {
                    _fun36421_ip = 770;
                    continue _fun36421
                }
            case 730:
                var6 = var8.set;
                var9 = var3.mentions;
                var5 = var9.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var5.bind(var9)(var1);
                var1 = 'mentions';
                var7 = var6.bind(var8)(var1, var5);
                var2 = true;
            case 770:
                var1 = var3.mention_games;
                var8 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 806;
                    continue _fun36421
                }
            case 783:
                var6 = var7.set;
                var5 = var3.mention_games;
                var1 = 'mentionGames';
                var8 = var6.bind(var7)(var1, var5);
                var2 = true;
            case 806:
                var1 = var3.mention_everyone;
                var7 = var8;
                if (!(var4 != var1)) {
                    _fun36421_ip = 842;
                    continue _fun36421
                }
            case 819:
                var6 = var8.set;
                var5 = var3.mention_everyone;
                var1 = 'mentionEveryone';
                var7 = var6.bind(var8)(var1, var5);
                var2 = true;
            case 842:
                var1 = var3.mention_roles;
                var6 = var7;
                if (!(var4 != var1)) {
                    _fun36421_ip = 878;
                    continue _fun36421
                }
            case 855:
                var5 = var7.set;
                var4 = var3.mention_roles;
                var1 = 'mentionRoles';
                var6 = var5.bind(var7)(var1, var4);
                var2 = true;
            case 878:
                var1 = var6;
                if (!var2) {
                    _fun36421_ip = 953;
                    continue _fun36421
                }
            case 884:
                var5 = var6.set;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 12;
                var2 = var7[var2];
                var7 = undefined;
                var4 = var4.bind(var7)(var2);
                var2 = {};
                var2.message = var6;
                var9 = _closure1_slot8;
                var8 = var9.getId;
                var8 = var8.bind(var9)();
                var2.userId = var8;
                var4 = var4.bind(var7)(var2);
                var2 = 'mentioned';
                var1 = var5.bind(var6)(var2, var4);
            case 953:
                return var1;
            case 955:
                var2 = _closure1_slot17;
                var1 = {};
                var4 = var0.reactions;
                var1.reactions = var4;
                var0 = var0.interactionData;
                var1.interactionData = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.updateMessageRecord = var3;
    var3 = function(arg0) { // Environment: var1
        _fun36423: for (var _fun36423_ip = 0;;) switch (_fun36423_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.getMessageStickers;
                var0 = var0.bind(var2)(var1);
                var2 = var0.length;
                var0 = 0;
                var0 = var0 === var2;
                if (var0) {
                    _fun36423_ip = 66;
                    continue _fun36423
                }
            case 53:
                var2 = var1.content;
                var1 = '';
                var0 = var1 !== var2;
            case 66:
                return var0;
        }
    };
    var2.canEditMessageWithStickers = var3;
    var1 = function(arg0) { // Original name: hasEphemeralAppearance, environment: var1
        _fun36424: for (var _fun36424_ip = 0;;) switch (_fun36424_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.hasFlag;
                var0 = _closure1_slot12;
                var0 = var0.EPHEMERAL;
                var0 = var3.bind(var2)(var0);
                if (!var0) {
                    _fun36424_ip = 49;
                    continue _fun36424
                }
            case 30:
                var2 = var2.type;
                var1 = _closure1_slot13;
                var1 = var1.IN_GAME_MESSAGE_NUX;
                var0 = var2 !== var1;
            case 49:
                return var0;
        }
    };
    var2.hasEphemeralAppearance = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3932, 3060, 1620, 1216, 3059, 1613, 1346, 660, 3933, 3281, 3942, 21, 3949, 3307, 3955, 3004, 3956, 3958, 2]);