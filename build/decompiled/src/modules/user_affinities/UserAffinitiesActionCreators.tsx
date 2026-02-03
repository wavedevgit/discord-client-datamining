// modules/user_affinities/UserAffinitiesActionCreators.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Endpoints;
    var _closure1_slot5 = var6;
    var3 = var3.Consents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_affinities/UserAffinitiesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun67470: for (var _fun67470_ip = 0;;) switch (_fun67470_ip) {
            case 0:
                var9 = arguments[0];
                var8 = undefined;
                if (!(var9 === var8)) {
                    _fun67470_ip = 13;
                    continue _fun67470
                }
            case 11:
                var9 = true;
            case 13:
                var2 = _closure1_slot4;
                var0 = var2.shouldFetch;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun67470_ip = 61;
                    continue _fun67470
                }
            case 33:
                var3 = _closure1_slot3;
                var2 = var3.hasConsented;
                var0 = _closure1_slot6;
                var0 = var0.PERSONALIZATION;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun67470_ip = 84;
                    continue _fun67470
                }
            case 61:
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.resolve;
                var0 = var0.bind(var2)();
                _fun67470_ip = 268;
                continue _fun67470;
            case 84:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var7 = 3;
                var2 = var4[var7];
                var5 = var3.bind(var8)(var2);
                var3 = var5.dispatch;
                var2 = {};
                var10 = 'LOAD_USER_AFFINITIES_V2';
                var2.type = var10;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var8)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {};
                var5 = _closure1_slot5;
                var5 = var5.USER_AFFINITIES_V2;
                var2.url = var5;
                var5 = 0;
                if (!var9) {
                    _fun67470_ip = 176;
                    continue _fun67470
                }
            case 173:
                var5 = var7;
            case 176:
                var2.retries = var5;
                var5 = true;
                var2.oldFormErrors = var5;
                var5 = false;
                var2.rejectWithError = var5;
                var5 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 5;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.UserAffinityFlags;
                var6 = var6.RECENTLY_RETURNED;
                var5.user_flags = var6;
                var2.query = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    _fun67471: for (var _fun67471_ip = 0;;) switch (_fun67471_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.body;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'LOAD_USER_AFFINITIES_V2_SUCCESS';
                            var1.type = var5;
                            var7 = var4.user_affinities;
                            var6 = var7.map;
                            var5 = function(arg0) { // Environment: var5
                                _fun67472: for (var _fun67472_ip = 0;;) switch (_fun67472_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = {};
                                        var1 = var2.other_user_id;
                                        var0.otherUserId = var1;
                                        var1 = var2.user_segment;
                                        var0.userSegment = var1;
                                        var1 = var2.other_user_segment;
                                        var0.otherUserSegment = var1;
                                        var1 = var2.is_friend;
                                        var0.isFriend = var1;
                                        var5 = var2.dm_probability;
                                        var3 = null;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 77;
                                            continue _fun67472
                                        }
                                    case 74:
                                        var4 = var5;
                                    case 77:
                                        var0.dmProbability = var4;
                                        var5 = var2.dm_rank;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 102;
                                            continue _fun67472
                                        }
                                    case 99:
                                        var4 = var5;
                                    case 102:
                                        var0.dmRank = var4;
                                        var5 = var2.vc_probability;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 129;
                                            continue _fun67472
                                        }
                                    case 126:
                                        var4 = var5;
                                    case 129:
                                        var0.vcProbability = var4;
                                        var5 = var2.vc_rank;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 154;
                                            continue _fun67472
                                        }
                                    case 151:
                                        var4 = var5;
                                    case 154:
                                        var0.vcRank = var4;
                                        var5 = var2.server_message_probability;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 181;
                                            continue _fun67472
                                        }
                                    case 178:
                                        var4 = var5;
                                    case 181:
                                        var0.serverMessageProbability = var4;
                                        var5 = var2.server_message_rank;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 208;
                                            continue _fun67472
                                        }
                                    case 205:
                                        var4 = var5;
                                    case 208:
                                        var0.serverMessageRank = var4;
                                        var5 = var2.communication_probability;
                                        var6 = var3 != var5;
                                        var4 = 0;
                                        if (!var6) {
                                            _fun67472_ip = 233;
                                            continue _fun67472
                                        }
                                    case 230:
                                        var4 = var5;
                                    case 233:
                                        var0.communicationProbability = var4;
                                        var2 = var2.communication_rank;
                                        var3 = var3 != var2;
                                        var1 = 0;
                                        if (!var3) {
                                            _fun67472_ip = 256;
                                            continue _fun67472
                                        }
                                    case 253:
                                        var1 = var2;
                                    case 256:
                                        var0.communicationRank = var1;
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var7)(var5);
                            var1.affineUsers = var5;
                            var4 = var4.user_flags;
                            var5 = null;
                            if (!(var5 == var4)) {
                                _fun67471_ip = 96;
                                continue _fun67471
                            }
                        case 94:
                            var4 = {};
                        case 96:
                            var1.userFlags = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_USER_AFFINITIES_V2_FAILURE';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1);
            case 268:
                return var0;
        }
    };
    var2.fetchUserAffinitiesV2 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4555, 6968, 660, 806, 507, 8344, 2]);