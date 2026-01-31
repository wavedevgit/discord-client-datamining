// modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 4;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9.borderRadius = var14;
    var9.height = var13;
    var9.width = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.marginHorizontal = var13;
    var9.flexShrink = var12;
    var12 = 'row';
    var9.flexDirection = var12;
    var12 = 'center';
    var9.alignItems = var12;
    var9.justifyContent = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9.backgroundColor = var12;
    var3.actionButton = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_TEXT;
    var9.tintColor = var12;
    var3.actionButtonIcon = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT;
    var9.tintColor = var12;
    var3.actionButtonIconActive = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_MUTED;
    var9.tintColor = var10;
    var3.actionButtonIconDisabled = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot3 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90253: for (var _fun90253_ip = 0;;) switch (_fun90253_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.active;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun90253_ip = 17;
                    continue _fun90253
                }
            case 15:
                var10 = false;
            case 17:
                var18 = var0.style;
                var19 = var0.activeStyle;
                var11 = var0.activeIconStyle;
                var8 = var0.disabled;
                var5 = var0.onPress;
                var15 = var0.accessible;
                var14 = var0.accessibilityLabel;
                var13 = var0.accessibilityHint;
                var16 = var0.accessibilityState;
                var12 = var0.accessibilityActions;
                var7 = var0.onAccessibilityAction;
                var6 = var0.IconComponent;
                var0 = _closure1_slot3;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var17 = _closure1_slot1;
                var0 = 5;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var17 = arg1;
                var0.ref = var17;
                var20 = var9.actionButton;
                var17 = new Array(3);
                var17[0] = var20;
                var17[1] = var18;
                var18 = var10;
                if (!var10) {
                    _fun90253_ip = 160;
                    continue _fun90253
                }
            case 157:
                var18 = !var8;
            case 160:
                if (!var18) {
                    _fun90253_ip = 166;
                    continue _fun90253
                }
            case 163:
                var18 = var19;
            case 166:
                var17[2] = var18;
                var0.style = var17;
                var0.disabled = var8;
                var0.accessible = var15;
                var15 = 'button';
                var0.accessibilityRole = var15;
                var15 = {};
                var15.disabled = var8;
                var22 = var15;
                var21 = var16;
                var16 = copyDataProperties(var22, var21);
                var0.accessibilityState = var15;
                var0.accessibilityLabel = var14;
                var0.accessibilityHint = var13;
                var0.accessibilityActions = var12;
                var0.onAccessibilityAction = var7;
                var0.onPress = var5;
                var5 = _closure1_slot2;
                var4 = {};
                var12 = var9.actionButtonIcon;
                var7 = new Array(4);
                var7[0] = var12;
                var12 = var10;
                if (!var10) {
                    _fun90253_ip = 266;
                    continue _fun90253
                }
            case 260:
                var12 = var9.actionButtonIconActive;
            case 266:
                var7[1] = var12;
                if (!var10) {
                    _fun90253_ip = 276;
                    continue _fun90253
                }
            case 273:
                var10 = var11;
            case 276:
                var7[2] = var10;
                if (!var8) {
                    _fun90253_ip = 289;
                    continue _fun90253
                }
            case 283:
                var8 = var9.actionButtonIconDisabled;
            case 289:
                var7[3] = var8;
                var4.style = var7;
                var4 = var5.bind(var3)(var6, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/action_buttons/ChatInputActionButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11559, 33, 1297, 671, 4865, 2]);