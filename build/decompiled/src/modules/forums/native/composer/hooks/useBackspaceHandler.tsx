// modules/forums/native/composer/hooks/useBackspaceHandler.tsx
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
    var3 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/hooks/useBackspaceHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useBackspaceHandler, environment: var1
        var1 = arg0;
        var6 = var1.selection;
        var _closure2_slot0 = var6;
        var5 = var1.draftContent;
        var _closure2_slot1 = var5;
        var4 = var1.handleTextChange;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun73687: for (var _fun73687_ip = 0;;) switch (_fun73687_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.start;
                    var9 = var0.end;
                    var5 = 0;
                    if (!(var5 !== var4)) {
                        _fun73687_ip = 261;
                        continue _fun73687
                    }
                case 26:
                    var0 = null;
                    var0 = var0 == var9;
                    var6 = 1;
                    var3 = var6;
                    if (var0) {
                        _fun73687_ip = 95;
                        continue _fun73687
                    }
                case 41:
                    var3 = var6;
                    if (!(var4 !== var9)) {
                        _fun73687_ip = 95;
                        continue _fun73687
                    }
                case 48:
                    var7 = _closure2_slot2;
                    var8 = _closure2_slot1;
                    var0 = var8.substring;
                    var2 = var0.bind(var8)(var5, var4);
                    var0 = var8.substring;
                    var0 = var0.bind(var8)(var9);
                    var2 = var2 + var0;
                    var0 = undefined;
                    var0 = var7.bind(var0)(var2);
                    _fun73687_ip = 261;
                    continue _fun73687;
                case 95:
                    if (!(var4 >= var3)) {
                        _fun73687_ip = 139;
                        continue _fun73687
                    }
                case 99:
                    var8 = _closure1_slot1;
                    var7 = var8.test;
                    var10 = _closure2_slot1;
                    var9 = var10.substring;
                    var0 = var4 - var3;
                    var0 = var9.bind(var10)(var0, var4);
                    var0 = var7.bind(var8)(var0);
                    if (var0) {
                        _fun73687_ip = 144;
                        continue _fun73687
                    }
                case 139:
                    var7 = var3 + 1;
                    _fun73687_ip = 202;
                    continue _fun73687;
                case 144:
                    var8 = var3 + var6;
                    var0 = var3;
                    if (!(var4 >= var8)) {
                        _fun73687_ip = 215;
                        continue _fun73687
                    }
                case 155:
                    var9 = _closure1_slot1;
                    var8 = var9.test;
                    var11 = _closure2_slot1;
                    var10 = var11.substring;
                    var2 = var4 - var3;
                    var2 = var2 - var6;
                    var2 = var10.bind(var11)(var2, var4);
                    var2 = var8.bind(var9)(var2);
                    var0 = var3;
                    if (!var2) {
                        _fun73687_ip = 215;
                        continue _fun73687
                    }
                case 199:
                    var7 = var3 + 1;
                case 202:
                    var2 = 8;
                    var3 = var7;
                    var0 = var6;
                    if (var3 <= var2) {
                        _fun73687_ip = 95;
                        continue _fun73687
                    }
                case 215:
                    var2 = _closure2_slot2;
                    var3 = _closure2_slot1;
                    var1 = var3.substring;
                    var0 = var4 - var0;
                    var1 = var1.bind(var3)(var5, var0);
                    var0 = var3.substring;
                    var0 = var0.bind(var3)(var4);
                    var1 = var1 + var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 261:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useBackspaceHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);