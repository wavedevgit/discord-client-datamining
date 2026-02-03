// modules/stage_channels/StageChannelRichPresenceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0() {
        _fun50472: for (var _fun50472_ip = 0;;) switch (_fun50472_ip) {
            case 0:
                var4 = arg0;
                var2 = var4;
                var1 = undefined;
                var3 = undefined;
                var8 = undefined;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun50472_ip = 31;
                    continue _fun50472
                }
            case 18:
                var4 = var2;
                var4 = var4.party;
                if (!(var0 == var4)) {
                    _fun50472_ip = 33;
                    continue _fun50472
                }
            case 31:
                return var1;
            case 33:
                var2 = var2.party;
                var3 = var2.id;
                var8 = var2.size;
            case 49: // try_start_0
                var2 = var3;
                if (!(var0 != var2)) {
                    _fun50472_ip = 235;
                    continue _fun50472
                }
            case 59:
                var6 = var3;
                var5 = var6.startsWith;
                var4 = _closure1_slot7;
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun50472_ip = 235;
                    continue _fun50472
                }
            case 86:
                var5 = var3;
                var4 = var5.split;
                var3 = ':';
                var4 = var4.bind(var5)(var3);
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var3.bind(var1)(var4, var2);
                var7 = 1;
                var10 = var2[var7];
                var6 = 2;
                var9 = var2[var6];
                var3 = 3;
                var11 = var2[var3];
                var5 = 4;
                var3 = var2[var5];
                var2 = global;
                var4 = var2.parseInt;
                var2 = 16;
                var4 = var4.bind(var1)(var11, var2);
                var2 = {};
                var2.guildId = var10;
                var2.channelId = var9;
                var2.size = var8;
                var7 = var7 & var4;
                var7 = !var7;
                var7 = !var7;
                var2.userIsSpeaker = var7;
                var6 = var6 & var4;
                var6 = !var6;
                var6 = !var6;
                var2.guildIsPartnered = var6;
                var4 = var5 & var4;
                var4 = !var4;
                var4 = !var4;
                var2.guildIsVerified = var4;
                var2.stageInstanceId = var3;
            case 233: // try_end0
                return var2;
            case 235:
                return var1;
            case 237: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.STAGE_APPLICATION_ID;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 'stage:';
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelRichPresenceUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun50473: for (var _fun50473_ip = 0;;) switch (_fun50473_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot1;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var4 = _closure1_slot4;
                var3 = var4.isSpeaker;
                var2 = var0.id;
                var2 = var3.bind(var4)(var5, var2);
                var6 = 0;
                if (!var2) {
                    _fun50473_ip = 49;
                    continue _fun50473
                }
            case 46:
                var6 = 1;
            case 49:
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var2 = var0.getGuildId;
                var2 = var2.bind(var0)();
                var2 = var3.bind(var4)(var2);
                var3 = null;
                var4 = var6;
                if (!(var3 != var2)) {
                    _fun50473_ip = 163;
                    continue _fun50473
                }
            case 82:
                var7 = var2.features;
                var5 = var7.has;
                var3 = _closure1_slot6;
                var3 = var3.PARTNERED;
                var3 = var5.bind(var7)(var3);
                var5 = var6;
                if (!var3) {
                    _fun50473_ip = 121;
                    continue _fun50473
                }
            case 114:
                var3 = 2;
                var5 = var6 | var3;
            case 121:
                var6 = var2.features;
                var3 = var6.has;
                var2 = _closure1_slot6;
                var2 = var2.VERIFIED;
                var3 = var3.bind(var6)(var2);
                var2 = var5;
                if (!var3) {
                    _fun50473_ip = 160;
                    continue _fun50473
                }
            case 153:
                var3 = 4;
                var2 = var5 | var3;
            case 160:
                var4 = var2;
            case 163:
                var3 = var4.toString;
                var2 = 16;
                var10 = var3.bind(var4)(var2);
                var15 = _closure1_slot7;
                var14 = var0.guild_id;
                var12 = var0.id;
                var0 = arg1;
                var8 = var0.id;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var16 = '';
                var0 = ':';
                var13 = var0;
                var11 = var0;
                var9 = var0;
                var0 = var16[var2](var15, var14, var13, var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.packStageChannelPartyId = var4;
    var2.unpackStageChannelParty = var3;
    var3 = function arg0() {
        _fun50474: for (var _fun50474_ip = 0;;) switch (_fun50474_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun50474_ip = 20;
                    continue _fun50474
                }
            case 14:
                var1 = var0.application_id;
            case 20:
                var0 = _closure1_slot5;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isStageActivity = var3;
    var1 = function arg0() {
        _fun50475: for (var _fun50475_ip = 0;;) switch (_fun50475_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = arg0;
                var2 = var3.bind(var2)(var1);
                var1 = null;
                if (!(var1 != var2)) {
                    _fun50475_ip = 48;
                    continue _fun50475
                }
            case 23:
                var3 = var2.channelId;
                var2 = _closure1_slot2;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var0 = var1 != var0;
                return var0;
            case 48:
                var0 = false;
                return var0;
        }
    };
    var2.shouldShowActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1216, 1372, 1410, 4246, 4235, 660, 2]);