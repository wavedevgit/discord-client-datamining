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
    var0 = function arg0, arg1() {
        _fun34924: for (var _fun34924_ip = 0;;) switch (_fun34924_ip) {
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
                var4 = function arg0() {
                    _fun34925: for (var _fun34925_ip = 0;;) switch (_fun34925_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot2;
                            var4 = var1;
                            if (!var2) {
                                _fun34925_ip = 21;
                                continue _fun34925
                            }
                        case 16:
                            var4 = var1.nativeEvent;
                        case 21:
                            var2 = var4.state;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34925_ip = 56;
                                continue _fun34925
                            }
                        case 46:
                            var2 = _closure2_slot0;
                            var1 = var2.onStart;
                        case 56:
                            if (!var1) {
                                _fun34925_ip = 79;
                                continue _fun34925
                            }
                        case 59:
                            var3 = _closure2_slot0;
                            var2 = var3.onStart;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 79:
                            var2 = var4.state;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34925_ip = 111;
                                continue _fun34925
                            }
                        case 101:
                            var2 = _closure2_slot0;
                            var1 = var2.onActive;
                        case 111:
                            if (!var1) {
                                _fun34925_ip = 134;
                                continue _fun34925
                            }
                        case 114:
                            var3 = _closure2_slot0;
                            var2 = var3.onActive;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 134:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34925_ip = 176;
                                continue _fun34925
                            }
                        case 157:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.END;
                            var1 = var3 === var2;
                        case 176:
                            if (!var1) {
                                _fun34925_ip = 189;
                                continue _fun34925
                            }
                        case 179:
                            var2 = _closure2_slot0;
                            var1 = var2.onEnd;
                        case 189:
                            if (!var1) {
                                _fun34925_ip = 212;
                                continue _fun34925
                            }
                        case 192:
                            var3 = _closure2_slot0;
                            var2 = var3.onEnd;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 212:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34925_ip = 254;
                                continue _fun34925
                            }
                        case 235:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.FAILED;
                            var1 = var3 === var2;
                        case 254:
                            if (!var1) {
                                _fun34925_ip = 267;
                                continue _fun34925
                            }
                        case 257:
                            var2 = _closure2_slot0;
                            var1 = var2.onFail;
                        case 267:
                            if (!var1) {
                                _fun34925_ip = 290;
                                continue _fun34925
                            }
                        case 270:
                            var3 = _closure2_slot0;
                            var2 = var3.onFail;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 290:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.ACTIVE;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun34925_ip = 332;
                                continue _fun34925
                            }
                        case 313:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.CANCELLED;
                            var1 = var3 === var2;
                        case 332:
                            if (!var1) {
                                _fun34925_ip = 345;
                                continue _fun34925
                            }
                        case 335:
                            var2 = _closure2_slot0;
                            var1 = var2.onCancel;
                        case 345:
                            if (!var1) {
                                _fun34925_ip = 368;
                                continue _fun34925
                            }
                        case 348:
                            var3 = _closure2_slot0;
                            var2 = var3.onCancel;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 368:
                            var2 = var4.oldState;
                            var1 = _closure1_slot2;
                            var1 = var1.BEGAN;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun34925_ip = 411;
                                continue _fun34925
                            }
                        case 391:
                            var3 = var4.oldState;
                            var2 = _closure1_slot2;
                            var2 = var2.ACTIVE;
                            var1 = var3 !== var2;
                        case 411:
                            if (var1) {
                                _fun34925_ip = 433;
                                continue _fun34925
                            }
                        case 414:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.BEGAN;
                            var1 = var3 === var2;
                        case 433:
                            if (var1) {
                                _fun34925_ip = 455;
                                continue _fun34925
                            }
                        case 436:
                            var3 = var4.state;
                            var2 = _closure1_slot2;
                            var2 = var2.ACTIVE;
                            var1 = var3 === var2;
                        case 455:
                            if (var1) {
                                _fun34925_ip = 471;
                                continue _fun34925
                            }
                        case 458:
                            var2 = _closure2_slot0;
                            var2 = var2.onFinish;
                            var1 = !var2;
                        case 471:
                            if (var1) {
                                _fun34925_ip = 536;
                                continue _fun34925
                            }
                        case 474:
                            var3 = _closure2_slot0;
                            var2 = var3.onFinish;
                            var1 = _closure2_slot1;
                            var6 = var4.state;
                            var0 = _closure1_slot2;
                            var0 = var0.CANCELLED;
                            var0 = var6 === var0;
                            if (var0) {
                                _fun34925_ip = 529;
                                continue _fun34925
                            }
                        case 510:
                            var6 = var4.state;
                            var5 = _closure1_slot2;
                            var5 = var5.FAILED;
                            var0 = var6 === var5;
                        case 529:
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 536:
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
                    _fun34924_ip = 186;
                    continue _fun34924
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3863, 3865]);