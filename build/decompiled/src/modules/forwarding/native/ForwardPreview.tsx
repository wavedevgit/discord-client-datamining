// modules/forwarding/native/ForwardPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: MessagePreview, environment: var1
        _fun72897: for (var _fun72897_ip = 0;;) switch (_fun72897_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.message;
                var8 = var0.contentMessage;
                var2 = var0.attachmentCount;
                var _closure2_slot0 = var2;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.bind(var3)();
                var4 = 0;
                if (!(!(var2 > var4))) {
                    _fun72897_ip = 98;
                    continue _fun72897
                }
            case 65:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 4;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.colors;
                var11 = var4.TEXT_SUBTLE;
                _fun72897_ip = 129;
                continue _fun72897;
            case 98:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 4;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.colors;
                var11 = var4.TEXT_DEFAULT;
            case 129:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var10 = var9.bind(var3)(var4);
                var9 = var10.createNativeStyleProperties;
                var4 = {};
                var4.seeMoreLabelColor = var11;
                var4 = var9.bind(var10)(var4);
                var4 = var4.bind(var3)(var5);
                _closure2_slot1 = var4;
                var9 = _closure1_slot3;
                var5 = var9.useCallback;
                var10 = var4.seeMoreLabelColor;
                var4 = new Array(2);
                var4[0] = var10;
                var4[1] = var2;
                var2 = function(arg0) { // Environment: var1
                    _fun72898: for (var _fun72898_ip = 0;;) switch (_fun72898_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.MessageContextType;
                            var2 = var2.SEARCH;
                            var1.contextType = var2;
                            var2 = {
                                'numberOfLines': null,
                                'expandable': false,
                                'seeMoreLabel': '...'
                            };
                            var5 = _closure2_slot0;
                            var4 = 0;
                            var5 = var5 > var4;
                            var4 = 2;
                            if (!var5) {
                                _fun72898_ip = 82;
                                continue _fun72898
                            }
                        case 79:
                            var4 = 1;
                        case 82:
                            var2.numberOfLines = var4;
                            var3 = _closure2_slot1;
                            var3 = var3.seeMoreLabelColor;
                            var2.seeMoreLabelColor = var3;
                            var1.truncation = var2;
                            var2 = var1.message;
                            var1 = '';
                            var2.edited = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var9)(var2, var4);
                var9 = _closure1_slot3;
                var4 = var9.useMemo;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var2 = var0.setOptions;
                    var1 = {
                        'renderEmbeds': false,
                        'renderReactions': false,
                        'inlineEmbedMedia': false,
                        'inlineAttachmentMedia': false,
                        'animateEmoji': true,
                        'gifAutoPlay': false,
                        'renderCodedLinks': false,
                        'renderGiftCode': false,
                        'renderActivityInstanceEmbed': false,
                        'renderActivityInviteEmbed': false,
                        'renderComponents': false,
                        'renderThreadEmbeds': false,
                        'renderReplies': false,
                        'renderCommunicationDisabled': false,
                        'renderAttachments': false,
                        'renderExecutedCommands': false,
                        'renderPolls': false,
                        'renderSharedClientTheme': false,
                        'renderForumPostActions': false,
                        'ignoreMentioned': false,
                        'ignoreEmbedDescriptionCache': false,
                        'forceHideSimpleEmbedContent': false,
                        'enableSwipeActions': false,
                        'useAlternateEmbedColors': false
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var4 = var4.bind(var9)(var2, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'pointerEvents': 'none',
                    'horizontalOffset': 0
                };
                var0.modifyRow = var5;
                var6 = var7.merge;
                var5 = {};
                var9 = new Array(0);
                var5.messageSnapshots = var9;
                var8 = var8.content;
                var5.content = var8;
                var5 = var6.bind(var7)(var5);
                var0.message = var5;
                var0.rowGenerator = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'gap': null,
        'alignItems': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.gap = var11;
    var3.forwardPreview = var8;
    var8 = {
        'width': 4,
        'height': '100%',
        'backgroundColor': null,
        'borderRadius': 2
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.quote = var8;
    var8 = {
        'flexDirection': 'column',
        'flex': 1,
        'paddingVertical': 4,
        'gap': 6
    };
    var3.contentWrapper = var8;
    var8 = {
        'position': 'relative',
        'width': 56,
        'height': 56,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = 'relative';
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.attachmentPreview = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var8.backgroundColor = var12;
    var3.attachmentPreviewVideo = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'opacity': 0.6
    };
    var3.videoThumbnail = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'margin': 16,
        'zIndex': 100
    };
    var3.playIcon = var8;
    var8 = {};
    var8.position = var11;
    var3.attachmentPreviewOverflow = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'right': 0,
        'alignItems': 'center',
        'justifyContent': 'center',
        'textAlign': 'center',
        'width': 24,
        'height': 24,
        'lineHeight': 24,
        'backgroundColor': null,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.overflowCount = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 6
    };
    var3.attachmentRow = var8;
    var8 = {
        'width': 20,
        'height': 20
    };
    var3.largeIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/native/ForwardPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ForwardPreview, environment: var1
        _fun72900: for (var _fun72900_ip = 0;;) switch (_fun72900_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.message;
                var5 = var0.channel;
                var4 = var0.forwardOptions;
                var0 = _closure1_slot7;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useForwardPreviewContent;
                var0 = {};
                var0.message = var20;
                var0.channel = var5;
                var0.forwardOptions = var4;
                var0 = var1.bind(var2)(var0);
                var11 = var0.attachments;
                var22 = var0.embeds;
                var25 = var0.hasContent;
                var19 = var0.contentMessage;
                var0 = var19.components;
                var0 = var0.length;
                var15 = 0;
                var0 = var0 > var15;
                var17 = null;
                var16 = null;
                if (!var0) {
                    _fun72900_ip = 195;
                    continue _fun72900
                }
            case 126:
                var0 = var19.components;
                var0 = var0[var15];
                var1 = var0.type;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ComponentType;
                var0 = var0.CHECKPOINT_CARD;
                var16 = null;
                if (!(var1 === var0)) {
                    _fun72900_ip = 195;
                    continue _fun72900
                }
            case 179:
                var0 = var19.components;
                var0 = var0[var15];
                var16 = var0.checkpointData;
            case 195:
                var1 = var17 != var16;
                var0 = null;
                if (!var1) {
                    _fun72900_ip = 252;
                    continue _fun72900
                }
            case 204:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.CHECKPOINT_PERSONA_COLORS;
                var4 = var16.cardId;
                var5 = var17 != var4;
                var1 = 0;
                if (!var5) {
                    _fun72900_ip = 248;
                    continue _fun72900
                }
            case 245:
                var1 = var4;
            case 248:
                var0 = var2[var1];
            case 252:
                var1 = var17 == var0;
                var14 = undefined;
                if (var1) {
                    _fun72900_ip = 267;
                    continue _fun72900
                }
            case 261:
                var14 = var0.primaryColor;
            case 267:
                var8 = var11.length;
                if (!(!(var8 > var15))) {
                    _fun72900_ip = 297;
                    continue _fun72900
                }
            case 276:
                var0 = var22.length;
                var0 = var0 > var15;
                var23 = null;
                var21 = null;
                var18 = null;
                if (!var0) {
                    _fun72900_ip = 1370;
                    continue _fun72900
                }
            case 297:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.countBy;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMosaicMediaTypeForAttachment;
                    var1 = arg0;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var11, var0);
                var1 = var0.IMAGE;
                var2 = var17 != var1;
                var24 = 0;
                if (!var2) {
                    _fun72900_ip = 356;
                    continue _fun72900
                }
            case 353:
                var24 = var1;
            case 356:
                var1 = var0.VIDEO;
                var2 = var17 != var1;
                var0 = 0;
                if (!var2) {
                    _fun72900_ip = 374;
                    continue _fun72900
                }
            case 371:
                var0 = var1;
            case 374:
                if (!(var24 > var15)) {
                    _fun72900_ip = 385;
                    continue _fun72900
                }
            case 378:
                if (!(!(var0 > var15))) {
                    _fun72900_ip = 700;
                    continue _fun72900
                }
            case 385:
                if (!(!(var0 > var15))) {
                    _fun72900_ip = 617;
                    continue _fun72900
                }
            case 392:
                if (!(!(var24 > var15))) {
                    _fun72900_ip = 482;
                    continue _fun72900
                }
            case 396:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var2 = var4.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.formatToPlainString;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["89ihS8"];
                var1 = {};
                var1.count = var8;
                var2 = var6.bind(var7)(var2, var1);
                var1 = 18;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.AttachmentIcon;
                _fun72900_ip = 792;
                continue _fun72900;
            case 482:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 14;
                var6 = var10[var4];
                var6 = var5.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var5 = var4.h4pFfU;
                var4 = {};
                var4.count = var24;
                var5 = var6.bind(var7)(var5, var4);
                var4 = 1;
                if (!(var4 !== var24)) {
                    _fun72900_ip = 580;
                    continue _fun72900
                }
            case 552:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 15;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.ImagesIcon;
                _fun72900_ip = 606;
                continue _fun72900;
            case 580:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 17;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var4 = var6.ImageIcon;
            case 606:
                var1 = var4;
                var2 = var5;
                _fun72900_ip = 792;
                continue _fun72900;
            case 617:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 14;
                var5 = var7[var4];
                var5 = var6.bind(var3)(var5);
                var12 = var5.intl;
                var10 = var12.formatToPlainString;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var5 = var4.SJ6pPX;
                var4 = {};
                var4.count = var0;
                var2 = var10.bind(var12)(var5, var4);
                var4 = 16;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var1 = var4.CirclePlayIcon;
                _fun72900_ip = 792;
                continue _fun72900;
            case 700:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 14;
                var5 = var7[var4];
                var5 = var6.bind(var3)(var5);
                var12 = var5.intl;
                var10 = var12.formatToPlainString;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var5 = var4.Lr0Top;
                var4 = {};
                var4.image_count = var24;
                var4.video_count = var0;
                var2 = var10.bind(var12)(var5, var4);
                var4 = 15;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var1 = var4.ImagesIcon;
            case 792:
                if (!(var0 > var15)) {
                    _fun72900_ip = 803;
                    continue _fun72900
                }
            case 796:
                if (!(var8 !== var0)) {
                    _fun72900_ip = 1138;
                    continue _fun72900
                }
            case 803:
                if (!(!(var8 > var15))) {
                    _fun72900_ip = 1003;
                    continue _fun72900
                }
            case 810:
                var4 = var22[var15];
                var5 = var17 == var4;
                var0 = undefined;
                if (var5) {
                    _fun72900_ip = 844;
                    continue _fun72900
                }
            case 823:
                var4 = var4.thumbnail;
                var5 = var17 == var4;
                var0 = undefined;
                if (var5) {
                    _fun72900_ip = 844;
                    continue _fun72900
                }
            case 838:
                var0 = var4.proxyURL;
            case 844:
                var0 = var17 != var0;
                var23 = var2;
                var21 = var1;
                var18 = null;
                if (!var0) {
                    _fun72900_ip = 1370;
                    continue _fun72900
                }
            case 862:
                var5 = _closure1_slot5;
                var4 = _closure1_slot4;
                var0 = {};
                var6 = var9.attachmentPreview;
                var0.style = var6;
                var10 = _closure1_slot5;
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var6 = 19;
                var6 = var27[var6];
                var7 = var26.bind(var3)(var6);
                var6 = {
                    'source': null,
                    'width': 56,
                    'height': 56
                };
                var12 = {};
                var24 = 20;
                var24 = var27[var24];
                var27 = var26.bind(var3)(var24);
                var26 = var27.getMobileOptimizedSrc;
                var22 = var22[var15];
                var22 = var22.thumbnail;
                var24 = var22.proxyURL;
                var22 = 56;
                var22 = var26.bind(var27)(var24, var22, var22);
                var12.uri = var22;
                var6.source = var12;
                var6 = var10.bind(var3)(var7, var6);
                var0.children = var6;
                var18 = var5.bind(var3)(var4, var0);
                var23 = var2;
                var21 = var1;
                _fun72900_ip = 1370;
                continue _fun72900;
            case 1003:
                var5 = _closure1_slot5;
                var4 = _closure1_slot4;
                var0 = {};
                var6 = var9.attachmentPreview;
                var0.style = var6;
                var10 = _closure1_slot5;
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var6 = 19;
                var6 = var26[var6];
                var7 = var24.bind(var3)(var6);
                var6 = {
                    'source': null,
                    'width': 56,
                    'height': 56
                };
                var12 = {};
                var22 = 20;
                var22 = var26[var22];
                var27 = var24.bind(var3)(var22);
                var26 = var27.getMobileOptimizedSrc;
                var22 = var11[var15];
                var24 = var22.proxy_url;
                var22 = 56;
                var22 = var26.bind(var27)(var24, var22, var22);
                var12.uri = var22;
                var6.source = var12;
                var6 = var10.bind(var3)(var7, var6);
                var0.children = var6;
                var18 = var5.bind(var3)(var4, var0);
                var23 = var2;
                var21 = var1;
                _fun72900_ip = 1370;
                continue _fun72900;
            case 1138:
                var5 = _closure1_slot6;
                var4 = _closure1_slot4;
                var0 = {};
                var7 = var9.attachmentPreview;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var9.attachmentPreviewVideo;
                var6[1] = var7;
                var0.style = var6;
                var10 = _closure1_slot5;
                var26 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 19;
                var6 = var12[var6];
                var7 = var26.bind(var3)(var6);
                var6 = {};
                var22 = var9.videoThumbnail;
                var6.style = var22;
                var22 = {};
                var24 = 20;
                var24 = var12[var24];
                var28 = var26.bind(var3)(var24);
                var27 = var28.getMobileOptimizedSrc;
                var11 = var11[var15];
                var32 = var11.proxy_url;
                var11 = 56;
                var29 = 'png';
                var33 = var28;
                var31 = var11;
                var30 = var11;
                var24 = var33[var27](var32, var31, var30, var29, var28);
                var22.uri = var24;
                var6.source = var22;
                var6.width = var11;
                var6.height = var11;
                var7 = var10.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var11 = _closure1_slot5;
                var10 = _closure1_slot0;
                var7 = 16;
                var7 = var12[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.CirclePlayIcon;
                var7 = {
                    'style': null,
                    'size': 'md',
                    'color': 'white'
                };
                var12 = var9.playIcon;
                var7.style = var12;
                var7 = var11.bind(var3)(var10, var7);
                var6[1] = var7;
                var0.children = var6;
                var18 = var5.bind(var3)(var4, var0);
                var23 = var2;
                var21 = var1;
            case 1370:
                var10 = 1;
                var5 = var18;
                if (!(var8 > var10)) {
                    _fun72900_ip = 1600;
                    continue _fun72900
                }
            case 1383:
                var5 = var18;
                if (!(var17 != var5)) {
                    _fun72900_ip = 1600;
                    continue _fun72900
                }
            case 1393:
                var24 = {
                    'shape': null,
                    'x': 28,
                    'y': 28,
                    'width': 32,
                    'height': 32,
                    'cornerRadius': 12
                };
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 21;
                var0 = var11[var4];
                var0 = var7.bind(var3)(var0);
                var0 = var0.CutoutShape;
                var0 = var0.RoundedRect;
                var24.shape = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var9.attachmentPreviewOverflow;
                var0.style = var6;
                var12 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = var11[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var22 = new Array(1);
                var22[0] = var24;
                var4.cutouts = var22;
                var4.children = var18;
                var6 = var12.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = 22;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'text-default'
                };
                var11 = var9.overflowCount;
                var6.style = var11;
                var11 = var8 - var10;
                var10 = ['+'];
                var10[1] = var11;
                var6.children = var10;
                var6 = var2.bind(var3)(var7, var6);
                var4[1] = var6;
                var0.children = var4;
                var5 = var2.bind(var3)(var1, var0);
            case 1600:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.forwardPreview;
                var0.style = var4;
                var6 = _closure1_slot5;
                var4 = {};
                var7 = var9.quote;
                var4.style = var7;
                var6 = var6.bind(var3)(var1, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = {};
                var7 = var9.contentWrapper;
                var6.style = var7;
                var10 = var17 != var16;
                if (!var10) {
                    _fun72900_ip = 1769;
                    continue _fun72900
                }
            case 1669:
                var12 = _closure1_slot5;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var7 = 22;
                var7 = var27[var7];
                var7 = var22.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {};
                var18 = 'text-md/medium';
                var7.variant = var18;
                var18 = 14;
                var18 = var27[var18];
                var18 = var22.bind(var3)(var18);
                var24 = var18.intl;
                var22 = var24.string;
                var26 = _closure1_slot1;
                var18 = 23;
                var18 = var27[var18];
                var18 = var26.bind(var3)(var18);
                var18 = var18.goiR2u;
                var18 = var22.bind(var24)(var18);
                var7.children = var18;
                var10 = var12.bind(var3)(var11, var7);
            case 1769:
                var7 = new Array(3);
                var7[0] = var10;
                var10 = var25;
                if (!var10) {
                    _fun72900_ip = 1813;
                    continue _fun72900
                }
            case 1783:
                var18 = _closure1_slot5;
                var12 = _closure1_slot8;
                var11 = {};
                var11.message = var20;
                var11.contentMessage = var19;
                var11.attachmentCount = var8;
                var10 = var18.bind(var3)(var12, var11);
            case 1813:
                var7[1] = var10;
                var8 = var8 > var15;
                if (!var8) {
                    _fun72900_ip = 2002;
                    continue _fun72900
                }
            case 1827:
                var12 = _closure1_slot6;
                var11 = _closure1_slot4;
                var10 = {};
                var18 = var9.attachmentRow;
                var10.style = var18;
                var19 = var17 != var21;
                if (!var19) {
                    _fun72900_ip = 1907;
                    continue _fun72900
                }
            case 1854:
                var20 = _closure1_slot5;
                var18 = {};
                var22 = 'custom';
                if (!var25) {
                    _fun72900_ip = 1871;
                    continue _fun72900
                }
            case 1867:
                var22 = 'sm';
            case 1871:
                var18.size = var22;
                var22 = !var25;
                if (!var22) {
                    _fun72900_ip = 1887;
                    continue _fun72900
                }
            case 1881:
                var22 = var9.largeIcon;
            case 1887:
                var18.style = var22;
                var22 = 'text-muted';
                var18.color = var22;
                var19 = var20.bind(var3)(var21, var18);
            case 1907:
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var17 != var23;
                if (!var19) {
                    _fun72900_ip = 1988;
                    continue _fun72900
                }
            case 1922:
                var22 = _closure1_slot5;
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 22;
                var20 = var24[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {};
                var24 = 'text-md/medium';
                if (!var25) {
                    _fun72900_ip = 1964;
                    continue _fun72900
                }
            case 1960:
                var24 = 'text-sm/medium';
            case 1964:
                var20.variant = var24;
                var24 = 'text-muted';
                var20.color = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1988:
                var18[1] = var19;
                var10.children = var18;
                var8 = var12.bind(var3)(var11, var10);
            case 2002:
                var7[2] = var8;
                var6.children = var7;
                var6 = var2.bind(var3)(var1, var6);
                var4[1] = var6;
                var4[2] = var5;
                var5 = var17 != var16;
                if (!var5) {
                    _fun72900_ip = 2175;
                    continue _fun72900
                }
            case 2034:
                var8 = _closure1_slot5;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var9.attachmentPreview;
                var6.style = var9;
                var11 = _closure1_slot5;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var9 = 19;
                var9 = var18[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'style': null,
                    'width': 56,
                    'height': 56
                };
                var12 = {};
                var12.backgroundColor = var14;
                var9.style = var12;
                var12 = {};
                var14 = _closure1_slot0;
                var13 = 24;
                var13 = var18[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.getCardAssetUrl;
                var16 = var16.cardId;
                var17 = var17 != var16;
                var15 = 0;
                if (!var17) {
                    _fun72900_ip = 2146;
                    continue _fun72900
                }
            case 2143:
                var15 = var16;
            case 2146:
                var13 = var13.bind(var14)(var15);
                var12.uri = var13;
                var9.source = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2175:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForwardPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3205, 6795, 6478, 8760, 9124, 1636, 9125, 22, 9126, 1234, 9128, 8797, 4814, 8739, 4667, 1463, 5419, 3900, 2267, 6808, 2]);