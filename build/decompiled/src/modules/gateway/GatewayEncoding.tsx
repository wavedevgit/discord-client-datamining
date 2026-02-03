// modules/gateway/GatewayEncoding.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94527: for (var _fun94527_ip = 0;;) switch (_fun94527_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
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
            var _closure1_slot0 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot1 = var3;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.getErlpackEncoding;
            var6 = var3.bind(var6)();
            var1 = function() { // Environment: var1
                var3 = _closure1_slot1;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = this;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'pack';
                var0.key = var1;
                var1 = function arg0() {
                    var0 = global;
                    var2 = var0.JSON;
                    var1 = var2.stringify;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(4);
                var1[0] = var0;
                var0 = {};
                var5 = 'unpack';
                var0.key = var5;
                var5 = function arg0() {
                    _fun94531: for (var _fun94531_ip = 0;;) switch (_fun94531_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = typeof var4;
                            var0 = 'string';
                            if (!(var0 === var1)) {
                                _fun94531_ip = 35;
                                continue _fun94531
                            }
                        case 14:
                            var0 = global;
                            var2 = var0.JSON;
                            var0 = var2.parse;
                            var0 = var0.bind(var2)(var4);
                            return var0;
                        case 35:
                            var0 = global;
                            var2 = var0.Error;
                            var3 = null;
                            var4 = var3 == var4;
                            if (var4) {
                                _fun94531_ip = 55;
                                continue _fun94531
                            }
                        case 52:
                            var3 = var1;
                        case 55:
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'Expected a string to be passed to JSONEncoding.unpack, got ';
                            var5 = var1.bind(var0)(var3);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'getName';
                var0.key = var5;
                var5 = function() {
                    var0 = 'json';
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'wantsString';
                var0.key = var5;
                var4 = function() {
                    var0 = true;
                    return var0;
                };
                var0.value = var4;
                var1[3] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var1.bind(var0)();
            var1 = var3;
            if (!(var0 !== var6)) {
                _fun94527_ip = 122;
                continue _fun94527
            }
        case 119:
            var1 = var6;
        case 122:
            var6 = 3;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var7 = var6.ProcessArgs;
            var6 = var7.isDiscordGatewayPlaintextSet;
            var6 = var6.bind(var7)();
            if (!var6) {
                _fun94527_ip = 156;
                continue _fun94527
            }
        case 153:
            var1 = var3;
        case 156:
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/gateway/GatewayEncoding.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12387, 4008, 2]);