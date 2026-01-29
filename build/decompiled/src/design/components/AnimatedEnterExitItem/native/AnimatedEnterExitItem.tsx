// design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: AnimatedRenderItem, environment: var1
        _fun44434: for (var _fun44434_ip = 0;;) switch (_fun44434_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.renderItem;
                var5 = var0.item;
                var19 = var0.shouldAnimate;
                var _closure2_slot0 = var19;
                var15 = var0.entering;
                var _closure2_slot1 = var15;
                var7 = var0.exiting;
                var _closure2_slot2 = var7;
                var18 = var0.state;
                var _closure2_slot3 = var18;
                var10 = var0.cleanUp;
                var _closure2_slot4 = var10;
                var14 = var0.useReducedMotion;
                var _closure2_slot5 = var14;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var13 = 2;
                var4 = var2[var13];
                var8 = var9.bind(var3)(var4);
                var4 = var8.useSharedValue;
                var17 = 3;
                var2 = var2[var17];
                var2 = var9.bind(var3)(var2);
                var2 = var2.TransitionStates;
                var9 = var2.MOUNTED;
                var2 = 0;
                if (!(var18 === var9)) {
                    _fun44434_ip = 147;
                    continue _fun44434
                }
            case 144:
                var2 = 1;
            case 147:
                var16 = var4.bind(var8)(var2);
                _closure2_slot6 = var16;
                var9 = _closure1_slot2;
                var8 = var9.useEffect;
                var4 = new Array(2);
                var4[0] = var18;
                var4[1] = var16;
                var2 = function() { // Environment: var1
                    _fun44435: for (var _fun44435_ip = 0;;) switch (_fun44435_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            if (!(var3 !== var2)) {
                                _fun44435_ip = 67;
                                continue _fun44435
                            }
                        case 48:
                            var4 = _closure2_slot6;
                            var3 = var4.set;
                            var2 = 1;
                            var2 = var3.bind(var4)(var2);
                            _fun44435_ip = 83;
                            continue _fun44435;
                        case 67:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var2, var4);
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = var11[var13];
                var8 = var12.bind(var3)(var2);
                var4 = var8.useAnimatedStyle;
                var2 = function() { // Original name: T, environment: var1
                    _fun44436: for (var _fun44436_ip = 0;;) switch (_fun44436_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (var0) {
                                _fun44436_ip = 168;
                                continue _fun44436
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 == var0;
                            var4 = undefined;
                            var3 = undefined;
                            if (var0) {
                                _fun44436_ip = 43;
                                continue _fun44436
                            }
                        case 30:
                            var5 = _closure2_slot0;
                            var0 = var5.get;
                            var3 = var0.bind(var5)();
                        case 43:
                            var0 = false;
                            if (!(var0 !== var3)) {
                                _fun44436_ip = 168;
                                continue _fun44436
                            }
                        case 49:
                            var3 = _closure2_slot3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var0 = 3;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.TransitionStates;
                            var0 = var0.YEETED;
                            if (!(var3 === var0)) {
                                _fun44436_ip = 100;
                                continue _fun44436
                            }
                        case 92:
                            var0 = _closure2_slot2;
                            if (!(var2 == var0)) {
                                _fun44436_ip = 136;
                                continue _fun44436
                            }
                        case 100:
                            var0 = _closure2_slot1;
                            if (!(var2 == var0)) {
                                _fun44436_ip = 112;
                                continue _fun44436
                            }
                        case 108:
                            var0 = {};
                            _fun44436_ip = 134;
                            continue _fun44436;
                        case 112:
                            var3 = _closure2_slot1;
                            var5 = _closure2_slot6;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var0 = var3.bind(var4)(var2);
                        case 134:
                            _fun44436_ip = 166;
                            continue _fun44436;
                        case 136:
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot6;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = function(arg0) { // Environment: var1
                                _fun44437: for (var _fun44437_ip = 0;;) switch (_fun44437_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun44437_ip = 52;
                                            continue _fun44437
                                        }
                                    case 6:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 2;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot4;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var2, var1);
                        case 166:
                            _fun44436_ip = 170;
                            continue _fun44436;
                        case 168:
                            var0 = {};
                        case 170:
                            return var0;
                    }
                };
                var9 = {};
                var9.useReducedMotion = var14;
                var9.shouldAnimate = var19;
                var9.state = var18;
                var19 = var11[var17];
                var19 = var12.bind(var3)(var19);
                var19 = var19.TransitionStates;
                var9.TransitionStates = var19;
                var9.exiting = var7;
                var9.visible = var16;
                var19 = var11[var13];
                var19 = var12.bind(var3)(var19);
                var19 = var19.runOnJS;
                var9.runOnJS = var19;
                var9.cleanUp = var10;
                var9.entering = var15;
                var2.__closure = var9;
                var9 = 2197269661090.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot6;
                var2.__initData = var9;
                var4 = var4.bind(var8)(var2);
                var2 = null;
                var15 = var2 != var7;
                _closure2_slot7 = var15;
                var2 = var11[var13];
                var8 = var12.bind(var3)(var2);
                var7 = var8.useAnimatedReaction;
                var2 = function() { // Original name: I, environment: var1
                    _fun44438: for (var _fun44438_ip = 0;;) switch (_fun44438_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 3;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.TransitionStates;
                            var0 = var0.YEETED;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun44438_ip = 70;
                                continue _fun44438
                            }
                        case 51:
                            var3 = _closure2_slot6;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = 0;
                            var0 = var1 === var3;
                        case 70:
                            if (!var0) {
                                _fun44438_ip = 90;
                                continue _fun44438
                            }
                        case 73:
                            var3 = _closure2_slot7;
                            var1 = !var3;
                            if (!var3) {
                                _fun44438_ip = 87;
                                continue _fun44438
                            }
                        case 83:
                            var1 = _closure2_slot5;
                        case 87:
                            var0 = var1;
                        case 90:
                            return var0;
                    }
                };
                var9 = {};
                var9.state = var18;
                var17 = var11[var17];
                var17 = var12.bind(var3)(var17);
                var17 = var17.TransitionStates;
                var9.TransitionStates = var17;
                var9.visible = var16;
                var9.hasExiting = var15;
                var9.useReducedMotion = var14;
                var2.__closure = var9;
                var9 = 11984384474891.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot7;
                var2.__initData = var9;
                var1 = function(arg0, arg1) { // Original name: v, environment: var1
                    _fun44439: for (var _fun44439_ip = 0;;) switch (_fun44439_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2;
                            if (!var0) {
                                _fun44439_ip = 16;
                                continue _fun44439
                            }
                        case 9:
                            var1 = arg1;
                            var0 = var2 !== var1;
                        case 16:
                            if (!var0) {
                                _fun44439_ip = 65;
                                continue _fun44439
                            }
                        case 19:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = {};
                var11 = var11[var13];
                var11 = var12.bind(var3)(var11);
                var11 = var11.runOnJS;
                var9.runOnJS = var11;
                var9.cleanUp = var10;
                var1.__closure = var9;
                var9 = 2105667466259.0;
                var1.__workletHash = var9;
                var9 = _closure1_slot8;
                var1.__initData = var9;
                var1 = var7.bind(var8)(var2, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderAnimatedItem, environment: var1
        var3 = _closure1_slot5;
        var2 = _closure1_slot9;
        var1 = {};
        var5 = arg1;
        var6 = var1;
        var0 = copyDataProperties(var6, var5);
        var4 = arg0;
        var0 = 'key';
        var1[var0] = var4;
        var4 = arg2;
        var0 = 'state';
        var1[var0] = var4;
        var4 = arg3;
        var0 = 'cleanUp';
        var1[var0] = var4;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Fragment;
    var _closure1_slot3 = var7;
    var6 = var6.jsx;
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createElement;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AnimatedEnterExitItem, environment: var1
        var1 = arg0;
        var5 = var1.useReducedMotion;
        var _closure2_slot0 = var5;
        var9 = var1.shouldAnimate;
        var _closure2_slot1 = var9;
        var8 = var1.entering;
        var _closure2_slot2 = var8;
        var7 = var1.exiting;
        var _closure2_slot3 = var7;
        var10 = var1.item;
        var _closure2_slot4 = var10;
        var6 = var1.renderItem;
        var _closure2_slot5 = var6;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(6);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var0 = function() { // Environment: var0
            _fun44442: for (var _fun44442_ip = 0;;) switch (_fun44442_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun44442_ip = 17;
                        continue _fun44442
                    }
                case 13:
                    var0 = undefined;
                    return var0;
                case 17:
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.shouldAnimate = var2;
                    var2 = _closure2_slot2;
                    var0.entering = var2;
                    var2 = _closure2_slot3;
                    var0.exiting = var2;
                    var2 = _closure2_slot5;
                    var0.renderItem = var2;
                    var2 = _closure2_slot4;
                    var0.item = var2;
                    var1 = _closure2_slot0;
                    var0.useReducedMotion = var1;
                    return var0;
            }
        };
        var5 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TransitionItem;
        var0 = {};
        var0.item = var5;
        var4 = _closure1_slot10;
        var0.renderItem = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3677, 3981, 2]);