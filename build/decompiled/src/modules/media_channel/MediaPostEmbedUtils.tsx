// modules/media_channel/MediaPostEmbedUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: getMediaPostEmbedChannelPath, environment: var1
        _fun38584: for (var _fun38584_ip = 0;;) switch (_fun38584_ip) {
            case 0:
                var5 = arg0;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun38584_ip = 81;
                    continue _fun38584
                }
            case 9:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 7;
                var2 = var2[var6];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.parseURLSafely;
                var5 = var2.bind(var4)(var5);
                if (!(var1 != var5)) {
                    _fun38584_ip = 81;
                    continue _fun38584
                }
            case 49:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var3)(var2);
                var2 = var4.remainingPathFromDiscordHostMatch;
                var2 = var2.bind(var4)(var5);
                if (!(var1 == var2)) {
                    _fun38584_ip = 85;
                    continue _fun38584
                }
            case 81:
                var1 = undefined;
                return var1;
            case 85:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.tryParseChannelPath;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
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
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/MediaPostEmbedUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: getMediaPostEmbedCommonData, environment: var1
        _fun38585: for (var _fun38585_ip = 0;;) switch (_fun38585_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.mediaPostEmbedData;
                var12 = var0.guild;
                var9 = var0.parentChannel;
                var13 = var0.postThread;
                var17 = var0.user;
                var4 = var0.selectedGuildId;
                var11 = var0.canAccess;
                var8 = undefined;
                if (!(var11 === var8)) {
                    _fun38585_ip = 51;
                    continue _fun38585
                }
            case 49:
                var11 = false;
            case 51:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun38585_ip = 775;
                    continue _fun38585
                }
            case 60:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var5 = var3.bind(var8)(var1);
                var3 = var5.getThumbnailImage;
                var1 = var2.thumbnail;
                var14 = var3.bind(var5)(var1);
                var6 = !var11;
                if (!var6) {
                    _fun38585_ip = 114;
                    continue _fun38585
                }
            case 106:
                var6 = var2.has_media_attachment;
            case 114:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var19 = 4;
                var3 = var1[var19];
                var3 = var7.bind(var8)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var1[var19];
                var1 = var7.bind(var8)(var1);
                var1 = var1.t;
                if (var11) {
                    _fun38585_ip = 176;
                    continue _fun38585
                }
            case 161:
                var7 = var1.ReFzYZ;
                var16 = var3.bind(var5)(var7);
                _fun38585_ip = 189;
                continue _fun38585;
            case 176:
                var1 = var1.UsZEBI;
                var16 = var3.bind(var5)(var1);
            case 189:
                var1 = var0 != var17;
                var10 = undefined;
                if (!var1) {
                    _fun38585_ip = 241;
                    continue _fun38585
                }
            case 198:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var7 = var3.bind(var8)(var1);
                var5 = var7.getName;
                var3 = var2.guild_id;
                var1 = var2.channel_id;
                var10 = var5.bind(var7)(var3, var1, var17);
            case 241:
                var1 = var0 == var17;
                var7 = undefined;
                if (var1) {
                    _fun38585_ip = 279;
                    continue _fun38585
                }
            case 250:
                var5 = var17.getAvatarURL;
                var1 = var0 == var12;
                var3 = undefined;
                if (var1) {
                    _fun38585_ip = 270;
                    continue _fun38585
                }
            case 265:
                var3 = var12.id;
            case 270:
                var1 = 40;
                var7 = var5.bind(var17)(var3, var1);
            case 279:
                var1 = var0 != var7;
                if (!var1) {
                    _fun38585_ip = 295;
                    continue _fun38585
                }
            case 286:
                var3 = var2.guild_id;
                var1 = var4 === var3;
            case 295:
                if (var1) {
                    _fun38585_ip = 364;
                    continue _fun38585
                }
            case 298:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var4 = var3.bind(var8)(var1);
                var3 = var4.getGuildIconURL;
                var1 = {};
                var5 = var2.guild_id;
                var1.id = var5;
                var5 = var2.guild_icon;
                var1.icon = var5;
                var5 = 40;
                var1.size = var5;
                var5 = false;
                var1.canAnimate = var5;
                var7 = var3.bind(var4)(var1);
            case 364:
                var1 = var2.thumbnail;
                var4 = var0 == var1;
                var3 = false;
                var5 = false;
                if (var4) {
                    _fun38585_ip = 412;
                    continue _fun38585
                }
            case 381:
                var17 = var1.height;
                var4 = var1.width;
                var1 = var0 != var17;
                if (!var1) {
                    _fun38585_ip = 402;
                    continue _fun38585
                }
            case 398:
                var1 = var0 != var4;
            case 402:
                if (!var1) {
                    _fun38585_ip = 409;
                    continue _fun38585
                }
            case 405:
                var1 = var17 >= var4;
            case 409:
                var5 = var1;
            case 412:
                if (!var5) {
                    _fun38585_ip = 418;
                    continue _fun38585
                }
            case 415:
                var5 = !var6;
            case 418:
                var4 = var2.thumbnail;
                var17 = var0 == var4;
                var1 = undefined;
                if (var17) {
                    _fun38585_ip = 439;
                    continue _fun38585
                }
            case 433:
                var1 = var4.filename;
            case 439:
                var4 = var0 != var1;
                if (!var4) {
                    _fun38585_ip = 494;
                    continue _fun38585
                }
            case 446:
                var17 = var2.thumbnail;
                var18 = var0 == var17;
                var1 = undefined;
                if (var18) {
                    _fun38585_ip = 491;
                    continue _fun38585
                }
            case 461:
                var20 = var17.filename;
                var17 = var0 == var20;
                var1 = undefined;
                if (var17) {
                    _fun38585_ip = 491;
                    continue _fun38585
                }
            case 476:
                var18 = var20.startsWith;
                var17 = _closure1_slot5;
                var1 = var18.bind(var20)(var17);
            case 491:
                var4 = var1;
            case 494:
                var1 = {};
                var18 = var2.title;
                var20 = var0 != var18;
                var17 = '';
                if (!var20) {
                    _fun38585_ip = 515;
                    continue _fun38585
                }
            case 512:
                var17 = var18;
            case 515:
                var1.title = var17;
                var17 = var2.description;
                var1.subtitle = var17;
                var1.ctaText = var16;
                var1.coverImage = var14;
                var14 = undefined;
                if (!var6) {
                    _fun38585_ip = 598;
                    continue _fun38585
                }
            case 544:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var8)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var8)(var15);
                var15 = var15.t;
                var15 = var15.Yonlia;
                var14 = var16.bind(var17)(var15);
            case 598:
                var1.coverImageOverlayText = var14;
                var14 = var2.parent_channel_id;
                var1.parentChannelId = var14;
                var14 = var2.channel_id;
                var1.threadId = var14;
                var1.postThread = var13;
                var13 = var2.message_id;
                var1.messageId = var13;
                var1.canAccess = var11;
                var11 = var2.guild_id;
                var1.guildId = var11;
                var13 = var0 == var12;
                var11 = undefined;
                if (var13) {
                    _fun38585_ip = 669;
                    continue _fun38585
                }
            case 664:
                var11 = var12.name;
            case 669:
                if (!(var0 == var11)) {
                    _fun38585_ip = 679;
                    continue _fun38585
                }
            case 673:
                var11 = var2.guild_name;
            case 679:
                var1.guildName = var11;
                var12 = var0 == var2;
                var11 = undefined;
                if (var12) {
                    _fun38585_ip = 699;
                    continue _fun38585
                }
            case 693:
                var11 = var2.author_id;
            case 699:
                var1.authorId = var11;
                var1.authorName = var10;
                var10 = var0 == var9;
                var8 = undefined;
                if (var10) {
                    _fun38585_ip = 723;
                    continue _fun38585
                }
            case 718:
                var8 = var9.name;
            case 723:
                var1.channelName = var8;
                var1.avatarUrl = var7;
                var1.shouldShowBlurredThumbnailImage = var6;
                var1.shouldContainMediaWithBackground = var5;
                var1.shouldSpoiler = var4;
                var1.obscureAwaitingScan = var3;
                var3 = var2.flags;
                var1.flags = var3;
                var2 = var2.content_scan_version;
                var1.contentScanVersion = var2;
                return var1;
            case 775:
                return var0;
        }
    };
    var2.getMediaPostEmbedCommonData = var4;
    var4 = function(arg0) { // Original name: getMediaPostEmbedChannelId, environment: var1
        _fun38586: for (var _fun38586_ip = 0;;) switch (_fun38586_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg0;
                var2 = var2.bind(var1)(var0);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun38586_ip = 47;
                    continue _fun38586
                }
            case 23:
                var0 = var2.threadId;
                if (!(var3 == var0)) {
                    _fun38586_ip = 38;
                    continue _fun38586
                }
            case 33:
                var0 = var2.channelId;
            case 38:
                var2 = var2.messageId;
                if (!(var0 !== var2)) {
                    _fun38586_ip = 49;
                    continue _fun38586
                }
            case 47:
                return var1;
            case 49:
                return var0;
        }
    };
    var2.getMediaPostEmbedChannelId = var4;
    var2.getMediaPostEmbedChannelPath = var3;
    var1 = function(arg0, arg1) { // Original name: canUseMediaPostEmbed, environment: var1
        _fun38587: for (var _fun38587_ip = 0;;) switch (_fun38587_ip) {
            case 0:
                var2 = arg1;
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var1 = arg0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun38587_ip = 112;
                    continue _fun38587
                }
            case 29:
                if (!(var1 != var2)) {
                    _fun38587_ip = 112;
                    continue _fun38587
                }
            case 33:
                var5 = var3.features;
                var4 = var5.has;
                var1 = _closure1_slot4;
                var1 = var1.CREATOR_MONETIZABLE;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun38587_ip = 88;
                    continue _fun38587
                }
            case 62:
                var4 = var3.features;
                var3 = var4.has;
                var0 = _closure1_slot4;
                var0 = var0.CREATOR_MONETIZABLE_PROVISIONAL;
                var1 = var3.bind(var4)(var0);
            case 88:
                var0 = var2.isMediaChannel;
                var2 = var0.bind(var2)();
                var0 = true;
                var0 = var0 === var2;
                if (!var0) {
                    _fun38587_ip = 110;
                    continue _fun38587
                }
            case 107:
                var0 = var1;
            case 110:
                return var0;
            case 112:
                var0 = false;
                return var0;
        }
    };
    var2.canUseMediaPostEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 1346, 4198, 1234, 3915, 1417, 3281, 3422, 2]);