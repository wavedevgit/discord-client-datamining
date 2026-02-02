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
    var0 = function arg0() {
        var0 = function arg0() {
            _fun115950: for (var _fun115950_ip = 0;;) switch (_fun115950_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun115950_ip = 74;
                        continue _fun115950
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
        var2 = function arg0() {
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
        var4 = function() {
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
        var4 = function arg0() {
            _fun115954: for (var _fun115954_ip = 0;;) switch (_fun115954_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun115954_ip = 54;
                        continue _fun115954
                    }
                case 22:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun115954_ip = 88;
                    continue _fun115954;
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
        var3 = function arg0() {
            _fun115955: for (var _fun115955_ip = 0;;) switch (_fun115955_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun115955_ip = 54;
                        continue _fun115955
                    }
                case 22:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun115955_ip = 76;
                    continue _fun115955;
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun115958: for (var _fun115958_ip = 0;;) switch (_fun115958_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[5];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun115958_ip = 1499;
                            continue _fun115958
                        }
                    case 13:
                        var22 = arg0;
                        var21 = arg1;
                        var6 = arg2;
                        var14 = arg3;
                        var23 = arg4;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun115958_ip = 36;
                            continue _fun115958
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
                            _fun115958_ip = 1496;
                            continue _fun115958
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
                            _fun115958_ip = 148;
                            continue _fun115958
                        }
                    case 134:
                        var15 = var6;
                        var18 = var15.length;
                        var15 = 0;
                        var8 = var18 > var15;
                    case 148:
                        if (!var8) {
                            _fun115958_ip = 199;
                            continue _fun115958
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
                            _fun115958_ip = 1363;
                            continue _fun115958
                        }
                    case 199:
                        var8 = var21;
                        if (!(var17 != var8)) {
                            _fun115958_ip = 480;
                            continue _fun115958
                        }
                    case 209:
                        var8 = var21;
                        var8 = var8.length;
                        var20 = 0;
                        var19 = 2;
                        var18 = '';
                        if (!(var8 > var20)) {
                            _fun115958_ip = 480;
                            continue _fun115958
                        }
                    case 233:
                        var15 = var21;
                        var8 = var15.pop;
                        var15 = var8.bind(var15)();
                        var28 = var15;
                        var15 = var17 != var15;
                        var8 = var15;
                        if (!var15) {
                            _fun115958_ip = 271;
                            continue _fun115958
                        }
                    case 259:
                        var15 = var28;
                        var15 = var15.name;
                        var8 = var18 !== var15;
                    case 271:
                        if (!var8) {
                            _fun115958_ip = 458;
                            continue _fun115958
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
                            _fun115958_ip = 342;
                            continue _fun115958
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
                            _fun115958_ip = 389;
                            continue _fun115958
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
                            _fun115958_ip = 1360;
                            continue _fun115958
                        }
                    case 458:
                        var15 = var21;
                        if (!(var17 != var15)) {
                            _fun115958_ip = 480;
                            continue _fun115958
                        }
                    case 465:
                        var15 = var21;
                        var15 = var15.length;
                        if (var15 > var20) {
                            _fun115958_ip = 233;
                            continue _fun115958
                        }
                    case 480:
                        var15 = var23;
                        if (!(var17 != var15)) {
                            _fun115958_ip = 1199;
                            continue _fun115958
                        }
                    case 490:
                        var15 = var14;
                        if (!(var17 != var15)) {
                            _fun115958_ip = 1199;
                            continue _fun115958
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
                            _fun115958_ip = 553;
                            continue _fun115958
                        }
                    case 529:
                        var15 = var14.Symbol;
                        var31 = var15.asyncIterator;
                        var15 = var14.Symbol;
                        var30 = var15.iterator;
                    case 553:
                        var29 = '@@asyncIterator';
                        var28 = '@@iterator';
                        var27 = undefined;
                        var26 = var7;
                    case 568:
                        if (!var31) {
                            _fun115958_ip = 582;
                            continue _fun115958
                        }
                    case 571:
                        var18 = var19[var31];
                        var27 = var18;
                        if (!(var17 == var27)) {
                            _fun115958_ip = 681;
                            continue _fun115958
                        }
                    case 582:
                        if (!var30) {
                            _fun115958_ip = 596;
                            continue _fun115958
                        }
                    case 585:
                        var15 = var19[var30];
                        var27 = var15;
                        if (!(var17 == var27)) {
                            _fun115958_ip = 645;
                            continue _fun115958
                        }
                    case 596:
                        var20 = parseFloat(var26);
                        var26 = var20 - 1;
                        var31 = var29;
                        var30 = var28;
                        if (var20) {
                            _fun115958_ip = 568;
                            continue _fun115958
                        }
                    case 611:
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
                    case 645:
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
                        _fun115958_ip = 691;
                        continue _fun115958;
                    case 681:
                        var14 = var18.call;
                        var15 = var14.bind(var18)(var19);
                    case 691:
                        var12 = var15;
                        var14 = var15.next;
                        var15 = var14.bind(var15)();
                        SaveGenerator(address = 707);
                    case 705:
                        return var15;
                    case 707:
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 14);
                        if (var14) {
                            _fun115958_ip = 1050;
                            continue _fun115958
                        }
                    case 716:
                        var24 = var15;
                        var14 = var15.done;
                        var14 = !var14;
                        var16 = var14;
                        var20 = 3;
                        if (!var14) {
                            _fun115958_ip = 863;
                            continue _fun115958
                        }
                    case 739:
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
                            _fun115958_ip = 799;
                            continue _fun115958
                        }
                    case 793:
                        var14 = new Array(0);
                        _fun115958_ip = 802;
                        continue _fun115958;
                    case 799:
                        var14 = var25;
                    case 802:
                        var18 = var19.bind(var26)(var18, var27, var14);
                        SaveGenerator(address = 813);
                    case 811:
                        return var18;
                    case 813:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 14);
                        if (var14) {
                            _fun115958_ip = 959;
                            continue _fun115958
                        }
                    case 822:
                        var16 = false;
                        var19 = var12;
                        var14 = var19.next;
                        var19 = var14.bind(var19)();
                        SaveGenerator(address = 840);
                    case 838:
                        return var19;
                    case 840:
                        ResumeGenerator(result_out_reg = 19, return_bool_out_reg = 14);
                        if (var14) {
                            _fun115958_ip = 868;
                            continue _fun115958
                        }
                    case 846:
                        var24 = var19;
                        var14 = var19.done;
                        var14 = !var14;
                        var16 = var14;
                        if (var14) {
                            _fun115958_ip = 739;
                            continue _fun115958
                        }
                    case 863: // try_end0
                        _fun115958_ip = 1145;
                        continue _fun115958;
                    case 868: // try_start_2 // try_end1
                        var20 = var16;
                        var14 = var20;
                        if (!var20) {
                            _fun115958_ip = 890;
                            continue _fun115958
                        }
                    case 877:
                        var20 = var12;
                        var20 = var20.return;
                        var14 = var17 != var20;
                    case 890:
                        if (!var14) {
                            _fun115958_ip = 916;
                            continue _fun115958
                        }
                    case 893:
                        var20 = var12;
                        var14 = var20.return;
                        var14 = var14.bind(var20)();
                        SaveGenerator(address = 910);
                    case 908:
                        return var14;
                    case 910:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 20);
                        if (var20) {
                            _fun115958_ip = 930;
                            continue _fun115958
                        }
                    case 916: // try_end2
                        var20 = var13;
                        if (var20) {
                            _fun115958_ip = 925;
                            continue _fun115958
                        }
                    case 922: // try_end8
                        return var19;
                    case 925: // try_start_9
                        var19 = var10;
                        throw var19;
                    case 930:
                        var19 = var13;
                        if (var19) {
                            _fun115958_ip = 939;
                            continue _fun115958
                        }
                    case 936: // try_end9
                        return var14;
                    case 939: // try_start_10
                        var14 = var10;
                        throw var14;
                    case 944: // catch_target2
                        CatchBlockStart(arg_register = 14);
                        var19 = var13;
                        if (var19) {
                            _fun115958_ip = 954;
                            continue _fun115958
                        }
                    case 952:
                        throw var14;
                    case 954:
                        var14 = var10;
                        throw var14;
                    case 959: // try_start_3
                        var19 = var16;
                        var14 = var19;
                        if (!var19) {
                            _fun115958_ip = 981;
                            continue _fun115958
                        }
                    case 968:
                        var19 = var12;
                        var19 = var19.return;
                        var14 = var17 != var19;
                    case 981:
                        if (!var14) {
                            _fun115958_ip = 1007;
                            continue _fun115958
                        }
                    case 984:
                        var19 = var12;
                        var14 = var19.return;
                        var14 = var14.bind(var19)();
                        SaveGenerator(address = 1001);
                    case 999:
                        return var14;
                    case 1001:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 19);
                        if (var19) {
                            _fun115958_ip = 1021;
                            continue _fun115958
                        }
                    case 1007: // try_end3
                        var19 = var13;
                        if (var19) {
                            _fun115958_ip = 1016;
                            continue _fun115958
                        }
                    case 1013: // try_end10
                        return var18;
                    case 1016: // try_start_11
                        var18 = var10;
                        throw var18;
                    case 1021:
                        var18 = var13;
                        if (var18) {
                            _fun115958_ip = 1030;
                            continue _fun115958
                        }
                    case 1027: // try_end11
                        return var14;
                    case 1030: // try_start_12
                        var14 = var10;
                        throw var14;
                    case 1035: // catch_target3
                        CatchBlockStart(arg_register = 14);
                        var18 = var13;
                        if (var18) {
                            _fun115958_ip = 1045;
                            continue _fun115958
                        }
                    case 1043:
                        throw var14;
                    case 1045:
                        var14 = var10;
                        throw var14;
                    case 1050: // try_start_4
                        var18 = var16;
                        var14 = var18;
                        if (!var18) {
                            _fun115958_ip = 1072;
                            continue _fun115958
                        }
                    case 1059:
                        var18 = var12;
                        var18 = var18.return;
                        var14 = var17 != var18;
                    case 1072:
                        if (!var14) {
                            _fun115958_ip = 1098;
                            continue _fun115958
                        }
                    case 1075:
                        var18 = var12;
                        var14 = var18.return;
                        var14 = var14.bind(var18)();
                        SaveGenerator(address = 1092);
                    case 1090:
                        return var14;
                    case 1092:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 18);
                        if (var18) {
                            _fun115958_ip = 1112;
                            continue _fun115958
                        }
                    case 1098: // try_end4
                        var18 = var13;
                        if (var18) {
                            _fun115958_ip = 1107;
                            continue _fun115958
                        }
                    case 1104: // try_end12
                        return var15;
                    case 1107: // try_start_13
                        var15 = var10;
                        throw var15;
                    case 1112:
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1121;
                            continue _fun115958
                        }
                    case 1118: // try_end13
                        return var14;
                    case 1121: // try_start_14
                        var14 = var10;
                        throw var14;
                    case 1126: // catch_target4
                        CatchBlockStart(arg_register = 14);
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1136;
                            continue _fun115958
                        }
                    case 1134:
                        throw var14;
                    case 1136:
                        var14 = var10;
                        throw var14;
                    case 1141: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var13 = true;
                    case 1145: // try_start_6 // try_end5
                        var15 = var16;
                        var14 = var15;
                        if (!var15) {
                            _fun115958_ip = 1167;
                            continue _fun115958
                        }
                    case 1154:
                        var15 = var12;
                        var15 = var15.return;
                        var14 = var17 != var15;
                    case 1167:
                        if (!var14) {
                            _fun115958_ip = 1193;
                            continue _fun115958
                        }
                    case 1170:
                        var15 = var12;
                        var14 = var15.return;
                        var14 = var14.bind(var15)();
                        SaveGenerator(address = 1187);
                    case 1185:
                        return var14;
                    case 1187:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 15);
                        if (var15) {
                            _fun115958_ip = 1248;
                            continue _fun115958
                        }
                    case 1193: // try_end6
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1243;
                            continue _fun115958
                        }
                    case 1199:
                        var18 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var7];
                        var19 = var18.bind(var3)(var15);
                        var18 = var19.dispatch;
                        var15 = {};
                        var20 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                        var15.type = var20;
                        var15 = var18.bind(var19)(var15);
                    case 1238: // try_end14
                        _fun115958_ip = 1491;
                        continue _fun115958;
                    case 1243: // try_start_15
                        var15 = var10;
                        throw var15;
                    case 1248:
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1257;
                            continue _fun115958
                        }
                    case 1254: // try_end15
                        return var14;
                    case 1257: // try_start_16
                        var14 = var10;
                        throw var14;
                    case 1262: // catch_target6
                        CatchBlockStart(arg_register = 14);
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1272;
                            continue _fun115958
                        }
                    case 1270:
                        throw var14;
                    case 1272:
                        var14 = var10;
                        throw var14;
                    case 1277: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 14);
                    case 1279: // try_start_7
                        var15 = var16;
                        if (!var16) {
                            _fun115958_ip = 1298;
                            continue _fun115958
                        }
                    case 1285:
                        var16 = var12;
                        var16 = var16.return;
                        var15 = var17 != var16;
                    case 1298:
                        if (!var15) {
                            _fun115958_ip = 1324;
                            continue _fun115958
                        }
                    case 1301:
                        var15 = var12;
                        var12 = var15.return;
                        var12 = var12.bind(var15)();
                        SaveGenerator(address = 1318);
                    case 1316:
                        return var12;
                    case 1318:
                        ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 15);
                        if (var15) {
                            _fun115958_ip = 1337;
                            continue _fun115958
                        }
                    case 1324: // try_end7
                        var15 = var13;
                        if (var15) {
                            _fun115958_ip = 1332;
                            continue _fun115958
                        }
                    case 1330:
                        throw var14;
                    case 1332:
                        var14 = var10;
                        throw var14;
                    case 1337:
                        var14 = var13;
                        if (var14) {
                            _fun115958_ip = 1346;
                            continue _fun115958
                        }
                    case 1343: // try_end16
                        return var12;
                    case 1346: // try_start_17
                        var12 = var10;
                        throw var12;
                    case 1351: // catch_target7
                        CatchBlockStart(arg_register = 12);
                        if (var13) {
                            _fun115958_ip = 1358;
                            continue _fun115958
                        }
                    case 1356:
                        throw var12;
                    case 1358:
                        throw var10;
                    case 1360: // try_end17
                        return var8;
                    case 1363:
                        return var6;
                    case 1366: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
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
                            _fun115958_ip = 1429;
                            continue _fun115958
                        }
                    case 1424:
                        var8 = var11.message;
                    case 1429:
                        var9 = var8;
                        if (!(var10 == var8)) {
                            _fun115958_ip = 1470;
                            continue _fun115958
                        }
                    case 1436:
                        var8 = global;
                        var11 = var8.Object;
                        var10 = var11.values;
                        var8 = var2;
                        var8 = var8.body;
                        var10 = var10.bind(var11)(var8);
                        var8 = 0;
                        var8 = var10[var8];
                        _fun115958_ip = 1473;
                        continue _fun115958;
                    case 1470:
                        var8 = var9;
                    case 1473:
                        var5.message = var8;
                        var5 = var6.bind(var7)(var5);
                        var4 = var4.throwErr;
                        if (var4) {
                            _fun115958_ip = 1494;
                            continue _fun115958
                        }
                    case 1491:
                        return var3;
                    case 1494:
                        throw var2;
                    case 1496:
                        return var1;
                    case 1499:
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
    var3 = function arg0() {
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
    var3 = function() {
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
    var3 = function arg0, arg1, arg2() {
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
    var3 = function arg0, arg1() {
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
    var3 = function arg0() {
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
    var3 = function arg0, arg1() {
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
    var3 = function arg0, arg1() {
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
    var3 = function arg0, arg1() {
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
    var3 = function arg0, arg1, arg2() {
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
    var3 = function arg0, arg1() {
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
    var3 = function arg0, arg1, arg2() {
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
    var3 = function arg0, arg1, arg2() {
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
    var3 = function arg0, arg1() {
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
    var1 = function() {
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 806, 4644, 9816, 2]);