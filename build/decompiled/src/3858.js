// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.configureProps;
    var3 = var3.bind(var4)();
    var3 = {};
    var4 = 'function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){const{applyStyle}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});}';
    var3.code = var4;
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: startScreenTransition, environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = var1.stackTag;
            var2 = var1.sharedEvent;
            var _closure3_slot1 = var2;
            var1 = var2.addListener;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.applyStyle;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var1 = var1.value;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var0 = var1.bind(var2)(var3, var0);
            var0 = undefined;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.applyStyle;
        var2.applyStyle = var3;
        var0.__closure = var2;
        var2 = 9428952089760.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = {};
    var5 = "function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;}";
    var4.code = var5;
    var _closure1_slot3 = var4;
    var4 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: getLockAxis, environment: var0
            _fun34933: for (var _fun34933_ip = 0;;) switch (_fun34933_ip) {
                case 0:
                    var3 = arg0;
                    var1 = ['swipeRight', 'swipeLeft', 'horizontalSwipe'];
                    var0 = var1.includes;
                    var1 = var0.bind(var1)(var3);
                    var0 = 'x';
                    if (var1) {
                        _fun34933_ip = 62;
                        continue _fun34933
                    }
                case 30:
                    var2 = ['swipeUp', 'swipeDown', 'verticalSwipe'];
                    var1 = var2.includes;
                    var2 = var1.bind(var2)(var3);
                    var1 = undefined;
                    if (!var2) {
                        _fun34933_ip = 59;
                        continue _fun34933
                    }
                case 55:
                    var1 = 'y';
                case 59:
                    var0 = var1;
                case 62:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 16916946798878.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){const{getLockAxis,getSwipeSimulator}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();}';
    var4.code = var5;
    var _closure1_slot5 = var4;
    var1 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: finishScreenTransition, environment: var0
            var5 = arg0;
            var2 = var5.stackTag;
            var1 = var5.sharedEvent;
            var4 = var5.goBackGesture;
            var0 = var1.removeListener;
            var0 = var0.bind(var1)(var2);
            var3 = _closure1_slot4;
            var0 = undefined;
            var4 = var3.bind(var0)(var4);
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.getSwipeSimulator;
            var1 = var1.value;
            var1 = var2.bind(var3)(var1, var5, var4);
            var1 = var1.bind(var0)();
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot4;
        var2.getLockAxis = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.getSwipeSimulator;
        var2.getSwipeSimulator = var3;
        var0.__closure = var2;
        var2 = 6937010294861.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.startScreenTransition = var3;
    var2.finishScreenTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3778, 3859, 3860]);