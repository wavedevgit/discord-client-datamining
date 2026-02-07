// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44835: for (var _fun44835_ip = 0;;) switch (_fun44835_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var7 = var5.bind(var0)(var1);
            var4 = var7.tagMessage;
            var1 = 'react-native-reanimated is required in order to use synchronous state management';
            var1 = var4.bind(var7)(var1);
            var _closure1_slot2 = var1;
            var4 = 1;
            var1 = var6[var4];
            var1 = var5.bind(var0)(var1);
            var1 = var1.Reanimated;
            var7 = null;
            var8 = var7 == var1;
            var1 = undefined;
            if (var8) {
                _fun44835_ip = 135;
                continue _fun44835
            }
        case 114:
            var8 = var6[var4];
            var8 = var5.bind(var0)(var8);
            var8 = var8.Reanimated;
            var1 = var8.useSharedValue;
        case 135:
            var1 = var0 !== var1;
            var _closure1_slot3 = var1;
            var1 = var6[var4];
            var1 = var5.bind(var0)(var1);
            var1 = var1.Reanimated;
            var7 = var7 == var1;
            var1 = undefined;
            if (var7) {
                _fun44835_ip = 188;
                continue _fun44835
            }
        case 167:
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.Reanimated;
            var1 = var4.setGestureState;
        case 188:
            var _closure1_slot4 = var1;
            var1 = {};
            var4 = "function create_Pnpm_gestureStateManagerTs1(handlerTag){const{REANIMATED_AVAILABLE,setGestureState,State,warningMessage}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}},activate:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}},fail:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}},end:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}};}";
            var1.code = var4;
            var _closure1_slot5 = var1;
            var1 = {};
            var4 = 'function pnpm_gestureStateManagerTs2(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}}';
            var1.code = var4;
            var _closure1_slot6 = var1;
            var1 = {};
            var4 = 'function pnpm_gestureStateManagerTs3(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}}';
            var1.code = var4;
            var _closure1_slot7 = var1;
            var1 = {};
            var4 = 'function pnpm_gestureStateManagerTs4(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}}';
            var1.code = var4;
            var _closure1_slot8 = var1;
            var1 = {};
            var4 = 'function pnpm_gestureStateManagerTs5(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}';
            var1.code = var4;
            var _closure1_slot9 = var1;
            var1 = {};
            var3 = function() { // Environment: var3
                var0 = function arg0() {
                    var9 = arg0;
                    var _closure3_slot0 = var9;
                    var0 = {};
                    var0.handlerTag = var9;
                    var3 = function() {
                        _fun44838: for (var _fun44838_ip = 0;;) switch (_fun44838_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                if (var1) {
                                    _fun44838_ip = 34;
                                    continue _fun44838
                                }
                            case 10:
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = _closure1_slot2;
                                var1 = var2.bind(var3)(var1);
                                _fun44838_ip = 85;
                                continue _fun44838;
                            case 34:
                                var3 = _closure1_slot4;
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.State;
                                var0 = var0.BEGAN;
                                var0 = var3.bind(var1)(var2, var0);
                            case 85:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = {};
                    var4 = _closure1_slot3;
                    var10.REANIMATED_AVAILABLE = var4;
                    var4 = _closure1_slot4;
                    var10.setGestureState = var4;
                    var10.handlerTag = var9;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 2;
                    var4 = var8[var5];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.State;
                    var10.State = var4;
                    var4 = _closure1_slot2;
                    var10.warningMessage = var4;
                    var3.__closure = var10;
                    var10 = 4799367197403.0;
                    var3.__workletHash = var10;
                    var10 = _closure1_slot6;
                    var3.__initData = var10;
                    var0.begin = var3;
                    var3 = function() {
                        _fun44839: for (var _fun44839_ip = 0;;) switch (_fun44839_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                if (var1) {
                                    _fun44839_ip = 34;
                                    continue _fun44839
                                }
                            case 10:
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = _closure1_slot2;
                                var1 = var2.bind(var3)(var1);
                                _fun44839_ip = 85;
                                continue _fun44839;
                            case 34:
                                var3 = _closure1_slot4;
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.State;
                                var0 = var0.ACTIVE;
                                var0 = var3.bind(var1)(var2, var0);
                            case 85:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = {};
                    var11 = _closure1_slot3;
                    var10.REANIMATED_AVAILABLE = var11;
                    var11 = _closure1_slot4;
                    var10.setGestureState = var11;
                    var10.handlerTag = var9;
                    var11 = var8[var5];
                    var11 = var7.bind(var6)(var11);
                    var11 = var11.State;
                    var10.State = var11;
                    var10.warningMessage = var4;
                    var3.__closure = var10;
                    var10 = 7932903515929.0;
                    var3.__workletHash = var10;
                    var10 = _closure1_slot7;
                    var3.__initData = var10;
                    var0.activate = var3;
                    var3 = function() {
                        _fun44840: for (var _fun44840_ip = 0;;) switch (_fun44840_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                if (var1) {
                                    _fun44840_ip = 34;
                                    continue _fun44840
                                }
                            case 10:
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = _closure1_slot2;
                                var1 = var2.bind(var3)(var1);
                                _fun44840_ip = 85;
                                continue _fun44840;
                            case 34:
                                var3 = _closure1_slot4;
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.State;
                                var0 = var0.FAILED;
                                var0 = var3.bind(var1)(var2, var0);
                            case 85:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = {};
                    var11 = _closure1_slot3;
                    var10.REANIMATED_AVAILABLE = var11;
                    var11 = _closure1_slot4;
                    var10.setGestureState = var11;
                    var10.handlerTag = var9;
                    var11 = var8[var5];
                    var11 = var7.bind(var6)(var11);
                    var11 = var11.State;
                    var10.State = var11;
                    var10.warningMessage = var4;
                    var3.__closure = var10;
                    var10 = 6492077607729.0;
                    var3.__workletHash = var10;
                    var10 = _closure1_slot8;
                    var3.__initData = var10;
                    var0.fail = var3;
                    var1 = function() {
                        _fun44841: for (var _fun44841_ip = 0;;) switch (_fun44841_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                if (var1) {
                                    _fun44841_ip = 34;
                                    continue _fun44841
                                }
                            case 10:
                                var1 = global;
                                var3 = var1.console;
                                var2 = var3.warn;
                                var1 = _closure1_slot2;
                                var1 = var2.bind(var3)(var1);
                                _fun44841_ip = 85;
                                continue _fun44841;
                            case 34:
                                var3 = _closure1_slot4;
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.State;
                                var0 = var0.END;
                                var0 = var3.bind(var1)(var2, var0);
                            case 85:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = {};
                    var10 = _closure1_slot3;
                    var3.REANIMATED_AVAILABLE = var10;
                    var10 = _closure1_slot4;
                    var3.setGestureState = var10;
                    var3.handlerTag = var9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.State;
                    var3.State = var5;
                    var3.warningMessage = var4;
                    var1.__closure = var3;
                    var3 = 2856860112444.0;
                    var1.__workletHash = var3;
                    var2 = _closure1_slot9;
                    var1.__initData = var2;
                    var0.end = var1;
                    return var0;
                };
                var2 = {};
                var3 = _closure1_slot3;
                var2.REANIMATED_AVAILABLE = var3;
                var3 = _closure1_slot4;
                var2.setGestureState = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.State;
                var2.State = var3;
                var3 = _closure1_slot2;
                var2.warningMessage = var3;
                var0.__closure = var2;
                var2 = 11660087535665.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot5;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var1.create = var3;
            var2.GestureStateManager = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [4967, 4970, 4968]);