// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59564: for (var _fun59564_ip = 0;;) switch (_fun59564_ip) {
                    case 0:
                        StartGenerator();
                        var15 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59564_ip = 228;
                            continue _fun59564
                        }
                    case 15:
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var _closure4_slot0 = var1;
                        var2 = 0;
                        var3 = var15[var2];
                        _closure4_slot1 = var3;
                        var2 = var15.length;
                        var13 = 1;
                        var2 = var13 < var2;
                        var12 = 'optionalCall';
                        var11 = 'call';
                        var10 = 'access';
                        var9 = null;
                        var8 = 2;
                        var7 = 'optionalAccess';
                        var6 = var3;
                        var5 = var13;
                        var3 = var6;
                        if (!var2) {
                            _fun59564_ip = 219;
                            continue _fun59564
                        }
                    case 87:
                        var16 = var15[var5];
                        var2 = var5 + var13;
                        var2 = var15[var2];
                        var5 = var5 + var8;
                        var4 = var7 === var16;
                        if (var4) {
                            _fun59564_ip = 114;
                            continue _fun59564
                        }
                    case 110:
                        if (!(var12 === var16)) {
                            _fun59564_ip = 118;
                            continue _fun59564
                        }
                    case 114:
                        if (!(var9 != var6)) {
                            _fun59564_ip = 225;
                            continue _fun59564
                        }
                    case 118:
                        if (!(var10 !== var16)) {
                            _fun59564_ip = 178;
                            continue _fun59564
                        }
                    case 122:
                        if (var4) {
                            _fun59564_ip = 178;
                            continue _fun59564
                        }
                    case 125:
                        var4 = var11 !== var16;
                        if (!var4) {
                            _fun59564_ip = 136;
                            continue _fun59564
                        }
                    case 132:
                        var4 = var12 !== var16;
                    case 136:
                        var16 = var6;
                        if (var4) {
                            _fun59564_ip = 204;
                            continue _fun59564
                        }
                    case 142:
                        var4 = function() { // Environment: var14
                            _fun59565: for (var _fun59565_ip = 0;;) switch (_fun59565_ip) {
                                case 0:
                                    var2 = undefined;
                                    var1 = arguments.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var3 = var0.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var8 = var3;
                                    var7 = var1;
                                    var0 = new var8[var0](var7, var6);
                                    var5 = var0 instanceof Object ? var0 : var3;
                                    var0 = 0;
                                    var3 = var0 < var1;
                                    if (!var3) {
                                        _fun59565_ip = 60;
                                        continue _fun59565
                                    }
                                case 45:
                                    var3 = arguments[var0];
                                    var5[var0] = var3;
                                    var0 = var0 + 1;
                                    if (var0 < var1) {
                                        _fun59565_ip = 45;
                                        continue _fun59565
                                    }
                                case 60:
                                    var3 = _closure4_slot1;
                                    var2 = var3.call;
                                    var1 = var2.apply;
                                    var0 = _closure4_slot0;
                                    var4 = new Array(1);
                                    var4[0] = var0;
                                    var0 = var4.concat;
                                    var0 = var0.bind(var4)(var5);
                                    var0 = var1.bind(var2)(var3, var0);
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var1)(var4);
                        SaveGenerator(address = 156);
                    case 154:
                        return var4;
                    case 156:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 17);
                        if (var17) {
                            _fun59564_ip = 175;
                            continue _fun59564
                        }
                    case 162:
                        _closure4_slot1 = var4;
                        _closure4_slot0 = var1;
                        var16 = var4;
                        _fun59564_ip = 204;
                        continue _fun59564;
                    case 175:
                        return var4;
                    case 178:
                        _closure4_slot0 = var6;
                        var2 = var2.bind(var1)(var6);
                        SaveGenerator(address = 191);
                    case 189:
                        return var2;
                    case 191:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59564_ip = 222;
                            continue _fun59564
                        }
                    case 197:
                        _closure4_slot1 = var2;
                        var16 = var2;
                    case 204:
                        var4 = var15.length;
                        var6 = var16;
                        var3 = var6;
                        if (var5 < var4) {
                            _fun59564_ip = 87;
                            continue _fun59564
                        }
                    case 219:
                        return var3;
                    case 222:
                        return var2;
                    case 225:
                        return var1;
                    case 228:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot1 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot1 = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot1;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2._asyncOptionalChain = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5]);