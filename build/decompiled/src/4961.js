// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun44775: for (var _fun44775_ip = 0;;) switch (_fun44775_ip) {
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
                _fun44775_ip = 74;
                continue _fun44775;
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
    var8 = 0;
    var3 = var5[var8];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var7 = 1;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var6 = 2;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var3.NONE = var8;
    var4 = 'NONE';
    var3[var8] = var4;
    var3.LIFT = var7;
    var4 = 'LIFT';
    var3[var7] = var4;
    var3.HIGHLIGHT = var6;
    var4 = 'HIGHLIGHT';
    var3[var6] = var4;
    var4 = {};
    var6 = 'function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};}';
    var4.code = var6;
    var _closure1_slot6 = var4;
    var4 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: changeEventCalculator, environment: var0
            _fun44779: for (var _fun44779_ip = 0;;) switch (_fun44779_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = undefined;
                    if (!(var1 !== var0)) {
                        _fun44779_ip = 54;
                        continue _fun44779
                    }
                case 12:
                    var3 = {};
                    var2 = var4.x;
                    var1 = var0.x;
                    var1 = var2 - var1;
                    var3.changeX = var1;
                    var1 = var4.y;
                    var0 = var0.y;
                    var0 = var1 - var0;
                    var3.changeY = var0;
                    _fun44779_ip = 79;
                    continue _fun44779;
                case 54:
                    var0 = {};
                    var1 = var4.x;
                    var0.changeX = var1;
                    var1 = var4.y;
                    var0.changeY = var1;
                    var3 = var0;
                case 79:
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
        var1 = 2074844346342.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot7 = var4;
    var4 = 6;
    var5 = var5[var4];
    var4 = arg1;
    var4 = var4.bind(var0)(var5);
    var4 = var4.ContinousBaseGesture;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: HoverGesture, environment: var5
            _fun44781: for (var _fun44781_ip = 0;;) switch (_fun44781_ip) {
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
                        _fun44781_ip = 62;
                        continue _fun44781
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun44781_ip = 100;
                    continue _fun44781;
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
                    var1 = {};
                    var0.config = var1;
                    var1 = 'HoverGestureHandler';
                    var0.handlerName = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'effect';
        var4.key = var0;
        var0 = function(arg0) { // Original name: effect, environment: var5
            var0 = this;
            var2 = var0.config;
            var1 = arg0;
            var2.hoverEffect = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'onChange';
        var4.key = var6;
        var5 = function(arg0) { // Original name: onChange, environment: var5
            var5 = this;
            var1 = var5.handlers;
            var0 = _closure1_slot7;
            var1.changeEventCalculator = var0;
            var9 = _closure2_slot0;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var0
                _fun44784: for (var _fun44784_ip = 0;;) switch (_fun44784_ip) {
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
                            _fun44784_ip = 44;
                            continue _fun44784
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
                            _fun44784_ip = 98;
                            continue _fun44784
                        }
                    case 79:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun44784_ip = 98;
                            continue _fun44784
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
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var2.HoverEffect = var3;
    var3 = ['hoverEffect'];
    var2.hoverGestureHandlerProps = var3;
    var2.HoverGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 4962]);