// modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var8 = arg0;
        var9 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var7;
        var6 = _closure1_slot3;
        var2 = var6.useRef;
        var1 = '';
        var2 = var2.bind(var6)(var1);
        var _closure2_slot3 = var2;
        var4 = var6.useState;
        var1 = null;
        var5 = var4.bind(var6)(var1);
        var4 = _closure1_slot2;
        var1 = undefined;
        var0 = 2;
        var4 = var4.bind(var1)(var5, var0);
        var0 = 0;
        var1 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var _closure2_slot4 = var0;
        var0 = {};
        var5 = var6.useCallback;
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var3 = function(arg0) { // Environment: var3
            _fun57940: for (var _fun57940_ip = 0;;) switch (_fun57940_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var1 = '';
                    if (!(var1 === var3)) {
                        _fun57940_ip = 63;
                        continue _fun57940
                    }
                case 17:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.batchUpdates;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot3;
                        var0 = '';
                        var2.current = var0;
                        var3 = _closure2_slot4;
                        var0 = undefined;
                        var2 = null;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var4)(var1);
                    _fun57940_ip = 213;
                    continue _fun57940;
                case 63:
                    var8 = 0;
                    var2 = var3[var8];
                    var1 = ':';
                    var9 = var3;
                    if (!(var1 === var2)) {
                        _fun57940_ip = 93;
                        continue _fun57940
                    }
                case 80:
                    var2 = var3.slice;
                    var1 = 1;
                    var9 = var2.bind(var3)(var1);
                case 93:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var5 = var4[var2];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var6 = var5.FrecencyUserSettingsActionCreators;
                    var5 = var6.loadIfNecessary;
                    var5 = var5.bind(var6)();
                    var6 = _closure1_slot4;
                    var5 = var6.searchWithoutFetchingLatest;
                    var1 = {};
                    var10 = _closure2_slot0;
                    var1.channel = var10;
                    var1.query = var9;
                    var1.count = var8;
                    var7 = _closure2_slot2;
                    var1.intention = var7;
                    var1 = var5.bind(var6)(var1);
                    var _closure3_slot1 = var1;
                    var1 = 3;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.batchUpdates;
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot3;
                        var2 = _closure3_slot0;
                        var3.current = var2;
                        var2 = _closure2_slot4;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 213:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var0.handleTextChange = var3;
        var0.searchQueryRef = var2;
        var0.searchResults = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4739, 802, 1355, 2]);