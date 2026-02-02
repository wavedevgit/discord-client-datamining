// modules/age_gate/AgeGateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var15;
    var11 = function() {
        _fun40983: for (var _fun40983_ip = 0;;) switch (_fun40983_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var5 = undefined;
                var2 = var6.bind(var5)(var0);
                var1 = var2.getIsGidgetPawtectEnabled;
                var0 = 'age-gate-utils';
                var2 = var1.bind(var2)(var0);
                var0 = 11;
                var0 = var7[var0];
                var1 = var6.bind(var5)(var0);
                var0 = var1.shouldShowTiggerPawtect;
                var1 = var0.bind(var1)();
                var0 = 12;
                var0 = var7[var0];
                var4 = var6.bind(var5)(var0);
                var3 = var4.isFeatureAgeGated;
                var0 = 13;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.AGE_GATED_SPACES;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun40983_ip = 117;
                    continue _fun40983
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun40983_ip = 123;
                    continue _fun40983
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var _closure1_slot18 = var11;
    var10 = function() {
        _fun40984: for (var _fun40984_ip = 0;;) switch (_fun40984_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.useIsFeatureAgeGated;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.AGE_GATED_SPACES;
                var0 = var1.bind(var2)(var0);
                var1 = 10;
                var1 = var5[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.useIsGidgetPawtectEnabled;
                var1 = 'age-gate-utils';
                var2 = var2.bind(var6)(var1);
                var1 = 11;
                var1 = var5[var1];
                var3 = var4.bind(var3)(var1);
                var1 = var3.useShouldShowTiggerPawtect;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun40984_ip = 117;
                    continue _fun40984
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun40984_ip = 123;
                    continue _fun40984
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var _closure1_slot19 = var10;
    var4 = function arg0() {
        _fun40985: for (var _fun40985_ip = 0;;) switch (_fun40985_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun40985_ip = 278;
                    continue _fun40985
                }
            case 12:
                var5 = _closure1_slot5;
                var4 = var5.didAgree;
                var2 = var3.guild_id;
                var2 = var4.bind(var5)(var2);
                var5 = _closure1_slot7;
                var4 = var5.getCurrentUser;
                var5 = var4.bind(var5)();
                var6 = var0 == var5;
                var4 = undefined;
                var8 = undefined;
                if (var6) {
                    _fun40985_ip = 65;
                    continue _fun40985
                }
            case 59:
                var8 = var5.nsfwAllowed;
            case 65:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
                var5 = var11[var5];
                var7 = var10.bind(var4)(var5);
                var6 = var7.getIsGidgetPawtectEnabled;
                var5 = 'age-gate-utils';
                var5 = var6.bind(var7)(var5);
                var6 = 12;
                var6 = var11[var6];
                var9 = var10.bind(var4)(var6);
                var7 = var9.isFeatureAgeGated;
                var6 = 13;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.AgeGatedFeature;
                var6 = var6.AGE_GATED_SPACES;
                var6 = var7.bind(var9)(var6);
                if (var6) {
                    _fun40985_ip = 155;
                    continue _fun40985
                }
            case 152:
                var6 = var5;
            case 155:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 11;
                var5 = var9[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.shouldShowTiggerPawtect;
                var5 = var5.bind(var7)();
                if (!var2) {
                    _fun40985_ip = 197;
                    continue _fun40985
                }
            case 188:
                var7 = false;
                var7 = var7 === var8;
                var2 = !var7;
            case 197:
                var2 = !var2;
                if (var2) {
                    _fun40985_ip = 212;
                    continue _fun40985
                }
            case 203:
                if (!var5) {
                    _fun40985_ip = 209;
                    continue _fun40985
                }
            case 206:
                var5 = var6;
            case 209:
                var2 = var5;
            case 212:
                var5 = var3.isNSFW;
                var5 = var5.bind(var3)();
                if (!var5) {
                    _fun40985_ip = 228;
                    continue _fun40985
                }
            case 225:
                if (var2) {
                    _fun40985_ip = 274;
                    continue _fun40985
                }
            case 228:
                var6 = var3.guild_id;
                var5 = _closure1_slot6;
                var3 = var5.getGuild;
                var3 = var3.bind(var5)(var6);
                var0 = var0 != var3;
                if (!var0) {
                    _fun40985_ip = 272;
                    continue _fun40985
                }
            case 254:
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var3);
                if (!var1) {
                    _fun40985_ip = 269;
                    continue _fun40985
                }
            case 266:
                var1 = var2;
            case 269:
                var0 = var1;
            case 272:
                return var0;
            case 274:
                var0 = true;
                return var0;
            case 278:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var3 = function() {
        _fun40986: for (var _fun40986_ip = 0;;) switch (_fun40986_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun40986_ip = 35;
                    continue _fun40986
                }
            case 25:
                var1 = var1.nsfwAllowed;
                var0 = var2 == var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var15[var0];
    var0 = undefined;
    var6 = var14.bind(var0)(var6);
    var6 = var6.isGuildNSFW;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var15[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var15[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var15[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var15[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var15[var6];
    var6 = var14.bind(var0)(var6);
    var6 = var6.AgeGateSource;
    var _closure1_slot8 = var6;
    var7 = 6;
    var7 = var15[var7];
    var7 = var14.bind(var0)(var7);
    var8 = var7.GuildNSFWContentLevel;
    var7 = var7.HelpdeskArticles;
    var _closure1_slot9 = var7;
    var12 = var5.Date;
    var7 = var12.prototype;
    var9 = Object.create(var7, {
        constructor: {
            value: var12
        }
    });
    var18 = '06/16/2020';
    var19 = var9;
    var7 = new var19[var12](var18, var17);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot10 = var7;
    var9 = var8.AGE_RESTRICTED;
    var7 = new Array(2);
    var7[0] = var9;
    var8 = var8.EXPLICIT;
    var7[1] = var8;
    var _closure1_slot11 = var7;
    var7 = var5.Set;
    var8 = var6.NSFW_SERVER;
    var5 = new Array(3);
    var5[0] = var8;
    var8 = var6.NSFW_SERVER_INVITE;
    var5[1] = var8;
    var6 = var6.NSFW_SERVER_INVITE_EMBED;
    var5[2] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var19 = var6;
    var18 = var5;
    var5 = new var19[var7](var18, var17);
    var12 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot12 = var12;
    var9 = function() {
        _fun40987: for (var _fun40987_ip = 0;;) switch (_fun40987_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var0)) {
                    _fun40987_ip = 52;
                    continue _fun40987
                }
            case 22:
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var0.nsfwAllowed;
                var0 = true;
                var0 = var0 !== var2;
                if (var0) {
                    _fun40987_ip = 50;
                    continue _fun40987
                }
            case 47:
                var0 = var1;
            case 50:
                return var0;
            case 52:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var9;
    var8 = function arg0() {
        _fun40988: for (var _fun40988_ip = 0;;) switch (_fun40988_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun40988_ip = 57;
                    continue _fun40988
                }
            case 19:
                var0 = null;
                if (!(var0 != var5)) {
                    _fun40988_ip = 57;
                    continue _fun40988
                }
            case 25:
                var4 = _closure1_slot6;
                var2 = var4.getGuild;
                var2 = var2.bind(var4)(var5);
                var0 = var0 != var2;
                if (!var0) {
                    _fun40988_ip = 55;
                    continue _fun40988
                }
            case 46:
                var1 = _closure1_slot3;
                var0 = var1.bind(var3)(var2);
            case 55:
                return var0;
            case 57:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot14 = var8;
    var7 = function arg0() {
        _fun40989: for (var _fun40989_ip = 0;;) switch (_fun40989_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)();
                var2 = !var0;
                if (var2) {
                    _fun40989_ip = 28;
                    continue _fun40989
                }
            case 22:
                var0 = null;
                var2 = var0 == var5;
            case 28:
                var0 = !var2;
                if (var2) {
                    _fun40989_ip = 57;
                    continue _fun40989
                }
            case 34:
                var2 = _closure1_slot20;
                var4 = _closure1_slot4;
                var1 = var4.getChannel;
                var1 = var1.bind(var4)(var5);
                var0 = var2.bind(var3)(var1);
            case 57:
                return var0;
        }
    };
    var _closure1_slot15 = var7;
    var6 = function arg0() {
        _fun40990: for (var _fun40990_ip = 0;;) switch (_fun40990_ip) {
            case 0:
                var0 = _closure1_slot18;
                var3 = undefined;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun40990_ip = 28;
                    continue _fun40990
                }
            case 16:
                var2 = _closure1_slot15;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 28:
                return var0;
        }
    };
    var _closure1_slot16 = var6;
    var5 = function arg0() {
        _fun40991: for (var _fun40991_ip = 0;;) switch (_fun40991_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun40991_ip = 61;
                    continue _fun40991
                }
            case 12:
                var1 = var2.isNSFW;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun40991_ip = 58;
                    continue _fun40991
                }
            case 25:
                var4 = _closure1_slot3;
                var5 = _closure1_slot6;
                var3 = var5.getGuild;
                var2 = var2.guild_id;
                var3 = var3.bind(var5)(var2);
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot17 = var5;
    var13 = 19;
    var13 = var15[var13];
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/age_gate/AgeGateUtils.tsx';
    var13 = var14.bind(var15)(var13);
    var2.SERVER_AGE_GATE_SOURCES = var12;
    var12 = function() {
        _fun40992: for (var _fun40992_ip = 0;;) switch (_fun40992_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun40992_ip = 81;
                    continue _fun40992
                }
            case 25:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.extractTimestamp;
                var4 = var1.id;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot10;
                var3 = var5.getTime;
                var3 = var3.bind(var5)();
                var0 = var4 > var3;
            case 81:
                if (!var0) {
                    _fun40992_ip = 94;
                    continue _fun40992
                }
            case 84:
                var1 = var1.nsfwAllowed;
                var0 = var2 == var1;
            case 94:
                return var0;
        }
    };
    var2.userNeedsAgeGate = var12;
    var12 = function arg0() {
        var2 = _closure1_slot11;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var0.nsfwLevel;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.guildNeedsAgeGate = var12;
    var2.shouldAgeVerifyForAgeGate = var11;
    var2.useShouldAgeVerifyForAgeGate = var10;
    var10 = function arg0() {
        _fun40994: for (var _fun40994_ip = 0;;) switch (_fun40994_ip) {
            case 0:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var11.bind(var5)(var0);
                var0 = var1.useIsAgeVerified;
                var10 = var0.bind(var1)();
                var1 = _closure1_slot3;
                var0 = arg0;
                var6 = var1.bind(var5)(var0);
                var0 = 14;
                var0 = var2[var0];
                var7 = var11.bind(var5)(var0);
                var4 = var7.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    _fun40995: for (var _fun40995_ip = 0;;) switch (_fun40995_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun40995_ip = 33;
                                continue _fun40995
                            }
                        case 27:
                            var1 = var0.nsfwAllowed;
                        case 33:
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var0 = var4.bind(var7)(var1, var0);
                var1 = _closure1_slot19;
                var13 = var1.bind(var5)();
                var1 = 15;
                var1 = var2[var1];
                var1 = var11.bind(var5)(var1);
                var7 = var1.AgeVerificationLanguageExperiment;
                var4 = var7.useConfig;
                var1 = {};
                var8 = 'useAgeGateVerifyContentForGuild';
                var1.location = var8;
                var1 = var4.bind(var7)(var1);
                var8 = var1.enabled;
                var1 = 7;
                var4 = var2[var1];
                var14 = var11.bind(var5)(var4);
                var9 = var14.useUpdatedAgeVerificationString;
                var12 = 8;
                var4 = var2[var12];
                var4 = var11.bind(var5)(var4);
                var15 = var4.intl;
                var7 = var15.string;
                var4 = var2[var12];
                var4 = var11.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.PBG51l;
                var7 = var7.bind(var15)(var4);
                var4 = var2[var12];
                var4 = var11.bind(var5)(var4);
                var16 = var4.intl;
                var15 = var16.string;
                var4 = var2[var12];
                var4 = var11.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.Zt4Mf4;
                var4 = var15.bind(var16)(var4);
                var4 = var9.bind(var14)(var7, var4);
                var7 = var2[var1];
                var15 = var11.bind(var5)(var7);
                var14 = var15.useUpdatedAgeVerificationString;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var16 = var7.intl;
                var9 = var16.string;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.akjk0f;
                var9 = var9.bind(var16)(var7);
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var17 = var7.intl;
                var16 = var17.string;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.V6Gmu9;
                var7 = var16.bind(var17)(var7);
                var9 = var14.bind(var15)(var9, var7);
                var7 = var2[var1];
                var16 = var11.bind(var5)(var7);
                var15 = var16.useUpdatedAgeVerificationString;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var17 = var7.intl;
                var14 = var17.string;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7["u/xqhc"];
                var14 = var14.bind(var17)(var7);
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var18 = var7.intl;
                var17 = var18.string;
                var7 = var2[var12];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7["5rygLk"];
                var7 = var17.bind(var18)(var7);
                var7 = var15.bind(var16)(var14, var7);
                var1 = var2[var1];
                var16 = var11.bind(var5)(var1);
                var15 = var16.useUpdatedAgeVerificationString;
                var1 = var2[var12];
                var1 = var11.bind(var5)(var1);
                var17 = var1.intl;
                var14 = var17.string;
                var1 = var2[var12];
                var1 = var11.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["5B+npG"];
                var14 = var14.bind(var17)(var1);
                var1 = var2[var12];
                var1 = var11.bind(var5)(var1);
                var18 = var1.intl;
                var17 = var18.string;
                var1 = var2[var12];
                var1 = var11.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.FDSSia;
                var1 = var17.bind(var18)(var1);
                var1 = var15.bind(var16)(var14, var1);
                var2 = var2[var12];
                var2 = var11.bind(var5)(var2);
                var14 = var2.intl;
                var11 = var14.string;
                var15 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var15.bind(var5)(var2);
                var15 = var2.t;
                if (var6) {
                    _fun40994_ip = 635;
                    continue _fun40994
                }
            case 627:
                var2 = var15.ZmwvDc;
                _fun40994_ip = 641;
                continue _fun40994;
            case 635:
                var2 = var15.xi46lg;
            case 641:
                var11 = var11.bind(var14)(var2);
                var2 = {};
                if (var13) {
                    _fun40994_ip = 1084;
                    continue _fun40994
                }
            case 654:
                if (var0) {
                    _fun40994_ip = 833;
                    continue _fun40994
                }
            case 660:
                var2.title = var11;
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var12];
                var0 = var13.bind(var5)(var0);
                var14 = var0.intl;
                var13 = var14.string;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var12];
                var0 = var15.bind(var5)(var0);
                var15 = var0.t;
                if (var6) {
                    _fun40994_ip = 724;
                    continue _fun40994
                }
            case 716:
                var0 = var15.E4Cd5I;
                _fun40994_ip = 730;
                continue _fun40994;
            case 724:
                var0 = var15.ZtuRts;
            case 730:
                var0 = var13.bind(var14)(var0);
                var2.description = var0;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = var14[var12];
                var0 = var13.bind(var5)(var0);
                var16 = var0.intl;
                var15 = var16.string;
                var0 = var14[var12];
                var0 = var13.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.wVq7uo;
                var0 = var15.bind(var16)(var0);
                var2.agreement = var0;
                var0 = 16;
                var0 = var14[var0];
                var0 = var13.bind(var5)(var0);
                var0 = var0.NsfwSpaceWarningModalType;
                var0 = var0.NSFW_CHANNEL_VERIFIED;
                var2.modalType = var0;
                var0 = var2;
                _fun40994_ip = 1079;
                continue _fun40994;
            case 833:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var13 = var14.bind(var5)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var13 = var16.bind(var5)(var13);
                var16 = var13.t;
                if (var6) {
                    _fun40994_ip = 895;
                    continue _fun40994
                }
            case 885:
                var13 = var16.NEabBa;
                _fun40994_ip = 901;
                continue _fun40994;
            case 895:
                var13 = var16["H0SG/g"];
            case 901:
                var13 = var14.bind(var15)(var13);
                var2.title = var13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var13 = var14.bind(var5)(var13);
                var17 = var13.intl;
                var16 = var17.format;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var13 = var14.bind(var5)(var13);
                var13 = var13.t;
                if (var6) {
                    _fun40994_ip = 972;
                    continue _fun40994
                }
            case 962:
                var14 = var13["2kHZes"];
                _fun40994_ip = 978;
                continue _fun40994;
            case 972:
                var14 = var13["6++3cX"];
            case 978:
                var13 = {};
                var19 = _closure1_slot1;
                var15 = _closure1_slot2;
                var18 = 17;
                var18 = var15[var18];
                var20 = var19.bind(var5)(var18);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot9;
                var18 = var18.NSFW_AGE_GATING;
                var18 = var19.bind(var20)(var18);
                var13.helpURL = var18;
                var13 = var16.bind(var17)(var14, var13);
                var2.description = var13;
                var13 = null;
                var2.agreement = var13;
                var14 = _closure1_slot0;
                var13 = 16;
                var13 = var15[var13];
                var13 = var14.bind(var5)(var13);
                var13 = var13.NsfwSpaceWarningModalType;
                var13 = var13.NSFW_CHANNEL_UNDERAGE;
                var2.modalType = var13;
                var0 = var2;
            case 1079:
                _fun40994_ip = 1307;
                continue _fun40994;
            case 1084:
                var2.title = var11;
                if (var10) {
                    _fun40994_ip = 1151;
                    continue _fun40994
                }
            case 1091:
                if (!var6) {
                    _fun40994_ip = 1097;
                    continue _fun40994
                }
            case 1094:
                var7 = var9;
            case 1097:
                var2.description = var7;
                var2.agreement = var1;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var1 = var7.bind(var5)(var1);
                var1 = var1.NsfwSpaceWarningModalType;
                var1 = var1.NSFW_CHANNEL_AGE_VERIFY;
                var2.modalType = var1;
                var1 = var2;
                _fun40994_ip = 1304;
                continue _fun40994;
            case 1151:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var7 = var9.bind(var5)(var7);
                var10 = var7.intl;
                var9 = var10.format;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun40994_ip = 1230;
                    continue _fun40994
                }
            case 1203:
                if (var8) {
                    _fun40994_ip = 1214;
                    continue _fun40994
                }
            case 1206:
                var11 = var7.x1coPo;
                _fun40994_ip = 1220;
                continue _fun40994;
            case 1214:
                var11 = var7.XQZvwn;
            case 1220:
                var6 = {};
                var6 = var9.bind(var10)(var11, var6);
                _fun40994_ip = 1255;
                continue _fun40994;
            case 1230:
                if (var8) {
                    _fun40994_ip = 1241;
                    continue _fun40994
                }
            case 1233:
                var8 = var7["7uIWQM"];
                _fun40994_ip = 1247;
                continue _fun40994;
            case 1241:
                var8 = var7["8tk6bB"];
            case 1247:
                var7 = {};
                var6 = var9.bind(var10)(var8, var7);
            case 1255:
                var2.description = var6;
                var2.agreement = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 16;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.NsfwSpaceWarningModalType;
                var3 = var3.NSFW_CHANNEL_AGE_VERIFY;
                var2.modalType = var3;
                var1 = var2;
            case 1304:
                var0 = var1;
            case 1307:
                return var0;
        }
    };
    var2.useAgeGateVerifyContentForGuild = var10;
    var10 = function arg0() {
        _fun40996: for (var _fun40996_ip = 0;;) switch (_fun40996_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.useIsAgeVerified;
                var0 = var0.bind(var1)();
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                var4 = _closure1_slot8;
                var4 = var4.NSFW_SERVER;
                var8 = var3 === var4;
                if (var8) {
                    _fun40996_ip = 77;
                    continue _fun40996
                }
            case 63:
                var4 = _closure1_slot8;
                var4 = var4.NSFW_SERVER_INVITE;
                var8 = var3 === var4;
            case 77:
                if (var8) {
                    _fun40996_ip = 94;
                    continue _fun40996
                }
            case 80:
                var4 = _closure1_slot8;
                var4 = var4.NSFW_SERVER_INVITE_EMBED;
                var8 = var3 === var4;
            case 94:
                var20 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 14;
                var4 = var13[var4];
                var9 = var20.bind(var5)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var4
                    _fun40997: for (var _fun40997_ip = 0;;) switch (_fun40997_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun40997_ip = 33;
                                continue _fun40997
                            }
                        case 27:
                            var1 = var0.nsfwAllowed;
                        case 33:
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var4 = var7.bind(var9)(var6, var4);
                var6 = 15;
                var6 = var13[var6];
                var6 = var20.bind(var5)(var6);
                var9 = var6.AgeVerificationLanguageExperiment;
                var7 = var9.useConfig;
                var6 = {};
                var10 = 'useAgeGateVerifyContent';
                var6.location = var10;
                var6 = var7.bind(var9)(var6);
                var11 = var6.enabled;
                var7 = 7;
                var6 = var13[var7];
                var14 = var20.bind(var5)(var6);
                var12 = var14.useUpdatedAgeVerificationString;
                var6 = 8;
                var9 = var13[var6];
                var9 = var20.bind(var5)(var9);
                var15 = var9.intl;
                var10 = var15.string;
                var9 = var13[var6];
                var9 = var20.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.PBG51l;
                var10 = var10.bind(var15)(var9);
                var9 = var13[var6];
                var9 = var20.bind(var5)(var9);
                var16 = var9.intl;
                var15 = var16.string;
                var9 = var13[var6];
                var9 = var20.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.Zt4Mf4;
                var9 = var15.bind(var16)(var9);
                var9 = var12.bind(var14)(var10, var9);
                var10 = var13[var7];
                var15 = var20.bind(var5)(var10);
                var14 = var15.useUpdatedAgeVerificationString;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var16 = var10.intl;
                var12 = var16.string;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.UYReTs;
                var12 = var12.bind(var16)(var10);
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var17 = var10.intl;
                var16 = var17.string;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10["7ymzsL"];
                var10 = var16.bind(var17)(var10);
                var12 = var14.bind(var15)(var12, var10);
                var10 = var13[var7];
                var16 = var20.bind(var5)(var10);
                var15 = var16.useUpdatedAgeVerificationString;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var17 = var10.intl;
                var14 = var17.string;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10["5B+npG"];
                var14 = var14.bind(var17)(var10);
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var18 = var10.intl;
                var17 = var18.string;
                var10 = var13[var6];
                var10 = var20.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.FDSSia;
                var10 = var17.bind(var18)(var10);
                var10 = var15.bind(var16)(var14, var10);
                var14 = var13[var7];
                var17 = var20.bind(var5)(var14);
                var16 = var17.useUpdatedAgeVerificationString;
                var14 = var13[var6];
                var14 = var20.bind(var5)(var14);
                var18 = var14.intl;
                var15 = var18.string;
                var14 = var13[var6];
                var14 = var20.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.akjk0f;
                var15 = var15.bind(var18)(var14);
                var14 = var13[var6];
                var14 = var20.bind(var5)(var14);
                var19 = var14.intl;
                var18 = var19.string;
                var14 = var13[var6];
                var14 = var20.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.V6Gmu9;
                var14 = var18.bind(var19)(var14);
                var14 = var16.bind(var17)(var15, var14);
                var15 = var13[var7];
                var17 = var20.bind(var5)(var15);
                var16 = var17.useUpdatedAgeVerificationString;
                var15 = var13[var6];
                var15 = var20.bind(var5)(var15);
                var19 = var15.intl;
                var18 = var19.string;
                var15 = var13[var6];
                var15 = var20.bind(var5)(var15);
                var15 = var15.t;
                var15 = var15["u/xqhc"];
                var15 = var18.bind(var19)(var15);
                var18 = var13[var6];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var13 = var13[var6];
                var13 = var20.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13["5rygLk"];
                var13 = var18.bind(var19)(var13);
                var13 = var16.bind(var17)(var15, var13);
                var15 = _closure1_slot8;
                var15 = var15.JOIN_LARGE_GUILD_UNDERAGE;
                if (!(var3 !== var15)) {
                    _fun40996_ip = 1347;
                    continue _fun40996
                }
            case 760:
                var15 = _closure1_slot8;
                var15 = var15.ACCESS_LARGE_GUILD_UNDERAGE;
                if (!(var3 !== var15)) {
                    _fun40996_ip = 1347;
                    continue _fun40996
                }
            case 777:
                if (var0) {
                    _fun40996_ip = 1153;
                    continue _fun40996
                }
            case 783:
                var15 = _closure1_slot8;
                var15 = var15.LARGE_GUILD;
                if (!(var3 !== var15)) {
                    _fun40996_ip = 1076;
                    continue _fun40996
                }
            case 800:
                if (!var4) {
                    _fun40996_ip = 980;
                    continue _fun40996
                }
            case 806:
                if (!var8) {
                    _fun40996_ip = 980;
                    continue _fun40996
                }
            case 812:
                if (var1) {
                    _fun40996_ip = 980;
                    continue _fun40996
                }
            case 818:
                var1 = {};
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = var20[var6];
                var4 = var15.bind(var5)(var4);
                var17 = var4.intl;
                var16 = var17.string;
                var4 = var20[var6];
                var4 = var15.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4["H0SG/g"];
                var4 = var16.bind(var17)(var4);
                var1.verifyTitle = var4;
                var4 = var20[var6];
                var4 = var15.bind(var5)(var4);
                var17 = var4.intl;
                var16 = var17.format;
                var4 = var20[var6];
                var4 = var15.bind(var5)(var4);
                var4 = var4.t;
                var15 = var4["6++3cX"];
                var4 = {};
                var19 = _closure1_slot1;
                var18 = 17;
                var18 = var20[var18];
                var20 = var19.bind(var5)(var18);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot9;
                var18 = var18.AGE_GATE;
                var18 = var19.bind(var20)(var18);
                var4.helpURL = var18;
                var4 = var16.bind(var17)(var15, var4);
                var1.verifyGateDescription = var4;
                var4 = null;
                var1.verifyAgreementButtonText = var4;
                _fun40996_ip = 1074;
                continue _fun40996;
            case 980:
                var4 = {};
                var4.verifyAgreementButtonText = var10;
                if (!var8) {
                    _fun40996_ip = 993;
                    continue _fun40996
                }
            case 990:
                var13 = var14;
            case 993:
                var4.verifyGateDescription = var13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = var13[var6];
                var15 = var14.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var13[var6];
                var13 = var14.bind(var5)(var13);
                var14 = var13.t;
                if (var8) {
                    _fun40996_ip = 1055;
                    continue _fun40996
                }
            case 1042:
                var13 = var14.ZmwvDc;
                var13 = var15.bind(var16)(var13);
                _fun40996_ip = 1066;
                continue _fun40996;
            case 1055:
                var14 = var14.xi46lg;
                var13 = var15.bind(var16)(var14);
            case 1066:
                var4.verifyTitle = var13;
                var1 = var4;
            case 1074:
                _fun40996_ip = 1148;
                continue _fun40996;
            case 1076:
                var4 = {};
                var4.verifyTitle = var12;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var6];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var6];
                var12 = var15.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.SxY4IW;
                var12 = var13.bind(var14)(var12);
                var4.verifyGateDescription = var12;
                var4.verifyAgreementButtonText = var10;
                var1 = var4;
            case 1148:
                _fun40996_ip = 1345;
                continue _fun40996;
            case 1153:
                var4 = {};
                var4.verifyAgreementButtonText = var9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var13 = var9.intl;
                var12 = var13.format;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.t;
                if (var8) {
                    _fun40996_ip = 1239;
                    continue _fun40996
                }
            case 1212:
                if (var11) {
                    _fun40996_ip = 1223;
                    continue _fun40996
                }
            case 1215:
                var14 = var10.x1coPo;
                _fun40996_ip = 1229;
                continue _fun40996;
            case 1223:
                var14 = var10.XQZvwn;
            case 1229:
                var9 = {};
                var9 = var12.bind(var13)(var14, var9);
                _fun40996_ip = 1264;
                continue _fun40996;
            case 1239:
                if (var11) {
                    _fun40996_ip = 1250;
                    continue _fun40996
                }
            case 1242:
                var11 = var10["7uIWQM"];
                _fun40996_ip = 1256;
                continue _fun40996;
            case 1250:
                var11 = var10["8tk6bB"];
            case 1256:
                var10 = {};
                var9 = var12.bind(var13)(var11, var10);
            case 1264:
                var4.verifyGateDescription = var9;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var6];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var6];
                var9 = var12.bind(var5)(var9);
                var9 = var9.t;
                if (var8) {
                    _fun40996_ip = 1326;
                    continue _fun40996
                }
            case 1313:
                var8 = var9.ZmwvDc;
                var8 = var10.bind(var11)(var8);
                _fun40996_ip = 1337;
                continue _fun40996;
            case 1326:
                var9 = var9.xi46lg;
                var8 = var10.bind(var11)(var9);
            case 1337:
                var4.verifyTitle = var8;
                var1 = var4;
            case 1345:
                return var1;
            case 1347:
                var1 = _closure1_slot8;
                var1 = var1.JOIN_LARGE_GUILD_UNDERAGE;
                if (!(var3 !== var1)) {
                    _fun40996_ip = 1393;
                    continue _fun40996
                }
            case 1361:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var5)(var1);
                var1 = var1.t;
                var4 = var1.MjQbfi;
                _fun40996_ip = 1421;
                continue _fun40996;
            case 1393:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var5)(var1);
                var1 = var1.t;
                var4 = var1["u/xsK9"];
            case 1421:
                var1 = {};
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                if (var0) {
                    _fun40996_ip = 1480;
                    continue _fun40996
                }
            case 1434:
                var3 = var8[var6];
                var3 = var14.bind(var5)(var3);
                var10 = var3.intl;
                var9 = var10.string;
                var3 = var8[var6];
                var3 = var14.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.SxY4IW;
                var3 = var9.bind(var10)(var3);
                _fun40996_ip = 1593;
                continue _fun40996;
            case 1480:
                var9 = var8[var7];
                var11 = var14.bind(var5)(var9);
                var10 = var11.getUpdatedAgeVerificationString;
                var9 = var8[var6];
                var9 = var14.bind(var5)(var9);
                var13 = var9.intl;
                var12 = var13.string;
                var9 = var8[var6];
                var9 = var14.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9["lSgO/q"];
                var9 = var12.bind(var13)(var9);
                var12 = var8[var6];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var8[var6];
                var8 = var14.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.SAoMVJ;
                var8 = var12.bind(var13)(var8);
                var3 = var10.bind(var11)(var9, var8);
            case 1593:
                var1.description = var3;
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = var3[var7];
                var9 = var12.bind(var5)(var7);
                var8 = var9.getUpdatedAgeVerificationString;
                var7 = var3[var6];
                var7 = var12.bind(var5)(var7);
                var11 = var7.intl;
                var10 = var11.string;
                var7 = var3[var6];
                var7 = var12.bind(var5)(var7);
                var7 = var7.t;
                if (var0) {
                    _fun40996_ip = 1719;
                    continue _fun40996
                }
            case 1656:
                var0 = var7["5B+npG"];
                var13 = var10.bind(var11)(var0);
                var0 = var3[var6];
                var0 = var12.bind(var5)(var0);
                var15 = var0.intl;
                var14 = var15.string;
                var0 = var3[var6];
                var0 = var12.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.FDSSia;
                var0 = var14.bind(var15)(var0);
                var0 = var8.bind(var9)(var13, var0);
                _fun40996_ip = 1780;
                continue _fun40996;
            case 1719:
                var7 = var7.PBG51l;
                var7 = var10.bind(var11)(var7);
                var10 = var3[var6];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var3[var6];
                var3 = var12.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.Zt4Mf4;
                var3 = var10.bind(var11)(var3);
                var0 = var8.bind(var9)(var7, var3);
            case 1780:
                var1.agreement = var0;
                var0 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var3.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var2 = var2.bind(var3)(var4);
                var0.verifyTitle = var2;
                var2 = var1.description;
                var0.verifyGateDescription = var2;
                var1 = var1.agreement;
                var0.verifyAgreementButtonText = var1;
                return var0;
        }
    };
    var2.useAgeGateVerifyContent = var10;
    var2.shouldShowAgeGateForCurrentUser = var9;
    var2.shouldShowAgeGateForGuildContentLevel = var8;
    var2.shouldShowAgeGateForChannelId = var7;
    var2.shouldShowAgeGateForVoiceChannel = var6;
    var6 = function(arg0) { // Environment: var1
        _fun40998: for (var _fun40998_ip = 0;;) switch (_fun40998_ip) {
            case 0:
                var2 = _closure1_slot16;
                var4 = undefined;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun40998_ip = 69;
                    continue _fun40998
                }
            case 26:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.openAgeGateModal;
                var1 = _closure1_slot8;
                var1 = var1.NSFW_VOICE_CHANNEL;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 69:
                return var0;
        }
    };
    var2.maybeOpenAgeGateForVoiceChannel = var6;
    var6 = function arg0, arg1, arg2() {
        _fun40999: for (var _fun40999_ip = 0;;) switch (_fun40999_ip) {
            case 0:
                var3 = arg2;
                var4 = _closure1_slot14;
                var0 = undefined;
                var2 = arg0;
                var2 = var4.bind(var0)(var2);
                if (var2) {
                    _fun40999_ip = 101;
                    continue _fun40999
                }
            case 23:
                var2 = _closure1_slot21;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun40999_ip = 46;
                    continue _fun40999
                }
            case 34:
                var5 = _closure1_slot15;
                var4 = arg1;
                var2 = var5.bind(var0)(var4);
            case 46:
                if (!var2) {
                    _fun40999_ip = 165;
                    continue _fun40999
                }
            case 49:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.openAgeGateModal;
                var6 = null;
                var2 = var3;
                if (!(var6 == var3)) {
                    _fun40999_ip = 94;
                    continue _fun40999
                }
            case 84:
                var6 = _closure1_slot8;
                var2 = var6.NSFW_CHANNEL;
            case 94:
                var2 = var4.bind(var5)(var2);
                _fun40999_ip = 165;
                continue _fun40999;
            case 101:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun40999_ip = 124;
                    continue _fun40999
                }
            case 107:
                var4 = _closure1_slot12;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun40999_ip = 134;
                    continue _fun40999
                }
            case 124:
                var2 = _closure1_slot8;
                var3 = var2.NSFW_SERVER;
            case 134:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.openAgeGateModal;
                var1 = var1.bind(var2)(var3);
            case 165:
                return var0;
        }
    };
    var2.maybeShowAgeGate = var6;
    var2.isChannelOrGuildNSFW = var5;
    var5 = function(arg0) { // Environment: var1
        _fun41000: for (var _fun41000_ip = 0;;) switch (_fun41000_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun41000_ip = 61;
                    continue _fun41000
                }
            case 9:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.shouldShowTiggerPawtect;
                var1 = var1.bind(var4)();
                var0 = _closure1_slot17;
                var0 = var0.bind(var2)(var3);
                if (!var0) {
                    _fun41000_ip = 59;
                    continue _fun41000
                }
            case 56:
                var0 = var1;
            case 59:
                return var0;
            case 61:
                var0 = false;
                return var0;
        }
    };
    var2.isChannelAgeVerificationGated = var5;
    var5 = function(arg0) { // Environment: var1
        _fun41001: for (var _fun41001_ip = 0;;) switch (_fun41001_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun41001_ip = 65;
                    continue _fun41001
                }
            case 9:
                var4 = _closure1_slot7;
                var2 = var4.getCurrentUser;
                var4 = var2.bind(var4)();
                var5 = var1 == var4;
                var1 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun41001_ip = 42;
                    continue _fun41001
                }
            case 36:
                var2 = var4.nsfwAllowed;
            case 42:
                var0 = _closure1_slot17;
                var0 = var0.bind(var1)(var3);
                if (!var0) {
                    _fun41001_ip = 63;
                    continue _fun41001
                }
            case 54:
                var1 = true;
                var1 = var1 === var2;
                var0 = !var1;
            case 63:
                return var0;
            case 65:
                var0 = false;
                return var0;
        }
    };
    var2.userCannotSeeNSFWContent = var5;
    var2.isChannelContentGated = var4;
    var4 = function arg0() {
        _fun41002: for (var _fun41002_ip = 0;;) switch (_fun41002_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 11;
                var0 = var11[var0];
                var6 = undefined;
                var1 = var10.bind(var6)(var0);
                var0 = var1.useShouldShowTiggerPawtect;
                var1 = var0.bind(var1)();
                var9 = 14;
                var0 = var11[var9];
                var8 = var10.bind(var6)(var0);
                var4 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    _fun41003: for (var _fun41003_ip = 0;;) switch (_fun41003_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.didAgree;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun41003_ip = 40;
                                continue _fun41003
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4 = var4.bind(var8)(var2, var0);
                var0 = var11[var9];
                var12 = var10.bind(var6)(var0);
                var8 = var12.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    _fun41004: for (var _fun41004_ip = 0;;) switch (_fun41004_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun41004_ip = 33;
                                continue _fun41004
                            }
                        case 27:
                            var1 = var0.nsfwAllowed;
                        case 33:
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var8 = var8.bind(var12)(var2, var0);
                var0 = 12;
                var0 = var11[var0];
                var12 = var10.bind(var6)(var0);
                var2 = var12.useIsFeatureAgeGated;
                var0 = 13;
                var0 = var11[var0];
                var0 = var10.bind(var6)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.AGE_GATED_SPACES;
                var0 = var2.bind(var12)(var0);
                var2 = 10;
                var2 = var11[var2];
                var13 = var10.bind(var6)(var2);
                var12 = var13.useIsGidgetPawtectEnabled;
                var2 = 'age-gate-utils';
                var2 = var12.bind(var13)(var2);
                var9 = var11[var9];
                var11 = var10.bind(var6)(var9);
                var10 = var11.useStateFromStores;
                var12 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var12;
                var5 = function() { // Environment: var5
                    _fun41005: for (var _fun41005_ip = 0;;) switch (_fun41005_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun41005_ip = 39;
                                continue _fun41005
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var5 = var10.bind(var11)(var9, var5);
                if (!var4) {
                    _fun41002_ip = 240;
                    continue _fun41002
                }
            case 237:
                var4 = !var8;
            case 240:
                var4 = !var4;
                if (var4) {
                    _fun41002_ip = 261;
                    continue _fun41002
                }
            case 246:
                if (var0) {
                    _fun41002_ip = 252;
                    continue _fun41002
                }
            case 249:
                var0 = var2;
            case 252:
                if (!var0) {
                    _fun41002_ip = 258;
                    continue _fun41002
                }
            case 255:
                var0 = var1;
            case 258:
                var4 = var0;
            case 261:
                var2 = null;
                var0 = var2 != var7;
                if (!var0) {
                    _fun41002_ip = 329;
                    continue _fun41002
                }
            case 270:
                var1 = var7.isNSFW;
                var1 = var1.bind(var7)();
                var7 = !var1;
                if (var7) {
                    _fun41002_ip = 289;
                    continue _fun41002
                }
            case 286:
                var7 = !var4;
            case 289:
                var1 = !var7;
                if (!var7) {
                    _fun41002_ip = 326;
                    continue _fun41002
                }
            case 295:
                var2 = var2 != var5;
                if (!var2) {
                    _fun41002_ip = 323;
                    continue _fun41002
                }
            case 302:
                var3 = _closure1_slot3;
                var3 = var3.bind(var6)(var5);
                var3 = !var3;
                if (var3) {
                    _fun41002_ip = 320;
                    continue _fun41002
                }
            case 317:
                var3 = !var4;
            case 320:
                var2 = !var3;
            case 323:
                var1 = var2;
            case 326:
                var0 = var1;
            case 329:
                return var0;
        }
    };
    var2.useIsChannelContentGated = var4;
    var2.isCurrentUserMissingDateOfBirth = var3;
    var3 = function() {
        _fun41006: for (var _fun41006_ip = 0;;) switch (_fun41006_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.isFeatureAgeGated;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var2 = var1.bind(var2)(var0);
                var0 = 10;
                var0 = var5[var0];
                var6 = var4.bind(var3)(var0);
                var1 = var6.getIsGidgetPawtectEnabled;
                var0 = 'age-gate-utils';
                var0 = var1.bind(var6)(var0);
                var1 = 11;
                var1 = var5[var1];
                var3 = var4.bind(var3)(var1);
                var1 = var3.shouldShowTiggerPawtect;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun41006_ip = 117;
                    continue _fun41006
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun41006_ip = 123;
                    continue _fun41006
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var2.shouldAgeVerifyForSettingsToggles = var3;
    var1 = function() {
        _fun41007: for (var _fun41007_ip = 0;;) switch (_fun41007_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.useIsFeatureAgeGated;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var2 = var1.bind(var2)(var0);
                var0 = 10;
                var0 = var5[var0];
                var6 = var4.bind(var3)(var0);
                var1 = var6.useIsGidgetPawtectEnabled;
                var0 = 'age-gate-utils';
                var0 = var1.bind(var6)(var0);
                var1 = 11;
                var1 = var5[var1];
                var3 = var4.bind(var3)(var1);
                var1 = var3.useShouldShowTiggerPawtect;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun41007_ip = 117;
                    continue _fun41007
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun41007_ip = 123;
                    continue _fun41007
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var2.useShouldAgeVerifyForSettingsToggles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1372, 4518, 1410, 1613, 1219, 660, 4519, 1234, 21, 4241, 4214, 4242, 4266, 566, 4520, 4521, 1675, 4522, 2]);