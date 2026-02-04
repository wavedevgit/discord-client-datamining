// modules/forums/native/composer/hooks/useFocusHandlers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var7 = 0;
    var4 = var5[var7];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var6 = 1;
    var4 = var5[var6];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var3 = {};
    var3.TITLE = var7;
    var4 = 'TITLE';
    var3[var7] = var4;
    var3.CONTENT = var6;
    var4 = 'CONTENT';
    var3[var6] = var4;
    var _closure1_slot2 = var3;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/hooks/useFocusHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PostComposerInputs = var3;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.titleInput;
        var _closure2_slot0 = var1;
        var0 = var0.contentInput;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot1;
        var3 = var4.useState;
        var1 = _closure1_slot2;
        var1 = var1.TITLE;
        var4 = var3.bind(var4)(var1);
        var3 = _closure1_slot0;
        var1 = undefined;
        var0 = 2;
        var4 = var3.bind(var1)(var4, var0);
        var0 = 0;
        var1 = var4[var0];
        var _closure2_slot2 = var1;
        var0 = {};
        var3 = 1;
        var3 = var4[var3];
        var0.setFocusedInput = var3;
        var3 = function() {
            _fun73981: for (var _fun73981_ip = 0;;) switch (_fun73981_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot2;
                    var2 = var2.TITLE;
                    if (!(var3 !== var2)) {
                        _fun73981_ip = 69;
                        continue _fun73981
                    }
                case 24:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot2;
                    var1 = var1.CONTENT;
                    if (!(var2 === var1)) {
                        _fun73981_ip = 94;
                        continue _fun73981
                    }
                case 42:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun73981_ip = 94;
                        continue _fun73981
                    }
                case 57:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
                    _fun73981_ip = 94;
                    continue _fun73981;
                case 69:
                    var0 = _closure2_slot0;
                    var1 = var0.current;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun73981_ip = 94;
                        continue _fun73981
                    }
                case 84:
                    var0 = var1.focus;
                    var0 = var0.bind(var1)();
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.focusLastInput = var3;
        var2 = function() {
            _fun73982: for (var _fun73982_ip = 0;;) switch (_fun73982_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot2;
                    var2 = var2.TITLE;
                    if (!(var3 !== var2)) {
                        _fun73982_ip = 69;
                        continue _fun73982
                    }
                case 24:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot2;
                    var1 = var1.CONTENT;
                    if (!(var2 === var1)) {
                        _fun73982_ip = 94;
                        continue _fun73982
                    }
                case 42:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun73982_ip = 94;
                        continue _fun73982
                    }
                case 57:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
                    _fun73982_ip = 94;
                    continue _fun73982;
                case 69:
                    var0 = _closure2_slot0;
                    var1 = var0.current;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun73982_ip = 94;
                        continue _fun73982
                    }
                case 84:
                    var0 = var1.blur;
                    var0 = var0.bind(var1)();
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.blurLastInput = var2;
        var0.focusedInput = var1;
        return var0;
    };
    var2.useFocusHandlers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);