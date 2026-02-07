// modules/share/native/ShareChatInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun73653: for (var _fun73653_ip = 0;;) switch (_fun73653_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var13 = 0;
            var6 = var5[var13];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var12 = 2;
            var3 = var5[var12];
            var3 = var4.bind(var0)(var3);
            var11 = var3.Fonts;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot4 = var6;
            var3 = var3.jsxs;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'flex': 1,
                'flexDirection': 'row',
                'backgroundColor': null,
                'borderRadius': 20
            };
            var9 = 5;
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.REDESIGN_CHAT_INPUT_BACKGROUND;
            var8.backgroundColor = var14;
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_12;
            var8.paddingHorizontal = var14;
            var3.container = var8;
            var8 = {
                'flex': 1,
                'paddingVertical': 0,
                'paddingHorizontal': null,
                'maxHeight': 80
            };
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_4;
            var8.paddingHorizontal = var14;
            var3.chatInput = var8;
            var8 = {
                'fontSize': 16,
                'lineHeight': 20
            };
            var11 = var11.PRIMARY_NORMAL;
            var8.fontFamily = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_STRONG;
            var8.color = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var14 = 6;
            var14 = var5[var14];
            var15 = var4.bind(var0)(var14);
            var14 = var15.isAndroid;
            var14 = var14.bind(var15)();
            if (!var14) {
                _fun73653_ip = 374;
                continue _fun73653
            }
        case 372:
            var12 = 0;
        case 374:
            var11 = var11 + var12;
            var8.paddingTop = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.paddingBottom = var11;
            var3.chatText = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_MUTED;
            var8.color = var11;
            var3.inputPlaceholder = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.paddingTop = var11;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var8.paddingBottom = var9;
            var9 = 'flex-end';
            var8.alignSelf = var9;
            var3.emojiButton = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot6 = var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/share/native/ShareChatInput.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun73654: for (var _fun73654_ip = 0;;) switch (_fun73654_ip) {
                    case 0:
                        var0 = arg0;
                        var16 = var0.text;
                        var19 = var0.inputRef;
                        var15 = var0.onChange;
                        var17 = var0.onSelectionChange;
                        var14 = var0.onFocus;
                        var6 = var0.onBlur;
                        var12 = var0.onPressEmoji;
                        var18 = var0.onSend;
                        var8 = var0.disabled;
                        var3 = undefined;
                        if (!(var8 === var3)) {
                            _fun73654_ip = 63;
                            continue _fun73654
                        }
                    case 61:
                        var8 = false;
                    case 63:
                        var0 = _closure1_slot6;
                        var11 = var0.bind(var3)();
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var0 = 7;
                        var0 = var10[var0];
                        var0 = var5.bind(var3)(var0);
                        var13 = var0.bind(var3)();
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var4 = var11.container;
                        var0.style = var4;
                        var7 = _closure1_slot4;
                        var4 = 8;
                        var4 = var10[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var4.ref = var19;
                        var4.maxLength = var13;
                        var9 = _closure1_slot0;
                        var13 = 9;
                        var19 = var10[var13];
                        var19 = var9.bind(var3)(var19);
                        var21 = var19.intl;
                        var20 = var21.string;
                        var19 = var10[var13];
                        var19 = var9.bind(var3)(var19);
                        var19 = var19.t;
                        var19 = var19.ZroO3G;
                        var19 = var20.bind(var21)(var19);
                        var4.placeholder = var19;
                        var19 = var11.inputPlaceholder;
                        var19 = var19.color;
                        var4.placeholderTextColor = var19;
                        var19 = var10[var13];
                        var19 = var9.bind(var3)(var19);
                        var21 = var19.intl;
                        var20 = var21.string;
                        var19 = var10[var13];
                        var19 = var9.bind(var3)(var19);
                        var19 = var19.t;
                        var19 = var19["/+MXmw"];
                        var19 = var20.bind(var21)(var19);
                        var4.accessibilityLabel = var19;
                        var4.onSubmitEditing = var18;
                        var4.onSelectionChange = var17;
                        var17 = var11.chatInput;
                        var4.style = var17;
                        var4.value = var16;
                        var4.onChange = var15;
                        var4.onFocus = var14;
                        var4.onBlur = var6;
                        var6 = true;
                        var4.multiline = var6;
                        var6 = false;
                        var4.showBorder = var6;
                        var4.showTopContainer = var6;
                        var6 = 'center';
                        var4.textAlignVertical = var6;
                        var6 = var11.chatText;
                        var4.inputTextStyle = var6;
                        var6 = !var8;
                        var4.editable = var6;
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = 10;
                        var5 = var10[var5];
                        var5 = var9.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var14 = var10[var13];
                        var14 = var9.bind(var3)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var13 = var10[var13];
                        var13 = var9.bind(var3)(var13);
                        var13 = var13.t;
                        var13 = var13.iZ7Mz9;
                        var13 = var14.bind(var15)(var13);
                        var5.accessibilityLabel = var13;
                        var13 = 'button';
                        var5.accessibilityRole = var13;
                        var5.onPress = var12;
                        var11 = var11.emojiButton;
                        var5.style = var11;
                        var5.disabled = var8;
                        var8 = 11;
                        var8 = var10[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.ReactionIcon;
                        var8 = {};
                        var10 = 'md';
                        var8.size = var10;
                        var8 = var7.bind(var3)(var9, var8);
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 478, 7735, 5439, 1234, 4904, 7747, 2]);