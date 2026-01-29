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
    var3 = 'function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}';
    var2.code = var3;
    var _closure1_slot2 = var2;
    var0 = function(arg0) { // Original name: useComposedEventHandler, environment: var0
        var4 = arg0;
        var10 = {};
        var _closure2_slot0 = var10;
        var0 = global;
        var2 = var0.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var14 = var3;
        var2 = new var14[var2](var13);
        var6 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var6;
        var8 = {};
        var _closure2_slot2 = var8;
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var1
            var1 = null;
            var0 = arg0;
            var0 = var1 !== var0;
            return var0;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var1
            _fun34738: for (var _fun34738_ip = 0;;) switch (_fun34738_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.workletEventHandler;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.WorkletEventHandler;
                    var3 = var2 instanceof var3;
                    if (!var3) {
                        _fun34738_ip = 73;
                        continue _fun34738
                    }
                case 52:
                    var3 = var2.eventNames;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun34739: for (var _fun34739_ip = 0;;) switch (_fun34739_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure2_slot1;
                                var0 = var2.add;
                                var0 = var0.bind(var2)(var3);
                                var0 = _closure2_slot2;
                                var4 = var0[var3];
                                var2 = _closure2_slot2;
                                if (var4) {
                                    _fun34739_ip = 62;
                                    continue _fun34739
                                }
                            case 38:
                                var4 = _closure3_slot0;
                                var5 = var4.worklet;
                                var4 = new Array(1);
                                var4[0] = var5;
                                var2[var3] = var4;
                                _fun34739_ip = 86;
                                continue _fun34739;
                            case 62:
                                var5 = var2[var3];
                                var4 = var5.push;
                                var2 = _closure3_slot0;
                                var2 = var2.worklet;
                                var2 = var4.bind(var5)(var2);
                            case 86:
                                var2 = _closure2_slot2;
                                var2 = var2[var3];
                                var5 = var2.length;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var2 = '';
                                var2 = var4.bind(var2)(var5);
                                var2 = var3 + var2;
                                var1 = _closure2_slot0;
                                var0 = _closure3_slot0;
                                var0 = var0.worklet;
                                var1[var2] = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 73:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var7 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 1;
        var2 = var9[var2];
        var3 = undefined;
        var4 = var7.bind(var3)(var2);
        var2 = var4.useHandler;
        var2 = var2.bind(var4)(var10);
        var4 = var2.doDependenciesDiffer;
        var2 = 2;
        var2 = var9[var2];
        var3 = var7.bind(var3)(var2);
        var2 = var3.useEvent;
        var1 = function(arg0) { // Original name: pnpm_useComposedEventHandlerTs1, environment: var1
            _fun34740: for (var _fun34740_ip = 0;;) switch (_fun34740_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot2;
                    var3 = var1.eventName;
                    var3 = var4[var3];
                    if (!var3) {
                        _fun34740_ip = 58;
                        continue _fun34740
                    }
                case 29:
                    var2 = _closure2_slot2;
                    var1 = var1.eventName;
                    var2 = var2[var1];
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 58:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = {};
        var7.workletsMap = var8;
        var1.__closure = var7;
        var7 = 14960316830945.0;
        var1.__workletHash = var7;
        var5 = _closure1_slot2;
        var1.__initData = var5;
        var5 = var0.Array;
        var0 = var5.from;
        var0 = var0.bind(var5)(var6);
        var0 = var2.bind(var3)(var1, var0, var4);
        return var0;
    };
    var1.useComposedEventHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3783, 3819, 3821]);