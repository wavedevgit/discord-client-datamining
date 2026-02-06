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
        'UNKNOWN': 0,
        'OPENING': 1,
        'OPEN': 2,
        'CLOSING': 3,
        'CLOSED': 4
    };
    var _closure1_slot2 = var2;
    var3 = {};
    var4 = 'function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}';
    var3.code = var4;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var1.KeyboardState = var2;
    var0 = function() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 0;
        var2 = var7[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var2);
        var2 = var3.useSharedValue;
        var2 = var2.bind(var3)(var1);
        var _closure2_slot0 = var2;
        var1 = var7[var1];
        var9 = var5.bind(var4)(var1);
        var3 = var9.useSharedValue;
        var8 = _closure1_slot2;
        var1 = var8.UNKNOWN;
        var1 = var3.bind(var9)(var1);
        var _closure2_slot1 = var1;
        var3 = 1;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useKeyboardHandler;
        var3 = {};
        var7 = function arg0() {
            _fun68580: for (var _fun68580_ip = 0;;) switch (_fun68580_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = arg0;
                    var3 = var0.height;
                    var0 = 0;
                    if (!(!(var3 > var0))) {
                        _fun68580_ip = 41;
                        continue _fun68580
                    }
                case 26:
                    var0 = _closure1_slot2;
                    var0 = var0.CLOSING;
                    _fun68580_ip = 54;
                    continue _fun68580;
                case 41:
                    var3 = _closure1_slot2;
                    var0 = var3.OPENING;
                case 54:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var9 = {};
        var9.state = var1;
        var9.KeyboardState = var8;
        var7.__closure = var9;
        var9 = 14565322463725.0;
        var7.__workletHash = var9;
        var9 = _closure1_slot3;
        var7.__initData = var9;
        var3.onStart = var7;
        var7 = function arg0() {
            var2 = _closure2_slot0;
            var1 = var2.set;
            var0 = arg0;
            var0 = var0.height;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var9 = {};
        var9.height = var2;
        var7.__closure = var9;
        var9 = 10176723030164.0;
        var7.__workletHash = var9;
        var9 = _closure1_slot4;
        var7.__initData = var9;
        var3.onMove = var7;
        var7 = function arg0() {
            var2 = _closure2_slot0;
            var1 = var2.set;
            var0 = arg0;
            var0 = var0.height;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var9 = {};
        var9.height = var2;
        var7.__closure = var9;
        var9 = 5410731249621.0;
        var7.__workletHash = var9;
        var9 = _closure1_slot5;
        var7.__initData = var9;
        var3.onInteractive = var7;
        var0 = function arg0() {
            _fun68583: for (var _fun68583_ip = 0;;) switch (_fun68583_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var5 = var0.height;
                    var2 = 0;
                    if (!(!(var5 > var2))) {
                        _fun68583_ip = 41;
                        continue _fun68583
                    }
                case 26:
                    var2 = _closure1_slot2;
                    var2 = var2.CLOSED;
                    _fun68583_ip = 54;
                    continue _fun68583;
                case 41:
                    var5 = _closure1_slot2;
                    var2 = var5.OPEN;
                case 54:
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = {};
        var7.state = var1;
        var7.KeyboardState = var8;
        var7.height = var2;
        var0.__closure = var7;
        var7 = 1401367954247.0;
        var0.__workletHash = var7;
        var6 = _closure1_slot6;
        var0.__initData = var6;
        var3.onEnd = var0;
        var0 = new Array(0);
        var0 = var4.bind(var5)(var3, var0);
        var0 = {};
        var0.height = var2;
        var0.state = var1;
        return var0;
    };
    var1.useAnimatedKeyboard = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3723, 8556]);