// modules/messages/markUnread.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun76494: for (var _fun76494_ip = 0;;) switch (_fun76494_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var3 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76494_ip = 501;
                            continue _fun76494
                        }
                    case 18:
                        var _closure4_slot0 = var3;
                        var2 = undefined;
                        var _closure4_slot1 = var2;
                        var _closure4_slot2 = var2;
                        var _closure4_slot3 = var2;
                        var4 = _closure1_slot8;
                        var1 = var4.getCurrentUser;
                        var4 = var1.bind(var4)();
                        _closure4_slot1 = var4;
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun76494_ip = 495;
                            continue _fun76494
                        }
                    case 65:
                        var5 = _closure1_slot6;
                        var4 = var5.getMessages;
                        var7 = var4.bind(var5)(var10);
                        var4 = var7.toArray;
                        var9 = var4.bind(var7)();
                        var5 = var9.filter;
                        var4 = function(arg0) { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = 0;
                            var0 = var1 < var0;
                            return var0;
                        };
                        var9 = var5.bind(var9)(var4);
                        var5 = var9.sort;
                        var4 = function(arg0, arg1) { // Environment: var8
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var5.bind(var9)(var4);
                        var4 = var5.reverse;
                        var5 = var4.bind(var5)();
                        var4 = 0;
                        var5 = var5[var4];
                        if (!(var1 != var5)) {
                            _fun76494_ip = 152;
                            continue _fun76494
                        }
                    case 145:
                        var9 = var5.id;
                        _fun76494_ip = 183;
                        continue _fun76494;
                    case 152:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 8;
                        var5 = var12[var5];
                        var11 = var11.bind(var2)(var5);
                        var5 = var11.atPreviousMillisecond;
                        var9 = var5.bind(var11)(var3);
                    case 183:
                        _closure4_slot2 = var9;
                        _closure4_slot3 = var4;
                        var5 = var7.forAll;
                        var4 = function(arg0) { // Environment: var8
                            _fun76497: for (var _fun76497_ip = 0;;) switch (_fun76497_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var7 = var2.bind(var0)(var1);
                                    var6 = var7.compare;
                                    var4 = var5.id;
                                    var1 = _closure4_slot2;
                                    var4 = var6.bind(var7)(var4, var1);
                                    var1 = 0;
                                    var1 = var4 > var1;
                                    if (!var1) {
                                        _fun76497_ip = 75;
                                        continue _fun76497
                                    }
                                case 61:
                                    var4 = _closure1_slot7;
                                    var3 = _closure4_slot1;
                                    var1 = var4.bind(var0)(var5, var3);
                                case 75:
                                    if (!var1) {
                                        _fun76497_ip = 89;
                                        continue _fun76497
                                    }
                                case 78:
                                    var1 = _closure4_slot3;
                                    var1 = var1 + 1;
                                    _closure4_slot3 = var1;
                                case 89:
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var7)(var4);
                        var5 = _closure1_slot5;
                        var4 = var5.getChannel;
                        var11 = var4.bind(var5)(var10);
                        var1 = var1 != var11;
                        if (!var1) {
                            _fun76494_ip = 240;
                            continue _fun76494
                        }
                    case 230:
                        var4 = var11.isThread;
                        var1 = var4.bind(var11)();
                    case 240:
                        if (!var1) {
                            _fun76494_ip = 375;
                            continue _fun76494
                        }
                    case 246:
                        var1 = var11.isArchivedThread;
                        var1 = var1.bind(var11)();
                        if (!var1) {
                            _fun76494_ip = 306;
                            continue _fun76494
                        }
                    case 259:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.unarchiveThread;
                        var1 = false;
                        var1 = var4.bind(var5)(var11, var1);
                        SaveGenerator(address = 297);
                    case 295:
                        return var1;
                    case 297:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76494_ip = 498;
                            continue _fun76494
                        }
                    case 306:
                        var5 = _closure1_slot4;
                        var4 = var5.hasJoined;
                        var4 = var4.bind(var5)(var10);
                        if (var4) {
                            _fun76494_ip = 375;
                            continue _fun76494
                        }
                    case 324:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var7 = var5.bind(var2)(var4);
                        var5 = var7.joinThread;
                        var4 = 'Mark Unread';
                        var4 = var5.bind(var7)(var11, var4);
                        SaveGenerator(address = 366);
                    case 364:
                        return var4;
                    case 366:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun76494_ip = 375;
                            continue _fun76494
                        }
                    case 372:
                        return var4;
                    case 375:
                        var7 = _closure1_slot10;
                        var5 = var7.log;
                        var4 = {};
                        var4.channelId = var10;
                        var4.messageId = var3;
                        var3 = 'Marking unread';
                        var3 = var5.bind(var7)(var3, var4);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var7 = _closure1_slot9;
                        var6 = var7.MESSAGE_ACK;
                        var6 = var6.bind(var7)(var10, var9);
                        var3.url = var6;
                        var7 = {};
                        var6 = true;
                        var7.manual = var6;
                        var8 = _closure4_slot3;
                        var7.mention_count = var8;
                        var3.body = var7;
                        var3.oldFormErrors = var6;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                    case 495:
                        return var2;
                    case 498:
                        return var1;
                    case 501:
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.shouldBadgeMessage;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'markUnread';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot10 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/markUnread.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3095, 1372, 4251, 3948, 1621, 660, 3, 21, 6534, 507, 2]);