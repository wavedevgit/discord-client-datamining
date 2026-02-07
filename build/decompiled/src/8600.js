// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68987: for (var _fun68987_ip = 0;;) switch (_fun68987_ip) {
        case 0:
            var12 = require;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var11;
            var3 = function arg0, arg1() {
                var9 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var9;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var4 = var6[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var4 = var7.useKeyboardContext;
                var4 = var4.bind(var7)();
                var _closure2_slot1 = var4;
                var4 = 4;
                var7 = var6[var4];
                var8 = var5.bind(var0)(var7);
                var7 = var8.useHandler;
                var7 = var7.bind(var8)(var9, var3);
                var8 = var7.doDependenciesDiffer;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.useEvent;
                var5 = function arg0() {
                    _fun68989: for (var _fun68989_ip = 0;;) switch (_fun68989_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onKeyboardMoveStart';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun68989_ip = 61;
                                continue _fun68989
                            }
                        case 27:
                            var1 = _closure2_slot0;
                            var3 = var1.onStart;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68989_ip = 61;
                                continue _fun68989
                            }
                        case 46:
                            var1 = _closure2_slot0;
                            var0 = var1.onStart;
                            var0 = var0.bind(var1)(var2);
                        case 61:
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onKeyboardMove';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun68989_ip = 119;
                                continue _fun68989
                            }
                        case 85:
                            var1 = _closure2_slot0;
                            var3 = var1.onMove;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68989_ip = 119;
                                continue _fun68989
                            }
                        case 104:
                            var1 = _closure2_slot0;
                            var0 = var1.onMove;
                            var0 = var0.bind(var1)(var2);
                        case 119:
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onKeyboardMoveEnd';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun68989_ip = 177;
                                continue _fun68989
                            }
                        case 143:
                            var1 = _closure2_slot0;
                            var3 = var1.onEnd;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68989_ip = 177;
                                continue _fun68989
                            }
                        case 162:
                            var1 = _closure2_slot0;
                            var0 = var1.onEnd;
                            var0 = var0.bind(var1)(var2);
                        case 177:
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onKeyboardMoveInteractive';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun68989_ip = 235;
                                continue _fun68989
                            }
                        case 201:
                            var1 = _closure2_slot0;
                            var3 = var1.onInteractive;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68989_ip = 235;
                                continue _fun68989
                            }
                        case 220:
                            var1 = _closure2_slot0;
                            var0 = var1.onInteractive;
                            var0 = var0.bind(var1)(var2);
                        case 235:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var4.handler = var9;
                var5.__closure = var4;
                var4 = 7080794218426.0;
                var5.__workletHash = var4;
                var4 = _closure1_slot5;
                var5.__initData = var4;
                var4 = ['onKeyboardMoveStart', 'onKeyboardMove', 'onKeyboardMoveEnd', 'onKeyboardMoveInteractive'];
                var4 = var6.bind(var7)(var5, var4, var8);
                var _closure2_slot2 = var4;
                var2 = _closure1_slot3;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.setKeyboardHandlers;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = var2.bind(var0)(var1, var3);
                return var0;
            };
            var _closure1_slot7 = var3;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var0 = 0;
            var4 = var11[var0];
            var0 = undefined;
            var4 = var12.bind(var0)(var4);
            var5 = var4.useEffect;
            var _closure1_slot2 = var5;
            var4 = var4.useLayoutEffect;
            var _closure1_slot3 = var4;
            var4 = function() {
                var3 = _closure1_slot2;
                var0 = undefined;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 1;
                    var0 = var5[var0];
                    var3 = undefined;
                    var0 = var4.bind(var3)(var0);
                    var2 = var0.KeyboardController;
                    var1 = var2.setInputMode;
                    var0 = 2;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.AndroidSoftInputModes;
                    var0 = var0.SOFT_INPUT_ADJUST_RESIZE;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var1 = var0.KeyboardController;
                        var0 = var1.setDefaultMode;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot4 = var4;
            var5 = {};
            var6 = 'function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith("onKeyboardMoveStart")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith("onKeyboardMove")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith("onKeyboardMoveEnd")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith("onKeyboardMoveInteractive")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}';
            var5.code = var6;
            var _closure1_slot5 = var5;
            var5 = {};
            var6 = 'function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith("onFocusedInputTextChanged")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith("onFocusedInputSelectionChanged")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}';
            var5.code = var6;
            var _closure1_slot6 = var5;
            var6 = 5;
            var5 = var11[var6];
            var9 = var12.bind(var0)(var5);
            for (var5 in var9)
                case 157: {
                    case 166: var14 = var5;
                    var13 = var11[var6];
                    var13 = var12.bind(var0)(var13);
                    var13 = var13[var14];
                    var2[var14] = var13;
                    _fun68987_ip = 157;
                    continue _fun68987;
                }
        case 188:
            var6 = 6;
            var5 = var11[var6];
            var9 = var12.bind(var0)(var5);
            for (var5 in var9)
                case 208: {
                    case 217: var14 = var5;
                    var13 = var11[var6];
                    var13 = var12.bind(var0)(var13);
                    var13 = var13[var14];
                    var2[var14] = var13;
                    _fun68987_ip = 208;
                    continue _fun68987;
                }
        case 239:
            var2.useResizeMode = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.useKeyboardContext;
                var0 = var0.bind(var1)();
                var0 = var0.animated;
                return var0;
            };
            var2.useKeyboardAnimation = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.useKeyboardContext;
                var0 = var0.bind(var1)();
                var0 = var0.reanimated;
                return var0;
            };
            var2.useReanimatedKeyboardAnimation = var4;
            var2.useGenericKeyboardHandler = var3;
            var3 = function arg0, arg1() {
                var2 = _closure1_slot4;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = _closure1_slot7;
                var2 = arg0;
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.useKeyboardHandler = var3;
            var3 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.useKeyboardContext;
                var1 = var0.bind(var1)();
                var0 = {};
                var2 = var1.setEnabled;
                var0.setEnabled = var2;
                var1 = var1.enabled;
                var0.enabled = var1;
                return var0;
            };
            var2.useKeyboardController = var3;
            var3 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.useKeyboardContext;
                var1 = var0.bind(var1)();
                var0 = {};
                var2 = var1.layout;
                var0.input = var2;
                var1 = var1.update;
                var0.update = var1;
                return var0;
            };
            var2.useReanimatedFocusedInput = var3;
            var1 = function arg0, arg1() {
                var9 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var9;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var4 = var6[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var4 = var7.useKeyboardContext;
                var4 = var4.bind(var7)();
                var _closure2_slot1 = var4;
                var4 = 4;
                var7 = var6[var4];
                var8 = var5.bind(var0)(var7);
                var7 = var8.useHandler;
                var7 = var7.bind(var8)(var9, var3);
                var8 = var7.doDependenciesDiffer;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.useEvent;
                var5 = function arg0() {
                    _fun69001: for (var _fun69001_ip = 0;;) switch (_fun69001_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onFocusedInputTextChanged';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun69001_ip = 63;
                                continue _fun69001
                            }
                        case 29:
                            var1 = _closure2_slot0;
                            var3 = var1.onChangeText;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun69001_ip = 63;
                                continue _fun69001
                            }
                        case 48:
                            var1 = _closure2_slot0;
                            var0 = var1.onChangeText;
                            var0 = var0.bind(var1)(var2);
                        case 63:
                            var3 = var2.eventName;
                            var1 = var3.endsWith;
                            var0 = 'onFocusedInputSelectionChanged';
                            var0 = var1.bind(var3)(var0);
                            if (!var0) {
                                _fun69001_ip = 123;
                                continue _fun69001
                            }
                        case 89:
                            var1 = _closure2_slot0;
                            var3 = var1.onSelectionChange;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun69001_ip = 123;
                                continue _fun69001
                            }
                        case 108:
                            var1 = _closure2_slot0;
                            var0 = var1.onSelectionChange;
                            var0 = var0.bind(var1)(var2);
                        case 123:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var4.handler = var9;
                var5.__closure = var4;
                var4 = 16071593392303.0;
                var5.__workletHash = var4;
                var4 = _closure1_slot6;
                var5.__initData = var4;
                var4 = ['onFocusedInputTextChanged', 'onFocusedInputSelectionChanged'];
                var4 = var6.bind(var7)(var5, var4, var8);
                var _closure2_slot2 = var4;
                var2 = _closure1_slot3;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.setInputHandlers;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = var2.bind(var0)(var1, var3);
                return var0;
            };
            var2.useFocusedInputHandler = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8598, 8601, 8599, 3722, 8602, 8603]);