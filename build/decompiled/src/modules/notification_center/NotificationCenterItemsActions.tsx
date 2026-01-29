// modules/notification_center/NotificationCenterItemsActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function() { // Original name: _fetchNotificationCenterItems, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun103537: for (var _fun103537_ip = 0;;) switch (_fun103537_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103537_ip = 476;
                            continue _fun103537
                        }
                    case 12:
                        var11 = arg0;
                        var4 = arg1;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var10 = undefined;
                        var2 = _closure1_slot4;
                        var2 = var2.loading;
                        if (var2) {
                            _fun103537_ip = 473;
                            continue _fun103537
                        }
                    case 45:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 3;
                        var2 = var2[var5];
                        var7 = var6.bind(var1)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'LOAD_NOTIFICATION_CENTER_ITEMS';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 91);
                    case 89:
                        return var2;
                    case 91:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun103537_ip = 470;
                            continue _fun103537
                        }
                    case 100:
                        var6 = global;
                        var8 = var6.Math;
                        var7 = var8.ceil;
                        var6 = _closure1_slot4;
                        var6 = var6.items;
                        var9 = var6.length;
                        var6 = var11;
                        var6 = var6.limit;
                        var6 = var9 / var6;
                        var6 = var7.bind(var8)(var6);
                        _closure4_slot0 = var6;
                    case 150: // try_start_0
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var6 = 4;
                        var6 = var15[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.get;
                        var6 = {};
                        var13 = _closure1_slot5;
                        var9 = var13.NOTIF_CENTER_ITEMS;
                        var9 = var9.bind(var13)();
                        var6.url = var9;
                        var9 = {};
                        var14 = _closure1_slot0;
                        var13 = 5;
                        var13 = var15[var13];
                        var13 = var14.bind(var1)(var13);
                        var13 = var13.NetworkActionNames;
                        var13 = var13.NOTIFICATION_CENTER_PAGE_FETCH;
                        var9.event = var13;
                        var12 = function(arg0) { // Original name: properties, environment: var12
                            _fun103538: for (var _fun103538_ip = 0;;) switch (_fun103538_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    var1 = null;
                                    var1 = var1 == var0;
                                    var2 = undefined;
                                    var3 = undefined;
                                    if (var1) {
                                        _fun103538_ip = 27;
                                        continue _fun103538
                                    }
                                case 21:
                                    var3 = var0.items;
                                case 27:
                                    if (var3) {
                                        _fun103538_ip = 34;
                                        continue _fun103538
                                    }
                                case 30:
                                    var3 = new Array(0);
                                case 34:
                                    var1 = var3.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var0 = var0.type;
                                        return var0;
                                    };
                                    var3 = var1.bind(var3)(var0);
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.exact;
                                    var0 = {};
                                    var4 = _closure4_slot0;
                                    var0.page = var4;
                                    var0.items = var3;
                                    var3 = var3.length;
                                    var0.item_count = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var9.properties = var12;
                        var6.trackedActionData = var9;
                        var9 = {};
                        var16 = var11;
                        var17 = var9;
                        var11 = copyDataProperties(var17, var16);
                        var6.query = var9;
                        var9 = true;
                        var6.rejectWithError = var9;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address = 279);
                    case 277:
                        return var6;
                    case 279:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun103537_ip = 402;
                            continue _fun103537
                        }
                    case 285:
                        var10 = var6;
                        var8 = var4;
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun103537_ip = 304;
                            continue _fun103537
                        }
                    case 297:
                        var7 = var4;
                        var7 = var7.bind(var1)();
                    case 304:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS';
                        var7.type = var11;
                        var11 = var10.body;
                        var11 = var11.items;
                        var7.items = var11;
                        var11 = var10.body;
                        var11 = var11.cursor;
                        var7.cursor = var11;
                        var10 = var10.body;
                        var10 = var10.has_more;
                        var7.hasMore = var10;
                        var7 = var8.bind(var9)(var7);
                        SaveGenerator(address = 391);
                    case 389:
                        return var7;
                    case 391:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun103537_ip = 399;
                            continue _fun103537
                        }
                    case 397: // try_end0
                        _fun103537_ip = 473;
                        continue _fun103537;
                    case 399:
                        return var7;
                    case 402:
                        return var6;
                    case 405: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var7 = var4;
                        var6 = null;
                        if (!(var6 != var7)) {
                            _fun103537_ip = 420;
                            continue _fun103537
                        }
                    case 416:
                        var4 = var4.bind(var1)();
                    case 420:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 461);
                    case 459:
                        return var3;
                    case 461:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (!var4) {
                            _fun103537_ip = 473;
                            continue _fun103537
                        }
                    case 467:
                        return var3;
                    case 470:
                        return var2;
                    case 473:
                        return var1;
                    case 476:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var5 = function(arg0) { // Original name: markNotificationCenterLocalItemsAcked, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.localIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var5;
    var4 = function() { // Original name: markNotificationCenterRemoteItemAcked, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = function() { // Original name: _markNotificationCenterRemoteItemAcked, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103544: for (var _fun103544_ip = 0;;) switch (_fun103544_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103544_ip = 222;
                            continue _fun103544
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 3;
                        var1 = var7[var1];
                        var3 = undefined;
                        var9 = var2.bind(var3)(var1);
                        var2 = var9.dispatch;
                        var1 = {
                            'type': 'NOTIFICATION_CENTER_ITEMS_ACK',
                            'optimistic': true
                        };
                        var5 = true;
                        var8 = var4;
                        var10 = new Array(1);
                        var10[0] = var8;
                        var1.ids = var10;
                        var1 = var2.bind(var9)(var1);
                        var2 = _closure1_slot0;
                        var1 = 8;
                        var1 = var7[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var7 = _closure1_slot5;
                        var6 = var7.NOTIF_CENTER_ITEMS_ACK;
                        var6 = var6.bind(var7)(var8);
                        var1.url = var6;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103544_ip = 149;
                            continue _fun103544
                        }
                    case 147: // try_end0
                        _fun103544_ip = 217;
                        continue _fun103544;
                    case 149:
                        return var1;
                    case 152: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                        var1.type = var5;
                        var5 = var4;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var1.ids = var4;
                        var1 = var2.bind(var3)(var1);
                    case 217:
                        var1 = undefined;
                        return var1;
                    case 222:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var3 = function(arg0) { // Original name: markNotificationCenterMentionAcked, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'NOTIFICATION_CENTER_ITEMS_ACK',
            'optimistic': true
        };
        var4 = new Array(1);
        var5 = arg0;
        var4[0] = var5;
        var1.ids = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = function() { // Original name: _bulkMarkNotificationCenterItemsAcked, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103548: for (var _fun103548_ip = 0;;) switch (_fun103548_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103548_ip = 269;
                            continue _fun103548
                        }
                    case 15:
                        var3 = var7;
                        var1 = undefined;
                        var5 = undefined;
                        var6 = var7.map;
                        var4 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var5 = var6.bind(var7)(var4);
                    case 39: // try_start_0
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 3;
                        var6 = var4[var6];
                        var10 = var8.bind(var1)(var6);
                        var9 = var10.dispatch;
                        var8 = {
                            'type': 'NOTIFICATION_CENTER_ITEMS_ACK',
                            'optimistic': true
                        };
                        var6 = true;
                        var11 = var5;
                        var8.ids = var11;
                        var8 = var9.bind(var10)(var8);
                        var9 = var3;
                        var8 = var9.filter;
                        var3 = function(arg0) { // Environment: var2
                            _fun103550: for (var _fun103550_ip = 0;;) switch (_fun103550_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = var3.local_id;
                                    var0 = null;
                                    var0 = var0 == var1;
                                    if (var0) {
                                        _fun103550_ip = 54;
                                        continue _fun103550
                                    }
                                case 18:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 7;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var1 = var2.isMentionItem;
                                    var0 = var1.bind(var2)(var3);
                                case 54:
                                    return var0;
                            }
                        };
                        var8 = var8.bind(var9)(var3);
                        var3 = var8.map;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var8 = var3.bind(var8)(var2);
                        var3 = _closure1_slot0;
                        var2 = 8;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.NOTIF_CENTER_ITEMS_BULK_ACK;
                        var2.url = var7;
                        var7 = {};
                        var7.item_ids = var8;
                        var2.query = var7;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 203);
                    case 201:
                        return var2;
                    case 203:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103548_ip = 211;
                            continue _fun103548
                        }
                    case 209: // try_end0
                        _fun103548_ip = 266;
                        continue _fun103548;
                    case 211:
                        return var2;
                    case 214: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                        var2.type = var6;
                        var2.ids = var5;
                        var2 = var3.bind(var4)(var2);
                    case 266:
                        return var1;
                    case 269:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _deleteNotificationCenterItem, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103554: for (var _fun103554_ip = 0;;) switch (_fun103554_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103554_ip = 377;
                            continue _fun103554
                        }
                    case 10:
                        var5 = arg0;
                        var4 = undefined;
                        var10 = undefined;
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 9;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var3 = var1.NotificationCenterAckedBeforeId;
                        var1 = var3.getSetting;
                        var10 = var1.bind(var3)();
                    case 56: // try_start_0
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 3;
                        var1 = var8[var1];
                        var7 = var3.bind(var4)(var1);
                        var6 = var7.dispatch;
                        var1 = {};
                        var9 = 'NOTIFICATION_CENTER_ITEM_DELETE';
                        var1.type = var9;
                        var11 = var5;
                        var9 = var11.id;
                        var1.id = var9;
                        var1 = var6.bind(var7)(var1);
                        var1 = 4;
                        var1 = var8[var1];
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.delete;
                        var1 = {};
                        var12 = _closure1_slot5;
                        var9 = var12.NOTIF_CENTER_ITEMS;
                        var7 = var11.id;
                        var7 = var9.bind(var12)(var7);
                        var1.url = var7;
                        var7 = {};
                        var9 = _closure1_slot0;
                        var13 = 7;
                        var8 = var8[var13];
                        var9 = var9.bind(var4)(var8);
                        var8 = var9.isMentionItem;
                        var9 = var8.bind(var9)(var11);
                        var8 = 'regular';
                        if (!var9) {
                            _fun103554_ip = 191;
                            continue _fun103554
                        }
                    case 187:
                        var8 = 'mention';
                    case 191:
                        var7.item_type = var8;
                        var1.body = var7;
                        var7 = {};
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 5;
                        var8 = var11[var8];
                        var8 = var12.bind(var4)(var8);
                        var8 = var8.NetworkActionNames;
                        var8 = var8.NOTIFICATION_CENTER_ITEM_DELETE;
                        var7.event = var8;
                        var8 = {};
                        var9 = var5;
                        var14 = var9.id;
                        var8.notification_center_id = var14;
                        var11 = var11[var13];
                        var12 = var12.bind(var4)(var11);
                        var11 = var12.isRemoteAcked;
                        var10 = var11.bind(var12)(var9, var10);
                        var8.acked = var10;
                        var9 = var9.type;
                        var8.item_type = var9;
                        var7.properties = var8;
                        var1.trackedActionData = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 315);
                    case 313:
                        return var1;
                    case 315:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103554_ip = 324;
                            continue _fun103554
                        }
                    case 321: // try_end0
                        return var4;
                    case 324:
                        return var1;
                    case 327: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE';
                        var2.type = var6;
                        var2.item = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 377:
                        return var0;
                }
            };
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
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot5 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/notification_center/NotificationCenterItemsActions.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Original name: setNotificationCenterActive, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'NOTIFICATION_CENTER_SET_ACTIVE';
        var1.type = var4;
        var4 = arg0;
        var1.active = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setNotificationCenterActive = var6;
    var6 = function(arg0) { // Original name: setNotificationCenterTabFocused, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'NOTIFICATION_CENTER_TAB_FOCUSED';
        var1.type = var4;
        var4 = arg0;
        var1.focused = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setNotificationCenterTabFocused = var6;
    var6 = function() { // Original name: resetNotificationCenter, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RESET_NOTIFICATION_CENTER';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetNotificationCenter = var6;
    var6 = function() { // Original name: fetchNotificationCenterItems, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchNotificationCenterItems = var6;
    var6 = function(arg0) { // Original name: markNotificationCenterItemAcked, environment: var1
        _fun103559: for (var _fun103559_ip = 0;;) switch (_fun103559_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.local_id;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun103559_ip = 86;
                    continue _fun103559
                }
            case 15:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isMentionItem;
                var2 = var2.bind(var4)(var0);
                if (var2) {
                    _fun103559_ip = 70;
                    continue _fun103559
                }
            case 54:
                var4 = _closure1_slot8;
                var2 = var0.id;
                var2 = var4.bind(var3)(var2);
                _fun103559_ip = 114;
                continue _fun103559;
            case 70:
                var2 = _closure1_slot10;
                var1 = var0.id;
                var1 = var2.bind(var3)(var1);
                _fun103559_ip = 114;
                continue _fun103559;
            case 86:
                var2 = _closure1_slot7;
                var0 = var0.local_id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 114:
                var0 = undefined;
                return var0;
        }
    };
    var2.markNotificationCenterItemAcked = var6;
    var2.markNotificationCenterLocalItemsAcked = var5;
    var2.markNotificationCenterRemoteItemAcked = var4;
    var2.markNotificationCenterMentionAcked = var3;
    var3 = function() { // Original name: bulkMarkNotificationCenterItemsAcked, environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.bulkMarkNotificationCenterItemsAcked = var3;
    var1 = function() { // Original name: deleteNotificationCenterItem, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteNotificationCenterItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3924, 660, 806, 4482, 481, 1385, 4180, 507, 1348, 2]);