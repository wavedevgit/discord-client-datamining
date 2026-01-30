// modules/chat_input/native/ChatInputNativeComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun91056: for (var _fun91056_ip = 0;;) switch (_fun91056_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var0 = 0;
            var3 = var5[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var8 = var1.bind(var0)(var3);
            var11 = 1;
            var1 = var5[var11];
            var1 = var4.bind(var0)(var1);
            var7 = var1.requireNativeComponent;
            var1 = 2;
            var1 = var5[var1];
            var1 = var12.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.jsx;
            var _closure1_slot4 = var1;
            var1 = 4;
            var1 = var5[var1];
            var9 = var4.bind(var0)(var1);
            var3 = var9.createStyles;
            var1 = {};
            var10 = {};
            var10.flex = var11;
            var1.style = var10;
            var10 = {};
            var11 = 5;
            var13 = var5[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_DEFAULT;
            var10.color = var13;
            var1.textColor = var10;
            var10 = {};
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_MUTED;
            var10.color = var11;
            var1.placeholderColor = var10;
            var1 = var3.bind(var9)(var1);
            var _closure1_slot5 = var1;
            var3 = var8.forwardRef;
            var1 = function(arg0, arg1) { // Environment: var6
                _fun91057: for (var _fun91057_ip = 0;;) switch (_fun91057_ip) {
                    case 0:
                        var0 = arg0;
                        var22 = var0.accessibilityLabel;
                        var20 = var0.customKeyboard;
                        var10 = var0.placeholder;
                        var24 = var0.editable;
                        var21 = var0.markAsSpoilerTitle;
                        var3 = undefined;
                        if (!(var21 === var3)) {
                            _fun91057_ip = 96;
                            continue _fun91057
                        }
                    case 38:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 6;
                        var2 = var6[var1];
                        var2 = var5.bind(var3)(var2);
                        var4 = var2.intl;
                        var2 = var4.string;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.t;
                        var1 = var1["gsI+xC"];
                        var21 = var2.bind(var4)(var1);
                    case 96:
                        var7 = var0.setNoExtractUI;
                        var6 = var0.shouldShowCursor;
                        var19 = var0.onBeginFocus;
                        var18 = var0.onEndBlur;
                        var17 = var0.onChangeContentSize;
                        var2 = var0.onMaxHeightChanged;
                        var16 = var0.onSelectionOrTextChange;
                        var15 = var0.onTextFlushed;
                        var14 = var0.onPasteImage;
                        var13 = var0.onPasteCommand;
                        var12 = var0.onTapAction;
                        var11 = var0.onRequestSend;
                        var1 = _closure1_slot5;
                        var1 = var1.bind(var3)();
                        var5 = var1.style;
                        var4 = var1.textColor;
                        var4 = var4.color;
                        var1 = var1.placeholderColor;
                        var9 = var1.color;
                        var23 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var1 = 7;
                        var1 = var25[var1];
                        var8 = var23.bind(var3)(var1);
                        var1 = var8.useTheme;
                        var26 = var1.bind(var8)();
                        var1 = 8;
                        var1 = var25[var1];
                        var8 = var23.bind(var3)(var1);
                        var1 = var8.isThemeDark;
                        var1 = var1.bind(var8)(var26);
                        var8 = 9;
                        var8 = var25[var8];
                        var26 = var23.bind(var3)(var8);
                        var25 = var26.hexWithOpacity;
                        var23 = _closure1_slot1;
                        var27 = _closure1_slot2;
                        var8 = 5;
                        var8 = var27[var8];
                        var8 = var23.bind(var3)(var8);
                        var8 = var8.unsafe_rawColors;
                        if (var1) {
                            _fun91057_ip = 313;
                            continue _fun91057
                        }
                    case 305:
                        var23 = var8.PRIMARY_500;
                        _fun91057_ip = 319;
                        continue _fun91057;
                    case 313:
                        var23 = var8.WHITE;
                    case 319:
                        var8 = _closure1_slot3;
                        var27 = var8.gradientPreset;
                        var8 = null;
                        var27 = var8 != var27;
                        var8 = 0.6;
                        if (!var27) {
                            _fun91057_ip = 358;
                            continue _fun91057
                        }
                    case 348:
                        var8 = 0.8;
                    case 358:
                        var8 = var25.bind(var26)(var23, var8);
                        var26 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var23 = 10;
                        var25 = var25[var23];
                        var26 = var26.bind(var3)(var25);
                        var25 = var26.isAndroid;
                        var25 = var25.bind(var26)();
                        var26 = undefined;
                        if (var25) {
                            _fun91057_ip = 402;
                            continue _fun91057
                        }
                    case 399:
                        var26 = var22;
                    case 402:
                        var25 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var22 = var22[var23];
                        var25 = var25.bind(var3)(var22);
                        var22 = var25.isAndroid;
                        var22 = var22.bind(var25)();
                        var25 = undefined;
                        if (var22) {
                            _fun91057_ip = 437;
                            continue _fun91057
                        }
                    case 434:
                        var25 = var20;
                    case 437:
                        var22 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var20 = var20[var23];
                        var22 = var22.bind(var3)(var20);
                        var20 = var22.isAndroid;
                        var20 = var20.bind(var22)();
                        var22 = 'default';
                        if (!var20) {
                            _fun91057_ip = 473;
                            continue _fun91057
                        }
                    case 471:
                        var22 = undefined;
                    case 473:
                        var23 = 2;
                        if (!var1) {
                            _fun91057_ip = 482;
                            continue _fun91057
                        }
                    case 479:
                        var23 = 1;
                    case 482:
                        var20 = _closure1_slot1;
                        var27 = _closure1_slot2;
                        var1 = 11;
                        var1 = var27[var1];
                        var1 = var20.bind(var3)(var1);
                        var20 = var1.bind(var3)(var2);
                        var2 = _closure1_slot4;
                        var1 = _closure1_slot6;
                        var0 = {};
                        var0.accessibilityLabel = var26;
                        var0.children = var25;
                        var0.editable = var24;
                        var0.keyboardAppearance = var23;
                        var0.keyboardType = var22;
                        var0.markAsSpoilerTitle = var21;
                        var0.maxHeight = var20;
                        var0.onBeginFocus = var19;
                        var0.onEndBlur = var18;
                        var0.onChangeContentSize = var17;
                        var0.onSelectionOrTextChange = var16;
                        var0.onTextFlushed = var15;
                        var0.onPasteImage = var14;
                        var0.onPasteCommand = var13;
                        var0.onTapAction = var12;
                        var0.onRequestSend = var11;
                        var0.placeholder = var10;
                        var0.placeholderColor = var9;
                        var9 = arg1;
                        var0.ref = var9;
                        var0.selectionColor = var8;
                        var0.setNoExtractUI = var7;
                        var0.shouldShowCursor = var6;
                        var0.style = var5;
                        var0.textColor = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var8)(var1);
            var3 = 10;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var3 = var8.isAndroid;
            var3 = var3.bind(var8)();
            if (var3) {
                _fun91056_ip = 288;
                continue _fun91056
            }
        case 275:
            var3 = 'DCDChatInput';
            var3 = var7.bind(var0)(var3);
            _fun91056_ip = 305;
            continue _fun91056;
        case 288:
            var7 = 12;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var3 = var7.default;
        case 305:
            var _closure1_slot6 = var3;
            var3 = 'ChatInputNativeComponent';
            var1.displayName = var3;
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/chat_input/native/ChatInputNativeComponent.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3168, 33, 1297, 671, 1234, 3205, 3165, 3199, 478, 11625, 11629, 2]);