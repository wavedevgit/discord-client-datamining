// utils/getDeprecatedModalData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ModalAnimation;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/getDeprecatedModalData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: getDeprecatedModalData, environment: var1
        _fun41060: for (var _fun41060_ip = 0;;) switch (_fun41060_ip) {
            case 0:
                var2 = arg1;
                var4 = arguments[3];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun41060_ip = 14;
                    continue _fun41060
                }
            case 12:
                var4 = null;
            case 14:
                var0 = {};
                var3 = var2.key;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun41060_ip = 30;
                    continue _fun41060
                }
            case 27:
                var4 = var3;
            case 30:
                var5 = var1 != var4;
                var3 = 'modal';
                if (!var5) {
                    _fun41060_ip = 44;
                    continue _fun41060
                }
            case 41:
                var3 = var4;
            case 44:
                var0.key = var3;
                var3 = arg0;
                var0.modal = var3;
                var3 = var2.animation;
                if (!(var1 == var3)) {
                    _fun41060_ip = 103;
                    continue _fun41060
                }
            case 66:
                var4 = _closure1_slot0;
                var4 = var4.useReducedMotion;
                var5 = _closure1_slot1;
                if (var4) {
                    _fun41060_ip = 94;
                    continue _fun41060
                }
            case 86:
                var4 = var5.SLIDE_UP;
                _fun41060_ip = 100;
                continue _fun41060;
            case 94:
                var4 = var5.FADE;
            case 100:
                var3 = var4;
            case 103:
                var0.animation = var3;
                var4 = var2.shouldPersistUnderModals;
                var3 = var1 != var4;
                if (!var3) {
                    _fun41060_ip = 124;
                    continue _fun41060
                }
            case 121:
                var3 = var4;
            case 124:
                var0.shouldPersistUnderModals = var3;
                var3 = arg2;
                var0.props = var3;
                var4 = var2.backdropStyle;
                var5 = var1 != var4;
                var3 = null;
                if (!var5) {
                    _fun41060_ip = 154;
                    continue _fun41060
                }
            case 151:
                var3 = var4;
            case 154:
                var0.backdropStyle = var3;
                var4 = var2.backdropInstant;
                var3 = var1 != var4;
                if (!var3) {
                    _fun41060_ip = 175;
                    continue _fun41060
                }
            case 172:
                var3 = var4;
            case 175:
                var0.backdropInstant = var3;
                var4 = var2.disableAnimation;
                var3 = var1 != var4;
                if (!var3) {
                    _fun41060_ip = 196;
                    continue _fun41060
                }
            case 193:
                var3 = var4;
            case 196:
                var0.disableAnimation = var3;
                var3 = var2.closable;
                var4 = 'boolean';
                var3 = typeof var3;
                var3 = var4 !== var3;
                if (var3) {
                    _fun41060_ip = 227;
                    continue _fun41060
                }
            case 221:
                var3 = var2.closable;
            case 227:
                var0.closable = var3;
                var2 = var2.label;
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun41060_ip = 251;
                    continue _fun41060
                }
            case 248:
                var1 = var2;
            case 251:
                var0.label = var1;
                var1 = {};
                var0.callbacks = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 660, 2]);