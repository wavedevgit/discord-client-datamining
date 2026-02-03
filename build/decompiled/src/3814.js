// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun34059: for (var _fun34059_ip = 0;;) switch (_fun34059_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var0 = var5.children;
                var0 = var0.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = 'none';
                if (!var0) {
                    _fun34059_ip = 116;
                    continue _fun34059
                }
            case 32:
                var0 = var5.children;
                var7 = var0[var2];
                if (var3) {
                    _fun34059_ip = 78;
                    continue _fun34059
                }
            case 44:
                var6 = var4.set;
                var0 = var7.style;
                var0 = var0.display;
                var0 = var6.bind(var4)(var7, var0);
                var0 = var7.style;
                var0.display = var1;
                _fun34059_ip = 99;
                continue _fun34059;
            case 78:
                var6 = var7.style;
                var0 = var4.get;
                var0 = var0.bind(var4)(var7);
                var6.display = var0;
            case 99:
                var2 = var2 + 1;
                var0 = var5.children;
                var0 = var0.length;
                if (var2 < var0) {
                    _fun34059_ip = 32;
                    continue _fun34059
                }
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0, arg1, arg2, arg3() {
        var6 = arg0;
        var5 = arg1;
        var4 = arg2;
        var2 = function arg0, arg1, arg2, arg3() {
            var3 = arg0;
            var0 = arg1;
            var1 = {};
            var2 = arg3;
            var1.animationName = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var6 = var5[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var6);
            var6 = var6.LayoutAnimationType;
            var6 = var6.LAYOUT;
            var1.animationType = var6;
            var6 = var0.duration;
            var1.duration = var6;
            var0 = var0.delay;
            var1.delay = var0;
            var0 = 0;
            var0 = var5[var0];
            var4 = var4.bind(var2)(var0);
            var2 = var4.getEasingByName;
            var0 = arg2;
            var0 = var0.easingY;
            var0 = var2.bind(var4)(var0);
            var1.easing = var0;
            var0 = null;
            var1.callback = var0;
            var0 = false;
            var1.reversed = var0;
            var2 = var3.cloneNode;
            var0 = true;
            var2 = var2.bind(var3)(var0);
            var2.isDummy = var0;
            var3 = var2.style;
            var0 = '';
            var3.animationName = var0;
            var3 = var2.style;
            var0 = 'absolute';
            var3.position = var0;
            var0 = var2.style;
            var3 = '0px';
            var0.top = var3;
            var0 = var2.style;
            var0.left = var3;
            var0 = var2.style;
            var0.margin = var3;
            var0 = var2.style;
            var3 = '100%';
            var0.width = var3;
            var0 = var2.style;
            var0.height = var3;
            var0 = {};
            var0.dummy = var2;
            var0.dummyAnimationConfig = var1;
            return var0;
        };
        var7 = arg3;
        var11 = undefined;
        var10 = var6;
        var9 = var5;
        var8 = var4;
        var1 = var11[var2](var10, var9, var8, var7, var6);
        var2 = var1.dummy;
        var1 = var1.dummyAnimationConfig;
        var0 = function arg0, arg1, arg2, arg3() {
            var3 = arg0;
            var2 = arg1;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 0;
            var5 = var5[var0];
            var0 = undefined;
            var7 = var6.bind(var0)(var5);
            var6 = var7.getEasingByName;
            var5 = arg3;
            var5 = var5.easingX;
            var6 = var6.bind(var7)(var5);
            var5 = arg2;
            var5.easing = var6;
            var5 = global;
            var5 = var5.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var11 = var6;
            var5 = new var11[var5](var10);
            var6 = var5 instanceof Object ? var5 : var6;
            var _closure3_slot2 = var6;
            var5 = _closure1_slot2;
            var4 = false;
            var4 = var5.bind(var0)(var3, var6, var4);
            var4 = var3.style;
            var4 = var4.backgroundColor;
            var _closure3_slot3 = var4;
            var5 = var3.style;
            var4 = 'transparent';
            var5.backgroundColor = var4;
            var4 = function() {
                _fun34063: for (var _fun34063_ip = 0;;) switch (_fun34063_ip) {
                    case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.contains;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var0);
                        if (!var0) {
                            _fun34063_ip = 44;
                            continue _fun34063
                        }
                    case 25:
                        var3 = _closure3_slot0;
                        var2 = var3.removeChild;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var0);
                    case 44:
                        var5 = _closure1_slot2;
                        var2 = _closure3_slot0;
                        var4 = _closure3_slot2;
                        var0 = undefined;
                        var3 = true;
                        var3 = var5.bind(var0)(var2, var4, var3);
                        var2 = var2.style;
                        var1 = _closure3_slot3;
                        var2.backgroundColor = var1;
                        return var0;
                }
            };
            var _closure3_slot4 = var4;
            var5 = function() {
                var2 = _closure3_slot4;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var4 = _closure3_slot0;
                var3 = var4.removeEventListener;
                var2 = _closure3_slot5;
                var1 = 'animationcancel';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var _closure3_slot5 = var5;
            var6 = function() {
                var2 = _closure3_slot4;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var4 = _closure3_slot0;
                var3 = var4.removeEventListener;
                var2 = _closure3_slot6;
                var1 = 'animationend';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var _closure3_slot6 = var6;
            var4 = var3.addEventListener;
            var1 = 'animationend';
            var1 = var4.bind(var3)(var1, var6);
            var4 = var3.addEventListener;
            var1 = 'animationcancel';
            var1 = var4.bind(var3)(var1, var5);
            var1 = var3.appendChild;
            var1 = var1.bind(var3)(var2);
            return var0;
        };
        var10 = var6;
        var9 = var2;
        var8 = var5;
        var7 = var4;
        var0 = var11[var0](var10, var9, var8, var7, var6);
        var0 = {};
        var0.dummy = var2;
        var0.dummyAnimationConfig = var1;
        return var0;
    };
    var1.prepareCurvedTransition = var2;
    var0 = function arg0, arg1, arg2() {
        var7 = arg2;
        var0 = {};
        var1 = {};
        var2 = arg0;
        var1.name = var2;
        var2 = {};
        var3 = {};
        var6 = {};
        var8 = var7.translateX;
        var5 = global;
        var4 = var5.HermesInternal;
        var4 = var4.concat;
        var10 = '';
        var12 = 'px';
        var4 = var4.bind(var10)(var8, var12);
        var6.translateX = var4;
        var11 = var7.scaleX;
        var8 = var7.scaleY;
        var4 = var5.HermesInternal;
        var4 = var4.concat;
        var9 = ',';
        var4 = var4.bind(var10)(var11, var9, var8);
        var6.scale = var4;
        var4 = new Array(1);
        var4[0] = var6;
        var3.transform = var4;
        var2[0] = var3;
        var1.style = var2;
        var2 = 300;
        var1.duration = var2;
        var0.firstKeyframeObj = var1;
        var1 = {};
        var3 = arg1;
        var1.name = var3;
        var3 = {};
        var4 = {};
        var6 = {};
        var11 = var7.translateY;
        var8 = var5.HermesInternal;
        var8 = var8.concat;
        var8 = var8.bind(var10)(var11, var12);
        var6.translateY = var8;
        var8 = var7.scaleX;
        var7 = var7.scaleY;
        var5 = var5.HermesInternal;
        var5 = var5.concat;
        var5 = var5.bind(var10)(var8, var9, var7);
        var6.scale = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var4.transform = var5;
        var3[0] = var4;
        var1.style = var3;
        var1.duration = var2;
        var0.secondKeyframeObj = var1;
        return var0;
    };
    var1.CurvedTransition = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3780, 3746]);