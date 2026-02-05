// design/components/experimental/Button/native/InputButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = ['size', 'isRound', 'text', 'value', 'icon', 'iconPosition', 'accessibilityLabel', 'accessibilityValue', 'maxFontSizeMultiplier'];
    var _closure1_slot2 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Text;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'width': '100%'
    };
    var3.buttonText = var9;
    var9 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_PLACEHOLDER_TEXT_DEFAULT;
    var9.color = var12;
    var3.buttonTextPlaceholder = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_TERTIARY_TEXT;
    var9.color = var10;
    var3.buttonTextValue = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun57601: for (var _fun57601_ip = 0;;) switch (_fun57601_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.size;
                var17 = 'lg';
                var3 = undefined;
                if (!(var3 !== var0)) {
                    _fun57601_ip = 21;
                    continue _fun57601
                }
            case 18:
                var17 = var0;
            case 21:
                var0 = var5.isRound;
                var11 = var3 !== var0;
                if (!var11) {
                    _fun57601_ip = 37;
                    continue _fun57601
                }
            case 34:
                var11 = var0;
            case 37:
                var7 = var5.text;
                var8 = var5.value;
                var16 = var5.icon;
                var1 = var5.iconPosition;
                var0 = 'start';
                var15 = var0;
                if (!(var3 !== var1)) {
                    _fun57601_ip = 72;
                    continue _fun57601
                }
            case 69:
                var15 = var1;
            case 72:
                var13 = var5.accessibilityLabel;
                var6 = var5.accessibilityValue;
                var10 = var5.maxFontSizeMultiplier;
                if (!(var3 === var10)) {
                    _fun57601_ip = 122;
                    continue _fun57601
                }
            case 93:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var10 = var1.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
            case 122:
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var5 = var2.bind(var3)(var5, var1);
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 7;
                var1 = var9[var1];
                var9 = var2.bind(var3)(var1);
                var2 = var9.useInputStyles;
                var1 = {};
                var1.size = var17;
                var1.isRound = var11;
                var0 = var0 === var15;
                var1.hasLeadingIcon = var0;
                var11 = var2.bind(var9)(var1);
                var1 = _closure1_slot6;
                var14 = var1.bind(var3)();
                var9 = null;
                if (!(var9 == var16)) {
                    _fun57601_ip = 208;
                    continue _fun57601
                }
            case 204:
                var12 = {};
                _fun57601_ip = 258;
                continue _fun57601;
            case 208:
                var1 = {};
                if (var0) {
                    _fun57601_ip = 235;
                    continue _fun57601
                }
            case 213:
                var0 = var11.trailingIcon;
                var0 = var0.paddingStart;
                var1.paddingEnd = var0;
                var0 = var1;
                _fun57601_ip = 255;
                continue _fun57601;
            case 235:
                var2 = var11.leadingIcon;
                var2 = var2.paddingEnd;
                var1.paddingStart = var2;
                var0 = var1;
            case 255:
                var12 = var0;
            case 258:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var18 = _closure1_slot1;
                var0 = 8;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseTextButton;
                var0 = {};
                var20 = var0;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var18 = arg1;
                var5 = 'ref';
                var0[var5] = var18;
                var5 = 'size';
                var0[var5] = var17;
                var17 = 'tertiary';
                var5 = 'variant';
                var0[var5] = var17;
                var5 = 'icon';
                var0[var5] = var16;
                var5 = 'iconPosition';
                var0[var5] = var15;
                var5 = var11.padding;
                var15 = new Array(2);
                var15[0] = var5;
                var5 = var11.radius;
                var15[1] = var5;
                var5 = 'pillStyle';
                var0[var5] = var15;
                if (!(var9 == var13)) {
                    _fun57601_ip = 409;
                    continue _fun57601
                }
            case 388:
                var15 = var9 == var7;
                var5 = undefined;
                if (var15) {
                    _fun57601_ip = 406;
                    continue _fun57601
                }
            case 397:
                var15 = var7.toString;
                var5 = var15.bind(var7)();
            case 406:
                var13 = var5;
            case 409:
                var5 = 'accessibilityLabel';
                var0[var5] = var13;
                if (!(var9 == var6)) {
                    _fun57601_ip = 431;
                    continue _fun57601
                }
            case 422:
                var5 = {};
                var5.text = var8;
                var6 = var5;
            case 431:
                var5 = 'accessibilityValue';
                var0[var5] = var6;
                var6 = _closure1_slot5;
                var5 = _closure1_slot4;
                var4 = {};
                var13 = var11.text;
                var11 = new Array(4);
                var11[0] = var13;
                var13 = var14.buttonText;
                var11[1] = var13;
                if (!(var9 == var8)) {
                    _fun57601_ip = 485;
                    continue _fun57601
                }
            case 477:
                var13 = var14.buttonTextPlaceholder;
                _fun57601_ip = 491;
                continue _fun57601;
            case 485:
                var13 = var14.buttonTextValue;
            case 491:
                var11[2] = var13;
                var11[3] = var12;
                var4.style = var11;
                var11 = 1;
                var4.numberOfLines = var11;
                var4.maxFontSizeMultiplier = var10;
                if (!(var9 != var8)) {
                    _fun57601_ip = 523;
                    continue _fun57601
                }
            case 520:
                var7 = var8;
            case 523:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'textElement';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/experimental/Button/native/InputButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.InputButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 1297, 671, 4088, 5399, 4085, 2]);