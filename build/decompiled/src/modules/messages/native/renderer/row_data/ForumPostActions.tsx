// modules/messages/native/renderer/row_data/ForumPostActions.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot3 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55326: for (var _fun55326_ip = 0;;) switch (_fun55326_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.defaultReactionEmoji;
                var4 = var0.customGuildEmoji;
                var1 = null;
                var5 = var1 != var3;
                var0 = undefined;
                var2 = undefined;
                if (!var5) {
                    _fun55326_ip = 330;
                    continue _fun55326
                }
            case 31:
                var5 = var3.emojiId;
                var6 = var3.emojiName;
                if (!(var1 != var5)) {
                    _fun55326_ip = 54;
                    continue _fun55326
                }
            case 47:
                if (!(var1 == var4)) {
                    _fun55326_ip = 180;
                    continue _fun55326
                }
            case 54:
                var3 = var1 != var6;
                var2 = undefined;
                if (!var3) {
                    _fun55326_ip = 330;
                    continue _fun55326
                }
            case 66:
                var3 = {};
                var3.id = var0;
                var3.name = var6;
                var10 = false;
                var3.animated = var10;
                var11 = _closure1_slot1;
                var9 = _closure1_slot2;
                var8 = 12;
                var8 = var9[var8];
                var11 = var11.bind(var0)(var8);
                var8 = var11.getURL;
                var8 = var8.bind(var11)(var6);
                var3.src = var8;
                var8 = _closure1_slot0;
                var7 = 11;
                var7 = var9[var7];
                var9 = var8.bind(var0)(var7);
                var8 = var9.getAccessibleEmojiDisplayName;
                var7 = {};
                var7.id = var0;
                var7.name = var6;
                var7.animated = var10;
                var6 = 0;
                var6 = var8.bind(var9)(var10, var6, var7);
                var3.displayName = var6;
                var2 = var3;
                _fun55326_ip = 330;
                continue _fun55326;
            case 180:
                var3 = {};
                var3.id = var5;
                var3.name = var0;
                var6 = var4.animated;
                var3.animated = var6;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 10;
                var7 = var8[var7];
                var10 = var9.bind(var0)(var7);
                var9 = var10.getEmojiURL;
                var7 = {};
                var7.id = var5;
                var11 = var4.animated;
                var7.animated = var11;
                var11 = 48;
                var7.size = var11;
                var7 = var9.bind(var10)(var7);
                var3.src = var7;
                var7 = _closure1_slot0;
                var6 = 11;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.getAccessibleEmojiDisplayName;
                var6 = {};
                var6.id = var5;
                var5 = var4.name;
                var6.name = var5;
                var4 = var4.animated;
                var6.animated = var4;
                var5 = false;
                var4 = 0;
                var4 = var7.bind(var8)(var5, var4, var6);
                var3.displayName = var4;
                var2 = var3;
            case 330:
                var1 = var1 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun55326_ip = 362;
                    continue _fun55326
                }
            case 339:
                var1 = {
                    'emoji': null,
                    'me': false,
                    'count': 0
                };
                var1.emoji = var2;
                var0 = var1;
            case 362:
                return var0;
        }
    };
    var2.createDefaultReaction = var3;
    var1 = function arg0() {
        _fun55327: for (var _fun55327_ip = 0;;) switch (_fun55327_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.isFollowing;
                var1 = var0.hasReactions;
                var3 = var0.defaultReaction;
                var0 = var0.showMediaPostSharePrompt;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 1;
                var2 = var12[var9];
                var8 = undefined;
                var10 = var5.bind(var8)(var2);
                var5 = var10.getAssetUriForEmbed;
                var11 = _closure1_slot1;
                if (var6) {
                    _fun55327_ip = 84;
                    continue _fun55327
                }
            case 65:
                var2 = 3;
                var2 = var12[var2];
                var2 = var11.bind(var8)(var2);
                var7 = var5.bind(var10)(var2);
                _fun55327_ip = 101;
                continue _fun55327;
            case 84:
                var2 = 2;
                var2 = var12[var2];
                var2 = var11.bind(var8)(var2);
                var7 = var5.bind(var10)(var2);
            case 101:
                var10 = null;
                if (!(var10 == var7)) {
                    _fun55327_ip = 198;
                    continue _fun55327
                }
            case 107:
                var12 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var11 = var12.bind(var8)(var2);
                var5 = var11.captureMessage;
                var14 = _closure1_slot2;
                if (var6) {
                    _fun55327_ip = 149;
                    continue _fun55327
                }
            case 140:
                var2 = 3;
                var2 = var14[var2];
                _fun55327_ip = 156;
                continue _fun55327;
            case 149:
                var13 = 2;
                var2 = var14[var13];
            case 156:
                var14 = var12.bind(var8)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var13 = var2.concat;
                var12 = 'Forum follow is null. isFollowing: ';
                var2 = ' icon: ';
                var2 = var13.bind(var12)(var6, var2, var14);
                var2 = var5.bind(var11)(var2);
            case 198:
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = var13[var9];
                var11 = var5.bind(var8)(var2);
                var5 = var11.getAssetUriForEmbed;
                var12 = _closure1_slot1;
                var2 = 5;
                var2 = var13[var2];
                var2 = var12.bind(var8)(var2);
                var5 = var5.bind(var11)(var2);
                var2 = undefined;
                if (var1) {
                    _fun55327_ip = 328;
                    continue _fun55327
                }
            case 247:
                var11 = var10 == var3;
                var1 = undefined;
                if (var11) {
                    _fun55327_ip = 262;
                    continue _fun55327
                }
            case 256:
                var1 = var3.emoji;
            case 262:
                var1 = var10 != var1;
                var2 = undefined;
                if (var1) {
                    _fun55327_ip = 328;
                    continue _fun55327
                }
            case 271:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 6;
                var10 = var13[var1];
                var10 = var12.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var1 = var13[var1];
                var1 = var12.bind(var8)(var1);
                var1 = var1.t;
                var1 = var1.xpOyTO;
                var2 = var10.bind(var11)(var1);
            case 328:
                var1 = undefined;
                if (!var0) {
                    _fun55327_ip = 629;
                    continue _fun55327
                }
            case 336:
                var0 = {};
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 6;
                var12 = var13[var11];
                var12 = var10.bind(var8)(var12);
                var15 = var12.intl;
                var14 = var15.string;
                var12 = var13[var11];
                var12 = var10.bind(var8)(var12);
                var12 = var12.t;
                var12 = var12["5uAO7d"];
                var12 = var14.bind(var15)(var12);
                var0.title = var12;
                var12 = var13[var11];
                var12 = var10.bind(var8)(var12);
                var17 = var12.intl;
                var16 = var17.formatToParts;
                var12 = var13[var11];
                var12 = var10.bind(var8)(var12);
                var12 = var12.t;
                var15 = var12.YtCu5p;
                var14 = {};
                var18 = {};
                var12 = _closure1_slot1;
                var19 = 7;
                var19 = var13[var19];
                var21 = var12.bind(var8)(var19);
                var20 = var21.getCreatorSupportArticleURL;
                var19 = _closure1_slot3;
                var19 = var19.MEDIA_CHANNEL;
                var19 = var20.bind(var21)(var19);
                var18.url = var19;
                var14.helpArticleUrl = var18;
                var14 = var16.bind(var17)(var15, var14);
                var0.subtitle = var14;
                var14 = var13[var11];
                var14 = var10.bind(var8)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var13[var11];
                var11 = var10.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11.C5UQC9;
                var11 = var14.bind(var15)(var11);
                var0.cta = var11;
                var11 = var13[var9];
                var15 = var10.bind(var8)(var11);
                var14 = var15.getAssetUriForEmbed;
                var11 = 8;
                var11 = var13[var11];
                var11 = var12.bind(var8)(var11);
                var11 = var14.bind(var15)(var11);
                var0.icon = var11;
                var9 = var13[var9];
                var11 = var10.bind(var8)(var9);
                var10 = var11.getAssetUriForEmbed;
                var9 = 9;
                var9 = var13[var9];
                var9 = var12.bind(var8)(var9);
                var9 = var10.bind(var11)(var9);
                var0.closeIcon = var9;
                var1 = var0;
            case 629:
                var0 = {};
                var9 = 3;
                var0.numDisplayedReactions = var9;
                var0.isFollowing = var6;
                var0.followIcon = var7;
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 6;
                var10 = var7[var9];
                var10 = var12.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var7[var9];
                var7 = var12.bind(var8)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun55327_ip = 713;
                    continue _fun55327
                }
            case 700:
                var6 = var7["0rQinA"];
                var6 = var10.bind(var11)(var6);
                _fun55327_ip = 724;
                continue _fun55327;
            case 713:
                var7 = var7["OtF+lC"];
                var6 = var10.bind(var11)(var7);
            case 724:
                var0.followLabel = var6;
                var0.shareIcon = var5;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.Ej3B3Y;
                var4 = var5.bind(var6)(var4);
                var0.shareLabel = var4;
                var0.defaultReaction = var3;
                var0.addReactLabel = var2;
                var0.sharePrompt = var1;
                return var0;
        }
    };
    var2.createForumPostActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6609, 3224, 6629, 1207, 3216, 1234, 1675, 6630, 6631, 1417, 3063, 3069, 2]);