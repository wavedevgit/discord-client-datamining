// modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun76340: for (var _fun76340_ip = 0;;) switch (_fun76340_ip) {
            case 0:
                var0 = _closure1_slot3;
                var1 = var0.NativePermissionManager;
                var3 = null;
                var0 = var3 == var1;
                if (var0) {
                    _fun76340_ip = 32;
                    continue _fun76340
                }
            case 22:
                var2 = var1.presentLimitedLibraryPicker;
                var0 = var3 == var2;
            case 32:
                if (var0) {
                    _fun76340_ip = 45;
                    continue _fun76340
                }
            case 35:
                var0 = var1.presentLimitedLibraryPicker;
                var0 = var0.bind(var1)();
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativeModules;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'flexDirection': 'row',
        'paddingHorizontal': 16,
        'paddingVertical': 16,
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {};
    var11 = 'absolute';
    var8.position = var11;
    var3.absoluteContainer = var8;
    var8 = {};
    var8.flex = var10;
    var3.text = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76341: for (var _fun76341_ip = 0;;) switch (_fun76341_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.onHeightChange;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot7;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var4 = _closure1_slot2;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function(arg0) { // Environment: var0
                    _fun76342: for (var _fun76342_ip = 0;;) switch (_fun76342_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76342_ip = 44;
                                continue _fun76342
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var8.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                var7 = var6 != var7;
                var6 = undefined;
                if (!var7) {
                    _fun76341_ip = 98;
                    continue _fun76341
                }
            case 92:
                var6 = var8.absoluteContainer;
            case 98:
                var5[1] = var6;
                var0.style = var5;
                var0.onLayout = var4;
                var7 = _closure1_slot5;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var4 = 4;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var6 = var8.text;
                var4.style = var6;
                var6 = 'text-sm/normal';
                var4.variant = var6;
                var11 = 5;
                var6 = var15[var11];
                var6 = var14.bind(var3)(var6);
                var12 = var6.intl;
                var9 = var12.string;
                var6 = var15[var11];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["5g7NcN"];
                var6 = var9.bind(var12)(var6);
                var4.children = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.button;
                var5.style = var8;
                var8 = 6;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'size': 'sm',
                    'variant': 'tertiary'
                };
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.JuXTi6;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var10 = _closure1_slot8;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3942, 1234, 4084, 2]);