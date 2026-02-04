// utils/ApplicationAssetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun50289: for (var _fun50289_ip = 0;;) switch (_fun50289_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50289_ip = 46;
                    continue _fun50289
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50289_ip = 55;
                    continue _fun50289
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50289_ip = 343;
                    continue _fun50289
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50289_ip = 323;
                    continue _fun50289
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50289_ip = 283;
                    continue _fun50289
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50289_ip = 270;
                    continue _fun50289
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun50289_ip = 163;
                    continue _fun50289
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50289_ip = 179;
                    continue _fun50289
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50289_ip = 249;
                    continue _fun50289
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50289_ip = 249;
                    continue _fun50289
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50289_ip = 234;
                    continue _fun50289
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50289_ip = 247;
                    continue _fun50289
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50289_ip = 265;
                continue _fun50289;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50289_ip = 283;
                continue _fun50289;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50289_ip = 323;
                    continue _fun50289
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun50289_ip = 330;
                    continue _fun50289
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50290: for (var _fun50290_ip = 0;;) switch (_fun50290_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50290_ip = 56;
                                continue _fun50290
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun50290_ip = 67;
                            continue _fun50290;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun50291: for (var _fun50291_ip = 0;;) switch (_fun50291_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50291_ip = 23;
                    continue _fun50291
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50291_ip = 33;
                    continue _fun50291
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun50291_ip = 70;
                    continue _fun50291
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50291_ip = 55;
                    continue _fun50291
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50295: for (var _fun50295_ip = 0;;) switch (_fun50295_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50295_ip = 171;
                            continue _fun50295
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 5;
                        var1 = var5[var1];
                        var6 = undefined;
                        var1 = var3.bind(var6)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot6;
                        var7 = var8.APPLICATION_ASSETS;
                        var7 = var7.bind(var8)(var4);
                        var1.url = var7;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun50295_ip = 168;
                            continue _fun50295
                        }
                    case 94:
                        var7 = var1.body;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var6 = var5.bind(var6)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var8 = 'APPLICATION_ASSETS_UPDATE';
                        var3.type = var8;
                        var3.applicationId = var4;
                        var3.assets = var7;
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure1_slot5;
                        var2 = var3.getApplicationAssets;
                        var2 = var2.bind(var3)(var4);
                        return var2;
                    case 168:
                        return var1;
                    case 171:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun50296: for (var _fun50296_ip = 0;;) switch (_fun50296_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot5;
                var0 = var2.getApplicationAssets;
                var4 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun50296_ip = 83;
                    continue _fun50296
                }
            case 27:
                var5 = var4.lastUpdated;
                var0 = global;
                var6 = var0.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var5 = var2 - var5;
                var2 = 3600000;
                if (!(!(var5 > var2))) {
                    _fun50296_ip = 83;
                    continue _fun50296
                }
            case 64:
                var2 = var0.Promise;
                var0 = var2.resolve;
                var0 = var0.bind(var2)(var4);
                _fun50296_ip = 94;
                continue _fun50296;
            case 83:
                var2 = _closure1_slot14;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 94:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var5 = function arg0, arg1() {
        _fun50297: for (var _fun50297_ip = 0;;) switch (_fun50297_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot10;
                var2 = var0[var5];
                var1 = var2.serialize;
                var0 = arg1;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                if (!var2) {
                    _fun50297_ip = 70;
                    continue _fun50297
                }
            case 33:
                var1 = var2.toString;
                var4 = var1.bind(var2)();
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ':';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50301: for (var _fun50301_ip = 0;;) switch (_fun50301_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50301_ip = 57;
                            continue _fun50301
                        }
                    case 7:
                        var3 = _closure1_slot16;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var2)(var1);
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun50301_ip = 54;
                            continue _fun50301
                        }
                    case 34:
                        var3 = null;
                        var3 = var3 == var1;
                        var2 = undefined;
                        if (var3) {
                            _fun50301_ip = 51;
                            continue _fun50301
                        }
                    case 45:
                        var2 = var1.assets;
                    case 51:
                        return var2;
                    case 54:
                        return var1;
                    case 57:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun50304: for (var _fun50304_ip = 0;;) switch (_fun50304_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50304_ip = 218;
                            continue _fun50304
                        }
                    case 13:
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var1
                            _fun50305: for (var _fun50305_ip = 0;;) switch (_fun50305_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = null;
                                    var0 = var2 != var3;
                                    if (!var0) {
                                        _fun50305_ip = 52;
                                        continue _fun50305
                                    }
                                case 12:
                                    var1 = global;
                                    var1 = var1.Object;
                                    var1 = var1.prototype;
                                    var5 = var1.hasOwnProperty;
                                    var4 = var5.call;
                                    var1 = _closure1_slot11;
                                    var1 = var4.bind(var5)(var1, var3);
                                    var0 = !var1;
                                case 52:
                                    if (!var0) {
                                        _fun50305_ip = 70;
                                        continue _fun50305
                                    }
                                case 55:
                                    var1 = _closure1_slot11;
                                    var1 = var1[var3];
                                    var0 = var2 == var1;
                                case 70:
                                    return var0;
                            }
                        };
                        var8 = var2.bind(var3)(var1);
                        var2 = var8.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun50304_ip = 210;
                            continue _fun50304
                        }
                    case 44:
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var10 = _closure1_slot6;
                        var9 = var10.APPLICATION_EXTERNAL_ASSETS;
                        var7 = arg0;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var7 = {};
                        var7.urls = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50304_ip = 215;
                            continue _fun50304
                        }
                    case 147:
                        var2 = var1.body;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if (var2) {
                            _fun50304_ip = 210;
                            continue _fun50304
                        }
                    case 169:
                        var2 = var3.value;
                        var8 = var2.url;
                        var7 = var2.external_asset_path;
                        var2 = _closure1_slot11;
                        var2[var8] = var7;
                        var7 = var4.bind(var5)();
                        var2 = var7.done;
                        var3 = var7;
                        if (!var2) {
                            _fun50304_ip = 169;
                            continue _fun50304
                        }
                    case 210:
                        var2 = undefined;
                        return var2;
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun50306: for (var _fun50306_ip = 0;;) switch (_fun50306_ip) {
            case 0:
                var0 = arg0;
                var11 = arg1;
                var2 = var0.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun50307: for (var _fun50307_ip = 0;;) switch (_fun50307_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = null;
                            var3 = var2 == var4;
                            var0 = undefined;
                            if (var3) {
                                _fun50307_ip = 29;
                                continue _fun50307
                            }
                        case 14:
                            var5 = var4.startsWith;
                            var3 = 'http:';
                            var0 = var5.bind(var4)(var3);
                        case 29:
                            if (var0) {
                                _fun50307_ip = 59;
                                continue _fun50307
                            }
                        case 32:
                            var2 = var2 == var4;
                            var1 = undefined;
                            if (var2) {
                                _fun50307_ip = 56;
                                continue _fun50307
                            }
                        case 41:
                            var3 = var4.startsWith;
                            var2 = 'https:';
                            var1 = var3.bind(var4)(var2);
                        case 56:
                            var0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                var1 = var1.length;
                var12 = 0;
                var2 = var1 > var12;
                var1 = 0;
                if (!var2) {
                    _fun50306_ip = 181;
                    continue _fun50306
                }
            case 42:
                var2 = var0.length;
                var2 = var12 < var2;
                var10 = undefined;
                var8 = 'mp';
                var7 = null;
                var6 = global;
                var5 = 0;
                var4 = 0;
                var3 = undefined;
                var1 = 0;
                if (!var2) {
                    _fun50306_ip = 181;
                    continue _fun50306
                }
            case 77:
                var14 = var0[var4];
                var12 = var5;
                if (!(var7 != var14)) {
                    _fun50306_ip = 163;
                    continue _fun50306
                }
            case 88:
                var2 = var6.Object;
                var2 = var2.prototype;
                var15 = var2.hasOwnProperty;
                var13 = var15.call;
                var2 = _closure1_slot11;
                var13 = var13.bind(var15)(var2, var14);
                var2 = undefined;
                if (!var13) {
                    _fun50306_ip = 133;
                    continue _fun50306
                }
            case 125:
                var13 = _closure1_slot11;
                var2 = var13[var14];
            case 133:
                var12 = var5;
                var3 = var2;
                if (!(var7 != var3)) {
                    _fun50306_ip = 163;
                    continue _fun50306
                }
            case 143:
                var13 = _closure1_slot17;
                var13 = var13.bind(var10)(var8, var2);
                var11[var4] = var13;
                var12 = var5 + 1;
                var3 = var2;
            case 163:
                var4 = var4 + 1;
                var2 = var0.length;
                var5 = var12;
                var1 = var5;
                if (var4 < var2) {
                    _fun50306_ip = 77;
                    continue _fun50306
                }
            case 181:
                var0 = var0.length;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun50308: for (var _fun50308_ip = 0;;) switch (_fun50308_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var10 = arg2;
                var9 = arg3;
                var0 = var12.length;
                var8 = 0;
                var1 = var8 < var0;
                var3 = false;
                var6 = null;
                var4 = global;
                var2 = 0;
                var7 = undefined;
                var0 = false;
                if (!var1) {
                    _fun50308_ip = 171;
                    continue _fun50308
                }
            case 41:
                var15 = var12[var2];
                var13 = var3;
                var14 = var7;
                if (!(var6 != var15)) {
                    _fun50308_ip = 150;
                    continue _fun50308
                }
            case 55:
                var1 = var11[var2];
                var13 = var3;
                var14 = var7;
                if (!(var6 == var1)) {
                    _fun50308_ip = 150;
                    continue _fun50308
                }
            case 69:
                var1 = var4.Object;
                var1 = var1.prototype;
                var16 = var1.hasOwnProperty;
                var1 = var16.call;
                var1 = var1.bind(var16)(var10, var15);
                if (!var1) {
                    _fun50308_ip = 104;
                    continue _fun50308
                }
            case 100:
                var1 = var10[var15];
            case 104:
                var15 = var3;
                if (var1) {
                    _fun50308_ip = 135;
                    continue _fun50308
                }
            case 110:
                if (!(var6 != var9)) {
                    _fun50308_ip = 123;
                    continue _fun50308
                }
            case 114:
                var16 = var9 <= var8;
                var15 = true;
                if (!var16) {
                    _fun50308_ip = 135;
                    continue _fun50308
                }
            case 123:
                var11[var2] = var6;
                var13 = var3;
                var14 = var1;
                _fun50308_ip = 150;
                continue _fun50308;
            case 135:
                var16 = var1.id;
                var11[var2] = var16;
                var13 = var15;
                var14 = var1;
            case 150:
                var2 = var2 + 1;
                var1 = var12.length;
                var3 = var13;
                var7 = var14;
                var0 = var3;
                if (var2 < var1) {
                    _fun50308_ip = 41;
                    continue _fun50308
                }
            case 171:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun50312: for (var _fun50312_ip = 0;;) switch (_fun50312_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var12 = arg1;
                        var11 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50312_ip = 399;
                            continue _fun50312
                        }
                    case 21:
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var12;
                        var6 = undefined;
                        if (!(var11 === var6)) {
                            _fun50312_ip = 38;
                            continue _fun50312
                        }
                    case 35:
                        var11 = 1;
                    case 38:
                        var _closure4_slot2 = var11;
                        SaveGenerator(address = 46);
                    case 44:
                        return var6;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50312_ip = 396;
                            continue _fun50312
                        }
                    case 55:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 6;
                        var2 = var2[var8];
                        var5 = var3.bind(var6)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var9 = 'APPLICATION_ASSETS_FETCH';
                        var2.type = var9;
                        var2.applicationId = var7;
                        var2 = var3.bind(var5)(var2);
                        var3 = new Array(0);
                        var5 = var12.filter;
                        var2 = function(arg0) { // Environment: var10
                            _fun50313: for (var _fun50313_ip = 0;;) switch (_fun50313_ip) {
                                case 0:
                                    var4 = arg0;
                                    var2 = null;
                                    var3 = var2 == var4;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun50313_ip = 29;
                                        continue _fun50313
                                    }
                                case 14:
                                    var5 = var4.startsWith;
                                    var3 = 'http:';
                                    var0 = var5.bind(var4)(var3);
                                case 29:
                                    if (var0) {
                                        _fun50313_ip = 59;
                                        continue _fun50313
                                    }
                                case 32:
                                    var2 = var2 == var4;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun50313_ip = 56;
                                        continue _fun50313
                                    }
                                case 41:
                                    var3 = var4.startsWith;
                                    var2 = 'https:';
                                    var1 = var3.bind(var4)(var2);
                                case 56:
                                    var0 = var1;
                                case 59:
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var12)(var2);
                        var9 = var5.length;
                        var2 = 0;
                        if (!(var9 > var2)) {
                            _fun50312_ip = 158;
                            continue _fun50312
                        }
                    case 134:
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot20;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var6)(var7, var5);
                        SaveGenerator(address = 149);
                    case 147:
                        return var2;
                    case 149:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun50312_ip = 393;
                            continue _fun50312
                        }
                    case 158:
                        var5 = _closure1_slot21;
                        var5 = var5.bind(var6)(var12, var3);
                        if (var5) {
                            _fun50312_ip = 347;
                            continue _fun50312
                        }
                    case 174:
                        var5 = _closure1_slot18;
                        var5 = var5.bind(var6)(var7);
                        SaveGenerator(address = 187);
                    case 185:
                        return var5;
                    case 187:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                        if (var9) {
                            _fun50312_ip = 344;
                            continue _fun50312
                        }
                    case 196:
                        var13 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var8];
                        var14 = var13.bind(var6)(var9);
                        var13 = var14.dispatch;
                        var9 = {};
                        var15 = 'APPLICATION_ASSETS_UPDATE';
                        var9.type = var15;
                        var9.applicationId = var7;
                        var9.assets = var5;
                        var9 = var13.bind(var14)(var9);
                        var9 = _closure1_slot22;
                        var20 = undefined;
                        var19 = var12;
                        var18 = var3;
                        var17 = var5;
                        var16 = var11;
                        var9 = var20[var9](var19, var18, var17, var16, var15);
                        if (var9) {
                            _fun50312_ip = 317;
                            continue _fun50312
                        }
                    case 269:
                        var11 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var8];
                        var12 = var11.bind(var6)(var9);
                        var11 = var12.dispatch;
                        var9 = {};
                        var13 = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                        var9.type = var13;
                        var9.applicationId = var7;
                        var9 = var11.bind(var12)(var9);
                        var9 = var3;
                        _fun50312_ip = 341;
                        continue _fun50312;
                    case 317:
                        var11 = _closure1_slot14;
                        var12 = var11.bind(var6)(var7);
                        var11 = var12.then;
                        var10 = function() { // Environment: var10
                            var4 = _closure1_slot23;
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var1 = _closure4_slot2;
                            var0 = 1;
                            var1 = var1 - var0;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                        };
                        var9 = var11.bind(var12)(var10);
                    case 341:
                        return var9;
                    case 344:
                        return var5;
                    case 347:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                        var4.type = var8;
                        var4.applicationId = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 393:
                        return var2;
                    case 396:
                        return var1;
                    case 399:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.Endpoints;
    var _closure1_slot6 = var9;
    var9 = var6.PlatformTypes;
    var _closure1_slot7 = var9;
    var6 = /https:\\/\\ / static - cdn\.jtvnw\.net\\ / previews - ttv\\ / live_user_(. + ) - \{
        width\
    }
    x\ {
        height\
    }.jpg / ;
    var _closure1_slot8 = var6;
    var6 = /https:\\/\\ / i\.ytimg\.com\\ / vi\\ / ([a - zA - Z0 - 9_ - ] + )\\ / hqdefault_live\.jpg / ;
    var _closure1_slot9 = var6;
    var6 = {};
    var11 = var9.SPOTIFY;
    var10 = {};
    var12 = function arg0() {
        var0 = global;
        var3 = var0.encodeURIComponent;
        var2 = undefined;
        var1 = arg0;
        var3 = var3.bind(var2)(var1);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = 'https://i.scdn.co/image/';
        var0 = var2.bind(var1)(var0, var3);
        return var0;
    };
    var10.deserialize = var12;
    var12 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = 'https://i.scdn.co/image/';
        var1 = var1.bind(var2)(var0);
        var0 = 1;
        var0 = var1[var0];
        return var0;
    };
    var10.serialize = var12;
    var6[var11] = var10;
    var11 = var9.TWITCH;
    var10 = {};
    var12 = function arg0, arg1() {
        var2 = arg1;
        var0 = global;
        var4 = var0.encodeURIComponent;
        var3 = undefined;
        var1 = arg0;
        var13 = var4.bind(var3)(var1);
        var1 = 0;
        var11 = var2[var1];
        var1 = 1;
        var9 = var2[var1];
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var14 = 'https://static-cdn.jtvnw.net/previews-ttv/live_user_';
        var12 = '-';
        var10 = 'x';
        var8 = '.jpg';
        var0 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var10.deserialize = var12;
    var12 = function arg0() {
        _fun50319: for (var _fun50319_ip = 0;;) switch (_fun50319_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot8;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun50319_ip = 37;
                    continue _fun50319
                }
            case 30:
                var1 = 1;
                var0 = var2[var1];
            case 37:
                return var0;
        }
    };
    var10.serialize = var12;
    var6[var11] = var10;
    var10 = var9.YOUTUBE;
    var9 = {};
    var11 = function arg0() {
        var0 = global;
        var3 = var0.encodeURIComponent;
        var2 = undefined;
        var1 = arg0;
        var3 = var3.bind(var2)(var1);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://i.ytimg.com/vi/';
        var0 = '/hqdefault_live.jpg';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var9.deserialize = var11;
    var11 = function arg0() {
        _fun50321: for (var _fun50321_ip = 0;;) switch (_fun50321_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot9;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun50321_ip = 37;
                    continue _fun50321
                }
            case 30:
                var1 = 1;
                var0 = var2[var1];
            case 37:
                return var0;
        }
    };
    var9.serialize = var11;
    var6[var10] = var9;
    var10 = {};
    var9 = function arg0() {
        _fun50322: for (var _fun50322_ip = 0;;) switch (_fun50322_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var5 = undefined;
                var3 = var1.bind(var5)(var0);
                var0 = global;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var2 = var1.MEDIA_PROXY_ENDPOINT;
                var1 = null;
                var2 = var1 != var2;
                var1 = 'MEDIA_PROXY_ENDPOINT not configured';
                var1 = var3.bind(var5)(var2, var1);
                var2 = var0.URL;
                var1 = var0.location;
                var1 = var1.protocol;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var0 = var0.MEDIA_PROXY_ENDPOINT;
                var8 = var1 + var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var9 = var4;
                var0 = new var10[var2](var9, var8, var7);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var4.toLowerCase;
                var3 = var0.bind(var4)();
                var2 = var3.endsWith;
                var0 = '.gif';
                var0 = var2.bind(var3)(var0);
                var2 = var4.toLowerCase;
                var5 = var2.bind(var4)();
                var3 = var5.endsWith;
                var2 = '.webp';
                var3 = var3.bind(var5)(var2);
                var2 = var4.toLowerCase;
                var5 = var2.bind(var4)();
                var4 = var5.endsWith;
                var2 = '.avif';
                var2 = var4.bind(var5)(var2);
                var4 = var0;
                if (var0) {
                    _fun50322_ip = 219;
                    continue _fun50322
                }
            case 216:
                var4 = var2;
            case 219:
                if (!var4) {
                    _fun50322_ip = 249;
                    continue _fun50322
                }
            case 222:
                var7 = var1.searchParams;
                var6 = var7.set;
                var5 = 'format';
                var4 = 'webp';
                var4 = var6.bind(var7)(var5, var4);
            case 249:
                if (var0) {
                    _fun50322_ip = 255;
                    continue _fun50322
                }
            case 252:
                var0 = var3;
            case 255:
                if (var0) {
                    _fun50322_ip = 261;
                    continue _fun50322
                }
            case 258:
                var0 = var2;
            case 261:
                if (!var0) {
                    _fun50322_ip = 289;
                    continue _fun50322
                }
            case 264:
                var4 = var1.searchParams;
                var3 = var4.set;
                var2 = 'animated';
                var0 = 'true';
                var0 = var3.bind(var4)(var2, var0);
            case 289:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var10.deserialize = var9;
    var9 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var10.serialize = var9;
    var9 = 'mp';
    var6[var9] = var10;
    var _closure1_slot10 = var6;
    var6 = {};
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/ApplicationAssetUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getAssetFromImageURL = var5;
    var5 = function arg0, arg1, arg2() {
        _fun50324: for (var _fun50324_ip = 0;;) switch (_fun50324_ip) {
            case 0:
                var16 = arg0;
                var3 = arg1;
                var6 = arg2;
                var15 = arguments[3];
                var4 = undefined;
                if (!(var15 === var4)) {
                    _fun50324_ip = 22;
                    continue _fun50324
                }
            case 18:
                var15 = 'png';
            case 22:
                var1 = null;
                if (!(var1 != var3)) {
                    _fun50324_ip = 48;
                    continue _fun50324
                }
            case 28:
                var0 = var3.includes;
                var2 = ':';
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun50324_ip = 381;
                    continue _fun50324
                }
            case 48:
                if (!(var1 != var16)) {
                    _fun50324_ip = 56;
                    continue _fun50324
                }
            case 52:
                if (!(var1 == var3)) {
                    _fun50324_ip = 58;
                    continue _fun50324
                }
            case 56:
                return var4;
            case 58:
                var5 = global;
                var7 = var5.Array;
                var0 = var7.isArray;
                var0 = var0.bind(var7)(var6);
                var8 = var6;
                if (!var0) {
                    _fun50324_ip = 122;
                    continue _fun50324
                }
            case 82:
                var9 = var5.Math;
                var7 = var9.max;
                var0 = new Array(0);
                var24 = 0;
                var26 = var0;
                var25 = var6;
                var10 = arraySpread(var26, var25, var24);
                var26 = var7;
                var25 = var0;
                var24 = var9;
                var8 = apply(var26, var25, var24);
            case 122:
                var14 = '';
                var7 = 'number';
                var0 = typeof var8;
                var13 = var14;
                if (!(var7 === var0)) {
                    _fun50324_ip = 196;
                    continue _fun50324
                }
            case 140:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var0 = var9[var0];
                var7 = var7.bind(var4)(var0);
                var0 = var7.getBestMediaProxySize;
                var8 = var0.bind(var7)(var8);
                var0 = var5.HermesInternal;
                var7 = var0.concat;
                var0 = '?size=';
                var13 = var7.bind(var0)(var8);
            case 196:
                var0 = var5.window;
                var0 = var0.GLOBAL_ENV;
                var0 = var0.CDN_HOST;
                if (!(var1 == var0)) {
                    _fun50324_ip = 299;
                    continue _fun50324
                }
            case 218:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var7 = var7.bind(var4)(var0);
                var0 = var7.getAPIBaseURL;
                var26 = var0.bind(var7)();
                var0 = var5.HermesInternal;
                var9 = var0.concat;
                var25 = '/applications/';
                var23 = '/app-assets/';
                var21 = '.';
                var27 = var14;
                var24 = var16;
                var22 = var3;
                var20 = var15;
                var19 = var13;
                var0 = var27[var9](var26, var25, var24, var23, var22, var21, var20, var19, var18);
                _fun50324_ip = 379;
                continue _fun50324;
            case 299:
                var7 = var5.location;
                var26 = var7.protocol;
                var7 = var5.window;
                var7 = var7.GLOBAL_ENV;
                var24 = var7.CDN_HOST;
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var25 = '//';
                var23 = '/app-assets/';
                var21 = '/';
                var19 = '.';
                var27 = var14;
                var22 = var16;
                var20 = var3;
                var18 = var15;
                var17 = var13;
                var0 = var27[var10](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
            case 379:
                return var0;
            case 381:
                var0 = var3.split;
                var5 = var0.bind(var3)(var2);
                var3 = _closure1_slot3;
                var0 = 2;
                var3 = var3.bind(var4)(var5, var0);
                var0 = 0;
                var7 = var3[var0];
                var0 = 1;
                var5 = var3[var0];
                var0 = _closure1_slot7;
                var0 = var0.TWITCH;
                if (!(var7 !== var0)) {
                    _fun50324_ip = 494;
                    continue _fun50324
                }
            case 434:
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var8 = var0.hasOwnProperty;
                var3 = var8.call;
                var0 = _closure1_slot10;
                var3 = var3.bind(var8)(var0, var7);
                var0 = undefined;
                if (!var3) {
                    _fun50324_ip = 492;
                    continue _fun50324
                }
            case 473:
                var3 = _closure1_slot10;
                var7 = var3[var7];
                var3 = var7.deserialize;
                var0 = var3.bind(var7)(var5);
            case 492:
                _fun50324_ip = 608;
                continue _fun50324;
            case 494:
                if (!(var1 != var6)) {
                    _fun50324_ip = 541;
                    continue _fun50324
                }
            case 498:
                var3 = 'number';
                var1 = typeof var6;
                if (!(var3 !== var1)) {
                    _fun50324_ip = 541;
                    continue _fun50324
                }
            case 509:
                var3 = _closure1_slot10;
                var1 = _closure1_slot7;
                var1 = var1.TWITCH;
                var3 = var3[var1];
                var1 = var3.deserialize;
                var1 = var1.bind(var3)(var5, var6);
                _fun50324_ip = 605;
                continue _fun50324;
            case 541:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var26 = 'ApplicationAssetUtils';
                var27 = var3;
                var2 = new var27[var4](var26, var25);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = var4.warn;
                var2 = 'getAssetImage: size must === [number, number] for Twitch';
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
            case 605:
                var0 = var1;
            case 608:
                return var0;
        }
    };
    var2.getAssetImage = var5;
    var2.getAssets = var4;
    var2.fetchAssetIds = var3;
    var1 = function arg0, arg1() {
        _fun50325: for (var _fun50325_ip = 0;;) switch (_fun50325_ip) {
            case 0:
                var4 = arg1;
                var0 = new Array(0);
                var2 = _closure1_slot21;
                var3 = undefined;
                var2 = var2.bind(var3)(var4, var0);
                if (var2) {
                    _fun50325_ip = 77;
                    continue _fun50325
                }
            case 25:
                var6 = _closure1_slot5;
                var5 = var6.getApplicationAssets;
                var2 = arg0;
                var6 = var5.bind(var6)(var2);
                var5 = null;
                var7 = var5 == var6;
                var2 = undefined;
                if (var7) {
                    _fun50325_ip = 60;
                    continue _fun50325
                }
            case 54:
                var2 = var6.assets;
            case 60:
                if (!(var5 != var2)) {
                    _fun50325_ip = 75;
                    continue _fun50325
                }
            case 64:
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)(var4, var0, var2);
            case 75:
                return var0;
            case 77:
                return var0;
        }
    };
    var2.getAssetIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 5655, 660, 44, 507, 806, 3, 1443, 2]);