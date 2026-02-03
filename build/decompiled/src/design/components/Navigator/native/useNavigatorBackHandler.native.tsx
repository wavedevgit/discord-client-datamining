// design/components/Navigator/native/useNavigatorBackHandler.native.tsx
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
    var _closure1_slot2 = var3;
    var3 = {};
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/useNavigatorBackHandler.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun72769: for (var _fun72769_ip = 0;;) switch (_fun72769_ip) {
            case 0:
                var1 = arguments[0];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun72769_ip = 18;
                    continue _fun72769
                }
            case 11:
                var1 = _closure1_slot3;
            case 18:
                var5 = var1.onBeforeGoBack;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useNavigation;
                var6 = var2.bind(var3)();
                _closure2_slot1 = var6;
                var4 = _closure1_slot2;
                var2 = var4.useRef;
                var1 = true;
                var1 = var2.bind(var4)(var1);
                _closure2_slot2 = var1;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var0
                    _fun72770: for (var _fun72770_ip = 0;;) switch (_fun72770_ip) {
                        case 0:
                            var3 = arguments[0];
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun72770_ip = 11;
                                continue _fun72770
                            }
                        case 9:
                            var3 = false;
                        case 11:
                            var2 = _closure2_slot2;
                            var2.current = var3;
                            var2 = _closure2_slot1;
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot1;
                    var2 = var3.addListener;
                    var1 = 'beforeRemove';
                    var0 = function(arg0) { // Environment: var0
                        _fun72772: for (var _fun72772_ip = 0;;) switch (_fun72772_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var3 = _closure2_slot2;
                                var3 = var3.current;
                                if (!var3) {
                                    _fun72772_ip = 172;
                                    continue _fun72772
                                }
                            case 27:
                                var2 = var2.data;
                                var2 = var2.action;
                                var3 = var2.type;
                                var2 = 'POP';
                                if (!(var2 === var3)) {
                                    _fun72772_ip = 88;
                                    continue _fun72772
                                }
                            case 50:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.isIOS;
                                var3 = var3.bind(var4)();
                                if (var3) {
                                    _fun72772_ip = 144;
                                    continue _fun72772
                                }
                            case 88:
                                var4 = _closure2_slot0;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun72772_ip = 172;
                                    continue _fun72772
                                }
                            case 98:
                                var4 = _closure2_slot0;
                                var3 = {};
                                var5 = true;
                                var3.preventable = var5;
                                var5 = function() {
                                    var1 = _closure4_slot0;
                                    var0 = var1.preventDefault;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var3.preventDefault = var5;
                                var1 = function() {
                                    var1 = _closure2_slot1;
                                    var0 = var1.goBack;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var3.goBack = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                _fun72772_ip = 172;
                                continue _fun72772;
                            case 144:
                                var3 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun72772_ip = 172;
                                    continue _fun72772
                                }
                            case 154:
                                var1 = _closure2_slot0;
                                var0 = {};
                                var3 = false;
                                var0.preventable = var3;
                                var0 = var1.bind(var2)(var0);
                            case 172:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var0, var2);
                var0 = {};
                var0.onGoBack = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1469, 478, 2]);