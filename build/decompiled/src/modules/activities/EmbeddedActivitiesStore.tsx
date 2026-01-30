// modules/activities/EmbeddedActivitiesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var6
        _fun15744: for (var _fun15744_ip = 0;;) switch (_fun15744_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun15744_ip = 45;
                    continue _fun15744
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun15744_ip = 54;
                    continue _fun15744
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun15744_ip = 342;
                    continue _fun15744
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun15744_ip = 322;
                    continue _fun15744
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun15744_ip = 282;
                    continue _fun15744
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun15744_ip = 269;
                    continue _fun15744
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun15744_ip = 162;
                    continue _fun15744
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun15744_ip = 178;
                    continue _fun15744
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun15744_ip = 248;
                    continue _fun15744
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun15744_ip = 248;
                    continue _fun15744
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun15744_ip = 233;
                    continue _fun15744
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun15744_ip = 246;
                    continue _fun15744
                }
            case 233:
                var8 = _closure1_slot40;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun15744_ip = 264;
                continue _fun15744;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun15744_ip = 282;
                continue _fun15744;
            case 269:
                var6 = _closure1_slot40;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun15744_ip = 322;
                    continue _fun15744
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun15744_ip = 329;
                    continue _fun15744
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun15745: for (var _fun15745_ip = 0;;) switch (_fun15745_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun15745_ip = 56;
                                continue _fun15745
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun15745_ip = 67;
                            continue _fun15745;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var6
        _fun15746: for (var _fun15746_ip = 0;;) switch (_fun15746_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun15746_ip = 23;
                    continue _fun15746
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun15746_ip = 33;
                    continue _fun15746
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun15746_ip = 70;
                    continue _fun15746
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun15746_ip = 55;
                    continue _fun15746
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var6
        _fun15747: for (var _fun15747_ip = 0;;) switch (_fun15747_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun15747_ip = 74;
                continue _fun15747;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot41 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1) { // Original name: getLaunchStatesKey, environment: var6
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg1;
        var1 = ':';
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0) { // Original name: getNormalizedGuildId, environment: var6
        _fun15751: for (var _fun15751_ip = 0;;) switch (_fun15751_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 != var1;
                var0 = '0';
                if (!var2) {
                    _fun15751_ip = 21;
                    continue _fun15751
                }
            case 18:
                var0 = var1;
            case 21:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function(arg0) { // Original name: updateEmbeddedActivities, environment: var6
        _fun15752: for (var _fun15752_ip = 0;;) switch (_fun15752_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.location;
                var _closure2_slot0 = var12;
                var10 = var0.applicationId;
                var _closure2_slot1 = var10;
                var17 = var0.launchId;
                var16 = var0.compositeInstanceId;
                var15 = var0.participants;
                var22 = var0.proxyTicket;
                var0 = undefined;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var2 = var4.bind(var0)(var2);
                var21 = var2.bind(var0)(var10);
                var9 = null;
                if (!(var9 != var21)) {
                    _fun15752_ip = 1113;
                    continue _fun15752
                }
            case 90:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 14;
                var2 = var2[var13];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getEmbeddedActivityLocationChannelId;
                var7 = var2.bind(var4)(var12);
                if (!(var9 != var7)) {
                    _fun15752_ip = 143;
                    continue _fun15752
                }
            case 125:
                var4 = _closure1_slot22;
                var2 = var4.get;
                var2 = var2.bind(var4)(var7);
                if (!(var9 == var2)) {
                    _fun15752_ip = 147;
                    continue _fun15752
                }
            case 143:
                var2 = _closure1_slot18;
            case 147:
                var14 = var9 != var2;
                if (!var14) {
                    _fun15752_ip = 165;
                    continue _fun15752
                }
            case 154:
                var4 = var2.length;
                var2 = 0;
                var14 = var2 === var4;
            case 165:
                var5 = _closure1_slot24;
                var4 = var5.get;
                var2 = var12.id;
                var8 = var4.bind(var5)(var2);
                if (!(var9 == var8)) {
                    _fun15752_ip = 192;
                    continue _fun15752
                }
            case 188:
                var8 = _closure1_slot18;
            case 192:
                var4 = var8.find;
                var2 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var4.bind(var8)(var2);
                var5 = var15.map;
                var2 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.userId;
                    return var0;
                };
                var2 = var5.bind(var15)(var2);
                var6 = _closure1_slot9;
                var5 = var6.getId;
                var5 = var5.bind(var6)();
                _closure2_slot2 = var5;
                var6 = var2.some;
                var5 = function(arg0) { // Environment: var3
                    var1 = _closure2_slot2;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var19 = var6.bind(var2)(var5);
                var6 = var15.find;
                var5 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.userId;
                    var0 = _closure2_slot2;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var6.bind(var15)(var5);
                var6 = var9 == var5;
                var18 = undefined;
                if (var6) {
                    _fun15752_ip = 286;
                    continue _fun15752
                }
            case 280:
                var18 = var5.sessionId;
            case 286:
                var6 = var15.some;
                var5 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActivityParticipantCurrentUserCurrentSession;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var6.bind(var15)(var5);
                var6 = _closure1_slot20;
                var5 = var6.get;
                var6 = var5.bind(var6)(var10);
                var23 = _closure1_slot25;
                var11 = var23.get;
                var24 = _closure1_slot42;
                var25 = var9 != var7;
                var5 = null;
                if (!var25) {
                    _fun15752_ip = 341;
                    continue _fun15752
                }
            case 338:
                var5 = var7;
            case 341:
                var5 = var24.bind(var0)(var5, var10);
                var11 = var11.bind(var23)(var5);
                var5 = var9 == var11;
                var25 = undefined;
                if (var5) {
                    _fun15752_ip = 367;
                    continue _fun15752
                }
            case 361:
                var25 = var11.launchParams;
            case 367:
                var5 = {};
                var5.applicationId = var10;
                var5.location = var12;
                var5.launchId = var17;
                var5.compositeInstanceId = var16;
                var5.url = var21;
                var21 = global;
                var23 = var21.Set;
                var24 = var23.prototype;
                var24 = Object.create(var24, {
                    constructor: {
                        value: var23
                    }
                });
                var30 = var24;
                var29 = var2;
                var23 = new var30[var23](var29, var28);
                var23 = var23 instanceof Object ? var23 : var24;
                var5.userIds = var23;
                var5.participants = var15;
                var24 = var9 == var6;
                var23 = undefined;
                if (var24) {
                    _fun15752_ip = 447;
                    continue _fun15752
                }
            case 441:
                var23 = var6.referrerId;
            case 447:
                if (!(var9 == var23)) {
                    _fun15752_ip = 469;
                    continue _fun15752
                }
            case 451:
                var26 = var9 == var25;
                var24 = undefined;
                if (var26) {
                    _fun15752_ip = 466;
                    continue _fun15752
                }
            case 460:
                var24 = var25.referrerId;
            case 466:
                var23 = var24;
            case 469:
                var5.referrerId = var23;
                var24 = var9 == var6;
                var23 = undefined;
                if (var24) {
                    _fun15752_ip = 489;
                    continue _fun15752
                }
            case 483:
                var23 = var6.customId;
            case 489:
                if (!(var9 == var23)) {
                    _fun15752_ip = 511;
                    continue _fun15752
                }
            case 493:
                var26 = var9 == var25;
                var24 = undefined;
                if (var26) {
                    _fun15752_ip = 508;
                    continue _fun15752
                }
            case 502:
                var24 = var25.customId;
            case 508:
                var23 = var24;
            case 511:
                var5.customId = var23;
                var5.proxyTicket = var22;
                if (!var19) {
                    _fun15752_ip = 595;
                    continue _fun15752
                }
            case 524:
                if (!(var9 != var6)) {
                    _fun15752_ip = 595;
                    continue _fun15752
                }
            case 528:
                var25 = _closure1_slot20;
                var24 = var25.set;
                var23 = var6.applicationId;
                var22 = {};
                var29 = var22;
                var28 = var6;
                var26 = copyDataProperties(var29, var28);
                var29 = var22;
                var28 = var5;
                var26 = copyDataProperties(var29, var28);
                var27 = var5.proxyTicket;
                if (!(var9 == var27)) {
                    _fun15752_ip = 580;
                    continue _fun15752
                }
            case 574:
                var27 = var6.proxyTicket;
            case 580:
                var26 = 'proxyTicket';
                var22[var26] = var27;
                var22 = var24.bind(var25)(var23, var22);
            case 595:
                if (!(var9 != var6)) {
                    _fun15752_ip = 688;
                    continue _fun15752
                }
            case 599:
                var23 = var12.id;
                var22 = var6.location;
                var22 = var22.id;
                if (!(var23 === var22)) {
                    _fun15752_ip = 688;
                    continue _fun15752
                }
            case 618:
                var22 = var6.applicationId;
                if (!(var10 === var22)) {
                    _fun15752_ip = 688;
                    continue _fun15752
                }
            case 627:
                if (var19) {
                    _fun15752_ip = 671;
                    continue _fun15752
                }
            case 630:
                var23 = var21.Array;
                var22 = var23.from;
                var21 = var6.userIds;
                var23 = var22.bind(var23)(var21);
                var22 = var23.some;
                var21 = function(arg0) { // Environment: var3
                    var1 = _closure2_slot2;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var21 = var22.bind(var23)(var21);
                if (var21) {
                    _fun15752_ip = 674;
                    continue _fun15752
                }
            case 671:
                if (var20) {
                    _fun15752_ip = 688;
                    continue _fun15752
                }
            case 674:
                var20 = _closure1_slot46;
                var20 = var20.bind(var0)(var6);
                _fun15752_ip = 880;
                continue _fun15752;
            case 688:
                if (!var19) {
                    _fun15752_ip = 880;
                    continue _fun15752
                }
            case 694:
                if (!(var9 != var6)) {
                    _fun15752_ip = 729;
                    continue _fun15752
                }
            case 698:
                var19 = var6.applicationId;
                if (!(var19 === var10)) {
                    _fun15752_ip = 729;
                    continue _fun15752
                }
            case 707:
                var6 = var6.location;
                var19 = var6.id;
                var6 = var12.id;
                if (!(var19 !== var6)) {
                    _fun15752_ip = 880;
                    continue _fun15752
                }
            case 729:
                var19 = _closure1_slot9;
                var6 = var19.getSessionId;
                var6 = var6.bind(var19)();
                if (!(var18 === var6)) {
                    _fun15752_ip = 849;
                    continue _fun15752
                }
            case 747:
                var6 = {};
                var6.applicationId = var10;
                var6.launchId = var17;
                var6.compositeInstanceId = var16;
                var6.location = var12;
                var6.participants = var15;
                var6.isFirstActivityInChannel = var14;
                var4 = var9 == var4;
                var6.isStart = var4;
                var4 = var5.referrerId;
                var6.referrerId = var4;
                var4 = var5.customId;
                var6.customId = var4;
                var14 = var9 == var11;
                var4 = undefined;
                if (var14) {
                    _fun15752_ip = 823;
                    continue _fun15752
                }
            case 817:
                var4 = var11.inviterUserId;
            case 823:
                var6.inviterUserId = var4;
                var4 = var5.proxyTicket;
                var6.proxyTicket = var4;
                var4 = function(arg0) { // Original name: openActivity, environment: var3
                    _fun15759: for (var _fun15759_ip = 0;;) switch (_fun15759_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.applicationId;
                            var11 = var0.launchId;
                            var10 = var0.compositeInstanceId;
                            var2 = var0.location;
                            var15 = var0.participants;
                            var17 = var0.isFirstActivityInChannel;
                            var16 = var0.isStart;
                            var9 = var0.referrerId;
                            var8 = var0.customId;
                            var13 = var0.inviterUserId;
                            var4 = var0.proxyTicket;
                            var7 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.bind(var0)(var6);
                            var12 = _closure1_slot9;
                            var7 = var12.getSessionId;
                            var7 = var7.bind(var12)();
                            var14 = null;
                            if (!(var14 != var1)) {
                                _fun15759_ip = 715;
                                continue _fun15759
                            }
                        case 122:
                            if (!(var14 != var7)) {
                                _fun15759_ip = 715;
                                continue _fun15759
                            }
                        case 129:
                            var12 = _closure1_slot20;
                            var7 = var12.get;
                            var7 = var7.bind(var12)(var6);
                            var18 = var14 == var7;
                            var12 = undefined;
                            if (var18) {
                                _fun15759_ip = 162;
                                continue _fun15759
                            }
                        case 152:
                            var7 = var7.location;
                            var12 = var7.id;
                        case 162:
                            var7 = var2.id;
                            if (!(var12 !== var7)) {
                                _fun15759_ip = 711;
                                continue _fun15759
                            }
                        case 174:
                            var12 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var7 = 14;
                            var7 = var18[var7];
                            var12 = var12.bind(var0)(var7);
                            var7 = var12.getEmbeddedActivityLocationChannelId;
                            var7 = var7.bind(var12)(var2);
                            var18 = _closure1_slot10;
                            var12 = var18.getChannel;
                            var19 = var12.bind(var18)(var7);
                            var18 = var14 == var19;
                            var12 = undefined;
                            if (var18) {
                                _fun15759_ip = 238;
                                continue _fun15759
                            }
                        case 228:
                            var18 = var19.getGuildId;
                            var12 = var18.bind(var19)();
                        case 238:
                            var20 = _closure1_slot12;
                            var18 = var20.getCurrentUser;
                            var18 = var18.bind(var20)();
                            if (!(var14 != var18)) {
                                _fun15759_ip = 707;
                                continue _fun15759
                            }
                        case 258:
                            if (!(var14 == var12)) {
                                _fun15759_ip = 294;
                                continue _fun15759
                            }
                        case 262:
                            var18 = var14 == var19;
                            var12 = undefined;
                            if (var18) {
                                _fun15759_ip = 281;
                                continue _fun15759
                            }
                        case 271:
                            var18 = var19.isPrivate;
                            var12 = var18.bind(var19)();
                        case 281:
                            if (!(var14 != var12)) {
                                _fun15759_ip = 703;
                                continue _fun15759
                            }
                        case 288:
                            if (!var12) {
                                _fun15759_ip = 703;
                                continue _fun15759
                            }
                        case 294:
                            _closure1_slot34 = var2;
                            var14 = var15.map;
                            var12 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var0 = var0.userId;
                                return var0;
                            };
                            var22 = var14.bind(var15)(var12);
                            var14 = {};
                            var14.applicationId = var6;
                            var14.url = var1;
                            var1 = global;
                            var12 = var1.Set;
                            var18 = var12.prototype;
                            var18 = Object.create(var18, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var23 = var18;
                            var12 = new var23[var12](var22, var21);
                            var12 = var12 instanceof Object ? var12 : var18;
                            var14.userIds = var12;
                            var14.participants = var15;
                            var18 = var1.Date;
                            var12 = var18.now;
                            var12 = var12.bind(var18)();
                            var14.connectedSince = var12;
                            var14.launchId = var11;
                            var14.compositeInstanceId = var10;
                            var14.location = var2;
                            var14.referrerId = var9;
                            var14.customId = var8;
                            var14.proxyTicket = var4;
                            var8 = _closure1_slot20;
                            var4 = var8.set;
                            var4 = var4.bind(var8)(var6, var14);
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 16;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var12 = var4.ComponentDispatch;
                            var11 = var12.dispatch;
                            var4 = _closure1_slot15;
                            var10 = var4.OPEN_EMBEDDED_ACTIVITY;
                            var4 = {};
                            var4.location = var2;
                            var4.applicationId = var6;
                            var4.isFirstActivityInChannel = var17;
                            var4.isStart = var16;
                            var4.participants = var15;
                            var4.embeddedActivity = var14;
                            var4.inviterUserId = var13;
                            var4 = var11.bind(var12)(var10, var4);
                            var4 = 17;
                            var4 = var9[var4];
                            var8 = var8.bind(var0)(var4);
                            var4 = var8.shouldOpenActivityInPopoutWindow;
                            var4 = var4.bind(var8)();
                            if (var4) {
                                _fun15759_ip = 606;
                                continue _fun15759
                            }
                        case 532:
                            var8 = _closure1_slot11;
                            var4 = var8.getChannelId;
                            var4 = var4.bind(var8)();
                            if (!(var7 === var4)) {
                                _fun15759_ip = 590;
                                continue _fun15759
                            }
                        case 550:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 19;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.bind(var0)(var7);
                            if (var4) {
                                _fun15759_ip = 590;
                                continue _fun15759
                            }
                        case 578:
                            var4 = _closure1_slot13;
                            var4 = var4.PANEL;
                            _fun15759_ip = 600;
                            continue _fun15759;
                        case 590:
                            var7 = _closure1_slot13;
                            var4 = var7.PIP;
                        case 600:
                            _closure1_slot35 = var4;
                            _fun15759_ip = 656;
                            continue _fun15759;
                        case 606:
                            var4 = _closure1_slot13;
                            var4 = var4.ACTIVITY_POPOUT_WINDOW;
                            _closure1_slot35 = var4;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 18;
                            var4 = var8[var4];
                            var7 = var7.bind(var0)(var4);
                            var4 = var7.wait;
                            var3 = function() { // Environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 18;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
                                var1.type = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3 = var4.bind(var7)(var3);
                        case 656:
                            var4 = _closure1_slot33;
                            var3 = var4.set;
                            var5 = _closure1_slot48;
                            var2 = var2.id;
                            var2 = var5.bind(var0)(var2, var6);
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        case 703:
                            var0 = false;
                            return var0;
                        case 707:
                            var0 = false;
                            return var0;
                        case 711:
                            var0 = false;
                            return var0;
                        case 715:
                            var0 = false;
                            return var0;
                    }
                };
                var4 = var4.bind(var0)(var6);
            case 849:
                var6 = _closure1_slot47;
                var4 = {};
                var14 = var9 != var7;
                var11 = null;
                if (!var14) {
                    _fun15752_ip = 867;
                    continue _fun15752
                }
            case 864:
                var11 = var7;
            case 867:
                var4.channelId = var11;
                var4.applicationId = var10;
                var4 = var6.bind(var0)(var4);
            case 880:
                var6 = var8.filter;
                var4 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var11 = var6.bind(var8)(var4);
                var4 = var2.length;
                var8 = 0;
                if (!(var4 > var8)) {
                    _fun15752_ip = 916;
                    continue _fun15752
                }
            case 906:
                var4 = var11.push;
                var4 = var4.bind(var11)(var5);
            case 916:
                var10 = _closure1_slot24;
                var6 = var10.set;
                var4 = var12.id;
                var4 = var6.bind(var10)(var4, var11);
                if (!(var9 != var7)) {
                    _fun15752_ip = 1113;
                    continue _fun15752
                }
            case 943:
                var6 = _closure1_slot22;
                var4 = var6.get;
                var10 = var4.bind(var6)(var7);
                if (!(var9 == var10)) {
                    _fun15752_ip = 965;
                    continue _fun15752
                }
            case 961:
                var10 = new Array(0);
            case 965:
                var6 = var10.filter;
                var4 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = var6.bind(var10)(var4);
                var10 = _closure1_slot43;
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var13];
                var11 = var11.bind(var0)(var4);
                var4 = var11.getEmbeddedActivityLocationGuildId;
                var4 = var4.bind(var11)(var12);
                var4 = var10.bind(var0)(var4);
                var11 = _closure1_slot21;
                var10 = var11.get;
                var10 = var10.bind(var11)(var4);
                if (!(var9 == var10)) {
                    _fun15752_ip = 1039;
                    continue _fun15752
                }
            case 1035:
                var10 = new Array(0);
            case 1039:
                var9 = var10.filter;
                var3 = function(arg0) { // Environment: var3
                    _fun15764: for (var _fun15764_ip = 0;;) switch (_fun15764_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.applicationId;
                            var0 = _closure2_slot1;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun15764_ip = 45;
                                continue _fun15764
                            }
                        case 22:
                            var2 = var2.location;
                            var2 = var2.id;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2 === var1;
                        case 45:
                            var0 = !var0;
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var3);
                var2 = var2.length;
                if (!(var2 > var8)) {
                    _fun15752_ip = 1083;
                    continue _fun15752
                }
            case 1063:
                var2 = var6.push;
                var2 = var2.bind(var6)(var5);
                var2 = var3.push;
                var2 = var2.bind(var3)(var5);
            case 1083:
                var5 = _closure1_slot22;
                var2 = var5.set;
                var2 = var2.bind(var5)(var7, var6);
                var2 = _closure1_slot21;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
            case 1113:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0) { // Original name: updateEmbeddedActivitiesForGuild, environment: var6
        _fun15765: for (var _fun15765_ip = 0;;) switch (_fun15765_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.activity_instances;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun15765_ip = 32;
                    continue _fun15765
                }
            case 15:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var6 = var1.location;
                    var5 = var1.application_id;
                    var3 = var1.launch_id;
                    var0 = var1.composite_instance_id;
                    var4 = var1.participants;
                    var2 = _closure1_slot44;
                    var1 = {};
                    var1.location = var6;
                    var1.applicationId = var5;
                    var1.launchId = var3;
                    var1.compositeInstanceId = var0;
                    var3 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.user_id;
                        var0.userId = var2;
                        var2 = var1.session_id;
                        var0.sessionId = var2;
                        var1 = var1.nonce;
                        var0.nonce = var1;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var1.participants = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0) { // Original name: disconnectEmbeddedActivity, environment: var6
        var3 = _closure1_slot20;
        var2 = var3.delete;
        var0 = arg0;
        var0 = var0.applicationId;
        var0 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.ComponentDispatch;
        var2 = var3.dispatch;
        var1 = _closure1_slot15;
        var1 = var1.RELEASE_ACTIVITY_WEB_VIEW;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0) { // Original name: handleEmbeddedActivityLaunchEnd, environment: var6
        var0 = arg0;
        var5 = var0.applicationId;
        var4 = var0.channelId;
        var3 = _closure1_slot25;
        var2 = var3.delete;
        var1 = _closure1_slot42;
        var0 = undefined;
        var1 = var1.bind(var0)(var4, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function(arg0, arg1) { // Original name: getActivityKey, environment: var6
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot48 = var0;
    var12 = global;
    var4 = var12.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var5 = var1.ActivityPopoutWindowLayouts;
    var1 = 11;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var11 = var1.ActivityPanelModes;
    var _closure1_slot13 = var11;
    var10 = var1.FocusedActivityLayouts;
    var _closure1_slot14 = var10;
    var1 = 12;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.ComponentActions;
    var _closure1_slot15 = var3;
    var1 = var1.PopoutWindowKeys;
    var _closure1_slot16 = var1;
    var4 = var12.Set;
    var1 = var4.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var17 = new Array(0);
    var18 = var3;
    var1 = new var18[var4](var17, var16);
    var4 = var1 instanceof Object ? var1 : var3;
    var1 = {};
    var3 = var12.Set;
    var13 = var3.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var3
        }
    });
    var18 = var13;
    var3 = new var18[var3](var17);
    var3 = var3 instanceof Object ? var3 : var13;
    var1.everLaunchedActivities = var3;
    var3 = {};
    var1.seenNewActivities = var3;
    var3 = {};
    var1.seenUpdatedActivities = var3;
    var3 = null;
    var1.lastCheckedForBadgeableActivities = var3;
    var3 = {};
    var1.dateRangesForSurfaces = var3;
    var _closure1_slot17 = var1;
    var3 = new Array(0);
    var _closure1_slot18 = var3;
    var1 = new Array(0);
    var _closure1_slot19 = var1;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot20 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot21 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot22 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot23 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot24 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot25 = var13;
    var13 = var12.Set;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot26 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot27 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot28 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot29 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot30 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot31 = var13;
    var13 = var12.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var18 = var14;
    var13 = new var18[var13](var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot32 = var13;
    var12 = var12.Map;
    var13 = var12.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var12
        }
    });
    var18 = var13;
    var12 = new var18[var12](var17);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot33 = var12;
    var _closure1_slot34 = var0;
    var11 = var11.DISCONNECTED;
    var _closure1_slot35 = var11;
    var10 = var10.RESIZABLE;
    var _closure1_slot36 = var10;
    var5 = var5.NORMAL;
    var _closure1_slot37 = var5;
    var5 = 24;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var10 = var5.PersistedStore;
    var5 = function(arg0) { // Environment: var6
        var3 = function() { // Original name: EmbeddedActivitiesStoreClass, environment: var5
            _fun15772: for (var _fun15772_ip = 0;;) switch (_fun15772_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot41;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun15772_ip = 69;
                        continue _fun15772
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15772_ip = 105;
                    continue _fun15772;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: initialize, environment: var5
            _fun15773: for (var _fun15773_ip = 0;;) switch (_fun15773_ip) {
                case 0:
                    var3 = arg0;
                    var7 = this;
                    var6 = var7.waitFor;
                    var11 = _closure1_slot9;
                    var10 = _closure1_slot10;
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot12;
                    var12 = var7;
                    var0 = var12[var6](var11, var10, var9, var8, var7);
                    var0 = global;
                    var6 = var0.Set;
                    var1 = null;
                    var5 = var1 == var3;
                    var0 = undefined;
                    var4 = undefined;
                    if (var5) {
                        _fun15773_ip = 65;
                        continue _fun15773
                    }
                case 59:
                    var4 = var3.everLaunchedActivities;
                case 65:
                    if (!(var1 == var4)) {
                        _fun15773_ip = 73;
                        continue _fun15773
                    }
                case 69:
                    var4 = new Array(0);
                case 73:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var5;
                    var11 = var4;
                    var4 = new var12[var6](var11, var10);
                    var4 = var4 instanceof Object ? var4 : var5;
                    if (!(var1 != var3)) {
                        _fun15773_ip = 125;
                        continue _fun15773
                    }
                case 100:
                    var1 = {};
                    var11 = var1;
                    var10 = var3;
                    var3 = copyDataProperties(var11, var10);
                    var3 = 'everLaunchedActivities';
                    var1[var3] = var4;
                    _closure1_slot17 = var1;
                case 125:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(30);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: getState, environment: var5
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSelfEmbeddedActivityForChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getSelfEmbeddedActivityForChannel, environment: var5
            _fun15775: for (var _fun15775_ip = 0;;) switch (_fun15775_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var1 = null;
                    var3 = var1 == var0;
                    var0 = null;
                    if (var3) {
                        _fun15775_ip = 84;
                        continue _fun15775
                    }
                case 20:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot20;
                    var3 = var6.values;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getEmbeddedActivityLocationChannelId;
                        var0 = arg0;
                        var0 = var0.location;
                        var1 = var1.bind(var2)(var0);
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun15775_ip = 81;
                        continue _fun15775
                    }
                case 78:
                    var1 = var2;
                case 81:
                    var0 = var1;
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSelfEmbeddedActivityForLocation';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getSelfEmbeddedActivityForLocation, environment: var5
            _fun15777: for (var _fun15777_ip = 0;;) switch (_fun15777_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var1 = null;
                    var3 = var1 == var0;
                    var0 = null;
                    if (var3) {
                        _fun15777_ip = 84;
                        continue _fun15777
                    }
                case 20:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot20;
                    var3 = var6.values;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.location;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var0.id;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun15777_ip = 81;
                        continue _fun15777
                    }
                case 78:
                    var1 = var2;
                case 81:
                    var0 = var1;
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSelfEmbeddedActivities';
        var4.key = var6;
        var6 = function() { // Original name: getSelfEmbeddedActivities, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivitiesForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getEmbeddedActivitiesForGuild, environment: var5
            _fun15780: for (var _fun15780_ip = 0;;) switch (_fun15780_ip) {
                case 0:
                    var3 = _closure1_slot21;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15780_ip = 30;
                        continue _fun15780
                    }
                case 26:
                    var0 = _closure1_slot18;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivitiesForChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getEmbeddedActivitiesForChannel, environment: var5
            _fun15781: for (var _fun15781_ip = 0;;) switch (_fun15781_ip) {
                case 0:
                    var3 = _closure1_slot22;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15781_ip = 30;
                        continue _fun15781
                    }
                case 26:
                    var0 = _closure1_slot18;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivitiesForLocation';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getEmbeddedActivitiesForLocation, environment: var5
            _fun15782: for (var _fun15782_ip = 0;;) switch (_fun15782_ip) {
                case 0:
                    var3 = _closure1_slot24;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15782_ip = 35;
                        continue _fun15782
                    }
                case 31:
                    var0 = _closure1_slot18;
                case 35:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivitiesForStartingChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getEmbeddedActivitiesForStartingChannel, environment: var5
            _fun15783: for (var _fun15783_ip = 0;;) switch (_fun15783_ip) {
                case 0:
                    var3 = _closure1_slot23;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15783_ip = 30;
                        continue _fun15783
                    }
                case 26:
                    var0 = _closure1_slot18;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivitiesByChannel';
        var4.key = var6;
        var6 = function() { // Original name: getEmbeddedActivitiesByChannel, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivityDurationMs';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: getEmbeddedActivityDurationMs, environment: var5
            _fun15785: for (var _fun15785_ip = 0;;) switch (_fun15785_ip) {
                case 0:
                    var2 = _closure1_slot33;
                    var1 = var2.get;
                    var5 = _closure1_slot48;
                    var4 = undefined;
                    var3 = arg0;
                    var0 = arg1;
                    var0 = var5.bind(var4)(var3, var0);
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun15785_ip = 65;
                        continue _fun15785
                    }
                case 44:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var0 = var1 - var2;
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isLaunchingActivity';
        var4.key = var6;
        var6 = function() { // Original name: isLaunchingActivity, environment: var5
            var0 = _closure1_slot25;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getShelfActivities';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getShelfActivities, environment: var5
            _fun15787: for (var _fun15787_ip = 0;;) switch (_fun15787_ip) {
                case 0:
                    var3 = _closure1_slot43;
                    var2 = undefined;
                    var0 = arg0;
                    var3 = var3.bind(var2)(var0);
                    var2 = _closure1_slot27;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15787_ip = 41;
                        continue _fun15787
                    }
                case 37:
                    var0 = _closure1_slot19;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getShelfFetchStatus';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getShelfFetchStatus, environment: var5
            var3 = _closure1_slot43;
            var2 = undefined;
            var1 = arg0;
            var2 = var3.bind(var2)(var1);
            var1 = _closure1_slot28;
            var0 = var1.get;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'shouldFetchShelf';
        var4.key = var6;
        var6 = function(arg0) { // Original name: shouldFetchShelf, environment: var5
            _fun15789: for (var _fun15789_ip = 0;;) switch (_fun15789_ip) {
                case 0:
                    var2 = _closure1_slot43;
                    var4 = undefined;
                    var1 = arg0;
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure1_slot28;
                    var0 = var1.get;
                    var2 = var0.bind(var1)(var2);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun15789_ip = 49;
                        continue _fun15789
                    }
                case 37:
                    var1 = {};
                    var3 = false;
                    var1.isFetching = var3;
                    var2 = var1;
                case 49:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = var0 == var2;
                    var4 = undefined;
                    if (var1) {
                        _fun15789_ip = 81;
                        continue _fun15789
                    }
                case 75:
                    var4 = var2.lastFetchTimestampMs;
                case 81:
                    var5 = var0 != var4;
                    var1 = 0;
                    if (!var5) {
                        _fun15789_ip = 93;
                        continue _fun15789
                    }
                case 90:
                    var1 = var4;
                case 93:
                    var3 = var3 - var1;
                    var1 = 21600000;
                    var1 = var3 > var1;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun15789_ip = 120;
                        continue _fun15789
                    }
                case 114:
                    var0 = var2.isFetching;
                case 120:
                    var0 = !var0;
                    if (!var0) {
                        _fun15789_ip = 129;
                        continue _fun15789
                    }
                case 126:
                    var0 = var1;
                case 129:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getOrientationLockStateForApp';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getOrientationLockStateForApp, environment: var5
            var2 = _closure1_slot29;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getPipOrientationLockStateForApp';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getPipOrientationLockStateForApp, environment: var5
            _fun15791: for (var _fun15791_ip = 0;;) switch (_fun15791_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = _closure1_slot30;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var3);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15791_ip = 40;
                        continue _fun15791
                    }
                case 29:
                    var1 = var2.getOrientationLockStateForApp;
                    var0 = var1.bind(var2)(var3);
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getGridOrientationLockStateForApp';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getGridOrientationLockStateForApp, environment: var5
            _fun15792: for (var _fun15792_ip = 0;;) switch (_fun15792_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = _closure1_slot31;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var3);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15792_ip = 43;
                        continue _fun15792
                    }
                case 29:
                    var5 = _closure1_slot30;
                    var4 = var5.get;
                    var0 = var4.bind(var5)(var3);
                case 43:
                    if (!(var1 == var0)) {
                        _fun15792_ip = 58;
                        continue _fun15792
                    }
                case 47:
                    var1 = var2.getOrientationLockStateForApp;
                    var0 = var1.bind(var2)(var3);
                case 58:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getLayoutModeForApp';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getLayoutModeForApp, environment: var5
            var2 = _closure1_slot32;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getConnectedActivityChannelId';
        var4.key = var6;
        var6 = function() { // Original name: getConnectedActivityChannelId, environment: var5
            _fun15794: for (var _fun15794_ip = 0;;) switch (_fun15794_ip) {
                case 0:
                    var2 = _closure1_slot34;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun15794_ip = 17;
                        continue _fun15794
                    }
                case 13:
                    var1 = undefined;
                    return var1;
                case 17:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getEmbeddedActivityLocationChannelId;
                    var0 = _closure1_slot34;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getConnectedActivityLocation';
        var4.key = var6;
        var6 = function() { // Original name: getConnectedActivityLocation, environment: var5
            var0 = _closure1_slot34;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getActivityPanelMode';
        var4.key = var6;
        var6 = function() { // Original name: getActivityPanelMode, environment: var5
            var0 = _closure1_slot35;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getFocusedLayout';
        var4.key = var6;
        var6 = function() { // Original name: getFocusedLayout, environment: var5
            var0 = _closure1_slot36;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getCurrentEmbeddedActivity';
        var4.key = var6;
        var6 = function() { // Original name: getCurrentEmbeddedActivity, environment: var5
            _fun15798: for (var _fun15798_ip = 0;;) switch (_fun15798_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getConnectedActivityLocation;
                    var1 = var0.bind(var2)();
                    var0 = var2.getSelfEmbeddedActivityForLocation;
                    var1 = var0.bind(var2)(var1);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun15798_ip = 38;
                        continue _fun15798
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'isProxyTicketRefreshing';
        var4.key = var6;
        var6 = function(arg0) { // Original name: isProxyTicketRefreshing, environment: var5
            var2 = _closure1_slot26;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getEmbeddedActivityForUserId';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: getEmbeddedActivityForUserId, environment: var5
            _fun15800: for (var _fun15800_ip = 0;;) switch (_fun15800_ip) {
                case 0:
                    var11 = arg0;
                    var10 = arg1;
                    var9 = undefined;
                    if (!(var9 === var10)) {
                        _fun15800_ip = 14;
                        continue _fun15800
                    }
                case 12:
                    return var9;
                case 14:
                    var1 = _closure1_slot39;
                    var0 = _closure1_slot24;
                    var7 = var1.bind(var9)(var0);
                    var0 = var7.bind(var9)();
                    var1 = var0.done;
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = var0;
                    var2 = undefined;
                    var0 = undefined;
                    if (var1) {
                        _fun15800_ip = 172;
                        continue _fun15800
                    }
                case 57:
                    var12 = var3.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var9)(var12, var6);
                    var12 = var1[var5];
                    var12 = _closure1_slot39;
                    var1 = var1[var4];
                    var13 = var12.bind(var9)(var1);
                    var12 = var13.bind(var9)();
                    var1 = var12.done;
                    if (var1) {
                        _fun15800_ip = 155;
                        continue _fun15800
                    }
                case 101:
                    var14 = var12.value;
                    var1 = var14.applicationId;
                    if (!(var1 === var10)) {
                        _fun15800_ip = 137;
                        continue _fun15800
                    }
                case 115:
                    var15 = var14.userIds;
                    var1 = var15.has;
                    var1 = var1.bind(var15)(var11);
                    var0 = var14;
                    if (var1) {
                        _fun15800_ip = 172;
                        continue _fun15800
                    }
                case 137:
                    var15 = var13.bind(var9)();
                    var1 = var15.done;
                    var12 = var15;
                    var2 = var14;
                    if (!var1) {
                        _fun15800_ip = 101;
                        continue _fun15800
                    }
                case 155:
                    var12 = var7.bind(var9)();
                    var1 = var12.done;
                    var3 = var12;
                    var0 = undefined;
                    if (!var1) {
                        _fun15800_ip = 57;
                        continue _fun15800
                    }
                case 172:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'hasActivityEverBeenLaunched';
        var4.key = var6;
        var6 = function(arg0) { // Original name: hasActivityEverBeenLaunched, environment: var5
            var0 = _closure1_slot17;
            var2 = var0.everLaunchedActivities;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getLaunchState';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: getLaunchState, environment: var5
            _fun15802: for (var _fun15802_ip = 0;;) switch (_fun15802_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun15802_ip = 16;
                        continue _fun15802
                    }
                case 12:
                    var1 = undefined;
                    return var1;
                case 16:
                    var2 = _closure1_slot25;
                    var1 = var2.get;
                    var3 = _closure1_slot42;
                    var6 = var4 != var0;
                    var4 = null;
                    if (!var6) {
                        _fun15802_ip = 44;
                        continue _fun15802
                    }
                case 41:
                    var4 = var0;
                case 44:
                    var0 = undefined;
                    var0 = var3.bind(var0)(var4, var5);
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'getLaunchStates';
        var4.key = var6;
        var6 = function() { // Original name: getLaunchStates, environment: var5
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'getActivityPopoutWindowLayout';
        var4.key = var6;
        var5 = function() { // Original name: getActivityPopoutWindowLayout, environment: var5
            var0 = _closure1_slot37;
            return var0;
        };
        var4.value = var5;
        var0[29] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var11 = var5.bind(var0)(var10);
    var5 = 'EmbeddedActivitiesStore';
    var11.displayName = var5;
    var5 = 'EmbeddedActivities';
    var11.persistKey = var5;
    var5 = new Array(10);
    var10 = function(arg0) { // Environment: var6
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = new Array(0);
        var1 = 'seenFeaturedActivities';
        var0[var1] = var2;
        var2 = false;
        var1 = 'shouldShowNewActivityIndicator';
        var0[var1] = var2;
        return var0;
    };
    var5[0] = var10;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = delete var1.seenFeaturedActivities;
        var0 = {};
        var3 = var0;
        var2 = var1;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var5[1] = var10;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = delete var1.seenActivities;
        var0 = {};
        var3 = var0;
        var2 = var1;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var5[2] = var10;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = delete var1.currentFreeActivity;
        var0 = delete var1.lastFreeActivityRotationTimestampMs;
        var0 = delete var1.freePeriodActivities;
        var0 = delete var1.shouldShowFreeActivityIndicator;
        var0 = {};
        var3 = var0;
        var2 = var1;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var5[3] = var10;
    var10 = function(arg0) { // Environment: var6
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = {};
        var1 = 'seenNewActivities';
        var0[var1] = var2;
        var2 = {};
        var1 = 'seenUpdatedActivities';
        var0[var1] = var2;
        return var0;
    };
    var5[4] = var10;
    var10 = function(arg0) { // Environment: var6
        _fun15810: for (var _fun15810_ip = 0;;) switch (_fun15810_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var3 = var0.Set;
                var0 = var1.everLaunchedActivities;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun15810_ip = 27;
                    continue _fun15810
                }
            case 23:
                var0 = new Array(0);
            case 27:
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var5 = var0;
                var0 = new var6[var3](var5, var4);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var1 = copyDataProperties(var5, var4);
                var1 = 'everLaunchedActivities';
                var0[var1] = var2;
                return var0;
        }
    };
    var5[5] = var10;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = delete var1.usersHavePlayedByApp;
        var0 = {};
        var3 = var0;
        var2 = var1;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var5[6] = var10;
    var10 = function(arg0) { // Environment: var6
        _fun15812: for (var _fun15812_ip = 0;;) switch (_fun15812_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var0 = var0.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var2;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var2;
                var1.surfacesToShowNewActivityIndicator = var0;
                var0 = var1.shouldShowNewActivityIndicator;
                if (!var0) {
                    _fun15812_ip = 99;
                    continue _fun15812
                }
            case 46:
                var3 = var1.surfacesToShowNewActivityIndicator;
                var2 = var3.add;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 22;
                var4 = var4[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var4);
                var0 = var0.EmbeddedActivitySurfaces;
                var0 = var0.VOICE_LAUNCHER;
                var0 = var2.bind(var3)(var0);
            case 99:
                var0 = delete var1.shouldShowNewActivityIndicator;
                var0 = {};
                var7 = var0;
                var6 = var1;
                var1 = copyDataProperties(var7, var6);
                return var0;
        }
    };
    var5[7] = var10;
    var10 = function(arg0) { // Environment: var6
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = null;
        var1 = 'lastCheckedForBadgeableActivities';
        var0[var1] = var2;
        return var0;
    };
    var5[8] = var10;
    var10 = function(arg0) { // Environment: var6
        var1 = arg0;
        var0 = delete var1.surfacesToShowNewActivityIndicator;
        var0 = {};
        var4 = var0;
        var3 = var1;
        var1 = copyDataProperties(var4, var3);
        var2 = {};
        var1 = 'dateRangesForSurfaces';
        var0[var1] = var2;
        return var0;
    };
    var5[9] = var10;
    var11.migrations = var5;
    var5 = 18;
    var5 = var8[var5];
    var17 = var9.bind(var0)(var5);
    var5 = {};
    var9 = function(arg0) { // Original name: handleActivityLayoutModeUpdate, environment: var6
        var0 = arg0;
        var3 = var0.applicationId;
        var2 = var0.layoutMode;
        var1 = _closure1_slot32;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var5.ACTIVITY_LAYOUT_MODE_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleConnectionOpen, environment: var6
        _fun15816: for (var _fun15816_ip = 0;;) switch (_fun15816_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guilds;
                var3 = _closure1_slot22;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot21;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot24;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot23;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot45;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot9;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var _closure2_slot0 = var2;
                var4 = function(arg0) { // Original name: _loop, environment: var1
                    _fun15818: for (var _fun15818_ip = 0;;) switch (_fun15818_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var5 = _closure1_slot38;
                            var4 = var5.getEmbeddedActivitiesForLocation;
                            var3 = var2.location;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.some;
                            var1 = function(arg0) { // Environment: var1
                                _fun15819: for (var _fun15819_ip = 0;;) switch (_fun15819_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = var1.applicationId;
                                        var0 = _closure3_slot0;
                                        var0 = var0.applicationId;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun15819_ip = 47;
                                            continue _fun15819
                                        }
                                    case 27:
                                        var3 = var1.launchId;
                                        var2 = _closure3_slot0;
                                        var2 = var2.launchId;
                                        var0 = var3 === var2;
                                    case 47:
                                        if (!var0) {
                                            _fun15819_ip = 73;
                                            continue _fun15819
                                        }
                                    case 50:
                                        var3 = var1.userIds;
                                        var2 = var3.has;
                                        var1 = _closure2_slot0;
                                        var0 = var2.bind(var3)(var1);
                                    case 73:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun15818_ip = 62;
                                continue _fun15818
                            }
                        case 51:
                            var1 = _closure1_slot46;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = global;
                var2 = var1.Array;
                var1 = var2.from;
                var3 = _closure1_slot20;
                var0 = var3.values;
                var0 = var0.bind(var3)();
                var3 = var1.bind(var2)(var0);
                var0 = var3.length;
                var2 = 0;
                var1 = var2 < var0;
                var0 = undefined;
                if (!var1) {
                    _fun15816_ip = 176;
                    continue _fun15816
                }
            case 155:
                var1 = var3[var2];
                var1 = var4.bind(var0)(var1);
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun15816_ip = 155;
                    continue _fun15816
                }
            case 176:
                return var0;
        }
    };
    var5.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var9 = function(arg0) { // Original name: handleGuildCreate, environment: var6
        var0 = arg0;
        var2 = var0.guild;
        var1 = _closure1_slot45;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var5.GUILD_CREATE = var9;
    var9 = function(arg0) { // Original name: handleChannelDelete, environment: var6
        _fun15821: for (var _fun15821_ip = 0;;) switch (_fun15821_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot22;
                var4 = var5.get;
                var0 = var1.id;
                var5 = var4.bind(var5)(var0);
                var4 = null;
                if (!(var4 == var5)) {
                    _fun15821_ip = 46;
                    continue _fun15821
                }
            case 42:
                var5 = new Array(0);
            case 46:
                var8 = _closure1_slot22;
                var7 = var8.set;
                var6 = var1.id;
                var0 = new Array(0);
                var0 = var7.bind(var8)(var6, var0);
                var7 = _closure1_slot43;
                var6 = var1.guild_id;
                var0 = undefined;
                var8 = var7.bind(var0)(var6);
                var7 = _closure1_slot21;
                var6 = var7.get;
                var7 = var6.bind(var7)(var8);
                if (!(var4 == var7)) {
                    _fun15821_ip = 108;
                    continue _fun15821
                }
            case 104:
                var7 = new Array(0);
            case 108:
                var6 = var7.filter;
                var4 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getEmbeddedActivityLocationChannelId;
                    var0 = arg0;
                    var0 = var0.location;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var7 = var6.bind(var7)(var4);
                var6 = _closure1_slot21;
                var4 = var6.set;
                var4 = var4.bind(var6)(var8, var7);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot24;
                    var1 = var2.delete;
                    var0 = arg0;
                    var0 = var0.location;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot23;
                var3 = var4.set;
                var2 = var1.id;
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var5.CHANNEL_DELETE = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityLaunchStart, environment: var6
        _fun15824: for (var _fun15824_ip = 0;;) switch (_fun15824_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.applicationId;
                var9 = var0.componentId;
                var3 = var0.commandOrigin;
                var7 = var0.launchParams;
                var4 = var0.channelId;
                var8 = var0.inviterUserId;
                var6 = _closure1_slot25;
                var5 = var6.set;
                var1 = _closure1_slot42;
                var0 = undefined;
                var4 = var1.bind(var0)(var4, var10);
                var1 = {};
                var10 = true;
                var1.isLaunching = var10;
                var1.componentId = var9;
                var1.inviterUserId = var8;
                var1.launchParams = var7;
                var1 = var5.bind(var6)(var4, var1);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 23;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                if (!(var3 !== var1)) {
                    _fun15824_ip = 139;
                    continue _fun15824
                }
            case 127:
                var1 = _closure1_slot14;
                var1 = var1.RESIZABLE;
                _fun15824_ip = 149;
                continue _fun15824;
            case 139:
                var3 = _closure1_slot14;
                var1 = var3.NO_CHAT;
            case 149:
                _closure1_slot36 = var1;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_LAUNCH_START = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityLaunchSetProxyTicket, environment: var6
        _fun15825: for (var _fun15825_ip = 0;;) switch (_fun15825_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.applicationId;
                var3 = var0.channelId;
                var6 = var0.proxyTicket;
                var2 = _closure1_slot42;
                var0 = undefined;
                var4 = var2.bind(var0)(var3, var4);
                var3 = _closure1_slot25;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun15825_ip = 90;
                    continue _fun15825
                }
            case 54:
                var3 = _closure1_slot25;
                var2 = var3.set;
                var1 = {};
                var8 = var1;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = 'proxyTicket';
                var1[var5] = var6;
                var1 = var2.bind(var3)(var4, var1);
            case 90:
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityUpdateConnectedProxyTicket, environment: var6
        _fun15826: for (var _fun15826_ip = 0;;) switch (_fun15826_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var5 = var0.proxyTicket;
                var2 = _closure1_slot20;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun15826_ip = 77;
                    continue _fun15826
                }
            case 37:
                var2 = _closure1_slot20;
                var1 = var2.set;
                var0 = {};
                var7 = var0;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var4 = 'proxyTicket';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivitySetProxyTicketRefreshing, environment: var6
        _fun15827: for (var _fun15827_ip = 0;;) switch (_fun15827_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var0 = var0.refreshing;
                var1 = _closure1_slot26;
                if (var0) {
                    _fun15827_ip = 36;
                    continue _fun15827
                }
            case 24:
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                _fun15827_ip = 46;
                continue _fun15827;
            case 36:
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityLaunchSuccess, environment: var6
        var0 = arg0;
        var2 = var0.applicationId;
        var0 = _closure1_slot17;
        var1 = var0.everLaunchedActivities;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_LAUNCH_SUCCESS = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityLaunchFail, environment: var6
        var0 = arg0;
        var3 = var0.applicationId;
        var0 = var0.channelId;
        var4 = _closure1_slot47;
        var2 = {};
        var2.applicationId = var3;
        var2.channelId = var0;
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot26;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_LAUNCH_FAIL = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityLaunchCancel, environment: var6
        var0 = arg0;
        var3 = var0.applicationId;
        var0 = var0.channelId;
        var4 = _closure1_slot47;
        var2 = {};
        var2.applicationId = var3;
        var2.channelId = var0;
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot26;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_LAUNCH_CANCEL = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityClose, environment: var6
        _fun15831: for (var _fun15831_ip = 0;;) switch (_fun15831_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var2 = _closure1_slot20;
                var0 = var2.get;
                var4 = var0.bind(var2)(var3);
                var2 = _closure1_slot20;
                var0 = var2.delete;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                var5 = var2 == var4;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun15831_ip = 62;
                    continue _fun15831
                }
            case 52:
                var4 = var4.location;
                var3 = var4.id;
            case 62:
                var4 = _closure1_slot34;
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun15831_ip = 80;
                    continue _fun15831
                }
            case 75:
                var2 = var4.id;
            case 80:
                if (!(var3 === var2)) {
                    _fun15831_ip = 88;
                    continue _fun15831
                }
            case 84:
                _closure1_slot34 = var0;
            case 88:
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_CLOSE = var9;
    var9 = function(arg0) { // Original name: handleUpdatePopoutWindowLayout, environment: var6
        var0 = arg0;
        var1 = var0.layout;
        _closure1_slot37 = var1;
        var0 = undefined;
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityUpdateV2, environment: var6
        _fun15833: for (var _fun15833_ip = 0;;) switch (_fun15833_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.applicationId;
                var6 = var0.launchId;
                var5 = var0.compositeInstanceId;
                var9 = var0.location;
                var7 = var0.participants;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var12 = var2.bind(var3)(var9);
                var10 = _closure1_slot25;
                var4 = var10.get;
                var11 = _closure1_slot42;
                var3 = null;
                var13 = var3 != var12;
                var2 = null;
                if (!var13) {
                    _fun15833_ip = 94;
                    continue _fun15833
                }
            case 91:
                var2 = var12;
            case 94:
                var2 = var11.bind(var0)(var2, var8);
                var4 = var4.bind(var10)(var2);
                var2 = _closure1_slot44;
                var1 = {};
                var1.location = var9;
                var1.applicationId = var8;
                var1.launchId = var6;
                var1.compositeInstanceId = var5;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.user_id;
                    var0.userId = var2;
                    var2 = var1.session_id;
                    var0.sessionId = var2;
                    var1 = var1.nonce;
                    var0.nonce = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.participants = var5;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun15833_ip = 166;
                    continue _fun15833
                }
            case 160:
                var3 = var4.proxyTicket;
            case 166:
                var1.proxyTicket = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_UPDATE_V2 = var9;
    var9 = function(arg0) { // Original name: handleLocalActivityUpdate, environment: var6
        _fun15835: for (var _fun15835_ip = 0;;) switch (_fun15835_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.activity;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun15835_ip = 96;
                    continue _fun15835
                }
            case 15:
                var4 = _closure1_slot20;
                var3 = var4.get;
                var5 = var2.application_id;
                var6 = var1 != var5;
                var2 = '';
                if (!var6) {
                    _fun15835_ip = 47;
                    continue _fun15835
                }
            case 44:
                var2 = var5;
            case 47:
                var4 = var3.bind(var4)(var2);
                if (!(var1 != var4)) {
                    _fun15835_ip = 92;
                    continue _fun15835
                }
            case 56:
                var3 = _closure1_slot20;
                var2 = var3.set;
                var1 = var4.applicationId;
                var0 = {};
                var8 = var0;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            case 92:
                var0 = false;
                return var0;
            case 96:
                var0 = false;
                return var0;
        }
    };
    var5.LOCAL_ACTIVITY_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleSetSelfEmbeddedActivityConfig, environment: var6
        _fun15836: for (var _fun15836_ip = 0;;) switch (_fun15836_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var5 = var0.config;
                var2 = _closure1_slot20;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun15836_ip = 77;
                    continue _fun15836
                }
            case 36:
                var3 = _closure1_slot20;
                var2 = var3.set;
                var1 = var4.applicationId;
                var0 = {};
                var7 = var0;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var4 = 'config';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 77:
                var0 = undefined;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_SET_CONFIG = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityFetchShelf, environment: var6
        _fun15837: for (var _fun15837_ip = 0;;) switch (_fun15837_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = _closure1_slot43;
                var0 = undefined;
                var5 = var2.bind(var0)(var3);
                var4 = _closure1_slot28;
                var2 = var4.get;
                var7 = var2.bind(var4)(var5);
                var3 = var4.set;
                var2 = {};
                var6 = true;
                var2.isFetching = var6;
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun15837_ip = 67;
                    continue _fun15837
                }
            case 61:
                var6 = var7.lastFetchTimestampMs;
            case 67:
                var2.lastFetchTimestampMs = var6;
                var2 = var3.bind(var4)(var5, var2);
                var2 = _closure1_slot17;
                var1 = global;
                var4 = var1.Date;
                var3 = var1.Date;
                var1 = var3.now;
                var10 = var1.bind(var3)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var1 = new var11[var4](var10, var9);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.toISOString;
                var1 = var1.bind(var3)();
                var2.lastCheckedForBadgeableActivities = var1;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_FETCH_SHELF = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityFetchShelfSuccess, environment: var6
        var0 = arg0;
        var4 = var0.guildId;
        var2 = var0.activities;
        var3 = _closure1_slot43;
        var0 = undefined;
        var4 = var3.bind(var0)(var4);
        var5 = _closure1_slot27;
        var3 = var5.set;
        var3 = var3.bind(var5)(var4, var2);
        var3 = global;
        var5 = var3.Date;
        var3 = var5.now;
        var5 = var3.bind(var5)();
        var3 = {};
        var3.activities = var2;
        var3.now = var5;
        var2 = function(arg0) { // Original name: handleShowingNewActivityIndicator, environment: var2
            var0 = arg0;
            var5 = var0.activities;
            var0 = var0.now;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 20;
            var3 = var7[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var6 = _closure1_slot0;
            var3 = 21;
            var3 = var7[var3];
            var6 = var6.bind(var0)(var3);
            var3 = var6.getOS;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var0)(var3);
            var _closure3_slot1 = var3;
            var4 = var5.reduce;
            var3 = function(arg0, arg1) { // Environment: var2
                _fun15840: for (var _fun15840_ip = 0;;) switch (_fun15840_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var2 = arg1;
                        var3 = var2.client_platform_config;
                        var2 = _closure3_slot1;
                        var3 = var3[var2];
                        var _closure4_slot1 = var3;
                        var2 = var3.label_from;
                        var5 = null;
                        if (!(var5 != var2)) {
                            _fun15840_ip = 280;
                            continue _fun15840
                        }
                    case 48:
                        var2 = var3.label_until;
                        if (!(var5 != var2)) {
                            _fun15840_ip = 280;
                            continue _fun15840
                        }
                    case 61:
                        var2 = {};
                        var5 = var3.label_from;
                        var2.fromDate = var5;
                        var5 = var3.label_until;
                        var2.untilDate = var5;
                        var _closure4_slot2 = var2;
                        var2 = global;
                        var7 = var2.Date;
                        var8 = var3.label_from;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = var6;
                        var5 = new var9[var7](var8, var7);
                        var6 = var5 instanceof Object ? var5 : var6;
                        var5 = var6.getTime;
                        var6 = var5.bind(var6)();
                        var _closure4_slot3 = var6;
                        var7 = var2.Date;
                        var8 = var3.label_until;
                        var5 = var7.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = var5;
                        var3 = new var9[var7](var8, var7);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = var5.getTime;
                        var5 = var3.bind(var5)();
                        var3 = _closure3_slot0;
                        var3 = var6 > var3;
                        if (var3) {
                            _fun15840_ip = 198;
                            continue _fun15840
                        }
                    case 190:
                        var4 = _closure3_slot0;
                        var3 = var5 < var4;
                    case 198:
                        if (var3) {
                            _fun15840_ip = 278;
                            continue _fun15840
                        }
                    case 201:
                        var4 = var2.Object;
                        var3 = var4.values;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 22;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.EmbeddedActivitySurfaces;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.filter;
                        var2 = function(arg0) { // Environment: var1
                            var0 = _closure4_slot1;
                            var2 = var0.omit_badge_from_surfaces;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun15842: for (var _fun15842_ip = 0;;) switch (_fun15842_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure4_slot0;
                                    var3 = var1[var2];
                                    var1 = null;
                                    var1 = var1 == var3;
                                    if (var1) {
                                        _fun15842_ip = 75;
                                        continue _fun15842
                                    }
                                case 23:
                                    var4 = global;
                                    var5 = var4.Date;
                                    var6 = var3.fromDate;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var7 = var4;
                                    var3 = new var7[var5](var6, var5);
                                    var4 = var3 instanceof Object ? var3 : var4;
                                    var3 = var4.getTime;
                                    var4 = var3.bind(var4)();
                                    var3 = _closure4_slot3;
                                    var1 = var4 < var3;
                                case 75:
                                    if (!var1) {
                                        _fun15842_ip = 90;
                                        continue _fun15842
                                    }
                                case 78:
                                    var1 = _closure4_slot0;
                                    var0 = _closure4_slot2;
                                    var1[var2] = var0;
                                case 90:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 278:
                        return var0;
                    case 280:
                        return var0;
                }
            };
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            var1 = _closure1_slot17;
            var1.dateRangesForSurfaces = var2;
            return var0;
        };
        var2 = var2.bind(var0)(var3);
        var3 = _closure1_slot28;
        var2 = var3.set;
        var1 = {};
        var6 = false;
        var1.isFetching = var6;
        var1.lastFetchTimestampMs = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS = var9;
    var9 = function(arg0) { // Original name: handleEmbeddedActivityFetchShelfFail, environment: var6
        _fun15843: for (var _fun15843_ip = 0;;) switch (_fun15843_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = _closure1_slot43;
                var0 = undefined;
                var4 = var2.bind(var0)(var3);
                var3 = _closure1_slot28;
                var1 = var3.get;
                var6 = var1.bind(var3)(var4);
                var2 = var3.set;
                var1 = {};
                var5 = false;
                var1.isFetching = var5;
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun15843_ip = 67;
                    continue _fun15843
                }
            case 61:
                var5 = var6.lastFetchTimestampMs;
            case 67:
                var1.lastFetchTimestampMs = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL = var9;
    var9 = function(arg0) { // Original name: handleOrientationLockState, environment: var6
        _fun15844: for (var _fun15844_ip = 0;;) switch (_fun15844_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var6 = var0.lockState;
                var5 = var0.pictureInPictureLockState;
                var3 = var0.gridLockState;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun15844_ip = 52;
                    continue _fun15844
                }
            case 32:
                var4 = _closure1_slot29;
                var1 = var4.set;
                var1 = var1.bind(var4)(var2, var6);
                _fun15844_ip = 69;
                continue _fun15844;
            case 52:
                var4 = _closure1_slot29;
                var1 = var4.delete;
                var1 = var1.bind(var4)(var2);
            case 69:
                if (!(var0 !== var5)) {
                    _fun15844_ip = 99;
                    continue _fun15844
                }
            case 73:
                var1 = undefined;
                if (!(var1 !== var5)) {
                    _fun15844_ip = 116;
                    continue _fun15844
                }
            case 79:
                var4 = _closure1_slot30;
                var1 = var4.set;
                var1 = var1.bind(var4)(var2, var5);
                _fun15844_ip = 116;
                continue _fun15844;
            case 99:
                var4 = _closure1_slot30;
                var1 = var4.delete;
                var1 = var1.bind(var4)(var2);
            case 116:
                if (!(var0 !== var3)) {
                    _fun15844_ip = 146;
                    continue _fun15844
                }
            case 120:
                var0 = undefined;
                if (!(var0 !== var3)) {
                    _fun15844_ip = 163;
                    continue _fun15844
                }
            case 126:
                var1 = _closure1_slot31;
                var0 = var1.set;
                var0 = var0.bind(var1)(var2, var3);
                _fun15844_ip = 163;
                continue _fun15844;
            case 146:
                var1 = _closure1_slot31;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 163:
                var0 = undefined;
                return var0;
        }
    };
    var5.EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE = var9;
    var9 = function(arg0) { // Original name: handleSetPanelMode, environment: var6
        var0 = arg0;
        var1 = var0.activityPanelMode;
        _closure1_slot35 = var1;
        var0 = undefined;
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_SET_PANEL_MODE = var9;
    var9 = function(arg0) { // Original name: handleSetFocusedLayout, environment: var6
        var0 = arg0;
        var1 = var0.focusedActivityLayout;
        _closure1_slot36 = var1;
        var0 = undefined;
        return var0;
    };
    var5.EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT = var9;
    var9 = function(arg0) { // Original name: handleChannelSelect, environment: var6
        _fun15847: for (var _fun15847_ip = 0;;) switch (_fun15847_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot34;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun15847_ip = 107;
                    continue _fun15847
                }
            case 21:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.getEmbeddedActivityLocationChannelId;
                var2 = _closure1_slot34;
                var2 = var4.bind(var5)(var2);
                var0 = var0 != var2;
                if (!var0) {
                    _fun15847_ip = 69;
                    continue _fun15847
                }
            case 65:
                var0 = var2 !== var3;
            case 69:
                if (!var0) {
                    _fun15847_ip = 90;
                    continue _fun15847
                }
            case 72:
                var3 = _closure1_slot35;
                var2 = _closure1_slot13;
                var2 = var2.PANEL;
                var0 = var3 === var2;
            case 90:
                if (!var0) {
                    _fun15847_ip = 107;
                    continue _fun15847
                }
            case 93:
                var0 = _closure1_slot13;
                var0 = var0.PIP;
                _closure1_slot35 = var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var5.CHANNEL_SELECT = var9;
    var9 = function(arg0) { // Original name: handlePopoutWindowClose, environment: var6
        _fun15848: for (var _fun15848_ip = 0;;) switch (_fun15848_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var0 = _closure1_slot16;
                var0 = var0.ACTIVITY_POPOUT;
                if (!(var2 === var0)) {
                    _fun15848_ip = 39;
                    continue _fun15848
                }
            case 25:
                var0 = _closure1_slot13;
                var0 = var0.PIP;
                _closure1_slot35 = var0;
            case 39:
                var0 = undefined;
                return var0;
        }
    };
    var5.POPOUT_WINDOW_CLOSE = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var18 = var9;
    var16 = var5;
    var5 = new var18[var11](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot38 = var5;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/EmbeddedActivitiesStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.FEATURED_ACTIVITY_IDS = var4;
    var2.NO_ACTIVITIES = var3;
    var2.NO_ACTIVITY_CONFIGS = var1;
    var1 = '0';
    var2.ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1216, 1372, 1661, 1613, 3416, 7877, 660, 7881, 3040, 12624, 1229, 7927, 806, 7919, 7913, 478, 1636, 4510, 566, 2]);