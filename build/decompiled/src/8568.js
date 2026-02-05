// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68613: for (var _fun68613_ip = 0;;) switch (_fun68613_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var3);
            var0 = 0;
            var4 = var6[var0];
            var3 = metroImportDefault;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.Platform;
            var4 = var3.Version;
            var3 = 30;
            var3 = var4 >= var3;
            if (var3) {
                _fun68613_ip = 107;
                continue _fun68613
            }
        case 105:
            var3 = false;
        case 107:
            var _closure1_slot3 = var3;
            var3 = {};
            var4 = 250;
            var3.duration = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var9 = var4.Easing;
            var8 = var9.bezier;
            var13 = 0.19919472913616398;
            var12 = 0.010644531250000006;
            var11 = 0.27920937042459737;
            var10 = 0.91025390625;
            var14 = var9;
            var4 = var14[var8](var13, var12, var11, var10, var9);
            var3.easing = var4;
            var _closure1_slot4 = var3;
            var3 = {};
            var4 = 'function pnpm_useSmoothKeyboardHandlerTs1(){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;}';
            var3.code = var4;
            var _closure1_slot5 = var3;
            var3 = {};
            var4 = 'function pnpm_useSmoothKeyboardHandlerTs2(evt){const{handler,height,persistedHeight}=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}}';
            var3.code = var4;
            var _closure1_slot6 = var3;
            var3 = {};
            var4 = 'function pnpm_useSmoothKeyboardHandlerTs3(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG}=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});}';
            var3.code = var4;
            var _closure1_slot7 = var3;
            var3 = {};
            var4 = 'function pnpm_useSmoothKeyboardHandlerTs4(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}}';
            var3.code = var4;
            var _closure1_slot8 = var3;
            var3 = {};
            var4 = 'function pnpm_useSmoothKeyboardHandlerTs5(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}}';
            var3.code = var4;
            var _closure1_slot9 = var3;
            var1 = function arg0, arg1() {
                _fun68614: for (var _fun68614_ip = 0;;) switch (_fun68614_ip) {
                    case 0:
                        var8 = arg0;
                        var4 = arg1;
                        var _closure2_slot0 = var8;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var12 = 2;
                        var3 = var1[var12];
                        var0 = undefined;
                        var9 = var2.bind(var0)(var3);
                        var7 = var9.useSharedValue;
                        var3 = -1;
                        var15 = var7.bind(var9)(var3);
                        var _closure2_slot1 = var15;
                        var3 = var1[var12];
                        var7 = var2.bind(var0)(var3);
                        var3 = var7.useSharedValue;
                        var9 = 0;
                        var14 = var3.bind(var7)(var9);
                        var _closure2_slot2 = var14;
                        var3 = var1[var12];
                        var7 = var2.bind(var0)(var3);
                        var3 = var7.useSharedValue;
                        var16 = var3.bind(var7)(var9);
                        var _closure2_slot3 = var16;
                        var3 = var1[var12];
                        var7 = var2.bind(var0)(var3);
                        var3 = var7.useSharedValue;
                        var13 = var3.bind(var7)(var9);
                        var _closure2_slot4 = var13;
                        var1 = var1[var12];
                        var9 = var2.bind(var0)(var1);
                        var7 = var9.useAnimatedReaction;
                        var3 = function() {
                            _fun68615: for (var _fun68615_ip = 0;;) switch (_fun68615_ip) {
                                case 0:
                                    var0 = _closure1_slot3;
                                    if (var0) {
                                        _fun68615_ip = 95;
                                        continue _fun68615
                                    }
                                case 10:
                                    var0 = _closure2_slot3;
                                    var3 = var0.value;
                                    var0 = 0;
                                    if (!(var0 !== var3)) {
                                        _fun68615_ip = 95;
                                        continue _fun68615
                                    }
                                case 28:
                                    var0 = {};
                                    var2 = _closure1_slot4;
                                    var2 = var2.duration;
                                    var0.duration = var2;
                                    var2 = _closure2_slot1;
                                    var2 = var2.value;
                                    var0.target = var2;
                                    var2 = _closure2_slot4;
                                    var3 = var2.value;
                                    var0.height = var3;
                                    var2 = var2.value;
                                    var1 = _closure2_slot3;
                                    var1 = var1.value;
                                    var1 = var2 / var1;
                                    var0.progress = var1;
                                    return var0;
                                case 95:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = {};
                        var2 = _closure1_slot3;
                        var1.IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS = var2;
                        var1.persistedHeight = var16;
                        var2 = _closure1_slot4;
                        var1.TELEGRAM_ANDROID_TIMING_CONFIG = var2;
                        var1.target = var15;
                        var1.animatedKeyboardHeight = var13;
                        var3.__closure = var1;
                        var1 = 4217597553195.0;
                        var3.__workletHash = var1;
                        var1 = _closure1_slot5;
                        var3.__initData = var1;
                        var2 = function arg0() {
                            _fun68616: for (var _fun68616_ip = 0;;) switch (_fun68616_ip) {
                                case 0:
                                    var3 = arg0;
                                    if (!var3) {
                                        _fun68616_ip = 106;
                                        continue _fun68616
                                    }
                                case 6:
                                    var1 = _closure2_slot0;
                                    var1 = var1.onMove;
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun68616_ip = 40;
                                        continue _fun68616
                                    }
                                case 25:
                                    var4 = _closure2_slot0;
                                    var1 = var4.onMove;
                                    var1 = var1.bind(var4)(var3);
                                case 40:
                                    var4 = var3.height;
                                    var1 = _closure2_slot2;
                                    var1 = var1.value;
                                    if (!(var4 === var1)) {
                                        _fun68616_ip = 106;
                                        continue _fun68616
                                    }
                                case 58:
                                    var1 = _closure2_slot0;
                                    var1 = var1.onEnd;
                                    if (!(var2 != var1)) {
                                        _fun68616_ip = 87;
                                        continue _fun68616
                                    }
                                case 72:
                                    var2 = _closure2_slot0;
                                    var1 = var2.onEnd;
                                    var1 = var1.bind(var2)(var3);
                                case 87:
                                    var1 = _closure2_slot3;
                                    var0 = _closure2_slot2;
                                    var0 = var0.value;
                                    var1.value = var0;
                                case 106:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = {};
                        var1.handler = var8;
                        var1.height = var14;
                        var1.persistedHeight = var16;
                        var2.__closure = var1;
                        var1 = 1186520959152.0;
                        var2.__workletHash = var1;
                        var1 = _closure1_slot6;
                        var2.__initData = var1;
                        var1 = var4;
                        if (!var1) {
                            _fun68614_ip = 291;
                            continue _fun68614
                        }
                    case 282:
                        var10 = _closure1_slot2;
                        var1 = var10.bind(var0)(var4);
                    case 291:
                        var1 = var7.bind(var9)(var3, var2, var1);
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var1 = 3;
                        var1 = var10[var1];
                        var3 = var11.bind(var0)(var1);
                        var2 = var3.useKeyboardHandler;
                        var1 = {};
                        var7 = function arg0() {
                            _fun68617: for (var _fun68617_ip = 0;;) switch (_fun68617_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = _closure1_slot3;
                                    if (var1) {
                                        _fun68617_ip = 101;
                                        continue _fun68617
                                    }
                                case 13:
                                    var3 = var6.height;
                                    var1 = _closure2_slot3;
                                    var1 = var1.value;
                                    if (!(var3 === var1)) {
                                        _fun68617_ip = 101;
                                        continue _fun68617
                                    }
                                case 34:
                                    var1 = _closure2_slot0;
                                    var1 = var1.onStart;
                                    var3 = null;
                                    if (!(var3 != var1)) {
                                        _fun68617_ip = 65;
                                        continue _fun68617
                                    }
                                case 50:
                                    var4 = _closure2_slot0;
                                    var1 = var4.onStart;
                                    var1 = var1.bind(var4)(var6);
                                case 65:
                                    var1 = _closure2_slot0;
                                    var1 = var1.onEnd;
                                    var1 = var3 == var1;
                                    if (var1) {
                                        _fun68617_ip = 97;
                                        continue _fun68617
                                    }
                                case 82:
                                    var3 = _closure2_slot0;
                                    var2 = var3.onEnd;
                                    var1 = var2.bind(var3)(var6);
                                case 97:
                                    var1 = undefined;
                                    return var1;
                                case 101:
                                    var3 = _closure2_slot1;
                                    var2 = var6.target;
                                    var3.value = var2;
                                    var3 = _closure2_slot2;
                                    var2 = var6.height;
                                    var3.value = var2;
                                    var3 = var6.height;
                                    var2 = 0;
                                    if (!(var3 > var2)) {
                                        _fun68617_ip = 161;
                                        continue _fun68617
                                    }
                                case 146:
                                    var3 = _closure2_slot3;
                                    var2 = var6.height;
                                    var3.value = var2;
                                case 161:
                                    var2 = _closure1_slot3;
                                    if (var2) {
                                        _fun68617_ip = 220;
                                        continue _fun68617
                                    }
                                case 168:
                                    var3 = _closure2_slot4;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var2 = 2;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.withTiming;
                                    var4 = var6.height;
                                    var2 = _closure1_slot4;
                                    var2 = var5.bind(var7)(var4, var2);
                                    var3.value = var2;
                                case 220:
                                    var2 = _closure2_slot0;
                                    var3 = var2.onStart;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun68617_ip = 302;
                                        continue _fun68617
                                    }
                                case 236:
                                    var2 = _closure2_slot0;
                                    var1 = var2.onStart;
                                    var3 = global;
                                    var5 = var3.Object;
                                    var4 = var5.assign;
                                    var3 = {};
                                    var7 = _closure1_slot3;
                                    if (var7) {
                                        _fun68617_ip = 279;
                                        continue _fun68617
                                    }
                                case 268:
                                    var0 = _closure1_slot4;
                                    var0 = var0.duration;
                                    _fun68617_ip = 284;
                                    continue _fun68617;
                                case 279:
                                    var0 = var6.duration;
                                case 284:
                                    var3.duration = var0;
                                    var0 = {};
                                    var0 = var4.bind(var5)(var0, var6, var3);
                                    var0 = var1.bind(var2)(var0);
                                case 302:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = {};
                        var17 = _closure1_slot3;
                        var9.IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS = var17;
                        var9.persistedHeight = var16;
                        var9.handler = var8;
                        var9.target = var15;
                        var9.height = var14;
                        var9.animatedKeyboardHeight = var13;
                        var10 = var10[var12];
                        var10 = var11.bind(var0)(var10);
                        var10 = var10.withTiming;
                        var9.withTiming = var10;
                        var10 = _closure1_slot4;
                        var9.TELEGRAM_ANDROID_TIMING_CONFIG = var10;
                        var7.__closure = var9;
                        var9 = 2049629670138.0;
                        var7.__workletHash = var9;
                        var9 = _closure1_slot7;
                        var7.__initData = var9;
                        var1.onStart = var7;
                        var7 = function arg0() {
                            _fun68618: for (var _fun68618_ip = 0;;) switch (_fun68618_ip) {
                                case 0:
                                    var0 = _closure1_slot3;
                                    if (!var0) {
                                        _fun68618_ip = 47;
                                        continue _fun68618
                                    }
                                case 10:
                                    var1 = _closure2_slot0;
                                    var2 = var1.onMove;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun68618_ip = 47;
                                        continue _fun68618
                                    }
                                case 29:
                                    var2 = _closure2_slot0;
                                    var1 = var2.onMove;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                case 47:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = {};
                        var10 = _closure1_slot3;
                        var9.IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS = var10;
                        var9.handler = var8;
                        var7.__closure = var9;
                        var9 = 16381726355375.0;
                        var7.__workletHash = var9;
                        var9 = _closure1_slot8;
                        var7.__initData = var9;
                        var1.onMove = var7;
                        var5 = function arg0() {
                            _fun68619: for (var _fun68619_ip = 0;;) switch (_fun68619_ip) {
                                case 0:
                                    var0 = _closure1_slot3;
                                    if (!var0) {
                                        _fun68619_ip = 47;
                                        continue _fun68619
                                    }
                                case 10:
                                    var1 = _closure2_slot0;
                                    var2 = var1.onEnd;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun68619_ip = 47;
                                        continue _fun68619
                                    }
                                case 29:
                                    var2 = _closure2_slot0;
                                    var1 = var2.onEnd;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                case 47:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = {};
                        var9 = _closure1_slot3;
                        var7.IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS = var9;
                        var7.handler = var8;
                        var5.__closure = var7;
                        var7 = 9348108811600.0;
                        var5.__workletHash = var7;
                        var6 = _closure1_slot9;
                        var5.__initData = var6;
                        var1.onEnd = var5;
                        var1 = var2.bind(var3)(var1, var4);
                        return var0;
                }
            };
            var2.useSmoothKeyboardHandler = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 27, 3721, 8550]);