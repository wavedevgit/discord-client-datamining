// design/components/Input/native/useInputAttachments.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function arg0, arg1() {
        _fun48088: for (var _fun48088_ip = 0;;) switch (_fun48088_ip) {
            case 0:
                var1 = null;
                var0 = arg0;
                var1 = var1 != var0;
                var0 = 0;
                if (!var1) {
                    _fun48088_ip = 58;
                    continue _fun48088
                }
            case 14:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ICON_SIZE;
                var2 = var1.xs;
                var1 = arg1;
                var0 = var2 + var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun48089: for (var _fun48089_ip = 0;;) switch (_fun48089_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun48089_ip = 86;
                    continue _fun48089
                }
            case 12:
                var1 = var0 != var6;
                var0 = null;
                if (!var1) {
                    _fun48089_ip = 84;
                    continue _fun48089
                }
            case 21:
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var7 = 'text-md/normal';
                var1.variant = var7;
                var7 = arg2;
                var1.style = var7;
                var1.children = var6;
                var0 = var5.bind(var3)(var2, var1);
            case 84:
                _fun48089_ip = 115;
                continue _fun48089;
            case 86:
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = {
                    'size': 'xs',
                    'color': 'text-default'
                };
                var0 = var3.bind(var2)(var4, var1);
            case 115:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function arg0() {
        _fun48090: for (var _fun48090_ip = 0;;) switch (_fun48090_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.content;
                var1 = var0.style;
                var _closure2_slot0 = var1;
                var3 = var0.setWidth;
                var _closure2_slot1 = var3;
                var7 = var0.pressableProps;
                var3 = null;
                var4 = var3 == var6;
                var0 = null;
                if (var4) {
                    _fun48090_ip = 174;
                    continue _fun48090
                }
            case 49:
                if (!(var3 == var7)) {
                    _fun48090_ip = 94;
                    continue _fun48090
                }
            case 53:
                var5 = _closure1_slot6;
                var4 = _closure1_slot5;
                var3 = {};
                var3.style = var1;
                var1 = function arg0() {
                    var2 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onLayout = var1;
                var3.children = var6;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3);
                _fun48090_ip = 171;
                continue _fun48090;
            case 94:
                var5 = _closure1_slot6;
                var4 = _closure1_slot4;
                var3 = {};
                var8 = 'button';
                var3.role = var8;
                var10 = var3;
                var9 = var7;
                var7 = copyDataProperties(var10, var9);
                var8 = function arg0() {
                    _fun48091: for (var _fun48091_ip = 0;;) switch (_fun48091_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.pressed;
                            var1 = _closure2_slot0;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var1 = {};
                            var3 = 'auto';
                            var1.pointerEvents = var3;
                            var0[1] = var1;
                            var1 = undefined;
                            if (!var2) {
                                _fun48091_ip = 63;
                                continue _fun48091
                            }
                        case 44:
                            var2 = {};
                            var3 = 0.2;
                            var2.opacity = var3;
                            var1 = var2;
                        case 63:
                            var0[2] = var1;
                            return var0;
                    }
                };
                var7 = 'style';
                var3[var7] = var8;
                var7 = function arg0() {
                    var2 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = 'onLayout';
                var3[var2] = var7;
                var2 = 'children';
                var3[var2] = var6;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
            case 171:
                var0 = var1;
            case 174:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var9 = var8[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot2 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.Platform;
    var9 = var6.Pressable;
    var _closure1_slot4 = var9;
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/Input/native/useInputAttachments.native.tsx';
    var6 = var7.bind(var8)(var6);
    var2.estimateAttachmentWidth = var5;
    var2.renderInputAttachment = var4;
    var2.InputAttachmentContainer = var3;
    var1 = function arg0, arg1() {
        _fun48094: for (var _fun48094_ip = 0;;) switch (_fun48094_ip) {
            case 0:
                var6 = arg0;
                var13 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.useInputStyles;
                var3 = {};
                var7 = var6.size;
                var3.size = var7;
                var7 = var6.leadingIcon;
                var12 = null;
                var7 = var12 != var7;
                var3.hasLeadingIcon = var7;
                var3 = var4.bind(var5)(var3);
                var _closure2_slot0 = var3;
                var5 = var6.leadingIcon;
                var _closure2_slot1 = var5;
                var9 = var6.leadingText;
                var17 = var6.leadingPressableProps;
                var4 = var6.trailingIcon;
                var _closure2_slot2 = var4;
                var8 = var6.trailingText;
                var10 = var6.trailingPressableProps;
                var6 = var12 == var13;
                var19 = undefined;
                if (var6) {
                    _fun48094_ip = 135;
                    continue _fun48094
                }
            case 129:
                var19 = var13.leading;
            case 135:
                if (!(var12 == var19)) {
                    _fun48094_ip = 155;
                    continue _fun48094
                }
            case 139:
                var7 = _closure1_slot8;
                var6 = var3.text;
                var19 = var7.bind(var2)(var5, var9, var6);
            case 155:
                var6 = var12 == var13;
                var14 = undefined;
                if (var6) {
                    _fun48094_ip = 170;
                    continue _fun48094
                }
            case 164:
                var14 = var13.trailing;
            case 170:
                if (!(var12 == var14)) {
                    _fun48094_ip = 190;
                    continue _fun48094
                }
            case 174:
                var7 = _closure1_slot8;
                var6 = var3.text;
                var14 = var7.bind(var2)(var4, var8, var6);
            case 190:
                if (!(var12 == var5)) {
                    _fun48094_ip = 213;
                    continue _fun48094
                }
            case 194:
                var6 = var12 == var13;
                var5 = undefined;
                if (var6) {
                    _fun48094_ip = 209;
                    continue _fun48094
                }
            case 203:
                var5 = var13.leading;
            case 209:
                if (!(var12 != var5)) {
                    _fun48094_ip = 221;
                    continue _fun48094
                }
            case 213:
                var16 = var3.leadingIcon;
                _fun48094_ip = 227;
                continue _fun48094;
            case 221:
                var16 = var3.leadingText;
            case 227:
                if (!(var12 == var4)) {
                    _fun48094_ip = 250;
                    continue _fun48094
                }
            case 231:
                var5 = var12 == var13;
                var4 = undefined;
                if (var5) {
                    _fun48094_ip = 246;
                    continue _fun48094
                }
            case 240:
                var4 = var13.trailing;
            case 246:
                if (!(var12 != var4)) {
                    _fun48094_ip = 258;
                    continue _fun48094
                }
            case 250:
                var9 = var3.trailingIcon;
                _fun48094_ip = 264;
                continue _fun48094;
            case 258:
                var9 = var3.trailingText;
            case 264:
                var15 = _closure1_slot3;
                var5 = var15.useState;
                var4 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.leadingIcon;
                    var1 = var1.paddingStart;
                    var0 = var0.leadingIcon;
                    var0 = var0.paddingEnd;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5 = var5.bind(var15)(var4);
                var7 = _closure1_slot2;
                var4 = 2;
                var11 = var7.bind(var2)(var5, var4);
                var5 = 0;
                var8 = var11[var5];
                var6 = 1;
                var18 = var11[var6];
                var11 = var15.useState;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var1 = var0.trailingIcon;
                    var1 = var1.paddingStart;
                    var0 = var0.trailingIcon;
                    var0 = var0.paddingEnd;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var11.bind(var15)(var0);
                var0 = var7.bind(var2)(var0, var4);
                var4 = var0[var5];
                var11 = var0[var6];
                var0 = {};
                var15 = _closure1_slot6;
                var7 = _closure1_slot9;
                var6 = {};
                var6.content = var19;
                var6.setWidth = var18;
                var19 = var12 == var13;
                var18 = undefined;
                if (var19) {
                    _fun48094_ip = 374;
                    continue _fun48094
                }
            case 368:
                var18 = var13.leadingPressableProps;
            case 374:
                if (!(var12 != var18)) {
                    _fun48094_ip = 381;
                    continue _fun48094
                }
            case 378:
                var17 = var18;
            case 381:
                var6.pressableProps = var17;
                var6.style = var16;
                var6 = var15.bind(var2)(var7, var6);
                var0.leading = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot9;
                var1 = {};
                var1.content = var14;
                var1.setWidth = var11;
                var14 = var12 == var13;
                var11 = undefined;
                if (var14) {
                    _fun48094_ip = 435;
                    continue _fun48094
                }
            case 429:
                var11 = var13.trailingPressableProps;
            case 435:
                if (!(var12 != var11)) {
                    _fun48094_ip = 442;
                    continue _fun48094
                }
            case 439:
                var10 = var11;
            case 442:
                var1.pressableProps = var10;
                var1.style = var9;
                var1 = var7.bind(var2)(var6, var1);
                var0.trailing = var1;
                var1 = {};
                var6 = undefined;
                if (!(var5 !== var8)) {
                    _fun48094_ip = 484;
                    continue _fun48094
                }
            case 470:
                var7 = var3.padding;
                var7 = var7.paddingHorizontal;
                var6 = var8 - var7;
            case 484:
                var1.marginStart = var6;
                var2 = undefined;
                if (!(var5 !== var4)) {
                    _fun48094_ip = 509;
                    continue _fun48094
                }
            case 495:
                var3 = var3.padding;
                var3 = var3.paddingHorizontal;
                var2 = var4 - var3;
            case 509:
                var1.marginEnd = var2;
                var0.inputStyle = var1;
                return var0;
        }
    };
    var2.useInputAttachments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 5400, 3932, 5390, 2]);