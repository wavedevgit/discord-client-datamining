// experiments/ChannelSummariesExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun73586: for (var _fun73586_ip = 0;;) switch (_fun73586_ip) {
            case 0:
                var3 = arg0;
                var4 = arguments[1];
                var6 = arguments[2];
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun73586_ip = 17;
                    continue _fun73586
                }
            case 15:
                var4 = false;
            case 17:
                if (!(var6 === var5)) {
                    _fun73586_ip = 23;
                    continue _fun73586
                }
            case 21:
                var6 = true;
            case 23:
                var8 = null;
                var0 = var8 != var3;
                if (!var0) {
                    _fun73586_ip = 265;
                    continue _fun73586
                }
            case 35:
                var7 = var8 == var3;
                var2 = false;
                var1 = false;
                if (var7) {
                    _fun73586_ip = 181;
                    continue _fun73586
                }
            case 49:
                var11 = _closure1_slot3;
                var10 = var11.getGuild;
                var9 = var8 == var3;
                var12 = undefined;
                if (var9) {
                    _fun73586_ip = 75;
                    continue _fun73586
                }
            case 70:
                var12 = var3.guild_id;
            case 75:
                var13 = var8 != var12;
                var9 = '';
                if (!var13) {
                    _fun73586_ip = 89;
                    continue _fun73586
                }
            case 86:
                var9 = var12;
            case 89:
                var10 = var10.bind(var11)(var9);
                var9 = var8 != var10;
                if (!var9) {
                    _fun73586_ip = 116;
                    continue _fun73586
                }
            case 101:
                var11 = var10.rulesChannelId;
                var8 = var3.id;
                var9 = var11 === var8;
            case 116:
                var8 = _closure1_slot2;
                var8 = var8.bind(var5)(var10);
                var7 = _closure1_slot6;
                var11 = var7.SUMMARIZEABLE;
                var10 = var11.has;
                var7 = var3.type;
                var7 = var10.bind(var11)(var7);
                if (!var7) {
                    _fun73586_ip = 166;
                    continue _fun73586
                }
            case 153:
                var10 = var3.isNSFW;
                var10 = var10.bind(var3)();
                var7 = !var10;
            case 166:
                if (!var7) {
                    _fun73586_ip = 172;
                    continue _fun73586
                }
            case 169:
                var7 = !var9;
            case 172:
                if (!var7) {
                    _fun73586_ip = 178;
                    continue _fun73586
                }
            case 175:
                var7 = !var8;
            case 178:
                var1 = var7;
            case 181:
                var7 = !var1;
                var1 = !var7;
                if (var7) {
                    _fun73586_ip = 262;
                    continue _fun73586
                }
            case 190:
                var2 = var2 !== var4;
                if (var2) {
                    _fun73586_ip = 224;
                    continue _fun73586
                }
            case 197:
                var7 = var3.hasFlag;
                var4 = _closure1_slot9;
                var4 = var4.SUMMARIES_DISABLED;
                var4 = var7.bind(var3)(var4);
                var2 = !var4;
            case 224:
                if (!var2) {
                    _fun73586_ip = 259;
                    continue _fun73586
                }
            case 227:
                var4 = _closure1_slot11;
                var8 = _closure1_slot3;
                var7 = var8.getGuild;
                var3 = var3.guild_id;
                var3 = var7.bind(var8)(var3);
                var2 = var4.bind(var5)(var3, var6);
            case 259:
                var1 = var2;
            case 262:
                var0 = var1;
            case 265:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function arg0() {
        _fun73587: for (var _fun73587_ip = 0;;) switch (_fun73587_ip) {
            case 0:
                var5 = arg0;
                var3 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun73587_ip = 14;
                    continue _fun73587
                }
            case 12:
                var3 = true;
            case 14:
                var1 = null;
                var0 = var1 != var5;
                if (!var0) {
                    _fun73587_ip = 148;
                    continue _fun73587
                }
            case 26:
                var6 = var5.id;
                var2 = var1 != var6;
                if (!var2) {
                    _fun73587_ip = 63;
                    continue _fun73587
                }
            case 38:
                var1 = _closure1_slot4;
                var1 = var6 === var1;
                if (var1) {
                    _fun73587_ip = 60;
                    continue _fun73587
                }
            case 52:
                var4 = _closure1_slot5;
                var1 = var6 === var4;
            case 60:
                var2 = var1;
            case 63:
                var1 = !var2;
                if (var2) {
                    _fun73587_ip = 145;
                    continue _fun73587
                }
            case 69:
                var7 = var5.features;
                var6 = var7.has;
                var2 = _closure1_slot7;
                var2 = var2.SUMMARIES_ENABLED_GA;
                var2 = var6.bind(var7)(var2);
                var6 = !var2;
                var2 = !var6;
                if (var6) {
                    _fun73587_ip = 142;
                    continue _fun73587
                }
            case 107:
                var3 = !var3;
                if (var3) {
                    _fun73587_ip = 139;
                    continue _fun73587
                }
            case 113:
                var6 = var5.features;
                var5 = var6.has;
                var4 = _closure1_slot7;
                var4 = var4.SUMMARIES_ENABLED_BY_USER;
                var3 = var5.bind(var6)(var4);
            case 139:
                var2 = var3;
            case 142:
                var1 = var2;
            case 145:
                var0 = var1;
            case 148:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.isGuildNSFW;
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = arg2;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ME;
    var _closure1_slot4 = var8;
    var8 = var5.FAVORITES;
    var _closure1_slot5 = var8;
    var8 = var5.ChannelTypesSets;
    var _closure1_slot6 = var8;
    var8 = var5.GuildFeatures;
    var _closure1_slot7 = var8;
    var5 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ChannelFlags;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'experiments/ChannelSummariesExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        var4 = _closure1_slot10;
        var3 = undefined;
        var2 = arg0;
        var1 = true;
        var0 = false;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.channelEligibleForSummaries = var5;
    var2.canSeeChannelSummaries = var4;
    var2.canGuildUseConversationSummaries = var3;
    var3 = function arg0() {
        _fun73589: for (var _fun73589_ip = 0;;) switch (_fun73589_ip) {
            case 0:
                var3 = arguments[2];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun73589_ip = 11;
                    continue _fun73589
                }
            case 9:
                var3 = false;
            case 11:
                var1 = _closure1_slot10;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.useChannelSummariesExperiment = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun73591: for (var _fun73591_ip = 0;;) switch (_fun73591_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var4 = _closure1_slot3;
                    var1 = var4.getGuild;
                    var0 = _closure2_slot0;
                    var6 = null;
                    var8 = var6 == var0;
                    var2 = undefined;
                    var0 = undefined;
                    if (var8) {
                        _fun73591_ip = 45;
                        continue _fun73591
                    }
                case 36:
                    var7 = _closure2_slot0;
                    var0 = var7.id;
                case 45:
                    if (!(var6 == var0)) {
                        _fun73591_ip = 53;
                        continue _fun73591
                    }
                case 49:
                    var0 = _closure1_slot8;
                case 53:
                    var1 = var1.bind(var4)(var0);
                    var0 = false;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildEligibleForSummaries = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1410, 660, 1379, 632, 2]);