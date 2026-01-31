// modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx
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
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useMediaKeyboardItemsPerRow, environment: var1
        _fun75594: for (var _fun75594_ip = 0;;) switch (_fun75594_ip) {
            case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 2;
                var3 = var2[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var6 = var3.ChatInputIaMobileExperiment;
                var4 = var6.useConfig;
                var3 = {};
                var7 = 'useMediaKeyboardItemsPerRow';
                var3.location = var7;
                var3 = var4.bind(var6)(var3);
                var3 = var3.resizePictures;
                var4 = _closure1_slot1;
                var7 = 1;
                var2 = var2[var7];
                var2 = var4.bind(var5)(var2);
                var6 = var2.bind(var5)();
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var5)(var2);
                var2 = var2.WindowSizeClassifier;
                if (var3) {
                    _fun75594_ip = 130;
                    continue _fun75594
                }
            case 106:
                var3 = var2.LARGE;
                var4 = var6 >= var3;
                var3 = 3;
                if (!var4) {
                    _fun75594_ip = 125;
                    continue _fun75594
                }
            case 122:
                var3 = 6;
            case 125:
                _fun75594_ip = 309;
                continue _fun75594;
            case 130:
                var2 = var2.XLARGE;
                var3 = 8;
                if (!(var2 !== var6)) {
                    _fun75594_ip = 309;
                    continue _fun75594
                }
            case 146:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var5)(var2);
                var2 = var2.WindowSizeClassifier;
                var2 = var2.LARGE;
                var3 = 6;
                if (!(var2 !== var6)) {
                    _fun75594_ip = 309;
                    continue _fun75594
                }
            case 185:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var5)(var2);
                var2 = var2.WindowSizeClassifier;
                var2 = var2.NORMAL;
                var3 = 4;
                if (!(var2 !== var6)) {
                    _fun75594_ip = 309;
                    continue _fun75594
                }
            case 221:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var5)(var2);
                var2 = var2.WindowSizeClassifier;
                var2 = var2.SMALL;
                var3 = 3;
                if (!(var2 !== var6)) {
                    _fun75594_ip = 309;
                    continue _fun75594
                }
            case 257:
                var2 = global;
                var5 = var2.Error;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = 'Unknown window size classifier: ';
                var9 = var4.bind(var2)(var6);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var4;
                var2 = new var10[var5](var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 309:
                var _closure2_slot0 = var3;
                var6 = _closure1_slot3;
                var1 = var6.useRef;
                var2 = 17;
                var2 = var2 * var3;
                var1 = var1.bind(var6)(var2);
                var _closure2_slot1 = var1;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var3;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = 17;
                    var0 = var0 * var2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.itemsPerRow = var3;
                var0.itemsPageSize = var2;
                var0.itemsPageSizeRef = var1;
                return var0;
        }
    };
    var2.useMediaKeyboardItemsPerRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3882, 9546, 2]);