// modules/guild_tag/GuildTagCoachmarkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var6;
    var3 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_tag/GuildTagCoachmarkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useGuildTagAvailableDismissibleContent, environment: var1
        _fun105197: for (var _fun105197_ip = 0;;) switch (_fun105197_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var3;
                var7 = undefined;
                if (!(var0 === var7)) {
                    _fun105197_ip = 20;
                    continue _fun105197
                }
            case 18:
                var0 = {};
            case 20:
                var0 = var0.shouldShow;
                var6 = var7 === var0;
                if (var6) {
                    _fun105197_ip = 36;
                    continue _fun105197
                }
            case 33:
                var6 = var0;
            case 36:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 5;
                var5 = var0[var5];
                var10 = var2.bind(var7)(var5);
                var9 = var10.useIsContentDismissed;
                var8 = 6;
                var0 = var0[var8];
                var0 = var2.bind(var7)(var0);
                var0 = var0.DismissibleGuildContent;
                var2 = var0.ADOPT_CLAN_IDENTITY_NOTICE;
                var5 = null;
                var0 = var3;
                if (!(var5 == var3)) {
                    _fun105197_ip = 102;
                    continue _fun105197
                }
            case 98:
                var0 = _closure1_slot6;
            case 102:
                var0 = var9.bind(var10)(var2, var0);
                var2 = _closure1_slot0;
                var10 = _closure1_slot1;
                var9 = 7;
                var9 = var10[var9];
                var13 = var2.bind(var7)(var9);
                var12 = var13.useStateFromStores;
                var9 = _closure1_slot3;
                var11 = new Array(3);
                var11[0] = var9;
                var9 = _closure1_slot4;
                var11[1] = var9;
                var9 = _closure1_slot2;
                var11[2] = var9;
                var9 = new Array(1);
                var9[0] = var3;
                var1 = function() { // Environment: var1
                    _fun105198: for (var _fun105198_ip = 0;;) switch (_fun105198_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 !== var1)) {
                                _fun105198_ip = 247;
                                continue _fun105198
                            }
                        case 16:
                            var5 = _closure1_slot3;
                            var4 = var5.getGuild;
                            var1 = _closure2_slot0;
                            var4 = var4.bind(var5)(var1);
                            var5 = undefined;
                            if (!(var5 !== var4)) {
                                _fun105198_ip = 243;
                                continue _fun105198
                            }
                        case 46:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 8;
                            var1 = var7[var1];
                            var6 = var6.bind(var5)(var1);
                            var1 = var6.guildSupportsTags;
                            var1 = var1.bind(var6)(var4);
                            if (!var1) {
                                _fun105198_ip = 243;
                                continue _fun105198
                            }
                        case 83:
                            var1 = var4.profile;
                            if (!(var0 != var1)) {
                                _fun105198_ip = 243;
                                continue _fun105198
                            }
                        case 96:
                            var1 = var4.profile;
                            var1 = var1.tag;
                            if (!(var0 !== var1)) {
                                _fun105198_ip = 243;
                                continue _fun105198
                            }
                        case 114:
                            var6 = _closure1_slot4;
                            var1 = var6.getCurrentUser;
                            var1 = var1.bind(var6)();
                            if (!(var5 !== var1)) {
                                _fun105198_ip = 239;
                                continue _fun105198
                            }
                        case 131:
                            var6 = var1.primaryGuild;
                            var8 = var0 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun105198_ip = 152;
                                continue _fun105198
                            }
                        case 146:
                            var7 = var6.identityGuildId;
                        case 152:
                            var6 = var4.id;
                            if (!(var7 === var6)) {
                                _fun105198_ip = 196;
                                continue _fun105198
                            }
                        case 161:
                            var6 = var1.primaryGuild;
                            var7 = var0 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun105198_ip = 181;
                                continue _fun105198
                            }
                        case 176:
                            var5 = var6.tag;
                        case 181:
                            var4 = var4.profile;
                            var4 = var4.tag;
                            if (!(var5 !== var4)) {
                                _fun105198_ip = 239;
                                continue _fun105198
                            }
                        case 196:
                            var4 = _closure1_slot2;
                            var3 = var4.getMember;
                            var2 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun105198_ip = 237;
                                continue _fun105198
                            }
                        case 228:
                            var1 = var1.isPending;
                            var0 = !var1;
                        case 237:
                            return var0;
                        case 239:
                            var0 = false;
                            return var0;
                        case 243:
                            var0 = false;
                            return var0;
                        case 247:
                            var0 = false;
                            return var0;
                    }
                };
                var9 = var12.bind(var13)(var11, var1, var9);
                var1 = 9;
                var1 = var10[var1];
                var2 = var2.bind(var7)(var1);
                var1 = var2.useSelectedSingleUseGuildDismissibleContent;
                if (!var9) {
                    _fun105197_ip = 249;
                    continue _fun105197
                }
            case 204:
                if (!var6) {
                    _fun105197_ip = 249;
                    continue _fun105197
                }
            case 207:
                if (var0) {
                    _fun105197_ip = 249;
                    continue _fun105197
                }
            case 210:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var6.bind(var7)(var0);
                var0 = var0.DismissibleContent;
                var6 = var0.GUILD_TAG_AVAILABLE_COACHMARK_V2;
                var0 = new Array(1);
                var0[0] = var6;
                _fun105197_ip = 253;
                continue _fun105197;
            case 249:
                var0 = new Array(0);
            case 253:
                if (!(var5 == var3)) {
                    _fun105197_ip = 261;
                    continue _fun105197
                }
            case 257:
                var3 = _closure1_slot7;
            case 261:
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.useGuildTagAvailableDismissibleContent = var3;
    var1 = function(arg0) { // Original name: useGuildTagUpdatedDismissibleContent, environment: var1
        _fun105199: for (var _fun105199_ip = 0;;) switch (_fun105199_ip) {
            case 0:
                var0 = arg0;
                var2 = arguments[1];
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun105199_ip = 16;
                    continue _fun105199
                }
            case 14:
                var2 = {};
            case 16:
                var _closure2_slot0 = var5;
                var2 = var2.shouldShow;
                var4 = var5 === var2;
                if (var4) {
                    _fun105199_ip = 36;
                    continue _fun105199
                }
            case 33:
                var4 = var2;
            case 36:
                var6 = null;
                var2 = var6 == var0;
                var7 = undefined;
                if (var2) {
                    _fun105199_ip = 53;
                    continue _fun105199
                }
            case 47:
                var7 = var0.primaryGuild;
            case 53:
                var2 = var6 == var7;
                var0 = undefined;
                if (var2) {
                    _fun105199_ip = 68;
                    continue _fun105199
                }
            case 62:
                var0 = var7.identityGuildId;
            case 68:
                var2 = var6 != var0;
                var9 = null;
                if (!var2) {
                    _fun105199_ip = 80;
                    continue _fun105199
                }
            case 77:
                var9 = var0;
            case 80:
                _closure2_slot0 = var9;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 7;
                var3 = var10[var2];
                var13 = var8.bind(var5)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var3;
                var3 = function() { // Environment: var1
                    _fun105200: for (var _fun105200_ip = 0;;) switch (_fun105200_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 !== var2)) {
                                _fun105200_ip = 37;
                                continue _fun105200
                            }
                        case 13:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuildLastSeenInfo;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var3 = var12.bind(var13)(var11, var3);
                var2 = var10[var2];
                var10 = var8.bind(var5)(var2);
                var8 = var10.useStateFromStores;
                var11 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var1
                    _fun105201: for (var _fun105201_ip = 0;;) switch (_fun105201_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var2 = null;
                            var4 = var2 == var1;
                            var0 = undefined;
                            if (var4) {
                                _fun105201_ip = 55;
                                continue _fun105201
                            }
                        case 35:
                            var1 = var1.profile;
                            var2 = var2 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun105201_ip = 55;
                                continue _fun105201
                            }
                        case 50:
                            var0 = var1.tag;
                        case 55:
                            return var0;
                    }
                };
                var2 = var8.bind(var10)(var2, var1);
                var8 = var6 != var2;
                if (!var8) {
                    _fun105199_ip = 202;
                    continue _fun105199
                }
            case 183:
                var10 = var6 == var7;
                var1 = undefined;
                if (var10) {
                    _fun105199_ip = 198;
                    continue _fun105199
                }
            case 192:
                var1 = var7.identityGuildId;
            case 198:
                var8 = var1 === var9;
            case 202:
                if (!var8) {
                    _fun105199_ip = 223;
                    continue _fun105199
                }
            case 205:
                var10 = var6 == var7;
                var1 = undefined;
                if (var10) {
                    _fun105199_ip = 219;
                    continue _fun105199
                }
            case 214:
                var1 = var7.tag;
            case 219:
                var8 = var6 === var1;
            case 223:
                var7 = var6 != var9;
                if (!var7) {
                    _fun105199_ip = 248;
                    continue _fun105199
                }
            case 230:
                var10 = var6 == var3;
                var1 = undefined;
                if (var10) {
                    _fun105199_ip = 244;
                    continue _fun105199
                }
            case 239:
                var1 = var3.tag;
            case 244:
                var7 = var1 === var2;
            case 248:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var3 = var2.bind(var5)(var1);
                var2 = var3.useSelectedTimeRecurringDismissibleContent;
                var1 = null;
                if (!(var6 !== var9)) {
                    _fun105199_ip = 327;
                    continue _fun105199
                }
            case 280:
                var1 = null;
                if (!var8) {
                    _fun105199_ip = 327;
                    continue _fun105199
                }
            case 285:
                var1 = null;
                if (var7) {
                    _fun105199_ip = 327;
                    continue _fun105199
                }
            case 290:
                var1 = null;
                if (!var4) {
                    _fun105199_ip = 327;
                    continue _fun105199
                }
            case 295:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.DismissibleContent;
                var1 = var0.GUILD_TAG_UPDATED_COACHMARK;
            case 327:
                var0 = {};
                var4 = 86400000;
                var0.cooldownDurationMs = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useGuildTagUpdatedDismissibleContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 1613, 13654, 660, 11244, 1358, 566, 6770, 13655, 2]);