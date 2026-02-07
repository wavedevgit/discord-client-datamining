// modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot5 = var3;
    var3 = 3;
    var4 = var6[var3];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MAX_RESULTS_PER_PAGE;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.MAX_VISIBLE_PAGES;
    var3 = var4 * var3;
    var _closure1_slot6 = var3;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MEMBER_APPLICATION_FETCH_LIMIT = var3;
    var1 = function arg0() {
        var1 = arg0;
        var6 = var1.guildId;
        var _closure2_slot0 = var6;
        var5 = var1.guildJoinRequests;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var2 = var4.useRef;
        var7 = false;
        var2 = var2.bind(var4)(var7);
        var _closure2_slot2 = var2;
        var2 = var4.useState;
        var8 = null;
        var9 = var2.bind(var4)(var8);
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = 2;
        var9 = var3.bind(var2)(var9, var1);
        var1 = 0;
        var1 = var9[var1];
        var _closure2_slot3 = var1;
        var3 = 1;
        var3 = var9[var3];
        var _closure2_slot4 = var3;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var8);
        var _closure2_slot5 = var3;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot6 = var3;
        var3 = var4.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun105541: for (var _fun105541_ip = 0;;) switch (_fun105541_ip) {
                        case 0:
                            StartGenerator();
                            var7 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun105541_ip = 728;
                                continue _fun105541
                            }
                        case 13:
                            var12 = arg1;
                            var1 = undefined;
                            var11 = undefined;
                            var6 = undefined;
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            if (var2) {
                                _fun105541_ip = 725;
                                continue _fun105541
                            }
                        case 40:
                            var8 = var12;
                            var9 = global;
                            var2 = var9.HermesInternal;
                            var5 = var2.concat;
                            var4 = '';
                            var2 = '-';
                            var5 = var5.bind(var4)(var7, var2, var8);
                            var2 = _closure2_slot5;
                            var2 = var2.current;
                            var4 = false;
                            var13 = false;
                            if (!(var5 !== var2)) {
                                _fun105541_ip = 110;
                                continue _fun105541
                            }
                        case 88:
                            var2 = _closure2_slot5;
                            var2.current = var5;
                            var2 = _closure2_slot6;
                            var2.current = var4;
                            var13 = true;
                        case 110:
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            if (var2) {
                                _fun105541_ip = 725;
                                continue _fun105541
                            }
                        case 125:
                            var2 = _closure2_slot3;
                            var8 = null;
                            if (!(var8 != var2)) {
                                _fun105541_ip = 144;
                                continue _fun105541
                            }
                        case 135:
                            var2 = _closure2_slot4;
                            var2 = var2.bind(var1)(var8);
                        case 144:
                            var14 = _closure2_slot1;
                            var17 = var12;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var5 = 3;
                            var10 = var16[var5];
                            var10 = var15.bind(var1)(var10);
                            var10 = var10.GuildJoinRequestApplicationStatuses;
                            var10 = var10.SUBMITTED;
                            var10 = var17 === var10;
                            var5 = var16[var5];
                            var5 = var15.bind(var1)(var5);
                            var5 = var5.GuildJoinRequestSortOrders;
                            var5 = var5.TIMESTAMP_DESC;
                            if (!(var7 !== var5)) {
                                _fun105541_ip = 357;
                                continue _fun105541
                            }
                        case 218:
                            var7 = {};
                            if (var13) {
                                _fun105541_ip = 269;
                                continue _fun105541
                            }
                        case 223:
                            var15 = var14.length;
                            var5 = 1;
                            var5 = var15 - var5;
                            var15 = var14[var5];
                            if (var10) {
                                _fun105541_ip = 250;
                                continue _fun105541
                            }
                        case 242:
                            var5 = var15.actionedAt;
                            _fun105541_ip = 256;
                            continue _fun105541;
                        case 250:
                            var5 = var15.joinRequestId;
                        case 256:
                            var7.after = var5;
                            var5 = var7;
                            _fun105541_ip = 480;
                            continue _fun105541;
                        case 269:
                            var18 = _closure1_slot1;
                            var19 = _closure1_slot2;
                            var15 = 4;
                            var15 = var19[var15];
                            var17 = var18.bind(var1)(var15);
                            var16 = var17.fromTimestamp;
                            var15 = 5;
                            var15 = var19[var15];
                            var15 = var18.bind(var1)(var15);
                            var20 = var15.bind(var1)();
                            var19 = var20.subtract;
                            var18 = 180;
                            var15 = 'days';
                            var18 = var19.bind(var20)(var18, var15);
                            var15 = var18.valueOf;
                            var15 = var15.bind(var18)();
                            var15 = var16.bind(var17)(var15);
                            var7.after = var15;
                            var5 = var7;
                            _fun105541_ip = 480;
                            continue _fun105541;
                        case 357:
                            var7 = {};
                            if (var13) {
                                _fun105541_ip = 405;
                                continue _fun105541
                            }
                        case 362:
                            var15 = var14.length;
                            var13 = 1;
                            var13 = var15 - var13;
                            var13 = var14[var13];
                            if (var10) {
                                _fun105541_ip = 389;
                                continue _fun105541
                            }
                        case 381:
                            var10 = var13.actionedAt;
                            _fun105541_ip = 395;
                            continue _fun105541;
                        case 389:
                            var10 = var13.joinRequestId;
                        case 395:
                            var7.before = var10;
                            var5 = var7;
                            _fun105541_ip = 480;
                            continue _fun105541;
                        case 405:
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var10 = 4;
                            var10 = var14[var10];
                            var13 = var13.bind(var1)(var10);
                            var10 = var13.fromTimestamp;
                            var9 = var9.Date;
                            var14 = var9.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var24 = var14;
                            var9 = new var24[var9](var23);
                            var14 = var9 instanceof Object ? var9 : var14;
                            var9 = var14.getTime;
                            var9 = var9.bind(var14)();
                            var9 = var10.bind(var13)(var9);
                            var7.before = var9;
                            var5 = var7;
                        case 480:
                            var11 = var5;
                        case 483: // try_start_0 // try_start_1
                            var5 = _closure2_slot2;
                            var7 = true;
                            var5.current = var7;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var5 = 6;
                            var5 = var10[var5];
                            var10 = var9.bind(var1)(var5);
                            var9 = var10.fetchGuildJoinRequests;
                            var5 = {};
                            var13 = _closure2_slot0;
                            var5.guildId = var13;
                            var5.status = var12;
                            var12 = _closure1_slot6;
                            var5.limit = var12;
                            var5.force = var7;
                            var22 = var11;
                            var23 = var5;
                            var11 = copyDataProperties(var23, var22);
                            var5 = var9.bind(var10)(var5);
                            SaveGenerator(address = 567);
                        case 565:
                            return var5;
                        case 567:
                            ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                            if (var9) {
                                _fun105541_ip = 616;
                                continue _fun105541
                            }
                        case 573:
                            var6 = var5;
                            if (!(var8 != var5)) {
                                _fun105541_ip = 614;
                                continue _fun105541
                            }
                        case 580:
                            var6 = var6.body;
                            var6 = var6.guild_join_requests;
                            var8 = var6.length;
                            var6 = _closure1_slot6;
                            if (!(var8 < var6)) {
                                _fun105541_ip = 614;
                                continue _fun105541
                            }
                        case 604:
                            var6 = _closure2_slot6;
                            var6.current = var7;
                        case 614: // try_end0
                            _fun105541_ip = 699;
                            continue _fun105541;
                        case 616: // try_end1
                            var6 = _closure2_slot2;
                            var6.current = var4;
                            return var5;
                        case 629: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 7;
                            var2 = var7[var2];
                            var2 = var5.bind(var1)(var2);
                            var2 = var2.APIError;
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var24 = var5;
                            var23 = var6;
                            var2 = new var24[var2](var23, var22);
                            var6 = var2 instanceof Object ? var2 : var5;
                            var5 = _closure2_slot4;
                            var2 = var6.getAnyErrorMessage;
                            var2 = var2.bind(var6)();
                            var2 = var5.bind(var1)(var2);
                        case 699: // try_end2
                            var2 = _closure2_slot2;
                            var2.current = var4;
                            _fun105541_ip = 725;
                            continue _fun105541;
                        case 711: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var3 = _closure2_slot2;
                            var3.current = var4;
                            throw var2;
                        case 725:
                            return var1;
                        case 728:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(3);
        var0[0] = var1;
        var0[1] = var6;
        var0[2] = var5;
        var2 = var3.bind(var4)(var2, var0);
        var0 = {};
        var0.fetchNextPage = var2;
        var0.error = var1;
        return var0;
    };
    var2.usePaginatedMemberApplications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3217, 21, 3047, 7490, 3351, 2]);