// modules/stage_channels/native/components/StageChannelExpandedControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var10 = var5[var10];
    var15 = var4.bind(var0)(var10);
    var14 = var15.hexWithOpacity;
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.WHITE;
    var12 = 0.24;
    var12 = var14.bind(var15)(var13, var12);
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var10 = 'hidden';
    var9.overflow = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun68065: for (var _fun68065_ip = 0;;) switch (_fun68065_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var _closure2_slot0 = var9;
                var1 = _closure1_slot8;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var9.id;
                var2 = var2.bind(var3)(var1);
                var7 = _closure1_slot0;
                var1 = 10;
                var1 = var8[var1];
                var6 = var7.bind(var3)(var1);
                var1 = var6.useIsConnectedToVoiceChannel;
                var13 = var1.bind(var6)(var9);
                var6 = 11;
                var1 = var8[var6];
                var14 = var7.bind(var3)(var1);
                var12 = var14.useStateFromStores;
                var1 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = var9.guild_id;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var12.bind(var14)(var11, var1, var10);
                var10 = var8[var6];
                var15 = var7.bind(var3)(var10);
                var14 = var15.useStateFromStoresArray;
                var10 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = var9.id;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var4
                    var2 = _closure1_slot4;
                    var1 = var2.getAllApplicationStreamsForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var14.bind(var15)(var12, var10, var11);
                var6 = var8[var6];
                var10 = var7.bind(var3)(var6);
                var8 = var10.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var4
                    var1 = _closure1_slot5;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var10)(var7, var6);
                var _closure2_slot1 = var6;
                var16 = null;
                var7 = var16 == var1;
                var6 = undefined;
                if (var7) {
                    _fun68065_ip = 254;
                    continue _fun68065
                }
            case 248:
                var6 = var1.maxStageVideoChannelUsers;
            case 254:
                var7 = var16 != var6;
                var15 = 0;
                var1 = 0;
                if (!var7) {
                    _fun68065_ip = 268;
                    continue _fun68065
                }
            case 265:
                var1 = var6;
            case 268:
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 12;
                var6 = var7[var6];
                var10 = var11.bind(var3)(var6);
                var8 = var10.useStageHasMedia;
                var6 = var9.id;
                var12 = var8.bind(var10)(var6);
                var8 = _closure1_slot1;
                var6 = 13;
                var6 = var7[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.bind(var3)(var9);
                var14 = var6.reachedLimit;
                var6 = new Array(0);
                var8 = var6.push;
                var17 = _closure1_slot7;
                var10 = 14;
                var7 = var7[var10];
                var7 = var11.bind(var3)(var7);
                var11 = var7.StreamVolumeItem;
                var7 = {};
                var7 = var17.bind(var3)(var11, var7);
                var7 = var8.bind(var6)(var7);
                var1 = var1 > var15;
                if (!var1) {
                    _fun68065_ip = 385;
                    continue _fun68065
                }
            case 382:
                var1 = var2;
            case 385:
                if (!var1) {
                    _fun68065_ip = 489;
                    continue _fun68065
                }
            case 388:
                var2 = var6.push;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var1 = var7.bind(var3)(var1);
                var7 = var1.ScreenshareButton;
                var1 = {};
                var1.channel = var9;
                var11 = var18.length;
                var11 = var11 > var15;
                if (!var11) {
                    _fun68065_ip = 459;
                    continue _fun68065
                }
            case 438:
                var17 = var18.find;
                var15 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.ownerId;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var15 = var17.bind(var18)(var15);
                var11 = var16 == var15;
            case 459:
                if (var11) {
                    _fun68065_ip = 474;
                    continue _fun68065
                }
            case 462:
                var12 = !var12;
                if (!var12) {
                    _fun68065_ip = 471;
                    continue _fun68065
                }
            case 468:
                var12 = var14;
            case 471:
                var11 = var12;
            case 474:
                var1.disabled = var11;
                var1 = var8.bind(var3)(var7, var1);
                var1 = var2.bind(var6)(var1);
            case 489:
                var11 = var6.push;
                var2 = _closure1_slot7;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = var1[var10];
                var7 = var8.bind(var3)(var7);
                var12 = var7.AudioRouteButton;
                var7 = {};
                var14 = var9.id;
                var7.channelId = var14;
                var7.isConnectedToVoiceChannel = var13;
                var7 = var2.bind(var3)(var12, var7);
                var7 = var11.bind(var6)(var7);
                var7 = var6.push;
                var1 = var1[var10];
                var1 = var8.bind(var3)(var1);
                var8 = var1.DeafenButton;
                var1 = {};
                var1.channel = var9;
                var1 = var2.bind(var3)(var8, var1);
                var1 = var7.bind(var6)(var1);
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageChannelExpandedControls.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3673, 1216, 1410, 33, 1297, 3199, 671, 7952, 7848, 566, 4208, 8168, 8462, 2]);