// modules/application_commands/CommandPermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function arg0, arg1() {
        _fun92931: for (var _fun92931_ip = 0;;) switch (_fun92931_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92931_ip = 46;
                    continue _fun92931
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92931_ip = 55;
                    continue _fun92931
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92931_ip = 345;
                    continue _fun92931
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92931_ip = 323;
                    continue _fun92931
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92931_ip = 283;
                    continue _fun92931
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92931_ip = 270;
                    continue _fun92931
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
                    _fun92931_ip = 163;
                    continue _fun92931
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92931_ip = 179;
                    continue _fun92931
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92931_ip = 249;
                    continue _fun92931
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92931_ip = 249;
                    continue _fun92931
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92931_ip = 234;
                    continue _fun92931
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92931_ip = 247;
                    continue _fun92931
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92931_ip = 265;
                continue _fun92931;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92931_ip = 283;
                continue _fun92931;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92931_ip = 323;
                    continue _fun92931
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
                    _fun92931_ip = 330;
                    continue _fun92931
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92932: for (var _fun92932_ip = 0;;) switch (_fun92932_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92932_ip = 56;
                                continue _fun92932
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
                            _fun92932_ip = 67;
                            continue _fun92932;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun92933: for (var _fun92933_ip = 0;;) switch (_fun92933_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92933_ip = 23;
                    continue _fun92933
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92933_ip = 33;
                    continue _fun92933
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
                    _fun92933_ip = 70;
                    continue _fun92933
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92933_ip = 55;
                    continue _fun92933
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var1 = true;
        var0 = arg0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var1 = false;
        var0 = arg0;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot12 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun92936: for (var _fun92936_ip = 0;;) switch (_fun92936_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun92936_ip = 225;
                    continue _fun92936
                }
            case 15:
                var7 = var2.id;
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun92936_ip = 51;
                    continue _fun92936
                }
            case 33:
                var1 = var2.parent_id;
                if (!(var0 == var1)) {
                    _fun92936_ip = 48;
                    continue _fun92936
                }
            case 43:
                var1 = var2.id;
            case 48:
                var7 = var1;
            case 51:
                var10 = _closure1_slot0;
                var1 = _closure1_slot3;
                var4 = 11;
                var5 = var1[var4];
                var8 = undefined;
                var6 = var10.bind(var8)(var5);
                var5 = var6.toPermissionKey;
                var9 = 5;
                var1 = var1[var9];
                var1 = var10.bind(var8)(var1);
                var1 = var1.ApplicationCommandPermissionType;
                var1 = var1.CHANNEL;
                var1 = var5.bind(var6)(var7, var1);
                var1 = var3[var1];
                if (!(var0 == var1)) {
                    _fun92936_ip = 217;
                    continue _fun92936
                }
            case 120:
                var7 = _closure1_slot0;
                var2 = _closure1_slot3;
                var4 = var2[var4];
                var6 = var7.bind(var8)(var4);
                var5 = var6.toPermissionKey;
                var4 = 10;
                var4 = var2[var4];
                var11 = var7.bind(var8)(var4);
                var10 = var11.allChannelsSentinel;
                var4 = arg2;
                var4 = var10.bind(var11)(var4);
                var2 = var2[var9];
                var2 = var7.bind(var8)(var2);
                var2 = var2.ApplicationCommandPermissionType;
                var2 = var2.CHANNEL;
                var2 = var5.bind(var6)(var4, var2);
                var3 = var3[var2];
                var4 = var0 != var3;
                var2 = null;
                if (!var4) {
                    _fun92936_ip = 215;
                    continue _fun92936
                }
            case 209:
                var2 = var3.permission;
            case 215:
                return var2;
            case 217:
                var1 = var1.permission;
                return var1;
            case 225:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun92937: for (var _fun92937_ip = 0;;) switch (_fun92937_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun92937_ip = 328;
                    continue _fun92937
                }
            case 15:
                var1 = arg4;
                if (var1) {
                    _fun92937_ip = 101;
                    continue _fun92937
                }
            case 21:
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 11;
                var1 = var8[var1];
                var2 = undefined;
                var5 = var6.bind(var2)(var1);
                var3 = var5.toPermissionKey;
                var1 = 5;
                var1 = var8[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.ApplicationCommandPermissionType;
                var2 = var1.USER;
                var1 = arg2;
                var1 = var3.bind(var5)(var1, var2);
                var1 = var4[var1];
                if (!(var0 != var1)) {
                    _fun92937_ip = 101;
                    continue _fun92937
                }
            case 93:
                var1 = var1.permission;
                return var1;
            case 101:
                var3 = _closure1_slot9;
                var9 = undefined;
                var1 = arg3;
                var13 = var3.bind(var9)(var1);
                var3 = var13.bind(var9)();
                var8 = var3.done;
                var1 = false;
                var6 = true;
                var5 = 11;
                var10 = 5;
                var12 = var3;
                var11 = false;
                var3 = false;
                if (var8) {
                    _fun92937_ip = 243;
                    continue _fun92937
                }
            case 147:
                var16 = var12.value;
                var17 = _closure1_slot0;
                var8 = _closure1_slot3;
                var14 = var8[var5];
                var15 = var17.bind(var9)(var14);
                var14 = var15.toPermissionKey;
                var8 = var8[var10];
                var8 = var17.bind(var9)(var8);
                var8 = var8.ApplicationCommandPermissionType;
                var8 = var8.ROLE;
                var8 = var14.bind(var15)(var16, var8);
                var8 = var4[var8];
                if (!(var0 != var8)) {
                    _fun92937_ip = 221;
                    continue _fun92937
                }
            case 210:
                var8 = var8.permission;
                var11 = true;
                if (var8) {
                    _fun92937_ip = 241;
                    continue _fun92937
                }
            case 221:
                var15 = var13.bind(var9)();
                var8 = var15.done;
                var12 = var15;
                var3 = var11;
                if (var8) {
                    _fun92937_ip = 243;
                    continue _fun92937
                }
            case 239:
                _fun92937_ip = 147;
                continue _fun92937;
            case 241:
                return var6;
            case 243:
                if (var3) {
                    _fun92937_ip = 326;
                    continue _fun92937
                }
            case 246:
                var6 = var0 != var7;
                var3 = null;
                if (!var6) {
                    _fun92937_ip = 309;
                    continue _fun92937
                }
            case 255:
                var8 = _closure1_slot0;
                var2 = _closure1_slot3;
                var5 = var2[var5];
                var6 = var8.bind(var9)(var5);
                var5 = var6.toPermissionKey;
                var2 = var2[var10];
                var2 = var8.bind(var9)(var2);
                var2 = var2.ApplicationCommandPermissionType;
                var2 = var2.ROLE;
                var2 = var5.bind(var6)(var7, var2);
                var3 = var4[var2];
            case 309:
                var4 = var0 != var3;
                var2 = null;
                if (!var4) {
                    _fun92937_ip = 324;
                    continue _fun92937
                }
            case 318:
                var2 = var3.permission;
            case 324:
                return var2;
            case 326:
                return var1;
            case 328:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var12 = 0;
    var5 = var8[var12];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var5 = var5.ChannelRecordBase;
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var8[var11];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var10 = 2;
    var5 = var8[var10];
    var5 = var7.bind(var0)(var5);
    var5 = var5.BuiltInSectionId;
    var _closure1_slot6 = var5;
    var9 = 3;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.Permissions;
    var _closure1_slot7 = var5;
    var5 = {};
    var5.ALLOWED = var12;
    var6 = 'ALLOWED';
    var5[var12] = var6;
    var5.NSFW_NOT_ALLOWED = var11;
    var6 = 'NSFW_NOT_ALLOWED';
    var5[var11] = var6;
    var5.WRONG_COMMAND_TYPE = var10;
    var6 = 'WRONG_COMMAND_TYPE';
    var5[var10] = var6;
    var5.PREDICATE_FAILED = var9;
    var6 = 'PREDICATE_FAILED';
    var5[var9] = var6;
    var9 = 4;
    var5.CONTEXT_NOT_ALLOWED = var9;
    var6 = 'CONTEXT_NOT_ALLOWED';
    var5[var9] = var6;
    var9 = 5;
    var5.MISSING_BASE_PERMISSIONS = var9;
    var6 = 'MISSING_BASE_PERMISSIONS';
    var5[var9] = var6;
    var9 = 6;
    var5.CHANNEL_DENIED = var9;
    var6 = 'CHANNEL_DENIED';
    var5[var9] = var6;
    var9 = 7;
    var5.USER_DENIED = var9;
    var6 = 'USER_DENIED';
    var5[var9] = var6;
    var _closure1_slot8 = var5;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/application_commands/CommandPermissionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.HasAccessResult = var5;
    var4 = function arg0, arg1, arg2() {
        _fun92938: for (var _fun92938_ip = 0;;) switch (_fun92938_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = arg2;
                var14 = var1.context;
                var7 = var1.commandTypes;
                var0 = var1.allowNsfw;
                var5 = var1.computedPermissions;
                var12 = var1.userId;
                var11 = var1.roleIds;
                var10 = var1.isImpersonating;
                var13 = var1.hasBaseAccessPermissions;
                var4 = var3.applicationAllowedForUser;
                var8 = var3.applicationAllowedForChannel;
                var1 = var3.isGuildInstalled;
                var15 = var3.isUserInstalled;
                var16 = var3.commandBotId;
                var6 = var7.includes;
                var3 = var2.type;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun92938_ip = 118;
                    continue _fun92938
                }
            case 103:
                var3 = _closure1_slot8;
                var3 = var3.WRONG_COMMAND_TYPE;
                return var3;
            case 118:
                var3 = var2.nsfw;
                if (!var3) {
                    _fun92938_ip = 145;
                    continue _fun92938
                }
            case 127:
                if (var0) {
                    _fun92938_ip = 145;
                    continue _fun92938
                }
            case 130:
                var0 = _closure1_slot8;
                var0 = var0.NSFW_NOT_ALLOWED;
                return var0;
            case 145:
                var3 = null;
                var0 = var3 != var14;
                var6 = undefined;
                var9 = undefined;
                if (!var0) {
                    _fun92938_ip = 193;
                    continue _fun92938
                }
            case 158:
                var7 = _closure1_slot0;
                var17 = _closure1_slot3;
                var0 = 4;
                var0 = var17[var0];
                var7 = var7.bind(var6)(var0);
                var0 = var7.computeCommandContextType;
                var9 = var0.bind(var7)(var14, var16);
            case 193:
                var0 = var2.contexts;
                if (!(var3 == var0)) {
                    _fun92938_ip = 362;
                    continue _fun92938
                }
            case 206:
                var16 = var2.inputType;
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var7 = 5;
                var7 = var18[var7];
                var7 = var17.bind(var6)(var7);
                var7 = var7.ApplicationCommandInputType;
                var7 = var7.BOT;
                if (!(var16 === var7)) {
                    _fun92938_ip = 400;
                    continue _fun92938
                }
            case 254:
                var16 = var2.dmPermission;
                var7 = false;
                if (!(var7 === var16)) {
                    _fun92938_ip = 302;
                    continue _fun92938
                }
            case 266:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var7 = 6;
                var7 = var17[var7];
                var7 = var16.bind(var6)(var7);
                var7 = var7.InteractionContextType;
                var7 = var7.BOT_DM;
                if (!(var9 !== var7)) {
                    _fun92938_ip = 350;
                    continue _fun92938
                }
            case 302:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var7 = 6;
                var7 = var17[var7];
                var7 = var16.bind(var6)(var7);
                var7 = var7.InteractionContextType;
                var7 = var7.PRIVATE_CHANNEL;
                if (!(var9 === var7)) {
                    _fun92938_ip = 400;
                    continue _fun92938
                }
            case 338:
                var7 = _closure1_slot8;
                var7 = var7.CONTEXT_NOT_ALLOWED;
                return var7;
            case 350:
                var0 = _closure1_slot8;
                var0 = var0.CONTEXT_NOT_ALLOWED;
                return var0;
            case 362:
                if (!(var3 != var9)) {
                    _fun92938_ip = 400;
                    continue _fun92938
                }
            case 366:
                var7 = var2.contexts;
                var0 = var7.includes;
                var0 = var0.bind(var7)(var9);
                if (var0) {
                    _fun92938_ip = 400;
                    continue _fun92938
                }
            case 385:
                var0 = _closure1_slot8;
                var0 = var0.CONTEXT_NOT_ALLOWED;
                return var0;
            case 400:
                var0 = var2.predicate;
                if (!(var3 != var0)) {
                    _fun92938_ip = 479;
                    continue _fun92938
                }
            case 410:
                var7 = _closure1_slot4;
                var7 = var14 instanceof var7;
                if (!var7) {
                    _fun92938_ip = 479;
                    continue _fun92938
                }
            case 424:
                var16 = _closure1_slot5;
                var9 = var16.getGuild;
                var7 = var14.guild_id;
                var16 = var9.bind(var16)(var7);
                var9 = var2.predicate;
                var7 = {};
                var7.channel = var14;
                var7.guild = var16;
                var7 = var9.bind(var2)(var7);
                if (var7) {
                    _fun92938_ip = 479;
                    continue _fun92938
                }
            case 467:
                var0 = _closure1_slot8;
                var0 = var0.PREDICATE_FAILED;
                return var0;
            case 479:
                var9 = var2.applicationId;
                var7 = _closure1_slot6;
                var7 = var7.BUILT_IN;
                if (!(var9 !== var7)) {
                    _fun92938_ip = 1144;
                    continue _fun92938
                }
            case 504:
                var7 = var3 != var14;
                var9 = undefined;
                if (!var7) {
                    _fun92938_ip = 544;
                    continue _fun92938
                }
            case 513:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var7 = 4;
                var7 = var17[var7];
                var16 = var16.bind(var6)(var7);
                var7 = var16.getContextGuildId;
                var9 = var7.bind(var16)(var14);
            case 544:
                if (!(var3 != var9)) {
                    _fun92938_ip = 1132;
                    continue _fun92938
                }
            case 551:
                var17 = _closure1_slot2;
                var16 = _closure1_slot3;
                var7 = 7;
                var16 = var16[var7];
                var18 = var17.bind(var6)(var16);
                var17 = var18.has;
                var16 = _closure1_slot7;
                var16 = var16.ADMINISTRATOR;
                var16 = var17.bind(var18)(var5, var16);
                if (var16) {
                    _fun92938_ip = 1120;
                    continue _fun92938
                }
            case 598:
                if (!var15) {
                    _fun92938_ip = 659;
                    continue _fun92938
                }
            case 601:
                var17 = var2.integration_types;
                if (!(var3 != var17)) {
                    _fun92938_ip = 659;
                    continue _fun92938
                }
            case 611:
                var16 = var17.includes;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var15 = 8;
                var15 = var19[var15];
                var15 = var18.bind(var6)(var15);
                var15 = var15.ApplicationIntegrationType;
                var15 = var15.USER_INSTALL;
                var15 = var16.bind(var17)(var15);
                if (var15) {
                    _fun92938_ip = 1108;
                    continue _fun92938
                }
            case 659:
                if (var13) {
                    _fun92938_ip = 738;
                    continue _fun92938
                }
            case 662:
                if (!var1) {
                    _fun92938_ip = 738;
                    continue _fun92938
                }
            case 665:
                var1 = var2.integration_types;
                if (!(var3 != var1)) {
                    _fun92938_ip = 726;
                    continue _fun92938
                }
            case 675:
                var15 = var2.integration_types;
                var13 = var15.includes;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 8;
                var1 = var17[var1];
                var1 = var16.bind(var6)(var1);
                var1 = var1.ApplicationIntegrationType;
                var1 = var1.GUILD_INSTALL;
                var1 = var13.bind(var15)(var1);
                if (!var1) {
                    _fun92938_ip = 738;
                    continue _fun92938
                }
            case 726:
                var1 = _closure1_slot8;
                var1 = var1.MISSING_BASE_PERMISSIONS;
                return var1;
            case 738:
                var1 = _closure1_slot4;
                var1 = var14 instanceof var1;
                if (!var1) {
                    _fun92938_ip = 853;
                    continue _fun92938
                }
            case 749:
                var13 = _closure1_slot1;
                var15 = _closure1_slot3;
                var1 = 9;
                var1 = var15[var1];
                var15 = var13.bind(var6)(var1);
                var13 = var6 !== var8;
                var1 = 'missing applicationAllowedForChannel';
                var1 = var15.bind(var6)(var13, var1);
                var13 = _closure1_slot13;
                var1 = var2.permissions;
                var13 = var13.bind(var6)(var1, var14, var9);
                var1 = _closure1_slot12;
                var1 = var1.bind(var6)(var13);
                if (var1) {
                    _fun92938_ip = 1096;
                    continue _fun92938
                }
            case 817:
                var1 = _closure1_slot11;
                var1 = var1.bind(var6)(var13);
                if (var1) {
                    _fun92938_ip = 853;
                    continue _fun92938
                }
            case 829:
                var1 = _closure1_slot12;
                var1 = var1.bind(var6)(var8);
                if (!var1) {
                    _fun92938_ip = 853;
                    continue _fun92938
                }
            case 841:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_DENIED;
                return var1;
            case 853:
                var8 = _closure1_slot14;
                var24 = var2.permissions;
                var25 = undefined;
                var23 = var9;
                var22 = var12;
                var21 = var11;
                var20 = var10;
                var8 = var25[var8](var24, var23, var22, var21, var20, var19);
                var1 = _closure1_slot11;
                var1 = var1.bind(var6)(var8);
                if (var1) {
                    _fun92938_ip = 1084;
                    continue _fun92938
                }
            case 896:
                var1 = _closure1_slot12;
                var1 = var1.bind(var6)(var8);
                if (var1) {
                    _fun92938_ip = 1072;
                    continue _fun92938
                }
            case 911:
                var1 = _closure1_slot12;
                var1 = var1.bind(var6)(var4);
                if (var1) {
                    _fun92938_ip = 1072;
                    continue _fun92938
                }
            case 926:
                var1 = var2.defaultMemberPermissions;
                if (!(var3 == var1)) {
                    _fun92938_ip = 948;
                    continue _fun92938
                }
            case 936:
                var1 = _closure1_slot8;
                var1 = var1.ALLOWED;
                _fun92938_ip = 1070;
                continue _fun92938;
            case 948:
                var4 = _closure1_slot2;
                var11 = _closure1_slot3;
                var3 = var11[var7];
                var9 = var4.bind(var6)(var3);
                var8 = var9.equals;
                var4 = var2.defaultMemberPermissions;
                var10 = _closure1_slot0;
                var3 = 10;
                var3 = var11[var3];
                var3 = var10.bind(var6)(var3);
                var3 = var3.DISABLED_BY_DEFAULT_PERMISSION_FLAG;
                var3 = var8.bind(var9)(var4, var3);
                if (var3) {
                    _fun92938_ip = 1057;
                    continue _fun92938
                }
            case 1008:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.has;
                var2 = var2.defaultMemberPermissions;
                var2 = var3.bind(var4)(var5, var2);
                if (!var2) {
                    _fun92938_ip = 1057;
                    continue _fun92938
                }
            case 1045:
                var2 = _closure1_slot8;
                var2 = var2.ALLOWED;
                _fun92938_ip = 1067;
                continue _fun92938;
            case 1057:
                var3 = _closure1_slot8;
                var2 = var3.USER_DENIED;
            case 1067:
                var1 = var2;
            case 1070:
                _fun92938_ip = 1082;
                continue _fun92938;
            case 1072:
                var2 = _closure1_slot8;
                var1 = var2.USER_DENIED;
            case 1082:
                _fun92938_ip = 1094;
                continue _fun92938;
            case 1084:
                var2 = _closure1_slot8;
                var1 = var2.ALLOWED;
            case 1094:
                return var1;
            case 1096:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_DENIED;
                return var1;
            case 1108:
                var1 = _closure1_slot8;
                var1 = var1.ALLOWED;
                return var1;
            case 1120:
                var1 = _closure1_slot8;
                var1 = var1.ALLOWED;
                return var1;
            case 1132:
                var1 = _closure1_slot8;
                var1 = var1.ALLOWED;
                return var1;
            case 1144:
                var0 = _closure1_slot8;
                var0 = var0.ALLOWED;
                return var0;
        }
    };
    var2.hasAccess = var4;
    var2.computeAllowedForChannel = var3;
    var2.computeAllowedForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1410, 4511, 660, 7917, 4513, 1636, 484, 5314, 44, 4510, 4512, 2]);