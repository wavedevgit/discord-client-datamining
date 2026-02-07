// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun11069: for (var _fun11069_ip = 0;;) switch (_fun11069_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.query;
                var1 = var0.operationName;
                var0 = _closure1_slot4;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                var5 = var0.operationName;
                if (!(var2 === var5)) {
                    _fun11069_ip = 42;
                    continue _fun11069
                }
            case 39:
                var5 = var1;
            case 42:
                var4 = var0.operationType;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                if (var5) {
                    _fun11069_ip = 75;
                    continue _fun11069
                }
            case 68:
                var0 = var3.bind(var2)(var4);
                _fun11069_ip = 88;
                continue _fun11069;
            case 75:
                var1 = ' ';
                var0 = var3.bind(var2)(var4, var1, var5);
            case 88:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var4 = function arg0() {
        _fun11070: for (var _fun11070_ip = 0;;) switch (_fun11070_ip) {
            case 0:
                var1 = arg0;
                var0 = 'xhr';
                var0 = var0 in var1;
                if (var0) {
                    _fun11070_ip = 84;
                    continue _fun11070
                }
            case 17:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 1;
                var4 = var6[var0];
                var2 = undefined;
                var8 = var5.bind(var2)(var4);
                var7 = var8.getFetchRequestArgBody;
                var4 = var1.input;
                var4 = var7.bind(var8)(var4);
                var0 = var6[var0];
                var2 = var5.bind(var2)(var0);
                var0 = var2.getBodyString;
                var2 = var0.bind(var2)(var4);
                var0 = 0;
                var0 = var2[var0];
                _fun11070_ip = 170;
                continue _fun11070;
            case 84:
                var2 = var1.xhr;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 1;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.SENTRY_XHR_DATA_KEY;
                var2 = var2[var1];
                var1 = var2;
                if (!var1) {
                    _fun11070_ip = 167;
                    continue _fun11070
                }
            case 128:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getBodyString;
                var2 = var2.body;
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var1 = var3[var2];
            case 167:
                var0 = var1;
            case 170:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var1 = function arg0() {
        _fun11071: for (var _fun11071_ip = 0;;) switch (_fun11071_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.match;
                var0 = /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/;
                var2 = var1.bind(var4)(var0);
                var0 = {};
                if (var2) {
                    _fun11071_ip = 100;
                    continue _fun11071
                }
            case 33:
                var3 = var4.match;
                var1 = /^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/;
                var5 = var3.bind(var4)(var1);
                var3 = undefined;
                if (var5) {
                    _fun11071_ip = 78;
                    continue _fun11071
                }
            case 63:
                var0.operationType = var3;
                var0.operationName = var3;
                var1 = var0;
                _fun11071_ip = 98;
                continue _fun11071;
            case 78:
                var4 = 1;
                var4 = var5[var4];
                var0.operationType = var4;
                var0.operationName = var3;
                var1 = var0;
            case 98:
                return var1;
            case 100:
                var1 = 1;
                var1 = var2[var1];
                var0.operationType = var1;
                var1 = 2;
                var1 = var2[var1];
                var0.operationName = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var5 = function arg0() {
        _fun11072: for (var _fun11072_ip = 0;;) switch (_fun11072_ip) {
            case 0:
                var2 = arg0;
                var1 = undefined;
                var0 = undefined;
            case 7: // try_start_0
                var3 = global;
                var4 = var3.JSON;
                var3 = var4.parse;
                var2 = var3.bind(var4)(var2);
                var1 = var2;
                var2 = var2.query;
                var2 = !var2;
                if (var2) {
                    _fun11072_ip = 44;
                    continue _fun11072
                }
            case 41:
                var0 = var1;
            case 44: // try_end0
                var1 = var0;
                return var1;
            case 49: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var0 = var0.Symbol;
    var8 = var0.toStringTag;
    var0 = {};
    var11 = 'Module';
    var0.value = var11;
    var0 = var9.bind(var10)(var2, var8, var0);
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var7 = var7.bind(var0)(var6);
    var6 = var7.defineIntegration;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'GraphQLClient';
        var0.name = var2;
        var1 = function arg0() {
            var3 = arg0;
            var2 = _closure2_slot0;
            var4 = function arg0, arg1() {
                var3 = arg0;
                var1 = arg1;
                var _closure4_slot0 = var1;
                var2 = var3.on;
                var1 = 'beforeOutgoingRequestSpan';
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun11076: for (var _fun11076_ip = 0;;) switch (_fun11076_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 0;
                            var2 = var0[var6];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.spanToJSON;
                            var2 = var2.bind(var3)(var4);
                            var2 = var2.data;
                            if (var2) {
                                _fun11076_ip = 48;
                                continue _fun11076
                            }
                        case 46:
                            var2 = {};
                        case 48:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var5 = var2[var3];
                            var3 = 'http.client';
                            if (!(var3 === var5)) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 88:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SEMANTIC_ATTRIBUTE_URL_FULL;
                            var11 = var2[var3];
                            if (var11) {
                                _fun11076_ip = 124;
                                continue _fun11076
                            }
                        case 118:
                            var11 = var2["http.url"];
                        case 124:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD;
                            var10 = var2[var3];
                            if (var10) {
                                _fun11076_ip = 160;
                                continue _fun11076
                            }
                        case 154:
                            var10 = var2["http.method"];
                        case 160:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isString;
                            var2 = var2.bind(var3)(var11);
                            if (!var2) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 194:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isString;
                            var2 = var2.bind(var3)(var10);
                            if (!var2) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 228:
                            var2 = _closure4_slot0;
                            var5 = var2.endpoints;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.stringMatchesSomePattern;
                            var2 = var2.bind(var3)(var11, var5);
                            var5 = _closure1_slot3;
                            var3 = arg1;
                            var3 = var5.bind(var0)(var3);
                            if (!var2) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 285:
                            if (!var3) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 288:
                            var2 = _closure1_slot5;
                            var2 = var2.bind(var0)(var3);
                            if (!var2) {
                                _fun11076_ip = 379;
                                continue _fun11076
                            }
                        case 300:
                            var1 = _closure1_slot2;
                            var13 = var1.bind(var0)(var2);
                            var2 = var4.updateName;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var8 = var1.concat;
                            var18 = '';
                            var16 = ' ';
                            var14 = ' (';
                            var12 = ')';
                            var17 = var10;
                            var15 = var11;
                            var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                            var1 = var2.bind(var4)(var1);
                            var2 = var4.setAttribute;
                            var1 = 'graphql.document';
                            var1 = var2.bind(var4)(var1, var3);
                        case 379:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var0 = undefined;
            var4 = var4.bind(var0)(var3, var2);
            var1 = function arg0, arg1() {
                var3 = arg0;
                var1 = arg1;
                var _closure4_slot0 = var1;
                var2 = var3.on;
                var1 = 'beforeOutgoingRequestBreadcrumb';
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun11078: for (var _fun11078_ip = 0;;) switch (_fun11078_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.category;
                            var3 = var0.type;
                            var1 = var0.data;
                            var0 = 'http';
                            if (!(var0 === var3)) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 30:
                            var0 = 'fetch';
                            if (!(var0 !== var2)) {
                                _fun11078_ip = 49;
                                continue _fun11078
                            }
                        case 38:
                            var0 = 'xhr';
                            if (!(var0 === var2)) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 49:
                            var0 = null;
                            var0 = var0 == var1;
                            var3 = undefined;
                            var6 = undefined;
                            if (var0) {
                                _fun11078_ip = 67;
                                continue _fun11078
                            }
                        case 62:
                            var6 = var1.url;
                        case 67:
                            var0 = _closure4_slot0;
                            var5 = var0.endpoints;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 0;
                            var2 = var7[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.stringMatchesSomePattern;
                            var2 = var2.bind(var4)(var6, var5);
                            var5 = _closure1_slot3;
                            var4 = arg1;
                            var4 = var5.bind(var3)(var4);
                            if (!var2) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 129:
                            if (!var1) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 132:
                            if (!var4) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 135:
                            var2 = _closure1_slot5;
                            var2 = var2.bind(var3)(var4);
                            var4 = var1.graphql;
                            if (var4) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 153:
                            if (!var2) {
                                _fun11078_ip = 183;
                                continue _fun11078
                            }
                        case 156:
                            var0 = _closure1_slot2;
                            var0 = var0.bind(var3)(var2);
                            var2 = var2.query;
                            var1['graphql.document'] = var2;
                            var1['graphql.operation'] = var0;
                        case 183:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var1 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0.setup = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var2.getGraphQLRequestPayload = var5;
    var2.getRequestPayloadXhrOrFetch = var4;
    var2.graphqlClientIntegration = var3;
    var2.parseGraphQLQuery = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1030]);