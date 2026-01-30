// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var3 = {};
    var2 = 'function pnpm_utilsTs1(worklet,wait=0){const value={time:0};return function(...args){"worklet";const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);};}';
    var3.code = var2;
    var2 = {};
    var4 = 'function pnpm_utilsTs2(...args){const{value,wait,worklet}=this.__closure;const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);}';
    var2.code = var4;
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Original name: pnpm_utilsTs1, environment: var0
        _fun68347: for (var _fun68347_ip = 0;;) switch (_fun68347_ip) {
            case 0:
                var2 = arg0;
                var7 = undefined;
                var5 = undefined;
                var _closure2_slot0 = var2;
                var1 = arguments.length;
                var4 = 1;
                var6 = var1 > var4;
                var1 = 0;
                var3 = 0;
                if (!var6) {
                    _fun68347_ip = 44;
                    continue _fun68347
                }
            case 30:
                var6 = arguments[var4];
                var3 = 0;
                if (!(var7 !== var6)) {
                    _fun68347_ip = 44;
                    continue _fun68347
                }
            case 40:
                var3 = arguments[var4];
            case 44:
                var _closure2_slot1 = var3;
                var4 = {};
                var4.time = var1;
                var _closure2_slot2 = var4;
                var0 = function() { // Original name: pnpm_utilsTs2, environment: var0
                    _fun68348: for (var _fun68348_ip = 0;;) switch (_fun68348_ip) {
                        case 0:
                            var0 = undefined;
                            var3 = undefined;
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var4 = _closure2_slot2;
                            var4 = var4.time;
                            var5 = var2 - var4;
                            var4 = _closure2_slot1;
                            if (!(!(var5 < var4))) {
                                _fun68348_ip = 75;
                                continue _fun68348
                            }
                        case 46:
                            var4 = _closure2_slot2;
                            var4.time = var2;
                            var5 = _closure2_slot0;
                            var4 = var5.apply;
                            var3 = arguments;
                            var3 = var4.bind(var5)(var0, var3);
                            return var3;
                        case 75:
                            var1 = _closure2_slot2;
                            var1.time = var2;
                            return var0;
                    }
                };
                var1 = {};
                var1.value = var4;
                var1.wait = var3;
                var1.worklet = var2;
                var0.__closure = var1;
                var1 = 8768898864142.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot0;
                var0.__initData = var1;
                return var0;
        }
    };
    var4 = {};
    var2.__closure = var4;
    var4 = 1678132827161.0;
    var2.__workletHash = var4;
    var2.__initData = var3;
    var3 = {};
    var4 = 'function pnpm_utilsTs3(defaultScrollValue,snapPoints){let snapPoint;if(snapPoints){snapPoint=snapPoints.find(function(offset){return offset>=defaultScrollValue;});}return snapPoint!==null&&snapPoint!==void 0?snapPoint:defaultScrollValue;}';
    var3.code = var4;
    var0 = function(arg0, arg1) { // Original name: pnpm_utilsTs3, environment: var0
        _fun68349: for (var _fun68349_ip = 0;;) switch (_fun68349_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var0;
                var1 = undefined;
                if (!var4) {
                    _fun68349_ip = 34;
                    continue _fun68349
                }
            case 17:
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 >= var1;
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 34:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun68349_ip = 43;
                    continue _fun68349
                }
            case 40:
                var0 = var1;
            case 43:
                return var0;
        }
    };
    var4 = {};
    var0.__closure = var4;
    var4 = 10680474034033.0;
    var0.__workletHash = var4;
    var0.__initData = var3;
    var1.debounce = var2;
    var1.scrollDistanceWithRespectToSnapPoints = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);