// utils/native/HcaptchaModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var7 = var3.ActivityIndicator;
    var _closure1_slot4 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ModalAnimation;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var1 = function(arg0) { // Original name: HcaptchaModal, environment: var1
        _fun112751: for (var _fun112751_ip = 0;;) switch (_fun112751_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var6.bind(var7)(var1, var0);
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var2 = var1.bind(var2)();
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.routes;
                var4 = var2.length;
                var1 = 0;
                var4 = var4 > var1;
                if (!var4) {
                    _fun112751_ip = 134;
                    continue _fun112751
                }
            case 117:
                var1 = var2[var1];
                var2 = var1.name;
                var1 = 'auth';
                var4 = var1 === var2;
            case 134:
                if (var4) {
                    _fun112751_ip = 190;
                    continue _fun112751
                }
            case 137:
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun112751_ip = 154;
                    continue _fun112751
                }
            case 148:
                var1 = var0.ageVerificationStatus;
            case 154:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AgeVerificationStatusUkAndAusOnly;
                var0 = var0.CLIENT_ONLY_PENDING;
                var4 = var1 === var0;
            case 190:
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var5 = !var4;
                if (var4) {
                    _fun112751_ip = 309;
                    continue _fun112751
                }
            case 215:
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var4 = {};
                var8 = 'small';
                var4.size = var8;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 10;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.isAndroid;
                var9 = var8.bind(var9)();
                var8 = undefined;
                if (!var9) {
                    _fun112751_ip = 299;
                    continue _fun112751
                }
            case 268:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 11;
                var9 = var12[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.unsafe_rawColors;
                var8 = var9.WHITE;
            case 299:
                var4.color = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 309:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = _closure1_slot5;
                var8 = var8.absoluteFillObject;
                var5.style = var8;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 12;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var13 = arg0;
                var14 = var8;
                var11 = copyDataProperties(var14, var13);
                var10 = _closure1_slot6;
                var11 = var10.locale;
                var10 = 'languageCode';
                var8[var10] = var11;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = {};
    var6 = var6.FADE;
    var3.animation = var6;
    var1.modalConfig = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/HcaptchaModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 1613, 660, 33, 1297, 566, 1469, 1636, 478, 671, 14446, 2]);