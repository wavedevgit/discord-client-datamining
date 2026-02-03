// modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = var3.InstantInviteSources;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'flex-end',
        'padding': 16
    };
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {
        'marginBottom': 16,
        'alignSelf': 'center'
    };
    var3.header = var8;
    var8 = {
        'fontFamily': null,
        'color': null,
        'fontSize': 24,
        'textAlign': 'center',
        'marginBottom': 8,
        'alignSelf': 'center'
    };
    var11 = var11.PRIMARY_BOLD;
    var8.fontFamily = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var9 = 8;
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'alignSelf': 'center',
        'marginBottom': 24
    };
    var3.description = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.ctaContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryEmpty.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91317: for (var _fun91317_ip = 0;;) switch (_fun91317_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.guild;
                var _closure2_slot0 = var20;
                var2 = var0.channel;
                var _closure2_slot1 = var2;
                var0 = _closure1_slot9;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 7;
                var0 = var11[var0];
                var0 = var12.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var7 = var0.bottom;
                var17 = _closure1_slot0;
                var0 = 8;
                var0 = var11[var0];
                var5 = var17.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot5;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var1, var0);
                var _closure2_slot2 = var0;
                var0 = 9;
                var0 = var11[var0];
                var1 = var17.bind(var3)(var0);
                var0 = var1.useCanCreateOrAddGuildInDirectory;
                var6 = var0.bind(var1)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var13.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var14 = 16;
                var7 = var7 + var14;
                var5.paddingBottom = var7;
                var4[1] = var5;
                var0.contentContainerStyle = var4;
                var8 = _closure1_slot7;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = 10;
                var7 = var11[var7];
                var7 = var12.bind(var3)(var7);
                var4.source = var7;
                var7 = var13.header;
                var4.style = var7;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(5);
                var4[0] = var5;
                var5 = 11;
                var5 = var11[var5];
                var5 = var17.bind(var3)(var5);
                var7 = var5.LegacyText;
                var5 = {};
                var12 = var13.title;
                var5.style = var12;
                var12 = 'header';
                var5.accessibilityRole = var12;
                var12 = 12;
                var15 = var11[var12];
                var15 = var17.bind(var3)(var15);
                var19 = var15.intl;
                var18 = var19.format;
                var15 = var11[var12];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.vyvrpC;
                var15 = {};
                var20 = var20.name;
                var15.guildName = var20;
                var15 = var18.bind(var19)(var16, var15);
                var5.children = var15;
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var5 = 13;
                var5 = var11[var5];
                var5 = var17.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var15 = var13.description;
                var5.style = var15;
                var15 = var11[var12];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var11 = var11[var12];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.WypE0i;
                var11 = var15.bind(var16)(var11);
                var5.children = var11;
                var5 = var8.bind(var3)(var7, var5);
                var4[2] = var5;
                var5 = null;
                if (!var6) {
                    _fun91317_ip = 583;
                    continue _fun91317
                }
            case 456:
                var8 = _closure1_slot7;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 14;
                var6 = var11[var6];
                var6 = var16.bind(var3)(var6);
                var7 = var6.FormCTA;
                var6 = {};
                var15 = var13.ctaContainer;
                var6.style = var15;
                var15 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.name;
                    var0.directoryGuildName = var5;
                    var4 = var4.id;
                    var0.directoryGuildId = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var0.directoryChannelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.onPress = var15;
                var15 = _closure1_slot1;
                var14 = var11[var14];
                var14 = var15.bind(var3)(var14);
                var6.iconSource = var14;
                var14 = var11[var12];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var11[var12];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.hyK15i;
                var11 = var14.bind(var15)(var11);
                var6.title = var11;
                var5 = var8.bind(var3)(var7, var6);
            case 583:
                var4[3] = var5;
                var7 = _closure1_slot7;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 14;
                var5 = var8[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.FormCTA;
                var5 = {};
                var13 = var13.ctaContainer;
                var5.style = var13;
                var10 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.handleOpenInviteActionsheet;
                    var9 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var8 = var2.id;
                    var7 = _closure2_slot2;
                    var0 = _closure1_slot6;
                    var6 = var0.HUB_EMPTY_STATE;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var5.onPress = var10;
                var10 = _closure1_slot1;
                var9 = 18;
                var9 = var8[var9];
                var9 = var10.bind(var3)(var9);
                var5.iconSource = var9;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.L4bwJ9;
                var8 = var9.bind(var10)(var8);
                var5.title = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1671, 660, 33, 1297, 671, 1568, 566, 8932, 11866, 4876, 1234, 3941, 5378, 8933, 11867, 8328, 11868, 2]);