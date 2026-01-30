// modules/links/isAccessibleChannelOrThreadPath.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isAccessibleChannelOrThreadPath, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49608: for (var _fun49608_ip = 0;;) switch (_fun49608_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49608_ip = 1008;
                            continue _fun49608
                        }
                    case 13:
                        var5 = var1.guildId;
                        var12 = var1.channelId;
                        var6 = undefined;
                        SaveGenerator(address = 29);
                    case 27:
                        return var6;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49608_ip = 1005;
                            continue _fun49608
                        }
                    case 38:
                        var4 = _closure1_slot8;
                        var3 = var4.getGuild;
                        var9 = var3.bind(var4)(var5);
                        var4 = _closure1_slot7;
                        var3 = var4.getUnsafeMutableRoles;
                        var4 = var3.bind(var4)(var5);
                        var3 = null;
                        if (!(var3 == var9)) {
                            _fun49608_ip = 101;
                            continue _fun49608
                        }
                    case 76:
                        var7 = _closure1_slot10;
                        if (!(var5 !== var7)) {
                            _fun49608_ip = 101;
                            continue _fun49608
                        }
                    case 84:
                        var7 = _closure1_slot12;
                        var7 = var7.GAME_SHOP;
                        if (!(var12 === var7)) {
                            _fun49608_ip = 1000;
                            continue _fun49608
                        }
                    case 101:
                        if (!(var3 != var12)) {
                            _fun49608_ip = 995;
                            continue _fun49608
                        }
                    case 108:
                        var7 = _closure1_slot11;
                        var7 = var7.bind(var6)(var12);
                        if (!var7) {
                            _fun49608_ip = 375;
                            continue _fun49608
                        }
                    case 123:
                        var7 = _closure1_slot12;
                        var7 = var7.ROLE_SUBSCRIPTIONS;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 960;
                            continue _fun49608
                        }
                    case 140:
                        var7 = _closure1_slot12;
                        var7 = var7.SERVER_MONETIZATION_ONBOARDING;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 919;
                            continue _fun49608
                        }
                    case 157:
                        var7 = _closure1_slot12;
                        var7 = var7.GAME_SHOP;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 869;
                            continue _fun49608
                        }
                    case 174:
                        var7 = _closure1_slot12;
                        var7 = var7.GUILD_SHOP;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 834;
                            continue _fun49608
                        }
                    case 191:
                        var7 = _closure1_slot12;
                        var7 = var7.MEMBER_APPLICATIONS;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 800;
                            continue _fun49608
                        }
                    case 208:
                        var7 = _closure1_slot12;
                        var7 = var7.GUILD_HOME;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 766;
                            continue _fun49608
                        }
                    case 225:
                        var7 = _closure1_slot12;
                        var7 = var7.CHANNEL_BROWSER;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 730;
                            continue _fun49608
                        }
                    case 242:
                        var7 = _closure1_slot12;
                        var7 = var7.GUILD_ONBOARDING;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 712;
                            continue _fun49608
                        }
                    case 259:
                        var7 = _closure1_slot12;
                        var7 = var7.CUSTOMIZE_COMMUNITY;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 676;
                            continue _fun49608
                        }
                    case 276:
                        var7 = _closure1_slot12;
                        var7 = var7.MEMBER_SAFETY;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 642;
                            continue _fun49608
                        }
                    case 293:
                        var7 = _closure1_slot12;
                        var7 = var7.GUILD_BOOSTS;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 637;
                            continue _fun49608
                        }
                    case 310:
                        var7 = _closure1_slot12;
                        var7 = var7.REPORT_TO_MOD;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 602;
                            continue _fun49608
                        }
                    case 327:
                        var7 = _closure1_slot12;
                        var7 = var7.GAME_SERVERS;
                        if (!(var7 !== var12)) {
                            _fun49608_ip = 525;
                            continue _fun49608
                        }
                    case 344:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 17;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.assertNever;
                        var7 = var7.bind(var8)(var12);
                    case 375:
                        var8 = _closure1_slot6;
                        var7 = var8.getChannel;
                        var8 = var7.bind(var8)(var12);
                        var7 = var3 != var8;
                        var11 = var8;
                        if (var7) {
                            _fun49608_ip = 466;
                            continue _fun49608
                        }
                    case 399:
                        var10 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 18;
                        var8 = var13[var8];
                        var10 = var10.bind(var6)(var8);
                        var8 = var10.loadThread;
                        var8 = var8.bind(var10)(var12);
                        SaveGenerator(address = 434);
                    case 432:
                        return var8;
                    case 434:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun49608_ip = 463;
                            continue _fun49608
                        }
                    case 440:
                        var13 = _closure1_slot6;
                        var10 = var13.getChannel;
                        var10 = var10.bind(var13)(var12);
                        var7 = var3 != var10;
                        var11 = var10;
                        _fun49608_ip = 466;
                        continue _fun49608;
                    case 463:
                        return var8;
                    case 466:
                        if (!var7) {
                            _fun49608_ip = 522;
                            continue _fun49608
                        }
                    case 469:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 19;
                        var8 = var13[var8];
                        var10 = var10.bind(var6)(var8);
                        var8 = var10.canViewChannel;
                        var8 = var8.bind(var10)(var11);
                        if (var8) {
                            _fun49608_ip = 519;
                            continue _fun49608
                        }
                    case 503:
                        var11 = _closure1_slot4;
                        var10 = var11.isChannelGatedAndVisible;
                        var8 = var10.bind(var11)(var5, var12);
                    case 519:
                        var7 = var8;
                    case 522:
                        return var7;
                    case 525:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 16;
                        var7 = var10[var7];
                        var10 = var8.bind(var6)(var7);
                        var8 = var10.getGameServerEnabled;
                        var7 = 'isAccessibleChannelOrThreadPath';
                        var7 = var8.bind(var10)(var5, var7);
                        if (!var7) {
                            _fun49608_ip = 570;
                            continue _fun49608
                        }
                    case 566:
                        var7 = var3 != var9;
                    case 570:
                        if (!var7) {
                            _fun49608_ip = 599;
                            continue _fun49608
                        }
                    case 573:
                        var11 = var9.features;
                        var10 = var11.has;
                        var8 = _closure1_slot9;
                        var8 = var8.GAME_SERVERS;
                        var7 = var10.bind(var11)(var8);
                    case 599:
                        return var7;
                    case 602:
                        var7 = var3 != var9;
                        if (!var7) {
                            _fun49608_ip = 634;
                            continue _fun49608
                        }
                    case 609:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var8 = 15;
                        var8 = var11[var8];
                        var8 = var10.bind(var6)(var8);
                        var7 = var8.bind(var6)(var9);
                    case 634:
                        return var7;
                    case 637:
                        var7 = true;
                        return var7;
                    case 642:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 14;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.canAccessMemberSafetyPage;
                        var7 = var7.bind(var8)(var5);
                        return var7;
                    case 676:
                        var7 = var3 != var9;
                        if (!var7) {
                            _fun49608_ip = 709;
                            continue _fun49608
                        }
                    case 683:
                        var11 = var9.features;
                        var10 = var11.has;
                        var8 = _closure1_slot9;
                        var8 = var8.COMMUNITY;
                        var7 = var10.bind(var11)(var8);
                    case 709:
                        return var7;
                    case 712:
                        var8 = _closure1_slot5;
                        var7 = var8.shouldShowOnboarding;
                        var7 = var7.bind(var8)(var5);
                        return var7;
                    case 730:
                        var7 = var3 != var9;
                        if (!var7) {
                            _fun49608_ip = 763;
                            continue _fun49608
                        }
                    case 737:
                        var11 = var9.features;
                        var10 = var11.has;
                        var8 = _closure1_slot9;
                        var8 = var8.COMMUNITY;
                        var7 = var10.bind(var11)(var8);
                    case 763:
                        return var7;
                    case 766:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 13;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.canSeeOnboardingHome;
                        var7 = var7.bind(var8)(var5);
                        return var7;
                    case 800:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 12;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.canReviewGuildMemberApplications;
                        var7 = var7.bind(var8)(var5);
                        return var7;
                    case 834:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 11;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.isGuildShopVisibleInGuild;
                        var7 = var7.bind(var8)(var9, var4);
                        return var7;
                    case 869:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var10 = var8.bind(var6)(var7);
                        var8 = var10.hasSocialLayerStorefront;
                        var7 = var9;
                        if (!(var3 == var7)) {
                            _fun49608_ip = 911;
                            continue _fun49608
                        }
                    case 902:
                        var11 = {};
                        var11.id = var5;
                        var7 = var11;
                    case 911:
                        var7 = var8.bind(var10)(var7);
                        return var7;
                    case 919:
                        var3 = var3 != var9;
                        if (!var3) {
                            _fun49608_ip = 957;
                            continue _fun49608
                        }
                    case 926:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.canUserSeeMonetizationOnboarding;
                        var3 = var7.bind(var8)(var9);
                    case 957:
                        return var3;
                    case 960:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var2 = var7[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.areRoleSubscriptionsVisibleInGuild;
                        var2 = var2.bind(var3)(var5, var4);
                        return var2;
                    case 995:
                        var2 = true;
                        return var2;
                    case 1000:
                        var2 = false;
                        return var2;
                    case 1005:
                        return var1;
                    case 1008:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot9 = var6;
    var3 = var3.ME;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.isStaticChannelRoute;
    var _closure1_slot11 = var6;
    var3 = var3.StaticChannelRoute;
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/isAccessibleChannelOrThreadPath.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: isAccessibleChannelOrThreadPath, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1663, 4646, 1372, 1665, 1410, 660, 1379, 5580, 5592, 3453, 5599, 5601, 4543, 5602, 4552, 5603, 1304, 5604, 3422, 2]);