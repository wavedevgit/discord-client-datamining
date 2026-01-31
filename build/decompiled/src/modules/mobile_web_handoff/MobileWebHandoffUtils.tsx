// modules/mobile_web_handoff/MobileWebHandoffUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50566: for (var _fun50566_ip = 0;;) switch (_fun50566_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50566_ip = 165;
                            continue _fun50566
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {
                            'url': null,
                            'body': null,
                            'oldFormErrors': true,
                            'retries': 1,
                            'rejectWithError': false
                        };
                        var4 = _closure1_slot3;
                        var4 = var4.HANDOFF;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.key = var5;
                        var1.body = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 100);
                    case 98:
                        return var1;
                    case 100:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50566_ip = 162;
                            continue _fun50566
                        }
                    case 106:
                        var2 = var1.body;
                        var2 = var2.handoff_token;
                        var3 = null;
                        if (!(var3 == var2)) {
                            _fun50566_ip = 159;
                            continue _fun50566
                        }
                    case 123:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'Missing handoff token!';
                        var7 = var4;
                        var3 = new var7[var5](var6, var5);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 159:
                        return var2;
                    case 162:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.v4;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.generateNonce = var6;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.createHandoffToken = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mobile_web_handoff/MobileWebHandoffUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 491, 507, 2]);