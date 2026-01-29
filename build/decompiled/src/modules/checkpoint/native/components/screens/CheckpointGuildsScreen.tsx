// modules/checkpoint/native/components/screens/CheckpointGuildsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: GuildContainer, environment: var1
        _fun86872: for (var _fun86872_ip = 0;;) switch (_fun86872_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.guild;
                var7 = var2.index;
                var5 = var2.numVoiceMinutes;
                var28 = var2.numMessagesSent;
                var2 = _closure1_slot11;
                var4 = undefined;
                var21 = var2.bind(var4)();
                var6 = _closure1_slot4;
                var3 = var6.useContext;
                var19 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 11;
                var2 = var12[var2];
                var2 = var19.bind(var4)(var2);
                var2 = var2.CheckpointColorContext;
                var2 = var3.bind(var6)(var2);
                var3 = 12;
                var3 = var12[var3];
                var6 = var19.bind(var4)(var3);
                var3 = var6.useToken;
                var2 = var2.primaryColor;
                var14 = var3.bind(var6)(var2);
                var2 = 19;
                var2 = var12[var2];
                var3 = var19.bind(var4)(var2);
                var2 = var3.getDurationAndUnit;
                var2 = var2.bind(var3)(var5);
                var22 = var2.unit;
                var18 = var2.duration;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var6 = 0;
                var2 = {
                    'width': 0,
                    'height': 0
                };
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot3;
                var2 = 2;
                var2 = var3.bind(var4)(var5, var2);
                var13 = var2[var6];
                var16 = 1;
                var2 = var2[var16];
                var _closure2_slot0 = var2;
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.layout;
                    var0 = var1.height;
                    var3 = var1.width;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1.width = var3;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var5 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var1.onLayout = var5;
                var8 = var21.guildContainer;
                var5 = new Array(2);
                var5[0] = var8;
                var8 = {};
                var9 = '#043A3180';
                var8.backgroundColor = var9;
                var8.borderColor = var14;
                var5[1] = var8;
                var1.style = var5;
                var9 = _closure1_slot9;
                var8 = _closure1_slot5;
                var5 = {};
                var11 = var21.guildBorder;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var17 = var13.width;
                var11.width = var17;
                var13 = var13.height;
                var11.height = var13;
                var11.borderColor = var14;
                var10[1] = var11;
                var5.style = var10;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(6);
                var5[0] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = {
                    'height': 1,
                    'width': 6,
                    'position': 'absolute',
                    'top': 5,
                    'right': 4294967288
                };
                var11.backgroundColor = var14;
                var8.style = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5[1] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = {
                    'height': 6,
                    'width': 1,
                    'position': 'absolute',
                    'bottom': 4294967288,
                    'left': 5
                };
                var11.backgroundColor = var14;
                var8.style = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5[2] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var13 = var21.guildRank;
                var11 = new Array(2);
                var11[0] = var13;
                var13 = {};
                var13.backgroundColor = var14;
                var11[1] = var13;
                var8.style = var11;
                var14 = _closure1_slot10;
                var11 = 20;
                var11 = var12[var11];
                var11 = var19.bind(var4)(var11);
                var13 = var11.Text;
                var11 = {
                    'variant': 'text-lg/semibold',
                    'color': 'black'
                };
                var17 = var21.numeric;
                var11.style = var17;
                var17 = var7 + var16;
                var16 = ['#'];
                var16[1] = var17;
                var11.children = var16;
                var11 = var14.bind(var4)(var13, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5[3] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var21.guildName;
                var8.style = var11;
                var16 = _closure1_slot9;
                var13 = _closure1_slot1;
                var17 = 21;
                var11 = var12[var17];
                var14 = var13.bind(var4)(var11);
                var11 = {};
                var11.guild = var0;
                var17 = var12[var17];
                var17 = var19.bind(var4)(var17);
                var17 = var17.GuildIconSizes;
                var17 = var17.SMALL_36;
                var11.size = var17;
                var14 = var16.bind(var4)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot9;
                var20 = 15;
                var12 = var12[var20];
                var13 = var13.bind(var4)(var12);
                var12 = {
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'style': null,
                    'variant': 'text-lg/semibold'
                };
                var16 = var21.guildNameText;
                var12.style = var16;
                var16 = var0.name;
                var12.children = var16;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5[4] = var8;
                var6 = var6 === var7;
                if (!var6) {
                    _fun86872_ip = 1221;
                    continue _fun86872
                }
            case 728:
                var9 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var21.guildStats;
                var7.style = var10;
                var12 = _closure1_slot10;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = var21.statContainer;
                var10.style = var13;
                var17 = _closure1_slot9;
                var16 = _closure1_slot1;
                var25 = _closure1_slot2;
                var13 = var25[var20];
                var14 = var16.bind(var4)(var13);
                var13 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var19 = var21.titleText;
                var13.style = var19;
                var24 = _closure1_slot0;
                var23 = 16;
                var19 = var25[var23];
                var19 = var24.bind(var4)(var19);
                var29 = var19.intl;
                var27 = var29.string;
                var26 = 17;
                var19 = var25[var26];
                var19 = var16.bind(var4)(var19);
                var19 = var19.wWKySP;
                var19 = var27.bind(var29)(var19);
                var13.children = var19;
                var14 = var17.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var27 = _closure1_slot9;
                var14 = var25[var20];
                var17 = var16.bind(var4)(var14);
                var14 = {};
                var19 = 'text-lg/medium';
                var14.variant = var19;
                var14.children = var28;
                var14 = var27.bind(var4)(var17, var14);
                var13[1] = var14;
                var10.children = var13;
                var11 = var12.bind(var4)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot10;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var21.statContainer;
                var11.style = var14;
                var17 = _closure1_slot9;
                var14 = var25[var20];
                var16 = var16.bind(var4)(var14);
                var14 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var21 = var21.titleText;
                var14.style = var21;
                var21 = 22;
                var21 = var25[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.TimeUnits;
                var21 = var21.HOURS;
                if (!(var22 !== var21)) {
                    _fun86872_ip = 1079;
                    continue _fun86872
                }
            case 1026:
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var23];
                var22 = var24.bind(var4)(var22);
                var24 = var22.intl;
                var22 = var24.string;
                var25 = _closure1_slot1;
                var21 = var21[var26];
                var21 = var25.bind(var4)(var21);
                var21 = var21.RmVTph;
                var21 = var22.bind(var24)(var21);
                _fun86872_ip = 1138;
                continue _fun86872;
            case 1079:
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = var22[var23];
                var23 = var24.bind(var4)(var23);
                var25 = var23.intl;
                var24 = var25.format;
                var23 = _closure1_slot1;
                var22 = var22[var26];
                var22 = var23.bind(var4)(var22);
                var23 = var22.Xu0QsX;
                var22 = {};
                var22.numHours = var18;
                var21 = var24.bind(var25)(var23, var22);
            case 1138:
                var14.children = var21;
                var16 = var17.bind(var4)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var17 = _closure1_slot9;
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var15.variant = var19;
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1221:
                var5[5] = var6;
                var1.children = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CheckpointSlides;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'height': '100%'
    };
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.title = var8;
    var8 = {
        'fontWeight': 800,
        'flexWrap': 'wrap'
    };
    var3.titleText = var8;
    var8 = {
        'textTransform': 'uppercase',
        'paddingTop': 10
    };
    var3.display = var8;
    var8 = {
        'display': 'flex',
        'gap': 20,
        'marginTop': 32
    };
    var3.guilds = var8;
    var8 = {
        'padding': 16,
        'borderWidth': 1,
        'position': 'relative'
    };
    var3.guildContainer = var8;
    var8 = {
        'position': 'absolute',
        'backgroundColor': 'transparent',
        'borderRightWidth': 1,
        'borderBottomWidth': 1,
        'left': 6,
        'top': 6
    };
    var3.guildBorder = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 12,
        'overflow': 'hidden'
    };
    var3.guildName = var8;
    var8 = {};
    var9 = 9;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.paddingEnd = var13;
    var8.flexShrink = var12;
    var3.guildNameText = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'padding': 4
    };
    var3.guildRank = var8;
    var8 = {};
    var11 = var11.CODE_NORMAL;
    var8.fontFamily = var11;
    var3.numeric = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'marginTop': 16,
        'gap': 20
    };
    var3.guildStats = var8;
    var8 = {
        'flexBasis': '40%',
        'flexGrow': 1
    };
    var3.statContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.knickKnacks = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/screens/CheckpointGuildsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointGuildsScreen, environment: var1
        _fun86874: for (var _fun86874_ip = 0;;) switch (_fun86874_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var1 = _closure1_slot7;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.guilds;
                if (!(var3 === var0)) {
                    _fun86874_ip = 89;
                    continue _fun86874
                }
            case 75:
                var1 = {};
                var2 = new Array(0);
                var1.guilds = var2;
                var0 = var1;
            case 89:
                var0 = var0.guilds;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var3 = _closure2_slot0;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.guild;
                        var2 = _closure1_slot6;
                        var1 = var2.getGuild;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot4;
                var1 = var2.useContext;
                var20 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 11;
                var0 = var13[var0];
                var0 = var20.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var0 = var1.bind(var2)(var0);
                var1 = 12;
                var1 = var13[var1];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useToken;
                var0 = var0.primaryColor;
                var22 = var1.bind(var2)(var0);
                var2 = _closure1_slot9;
                var9 = _closure1_slot1;
                var0 = 13;
                var0 = var13[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var11 = _closure1_slot8;
                var4 = var11.GUILDS;
                var0.slide = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var12.container;
                var4.style = var7;
                var15 = _closure1_slot10;
                var14 = _closure1_slot5;
                var7 = {};
                var10 = var12.title;
                var7.style = var10;
                var19 = _closure1_slot9;
                var10 = 14;
                var10 = var13[var10];
                var10 = var20.bind(var3)(var10);
                var17 = var10.ServerIcon;
                var10 = {};
                var21 = 'xs';
                var10.size = var21;
                var21 = {};
                var21.tintColor = var22;
                var10.style = var21;
                var10 = var19.bind(var3)(var17, var10);
                var21 = new Array(2);
                var21[0] = var10;
                var24 = _closure1_slot9;
                var10 = 15;
                var17 = var13[var10];
                var23 = var9.bind(var3)(var17);
                var22 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var17 = var12.titleText;
                var22.style = var17;
                var19 = 16;
                var17 = var13[var19];
                var17 = var20.bind(var3)(var17);
                var27 = var17.intl;
                var26 = var27.string;
                var17 = 17;
                var25 = var13[var17];
                var25 = var9.bind(var3)(var25);
                var25 = var25.mAroeJ;
                var25 = var26.bind(var27)(var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var7.children = var21;
                var14 = var15.bind(var3)(var14, var7);
                var7 = new Array(5);
                var7[0] = var14;
                var21 = _closure1_slot9;
                var14 = var13[var10];
                var15 = var9.bind(var3)(var14);
                var14 = {
                    'variant': 'display-lg',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var22 = var12.display;
                var14.style = var22;
                var22 = var13[var19];
                var22 = var20.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var13[var17];
                var22 = var9.bind(var3)(var22);
                var22 = var22.F0fkrh;
                var22 = var23.bind(var24)(var22);
                var14.children = var22;
                var14 = var21.bind(var3)(var15, var14);
                var7[1] = var14;
                var15 = _closure1_slot9;
                var10 = var13[var10];
                var14 = var9.bind(var3)(var10);
                var10 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 4
                };
                var19 = var13[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var13[var17];
                var17 = var9.bind(var3)(var17);
                var17 = var17.Q0EMOP;
                var17 = var19.bind(var20)(var17);
                var10.children = var17;
                var10 = var15.bind(var3)(var14, var10);
                var7[2] = var10;
                var15 = _closure1_slot9;
                var14 = _closure1_slot5;
                var10 = {};
                var17 = var12.guilds;
                var10.style = var17;
                var17 = var18.map;
                var16 = function(arg0, arg1) { // Environment: var16
                    var4 = arg1;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var0 = arg0;
                    var1.guild = var0;
                    var1.index = var4;
                    var6 = _closure2_slot0;
                    var5 = 0;
                    var6 = var6[var5];
                    var6 = var6.numMessagesSent;
                    var1.numMessagesSent = var6;
                    var0 = _closure2_slot0;
                    var0 = var0[var5];
                    var0 = var0.numVoiceMinutes;
                    var1.numVoiceMinutes = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var16 = var17.bind(var18)(var16);
                var10.children = var16;
                var10 = var15.bind(var3)(var14, var10);
                var7[3] = var10;
                var10 = _closure1_slot9;
                var8 = 18;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var12 = var12.knickKnacks;
                var8.style = var12;
                var11 = var11.GUILDS;
                var8.slide = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 11128, 9119, 660, 33, 1297, 671, 566, 11130, 3110, 11132, 5315, 11137, 1234, 2267, 11144, 6806, 3895, 7353, 3486, 2]);