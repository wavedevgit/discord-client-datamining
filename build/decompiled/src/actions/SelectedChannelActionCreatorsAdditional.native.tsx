// actions/SelectedChannelActionCreatorsAdditional.native.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/SelectedChannelActionCreatorsAdditional.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        _fun38737: for (var _fun38737_ip = 0;;) switch (_fun38737_ip) {
            case 0:
                var6 = arg0;
                var4 = arguments[2];
                var3 = arguments[3];
                var0 = arguments[4];
                var _closure2_slot0 = var6;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun38737_ip = 33;
                    continue _fun38737
                }
            case 31:
                var4 = false;
            case 33:
                var _closure2_slot2 = var4;
                if (!(var3 === var7)) {
                    _fun38737_ip = 43;
                    continue _fun38737
                }
            case 41:
                var3 = false;
            case 43:
                var _closure2_slot3 = var3;
                if (!(var0 === var7)) {
                    _fun38737_ip = 53;
                    continue _fun38737
                }
            case 51:
                var0 = {};
            case 53:
                var2 = var0.lockVoiceStateForResume;
                if (!(var2 === var7)) {
                    _fun38737_ip = 65;
                    continue _fun38737
                }
            case 63:
                var2 = false;
            case 65:
                var _closure2_slot4 = var2;
                var0 = var0.bypassIdleUpdate;
                if (!(var0 === var7)) {
                    _fun38737_ip = 81;
                    continue _fun38737
                }
            case 79:
                var0 = false;
            case 81:
                var _closure2_slot5 = var0;
                var5 = _closure1_slot3;
                var2 = var5.getChannel;
                var5 = var2.bind(var5)(var6);
                var8 = _closure1_slot8;
                var2 = var8.getCurrentUser;
                var8 = var2.bind(var8)();
                var2 = null;
                if (!(var2 != var8)) {
                    _fun38737_ip = 427;
                    continue _fun38737
                }
            case 124:
                if (!(var2 != var5)) {
                    _fun38737_ip = 149;
                    continue _fun38737
                }
            case 128:
                var9 = var5.nsfw;
                if (!var9) {
                    _fun38737_ip = 149;
                    continue _fun38737
                }
            case 137:
                var8 = var8.nsfwAllowed;
                if (!var8) {
                    _fun38737_ip = 427;
                    continue _fun38737
                }
            case 149:
                if (!(var2 != var5)) {
                    _fun38737_ip = 387;
                    continue _fun38737
                }
            case 156:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var10 = var8.bind(var7)(var2);
                var9 = var10.isChannelFull;
                var8 = _closure1_slot9;
                var2 = _closure1_slot4;
                var8 = var9.bind(var10)(var5, var8, var2);
                var10 = _closure1_slot5;
                var9 = var10.getCheck;
                var2 = var5.guild_id;
                var10 = var9.bind(var10)(var2);
                var2 = var10.canChat;
                if (var2) {
                    _fun38737_ip = 293;
                    continue _fun38737
                }
            case 226:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var9 = var9.bind(var7)(var2);
                var2 = var9.canLurkerListen;
                var2 = var2.bind(var9)(var5);
                if (var2) {
                    _fun38737_ip = 293;
                    continue _fun38737
                }
            case 260:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 10;
                var2 = var11[var2];
                var9 = var9.bind(var7)(var2);
                var2 = var9.unverifiedVoiceGate;
                var2 = var2.bind(var9)(var10);
                return var2;
            case 293:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 11;
                var2 = var10[var2];
                var9 = var9.bind(var7)(var2);
                var2 = _closure1_slot6;
                var2 = var9.bind(var7)(var5, var2);
                var2 = !var2;
                if (!var8) {
                    _fun38737_ip = 381;
                    continue _fun38737
                }
            case 329:
                var9 = var5.isGuildStageVoice;
                var9 = var9.bind(var5)();
                if (!var9) {
                    _fun38737_ip = 381;
                    continue _fun38737
                }
            case 342:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 12;
                var9 = var11[var9];
                var11 = var10.bind(var7)(var9);
                var10 = var11.getStageHasMedia;
                var9 = var5.id;
                var9 = var10.bind(var11)(var9);
                if (var9) {
                    _fun38737_ip = 431;
                    continue _fun38737
                }
            case 381:
                if (var8) {
                    _fun38737_ip = 429;
                    continue _fun38737
                }
            case 384:
                if (var2) {
                    _fun38737_ip = 429;
                    continue _fun38737
                }
            case 387:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 16;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var15 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 17;
                    var1 = var3[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.v4;
                    var5 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'VOICE_CHANNEL_SELECT';
                    var1.type = var4;
                    var7 = _closure2_slot1;
                    var1.guildId = var7;
                    var7 = _closure2_slot0;
                    var1.channelId = var7;
                    var7 = _closure1_slot7;
                    var6 = var7.getVoiceChannelId;
                    var6 = var6.bind(var7)();
                    var1.currentVoiceChannelId = var6;
                    var6 = _closure2_slot2;
                    var1.video = var6;
                    var6 = _closure2_slot3;
                    var1.stream = var6;
                    var6 = _closure2_slot4;
                    var1.lockVoiceStateForResume = var6;
                    var1.joinVoiceId = var5;
                    var4 = _closure2_slot5;
                    var1.bypassIdleUpdate = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var16 = undefined;
                var14 = var6;
                var13 = var3;
                var12 = var4;
                var1 = var16[var2](var15, var14, var13, var12, var11);
            case 427:
                return var7;
            case 429:
                return var7;
            case 431:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 13;
                var2 = var1[var2];
                var4 = var3.bind(var7)(var2);
                var3 = var4.openLazy;
                var6 = _closure1_slot0;
                var2 = 15;
                var2 = var1[var2];
                var6 = var6.bind(var7)(var2);
                var2 = 14;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var6.bind(var7)(var2, var1);
                var1 = _closure1_slot10;
                var0 = {};
                var0.channel = var5;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.selectVoiceChannelAdditional = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 4234, 3091, 1670, 1621, 3521, 4235, 4236, 4242, 3147, 4243, 4244, 3278, 12228, 1307, 12230, 491, 806, 2]);