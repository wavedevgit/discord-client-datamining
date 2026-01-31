// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var _closure1_slot0 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = "function valueSetter_Pnpm_valueSetterTs1(mutable,value,forceUpdate=false){const previousAnimation=mutable._animation;if(previousAnimation){previousAnimation.cancelled=true;mutable._animation=null;}if(typeof value==='function'||value!==null&&typeof value==='object'&&value.onFrame!==undefined){const animation=typeof value==='function'?value():value;if(mutable._value===animation.current&&!animation.isHigherOrder&&!forceUpdate){animation.callback&&animation.callback(true);return;}const initializeAnimation=function(timestamp){animation.onStart(animation,mutable.value,timestamp,previousAnimation);};const currentTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();initializeAnimation(currentTimestamp);const step=function(newTimestamp){const timestamp=newTimestamp<(animation.timestamp||0)?animation.timestamp:newTimestamp;if(animation.cancelled){animation.callback&&animation.callback(false);return;}const finished=animation.onFrame(animation,timestamp);animation.finished=true;animation.timestamp=timestamp;mutable._value=animation.current;if(finished){animation.callback&&animation.callback(true);}else{requestAnimationFrame(step);}};mutable._animation=animation;step(currentTimestamp);}else{if(mutable._value===value&&!forceUpdate){return;}mutable._value=value;}}";
    var1.code = var3;
    var _closure1_slot1 = var1;
    var1 = function() { // Environment: var0
        var0 = function arg0, arg1() {
            _fun33331: for (var _fun33331_ip = 0;;) switch (_fun33331_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var0 = undefined;
                    var6 = undefined;
                    var _closure3_slot0 = var4;
                    var1 = arguments.length;
                    var3 = 2;
                    var1 = var1 > var3;
                    if (!var1) {
                        _fun33331_ip = 37;
                        continue _fun33331
                    }
                case 29:
                    var7 = arguments[var3];
                    var1 = var0 !== var7;
                case 37:
                    if (!var1) {
                        _fun33331_ip = 44;
                        continue _fun33331
                    }
                case 40:
                    var1 = arguments[var3];
                case 44:
                    var7 = var4._animation;
                    if (!var7) {
                        _fun33331_ip = 69;
                        continue _fun33331
                    }
                case 53:
                    var3 = true;
                    var7.cancelled = var3;
                    var3 = null;
                    var4._animation = var3;
                case 69:
                    var8 = typeof var2;
                    var3 = 'function';
                    var6 = var3 === var8;
                    if (var6) {
                        _fun33331_ip = 133;
                        continue _fun33331
                    }
                case 83:
                    var3 = null;
                    if (!(var3 !== var2)) {
                        _fun33331_ip = 107;
                        continue _fun33331
                    }
                case 89:
                    var3 = 'object';
                    if (!(var3 === var8)) {
                        _fun33331_ip = 107;
                        continue _fun33331
                    }
                case 97:
                    var3 = var2.onFrame;
                    if (!(var0 === var3)) {
                        _fun33331_ip = 133;
                        continue _fun33331
                    }
                case 107:
                    var3 = var4._value;
                    if (!(var3 === var2)) {
                        _fun33331_ip = 122;
                        continue _fun33331
                    }
                case 117:
                    if (var1) {
                        _fun33331_ip = 122;
                        continue _fun33331
                    }
                case 120:
                    return var0;
                case 122:
                    var4._value = var2;
                    _fun33331_ip = 277;
                    continue _fun33331;
                case 133:
                    var3 = var2;
                    if (!var6) {
                        _fun33331_ip = 143;
                        continue _fun33331
                    }
                case 139:
                    var3 = var2.bind(var0)();
                case 143:
                    var _closure3_slot1 = var3;
                    var6 = var4._value;
                    var2 = var3.current;
                    if (!(var6 === var2)) {
                        _fun33331_ip = 200;
                        continue _fun33331
                    }
                case 162:
                    var2 = var3.isHigherOrder;
                    if (var2) {
                        _fun33331_ip = 200;
                        continue _fun33331
                    }
                case 171:
                    if (var1) {
                        _fun33331_ip = 200;
                        continue _fun33331
                    }
                case 174:
                    var1 = var3.callback;
                    if (!var1) {
                        _fun33331_ip = 196;
                        continue _fun33331
                    }
                case 183:
                    var6 = var3.callback;
                    var2 = true;
                    var1 = var6.bind(var3)(var2);
                case 196:
                    var1 = undefined;
                    return var1;
                case 200:
                    var2 = _closure1_slot0;
                    var2 = var2.__frameTimestamp;
                    if (var2) {
                        _fun33331_ip = 230;
                        continue _fun33331
                    }
                case 216:
                    var6 = _closure1_slot0;
                    var1 = var6._getAnimationTimestamp;
                    var2 = var1.bind(var6)();
                case 230:
                    var6 = var3.onStart;
                    var11 = var4.value;
                    var13 = var3;
                    var12 = var3;
                    var10 = var2;
                    var9 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8);
                    var1 = function arg0() {
                        _fun33332: for (var _fun33332_ip = 0;;) switch (_fun33332_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = _closure3_slot1;
                                var1 = var1.timestamp;
                                if (var1) {
                                    _fun33332_ip = 21;
                                    continue _fun33332
                                }
                            case 19:
                                var1 = 0;
                            case 21:
                                if (!(var5 < var1)) {
                                    _fun33332_ip = 35;
                                    continue _fun33332
                                }
                            case 25:
                                var1 = _closure3_slot1;
                                var5 = var1.timestamp;
                            case 35:
                                var1 = _closure3_slot1;
                                var2 = var1.cancelled;
                                var1 = _closure3_slot1;
                                if (var2) {
                                    _fun33332_ip = 163;
                                    continue _fun33332
                                }
                            case 52:
                                var3 = var1.onFrame;
                                var2 = _closure3_slot1;
                                var2 = var3.bind(var1)(var2, var5);
                                var3 = _closure3_slot1;
                                var4 = true;
                                var3.finished = var4;
                                var3 = _closure3_slot1;
                                var3.timestamp = var5;
                                var5 = _closure3_slot0;
                                var3 = _closure3_slot1;
                                var3 = var3.current;
                                var5._value = var3;
                                if (var2) {
                                    _fun33332_ip = 133;
                                    continue _fun33332
                                }
                            case 112:
                                var2 = global;
                                var5 = var2.requestAnimationFrame;
                                var3 = _closure3_slot2;
                                var2 = undefined;
                                var2 = var5.bind(var2)(var3);
                                _fun33332_ip = 189;
                                continue _fun33332;
                            case 133:
                                var2 = _closure3_slot1;
                                var2 = var2.callback;
                                if (!var2) {
                                    _fun33332_ip = 189;
                                    continue _fun33332
                                }
                            case 146:
                                var3 = _closure3_slot1;
                                var2 = var3.callback;
                                var2 = var2.bind(var3)(var4);
                                _fun33332_ip = 189;
                                continue _fun33332;
                            case 163:
                                var1 = var1.callback;
                                if (!var1) {
                                    _fun33332_ip = 189;
                                    continue _fun33332
                                }
                            case 172:
                                var2 = _closure3_slot1;
                                var1 = var2.callback;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 189:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var1;
                    var4._animation = var3;
                    var1 = var1.bind(var0)(var2);
                case 277:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 13584629644803.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.valueSetter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);