// modules/activities/handlePressJoinActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: handlePressJoinActivity, environment: var1
        _fun63930: for (var _fun63930_ip = 0;;) switch (_fun63930_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.embeddedActivityJoinability;
                var1 = var0.handleCanJoin;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 8;
                var3 = var0[var6];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.CAN_JOIN;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 961;
                    continue _fun63930
                }
            case 59:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 929;
                    continue _fun63930
                }
            case 95:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 784;
                    continue _fun63930
                }
            case 131:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.ACTIVITY_NOT_SUPPORTED_ON_OS;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 636;
                    continue _fun63930
                }
            case 167:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.ACTIVITY_AGE_GATED;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 488;
                    continue _fun63930
                }
            case 203:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.NO_CHANNEL_CONNECT_PERMISSION;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 338;
                    continue _fun63930
                }
            case 236:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.CHANNEL_FULL;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 338;
                    continue _fun63930
                }
            case 269:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.NO_CHANNEL;
                if (!(var3 !== var4)) {
                    _fun63930_ip = 338;
                    continue _fun63930
                }
            case 302:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.EmbeddedActivityJoinability;
                var3 = var3.NO_USER;
                if (!(var3 === var4)) {
                    _fun63930_ip = 971;
                    continue _fun63930
                }
            case 338:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.show;
                var3 = {};
                var9 = _closure1_slot0;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PtobXW;
                var7 = var8.bind(var11)(var7);
                var3.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.FUCQco;
                var6 = var7.bind(var8)(var6);
                var3.body = var6;
                var6 = false;
                var3.hideActionSheet = var6;
                var3 = var4.bind(var5)(var3);
                _fun63930_ip = 971;
                continue _fun63930;
            case 488:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.show;
                var3 = {};
                var9 = _closure1_slot0;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PtobXW;
                var7 = var8.bind(var11)(var7);
                var3.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6["4WuFRE"];
                var6 = var7.bind(var8)(var6);
                var3.body = var6;
                var6 = false;
                var3.hideActionSheet = var6;
                var3 = var4.bind(var5)(var3);
                _fun63930_ip = 971;
                continue _fun63930;
            case 636:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.show;
                var3 = {};
                var9 = _closure1_slot0;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PtobXW;
                var7 = var8.bind(var11)(var7);
                var3.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.uGDCcw;
                var6 = var7.bind(var8)(var6);
                var3.body = var6;
                var6 = false;
                var3.hideActionSheet = var6;
                var3 = var4.bind(var5)(var3);
                _fun63930_ip = 971;
                continue _fun63930;
            case 784:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.show;
                var3 = {};
                var9 = _closure1_slot0;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PtobXW;
                var7 = var8.bind(var11)(var7);
                var3.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.UXoQTp;
                var6 = var7.bind(var8)(var6);
                var3.body = var6;
                var6 = false;
                var3.hideActionSheet = var6;
                var3 = var4.bind(var5)(var3);
                _fun63930_ip = 971;
                continue _fun63930;
            case 929:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.showActivitiesInvalidPermissionsAlert;
                var2 = var2.bind(var3)();
                _fun63930_ip = 971;
                continue _fun63930;
            case 961:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun63930_ip = 971;
                    continue _fun63930
                }
            case 967:
                var1 = var1.bind(var0)();
            case 971:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = function() { // Original name: _maybeJoinEmbeddedActivity, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun63933: for (var _fun63933_ip = 0;;) switch (_fun63933_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63933_ip = 410;
                            continue _fun63933
                        }
                    case 15:
                        var11 = var1.channelId;
                        var _closure4_slot0 = var11;
                        var7 = var1.applicationId;
                        var _closure4_slot1 = var7;
                        var3 = var1.launchId;
                        var _closure4_slot2 = var3;
                        var12 = var1.inputApplication;
                        var3 = var1.analyticsLocations;
                        var _closure4_slot3 = var3;
                        var3 = var1.launchingComponentId;
                        var _closure4_slot4 = var3;
                        var3 = var1.sectionName;
                        var _closure4_slot5 = var3;
                        var1 = var1.inviterUserId;
                        var _closure4_slot6 = var1;
                        var3 = undefined;
                        var _closure4_slot7 = var3;
                        var1 = function() { // Original name: _handleCanJoin, environment: var6
                            var3 = undefined;
                            var0 = undefined;
                            var2 = _closure1_slot3;
                            var1 = function*() { // Environment: var1
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun63936: for (var _fun63936_ip = 0;;) switch (_fun63936_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun63936_ip = 138;
                                                continue _fun63936
                                            }
                                        case 10:
                                            var2 = _closure4_slot7;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun63936_ip = 130;
                                                continue _fun63936
                                            }
                                        case 23:
                                            var2 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var1 = 14;
                                            var1 = var3[var1];
                                            var3 = undefined;
                                            var2 = var2.bind(var3)(var1);
                                            var1 = {};
                                            var5 = _closure4_slot7;
                                            var5 = var5.applicationId;
                                            var1.applicationId = var5;
                                            var5 = _closure4_slot0;
                                            var1.activityChannelId = var5;
                                            var5 = {};
                                            var1.locationObject = var5;
                                            var5 = _closure4_slot3;
                                            var1.analyticsLocations = var5;
                                            var5 = _closure4_slot4;
                                            var1.componentId = var5;
                                            var5 = _closure4_slot5;
                                            var1.sectionName = var5;
                                            var4 = _closure4_slot6;
                                            var1.inviterUserId = var4;
                                            var1 = var2.bind(var3)(var1);
                                            SaveGenerator(address = 124);
                                        case 122:
                                            return var1;
                                        case 124:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun63936_ip = 135;
                                                continue _fun63936
                                            }
                                        case 130:
                                            var2 = undefined;
                                            return var2;
                                        case 135:
                                            return var1;
                                        case 138:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            _closure4_slot8 = var3;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var _closure4_slot8 = var1;
                        SaveGenerator(address = 108);
                    case 106:
                        return var3;
                    case 108:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63933_ip = 407;
                            continue _fun63933
                        }
                    case 117:
                        var4 = _closure1_slot10;
                        var2 = var4.getEmbeddedActivitiesForChannel;
                        var5 = var2.bind(var4)(var11);
                        var4 = var5.find;
                        var2 = function(arg0) { // Environment: var6
                            _fun63937: for (var _fun63937_ip = 0;;) switch (_fun63937_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = var3.applicationId;
                                    var0 = _closure4_slot1;
                                    var0 = var1 === var0;
                                    if (!var0) {
                                        _fun63937_ip = 52;
                                        continue _fun63937
                                    }
                                case 22:
                                    var4 = _closure4_slot2;
                                    var1 = null;
                                    var1 = var1 == var4;
                                    if (var1) {
                                        _fun63937_ip = 49;
                                        continue _fun63937
                                    }
                                case 35:
                                    var3 = var3.launchId;
                                    var2 = _closure4_slot2;
                                    var1 = var3 === var2;
                                case 49:
                                    var0 = var1;
                                case 52:
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var5)(var2);
                        _closure4_slot7 = var4;
                        var13 = null;
                        if (!(var13 == var12)) {
                            _fun63933_ip = 219;
                            continue _fun63933
                        }
                    case 160:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 12;
                        var2 = var8[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.fetchApplication;
                        var2 = var2.bind(var5)(var7);
                        SaveGenerator(address = 195);
                    case 193:
                        return var2;
                    case 195:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun63933_ip = 404;
                            continue _fun63933
                        }
                    case 204:
                        var7 = _closure1_slot4;
                        var5 = var7.createFromServer;
                        var12 = var5.bind(var7)(var2);
                    case 219:
                        if (!(var13 != var4)) {
                            _fun63933_ip = 401;
                            continue _fun63933
                        }
                    case 226:
                        if (!(var13 != var12)) {
                            _fun63933_ip = 401;
                            continue _fun63933
                        }
                    case 233:
                        var5 = _closure1_slot8;
                        var4 = var5.getCurrentUser;
                        var10 = var4.bind(var5)();
                        var5 = _closure1_slot11;
                        var4 = {};
                        var8 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var7 = 8;
                        var7 = var14[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = {};
                        var14 = var13 == var10;
                        var13 = undefined;
                        if (var14) {
                            _fun63933_ip = 288;
                            continue _fun63933
                        }
                    case 283:
                        var13 = var10.id;
                    case 288:
                        var7.userId = var13;
                        var7.application = var12;
                        var7.channelId = var11;
                        var7.currentUser = var10;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 13;
                        var10 = var12[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.getIsActivitiesEnabledForCurrentPlatform;
                        var10 = var10.bind(var11)();
                        var7.isActivitiesEnabledForCurrentPlatform = var10;
                        var10 = _closure1_slot5;
                        var7.ChannelStore = var10;
                        var10 = _closure1_slot9;
                        var7.VoiceStateStore = var10;
                        var10 = _closure1_slot7;
                        var7.PermissionStore = var10;
                        var9 = _closure1_slot6;
                        var7.GuildStore = var9;
                        var7 = var8.bind(var3)(var7);
                        var4.embeddedActivityJoinability = var7;
                        var6 = function() { // Original name: handleCanJoin, environment: var6
                            var0 = undefined;
                            var3 = _closure4_slot8;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4.handleCanJoin = var6;
                        var4 = var5.bind(var3)(var4);
                    case 401:
                        return var3;
                    case 404:
                        return var2;
                    case 407:
                        return var1;
                    case 410:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/handlePressJoinActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() { // Original name: maybeJoinEmbeddedActivity, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybeJoinEmbeddedActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3414, 1372, 1410, 3050, 1613, 3480, 1371, 7924, 7925, 3962, 1234, 5305, 7873, 7926, 2]);