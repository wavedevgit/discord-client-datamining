// modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var8 = var1.selection;
        var _closure2_slot0 = var8;
        var7 = var1.draftContent;
        var _closure2_slot1 = var7;
        var6 = var1.handleTextChange;
        var _closure2_slot2 = var6;
        var5 = var1.focusTextInput;
        var _closure2_slot3 = var5;
        var4 = var1.setSelection;
        var _closure2_slot4 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useRef;
        var1 = {};
        var1.selection = var8;
        var1.draftContent = var7;
        var1.handleTextChange = var6;
        var1.focusTextInput = var5;
        var1.setSelection = var4;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot5 = var1;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot5;
            var0 = {};
            var3 = _closure2_slot0;
            var0.selection = var3;
            var3 = _closure2_slot1;
            var0.draftContent = var3;
            var3 = _closure2_slot2;
            var0.handleTextChange = var3;
            var3 = _closure2_slot3;
            var0.focusTextInput = var3;
            var2 = _closure2_slot4;
            var0.setSelection = var2;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var3.useCallback;
        var1 = function(arg0) { // Environment: var0
            _fun73859: for (var _fun73859_ip = 0;;) switch (_fun73859_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot5;
                    var3 = var0.current;
                    var0 = var3.selection;
                    var9 = var3.draftContent;
                    var7 = var3.handleTextChange;
                    var1 = var3.focusTextInput;
                    var3 = var3.setSelection;
                    var6 = var9.substring;
                    var5 = var0.start;
                    var4 = 0;
                    var4 = var6.bind(var9)(var4, var5);
                    var8 = var9.substring;
                    var6 = var0.end;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun73859_ip = 86;
                        continue _fun73859
                    }
                case 81:
                    var6 = var0.start;
                case 86:
                    var6 = var8.bind(var9)(var6);
                    var0 = var0.start;
                    var0 = var2.id;
                    if (!(var5 == var0)) {
                        _fun73859_ip = 114;
                        continue _fun73859
                    }
                case 105:
                    var0 = var2.surrogates;
                    if (!(var5 == var0)) {
                        _fun73859_ip = 223;
                        continue _fun73859
                    }
                case 114:
                    var0 = var2.uniqueName;
                    if (!(var5 != var0)) {
                        _fun73859_ip = 138;
                        continue _fun73859
                    }
                case 124:
                    var5 = var2.uniqueName;
                    var0 = '';
                    if (!(var0 === var5)) {
                        _fun73859_ip = 145;
                        continue _fun73859
                    }
                case 138:
                    var9 = var2.name;
                    _fun73859_ip = 151;
                    continue _fun73859;
                case 145:
                    var9 = var2.uniqueName;
                case 151:
                    var0 = global;
                    var5 = var0.HermesInternal;
                    var10 = var5.concat;
                    var8 = ':';
                    var5 = ': ';
                    var10 = var10.bind(var8)(var9, var5);
                    var10 = var4 + var10;
                    var11 = var10 + var6;
                    var10 = undefined;
                    var10 = var7.bind(var10)(var11);
                    var0 = var0.HermesInternal;
                    var0 = var0.concat;
                    var0 = var0.bind(var8)(var9, var5);
                    var0 = var4 + var0;
                    var0 = var0.length;
                    _fun73859_ip = 257;
                    continue _fun73859;
                case 223:
                    var5 = var2.surrogates;
                    var5 = var4 + var5;
                    var6 = var5 + var6;
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var2 = var2.surrogates;
                    var2 = var4 + var2;
                    var0 = var2.length;
                case 257:
                    var2 = {};
                    var2.start = var0;
                    var2.end = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.usePressEmojiHandler = var3;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.selection;
        var _closure2_slot0 = var5;
        var8 = var1.draftContent;
        var _closure2_slot1 = var8;
        var6 = var1.handleTextChange;
        var _closure2_slot2 = var6;
        var7 = var1.focusTextInput;
        var _closure2_slot3 = var7;
        var4 = var1.setSelection;
        var _closure2_slot4 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useCallback;
        var1 = new Array(6);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var6 = var5.end;
        var1[3] = var6;
        var5 = var5.start;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun73861: for (var _fun73861_ip = 0;;) switch (_fun73861_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.url;
                    var5 = _closure2_slot1;
                    var6 = var5.substring;
                    var0 = _closure2_slot0;
                    var4 = var0.start;
                    var2 = 0;
                    var2 = var6.bind(var5)(var2, var4);
                    var4 = var5.substring;
                    var0 = var0.end;
                    var6 = null;
                    if (!(var6 == var0)) {
                        _fun73861_ip = 64;
                        continue _fun73861
                    }
                case 55:
                    var6 = _closure2_slot0;
                    var0 = var6.start;
                case 64:
                    var5 = var4.bind(var5)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.start;
                    var0 = var2.endsWith;
                    var4 = ' ';
                    var0 = var0.bind(var2)(var4);
                    var6 = _closure2_slot2;
                    if (var0) {
                        _fun73861_ip = 162;
                        continue _fun73861
                    }
                case 102:
                    var0 = global;
                    var7 = var0.HermesInternal;
                    var7 = var7.concat;
                    var7 = var7.bind(var4)(var3);
                    var7 = var2 + var7;
                    var8 = var7 + var5;
                    var7 = undefined;
                    var7 = var6.bind(var7)(var8);
                    var0 = var0.HermesInternal;
                    var0 = var0.concat;
                    var0 = var0.bind(var4)(var3);
                    var0 = var2 + var0;
                    var0 = var0.length;
                    _fun73861_ip = 186;
                    continue _fun73861;
                case 162:
                    var4 = var2 + var3;
                    var5 = var4 + var5;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var2 = var2 + var3;
                    var0 = var2.length;
                case 186:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var2.start = var0;
                    var2.end = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.usePressGIFHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);