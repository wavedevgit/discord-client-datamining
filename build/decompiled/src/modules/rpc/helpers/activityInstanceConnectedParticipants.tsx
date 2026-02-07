// modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var7;
    var4 = function() {
        _fun98509: for (var _fun98509_ip = 0;;) switch (_fun98509_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getCurrentEmbeddedActivity;
                var2 = var2.bind(var3)();
                var3 = null;
                if (!(var3 != var2)) {
                    _fun98509_ip = 168;
                    continue _fun98509
                }
            case 28:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 3;
                var3 = var6[var0];
                var4 = undefined;
                var8 = var5.bind(var4)(var3);
                var7 = var8.getEmbeddedActivityLocationGuildId;
                var3 = var2.location;
                var3 = var7.bind(var8)(var3);
                var _closure2_slot0 = var3;
                var0 = var6[var0];
                var7 = var5.bind(var4)(var0);
                var3 = var7.getEmbeddedActivityLocationChannelId;
                var0 = var2.location;
                var0 = var3.bind(var7)(var0);
                var _closure2_slot1 = var0;
                var0 = {};
                var3 = global;
                var7 = var3.Array;
                var3 = var7.from;
                var2 = var2.userIds;
                var1 = function(arg0) { // Environment: var1
                    _fun98510: for (var _fun98510_ip = 0;;) switch (_fun98510_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getUser;
                            var0 = arg0;
                            var5 = var1.bind(var2)(var0);
                            var3 = null;
                            if (!(var3 == var5)) {
                                _fun98510_ip = 31;
                                continue _fun98510
                            }
                        case 27:
                            var0 = undefined;
                            return var0;
                        case 31:
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 4;
                            var0 = var7[var0];
                            var2 = undefined;
                            var8 = var1.bind(var2)(var0);
                            var6 = var8.getNickname;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var1 = var6.bind(var8)(var1, var0, var5);
                            var0 = {};
                            var6 = _closure1_slot1;
                            var4 = 5;
                            var4 = var7[var4];
                            var4 = var6.bind(var2)(var4);
                            var10 = var4.bind(var2)(var5);
                            var11 = var0;
                            var4 = copyDataProperties(var11, var10);
                            var3 = var3 != var1;
                            if (!var3) {
                                _fun98510_ip = 117;
                                continue _fun98510
                            }
                        case 114:
                            var2 = var1;
                        case 117:
                            var1 = 'nickname';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var3 = var3.bind(var7)(var2, var1);
                var2 = var3.filter;
                var1 = 6;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                var0.participants = var1;
                return var0;
            case 168:
                var0 = {};
                var1 = new Array(0);
                var0.participants = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var9 = var1.RPC_AUTHENTICATED_SCOPE;
    var1 = var1.RPC_SCOPE_CONFIG;
    var3 = {};
    var8 = var1.ANY;
    var1 = new Array(1);
    var1[0] = var9;
    var3[var8] = var1;
    var1 = {};
    var1.scope = var3;
    var5 = function() {
        var0 = function(arg0) { // Environment: var0
            _fun98512: for (var _fun98512_ip = 0;;) switch (_fun98512_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.prevState;
                    var2 = var0.dispatch;
                    var0 = _closure1_slot5;
                    var1 = undefined;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isEqual;
                    var3 = var3.bind(var4)(var0, var5);
                    if (var3) {
                        _fun98512_ip = 67;
                        continue _fun98512
                    }
                case 62:
                    var1 = var2.bind(var1)(var0);
                case 67:
                    return var0;
            }
        };
        return var0;
    };
    var1.handler = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rpc/helpers/activityInstanceConnectedParticipants.tsx';
    var5 = var6.bind(var7)(var5);
    var2.activityInstanceConnectedParticipants = var4;
    var2.activityInstanceConnectedParticipantsScope = var3;
    var2.activityInstanceConnectedParticipantsUpdateEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 1621, 3357, 3083, 3960, 8004, 1304, 22, 2]);