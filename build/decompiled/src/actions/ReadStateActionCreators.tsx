// actions/ReadStateActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function arg0, arg1() {
        _fun41600: for (var _fun41600_ip = 0;;) switch (_fun41600_ip) {
            case 0:
                var6 = arguments[2];
                var5 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun41600_ip = 14;
                    continue _fun41600
                }
            case 12:
                var6 = false;
            case 14:
                if (!(var5 === var0)) {
                    _fun41600_ip = 20;
                    continue _fun41600
                }
            case 18:
                var5 = false;
            case 20:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'CHANNEL_ACK';
                var1.type = var7;
                var7 = arg0;
                var1.channelId = var7;
                var7 = arguments[4];
                var1.messageId = var7;
                var1.immediate = var6;
                var1.force = var5;
                var4 = _closure1_slot7;
                var1.context = var4;
                var4 = arg1;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function arg0, arg1() {
        _fun41601: for (var _fun41601_ip = 0;;) switch (_fun41601_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var6 = arguments[2];
                var5 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun41601_ip = 22;
                    continue _fun41601
                }
            case 20:
                var6 = false;
            case 22:
                if (!(var5 === var0)) {
                    _fun41601_ip = 28;
                    continue _fun41601
                }
            case 26:
                var5 = false;
            case 28:
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var8 = _closure1_slot4;
                var2 = var8.getChannel;
                var2 = var2.bind(var8)(var3);
                _closure2_slot0 = var2;
                var9 = null;
                if (!(var9 != var2)) {
                    _fun41601_ip = 224;
                    continue _fun41601
                }
            case 66:
                var8 = var2.guild_id;
                if (!(var9 != var8)) {
                    _fun41601_ip = 224;
                    continue _fun41601
                }
            case 78:
                var10 = _closure1_slot5;
                var8 = var10.getCategories;
                var2 = var2.guild_id;
                var2 = var8.bind(var10)(var2);
                var8 = var2[var3];
                if (!(var9 != var8)) {
                    _fun41601_ip = 224;
                    continue _fun41601
                }
            case 106:
                var8 = var2[var3];
                var3 = var8.filter;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel;
                    var2 = _closure1_slot3;
                    var1 = var0.type;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var3.bind(var8)(var2);
                var3 = var8.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var3.bind(var8)(var2);
                var3 = new Array(0);
                var2 = 0;
                var14 = var3;
                var13 = var9;
                var12 = 0;
                var8 = arraySpread(var14, var13, var12);
                _closure2_slot1 = var3;
                var8 = var9.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun41604: for (var _fun41604_ip = 0;;) switch (_fun41604_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var2 = var3.getActiveJoinedThreadsForParent;
                            var0 = _closure2_slot0;
                            var1 = var0.guild_id;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var3 = var0;
                            for (var0 in var3)
                                case 45: {
                                    case 54: var8 = var0;
                                    var7 = _closure2_slot1;
                                    var6 = var7.push;
                                    var6 = var6.bind(var7)(var8);
                                    _fun41604_ip = 45;
                                    continue _fun41604;
                                }
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var1);
                var1 = var3.length;
                var1 = var2 < var1;
                if (!var1) {
                    _fun41601_ip = 224;
                    continue _fun41601
                }
            case 189:
                var8 = _closure1_slot8;
                var14 = var3[var2];
                var15 = undefined;
                var13 = var7;
                var12 = var6;
                var11 = var5;
                var1 = var15[var8](var14, var13, var12, var11, var10);
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun41601_ip = 189;
                    continue _fun41601
                }
            case 224:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.isReadableType;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CURRENT_APP_CONTEXT;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/ReadStateActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ack = var4;
    var2.ackCategory = var3;
    var3 = function arg0, arg1() {
        _fun41605: for (var _fun41605_ip = 0;;) switch (_fun41605_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var1 = var0.isCategory;
                var2 = var1.bind(var0)();
                if (var2) {
                    _fun41605_ip = 130;
                    continue _fun41605
                }
            case 22:
                var2 = var0.isForumLikeChannel;
                var2 = var2.bind(var0)();
                var7 = _closure1_slot8;
                var6 = var0.id;
                if (var2) {
                    _fun41605_ip = 62;
                    continue _fun41605
                }
            case 44:
                var15 = undefined;
                var14 = var6;
                var13 = var4;
                var12 = true;
                var11 = true;
                var2 = var15[var7](var14, var13, var12, var11, var10);
                _fun41605_ip = 152;
                continue _fun41605;
            case 62:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var5 = undefined;
                var8 = var3.bind(var5)(var2);
                var3 = var8.fromTimestamp;
                var2 = global;
                var9 = var2.Date;
                var2 = var9.now;
                var2 = var2.bind(var9)();
                var10 = var3.bind(var8)(var2);
                var15 = undefined;
                var14 = var6;
                var13 = var4;
                var12 = true;
                var11 = true;
                var2 = var15[var7](var14, var13, var12, var11, var10, var9);
                _fun41605_ip = 152;
                continue _fun41605;
            case 130:
                var3 = _closure1_slot9;
                var14 = var0.id;
                var15 = undefined;
                var13 = var4;
                var12 = true;
                var11 = true;
                var0 = var15[var3](var14, var13, var12, var11, var10);
            case 152:
                var0 = undefined;
                return var0;
        }
    };
    var2.ackChannel = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'BULK_ACK';
        var1.type = var5;
        var5 = arg0;
        var1.channels = var5;
        var4 = _closure1_slot7;
        var1.context = var4;
        var4 = arg1;
        var1.onFinished = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.bulkAck = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_LOCAL_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.localAck = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ENABLE_AUTOMATIC_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.windowId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.enableAutomaticAck = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DISABLE_AUTOMATIC_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.windowId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.disableAutomaticAck = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_FEATURE_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.ackType = var4;
        var4 = arg2;
        var1.ackedId = var4;
        var4 = false;
        var1.local = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.ackGuildFeature = var3;
    var3 = function arg0, arg1() {
        _fun41611: for (var _fun41611_ip = 0;;) switch (_fun41611_ip) {
            case 0:
                var2 = _closure1_slot6;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var3 = null;
                var5 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun41611_ip = 34;
                    continue _fun41611
                }
            case 29:
                var2 = var4.id;
            case 34:
                if (!(var3 != var2)) {
                    _fun41611_ip = 101;
                    continue _fun41611
                }
            case 38:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'USER_NON_CHANNEL_ACK';
                var1.type = var4;
                var4 = arg0;
                var1.ackType = var4;
                var4 = arg1;
                var1.ackedId = var4;
                var4 = false;
                var1.local = var4;
                var1 = var2.bind(var3)(var1);
            case 101:
                return var0;
        }
    };
    var2.ackUserFeature = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_OLDEST_UNREAD_MESSAGE';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearOldestUnreadMessageId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4550, 1376, 1372, 4575, 1621, 660, 806, 21, 2]);