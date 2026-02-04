// modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.processColor;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92585: for (var _fun92585_ip = 0;;) switch (_fun92585_ip) {
            case 0:
                var6 = arguments[1];
                var8 = undefined;
                if (!(var6 === var8)) {
                    _fun92585_ip = 11;
                    continue _fun92585
                }
            case 9:
                var6 = false;
            case 11:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 7;
                var0 = var0[var4];
                var3 = var1.bind(var8)(var0);
                var1 = var3.getMediaPostEmbedChannelId;
                var0 = arg0;
                var5 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun92585_ip = 1678;
                    continue _fun92585
                }
            case 57:
                var3 = _closure1_slot10;
                var1 = var3.getEmbedFetchState;
                var3 = var1.bind(var3)(var5);
                var1 = _closure1_slot11;
                var1 = var1.FETCHED;
                if (!(var3 === var1)) {
                    _fun92585_ip = 1676;
                    continue _fun92585
                }
            case 89:
                var3 = _closure1_slot10;
                var1 = var3.getMediaPostEmbed;
                var1 = var1.bind(var3)(var5);
                var3 = var0 == var1;
                var13 = undefined;
                if (var3) {
                    _fun92585_ip = 121;
                    continue _fun92585
                }
            case 115:
                var13 = var1.media;
            case 121:
                if (!(var0 != var13)) {
                    _fun92585_ip = 1674;
                    continue _fun92585
                }
            case 128:
                var5 = _closure1_slot7;
                var3 = var5.getGuild;
                var1 = var13.guild_id;
                var12 = var3.bind(var5)(var1);
                var5 = _closure1_slot9;
                var3 = var5.getUser;
                var1 = var13.author_id;
                var11 = var3.bind(var5)(var1);
                var5 = _closure1_slot6;
                var3 = var5.getChannel;
                var1 = var13.parent_channel_id;
                var10 = var3.bind(var5)(var1);
                var3 = var5.getChannel;
                var1 = var13.channel_id;
                var9 = var3.bind(var5)(var1);
                var3 = _closure1_slot8;
                var1 = var3.getGuildId;
                var7 = var1.bind(var3)();
                var5 = var0 != var10;
                if (!var5) {
                    _fun92585_ip = 255;
                    continue _fun92585
                }
            case 224:
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 8;
                var1 = var14[var1];
                var3 = var3.bind(var8)(var1);
                var1 = var3.canViewChannel;
                var5 = var1.bind(var3)(var10);
            case 255:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var4 = var3.bind(var8)(var1);
                var3 = var4.getMediaPostEmbedCommonData;
                var1 = {};
                var1.mediaPostEmbedData = var13;
                var1.guild = var12;
                var1.parentChannel = var10;
                var1.postThread = var9;
                var1.user = var11;
                var1.selectedGuildId = var7;
                var1.canAccess = var5;
                var5 = var3.bind(var4)(var1);
                if (!(var0 != var5)) {
                    _fun92585_ip = 1672;
                    continue _fun92585
                }
            case 325:
                var1 = var5.authorName;
                if (!(var0 != var1)) {
                    _fun92585_ip = 575;
                    continue _fun92585
                }
            case 338:
                var1 = var5.channelName;
                if (!(var0 != var1)) {
                    _fun92585_ip = 575;
                    continue _fun92585
                }
            case 351:
                if (!(var0 != var11)) {
                    _fun92585_ip = 575;
                    continue _fun92585
                }
            case 358:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = var3.bind(var8)(var1);
                var3 = var4.getUserAuthor;
                var1 = var5.postThread;
                var4 = var3.bind(var4)(var11, var1);
                var3 = var0 == var4;
                var1 = undefined;
                if (var3) {
                    _fun92585_ip = 411;
                    continue _fun92585
                }
            case 405:
                var1 = var4.colorString;
            case 411:
                var1 = var0 != var1;
                var10 = undefined;
                if (!var1) {
                    _fun92585_ip = 444;
                    continue _fun92585
                }
            case 420:
                var3 = _closure1_slot4;
                var7 = var0 == var4;
                var1 = undefined;
                if (var7) {
                    _fun92585_ip = 439;
                    continue _fun92585
                }
            case 433:
                var1 = var4.colorString;
            case 439:
                var10 = var3.bind(var8)(var1);
            case 444:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 9;
                var4 = var9[var1];
                var4 = var3.bind(var8)(var4);
                var7 = var4.intl;
                var4 = var7.formatToParts;
                var1 = var9[var1];
                var1 = var3.bind(var8)(var1);
                var1 = var1.t;
                var3 = var1.mCytFr;
                var1 = {};
                var9 = var5.authorName;
                var1.username = var9;
                var9 = {};
                var12 = 'bindUserMenu';
                var9.action = var12;
                var11 = var11.id;
                var9.userId = var11;
                var9.linkColor = var10;
                var9.roleColor = var10;
                var10 = var5.threadId;
                var9.messageChannelId = var10;
                var1.usernameOnClick = var9;
                var9 = var5.channelName;
                var1.channelName = var9;
                var4 = var4.bind(var7)(var3, var1);
                _fun92585_ip = 647;
                continue _fun92585;
            case 575:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 9;
                var7 = var10[var1];
                var7 = var3.bind(var8)(var7);
                var9 = var7.intl;
                var7 = var9.formatToParts;
                var1 = var10[var1];
                var1 = var3.bind(var8)(var1);
                var1 = var1.t;
                var3 = var1.p4VdWJ;
                var1 = {};
                var10 = var5.guildName;
                var1.guildName = var10;
                var4 = var7.bind(var9)(var3, var1);
            case 647:
                var3 = var5.canAccess;
                var1 = false;
                if (!(var1 !== var3)) {
                    _fun92585_ip = 701;
                    continue _fun92585
                }
            case 659:
                var3 = _closure1_slot4;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var1 = var7.bind(var8)(var1);
                var1 = var1.unsafe_rawColors;
                var1 = var1.BRAND_500;
                var3 = var3.bind(var8)(var1);
                _fun92585_ip = 741;
                continue _fun92585;
            case 701:
                var7 = _closure1_slot4;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var1 = var9.bind(var8)(var1);
                var1 = var1.unsafe_rawColors;
                var1 = var1.TEAL_430;
                var3 = var7.bind(var8)(var1);
            case 741:
                var1 = var5.coverImage;
                var7 = var0 != var1;
                if (!var7) {
                    _fun92585_ip = 791;
                    continue _fun92585
                }
            case 754:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 12;
                var1 = var10[var1];
                var10 = var9.bind(var8)(var1);
                var9 = var10.isAnimatedImageUrl;
                var1 = var5.coverImage;
                var7 = var9.bind(var10)(var1);
            case 791:
                var1 = var5.coverImage;
                var1 = var0 != var1;
                if (!var1) {
                    _fun92585_ip = 813;
                    continue _fun92585
                }
            case 804:
                var9 = var5.shouldShowBlurredThumbnailImage;
                var1 = !var9;
            case 813:
                if (!var1) {
                    _fun92585_ip = 819;
                    continue _fun92585
                }
            case 816:
                var1 = var7;
            case 819:
                if (!var1) {
                    _fun92585_ip = 825;
                    continue _fun92585
                }
            case 822:
                var1 = var6;
            case 825:
                if (!var1) {
                    _fun92585_ip = 869;
                    continue _fun92585
                }
            case 828:
                var9 = var5.coverImage;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = '?format=webp';
                var1 = var7.bind(var6)(var9, var1);
                var5.coverImage = var1;
            case 869:
                var1 = var5.shouldShowBlurredThumbnailImage;
                if (var1) {
                    _fun92585_ip = 1587;
                    continue _fun92585
                }
            case 881:
                var7 = _closure1_slot5;
                var6 = var7.get;
                var1 = 'obscure_blur_effect_explicit_content_enabled';
                var9 = var6.bind(var7)(var1);
                if (var9) {
                    _fun92585_ip = 924;
                    continue _fun92585
                }
            case 904:
                var7 = _closure1_slot5;
                var6 = var7.get;
                var1 = 'obscure_blur_effect_gore_content_enabled';
                var9 = var6.bind(var7)(var1);
            case 924:
                if (var9) {
                    _fun92585_ip = 947;
                    continue _fun92585
                }
            case 927:
                var7 = _closure1_slot5;
                var6 = var7.get;
                var1 = 'obscure_blur_effect_self_harm_content_enabled';
                var9 = var6.bind(var7)(var1);
            case 947:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 14;
                var1 = var1[var7];
                var10 = var6.bind(var8)(var1);
                var6 = var10.isPendingScanVersion;
                var1 = var5.contentScanVersion;
                var12 = var6.bind(var10)(var1);
                var11 = var9;
                if (!var9) {
                    _fun92585_ip = 1017;
                    continue _fun92585
                }
            case 990:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var6 = var6.bind(var8)(var1);
                var1 = var6.shouldAgeVerifyForExplicitMedia;
                var11 = var1.bind(var6)();
            case 1017:
                var10 = var9;
                if (!var10) {
                    _fun92585_ip = 1053;
                    continue _fun92585
                }
            case 1023:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var1 = var7[var1];
                var6 = var6.bind(var8)(var1);
                var1 = var6.isVerifiedTeen;
                var10 = var1.bind(var6)();
            case 1053:
                var1 = var5.shouldContainMediaWithBackground;
                if (!var1) {
                    _fun92585_ip = 1075;
                    continue _fun92585
                }
            case 1062:
                var1 = var5.coverImage;
                if (!(var0 == var1)) {
                    _fun92585_ip = 1308;
                    continue _fun92585
                }
            case 1075:
                var1 = {};
                var20 = var1;
                var19 = var5;
                var6 = copyDataProperties(var20, var19);
                var6 = 'footer';
                var1[var6] = var4;
                var14 = var5.shouldSpoiler;
                var7 = '';
                var6 = true;
                var13 = var7;
                if (!(var6 === var14)) {
                    _fun92585_ip = 1180;
                    continue _fun92585
                }
            case 1115:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 9;
                var14 = var17[var6];
                var14 = var16.bind(var8)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var6 = var17[var6];
                var6 = var16.bind(var8)(var6);
                var6 = var6.t;
                var6 = var6["F+x38C"];
                var14 = var14.bind(var15)(var6);
                var6 = var14.toUpperCase;
                var13 = var6.bind(var14)();
            case 1180:
                var6 = 'spoiler';
                var1[var6] = var13;
                if (!var9) {
                    _fun92585_ip = 1247;
                    continue _fun92585
                }
            case 1192:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 9;
                var13 = var16[var6];
                var13 = var15.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var6 = var16[var6];
                var6 = var15.bind(var8)(var6);
                var6 = var6.t;
                var6 = var6.SpxcUR;
                var7 = var13.bind(var14)(var6);
            case 1247:
                var6 = 'obscure';
                var1[var6] = var7;
                var6 = 'obscureAwaitingScan';
                var1[var6] = var12;
                var6 = 'verifyAge';
                var1[var6] = var11;
                var6 = 'obscureHideControls';
                var1[var6] = var10;
                var6 = 'obscureIsOpaque';
                var1[var6] = var9;
                var6 = 'ctaButtonColor';
                var1[var6] = var3;
                _fun92585_ip = 1585;
                continue _fun92585;
            case 1308:
                var6 = {};
                var20 = var6;
                var19 = var5;
                var7 = copyDataProperties(var20, var19);
                var7 = 'footer';
                var6[var7] = var4;
                var15 = var5.shouldSpoiler;
                var13 = '';
                var7 = true;
                var14 = var13;
                if (!(var7 === var15)) {
                    _fun92585_ip = 1413;
                    continue _fun92585
                }
            case 1348:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 9;
                var15 = var18[var7];
                var15 = var17.bind(var8)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var7 = var18[var7];
                var7 = var17.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7["F+x38C"];
                var15 = var15.bind(var16)(var7);
                var7 = var15.toUpperCase;
                var14 = var7.bind(var15)();
            case 1413:
                var7 = 'spoiler';
                var6[var7] = var14;
                if (!var9) {
                    _fun92585_ip = 1480;
                    continue _fun92585
                }
            case 1425:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 9;
                var14 = var17[var7];
                var14 = var16.bind(var8)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var7 = var17[var7];
                var7 = var16.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7.SpxcUR;
                var13 = var14.bind(var15)(var7);
            case 1480:
                var7 = 'obscure';
                var6[var7] = var13;
                var7 = 'obscureAwaitingScan';
                var6[var7] = var12;
                var7 = 'verifyAge';
                var6[var7] = var11;
                var7 = 'obscureHideControls';
                var6[var7] = var10;
                var7 = 'obscureIsOpaque';
                var6[var7] = var9;
                var7 = 'ctaButtonColor';
                var6[var7] = var3;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 16;
                var7 = var10[var7];
                var10 = var9.bind(var8)(var7);
                var9 = var10.getBackgroundImageUrl;
                var7 = var5.coverImage;
                var9 = var9.bind(var10)(var7);
                var7 = 'backgroundImage';
                var6[var7] = var9;
                var1 = var6;
            case 1585:
                return var1;
            case 1587:
                var1 = {};
                var20 = var1;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var6 = _closure1_slot3;
                var5 = var6.resolveAssetSource;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 13;
                var2 = var9[var2];
                var2 = var7.bind(var8)(var2);
                var2 = var5.bind(var6)(var2);
                var5 = var2.uri;
                var2 = 'blurredCoverImage';
                var1[var2] = var5;
                var2 = 'footer';
                var1[var2] = var4;
                var2 = 'ctaButtonColor';
                var1[var2] = var3;
                return var1;
            case 1672:
                return var0;
            case 1674:
                return var0;
            case 1676:
                return var0;
            case 1678:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4005, 1372, 1410, 3213, 1621, 9853, 4239, 3463, 1234, 3983, 671, 3980, 12092, 4256, 4248, 4240, 2]);