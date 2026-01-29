// modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useActiveSpeakerPillScrollHandler;
    var _closure1_slot6 = var7;
    var3 = var3.useActiveSpeakerPillState;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': '100%',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var9;
    var9 = {
        'padding': 10,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 8;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var3.participantItemContainer = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.participantAvatarContainer = var9;
    var9 = {};
    var13 = 12;
    var9.fontSize = var13;
    var12 = var12.PRIMARY_SEMIBOLD;
    var9.fontFamily = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var12;
    var12 = 18;
    var9.lineHeight = var12;
    var3.participantAvatarText = var9;
    var9 = {
        'paddingHorizontal': 3,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.participantNameplateContainer = var9;
    var9 = {};
    var9.lineHeight = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var9.color = var10;
    var3.participantNameplateSpeakingText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69254: for (var _fun69254_ip = 0;;) switch (_fun69254_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.channel;
                var _closure2_slot0 = var14;
                var1 = _closure1_slot10;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var6 = var7.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = var14.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = 10;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var18 = var1.isVersionEqual;
                var20 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getSpeakingParticipants;
                    var1 = _closure2_slot0;
                    var0 = var1.id;
                    var4 = var2.bind(var3)(var0);
                    var2 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.user;
                        return var0;
                    };
                    var2 = var2.bind(var4)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = var3.getParticipantsVersion;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0[1] = var1;
                    return var0;
                };
                var22 = var6;
                var21 = var3;
                var19 = var2;
                var0 = var22[var5](var21, var20, var19, var18, var17);
                var5 = _closure1_slot3;
                var2 = 1;
                var0 = var5.bind(var4)(var0, var2);
                var6 = 0;
                var16 = var0[var6];
                var0 = _closure1_slot7;
                var0 = var0.bind(var4)();
                var0 = var5.bind(var4)(var0, var2);
                var1 = var0[var6];
                var0 = _closure1_slot6;
                var3 = var0.bind(var4)();
                var0 = 2;
                var0 = var5.bind(var4)(var3, var0);
                var5 = var0[var2];
                var3 = var16.length;
                var0 = null;
                if (!(var6 !== var3)) {
                    _fun69254_ip = 529;
                    continue _fun69254
                }
            case 187:
                var0 = null;
                if (!var1) {
                    _fun69254_ip = 529;
                    continue _fun69254
                }
            case 195:
                var3 = _closure1_slot8;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 11;
                var1 = var17[var1];
                var1 = var13.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var6 = var12.container;
                var1.style = var6;
                var1.onPress = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var12.participantItemContainer;
                var5.style = var8;
                var8 = {};
                var10 = var12.participantAvatarContainer;
                var8.style = var10;
                var10 = _closure1_slot1;
                var9 = 12;
                var9 = var17[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var11 = var12.participantAvatarText;
                var9.namesStyle = var11;
                var9.users = var16;
                var11 = true;
                var9.withNames = var11;
                var11 = var14.id;
                var9.channelId = var11;
                var11 = var14.getGuildId;
                var11 = var11.bind(var14)();
                var9.guildId = var11;
                var9 = var3.bind(var4)(var10, var9);
                var8.children = var9;
                var9 = var3.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var12.participantNameplateContainer;
                var9.style = var10;
                var10 = 13;
                var10 = var17[var10];
                var10 = var13.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var12 = var12.participantNameplateSpeakingText;
                var10.style = var12;
                var12 = 14;
                var14 = var17[var12];
                var14 = var13.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var12 = var17[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.t;
                var13 = var12["+dia6l"];
                var12 = {};
                var16 = var16.length;
                var12.count = var16;
                var12 = var14.bind(var15)(var13, var12);
                var10.children = var12;
                var10 = var3.bind(var4)(var11, var10);
                var9.children = var10;
                var9 = var3.bind(var4)(var6, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 529:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3902, 8610, 660, 33, 1297, 671, 566, 8369, 4858, 8618, 3895, 1234, 2]);