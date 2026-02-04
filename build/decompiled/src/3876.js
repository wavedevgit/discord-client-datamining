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
    var2 = {};
    var3 = "function pnpm_useAnimatedScrollHandlerTs1(event){const{scrollHandlers,context}=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}}";
    var2.code = var3;
    var _closure1_slot2 = var2;
    var0 = function arg0, arg1() {
        _fun34967: for (var _fun34967_ip = 0;;) switch (_fun34967_ip) {
            case 0:
                var3 = arg0;
                var4 = 'function';
                var1 = typeof var3;
                var2 = var3;
                if (!(var4 === var1)) {
                    _fun34967_ip = 29;
                    continue _fun34967
                }
            case 19:
                var1 = {};
                var1.onScroll = var3;
                var2 = var1;
            case 29:
                var _closure2_slot0 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var6 = undefined;
                var4 = var3.bind(var6)(var1);
                var3 = var4.useHandler;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var7 = var1.context;
                var _closure2_slot1 = var7;
                var4 = var1.doDependenciesDiffer;
                var3 = ['onScroll'];
                var1 = var2.onBeginDrag;
                var8 = var2;
                if (!(var6 !== var1)) {
                    _fun34967_ip = 124;
                    continue _fun34967
                }
            case 110:
                var2 = var3.push;
                var1 = 'onScrollBeginDrag';
                var1 = var2.bind(var3)(var1);
            case 124:
                var1 = var8.onEndDrag;
                if (!(var6 !== var1)) {
                    _fun34967_ip = 148;
                    continue _fun34967
                }
            case 134:
                var2 = var3.push;
                var1 = 'onScrollEndDrag';
                var1 = var2.bind(var3)(var1);
            case 148:
                var1 = var8.onMomentumBegin;
                if (!(var6 !== var1)) {
                    _fun34967_ip = 172;
                    continue _fun34967
                }
            case 158:
                var2 = var3.push;
                var1 = 'onMomentumScrollBegin';
                var1 = var2.bind(var3)(var1);
            case 172:
                var1 = var8.onMomentumEnd;
                if (!(var6 !== var1)) {
                    _fun34967_ip = 196;
                    continue _fun34967
                }
            case 182:
                var2 = var3.push;
                var1 = 'onMomentumScrollEnd';
                var1 = var2.bind(var3)(var1);
            case 196:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 1;
                var1 = var9[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.useEvent;
                var0 = function arg0() {
                    _fun34968: for (var _fun34968_ip = 0;;) switch (_fun34968_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var2 = var1.onScroll;
                            var1 = _closure2_slot0;
                            var5 = var1.onBeginDrag;
                            var1 = _closure2_slot0;
                            var6 = var1.onEndDrag;
                            var1 = _closure2_slot0;
                            var7 = var1.onMomentumBegin;
                            var1 = _closure2_slot0;
                            var8 = var1.onMomentumEnd;
                            if (!var2) {
                                _fun34968_ip = 86;
                                continue _fun34968
                            }
                        case 59:
                            var9 = var3.eventName;
                            var4 = var9.endsWith;
                            var1 = 'onScroll';
                            var1 = var4.bind(var9)(var1);
                            if (var1) {
                                _fun34968_ip = 256;
                                continue _fun34968
                            }
                        case 86:
                            if (!var5) {
                                _fun34968_ip = 116;
                                continue _fun34968
                            }
                        case 89:
                            var9 = var3.eventName;
                            var4 = var9.endsWith;
                            var1 = 'onScrollBeginDrag';
                            var1 = var4.bind(var9)(var1);
                            if (var1) {
                                _fun34968_ip = 242;
                                continue _fun34968
                            }
                        case 116:
                            if (!var6) {
                                _fun34968_ip = 143;
                                continue _fun34968
                            }
                        case 119:
                            var9 = var3.eventName;
                            var4 = var9.endsWith;
                            var1 = 'onScrollEndDrag';
                            var1 = var4.bind(var9)(var1);
                            if (var1) {
                                _fun34968_ip = 228;
                                continue _fun34968
                            }
                        case 143:
                            if (!var7) {
                                _fun34968_ip = 170;
                                continue _fun34968
                            }
                        case 146:
                            var9 = var3.eventName;
                            var4 = var9.endsWith;
                            var1 = 'onMomentumScrollBegin';
                            var1 = var4.bind(var9)(var1);
                            if (var1) {
                                _fun34968_ip = 214;
                                continue _fun34968
                            }
                        case 170:
                            var1 = var8;
                            if (!var1) {
                                _fun34968_ip = 197;
                                continue _fun34968
                            }
                        case 176:
                            var10 = var3.eventName;
                            var9 = var10.endsWith;
                            var4 = 'onMomentumScrollEnd';
                            var1 = var9.bind(var10)(var4);
                        case 197:
                            if (!var1) {
                                _fun34968_ip = 268;
                                continue _fun34968
                            }
                        case 200:
                            var4 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var8.bind(var1)(var3, var4);
                            _fun34968_ip = 268;
                            continue _fun34968;
                        case 214:
                            var4 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var7.bind(var1)(var3, var4);
                            _fun34968_ip = 268;
                            continue _fun34968;
                        case 228:
                            var4 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var3, var4);
                            _fun34968_ip = 268;
                            continue _fun34968;
                        case 242:
                            var4 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var3, var4);
                            _fun34968_ip = 268;
                            continue _fun34968;
                        case 256:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3, var1);
                        case 268:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = {};
                var6.scrollHandlers = var8;
                var6.context = var7;
                var0.__closure = var6;
                var6 = 480432859268.0;
                var0.__workletHash = var6;
                var5 = _closure1_slot2;
                var0.__initData = var5;
                var0 = var1.bind(var2)(var0, var3, var4);
                return var0;
        }
    };
    var1.useAnimatedScrollHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3866, 3868]);