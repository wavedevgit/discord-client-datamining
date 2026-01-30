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
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: createThreadEmbed, environment: var6
        _fun53865: for (var _fun53865_ip = 0;;) switch (_fun53865_ip) {
            case 0:
                var0 = arg0;
                var6 = arg3;
                var1 = arg2;
                if (var1) {
                    _fun53865_ip = 850;
                    continue _fun53865
                }
            case 15:
                var2 = var0.hasFlag;
                var1 = _closure1_slot25;
                var1 = var1.HAS_THREAD;
                var1 = var2.bind(var0)(var1);
                if (!var1) {
                    _fun53865_ip = 850;
                    continue _fun53865
                }
            case 45:
                var1 = null;
                if (!(var1 != var6)) {
                    _fun53865_ip = 850;
                    continue _fun53865
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
                    _fun53865_ip = 216;
                    continue _fun53865
                }
            case 210:
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun53865_ip = 311;
                    continue _fun53865
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
                _fun53865_ip = 848;
                continue _fun53865;
            case 311:
                var2 = var6.threadMetadata;
                if (!(var1 != var2)) {
                    _fun53865_ip = 333;
                    continue _fun53865
                }
            case 321:
                var2 = var2.archived;
                if (var2) {
                    _fun53865_ip = 708;
                    continue _fun53865
                }
            case 333:
                if (!(var1 != var8)) {
                    _fun53865_ip = 612;
                    continue _fun53865
                }
            case 340:
                var2 = var8.type;
                var1 = _closure1_slot23;
                var1 = var1.CHANNEL_NAME_CHANGE;
                if (!(var2 !== var1)) {
                    _fun53865_ip = 612;
                    continue _fun53865
                }
            case 362:
                var2 = var8.type;
                var1 = _closure1_slot23;
                var1 = var1.THREAD_STARTER_MESSAGE;
                if (!(var2 !== var1)) {
                    _fun53865_ip = 612;
                    continue _fun53865
                }
            case 384:
                var1 = var8.blocked;
                if (var1) {
                    _fun53865_ip = 497;
                    continue _fun53865
                }
            case 393:
                var1 = var8.ignored;
                if (var1) {
                    _fun53865_ip = 497;
                    continue _fun53865
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
                _fun53865_ip = 610;
                continue _fun53865;
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
                    _fun53865_ip = 584;
                    continue _fun53865
                }
            case 571:
                var8 = var9["G7p6v/"];
                var8 = var10.bind(var11)(var8);
                _fun53865_ip = 595;
                continue _fun53865;
            case 584:
                var9 = var9.XAkOo2;
                var8 = var10.bind(var11)(var9);
            case 595:
                var2.messagePreviewString = var8;
                var8 = false;
                var2.archived = var8;
                var1 = var2;
            case 610:
                _fun53865_ip = 703;
                continue _fun53865;
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
                _fun53865_ip = 845;
                continue _fun53865;
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
    var0 = function(arg0, arg1) { // Original name: getForumPostActions, environment: var6
        _fun53866: for (var _fun53866_ip = 0;;) switch (_fun53866_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.id;
                var0 = var2.channel_id;
                if (!(var3 === var0)) {
                    _fun53866_ip = 57;
                    continue _fun53866
                }
            case 20:
                var0 = var1.getGuildId;
                var4 = var0.bind(var1)();
                var9 = null;
                if (!(var9 != var4)) {
                    _fun53866_ip = 61;
                    continue _fun53866
                }
            case 36:
                var3 = _closure1_slot10;
                var0 = var3.isLurking;
                var0 = var0.bind(var3)(var4);
                if (!var0) {
                    _fun53866_ip = 61;
                    continue _fun53866
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
                    _fun53866_ip = 234;
                    continue _fun53866
                }
            case 111:
                var8 = _closure1_slot18;
                var7 = var8.getChannel;
                var3 = var1.parent_id;
                var3 = var7.bind(var8)(var3);
                var7 = var9 == var3;
                var10 = undefined;
                if (var7) {
                    _fun53866_ip = 146;
                    continue _fun53866
                }
            case 140:
                var10 = var3.defaultReactionEmoji;
            case 146:
                var7 = var9 == var10;
                var3 = undefined;
                if (var7) {
                    _fun53866_ip = 161;
                    continue _fun53866
                }
            case 155:
                var3 = var10.emojiId;
            case 161:
                var3 = var9 != var3;
                var9 = null;
                if (!var3) {
                    _fun53866_ip = 191;
                    continue _fun53866
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
    var1 = function(arg0) { // Original name: createMessageContent, environment: var6
        _fun53867: for (var _fun53867_ip = 0;;) switch (_fun53867_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var91 = var0.messageForward;
                var12 = var0.roleStyle;
                var11 = var0.isFirst;
                var10 = var0.isEditing;
                var9 = var0.canShowImages;
                var8 = var0.isSystemDM;
                var5 = var0.isInlineReplyPreview;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun53867_ip = 58;
                    continue _fun53867
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
                var77 = var6.constrainedWidth;
                var87 = var6.ignoreMentioned;
                var76 = var6.animateEmoji;
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
                    _fun53867_ip = 268;
                    continue _fun53867
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
                    _fun53867_ip = 312;
                    continue _fun53867
                }
            case 309:
                var26 = var20;
            case 312:
                if (!var26) {
                    _fun53867_ip = 334;
                    continue _fun53867
                }
            case 315:
                var21 = var1.type;
                var20 = _closure1_slot23;
                var20 = var20.CUSTOM_GIFT;
                var26 = var21 !== var20;
            case 334:
                var30 = var58;
                if (!var58) {
                    _fun53867_ip = 343;
                    continue _fun53867
                }
            case 340:
                var30 = var17;
            case 343:
                var36 = var58;
                if (!var36) {
                    _fun53867_ip = 352;
                    continue _fun53867
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
                    _fun53867_ip = 445;
                    continue _fun53867
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
                var71 = var21.bind(var22)(var17, var23);
                var61 = var17;
                if (!(var16 == var91)) {
                    _fun53867_ip = 526;
                    continue _fun53867
                }
            case 495:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 33;
                var17 = var22[var17];
                var21 = var21.bind(var4)(var17);
                var17 = var21.maybeCreateSingleForwardForMessage;
                var91 = var17.bind(var21)(var1);
            case 526:
                var38 = var1;
                if (!(var16 != var91)) {
                    _fun53867_ip = 544;
                    continue _fun53867
                }
            case 533:
                var17 = var91.messageSnapshot;
                var38 = var17.message;
            case 544:
                var17 = new Array(0);
                if (!var13) {
                    _fun53867_ip = 594;
                    continue _fun53867
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
                var13.animateEmoji = var76;
                var17 = var21.bind(var4)(var13);
            case 594:
                var22 = var1.type;
                var13 = _closure1_slot23;
                var21 = var13.THREAD_STARTER_MESSAGE;
                var13 = null;
                if (!(var22 === var21)) {
                    _fun53867_ip = 665;
                    continue _fun53867
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
                    _fun53867_ip = 662;
                    continue _fun53867
                }
            case 657:
                var21 = var22.message;
            case 662:
                var13 = var21;
            case 665:
                if (!(var16 == var13)) {
                    _fun53867_ip = 7337;
                    continue _fun53867
                }
            case 672:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 35;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.bind(var4)(var1);
                if (var21) {
                    _fun53867_ip = 7144;
                    continue _fun53867
                }
            case 703:
                var64 = !var11;
                if (var64) {
                    _fun53867_ip = 712;
                    continue _fun53867
                }
            case 709:
                var64 = var49;
            case 712:
                var68 = var1.author;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var21 = 37;
                var21 = var23[var21];
                var23 = var22.bind(var4)(var21);
                var22 = var23.isMessageNewerThanImprovedMarkdownEpoch;
                var25 = var1.editedTimestamp;
                if (!(var16 == var25)) {
                    _fun53867_ip = 760;
                    continue _fun53867
                }
            case 754:
                var25 = var1.timestamp;
            case 760:
                var21 = var25.valueOf;
                var21 = var21.bind(var25)();
                var28 = var22.bind(var23)(var21);
                var21 = var38.content;
                if (!(var16 != var21)) {
                    _fun53867_ip = 796;
                    continue _fun53867
                }
            case 783:
                var22 = var38.content;
                var21 = '';
                if (!(var21 === var22)) {
                    _fun53867_ip = 818;
                    continue _fun53867
                }
            case 796:
                var21 = {
                    'content': null,
                    'hasSpoilerEmbeds': false,
                    'hasBailedAst': false
                };
                var21.content = var4;
                _fun53867_ip = 905;
                continue _fun53867;
            case 818:
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 38;
                var22 = var25[var22];
                var25 = var23.bind(var4)(var22);
                var23 = var25.parseMessageMarkup;
                if (var33) {
                    _fun53867_ip = 859;
                    continue _fun53867
                }
            case 847:
                var22 = var26;
                if (!var26) {
                    _fun53867_ip = 856;
                    continue _fun53867
                }
            case 853:
                var22 = var30;
            case 856:
                var33 = var22;
            case 859:
                var22 = var16 != var15;
                if (!var22) {
                    _fun53867_ip = 877;
                    continue _fun53867
                }
            case 866:
                var34 = var1.isFirstMessageInForumPost;
                var22 = var34.bind(var1)(var15);
            case 877:
                var103 = var25;
                var102 = var1;
                var101 = var38;
                var100 = var33;
                var99 = var5;
                var98 = var22;
                var97 = var28;
                var96 = var28;
                var21 = var103[var23](var102, var101, var100, var99, var98, var97, var96, var95);
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
                    _fun53867_ip = 981;
                    continue _fun53867
                }
            case 978:
                var26 = !var21;
            case 981:
                var22 = undefined;
                if (!var26) {
                    _fun53867_ip = 1113;
                    continue _fun53867
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
                var86 = var21.tagText;
                var85 = var21.tagVerified;
                var84 = var21.tagTextColor;
                var83 = var21.tagBackgroundColor;
                var82 = var21.tagType;
                var81 = var21.tagIconUrl;
                var80 = var21.opTagText;
                var79 = var21.opTagTextColor;
                var78 = var21.opTagBackgroundColor;
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
                    _fun53867_ip = 1267;
                    continue _fun53867
                }
            case 1257:
                var27 = var1.isCommandType;
                var21 = var27.bind(var1)();
            case 1267:
                var27 = var22;
                if (var21) {
                    _fun53867_ip = 1338;
                    continue _fun53867
                }
            case 1273:
                var21 = var22;
                if (!(var16 == var22)) {
                    _fun53867_ip = 1284;
                    continue _fun53867
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
                    _fun53867_ip = 1437;
                    continue _fun53867
                }
            case 1365:
                var21 = var27;
                if (!(var16 == var27)) {
                    _fun53867_ip = 1376;
                    continue _fun53867
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
                    _fun53867_ip = 1569;
                    continue _fun53867
                }
            case 1526:
                var21 = var1.author;
                var21 = var21.avatar;
                if (!(var16 == var21)) {
                    _fun53867_ip = 1569;
                    continue _fun53867
                }
            case 1542:
                if (!(var16 == var41)) {
                    _fun53867_ip = 1569;
                    continue _fun53867
                }
            case 1546:
                var33 = var1.application;
                var34 = var16 == var33;
                var21 = undefined;
                if (var34) {
                    _fun53867_ip = 1565;
                    continue _fun53867
                }
            case 1560:
                var21 = var33.icon;
            case 1565:
                if (!(var16 == var21)) {
                    _fun53867_ip = 1644;
                    continue _fun53867
                }
            case 1569:
                if (!(var16 != var41)) {
                    _fun53867_ip = 1577;
                    continue _fun53867
                }
            case 1573:
                if (!(var16 == var61)) {
                    _fun53867_ip = 1590;
                    continue _fun53867
                }
            case 1577:
                var21 = var68.getAvatarSource;
                var21 = var21.bind(var68)(var4);
                _fun53867_ip = 1642;
                continue _fun53867;
            case 1590:
                var34 = _closure1_slot1;
                var39 = _closure1_slot2;
                var33 = 46;
                var33 = var39[var33];
                var39 = var34.bind(var4)(var33);
                var34 = var39.getGuildMemberAvatarSource;
                var33 = {};
                var42 = var68.id;
                var33.userId = var42;
                var33.avatar = var41;
                var33.guildId = var61;
                var21 = var34.bind(var39)(var33, var68);
            case 1642:
                _fun53867_ip = 1721;
                continue _fun53867;
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
                var75 = var22.bind(var27)(var21);
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 46;
                var21 = var27[var21];
                var27 = var22.bind(var4)(var21);
                var22 = var27.getAvatarDecorationURL;
                var21 = {};
                if (!(var16 == var31)) {
                    _fun53867_ip = 1764;
                    continue _fun53867
                }
            case 1758:
                var31 = var68.avatarDecoration;
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
                var74 = var22.bind(var27)(var21);
                var21 = var16 != var28;
                var67 = undefined;
                if (!var21) {
                    _fun53867_ip = 1900;
                    continue _fun53867
                }
            case 1842:
                var21 = var16 != var61;
                var67 = undefined;
                if (!var21) {
                    _fun53867_ip = 1900;
                    continue _fun53867
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
                var67 = var22.bind(var27)(var21);
            case 1900:
                var22 = var1.hasFlag;
                var21 = _closure1_slot25;
                var21 = var21.SOURCE_MESSAGE_DELETED;
                var21 = var22.bind(var1)(var21);
                if (!var21) {
                    _fun53867_ip = 1981;
                    continue _fun53867
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
                var72 = var21.nick;
                var70 = var21.colorString;
                var73 = var21.colorStrings;
                var22 = var1.type;
                var21 = _closure1_slot23;
                var21 = var21.INTERACTION_PREMIUM_UPSELL;
                if (!(var22 === var21)) {
                    _fun53867_ip = 2111;
                    continue _fun53867
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
                var21.appName = var72;
                var23 = var27.bind(var28)(var22, var21);
            case 2111:
                var22 = var1.type;
                var21 = _closure1_slot23;
                var21 = var21.REPLY;
                var92 = undefined;
                if (!(var22 === var21)) {
                    _fun53867_ip = 3679;
                    continue _fun53867
                }
            case 2135:
                var92 = undefined;
                if (!var19) {
                    _fun53867_ip = 3679;
                    continue _fun53867
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
                    _fun53867_ip = 2421;
                    continue _fun53867
                }
            case 2186:
                var21 = _closure1_slot13;
                var21 = var21.NOT_LOADED;
                if (!(var21 !== var22)) {
                    _fun53867_ip = 2338;
                    continue _fun53867
                }
            case 2203:
                var21 = _closure1_slot13;
                var21 = var21.DELETED;
                if (!(var21 !== var22)) {
                    _fun53867_ip = 2255;
                    continue _fun53867
                }
            case 2217:
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 51;
                var21 = var27[var21];
                var22 = var22.bind(var4)(var21);
                var21 = var22.assertNever;
                var21 = var21.bind(var22)(var19);
                var92 = undefined;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                var92 = var21;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                var92 = var21;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                    _fun53867_ip = 3601;
                    continue _fun53867
                }
            case 2478:
                var22 = _closure1_slot20;
                var21 = var22.isIgnoredForMessage;
                var21 = var21.bind(var22)(var19);
                if (var21) {
                    _fun53867_ip = 3521;
                    continue _fun53867
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
                var102 = var28;
                var101 = var6;
                var31 = copyDataProperties(var102, var101);
                var31 = 'renderReplies';
                var28[var31] = var33;
                var21.options = var28;
                var22 = var22.bind(var4)(var21);
                if (!(var16 != var22)) {
                    _fun53867_ip = 3438;
                    continue _fun53867
                }
            case 2574:
                var21 = 'username';
                var21 = var21 in var22;
                if (!var21) {
                    _fun53867_ip = 2757;
                    continue _fun53867
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
                    _fun53867_ip = 2643;
                    continue _fun53867
                }
            case 2632:
                var21 = var19.author;
                var28 = var21.username;
            case 2643:
                var31 = var16 != var28;
                var21 = undefined;
                if (!var31) {
                    _fun53867_ip = 2655;
                    continue _fun53867
                }
            case 2652:
                var21 = var28;
            case 2655:
                var22.username = var21;
                if (var64) {
                    _fun53867_ip = 2697;
                    continue _fun53867
                }
            case 2664:
                var28 = _closure1_slot3;
                var31 = var16 != var30;
                var21 = undefined;
                if (!var31) {
                    _fun53867_ip = 2680;
                    continue _fun53867
                }
            case 2677:
                var21 = var30;
            case 2680:
                var21 = var28.bind(var4)(var21);
                if (!(var16 == var21)) {
                    _fun53867_ip = 2695;
                    continue _fun53867
                }
            case 2689:
                var21 = var22.colorString;
            case 2695:
                _fun53867_ip = 2703;
                continue _fun53867;
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
                    _fun53867_ip = 2757;
                    continue _fun53867
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
                    _fun53867_ip = 2777;
                    continue _fun53867
                }
            case 2766:
                var27 = var27.messageSnapshot;
                var21 = var27.message;
            case 2777:
                var30 = var19;
                if (!(var16 != var21)) {
                    _fun53867_ip = 2787;
                    continue _fun53867
                }
            case 2784:
                var30 = var21;
            case 2787:
                var21 = 'stickers';
                var21 = var21 in var30;
                if (var21) {
                    _fun53867_ip = 2804;
                    continue _fun53867
                }
            case 2798:
                var21 = new Array(0);
                _fun53867_ip = 2835;
                continue _fun53867;
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
                    _fun53867_ip = 3314;
                    continue _fun53867
                }
            case 2849:
                var21 = 'interaction';
                var21 = var21 in var30;
                if (!var21) {
                    _fun53867_ip = 2886;
                    continue _fun53867
                }
            case 2860:
                var21 = var30.interaction;
                if (!(var16 != var21)) {
                    _fun53867_ip = 2886;
                    continue _fun53867
                }
            case 2870:
                var28 = var30.content;
                var21 = '';
                if (!(var21 !== var28)) {
                    _fun53867_ip = 3257;
                    continue _fun53867
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
                    _fun53867_ip = 3200;
                    continue _fun53867
                }
            case 2939:
                var28 = var30.type;
                var21 = _closure1_slot23;
                var21 = var21.POLL_RESULT;
                if (!(var28 !== var21)) {
                    _fun53867_ip = 3167;
                    continue _fun53867
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
                    _fun53867_ip = 3110;
                    continue _fun53867
                }
            case 3008:
                var21 = var30.embeds;
                var21 = var21.length;
                if (!(!(var21 > var27))) {
                    _fun53867_ip = 3053;
                    continue _fun53867
                }
            case 3023:
                var21 = var30.attachments;
                var21 = var21.length;
                if (!(!(var21 > var27))) {
                    _fun53867_ip = 3053;
                    continue _fun53867
                }
            case 3038:
                var28 = var30.content;
                var27 = '';
                var21 = null;
                if (!(var27 === var28)) {
                    _fun53867_ip = 3108;
                    continue _fun53867
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
                _fun53867_ip = 3165;
                continue _fun53867;
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
                _fun53867_ip = 3198;
                continue _fun53867;
            case 3167:
                var28 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 30;
                var27 = var31[var27];
                var28 = var28.bind(var4)(var27);
                var27 = var28.getPollResultsReplyPreviewMobile;
                var21 = var27.bind(var28)(var30);
            case 3198:
                _fun53867_ip = 3255;
                continue _fun53867;
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
                _fun53867_ip = 3312;
                continue _fun53867;
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
                _fun53867_ip = 3369;
                continue _fun53867;
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
                    _fun53867_ip = 3394;
                    continue _fun53867
                }
            case 3388:
                var22.content = var21;
            case 3394:
                var19 = {};
                var27 = _closure1_slot22;
                var27 = var27.LOADED;
                var19.state = var27;
                var19.message = var22;
                var92 = var19;
                if (!(var16 != var21)) {
                    _fun53867_ip = 3679;
                    continue _fun53867
                }
            case 3424:
                var19.systemContent = var21;
                var92 = var19;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                var92 = var19;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                var92 = var19;
                _fun53867_ip = 3679;
                continue _fun53867;
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
                var92 = var19;
            case 3679:
                var89 = undefined;
                if (!var14) {
                    _fun53867_ip = 3709;
                    continue _fun53867
                }
            case 3684:
                var14 = _closure1_slot29;
                var103 = undefined;
                var102 = var1;
                var101 = var12;
                var100 = var5;
                var99 = var15;
                var98 = var6;
                var89 = var103[var14](var102, var101, var100, var99, var98, var97);
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
                    _fun53867_ip = 3786;
                    continue _fun53867
                }
            case 3765:
                var22 = _closure1_slot19;
                var21 = var22.getMember;
                var19 = var68.id;
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
                    _fun53867_ip = 3855;
                    continue _fun53867
                }
            case 3849:
                var14 = var20.parent_id;
            case 3855:
                var27 = var20;
                if (!(var16 != var14)) {
                    _fun53867_ip = 3905;
                    continue _fun53867
                }
            case 3862:
                var27 = var20;
                if (!(var16 != var20)) {
                    _fun53867_ip = 3905;
                    continue _fun53867
                }
            case 3869:
                var14 = var20.isThread;
                var14 = var14.bind(var20)();
                var27 = var20;
                if (!var14) {
                    _fun53867_ip = 3905;
                    continue _fun53867
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
                var69 = var19.bind(var22)(var14);
                var14 = var38.attachments;
                var14 = var14.length;
                var47 = 0;
                var41 = var47 !== var14;
                var14 = var38.embeds;
                var14 = var14.length;
                var42 = var47 !== var14;
                var14 = var35;
                if (!var35) {
                    _fun53867_ip = 4005;
                    continue _fun53867
                }
            case 3990:
                var19 = var1.attachments;
                var19 = var19.length;
                var14 = var47 === var19;
            case 4005:
                if (!var14) {
                    _fun53867_ip = 4012;
                    continue _fun53867
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
                    _fun53867_ip = 4182;
                    continue _fun53867
                }
            case 4058:
                if (!var40) {
                    _fun53867_ip = 4243;
                    continue _fun53867
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
                _fun53867_ip = 4243;
                continue _fun53867;
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
                    _fun53867_ip = 4265;
                    continue _fun53867
                }
            case 4246:
                var19 = var1.state;
                var14 = _closure1_slot24;
                var14 = var14.SEND_FAILED;
                if (!(var19 === var14)) {
                    _fun53867_ip = 4305;
                    continue _fun53867
                }
            case 4265:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 58;
                var14 = var22[var14];
                var22 = var19.bind(var4)(var14);
                var19 = var22.calendarFormat;
                var14 = var1.timestamp;
                var66 = var19.bind(var22)(var14, var7);
                _fun53867_ip = 4362;
                continue _fun53867;
            case 4305:
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
                var66 = var19.bind(var22)(var14);
            case 4362:
                var19 = _closure1_slot17;
                var14 = var19.getId;
                var31 = var14.bind(var19)();
                var14 = var1.isUnsupported;
                var62 = var23;
                if (!var14) {
                    _fun53867_ip = 4445;
                    continue _fun53867
                }
            case 4388:
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
            case 4445:
                var14 = var1.isPoll;
                var14 = var14.bind(var1)();
                var14 = !var14;
                if (var14) {
                    _fun53867_ip = 4473;
                    continue _fun53867
                }
            case 4461:
                var19 = !var5;
                if (!var19) {
                    _fun53867_ip = 4470;
                    continue _fun53867
                }
            case 4467:
                var19 = var3;
            case 4470:
                var14 = var19;
            case 4473:
                if (var14) {
                    _fun53867_ip = 4494;
                    continue _fun53867
                }
            case 4476:
                var19 = var16 != var23;
                if (!var19) {
                    _fun53867_ip = 4491;
                    continue _fun53867
                }
            case 4483:
                var22 = '';
                var19 = var22 !== var23;
            case 4491:
                var14 = var19;
            case 4494:
                if (var14) {
                    _fun53867_ip = 4528;
                    continue _fun53867
                }
            case 4497:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 30;
                var14 = var22[var14];
                var19 = var19.bind(var4)(var14);
                var14 = var19.getPollReplyPreview;
                var62 = var14.bind(var19)(var1);
            case 4528:
                var28 = undefined;
                if (!var3) {
                    _fun53867_ip = 4572;
                    continue _fun53867
                }
            case 4533:
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var3 = 59;
                var3 = var19[var3];
                var14 = var14.bind(var4)(var3);
                var3 = {};
                var3.theme = var18;
                var3.animateEmoji = var76;
                var28 = var14.bind(var4)(var1, var4, var3);
            case 4572:
                var23 = undefined;
                if (!var0) {
                    _fun53867_ip = 4610;
                    continue _fun53867
                }
            case 4577:
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 60;
                var0 = var14[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.formatSharedClientThemeData;
                var23 = var0.bind(var3)(var1, var75, var72);
            case 4610:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var93 = 61;
                var0 = var0[var93];
                var19 = var3.bind(var4)(var0);
                var14 = var19.shouldDisplayGuildTag;
                var3 = var68.id;
                var22 = var16 != var61;
                var0 = undefined;
                if (!var22) {
                    _fun53867_ip = 4653;
                    continue _fun53867
                }
            case 4650:
                var0 = var61;
            case 4653:
                var0 = var14.bind(var19)(var3, var0);
                var22 = undefined;
                var19 = undefined;
                var14 = undefined;
                if (!var0) {
                    _fun53867_ip = 4786;
                    continue _fun53867
                }
            case 4668:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var93];
                var25 = var3.bind(var4)(var0);
                var3 = var25.getUserPrimaryGuild;
                var0 = var68.primaryGuild;
                var27 = var3.bind(var25)(var0);
                var25 = var27.guildId;
                var3 = var27.tag;
                var0 = var27.guildId;
                var88 = var16 != var0;
                var0 = undefined;
                if (!var88) {
                    _fun53867_ip = 4777;
                    continue _fun53867
                }
            case 4726:
                var90 = _closure1_slot0;
                var88 = _closure1_slot2;
                var88 = var88[var93];
                var94 = var90.bind(var4)(var88);
                var93 = var94.getGuildTagBadgeUrl;
                var90 = var27.guildId;
                var88 = var27.badge;
                var27 = _closure1_slot27;
                var27 = var27.SIZE_12;
                var0 = var93.bind(var94)(var90, var88, var27);
            case 4777:
                var14 = var0;
                var22 = var25;
                var19 = var3;
            case 4786:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var94 = 29;
                var0 = var0[var94];
                var27 = var3.bind(var4)(var0);
                var25 = var27.hasFlag;
                var0 = var1;
                if (!(var16 != var38)) {
                    _fun53867_ip = 4822;
                    continue _fun53867
                }
            case 4819:
                var0 = var38;
            case 4822:
                var3 = var0.flags;
                var0 = _closure1_slot25;
                var0 = var0.IS_VOICE_MESSAGE;
                var25 = var25.bind(var27)(var3, var0);
                var0 = {};
                var0.currentUserId = var31;
                var0.message = var1;
                var0.theme = var18;
                var93 = var0.currentUserId;
                var90 = var0.message;
                var88 = var0.theme;
                var0 = var90.referralTrialOfferId;
                var27 = var90.type;
                var3 = _closure1_slot23;
                var3 = var3.PREMIUM_REFERRAL;
                if (!(var27 === var3)) {
                    _fun53867_ip = 4947;
                    continue _fun53867
                }
            case 4901:
                if (!(var16 != var0)) {
                    _fun53867_ip = 4947;
                    continue _fun53867
                }
            case 4905:
                var0 = {};
                var27 = _closure1_slot0;
                var95 = _closure1_slot2;
                var3 = 21;
                var3 = var95[var3];
                var27 = var27.bind(var4)(var3);
                var3 = var27.createReferralTrialEmbedRedeemable;
                var3 = var3.bind(var27)(var90, var88, var93);
                var0.referralTrialOfferDataUpdated = var3;
                _fun53867_ip = 4951;
                continue _fun53867;
            case 4947:
                var0 = _closure1_slot28;
            case 4951:
                var27 = var0.referralTrialOfferDataUpdated;
                var90 = _closure1_slot5;
                var3 = var90.getApplication;
                var93 = var1.applicationId;
                var95 = var16 != var93;
                var88 = '';
                var0 = var88;
                if (!var95) {
                    _fun53867_ip = 4989;
                    continue _fun53867
                }
            case 4986:
                var0 = var93;
            case 4989:
                var0 = var3.bind(var90)(var0);
                var90 = var16 != var0;
                if (!var90) {
                    _fun53867_ip = 5045;
                    continue _fun53867
                }
            case 5001:
                var93 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var94];
                var95 = var93.bind(var4)(var3);
                var94 = var95.hasFlag;
                var93 = var1.flags;
                var3 = _closure1_slot25;
                var3 = var3.SENT_BY_SOCIAL_LAYER_INTEGRATION;
                var90 = var94.bind(var95)(var93, var3);
            case 5045:
                var3 = undefined;
                if (!var90) {
                    _fun53867_ip = 5055;
                    continue _fun53867
                }
            case 5050:
                var3 = var0.id;
            case 5055:
                var0 = {};
                var90 = var1.id;
                var0.id = var90;
                var90 = var1.channel_id;
                var0.channelId = var90;
                var93 = var16 != var61;
                var90 = undefined;
                if (!var93) {
                    _fun53867_ip = 5087;
                    continue _fun53867
                }
            case 5084:
                var90 = var61;
            case 5087:
                var0.guildId = var90;
                var90 = var1;
                if (!(var16 != var38)) {
                    _fun53867_ip = 5101;
                    continue _fun53867
                }
            case 5098:
                var90 = var38;
            case 5101:
                var90 = var90.flags;
                var0.flags = var90;
                var90 = var1.type;
                var0.type = var90;
                var90 = var1.nonce;
                if (!(var16 != var90)) {
                    _fun53867_ip = 5146;
                    continue _fun53867
                }
            case 5129:
                var90 = var1.nonce;
                var93 = 'string';
                var90 = typeof var90;
                if (!(var93 === var90)) {
                    _fun53867_ip = 5154;
                    continue _fun53867
                }
            case 5146:
                var90 = var1.nonce;
                _fun53867_ip = 5173;
                continue _fun53867;
            case 5154:
                var93 = global;
                var94 = var93.String;
                var93 = var1.nonce;
                var90 = var94.bind(var4)(var93);
            case 5173:
                var0.nonce = var90;
                var90 = var1.state;
                var0.state = var90;
                var0.reactions = var17;
                var90 = undefined;
                if (var49) {
                    _fun53867_ip = 5200;
                    continue _fun53867
                }
            case 5197:
                var90 = var92;
            case 5200:
                var0.referencedMessage = var90;
                var0.threadEmbed = var89;
                var90 = var16 != var91;
                var89 = undefined;
                if (!var90) {
                    _fun53867_ip = 5231;
                    continue _fun53867
                }
            case 5219:
                var90 = var91.getForwardInfo;
                var89 = var90.bind(var91)();
            case 5231:
                var0.forwardInfo = var89;
                var87 = !var87;
                if (!var87) {
                    _fun53867_ip = 5250;
                    continue _fun53867
                }
            case 5244:
                var87 = var1.mentioned;
            case 5250:
                var0.mentioned = var87;
                var87 = var1.isEdited;
                var89 = var87.bind(var1)();
                var87 = var88;
                if (!var89) {
                    _fun53867_ip = 5336;
                    continue _fun53867
                }
            case 5273:
                var87 = var88;
                if (var49) {
                    _fun53867_ip = 5336;
                    continue _fun53867
                }
            case 5279:
                var91 = _closure1_slot0;
                var92 = _closure1_slot2;
                var88 = 24;
                var89 = var92[var88];
                var89 = var91.bind(var4)(var89);
                var90 = var89.intl;
                var89 = var90.string;
                var88 = var92[var88];
                var88 = var91.bind(var4)(var88);
                var88 = var88.t;
                var88 = var88.C8sXIM;
                var87 = var89.bind(var90)(var88);
            case 5336:
                var0.edited = var87;
                var87 = var24.editedColor;
                var0.editedColor = var87;
                var87 = var1.isUnsupported;
                if (var87) {
                    _fun53867_ip = 5369;
                    continue _fun53867
                }
            case 5361:
                var87 = var24.textColor;
                _fun53867_ip = 5375;
                continue _fun53867;
            case 5369:
                var87 = var24.unsupportedColor;
            case 5375:
                var0.textColor = var87;
                var87 = var24.linkColor;
                var0.linkColor = var87;
                var0.tagText = var86;
                var0.tagVerified = var85;
                var0.tagTextColor = var84;
                var0.tagBackgroundColor = var83;
                var0.tagType = var82;
                var0.tagIconUrl = var81;
                var0.opTagText = var80;
                var0.opTagTextColor = var79;
                var0.opTagBackgroundColor = var78;
                var0.constrainedWidth = var77;
                var0.gifAutoPlay = var53;
                var0.animateEmoji = var76;
                var76 = var72;
                if (!var64) {
                    _fun53867_ip = 5462;
                    continue _fun53867
                }
            case 5457:
                var76 = var68.username;
            case 5462:
                var77 = var16 != var76;
                var72 = undefined;
                if (!var77) {
                    _fun53867_ip = 5474;
                    continue _fun53867
                }
            case 5471:
                var72 = var76;
            case 5474:
                var0.username = var72;
                var72 = undefined;
                if (var64) {
                    _fun53867_ip = 5488;
                    continue _fun53867
                }
            case 5483:
                var72 = var75.uri;
            case 5488:
                var0.avatarURL = var72;
                var72 = undefined;
                if (var64) {
                    _fun53867_ip = 5501;
                    continue _fun53867
                }
            case 5498:
                var72 = var74;
            case 5501:
                var0.avatarDecorationURL = var72;
                var68 = var68.id;
                var0.authorId = var68;
                if (var64) {
                    _fun53867_ip = 5562;
                    continue _fun53867
                }
            case 5521:
                var68 = 'username';
                if (!(var68 === var12)) {
                    _fun53867_ip = 5562;
                    continue _fun53867
                }
            case 5529:
                var72 = _closure1_slot3;
                var74 = var16 != var70;
                var68 = undefined;
                if (!var74) {
                    _fun53867_ip = 5545;
                    continue _fun53867
                }
            case 5542:
                var68 = var70;
            case 5545:
                var68 = var72.bind(var4)(var68);
                if (!(var16 == var68)) {
                    _fun53867_ip = 5560;
                    continue _fun53867
                }
            case 5554:
                var68 = var24.defaultUsernameColor;
            case 5560:
                _fun53867_ip = 5568;
                continue _fun53867;
            case 5562:
                var68 = var24.defaultUsernameColor;
            case 5568:
                var0.usernameColor = var68;
                var68 = null;
                if (var64) {
                    _fun53867_ip = 5614;
                    continue _fun53867
                }
            case 5578:
                var74 = _closure1_slot3;
                var75 = var16 != var70;
                var72 = undefined;
                if (!var75) {
                    _fun53867_ip = 5594;
                    continue _fun53867
                }
            case 5591:
                var72 = var70;
            case 5594:
                var74 = var74.bind(var4)(var72);
                var75 = var16 != var74;
                var72 = null;
                if (!var75) {
                    _fun53867_ip = 5611;
                    continue _fun53867
                }
            case 5608:
                var72 = var74;
            case 5611:
                var68 = var72;
            case 5614:
                var0.roleColor = var68;
                var68 = null;
                if (!var71) {
                    _fun53867_ip = 5660;
                    continue _fun53867
                }
            case 5624:
                var68 = null;
                if (var64) {
                    _fun53867_ip = 5660;
                    continue _fun53867
                }
            case 5629:
                var72 = _closure1_slot0;
                var74 = _closure1_slot2;
                var71 = 62;
                var71 = var74[var71];
                var72 = var72.bind(var4)(var71);
                var71 = var72.processColorStrings;
                var68 = var71.bind(var72)(var73);
            case 5660:
                var0.roleColors = var68;
                var68 = 'dot';
                var68 = var68 === var12;
                var0.shouldShowRoleDot = var68;
                var68 = 'username';
                var68 = var68 === var12;
                var0.shouldShowRoleOnName = var68;
                var0.showLinkDecorations = var63;
                if (var64) {
                    _fun53867_ip = 5734;
                    continue _fun53867
                }
            case 5701:
                var68 = _closure1_slot3;
                var71 = var16 != var70;
                var63 = undefined;
                if (!var71) {
                    _fun53867_ip = 5717;
                    continue _fun53867
                }
            case 5714:
                var63 = var70;
            case 5717:
                var63 = var68.bind(var4)(var63);
                if (!(var16 == var63)) {
                    _fun53867_ip = 5732;
                    continue _fun53867
                }
            case 5726:
                var63 = var24.defaultUsernameColor;
            case 5732:
                _fun53867_ip = 5740;
                continue _fun53867;
            case 5734:
                var63 = var24.defaultUsernameColor;
            case 5740:
                var0.colorString = var63;
                var63 = undefined;
                if (var64) {
                    _fun53867_ip = 5753;
                    continue _fun53867
                }
            case 5750:
                var63 = var67;
            case 5753:
                var0.roleIcon = var63;
                var67 = var16 != var69;
                var63 = undefined;
                if (!var67) {
                    _fun53867_ip = 5798;
                    continue _fun53867
                }
            case 5767:
                var68 = _closure1_slot0;
                var70 = _closure1_slot2;
                var67 = 63;
                var67 = var70[var67];
                var68 = var68.bind(var4)(var67);
                var67 = var68.createConnectionsRoleTag;
                var63 = var67.bind(var68)(var69);
            case 5798:
                var0.connectionsRoleTag = var63;
                var63 = undefined;
                if (var64) {
                    _fun53867_ip = 5813;
                    continue _fun53867
                }
            case 5810:
                var63 = var66;
            case 5813:
                var0.timestamp = var63;
                var63 = undefined;
                if (var64) {
                    _fun53867_ip = 5829;
                    continue _fun53867
                }
            case 5823:
                var63 = var24.timestampColor;
            case 5829:
                var0.timestampColor = var63;
                var0.content = var62;
                var0.isEditing = var10;
                var0.renderContentOnly = var49;
                var62 = undefined;
                if (!(var4 !== var65)) {
                    _fun53867_ip = 5887;
                    continue _fun53867
                }
            case 5854:
                var64 = _closure1_slot0;
                var66 = _closure1_slot2;
                var63 = 64;
                var63 = var66[var63];
                var64 = var64.bind(var4)(var63);
                var63 = var64.createSurveyIndication;
                var62 = var63.bind(var64)(var1, var18, var65);
            case 5887:
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
                    _fun53867_ip = 5993;
                    continue _fun53867
                }
            case 5942:
                var62 = _closure1_slot0;
                var63 = _closure1_slot2;
                var52 = 66;
                var52 = var63[var52];
                var63 = var62.bind(var4)(var52);
                var62 = var63.createExecutedCommand;
                var98 = var24.defaultUsernameColor;
                var103 = var63;
                var102 = var1;
                var101 = var20;
                var100 = var12;
                var99 = var18;
                var50 = var103[var62](var102, var101, var100, var99, var98, var97);
            case 5993:
                var0.executedCommand = var50;
                var50 = var38.components;
                var50 = var50.length;
                var52 = var50 > var47;
                var50 = undefined;
                if (!var52) {
                    _fun53867_ip = 6104;
                    continue _fun53867
                }
            case 6020:
                var50 = undefined;
                if (!var51) {
                    _fun53867_ip = 6104;
                    continue _fun53867
                }
            case 6025:
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
            case 6104:
                var0.components = var50;
                var50 = 0;
                if (var49) {
                    _fun53867_ip = 6120;
                    continue _fun53867
                }
            case 6114:
                var50 = var24.feedbackColor;
            case 6120:
                var0.feedbackColor = var50;
                var47 = 0;
                if (var49) {
                    _fun53867_ip = 6136;
                    continue _fun53867
                }
            case 6130:
                var47 = var24.highlightColor;
            case 6136:
                var0.highlightColor = var47;
                var49 = var16 != var48;
                var47 = undefined;
                if (!var49) {
                    _fun53867_ip = 6153;
                    continue _fun53867
                }
            case 6150:
                var47 = var48;
            case 6153:
                var0.embeds = var47;
                if (var46) {
                    _fun53867_ip = 6167;
                    continue _fun53867
                }
            case 6161:
                var46 = new Array(0);
                _fun53867_ip = 6199;
                continue _fun53867;
            case 6167:
                var48 = _closure1_slot0;
                var49 = _closure1_slot2;
                var47 = 68;
                var47 = var49[var47];
                var48 = var48.bind(var4)(var47);
                var47 = var48.createGiftCodeEmbed;
                var46 = var47.bind(var48)(var1, var18);
            case 6199:
                var0.giftCodes = var46;
                if (var43) {
                    _fun53867_ip = 6213;
                    continue _fun53867
                }
            case 6207:
                var43 = new Array(0);
                _fun53867_ip = 6246;
                continue _fun53867;
            case 6213:
                var47 = _closure1_slot0;
                var48 = _closure1_slot2;
                var46 = 69;
                var46 = var48[var46];
                var47 = var47.bind(var4)(var46);
                var46 = var47.createCodedLinkEmbeds;
                var43 = var46.bind(var47)(var1, var38, var18);
            case 6246:
                var0.codedLinks = var43;
                var43 = undefined;
                if (!var45) {
                    _fun53867_ip = 6287;
                    continue _fun53867
                }
            case 6256:
                var46 = _closure1_slot0;
                var47 = _closure1_slot2;
                var45 = 70;
                var45 = var47[var45];
                var46 = var46.bind(var4)(var45);
                var45 = var46.createActivityInstanceEmbed;
                var43 = var45.bind(var46)(var1);
            case 6287:
                var0.activityInstanceEmbed = var43;
                var43 = undefined;
                if (!var44) {
                    _fun53867_ip = 6331;
                    continue _fun53867
                }
            case 6299:
                var45 = _closure1_slot0;
                var46 = _closure1_slot2;
                var44 = 71;
                var44 = var46[var44];
                var45 = var45.bind(var4)(var44);
                var44 = var45.createActivityRichPresenceInviteEmbed;
                var43 = var44.bind(var45)(var1, var20);
            case 6331:
                var0.activityRichPresenceInviteEmbed = var43;
                if (!var36) {
                    _fun53867_ip = 6362;
                    continue _fun53867
                }
            case 6341:
                if (!var40) {
                    _fun53867_ip = 6353;
                    continue _fun53867
                }
            case 6344:
                if (var41) {
                    _fun53867_ip = 6350;
                    continue _fun53867
                }
            case 6347:
                var41 = var42;
            case 6350:
                var40 = var41;
            case 6353:
                if (var40) {
                    _fun53867_ip = 6359;
                    continue _fun53867
                }
            case 6356:
                var40 = var35;
            case 6359:
                var36 = var40;
            case 6362:
                var0.useAttachmentGridLayout = var36;
                var0.useAttachmentUploadPreview = var35;
                var0.attachments = var34;
                var40 = 1;
                var34 = var40;
                if (!var35) {
                    _fun53867_ip = 6420;
                    continue _fun53867
                }
            case 6388:
                var36 = var1.state;
                var35 = _closure1_slot24;
                var35 = var35.SEND_FAILED;
                var34 = var40;
                if (!(var36 === var35)) {
                    _fun53867_ip = 6420;
                    continue _fun53867
                }
            case 6410:
                var34 = 0.2;
            case 6420:
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
                    _fun53867_ip = 6517;
                    continue _fun53867
                }
            case 6514:
                var29 = var33;
            case 6517:
                var0.communicationDisabled = var29;
                var33 = var16 == var20;
                if (var33) {
                    _fun53867_ip = 6542;
                    continue _fun53867
                }
            case 6529:
                var29 = var20.isForumPost;
                var29 = var29.bind(var20)();
                var33 = !var29;
            case 6542:
                var29 = !var33;
                if (var33) {
                    _fun53867_ip = 6562;
                    continue _fun53867
                }
            case 6548:
                var34 = var1.id;
                var33 = var1.channel_id;
                var29 = var34 === var33;
            case 6562:
                var0.isFirstForumPostMessage = var29;
                var33 = var16 != var20;
                var29 = undefined;
                if (!var33) {
                    _fun53867_ip = 6608;
                    continue _fun53867
                }
            case 6578:
                var33 = var20.isForumPost;
                var33 = var33.bind(var20)();
                var29 = undefined;
                if (!var33) {
                    _fun53867_ip = 6608;
                    continue _fun53867
                }
            case 6593:
                var29 = undefined;
                if (!var32) {
                    _fun53867_ip = 6608;
                    continue _fun53867
                }
            case 6598:
                var32 = _closure1_slot30;
                var29 = var32.bind(var4)(var1, var20);
            case 6608:
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
                    _fun53867_ip = 6763;
                    continue _fun53867
                }
            case 6757:
                var26 = new Array(0);
                _fun53867_ip = 6795;
                continue _fun53867;
            case 6763:
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 75;
                var27 = var31[var27];
                var29 = var29.bind(var4)(var27);
                var27 = var29.createPostPreviewEmbeds;
                var26 = var27.bind(var29)(var1, var30);
            case 6795:
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
                    _fun53867_ip = 6989;
                    continue _fun53867
                }
            case 6983:
                var23 = var24.embedBackgroundColor;
            case 6989:
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
                    _fun53867_ip = 7078;
                    continue _fun53867
                }
            case 7073:
                var14 = var20.type;
            case 7078:
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
            case 7144:
                var3 = var1.type;
                var0 = _closure1_slot23;
                var0 = var0.THREAD_CREATED;
                if (!(var3 !== var0)) {
                    _fun53867_ip = 7241;
                    continue _fun53867
                }
            case 7163:
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
                    _fun53867_ip = 7229;
                    continue _fun53867
                }
            case 7219:
                var19 = var20.isForumPost;
                var16 = var19.bind(var20)();
            case 7229:
                var0.isForumPost = var16;
                var0 = var3.bind(var14)(var0);
                _fun53867_ip = 7335;
                continue _fun53867;
            case 7241:
                var3 = {};
                var14 = _closure1_slot29;
                var103 = undefined;
                var102 = var1;
                var101 = var12;
                var100 = var5;
                var99 = var15;
                var98 = var6;
                var14 = var103[var14](var102, var101, var100, var99, var98, var97);
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
                var101 = var15.bind(var16)(var14);
                var102 = var3;
                var14 = copyDataProperties(var102, var101);
                var0 = var3;
            case 7335:
                return var0;
            case 7337:
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
                var102 = var5;
                var101 = var6;
                var6 = copyDataProperties(var102, var101);
                var8 = false;
                var6 = 'renderThreadEmbeds';
                var5[var6] = var8;
                var6 = 'renderReactions';
                var5[var6] = var8;
                var6 = 'shouldDisableInteractiveComponents';
                var5[var6] = var7;
                var2.options = var5;
                var101 = var3.bind(var4)(var2);
                var102 = var0;
                var2 = copyDataProperties(var102, var101);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 3413, 3168, 4699, 6483, 6486, 3051, 6598, 4231, 3052, 6434, 3155, 1216, 1372, 1672, 3059, 6575, 6478, 660, 6600, 6602, 21, 6623, 1234, 6606, 6624, 6625, 3958, 1384, 6512, 6629, 4751, 6630, 6632, 6634, 6635, 6733, 6734, 4233, 4219, 6745, 6711, 6748, 3942, 1418, 1417, 5535, 5415, 6695, 6751, 1304, 6752, 3039, 4485, 1348, 6757, 6759, 3091, 6761, 6769, 6770, 6638, 6771, 6772, 6775, 6778, 6781, 6820, 12058, 12082, 12084, 12105, 6640, 6641, 12106, 12109, 12110, 12111, 11556, 12112, 2]);