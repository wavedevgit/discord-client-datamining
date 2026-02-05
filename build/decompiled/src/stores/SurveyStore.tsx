// stores/SurveyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function() {
        _fun87216: for (var _fun87216_ip = 0;;) switch (_fun87216_ip) {
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
            case 72: // try_end0
                _fun87216_ip = 76;
                continue _fun87216;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun87219: for (var _fun87219_ip = 0;;) switch (_fun87219_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87219_ip = 46;
                    continue _fun87219
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87219_ip = 55;
                    continue _fun87219
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87219_ip = 345;
                    continue _fun87219
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87219_ip = 323;
                    continue _fun87219
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87219_ip = 283;
                    continue _fun87219
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87219_ip = 270;
                    continue _fun87219
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
                    _fun87219_ip = 163;
                    continue _fun87219
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87219_ip = 179;
                    continue _fun87219
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87219_ip = 249;
                    continue _fun87219
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87219_ip = 249;
                    continue _fun87219
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87219_ip = 234;
                    continue _fun87219
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87219_ip = 247;
                    continue _fun87219
                }
            case 234:
                var8 = _closure1_slot30;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87219_ip = 265;
                continue _fun87219;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87219_ip = 283;
                continue _fun87219;
            case 270:
                var6 = _closure1_slot30;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87219_ip = 323;
                    continue _fun87219
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
                    _fun87219_ip = 330;
                    continue _fun87219
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87220: for (var _fun87220_ip = 0;;) switch (_fun87220_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87220_ip = 56;
                                continue _fun87220
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
                            _fun87220_ip = 67;
                            continue _fun87220;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun87221: for (var _fun87221_ip = 0;;) switch (_fun87221_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87221_ip = 23;
                    continue _fun87221
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87221_ip = 33;
                    continue _fun87221
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
                    _fun87221_ip = 70;
                    continue _fun87221
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87221_ip = 55;
                    continue _fun87221
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        _fun87222: for (var _fun87222_ip = 0;;) switch (_fun87222_ip) {
            case 0:
                var0 = _closure1_slot18;
                var2 = var0.lastFetched;
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun87222_ip = 61;
                    continue _fun87222
                }
            case 22:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot18;
                var2 = var2.lastFetched;
                var2 = var3 - var2;
                var1 = _closure1_slot24;
                var0 = var2 >= var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var11 = function() {
        _fun87223: for (var _fun87223_ip = 0;;) switch (_fun87223_ip) {
            case 0:
                var1 = _closure1_slot23;
                if (var1) {
                    _fun87223_ip = 45;
                    continue _fun87223
                }
            case 10:
                var3 = _closure1_slot31;
                var2 = undefined;
                var3 = var3.bind(var2)();
                var2 = !var3;
                if (var3) {
                    _fun87223_ip = 42;
                    continue _fun87223
                }
            case 26:
                var3 = _closure1_slot18;
                var4 = var3.surveyOverride;
                var3 = null;
                var2 = var3 == var4;
            case 42:
                var1 = var2;
            case 45:
                if (var1) {
                    _fun87223_ip = 98;
                    continue _fun87223
                }
            case 48:
                var3 = true;
                _closure1_slot23 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.surveyFetch;
                var0 = _closure1_slot18;
                var0 = var0.surveyOverride;
                var0 = var1.bind(var2)(var0, var3);
            case 98:
                var0 = undefined;
                return var0;
        }
    };
    var0 = function arg0() {
        _fun87224: for (var _fun87224_ip = 0;;) switch (_fun87224_ip) {
            case 0:
                var29 = arg0;
                var23 = undefined;
                var24 = undefined;
                var25 = undefined;
                var26 = undefined;
                var27 = undefined;
                var28 = undefined;
                var22 = var29.guild_requirements;
                if (!(var23 === var22)) {
                    _fun87224_ip = 31;
                    continue _fun87224
                }
            case 27:
                var22 = new Array(0);
            case 31:
                var21 = var29.guild_size;
                if (!(var23 === var21)) {
                    _fun87224_ip = 51;
                    continue _fun87224
                }
            case 41:
                var21 = [null, null];
            case 51:
                var20 = var29.guild_permissions;
                if (!(var23 === var20)) {
                    _fun87224_ip = 67;
                    continue _fun87224
                }
            case 63:
                var20 = new Array(0);
            case 67:
                var2 = var22.length;
                var19 = 0;
                var0 = true;
                if (!(var19 !== var2)) {
                    _fun87224_ip = 1146;
                    continue _fun87224
                }
            case 83:
                var2 = _closure1_slot29;
                var5 = var2.bind(var23)(var22);
                var4 = var5.bind(var23)();
                var2 = var4.done;
                if (var2) {
                    _fun87224_ip = 149;
                    continue _fun87224
                }
            case 107:
                var7 = var4.value;
                var6 = _closure1_slot27;
                var2 = var6.has;
                var2 = var2.bind(var6)(var7);
                var0 = false;
                if (!var2) {
                    _fun87224_ip = 1146;
                    continue _fun87224
                }
            case 134:
                var6 = var5.bind(var23)();
                var2 = var6.done;
                var4 = var6;
                if (!var2) {
                    _fun87224_ip = 107;
                    continue _fun87224
                }
            case 149:
                var4 = var22.includes;
                var2 = _closure1_slot26;
                var2 = var2.GUILD_SIZE_ALL;
                var4 = var4.bind(var22)(var2);
                var5 = _closure1_slot29;
                var6 = _closure1_slot10;
                var2 = var6.getGuildsArray;
                var2 = var2.bind(var6)();
                var17 = var5.bind(var23)(var2);
                var2 = var17.bind(var23)();
                var5 = var2.done;
                var16 = null;
                var15 = 13;
                var14 = 1;
                var13 = var2;
                var12 = true;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var2 = true;
                if (var5) {
                    _fun87224_ip = 1134;
                    continue _fun87224
                }
            case 234:
                var24 = var13.value;
                if (var4) {
                    _fun87224_ip = 268;
                    continue _fun87224
                }
            case 242:
                var30 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.GUILD_SIZE;
                var5 = var30.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 411;
                    continue _fun87224
                }
            case 268:
                var31 = _closure1_slot9;
                var30 = var31.getMemberCount;
                var5 = var24;
                var5 = var5.id;
                var37 = var30.bind(var31)(var5);
                var5 = var16 == var37;
                var30 = false;
                var36 = var37;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 321:
                var5 = var21[var19];
                if (!(var16 != var5)) {
                    _fun87224_ip = 363;
                    continue _fun87224
                }
            case 329:
                var5 = var21[var19];
                var5 = var37 < var5;
                var30 = false;
                var36 = var37;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 363:
                var5 = var21[var14];
                var11 = var37;
                if (!(var16 != var5)) {
                    _fun87224_ip = 411;
                    continue _fun87224
                }
            case 374:
                var5 = var21[var14];
                var5 = var37 > var5;
                var11 = var37;
                var30 = false;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 411:
                var37 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.IS_COMMUNITY;
                var5 = var37.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 490;
                    continue _fun87224
                }
            case 434:
                var5 = var24;
                var38 = var5.features;
                var37 = var38.has;
                var5 = _closure1_slot14;
                var5 = var5.COMMUNITY;
                var5 = var37.bind(var38)(var5);
                var30 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (!var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 490:
                var37 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.IS_HUB;
                var5 = var37.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 569;
                    continue _fun87224
                }
            case 513:
                var5 = var24;
                var38 = var5.features;
                var37 = var38.has;
                var5 = _closure1_slot14;
                var5 = var5.HUB;
                var5 = var37.bind(var38)(var5);
                var30 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (!var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 569:
                var37 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.GUILD_PERMISSIONS;
                var5 = var37.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 774;
                    continue _fun87224
                }
            case 595:
                var5 = var20.length;
                var30 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (!(var19 !== var5)) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 628:
                var26 = false;
                var5 = _closure1_slot29;
                var5 = var5.bind(var23)(var20);
                var27 = var5;
                var5 = var5.bind(var23)();
                var25 = var5;
                var5 = var5.done;
                if (var5) {
                    _fun87224_ip = 744;
                    continue _fun87224
                }
            case 657:
                var5 = var25;
                var28 = var5.value;
            case 665: // try_start_0
                var37 = _closure1_slot2;
                var5 = _closure1_slot3;
                var5 = var5[var15];
                var38 = var37.bind(var23)(var5);
                var37 = var38.deserialize;
                var5 = var28;
                var39 = var37.bind(var38)(var5);
                var38 = _closure1_slot11;
                var37 = var38.can;
                var5 = var24;
                var5 = var37.bind(var38)(var39, var5);
                if (var5) {
                    _fun87224_ip = 720;
                    continue _fun87224
                }
            case 718: // try_end0
                _fun87224_ip = 726;
                continue _fun87224;
            case 720: // try_start_1
                var26 = true;
            case 722: // try_end1
                _fun87224_ip = 744;
                continue _fun87224;
            case 724: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 5);
            case 726:
                var5 = var27;
                var5 = var5.bind(var23)();
                var25 = var5;
                var5 = var5.done;
                if (!var5) {
                    _fun87224_ip = 657;
                    continue _fun87224
                }
            case 744:
                var5 = var26;
                var30 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                if (!var5) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 774:
                var37 = _closure1_slot13;
                var5 = var37.getCurrentUser;
                var40 = var5.bind(var37)();
                var5 = var16 == var40;
                var37 = undefined;
                if (var5) {
                    _fun87224_ip = 801;
                    continue _fun87224
                }
            case 796:
                var37 = var40.id;
            case 801:
                var41 = var24;
                var5 = var41.ownerId;
                var39 = var37 === var5;
                var38 = _closure1_slot11;
                var37 = var38.can;
                var5 = _closure1_slot15;
                var5 = var5.ADMINISTRATOR;
                var38 = var37.bind(var38)(var5, var41);
                var37 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.IS_OWNER;
                var5 = var37.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 890;
                    continue _fun87224
                }
            case 863:
                var30 = var12;
                var36 = var11;
                var35 = var40;
                var34 = var39;
                var33 = var38;
                var32 = var7;
                var31 = var6;
                if (!var39) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 890:
                var37 = var22.includes;
                var5 = _closure1_slot26;
                var5 = var5.IS_ADMIN;
                var5 = var37.bind(var22)(var5);
                if (!var5) {
                    _fun87224_ip = 940;
                    continue _fun87224
                }
            case 913:
                var30 = var12;
                var36 = var11;
                var35 = var40;
                var34 = var39;
                var32 = var7;
                var31 = var6;
                var33 = var38;
                if (!var33) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 940:
                var5 = _closure1_slot21;
                if (!(var16 == var5)) {
                    _fun87224_ip = 952;
                    continue _fun87224
                }
            case 948:
                var37 = {};
                _fun87224_ip = 956;
                continue _fun87224;
            case 952:
                var37 = _closure1_slot21;
            case 956:
                _closure1_slot21 = var37;
                var5 = var29.key;
                var5 = var37[var5];
                if (!(var16 == var5)) {
                    _fun87224_ip = 986;
                    continue _fun87224
                }
            case 973:
                var37 = _closure1_slot21;
                var5 = var29.key;
                var37[var5] = var29;
            case 986:
                var37 = _closure1_slot12;
                var5 = var37.getGuildId;
                var37 = var5.bind(var37)();
                var5 = var16 != var37;
                if (!var5) {
                    _fun87224_ip = 1019;
                    continue _fun87224
                }
            case 1007:
                var41 = var24;
                var41 = var41.id;
                var5 = var37 === var41;
            case 1019:
                var42 = var22.includes;
                var41 = _closure1_slot26;
                var41 = var41.IS_VIEWING;
                var41 = var42.bind(var22)(var41);
                if (!var41) {
                    _fun87224_ip = 1066;
                    continue _fun87224
                }
            case 1042:
                var30 = var12;
                var36 = var11;
                var35 = var40;
                var34 = var39;
                var33 = var38;
                var32 = var37;
                var31 = var5;
                if (!var31) {
                    _fun87224_ip = 1092;
                    continue _fun87224
                }
            case 1066:
                var30 = var12;
                var36 = var11;
                var35 = var40;
                var34 = var39;
                var33 = var38;
                var32 = var37;
                var31 = var5;
                var0 = true;
                if (!var4) {
                    _fun87224_ip = 1146;
                    continue _fun87224
                }
            case 1092:
                var37 = var17.bind(var23)();
                var5 = var37.done;
                var12 = var30;
                var11 = var36;
                var10 = var35;
                var9 = var34;
                var8 = var33;
                var7 = var32;
                var6 = var31;
                var13 = var37;
                var2 = var12;
                if (!var5) {
                    _fun87224_ip = 234;
                    continue _fun87224
                }
            case 1134:
                var0 = false;
                if (!var4) {
                    _fun87224_ip = 1146;
                    continue _fun87224
                }
            case 1139:
                var0 = false;
                if (!var2) {
                    _fun87224_ip = 1146;
                    continue _fun87224
                }
            case 1144:
                var0 = true;
            case 1146:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var10 = function arg0() {
        _fun87225: for (var _fun87225_ip = 0;;) switch (_fun87225_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.survey;
                var1 = var0.isActionTriggered;
                var0 = false;
                _closure1_slot23 = var0;
                var5 = _closure1_slot18;
                var0 = global;
                var6 = var0.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var5.lastFetched = var4;
                if (!var1) {
                    _fun87225_ip = 81;
                    continue _fun87225
                }
            case 56:
                var1 = _closure1_slot18;
                var4 = var0.Date;
                var0 = var4.now;
                var0 = var0.bind(var4)();
                var1.lastActionTriggered = var0;
            case 81:
                var0 = _closure1_slot18;
                var0 = var0.hiddenSurveys;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun87225_ip = 109;
                    continue _fun87225
                }
            case 97:
                var1 = _closure1_slot18;
                var0 = {};
                var1.hiddenSurveys = var0;
            case 109:
                var7 = var5 != var3;
                var8 = var7;
                if (!var7) {
                    _fun87225_ip = 142;
                    continue _fun87225
                }
            case 119:
                var0 = _closure1_slot18;
                var1 = var0.hiddenSurveys;
                var0 = var3.key;
                var0 = var1[var0];
                var8 = var5 == var0;
            case 142:
                if (!var7) {
                    _fun87225_ip = 156;
                    continue _fun87225
                }
            case 145:
                var1 = _closure1_slot32;
                var0 = undefined;
                var7 = var1.bind(var0)(var3);
            case 156:
                var6 = _closure1_slot19;
                if (var6) {
                    _fun87225_ip = 167;
                    continue _fun87225
                }
            case 163:
                var6 = _closure1_slot20;
            case 167:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var9 = var1.Storage;
                var4 = var9.get;
                var1 = _closure1_slot16;
                var11 = var4.bind(var9)(var1);
                var4 = var5 == var11;
                if (var4) {
                    _fun87225_ip = 263;
                    continue _fun87225
                }
            case 216:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 15;
                var1 = var10[var1];
                var1 = var9.bind(var0)(var1);
                var10 = var1.bind(var0)();
                var9 = var10.diff;
                var1 = 'day';
                var9 = var9.bind(var10)(var11, var1);
                var1 = 7;
                var4 = var9 < var1;
            case 263:
                var1 = null;
                if (!var8) {
                    _fun87225_ip = 286;
                    continue _fun87225
                }
            case 268:
                var1 = null;
                if (!var7) {
                    _fun87225_ip = 286;
                    continue _fun87225
                }
            case 273:
                var1 = null;
                if (var6) {
                    _fun87225_ip = 286;
                    continue _fun87225
                }
            case 278:
                var1 = null;
                if (var4) {
                    _fun87225_ip = 286;
                    continue _fun87225
                }
            case 283:
                var1 = var3;
            case 286:
                _closure1_slot22 = var1;
                return var0;
        }
    };
    var _closure1_slot33 = var10;
    var0 = function() {
        _fun87226: for (var _fun87226_ip = 0;;) switch (_fun87226_ip) {
            case 0:
                var2 = _closure1_slot22;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun87226_ip = 46;
                    continue _fun87226
                }
            case 13:
                var4 = _closure1_slot22;
                var3 = _closure1_slot32;
                var2 = undefined;
                var3 = var3.bind(var2)(var4);
                var2 = !var3;
                var2 = !var2;
                if (var3) {
                    _fun87226_ip = 43;
                    continue _fun87226
                }
            case 37:
                _closure1_slot22 = var0;
                var2 = false;
            case 43:
                if (var2) {
                    _fun87226_ip = 156;
                    continue _fun87226
                }
            case 46:
                var2 = _closure1_slot21;
                if (!(var0 == var2)) {
                    _fun87226_ip = 58;
                    continue _fun87226
                }
            case 54:
                var2 = {};
                _fun87226_ip = 62;
                continue _fun87226;
            case 58:
                var2 = _closure1_slot21;
            case 62:
                _closure1_slot21 = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var2 = _closure1_slot21;
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var5 = var3[var2];
                if (!(var0 != var5)) {
                    _fun87226_ip = 140;
                    continue _fun87226
                }
            case 98:
                var2 = _closure1_slot32;
                var4 = undefined;
                var2 = var2.bind(var4)(var5);
                if (!var2) {
                    _fun87226_ip = 140;
                    continue _fun87226
                }
            case 112:
                var3 = _closure1_slot33;
                var2 = {};
                var6 = 'SURVEY_FETCHED';
                var2.type = var6;
                var2.survey = var5;
                var2 = var3.bind(var4)(var2);
                _fun87226_ip = 152;
                continue _fun87226;
            case 140:
                var2 = _closure1_slot22;
                if (!(var0 != var2)) {
                    _fun87226_ip = 152;
                    continue _fun87226
                }
            case 148:
                _closure1_slot22 = var0;
            case 152:
                var0 = undefined;
                return var0;
            case 156:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var4 = global;
    var9 = var4.Object;
    var3 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var9 = 10;
    var1 = var7[var9];
    var1 = var6.bind(var0)(var1);
    var3 = var1.GuildFeatures;
    var _closure1_slot14 = var3;
    var3 = var1.Permissions;
    var _closure1_slot15 = var3;
    var1 = var1.FIRST_RUN_DATE_KEY;
    var _closure1_slot16 = var1;
    var1 = {
        'hiddenSurveys': null,
        'surveyOverride': null,
        'lastFetched': null,
        'lastSeen': null,
        'lastActionTriggered': null
    };
    var3 = {};
    var1.hiddenSurveys = var3;
    var3 = null;
    var _closure1_slot17 = var1;
    var _closure1_slot18 = var1;
    var1 = false;
    var _closure1_slot19 = var1;
    var _closure1_slot20 = var1;
    var12 = {};
    var _closure1_slot21 = var12;
    var _closure1_slot22 = var3;
    var _closure1_slot23 = var1;
    var1 = 11;
    var3 = var7[var1];
    var3 = var8.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.DAY;
    var _closure1_slot24 = var3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.HOUR;
    var1 = var9 * var1;
    var _closure1_slot25 = var1;
    var13 = {};
    var9 = 'is_owner';
    var13.IS_OWNER = var9;
    var9 = 'is_admin';
    var13.IS_ADMIN = var9;
    var9 = 'is_community';
    var13.IS_COMMUNITY = var9;
    var9 = 'guild_size';
    var13.GUILD_SIZE = var9;
    var9 = 'is_hub';
    var13.IS_HUB = var9;
    var9 = 'is_viewing';
    var13.IS_VIEWING = var9;
    var9 = 'guild_permissions';
    var13.GUILD_PERMISSIONS = var9;
    var9 = 'guild_size_all';
    var13.GUILD_SIZE_ALL = var9;
    var _closure1_slot26 = var13;
    var12 = var4.Set;
    var9 = var4.Object;
    var4 = var9.values;
    var16 = var4.bind(var9)(var13);
    var9 = var12.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var12
        }
    });
    var17 = var9;
    var4 = new var17[var12](var16, var15);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot27 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun87228: for (var _fun87228_ip = 0;;) switch (_fun87228_ip) {
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
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun87228_ip = 69;
                        continue _fun87228
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun87228_ip = 105;
                    continue _fun87228;
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
        var0 = function arg0() {
            _fun87229: for (var _fun87229_ip = 0;;) switch (_fun87229_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var8 = var3.waitFor;
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot10;
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot13;
                    var14 = var3;
                    var2 = var14[var8](var13, var12, var11, var10, var9, var8);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun87229_ip = 52;
                        continue _fun87229
                    }
                case 48:
                    var1 = _closure1_slot17;
                case 52:
                    _closure1_slot18 = var1;
                    var2 = var3.syncWith;
                    var4 = _closure1_slot12;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot34;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCurrentSurvey';
        var4.key = var6;
        var6 = function() {
            _fun87231: for (var _fun87231_ip = 0;;) switch (_fun87231_ip) {
                case 0:
                    var2 = _closure1_slot31;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var0 = null;
                    if (var2) {
                        _fun87231_ip = 22;
                        continue _fun87231
                    }
                case 18:
                    var0 = _closure1_slot22;
                case 22:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSurveyOverride';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.surveyOverride;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLastSeenTimestamp';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.lastSeen;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'shouldAllowSurveyAction';
        var4.key = var6;
        var5 = function() {
            _fun87234: for (var _fun87234_ip = 0;;) switch (_fun87234_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var2 = var0.bind(var1)();
                    var1 = _closure1_slot18;
                    var3 = var1.lastActionTriggered;
                    var1 = null;
                    var4 = var1 != var3;
                    var1 = 0;
                    if (!var4) {
                        _fun87234_ip = 44;
                        continue _fun87234
                    }
                case 41:
                    var1 = var3;
                case 44:
                    var1 = var2 - var1;
                    var0 = _closure1_slot25;
                    var0 = var1 >= var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'SurveyStore';
    var9.displayName = var4;
    var9.persistKey = var4;
    var4 = new Array(3);
    var12 = function(arg0) { // Environment: var5
        var0 = {};
        var2 = arg0;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        var1 = delete var0.validSurveys;
        var1 = delete var0.currentSurvey;
        var1 = delete var0.iosIsPushNotificationClicked;
        var1 = delete var0.iosIsInviteShown;
        var1 = delete var0.iosFirstRunDate;
        return var0;
    };
    var4[0] = var12;
    var12 = function(arg0) { // Environment: var5
        _fun87236: for (var _fun87236_ip = 0;;) switch (_fun87236_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var2 = copyDataProperties(var5, var4);
                var1 = var1.lastSeen;
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun87236_ip = 33;
                    continue _fun87236
                }
            case 30:
                var2 = var1;
            case 33:
                var1 = 'lastSeen';
                var0[var1] = var2;
                return var0;
        }
    };
    var4[1] = var12;
    var12 = function(arg0) { // Environment: var5
        _fun87237: for (var _fun87237_ip = 0;;) switch (_fun87237_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var0;
                var3 = var1;
                var2 = copyDataProperties(var4, var3);
                var2 = var1.hiddenSurveys;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun87237_ip = 29;
                    continue _fun87237
                }
            case 27:
                var2 = {};
            case 29:
                var1 = 'hiddenSurveys';
                var0[var1] = var2;
                return var0;
        }
    };
    var4[2] = var12;
    var9.migrations = var4;
    var4 = 17;
    var4 = var7[var4];
    var16 = var8.bind(var0)(var4);
    var4 = {};
    var4.CONNECTION_OPEN = var11;
    var4.CONNECTION_RESUMED = var11;
    var4.SURVEY_FETCHED = var10;
    var10 = function arg0() {
        _fun87238: for (var _fun87238_ip = 0;;) switch (_fun87238_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.key;
                var0 = _closure1_slot18;
                var3 = var0.hiddenSurveys;
                var0 = true;
                var3[var1] = var0;
                var3 = null;
                _closure1_slot22 = var3;
                var0 = _closure1_slot21;
                if (!(var3 == var0)) {
                    _fun87238_ip = 45;
                    continue _fun87238
                }
            case 41:
                var0 = {};
                _fun87238_ip = 49;
                continue _fun87238;
            case 45:
                var0 = _closure1_slot21;
            case 49:
                _closure1_slot21 = var0;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var4.SURVEY_HIDE = var10;
    var10 = function arg0() {
        _fun87239: for (var _fun87239_ip = 0;;) switch (_fun87239_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var0 = _closure1_slot18;
                var0.surveyOverride = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun87239_ip = 41;
                    continue _fun87239
                }
            case 27:
                var0 = _closure1_slot18;
                var0 = var0.hiddenSurveys;
                var0 = delete var0[var2];
            case 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.surveyFetch;
                var1 = _closure1_slot18;
                var2 = var1.surveyOverride;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var4.SURVEY_OVERRIDE = var10;
    var10 = function() {
        var0 = true;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var4.PUSH_NOTIFICATION_CLICK = var10;
    var10 = function() {
        var0 = true;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var4.DISPLAYED_INVITE_SHOW = var10;
    var10 = function() {
        var1 = _closure1_slot18;
        var0 = {};
        var1.hiddenSurveys = var0;
        var0 = undefined;
        return var0;
    };
    var4.LOGOUT = var10;
    var5 = function() {
        var1 = _closure1_slot18;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var1.lastSeen = var0;
        var0 = undefined;
        return var0;
    };
    var4.SURVEY_SEEN = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/SurveyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.SURVEY_REFETCH_INTERVAL = var3;
    var2.SURVEY_ACTION_INTERVAL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1599, 1410, 3091, 3213, 1621, 660, 667, 11295, 484, 587, 3045, 566, 806, 2]);