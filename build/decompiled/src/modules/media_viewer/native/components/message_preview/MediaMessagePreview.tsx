// modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var11 = var1.message;
        var _closure2_slot0 = var11;
        var8 = var1.onMeasure;
        var _closure2_slot1 = var8;
        var10 = var1.onMeasureTruncated;
        var _closure2_slot2 = var10;
        var13 = var1.disableReactionCreates;
        var _closure2_slot3 = var13;
        var5 = var1.showReplyButton;
        var _closure2_slot4 = var5;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var2 = var1.height;
        var1 = 0.5;
        var12 = var1 * var2;
        var _closure2_slot5 = var12;
        var4 = _closure1_slot4;
        var2 = var4.useMemo;
        var1 = new Array(6);
        var1[0] = var13;
        var1[1] = var12;
        var1[2] = var11;
        var1[3] = var10;
        var1[4] = var8;
        var1[5] = var5;
        var0 = function() { // Environment: var0
            var3 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = {};
                var2 = function arg0() {
                    _fun73158: for (var _fun73158_ip = 0;;) switch (_fun73158_ip) {
                        case 0:
                            var0 = global;
                            var4 = var0.Math;
                            var3 = var4.min;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var1 = _closure2_slot5;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun73158_ip = 86;
                                continue _fun73158
                            }
                        case 52:
                            var1 = _closure4_slot0;
                            if (var1) {
                                _fun73158_ip = 75;
                                continue _fun73158
                            }
                        case 62:
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun73158_ip = 86;
                            continue _fun73158;
                        case 75:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onLayout = var2;
                var1 = function arg0() {
                    _fun73159: for (var _fun73159_ip = 0;;) switch (_fun73159_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot17;
                            var3 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var4.bind(var0)(var2, var3, var1);
                            var1 = _closure4_slot0;
                            if (!var1) {
                                _fun73159_ip = 60;
                                continue _fun73159
                            }
                        case 40:
                            var1 = {
                                'numberOfLines': 3,
                                'expandable': false,
                                'seeMoreLabel': ''
                            };
                            var2.truncation = var1;
                        case 60:
                            return var0;
                    }
                };
                var0.modifyRow = var1;
                var2 = _closure1_slot16;
                var0.rowGenerator = var2;
                var2 = _closure2_slot0;
                var0.message = var2;
                var1 = _closure1_slot18;
                var1 = var1.dummyLayout;
                var0.style = var1;
                return var0;
            };
            var0 = {};
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            var0.full = var1;
            var1 = true;
            var1 = var3.bind(var2)(var1);
            var0.truncated = var1;
            return var0;
        };
        var8 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot15;
        var1 = _closure1_slot14;
        var0 = {};
        var11 = _closure1_slot13;
        var5 = 13;
        var4 = var9[var5];
        var10 = var6.bind(var3)(var4);
        var4 = {};
        var14 = var8.full;
        var15 = var4;
        var12 = copyDataProperties(var15, var14);
        var10 = var11.bind(var3)(var10, var4);
        var4 = new Array(2);
        var4[0] = var10;
        var7 = _closure1_slot13;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var14 = var8.truncated;
        var15 = var5;
        var8 = copyDataProperties(var15, var14);
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
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
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.findNodeHandle;
    var _closure1_slot5 = var6;
    var7 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.ThemeTypes;
    var _closure1_slot12 = var10;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.Fragment;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var15 = var6;
    var3 = new var15[var3](var14);
    var8 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot16 = var8;
    var3 = function arg0, arg1, arg2() {
        var2 = arg0;
        var0 = arg1;
        var0 = !var0;
        var2.canAddNewReactions = var0;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.MessageContextType;
        var1 = var1.MEDIA_VIEWER;
        var2.contextType = var1;
        var1 = arg2;
        var2.showReplyButton = var1;
        return var0;
    };
    var _closure1_slot17 = var3;
    var6 = var8.setOptions;
    var3 = {
        'renderCodedLinks': false,
        'renderGiftCode': false,
        'renderActivityInstanceEmbed': false,
        'renderActivityInviteEmbed': false,
        'renderComponents': false,
        'renderEmbeds': false,
        'ignoreMentioned': true,
        'inlineAttachmentMedia': false,
        'inlineEmbedMedia': false,
        'renderReactions': true,
        'renderAttachments': false,
        'renderReplies': false,
        'renderThreadEmbeds': false,
        'renderPolls': false,
        'renderForumPostActions': false,
        'forcedTheme': null,
        'forceHideSimpleEmbedContent': true
    };
    var10 = var10.DARK;
    var3.forcedTheme = var10;
    var3 = var6.bind(var8)(var3);
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 4294957297,
        'bottom': 0,
        'width': '100%',
        'opacity': 0
    };
    var3.dummyLayout = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 14;
    var6 = var5[var3];
    var10 = var4.bind(var0)(var6);
    var7 = var10.createNativeStyleProperties;
    var6 = {};
    var8 = 15;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var6.reactionBackgroundColor = var11;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_STRONG;
    var6.reactionBorderColor = var11;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var6.reactionTextColor = var11;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var6.activeReactionBackgroundColor = var11;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var6.activeReactionBorderColor = var11;
    var11 = var5[var8];
    var11 = var9.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var6.activeReactionTextColor = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot19 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createNativeStyleProperties;
    var3 = {};
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var3.editedColor = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.TEXT_DEFAULT;
    var3.seeMoreLabelColor = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot20 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73161: for (var _fun73161_ip = 0;;) switch (_fun73161_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.channelId;
                var _closure2_slot0 = var16;
                var3 = var1.messageId;
                var _closure2_slot1 = var3;
                var2 = var1.onClose;
                var _closure2_slot2 = var2;
                var29 = var1.onTapMessage;
                var _closure2_slot3 = var29;
                var12 = var1.onMeasureFullHeight;
                var11 = var1.onMeasureCollapsedHeight;
                var20 = var1.full;
                var _closure2_slot4 = var20;
                var0 = var1.canExpand;
                var _closure2_slot5 = var0;
                var0 = var1.setScrollViewIsAtTop;
                var _closure2_slot6 = var0;
                var0 = var1.flingUpRef;
                var _closure2_slot7 = var0;
                var9 = var1.flingDownRef;
                var _closure2_slot8 = var9;
                var22 = var1.animationDriver;
                var _closure2_slot9 = var22;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var34 = 16;
                var1 = var13[var34];
                var4 = undefined;
                var8 = var15.bind(var4)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var27
                    _fun73162: for (var _fun73162_ip = 0;;) switch (_fun73162_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun73162_ip = 39;
                                continue _fun73162
                            }
                        case 18:
                            var3 = _closure1_slot9;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var5, var1);
                var _closure2_slot10 = var1;
                var6 = _closure1_slot1;
                var5 = 17;
                var5 = var13[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.bind(var4)(var1);
                var14 = var5.disableReactionCreates;
                var _closure2_slot11 = var14;
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var25 = false;
                var5 = var5.bind(var6)(var25);
                var21 = _closure1_slot3;
                var18 = 2;
                var6 = var21.bind(var4)(var5, var18);
                var5 = 0;
                var19 = var6[var5];
                var17 = 1;
                var6 = var6[var17];
                var _closure2_slot12 = var6;
                var8 = _closure1_slot4;
                var6 = var8.useState;
                var6 = var6.bind(var8)(var25);
                var6 = var21.bind(var4)(var6, var18);
                var8 = var6[var5];
                var6 = var6[var17];
                var _closure2_slot13 = var6;
                var23 = _closure1_slot4;
                var10 = var23.useRef;
                var6 = null;
                var33 = var10.bind(var23)(var6);
                var _closure2_slot14 = var33;
                var23 = _closure1_slot4;
                var10 = var23.useState;
                var10 = var10.bind(var23)(var6);
                var10 = var21.bind(var4)(var10, var18);
                var32 = var10[var5];
                var _closure2_slot15 = var32;
                var10 = var10[var17];
                var _closure2_slot16 = var10;
                var10 = 18;
                var10 = var13[var10];
                var23 = var15.bind(var4)(var10);
                var10 = var23.useIsMediaViewerReplyActionEnabled;
                var10 = var10.bind(var23)();
                var _closure2_slot17 = var10;
                var28 = _closure1_slot4;
                var26 = var28.useEffect;
                var24 = function() { // Environment: var27
                    var2 = _closure2_slot16;
                    var3 = _closure1_slot5;
                    var0 = _closure2_slot14;
                    var1 = var0.current;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var23 = new Array(0);
                var23 = var26.bind(var28)(var24, var23);
                var26 = _closure1_slot19;
                var23 = _closure1_slot12;
                var24 = var23.MIDNIGHT;
                var28 = var26.bind(var4)(var24);
                var _closure2_slot18 = var28;
                var24 = _closure1_slot20;
                var23 = var23.MIDNIGHT;
                var23 = var24.bind(var4)(var23);
                var31 = var23.editedColor;
                var _closure2_slot19 = var31;
                var30 = var23.seeMoreLabelColor;
                var _closure2_slot20 = var30;
                var26 = _closure1_slot4;
                var24 = var26.useCallback;
                var23 = new Array(8);
                var23[0] = var32;
                var23[1] = var14;
                var23[2] = var31;
                var23[3] = var30;
                var23[4] = var28;
                var23[5] = var20;
                var23[6] = var22;
                var23[7] = var10;
                var22 = function(arg0) { // Environment: var27
                    _fun73164: for (var _fun73164_ip = 0;;) switch (_fun73164_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = _closure1_slot17;
                            var1 = _closure2_slot11;
                            var5 = _closure2_slot17;
                            var0 = undefined;
                            var5 = var6.bind(var0)(var2, var1, var5);
                            var5 = _closure2_slot15;
                            var2.reactTag = var5;
                            var1 = !var1;
                            var2.canAddNewReactions = var1;
                            var1 = var2.message;
                            var1.feedbackColor = var0;
                            var5 = var2.message;
                            var1 = _closure2_slot19;
                            var5.editedColor = var1;
                            var1 = _closure2_slot18;
                            var2.reactionsTheme = var1;
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun73164_ip = 282;
                                continue _fun73164
                            }
                        case 95:
                            var1 = {
                                'numberOfLines': 3,
                                'expandable': true
                            };
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 19;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4["7qbp3B"];
                            var7 = var5.bind(var6)(var4);
                            var4 = global;
                            var5 = var4.HermesInternal;
                            var6 = var5.concat;
                            var5 = ' ';
                            var5 = var6.bind(var5)(var7);
                            var1.seeMoreLabel = var5;
                            var5 = _closure2_slot20;
                            var1.seeMoreLabelColor = var5;
                            var6 = var4.Math;
                            var5 = var6.min;
                            var4 = _closure2_slot9;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = 0.25;
                            var4 = var3 * var4;
                            var3 = 0.1;
                            var3 = var5.bind(var6)(var4, var3);
                            var1.outAnimationDuration = var3;
                            var3 = 'fade';
                            var1.outAnimation = var3;
                            var2.truncation = var1;
                        case 282:
                            return var0;
                    }
                };
                var23 = var24.bind(var26)(var22, var23);
                var13 = var13[var34];
                var26 = var15.bind(var4)(var13);
                var24 = var26.useStateFromStores;
                var13 = _closure1_slot8;
                var22 = new Array(4);
                var22[0] = var13;
                var13 = _closure1_slot10;
                var22[1] = var13;
                var13 = _closure1_slot11;
                var22[2] = var13;
                var13 = _closure1_slot7;
                var22[3] = var13;
                var15 = new Array(2);
                var15[0] = var16;
                var15[1] = var3;
                var13 = function() { // Environment: var27
                    _fun73165: for (var _fun73165_ip = 0;;) switch (_fun73165_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun73165_ip = 21;
                                continue _fun73165
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            if (!(var3 == var0)) {
                                _fun73165_ip = 25;
                                continue _fun73165
                            }
                        case 21:
                            var0 = undefined;
                            return var0;
                        case 25:
                            var6 = _closure1_slot10;
                            var5 = var6.getMessage;
                            var4 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var5.bind(var6)(var4, var0);
                            if (!(var3 == var0)) {
                                _fun73165_ip = 75;
                                continue _fun73165
                            }
                        case 56:
                            var6 = _closure1_slot11;
                            var5 = var6.getMessage;
                            var4 = _closure2_slot1;
                            var0 = var5.bind(var6)(var4);
                        case 75:
                            if (!(var3 == var0)) {
                                _fun73165_ip = 147;
                                continue _fun73165
                            }
                        case 79:
                            var7 = _closure1_slot7;
                            var6 = var7.getMessage;
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 20;
                            var5 = var5[var4];
                            var4 = undefined;
                            var9 = var8.bind(var4)(var5);
                            var8 = var9.castMessageIdAsChannelId;
                            var5 = _closure2_slot1;
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var5);
                            var6 = var3 == var5;
                            if (var6) {
                                _fun73165_ip = 144;
                                continue _fun73165
                            }
                        case 138:
                            var4 = var5.firstMessage;
                        case 144:
                            var0 = var4;
                        case 147:
                            if (!(var3 == var0)) {
                                _fun73165_ip = 170;
                                continue _fun73165
                            }
                        case 151:
                            var3 = _closure1_slot8;
                            var2 = var3.getMessage;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 170:
                            return var0;
                    }
                };
                var13 = var24.bind(var26)(var22, var13, var15);
                var _closure2_slot21 = var13;
                var22 = _closure1_slot4;
                var15 = var22.useState;
                var15 = var15.bind(var22)(var5);
                var15 = var21.bind(var4)(var15, var18);
                var5 = var15[var5];
                var _closure2_slot22 = var5;
                var15 = var15[var17];
                var _closure2_slot23 = var15;
                var21 = _closure1_slot4;
                var18 = var21.useCallback;
                var17 = function(arg0, arg1) { // Environment: var27
                    var2 = _closure2_slot23;
                    var0 = undefined;
                    var1 = arg1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = new Array(0);
                var21 = var18.bind(var21)(var17, var15);
                var18 = _closure1_slot4;
                var17 = var18.useCallback;
                var15 = new Array(2);
                var15[0] = var20;
                var15[1] = var5;
                var5 = function(arg0) { // Environment: var27
                    _fun73167: for (var _fun73167_ip = 0;;) switch (_fun73167_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure2_slot12;
                            var4 = _closure2_slot22;
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.height;
                            var1 = var4 > var1;
                            if (!var1) {
                                _fun73167_ip = 55;
                                continue _fun73167
                            }
                        case 51:
                            var1 = _closure2_slot4;
                        case 55:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var22 = var17.bind(var18)(var5, var15);
                var18 = _closure1_slot4;
                var17 = var18.useCallback;
                var15 = new Array(2);
                var15[0] = var13;
                var15[1] = var2;
                var5 = function(arg0) { // Environment: var27
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 21;
                    var1 = var5[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = 22;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg0;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.channelId;
                    var1.channelId = var3;
                    var4 = _closure2_slot21;
                    var1.message = var4;
                    var3 = _closure2_slot2;
                    var1.closeMediaModal = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var31 = var17.bind(var18)(var5, var15);
                var18 = _closure1_slot4;
                var17 = var18.useCallback;
                var15 = new Array(1);
                var15[0] = var13;
                var5 = function(arg0) { // Environment: var27
                    _fun73169: for (var _fun73169_ip = 0;;) switch (_fun73169_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var1 != var0)) {
                                _fun73169_ip = 13;
                                continue _fun73169
                            }
                        case 9:
                            var0 = undefined;
                            return var0;
                        case 13:
                            var2 = "Cannot destructure 'undefined' or 'null'.";
                            var3 = var1;
                            var0 = throwTypeError(var3, var2);
                            var0 = undefined;
                            throw var0;
                    }
                };
                var28 = var17.bind(var18)(var5, var15);
                var17 = _closure1_slot4;
                var15 = var17.useCallback;
                var5 = new Array(3);
                var5[0] = var16;
                var5[1] = var13;
                var5[2] = var3;
                var3 = function(arg0) { // Environment: var27
                    _fun73170: for (var _fun73170_ip = 0;;) switch (_fun73170_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var9 = var0.reaction;
                            var6 = var0.isBurst;
                            var0 = _closure2_slot21;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun73170_ip = 201;
                                continue _fun73170
                            }
                        case 37:
                            var4 = _closure1_slot9;
                            var3 = var4.getChannel;
                            var2 = _closure2_slot0;
                            var4 = var3.bind(var4)(var2);
                            var2 = var5 != var4;
                            if (!var2) {
                                _fun73170_ip = 73;
                                continue _fun73170
                            }
                        case 65:
                            var3 = _closure2_slot1;
                            var2 = var5 != var3;
                        case 73:
                            if (!var2) {
                                _fun73170_ip = 201;
                                continue _fun73170
                            }
                        case 79:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 23;
                            var2 = var7[var2];
                            var8 = undefined;
                            var3 = var3.bind(var8)(var2);
                            var2 = var3.handleAddOrRemoveReaction;
                            var1 = _closure2_slot1;
                            var7 = var5 != var9;
                            var5 = null;
                            if (!var7) {
                                _fun73170_ip = 150;
                                continue _fun73170
                            }
                        case 120:
                            var7 = {};
                            var15 = var7;
                            var14 = var9;
                            var10 = copyDataProperties(var15, var14);
                            var10 = var9.emoji;
                            var9 = 'emoji';
                            var7[var9] = var10;
                            var5 = var7;
                        case 150:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 24;
                            var0 = var9[var0];
                            var0 = var7.bind(var8)(var0);
                            var0 = var0.ReactionLocations;
                            var11 = var0.MOBILE_MEDIA_VIEWER;
                            var16 = var3;
                            var15 = var1;
                            var14 = var4;
                            var13 = var5;
                            var12 = var6;
                            var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                        case 201:
                            var0 = undefined;
                            return var0;
                    }
                };
                var30 = var15.bind(var17)(var3, var5);
                var17 = _closure1_slot4;
                var15 = var17.useCallback;
                var5 = function(arg0) { // Environment: var27
                    _fun73171: for (var _fun73171_ip = 0;;) switch (_fun73171_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var3 = var0.url;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun73171_ip = 31;
                                continue _fun73171
                            }
                        case 23:
                            var1 = '';
                            var0 = var1 !== var3;
                        case 31:
                            if (!var0) {
                                _fun73171_ip = 71;
                                continue _fun73171
                            }
                        case 34:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 25;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.urlString = var3;
                            var0 = var1.bind(var2)(var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var32 = var15.bind(var17)(var5, var3);
                var15 = _closure1_slot4;
                var5 = var15.useCallback;
                var3 = new Array(3);
                var3[0] = var16;
                var3[1] = var13;
                var3[2] = var2;
                var2 = function() { // Environment: var27
                    _fun73172: for (var _fun73172_ip = 0;;) switch (_fun73172_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 26;
                            var3 = var7[var2];
                            var5 = var6.bind(var0)(var3);
                            var3 = var5.triggerHapticFeedback;
                            var2 = var7[var2];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_LIGHT;
                            var2 = var3.bind(var5)(var2);
                            var3 = _closure2_slot21;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun73172_ip = 190;
                                continue _fun73172
                            }
                        case 78:
                            var6 = _closure1_slot9;
                            var5 = var6.getChannel;
                            var3 = _closure2_slot0;
                            var3 = var5.bind(var6)(var3);
                            if (!(var2 != var3)) {
                                _fun73172_ip = 190;
                                continue _fun73172
                            }
                        case 100:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 27;
                            var1 = var5[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = {
                                'message': null,
                                'channel': null,
                                'chatInputRef': null,
                                'actionSource': 'message_shortcut',
                                'invertible': true,
                                'scrollToMessage': true
                            };
                            var4 = _closure2_slot21;
                            var1.message = var4;
                            var1.channel = var3;
                            var1.chatInputRef = var0;
                            var1 = var2.bind(var0)(var1);
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var1
                                _fun73173: for (var _fun73173_ip = 0;;) switch (_fun73173_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 28;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.getBestActiveInputForChannelId;
                                        var1 = _closure2_slot0;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun73173_ip = 59;
                                            continue _fun73173
                                        }
                                    case 49:
                                        var1 = var2.openSystemKeyboard;
                                        var1 = var1.bind(var2)();
                                    case 59:
                                        return var0;
                                }
                            };
                            var1 = 300;
                            var1 = var3.bind(var0)(var2, var1);
                        case 190:
                            return var0;
                    }
                };
                var26 = var5.bind(var15)(var2, var3);
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var0;
                var0 = function() { // Environment: var27
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Native;
                    var3 = var0.bind(var1)();
                    var2 = var3.requireExternalGestureToFail;
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot8;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var16 = var3.bind(var5)(var0, var2);
                var2 = var6 == var13;
                var0 = null;
                if (var2) {
                    _fun73161_ip = 1226;
                    continue _fun73161
                }
            case 895:
                var1 = var6 == var1;
                var0 = null;
                if (var1) {
                    _fun73161_ip = 1226;
                    continue _fun73161
                }
            case 907:
                var3 = _closure1_slot15;
                var2 = _closure1_slot14;
                var1 = {};
                var15 = _closure1_slot13;
                var9 = _closure1_slot0;
                var24 = _closure1_slot2;
                var5 = 29;
                var5 = var24[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.GestureDetector;
                var5 = {};
                var5.gesture = var16;
                var18 = _closure1_slot15;
                var17 = _closure1_slot6;
                var16 = {};
                var16.scrollEventThrottle = var34;
                var34 = function arg0() {
                    _fun73175: for (var _fun73175_ip = 0;;) switch (_fun73175_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var0 = var1.contentOffset;
                            var5 = var1.velocity;
                            var2 = _closure2_slot6;
                            var0 = var0.y;
                            var3 = 0;
                            var1 = var3 === var0;
                            if (!var1) {
                                _fun73175_ip = 74;
                                continue _fun73175
                            }
                        case 42:
                            var0 = null;
                            var6 = var0 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun73175_ip = 58;
                                continue _fun73175
                            }
                        case 53:
                            var4 = var5.y;
                        case 58:
                            var5 = var0 != var4;
                            var0 = 0;
                            if (!var5) {
                                _fun73175_ip = 70;
                                continue _fun73175
                            }
                        case 67:
                            var0 = var4;
                        case 70:
                            var1 = var3 === var0;
                        case 74:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var16.onScroll = var34;
                var16.onLayout = var22;
                var16.onContentSizeChange = var21;
                var16.showsVerticalScrollIndicator = var20;
                var16.bounces = var19;
                var22 = _closure1_slot13;
                var21 = _closure1_slot1;
                var19 = 30;
                var19 = var24[var19];
                var20 = var21.bind(var4)(var19);
                var19 = {};
                var19.ref = var33;
                var19.onLongPressLink = var32;
                var19.onLongPressMessage = var31;
                var19.onTapMessage = var29;
                var19.onTapReaction = var30;
                var19.onTapSeeMore = var29;
                var19.onTapTag = var28;
                var27 = function arg0() {
                    _fun73176: for (var _fun73176_ip = 0;;) switch (_fun73176_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun73176_ip = 29;
                                continue _fun73176
                            }
                        case 10:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun73176_ip = 29;
                                continue _fun73176
                            }
                        case 17:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun73176_ip = 133;
                            continue _fun73176;
                        case 29:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 31;
                            var0 = var2[var0];
                            var4 = undefined;
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.handleMessagesTapLink;
                            var0 = {};
                            var5 = true;
                            var0.allowWithinModal = var5;
                            var0.chatInputRef = var4;
                            var4 = function arg0, arg1, arg2() {
                                _fun73177: for (var _fun73177_ip = 0;;) switch (_fun73177_ip) {
                                    case 0:
                                        var3 = _closure1_slot9;
                                        var2 = var3.getChannel;
                                        var1 = arg1;
                                        var3 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun73177_ip = 76;
                                            continue _fun73177
                                        }
                                    case 26:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 32;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.transitionToThread;
                                        var0 = {};
                                        var4 = arg2;
                                        var0.source = var4;
                                        var4 = false;
                                        var0.navigationReplace = var4;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 76:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.handleTransitionToThread = var4;
                            var4 = _closure2_slot21;
                            var0.message = var4;
                            var4 = _closure2_slot10;
                            var0.messageChannel = var4;
                            var3 = _closure2_slot0;
                            var0.selectedChannelId = var3;
                            var3 = arg0;
                            var3 = var3.nativeEvent;
                            var0.tapLinkData = var3;
                            var0 = var1.bind(var2)(var0);
                        case 133:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19.onTapLink = var27;
                var19.onInitiateReply = var26;
                var19.inverted = var25;
                var20 = var22.bind(var4)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var22 = _closure1_slot13;
                var20 = 13;
                var20 = var24[var20];
                var21 = var21.bind(var4)(var20);
                var20 = {};
                var24 = _closure1_slot16;
                var20.rowGenerator = var24;
                var20.modifyRow = var23;
                var20.message = var13;
                var20 = var22.bind(var4)(var21, var20);
                var19[1] = var20;
                var16.children = var19;
                var16 = var18.bind(var4)(var17, var16);
                var5.children = var16;
                var9 = var15.bind(var4)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                var6 = null;
                if (!var8) {
                    _fun73161_ip = 1212;
                    continue _fun73161
                }
            case 1172:
                var9 = _closure1_slot13;
                var8 = _closure1_slot21;
                var7 = {};
                var7.disableReactionCreates = var14;
                var7.message = var13;
                var7.onMeasure = var12;
                var7.onMeasureTruncated = var11;
                var7.showReplyButton = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1212:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1226:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5608, 4190, 1372, 4213, 8837, 660, 33, 6478, 6795, 1464, 8760, 1297, 671, 566, 9171, 9173, 1234, 21, 9174, 9176, 9177, 6515, 9201, 3238, 9208, 3677, 4924, 9619, 9660, 3902, 2]);