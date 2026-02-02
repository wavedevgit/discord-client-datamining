// modules/status_bar/native/components/StatusBarManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusBar;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.propsStack = var1;
            var1 = null;
            var2.updateImmediate = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'pushStackEntry';
        var0.key = var1;
        var1 = function arg0() {
            var1 = arg0;
            var2 = this;
            var0 = {};
            var3 = var1.hidden;
            var0.hidden = var3;
            var1 = var1.barStyle;
            var0.barStyle = var1;
            var3 = var2.propsStack;
            var1 = var3.push;
            var1 = var1.bind(var3)(var0);
            var1 = var2.updatePropsStack;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'popStackEntry';
        var0.key = var5;
        var5 = function arg0() {
            _fun62706: for (var _fun62706_ip = 0;;) switch (_fun62706_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var0 = null;
                    var2 = var0 != var5;
                    var0 = -1;
                    var4 = var0;
                    if (!var2) {
                        _fun62706_ip = 41;
                        continue _fun62706
                    }
                case 24:
                    var3 = var1.propsStack;
                    var2 = var3.indexOf;
                    var4 = var2.bind(var3)(var5);
                case 41:
                    if (!(var0 !== var4)) {
                        _fun62706_ip = 76;
                        continue _fun62706
                    }
                case 45:
                    var3 = var1.propsStack;
                    var2 = var3.splice;
                    var0 = 1;
                    var0 = var2.bind(var3)(var4, var0);
                    var0 = var1.updatePropsStack;
                    var0 = var0.bind(var1)();
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'replaceStackEntry';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun62707: for (var _fun62707_ip = 0;;) switch (_fun62707_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg1;
                    var2 = this;
                    var0 = {};
                    var3 = var1.hidden;
                    var0.hidden = var3;
                    var1 = var1.barStyle;
                    var0.barStyle = var1;
                    var1 = null;
                    var4 = var1 != var6;
                    var1 = -1;
                    var3 = var1;
                    if (!var4) {
                        _fun62707_ip = 68;
                        continue _fun62707
                    }
                case 51:
                    var5 = var2.propsStack;
                    var4 = var5.indexOf;
                    var3 = var4.bind(var5)(var6);
                case 68:
                    if (!(var1 !== var3)) {
                        _fun62707_ip = 82;
                        continue _fun62707
                    }
                case 72:
                    var1 = var2.propsStack;
                    var1[var3] = var0;
                case 82:
                    var1 = var2.updatePropsStack;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updatePropsStack';
        var0.key = var5;
        var4 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = global;
            var5 = var3.clearImmediate;
            var4 = var2.updateImmediate;
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var3 = var3.setImmediate;
            var1 = function() { // Environment: var1
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var1 = var4[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var5 = var6.merge;
                var1 = new Array(1);
                var7 = {
                    'hidden': false,
                    'barStyle': 'default'
                };
                var1[0] = var7;
                var7 = _closure3_slot0;
                var10 = var7.propsStack;
                var9 = 1;
                var11 = var1;
                var7 = arraySpread(var11, var10, var9);
                var11 = var5;
                var10 = var1;
                var9 = var6;
                var1 = apply(var11, var10, var9);
                var6 = var1.barStyle;
                var1 = var1.hidden;
                var5 = _closure1_slot4;
                var2 = var5.setBarStyle;
                var2 = var2.bind(var5)(var6);
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setStatusBarVisible;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var3.bind(var0)(var1);
            var2.updateImmediate = var1;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/status_bar/native/components/StatusBarManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 22, 1580, 2]);