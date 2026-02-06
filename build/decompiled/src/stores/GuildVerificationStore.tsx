// stores/GuildVerificationStore.tsx
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
        _fun38739: for (var _fun38739_ip = 0;;) switch (_fun38739_ip) {
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
                _fun38739_ip = 74;
                continue _fun38739;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun38742: for (var _fun38742_ip = 0;;) switch (_fun38742_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38742_ip = 46;
                    continue _fun38742
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun38742_ip = 55;
                    continue _fun38742
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun38742_ip = 343;
                    continue _fun38742
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun38742_ip = 323;
                    continue _fun38742
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun38742_ip = 283;
                    continue _fun38742
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun38742_ip = 270;
                    continue _fun38742
                }
            case 110:
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
                    _fun38742_ip = 163;
                    continue _fun38742
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun38742_ip = 179;
                    continue _fun38742
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun38742_ip = 249;
                    continue _fun38742
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun38742_ip = 249;
                    continue _fun38742
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun38742_ip = 234;
                    continue _fun38742
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun38742_ip = 247;
                    continue _fun38742
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun38742_ip = 265;
                continue _fun38742;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun38742_ip = 283;
                continue _fun38742;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun38742_ip = 323;
                    continue _fun38742
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun38742_ip = 330;
                    continue _fun38742
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun38743: for (var _fun38743_ip = 0;;) switch (_fun38743_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun38743_ip = 56;
                                continue _fun38743
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
                            _fun38743_ip = 67;
                            continue _fun38743;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun38744: for (var _fun38744_ip = 0;;) switch (_fun38744_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun38744_ip = 23;
                    continue _fun38744
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun38744_ip = 33;
                    continue _fun38744
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
                    _fun38744_ip = 70;
                    continue _fun38744
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun38744_ip = 55;
                    continue _fun38744
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun38745: for (var _fun38745_ip = 0;;) switch (_fun38745_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot24;
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var5 = _closure1_slot18;
                var4 = var5.add;
                var4 = var4.bind(var5)(var3);
                var5 = _closure1_slot11;
                var4 = var5.getGuild;
                var4 = var4.bind(var5)(var3);
                var6 = _closure1_slot12;
                var5 = var6.getCurrentUser;
                var13 = var5.bind(var6)();
                var11 = null;
                if (!(var11 != var4)) {
                    _fun38745_ip = 1058;
                    continue _fun38745
                }
            case 73:
                var6 = var4.verificationLevel;
                var5 = _closure1_slot13;
                var5 = var5.NONE;
                if (!(var6 !== var5)) {
                    _fun38745_ip = 1058;
                    continue _fun38745
                }
            case 96:
                if (!(var11 != var13)) {
                    _fun38745_ip = 1058;
                    continue _fun38745
                }
            case 103:
                var5 = _closure1_slot8;
                var5 = var5.bind(var0)(var4, var13);
                if (var5) {
                    _fun38745_ip = 1058;
                    continue _fun38745
                }
            case 119:
                var5 = var13.isPhoneVerified;
                var5 = var5.bind(var13)();
                if (var5) {
                    _fun38745_ip = 1058;
                    continue _fun38745
                }
            case 135:
                var8 = _closure1_slot9;
                var7 = var8.getMember;
                var6 = var4.id;
                var5 = var13.id;
                var8 = var7.bind(var8)(var6, var5);
                if (!(var11 != var8)) {
                    _fun38745_ip = 482;
                    continue _fun38745
                }
            case 168:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 12;
                var5 = var7[var5];
                var10 = var6.bind(var0)(var5);
                var9 = var10.hasFlag;
                var5 = var8.flags;
                var12 = var11 != var5;
                var6 = 0;
                var7 = 0;
                if (!var12) {
                    _fun38745_ip = 213;
                    continue _fun38745
                }
            case 210:
                var7 = var5;
            case 213:
                var5 = _closure1_slot16;
                var5 = var5.BYPASSES_VERIFICATION;
                var5 = var9.bind(var10)(var7, var5);
                if (var5) {
                    _fun38745_ip = 1056;
                    continue _fun38745
                }
            case 235:
                var10 = global;
                var5 = var10.Set;
                var7 = var5.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var5
                    }
                });
                var22 = var7;
                var5 = new var22[var5](var21);
                var5 = var5 instanceof Object ? var5 : var7;
                var9 = _closure1_slot21;
                var7 = var8.roles;
                var12 = var9.bind(var0)(var7);
                var9 = var12.bind(var0)();
                var7 = var9.done;
                if (var7) {
                    _fun38745_ip = 357;
                    continue _fun38745
                }
            case 290:
                var14 = var9.value;
                var16 = _closure1_slot10;
                var15 = var16.getRole;
                var7 = var4.id;
                var15 = var15.bind(var16)(var7, var14);
                var7 = var11 == var15;
                if (var7) {
                    _fun38745_ip = 329;
                    continue _fun38745
                }
            case 323:
                var7 = var15.managed;
            case 329:
                if (var7) {
                    _fun38745_ip = 342;
                    continue _fun38745
                }
            case 332:
                var7 = var5.add;
                var7 = var7.bind(var5)(var14);
            case 342:
                var14 = var12.bind(var0)();
                var7 = var14.done;
                var9 = var14;
                if (!var7) {
                    _fun38745_ip = 290;
                    continue _fun38745
                }
            case 357:
                var12 = var10.Date;
                var7 = var12.prototype;
                var9 = Object.create(var7, {
                    constructor: {
                        value: var12
                    }
                });
                var21 = '2022-12-02 00:00:00';
                var22 = var9;
                var7 = new var22[var12](var21, var20);
                var9 = var7 instanceof Object ? var7 : var9;
                var7 = var8.joinedAt;
                var7 = var11 == var7;
                if (var7) {
                    _fun38745_ip = 438;
                    continue _fun38745
                }
            case 402:
                var11 = var10.Date;
                var21 = var8.joinedAt;
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var22 = var10;
                var8 = new var22[var11](var21, var20);
                var8 = var8 instanceof Object ? var8 : var10;
                var7 = var8 < var9;
            case 438:
                var10 = var4.features;
                var9 = var10.has;
                var8 = _closure1_slot15;
                var8 = var8.GUILD_ONBOARDING_EVER_ENABLED;
                var8 = var9.bind(var10)(var8);
                if (!var8) {
                    _fun38745_ip = 470;
                    continue _fun38745
                }
            case 467:
                if (!var7) {
                    _fun38745_ip = 482;
                    continue _fun38745
                }
            case 470:
                var5 = var5.size;
                if (!(!(var5 > var6))) {
                    _fun38745_ip = 1054;
                    continue _fun38745
                }
            case 482:
                var5 = var13.createdAt;
                var9 = var5 - 0;
                var5 = _closure1_slot14;
                var5 = var5.ACCOUNT_AGE;
                var7 = 60000;
                var6 = var7 * var5;
                var5 = global;
                var10 = var5.Date;
                var8 = var10.now;
                var8 = var8.bind(var10)();
                var6 = var9 + var6;
                var8 = var6 - var8;
                var6 = var4.joinedAt;
                var9 = var6 - 0;
                var6 = _closure1_slot14;
                var6 = var6.MEMBER_AGE;
                var6 = var7 * var6;
                var10 = var5.Date;
                var7 = var10.now;
                var7 = var7.bind(var10)();
                var6 = var9 + var6;
                var6 = var6 - var7;
                var9 = var4.verificationLevel;
                var7 = _closure1_slot13;
                var7 = var7.LOW;
                var7 = var9 >= var7;
                if (!var7) {
                    _fun38745_ip = 618;
                    continue _fun38745
                }
            case 605:
                var9 = var13.isClaimed;
                var9 = var9.bind(var13)();
                var7 = !var9;
            case 618:
                var9 = var13.isPhoneVerified;
                var14 = var9.bind(var13)();
                if (var14) {
                    _fun38745_ip = 641;
                    continue _fun38745
                }
            case 631:
                var9 = var13.isStaff;
                var14 = var9.bind(var13)();
            case 641:
                var12 = false;
                var11 = false;
                var10 = false;
                var9 = false;
                if (var14) {
                    _fun38745_ip = 777;
                    continue _fun38745
                }
            case 655:
                var15 = var4.verificationLevel;
                var14 = _closure1_slot13;
                var14 = var14.LOW;
                var15 = var15 >= var14;
                if (!var15) {
                    _fun38745_ip = 687;
                    continue _fun38745
                }
            case 678:
                var13 = var13.verified;
                var15 = !var13;
            case 687:
                var14 = var4.verificationLevel;
                var13 = _closure1_slot13;
                var13 = var13.VERY_HIGH;
                var14 = var14 >= var13;
                var16 = var4.verificationLevel;
                var13 = _closure1_slot13;
                var13 = var13.MEDIUM;
                var13 = var16 >= var13;
                if (!var13) {
                    _fun38745_ip = 736;
                    continue _fun38745
                }
            case 730:
                var16 = 0;
                var13 = var8 > var16;
            case 736:
                var16 = var4.verificationLevel;
                var4 = _closure1_slot13;
                var4 = var4.HIGH;
                var4 = var16 >= var4;
                if (!var4) {
                    _fun38745_ip = 765;
                    continue _fun38745
                }
            case 759:
                var16 = 0;
                var4 = var6 > var16;
            case 765:
                var9 = var4;
                var12 = var15;
                var11 = var14;
                var10 = var13;
            case 777:
                var18 = new Array(0);
                if (!var9) {
                    _fun38745_ip = 794;
                    continue _fun38745
                }
            case 784:
                var4 = var18.push;
                var4 = var4.bind(var18)(var6);
            case 794:
                if (!var10) {
                    _fun38745_ip = 807;
                    continue _fun38745
                }
            case 797:
                var4 = var18.push;
                var4 = var4.bind(var18)(var8);
            case 807:
                var4 = var18.length;
                var17 = 0;
                var13 = var4 > var17;
                var4 = undefined;
                if (!var13) {
                    _fun38745_ip = 880;
                    continue _fun38745
                }
            case 823:
                var14 = var5.setTimeout;
                var16 = var5.Math;
                var15 = var16.max;
                var13 = new Array(0);
                var21 = var13;
                var20 = var18;
                var19 = 0;
                var17 = arraySpread(var21, var20, var19);
                var21 = var15;
                var20 = var13;
                var19 = var16;
                var13 = apply(var21, var20, var19);
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'GUILD_VERIFICATION_CHECK';
                    var0.type = var3;
                    var3 = _closure2_slot0;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var14.bind(var0)(var2, var13);
            case 880:
                var2 = _closure1_slot19;
                var1 = {};
                var1.notClaimed = var7;
                var1.notEmailVerified = var12;
                var1.notPhoneVerified = var11;
                var1.newAccount = var10;
                var1.newMember = var9;
                if (var7) {
                    _fun38745_ip = 917;
                    continue _fun38745
                }
            case 914:
                var7 = var12;
            case 917:
                if (var7) {
                    _fun38745_ip = 923;
                    continue _fun38745
                }
            case 920:
                var7 = var11;
            case 923:
                if (var7) {
                    _fun38745_ip = 929;
                    continue _fun38745
                }
            case 926:
                var7 = var10;
            case 929:
                if (var7) {
                    _fun38745_ip = 935;
                    continue _fun38745
                }
            case 932:
                var7 = var9;
            case 935:
                var7 = !var7;
                var1.canChat = var7;
                var9 = var5.Date;
                var10 = var5.Date;
                var7 = var10.now;
                var7 = var7.bind(var10)();
                var21 = var7 + var8;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var22 = var8;
                var7 = new var22[var9](var21, var20);
                var7 = var7 instanceof Object ? var7 : var8;
                var1.accountDeadline = var7;
                var7 = var5.Date;
                var8 = var5.Date;
                var5 = var8.now;
                var5 = var5.bind(var8)();
                var21 = var5 + var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var22 = var6;
                var5 = new var22[var7](var21, var20);
                var5 = var5 instanceof Object ? var5 : var6;
                var1.memberDeadline = var5;
                var1.timeoutRef = var4;
                var2[var3] = var1;
                _fun38745_ip = 1058;
                continue _fun38745;
            case 1054:
                return var0;
            case 1056:
                return var0;
            case 1058:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun38747: for (var _fun38747_ip = 0;;) switch (_fun38747_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot19;
                var2 = var2[var1];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun38747_ip = 41;
                    continue _fun38747
                }
            case 20:
                var3 = global;
                var4 = var3.clearTimeout;
                var3 = var2.timeoutRef;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
            case 41:
                var0 = _closure1_slot19;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot18;
        var3 = var4.delete;
        var2 = var0.guild;
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot23;
        var0 = var0.guild;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.isGuildOwner;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.VerificationLevels;
    var _closure1_slot13 = var9;
    var9 = var7.VerificationCriteria;
    var _closure1_slot14 = var9;
    var7 = var7.GuildFeatures;
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.GuildMemberFlags;
    var _closure1_slot16 = var7;
    var7 = {
        'notClaimed': false,
        'notEmailVerified': false,
        'notPhoneVerified': false,
        'newAccount': false,
        'newMember': false,
        'canChat': true
    };
    var _closure1_slot17 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot18 = var1;
    var1 = {};
    var _closure1_slot19 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38750: for (var _fun38750_ip = 0;;) switch (_fun38750_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38750_ip = 69;
                        continue _fun38750
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38750_ip = 105;
                    continue _fun38750;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var5 = this;
            var4 = var5.waitFor;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var7 = _closure1_slot11;
            var6 = _closure1_slot12;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCheck';
        var4.key = var6;
        var6 = function arg0() {
            _fun38752: for (var _fun38752_ip = 0;;) switch (_fun38752_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun38752_ip = 58;
                        continue _fun38752
                    }
                case 9:
                    var4 = _closure1_slot18;
                    var0 = var4.has;
                    var0 = var0.bind(var4)(var3);
                    if (var0) {
                        _fun38752_ip = 40;
                        continue _fun38752
                    }
                case 29:
                    var4 = _closure1_slot23;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                case 40:
                    var0 = _closure1_slot19;
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun38752_ip = 56;
                        continue _fun38752
                    }
                case 52:
                    var0 = _closure1_slot17;
                case 56:
                    _fun38752_ip = 65;
                    continue _fun38752;
                case 58:
                    var0 = _closure1_slot17;
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'canChatInGuild';
        var4.key = var6;
        var5 = function arg0() {
            var2 = this;
            var1 = var2.getCheck;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.canChat;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildVerificationStore';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        _fun38754: for (var _fun38754_ip = 0;;) switch (_fun38754_ip) {
            case 0:
                var1 = _closure1_slot18;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var5 = _closure1_slot19;
                var0 = undefined;
                for (var1 in var5)
                    case 31: {
                        case 40: var8 = var1;
                        var7 = _closure1_slot24;
                        var7 = var7.bind(var0)(var8);
                        _fun38754_ip = 31;
                        continue _fun38754;
                    }
            case 54:
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.keys;
        var2 = _closure1_slot19;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = _closure1_slot24;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.CONNECTION_CLOSED = var9;
    var9 = function() {
        var1 = _closure1_slot18;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CURRENT_USER_UPDATE = var9;
    var1.GUILD_CREATE = var8;
    var1.GUILD_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot24;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_DELETE = var8;
    var8 = function arg0() {
        _fun38758: for (var _fun38758_ip = 0;;) switch (_fun38758_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.user;
                var4 = var0.id;
                var2 = _closure1_slot12;
                var0 = var2.getCurrentUser;
                var5 = var0.bind(var2)();
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun38758_ip = 52;
                    continue _fun38758
                }
            case 47:
                var2 = var5.id;
            case 52:
                if (!(var4 === var2)) {
                    _fun38758_ip = 72;
                    continue _fun38758
                }
            case 56:
                var2 = _closure1_slot18;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 72:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_MEMBER_UPDATE = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot23;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_VERIFICATION_CHECK = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildVerificationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1416, 1681, 1674, 1410, 1621, 660, 3081, 1384, 806, 21, 566, 2]);