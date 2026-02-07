// modules/image/native/ImagePicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var7 = function arg0, arg1() {
        _fun37681: for (var _fun37681_ip = 0;;) switch (_fun37681_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.mediaType;
                var0 = 'any';
                if (!(var0 === var2)) {
                    _fun37681_ip = 61;
                    continue _fun37681
                }
            case 17:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                var9 = 'mixed';
                if (var0) {
                    _fun37681_ip = 67;
                    continue _fun37681
                }
            case 61:
                var9 = var1.mediaType;
            case 67:
                var7 = var1.selections;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun37681_ip = 83;
                    continue _fun37681
                }
            case 79:
                var7 = new Array(0);
            case 83:
                var0 = var1.disableNewIOSPicker;
                var6 = !var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                var8 = undefined;
                if (!var3) {
                    _fun37681_ip = 138;
                    continue _fun37681
                }
            case 132:
                var8 = 'pageSheet';
            case 138:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var2 = var5.isMetaQuest;
                var5 = var2.bind(var5)();
                var2 = 4;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.launchImageLibrary;
                var2 = {};
                var11 = var2;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = 'mediaType';
                var2[var1] = var9;
                var1 = 'presentationStyle';
                var2[var1] = var8;
                var1 = 'selection';
                var2[var1] = var7;
                var1 = 'useNewIOSPicker';
                var2[var1] = var6;
                var1 = 'forceGetContent';
                var2[var1] = var5;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var7;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.launchCamera;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot6 = var6;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ThemeTypes;
    var _closure1_slot4 = var1;
    var1 = {};
    var1.launchImageLibrary = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.launchImageLibraryAsync = var7;
    var1.launchCamera = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot6;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.launchCameraAsync = var6;
    var3 = function arg0() {
        var0 = arg0;
        var18 = var0.uri;
        var17 = var0.width;
        var16 = var0.height;
        var15 = var0.includeBase64;
        var14 = var0.mimeType;
        var12 = var0.freeStyleCropEnabled;
        var0 = _closure1_slot3;
        var13 = var0.theme;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 5;
        var2 = var8[var0];
        var7 = undefined;
        var2 = var1.bind(var7)(var2);
        var5 = var2.internal;
        var4 = var5.resolveSemanticColor;
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_BASE_LOW;
        var5 = var4.bind(var5)(var13, var2);
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var6 = var2.internal;
        var4 = var6.resolveSemanticColor;
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_SURFACE_HIGH;
        var10 = var4.bind(var6)(var13, var2);
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var6 = var2.internal;
        var4 = var6.resolveSemanticColor;
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var2 = var2.colors;
        var2 = var2.MOBILE_TEXT_HEADING_PRIMARY;
        var4 = var4.bind(var6)(var13, var2);
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var9 = var2.internal;
        var6 = var9.resolveSemanticColor;
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var2 = var2.colors;
        var2 = var2.TEXT_MUTED;
        var11 = var6.bind(var9)(var13, var2);
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var9 = var2.internal;
        var6 = var9.resolveSemanticColor;
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var2 = var2.colors;
        var2 = var2.TEXT_BRAND;
        var6 = var6.bind(var9)(var13, var2);
        var2 = var8[var0];
        var2 = var1.bind(var7)(var2);
        var9 = var2.internal;
        var2 = var9.resolveSemanticColor;
        var0 = var8[var0];
        var0 = var1.bind(var7)(var0);
        var0 = var0.colors;
        var0 = var0.TEXT_DEFAULT;
        var9 = var2.bind(var9)(var13, var0);
        var0 = 6;
        var0 = var8[var0];
        var2 = var1.bind(var7)(var0);
        var1 = var2.openCropper;
        var0 = {};
        var19 = 'photo';
        var0.mediaType = var19;
        var0.path = var18;
        var0.width = var17;
        var0.height = var16;
        var0.includeBase64 = var15;
        var0.mimeType = var14;
        var0.freeStyleCropEnabled = var12;
        var12 = _closure1_slot4;
        var14 = var12.LIGHT;
        var14 = var13 === var14;
        var0.cropperStatusBarLight = var14;
        var12 = var12.LIGHT;
        var12 = var13 === var12;
        var0.cropperNavigationBarLight = var12;
        var0.cropperActiveWidgetColor = var4;
        var0.cropperInactiveWidgetColor = var11;
        var0.cropperControlsColor = var10;
        var0.cropperControlsBarColor = var5;
        var0.cropperChooseColor = var6;
        var6 = _closure1_slot0;
        var3 = 7;
        var10 = var8[var3];
        var10 = var6.bind(var7)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var8[var3];
        var10 = var6.bind(var7)(var10);
        var10 = var10.t;
        var10 = var10["1Qm822"];
        var10 = var11.bind(var12)(var10);
        var0.cropperChooseText = var10;
        var0.cropperCancelColor = var9;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var3];
        var9 = var6.bind(var7)(var9);
        var9 = var9.t;
        var9 = var9["ETE/oC"];
        var9 = var10.bind(var11)(var9);
        var0.cropperCancelText = var9;
        var0.cropperToolbarColor = var5;
        var0.cropperToolbarWidgetColor = var4;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.b0y3DL;
        var3 = var4.bind(var5)(var3);
        var0.cropperToolbarTitle = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.launchCropper = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/image/native/ImagePicker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3198, 483, 478, 4106, 4107, 671, 4109, 1234, 2]);