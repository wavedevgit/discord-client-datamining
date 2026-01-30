// modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _sendWave, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun102014: for (var _fun102014_ip = 0;;) switch (_fun102014_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102014_ip = 483;
                            continue _fun102014
                        }
                    case 13:
                        var9 = arg0;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun102014_ip = 24;
                            continue _fun102014
                        }
                    case 22:
                        var1 = true;
                    case 24:
                        var5 = var1;
                        var12 = arguments[2];
                        var4 = undefined;
                        SaveGenerator(address = 36);
                    case 34:
                        return var8;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102014_ip = 480;
                            continue _fun102014
                        }
                    case 45:
                        var7 = _closure1_slot4;
                        var6 = var7.getDMFromUserId;
                        var3 = var9;
                        var3 = var6.bind(var7)(var3);
                        var4 = var3;
                        var7 = null;
                        if (!(var7 != var3)) {
                            _fun102014_ip = 77;
                            continue _fun102014
                        }
                    case 75:
                        _fun102014_ip = 127;
                        continue _fun102014;
                    case 77: // try_start_0
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 5;
                        var3 = var10[var3];
                        var10 = var6.bind(var8)(var3);
                        var6 = var10.getDMChannel;
                        var3 = var9;
                        var3 = var6.bind(var10)(var3);
                        SaveGenerator(address = 115);
                    case 113:
                        return var3;
                    case 115:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun102014_ip = 392;
                            continue _fun102014
                        }
                    case 124:
                        var4 = var3;
                    case 127: // try_start_1 // try_end0
                        var6 = var4;
                        if (!(var7 != var6)) {
                            _fun102014_ip = 304;
                            continue _fun102014
                        }
                    case 137:
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 8;
                        var6 = var10[var6];
                        var13 = var7.bind(var8)(var6);
                        var11 = var13.sendStickers;
                        var17 = var4;
                        var7 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.SEND_WAVE;
                        var7.location = var4;
                        var16 = ['749054660769218631'];
                        var15 = '';
                        var18 = var13;
                        var14 = var7;
                        var4 = var18[var11](var17, var16, var15, var14, var13);
                        SaveGenerator(address = 210);
                    case 208:
                        return var4;
                    case 210:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun102014_ip = 306;
                            continue _fun102014
                        }
                    case 216:
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 9;
                        var6 = var10[var6];
                        var11 = var7.bind(var8)(var6);
                        var10 = var11.track;
                        var6 = _closure1_slot5;
                        var7 = var6.WAVE_CTA_CLICKED;
                        var6 = {};
                        var6.source = var12;
                        var6 = var10.bind(var11)(var7, var6);
                        if (!var5) {
                            _fun102014_ip = 304;
                            continue _fun102014
                        }
                    case 266:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 5;
                        var5 = var7[var5];
                        var7 = var6.bind(var8)(var5);
                        var6 = var7.openPrivateChannel;
                        var5 = {};
                        var5.recipientIds = var9;
                        var5 = var6.bind(var7)(var5);
                    case 304: // try_end1
                        _fun102014_ip = 389;
                        continue _fun102014;
                    case 306:
                        return var4;
                    case 309: // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 6;
                        var4 = var11[var4];
                        var6 = var10.bind(var8)(var4);
                        var5 = var6.presentError;
                        var4 = 7;
                        var7 = var11[var4];
                        var7 = var10.bind(var8)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var4 = var11[var4];
                        var4 = var10.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.iufib1;
                        var4 = var7.bind(var9)(var4);
                        var4 = var5.bind(var6)(var4);
                    case 389:
                        return var8;
                    case 392:
                        return var3;
                    case 395: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 6;
                        var2 = var9[var2];
                        var4 = var7.bind(var8)(var2);
                        var3 = var4.presentError;
                        var2 = 7;
                        var5 = var9[var2];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var2 = var2.t;
                        var2 = var2.iufib1;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
                    case 480:
                        return var1;
                    case 483:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: dismissIncomingRequest, environment: var1
        var0 = arg0;
        var6 = var0.userId;
        var5 = var0.applicationId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.cancelFriendRequest;
        var1 = {};
        var1.userId = var6;
        var1.applicationId = var5;
        var4 = _closure1_slot6;
        var4 = var4.FRIENDS_ADD_FRIENDS_MODAL;
        var1.location = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissIncomingRequest = var3;
    var3 = function(arg0) { // Original name: acceptIncomingRequest, environment: var1
        var0 = arg0;
        var6 = var0.userId;
        var5 = var0.applicationId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.maybeConfirmFriendRequestAccept;
        var1 = {};
        var1.userId = var6;
        var1.applicationId = var5;
        var4 = _closure1_slot6;
        var4 = var4.FRIENDS_ADD_FRIENDS_MODAL;
        var1.location = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.acceptIncomingRequest = var3;
    var3 = function() { // Original name: sendWave, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendWave = var3;
    var1 = function(arg0) { // Original name: addContactSuggestion, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.addRelationship;
        var1 = {};
        var4 = arg0;
        var4 = var4.id;
        var1.userId = var4;
        var4 = {};
        var5 = _closure1_slot6;
        var5 = var5.FRIENDS_ADD_FRIENDS_MODAL;
        var4.location = var5;
        var1.context = var4;
        var1.type = var0;
        var4 = true;
        var1.fromFriendSuggestion = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addContactSuggestion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 660, 1346, 8966, 3905, 3106, 1234, 6487, 795, 7982, 2]);