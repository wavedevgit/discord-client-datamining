// modules/messages/native/MessageAccessibilityActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'view_profile';
    var3.VIEW_PROFILE = var4;
    var4 = 'add_reaction';
    var3.ADD_REACTION = var4;
    var4 = 'reply';
    var3.REPLY = var4;
    var _closure1_slot5 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessageAccessibilityActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MessageAccessibilityAction = var3;
    var3 = function arg0() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 3;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.iXAna6;
        var4 = var4.bind(var8)(var3);
        var0 = _closure1_slot5;
        var3 = var0.VIEW_PROFILE;
        var1[var4] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.lfIHs4;
        var4 = var4.bind(var8)(var3);
        var3 = var0.ADD_REACTION;
        var1[var4] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2["5IEsGx"];
        var2 = var3.bind(var4)(var2);
        var0 = var0.REPLY;
        var1[var2] = var0;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.getMessageAccessibilityActionFromLabel = var3;
    var1 = function arg0, arg1() {
        _fun89153: for (var _fun89153_ip = 0;;) switch (_fun89153_ip) {
            case 0:
                var5 = arg1;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun89153_ip = 387;
                    continue _fun89153
                }
            case 12:
                var1 = var5.getGuildId;
                var3 = var1.bind(var5)();
                var1 = var0 != var3;
                if (!var1) {
                    _fun89153_ip = 47;
                    continue _fun89153
                }
            case 29:
                var2 = _closure1_slot2;
                var0 = var2.canChatInGuild;
                var1 = var0.bind(var2)(var3);
            case 47:
                if (!var1) {
                    _fun89153_ip = 79;
                    continue _fun89153
                }
            case 50:
                var3 = _closure1_slot3;
                var2 = var3.can;
                var0 = _closure1_slot4;
                var0 = var0.ADD_REACTIONS;
                var1 = var2.bind(var3)(var0, var5);
            case 79:
                if (var1) {
                    _fun89153_ip = 92;
                    continue _fun89153
                }
            case 82:
                var0 = var5.isPrivate;
                var1 = var0.bind(var5)();
            case 92:
                var2 = {};
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 3;
                var4 = var0[var9];
                var8 = undefined;
                var4 = var7.bind(var8)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var0 = var0[var9];
                var0 = var7.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0.iXAna6;
                var0 = var4.bind(var6)(var0);
                var2.label = var0;
                var0 = _closure1_slot5;
                var0 = var0.VIEW_PROFILE;
                var2.name = var0;
                var0 = new Array(1);
                var0[0] = var2;
                if (!var1) {
                    _fun89153_ip = 265;
                    continue _fun89153
                }
            case 183:
                var2 = var0.push;
                var1 = {};
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = var4[var9];
                var6 = var10.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var9];
                var4 = var10.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.lfIHs4;
                var4 = var6.bind(var7)(var4);
                var1.label = var4;
                var4 = _closure1_slot5;
                var4 = var4.ADD_REACTION;
                var1.name = var4;
                var1 = var2.bind(var0)(var1);
            case 265:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var4 = var2.bind(var8)(var1);
                var2 = var4.canReplyToMessage;
                var1 = arg0;
                var1 = var2.bind(var4)(var5, var1);
                if (!var1) {
                    _fun89153_ip = 385;
                    continue _fun89153
                }
            case 303:
                var2 = var0.push;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4["5IEsGx"];
                var4 = var5.bind(var6)(var4);
                var1.label = var4;
                var3 = _closure1_slot5;
                var3 = var3.REPLY;
                var1.name = var3;
                var1 = var2.bind(var0)(var1);
            case 385:
                return var0;
            case 387:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.createMessageAccessibilityActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4234, 3091, 660, 1234, 9877, 2]);