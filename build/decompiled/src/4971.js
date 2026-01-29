// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun44877: for (var _fun44877_ip = 0;;) switch (_fun44877_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun44877_ip = 74;
                continue _fun44877;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var5 = 'function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}';
    var3.code = var5;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: changeEventCalculator, environment: var0
            _fun44881: for (var _fun44881_ip = 0;;) switch (_fun44881_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = undefined;
                    if (!(var1 !== var0)) {
                        _fun44881_ip = 37;
                        continue _fun44881
                    }
                case 12:
                    var3 = {};
                    var1 = var4.scale;
                    var0 = var0.scale;
                    var0 = var1 / var0;
                    var3.scaleChange = var0;
                    _fun44881_ip = 53;
                    continue _fun44881;
                case 37:
                    var0 = {};
                    var1 = var4.scale;
                    var0.scaleChange = var1;
                    var3 = var0;
                case 53:
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.assign;
                    var0 = {};
                    var0 = var1.bind(var2)(var0, var4, var3);
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 9876979738005.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var3 = var3.bind(var0)(var4);
    var3 = var3.ContinousBaseGesture;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: PinchGesture, environment: var0
            _fun44883: for (var _fun44883_ip = 0;;) switch (_fun44883_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun44883_ip = 62;
                        continue _fun44883
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun44883_ip = 100;
                    continue _fun44883;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = 'PinchGestureHandler';
                    var0.handlerName = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot5;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'onChange';
        var4.key = var5;
        var0 = function(arg0) { // Original name: onChange, environment: var0
            var5 = this;
            var1 = var5.handlers;
            var0 = _closure1_slot7;
            var1.changeEventCalculator = var0;
            var9 = _closure2_slot0;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var0
                _fun44885: for (var _fun44885_ip = 0;;) switch (_fun44885_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot4;
                        var3 = _closure1_slot3;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun44885_ip = 44;
                            continue _fun44885
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = 'onChange';
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure4_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun44885_ip = 98;
                            continue _fun44885
                        }
                    case 79:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun44885_ip = 98;
                            continue _fun44885
                        }
                    case 93:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure4_slot1;
                            var2 = var3.apply;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 98:
                        return var0;
                }
            };
            var2 = undefined;
            var8 = 'onChange';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var1 = var10[var3](var9, var8, var7, var6, var5);
            var0 = new Array(1);
            var3 = arg0;
            var0[0] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.PinchGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 4956]);