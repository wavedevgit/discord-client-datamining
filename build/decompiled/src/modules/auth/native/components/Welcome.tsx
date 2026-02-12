// modules/auth/native/components/Welcome.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun100872: for (var _fun100872_ip = 0;;) switch (_fun100872_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.invite;
                var6 = var0.style;
                var0 = _closure1_slot24;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var0 = var1.guild;
                var8 = var1.inviter;
                var2 = var1.channel;
                var4 = var1.state;
                var1 = _closure1_slot18;
                var1 = var1.RESOLVED;
                if (!(var4 === var1)) {
                    _fun100872_ip = 680;
                    continue _fun100872
                }
            case 65:
                var1 = null;
                if (!(var1 == var0)) {
                    _fun100872_ip = 412;
                    continue _fun100872
                }
            case 74:
                if (!(var1 == var2)) {
                    _fun100872_ip = 241;
                    continue _fun100872
                }
            case 81:
                if (!(var1 != var8)) {
                    _fun100872_ip = 239;
                    continue _fun100872
                }
            case 88:
                var5 = _closure1_slot21;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 18;
                var2 = var9[var2];
                var4 = var7.bind(var3)(var2);
                var2 = {};
                var10 = _closure1_slot12;
                var12 = var10.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var10
                    }
                });
                var21 = var12;
                var20 = var8;
                var10 = new var21[var10](var20, var19);
                var10 = var10 instanceof Object ? var10 : var12;
                var2.user = var10;
                var2.guildId = var3;
                var5 = var5.bind(var3)(var4, var2);
                var12 = _closure1_slot0;
                var2 = 16;
                var4 = var9[var2];
                var4 = var12.bind(var3)(var4);
                var10 = var4.intl;
                var4 = var10.string;
                var2 = var9[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["+ITYkQ"];
                var17 = var4.bind(var10)(var2);
                var2 = 19;
                var2 = var9[var2];
                var9 = var7.bind(var3)(var2);
                var7 = var9.getFormattedName;
                var2 = true;
                var12 = var7.bind(var9)(var8, var2);
                _fun100872_ip = 504;
                continue _fun100872;
            case 239:
                return var1;
            case 241:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 17;
                var2 = var9[var2];
                var4 = var7.bind(var3)(var2);
                var2 = var1 != var8;
                var1 = 'Null inviter';
                var1 = var4.bind(var3)(var2, var1);
                var4 = _closure1_slot21;
                var1 = 18;
                var1 = var9[var1];
                var2 = var7.bind(var3)(var1);
                var1 = {};
                var10 = _closure1_slot12;
                var14 = var10.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var10
                    }
                });
                var21 = var14;
                var20 = var8;
                var10 = new var21[var10](var20, var19);
                var10 = var10 instanceof Object ? var10 : var14;
                var1.user = var10;
                var1.guildId = var3;
                var5 = var4.bind(var3)(var2, var1);
                var14 = _closure1_slot0;
                var1 = 16;
                var2 = var9[var1];
                var2 = var14.bind(var3)(var2);
                var10 = var2.intl;
                var2 = var10.string;
                var1 = var9[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.OsdY8B;
                var17 = var2.bind(var10)(var1);
                var1 = 19;
                var1 = var9[var1];
                var7 = var7.bind(var3)(var1);
                var1 = var7.getFormattedName;
                var12 = var1.bind(var7)(var8);
                _fun100872_ip = 504;
                continue _fun100872;
            case 412:
                var4 = _closure1_slot21;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.guild = var0;
                var5 = var4.bind(var3)(var2, var1);
                var8 = _closure1_slot0;
                var1 = 16;
                var4 = var9[var1];
                var4 = var8.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["3rE1P8"];
                var17 = var4.bind(var7)(var1);
                var12 = var0.name;
            case 504:
                var2 = _closure1_slot22;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var13.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var13.text;
                var5.style = var8;
                var16 = _closure1_slot21;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 20;
                var8 = var14[var9];
                var15 = var10.bind(var3)(var8);
                var8 = {};
                var18 = var13.inviteText;
                var8.style = var18;
                var8.children = var17;
                var15 = var16.bind(var3)(var15, var8);
                var8 = new Array(2);
                var8[0] = var15;
                var11 = _closure1_slot21;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var13.name;
                var9.style = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 680:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var12 = var0.guildTemplate;
        var5 = var0.style;
        var0 = _closure1_slot24;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var2 = _closure1_slot22;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = var13.container;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var5 = _closure1_slot25;
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot22;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var13.text;
        var5.style = var8;
        var16 = _closure1_slot21;
        var10 = _closure1_slot1;
        var14 = _closure1_slot2;
        var9 = 20;
        var8 = var14[var9];
        var15 = var10.bind(var3)(var8);
        var8 = {};
        var17 = var13.inviteText;
        var8.style = var17;
        var20 = _closure1_slot0;
        var17 = 16;
        var18 = var14[var17];
        var18 = var20.bind(var3)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var14[var17];
        var17 = var20.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.QzUORX;
        var17 = var18.bind(var19)(var17);
        var8.children = var17;
        var15 = var16.bind(var3)(var15, var8);
        var8 = new Array(2);
        var8[0] = var15;
        var11 = _closure1_slot21;
        var9 = var14[var9];
        var10 = var10.bind(var3)(var9);
        var9 = {};
        var13 = var13.name;
        var9.style = var13;
        var12 = var12.name;
        var9.children = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun100874: for (var _fun100874_ip = 0;;) switch (_fun100874_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.invite;
                var16 = var0.guildTemplate;
                var0 = _closure1_slot23;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 22;
                var0 = var2[var0];
                var10 = var1.bind(var3)(var0);
                var12 = null;
                var17 = var12 != var20;
                var14 = var12 != var16;
                if (!var14) {
                    _fun100874_ip = 80;
                    continue _fun100874
                }
            case 61:
                var1 = var16.state;
                var0 = _closure1_slot19;
                var0 = var0.RESOLVED;
                var14 = var1 === var0;
            case 80:
                var2 = _closure1_slot21;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var23.centerpieceContainer;
                var4 = new Array(1);
                var4[0] = var5;
                var0.style = var4;
                var6 = _closure1_slot22;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = false;
                var4.alwaysBounceVertical = var7;
                var7 = var23.scrollViewContainer;
                var4.contentContainerStyle = var7;
                var9 = _closure1_slot21;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var23.logo;
                var7.style = var11;
                var7.source = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot22;
                var9 = _closure1_slot4;
                var8 = {};
                var22 = _closure1_slot21;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var15 = 23;
                var11 = var21[var15];
                var11 = var18.bind(var3)(var11);
                var19 = var11.Text;
                var11 = {
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2,
                    'variant': 'display-md',
                    'color': 'always-white',
                    'maxFontSizeMultiplier': 1
                };
                var24 = var23.header;
                var11.style = var24;
                var25 = 16;
                var24 = var21[var25];
                var24 = var18.bind(var3)(var24);
                var27 = var24.intl;
                var26 = var27.string;
                var24 = var21[var25];
                var24 = var18.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["3S2xmm"];
                var24 = var26.bind(var27)(var24);
                var11.children = var24;
                var19 = var22.bind(var3)(var19, var11);
                var11 = new Array(4);
                var11[0] = var19;
                var19 = _closure1_slot21;
                var15 = var21[var15];
                var15 = var18.bind(var3)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'text-md/medium',
                    'color': 'always-white',
                    'style': null,
                    'maxFontSizeMultiplier': 3
                };
                var22 = var23.subHeader;
                var21 = new Array(2);
                var21[0] = var22;
                if (var17) {
                    _fun100874_ip = 357;
                    continue _fun100874
                }
            case 352:
                var22 = null;
                if (!var14) {
                    _fun100874_ip = 363;
                    continue _fun100874
                }
            case 357:
                var22 = var23.subHeaderWithInvite;
            case 363:
                var21[1] = var22;
                var15.style = var21;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var25];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var25];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.Gtcthl;
                var21 = var22.bind(var23)(var21);
                var15.children = var21;
                var15 = var19.bind(var3)(var18, var15);
                var11[1] = var15;
                var15 = null;
                if (!var17) {
                    _fun100874_ip = 467;
                    continue _fun100874
                }
            case 446:
                var19 = _closure1_slot21;
                var18 = _closure1_slot28;
                var17 = {};
                var17.invite = var20;
                var15 = var19.bind(var3)(var18, var17);
            case 467:
                var11[2] = var15;
                var12 = null;
                if (!var14) {
                    _fun100874_ip = 497;
                    continue _fun100874
                }
            case 476:
                var15 = _closure1_slot21;
                var14 = _closure1_slot29;
                var13 = {};
                var13.guildTemplate = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 497:
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var9 = var3.Image;
    var _closure1_slot5 = var9;
    var7 = var3.ImageBackground;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var15 = var3.Fonts;
    var7 = var3.AnalyticEvents;
    var _closure1_slot15 = var7;
    var7 = var3.StorageKeys;
    var _closure1_slot16 = var7;
    var7 = var3.AuthStates;
    var _closure1_slot17 = var7;
    var3 = var3.InviteStates;
    var _closure1_slot18 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTemplateStates;
    var _closure1_slot19 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot20 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot21 = var7;
    var3 = var3.jsxs;
    var _closure1_slot22 = var3;
    var8 = 13;
    var3 = var5[var8];
    var12 = var4.bind(var0)(var3);
    var11 = var12.createStyles;
    var10 = {};
    var14 = 16;
    var3 = {
        'height': '100%',
        'flex': 1,
        'padding': 16
    };
    var10.container = var3;
    var3 = 24;
    var13 = {
        'flex': 0,
        'width': 93,
        'height': 70,
        'tintColor': 'white',
        'alignSelf': 'center',
        'marginBottom': 24
    };
    var10.logo = var13;
    var13 = {
        'flexShrink': 0,
        'flexGrow': 1,
        'justifyContent': 'center'
    };
    var10.scrollViewContainer = var13;
    var13 = {
        'textAlign': 'center',
        'marginBottom': 8,
        'textTransform': 'uppercase'
    };
    var10.header = var13;
    var13 = {
        'fontSize': 18,
        'textAlign': 'center',
        'alignSelf': 'center',
        'maxWidth': 300,
        'marginBottom': 24,
        'marginHorizontal': 16
    };
    var10.subHeader = var13;
    var13 = {};
    var13.marginBottom = var14;
    var10.subHeaderWithInvite = var13;
    var13 = {
        'position': 'absolute',
        'bottom': 0,
        'top': 0,
        'left': 0,
        'right': 0,
        'resizeMode': 'cover'
    };
    var10.background = var13;
    var13 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'justifyContent': 'center'
    };
    var10.centerpieceContainer = var13;
    var13 = {};
    var16 = 28;
    var13.paddingHorizontal = var16;
    var10.buttonContainer = var13;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot23 = var10;
    var8 = var5[var8];
    var11 = var4.bind(var0)(var8);
    var10 = var11.createStyles;
    var8 = {};
    var12 = {
        'backgroundColor': null,
        'padding': 16,
        'flexDirection': 'row'
    };
    var13 = 14;
    var16 = var5[var13];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var16;
    var16 = var5[var13];
    var16 = var6.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12.borderRadius = var16;
    var8.container = var12;
    var12 = {};
    var12.marginLeft = var14;
    var8.text = var12;
    var12 = {};
    var16 = var5[var13];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_TEXT_HEADING_PRIMARY;
    var12.color = var16;
    var15 = var15.PRIMARY_SEMIBOLD;
    var12.fontFamily = var15;
    var12.fontSize = var14;
    var14 = 20;
    var12.lineHeight = var14;
    var8.name = var12;
    var12 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18
    };
    var13 = var5[var13];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var12.color = var13;
    var8.inviteText = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot24 = var8;
    var8 = {};
    var10 = 21;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var8.source = var10;
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot25 = var8;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot26 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TTIFirstContentfulPaint;
    var3 = {};
    var8 = 'welcome';
    var3.label = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot27 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/Welcome.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100875: for (var _fun100875_ip = 0;;) switch (_fun100875_ip) {
            case 0:
                var1 = _closure1_slot23;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 26;
                var1 = var7[var1];
                var2 = var6.bind(var4)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var5 = _closure1_slot1;
                var1 = 27;
                var1 = var7[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var16 = var1.top;
                var10 = var1.bottom;
                var3 = 28;
                var1 = var7[var3];
                var9 = var6.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var20
                    var1 = _closure1_slot14;
                    var0 = var1.getDisplayedInviteCode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var9)(var2, var1);
                var _closure2_slot1 = var1;
                var1 = var7[var3];
                var9 = var6.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot13;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var20
                    _fun100877: for (var _fun100877_ip = 0;;) switch (_fun100877_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun100877_ip = 38;
                                continue _fun100877
                            }
                        case 16:
                            var3 = _closure1_slot13;
                            var2 = var3.getInvite;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var14 = var8.bind(var9)(var2, var1);
                var _closure2_slot2 = var14;
                var1 = var7[var3];
                var9 = var6.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var20
                    var2 = _closure1_slot10;
                    var0 = var2.getDisplayedGuildTemplateCode;
                    var1 = var0.bind(var2)();
                    var0 = var2.getGuildTemplate;
                    var0 = var0.bind(var2)(var1);
                    return var0;
                };
                var13 = var8.bind(var9)(var2, var1);
                var1 = var7[var3];
                var9 = var6.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var20
                    var1 = _closure1_slot8;
                    var0 = var1.isUnderageAnonymous;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var9)(var2, var1);
                var _closure2_slot3 = var1;
                var1 = var7[var3];
                var11 = var6.bind(var4)(var1);
                var9 = var11.useStateFromStores;
                var2 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var2;
                var1 = function() { // Environment: var20
                    var1 = _closure1_slot11;
                    var0 = var1.getHasLoggedInAccounts;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var9.bind(var11)(var8, var1);
                var3 = var7[var3];
                var8 = var6.bind(var4)(var3);
                var6 = var8.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var20
                    var1 = _closure1_slot11;
                    var0 = var1.getCanUseMultiAccountMobile;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var6.bind(var8)(var3, var2);
                var3 = 29;
                var3 = var7[var3];
                var6 = var5.bind(var4)(var3);
                var3 = function() { // Environment: var20
                    _fun100882: for (var _fun100882_ip = 0;;) switch (_fun100882_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 30;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.trackAppUIViewed;
                            var4 = var4.bind(var5)();
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.trackAppLaunchCompleted;
                            var1 = var1.bind(var2)();
                            var1 = _closure2_slot2;
                            var7 = null;
                            var1 = var7 != var1;
                            var5 = null;
                            if (!var1) {
                                _fun100882_ip = 107;
                                continue _fun100882
                            }
                        case 72:
                            var1 = _closure2_slot2;
                            var1 = var1.type;
                            var1 = var7 != var1;
                            var5 = null;
                            if (!var1) {
                                _fun100882_ip = 107;
                                continue _fun100882
                            }
                        case 90:
                            var2 = _closure1_slot20;
                            var1 = _closure2_slot2;
                            var1 = var1.type;
                            var5 = var2[var1];
                        case 107:
                            var2 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var1 = 31;
                            var1 = var11[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot15;
                            var2 = var1.APP_LANDING_VIEWED;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var9 = 32;
                            var9 = var11[var9];
                            var9 = var10.bind(var0)(var9);
                            var10 = var9.Storage;
                            var9 = var10.get;
                            var8 = _closure1_slot16;
                            var8 = var8.LOGOUT_TIMESTAMP_KEY;
                            var8 = var9.bind(var10)(var8);
                            var1.last_logout_ts = var8;
                            var1.invite_type = var5;
                            var5 = _closure2_slot2;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun100882_ip = 234;
                                continue _fun100882
                            }
                        case 211:
                            var8 = _closure2_slot2;
                            var8 = var8.guild;
                            var9 = var7 == var8;
                            var5 = undefined;
                            if (var9) {
                                _fun100882_ip = 234;
                                continue _fun100882
                            }
                        case 229:
                            var5 = var8.id;
                        case 234:
                            var1.guild_id = var5;
                            var5 = _closure2_slot2;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun100882_ip = 274;
                                continue _fun100882
                            }
                        case 251:
                            var8 = _closure2_slot2;
                            var8 = var8.channel;
                            var9 = var7 == var8;
                            var5 = undefined;
                            if (var9) {
                                _fun100882_ip = 274;
                                continue _fun100882
                            }
                        case 269:
                            var5 = var8.id;
                        case 274:
                            var1.channel_id = var5;
                            var5 = _closure2_slot2;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun100882_ip = 300;
                                continue _fun100882
                            }
                        case 291:
                            var6 = _closure2_slot2;
                            var5 = var6.code;
                        case 300:
                            var1.invite_code = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var3 = var6.bind(var4)(var3);
                var6 = _closure1_slot3;
                var9 = var6.useEffect;
                var8 = function() { // Environment: var20
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 33;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getLocationMetadata;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var3 = new Array(0);
                var3 = var9.bind(var6)(var8, var3);
                var3 = 34;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = _closure1_slot9;
                var3 = var3.hasLoadedExperiments;
                var3 = var5.bind(var4)(var3);
                var5 = var6.useEffect;
                var3 = function() { // Environment: var20
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var5 = var6.useEffect;
                var3 = function() { // Environment: var20
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                if (!var2) {
                    _fun100875_ip = 444;
                    continue _fun100875
                }
            case 438:
                if (var1) {
                    _fun100875_ip = 944;
                    continue _fun100875
                }
            case 444:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var1 = 36;
                var1 = var23[var1];
                var11 = var22.bind(var4)(var1);
                var3 = _closure1_slot21;
                var1 = 37;
                var1 = var23[var1];
                var1 = var22.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var5 = 'darker';
                var1.theme = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var12.container;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var15 = 38;
                var15 = var23[var15];
                var15 = var22.bind(var4)(var15);
                var15 = var15.NAV_BAR_HEIGHT;
                var15 = var16 + var15;
                var9.paddingTop = var15;
                var9.paddingBottom = var10;
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot21;
                var9 = _closure1_slot6;
                var8 = {};
                var15 = var12.background;
                var8.style = var15;
                var8.source = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var11 = _closure1_slot21;
                var10 = _closure1_slot30;
                var9 = {};
                var9.invite = var14;
                var9.guildTemplate = var13;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot21;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var12.buttonContainer;
                var9.style = var12;
                var14 = _closure1_slot22;
                var12 = 39;
                var12 = var23[var12];
                var12 = var22.bind(var4)(var12);
                var13 = var12.ButtonGroup;
                var12 = {};
                var18 = _closure1_slot21;
                var16 = 40;
                var15 = var23[var16];
                var15 = var22.bind(var4)(var15);
                var17 = var15.Button;
                var15 = {
                    'size': 'lg',
                    'variant': 'primary-overlay'
                };
                var19 = function() {
                    _fun100886: for (var _fun100886_ip = 0;;) switch (_fun100886_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun100886_ip = 108;
                                continue _fun100886
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 35;
                            var2 = var5[var2];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var2);
                            var3 = var6.getNextAuthState;
                            var2 = _closure1_slot17;
                            var2 = var2.WELCOME;
                            var6 = var3.bind(var6)(var2);
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var6);
                            var3 = _closure1_slot1;
                            var2 = 31;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.track;
                            var2 = _closure1_slot15;
                            var2 = var2.REGISTER_VIEWED;
                            var2 = var3.bind(var4)(var2);
                            _fun100886_ip = 142;
                            continue _fun100886;
                        case 108:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var0 = _closure1_slot17;
                            var1 = var0.AGE_GATE_UNDERAGE;
                            var0 = {};
                            var4 = true;
                            var0.fromRegister = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 142:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15.onPress = var19;
                var19 = 16;
                var21 = var23[var19];
                var21 = var22.bind(var4)(var21);
                var25 = var21.intl;
                var24 = var25.string;
                var21 = var23[var19];
                var21 = var22.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.pV8xeR;
                var21 = var24.bind(var25)(var21);
                var15.text = var21;
                var17 = var18.bind(var4)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var18 = _closure1_slot21;
                var16 = var23[var16];
                var16 = var22.bind(var4)(var16);
                var17 = var16.Button;
                var16 = {
                    'size': 'lg',
                    'variant': 'experimental_welcome-secondary'
                };
                var20 = function() {
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var0 = _closure1_slot17;
                    var0 = var0.LOGIN;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 31;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot15;
                    var2 = var1.LOGIN_VIEWED;
                    var1 = {};
                    var5 = 'welcome';
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var16.onPress = var20;
                var20 = var23[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.dKhVQN;
                var19 = var20.bind(var21)(var19);
                var16.text = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var9 = _closure1_slot27;
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 944:
                var0 = _closure1_slot26;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13110, 1590, 6621, 9671, 1628, 3320, 9005, 660, 6583, 3332, 33, 1297, 671, 9675, 1234, 44, 5512, 3237, 1295, 12128, 10332, 3938, 13111, 9570, 1469, 1568, 566, 4109, 4370, 795, 587, 4563, 4904, 13106, 13115, 3161, 4753, 6532, 4090, 2]);