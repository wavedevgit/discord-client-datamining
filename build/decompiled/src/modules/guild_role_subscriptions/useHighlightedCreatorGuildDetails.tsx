// modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MarketingURLs;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useHighlightedCreatorGuildDetails, environment: var1
        _fun116465: for (var _fun116465_ip = 0;;) switch (_fun116465_ip) {
            case 0:
                var14 = arg0;
                var11 = arg1;
                var _closure2_slot0 = var11;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var12 = undefined;
                var0 = var1.bind(var12)(var0);
                var1 = var0.bind(var12)(var14);
                var10 = var1.isLoading;
                var0 = var1.error;
                var6 = var1.highlightedCreatorDetails;
                var1 = null;
                var4 = var1 == var6;
                var2 = undefined;
                if (var4) {
                    _fun116465_ip = 78;
                    continue _fun116465
                }
            case 70:
                var2 = var6.store_page;
            case 78:
                var _closure2_slot1 = var2;
                var9 = _closure1_slot2;
                var8 = var9.useMemo;
                var7 = var1 == var2;
                var4 = undefined;
                if (var7) {
                    _fun116465_ip = 106;
                    continue _fun116465
                }
            case 100:
                var4 = var2.role_subscription;
            case 106:
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var3
                    _fun116466: for (var _fun116466_ip = 0;;) switch (_fun116466_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            var5 = undefined;
                            if (var3) {
                                _fun116466_ip = 49;
                                continue _fun116466
                            }
                        case 22:
                            var3 = _closure2_slot1;
                            var3 = var3.role_subscription;
                            var6 = var2 == var3;
                            var5 = undefined;
                            if (var6) {
                                _fun116466_ip = 49;
                                continue _fun116466
                            }
                        case 41:
                            var5 = var3.group_listings;
                        case 49:
                            var3 = function(arg0) { // Original name: getSubscriptionRoleIds, environment: var1
                                _fun116467: for (var _fun116467_ip = 0;;) switch (_fun116467_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = global;
                                        var0 = var0.Set;
                                        var2 = var0.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var0
                                            }
                                        });
                                        var5 = var2;
                                        var0 = new var5[var0](var4);
                                        var0 = var0 instanceof Object ? var0 : var2;
                                        var _closure4_slot0 = var0;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun116467_ip = 60;
                                            continue _fun116467
                                        }
                                    case 43:
                                        var2 = var3.forEach;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun116468: for (var _fun116468_ip = 0;;) switch (_fun116468_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var2 = var0.subscription_listings;
                                                    var0 = null;
                                                    if (!(var0 != var2)) {
                                                        _fun116468_ip = 34;
                                                        continue _fun116468
                                                    }
                                                case 15:
                                                    var1 = var2.forEach;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var2 = _closure4_slot0;
                                                        var1 = var2.add;
                                                        var0 = arg0;
                                                        var0 = var0.role_id;
                                                        var0 = var1.bind(var2)(var0);
                                                        var0 = undefined;
                                                        return var0;
                                                    };
                                                    var0 = var1.bind(var2)(var0);
                                                case 34:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                    case 60:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var0)(var5);
                            var _closure3_slot0 = var3;
                            var3 = _closure2_slot1;
                            var5 = var2 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun116466_ip = 105;
                                continue _fun116466
                            }
                        case 78:
                            var4 = _closure2_slot1;
                            var4 = var4.role_subscription;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun116466_ip = 105;
                                continue _fun116466
                            }
                        case 97:
                            var3 = var4.benefit_emojis;
                        case 105:
                            var2 = var2 == var3;
                            var0 = undefined;
                            if (var2) {
                                _fun116466_ip = 131;
                                continue _fun116466
                            }
                        case 114:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.roles;
                                var1 = var2.some;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure3_slot0;
                                    var1 = var2.has;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 131:
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var4, var7);
                var _closure2_slot2 = var9;
                var4 = var1 == var2;
                var8 = undefined;
                if (var4) {
                    _fun116465_ip = 151;
                    continue _fun116465
                }
            case 140:
                var4 = var2.guild;
                var8 = var4.icon_hash;
            case 151:
                var7 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 3;
                var4 = var13[var4];
                var13 = var7.bind(var12)(var4);
                var7 = var13.getGuildIconURL;
                var4 = {};
                var4.id = var14;
                var4.icon = var8;
                var14 = arg2;
                var4.size = var14;
                var7 = var7.bind(var13)(var4);
                var14 = _closure1_slot2;
                var13 = var14.useMemo;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var11;
                var3 = function() { // Environment: var3
                    _fun116472: for (var _fun116472_ip = 0;;) switch (_fun116472_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun116472_ip = 30;
                                continue _fun116472
                            }
                        case 13:
                            var0 = _closure2_slot2;
                            var2 = var0.length;
                            var0 = _closure2_slot0;
                            if (!(!(var2 > var0))) {
                                _fun116472_ip = 36;
                                continue _fun116472
                            }
                        case 30:
                            var0 = _closure2_slot2;
                            _fun116472_ip = 57;
                            continue _fun116472;
                        case 36:
                            var4 = _closure2_slot2;
                            var3 = var4.slice;
                            var2 = _closure2_slot0;
                            var1 = 0;
                            var0 = var3.bind(var4)(var1, var2);
                        case 57:
                            return var0;
                    }
                };
                var4 = var13.bind(var14)(var3, var4);
                var13 = var1 != var9;
                var3 = null;
                if (!var13) {
                    _fun116465_ip = 265;
                    continue _fun116465
                }
            case 242:
                var13 = var9.length;
                var13 = var13 > var11;
                var3 = null;
                if (!var13) {
                    _fun116465_ip = 265;
                    continue _fun116465
                }
            case 256:
                var9 = var9.length;
                var3 = var9 - var11;
            case 265:
                var9 = var1 == var6;
                var11 = undefined;
                if (var9) {
                    _fun116465_ip = 280;
                    continue _fun116465
                }
            case 274:
                var11 = var6.slug;
            case 280:
                var9 = var1 != var11;
                var6 = undefined;
                if (!var9) {
                    _fun116465_ip = 304;
                    continue _fun116465
                }
            case 289:
                var9 = _closure1_slot3;
                var5 = var9.ROLE_SUBSCRIPTION_STORE_PAGE;
                var6 = var5.bind(var9)(var11);
            case 304:
                var5 = var1 == var2;
                var9 = undefined;
                if (var5) {
                    _fun116465_ip = 332;
                    continue _fun116465
                }
            case 313:
                var5 = var2.guild;
                var11 = var1 == var5;
                var9 = undefined;
                if (var11) {
                    _fun116465_ip = 332;
                    continue _fun116465
                }
            case 327:
                var9 = var5.name;
            case 332:
                var11 = var1 == var2;
                var5 = undefined;
                if (var11) {
                    _fun116465_ip = 362;
                    continue _fun116465
                }
            case 341:
                var2 = var2.role_subscription;
                var11 = var1 == var2;
                var5 = undefined;
                if (var11) {
                    _fun116465_ip = 362;
                    continue _fun116465
                }
            case 356:
                var5 = var2.subscriber_count;
            case 362:
                var2 = !var10;
                if (!var2) {
                    _fun116465_ip = 372;
                    continue _fun116465
                }
            case 368:
                var2 = var1 != var9;
            case 372:
                if (!var2) {
                    _fun116465_ip = 379;
                    continue _fun116465
                }
            case 375:
                var2 = var1 != var8;
            case 379:
                if (!var2) {
                    _fun116465_ip = 386;
                    continue _fun116465
                }
            case 382:
                var2 = var1 != var7;
            case 386:
                var1 = {};
                var1.hasAllImperativeDetails = var2;
                var1.isLoading = var10;
                if (var2) {
                    _fun116465_ip = 410;
                    continue _fun116465
                }
            case 401:
                var1.error = var0;
                var0 = var1;
                _fun116465_ip = 455;
                continue _fun116465;
            case 410:
                var2 = {};
                var2.guildName = var9;
                var2.guildIcon = var8;
                var2.guildAvatarUrl = var7;
                var2.storePageUrl = var6;
                var2.subscriberCount = var5;
                var2.emojisToShow = var4;
                var2.notShownEmojiCount = var3;
                var1.details = var2;
                var0 = var1;
            case 455:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 14810, 1417, 2]);