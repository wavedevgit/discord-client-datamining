// modules/hang_status/HangStatusActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun111074: for (var _fun111074_ip = 0;;) switch (_fun111074_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var3 = _closure1_slot4;
                var0 = var3.getVoiceChannelId;
                var3 = var0.bind(var3)();
                var0 = null;
                var4 = var0 != var3;
                var0 = undefined;
                if (!var4) {
                    _fun111074_ip = 53;
                    continue _fun111074
                }
            case 50:
                var0 = var3;
            case 53:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 7;
        var1 = var3[var0];
        var0 = undefined;
        var6 = var2.bind(var0)(var1);
        var4 = var6.dispatch;
        var1 = {};
        var7 = 'CLEAR_HANG_STATUS';
        var1.type = var7;
        var7 = arg1;
        var1.saveAsDefault = var7;
        var1 = var4.bind(var6)(var1);
        var1 = 8;
        var1 = var3[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.CLEAR_HANG_STATUS;
        var1 = {};
        var6 = global;
        var7 = var6.Boolean;
        var6 = arg0;
        var6 = var7.bind(var0)(var6);
        var1.manual_update = var6;
        var5 = _closure1_slot8;
        var8 = var5.bind(var0)();
        var9 = var1;
        var5 = copyDataProperties(var9, var8);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot9 = var3;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun111076: for (var _fun111076_ip = 0;;) switch (_fun111076_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var2 = _closure1_slot3;
                var1 = var2.getChannel;
                var3 = _closure1_slot4;
                var0 = var3.getVoiceChannelId;
                var0 = var0.bind(var3)();
                var2 = var1.bind(var2)(var0);
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                var9 = undefined;
                if (var3) {
                    _fun111076_ip = 55;
                    continue _fun111076
                }
            case 50:
                var9 = var2.guild_id;
            case 55:
                if (!(var1 != var6)) {
                    _fun111076_ip = 63;
                    continue _fun111076
                }
            case 59:
                if (!(var1 == var9)) {
                    _fun111076_ip = 80;
                    continue _fun111076
                }
            case 63:
                var2 = _closure1_slot9;
                var1 = false;
                var1 = var2.bind(var0)(var1, var7);
                _fun111076_ip = 206;
                continue _fun111076;
            case 80:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var8 = var2.bind(var0)(var1);
                var4 = var8.dispatch;
                var1 = {};
                var10 = 'UPDATE_HANG_STATUS';
                var1.type = var10;
                var1.status = var6;
                var1.guildId = var9;
                var1.saveAsDefault = var7;
                var1 = var4.bind(var8)(var1);
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.SET_HANG_STATUS;
                var1 = {};
                var1.status_type = var6;
                var6 = global;
                var6 = var6.Boolean;
                var6 = var6.bind(var0)(var7);
                var1.manual_update = var6;
                var5 = _closure1_slot8;
                var11 = var5.bind(var0)();
                var12 = var1;
                var5 = copyDataProperties(var12, var11);
                var1 = var3.bind(var4)(var2, var1);
            case 206:
                return var0;
        }
    };
    var2.updateHangStatus = var4;
    var4 = function arg0, arg1, arg2() {
        _fun111077: for (var _fun111077_ip = 0;;) switch (_fun111077_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var7 = arg2;
                var0 = '';
                if (!(var0 !== var8)) {
                    _fun111077_ip = 23;
                    continue _fun111077
                }
            case 17:
                var0 = null;
                if (!(var0 == var6)) {
                    _fun111077_ip = 45;
                    continue _fun111077
                }
            case 23:
                var2 = _closure1_slot9;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var0, var7);
                _fun111077_ip = 220;
                continue _fun111077;
            case 45:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var5 = undefined;
                var9 = var1.bind(var5)(var0);
                var3 = var9.dispatch;
                var0 = {};
                var10 = 'UPDATE_HANG_STATUS_CUSTOM';
                var0.type = var10;
                var0.emoji = var6;
                var0.status = var8;
                var0.saveAsDefault = var7;
                var0 = var3.bind(var9)(var0);
                var0 = 8;
                var0 = var2[var0];
                var3 = var1.bind(var5)(var0);
                var2 = var3.track;
                var0 = _closure1_slot7;
                var1 = var0.SET_HANG_STATUS;
                var0 = {};
                var9 = _closure1_slot6;
                var9 = var9.CUSTOM;
                var0.status_type = var9;
                var0.custom_status_text = var8;
                var8 = var6.id;
                var0.custom_status_emoji_id = var8;
                var6 = var6.name;
                var0.custom_status_emoji_name = var6;
                var6 = global;
                var6 = var6.Boolean;
                var6 = var6.bind(var5)(var7);
                var0.manual_update = var6;
                var4 = _closure1_slot8;
                var11 = var4.bind(var5)();
                var12 = var0;
                var4 = copyDataProperties(var12, var11);
                var0 = var2.bind(var3)(var1, var0);
            case 220:
                var0 = undefined;
                return var0;
        }
    };
    var2.updateCustomHangStatus = var4;
    var4 = function arg0, arg1() {
        _fun111078: for (var _fun111078_ip = 0;;) switch (_fun111078_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var0 = null;
                if (!(var0 == var8)) {
                    _fun111078_ip = 34;
                    continue _fun111078
                }
            case 12:
                var2 = _closure1_slot9;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var0, var7);
                _fun111078_ip = 169;
                continue _fun111078;
            case 34:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var5 = undefined;
                var6 = var1.bind(var5)(var0);
                var3 = var6.dispatch;
                var0 = {};
                var9 = 'UPDATE_HANG_STATUS_GAME_ACTIVITY';
                var0.type = var9;
                var0.applicationId = var8;
                var0.saveAsDefault = var7;
                var0 = var3.bind(var6)(var0);
                var0 = 8;
                var0 = var2[var0];
                var3 = var1.bind(var5)(var0);
                var2 = var3.track;
                var0 = _closure1_slot7;
                var1 = var0.SET_HANG_STATUS;
                var0 = {};
                var6 = 'game_activity';
                var0.status_type = var6;
                var6 = global;
                var6 = var6.Boolean;
                var6 = var6.bind(var5)(var7);
                var0.manual_update = var6;
                var4 = _closure1_slot8;
                var10 = var4.bind(var5)();
                var11 = var0;
                var4 = copyDataProperties(var11, var10);
                var0 = var2.bind(var3)(var1, var0);
            case 169:
                var0 = undefined;
                return var0;
        }
    };
    var2.updateGameActivityHangStatus = var4;
    var2.clearHangStatus = var3;
    var3 = function() {
        _fun111079: for (var _fun111079_ip = 0;;) switch (_fun111079_ip) {
            case 0:
                var4 = _closure1_slot5;
                var1 = var4.getCustomHangStatus;
                var1 = var1.bind(var4)();
                var3 = new Array(1);
                var3[0] = var1;
                var1 = var4.getRecentStatuses;
                var6 = var1.bind(var4)();
                var5 = 1;
                var7 = var3;
                var5 = arraySpread(var7, var6, var5);
                var1 = var4.getFavoritedStatuses;
                var6 = var1.bind(var4)();
                var7 = var3;
                var1 = arraySpread(var7, var6, var5);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun111080: for (var _fun111080_ip = 0;;) switch (_fun111080_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = null;
                            var0 = var3 != var2;
                            if (!var0) {
                                _fun111080_ip = 45;
                                continue _fun111080
                            }
                        case 12:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 9;
                            var1 = var4[var1];
                            var4 = undefined;
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.bind(var4)(var2);
                            var0 = !var1;
                        case 45:
                            if (!var0) {
                                _fun111080_ip = 58;
                                continue _fun111080
                            }
                        case 48:
                            var1 = var2.emoji;
                            var0 = var3 != var1;
                        case 58:
                            if (!var0) {
                                _fun111080_ip = 124;
                                continue _fun111080
                            }
                        case 61:
                            var4 = var2.emoji;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun111080_ip = 81;
                                continue _fun111080
                            }
                        case 76:
                            var1 = var4.id;
                        case 81:
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun111080_ip = 121;
                                continue _fun111080
                            }
                        case 88:
                            var5 = _closure1_slot2;
                            var4 = var5.getCustomEmojiById;
                            var2 = var2.emoji;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
                            var1 = var3 == var2;
                        case 121:
                            var0 = var1;
                        case 124:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun111079_ip = 141;
                    continue _fun111079
                }
            case 92:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'DELETE_INVALID_HANG_STATUSES';
                var0.type = var4;
                var0.statuses = var3;
                var0 = var1.bind(var2)(var0);
            case 141:
                var0 = undefined;
                return var0;
        }
    };
    var2.deleteInvalidHangStatuses = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_FAVORITE_HANG_STATUS';
        var1.type = var4;
        var4 = arg0;
        var1.status = var4;
        var4 = arg1;
        var1.emoji = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateFavoriteHangStatus = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RESET_HANG_STATUS_STATE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetHangStatusState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4737, 1372, 1670, 3611, 3612, 660, 11924, 806, 795, 3613, 2]);