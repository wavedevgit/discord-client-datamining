// design/components/SplitTextInput/native/SplitTextField.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var _closure1_slot2 = var7;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60804: for (var _fun60804_ip = 0;;) switch (_fun60804_ip) {
            case 0:
                var13 = arg0;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useInputStyles;
                var1 = {};
                var7 = var13.size;
                var1.size = var7;
                var7 = var13.isRound;
                var1.isRound = var7;
                var12 = var4.bind(var5)(var1);
                var1 = 4;
                var1 = var6[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useTextField;
                var1 = arg1;
                var1 = var4.bind(var5)(var13, var1);
                var8 = var1.innerRef;
                var4 = var1.inputProps;
                var5 = var1.state;
                var1 = 5;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useInputClearButtonConfig;
                var5 = var1.bind(var2)(var13, var5);
                var2 = null;
                var1 = var2 != var5;
                var6 = undefined;
                if (!var1) {
                    _fun60804_ip = 166;
                    continue _fun60804
                }
            case 140:
                var1 = {};
                var7 = var5.content;
                var1.trailing = var7;
                var5 = var5.pressableProps;
                var1.trailingPressableProps = var5;
                var6 = var1;
            case 166:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var16 = 6;
                var1 = var1[var16];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useInputAttachments;
                var1 = var1.bind(var5)(var13, var6);
                var6 = var1.trailing;
                var5 = var1.inputStyle;
                var1 = var13.leadingText;
                var1 = var2 != var1;
                var7 = null;
                if (!var1) {
                    _fun60804_ip = 366;
                    continue _fun60804
                }
            case 228:
                var1 = var13.leadingText;
                var9 = var1.length;
                var1 = 0;
                var1 = var9 > var1;
                var7 = null;
                if (!var1) {
                    _fun60804_ip = 366;
                    continue _fun60804
                }
            case 250:
                var9 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var10 = var12.splitBorder;
                var1.style = var10;
                var11 = _closure1_slot2;
                var10 = {};
                var14 = function(arg0) { // Original name: style, environment: var14
                    _fun60805: for (var _fun60805_ip = 0;;) switch (_fun60805_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.pressed;
                            var1 = undefined;
                            if (!var0) {
                                _fun60805_ip = 33;
                                continue _fun60805
                            }
                        case 14:
                            var0 = {};
                            var2 = 0.2;
                            var0.opacity = var2;
                            var1 = var0;
                        case 33:
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var10.style = var14;
                var18 = var13.leadingPressableProps;
                var19 = var10;
                var14 = copyDataProperties(var19, var18);
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var16];
                var15 = var15.bind(var3)(var14);
                var14 = var15.renderInputAttachment;
                var13 = var13.leadingText;
                var12 = var12.text;
                var13 = var14.bind(var15)(var3, var13, var12);
                var12 = 'children';
                var10[var12] = var13;
                var10 = var9.bind(var3)(var11, var10);
                var1.children = var10;
                var7 = var9.bind(var3)(var2, var1);
            case 366:
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 7;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseTextField;
                var0 = {};
                var19 = var0;
                var18 = var4;
                var4 = copyDataProperties(var19, var18);
                var4 = 'ref';
                var0[var4] = var8;
                var4 = 'leading';
                var0[var4] = var7;
                var4 = 'trailing';
                var0[var4] = var6;
                var4 = 'inputStyle';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/SplitTextInput/native/SplitTextField.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SplitTextField = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5356, 5358, 5364, 5365, 5367, 2]);