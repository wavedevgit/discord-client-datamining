// modules/messages/native/renderer/transformEmbeds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getURL, environment: var1
        _fun55899: for (var _fun55899_ip = 0;;) switch (_fun55899_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.proxyURL;
                var3 = var0.url;
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun55899_ip = 37;
                    continue _fun55899
                }
            case 23:
                var2 = '';
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun55899_ip = 37;
                    continue _fun55899
                }
            case 34:
                var0 = var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageEmbedTypes;
    var _closure1_slot4 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformEmbeds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: transformEmbeds, environment: var1
        var1 = arg0;
        var2 = var1.embeds;
        var3 = var1.channelId;
        var _closure2_slot0 = var3;
        var3 = var1.gifAutoPlay;
        var _closure2_slot1 = var3;
        var3 = var1.hasSpoilerEmbeds;
        var _closure2_slot2 = var3;
        var3 = var1.ignoreEmbedDescriptionCache;
        var _closure2_slot3 = var3;
        var3 = var1.shouldInlineEmbedMedia;
        var _closure2_slot4 = var3;
        var3 = var1.colors;
        var _closure2_slot5 = var3;
        var3 = var1.showListsAndHeaders;
        var _closure2_slot6 = var3;
        var3 = var1.showMaskedLinks;
        var _closure2_slot7 = var3;
        var3 = var1.themedBackgroundColor;
        var _closure2_slot8 = var3;
        var3 = var1.enabledContentHarmTypeFlags;
        var _closure2_slot9 = var3;
        var3 = var1.authorIsBot;
        var _closure2_slot10 = var3;
        var3 = var1.showContentInventoryEntryFallbackEmbed;
        var _closure2_slot11 = var3;
        var1 = var1.shouldAgeVerify;
        var _closure2_slot12 = var1;
        var1 = function(arg0) { // Original name: renderEmbedMedia, environment: var0
            _fun55901: for (var _fun55901_ip = 0;;) switch (_fun55901_ip) {
                case 0:
                    var2 = arg0;
                    var6 = var2.url;
                    var1 = var2.proxyURL;
                    var5 = var2.width;
                    var4 = var2.height;
                    var0 = {};
                    var13 = var0;
                    var12 = var2;
                    var2 = copyDataProperties(var13, var12);
                    var7 = null;
                    var3 = var1;
                    if (!(var7 != var1)) {
                        _fun55901_ip = 102;
                        continue _fun55901
                    }
                case 45:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 2;
                    var8 = var8[var2];
                    var2 = undefined;
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.getImageSrc;
                    var2 = _closure2_slot1;
                    var10 = !var2;
                    var14 = var9;
                    var13 = var1;
                    var12 = var5;
                    var11 = var4;
                    var3 = var14[var8](var13, var12, var11, var10, var9);
                case 102:
                    var2 = 'proxyURL';
                    var0[var2] = var3;
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var8.bind(var2)(var3);
                    var2 = var3.getImageSrc;
                    if (!(var7 != var1)) {
                        _fun55901_ip = 149;
                        continue _fun55901
                    }
                case 146:
                    var6 = var1;
                case 149:
                    var1 = _closure2_slot1;
                    var10 = !var1;
                    var14 = var3;
                    var13 = var6;
                    var12 = var5;
                    var11 = var4;
                    var2 = var14[var2](var13, var12, var11, var10, var9);
                    var1 = 'url';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var _closure2_slot13 = var1;
        var1 = var2.flatMap;
        var0 = function(arg0) { // Environment: var0
            _fun55902: for (var _fun55902_ip = 0;;) switch (_fun55902_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.POST_PREVIEW;
                    if (!(var1 !== var0)) {
                        _fun55902_ip = 2792;
                        continue _fun55902
                    }
                case 28:
                    var1 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.GIFT;
                    if (!(var1 !== var0)) {
                        _fun55902_ip = 2792;
                        continue _fun55902
                    }
                case 50:
                    var1 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.SAFETY_POLICY_NOTICE;
                    if (!(var1 !== var0)) {
                        _fun55902_ip = 2792;
                        continue _fun55902
                    }
                case 72:
                    var1 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.SAFETY_SYSTEM_NOTIFICATION;
                    if (!(var1 !== var0)) {
                        _fun55902_ip = 2792;
                        continue _fun55902
                    }
                case 94:
                    var1 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                    if (!(var1 !== var0)) {
                        _fun55902_ip = 2792;
                        continue _fun55902
                    }
                case 116:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var0 = var1[var0];
                    var1 = undefined;
                    var2 = var2.bind(var1)(var0);
                    var0 = var2.isServerShopArticleEmbed;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun55902_ip = 2786;
                        continue _fun55902
                    }
                case 155:
                    var2 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.VOICE_CHANNEL;
                    if (!(var2 !== var0)) {
                        _fun55902_ip = 2780;
                        continue _fun55902
                    }
                case 177:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var0 = var4[var0];
                    var2 = var2.bind(var1)(var0);
                    var0 = var2.isContentInventoryFallbackEmbed;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun55902_ip = 227;
                        continue _fun55902
                    }
                case 211:
                    var0 = _closure2_slot11;
                    if (var0) {
                        _fun55902_ip = 227;
                        continue _fun55902
                    }
                case 221:
                    var0 = new Array(0);
                    return var0;
                case 227:
                    var0 = _closure2_slot4;
                    var4 = null;
                    var5 = null;
                    if (!var0) {
                        _fun55902_ip = 434;
                        continue _fun55902
                    }
                case 244:
                    var0 = var3.thumbnail;
                    var0 = var4 != var0;
                    var5 = null;
                    if (!var0) {
                        _fun55902_ip = 434;
                        continue _fun55902
                    }
                case 262:
                    var7 = var3.thumbnail;
                    var11 = var7.url;
                    var6 = var7.proxyURL;
                    var10 = var7.width;
                    var9 = var7.height;
                    var0 = {};
                    var28 = var0;
                    var27 = var7;
                    var7 = copyDataProperties(var28, var27);
                    var8 = var6;
                    if (!(var4 != var6)) {
                        _fun55902_ip = 357;
                        continue _fun55902
                    }
                case 308:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 2;
                    var7 = var13[var7];
                    var13 = var12.bind(var1)(var7);
                    var12 = var13.getImageSrc;
                    var7 = _closure2_slot1;
                    var25 = !var7;
                    var29 = var13;
                    var28 = var6;
                    var27 = var10;
                    var26 = var9;
                    var8 = var29[var12](var28, var27, var26, var25, var24);
                case 357:
                    var7 = 'proxyURL';
                    var0[var7] = var8;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 2;
                    var7 = var12[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getImageSrc;
                    if (!(var4 != var6)) {
                        _fun55902_ip = 399;
                        continue _fun55902
                    }
                case 396:
                    var11 = var6;
                case 399:
                    var6 = _closure2_slot1;
                    var25 = !var6;
                    var29 = var8;
                    var28 = var11;
                    var27 = var10;
                    var26 = var9;
                    var7 = var29[var7](var28, var27, var26, var25, var24);
                    var6 = 'url';
                    var0[var6] = var7;
                    var5 = var0;
                case 434:
                    var0 = _closure2_slot4;
                    var10 = null;
                    if (!var0) {
                        _fun55902_ip = 473;
                        continue _fun55902
                    }
                case 443:
                    var0 = var3.image;
                    var0 = var4 != var0;
                    var10 = null;
                    if (!var0) {
                        _fun55902_ip = 473;
                        continue _fun55902
                    }
                case 458:
                    var6 = _closure2_slot13;
                    var0 = var3.image;
                    var10 = var6.bind(var1)(var0);
                case 473:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun55902_ip = 490;
                        continue _fun55902
                    }
                case 480:
                    var0 = var3.images;
                    if (!(var4 == var0)) {
                        _fun55902_ip = 573;
                        continue _fun55902
                    }
                case 490:
                    var6 = var4 == var10;
                    if (var6) {
                        _fun55902_ip = 530;
                        continue _fun55902
                    }
                case 497:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 5;
                    var0 = var8[var0];
                    var7 = var7.bind(var1)(var0);
                    var0 = var7.isIOS;
                    var0 = var0.bind(var7)();
                    var6 = !var0;
                case 530:
                    var0 = !var6;
                    if (var6) {
                        _fun55902_ip = 546;
                        continue _fun55902
                    }
                case 536:
                    var6 = var3.thumbnail;
                    var0 = var4 == var6;
                case 546:
                    var9 = null;
                    if (!var0) {
                        _fun55902_ip = 571;
                        continue _fun55902
                    }
                case 551:
                    var0 = var4 != var10;
                    var9 = null;
                    if (!var0) {
                        _fun55902_ip = 571;
                        continue _fun55902
                    }
                case 560:
                    var0 = new Array(1);
                    var0[0] = var10;
                    var9 = var0;
                case 571:
                    _fun55902_ip = 593;
                    continue _fun55902;
                case 573:
                    var7 = var3.images;
                    var6 = var7.map;
                    var0 = _closure2_slot13;
                    var9 = var6.bind(var7)(var0);
                case 593:
                    var11 = var5;
                    if (!(var4 != var11)) {
                        _fun55902_ip = 1145;
                        continue _fun55902
                    }
                case 603:
                    var0 = var3.video;
                    var11 = var5;
                    if (!(var4 != var0)) {
                        _fun55902_ip = 1145;
                        continue _fun55902
                    }
                case 619:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.GIFV;
                    if (!(var6 === var0)) {
                        _fun55902_ip = 648;
                        continue _fun55902
                    }
                case 638:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun55902_ip = 923;
                        continue _fun55902
                    }
                case 648:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.VIDEO;
                    if (!(var6 !== var0)) {
                        _fun55902_ip = 705;
                        continue _fun55902
                    }
                case 667:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.RICH;
                    if (!(var6 !== var0)) {
                        _fun55902_ip = 705;
                        continue _fun55902
                    }
                case 686:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.ARTICLE;
                    if (!(var6 === var0)) {
                        _fun55902_ip = 724;
                        continue _fun55902
                    }
                case 705:
                    var0 = var3.video;
                    var0 = var0.proxyURL;
                    if (!(var4 == var0)) {
                        _fun55902_ip = 923;
                        continue _fun55902
                    }
                case 724:
                    var7 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.VIDEO;
                    var6 = var5;
                    if (!(var7 === var0)) {
                        _fun55902_ip = 992;
                        continue _fun55902
                    }
                case 749:
                    var0 = var3.video;
                    var0 = var0.proxyURL;
                    var6 = var5;
                    if (!(var4 == var0)) {
                        _fun55902_ip = 992;
                        continue _fun55902
                    }
                case 771:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var0 = var8[var0];
                    var8 = var7.bind(var1)(var0);
                    var7 = var8.shouldPlayVideoInline;
                    var12 = var3.provider;
                    var13 = var4 == var12;
                    var0 = undefined;
                    if (var13) {
                        _fun55902_ip = 817;
                        continue _fun55902
                    }
                case 812:
                    var0 = var12.name;
                case 817:
                    var0 = var7.bind(var8)(var0);
                    var6 = var5;
                    if (!var0) {
                        _fun55902_ip = 992;
                        continue _fun55902
                    }
                case 831:
                    var0 = var3.provider;
                    var8 = var4 == var0;
                    var7 = undefined;
                    if (var8) {
                        _fun55902_ip = 851;
                        continue _fun55902
                    }
                case 846:
                    var7 = var0.name;
                case 851:
                    var0 = 'YouTube';
                    var8 = false;
                    if (!(var0 === var7)) {
                        _fun55902_ip = 865;
                        continue _fun55902
                    }
                case 863:
                    var8 = true;
                case 865:
                    var0 = var3.provider;
                    var12 = var4 == var0;
                    var7 = undefined;
                    if (var12) {
                        _fun55902_ip = 885;
                        continue _fun55902
                    }
                case 880:
                    var7 = var0.name;
                case 885:
                    var0 = 'TikTok';
                    if (!(var0 === var7)) {
                        _fun55902_ip = 897;
                        continue _fun55902
                    }
                case 895:
                    var8 = true;
                case 897:
                    var0 = {};
                    var28 = var0;
                    var27 = var5;
                    var7 = copyDataProperties(var28, var27);
                    var7 = 'showPlayButton';
                    var0[var7] = var8;
                    var6 = var0;
                    _fun55902_ip = 992;
                    continue _fun55902;
                case 923:
                    var0 = {};
                    var28 = var0;
                    var27 = var5;
                    var5 = copyDataProperties(var28, var27);
                    var7 = var3.type;
                    var5 = _closure1_slot4;
                    var5 = var5.GIFV;
                    var7 = var7 === var5;
                    var5 = 'gifv';
                    var0[var5] = var7;
                    var7 = _closure1_slot5;
                    var5 = var3.video;
                    var7 = var7.bind(var1)(var5);
                    var5 = 'videoUrl';
                    var0[var5] = var7;
                    var6 = var0;
                case 992:
                    var5 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.GIFV;
                    var0 = var5 !== var0;
                    if (var0) {
                        _fun55902_ip = 1018;
                        continue _fun55902
                    }
                case 1014:
                    var0 = _closure2_slot1;
                case 1018:
                    var5 = var6;
                    if (var0) {
                        _fun55902_ip = 1065;
                        continue _fun55902
                    }
                case 1024:
                    var0 = {};
                    var28 = var0;
                    var27 = var6;
                    var6 = copyDataProperties(var28, var27);
                    var7 = _closure1_slot5;
                    var6 = var3.video;
                    var7 = var7.bind(var1)(var6);
                    var6 = 'gifvUrlForPortal';
                    var0[var6] = var7;
                    var5 = var0;
                case 1065:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var0 = var7[var0];
                    var7 = var6.bind(var1)(var0);
                    var6 = var7.isWebPlayerVideoUrl;
                    var8 = _closure1_slot5;
                    var0 = var3.video;
                    var0 = var8.bind(var1)(var0);
                    var0 = var6.bind(var7)(var0);
                    var11 = var5;
                    if (!var0) {
                        _fun55902_ip = 1145;
                        continue _fun55902
                    }
                case 1117:
                    var0 = {};
                    var28 = var0;
                    var27 = var5;
                    var5 = copyDataProperties(var28, var27);
                    var6 = true;
                    var5 = 'inlinePlaybackDisabled';
                    var0[var5] = var6;
                    var11 = var0;
                case 1145:
                    var0 = _closure2_slot5;
                    var5 = var0.embedBorderLeftColor;
                    var0 = var3.color;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun55902_ip = 1180;
                        continue _fun55902
                    }
                case 1167:
                    var7 = var3.color;
                    var6 = '';
                    var0 = var6 !== var7;
                case 1180:
                    if (!var0) {
                        _fun55902_ip = 1197;
                        continue _fun55902
                    }
                case 1183:
                    var6 = _closure1_slot3;
                    var0 = var3.color;
                    var5 = var6.bind(var1)(var0);
                case 1197:
                    var0 = var3.url;
                    if (!(var4 != var0)) {
                        _fun55902_ip = 1219;
                        continue _fun55902
                    }
                case 1206:
                    var6 = var3.url;
                    var0 = '';
                    if (!(var0 === var6)) {
                        _fun55902_ip = 1247;
                        continue _fun55902
                    }
                case 1219:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var0 = var6.bind(var1)(var0);
                    var7 = var0.parseEmbedTitleMarkup;
                    _fun55902_ip = 1273;
                    continue _fun55902;
                case 1247:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 8;
                    var0 = var8[var0];
                    var0 = var6.bind(var1)(var0);
                    var7 = var0.parseEmbedTitleMarkupWithoutLinks;
                case 1273:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.RICH;
                    if (!(var6 === var0)) {
                        _fun55902_ip = 1302;
                        continue _fun55902
                    }
                case 1292:
                    var0 = var3.rawTitle;
                    if (!(var4 == var0)) {
                        _fun55902_ip = 1310;
                        continue _fun55902
                    }
                case 1302:
                    var13 = var3.rawTitle;
                    _fun55902_ip = 1326;
                    continue _fun55902;
                case 1310:
                    var6 = var3.rawTitle;
                    var0 = _closure2_slot0;
                    var13 = var7.bind(var1)(var6, var0);
                case 1326:
                    var6 = var3.type;
                    var0 = _closure1_slot4;
                    var0 = var0.IMAGE;
                    var12 = undefined;
                    if (!(var0 !== var6)) {
                        _fun55902_ip = 1510;
                        continue _fun55902
                    }
                case 1350:
                    var0 = _closure1_slot4;
                    var0 = var0.VIDEO;
                    var12 = undefined;
                    if (!(var0 !== var6)) {
                        _fun55902_ip = 1510;
                        continue _fun55902
                    }
                case 1369:
                    var0 = _closure1_slot4;
                    var0 = var0.GIFV;
                    var12 = undefined;
                    if (!(var0 !== var6)) {
                        _fun55902_ip = 1510;
                        continue _fun55902
                    }
                case 1388:
                    var0 = _closure1_slot4;
                    var0 = var0.RICH;
                    if (!(var0 !== var6)) {
                        _fun55902_ip = 1410;
                        continue _fun55902
                    }
                case 1402:
                    var12 = var3.rawDescription;
                    _fun55902_ip = 1510;
                    continue _fun55902;
                case 1410:
                    var0 = var3.rawDescription;
                    var0 = var4 != var0;
                    var12 = undefined;
                    if (!var0) {
                        _fun55902_ip = 1510;
                        continue _fun55902
                    }
                case 1425:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var7 = var6.bind(var1)(var0);
                    var6 = var7.parseEmbedDescriptionMarkup;
                    var0 = {};
                    var8 = var3.rawDescription;
                    var0.description = var8;
                    var8 = _closure2_slot0;
                    var0.channelId = var8;
                    var8 = false;
                    var0.isField = var8;
                    var8 = _closure2_slot3;
                    var0.ignoreCache = var8;
                    var8 = _closure2_slot6;
                    var0.showListsAndHeaders = var8;
                    var8 = _closure2_slot7;
                    var0.showMaskedLinks = var8;
                    var12 = var6.bind(var7)(var0);
                case 1510:
                    var7 = var3.fields;
                    if (!(var4 == var7)) {
                        _fun55902_ip = 1524;
                        continue _fun55902
                    }
                case 1520:
                    var7 = new Array(0);
                case 1524:
                    var6 = var7.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun55903: for (var _fun55903_ip = 0;;) switch (_fun55903_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.rawName;
                                var2 = null;
                                var0 = var2 == var0;
                                var3 = null;
                                if (var0) {
                                    _fun55903_ip = 70;
                                    continue _fun55903
                                }
                            case 20:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 8;
                                var4 = var4[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.parseEmbedTitleMarkup;
                                var4 = var1.rawName;
                                var0 = _closure2_slot0;
                                var3 = var5.bind(var6)(var4, var0);
                            case 70:
                                var0 = var1.rawValue;
                                var0 = var2 == var0;
                                var2 = null;
                                if (var0) {
                                    _fun55903_ip = 194;
                                    continue _fun55903
                                }
                            case 85:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 8;
                                var4 = var4[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.parseEmbedDescriptionMarkup;
                                var0 = {};
                                var6 = var1.rawValue;
                                var0.description = var6;
                                var7 = _closure2_slot0;
                                var0.channelId = var7;
                                var7 = true;
                                var0.isField = var7;
                                var7 = _closure2_slot3;
                                var0.ignoreCache = var7;
                                var7 = {};
                                var8 = '';
                                var7['\t'] = var8;
                                var0.replaceMap = var7;
                                var7 = _closure2_slot6;
                                var0.showListsAndHeaders = var7;
                                var6 = _closure2_slot7;
                                var0.showMaskedLinks = var6;
                                var2 = var4.bind(var5)(var0);
                            case 194:
                                var0 = {};
                                var10 = var0;
                                var9 = var1;
                                var1 = copyDataProperties(var10, var9);
                                var1 = 'name';
                                var0[var1] = var3;
                                var1 = 'value';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var8 = var6.bind(var7)(var0);
                    var0 = var3.timestamp;
                    var0 = var4 != var0;
                    var18 = null;
                    if (!var0) {
                        _fun55902_ip = 1593;
                        continue _fun55902
                    }
                case 1556:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 9;
                    var0 = var7[var0];
                    var7 = var6.bind(var1)(var0);
                    var6 = var7.calendarFormat;
                    var0 = var3.timestamp;
                    var18 = var6.bind(var7)(var0);
                case 1593:
                    var0 = var3.footer;
                    if (!(var4 == var0)) {
                        _fun55902_ip = 1637;
                        continue _fun55902
                    }
                case 1603:
                    var0 = var4 != var18;
                    var6 = undefined;
                    if (!var0) {
                        _fun55902_ip = 1839;
                        continue _fun55902
                    }
                case 1615:
                    var0 = {};
                    var0.content = var18;
                    var7 = '';
                    var0.text = var7;
                    var6 = var0;
                    _fun55902_ip = 1839;
                    continue _fun55902;
                case 1637:
                    var0 = var3.footer;
                    var16 = var0.text;
                    var14 = var16;
                    if (!(var4 != var18)) {
                        _fun55902_ip = 1685;
                        continue _fun55902
                    }
                case 1655:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var15 = var0.concat;
                    var7 = '';
                    var0 = ' | ';
                    var14 = var15.bind(var7)(var16, var0, var18);
                case 1685:
                    var0 = {};
                    var27 = var3.footer;
                    var28 = var0;
                    var7 = copyDataProperties(var28, var27);
                    var7 = 'content';
                    var0[var7] = var14;
                    var7 = var3.footer;
                    var7 = var7.iconProxyURL;
                    if (!(var4 != var7)) {
                        _fun55902_ip = 1745;
                        continue _fun55902
                    }
                case 1725:
                    var7 = var3.footer;
                    var14 = var7.iconProxyURL;
                    var7 = '';
                    if (!(var7 === var14)) {
                        _fun55902_ip = 1759;
                        continue _fun55902
                    }
                case 1745:
                    var7 = var3.footer;
                    var18 = var7.iconURL;
                    _fun55902_ip = 1771;
                    continue _fun55902;
                case 1759:
                    var7 = var3.footer;
                    var18 = var7.iconProxyURL;
                case 1771:
                    var6 = var0;
                    if (!(var4 != var18)) {
                        _fun55902_ip = 1839;
                        continue _fun55902
                    }
                case 1778:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 2;
                    var7 = var15[var7];
                    var16 = var14.bind(var1)(var7);
                    var15 = var16.getImageSrc;
                    var7 = _closure2_slot1;
                    var25 = !var7;
                    var7 = 16;
                    var29 = var16;
                    var28 = var18;
                    var27 = var7;
                    var26 = var7;
                    var7 = var29[var15](var28, var27, var26, var25, var24);
                    var0.iconURL = var7;
                    var6 = var0;
                case 1839:
                    var0 = var3.author;
                    var0 = var4 != var0;
                    var7 = undefined;
                    if (!var0) {
                        _fun55902_ip = 2013;
                        continue _fun55902
                    }
                case 1857:
                    var0 = var3.author;
                    var0 = var0.iconProxyURL;
                    if (!(var4 != var0)) {
                        _fun55902_ip = 1893;
                        continue _fun55902
                    }
                case 1873:
                    var0 = var3.author;
                    var14 = var0.iconProxyURL;
                    var0 = '';
                    if (!(var0 === var14)) {
                        _fun55902_ip = 1907;
                        continue _fun55902
                    }
                case 1893:
                    var0 = var3.author;
                    var20 = var0.iconURL;
                    _fun55902_ip = 1919;
                    continue _fun55902;
                case 1907:
                    var0 = var3.author;
                    var20 = var0.iconProxyURL;
                case 1919:
                    if (!(var4 == var20)) {
                        _fun55902_ip = 1931;
                        continue _fun55902
                    }
                case 1923:
                    var0 = var3.author;
                    _fun55902_ip = 2010;
                    continue _fun55902;
                case 1931:
                    var14 = {};
                    var27 = var3.author;
                    var28 = var14;
                    var15 = copyDataProperties(var28, var27);
                    var16 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var15 = 2;
                    var15 = var18[var15];
                    var19 = var16.bind(var1)(var15);
                    var18 = var19.getImageSrc;
                    var15 = _closure2_slot1;
                    var25 = !var15;
                    var15 = 16;
                    var29 = var19;
                    var28 = var20;
                    var27 = var15;
                    var26 = var15;
                    var16 = var29[var18](var28, var27, var26, var25, var24);
                    var15 = 'iconURL';
                    var14[var15] = var16;
                    var0 = var14;
                case 2010:
                    var7 = var0;
                case 2013:
                    var19 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var15 = 10;
                    var14 = var0[var15];
                    var18 = var19.bind(var1)(var14);
                    var16 = var18.getMediaObscuredReasonFromBitmask;
                    var14 = {};
                    var21 = 11;
                    var0 = var0[var21];
                    var0 = var19.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Embed;
                    var14.type = var0;
                    var14.media = var3;
                    var0 = _closure2_slot9;
                    var0 = var16.bind(var18)(var14, var0);
                    var14 = _closure2_slot10;
                    var18 = !var14;
                    if (!var18) {
                        _fun55902_ip = 2159;
                        continue _fun55902
                    }
                case 2094:
                    var20 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var15 = var14[var15];
                    var19 = var20.bind(var1)(var15);
                    var16 = var19.isMediaScanPending;
                    var15 = {};
                    var14 = var14[var21];
                    var14 = var20.bind(var1)(var14);
                    var14 = var14.ObscuredMediaTypes;
                    var14 = var14.Embed;
                    var15.type = var14;
                    var15.media = var3;
                    var14 = _closure2_slot9;
                    var18 = var16.bind(var19)(var15, var14);
                case 2159:
                    var14 = var0.length;
                    var0 = 0;
                    var14 = var14 > var0;
                    var15 = var14;
                    if (!var14) {
                        _fun55902_ip = 2206;
                        continue _fun55902
                    }
                case 2176:
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var0 = 12;
                    var0 = var19[var0];
                    var16 = var16.bind(var1)(var0);
                    var0 = var16.isVerifiedTeen;
                    var15 = var0.bind(var16)();
                case 2206:
                    var0 = {};
                    var20 = var3.id;
                    var21 = var4 != var20;
                    var16 = '';
                    var19 = var16;
                    if (!var21) {
                        _fun55902_ip = 2230;
                        continue _fun55902
                    }
                case 2227:
                    var19 = var20;
                case 2230:
                    var0.id = var19;
                    var20 = var3.type;
                    var21 = var4 != var20;
                    var19 = undefined;
                    if (!var21) {
                        _fun55902_ip = 2251;
                        continue _fun55902
                    }
                case 2248:
                    var19 = var20;
                case 2251:
                    var0.type = var19;
                    var20 = _closure2_slot2;
                    var19 = var16;
                    if (!var20) {
                        _fun55902_ip = 2330;
                        continue _fun55902
                    }
                case 2265:
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var20 = 13;
                    var21 = var24[var20];
                    var21 = var23.bind(var1)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var24[var20];
                    var20 = var23.bind(var1)(var20);
                    var20 = var20.t;
                    var20 = var20["F+x38C"];
                    var21 = var21.bind(var22)(var20);
                    var20 = var21.toUpperCase;
                    var19 = var20.bind(var21)();
                case 2330:
                    var0.spoiler = var19;
                    var19 = var16;
                    if (!var14) {
                        _fun55902_ip = 2396;
                        continue _fun55902
                    }
                case 2341:
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var20 = 13;
                    var21 = var24[var20];
                    var21 = var23.bind(var1)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var24[var20];
                    var20 = var23.bind(var1)(var20);
                    var20 = var20.t;
                    var20 = var20.SpxcUR;
                    var19 = var21.bind(var22)(var20);
                case 2396:
                    var0.obscure = var19;
                    if (!var18) {
                        _fun55902_ip = 2461;
                        continue _fun55902
                    }
                case 2404:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = 13;
                    var18 = var21[var17];
                    var18 = var20.bind(var1)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var17 = var21[var17];
                    var17 = var20.bind(var1)(var17);
                    var17 = var17.t;
                    var17 = var17.MRdR7z;
                    var16 = var18.bind(var19)(var17);
                case 2461:
                    var0.obscureAwaitingScan = var16;
                    var16 = var14;
                    if (!var16) {
                        _fun55902_ip = 2476;
                        continue _fun55902
                    }
                case 2472:
                    var16 = _closure2_slot12;
                case 2476:
                    var0.verifyAge = var16;
                    var0.obscureHideControls = var15;
                    var0.obscureIsOpaque = var14;
                    var15 = var3.provider;
                    var16 = var4 != var15;
                    var14 = undefined;
                    if (!var16) {
                        _fun55902_ip = 2509;
                        continue _fun55902
                    }
                case 2506:
                    var14 = var15;
                case 2509:
                    var0.provider = var14;
                    var0.author = var7;
                    var7 = var3.rawTitle;
                    var0.rawTitle = var7;
                    var14 = var4 != var13;
                    var7 = undefined;
                    if (!var14) {
                        _fun55902_ip = 2542;
                        continue _fun55902
                    }
                case 2539:
                    var7 = var13;
                case 2542:
                    var0.title = var7;
                    var13 = var3.url;
                    var14 = var4 != var13;
                    var7 = undefined;
                    if (!var14) {
                        _fun55902_ip = 2563;
                        continue _fun55902
                    }
                case 2560:
                    var7 = var13;
                case 2563:
                    var0.url = var7;
                    var7 = var3.rawDescription;
                    var0.rawDescription = var7;
                    var13 = var4 != var12;
                    var7 = undefined;
                    if (!var13) {
                        _fun55902_ip = 2590;
                        continue _fun55902
                    }
                case 2587:
                    var7 = var12;
                case 2590:
                    var0.description = var7;
                    var12 = var4 != var11;
                    var7 = undefined;
                    if (!var12) {
                        _fun55902_ip = 2606;
                        continue _fun55902
                    }
                case 2603:
                    var7 = var11;
                case 2606:
                    var0.thumbnail = var7;
                    var11 = var4 != var10;
                    var7 = undefined;
                    if (!var11) {
                        _fun55902_ip = 2623;
                        continue _fun55902
                    }
                case 2620:
                    var7 = var10;
                case 2623:
                    var0.image = var7;
                    var10 = var4 != var9;
                    var7 = undefined;
                    if (!var10) {
                        _fun55902_ip = 2640;
                        continue _fun55902
                    }
                case 2637:
                    var7 = var9;
                case 2640:
                    var0.images = var7;
                    var9 = var4 != var8;
                    var7 = undefined;
                    if (!var9) {
                        _fun55902_ip = 2657;
                        continue _fun55902
                    }
                case 2654:
                    var7 = var8;
                case 2657:
                    var0.fields = var7;
                    var0.footer = var6;
                    var7 = var3.video;
                    var8 = var4 != var7;
                    var6 = undefined;
                    if (!var8) {
                        _fun55902_ip = 2685;
                        continue _fun55902
                    }
                case 2682:
                    var6 = var7;
                case 2685:
                    var0.video = var6;
                    var0.borderLeftColor = var5;
                    var5 = _closure2_slot5;
                    var6 = var5.embedProviderColor;
                    var0.providerColor = var6;
                    var6 = var5.embedHeaderTextColor;
                    var0.headerTextColor = var6;
                    var5 = var5.embedBodyTextColor;
                    var0.bodyTextColor = var5;
                    var5 = var3.referenceId;
                    var6 = var4 != var5;
                    var3 = undefined;
                    if (!var6) {
                        _fun55902_ip = 2752;
                        continue _fun55902
                    }
                case 2749:
                    var3 = var5;
                case 2752:
                    var0.referenceId = var3;
                    var3 = _closure2_slot8;
                    var3 = var4 != var3;
                    var1 = undefined;
                    if (!var3) {
                        _fun55902_ip = 2774;
                        continue _fun55902
                    }
                case 2770:
                    var1 = _closure2_slot8;
                case 2774:
                    var0.backgroundColor = var1;
                    return var0;
                case 2780:
                    var0 = new Array(0);
                    return var0;
                case 2786:
                    var0 = new Array(0);
                    return var0;
                case 2792:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 660, 6743, 3950, 6744, 478, 6603, 3933, 6731, 3091, 4227, 4230, 4206, 1234, 2]);