// modules/interaction_components/native/actions/TextInputActionComponent.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun113413: for (var _fun113413_ip = 0;;) switch (_fun113413_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.type;
                var _closure2_slot0 = var14;
                var3 = var0.style;
                var8 = var0.label;
                var11 = var0.placeholder;
                var7 = var0.required;
                var9 = var0.maxLength;
                var15 = var0.value;
                var _closure2_slot1 = var15;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var12 = var6.bind(var4)(var2);
                var10 = var12.useComponentState;
                var2 = null;
                var13 = var2 != var15;
                var6 = undefined;
                if (!var13) {
                    _fun113413_ip = 106;
                    continue _fun113413
                }
            case 93:
                var13 = {};
                var13.type = var14;
                var13.value = var15;
                var6 = var13;
            case 106:
                var6 = var10.bind(var12)(var0, var6);
                var10 = var6.state;
                var _closure2_slot2 = var10;
                var13 = var6.executeStateUpdate;
                var _closure2_slot3 = var13;
                var6 = var6.error;
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 4;
                var10 = var15[var10];
                var12 = var12.bind(var4)(var10);
                var10 = var12.useIsFirstTextInputInModal;
                var0 = var0.id;
                var0 = var10.bind(var12)(var0);
                var15 = _closure1_slot3;
                var12 = var15.useState;
                var10 = function() { // Environment: var5
                    _fun113414: for (var _fun113414_ip = 0;;) switch (_fun113414_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 == var2;
                            var2 = undefined;
                            if (var0) {
                                _fun113414_ip = 27;
                                continue _fun113414
                            }
                        case 18:
                            var0 = _closure2_slot2;
                            var2 = var0.type;
                        case 27:
                            var0 = _closure2_slot0;
                            if (!(var2 !== var0)) {
                                _fun113414_ip = 41;
                                continue _fun113414
                            }
                        case 35:
                            var0 = _closure2_slot1;
                            _fun113414_ip = 50;
                            continue _fun113414;
                        case 41:
                            var1 = _closure2_slot2;
                            var0 = var1.value;
                        case 50:
                            return var0;
                    }
                };
                var12 = var12.bind(var15)(var10);
                var10 = {};
                var10.placeholder = var11;
                var10.maxLength = var9;
                var11 = var2 != var6;
                var9 = 'default';
                if (!var11) {
                    _fun113413_ip = 220;
                    continue _fun113413
                }
            case 216:
                var9 = 'error';
            case 220:
                var10.status = var9;
                var11 = _closure1_slot2;
                var9 = 1;
                var11 = var11.bind(var4)(var12, var9);
                var9 = 0;
                var9 = var11[var9];
                var10.defaultValue = var9;
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var9 = new Array(2);
                var9[0] = var14;
                var9[1] = var13;
                var5 = function(arg0) { // Environment: var5
                    var2 = _closure2_slot3;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.type = var0;
                    var0 = arg0;
                    var1.value = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var11.bind(var12)(var5, var9);
                var10.onChange = var5;
                var10.autoFocus = var0;
                var0 = true;
                var10.isClearable = var0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 5;
                var0 = var0[var9];
                var0 = var5.bind(var4)(var0);
                var0 = var0.TextInputComponentStyle;
                var0 = var0.SMALL;
                if (!(var0 !== var3)) {
                    _fun113413_ip = 420;
                    continue _fun113413
                }
            case 335:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var9];
                var0 = var5.bind(var4)(var0);
                var0 = var0.TextInputComponentStyle;
                var0 = var0.PARAGRAPH;
                var5 = undefined;
                if (!(var0 === var3)) {
                    _fun113413_ip = 468;
                    continue _fun113413
                }
            case 370:
                var9 = _closure1_slot4;
                var3 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 7;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.TextAreaField;
                var0 = {};
                var18 = var0;
                var17 = var10;
                var11 = copyDataProperties(var18, var17);
                var5 = var9.bind(var4)(var3, var0);
                _fun113413_ip = 468;
                continue _fun113413;
            case 420:
                var9 = _closure1_slot4;
                var3 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 6;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.TextField;
                var0 = {};
                var18 = var0;
                var17 = var10;
                var10 = copyDataProperties(var18, var17);
                var5 = var9.bind(var4)(var3, var0);
            case 468:
                var0 = var5;
                if (!(var2 != var8)) {
                    _fun113413_ip = 531;
                    continue _fun113413
                }
            case 475:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 8;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Input;
                var1 = {};
                var1.label = var8;
                var1.required = var7;
                var1.errorMessage = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 531:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/TextInputActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 6786, 14501, 1636, 5366, 5358, 5353, 2]);