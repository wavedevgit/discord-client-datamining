// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {
        'UNDETERMINED': 0,
        'FAILED': 1,
        'BEGAN': 2,
        'CANCELLED': 3,
        'ACTIVE': 4,
        'END': 5
    };
    var _closure1_slot2 = var2;
    var2 = {};
    var3 = 'function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}';
    var2.code = var3;
    var _closure1_slot3 = var2;
    var0 = function(arg0, arg1) { // Original name: useAnimatedGestureHandler, environment: var0
        _fun34683: for (var _fun34683_ip = 0;;) switch (_fun34683_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.useHandler;
                var2 = arg1;
                var2 = var4.bind(var5)(var7, var2);
                var6 = var2.context;
                var _closure2_slot1 = var6;
                var5 = var2.doDependenciesDiffer;
                var2 = var2.useWeb;
                var _closure2_slot2 = var2;
                var4 = function(arg0) { // Original name: pnpm_useAnimatedGestureHandlerTs1, environment: var0
                    _fun34684: for (var _fun34684_ip = 0;;) switch (_fun34684_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot2;
                            var4 = var1;
                            if (!var2) {
                                _fun34684_ip = 22;
                                continue _fun34684
                            }
                        case 16:
                            var4 = var1.nativeEvent;
                        case 22:
                            var2 = var4.state;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34684_ip = 57;
                                continue _fun34684
                            }
                        case 47:
                            var2 = _closure2_slot0;
                            var1 = var2.onStart;
                        case 57:
                            if (!var1) {
                                _fun34684_ip = 80;
                                continue _fun34684
                            }
                        case 60:
                            var3 = _closure2_slot0;
                            var2 = var3.onStart;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 80:
                            var2 = var4.state;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34684_ip = 112;
                                continue _fun34684
                            }
                        case 102:
                            var2 = _closure2_slot0;
                            var1 = var2.onActive;
                        case 112:
                            if (!var1) {
                                _fun34684_ip = 135;
                                continue _fun34684
                            }
                        case 115:
                            var3 = _closure2_slot0;
                            var2 = var3.onActive;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 135:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34684_ip = 177;
                                continue _fun34684
                            }
                        case 158:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.END;
                            var1 = var3 === var2;
                        case 177:
                            if (!var1) {
                                _fun34684_ip = 190;
                                continue _fun34684
                            }
                        case 180:
                            var2 = _closure2_slot0;
                            var1 = var2.onEnd;
                        case 190:
                            if (!var1) {
                                _fun34684_ip = 213;
                                continue _fun34684
                            }
                        case 193:
                            var3 = _closure2_slot0;
                            var2 = var3.onEnd;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 213:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34684_ip = 255;
                                continue _fun34684
                            }
                        case 236:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.FAILED;
                            var1 = var3 === var2;
                        case 255:
                            if (!var1) {
                                _fun34684_ip = 268;
                                continue _fun34684
                            }
                        case 258:
                            var2 = _closure2_slot0;
                            var1 = var2.onFail;
                        case 268:
                            if (!var1) {
                                _fun34684_ip = 291;
                                continue _fun34684
                            }
                        case 271:
                            var3 = _closure2_slot0;
                            var2 = var3.onFail;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 291:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34684_ip = 333;
                                continue _fun34684
                            }
                        case 314:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.CANCELLED;
                            var1 = var3 === var2;
                        case 333:
                            if (!var1) {
                                _fun34684_ip = 346;
                                continue _fun34684
                            }
                        case 336:
                            var2 = _closure2_slot0;
                            var1 = var2.onCancel;
                        case 346:
                            if (!var1) {
                                _fun34684_ip = 369;
                                continue _fun34684
                            }
                        case 349:
                            var3 = _closure2_slot0;
                            var2 = var3.onCancel;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 369:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun34684_ip = 412;
                                continue _fun34684
                            }
                        case 392:
                            var3 = var4.oldState;
                            var2 = _closure1_slot2;
                            var2 = var2.ACTIVE;
                            var1 = var3 !== var2;
                        case 412:
                            if (var1) {
                                _fun34684_ip = 434;
                                continue _fun34684
                            }
                        case 415:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.BEGAN;
                            var1 = var3 === var2;
                        case 434:
                            if (var1) {
                                _fun34684_ip = 456;
                                continue _fun34684
                            }
                        case 437:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.ACTIVE;
                            var1 = var3 === var2;
                        case 456:
                            if (var1) {
                                _fun34684_ip = 472;
                                continue _fun34684
                            }
                        case 459:
                            var2 = _closure2_slot0;
                            var2 = var2.onFinish;
                            var1 = !var2;
                        case 472:
                            if (var1) {
                                _fun34684_ip = 537;
                                continue _fun34684
                            }
                        case 475:
                            var3 = _closure2_slot0;
                            var2 = var3.onFinish;
                            var1 = _closure2_slot1;
                            var6 = var4.state;
                            var0 = _closure1_slot2;
                            var0 = var0.CANCELLED;
                            var0 = var6 === var0;
                            if (var0) {
                                _fun34684_ip = 530;
                                continue _fun34684
                            }
                        case 511:
                            var6 = var4.state;
                            var5 = _closure1_slot2;
                            var5 = var5.FAILED;
                            var0 = var6 === var5;
                        case 530:
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 537:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = {};
                var0.useWeb = var2;
                var8 = _closure1_slot2;
                var0.EVENT_TYPE = var8;
                var0.handlers = var7;
                var0.context = var6;
                var4.__closure = var0;
                var0 = 2401621621985.0;
                var4.__workletHash = var0;
                var0 = _closure1_slot3;
                var4.__initData = var0;
                var0 = var4;
                if (var2) {
                    _fun34683_ip = 186;
                    continue _fun34683
                }
            case 143:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useEvent;
                var1 = ['onGestureHandlerStateChange', 'onGestureHandlerEvent'];
                var0 = var2.bind(var3)(var4, var1, var5);
            case 186:
                return var0;
        }
    };
    var1.useAnimatedGestureHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3825, 3827]);