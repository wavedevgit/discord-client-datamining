// modules/messages/native/renderer/createMessageContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun53992: for (var _fun53992_ip = 0;;) switch (_fun53992_ip) {
            case 0:
                var0 = arg0;
                var6 = arg3;
                var1 = arg2;
                if (var1) {
                    _fun53992_ip = 850;
                    continue _fun53992
                }
            case 15:
                var2 = var0.hasFlag;
                var1 = _closure1_slot25;
                var1 = var1.HAS_THREAD;
                var1 = var2.bind(var0)(var1);
                if (!var1) {
                    _fun53992_ip = 850;
                    continue _fun53992
                }
            case 45:
                var1 = null;
                if (!(var1 != var6)) {
                    _fun53992_ip = 850;
                    continue _fun53992
                }
            case 54:
                var8 = _closure1_slot15;
                var4 = var8.getMostRecentMessage;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 22;
                var2 = var9[var5];
                var7 = undefined;
                var12 = var10.bind(var7)(var2);
                var11 = var12.castMessageIdAsChannelId;
                var2 = var0.id;
                var2 = var11.bind(var12)(var2);
                var8 = var4.bind(var8)(var2);
                var4 = _closure1_slot15;
                var2 = var4.getCount;
                var5 = var9[var5];
                var10 = var10.bind(var7)(var5);
                var5 = var10.castMessageIdAsChannelId;
                var0 = var0.id;
                var0 = var5.bind(var10)(var0);
                var2 = var2.bind(var4)(var0);
                var4 = _closure1_slot0;
                var0 = 23;
                var5 = var9[var0];
                var11 = var4.bind(var7)(var5);
                var10 = var11.formatMobileMessageCountLabel;
                var5 = var6.id;
                var5 = var10.bind(var11)(var2, var5);
                var0 = var9[var0];
                var9 = var4.bind(var7)(var0);
                var4 = var9.formatMessageCountLabel;
                var0 = var6.id;
                var4 = var4.bind(var9)(var2, var0);
                if (!(var1 != var2)) {
                    _fun53992_ip = 216;
                    continue _fun53992
                }
            case 210:
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun53992_ip = 311;
                    continue _fun53992
                }
            case 216:
                var0 = {};
                var2 = var6.name;
                var0.title = var2;
                var0.messageCountLabel = var5;
                var0.messageCountAccessibilityLabel = var4;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 24;
                var9 = var12[var2];
                var9 = var11.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var2 = var12[var2];
                var2 = var11.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.HYtNyE;
                var2 = var9.bind(var10)(var2);
                var0.messagePreviewString = var2;
                var2 = false;
                var0.archived = var2;
                _fun53992_ip = 848;
                continue _fun53992;
            case 311:
                var2 = var6.threadMetadata;
                if (!(var1 != var2)) {
                    _fun53992_ip = 333;
                    continue _fun53992
                }
            case 321:
                var2 = var2.archived;
                if (var2) {
                    _fun53992_ip = 708;
                    continue _fun53992
                }
            case 333:
                if (!(var1 != var8)) {
                    _fun53992_ip = 612;
                    continue _fun53992
                }
            case 340:
                var2 = var8.type;
                var1 = _closure1_slot23;
                var1 = var1.CHANNEL_NAME_CHANGE;
                if (!(var2 !== var1)) {
                    _fun53992_ip = 612;
                    continue _fun53992
                }
            case 362:
                var2 = var8.type;
                var1 = _closure1_slot23;
                var1 = var1.THREAD_STARTER_MESSAGE;
                if (!(var2 !== var1)) {
                    _fun53992_ip = 612;
                    continue _fun53992
                }
            case 384:
                var1 = var8.blocked;
                if (var1) {
                    _fun53992_ip = 497;
                    continue _fun53992
                }
            case 393:
                var1 = var8.ignored;
                if (var1) {
                    _fun53992_ip = 497;
                    continue _fun53992
                }
            case 402:
                var1 = {};
                var2 = var6.name;
                var1.title = var2;
                var1.messageCountLabel = var5;
                var1.messageCountAccessibilityLabel = var4;
                var2 = {};
                var9 = _closure1_slot22;
                var9 = var9.LOADED;
                var2.state = var9;
                var10 = _closure1_slot31;
                var9 = {
                    'message': null,
                    'roleStyle': null,
                    'options': null,
                    'isFirst': true,
                    'isEditing': false,
                    'canShowImages': true,
                    'isSystemDM': false,
                    'isInlineReplyPreview': true
                };
                var9.message = var8;
                var11 = arg1;
                var9.roleStyle = var11;
                var11 = arg4;
                var9.options = var11;
                var9 = var10.bind(var7)(var9);
                var2.message = var9;
                var1.referencedMessage = var2;
                _fun53992_ip = 610;
                continue _fun53992;
            case 497:
                var2 = {};
                var9 = var6.name;
                var2.title = var9;
                var2.messageCountLabel = var5;
                var2.messageCountAccessibilityLabel = var4;
                var8 = var8.blocked;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 24;
                var10 = var13[var9];
                var10 = var12.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var7)(var9);
                var9 = var9.t;
                if (var8) {
                    _fun53992_ip = 584;
                    continue _fun53992
                }
            case 571:
                var8 = var9["G7p6v/"];
                var8 = var10.bind(var11)(var8);
                _fun53992_ip = 595;
                continue _fun53992;
            case 584:
                var9 = var9.XAkOo2;
                var8 = var10.bind(var11)(var9);
            case 595:
                var2.messagePreviewString = var8;
                var8 = false;
                var2.archived = var8;
                var1 = var2;
            case 610:
                _fun53992_ip = 703;
                continue _fun53992;
            case 612:
                var2 = {};
                var8 = var6.name;
                var2.title = var8;
                var2.messageCountLabel = var5;
                var2.messageCountAccessibilityLabel = var4;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 24;
                var9 = var12[var8];
                var9 = var11.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var7)(var8);
                var8 = var8.t;
                var8 = var8.ZTo4HS;
                var8 = var9.bind(var10)(var8);
                var2.messagePreviewString = var8;
                var8 = false;
                var2.archived = var8;
                var1 = var2;
            case 703:
                _fun53992_ip = 845;
                continue _fun53992;
            case 708:
                var2 = {};
                var6 = var6.name;
                var2.title = var6;
                var2.messageCountLabel = var5;
                var2.messageCountAccessibilityLabel = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 24;
                var6 = var8[var4];
                var6 = var5.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.ZTo4HS;
                var4 = var6.bind(var9)(var4);
                var2.messagePreviewString = var4;
                var4 = true;
                var2.archived = var4;
                var4 = 25;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.getAssetUriForEmbed;
                var6 = _closure1_slot1;
                var3 = 26;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
                var2.archivedIconUrl = var3;
                var1 = var2;
            case 845:
                var0 = var1;
            case 848:
                return var0;
            case 850:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun53993: for (var _fun53993_ip = 0;;) switch (_fun53993_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.id;
                var0 = var2.channel_id;
                if (!(var3 === var0)) {
                    _fun53993_ip = 57;
                    continue _fun53993
                }
            case 20:
                var0 = var1.getGuildId;
                var4 = var0.bind(var1)();
                var9 = null;
                if (!(var9 != var4)) {
                    _fun53993_ip = 61;
                    continue _fun53993
                }
            case 36:
                var3 = _closure1_slot10;
                var0 = var3.isLurking;
                var0 = var0.bind(var3)(var4);
                if (!var0) {
                    _fun53993_ip = 61;
                    continue _fun53993
                }
            case 57:
                var0 = undefined;
                return var0;
            case 61:
                var5 = _closure1_slot14;
                var4 = var5.hasJoined;
                var3 = var2.channel_id;
                var6 = var4.bind(var5)(var3);
                var2 = var2.reactions;
                var3 = var2.length;
                var2 = 0;
                var5 = var2 !== var3;
                var2 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun53993_ip = 234;
                    continue _fun53993
                }
            case 111:
                var8 = _closure1_slot18;
                var7 = var8.getChannel;
                var3 = var1.parent_id;
                var3 = var7.bind(var8)(var3);
                var7 = var9 == var3;
                var10 = undefined;
                if (var7) {
                    _fun53993_ip = 146;
                    continue _fun53993
                }
            case 140:
                var10 = var3.defaultReactionEmoji;
            case 146:
                var7 = var9 == var10;
                var3 = undefined;
                if (var7) {
                    _fun53993_ip = 161;
                    continue _fun53993
                }
            case 155:
                var3 = var10.emojiId;
            case 161:
                var3 = var9 != var3;
                var9 = null;
                if (!var3) {
                    _fun53993_ip = 191;
                    continue _fun53993
                }
            case 170:
                var8 = _closure1_slot7;
                var7 = var8.getUsableCustomEmojiById;
                var3 = var10.emojiId;
                var9 = var7.bind(var8)(var3);
            case 191:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 27;
                var3 = var8[var3];
                var8 = var7.bind(var2)(var3);
                var7 = var8.createDefaultReaction;
                var3 = {};
                var3.defaultReactionEmoji = var10;
                var3.customGuildEmoji = var9;
                var4 = var7.bind(var8)(var3);
            case 234:
                var7 = _closure1_slot11;
                var3 = var7.shouldDisplayPrompt;
                var1 = var1.id;
                var3 = var3.bind(var7)(var1);
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 27;
                var0 = var7[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createForumPostActions;
                var0 = {};
                var0.isFollowing = var6;
                var0.hasReactions = var5;
                var0.defaultReaction = var4;
                var0.showMediaPostSharePrompt = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var1 = function arg0() {
        _fun53994: for (var _fun53994_ip = 0;;) switch (_fun53994_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var92 = var0.messageForward;
                var12 = var0.roleStyle;
                var11 = var0.isFirst;
                var10 = var0.isEditing;
                var9 = var0.canShowImages;
                var8 = var0.isSystemDM;
                var5 = var0.isInlineReplyPreview;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun53994_ip = 58;
                    continue _fun53994
                }
            case 56:
                var5 = false;
            case 58:
                var6 = var0.options;
                var65 = var0.pushFeedbackType;
                var49 = var0.renderContentOnly;
                var27 = var0.showContentInventoryEntryFallbackEmbed;
                var20 = var6.renderEmbeds;
                var13 = var6.renderReactions;
                var17 = var6.inlineEmbedMedia;
                var15 = var6.inlineAttachmentMedia;
                var78 = var6.constrainedWidth;
                var88 = var6.ignoreMentioned;
                var77 = var6.animateEmoji;
                var37 = var6.animatingStickerMessageId;
                var53 = var6.gifAutoPlay;
                var43 = var6.renderCodedLinks;
                var46 = var6.renderGiftCode;
                var45 = var6.renderActivityInstanceEmbed;
                var44 = var6.renderActivityInviteEmbed;
                var51 = var6.renderComponents;
                var14 = var6.renderThreadEmbeds;
                var19 = var6.renderReplies;
                var29 = var6.renderCommunicationDisabled;
                var40 = var6.renderAttachments;
                var52 = var6.renderExecutedCommands;
                var3 = var6.renderPolls;
                var0 = var6.renderSharedClientTheme;
                var32 = var6.renderForumPostActions;
                var18 = var6.forcedTheme;
                var31 = var6.ignoreEmbedDescriptionCache;
                var33 = var6.forceHideSimpleEmbedContent;
                var57 = var6.shouldObscureSpoiler;
                var59 = var6.shouldDisableInteractiveComponents;
                var21 = var6.useAlternateEmbedColors;
                var16 = null;
                if (!(var16 == var18)) {
                    _fun53994_ip = 268;
                    continue _fun53994
                }
            case 255:
                var2 = _closure1_slot16;
                var18 = var2.theme;
            case 268:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var7 = 31;
                var7 = var23[var7];
                var7 = var22.bind(var4)(var7);
                var24 = var7.bind(var4)(var18, var21);
                var7 = true;
                var58 = var7 === var9;
                var26 = var58;
                if (!var58) {
                    _fun53994_ip = 312;
                    continue _fun53994
                }
            case 309:
                var26 = var20;
            case 312:
                if (!var26) {
                    _fun53994_ip = 334;
                    continue _fun53994
                }
            case 315:
                var21 = var1.type;
                var20 = _closure1_slot23;
                var20 = var20.CUSTOM_GIFT;
                var26 = var21 !== var20;
            case 334:
                var30 = var58;
                if (!var58) {
                    _fun53994_ip = 343;
                    continue _fun53994
                }
            case 340:
                var30 = var17;
            case 343:
                var36 = var58;
                if (!var36) {
                    _fun53994_ip = 352;
                    continue _fun53994
                }
            case 349:
                var36 = var15;
            case 352:
                var20 = _closure1_slot18;
                var17 = var20.getChannel;
                var15 = var1.getChannelId;
                var15 = var15.bind(var1)();
                var20 = var17.bind(var20)(var15);
                var21 = _closure1_slot18;
                var17 = var21.getChannel;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var15 = 22;
                var15 = var23[var15];
                var23 = var22.bind(var4)(var15);
                var22 = var23.castMessageIdAsChannelId;
                var15 = var1.id;
                var15 = var22.bind(var23)(var15);
                var15 = var17.bind(var21)(var15);
                var21 = var16 == var20;
                var17 = undefined;
                if (var21) {
                    _fun53994_ip = 445;
                    continue _fun53994
                }
            case 435:
                var21 = var20.getGuildId;
                var17 = var21.bind(var20)();
            case 445:
                var21 = var1.author;
                var23 = var21.id;
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 32;
                var21 = var25[var21];
                var22 = var22.bind(var4)(var21);
                var21 = var22.getHasEnhancedRoleColors;
                var72 = var21.bind(var22)(var17, var23);
                var61 = var17;
                if (!(var16 == var92)) {
                    _fun53994_ip = 526;
                    continue _fun53994
                }
            case 495:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 33;
                var17 = var22[var17];
                var21 = var21.bind(var4)(var17);
                var17 = var21.maybeCreateSingleForwardForMessage;
                var92 = var17.bind(var21)(var1);
            case 526:
                var38 = var1;
                if (!(var16 != var92)) {
                    _fun53994_ip = 544;
                    continue _fun53994
                }
            case 533:
                var17 = var92.messageSnapshot;
                var38 = var17.message;
            case 544:
                var17 = new Array(0);
                if (!var13) {
                    _fun53994_ip = 594;
                    continue _fun53994
                }
            case 551:
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var13 = 34;
                var13 = var22[var13];
                var21 = var21.bind(var4)(var13);
                var13 = {};
                var22 = var1.reactions;
                var13.reactions = var22;
                var13.animateEmoji = var77;
                var17 = var21.bind(var4)(var13);
            case 594:
                var22 = var1.type;
                var13 = _closure1_slot23;
                var21 = var13.THREAD_STARTER_MESSAGE;
                var13 = null;
                if (!(var22 === var21)) {
                    _fun53994_ip = 665;
                    continue _fun53994
                }
            case 615:
                var23 = _closure1_slot12;
                var22 = var23.getMessageByReference;
                var21 = var1.messageReference;
                var22 = var22.bind(var23)(var21);
                var25 = var22.state;
                var21 = _closure1_slot13;
                var23 = var21.LOADED;
                var21 = null;
                if (!(var25 === var23)) {
                    _fun53994_ip = 662;
                    continue _fun53994
                }
            case 657:
                var21 = var22.message;
            case 662:
                var13 = var21;
            case 665:
                if (!(var16 == var13)) {
                    _fun53994_ip = 7464;
                    continue _fun53994
                }
            case 672:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 35;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.bind(var4)(var1);
                if (var21) {
                    _fun53994_ip = 7271;
                    continue _fun53994
                }
            case 703:
                var66 = !var11;
                if (var66) {
                    _fun53994_ip = 712;
                    continue _fun53994
                }
            case 709:
                var66 = var49;
            case 712:
                var69 = var1.author;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var21 = 37;
                var21 = var23[var21];
                var23 = var22.bind(var4)(var21);
                var22 = var23.isMessageNewerThanImprovedMarkdownEpoch;
                var25 = var1.editedTimestamp;
                if (!(var16 == var25)) {
                    _fun53994_ip = 760;
                    continue _fun53994
                }
            case 754:
                var25 = var1.timestamp;
            case 760:
                var21 = var25.valueOf;
                var21 = var21.bind(var25)();
                var28 = var22.bind(var23)(var21);
                var21 = var38.content;
                if (!(var16 != var21)) {
                    _fun53994_ip = 796;
                    continue _fun53994
                }
            case 783:
                var22 = var38.content;
                var21 = '';
                if (!(var21 === var22)) {
                    _fun53994_ip = 818;
                    continue _fun53994
                }
            case 796:
                var21 = {
                    'content': null,
                    'hasSpoilerEmbeds': false,
                    'hasBailedAst': false
                };
                var21.content = var4;
                _fun53994_ip = 905;
                continue _fun53994;
            case 818:
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 38;
                var22 = var25[var22];
                var25 = var23.bind(var4)(var22);
                var23 = var25.parseMessageMarkup;
                if (var33) {
                    _fun53994_ip = 859;
                    continue _fun53994
                }
            case 847:
                var22 = var26;
                if (!var26) {
                    _fun53994_ip = 856;
                    continue _fun53994
                }
            case 853:
                var22 = var30;
            case 856:
                var33 = var22;
            case 859:
                var22 = var16 != var15;
                if (!var22) {
                    _fun53994_ip = 877;
                    continue _fun53994
                }
            case 866:
                var34 = var1.isFirstMessageInForumPost;
                var22 = var34.bind(var1)(var15);
            case 877:
                var104 = var25;
                var103 = var1;
                var102 = var38;
                var101 = var33;
                var100 = var5;
                var99 = var22;
                var98 = var28;
                var97 = var28;
                var21 = var104[var23](var103, var102, var101, var100, var99, var98, var97, var96);
            case 905:
                var23 = var21.content;
                var33 = var21.hasSpoilerEmbeds;
                var21 = var21.hasBailedAst;
                var25 = _closure1_slot0;
                var34 = _closure1_slot2;
                var22 = 39;
                var22 = var34[var22];
                var35 = var25.bind(var4)(var22);
                var22 = var35.getEnabledHarmTypesForMessage;
                var56 = var22.bind(var35)(var1);
                var22 = 40;
                var22 = var34[var22];
                var25 = var25.bind(var4)(var22);
                var22 = var25.shouldAgeVerifyForExplicitMedia;
                var55 = var22.bind(var25)();
                if (!var26) {
                    _fun53994_ip = 981;
                    continue _fun53994
                }
            case 978:
                var26 = !var21;
            case 981:
                var22 = undefined;
                if (!var26) {
                    _fun53994_ip = 1113;
                    continue _fun53994
                }
            case 989:
                var25 = _closure1_slot1;
                var34 = _closure1_slot2;
                var21 = 41;
                var21 = var34[var21];
                var25 = var25.bind(var4)(var21);
                var21 = {};
                var34 = var38.embeds;
                var21.embeds = var34;
                var34 = var1.channel_id;
                var21.channelId = var34;
                var21.gifAutoPlay = var53;
                var21.hasSpoilerEmbeds = var33;
                var21.ignoreEmbedDescriptionCache = var31;
                var21.shouldInlineEmbedMedia = var30;
                var21.colors = var24;
                var21.showListsAndHeaders = var28;
                var21.showMaskedLinks = var28;
                var28 = var24.embedBackgroundColor;
                var21.themedBackgroundColor = var28;
                var21.enabledContentHarmTypeFlags = var56;
                var21.shouldAgeVerify = var55;
                var28 = var1.author;
                var28 = var28.bot;
                var21.authorIsBot = var28;
                var21.showContentInventoryEntryFallbackEmbed = var27;
                var22 = var25.bind(var4)(var21);
            case 1113:
                var25 = _closure1_slot1;
                var27 = _closure1_slot2;
                var21 = 42;
                var21 = var27[var21];
                var25 = var25.bind(var4)(var21);
                var21 = {};
                var21.message = var1;
                var21.isSystemDM = var8;
                var21.channel = var20;
                var21.colors = var24;
                var21 = var25.bind(var4)(var21);
                var87 = var21.tagText;
                var86 = var21.tagVerified;
                var85 = var21.tagTextColor;
                var84 = var21.tagBackgroundColor;
                var83 = var21.tagType;
                var82 = var21.tagIconUrl;
                var81 = var21.opTagText;
                var80 = var21.opTagTextColor;
                var79 = var21.opTagBackgroundColor;
                var27 = _closure1_slot21;
                var25 = var27.getUploaderFileForMessageId;
                var21 = var1.id;
                var25 = var25.bind(var27)(var21);
                var35 = var16 != var25;
                var27 = var1.state;
                var21 = _closure1_slot24;
                var21 = var21.SEND_FAILED;
                var21 = var27 !== var21;
                if (var21) {
                    _fun53994_ip = 1267;
                    continue _fun53994
                }
            case 1257:
                var27 = var1.isCommandType;
                var21 = var27.bind(var1)();
            case 1267:
                var27 = var22;
                if (var21) {
                    _fun53994_ip = 1338;
                    continue _fun53994
                }
            case 1273:
                var21 = var22;
                if (!(var16 == var22)) {
                    _fun53994_ip = 1284;
                    continue _fun53994
                }
            case 1280:
                var21 = new Array(0);
            case 1284:
                var28 = var21.push;
                var30 = _closure1_slot1;
                var31 = _closure1_slot2;
                var22 = 43;
                var22 = var31[var22];
                var30 = var30.bind(var4)(var22);
                var22 = {};
                var22.uploaderFile = var25;
                var22.useAttachmentUploadPreview = var35;
                var22.colors = var24;
                var22 = var30.bind(var4)(var22);
                var22 = var28.bind(var21)(var22);
                var27 = var21;
            case 1338:
                var28 = _closure1_slot8;
                var22 = var28.getMessage;
                var21 = var1.id;
                var22 = var22.bind(var28)(var21);
                var48 = var27;
                if (!(var16 != var22)) {
                    _fun53994_ip = 1437;
                    continue _fun53994
                }
            case 1365:
                var21 = var27;
                if (!(var16 == var27)) {
                    _fun53994_ip = 1376;
                    continue _fun53994
                }
            case 1372:
                var21 = new Array(0);
            case 1376:
                var31 = var22.errorMessage;
                var27 = var21.push;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var22 = 43;
                var22 = var30[var22];
                var30 = var28.bind(var4)(var22);
                var28 = var30.createAutomodBlockedMessageEmbed;
                var22 = {};
                var22.errorMessage = var31;
                var22.colors = var24;
                var22 = var28.bind(var30)(var22);
                var22 = var27.bind(var21)(var22);
                var48 = var21;
            case 1437:
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var30 = 44;
                var21 = var27[var30];
                var31 = var22.bind(var4)(var21);
                var28 = var31.getUserAuthor;
                var21 = var1.author;
                var21 = var28.bind(var31)(var21, var20);
                var41 = var21.guildMemberAvatar;
                var31 = var21.guildMemberAvatarDecoration;
                var28 = var21.iconRoleId;
                var21 = 45;
                var21 = var27[var21];
                var27 = var22.bind(var4)(var21);
                var22 = var27.ensureAvatarSource;
                var21 = var1.isInteractionPlaceholder;
                var21 = var21.bind(var1)();
                if (!var21) {
                    _fun53994_ip = 1569;
                    continue _fun53994
                }
            case 1526:
                var21 = var1.author;
                var21 = var21.avatar;
                if (!(var16 == var21)) {
                    _fun53994_ip = 1569;
                    continue _fun53994
                }
            case 1542:
                if (!(var16 == var41)) {
                    _fun53994_ip = 1569;
                    continue _fun53994
                }
            case 1546:
                var33 = var1.application;
                var34 = var16 == var33;
                var21 = undefined;
                if (var34) {
                    _fun53994_ip = 1565;
                    continue _fun53994
                }
            case 1560:
                var21 = var33.icon;
            case 1565:
                if (!(var16 == var21)) {
                    _fun53994_ip = 1644;
                    continue _fun53994
                }
            case 1569:
                if (!(var16 != var41)) {
                    _fun53994_ip = 1577;
                    continue _fun53994
                }
            case 1573:
                if (!(var16 == var61)) {
                    _fun53994_ip = 1590;
                    continue _fun53994
                }
            case 1577:
                var21 = var69.getAvatarSource;
                var21 = var21.bind(var69)(var4);
                _fun53994_ip = 1642;
                continue _fun53994;
            case 1590:
                var34 = _closure1_slot1;
                var39 = _closure1_slot2;
                var33 = 46;
                var33 = var39[var33];
                var39 = var34.bind(var4)(var33);
                var34 = var39.getGuildMemberAvatarSource;
                var33 = {};
                var42 = var69.id;
                var33.userId = var42;
                var33.avatar = var41;
                var33.guildId = var61;
                var21 = var34.bind(var39)(var33, var69);
            case 1642:
                _fun53994_ip = 1721;
                continue _fun53994;
            case 1644:
                var34 = _closure1_slot1;
                var39 = _closure1_slot2;
                var33 = 46;
                var33 = var39[var33];
                var39 = var34.bind(var4)(var33);
                var34 = var39.getApplicationIconSource;
                var33 = {};
                var41 = var1.application;
                var41 = var41.id;
                var33.id = var41;
                var41 = var1.application;
                var41 = var41.icon;
                var33.icon = var41;
                var41 = var1.application;
                var41 = var41.bot;
                var33.bot = var41;
                var21 = var34.bind(var39)(var33);
            case 1721:
                var76 = var22.bind(var27)(var21);
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 46;
                var21 = var27[var21];
                var27 = var22.bind(var4)(var21);
                var22 = var27.getAvatarDecorationURL;
                var21 = {};
                if (!(var16 == var31)) {
                    _fun53994_ip = 1764;
                    continue _fun53994
                }
            case 1758:
                var31 = var69.avatarDecoration;
            case 1764:
                var21.avatarDecoration = var31;
                var39 = _closure1_slot0;
                var41 = _closure1_slot2;
                var31 = 47;
                var31 = var41[var31];
                var34 = var39.bind(var4)(var31);
                var33 = var34.getDecorationSizeForAvatarSize;
                var31 = 48;
                var31 = var41[var31];
                var31 = var39.bind(var4)(var31);
                var31 = var31.AvatarSizes;
                var31 = var31.NORMAL;
                var31 = var33.bind(var34)(var31);
                var21.size = var31;
                var75 = var22.bind(var27)(var21);
                var21 = var16 != var28;
                var68 = undefined;
                if (!var21) {
                    _fun53994_ip = 1900;
                    continue _fun53994
                }
            case 1842:
                var21 = var16 != var61;
                var68 = undefined;
                if (!var21) {
                    _fun53994_ip = 1900;
                    continue _fun53994
                }
            case 1851:
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 49;
                var21 = var27[var21];
                var27 = var22.bind(var4)(var21);
                var22 = var27.getRoleIcon;
                var21 = {};
                var21.guildId = var61;
                var21.roleId = var28;
                var28 = 18;
                var21.size = var28;
                var68 = var22.bind(var27)(var21);
            case 1900:
                var22 = var1.hasFlag;
                var21 = _closure1_slot25;
                var21 = var21.SOURCE_MESSAGE_DELETED;
                var21 = var22.bind(var1)(var21);
                if (!var21) {
                    _fun53994_ip = 1981;
                    continue _fun53994
                }
            case 1924:
                var28 = _closure1_slot0;
                var31 = _closure1_slot2;
                var21 = 24;
                var22 = var31[var21];
                var22 = var28.bind(var4)(var22);
                var27 = var22.intl;
                var22 = var27.string;
                var21 = var31[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.JOtgSw;
                var23 = var22.bind(var27)(var21);
            case 1981:
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var30];
                var22 = var22.bind(var4)(var21);
                var21 = var22.getMessageAuthor;
                var21 = var21.bind(var22)(var1);
                var73 = var21.nick;
                var71 = var21.colorString;
                var74 = var21.colorStrings;
                var22 = var1.type;
                var21 = _closure1_slot23;
                var21 = var21.INTERACTION_PREMIUM_UPSELL;
                if (!(var22 === var21)) {
                    _fun53994_ip = 2111;
                    continue _fun53994
                }
            case 2046:
                var22 = _closure1_slot0;
                var31 = _closure1_slot2;
                var21 = 24;
                var27 = var31[var21];
                var27 = var22.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.formatToPlainString;
                var21 = var31[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.t;
                var22 = var21["u4A+xK"];
                var21 = {};
                var21.appName = var73;
                var23 = var27.bind(var28)(var22, var21);
            case 2111:
                var22 = var1.type;
                var21 = _closure1_slot23;
                var21 = var21.REPLY;
                var93 = undefined;
                if (!(var22 === var21)) {
                    _fun53994_ip = 3679;
                    continue _fun53994
                }
            case 2135:
                var93 = undefined;
                if (!var19) {
                    _fun53994_ip = 3679;
                    continue _fun53994
                }
            case 2143:
                var22 = _closure1_slot12;
                var21 = var22.getMessageByReference;
                var19 = var1.messageReference;
                var19 = var21.bind(var22)(var19);
                var22 = var19.state;
                var21 = _closure1_slot13;
                var21 = var21.LOADED;
                if (!(var21 !== var22)) {
                    _fun53994_ip = 2421;
                    continue _fun53994
                }
            case 2186:
                var21 = _closure1_slot13;
                var21 = var21.NOT_LOADED;
                if (!(var21 !== var22)) {
                    _fun53994_ip = 2338;
                    continue _fun53994
                }
            case 2203:
                var21 = _closure1_slot13;
                var21 = var21.DELETED;
                if (!(var21 !== var22)) {
                    _fun53994_ip = 2255;
                    continue _fun53994
                }
            case 2217:
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 51;
                var21 = var27[var21];
                var22 = var22.bind(var4)(var21);
                var21 = var22.assertNever;
                var21 = var21.bind(var22)(var19);
                var93 = undefined;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 2255:
                var21 = {};
                var22 = _closure1_slot22;
                var22 = var22.SYSTEM;
                var21.state = var22;
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var22 = 24;
                var27 = var33[var22];
                var27 = var31.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var22 = var33[var22];
                var22 = var31.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.mE3KJN;
                var22 = var27.bind(var28)(var22);
                var21.content = var22;
                var93 = var21;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 2338:
                var21 = {};
                var22 = _closure1_slot22;
                var22 = var22.SYSTEM;
                var21.state = var22;
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var22 = 24;
                var27 = var33[var22];
                var27 = var31.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var22 = var33[var22];
                var22 = var31.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["1i+hMi"];
                var22 = var27.bind(var28)(var22);
                var21.content = var22;
                var93 = var21;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 2421:
                var19 = var19.message;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 33;
                var21 = var27[var21];
                var22 = var22.bind(var4)(var21);
                var21 = var22.maybeCreateSingleForwardForMessage;
                var27 = var21.bind(var22)(var19);
                var22 = _closure1_slot20;
                var21 = var22.isBlockedForMessage;
                var21 = var21.bind(var22)(var19);
                if (var21) {
                    _fun53994_ip = 3601;
                    continue _fun53994
                }
            case 2478:
                var22 = _closure1_slot20;
                var21 = var22.isIgnoredForMessage;
                var21 = var21.bind(var22)(var19);
                if (var21) {
                    _fun53994_ip = 3521;
                    continue _fun53994
                }
            case 2499:
                var22 = _closure1_slot31;
                var21 = {
                    'message': null,
                    'messageForward': null,
                    'roleStyle': null,
                    'isFirst': true,
                    'isEditing': false,
                    'canShowImages': true,
                    'isSystemDM': false,
                    'isInlineReplyPreview': true
                };
                var21.message = var19;
                var21.messageForward = var27;
                var21.roleStyle = var12;
                var33 = false;
                var28 = {};
                var103 = var28;
                var102 = var6;
                var31 = copyDataProperties(var103, var102);
                var31 = 'renderReplies';
                var28[var31] = var33;
                var21.options = var28;
                var22 = var22.bind(var4)(var21);
                if (!(var16 != var22)) {
                    _fun53994_ip = 3438;
                    continue _fun53994
                }
            case 2574:
                var21 = 'username';
                var21 = var21 in var22;
                if (!var21) {
                    _fun53994_ip = 2757;
                    continue _fun53994
                }
            case 2588:
                var28 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var30];
                var28 = var28.bind(var4)(var21);
                var21 = var28.getMessageAuthor;
                var21 = var21.bind(var28)(var19);
                var28 = var21.nick;
                var30 = var21.colorString;
                if (!(var16 == var28)) {
                    _fun53994_ip = 2643;
                    continue _fun53994
                }
            case 2632:
                var21 = var19.author;
                var28 = var21.username;
            case 2643:
                var31 = var16 != var28;
                var21 = undefined;
                if (!var31) {
                    _fun53994_ip = 2655;
                    continue _fun53994
                }
            case 2652:
                var21 = var28;
            case 2655:
                var22.username = var21;
                if (var66) {
                    _fun53994_ip = 2697;
                    continue _fun53994
                }
            case 2664:
                var28 = _closure1_slot3;
                var31 = var16 != var30;
                var21 = undefined;
                if (!var31) {
                    _fun53994_ip = 2680;
                    continue _fun53994
                }
            case 2677:
                var21 = var30;
            case 2680:
                var21 = var28.bind(var4)(var21);
                if (!(var16 == var21)) {
                    _fun53994_ip = 2695;
                    continue _fun53994
                }
            case 2689:
                var21 = var22.colorString;
            case 2695:
                _fun53994_ip = 2703;
                continue _fun53994;
            case 2697:
                var21 = var22.colorString;
            case 2703:
                var22.colorString = var21;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var21 = 50;
                var21 = var30[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.bind(var4)(var1, var19);
                if (!var21) {
                    _fun53994_ip = 2757;
                    continue _fun53994
                }
            case 2738:
                var28 = var22.username;
                var21 = '@';
                var21 = var21 + var28;
                var22.username = var21;
            case 2757:
                var28 = var16 == var27;
                var21 = undefined;
                if (var28) {
                    _fun53994_ip = 2777;
                    continue _fun53994
                }
            case 2766:
                var27 = var27.messageSnapshot;
                var21 = var27.message;
            case 2777:
                var30 = var19;
                if (!(var16 != var21)) {
                    _fun53994_ip = 2787;
                    continue _fun53994
                }
            case 2784:
                var30 = var21;
            case 2787:
                var21 = 'stickers';
                var21 = var21 in var30;
                if (var21) {
                    _fun53994_ip = 2804;
                    continue _fun53994
                }
            case 2798:
                var21 = new Array(0);
                _fun53994_ip = 2835;
                continue _fun53994;
            case 2804:
                var28 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 28;
                var27 = var31[var27];
                var28 = var28.bind(var4)(var27);
                var27 = var28.getMessageStickers;
                var21 = var27.bind(var28)(var30);
            case 2835:
                var21 = var21.length;
                var27 = 0;
                if (!(!(var21 > var27))) {
                    _fun53994_ip = 3314;
                    continue _fun53994
                }
            case 2849:
                var21 = 'interaction';
                var21 = var21 in var30;
                if (!var21) {
                    _fun53994_ip = 2886;
                    continue _fun53994
                }
            case 2860:
                var21 = var30.interaction;
                if (!(var16 != var21)) {
                    _fun53994_ip = 2886;
                    continue _fun53994
                }
            case 2870:
                var28 = var30.content;
                var21 = '';
                if (!(var21 !== var28)) {
                    _fun53994_ip = 3257;
                    continue _fun53994
                }
            case 2886:
                var28 = _closure1_slot0;
                var21 = _closure1_slot2;
                var31 = 29;
                var21 = var21[var31];
                var34 = var28.bind(var4)(var21);
                var33 = var34.hasFlag;
                var28 = var30.flags;
                var21 = _closure1_slot25;
                var21 = var21.IS_VOICE_MESSAGE;
                var21 = var33.bind(var34)(var28, var21);
                if (var21) {
                    _fun53994_ip = 3200;
                    continue _fun53994
                }
            case 2939:
                var28 = var30.type;
                var21 = _closure1_slot23;
                var21 = var21.POLL_RESULT;
                if (!(var28 !== var21)) {
                    _fun53994_ip = 3167;
                    continue _fun53994
                }
            case 2961:
                var28 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var31];
                var33 = var28.bind(var4)(var21);
                var31 = var33.hasFlag;
                var28 = var30.flags;
                var21 = _closure1_slot25;
                var21 = var21.IS_COMPONENTS_V2;
                var21 = var31.bind(var33)(var28, var21);
                if (var21) {
                    _fun53994_ip = 3110;
                    continue _fun53994
                }
            case 3008:
                var21 = var30.embeds;
                var21 = var21.length;
                if (!(!(var21 > var27))) {
                    _fun53994_ip = 3053;
                    continue _fun53994
                }
            case 3023:
                var21 = var30.attachments;
                var21 = var21.length;
                if (!(!(var21 > var27))) {
                    _fun53994_ip = 3053;
                    continue _fun53994
                }
            case 3038:
                var28 = var30.content;
                var27 = '';
                var21 = null;
                if (!(var27 === var28)) {
                    _fun53994_ip = 3108;
                    continue _fun53994
                }
            case 3053:
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var27 = 24;
                var28 = var34[var27];
                var28 = var33.bind(var4)(var28);
                var31 = var28.intl;
                var28 = var31.string;
                var27 = var34[var27];
                var27 = var33.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.JAKsM8;
                var21 = var28.bind(var31)(var27);
            case 3108:
                _fun53994_ip = 3165;
                continue _fun53994;
            case 3110:
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var27 = 24;
                var28 = var34[var27];
                var28 = var33.bind(var4)(var28);
                var31 = var28.intl;
                var28 = var31.string;
                var27 = var34[var27];
                var27 = var33.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.Xxm5i3;
                var21 = var28.bind(var31)(var27);
            case 3165:
                _fun53994_ip = 3198;
                continue _fun53994;
            case 3167:
                var28 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 30;
                var27 = var31[var27];
                var28 = var28.bind(var4)(var27);
                var27 = var28.getPollResultsReplyPreviewMobile;
                var21 = var27.bind(var28)(var30);
            case 3198:
                _fun53994_ip = 3255;
                continue _fun53994;
            case 3200:
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var27 = 24;
                var28 = var33[var27];
                var28 = var31.bind(var4)(var28);
                var30 = var28.intl;
                var28 = var30.string;
                var27 = var33[var27];
                var27 = var31.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27["6bhHrc"];
                var21 = var28.bind(var30)(var27);
            case 3255:
                _fun53994_ip = 3312;
                continue _fun53994;
            case 3257:
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var27 = 24;
                var28 = var33[var27];
                var28 = var31.bind(var4)(var28);
                var30 = var28.intl;
                var28 = var30.string;
                var27 = var33[var27];
                var27 = var31.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27["2v7kfl"];
                var21 = var28.bind(var30)(var27);
            case 3312:
                _fun53994_ip = 3369;
                continue _fun53994;
            case 3314:
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var27 = 24;
                var28 = var33[var27];
                var28 = var31.bind(var4)(var28);
                var30 = var28.intl;
                var28 = var30.string;
                var27 = var33[var27];
                var27 = var31.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27["7K5Lma"];
                var21 = var28.bind(var30)(var27);
            case 3369:
                var27 = var19.type;
                var19 = _closure1_slot23;
                var19 = var19.POLL_RESULT;
                if (!(var27 === var19)) {
                    _fun53994_ip = 3394;
                    continue _fun53994
                }
            case 3388:
                var22.content = var21;
            case 3394:
                var19 = {};
                var27 = _closure1_slot22;
                var27 = var27.LOADED;
                var19.state = var27;
                var19.message = var22;
                var93 = var19;
                if (!(var16 != var21)) {
                    _fun53994_ip = 3679;
                    continue _fun53994
                }
            case 3424:
                var19.systemContent = var21;
                var93 = var19;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 3438:
                var19 = {};
                var21 = _closure1_slot22;
                var21 = var21.SYSTEM;
                var19.state = var21;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var21 = 24;
                var22 = var30[var21];
                var22 = var28.bind(var4)(var22);
                var27 = var22.intl;
                var22 = var27.string;
                var21 = var30[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["1i+hMi"];
                var21 = var22.bind(var27)(var21);
                var19.content = var21;
                var93 = var19;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 3521:
                var19 = {};
                var21 = _closure1_slot22;
                var21 = var21.SYSTEM;
                var19.state = var21;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var21 = 24;
                var22 = var30[var21];
                var22 = var28.bind(var4)(var22);
                var27 = var22.intl;
                var22 = var27.string;
                var21 = var30[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["G7p6v/"];
                var21 = var22.bind(var27)(var21);
                var19.content = var21;
                var93 = var19;
                _fun53994_ip = 3679;
                continue _fun53994;
            case 3601:
                var19 = {};
                var21 = _closure1_slot22;
                var21 = var21.SYSTEM;
                var19.state = var21;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var21 = 24;
                var22 = var30[var21];
                var22 = var28.bind(var4)(var22);
                var27 = var22.intl;
                var22 = var27.string;
                var21 = var30[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.XAkOo2;
                var21 = var22.bind(var27)(var21);
                var19.content = var21;
                var93 = var19;
            case 3679:
                var90 = undefined;
                if (!var14) {
                    _fun53994_ip = 3709;
                    continue _fun53994
                }
            case 3684:
                var14 = _closure1_slot29;
                var104 = undefined;
                var103 = var1;
                var102 = var12;
                var101 = var5;
                var100 = var15;
                var99 = var6;
                var90 = var104[var14](var103, var102, var101, var100, var99, var98);
            case 3709:
                var19 = _closure1_slot9;
                var14 = var19.getInteraction;
                var60 = var14.bind(var19)(var1);
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 52;
                var14 = var21[var14];
                var19 = var19.bind(var4)(var14);
                var14 = var19.createInteractionStatus;
                var50 = var14.bind(var19)(var1, var60);
                var19 = var16 != var61;
                var14 = null;
                if (!var19) {
                    _fun53994_ip = 3786;
                    continue _fun53994
                }
            case 3765:
                var22 = _closure1_slot19;
                var21 = var22.getMember;
                var19 = var69.id;
                var14 = var21.bind(var22)(var61, var19);
            case 3786:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 53;
                var19 = var22[var19];
                var21 = var21.bind(var4)(var19);
                var19 = var21.isMemberCommunicationDisabled;
                var33 = var19.bind(var21)(var14);
                var19 = _closure1_slot4;
                var30 = var19.useReducedMotion;
                var19 = _closure1_slot4;
                var63 = var19.alwaysShowLinkDecorations;
                var19 = var16 == var20;
                var21 = var14;
                var14 = undefined;
                if (var19) {
                    _fun53994_ip = 3855;
                    continue _fun53994
                }
            case 3849:
                var14 = var20.parent_id;
            case 3855:
                var27 = var20;
                if (!(var16 != var14)) {
                    _fun53994_ip = 3905;
                    continue _fun53994
                }
            case 3862:
                var27 = var20;
                if (!(var16 != var20)) {
                    _fun53994_ip = 3905;
                    continue _fun53994
                }
            case 3869:
                var14 = var20.isThread;
                var14 = var14.bind(var20)();
                var27 = var20;
                if (!var14) {
                    _fun53994_ip = 3905;
                    continue _fun53994
                }
            case 3885:
                var22 = _closure1_slot18;
                var19 = var22.getChannel;
                var14 = var20.parent_id;
                var27 = var19.bind(var22)(var14);
            case 3905:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 54;
                var14 = var22[var14];
                var22 = var19.bind(var4)(var14);
                var19 = var22.getVisibleConnectionsRole;
                var14 = {};
                var14.guildMember = var21;
                var14.channel = var27;
                var14.onlyChannelConnectionRoles = var7;
                var70 = var19.bind(var22)(var14);
                var14 = var38.attachments;
                var14 = var14.length;
                var47 = 0;
                var41 = var47 !== var14;
                var14 = var38.embeds;
                var14 = var14.length;
                var42 = var47 !== var14;
                var14 = var35;
                if (!var35) {
                    _fun53994_ip = 4005;
                    continue _fun53994
                }
            case 3990:
                var19 = var1.attachments;
                var19 = var19.length;
                var14 = var47 === var19;
            case 4005:
                if (!var14) {
                    _fun53994_ip = 4012;
                    continue _fun53994
                }
            case 4008:
                var14 = var16 != var25;
            case 4012:
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var39 = 55;
                var19 = var19[var39];
                var19 = var22.bind(var4)(var19);
                var22 = var19.ViewImageDescriptions;
                var19 = var22.getSetting;
                var54 = var19.bind(var22)();
                var34 = new Array(0);
                if (var14) {
                    _fun53994_ip = 4182;
                    continue _fun53994
                }
            case 4058:
                if (!var40) {
                    _fun53994_ip = 4243;
                    continue _fun53994
                }
            case 4064:
                var22 = _closure1_slot1;
                var27 = _closure1_slot2;
                var19 = 57;
                var19 = var27[var19];
                var22 = var22.bind(var4)(var19);
                var19 = {};
                var27 = var38.attachments;
                var19.attachments = var27;
                var31 = _closure1_slot21;
                var28 = var31.getUploadAttachments;
                var27 = var1.nonce;
                var27 = var28.bind(var31)(var27);
                var19.uploadAttachments = var27;
                var19.shouldInlineAttachmentMedia = var36;
                var19.gifAutoPlay = var53;
                var19.viewImageDescriptions = var54;
                var19.useReducedMotion = var30;
                var19.shouldObscureSpoiler = var57;
                var27 = var24.embedBackgroundColor;
                var19.themedBackgroundColor = var27;
                var19.enabledContentHarmTypeFlags = var56;
                var19.shouldAgeVerify = var55;
                var19.colors = var24;
                var34 = var22.bind(var4)(var19);
                _fun53994_ip = 4243;
                continue _fun53994;
            case 4182:
                var22 = _closure1_slot1;
                var27 = _closure1_slot2;
                var19 = 56;
                var19 = var27[var19];
                var22 = var22.bind(var4)(var19);
                var19 = {};
                var19.uploaderFile = var25;
                var27 = var1.state;
                var25 = _closure1_slot24;
                var25 = var25.SEND_FAILED;
                var25 = var27 === var25;
                var19.isFailedMessage = var25;
                var19.shouldInlineAttachmentMedia = var36;
                var34 = var22.bind(var4)(var19);
            case 4243:
                if (!var14) {
                    _fun53994_ip = 4265;
                    continue _fun53994
                }
            case 4246:
                var22 = var1.state;
                var19 = _closure1_slot24;
                var19 = var19.SEND_FAILED;
                if (!(var22 === var19)) {
                    _fun53994_ip = 4305;
                    continue _fun53994
                }
            case 4265:
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var19 = 58;
                var19 = var25[var19];
                var25 = var22.bind(var4)(var19);
                var22 = var25.calendarFormat;
                var19 = var1.timestamp;
                var67 = var22.bind(var25)(var19, var7);
                _fun53994_ip = 4360;
                continue _fun53994;
            case 4305:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var19 = 24;
                var22 = var28[var19];
                var22 = var27.bind(var4)(var22);
                var25 = var22.intl;
                var22 = var25.string;
                var19 = var28[var19];
                var19 = var27.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19["yXY+5J"];
                var67 = var22.bind(var25)(var19);
            case 4360:
                if (!var14) {
                    _fun53994_ip = 4382;
                    continue _fun53994
                }
            case 4363:
                var19 = var1.state;
                var14 = _closure1_slot24;
                var14 = var14.SEND_FAILED;
                if (!(var19 === var14)) {
                    _fun53994_ip = 4421;
                    continue _fun53994
                }
            case 4382:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 58;
                var14 = var22[var14];
                var22 = var19.bind(var4)(var14);
                var19 = var22.accessibilityLabelCalendarFormat;
                var14 = var1.timestamp;
                var64 = var19.bind(var22)(var14);
                _fun53994_ip = 4476;
                continue _fun53994;
            case 4421:
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var14 = 24;
                var19 = var27[var14];
                var19 = var25.bind(var4)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var14 = var27[var14];
                var14 = var25.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["yXY+5J"];
                var64 = var19.bind(var22)(var14);
            case 4476:
                var19 = _closure1_slot17;
                var14 = var19.getId;
                var31 = var14.bind(var19)();
                var14 = var1.isUnsupported;
                var62 = var23;
                if (!var14) {
                    _fun53994_ip = 4559;
                    continue _fun53994
                }
            case 4502:
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var14 = 24;
                var19 = var27[var14];
                var19 = var25.bind(var4)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var14 = var27[var14];
                var14 = var25.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.sWi5EU;
                var62 = var19.bind(var22)(var14);
            case 4559:
                var14 = var1.isPoll;
                var14 = var14.bind(var1)();
                var14 = !var14;
                if (var14) {
                    _fun53994_ip = 4587;
                    continue _fun53994
                }
            case 4575:
                var19 = !var5;
                if (!var19) {
                    _fun53994_ip = 4584;
                    continue _fun53994
                }
            case 4581:
                var19 = var3;
            case 4584:
                var14 = var19;
            case 4587:
                if (var14) {
                    _fun53994_ip = 4608;
                    continue _fun53994
                }
            case 4590:
                var19 = var16 != var23;
                if (!var19) {
                    _fun53994_ip = 4605;
                    continue _fun53994
                }
            case 4597:
                var22 = '';
                var19 = var22 !== var23;
            case 4605:
                var14 = var19;
            case 4608:
                if (var14) {
                    _fun53994_ip = 4642;
                    continue _fun53994
                }
            case 4611:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 30;
                var14 = var22[var14];
                var19 = var19.bind(var4)(var14);
                var14 = var19.getPollReplyPreview;
                var62 = var14.bind(var19)(var1);
            case 4642:
                var28 = undefined;
                if (!var3) {
                    _fun53994_ip = 4686;
                    continue _fun53994
                }
            case 4647:
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var3 = 59;
                var3 = var19[var3];
                var14 = var14.bind(var4)(var3);
                var3 = {};
                var3.theme = var18;
                var3.animateEmoji = var77;
                var28 = var14.bind(var4)(var1, var4, var3);
            case 4686:
                var23 = undefined;
                if (!var0) {
                    _fun53994_ip = 4724;
                    continue _fun53994
                }
            case 4691:
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 60;
                var0 = var14[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.formatSharedClientThemeData;
                var23 = var0.bind(var3)(var1, var76, var73);
            case 4724:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var94 = 61;
                var0 = var0[var94];
                var19 = var3.bind(var4)(var0);
                var14 = var19.shouldDisplayGuildTag;
                var3 = var69.id;
                var22 = var16 != var61;
                var0 = undefined;
                if (!var22) {
                    _fun53994_ip = 4767;
                    continue _fun53994
                }
            case 4764:
                var0 = var61;
            case 4767:
                var0 = var14.bind(var19)(var3, var0);
                var22 = undefined;
                var19 = undefined;
                var14 = undefined;
                if (!var0) {
                    _fun53994_ip = 4900;
                    continue _fun53994
                }
            case 4782:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var94];
                var25 = var3.bind(var4)(var0);
                var3 = var25.getUserPrimaryGuild;
                var0 = var69.primaryGuild;
                var27 = var3.bind(var25)(var0);
                var25 = var27.guildId;
                var3 = var27.tag;
                var0 = var27.guildId;
                var89 = var16 != var0;
                var0 = undefined;
                if (!var89) {
                    _fun53994_ip = 4891;
                    continue _fun53994
                }
            case 4840:
                var91 = _closure1_slot0;
                var89 = _closure1_slot2;
                var89 = var89[var94];
                var95 = var91.bind(var4)(var89);
                var94 = var95.getGuildTagBadgeUrl;
                var91 = var27.guildId;
                var89 = var27.badge;
                var27 = _closure1_slot27;
                var27 = var27.SIZE_12;
                var0 = var94.bind(var95)(var91, var89, var27);
            case 4891:
                var14 = var0;
                var22 = var25;
                var19 = var3;
            case 4900:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var95 = 29;
                var0 = var0[var95];
                var27 = var3.bind(var4)(var0);
                var25 = var27.hasFlag;
                var0 = var1;
                if (!(var16 != var38)) {
                    _fun53994_ip = 4936;
                    continue _fun53994
                }
            case 4933:
                var0 = var38;
            case 4936:
                var3 = var0.flags;
                var0 = _closure1_slot25;
                var0 = var0.IS_VOICE_MESSAGE;
                var25 = var25.bind(var27)(var3, var0);
                var0 = {};
                var0.currentUserId = var31;
                var0.message = var1;
                var0.theme = var18;
                var94 = var0.currentUserId;
                var91 = var0.message;
                var89 = var0.theme;
                var0 = var91.referralTrialOfferId;
                var27 = var91.type;
                var3 = _closure1_slot23;
                var3 = var3.PREMIUM_REFERRAL;
                if (!(var27 === var3)) {
                    _fun53994_ip = 5061;
                    continue _fun53994
                }
            case 5015:
                if (!(var16 != var0)) {
                    _fun53994_ip = 5061;
                    continue _fun53994
                }
            case 5019:
                var0 = {};
                var27 = _closure1_slot0;
                var96 = _closure1_slot2;
                var3 = 21;
                var3 = var96[var3];
                var27 = var27.bind(var4)(var3);
                var3 = var27.createReferralTrialEmbedRedeemable;
                var3 = var3.bind(var27)(var91, var89, var94);
                var0.referralTrialOfferDataUpdated = var3;
                _fun53994_ip = 5065;
                continue _fun53994;
            case 5061:
                var0 = _closure1_slot28;
            case 5065:
                var27 = var0.referralTrialOfferDataUpdated;
                var91 = _closure1_slot5;
                var3 = var91.getApplication;
                var94 = var1.applicationId;
                var96 = var16 != var94;
                var89 = '';
                var0 = var89;
                if (!var96) {
                    _fun53994_ip = 5103;
                    continue _fun53994
                }
            case 5100:
                var0 = var94;
            case 5103:
                var0 = var3.bind(var91)(var0);
                var91 = var16 != var0;
                if (!var91) {
                    _fun53994_ip = 5159;
                    continue _fun53994
                }
            case 5115:
                var94 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var95];
                var96 = var94.bind(var4)(var3);
                var95 = var96.hasFlag;
                var94 = var1.flags;
                var3 = _closure1_slot25;
                var3 = var3.SENT_BY_SOCIAL_LAYER_INTEGRATION;
                var91 = var95.bind(var96)(var94, var3);
            case 5159:
                var3 = undefined;
                if (!var91) {
                    _fun53994_ip = 5169;
                    continue _fun53994
                }
            case 5164:
                var3 = var0.id;
            case 5169:
                var0 = {};
                var91 = var1.id;
                var0.id = var91;
                var91 = var1.channel_id;
                var0.channelId = var91;
                var94 = var16 != var61;
                var91 = undefined;
                if (!var94) {
                    _fun53994_ip = 5201;
                    continue _fun53994
                }
            case 5198:
                var91 = var61;
            case 5201:
                var0.guildId = var91;
                var91 = var1;
                if (!(var16 != var38)) {
                    _fun53994_ip = 5215;
                    continue _fun53994
                }
            case 5212:
                var91 = var38;
            case 5215:
                var91 = var91.flags;
                var0.flags = var91;
                var91 = var1.type;
                var0.type = var91;
                var91 = var1.nonce;
                if (!(var16 != var91)) {
                    _fun53994_ip = 5260;
                    continue _fun53994
                }
            case 5243:
                var91 = var1.nonce;
                var94 = 'string';
                var91 = typeof var91;
                if (!(var94 === var91)) {
                    _fun53994_ip = 5268;
                    continue _fun53994
                }
            case 5260:
                var91 = var1.nonce;
                _fun53994_ip = 5287;
                continue _fun53994;
            case 5268:
                var94 = global;
                var95 = var94.String;
                var94 = var1.nonce;
                var91 = var95.bind(var4)(var94);
            case 5287:
                var0.nonce = var91;
                var91 = var1.state;
                var0.state = var91;
                var0.reactions = var17;
                var91 = undefined;
                if (var49) {
                    _fun53994_ip = 5314;
                    continue _fun53994
                }
            case 5311:
                var91 = var93;
            case 5314:
                var0.referencedMessage = var91;
                var0.threadEmbed = var90;
                var91 = var16 != var92;
                var90 = undefined;
                if (!var91) {
                    _fun53994_ip = 5345;
                    continue _fun53994
                }
            case 5333:
                var91 = var92.getForwardInfo;
                var90 = var91.bind(var92)();
            case 5345:
                var0.forwardInfo = var90;
                var88 = !var88;
                if (!var88) {
                    _fun53994_ip = 5364;
                    continue _fun53994
                }
            case 5358:
                var88 = var1.mentioned;
            case 5364:
                var0.mentioned = var88;
                var88 = var1.isEdited;
                var90 = var88.bind(var1)();
                var88 = var89;
                if (!var90) {
                    _fun53994_ip = 5450;
                    continue _fun53994
                }
            case 5387:
                var88 = var89;
                if (var49) {
                    _fun53994_ip = 5450;
                    continue _fun53994
                }
            case 5393:
                var92 = _closure1_slot0;
                var93 = _closure1_slot2;
                var89 = 24;
                var90 = var93[var89];
                var90 = var92.bind(var4)(var90);
                var91 = var90.intl;
                var90 = var91.string;
                var89 = var93[var89];
                var89 = var92.bind(var4)(var89);
                var89 = var89.t;
                var89 = var89.C8sXIM;
                var88 = var90.bind(var91)(var89);
            case 5450:
                var0.edited = var88;
                var88 = var24.editedColor;
                var0.editedColor = var88;
                var88 = var1.isUnsupported;
                if (var88) {
                    _fun53994_ip = 5483;
                    continue _fun53994
                }
            case 5475:
                var88 = var24.textColor;
                _fun53994_ip = 5489;
                continue _fun53994;
            case 5483:
                var88 = var24.unsupportedColor;
            case 5489:
                var0.textColor = var88;
                var88 = var24.linkColor;
                var0.linkColor = var88;
                var0.tagText = var87;
                var0.tagVerified = var86;
                var0.tagTextColor = var85;
                var0.tagBackgroundColor = var84;
                var0.tagType = var83;
                var0.tagIconUrl = var82;
                var0.opTagText = var81;
                var0.opTagTextColor = var80;
                var0.opTagBackgroundColor = var79;
                var0.constrainedWidth = var78;
                var0.gifAutoPlay = var53;
                var0.animateEmoji = var77;
                var77 = var73;
                if (!var66) {
                    _fun53994_ip = 5576;
                    continue _fun53994
                }
            case 5571:
                var77 = var69.username;
            case 5576:
                var78 = var16 != var77;
                var73 = undefined;
                if (!var78) {
                    _fun53994_ip = 5588;
                    continue _fun53994
                }
            case 5585:
                var73 = var77;
            case 5588:
                var0.username = var73;
                var73 = undefined;
                if (var66) {
                    _fun53994_ip = 5602;
                    continue _fun53994
                }
            case 5597:
                var73 = var76.uri;
            case 5602:
                var0.avatarURL = var73;
                var73 = undefined;
                if (var66) {
                    _fun53994_ip = 5615;
                    continue _fun53994
                }
            case 5612:
                var73 = var75;
            case 5615:
                var0.avatarDecorationURL = var73;
                var69 = var69.id;
                var0.authorId = var69;
                if (var66) {
                    _fun53994_ip = 5676;
                    continue _fun53994
                }
            case 5635:
                var69 = 'username';
                if (!(var69 === var12)) {
                    _fun53994_ip = 5676;
                    continue _fun53994
                }
            case 5643:
                var73 = _closure1_slot3;
                var75 = var16 != var71;
                var69 = undefined;
                if (!var75) {
                    _fun53994_ip = 5659;
                    continue _fun53994
                }
            case 5656:
                var69 = var71;
            case 5659:
                var69 = var73.bind(var4)(var69);
                if (!(var16 == var69)) {
                    _fun53994_ip = 5674;
                    continue _fun53994
                }
            case 5668:
                var69 = var24.defaultUsernameColor;
            case 5674:
                _fun53994_ip = 5682;
                continue _fun53994;
            case 5676:
                var69 = var24.defaultUsernameColor;
            case 5682:
                var0.usernameColor = var69;
                var69 = null;
                if (var66) {
                    _fun53994_ip = 5728;
                    continue _fun53994
                }
            case 5692:
                var75 = _closure1_slot3;
                var76 = var16 != var71;
                var73 = undefined;
                if (!var76) {
                    _fun53994_ip = 5708;
                    continue _fun53994
                }
            case 5705:
                var73 = var71;
            case 5708:
                var75 = var75.bind(var4)(var73);
                var76 = var16 != var75;
                var73 = null;
                if (!var76) {
                    _fun53994_ip = 5725;
                    continue _fun53994
                }
            case 5722:
                var73 = var75;
            case 5725:
                var69 = var73;
            case 5728:
                var0.roleColor = var69;
                var69 = null;
                if (!var72) {
                    _fun53994_ip = 5774;
                    continue _fun53994
                }
            case 5738:
                var69 = null;
                if (var66) {
                    _fun53994_ip = 5774;
                    continue _fun53994
                }
            case 5743:
                var73 = _closure1_slot0;
                var75 = _closure1_slot2;
                var72 = 62;
                var72 = var75[var72];
                var73 = var73.bind(var4)(var72);
                var72 = var73.processColorStrings;
                var69 = var72.bind(var73)(var74);
            case 5774:
                var0.roleColors = var69;
                var69 = 'dot';
                var69 = var69 === var12;
                var0.shouldShowRoleDot = var69;
                var69 = 'username';
                var69 = var69 === var12;
                var0.shouldShowRoleOnName = var69;
                var0.showLinkDecorations = var63;
                if (var66) {
                    _fun53994_ip = 5848;
                    continue _fun53994
                }
            case 5815:
                var69 = _closure1_slot3;
                var72 = var16 != var71;
                var63 = undefined;
                if (!var72) {
                    _fun53994_ip = 5831;
                    continue _fun53994
                }
            case 5828:
                var63 = var71;
            case 5831:
                var63 = var69.bind(var4)(var63);
                if (!(var16 == var63)) {
                    _fun53994_ip = 5846;
                    continue _fun53994
                }
            case 5840:
                var63 = var24.defaultUsernameColor;
            case 5846:
                _fun53994_ip = 5854;
                continue _fun53994;
            case 5848:
                var63 = var24.defaultUsernameColor;
            case 5854:
                var0.colorString = var63;
                var63 = undefined;
                if (var66) {
                    _fun53994_ip = 5867;
                    continue _fun53994
                }
            case 5864:
                var63 = var68;
            case 5867:
                var0.roleIcon = var63;
                var68 = var16 != var70;
                var63 = undefined;
                if (!var68) {
                    _fun53994_ip = 5912;
                    continue _fun53994
                }
            case 5881:
                var69 = _closure1_slot0;
                var71 = _closure1_slot2;
                var68 = 63;
                var68 = var71[var68];
                var69 = var69.bind(var4)(var68);
                var68 = var69.createConnectionsRoleTag;
                var63 = var68.bind(var69)(var70);
            case 5912:
                var0.connectionsRoleTag = var63;
                var63 = undefined;
                if (var66) {
                    _fun53994_ip = 5927;
                    continue _fun53994
                }
            case 5924:
                var63 = var67;
            case 5927:
                var0.timestamp = var63;
                var63 = undefined;
                if (var66) {
                    _fun53994_ip = 5943;
                    continue _fun53994
                }
            case 5937:
                var63 = var24.timestampColor;
            case 5943:
                var0.timestampColor = var63;
                var63 = undefined;
                if (var66) {
                    _fun53994_ip = 5956;
                    continue _fun53994
                }
            case 5953:
                var63 = var64;
            case 5956:
                var0.timestampAccessibilityLabel = var63;
                var0.content = var62;
                var0.isEditing = var10;
                var0.renderContentOnly = var49;
                var62 = undefined;
                if (!(var4 !== var65)) {
                    _fun53994_ip = 6014;
                    continue _fun53994
                }
            case 5981:
                var64 = _closure1_slot0;
                var66 = _closure1_slot2;
                var63 = 64;
                var63 = var66[var63];
                var64 = var64.bind(var4)(var63);
                var63 = var64.createSurveyIndication;
                var62 = var63.bind(var64)(var1, var18, var65);
            case 6014:
                var0.surveyIndication = var62;
                var63 = _closure1_slot0;
                var64 = _closure1_slot2;
                var62 = 65;
                var62 = var64[var62];
                var63 = var63.bind(var4)(var62);
                var62 = var63.createEphemeralIndication;
                var62 = var62.bind(var63)(var1);
                var0.ephemeralIndication = var62;
                var0.interactionStatus = var50;
                var50 = undefined;
                if (!var52) {
                    _fun53994_ip = 6120;
                    continue _fun53994
                }
            case 6069:
                var62 = _closure1_slot0;
                var63 = _closure1_slot2;
                var52 = 66;
                var52 = var63[var52];
                var63 = var62.bind(var4)(var52);
                var62 = var63.createExecutedCommand;
                var99 = var24.defaultUsernameColor;
                var104 = var63;
                var103 = var1;
                var102 = var20;
                var101 = var12;
                var100 = var18;
                var50 = var104[var62](var103, var102, var101, var100, var99, var98);
            case 6120:
                var0.executedCommand = var50;
                var50 = var38.components;
                var50 = var50.length;
                var52 = var50 > var47;
                var50 = undefined;
                if (!var52) {
                    _fun53994_ip = 6231;
                    continue _fun53994
                }
            case 6147:
                var50 = undefined;
                if (!var51) {
                    _fun53994_ip = 6231;
                    continue _fun53994
                }
            case 6152:
                var52 = _closure1_slot1;
                var62 = _closure1_slot2;
                var51 = 67;
                var51 = var62[var51];
                var52 = var52.bind(var4)(var51);
                var51 = {};
                var51.message = var1;
                var51.guildId = var61;
                var51.interaction = var60;
                var51.shouldDisableInteractiveComponents = var59;
                var51.shouldShowMedia = var58;
                var51.shouldObscureSpoiler = var57;
                var51.enabledContentHarmTypeFlags = var56;
                var51.shouldAgeVerify = var55;
                var51.shouldShowMosaicMediaDescriptions = var54;
                var51.shouldAutoPlayGifs = var53;
                var51.colors = var24;
                var50 = var52.bind(var4)(var51);
            case 6231:
                var0.components = var50;
                var50 = 0;
                if (var49) {
                    _fun53994_ip = 6247;
                    continue _fun53994
                }
            case 6241:
                var50 = var24.feedbackColor;
            case 6247:
                var0.feedbackColor = var50;
                var47 = 0;
                if (var49) {
                    _fun53994_ip = 6263;
                    continue _fun53994
                }
            case 6257:
                var47 = var24.highlightColor;
            case 6263:
                var0.highlightColor = var47;
                var49 = var16 != var48;
                var47 = undefined;
                if (!var49) {
                    _fun53994_ip = 6280;
                    continue _fun53994
                }
            case 6277:
                var47 = var48;
            case 6280:
                var0.embeds = var47;
                if (var46) {
                    _fun53994_ip = 6294;
                    continue _fun53994
                }
            case 6288:
                var46 = new Array(0);
                _fun53994_ip = 6326;
                continue _fun53994;
            case 6294:
                var48 = _closure1_slot0;
                var49 = _closure1_slot2;
                var47 = 68;
                var47 = var49[var47];
                var48 = var48.bind(var4)(var47);
                var47 = var48.createGiftCodeEmbed;
                var46 = var47.bind(var48)(var1, var18);
            case 6326:
                var0.giftCodes = var46;
                if (var43) {
                    _fun53994_ip = 6340;
                    continue _fun53994
                }
            case 6334:
                var43 = new Array(0);
                _fun53994_ip = 6373;
                continue _fun53994;
            case 6340:
                var47 = _closure1_slot0;
                var48 = _closure1_slot2;
                var46 = 69;
                var46 = var48[var46];
                var47 = var47.bind(var4)(var46);
                var46 = var47.createCodedLinkEmbeds;
                var43 = var46.bind(var47)(var1, var38, var18);
            case 6373:
                var0.codedLinks = var43;
                var43 = undefined;
                if (!var45) {
                    _fun53994_ip = 6414;
                    continue _fun53994
                }
            case 6383:
                var46 = _closure1_slot0;
                var47 = _closure1_slot2;
                var45 = 70;
                var45 = var47[var45];
                var46 = var46.bind(var4)(var45);
                var45 = var46.createActivityInstanceEmbed;
                var43 = var45.bind(var46)(var1);
            case 6414:
                var0.activityInstanceEmbed = var43;
                var43 = undefined;
                if (!var44) {
                    _fun53994_ip = 6458;
                    continue _fun53994
                }
            case 6426:
                var45 = _closure1_slot0;
                var46 = _closure1_slot2;
                var44 = 71;
                var44 = var46[var44];
                var45 = var45.bind(var4)(var44);
                var44 = var45.createActivityRichPresenceInviteEmbed;
                var43 = var44.bind(var45)(var1, var20);
            case 6458:
                var0.activityRichPresenceInviteEmbed = var43;
                if (!var36) {
                    _fun53994_ip = 6489;
                    continue _fun53994
                }
            case 6468:
                if (!var40) {
                    _fun53994_ip = 6480;
                    continue _fun53994
                }
            case 6471:
                if (var41) {
                    _fun53994_ip = 6477;
                    continue _fun53994
                }
            case 6474:
                var41 = var42;
            case 6477:
                var40 = var41;
            case 6480:
                if (var40) {
                    _fun53994_ip = 6486;
                    continue _fun53994
                }
            case 6483:
                var40 = var35;
            case 6486:
                var36 = var40;
            case 6489:
                var0.useAttachmentGridLayout = var36;
                var0.useAttachmentUploadPreview = var35;
                var0.attachments = var34;
                var40 = 1;
                var34 = var40;
                if (!var35) {
                    _fun53994_ip = 6547;
                    continue _fun53994
                }
            case 6515:
                var36 = var1.state;
                var35 = _closure1_slot24;
                var35 = var35.SEND_FAILED;
                var34 = var40;
                if (!(var36 === var35)) {
                    _fun53994_ip = 6547;
                    continue _fun53994
                }
            case 6537:
                var34 = 0.2;
            case 6547:
                var0.attachmentsOpacity = var34;
                var35 = _closure1_slot1;
                var36 = _closure1_slot2;
                var34 = 72;
                var34 = var36[var34];
                var35 = var35.bind(var4)(var34);
                var34 = {};
                var34.message = var38;
                var38 = _closure1_slot0;
                var36 = var36[var39];
                var36 = var38.bind(var4)(var36);
                var38 = var36.AnimateStickers;
                var36 = var38.getSetting;
                var36 = var36.bind(var38)();
                var34.animateStickersSetting = var36;
                var36 = var1.id;
                var36 = var36 === var37;
                var34.isUserInteracting = var36;
                var34 = var35.bind(var4)(var34);
                var0.stickers = var34;
                if (!var29) {
                    _fun53994_ip = 6644;
                    continue _fun53994
                }
            case 6641:
                var29 = var33;
            case 6644:
                var0.communicationDisabled = var29;
                var33 = var16 == var20;
                if (var33) {
                    _fun53994_ip = 6669;
                    continue _fun53994
                }
            case 6656:
                var29 = var20.isForumPost;
                var29 = var29.bind(var20)();
                var33 = !var29;
            case 6669:
                var29 = !var33;
                if (var33) {
                    _fun53994_ip = 6689;
                    continue _fun53994
                }
            case 6675:
                var34 = var1.id;
                var33 = var1.channel_id;
                var29 = var34 === var33;
            case 6689:
                var0.isFirstForumPostMessage = var29;
                var33 = var16 != var20;
                var29 = undefined;
                if (!var33) {
                    _fun53994_ip = 6735;
                    continue _fun53994
                }
            case 6705:
                var33 = var20.isForumPost;
                var33 = var33.bind(var20)();
                var29 = undefined;
                if (!var33) {
                    _fun53994_ip = 6735;
                    continue _fun53994
                }
            case 6720:
                var29 = undefined;
                if (!var32) {
                    _fun53994_ip = 6735;
                    continue _fun53994
                }
            case 6725:
                var32 = _closure1_slot30;
                var29 = var32.bind(var4)(var1, var20);
            case 6735:
                var0.postActions = var29;
                var29 = var1.author;
                var29 = var29.id;
                var29 = var29 === var31;
                var0.isCurrentUserMessageAuthor = var29;
                var29 = _closure1_slot6;
                var29 = var29.gradientPreset;
                var29 = var16 != var29;
                var0.usingGradientTheme = var29;
                var31 = _closure1_slot0;
                var34 = _closure1_slot2;
                var29 = 25;
                var32 = var34[var29];
                var36 = var31.bind(var4)(var32);
                var35 = var36.getAssetUriForEmbed;
                var33 = _closure1_slot1;
                var32 = 73;
                var32 = var34[var32];
                var32 = var33.bind(var4)(var32);
                var32 = var35.bind(var36)(var32);
                var0.swipeToReplyIconUrl = var32;
                var29 = var34[var29];
                var32 = var31.bind(var4)(var29);
                var31 = var32.getAssetUriForEmbed;
                var29 = 74;
                var29 = var34[var29];
                var29 = var33.bind(var4)(var29);
                var29 = var31.bind(var32)(var29);
                var0.swipeToEditIconUrl = var29;
                var0.referralTrialOfferInfo = var27;
                if (var26) {
                    _fun53994_ip = 6890;
                    continue _fun53994
                }
            case 6884:
                var26 = new Array(0);
                _fun53994_ip = 6922;
                continue _fun53994;
            case 6890:
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 75;
                var27 = var31[var27];
                var29 = var29.bind(var4)(var27);
                var27 = var29.createPostPreviewEmbeds;
                var26 = var27.bind(var29)(var1, var30);
            case 6922:
                var0.postPreviewEmbeds = var26;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var29 = 24;
                var30 = var27[var29];
                var30 = var26.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var27[var29];
                var29 = var26.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29["2aXnfa"];
                var29 = var30.bind(var31)(var29);
                var0.obscureLearnMoreLabel = var29;
                var29 = 76;
                var29 = var27[var29];
                var30 = var26.bind(var4)(var29);
                var29 = var30.createSafetyPolicyNoticeEmbed;
                var29 = var29.bind(var30)(var1);
                var0.safetyPolicyNoticeEmbed = var29;
                var0.pollData = var28;
                var0.sharedClientTheme = var23;
                var23 = 77;
                var23 = var27[var23];
                var28 = var26.bind(var4)(var23);
                var23 = var28.createSafetySystemNotificationEmbed;
                var23 = var23.bind(var28)(var1);
                var0.safetySystemNotificationEmbed = var23;
                var23 = 78;
                var23 = var27[var23];
                var28 = var26.bind(var4)(var23);
                var27 = var28.createCtaButton;
                var26 = var1.id;
                var23 = var1.channel_id;
                var23 = var27.bind(var28)(var26, var23, var24);
                var0.ctaButton = var23;
                var23 = undefined;
                if (!var25) {
                    _fun53994_ip = 7116;
                    continue _fun53994
                }
            case 7110:
                var23 = var24.embedBackgroundColor;
            case 7116:
                var0.audioAttachmentBackgroundColor = var23;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var23 = 79;
                var23 = var25[var23];
                var24 = var24.bind(var4)(var23);
                var23 = var24.createMessageAccessibilityActions;
                var23 = var23.bind(var24)(var1, var20);
                var0.accessibilityActions = var23;
                var0.clanTagGuildId = var22;
                var0.clanTag = var19;
                var0.clanBadgeUrl = var14;
                var0.isFirst = var11;
                var0.gameApplicationId = var3;
                var3 = var16 == var20;
                var14 = undefined;
                if (var3) {
                    _fun53994_ip = 7205;
                    continue _fun53994
                }
            case 7200:
                var14 = var20.type;
            case 7205:
                var3 = _closure1_slot26;
                var3 = var3.GUILD_ANNOUNCEMENT;
                var3 = var14 === var3;
                var0.isAnnouncementChannel = var3;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var3 = 80;
                var3 = var19[var3];
                var19 = var14.bind(var4)(var3);
                var14 = var19.createDisplayNameStylesMobile;
                var3 = var1.author;
                var3 = var14.bind(var19)(var3, var21);
                var0.displayNameStyles = var3;
                return var0;
            case 7271:
                var3 = var1.type;
                var0 = _closure1_slot23;
                var0 = var0.THREAD_CREATED;
                if (!(var3 !== var0)) {
                    _fun53994_ip = 7368;
                    continue _fun53994
                }
            case 7290:
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 36;
                var0 = var14[var0];
                var14 = var3.bind(var4)(var0);
                var3 = var14.createSystemMessageContent;
                var0 = {};
                var0.message = var1;
                var0.theme = var18;
                var0.reactions = var17;
                var0.roleStyle = var12;
                var19 = var16 == var20;
                var16 = undefined;
                if (var19) {
                    _fun53994_ip = 7356;
                    continue _fun53994
                }
            case 7346:
                var19 = var20.isForumPost;
                var16 = var19.bind(var20)();
            case 7356:
                var0.isForumPost = var16;
                var0 = var3.bind(var14)(var0);
                _fun53994_ip = 7462;
                continue _fun53994;
            case 7368:
                var3 = {};
                var14 = _closure1_slot29;
                var104 = undefined;
                var103 = var1;
                var102 = var12;
                var101 = var5;
                var100 = var15;
                var99 = var6;
                var14 = var104[var14](var103, var102, var101, var100, var99, var98);
                var3.threadEmbed = var14;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 36;
                var14 = var16[var14];
                var16 = var15.bind(var4)(var14);
                var15 = var16.createSystemMessageContent;
                var14 = {};
                var14.message = var1;
                var14.theme = var18;
                var14.reactions = var17;
                var14.roleStyle = var12;
                var102 = var15.bind(var16)(var14);
                var103 = var3;
                var14 = copyDataProperties(var103, var102);
                var0 = var3;
            case 7462:
                return var0;
            case 7464:
                var0 = {};
                var3 = _closure1_slot31;
                var2 = {};
                var2.message = var13;
                var2.roleStyle = var12;
                var2.isFirst = var11;
                var2.isEditing = var10;
                var2.canShowImages = var9;
                var2.isSystemDM = var8;
                var2.isInlineReplyPreview = var5;
                var5 = {};
                var103 = var5;
                var102 = var6;
                var6 = copyDataProperties(var103, var102);
                var8 = false;
                var6 = 'renderThreadEmbeds';
                var5[var6] = var8;
                var6 = 'renderReactions';
                var5[var6] = var8;
                var6 = 'shouldDisableInteractiveComponents';
                var5[var6] = var7;
                var2.options = var5;
                var102 = var3.bind(var4)(var2);
                var103 = var0;
                var2 = copyDataProperties(var103, var102);
                var2 = var1.id;
                var1 = 'id';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot31 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReferencedMessageState;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReferencedMessageRowState;
    var _closure1_slot22 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MessageTypes;
    var _closure1_slot23 = var7;
    var7 = var3.MessageStates;
    var _closure1_slot24 = var7;
    var7 = var3.MessageFlags;
    var _closure1_slot25 = var7;
    var3 = var3.ChannelTypes;
    var _closure1_slot26 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTagBadgeSize;
    var _closure1_slot27 = var3;
    var3 = {};
    var3.referralTrialOfferDataUpdated = var0;
    var3.referralTrialOfferData = var0;
    var _closure1_slot28 = var3;
    var3 = 81;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 3445, 3200, 4732, 6517, 6520, 3083, 6632, 4264, 3084, 6468, 3187, 1216, 1372, 1672, 3091, 6609, 6512, 660, 6634, 6636, 21, 6657, 1234, 6640, 6658, 6659, 3990, 1384, 6546, 6663, 4784, 6664, 6666, 6668, 6669, 6767, 6768, 4266, 4252, 6779, 6745, 6782, 3974, 1418, 1417, 5569, 5449, 6729, 6785, 1304, 6786, 3071, 4518, 1348, 6791, 6793, 3123, 6795, 6803, 6804, 6672, 6805, 6806, 6809, 6812, 6815, 6852, 12029, 12053, 12055, 12076, 6674, 6675, 12077, 12080, 12081, 12082, 11568, 12083, 2]);