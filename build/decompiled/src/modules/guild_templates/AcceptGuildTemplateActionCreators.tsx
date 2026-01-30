// modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot5 = var1;
    var1 = {};
    var3 = function(arg0, arg1, arg2) { // Original name: acceptGuildTemplate, environment: var3
        var4 = arg0;
        var _closure2_slot0 = var4;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'GUILD_TEMPLATE_ACCEPT';
        var1.type = var5;
        var1.code = var4;
        var1 = var2.bind(var3)(var1);
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var8 = _closure1_slot5;
            var7 = var8.UNRESOLVED_GUILD_TEMPLATE;
            var5 = _closure2_slot0;
            var5 = var7.bind(var8)(var5);
            var2.url = var5;
            var5 = {};
            var7 = _closure2_slot1;
            var5.name = var7;
            var6 = _closure2_slot2;
            var5.icon = var6;
            var2.body = var5;
            var5 = true;
            var2.oldFormErrors = var5;
            var5 = false;
            var2.rejectWithError = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg0) { // Environment: var1
                _fun78598: for (var _fun78598_ip = 0;;) switch (_fun78598_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.body;
                        var _closure4_slot0 = var4;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 3;
                        var3 = var3[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'GUILD_TEMPLATE_ACCEPT_SUCCESS';
                        var3.type = var7;
                        var7 = _closure2_slot0;
                        var3.code = var7;
                        var3.guild = var4;
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure1_slot3;
                        var3 = var5.isConnected;
                        var3 = var3.bind(var5)();
                        if (var3) {
                            _fun78598_ip = 143;
                            continue _fun78598
                        }
                    case 93:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var6 = var5.bind(var0)(var3);
                        var5 = var6.transitionToGuild;
                        var3 = var4.id;
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.bind(var0)(var4);
                        _fun78598_ip = 165;
                        continue _fun78598;
                    case 143:
                        var3 = _closure1_slot4;
                        var2 = var3.addConditionalChangeListener;
                        var1 = function() { // Environment: var1
                            _fun78599: for (var _fun78599_ip = 0;;) switch (_fun78599_ip) {
                                case 0:
                                    var4 = _closure1_slot4;
                                    var3 = var4.getGuild;
                                    var2 = _closure4_slot0;
                                    var2 = var2.id;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = null;
                                    if (!(var2 == var3)) {
                                        _fun78599_ip = 39;
                                        continue _fun78599
                                    }
                                case 35:
                                    var2 = undefined;
                                    return var2;
                                case 39:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 5;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.transitionToGuild;
                                    var1 = _closure4_slot0;
                                    var0 = var1.id;
                                    var0 = var3.bind(var4)(var0);
                                    var0 = _closure3_slot0;
                                    var0 = var0.bind(var2)(var1);
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 165:
                        return var0;
                }
            };
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'GUILD_TEMPLATE_ACCEPT_FAILURE';
                var1.type = var4;
                var4 = _closure2_slot0;
                var1.code = var4;
                var1 = var2.bind(var3)(var1);
                var2 = _closure3_slot1;
                var1 = arg0;
                var1 = var1.body;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.acceptGuildTemplate = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/AcceptGuildTemplateActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3433, 1410, 660, 806, 507, 5576, 2]);