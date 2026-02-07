// actions/InviteSuggestionsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/InviteSuggestionsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.omitUserIds;
        var _closure2_slot0 = var2;
        var2 = var1.guild;
        var _closure2_slot1 = var2;
        var2 = var1.channel;
        var _closure2_slot2 = var2;
        var2 = var1.applicationId;
        var _closure2_slot3 = var2;
        var1 = var1.inviteTargetType;
        var _closure2_slot4 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.fetchUserAffinitiesV2;
        var2 = var1.bind(var2)();
        var1 = var2.then;
        var0 = function() { // Environment: var0
            _fun68053: for (var _fun68053_ip = 0;;) switch (_fun68053_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_INVITE_SUGGESTIONS';
                    var1.type = var4;
                    var6 = _closure2_slot0;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun68053_ip = 85;
                        continue _fun68053
                    }
                case 55:
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var6;
                    var5 = new var8[var5](var7);
                    var5 = var5 instanceof Object ? var5 : var6;
                    _fun68053_ip = 89;
                    continue _fun68053;
                case 85:
                    var5 = _closure2_slot0;
                case 89:
                    var1.omitUserIds = var5;
                    var5 = _closure2_slot1;
                    var1.guild = var5;
                    var5 = _closure2_slot2;
                    var1.channel = var5;
                    var5 = _closure2_slot3;
                    var1.applicationId = var5;
                    var4 = _closure2_slot4;
                    var1.inviteTargetType = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.loadInviteSuggestions = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'INVITE_SUGGESTIONS_SEARCH';
        var1.type = var4;
        var4 = arg0;
        var1.query = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.searchInviteSuggestions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8418, 8420, 806, 2]);