// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1306: for (var _fun1306_ip = 0;;) switch (_fun1306_ip) {
        case 0:
            var6 = require;
            var1 = exports;
            var4 = dependencyMap;
            var _closure1_slot0 = var6;
            var2 = metroImportDefault;
            var _closure1_slot1 = var2;
            var _closure1_slot2 = var4;
            var2 = function arg0() {
                var1 = arg0;
                var0 = 2;
                var1 = var1 % var0;
                var0 = 0;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot4 = var2;
            var2 = global;
            var9 = var2.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var5 = true;
            var7.value = var5;
            var3 = '__esModule';
            var3 = var8.bind(var9)(var1, var3, var7);
            var3 = arg0;
            var3 = var3.RN$Bridgeless;
            if (!(var5 !== var3)) {
                _fun1306_ip = 101;
                continue _fun1306
            }
        case 80:
            var3 = 1;
            var5 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var5 = var3.default;
            _fun1306_ip = 119;
            continue _fun1306;
        case 101:
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var5 = var3.default;
        case 119:
            var _closure1_slot3 = var5;
            var4 = var2.Object;
            var3 = var4.assign;
            var2 = {};
            var6 = function arg0, arg1() {
                _fun1308: for (var _fun1308_ip = 0;;) switch (_fun1308_ip) {
                    case 0:
                        var8 = arg0;
                        var4 = arg1;
                        var2 = _closure1_slot4;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var8);
                        if (var2) {
                            _fun1308_ip = 44;
                            continue _fun1308
                        }
                    case 23:
                        var3 = _closure1_slot3;
                        var2 = var3.measure;
                        var2 = var2.bind(var3)(var8, var4);
                        _fun1308_ip = 167;
                        continue _fun1308;
                    case 44:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure1_slot0;
                        var1 = 3;
                        var1 = var5[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.getFabricUIManager;
                        var1 = var1.bind(var3)();
                        var3 = var2.bind(var0)(var1);
                        var1 = var3.findShadowNodeByTag_DEPRECATED;
                        var2 = var1.bind(var3)(var8);
                        if (var2) {
                            _fun1308_ip = 155;
                            continue _fun1308
                        }
                    case 109:
                        var1 = global;
                        var6 = var1.console;
                        var5 = var6.warn;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var1 = 'measure cannot find view with tag #';
                        var1 = var7.bind(var1)(var8);
                        var1 = var5.bind(var6)(var1);
                        var1 = var4.bind(var0)();
                        _fun1308_ip = 167;
                        continue _fun1308;
                    case 155:
                        var1 = var3.measure;
                        var1 = var1.bind(var3)(var2, var4);
                    case 167:
                        return var0;
                }
            };
            var2.measure = var6;
            var6 = function arg0, arg1() {
                _fun1309: for (var _fun1309_ip = 0;;) switch (_fun1309_ip) {
                    case 0:
                        var8 = arg0;
                        var4 = arg1;
                        var2 = _closure1_slot4;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var8);
                        if (var2) {
                            _fun1309_ip = 44;
                            continue _fun1309
                        }
                    case 23:
                        var3 = _closure1_slot3;
                        var2 = var3.measureInWindow;
                        var2 = var2.bind(var3)(var8, var4);
                        _fun1309_ip = 167;
                        continue _fun1309;
                    case 44:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure1_slot0;
                        var1 = 3;
                        var1 = var5[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.getFabricUIManager;
                        var1 = var1.bind(var3)();
                        var3 = var2.bind(var0)(var1);
                        var1 = var3.findShadowNodeByTag_DEPRECATED;
                        var2 = var1.bind(var3)(var8);
                        if (var2) {
                            _fun1309_ip = 155;
                            continue _fun1309
                        }
                    case 109:
                        var1 = global;
                        var6 = var1.console;
                        var5 = var6.warn;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var1 = 'measure cannot find view with tag #';
                        var1 = var7.bind(var1)(var8);
                        var1 = var5.bind(var6)(var1);
                        var1 = var4.bind(var0)();
                        _fun1309_ip = 167;
                        continue _fun1309;
                    case 155:
                        var1 = var3.measureInWindow;
                        var1 = var1.bind(var3)(var2, var4);
                    case 167:
                        return var0;
                }
            };
            var2.measureInWindow = var6;
            var6 = function arg0, arg1, arg2, arg3() {
                _fun1310: for (var _fun1310_ip = 0;;) switch (_fun1310_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        if (var4) {
                            _fun1310_ip = 60;
                            continue _fun1310
                        }
                    case 29:
                        var7 = _closure1_slot3;
                        var4 = var7.measureLayout;
                        var13 = var7;
                        var12 = var3;
                        var11 = var2;
                        var10 = var6;
                        var9 = var5;
                        var4 = var13[var4](var12, var11, var10, var9, var8);
                        _fun1310_ip = 166;
                        continue _fun1310;
                    case 60:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 2;
                        var4 = var8[var4];
                        var4 = var7.bind(var0)(var4);
                        var7 = _closure1_slot0;
                        var1 = 3;
                        var1 = var8[var1];
                        var7 = var7.bind(var0)(var1);
                        var1 = var7.getFabricUIManager;
                        var1 = var1.bind(var7)();
                        var4 = var4.bind(var0)(var1);
                        var1 = var4.findShadowNodeByTag_DEPRECATED;
                        var3 = var1.bind(var4)(var3);
                        var1 = var4.findShadowNodeByTag_DEPRECATED;
                        var2 = var1.bind(var4)(var2);
                        if (!var3) {
                            _fun1310_ip = 139;
                            continue _fun1310
                        }
                    case 136:
                        if (var2) {
                            _fun1310_ip = 141;
                            continue _fun1310
                        }
                    case 139:
                        return var0;
                    case 141:
                        var1 = var4.measureLayout;
                        var13 = var4;
                        var12 = var3;
                        var11 = var2;
                        var10 = var6;
                        var9 = var5;
                        var1 = var13[var1](var12, var11, var10, var9, var8);
                    case 166:
                        return var0;
                }
            };
            var2.measureLayout = var6;
            var6 = function arg0, arg1, arg2() {
                _fun1311: for (var _fun1311_ip = 0;;) switch (_fun1311_ip) {
                    case 0:
                        var3 = arg0;
                        var7 = arg2;
                        var _closure2_slot0 = var7;
                        var4 = _closure1_slot4;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        if (var4) {
                            _fun1311_ip = 51;
                            continue _fun1311
                        }
                    case 29:
                        var6 = _closure1_slot3;
                        var5 = var6.measureLayoutRelativeToParent;
                        var4 = arg1;
                        var4 = var5.bind(var6)(var3, var4, var7);
                        _fun1311_ip = 157;
                        continue _fun1311;
                    case 51:
                        var4 = global;
                        var6 = var4.console;
                        var5 = var6.warn;
                        var4 = 'RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450';
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 2;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var5 = _closure1_slot0;
                        var2 = 3;
                        var2 = var6[var2];
                        var5 = var5.bind(var0)(var2);
                        var2 = var5.getFabricUIManager;
                        var2 = var2.bind(var5)();
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.findShadowNodeByTag_DEPRECATED;
                        var3 = var2.bind(var4)(var3);
                        if (!var3) {
                            _fun1311_ip = 157;
                            continue _fun1311
                        }
                    case 140:
                        var2 = var4.measure;
                        var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                            var5 = _closure2_slot0;
                            var0 = undefined;
                            var9 = arg0;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = arg3;
                            var10 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var1 = var2.bind(var4)(var3, var1);
                    case 157:
                        return var0;
                }
            };
            var2.measureLayoutRelativeToParent = var6;
            var0 = function arg0, arg1, arg2() {
                _fun1313: for (var _fun1313_ip = 0;;) switch (_fun1313_ip) {
                    case 0:
                        var2 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        var1 = 'number';
                        var0 = typeof var2;
                        if (!(var1 === var0)) {
                            _fun1313_ip = 161;
                            continue _fun1313
                        }
                    case 23:
                        var3 = _closure1_slot4;
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        if (var3) {
                            _fun1313_ip = 59;
                            continue _fun1313
                        }
                    case 40:
                        var4 = _closure1_slot3;
                        var3 = var4.dispatchViewManagerCommand;
                        var3 = var3.bind(var4)(var2, var6, var5);
                        _fun1313_ip = 159;
                        continue _fun1313;
                    case 59:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 2;
                        var3 = var7[var3];
                        var3 = var4.bind(var0)(var3);
                        var4 = _closure1_slot0;
                        var1 = 3;
                        var1 = var7[var1];
                        var4 = var4.bind(var0)(var1);
                        var1 = var4.getFabricUIManager;
                        var1 = var1.bind(var4)();
                        var4 = var3.bind(var0)(var1);
                        var1 = var4.findShadowNodeByTag_DEPRECATED;
                        var3 = var1.bind(var4)(var2);
                        if (!var3) {
                            _fun1313_ip = 159;
                            continue _fun1313
                        }
                    case 124:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '';
                        var2 = var2.bind(var1)(var6);
                        var1 = var4.dispatchCommand;
                        var1 = var1.bind(var4)(var3, var2, var5);
                    case 159:
                        return var0;
                    case 161:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var10 = 'dispatchViewManagerCommand: found null reactTag';
                        var11 = var1;
                        var0 = new var11[var2](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.dispatchViewManagerCommand = var0;
            var0 = {};
            var0 = var3.bind(var4)(var0, var5, var2);
            var1.default = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [47, 52, 48, 49]);