// modules/user_profile/native/UserProfileEditFormTextField.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditFormTextField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80822: for (var _fun80822_ip = 0;;) switch (_fun80822_ip) {
            case 0:
                var10 = arg0;
                var9 = var10.label;
                var8 = var10.description;
                var3 = var10.errorMessage;
                var7 = var10.containerStyle;
                var1 = var10.numberOfLines;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun80822_ip = 40;
                    continue _fun80822
                }
            case 37:
                var1 = 1;
            case 40:
                var6 = var10.inputRef;
                var5 = {
                    'label': 0,
                    'description': 0,
                    'errorMessage': 0,
                    'containerStyle': 0,
                    'numberOfLines': 0,
                    'inputRef': 0
                };
                var2 = null;
                var13 = var5;
                var12 = null;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var10;
                var11 = var5;
                var0 = copyDataProperties(var13, var12, var11);
                var5 = {};
                var5.label = var9;
                var5.description = var8;
                var5.errorMessage = var3;
                var5.containerStyle = var7;
                var3 = var2 != var3;
                var2 = undefined;
                if (!var3) {
                    _fun80822_ip = 116;
                    continue _fun80822
                }
            case 112:
                var2 = 'error';
            case 116:
                var5.status = var2;
                var13 = var5;
                var12 = var0;
                var0 = copyDataProperties(var13, var12);
                var0 = 1;
                if (!(!(var1 > var0))) {
                    _fun80822_ip = 205;
                    continue _fun80822
                }
            case 137:
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.TextInput;
                var0 = {};
                var0.ref = var6;
                var13 = var0;
                var12 = var5;
                var3 = copyDataProperties(var13, var12);
                var7 = true;
                var3 = 'isClearable';
                var0[var3] = var7;
                var0 = var2.bind(var4)(var1, var0);
                _fun80822_ip = 260;
                continue _fun80822;
            case 205:
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TextArea;
                var1 = {};
                var1.ref = var6;
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var0 = var3.bind(var4)(var2, var1);
            case 260:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5451, 5464, 2]);