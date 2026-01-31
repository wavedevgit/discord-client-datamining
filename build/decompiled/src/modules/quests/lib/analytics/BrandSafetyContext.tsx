// modules/quests/lib/analytics/BrandSafetyContext.tsx
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.getVisibleChannelIdsMethod;
    var _closure1_slot3 = var7;
    var3 = var3.getVisibleGuildIdsMethod;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/lib/analytics/BrandSafetyContext.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47230: for (var _fun47230_ip = 0;;) switch (_fun47230_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var2 = var6[var0];
                var7 = undefined;
                var8 = var3.bind(var7)(var2);
                var2 = var8.isBillableQuestContent;
                var2 = var2.bind(var8)(var4);
                var0 = var6[var0];
                var3 = var3.bind(var7)(var0);
                var0 = var3.getAdContext;
                var3 = var0.bind(var3)(var4);
                var0 = _closure1_slot4;
                var8 = var0.bind(var7)();
                var0 = _closure1_slot3;
                var6 = var0.bind(var7)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun47230_ip = 539;
                    continue _fun47230
                }
            case 86:
                var3 = var3.is_campaign_ias_enabled;
                if (!var3) {
                    _fun47230_ip = 539;
                    continue _fun47230
                }
            case 100:
                if (!var2) {
                    _fun47230_ip = 539;
                    continue _fun47230
                }
            case 106:
                if (!(var7 !== var8)) {
                    _fun47230_ip = 539;
                    continue _fun47230
                }
            case 113:
                if (!(var7 !== var6)) {
                    _fun47230_ip = 539;
                    continue _fun47230
                }
            case 120:
                var3 = _closure1_slot7;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var4 = var0 != var2;
                var3 = null;
                if (!var4) {
                    _fun47230_ip = 157;
                    continue _fun47230
                }
            case 143:
                var9 = _closure1_slot6;
                var4 = var9.getGuild;
                var3 = var4.bind(var9)(var2);
            case 157:
                var4 = {};
                var10 = var8.bind(var7)();
                var9 = _closure1_slot6;
                var8 = var9.getGuilds;
                var8 = var8.bind(var9)();
                var _closure2_slot0 = var8;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var5
                    _fun47231: for (var _fun47231_ip = 0;;) switch (_fun47231_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var6 = var1[var0];
                            var5 = undefined;
                            if (!(var5 !== var6)) {
                                _fun47231_ip = 168;
                                continue _fun47231
                            }
                        case 23:
                            var0 = {};
                            var1 = var6.id;
                            var0.id = var1;
                            var1 = var6.name;
                            var0.name = var1;
                            var1 = var6.description;
                            var2 = null;
                            if (!(var2 !== var1)) {
                                _fun47231_ip = 65;
                                continue _fun47231
                            }
                        case 54:
                            var1 = var6.description;
                            var0.description = var1;
                        case 65:
                            var3 = var6.icon;
                            var1 = null;
                            if (!(var2 !== var3)) {
                                _fun47231_ip = 156;
                                continue _fun47231
                            }
                        case 76:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 6;
                            var3 = var7[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.getGuildIconURL;
                            var3 = {};
                            var7 = var6.id;
                            var3.id = var7;
                            var6 = var6.icon;
                            var3.icon = var6;
                            var6 = 44;
                            var3.size = var6;
                            var6 = true;
                            var3.canAnimate = var6;
                            var3 = var4.bind(var5)(var3);
                            var4 = var2 != var3;
                            var1 = null;
                            if (!var4) {
                                _fun47231_ip = 156;
                                continue _fun47231
                            }
                        case 153:
                            var1 = var3;
                        case 156:
                            if (!(var2 !== var1)) {
                                _fun47231_ip = 166;
                                continue _fun47231
                            }
                        case 160:
                            var0.icon_url = var1;
                        case 166:
                            return var0;
                        case 168:
                            var0 = null;
                            return var0;
                    }
                };
                var10 = var9.bind(var10)(var8);
                var9 = var10.filter;
                var8 = function(arg0) { // Environment: var5
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var4.guilds = var8;
                if (!(var0 != var3)) {
                    _fun47230_ip = 256;
                    continue _fun47230
                }
            case 220:
                var9 = var6.bind(var7)();
                var8 = var9.map;
                var6 = function(arg0) { // Environment: var5
                    _fun47233: for (var _fun47233_ip = 0;;) switch (_fun47233_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = undefined;
                            if (!(var0 !== var1)) {
                                _fun47233_ip = 79;
                                continue _fun47233
                            }
                        case 26:
                            var0 = {};
                            var2 = var1.id;
                            var0.id = var2;
                            var2 = var1.name;
                            var0.name = var2;
                            var2 = var1.topic;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(var3 > var2)) {
                                _fun47233_ip = 77;
                                continue _fun47233
                            }
                        case 63:
                            var1 = var1.topic;
                            var0.channel_topic = var1;
                        case 77:
                            return var0;
                        case 79:
                            var0 = null;
                            return var0;
                    }
                };
                var8 = var8.bind(var9)(var6);
                var6 = var8.filter;
                var5 = function(arg0) { // Environment: var5
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var5 = var6.bind(var8)(var5);
                _fun47230_ip = 260;
                continue _fun47230;
            case 256:
                var5 = new Array(0);
            case 260:
                var4.channels = var5;
                if (!(var0 != var2)) {
                    _fun47230_ip = 275;
                    continue _fun47230
                }
            case 269:
                var4.selected_guild_id = var2;
            case 275:
                var2 = var0 == var3;
                var5 = undefined;
                if (var2) {
                    _fun47230_ip = 290;
                    continue _fun47230
                }
            case 284:
                var5 = var3.banner;
            case 290:
                var2 = null;
                if (!(var0 !== var5)) {
                    _fun47230_ip = 385;
                    continue _fun47230
                }
            case 296:
                var6 = var0 == var3;
                var5 = undefined;
                if (var6) {
                    _fun47230_ip = 311;
                    continue _fun47230
                }
            case 305:
                var5 = var3.banner;
            case 311:
                var2 = null;
                if (!(var7 !== var5)) {
                    _fun47230_ip = 385;
                    continue _fun47230
                }
            case 317:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.getGuildBannerURL;
                var5 = {};
                var8 = var3.id;
                var5.id = var8;
                var3 = var3.banner;
                var5.banner = var3;
                var3 = true;
                var3 = var6.bind(var7)(var5, var3);
                var5 = var0 != var3;
                var2 = null;
                if (!var5) {
                    _fun47230_ip = 385;
                    continue _fun47230
                }
            case 382:
                var2 = var3;
            case 385:
                if (!(var0 !== var2)) {
                    _fun47230_ip = 397;
                    continue _fun47230
                }
            case 389:
                var4.selected_guild_banner_url = var2;
            case 397:
                var2 = var4.guilds;
                var3 = var2.length;
                var2 = _closure1_slot8;
                if (!(var3 > var2)) {
                    _fun47230_ip = 453;
                    continue _fun47230
                }
            case 416:
                var6 = var4.guilds;
                var5 = var6.slice;
                var3 = _closure1_slot8;
                var2 = 0;
                var2 = var5.bind(var6)(var2, var3);
                var4.guilds = var2;
                var2 = true;
                var4.truncated = var2;
            case 453:
                var2 = var4.channels;
                var3 = var2.length;
                var2 = _closure1_slot8;
                if (!(var3 > var2)) {
                    _fun47230_ip = 509;
                    continue _fun47230
                }
            case 472:
                var5 = var4.channels;
                var3 = var5.slice;
                var2 = _closure1_slot8;
                var1 = 0;
                var1 = var3.bind(var5)(var1, var2);
                var4.channels = var1;
                var1 = true;
                var4.truncated = var1;
            case 509:
                var1 = {};
                var2 = global;
                var3 = var2.JSON;
                var2 = var3.stringify;
                var2 = var2.bind(var3)(var4);
                var1.brand_safety_context = var2;
                return var1;
            case 539:
                return var0;
        }
    };
    var2.getBrandSafetyContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5272, 1372, 1410, 3172, 5270, 5201, 1417, 2]);