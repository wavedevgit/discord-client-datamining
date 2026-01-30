// modules/slayer_storefront/navigateToSocialLayerStorefront.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _navigateToSocialLayerStorefront, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93336: for (var _fun93336_ip = 0;;) switch (_fun93336_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93336_ip = 423;
                            continue _fun93336
                        }
                    case 13:
                        var11 = var1.guildId;
                        var7 = var1.invite;
                        var10 = var1.pageIndex;
                        var9 = var1.skuId;
                        var8 = var1.slug;
                        var3 = undefined;
                        SaveGenerator(address = 48);
                    case 46:
                        return var3;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93336_ip = 420;
                            continue _fun93336
                        }
                    case 57:
                        var2 = null;
                        var4 = var2 != var7;
                        var12 = null;
                        if (!var4) {
                            _fun93336_ip = 141;
                            continue _fun93336
                        }
                    case 68:
                        var4 = var7.guild;
                        var6 = var2 == var4;
                        var5 = undefined;
                        if (var6) {
                            _fun93336_ip = 87;
                            continue _fun93336
                        }
                    case 82:
                        var5 = var4.id;
                    case 87:
                        var4 = global;
                        var13 = var4.Set;
                        var6 = var7.guild;
                        var14 = var2 == var6;
                        var4 = undefined;
                        if (var14) {
                            _fun93336_ip = 115;
                            continue _fun93336
                        }
                    case 109:
                        var4 = var6.features;
                    case 115:
                        var6 = var13.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var13
                            }
                        });
                        var19 = var6;
                        var18 = var4;
                        var4 = new var19[var13](var18, var17);
                        var12 = var4 instanceof Object ? var4 : var6;
                        var11 = var5;
                    case 141:
                        if (!(var2 != var11)) {
                            _fun93336_ip = 414;
                            continue _fun93336
                        }
                    case 148:
                        var6 = _closure1_slot4;
                        var5 = var6.getGuild;
                        var6 = var5.bind(var6)(var11);
                        var13 = var2 == var6;
                        var5 = undefined;
                        if (var13) {
                            _fun93336_ip = 180;
                            continue _fun93336
                        }
                    case 174:
                        var5 = var6.joinedAt;
                    case 180:
                        if (!(var2 == var5)) {
                            _fun93336_ip = 354;
                            continue _fun93336
                        }
                    case 187:
                        if (!(var2 != var12)) {
                            _fun93336_ip = 300;
                            continue _fun93336
                        }
                    case 191:
                        var6 = var12.has;
                        var5 = _closure1_slot5;
                        var5 = var5.PREVIEW_ENABLED;
                        var5 = var6.bind(var12)(var5);
                        if (var5) {
                            _fun93336_ip = 300;
                            continue _fun93336
                        }
                    case 214:
                        if (!(var2 != var7)) {
                            _fun93336_ip = 354;
                            continue _fun93336
                        }
                    case 221:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.acceptInvite;
                        var2 = {};
                        var7 = var7.code;
                        var2.inviteKey = var7;
                        var7 = {};
                        var12 = 'game_shop';
                        var7.location = var12;
                        var2.context = var7;
                        var7 = true;
                        var2.skipOnboarding = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 291);
                    case 289:
                        return var2;
                    case 291:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun93336_ip = 354;
                            continue _fun93336
                        }
                    case 297:
                        return var2;
                    case 300:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var7 = var5.bind(var3)(var2);
                        var6 = var7.startLurking;
                        var5 = {};
                        var2 = false;
                        var5.shouldNavigate = var2;
                        var2 = {};
                        var2 = var6.bind(var7)(var11, var2, var5);
                        SaveGenerator(address = 348);
                    case 346:
                        return var2;
                    case 348:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun93336_ip = 417;
                            continue _fun93336
                        }
                    case 354:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 6;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.transitionTo;
                        var7 = _closure1_slot6;
                        var4 = var7.CHANNELS_GAME_SHOP;
                        var19 = var7;
                        var18 = var11;
                        var17 = var10;
                        var16 = var9;
                        var15 = var8;
                        var4 = var19[var4](var18, var17, var16, var15, var14);
                        var4 = var5.bind(var6)(var4);
                    case 414:
                        return var3;
                    case 417:
                        return var2;
                    case 420:
                        return var1;
                    case 423:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot5 = var6;
    var3 = var3.Routes;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/navigateToSocialLayerStorefront.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: navigateToSocialLayerStorefront, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: eagerNavigateToSocialLayerStorefront, environment: var1
        _fun93338: for (var _fun93338_ip = 0;;) switch (_fun93338_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = var0.invite;
                var4 = var0.forceFetch;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun93338_ip = 48;
                    continue _fun93338
                }
            case 26:
                var2 = var1.guild;
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun93338_ip = 45;
                    continue _fun93338
                }
            case 40:
                var1 = var2.id;
            case 45:
                var3 = var1;
            case 48:
                if (!(var0 != var3)) {
                    _fun93338_ip = 103;
                    continue _fun93338
                }
            case 52:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchSocialLayerStorefront;
                var0 = {};
                var5 = true;
                var0.eager = var5;
                var0.forceFetch = var4;
                var0 = var1.bind(var2)(var3, var0);
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var2.eagerNavigateToSocialLayerStorefront = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 660, 12149, 5575, 5859, 1220, 2]);