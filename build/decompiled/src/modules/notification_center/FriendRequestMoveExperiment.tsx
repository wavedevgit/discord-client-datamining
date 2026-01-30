// modules/notification_center/FriendRequestMoveExperiment.tsx
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
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-11_mobile_friend_request_move',
        'label': 'Moves friend requests from notification center to messages'
    };
    var8 = {
        'showInDMs': false,
        'removeBadgeAfterAck': false,
        'removeItemAfterAck': false
    };
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'shows friend requests in dms with perma badge'
    };
    var8 = {
        'showInDMs': true,
        'removeBadgeAfterAck': false,
        'removeItemAfterAck': false
    };
    var9.config = var8;
    var8 = new Array(3);
    var8[0] = var9;
    var9 = {
        'id': 2,
        'label': 'shows friend requests in dms and dismissible badge'
    };
    var10 = {
        'showInDMs': true,
        'removeBadgeAfterAck': true,
        'removeItemAfterAck': false
    };
    var9.config = var10;
    var8[1] = var9;
    var9 = {
        'id': 3,
        'label': 'shows friend requests in dms and removes item after ack'
    };
    var10 = {
        'showInDMs': true,
        'removeBadgeAfterAck': true,
        'removeItemAfterAck': true
    };
    var9.config = var10;
    var8[2] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/FriendRequestMoveExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Original name: useNumFriendRequestsForBadging, environment: var1
        _fun101579: for (var _fun101579_ip = 0;;) switch (_fun101579_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.useExperiment;
                var1 = {};
                var4 = arg0;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var2 = var1.showInDMs;
                var1 = var1.removeBadgeAfterAck;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.useStateFromStores;
                var6 = _closure1_slot2;
                var1 = new Array(2);
                var1[0] = var6;
                var5 = _closure1_slot3;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot2;
                    var2 = var0.localItems;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun101581: for (var _fun101581_ip = 0;;) switch (_fun101581_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = var4.type;
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var7 = 4;
                                var0 = var0[var7];
                                var6 = undefined;
                                var0 = var3.bind(var6)(var0);
                                var0 = var0.NotificationCenterLocalItems;
                                var0 = var0.INCOMING_FRIEND_REQUESTS;
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun101581_ip = 90;
                                    continue _fun101581
                                }
                            case 52:
                                var3 = var4.type;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var7];
                                var1 = var5.bind(var6)(var1);
                                var1 = var1.NotificationCenterLocalItems;
                                var1 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                                var0 = var3 !== var1;
                            case 90:
                                if (var0) {
                                    _fun101581_ip = 121;
                                    continue _fun101581
                                }
                            case 93:
                                var1 = _closure2_slot0;
                                if (!var1) {
                                    _fun101581_ip = 118;
                                    continue _fun101581
                                }
                            case 103:
                                var3 = _closure1_slot3;
                                var2 = var3.isLocalItemAcked;
                                var1 = var2.bind(var3)(var4);
                            case 118:
                                var0 = var1;
                            case 121:
                                var0 = !var0;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var0);
                var0 = 0;
                if (!var2) {
                    _fun101579_ip = 113;
                    continue _fun101579
                }
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var2.useNumFriendRequestsForBadging = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3930, 13177, 3074, 566, 3931, 2]);