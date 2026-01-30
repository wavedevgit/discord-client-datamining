// modules/polls/native/PollAnswerInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ImageInput, environment: var1
        _fun109069: for (var _fun109069_ip = 0;;) switch (_fun109069_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channelId;
                var11 = var0.localCreationAnswerId;
                var2 = var0.image;
                var _closure2_slot0 = var2;
                var9 = var0.iconSrc;
                var15 = var0.openExpressionPicker;
                var8 = var0.emojiSize;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun109069_ip = 53;
                    continue _fun109069
                }
            case 50:
                var8 = 24;
            case 53:
                var12 = var0.containerStyle;
                var6 = var0.imageSize;
                var4 = var0.answerIndex;
                var _closure2_slot1 = var4;
                var0 = var0.openImageInputActionSheet;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var7 = _closure1_slot15;
                var10 = var7.bind(var3)();
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 9;
                var7 = var16[var7];
                var7 = var14.bind(var3)(var7);
                var23 = undefined;
                var22 = var13;
                var21 = var11;
                var20 = var2;
                var19 = var6;
                var18 = var8;
                var7 = var23[var7](var22, var21, var20, var19, var18, var17);
                var8 = var7.renderImage;
                var11 = var7.upload;
                _closure2_slot2 = var11;
                var14 = var7.setUploadSize;
                _closure2_slot3 = var14;
                var16 = _closure1_slot3;
                var13 = var16.useMemo;
                var7 = new Array(3);
                var7[0] = var2;
                var7[1] = var11;
                var7[2] = var4;
                var4 = function() { // Environment: var1
                    _fun109070: for (var _fun109070_ip = 0;;) switch (_fun109070_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var2 = var1 == var0;
                            var5 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun109070_ip = 30;
                                continue _fun109070
                            }
                        case 20:
                            var2 = _closure2_slot0;
                            var0 = var2.emoji;
                        case 30:
                            if (!(var1 == var0)) {
                                _fun109070_ip = 262;
                                continue _fun109070
                            }
                        case 37:
                            var0 = _closure2_slot2;
                            if (!(var1 == var0)) {
                                _fun109070_ip = 126;
                                continue _fun109070
                            }
                        case 45:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 10;
                            var3 = var7[var0];
                            var3 = var2.bind(var5)(var3);
                            var6 = var3.intl;
                            var3 = var6.formatToPlainString;
                            var0 = var7[var0];
                            var0 = var2.bind(var5)(var0);
                            var0 = var0.t;
                            var2 = var0.ieNrxk;
                            var0 = {};
                            var8 = _closure2_slot1;
                            var7 = 1;
                            var7 = var8 + var7;
                            var0.answerNumber = var7;
                            var0 = var3.bind(var6)(var2, var0);
                            return var0;
                        case 126:
                            var0 = _closure2_slot2;
                            var0 = var0.item;
                            var0 = var0.filename;
                            var1 = var1 != var0;
                            var8 = '';
                            if (!var1) {
                                _fun109070_ip = 155;
                                continue _fun109070
                            }
                        case 152:
                            var8 = var0;
                        case 155:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 10;
                            var1 = var9[var0];
                            var1 = var7.bind(var5)(var1);
                            var3 = var1.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var9[var0];
                            var0 = var7.bind(var5)(var0);
                            var0 = var0.t;
                            var1 = var0.vcC7Qn;
                            var0 = {};
                            var6 = 11;
                            var6 = var9[var6];
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.filterOutUUID;
                            var6 = var6.bind(var7)(var8);
                            var0.imageName = var6;
                            var7 = _closure2_slot1;
                            var6 = 1;
                            var6 = var7 + var6;
                            var0.answerNumber = var6;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 262:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 10;
                            var2 = var6[var0];
                            var2 = var1.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.t;
                            var1 = var0.vcC7Qn;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.emoji;
                            var5 = var5.name;
                            var0.imageName = var5;
                            var5 = _closure2_slot1;
                            var4 = 1;
                            var4 = var5 + var4;
                            var0.answerNumber = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var16 = var13.bind(var16)(var4, var7);
                var13 = _closure1_slot3;
                var7 = var13.useCallback;
                var4 = new Array(1);
                var4[0] = var14;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var13 = var7.bind(var13)(var1, var4);
                var7 = null;
                var4 = var7 != var11;
                if (var4) {
                    _fun109069_ip = 263;
                    continue _fun109069
                }
            case 244:
                var14 = var7 == var2;
                var1 = undefined;
                if (var14) {
                    _fun109069_ip = 259;
                    continue _fun109069
                }
            case 253:
                var1 = var2.emoji;
            case 259:
                var4 = var7 != var1;
            case 263:
                if (!var4) {
                    _fun109069_ip = 269;
                    continue _fun109069
                }
            case 266:
                var15 = var0;
            case 269:
                var14 = undefined;
                if (var4) {
                    _fun109069_ip = 277;
                    continue _fun109069
                }
            case 274:
                var14 = var0;
            case 277:
                var2 = _closure1_slot12;
                var1 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 12;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var17 = 'button';
                var0.accessibilityRole = var17;
                var0.accessibilityLabel = var16;
                var0.onPress = var15;
                var0.onLongPress = var14;
                var14 = var7 == var6;
                var6 = undefined;
                if (!var14) {
                    _fun109069_ip = 342;
                    continue _fun109069
                }
            case 339:
                var6 = var13;
            case 342:
                var0.onLayout = var6;
                var6 = new Array(2);
                var6[0] = var12;
                var7 = var7 != var11;
                if (!var7) {
                    _fun109069_ip = 368;
                    continue _fun109069
                }
            case 362:
                var7 = var10.uploadContainer;
            case 368:
                var6[1] = var7;
                var0.style = var6;
                var7 = _closure1_slot12;
                if (var4) {
                    _fun109069_ip = 417;
                    continue _fun109069
                }
            case 383:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 13;
                var4 = var10[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.source = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun109069_ip = 433;
                continue _fun109069;
            case 417:
                var6 = _closure1_slot6;
                var5 = {};
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 433:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var6 = var3.Keyboard;
    var _closure1_slot4 = var6;
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_POLL_ANSWER_LENGTH;
    var _closure1_slot9 = var6;
    var3 = var3.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.defaultContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'flex': 1,
        'overflow': 'hidden'
    };
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.defaultImageAndTextContainer = var8;
    var8 = {};
    var12 = 30;
    var8.marginRight = var12;
    var3.cannotRemove = var8;
    var8 = {
        'width': 60,
        'height': 48,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.defaultImageContainer = var8;
    var8 = {
        'flex': 1,
        'paddingStart': 0
    };
    var3.pollAnswerTextInput = var8;
    var8 = {
        'paddingLeft': 6,
        'height': 48,
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var8.color = var12;
    var3.defaultRemoveButtonContainer = var8;
    var8 = {};
    var12 = 'flex-start';
    var8.alignItems = var12;
    var3.uploadContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_FEEDBACK_CRITICAL;
    var8.borderColor = var10;
    var8.borderWidth = var9;
    var3.errorInput = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/PollAnswerInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PollAnswerInput, environment: var1
        _fun109072: for (var _fun109072_ip = 0;;) switch (_fun109072_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.answer;
                var _closure2_slot0 = var0;
                var21 = var1.index;
                var _closure2_slot1 = var21;
                var14 = var1.inputRef;
                var23 = var1.channelId;
                var _closure2_slot2 = var23;
                var2 = var1.onAnswerTextChange;
                var _closure2_slot3 = var2;
                var2 = var1.onAnswerEmojiSelect;
                var _closure2_slot4 = var2;
                var10 = var1.canRemoveAnswer;
                var2 = var1.onRemoveAnswer;
                var _closure2_slot5 = var2;
                var2 = var1.onRemoveAnswerImage;
                var _closure2_slot6 = var2;
                var24 = var1.onSubmitEditing;
                var9 = var1.error;
                var1 = _closure1_slot15;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var20 = var0.image;
                var22 = var0.localCreationAnswerId;
                var _closure2_slot7 = var22;
                var19 = function() { // Original name: openExpressionPicker, environment: var15
                    _fun109073: for (var _fun109073_ip = 0;;) switch (_fun109073_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot2;
                            var4 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun109073_ip = 124;
                                continue _fun109073
                            }
                        case 30:
                            var1 = _closure1_slot4;
                            var0 = var1.dismiss;
                            var0 = var0.bind(var1)();
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openEmojiPickerActionSheet;
                            var0 = {};
                            var0.channel = var4;
                            var4 = function(arg0) { // Original name: onPressEmoji, environment: var4
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var3.bind(var0)(var1, var2);
                                return var0;
                            };
                            var0.onPressEmoji = var4;
                            var3 = _closure1_slot11;
                            var3 = var3.POLLS;
                            var0.pickerIntention = var3;
                            var3 = false;
                            var0.startExpanded = var3;
                            var0.autoFocus = var3;
                            var0 = var1.bind(var2)(var0);
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot8 = var19;
                var0 = function(arg0) { // Original name: handleSaveAltText, environment: var15
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.update;
                    var11 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var10 = var2.localCreationAnswerId;
                    var1 = _closure1_slot8;
                    var9 = var1.Poll;
                    var1 = {};
                    var7 = arg0;
                    var1.description = var7;
                    var12 = var6;
                    var8 = var1;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    return var0;
                };
                var _closure2_slot9 = var0;
                var0 = null;
                var5 = var0 != var9;
                if (!var5) {
                    _fun109072_ip = 167;
                    continue _fun109072
                }
            case 156:
                var1 = var9.length;
                var0 = 0;
                var5 = var1 > var0;
            case 167:
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var7 = _closure1_slot6;
                var4 = {};
                var11 = var17.defaultContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var11 = !var10;
                if (!var11) {
                    _fun109072_ip = 209;
                    continue _fun109072
                }
            case 203:
                var11 = var17.cannotRemove;
            case 209:
                var8[1] = var11;
                var4.style = var8;
                var12 = _closure1_slot13;
                var11 = _closure1_slot6;
                var8 = {};
                var16 = var17.defaultImageAndTextContainer;
                var13 = new Array(2);
                var13[0] = var16;
                var16 = var5;
                if (!var5) {
                    _fun109072_ip = 253;
                    continue _fun109072
                }
            case 247:
                var16 = var17.errorInput;
            case 253:
                var13[1] = var16;
                var8.style = var13;
                var18 = _closure1_slot12;
                var16 = _closure1_slot16;
                var13 = {};
                var13.channelId = var23;
                var13.localCreationAnswerId = var22;
                var13.image = var20;
                var13.openExpressionPicker = var19;
                var19 = function() { // Original name: openImageInputActionSheet, environment: var15
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 18;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot10;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var1.channelId = var7;
                    var7 = _closure2_slot1;
                    var1.index = var7;
                    var7 = _closure2_slot0;
                    var1.answer = var7;
                    var7 = _closure2_slot9;
                    var1.onSaveAltText = var7;
                    var7 = _closure2_slot6;
                    var1.onRemoveAnswerImage = var7;
                    var6 = _closure2_slot8;
                    var1.openExpressionPicker = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var13.openImageInputActionSheet = var19;
                var22 = _closure1_slot1;
                var19 = _closure1_slot2;
                var20 = 19;
                var20 = var19[var20];
                var20 = var22.bind(var3)(var20);
                var13.iconSrc = var20;
                var20 = var17.defaultImageContainer;
                var13.containerStyle = var20;
                var20 = 48;
                var13.imageSize = var20;
                var13.answerIndex = var21;
                var16 = var18.bind(var3)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var20 = _closure1_slot12;
                var22 = _closure1_slot0;
                var16 = 20;
                var16 = var19[var16];
                var16 = var22.bind(var3)(var16);
                var18 = var16.FormInput;
                var16 = {
                    'ref': null,
                    'textAlignVertical': 'center',
                    'showTopContainer': false,
                    'showBorder': false
                };
                var16.ref = var14;
                var23 = false;
                var14 = 10;
                var25 = var19[var14];
                var25 = var22.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var19[var14];
                var25 = var22.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.NNHVlv;
                var25 = var26.bind(var27)(var25);
                var16.placeholder = var25;
                var25 = function(arg0) { // Original name: onChange, environment: var15
                    var2 = _closure2_slot3;
                    var1 = {};
                    var3 = arg0;
                    var1.text = var3;
                    var3 = _closure2_slot1;
                    var1.index = var3;
                    var0 = _closure2_slot7;
                    var1.localCreationAnswerId = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var16.onChange = var25;
                var16.onSubmitEditing = var24;
                var16.blurOnSubmit = var23;
                var23 = var17.pollAnswerTextInput;
                var16.style = var23;
                var23 = 'none';
                var16.textContentType = var23;
                var23 = var19[var14];
                var23 = var22.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.formatToPlainString;
                var19 = var19[var14];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var23 = var19["3+V8G9"];
                var22 = {};
                var19 = 1;
                var26 = var21 + var19;
                var22.answerNumber = var26;
                var22 = var24.bind(var25)(var23, var22);
                var16.accessibilityLabel = var22;
                var22 = undefined;
                if (!var5) {
                    _fun109072_ip = 638;
                    continue _fun109072
                }
            case 578:
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var25 = var23[var14];
                var25 = var24.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.formatToPlainString;
                var23 = var23[var14];
                var23 = var24.bind(var3)(var23);
                var23 = var23.t;
                var24 = var23.jnq5Ho;
                var23 = {};
                var23.errorMessage = var9;
                var22 = var25.bind(var26)(var24, var23);
            case 638:
                var16.accessibilityHint = var22;
                var22 = _closure1_slot9;
                var16.maxLength = var22;
                var22 = 'next';
                var16.returnKeyType = var22;
                var22 = true;
                var16.required = var22;
                var16.autoCorrect = var22;
                var16['aria-invalid'] = var9;
                var16 = var20.bind(var3)(var18, var16);
                var13[1] = var16;
                var8.children = var13;
                var11 = var12.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                if (!var10) {
                    _fun109072_ip = 915;
                    continue _fun109072
                }
            case 712:
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var11 = {};
                var15 = function() { // Original name: onPress, environment: var15
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var15;
                var15 = 'button';
                var11.accessibilityRole = var15;
                var15 = var17.defaultRemoveButtonContainer;
                var11.style = var15;
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = var20[var14];
                var16 = var15.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.formatToPlainString;
                var14 = var20[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14["22fjEc"];
                var14 = {};
                var19 = var21 + var19;
                var14.answerNumber = var19;
                var14 = var16.bind(var18)(var15, var14);
                var11.accessibilityLabel = var14;
                var16 = _closure1_slot12;
                var19 = _closure1_slot1;
                var18 = 13;
                var14 = var20[var18];
                var15 = var19.bind(var3)(var14);
                var14 = {};
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var14.size = var18;
                var18 = 21;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var14.source = var18;
                var17 = var17.defaultRemoveButtonContainer;
                var17 = var17.color;
                var14.color = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 915:
                var8[1] = var10;
                var4.children = var8;
                var7 = var2.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun109072_ip = 976;
                    continue _fun109072
                }
            case 940:
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 22;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.message = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 976:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 3960, 6569, 1616, 33, 1297, 671, 14022, 1234, 6512, 4864, 4045, 6952, 7570, 3237, 14023, 1307, 7640, 5339, 3229, 14026, 2]);