// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var1 = function() {
        _fun34889: for (var _fun34889_ip = 0;;) switch (_fun34889_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var2 = arguments.length;
                var13 = 0;
                if (!(var2 > var13)) {
                    _fun34889_ip = 23;
                    continue _fun34889
                }
            case 15:
                var2 = arguments[var13];
                if (!(var4 === var2)) {
                    _fun34889_ip = 37;
                    continue _fun34889
                }
            case 23:
                var10 = {};
                var10.isStatusBarTranslucentAndroid = var4;
                var10.isNavigationBarTranslucentAndroid = var4;
                _fun34889_ip = 41;
                continue _fun34889;
            case 37:
                var10 = arguments[var13];
            case 41:
                var _closure2_slot0 = var10;
                var5 = _closure1_slot3;
                var6 = null;
                var0 = var5.bind(var4)(var6);
                var _closure2_slot1 = var0;
                var3 = -1;
                var7 = var5.bind(var4)(var3);
                var _closure2_slot2 = var7;
                var3 = false;
                var5 = var5.bind(var4)(var3);
                var _closure2_slot3 = var5;
                var3 = var0.current;
                if (!(var6 === var3)) {
                    _fun34889_ip = 277;
                    continue _fun34889
                }
            case 101:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 1;
                var11 = var9[var6];
                var14 = var8.bind(var4)(var11);
                var12 = var14.makeMutable;
                var11 = 2;
                var11 = var9[var11];
                var11 = var8.bind(var4)(var11);
                var11 = var11.KeyboardState;
                var11 = var11.UNKNOWN;
                var11 = var12.bind(var14)(var11);
                var3.state = var11;
                var11 = var9[var6];
                var12 = var8.bind(var4)(var11);
                var11 = var12.makeMutable;
                var11 = var11.bind(var12)(var13);
                var3.height = var11;
                var _closure2_slot4 = var3;
                var6 = var9[var6];
                var9 = var8.bind(var4)(var6);
                var8 = var9.subscribeForKeyboardEvents;
                var6 = function arg0, arg1() {
                    var1 = _closure2_slot4;
                    var2 = var1.state;
                    var1 = arg0;
                    var2.value = var1;
                    var0 = _closure2_slot4;
                    var1 = var0.height;
                    var0 = arg1;
                    var1.value = var0;
                    var0 = undefined;
                    return var0;
                };
                var11 = {};
                var11.keyboardEventData = var3;
                var6.__closure = var11;
                var11 = 4393537867728.0;
                var6.__workletHash = var11;
                var11 = _closure1_slot4;
                var6.__initData = var11;
                var6 = var8.bind(var9)(var6, var10);
                var7.current = var6;
                var0.current = var3;
                var3 = true;
                var5.current = var3;
            case 277:
                var3 = _closure1_slot2;
                var2 = function() { // Environment: var1
                    _fun34891: for (var _fun34891_ip = 0;;) switch (_fun34891_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = var2.current;
                            var2 = false;
                            if (!(var2 === var3)) {
                                _fun34891_ip = 163;
                                continue _fun34891
                            }
                        case 23:
                            var2 = _closure2_slot1;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 !== var3)) {
                                _fun34891_ip = 163;
                                continue _fun34891
                            }
                        case 41:
                            var2 = _closure2_slot1;
                            var8 = var2.current;
                            var _closure3_slot0 = var8;
                            var3 = _closure2_slot2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 1;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.subscribeForKeyboardEvents;
                            var4 = function arg0, arg1() {
                                var1 = _closure3_slot0;
                                var2 = var1.state;
                                var1 = arg0;
                                var2.value = var1;
                                var0 = _closure3_slot0;
                                var1 = var0.height;
                                var0 = arg1;
                                var1.value = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var7 = {};
                            var7._keyboardEventData = var8;
                            var4.__closure = var7;
                            var7 = 5041909921996.0;
                            var4.__workletHash = var7;
                            var2 = _closure1_slot5;
                            var4.__initData = var2;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var4, var2);
                            var3.current = var2;
                            var2 = _closure2_slot3;
                            var1 = true;
                            var2.current = var1;
                        case 163:
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 1;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.unsubscribeFromKeyboardEvents;
                                var2 = _closure2_slot2;
                                var2 = var2.current;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure2_slot3;
                                var1 = false;
                                var2.current = var1;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                var0 = var0.current;
                return var0;
        }
    };
    var2.useAnimatedKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3765, 3746]);