// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var4 = var3.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var3 = var3.WeakSet;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: wrapMcpServerWithSentry, environment: var1
        _fun9712: for (var _fun9712_ip = 0;;) switch (_fun9712_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.has;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun9712_ip = 144;
                    continue _fun9712
                }
            case 23:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.validateMcpServerInstance;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun9712_ip = 61;
                    continue _fun9712
                }
            case 59:
                return var0;
            case 61:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.fill;
                var6 = 'connect';
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = function() { // Environment: var0
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun9716: for (var _fun9716_ip = 0;;) switch (_fun9716_ip) {
                                    case 0:
                                        StartGenerator();
                                        var4 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun9716_ip = 253;
                                            continue _fun9716
                                        }
                                    case 13:
                                        var5 = undefined;
                                        var6 = undefined;
                                        var3 = arguments.length;
                                        var1 = global;
                                        var8 = var1.Array;
                                        var2 = 1;
                                        var7 = var3 > var2;
                                        var1 = 0;
                                        if (!var7) {
                                            _fun9716_ip = 44;
                                            continue _fun9716
                                        }
                                    case 40:
                                        var1 = var3 - var2;
                                    case 44:
                                        var7 = var8.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var12 = var7;
                                        var11 = var1;
                                        var1 = new var12[var8](var11, var10);
                                        var8 = var1 instanceof Object ? var1 : var7;
                                        var7 = var2 < var3;
                                        var1 = var2;
                                        if (!var7) {
                                            _fun9716_ip = 96;
                                            continue _fun9716
                                        }
                                    case 77:
                                        var9 = var1 - var2;
                                        var7 = arguments[var1];
                                        var8[var9] = var7;
                                        var1 = var1 + 1;
                                        if (var1 < var3) {
                                            _fun9716_ip = 77;
                                            continue _fun9716
                                        }
                                    case 96:
                                        var6 = _closure3_slot0;
                                        var3 = var6.call;
                                        var2 = var3.apply;
                                        var7 = new Array(2);
                                        var1 = this;
                                        var7[0] = var1;
                                        var7[1] = var4;
                                        var1 = var7.concat;
                                        var1 = var1.bind(var7)(var8);
                                        var1 = var2.bind(var3)(var6, var1);
                                        SaveGenerator(address = 147);
                                    case 145:
                                        return var1;
                                    case 147:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun9716_ip = 250;
                                            continue _fun9716
                                        }
                                    case 153:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var2 = 3;
                                        var7 = var6[var2];
                                        var8 = var3.bind(var5)(var7);
                                        var7 = var8.wrapTransportOnMessage;
                                        var7 = var7.bind(var8)(var4);
                                        var7 = var6[var2];
                                        var8 = var3.bind(var5)(var7);
                                        var7 = var8.wrapTransportSend;
                                        var7 = var7.bind(var8)(var4);
                                        var7 = var6[var2];
                                        var8 = var3.bind(var5)(var7);
                                        var7 = var8.wrapTransportOnClose;
                                        var7 = var7.bind(var8)(var4);
                                        var2 = var6[var2];
                                        var3 = var3.bind(var5)(var2);
                                        var2 = var3.wrapTransportError;
                                        var2 = var2.bind(var3)(var4);
                                        return var1;
                                    case 250:
                                        return var1;
                                    case 253:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var2 = var7.bind(var8)(var0, var6, var2);
                var2 = 4;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.wrapAllMCPHandlers;
                var2 = var2.bind(var3)(var0);
                var2 = _closure1_slot3;
                var1 = var2.add;
                var1 = var1.bind(var2)(var0);
                return var0;
            case 144:
                return var0;
        }
    };
    var2.wrapMcpServerWithSentry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 933, 822, 934, 945]);