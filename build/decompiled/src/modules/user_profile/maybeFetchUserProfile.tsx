// modules/user_profile/maybeFetchUserProfile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/maybeFetchUserProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun57000: for (var _fun57000_ip = 0;;) switch (_fun57000_ip) {
            case 0:
                var10 = arg0;
                var19 = arg1;
                var0 = arguments[2];
                var _closure2_slot0 = var10;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun57000_ip = 23;
                    continue _fun57000
                }
            case 21:
                var0 = {};
            case 23:
                var15 = var0.type;
                var14 = var0.withMutualGuilds;
                if (!(var14 === var4)) {
                    _fun57000_ip = 40;
                    continue _fun57000
                }
            case 38:
                var14 = false;
            case 40:
                var12 = var0.withMutualFriendsCount;
                if (!(var12 === var4)) {
                    _fun57000_ip = 52;
                    continue _fun57000
                }
            case 50:
                var12 = false;
            case 52:
                var13 = var0.withMutualFriends;
                if (!(var13 === var4)) {
                    _fun57000_ip = 64;
                    continue _fun57000
                }
            case 62:
                var13 = false;
            case 64:
                var3 = var0.dispatchWait;
                if (!(var3 === var4)) {
                    _fun57000_ip = 76;
                    continue _fun57000
                }
            case 74:
                var3 = false;
            case 76:
                var5 = var0.waitForRefetch;
                if (!(var5 === var4)) {
                    _fun57000_ip = 90;
                    continue _fun57000
                }
            case 88:
                var5 = true;
            case 90:
                var17 = var0.guildId;
                var16 = var0.channelId;
                var8 = var0.joinRequestId;
                var6 = var0.abortSignal;
                var _closure2_slot1 = var4;
                var0 = '';
                if (!(var0 !== var10)) {
                    _fun57000_ip = 878;
                    continue _fun57000
                }
            case 127:
                var7 = _closure1_slot5;
                var0 = var7.isFetchingProfile;
                var7 = var0.bind(var7)(var10, var17);
                var0 = global;
                if (var7) {
                    _fun57000_ip = 860;
                    continue _fun57000
                }
            case 154:
                var9 = _closure1_slot5;
                var7 = var9.getUserProfile;
                var18 = var7.bind(var9)(var10);
                var9 = var0.Date;
                var7 = var9.now;
                var9 = var7.bind(var9)();
                var11 = null;
                var7 = var11 == var18;
                var20 = undefined;
                if (var7) {
                    _fun57000_ip = 201;
                    continue _fun57000
                }
            case 195:
                var20 = var18.fetchEndedAt;
            case 201:
                var21 = var11 != var20;
                var7 = 0;
                if (!var21) {
                    _fun57000_ip = 213;
                    continue _fun57000
                }
            case 210:
                var7 = var20;
            case 213:
                var9 = var9 - var7;
                var7 = 60000;
                var21 = var9 >= var7;
                var7 = var11 == var18;
                var9 = undefined;
                if (var7) {
                    _fun57000_ip = 256;
                    continue _fun57000
                }
            case 236:
                var7 = var18.fetchError;
                var20 = var11 == var7;
                var9 = undefined;
                if (var20) {
                    _fun57000_ip = 256;
                    continue _fun57000
                }
            case 251:
                var9 = var7.status;
            case 256:
                var7 = 404;
                if (!(var7 !== var9)) {
                    _fun57000_ip = 305;
                    continue _fun57000
                }
            case 266:
                var7 = var11 == var18;
                var9 = undefined;
                if (var7) {
                    _fun57000_ip = 295;
                    continue _fun57000
                }
            case 275:
                var7 = var18.fetchError;
                var20 = var11 == var7;
                var9 = undefined;
                if (var20) {
                    _fun57000_ip = 295;
                    continue _fun57000
                }
            case 290:
                var9 = var7.status;
            case 295:
                var7 = 429;
                if (!(var7 === var9)) {
                    _fun57000_ip = 326;
                    continue _fun57000
                }
            case 305:
                if (var21) {
                    _fun57000_ip = 326;
                    continue _fun57000
                }
            case 308:
                var9 = var0.Promise;
                var7 = var9.resolve;
                var7 = var7.bind(var9)();
                return var7;
            case 326:
                var9 = _closure1_slot5;
                var7 = var9.getGuildMemberProfile;
                var20 = var7.bind(var9)(var10, var17);
                var7 = var9.getMutualGuilds;
                var24 = var7.bind(var9)(var10);
                var7 = var9.getMutualFriends;
                var23 = var7.bind(var9)(var10);
                var7 = var9.getMutualFriendsCount;
                var22 = var7.bind(var9)(var10);
                if (!(var11 != var17)) {
                    _fun57000_ip = 385;
                    continue _fun57000
                }
            case 379:
                var9 = var11 == var20;
                _fun57000_ip = 389;
                continue _fun57000;
            case 385:
                var9 = var11 == var18;
            case 389:
                var7 = !var9;
                if (var9) {
                    _fun57000_ip = 446;
                    continue _fun57000
                }
            case 395:
                if (var21) {
                    _fun57000_ip = 411;
                    continue _fun57000
                }
            case 398:
                var24 = var11 == var24;
                if (!var24) {
                    _fun57000_ip = 408;
                    continue _fun57000
                }
            case 405:
                var24 = var14;
            case 408:
                var21 = var24;
            case 411:
                if (var21) {
                    _fun57000_ip = 427;
                    continue _fun57000
                }
            case 414:
                var23 = var11 == var23;
                if (!var23) {
                    _fun57000_ip = 424;
                    continue _fun57000
                }
            case 421:
                var23 = var13;
            case 424:
                var21 = var23;
            case 427:
                if (var21) {
                    _fun57000_ip = 443;
                    continue _fun57000
                }
            case 430:
                var22 = var11 == var22;
                if (!var22) {
                    _fun57000_ip = 440;
                    continue _fun57000
                }
            case 437:
                var22 = var12;
            case 440:
                var21 = var22;
            case 443:
                var7 = var21;
            case 446:
                if (var9) {
                    _fun57000_ip = 470;
                    continue _fun57000
                }
            case 449:
                if (var7) {
                    _fun57000_ip = 470;
                    continue _fun57000
                }
            case 452:
                var21 = var0.Promise;
                var9 = var21.resolve;
                var9 = var9.bind(var21)();
                return var9;
            case 470:
                if (!(var11 == var17)) {
                    _fun57000_ip = 491;
                    continue _fun57000
                }
            case 474:
                var21 = var11 == var18;
                var9 = undefined;
                if (var21) {
                    _fun57000_ip = 489;
                    continue _fun57000
                }
            case 483:
                var9 = var18.profileEffect;
            case 489:
                _fun57000_ip = 509;
                continue _fun57000;
            case 491:
                var21 = var11 == var20;
                var18 = undefined;
                if (var21) {
                    _fun57000_ip = 506;
                    continue _fun57000
                }
            case 500:
                var18 = var20.profileEffect;
            case 506:
                var9 = var18;
            case 509:
                if (!(var11 != var9)) {
                    _fun57000_ip = 550;
                    continue _fun57000
                }
            case 513:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 3;
                var18 = var21[var18];
                var20 = var20.bind(var4)(var18);
                var18 = var20.maybeFetchCollectiblesProduct;
                var9 = var9.skuId;
                var9 = var18.bind(var20)(var9);
            case 550:
                if (!(var11 != var19)) {
                    _fun57000_ip = 585;
                    continue _fun57000
                }
            case 554:
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 4;
                var9 = var20[var9];
                var18 = var18.bind(var4)(var9);
                var9 = var18.maybeFetchColors;
                var9 = var9.bind(var18)(var19);
            case 585:
                var9 = {};
                var9.type = var15;
                var9.withMutualGuilds = var14;
                var9.withMutualFriends = var13;
                var9.withMutualFriendsCount = var12;
                var9.guildId = var17;
                var9.joinRequestId = var8;
                var9.abortSignal = var6;
                var8 = var11 == var17;
                var6 = undefined;
                if (var8) {
                    _fun57000_ip = 715;
                    continue _fun57000
                }
            case 629:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 5;
                var8 = var13[var8];
                var13 = var12.bind(var4)(var8);
                var12 = var13.getVisibleConnectionsRole;
                var8 = {};
                var15 = _closure1_slot4;
                var14 = var15.getMember;
                var14 = var14.bind(var15)(var17, var10);
                var8.guildMember = var14;
                var15 = _closure1_slot3;
                var14 = var15.getChannel;
                var14 = var14.bind(var15)(var16);
                var8.channel = var14;
                var8 = var12.bind(var13)(var8);
                var11 = var11 == var8;
                var6 = undefined;
                if (var11) {
                    _fun57000_ip = 715;
                    continue _fun57000
                }
            case 710:
                var6 = var8.id;
            case 715:
                var9.connectionsRoleId = var6;
                _closure2_slot1 = var9;
                if (var3) {
                    _fun57000_ip = 806;
                    continue _fun57000
                }
            case 727:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 7;
                var3 = var12[var3];
                var8 = var6.bind(var4)(var3);
                var6 = var8.fetchProfile;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var6 = var6.bind(var8)(var10, var9, var3);
                var3 = var6;
                if (!var7) {
                    _fun57000_ip = 804;
                    continue _fun57000
                }
            case 782:
                var3 = var6;
                if (var5) {
                    _fun57000_ip = 804;
                    continue _fun57000
                }
            case 788:
                var6 = var0.Promise;
                var5 = var6.resolve;
                var3 = var5.bind(var6)();
            case 804:
                return var3;
            case 806:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var3 = var4.fetchProfile;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var0 = 8;
                    var0 = var7[var0];
                    var0 = var5.bind(var6)(var0);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = var0.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            case 860:
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
            case 878:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1672, 4655, 4593, 6832, 4518, 806, 6948, 6949, 2]);