// modules/stage_channels/native/components/ModeratorStartStageView.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/ModeratorStartStageView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65037: for (var _fun65037_ip = 0;;) switch (_fun65037_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.channel;
                var12 = var1.onSkip;
                var3 = var17.guild_id;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 4;
                var5 = var2[var4];
                var4 = undefined;
                var8 = var1.bind(var4)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var3;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var7.bind(var8)(var6, var0, var5);
                var0 = 5;
                var0 = var2[var0];
                var6 = var1.bind(var4)(var0);
                var5 = var6.useGuildChannelScheduledEvents;
                var0 = var17.id;
                var6 = var5.bind(var6)(var0);
                var5 = _closure1_slot3;
                var0 = 1;
                var5 = var5.bind(var4)(var6, var0);
                var0 = 0;
                var21 = var5[var0];
                var5 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var7 = var5.bind(var4)(var0);
                var6 = var17.id;
                var0 = true;
                var0 = var7.bind(var4)(var6, var0);
                var14 = var0.moderator;
                var0 = 7;
                var0 = var2[var0];
                var6 = var1.bind(var4)(var0);
                var0 = var6.useManageResourcePermissions;
                var0 = var0.bind(var6)(var17);
                var0 = var0.canManageGuildEvent;
                var8 = var0.bind(var4)(var21);
                var0 = 8;
                var0 = var2[var0];
                var0 = var5.bind(var4)(var0);
                var11 = var0.bind(var4)(var3);
                var0 = 9;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStageChannelStartEvent;
                var0 = var17.id;
                var0 = var3.bind(var5)(var0);
                var16 = var0.isLive;
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNextRecurrenceIdInEvent;
                var0 = var0.bind(var1)(var21);
                var10 = null;
                var1 = var10 != var0;
                var20 = undefined;
                if (!var1) {
                    _fun65037_ip = 291;
                    continue _fun65037
                }
            case 288:
                var20 = var0;
            case 291:
                var1 = var10 == var15;
                var0 = null;
                if (var1) {
                    _fun65037_ip = 712;
                    continue _fun65037
                }
            case 303:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 11;
                var1 = var18[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var13 = _closure1_slot0;
                var5 = 12;
                var6 = var18[var5];
                var6 = var13.bind(var4)(var6);
                var19 = var6.intl;
                var7 = var19.string;
                var6 = var18[var5];
                var6 = var13.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.QGnDLs;
                var6 = var7.bind(var19)(var6);
                var1.title = var6;
                var6 = var18[var5];
                var6 = var13.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var18[var5];
                var5 = var13.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["s/uXzq"];
                var5 = var6.bind(var7)(var5);
                var1.body = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot6;
                var5 = {};
                var13 = null;
                if (!var8) {
                    _fun65037_ip = 521;
                    continue _fun65037
                }
            case 451:
                var8 = var10 != var21;
                var13 = null;
                if (!var8) {
                    _fun65037_ip = 521;
                    continue _fun65037
                }
            case 460:
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var8 = 13;
                var8 = var22[var8];
                var8 = var18.bind(var4)(var8);
                var18 = var8.StartEventPrompt;
                var8 = {};
                var8.channel = var17;
                var8.event = var21;
                var8.isLive = var16;
                var8.guild = var15;
                var8.recurrenceId = var20;
                var13 = var19.bind(var4)(var18, var8);
            case 521:
                var8 = new Array(4);
                var8[0] = var13;
                var13 = null;
                if (!var14) {
                    _fun65037_ip = 581;
                    continue _fun65037
                }
            case 534:
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 14;
                var14 = var20[var14];
                var14 = var18.bind(var4)(var14);
                var18 = var14.StartStagePrompt;
                var14 = {};
                var14.channel = var17;
                var14.isLive = var16;
                var13 = var19.bind(var4)(var18, var14);
            case 581:
                var8[1] = var13;
                var10 = null;
                if (!var11) {
                    _fun65037_ip = 641;
                    continue _fun65037
                }
            case 590:
                var14 = _closure1_slot5;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 13;
                var11 = var18[var11];
                var11 = var13.bind(var4)(var11);
                var13 = var11.ScheduleEventPrompt;
                var11 = {};
                var11.channel = var17;
                var11.isLive = var16;
                var11.guild = var15;
                var10 = var14.bind(var4)(var13, var11);
            case 641:
                var8[2] = var10;
                var11 = _closure1_slot5;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 14;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ContinueToStagePrompt;
                var9 = {};
                var9.onContinue = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 712:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 33, 566, 8108, 8116, 8117, 8119, 8120, 8111, 8121, 1234, 8122, 8429, 2]);