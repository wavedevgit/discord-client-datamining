// modules/instant_invite/DefaultInviteExpirationExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var3 = function(arg0) { // Original name: getDefaultInviteExpiration, environment: var1
        _fun67193: for (var _fun67193_ip = 0;;) switch (_fun67193_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guild;
                var1 = var0.experimentConfig;
                var2 = null;
                if (!(var2 != var8)) {
                    _fun67193_ip = 52;
                    continue _fun67193
                }
            case 20:
                var5 = var8.features;
                var4 = var5.has;
                var3 = _closure1_slot5;
                var3 = var3.HUB;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun67193_ip = 129;
                    continue _fun67193
                }
            case 52:
                if (!(var2 == var1)) {
                    _fun67193_ip = 110;
                    continue _fun67193
                }
            case 56:
                var5 = _closure1_slot7;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var9 = var2 == var8;
                var6 = undefined;
                if (var9) {
                    _fun67193_ip = 85;
                    continue _fun67193
                }
            case 80:
                var6 = var8.id;
            case 85:
                if (!(var2 == var6)) {
                    _fun67193_ip = 93;
                    continue _fun67193
                }
            case 89:
                var6 = _closure1_slot4;
            case 93:
                var3.guildId = var6;
                var6 = 'getDefaultInviteExpiration';
                var3.location = var6;
                var1 = var4.bind(var5)(var3);
            case 110:
                var1 = var1.defaultMaxAge;
                if (!(var2 == var1)) {
                    _fun67193_ip = 127;
                    continue _fun67193
                }
            case 120:
                var1 = _closure1_slot6;
            case 127:
                return var1;
            case 129:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.INVITE_OPTIONS_FOREVER;
                var0 = var0.value;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var6 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var6;
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.INVITE_OPTIONS_7_DAYS;
    var5 = var4.value;
    var _closure1_slot6 = var5;
    var4 = 3;
    var4 = var8[var4];
    var9 = var7.bind(var0)(var4);
    var6 = var9.createExperiment;
    var4 = {
        'kind': 'guild',
        'id': '2025-08_default_invite_expiration_guild',
        'label': 'Default Invite Expiration Guild'
    };
    var10 = {};
    var11 = 604800;
    var10.defaultMaxAge = var11;
    var4.defaultConfig = var10;
    var11 = {
        'id': 1,
        'label': '14 days'
    };
    var10 = {};
    var12 = 1209600;
    var10.defaultMaxAge = var12;
    var11.config = var10;
    var10 = new Array(3);
    var10[0] = var11;
    var11 = {
        'id': 2,
        'label': '30 days'
    };
    var12 = {};
    var13 = 2592000;
    var12.defaultMaxAge = var13;
    var11.config = var12;
    var10[1] = var11;
    var11 = {
        'id': 3,
        'label': '60 days'
    };
    var12 = {};
    var13 = 5184000;
    var12.defaultMaxAge = var13;
    var11.config = var12;
    var10[2] = var11;
    var4.treatments = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/instant_invite/DefaultInviteExpirationExperiments.tsx';
    var6 = var7.bind(var8)(var6);
    var2.DEFAULT_MAX_AGE = var5;
    var2.DefaultInviteExpirationGuildExperiment = var4;
    var2.getDefaultInviteExpiration = var3;
    var3 = function(arg0) { // Original name: useDefaultInviteExpiration, environment: var1
        _fun67194: for (var _fun67194_ip = 0;;) switch (_fun67194_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var _closure2_slot0 = var2;
                var7 = var0.location;
                var6 = _closure1_slot7;
                var4 = var6.useExperiment;
                var3 = {};
                var0 = null;
                var8 = var2;
                if (!(var0 == var8)) {
                    _fun67194_ip = 47;
                    continue _fun67194
                }
            case 43:
                var8 = _closure1_slot4;
            case 47:
                var3.guildId = var8;
                var3.location = var7;
                var4 = var4.bind(var6)(var3);
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var6 = var6[var3];
                var3 = undefined;
                var8 = var7.bind(var3)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var9;
                var5 = function() { // Environment: var5
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var2 = var0 == var2;
                var0 = null;
                if (var2) {
                    _fun67194_ip = 141;
                    continue _fun67194
                }
            case 121:
                var2 = _closure1_slot8;
                var1 = {};
                var1.guild = var5;
                var1.experimentConfig = var4;
                var0 = var2.bind(var3)(var1);
            case 141:
                return var0;
        }
    };
    var2.useDefaultInviteExpiration = var3;
    var1 = function(arg0) { // Original name: useMaxAgeOptions, environment: var1
        _fun67196: for (var _fun67196_ip = 0;;) switch (_fun67196_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var4 = var0.location;
                var3 = _closure1_slot7;
                var2 = var3.useExperiment;
                var1 = {};
                var5 = null;
                if (!(var5 == var6)) {
                    _fun67196_ip = 38;
                    continue _fun67196
                }
            case 34:
                var6 = _closure1_slot4;
            case 38:
                var1.guildId = var6;
                var1.location = var4;
                var3 = var2.bind(var3)(var1);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var4 = undefined;
                var2 = var1.bind(var4)(var0);
                var1 = var2.getMaxAgeOptions;
                var0 = {};
                var5 = var5 == var3;
                if (var5) {
                    _fun67196_ip = 94;
                    continue _fun67196
                }
            case 88:
                var4 = var3.defaultMaxAge;
            case 94:
                var3 = new Array(1);
                var3[0] = var4;
                var0.includeExperimentalValues = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useMaxAgeOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 8289, 3074, 632, 2]);