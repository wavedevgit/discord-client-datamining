// utils/PermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var16 = metroImportDefault;
    var14 = metroImportAll;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var14;
    var _closure1_slot3 = var13;
    var0 = function arg0, arg1, arg2() {
        _fun24887: for (var _fun24887_ip = 0;;) switch (_fun24887_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[3];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun24887_ip = 14;
                    continue _fun24887
                }
            case 12:
                var1 = true;
            case 14:
                if (!var1) {
                    _fun24887_ip = 43;
                    continue _fun24887
                }
            case 17:
                var0 = arg1;
                var2 = var0.mfaLevel;
                var0 = _closure1_slot20;
                var0 = var0.ELEVATED;
                var1 = var2 === var0;
            case 43:
                if (!var1) {
                    _fun24887_ip = 70;
                    continue _fun24887
                }
            case 46:
                var2 = _closure1_slot12;
                var0 = var2.getId;
                var2 = var0.bind(var2)();
                var0 = arg2;
                var1 = var0 === var2;
            case 70:
                var0 = var5;
                if (!var1) {
                    _fun24887_ip = 152;
                    continue _fun24887
                }
            case 76:
                var3 = _closure1_slot17;
                var1 = var3.getCurrentUser;
                var1 = var1.bind(var3)();
                var3 = null;
                var3 = var3 != var1;
                if (!var3) {
                    _fun24887_ip = 107;
                    continue _fun24887
                }
            case 101:
                var3 = var1.mfaEnabled;
            case 107:
                var1 = var5;
                if (var3) {
                    _fun24887_ip = 149;
                    continue _fun24887
                }
            case 113:
                var4 = _closure1_slot2;
                var7 = _closure1_slot3;
                var3 = 13;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.remove;
                var2 = _closure1_slot19;
                var1 = var3.bind(var4)(var5, var2);
            case 149:
                var0 = var1;
            case 152:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun24888: for (var _fun24888_ip = 0;;) switch (_fun24888_ip) {
            case 0:
                var8 = arg1;
                var11 = arg2;
                var4 = arg3;
                var0 = arg0;
                var0 = var4[var0];
                var3 = null;
                var13 = var11;
                if (!(var3 != var0)) {
                    _fun24888_ip = 94;
                    continue _fun24888
                }
            case 25:
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var1 = 13;
                var5 = var7[var1];
                var2 = undefined;
                var10 = var6.bind(var2)(var5);
                var9 = var10.remove;
                var5 = var0.deny;
                var5 = var9.bind(var10)(var11, var5);
                var1 = var7[var1];
                var2 = var6.bind(var2)(var1);
                var1 = var2.add;
                var0 = var0.allow;
                var13 = var1.bind(var2)(var5, var0);
            case 94:
                var0 = var13;
                if (!(var3 != var8)) {
                    _fun24888_ip = 572;
                    continue _fun24888
                }
            case 104:
                var9 = _closure1_slot23;
                var2 = var8.roles;
                var2 = var2.length;
                var11 = 0;
                var2 = var11 < var2;
                var6 = 13;
                var5 = undefined;
                var7 = var9;
                var10 = var7;
                var12 = var10;
                if (!var2) {
                    _fun24888_ip = 259;
                    continue _fun24888
                }
            case 145:
                var2 = var8.roles;
                var2 = var2[var11];
                var2 = var4[var2];
                var15 = var9;
                var14 = var7;
                if (!(var3 != var2)) {
                    _fun24888_ip = 229;
                    continue _fun24888
                }
            case 169:
                var18 = _closure1_slot2;
                var17 = _closure1_slot3;
                var16 = var17[var6];
                var20 = var18.bind(var5)(var16);
                var19 = var20.add;
                var16 = var2.allow;
                var15 = var19.bind(var20)(var9, var16);
                var17 = var17[var6];
                var18 = var18.bind(var5)(var17);
                var17 = var18.add;
                var2 = var2.deny;
                var14 = var17.bind(var18)(var7, var2);
            case 229:
                var11 = var11 + 1;
                var2 = var8.roles;
                var2 = var2.length;
                var9 = var15;
                var7 = var14;
                var10 = var9;
                var12 = var7;
                if (var11 < var2) {
                    _fun24888_ip = 145;
                    continue _fun24888
                }
            case 259:
                var7 = _closure1_slot2;
                var2 = _closure1_slot3;
                var9 = var2[var6];
                var11 = var7.bind(var5)(var9);
                var9 = var11.remove;
                var9 = var9.bind(var11)(var13, var12);
                var2 = var2[var6];
                var7 = var7.bind(var5)(var2);
                var2 = var7.add;
                var12 = var2.bind(var7)(var9, var10);
                var2 = var8.userId;
                var2 = var4[var2];
                var4 = var12;
                if (!(var3 != var2)) {
                    _fun24888_ip = 385;
                    continue _fun24888
                }
            case 324:
                var7 = _closure1_slot2;
                var3 = _closure1_slot3;
                var9 = var3[var6];
                var11 = var7.bind(var5)(var9);
                var10 = var11.remove;
                var9 = var2.deny;
                var9 = var10.bind(var11)(var12, var9);
                var3 = var3[var6];
                var7 = var7.bind(var5)(var3);
                var3 = var7.add;
                var2 = var2.allow;
                var4 = var3.bind(var7)(var9, var2);
            case 385:
                var3 = _closure1_slot2;
                var9 = _closure1_slot3;
                var2 = var9[var6];
                var7 = var3.bind(var5)(var2);
                var3 = var7.has;
                var2 = _closure1_slot18;
                var2 = var2.ADMINISTRATOR;
                var3 = var3.bind(var7)(var4, var2);
                var7 = _closure1_slot0;
                var2 = 15;
                var2 = var9[var2];
                var7 = var7.bind(var5)(var2);
                var2 = var7.hasAutomodQuarantinedProfile;
                var2 = var2.bind(var7)(var8);
                var10 = var4;
                if (!var2) {
                    _fun24888_ip = 459;
                    continue _fun24888
                }
            case 456:
                var2 = !var3;
            case 459:
                var4 = var10;
                if (!var2) {
                    _fun24888_ip = 497;
                    continue _fun24888
                }
            case 465:
                var7 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var9 = var7.bind(var5)(var2);
                var7 = var9.filter;
                var2 = _closure1_slot29;
                var4 = var7.bind(var9)(var10, var2);
            case 497:
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 16;
                var2 = var9[var2];
                var7 = var7.bind(var5)(var2);
                var2 = var7.isMemberCommunicationDisabled;
                var2 = var2.bind(var7)(var8);
                if (!var2) {
                    _fun24888_ip = 534;
                    continue _fun24888
                }
            case 531:
                var2 = !var3;
            case 534:
                var0 = var4;
                if (!var2) {
                    _fun24888_ip = 572;
                    continue _fun24888
                }
            case 540:
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.filter;
                var1 = _closure1_slot28;
                var0 = var2.bind(var3)(var4, var1);
            case 572:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun24889: for (var _fun24889_ip = 0;;) switch (_fun24889_ip) {
            case 0:
                var8 = arg0;
                var7 = var8.userId;
                var5 = var8.member;
                var1 = var8.guild;
                var4 = var8.overwrites;
                var2 = var8.roles;
                var6 = var8.checkElevated;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun24889_ip = 45;
                    continue _fun24889
                }
            case 43:
                var6 = true;
            case 45:
                var0 = var8.excludeGuildPermissions;
                if (!(var0 === var3)) {
                    _fun24889_ip = 57;
                    continue _fun24889
                }
            case 55:
                var0 = false;
            case 57:
                var12 = var8.lurkerPermissionsMask;
                if (!(var12 === var3)) {
                    _fun24889_ip = 74;
                    continue _fun24889
                }
            case 67:
                var12 = _closure1_slot26;
            case 74:
                if (var0) {
                    _fun24889_ip = 535;
                    continue _fun24889
                }
            case 80:
                var8 = null;
                if (!(var8 == var2)) {
                    _fun24889_ip = 111;
                    continue _fun24889
                }
            case 86:
                var10 = _closure1_slot15;
                var9 = var10.getUnsafeMutableRoles;
                var0 = var1.id;
                var14 = var9.bind(var10)(var0);
                _fun24889_ip = 156;
                continue _fun24889;
            case 111:
                var0 = {};
                var11 = _closure1_slot15;
                var10 = var11.getUnsafeMutableRoles;
                var9 = var1.id;
                var20 = var10.bind(var11)(var9);
                var21 = var0;
                var9 = copyDataProperties(var21, var20);
                var21 = var0;
                var20 = var2;
                var2 = copyDataProperties(var21, var20);
                var14 = var0;
            case 156:
                var2 = _closure1_slot9;
                var2 = var2.bind(var3)(var1);
                var2 = var14[var2];
                if (!(var8 == var2)) {
                    _fun24889_ip = 182;
                    continue _fun24889
                }
            case 176:
                var15 = _closure1_slot25;
                _fun24889_ip = 188;
                continue _fun24889;
            case 182:
                var15 = var2.permissions;
            case 188:
                var9 = var15;
                if (!(var8 != var5)) {
                    _fun24889_ip = 303;
                    continue _fun24889
                }
            case 195:
                var2 = var5.roles;
                var2 = var2.length;
                var13 = 0;
                var2 = var13 < var2;
                var11 = 13;
                var10 = var15;
                var9 = var10;
                if (!var2) {
                    _fun24889_ip = 303;
                    continue _fun24889
                }
            case 224:
                var2 = var5.roles;
                var2 = var2[var13];
                var2 = var14[var2];
                var15 = var10;
                if (!(var3 !== var2)) {
                    _fun24889_ip = 279;
                    continue _fun24889
                }
            case 245:
                var17 = _closure1_slot2;
                var16 = _closure1_slot3;
                var16 = var16[var11];
                var17 = var17.bind(var3)(var16);
                var16 = var17.add;
                var2 = var2.permissions;
                var15 = var16.bind(var17)(var10, var2);
            case 279:
                var13 = var13 + 1;
                var2 = var5.roles;
                var2 = var2.length;
                var10 = var15;
                var9 = var10;
                if (var13 < var2) {
                    _fun24889_ip = 224;
                    continue _fun24889
                }
            case 303:
                var11 = _closure1_slot2;
                var2 = _closure1_slot3;
                var10 = 13;
                var2 = var2[var10];
                var13 = var11.bind(var3)(var2);
                var11 = var13.has;
                var2 = _closure1_slot18;
                var2 = var2.ADMINISTRATOR;
                var2 = var11.bind(var13)(var9, var2);
                var11 = var9;
                if (var2) {
                    _fun24889_ip = 376;
                    continue _fun24889
                }
            case 350:
                var9 = _closure1_slot31;
                var21 = var1.id;
                var22 = undefined;
                var20 = var5;
                var19 = var11;
                var18 = var4;
                var9 = var22[var9](var21, var20, var19, var18, var17);
                _fun24889_ip = 380;
                continue _fun24889;
            case 376:
                var9 = _closure1_slot24;
            case 380:
                var13 = _closure1_slot5;
                var11 = var13.isLurking;
                var2 = var1.id;
                var2 = var11.bind(var13)(var2);
                if (var2) {
                    _fun24889_ip = 419;
                    continue _fun24889
                }
            case 403:
                var8 = var8 != var5;
                if (!var8) {
                    _fun24889_ip = 416;
                    continue _fun24889
                }
            case 410:
                var8 = var5.isPending;
            case 416:
                var2 = var8;
            case 419:
                var11 = var9;
                if (!var2) {
                    _fun24889_ip = 453;
                    continue _fun24889
                }
            case 425:
                var8 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var10];
                var8 = var8.bind(var3)(var2);
                var2 = var8.filter;
                var11 = var2.bind(var8)(var9, var12);
            case 453:
                var9 = _closure1_slot14;
                var8 = var9.isCurrentUserGuest;
                var2 = var1.id;
                var8 = var8.bind(var9)(var2);
                var2 = var11;
                if (!var8) {
                    _fun24889_ip = 511;
                    continue _fun24889
                }
            case 479:
                var9 = _closure1_slot2;
                var8 = _closure1_slot3;
                var8 = var8[var10];
                var10 = var9.bind(var3)(var8);
                var9 = var10.filter;
                var8 = _closure1_slot27;
                var2 = var9.bind(var10)(var11, var8);
            case 511:
                var0 = _closure1_slot30;
                var22 = undefined;
                var21 = var2;
                var20 = var1;
                var19 = var7;
                var18 = var6;
                var0 = var22[var0](var21, var20, var19, var18, var17);
                return var0;
            case 535:
                var2 = _closure1_slot31;
                var21 = var1.id;
                var19 = _closure1_slot23;
                var22 = undefined;
                var20 = var5;
                var18 = var4;
                var0 = var22[var2](var21, var20, var19, var18, var17);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var6 = function arg0() {
        _fun24890: for (var _fun24890_ip = 0;;) switch (_fun24890_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.user;
                var6 = var0.context;
                var10 = var0.overwrites;
                var9 = var0.roles;
                var8 = var0.checkElevated;
                var5 = undefined;
                if (!(var8 === var5)) {
                    _fun24890_ip = 39;
                    continue _fun24890
                }
            case 37:
                var8 = true;
            case 39:
                var7 = var0.excludeGuildPermissions;
                if (!(var7 === var5)) {
                    _fun24890_ip = 51;
                    continue _fun24890
                }
            case 49:
                var7 = false;
            case 51:
                var1 = null;
                if (!(var1 != var12)) {
                    _fun24890_ip = 620;
                    continue _fun24890
                }
            case 60:
                var3 = 'string';
                var0 = typeof var12;
                var2 = var12;
                if (!(var3 !== var0)) {
                    _fun24890_ip = 79;
                    continue _fun24890
                }
            case 74:
                var2 = var12.id;
            case 79:
                var3 = _closure1_slot26;
                var4 = _closure1_slot8;
                var4 = var6 instanceof var4;
                if (var4) {
                    _fun24890_ip = 117;
                    continue _fun24890
                }
            case 97:
                var14 = var10;
                if (!(var1 == var14)) {
                    _fun24890_ip = 106;
                    continue _fun24890
                }
            case 104:
                var14 = {};
            case 106:
                var15 = var6;
                var13 = var3;
                _fun24890_ip = 257;
                continue _fun24890;
            case 117:
                var4 = var6.isScheduledForDeletion;
                var4 = var4.bind(var6)();
                if (var4) {
                    _fun24890_ip = 614;
                    continue _fun24890
                }
            case 133:
                var16 = _closure1_slot7;
                var11 = var16.has;
                var4 = var6.type;
                var4 = var11.bind(var16)(var4);
                if (var4) {
                    _fun24890_ip = 434;
                    continue _fun24890
                }
            case 158:
                var4 = var6.computeLurkerPermissionsAllowList;
                var4 = var4.bind(var6)();
                if (!(var1 != var4)) {
                    _fun24890_ip = 175;
                    continue _fun24890
                }
            case 172:
                var3 = var4;
            case 175:
                if (!(var1 == var10)) {
                    _fun24890_ip = 187;
                    continue _fun24890
                }
            case 179:
                var11 = var6.permissionOverwrites;
                _fun24890_ip = 215;
                continue _fun24890;
            case 187:
                var4 = {};
                var21 = var6.permissionOverwrites;
                var22 = var4;
                var16 = copyDataProperties(var22, var21);
                var22 = var4;
                var21 = var10;
                var16 = copyDataProperties(var22, var21);
                var11 = var4;
            case 215:
                var4 = var6.getGuildId;
                var18 = var4.bind(var6)();
                var16 = var1 != var18;
                var4 = null;
                if (!var16) {
                    _fun24890_ip = 248;
                    continue _fun24890
                }
            case 234:
                var17 = _closure1_slot16;
                var16 = var17.getGuild;
                var4 = var16.bind(var17)(var18);
            case 248:
                var15 = var4;
                var14 = var11;
                var13 = var3;
            case 257:
                if (!(var1 != var15)) {
                    _fun24890_ip = 428;
                    continue _fun24890
                }
            case 264:
                var4 = _closure1_slot17;
                var3 = var4.getCurrentUser;
                var4 = var3.bind(var4)();
                var11 = var1 == var4;
                var3 = undefined;
                if (var11) {
                    _fun24890_ip = 291;
                    continue _fun24890
                }
            case 286:
                var3 = var4.id;
            case 291:
                if (!(var2 === var3)) {
                    _fun24890_ip = 318;
                    continue _fun24890
                }
            case 295:
                var11 = _closure1_slot4;
                var4 = var11.isViewingRoles;
                var3 = var15.id;
                var3 = var4.bind(var11)(var3);
                if (var3) {
                    _fun24890_ip = 356;
                    continue _fun24890
                }
            case 318:
                var3 = _closure1_slot10;
                var3 = var3.bind(var5)(var15, var2);
                if (!var3) {
                    _fun24890_ip = 356;
                    continue _fun24890
                }
            case 331:
                var4 = _closure1_slot30;
                var22 = _closure1_slot24;
                var23 = undefined;
                var21 = var15;
                var20 = var2;
                var19 = var8;
                var3 = var23[var4](var22, var21, var20, var19, var18);
                _fun24890_ip = 426;
                continue _fun24890;
            case 356:
                var11 = _closure1_slot32;
                var4 = {};
                var4.userId = var2;
                var18 = _closure1_slot14;
                var17 = var18.getMember;
                var16 = var15.id;
                var16 = var17.bind(var18)(var16, var2);
                var4.member = var16;
                var4.guild = var15;
                var4.overwrites = var14;
                var4.roles = var9;
                var4.checkElevated = var8;
                var4.excludeGuildPermissions = var7;
                var4.lurkerPermissionsMask = var13;
                var3 = var11.bind(var5)(var4);
            case 426:
                _fun24890_ip = 432;
                continue _fun24890;
            case 428:
                var3 = _closure1_slot23;
            case 432:
                return var3;
            case 434:
                var11 = _closure1_slot13;
                var4 = var11.getChannel;
                var3 = var6.parent_id;
                var11 = var4.bind(var11)(var3);
                if (!(var1 != var11)) {
                    _fun24890_ip = 608;
                    continue _fun24890
                }
            case 461:
                var3 = var11.isScheduledForDeletion;
                var3 = var3.bind(var11)();
                if (var3) {
                    _fun24890_ip = 608;
                    continue _fun24890
                }
            case 477:
                var4 = _closure1_slot17;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var4 = var1 == var3;
                var1 = undefined;
                if (var4) {
                    _fun24890_ip = 504;
                    continue _fun24890
                }
            case 499:
                var1 = var3.id;
            case 504:
                var4 = var2 === var1;
                if (!var4) {
                    _fun24890_ip = 531;
                    continue _fun24890
                }
            case 511:
                var3 = _closure1_slot6;
                var2 = var3.hasJoined;
                var1 = var6.id;
                var4 = var2.bind(var3)(var1);
            case 531:
                var3 = _closure1_slot34;
                var2 = _closure1_slot33;
                var1 = {};
                var1.user = var12;
                var1.context = var11;
                var1.overwrites = var10;
                var1.roles = var9;
                var1.checkElevated = var8;
                var1.excludeGuildPermissions = var7;
                var21 = var2.bind(var5)(var1);
                var8 = _closure1_slot14;
                var7 = var8.isCurrentUserGuest;
                var1 = var6.guild_id;
                var19 = var7.bind(var8)(var1);
                var23 = undefined;
                var22 = var6;
                var20 = var4;
                var1 = var23[var3](var22, var21, var20, var19, var18);
                return var1;
            case 608:
                var1 = _closure1_slot23;
                return var1;
            case 614:
                var0 = _closure1_slot23;
                return var0;
            case 620:
                var0 = _closure1_slot23;
                return var0;
        }
    };
    var _closure1_slot33 = var6;
    var5 = function arg0, arg1, arg2, arg3() {
        _fun24891: for (var _fun24891_ip = 0;;) switch (_fun24891_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var1 = var4.type;
                var0 = _closure1_slot21;
                var0 = var0.PRIVATE_THREAD;
                if (!(var1 === var0)) {
                    _fun24891_ip = 95;
                    continue _fun24891
                }
            case 28:
                var0 = arg2;
                if (var0) {
                    _fun24891_ip = 95;
                    continue _fun24891
                }
            case 34:
                var0 = arg3;
                if (var0) {
                    _fun24891_ip = 95;
                    continue _fun24891
                }
            case 40:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.has;
                var0 = _closure1_slot18;
                var0 = var0.MANAGE_THREADS;
                var0 = var1.bind(var2)(var6, var0);
                if (var0) {
                    _fun24891_ip = 95;
                    continue _fun24891
                }
            case 86:
                var0 = _closure1_slot23;
                _fun24891_ip = 325;
                continue _fun24891;
            case 95:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var8 = 13;
                var1 = var1[var8];
                var7 = undefined;
                var5 = var2.bind(var7)(var1);
                var2 = var5.has;
                var1 = _closure1_slot18;
                var1 = var1.SEND_MESSAGES_IN_THREADS;
                var1 = var2.bind(var5)(var6, var1);
                if (var1) {
                    _fun24891_ip = 185;
                    continue _fun24891
                }
            case 141:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var8];
                var5 = var2.bind(var7)(var1);
                var2 = var5.remove;
                var1 = _closure1_slot18;
                var1 = var1.SEND_MESSAGES;
                var1 = var2.bind(var5)(var6, var1);
                _fun24891_ip = 322;
                continue _fun24891;
            case 185:
                var2 = var4.isLockedThread;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun24891_ip = 280;
                    continue _fun24891
                }
            case 198:
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var5 = var4.bind(var7)(var2);
                var4 = var5.has;
                var2 = _closure1_slot18;
                var2 = var2.MANAGE_THREADS;
                var2 = var4.bind(var5)(var6, var2);
                if (var2) {
                    _fun24891_ip = 280;
                    continue _fun24891
                }
            case 239:
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var5 = var4.bind(var7)(var2);
                var4 = var5.remove;
                var2 = _closure1_slot18;
                var2 = var2.SEND_MESSAGES;
                var2 = var4.bind(var5)(var6, var2);
                _fun24891_ip = 319;
                continue _fun24891;
            case 280:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var4 = var4[var8];
                var5 = var5.bind(var7)(var4);
                var4 = var5.combine;
                var3 = _closure1_slot18;
                var3 = var3.SEND_MESSAGES;
                var2 = var4.bind(var5)(var6, var3);
            case 319:
                var1 = var2;
            case 322:
                var0 = var1;
            case 325:
                return var0;
        }
    };
    var _closure1_slot34 = var5;
    var4 = function arg0() {
        var0 = {};
        var1 = arg0;
        var0.id = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 19;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.PermissionOverwriteType;
        var2 = var2.ROLE;
        var0.type = var2;
        var2 = _closure1_slot23;
        var0.allow = var2;
        var1 = _closure1_slot23;
        var0.deny = var1;
        return var0;
    };
    var _closure1_slot35 = var4;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.permission;
        var10 = var0.user;
        var9 = var0.context;
        var8 = var0.overwrites;
        var7 = var0.roles;
        var6 = var0.excludeGuildPermissions;
        var2 = _closure1_slot2;
        var4 = _closure1_slot3;
        var1 = 13;
        var1 = var4[var1];
        var5 = undefined;
        var2 = var2.bind(var5)(var1);
        var1 = var2.has;
        var4 = _closure1_slot33;
        var0 = {};
        var0.user = var10;
        var0.context = var9;
        var0.overwrites = var8;
        var0.roles = var7;
        var7 = true;
        var0.checkElevated = var7;
        var0.excludeGuildPermissions = var6;
        var0 = var4.bind(var5)(var0);
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var _closure1_slot36 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var17 = 0;
    var7 = var13[var17];
    var0 = undefined;
    var7 = var16.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var13[var7];
    var7 = var12.bind(var0)(var7);
    var8 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = var8;
    var7 = var7.ChannelRecordBase;
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var13[var7];
    var7 = var12.bind(var0)(var7);
    var8 = var7.getGuildEveryoneRoleId;
    var _closure1_slot9 = var8;
    var7 = var7.isGuildOwner;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var13[var7];
    var7 = var12.bind(var0)(var7);
    var7 = var7.hasPermission;
    var _closure1_slot11 = var7;
    var7 = 6;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var13[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var13[var7];
    var8 = var12.bind(var0)(var7);
    var7 = var8.Permissions;
    var _closure1_slot18 = var7;
    var9 = var8.ElevatedPermissions;
    var _closure1_slot19 = var9;
    var9 = var8.MFALevels;
    var _closure1_slot20 = var9;
    var9 = var8.ChannelTypes;
    var _closure1_slot21 = var9;
    var8 = var8.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot22 = var8;
    var11 = 13;
    var8 = var13[var11];
    var9 = var14.bind(var0)(var8);
    var8 = var9.deserialize;
    var10 = var8.bind(var9)(var17);
    var _closure1_slot23 = var10;
    var8 = var13[var11];
    var15 = var14.bind(var0)(var8);
    var9 = var15.combine;
    var8 = 14;
    var8 = var13[var8];
    var16 = var16.bind(var0)(var8);
    var8 = var16.values;
    var66 = var8.bind(var16)(var7);
    var8 = new Array(0);
    var67 = var8;
    var65 = 0;
    var16 = arraySpread(var67, var66, var65);
    var67 = var9;
    var66 = var8;
    var65 = var15;
    var9 = apply(var67, var66, var65);
    var _closure1_slot24 = var9;
    var8 = var13[var11];
    var41 = var14.bind(var0)(var8);
    var40 = var41.combine;
    var67 = var7.CREATE_INSTANT_INVITE;
    var66 = var7.CHANGE_NICKNAME;
    var65 = var7.VIEW_CHANNEL;
    var64 = var7.SEND_MESSAGES;
    var63 = var7.EMBED_LINKS;
    var62 = var7.ATTACH_FILES;
    var61 = var7.READ_MESSAGE_HISTORY;
    var60 = var7.MENTION_EVERYONE;
    var59 = var7.USE_EXTERNAL_EMOJIS;
    var58 = var7.USE_EXTERNAL_STICKERS;
    var57 = var7.ADD_REACTIONS;
    var56 = var7.CREATE_PUBLIC_THREADS;
    var55 = var7.CREATE_PRIVATE_THREADS;
    var54 = var7.SEND_MESSAGES_IN_THREADS;
    var53 = var7.SEND_POLLS;
    var52 = var7.CONNECT;
    var51 = var7.SPEAK;
    var50 = var7.USE_VAD;
    var49 = var7.STREAM;
    var48 = var7.USE_EMBEDDED_ACTIVITIES;
    var47 = var7.USE_SOUNDBOARD;
    var46 = var7.REQUEST_TO_SPEAK;
    var45 = var7.USE_APPLICATION_COMMANDS;
    var44 = var7.CREATE_GUILD_EXPRESSIONS;
    var43 = var7.CREATE_EVENTS;
    var42 = var7.USE_EXTERNAL_APPS;
    var68 = var41;
    var8 = var68[var40](var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42, var41);
    var _closure1_slot25 = var8;
    var15 = var13[var11];
    var18 = var14.bind(var0)(var15);
    var17 = var18.combine;
    var16 = var7.VIEW_CHANNEL;
    var15 = var7.READ_MESSAGE_HISTORY;
    var15 = var17.bind(var18)(var16, var15);
    var _closure1_slot26 = var15;
    var15 = var13[var11];
    var32 = var14.bind(var0)(var15);
    var31 = var32.combine;
    var67 = var7.VIEW_CHANNEL;
    var66 = var7.SEND_MESSAGES;
    var65 = var7.CONNECT;
    var64 = var7.SPEAK;
    var63 = var7.STREAM;
    var62 = var7.USE_EMBEDDED_ACTIVITIES;
    var61 = var7.USE_EXTERNAL_APPS;
    var60 = var7.USE_EXTERNAL_EMOJIS;
    var59 = var7.USE_EXTERNAL_SOUNDS;
    var58 = var7.USE_EXTERNAL_STICKERS;
    var57 = var7.USE_SOUNDBOARD;
    var56 = var7.USE_VAD;
    var55 = var7.SEND_MESSAGES_IN_THREADS;
    var54 = var7.EMBED_LINKS;
    var53 = var7.ATTACH_FILES;
    var52 = var7.ADD_REACTIONS;
    var68 = var32;
    var15 = var68[var31](var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51);
    var _closure1_slot27 = var15;
    var15 = var13[var11];
    var18 = var14.bind(var0)(var15);
    var17 = var18.combine;
    var16 = var7.VIEW_CHANNEL;
    var15 = var7.READ_MESSAGE_HISTORY;
    var15 = var17.bind(var18)(var16, var15);
    var _closure1_slot28 = var15;
    var15 = var13[var11];
    var19 = var14.bind(var0)(var15);
    var18 = var19.combine;
    var17 = var7.VIEW_CHANNEL;
    var16 = var7.READ_MESSAGE_HISTORY;
    var15 = var7.CHANGE_NICKNAME;
    var15 = var18.bind(var19)(var17, var16, var15);
    var _closure1_slot29 = var15;
    var11 = var13[var11];
    var22 = var14.bind(var0)(var11);
    var21 = var22.combine;
    var67 = var7.MANAGE_GUILD;
    var66 = var7.MANAGE_ROLES;
    var65 = var7.ADMINISTRATOR;
    var64 = var7.BAN_MEMBERS;
    var63 = var7.MANAGE_NICKNAMES;
    var62 = var7.CREATE_GUILD_EXPRESSIONS;
    var61 = var7.MANAGE_GUILD_EXPRESSIONS;
    var60 = var7.MANAGE_WEBHOOKS;
    var59 = var7.VIEW_AUDIT_LOG;
    var68 = var22;
    var7 = var68[var21](var67, var66, var65, var64, var63, var62, var61, var60, var59, var58);
    var11 = 20;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'utils/PermissionUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.NONE = var10;
    var2.ALL = var9;
    var2.DEFAULT = var8;
    var2.VIEW_GUILD_SETTINGS = var7;
    var7 = function arg0() {
        _fun24894: for (var _fun24894_ip = 0;;) switch (_fun24894_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.forceRoles;
                var5 = var0.context;
                var9 = var0.overwrites;
                var8 = var0.roles;
                var7 = var0.checkElevated;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun24894_ip = 40;
                    continue _fun24894
                }
            case 38:
                var7 = true;
            case 40:
                var6 = var0.excludeGuildPermissions;
                var1 = _closure1_slot26;
                var2 = _closure1_slot8;
                var2 = var5 instanceof var2;
                if (var2) {
                    _fun24894_ip = 86;
                    continue _fun24894
                }
            case 64:
                var2 = null;
                var10 = var9;
                if (!(var2 == var10)) {
                    _fun24894_ip = 75;
                    continue _fun24894
                }
            case 73:
                var10 = {};
            case 75:
                var12 = var5;
                var3 = var1;
                _fun24894_ip = 228;
                continue _fun24894;
            case 86:
                var2 = var5.isScheduledForDeletion;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun24894_ip = 500;
                    continue _fun24894
                }
            case 102:
                var14 = _closure1_slot7;
                var13 = var14.has;
                var2 = var5.type;
                var2 = var13.bind(var14)(var2);
                if (var2) {
                    _fun24894_ip = 409;
                    continue _fun24894
                }
            case 127:
                var2 = var5.computeLurkerPermissionsAllowList;
                var13 = var2.bind(var5)();
                var2 = null;
                if (!(var2 != var13)) {
                    _fun24894_ip = 146;
                    continue _fun24894
                }
            case 143:
                var1 = var13;
            case 146:
                if (!(var2 == var9)) {
                    _fun24894_ip = 158;
                    continue _fun24894
                }
            case 150:
                var13 = var5.permissionOverwrites;
                _fun24894_ip = 186;
                continue _fun24894;
            case 158:
                var14 = {};
                var19 = var5.permissionOverwrites;
                var20 = var14;
                var15 = copyDataProperties(var20, var19);
                var20 = var14;
                var19 = var9;
                var15 = copyDataProperties(var20, var19);
                var13 = var14;
            case 186:
                var14 = var5.getGuildId;
                var16 = var14.bind(var5)();
                var14 = var2 != var16;
                var2 = null;
                if (!var14) {
                    _fun24894_ip = 219;
                    continue _fun24894
                }
            case 205:
                var15 = _closure1_slot16;
                var14 = var15.getGuild;
                var2 = var14.bind(var15)(var16);
            case 219:
                var12 = var2;
                var10 = var13;
                var3 = var1;
            case 228:
                var1 = null;
                if (!(var1 != var12)) {
                    _fun24894_ip = 403;
                    continue _fun24894
                }
            case 237:
                var13 = {
                    'userId': null,
                    'nick': '',
                    'guildId': null,
                    'guildMemberAvatar': null,
                    'roles': null,
                    'colorString': null,
                    'colorStrings': null,
                    'hoistRoleId': null,
                    'premiumSince': null,
                    'isPending': false
                };
                var14 = _closure1_slot22;
                var13.userId = var14;
                var2 = var12.id;
                var13.guildId = var2;
                var15 = _closure1_slot1;
                var16 = _closure1_slot3;
                var2 = 17;
                var2 = var16[var2];
                var15 = var15.bind(var4)(var2);
                var2 = var15.keys;
                var2 = var2.bind(var15)(var11);
                var13.roles = var2;
                var2 = global;
                var2 = var2.Date;
                var15 = var2.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var2
                    }
                });
                var21 = var15;
                var2 = new var21[var2](var20);
                var15 = var2 instanceof Object ? var2 : var15;
                var2 = var15.toISOString;
                var2 = var2.bind(var15)();
                var13.joinedAt = var2;
                var13.communicationDisabledUntil = var1;
                var2 = _closure1_slot32;
                var1 = {};
                var1.userId = var14;
                var1.member = var13;
                var1.guild = var12;
                var1.overwrites = var10;
                var1.roles = var8;
                var1.checkElevated = var7;
                var1.excludeGuildPermissions = var6;
                var1.lurkerPermissionsMask = var3;
                var1 = var2.bind(var4)(var1);
                return var1;
            case 403:
                var1 = _closure1_slot23;
                return var1;
            case 409:
                var3 = _closure1_slot13;
                var2 = var3.getChannel;
                var1 = var5.parent_id;
                var10 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var10)) {
                    _fun24894_ip = 494;
                    continue _fun24894
                }
            case 435:
                var3 = _closure1_slot34;
                var2 = _closure1_slot37;
                var1 = {};
                var1.forceRoles = var11;
                var1.context = var10;
                var1.overwrites = var9;
                var1.roles = var8;
                var1.checkElevated = var7;
                var1.excludeGuildPermissions = var6;
                var19 = var2.bind(var4)(var1);
                var21 = undefined;
                var20 = var5;
                var18 = false;
                var17 = false;
                var1 = var21[var3](var20, var19, var18, var17, var16);
                _fun24894_ip = 498;
                continue _fun24894;
            case 494:
                var1 = _closure1_slot23;
            case 498:
                return var1;
            case 500:
                var0 = _closure1_slot23;
                return var0;
        }
    };
    var _closure1_slot37 = var7;
    var2.computePermissionsForRoles = var7;
    var2.computePermissions = var6;
    var2.applyThreadPermissions = var5;
    var5 = function arg0, arg1() {
        _fun24895: for (var _fun24895_ip = 0;;) switch (_fun24895_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var5 = _closure1_slot7;
                var4 = var5.has;
                var2 = var6.type;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun24895_ip = 245;
                    continue _fun24895
                }
            case 36:
                var2 = var6.guild_id;
                var5 = null;
                if (!(var5 != var3)) {
                    _fun24895_ip = 241;
                    continue _fun24895
                }
            case 50:
                if (!(var5 != var2)) {
                    _fun24895_ip = 241;
                    continue _fun24895
                }
            case 57:
                var4 = var3.guild_id;
                if (!(var2 === var4)) {
                    _fun24895_ip = 241;
                    continue _fun24895
                }
            case 69:
                var4 = {};
                var8 = var6.permissionOverwrites;
                var9 = var4;
                var6 = copyDataProperties(var9, var8);
                var _closure2_slot0 = var4;
                var6 = {};
                var8 = var3.permissionOverwrites;
                var9 = var6;
                var3 = copyDataProperties(var9, var8);
                var _closure2_slot1 = var6;
                var3 = var4[var2];
                if (!(var5 == var3)) {
                    _fun24895_ip = 130;
                    continue _fun24895
                }
            case 115:
                var7 = _closure1_slot35;
                var3 = undefined;
                var3 = var7.bind(var3)(var2);
                var4[var2] = var3;
            case 130:
                var3 = var6[var2];
                if (!(var5 == var3)) {
                    _fun24895_ip = 153;
                    continue _fun24895
                }
            case 138:
                var3 = _closure1_slot35;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var6[var2] = var0;
            case 153:
                var2 = global;
                var3 = var2.Object;
                var0 = var3.keys;
                var0 = var0.bind(var3)(var4);
                var3 = var0.length;
                var5 = var2.Object;
                var0 = var5.keys;
                var0 = var0.bind(var5)(var6);
                var0 = var0.length;
                var0 = var3 === var0;
                if (!var0) {
                    _fun24895_ip = 239;
                    continue _fun24895
                }
            case 204:
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun24896: for (var _fun24896_ip = 0;;) switch (_fun24896_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1[var2];
                            var0 = _closure2_slot1;
                            var2 = var0[var2];
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun24896_ip = 83;
                                continue _fun24896
                            }
                        case 31:
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var3 = 13;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.equals;
                            var4 = var2.deny;
                            var3 = var1.deny;
                            var3 = var5.bind(var6)(var4, var3);
                            var0 = !var3;
                        case 83:
                            if (var0) {
                                _fun24896_ip = 138;
                                continue _fun24896
                            }
                        case 86:
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var3 = 13;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.equals;
                            var2 = var2.allow;
                            var1 = var1.allow;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 138:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 239:
                return var0;
            case 241:
                var0 = false;
                return var0;
            case 245:
                var0 = true;
                return var0;
        }
    };
    var2.areChannelsLocked = var5;
    var5 = function arg0() {
        _fun24897: for (var _fun24897_ip = 0;;) switch (_fun24897_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.some;
                var6 = _closure1_slot15;
                var3 = var6.getUnsafeMutableRoles;
                var0 = var2.id;
                var3 = var3.bind(var6)(var0);
                var0 = function(arg0) { // Environment: var0
                    _fun24898: for (var _fun24898_ip = 0;;) switch (_fun24898_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.hoist;
                            if (!var0) {
                                _fun24898_ip = 37;
                                continue _fun24898
                            }
                        case 12:
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot18;
                            var2 = var1.ADMINISTRATOR;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var4, var2);
                        case 37:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var0);
                var0 = undefined;
                if (var3) {
                    _fun24897_ip = 95;
                    continue _fun24897
                }
            case 72:
                var2 = var2.ownerId;
                var3 = null;
                var3 = var3 != var2;
                var1 = undefined;
                if (!var3) {
                    _fun24897_ip = 92;
                    continue _fun24897
                }
            case 89:
                var1 = var2;
            case 92:
                var0 = var1;
            case 95:
                return var0;
        }
    };
    var2.getGuildVisualOwnerId = var5;
    var5 = function arg0, arg1, arg2, arg3() {
        _fun24899: for (var _fun24899_ip = 0;;) switch (_fun24899_ip) {
            case 0:
                var7 = arg1;
                var6 = arg2;
                var5 = arg3;
                var2 = null;
                var1 = var2 == var7;
                if (var1) {
                    _fun24899_ip = 39;
                    continue _fun24899
                }
            case 18:
                var4 = _closure1_slot10;
                var3 = undefined;
                var0 = arg0;
                var0 = var4.bind(var3)(var0, var7);
                var1 = !var0;
            case 39:
                var0 = !var1;
                if (!var1) {
                    _fun24899_ip = 102;
                    continue _fun24899
                }
            case 45:
                var1 = var2 != var6;
                if (!var1) {
                    _fun24899_ip = 99;
                    continue _fun24899
                }
            case 52:
                var2 = var2 == var5;
                if (var2) {
                    _fun24899_ip = 96;
                    continue _fun24899
                }
            case 59:
                var7 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.doesRoleSortHigher;
                var2 = var3.bind(var4)(var6, var5);
            case 96:
                var1 = var2;
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var2.isRoleHigher = var5;
    var5 = function arg0, arg1() {
        _fun24900: for (var _fun24900_ip = 0;;) switch (_fun24900_ip) {
            case 0:
                var1 = arg0;
                var6 = _closure1_slot14;
                var5 = var6.getMember;
                var4 = var1.id;
                var3 = arg1;
                var4 = var5.bind(var6)(var4, var3);
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 == var4)) {
                    _fun24900_ip = 46;
                    continue _fun24900
                }
            case 42:
                var3 = undefined;
                return var3;
            case 46:
                var3 = _closure1_slot15;
                var2 = var3.getSortedRoles;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure2_slot0;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getHighestRole = var5;
    var5 = function arg0, arg1() {
        _fun24902: for (var _fun24902_ip = 0;;) switch (_fun24902_ip) {
            case 0:
                var1 = arg1;
                var2 = var1.hoistRoleId;
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun24902_ip = 51;
                    continue _fun24902
                }
            case 18:
                var4 = _closure1_slot15;
                var3 = var4.getRole;
                var2 = arg0;
                var2 = var2.id;
                var1 = var1.hoistRoleId;
                var0 = var3.bind(var4)(var2, var1);
            case 51:
                return var0;
        }
    };
    var2.getHighestHoistedRole = var5;
    var2.makeEveryoneOverwrite = var4;
    var4 = function arg0, arg1, arg2() {
        _fun24903: for (var _fun24903_ip = 0;;) switch (_fun24903_ip) {
            case 0:
                var0 = arg0;
                var3 = arg2;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot36;
                var2 = {};
                var5 = _closure1_slot18;
                var5 = var5.MANAGE_CHANNELS;
                var2.permission = var5;
                var2.user = var0;
                var0 = arg1;
                var2.context = var0;
                var0 = undefined;
                var0 = var4.bind(var0)(var2);
                var2 = !var0;
                var0 = !var2;
                if (!var2) {
                    _fun24903_ip = 79;
                    continue _fun24903
                }
            case 63:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun24904: for (var _fun24904_ip = 0;;) switch (_fun24904_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.channel;
                            var2 = var1.id;
                            var0 = 'null';
                            var0 = var0 !== var2;
                            if (!var0) {
                                _fun24904_ip = 70;
                                continue _fun24904
                            }
                        case 24:
                            var3 = _closure1_slot36;
                            var2 = {};
                            var4 = _closure1_slot18;
                            var4 = var4.MANAGE_CHANNELS;
                            var2.permission = var4;
                            var4 = _closure2_slot0;
                            var2.user = var4;
                            var2.context = var1;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 70:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 79:
                return var0;
        }
    };
    var2.canManageACategory = var4;
    var2.can = var3;
    var3 = 'ALLOW';
    var2.ALLOW = var3;
    var3 = 'DENY';
    var2.DENY = var3;
    var3 = 'PASSTHROUGH';
    var2.PASSTHROUGH = var3;
    var3 = function arg0, arg1() {
        _fun24905: for (var _fun24905_ip = 0;;) switch (_fun24905_ip) {
            case 0:
                var2 = arg1;
                var3 = {};
                var1 = _closure1_slot8;
                var4 = var2 instanceof var1;
                var1 = var2;
                if (!var4) {
                    _fun24905_ip = 143;
                    continue _fun24905
                }
            case 22:
                var5 = var2.type;
                var4 = _closure1_slot21;
                var4 = var4.PRIVATE_THREAD;
                if (!(var5 !== var4)) {
                    _fun24905_ip = 301;
                    continue _fun24905
                }
            case 44:
                var6 = _closure1_slot7;
                var5 = var6.has;
                var4 = var2.type;
                var4 = var5.bind(var6)(var4);
                var5 = var2;
                if (!var4) {
                    _fun24905_ip = 98;
                    continue _fun24905
                }
            case 69:
                var6 = _closure1_slot13;
                var4 = var6.getChannel;
                var2 = var2.parent_id;
                var5 = var4.bind(var6)(var2);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun24905_ip = 297;
                    continue _fun24905
                }
            case 98:
                var2 = var5.permissionOverwrites;
                var4 = var5.getGuildId;
                var7 = var4.bind(var5)();
                var4 = null;
                var5 = var4 != var7;
                if (!var5) {
                    _fun24905_ip = 137;
                    continue _fun24905
                }
            case 123:
                var6 = _closure1_slot16;
                var5 = var6.getGuild;
                var4 = var5.bind(var6)(var7);
            case 137:
                var1 = var4;
                var3 = var2;
            case 143:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun24905_ip = 293;
                    continue _fun24905
                }
            case 152:
                var5 = _closure1_slot15;
                var4 = var5.getEveryoneRole;
                var4 = var4.bind(var5)(var1);
                var10 = var4.permissions;
                var1 = var1.id;
                var1 = var3[var1];
                var3 = var10;
                if (!(var2 != var1)) {
                    _fun24905_ip = 255;
                    continue _fun24905
                }
            case 189:
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var2 = 13;
                var5 = var7[var2];
                var4 = undefined;
                var9 = var6.bind(var4)(var5);
                var8 = var9.remove;
                var5 = var1.deny;
                var5 = var8.bind(var9)(var10, var5);
                var2 = var7[var2];
                var4 = var6.bind(var4)(var2);
                var2 = var4.add;
                var1 = var1.allow;
                var3 = var2.bind(var4)(var5, var1);
            case 255:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            case 293:
                var0 = false;
                return var0;
            case 297:
                var0 = false;
                return var0;
            case 301:
                var0 = false;
                return var0;
        }
    };
    var2.canEveryoneRole = var3;
    var1 = function arg0, arg1() {
        _fun24906: for (var _fun24906_ip = 0;;) switch (_fun24906_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var6;
                var4 = {};
                var3 = _closure1_slot8;
                var3 = var0 instanceof var3;
                var5 = var0;
                if (!var3) {
                    _fun24906_ip = 152;
                    continue _fun24906
                }
            case 31:
                var7 = var0.type;
                var3 = _closure1_slot21;
                var3 = var3.PRIVATE_THREAD;
                if (!(var7 !== var3)) {
                    _fun24906_ip = 244;
                    continue _fun24906
                }
            case 53:
                var8 = _closure1_slot7;
                var7 = var8.has;
                var3 = var0.type;
                var3 = var7.bind(var8)(var3);
                var7 = var0;
                if (!var3) {
                    _fun24906_ip = 107;
                    continue _fun24906
                }
            case 78:
                var8 = _closure1_slot13;
                var3 = var8.getChannel;
                var0 = var0.parent_id;
                var7 = var3.bind(var8)(var0);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun24906_ip = 240;
                    continue _fun24906
                }
            case 107:
                var0 = var7.permissionOverwrites;
                var3 = var7.getGuildId;
                var9 = var3.bind(var7)();
                var3 = null;
                var7 = var3 != var9;
                if (!var7) {
                    _fun24906_ip = 146;
                    continue _fun24906
                }
            case 132:
                var8 = _closure1_slot16;
                var7 = var8.getGuild;
                var3 = var7.bind(var8)(var9);
            case 146:
                var5 = var3;
                var4 = var0;
            case 152:
                var0 = null;
                if (!(var0 != var5)) {
                    _fun24906_ip = 236;
                    continue _fun24906
                }
            case 158:
                var3 = _closure1_slot15;
                var0 = var3.getEveryoneRole;
                var3 = var0.bind(var3)(var5);
                var0 = _closure1_slot11;
                var5 = undefined;
                var0 = var0.bind(var5)(var3, var6);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun24906_ip = 234;
                    continue _fun24906
                }
            case 194:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 14;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.has;
                    var0 = arg0;
                    var1 = var0.deny;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 234:
                return var0;
            case 236:
                var0 = false;
                return var0;
            case 240:
                var0 = false;
                return var0;
            case 244:
                var0 = false;
                return var0;
        }
    };
    var2.canEveryone = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1673, 3092, 3093, 1376, 1416, 1675, 1216, 1372, 1681, 1674, 1410, 1621, 660, 484, 22, 3097, 3080, 21, 1676, 1645, 2]);