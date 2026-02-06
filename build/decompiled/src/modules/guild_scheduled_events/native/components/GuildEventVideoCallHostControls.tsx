// modules/guild_scheduled_events/native/components/GuildEventVideoCallHostControls.tsx
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
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': 16,
        'height': 16
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.tintColor = var12;
    var3.icon = var9;
    var9 = {
        'marginRight': 16,
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9.backgroundColor = var12;
    var3.iconContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.detailsContainer = var9;
    var9 = {
        'marginHorizontal': 8,
        'width': 4,
        'height': 4,
        'borderRadius': 2
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var10;
    var3.bulletSeparator = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var6 = var1.channel;
        var _closure2_slot0 = var6;
        var11 = var1.recurrenceId;
        var _closure2_slot1 = var11;
        var8 = var1.guildScheduledEvent;
        var _closure2_slot2 = var8;
        var1 = _closure1_slot8;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var7 = _closure1_slot1;
        var15 = _closure1_slot2;
        var1 = 6;
        var1 = var15[var1];
        var1 = var7.bind(var3)(var1);
        var9 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = new Array(3);
        var1[0] = var8;
        var1[1] = var11;
        var1[2] = var6;
        var0 = function() { // Environment: var0
            _fun69749: for (var _fun69749_ip = 0;;) switch (_fun69749_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun69749_ip = 94;
                        continue _fun69749
                    }
                case 13:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = _closure1_slot0;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.openStartGuildEventModal;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openVoiceChannelActionSheet;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var2.bind(var5)(var0, var1);
        var18 = var8.scheduled_start_time;
        var5 = var8.name;
        var13 = var8.entity_type;
        var0 = _closure1_slot5;
        var12 = var0.STAGE_INSTANCE;
        var0 = 10;
        var0 = var15[var0];
        var2 = var7.bind(var3)(var0);
        var1 = var8.guild_id;
        var0 = var8.id;
        var14 = var2.bind(var3)(var1, var0, var11);
        var11 = _closure1_slot0;
        var0 = 11;
        var0 = var15[var0];
        var2 = var11.bind(var3)(var0);
        var1 = var2.getGuildScheduledEventHeaderProps;
        var0 = {};
        var16 = 12;
        var16 = var15[var16];
        var17 = var11.bind(var3)(var16);
        var16 = var17.getEventTimeData;
        var16 = var16.bind(var17)(var18);
        var0.eventTimeData = var16;
        var12 = var13 === var12;
        var0.isStage = var12;
        var0.theme = var9;
        var0.event = var8;
        var0 = var1.bind(var2)(var0);
        var12 = var0.text;
        var2 = _closure1_slot6;
        var0 = 13;
        var0 = var15[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.FormCTA;
        var0 = {};
        var0.onPress = var6;
        var6 = 14;
        var6 = var15[var6];
        var6 = var7.bind(var3)(var6);
        var0.iconSource = var6;
        var6 = var10.icon;
        var0.iconStyle = var6;
        var6 = var10.iconContainer;
        var0.iconContainerStyle = var6;
        var0.title = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot4;
        var4 = {};
        var7 = var10.detailsContainer;
        var4.style = var7;
        var8 = 15;
        var7 = var15[var8];
        var7 = var11.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-xs/semibold',
            'color': 'text-default'
        };
        var7.children = var12;
        var9 = var2.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var9 = {};
        var10 = var10.bulletSeparator;
        var9.style = var10;
        var9 = var2.bind(var3)(var5, var9);
        var7[1] = var9;
        var8 = var15[var8];
        var8 = var11.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-xs/semibold',
            'color': 'text-default'
        };
        var10 = 16;
        var12 = var15[var10];
        var12 = var11.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.format;
        var10 = var15[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.t;
        var11 = var10.NywdIj;
        var10 = {};
        var10.count = var14;
        var10 = var12.bind(var13)(var11, var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.subtitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventVideoCallHostControls.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1378, 33, 1297, 671, 3248, 3280, 8123, 7903, 8202, 8205, 8111, 5383, 8206, 3943, 1234, 2]);