// modules/share/native/ShareScreenFooter.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/ShareScreenFooter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96486: for (var _fun96486_ip = 0;;) switch (_fun96486_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.text;
                var14 = var0.setText;
                var6 = var0.preview;
                var19 = var0.sendLabel;
                var18 = var0.canSend;
                var17 = var0.isSending;
                var9 = var0.onSend;
                var8 = var0.disabled;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun96486_ip = 57;
                    continue _fun96486
                }
            case 55:
                var8 = false;
            case 57:
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 2;
                var0 = var20[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useShareChatInputActions;
                var0 = var0.bind(var1)(var14);
                var16 = var0.textInputRef;
                var4 = var0.isInputFocused;
                var13 = var0.handleSelectionChange;
                var12 = var0.handleMessageFocus;
                var11 = var0.handleMessageBlur;
                var10 = var0.handlePressEmoji;
                var2 = _closure1_slot3;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var20[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.preview = var6;
                var6 = 4;
                var6 = var20[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Button;
                var6 = {
                    'variant': 'primary',
                    'size': 'md'
                };
                var6.text = var19;
                var18 = !var18;
                if (var18) {
                    _fun96486_ip = 199;
                    continue _fun96486
                }
            case 196:
                var18 = var8;
            case 199:
                var6.disabled = var18;
                var18 = undefined;
                if (var17) {
                    _fun96486_ip = 211;
                    continue _fun96486
                }
            case 208:
                var18 = var9;
            case 211:
                var6.onPress = var18;
                var6.loading = var17;
                var6 = var2.bind(var3)(var7, var6);
                var0.sendButton = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var5 = 5;
                var5 = var17[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.inputRef = var16;
                var5.text = var15;
                var5.onChange = var14;
                var5.onSelectionChange = var13;
                var5.onFocus = var12;
                var5.onBlur = var11;
                var5.onPressEmoji = var10;
                var5.onSend = var9;
                var5.disabled = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.chatInput = var5;
                var0.avoidKeyboard = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9177, 9178, 4084, 9186, 2]);