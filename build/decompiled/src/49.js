// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = ['createNode', 'cloneNode', 'cloneNodeWithNewChildren', 'cloneNodeWithNewProps', 'cloneNodeWithNewChildrenAndProps', 'createChildSet', 'appendChild', 'appendChildToSet', 'completeRoot', 'measure', 'measureInWindow', 'measureLayout', 'configureNextLayoutAnimation', 'sendAccessibilityEvent', 'findShadowNodeByTag_DEPRECATED', 'setNativeProps', 'dispatchCommand', 'compareDocumentPosition', 'getBoundingClientRect', 'unstable_DefaultEventPriority', 'unstable_DiscreteEventPriority', 'unstable_ContinuousEventPriority', 'unstable_IdleEventPriority', 'unstable_getCurrentEventPriority'];
    var _closure1_slot4 = var2;
    var0 = function() {
        _fun1348: for (var _fun1348_ip = 0;;) switch (_fun1348_ip) {
            case 0:
                var1 = _closure1_slot3;
                var3 = null;
                var1 = var3 == var1;
                if (!var1) {
                    _fun1348_ip = 30;
                    continue _fun1348
                }
            case 16:
                var2 = _closure1_slot0;
                var2 = var2.nativeFabricUIManager;
                var1 = var3 != var2;
            case 30:
                if (!var1) {
                    _fun1348_ip = 66;
                    continue _fun1348
                }
            case 33:
                var1 = _closure1_slot0;
                var4 = var1.nativeFabricUIManager;
                var3 = _closure1_slot4;
                var2 = function arg0, arg1() {
                    _fun1349: for (var _fun1349_ip = 0;;) switch (_fun1349_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var3 = undefined;
                            var4 = undefined;
                            var0 = global;
                            var2 = var0.Object;
                            var0 = var2.create;
                            var0 = var0.bind(var2)(var5);
                            var _closure3_slot1 = var0;
                            var4 = function arg0() {
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 0;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = _closure3_slot1;
                                var1 = {};
                                var5 = function() {
                                    var1 = _closure3_slot0;
                                    var0 = _closure4_slot0;
                                    var0 = var1[var0];
                                    return var0;
                                };
                                var1.get = var5;
                                var1 = var3.bind(var0)(var2, var4, var1);
                                return var0;
                            };
                            var1 = arg1;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                        case 46:
                            var6 = var1().value;
                            var5 = var2;
                            if (!(var5 !== var3)) {
                                _fun1349_ip = 74;
                                continue _fun1349
                            }
                        case 57: // try_start_0
                            var5 = var4;
                            var5 = var5.bind(var3)(var6);
                        case 65: // try_end0
                            _fun1349_ip = 46;
                            continue _fun1349;
                        case 67: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 74:
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                var _closure1_slot3 = var1;
            case 66:
                var0 = _closure1_slot3;
                return var0;
        }
    };
    var1.getFabricUIManager = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [50]);