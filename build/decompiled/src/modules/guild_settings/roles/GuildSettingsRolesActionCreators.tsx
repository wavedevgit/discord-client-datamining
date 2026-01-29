// modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var1
        var0 = function(arg0) { // Original name: AsyncFromSyncIteratorContinuation, environment: var3
            _fun116320: for (var _fun116320_ip = 0;;) switch (_fun116320_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun116320_ip = 74;
                        continue _fun116320
                    }
                case 24:
                    var2 = var3.done;
                    var _closure3_slot0 = var2;
                    var5 = var0.Promise;
                    var4 = var5.resolve;
                    var2 = var3.value;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.then;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = arg0;
                        var0.value = var1;
                        var1 = _closure3_slot0;
                        var0.done = var1;
                        return var0;
                    };
                    var1 = var2.bind(var4)(var1);
                    return var1;
                case 74:
                    var2 = var0.Promise;
                    var1 = var2.reject;
                    var4 = var0.TypeError;
                    var0 = ' is not an object.';
                    var6 = var3 + var0;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var0 = new var7[var4](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var0;
        var2 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var3
            var0 = arg0;
            var1 = this;
            var1.s = var0;
            var0 = var0.next;
            var1.n = var0;
            var0 = undefined;
            return var0;
        };
        _closure1_slot4 = var2;
        var1 = {
            's': null,
            'n': null
        };
        var4 = function() { // Original name: next, environment: var3
            var3 = this;
            var2 = undefined;
            var0 = undefined;
            var1 = _closure2_slot0;
            var5 = var3.n;
            var4 = var5.apply;
            var3 = var3.s;
            var0 = arguments;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.next = var4;
        var4 = function(arg0) { // Original name: return, environment: var3
            _fun116324: for (var _fun116324_ip = 0;;) switch (_fun116324_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun116324_ip = 54;
                        continue _fun116324
                    }
                case 22:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun116324_ip = 88;
                    continue _fun116324;
                case 54:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = {};
                    var4 = arg0;
                    var1.value = var4;
                    var4 = true;
                    var1.done = var4;
                    var0 = var2.bind(var3)(var1);
                case 88:
                    return var0;
            }
        };
        var1.return = var4;
        var3 = function(arg0) { // Original name: throw, environment: var3
            _fun116325: for (var _fun116325_ip = 0;;) switch (_fun116325_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun116325_ip = 54;
                        continue _fun116325
                    }
                case 22:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun116325_ip = 76;
                    continue _fun116325;
                case 54:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.reject;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 76:
                    return var0;
            }
        };
        var1.throw = var3;
        var2.prototype = var1;
        var2 = _closure1_slot4;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var5 = arg0;
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() { // Original name: _saveRoleSettings, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun116328: for (var _fun116328_ip = 0;;) switch (_fun116328_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[5];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun116328_ip = 1498;
                            continue _fun116328
                        }
                    case 13:
                        var22 = arg0;
                        var21 = arg1;
                        var6 = arg2;
                        var14 = arg3;
                        var23 = arg4;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun116328_ip = 36;
                            continue _fun116328
                        }
                    case 34:
                        var1 = {};
                    case 36:
                        var4 = var1;
                        var26 = undefined;
                        var27 = undefined;
                        var28 = undefined;
                        var10 = undefined;
                        var16 = undefined;
                        var13 = undefined;
                        var24 = undefined;
                        var12 = undefined;
                        var25 = undefined;
                        var9 = undefined;
                        var11 = undefined;
                        SaveGenerator(address = 65);
                    case 63:
                        return var3;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun116328_ip = 1495;
                            continue _fun116328
                        }
                    case 74:
                        var15 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var7 = 1;
                        var8 = var8[var7];
                        var17 = var15.bind(var3)(var8);
                        var15 = var17.dispatch;
                        var8 = {};
                        var18 = 'GUILD_SETTINGS_ROLES_SUBMITTING';
                        var8.type = var18;
                        var8 = var15.bind(var17)(var8);
                    case 119: // try_start_8
                        var15 = var6;
                        var17 = null;
                        var15 = var17 != var15;
                        var8 = var15;
                        if (!var15) {
                            _fun116328_ip = 148;
                            continue _fun116328
                        }
                    case 134:
                        var15 = var6;
                        var18 = var15.length;
                        var15 = 0;
                        var8 = var18 > var15;
                    case 148:
                        if (!var8) {
                            _fun116328_ip = 199;
                            continue _fun116328
                        }
                    case 151:
                        var15 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var8 = 2;
                        var8 = var18[var8];
                        var18 = var15.bind(var3)(var8);
                        var15 = var18.batchRoleUpdate;
                        var8 = var22;
                        var6 = var15.bind(var18)(var8, var6);
                        SaveGenerator(address = 190);
                    case 188:
                        return var6;
                    case 190:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun116328_ip = 1362;
                            continue _fun116328
                        }
                    case 199:
                        var8 = var21;
                        if (!(var17 != var8)) {
                            _fun116328_ip = 480;
                            continue _fun116328
                        }
                    case 209:
                        var8 = var21;
                        var8 = var8.length;
                        var20 = 0;
                        var19 = 2;
                        var18 = '';
                        if (!(var8 > var20)) {
                            _fun116328_ip = 480;
                            continue _fun116328
                        }
                    case 233:
                        var15 = var21;
                        var8 = var15.pop;
                        var15 = var8.bind(var15)();
                        var28 = var15;
                        var15 = var17 != var15;
                        var8 = var15;
                        if (!var15) {
                            _fun116328_ip = 271;
                            continue _fun116328
                        }
                    case 259:
                        var15 = var28;
                        var15 = var15.name;
                        var8 = var18 !== var15;
                    case 271:
                        if (!var8) {
                            _fun116328_ip = 458;
                            continue _fun116328
                        }
                    case 277:
                        var15 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var19];
                        var31 = var15.bind(var3)(var8);
                        var30 = var31.updateRole;
                        var29 = var22;
                        var32 = var28;
                        var15 = var32.id;
                        var8 = {};
                        var33 = var32.name;
                        var8.name = var33;
                        var32 = var32.description;
                        var26 = var32;
                        var33 = var17 != var32;
                        var32 = undefined;
                        if (!var33) {
                            _fun116328_ip = 342;
                            continue _fun116328
                        }
                    case 339:
                        var32 = var26;
                    case 342:
                        var8.description = var32;
                        var32 = var28;
                        var33 = var32.permissions;
                        var8.permissions = var33;
                        var33 = var32.color;
                        var8.color = var33;
                        var32 = var32.colors;
                        var27 = var32;
                        var33 = var17 != var32;
                        var32 = undefined;
                        if (!var33) {
                            _fun116328_ip = 389;
                            continue _fun116328
                        }
                    case 386:
                        var32 = var27;
                    case 389:
                        var8.colors = var32;
                        var32 = var28;
                        var33 = var32.hoist;
                        var8.hoist = var33;
                        var33 = var32.mentionable;
                        var8.mentionable = var33;
                        var33 = var32.icon;
                        var8.icon = var33;
                        var32 = var32.unicodeEmoji;
                        var8.unicodeEmoji = var32;
                        var8 = var30.bind(var31)(var29, var15, var8);
                        SaveGenerator(address = 449);
                    case 447:
                        return var8;
                    case 449:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 15);
                        if (var15) {
                            _fun116328_ip = 1359;
                            continue _fun116328
                        }
                    case 458:
                        var15 = var21;
                        if (!(var17 != var15)) {
                            _fun116328_ip = 480;
                            continue _fun116328
                        }
                    case 465:
                        var15 = var21;
                        var15 = var15.length;
                        if (var15 > var20) {
                            _fun116328_ip = 233;
                            continue _fun116328
                        }
                    case 480:
                        var15 = var23;
                        if (!(var17 != var15)) {
                            _fun116328_ip = 1198;
                            continue _fun116328
                        }
                    case 490:
                        var15 = var14;
                        if (!(var17 != var15)) {
                            _fun116328_ip = 1198;
                            continue _fun116328
                        }
                    case 500:
                        var16 = false;
                        var13 = false;
                    case 504: // try_start_0 // try_start_1
                        var19 = var14;
                        var14 = global;
                        var15 = var14.Symbol;
                        var18 = 'undefined';
                        var15 = typeof var15;
                        var31 = undefined;
                        var30 = undefined;
                        if (!(var18 !== var15)) {
                            _fun116328_ip = 552;
                            continue _fun116328
                        }
                    case 529:
                        var15 = var14.Symbol;
                        var31 = var15.asyncIterator;
                        var15 = var14.Symbol;
                        var30 = var15.iterator;
                    case 552:
                        var29 = '@@asyncIterator';
                        var28 = '@@iterator';
                        var27 = undefined;
                        var26 = var7;
                    case 567:
                        if (!var31) {
                            _fun116328_ip = 581;
                            continue _fun116328
                        }
                    case 570:
                        var18 = var19[var31];
                        var27 = var18;
                        if (!(var17 == var27)) {
                            _fun116328_ip = 680;
                            continue _fun116328
                        }
                    case 581:
                        if (!var30) {
                            _fun116328_ip = 595;
                            continue _fun116328
                        }
                    case 584:
                        var15 = var19[var30];
                        var27 = var15;
                        if (!(var17 == var27)) {
                            _fun116328_ip = 644;
                            continue _fun116328
                        }
                    case 595:
                        var20 = parseFloat(var26);
                        var26 = var20 - 1;
                        var31 = var29;
                        var30 = var28;
                        if (var20) {
                            _fun116328_ip = 567;
                            continue _fun116328
                        }
                    case 610:
                        var26 = var14.TypeError;
                        var14 = var26.prototype;
                        var20 = Object.create(var14, {
                            constructor: {
                                value: var26
                            }
                        });
                        var36 = 'Object is not async iterable';
                        var37 = var20;
                        var14 = new var37[var26](var36, var35);
                        var14 = var14 instanceof Object ? var14 : var20;
                        throw var14;
                    case 644:
                        var20 = _closure1_slot4;
                        var14 = var15.call;
                        var36 = var14.bind(var15)(var19);
                        var15 = var20.prototype;
                        var15 = Object.create(var15, {
                            constructor: {
                                value: var20
                            }
                        });
                        var37 = var15;
                        var14 = new var37[var20](var36, var35);
                        var15 = var14 instanceof Object ? var14 : var15;
                        _fun116328_ip = 690;
                        continue _fun116328;
                    case 680:
                        var14 = var18.call;
                        var15 = var14.bind(var18)(var19);
                    case 690:
                        var12 = var15;
                        var14 = var15.next;
                        var15 = var14.bind(var15)();
                        SaveGenerator(address = 706);
                    case 704:
                        return var15;
                    case 706:
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 14);
                        if (var14) {
                            _fun116328_ip = 1049;
                            continue _fun116328
                        }
                    case 715:
                        var24 = var15;
                        var14 = var15.done;
                        var14 = !var14;
                        var16 = var14;
                        var20 = 3;
                        if (!var14) {
                            _fun116328_ip = 862;
                            continue _fun116328
                        }
                    case 738:
                        var14 = var24;
                        var27 = var14.value;
                        var18 = var23;
                        var14 = var18.get;
                        var14 = var14.bind(var18)(var27);
                        var25 = var14;
                        var19 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var18 = var18[var20];
                        var26 = var19.bind(var3)(var18);
                        var19 = var26.putRoleConnectionsConfigurations;
                        var18 = var22;
                        if (!(var17 == var14)) {
                            _fun116328_ip = 798;
                            continue _fun116328
                        }
                    case 792:
                        var14 = new Array(0);
                        _fun116328_ip = 801;
                        continue _fun116328;
                    case 798:
                        var14 = var25;
                    case 801:
                        var18 = var19.bind(var26)(var18, var27, var14);
                        SaveGenerator(address = 812);
                    case 810:
                        return var18;
                    case 812:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 14);
                        if (var14) {
                            _fun116328_ip = 958;
                            continue _fun116328
                        }
                    case 821:
                        var16 = false;
                        var19 = var12;
                        var14 = var19.next;
                        var19 = var14.bind(var19)();
                        SaveGenerator(address = 839);
                    case 837:
                        return var19;
                    case 839:
                        ResumeGenerator(result_out_reg = 19, return_bool_out_reg = 14);
                        if (var14) {
                            _fun116328_ip = 867;
                            continue _fun116328
                        }
                    case 845:
                        var24 = var19;
                        var14 = var19.done;
                        var14 = !var14;
                        var16 = var14;
                        if (var14) {
                            _fun116328_ip = 738;
                            continue _fun116328
                        }
                    case 862: // try_end0
                        _fun116328_ip = 1144;
                        continue _fun116328;
                    case 867: // try_start_2 // try_end1
                        var20 = var16;
                        var14 = var20;
                        if (!var20) {
                            _fun116328_ip = 889;
                            continue _fun116328
                        }
                    case 876:
                        var20 = var12;
                        var20 = var20.return;
                        var14 = var17 != var20;
                    case 889:
                        if (!var14) {
                            _fun116328_ip = 915;
                            continue _fun116328
                        }
                    case 892:
                        var20 = var12;
                        var14 = var20.return;
                        var14 = var14.bind(var20)();
                        SaveGenerator(address = 909);
                    case 907:
                        return var14;
                    case 909:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 20);
                        if (var20) {
                            _fun116328_ip = 929;
                            continue _fun116328
                        }
                    case 915: // try_end2
                        var20 = var13;
                        if (var20) {
                            _fun116328_ip = 924;
                            continue _fun116328
                        }
                    case 921: // try_end8
                        return var19;
                    case 924: // try_start_9
                        var19 = var10;
                        throw var19;
                    case 929:
                        var19 = var13;
                        if (var19) {
                            _fun116328_ip = 938;
                            continue _fun116328
                        }
                    case 935: // try_end9
                        return var14;
                    case 938: // try_start_10
                        var14 = var10;
                        throw var14;
                    case 943: // catch_target2
                        CatchBlockStart(arg_register = 14);
                        var19 = var13;
                        if (var19) {
                            _fun116328_ip = 953;
                            continue _fun116328
                        }
                    case 951:
                        throw var14;
                    case 953:
                        var14 = var10;
                        throw var14;
                    case 958: // try_start_3
                        var19 = var16;
                        var14 = var19;
                        if (!var19) {
                            _fun116328_ip = 980;
                            continue _fun116328
                        }
                    case 967:
                        var19 = var12;
                        var19 = var19.return;
                        var14 = var17 != var19;
                    case 980:
                        if (!var14) {
                            _fun116328_ip = 1006;
                            continue _fun116328
                        }
                    case 983:
                        var19 = var12;
                        var14 = var19.return;
                        var14 = var14.bind(var19)();
                        SaveGenerator(address = 1000);
                    case 998:
                        return var14;
                    case 1000:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 19);
                        if (var19) {
                            _fun116328_ip = 1020;
                            continue _fun116328
                        }
                    case 1006: // try_end3
                        var19 = var13;
                        if (var19) {
                            _fun116328_ip = 1015;
                            continue _fun116328
                        }
                    case 1012: // try_end10
                        return var18;
                    case 1015: // try_start_11
                        var18 = var10;
                        throw var18;
                    case 1020:
                        var18 = var13;
                        if (var18) {
                            _fun116328_ip = 1029;
                            continue _fun116328
                        }
                    case 1026: // try_end11
                        return var14;
                    case 1029: // try_start_12
                        var14 = var10;
                        throw var14;
                    case 1034: // catch_target3
                        CatchBlockStart(arg_register = 14);
                        var18 = var13;
                        if (var18) {
                            _fun116328_ip = 1044;
                            continue _fun116328
                        }
                    case 1042:
                        throw var14;
                    case 1044:
                        var14 = var10;
                        throw var14;
                    case 1049: // try_start_4
                        var18 = var16;
                        var14 = var18;
                        if (!var18) {
                            _fun116328_ip = 1071;
                            continue _fun116328
                        }
                    case 1058:
                        var18 = var12;
                        var18 = var18.return;
                        var14 = var17 != var18;
                    case 1071:
                        if (!var14) {
                            _fun116328_ip = 1097;
                            continue _fun116328
                        }
                    case 1074:
                        var18 = var12;
                        var14 = var18.return;
                        var14 = var14.bind(var18)();
                        SaveGenerator(address = 1091);
                    case 1089:
                        return var14;
                    case 1091:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 18);
                        if (var18) {
                            _fun116328_ip = 1111;
                            continue _fun116328
                        }
                    case 1097: // try_end4
                        var18 = var13;
                        if (var18) {
                            _fun116328_ip = 1106;
                            continue _fun116328
                        }
                    case 1103: // try_end12
                        return var15;
                    case 1106: // try_start_13
                        var15 = var10;
                        throw var15;
                    case 1111:
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1120;
                            continue _fun116328
                        }
                    case 1117: // try_end13
                        return var14;
                    case 1120: // try_start_14
                        var14 = var10;
                        throw var14;
                    case 1125: // catch_target4
                        CatchBlockStart(arg_register = 14);
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1135;
                            continue _fun116328
                        }
                    case 1133:
                        throw var14;
                    case 1135:
                        var14 = var10;
                        throw var14;
                    case 1140: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var13 = true;
                    case 1144: // try_start_6 // try_end5
                        var15 = var16;
                        var14 = var15;
                        if (!var15) {
                            _fun116328_ip = 1166;
                            continue _fun116328
                        }
                    case 1153:
                        var15 = var12;
                        var15 = var15.return;
                        var14 = var17 != var15;
                    case 1166:
                        if (!var14) {
                            _fun116328_ip = 1192;
                            continue _fun116328
                        }
                    case 1169:
                        var15 = var12;
                        var14 = var15.return;
                        var14 = var14.bind(var15)();
                        SaveGenerator(address = 1186);
                    case 1184:
                        return var14;
                    case 1186:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 15);
                        if (var15) {
                            _fun116328_ip = 1247;
                            continue _fun116328
                        }
                    case 1192: // try_end6
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1242;
                            continue _fun116328
                        }
                    case 1198:
                        var18 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var7];
                        var19 = var18.bind(var3)(var15);
                        var18 = var19.dispatch;
                        var15 = {};
                        var20 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                        var15.type = var20;
                        var15 = var18.bind(var19)(var15);
                    case 1237: // try_end14
                        _fun116328_ip = 1490;
                        continue _fun116328;
                    case 1242: // try_start_15
                        var15 = var10;
                        throw var15;
                    case 1247:
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1256;
                            continue _fun116328
                        }
                    case 1253: // try_end15
                        return var14;
                    case 1256: // try_start_16
                        var14 = var10;
                        throw var14;
                    case 1261: // catch_target6
                        CatchBlockStart(arg_register = 14);
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1271;
                            continue _fun116328
                        }
                    case 1269:
                        throw var14;
                    case 1271:
                        var14 = var10;
                        throw var14;
                    case 1276: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 14);
                    case 1278: // try_start_7
                        var15 = var16;
                        if (!var16) {
                            _fun116328_ip = 1297;
                            continue _fun116328
                        }
                    case 1284:
                        var16 = var12;
                        var16 = var16.return;
                        var15 = var17 != var16;
                    case 1297:
                        if (!var15) {
                            _fun116328_ip = 1323;
                            continue _fun116328
                        }
                    case 1300:
                        var15 = var12;
                        var12 = var15.return;
                        var12 = var12.bind(var15)();
                        SaveGenerator(address = 1317);
                    case 1315:
                        return var12;
                    case 1317:
                        ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 15);
                        if (var15) {
                            _fun116328_ip = 1336;
                            continue _fun116328
                        }
                    case 1323: // try_end7
                        var15 = var13;
                        if (var15) {
                            _fun116328_ip = 1331;
                            continue _fun116328
                        }
                    case 1329:
                        throw var14;
                    case 1331:
                        var14 = var10;
                        throw var14;
                    case 1336:
                        var14 = var13;
                        if (var14) {
                            _fun116328_ip = 1345;
                            continue _fun116328
                        }
                    case 1342: // try_end16
                        return var12;
                    case 1345: // try_start_17
                        var12 = var10;
                        throw var12;
                    case 1350: // catch_target7
                        CatchBlockStart(arg_register = 12);
                        if (var13) {
                            _fun116328_ip = 1357;
                            continue _fun116328
                        }
                    case 1355:
                        throw var12;
                    case 1357:
                        throw var10;
                    case 1359: // try_end17
                        return var8;
                    case 1362:
                        return var6;
                    case 1365: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                        CatchBlockStart(arg_register = 8);
                        var2 = var8;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var10 = 'GUILD_SETTINGS_ROLES_SAVE_FAIL';
                        var5.type = var10;
                        var8 = var8.body;
                        var11 = var8;
                        var10 = null;
                        var12 = var10 == var8;
                        var8 = undefined;
                        if (var12) {
                            _fun116328_ip = 1428;
                            continue _fun116328
                        }
                    case 1423:
                        var8 = var11.message;
                    case 1428:
                        var9 = var8;
                        if (!(var10 == var8)) {
                            _fun116328_ip = 1469;
                            continue _fun116328
                        }
                    case 1435:
                        var8 = global;
                        var11 = var8.Object;
                        var10 = var11.values;
                        var8 = var2;
                        var8 = var8.body;
                        var10 = var10.bind(var11)(var8);
                        var8 = 0;
                        var8 = var10[var8];
                        _fun116328_ip = 1472;
                        continue _fun116328;
                    case 1469:
                        var8 = var9;
                    case 1472:
                        var5.message = var8;
                        var5 = var6.bind(var7)(var5);
                        var4 = var4.throwErr;
                        if (var4) {
                            _fun116328_ip = 1493;
                            continue _fun116328
                        }
                    case 1490:
                        return var3;
                    case 1493:
                        throw var2;
                    case 1495:
                        return var1;
                    case 1498:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: updateRoleSort, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_SORT_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.roles = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleSort = var3;
    var3 = function() { // Original name: init, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_INIT';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.init = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateRolePermissions, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.flag = var4;
        var4 = arg2;
        var1.allow = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRolePermissions = var3;
    var3 = function(arg0, arg1) { // Original name: updateRolePermissionSet, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.permissions = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRolePermissionSet = var3;
    var3 = function(arg0) { // Original name: clearRolePermissions, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearRolePermissions = var3;
    var3 = function(arg0, arg1) { // Original name: updateRoleName, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_NAME';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.name = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleName = var3;
    var3 = function(arg0, arg1) { // Original name: updateRoleDescription, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.description = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleDescription = var3;
    var3 = function(arg0, arg1) { // Original name: updateRoleColor, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_COLOR';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.color = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleColor = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateRoleColors, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_COLORS';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.colors = var4;
        var4 = arg2;
        var1.currentStyle = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleColors = var3;
    var3 = function(arg0, arg1) { // Original name: updateRoleStyles, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.currentStyle = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleStyles = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: toggleRoleSettings, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.hoist = var4;
        var4 = arg2;
        var1.mentionable = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleRoleSettings = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateRoleIcon, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var4 = arg1;
        var1.icon = var4;
        var4 = arg2;
        var1.unicodeEmoji = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleIcon = var3;
    var3 = function(arg0, arg1) { // Original name: updateRoleConnectionConfigurations, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS';
        var1.type = var4;
        var4 = arg0;
        var1.roleId = var4;
        var4 = arg1;
        var1.roleConnectionConfigurations = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRoleConnectionConfigurations = var3;
    var1 = function() { // Original name: saveRoleSettings, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveRoleSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 806, 4635, 9807, 2]);