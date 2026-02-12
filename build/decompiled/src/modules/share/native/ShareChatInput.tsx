// modules/share/native/ShareChatInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun92412: for (var _fun92412_ip = 0;;) switch (_fun92412_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var14 = 0;
            var6 = var5[var14];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var13 = 2;
            var3 = var5[var13];
            var3 = var4.bind(var0)(var3);
            var12 = var3.Fonts;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot4 = var7;
            var3 = var3.jsxs;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var6 = var8.createStyles;
            var3 = {};
            var9 = {
                'flex': 1,
                'flexDirection': 'row',
                'backgroundColor': null,
                'borderRadius': 20
            };
            var10 = 5;
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.REDESIGN_CHAT_INPUT_BACKGROUND;
            var9.backgroundColor = var15;
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_12;
            var9.paddingHorizontal = var15;
            var3.container = var9;
            var9 = {
                'flex': 1,
                'paddingVertical': 0,
                'paddingHorizontal': null,
                'maxHeight': 80
            };
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_4;
            var9.paddingHorizontal = var15;
            var3.chatInput = var9;
            var9 = {
                'fontSize': 16,
                'lineHeight': 20
            };
            var12 = var12.PRIMARY_NORMAL;
            var9.fontFamily = var12;
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_STRONG;
            var9.color = var12;
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var15 = 6;
            var15 = var5[var15];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isAndroid;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun92412_ip = 374;
                continue _fun92412
            }
        case 372:
            var13 = 0;
        case 374:
            var12 = var12 + var13;
            var9.paddingTop = var12;
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var9.paddingBottom = var12;
            var3.chatText = var9;
            var9 = {};
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_MUTED;
            var9.color = var12;
            var3.inputPlaceholder = var9;
            var9 = {};
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var9.paddingTop = var12;
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var9.paddingBottom = var10;
            var10 = 'flex-end';
            var9.alignSelf = var10;
            var3.emojiButton = var9;
            var3 = var6.bind(var8)(var3);
            var _closure1_slot6 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.ReactionIcon;
            var3 = {};
            var8 = 'md';
            var3.size = var8;
            var3 = var7.bind(var0)(var6, var3);
            var _closure1_slot7 = var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/share/native/ShareChatInput.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun92413: for (var _fun92413_ip = 0;;) switch (_fun92413_ip) {
                    case 0:
                        var0 = arg0;
                        var17 = var0.text;
                        var15 = var0.inputRef;
                        var14 = var0.onChange;
                        var18 = var0.onSelectionChange;
                        var13 = var0.onFocus;
                        var6 = var0.onBlur;
                        var11 = var0.onPressEmoji;
                        var19 = var0.onSend;
                        var9 = var0.disabled;
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun92413_ip = 63;
                            continue _fun92413
                        }
                    case 61:
                        var9 = false;
                    case 63:
                        var0 = _closure1_slot6;
                        var10 = var0.bind(var3)();
                        var5 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var0 = 8;
                        var0 = var16[var0];
                        var0 = var5.bind(var3)(var0);
                        var12 = var0.bind(var3)();
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var4 = var10.container;
                        var0.style = var4;
                        var7 = _closure1_slot4;
                        var4 = 9;
                        var4 = var16[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var4.ref = var15;
                        var4.maxLength = var12;
                        var15 = _closure1_slot0;
                        var12 = 10;
                        var20 = var16[var12];
                        var20 = var15.bind(var3)(var20);
                        var22 = var20.intl;
                        var21 = var22.string;
                        var20 = var16[var12];
                        var20 = var15.bind(var3)(var20);
                        var20 = var20.t;
                        var20 = var20.ZroO3G;
                        var20 = var21.bind(var22)(var20);
                        var4.placeholder = var20;
                        var20 = var10.inputPlaceholder;
                        var20 = var20.color;
                        var4.placeholderTextColor = var20;
                        var20 = var16[var12];
                        var20 = var15.bind(var3)(var20);
                        var22 = var20.intl;
                        var21 = var22.string;
                        var20 = var16[var12];
                        var20 = var15.bind(var3)(var20);
                        var20 = var20.t;
                        var20 = var20["/+MXmw"];
                        var20 = var21.bind(var22)(var20);
                        var4.accessibilityLabel = var20;
                        var4.onSubmitEditing = var19;
                        var4.onSelectionChange = var18;
                        var18 = var10.chatInput;
                        var4.style = var18;
                        var4.value = var17;
                        var4.onChange = var14;
                        var4.onFocus = var13;
                        var4.onBlur = var6;
                        var6 = true;
                        var4.multiline = var6;
                        var6 = false;
                        var4.showBorder = var6;
                        var4.showTopContainer = var6;
                        var6 = 'center';
                        var4.textAlignVertical = var6;
                        var6 = var10.chatText;
                        var4.inputTextStyle = var6;
                        var6 = !var9;
                        var4.editable = var6;
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = 11;
                        var5 = var16[var5];
                        var5 = var15.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var13 = var16[var12];
                        var13 = var15.bind(var3)(var13);
                        var14 = var13.intl;
                        var13 = var14.string;
                        var12 = var16[var12];
                        var12 = var15.bind(var3)(var12);
                        var12 = var12.t;
                        var12 = var12.iZ7Mz9;
                        var12 = var13.bind(var14)(var12);
                        var5.accessibilityLabel = var12;
                        var12 = 'button';
                        var5.accessibilityRole = var12;
                        var5.onPress = var11;
                        var10 = var10.emojiButton;
                        var5.style = var10;
                        var5.disabled = var9;
                        var8 = _closure1_slot7;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 478, 7249, 8101, 5450, 1234, 4880, 2]);