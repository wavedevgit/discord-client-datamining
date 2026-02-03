// uikit-native/modals/InviteError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun80834: for (var _fun80834_ip = 0;;) switch (_fun80834_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.invite;
                var2 = var1.onPressClose;
                var _closure2_slot0 = var2;
                var6 = var1.inviteError;
                var1 = _closure1_slot11;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var7 = var2.bind(var3)(var1);
                var4 = var7.isThemeDark;
                var2 = _closure1_slot1;
                var1 = 7;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var4.bind(var7)(var1);
                var7 = _closure1_slot2;
                if (var1) {
                    _fun80834_ip = 107;
                    continue _fun80834
                }
            case 98:
                var1 = 9;
                var1 = var7[var1];
                _fun80834_ip = 114;
                continue _fun80834;
            case 107:
                var4 = 8;
                var1 = var7[var4];
            case 114:
                var9 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.getDescriptiveInviteError;
                var14 = null;
                var7 = var14 == var6;
                var1 = undefined;
                if (var7) {
                    _fun80834_ip = 161;
                    continue _fun80834
                }
            case 156:
                var1 = var6.code;
            case 161:
                var15 = var2.bind(var4)(var1);
                var1 = var0.state;
                var0 = _closure1_slot7;
                var0 = var0.BANNED;
                if (!(var1 !== var0)) {
                    _fun80834_ip = 262;
                    continue _fun80834
                }
            case 185:
                var0 = var14 == var15;
                var10 = undefined;
                if (var0) {
                    _fun80834_ip = 199;
                    continue _fun80834
                }
            case 194:
                var10 = var15.description;
            case 199:
                if (!(var14 == var10)) {
                    _fun80834_ip = 260;
                    continue _fun80834
                }
            case 203:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.FWkU6P;
                var10 = var1.bind(var2)(var0);
            case 260:
                _fun80834_ip = 319;
                continue _fun80834;
            case 262:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["GzD/aa"];
                var10 = var1.bind(var2)(var0);
            case 319:
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = _closure1_slot8;
                var6 = _closure1_slot3;
                var4 = {};
                var12 = var11.expiredImage;
                var4.style = var12;
                var4.source = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var12 = _closure1_slot8;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 12;
                var7 = var7[var6];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var11.expiredTitle;
                var7.style = var13;
                var16 = var14 == var15;
                var13 = undefined;
                if (var16) {
                    _fun80834_ip = 436;
                    continue _fun80834
                }
            case 431:
                var13 = var15.title;
            case 436:
                if (!(var14 == var13)) {
                    _fun80834_ip = 497;
                    continue _fun80834
                }
            case 440:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 11;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.u9zxnX;
                var13 = var15.bind(var16)(var14);
            case 497:
                var7.children = var13;
                var7 = var12.bind(var3)(var9, var7);
                var4[1] = var7;
                var9 = _closure1_slot8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var11.expiredBody;
                var6.style = var11;
                var6.children = var10;
                var6 = var9.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot8;
                var5 = 13;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {
                    'variant': 'primary',
                    'size': 'lg'
                };
                var9 = 11;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.wcqOoF;
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var8 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun80836: for (var _fun80836_ip = 0;;) switch (_fun80836_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.invite;
                var1 = var1.onPressClose;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot11;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var5 = var0.guild;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun80836_ip = 662;
                    continue _fun80836
                }
            case 48:
                var19 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 14;
                var1 = var14[var1];
                var3 = var19.bind(var4)(var1);
                var2 = var3.getGuildIconURL;
                var1 = {};
                var7 = var5.id;
                var1.id = var7;
                var5 = var5.icon;
                var1.icon = var5;
                var5 = 64;
                var1.size = var5;
                var5 = false;
                var1.canAnimate = var5;
                var13 = var2.bind(var3)(var1);
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = {};
                var7 = _closure1_slot4;
                var5 = {};
                var8 = var12.disabledView;
                var5.style = var8;
                var11 = _closure1_slot8;
                var8 = 15;
                var8 = var14[var8];
                var10 = var19.bind(var4)(var8);
                var8 = {};
                var15 = var12.disabledPauseIcon;
                var8.style = var15;
                var15 = 16;
                var15 = var14[var15];
                var15 = var19.bind(var4)(var15);
                var8.source = var15;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var15 = _closure1_slot8;
                var16 = 17;
                var10 = var14[var16];
                var11 = var19.bind(var4)(var10);
                var10 = {};
                var17 = var12.guildIcon;
                var10.style = var17;
                var10.icon = var13;
                var13 = _closure1_slot0;
                var16 = var14[var16];
                var16 = var13.bind(var4)(var16);
                var16 = var16.GuildIconSizes;
                var16 = var16.XLARGE;
                var10.size = var16;
                var10 = var15.bind(var4)(var11, var10);
                var8[1] = var10;
                var5.children = var8;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(4);
                var5[0] = var7;
                var11 = _closure1_slot8;
                var7 = 12;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-xl/semibold',
                    'color': 'text-feedback-critical'
                };
                var10 = var12.disabledTitle;
                var7.style = var10;
                var10 = 11;
                var15 = var14[var10];
                var15 = var13.bind(var4)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var14[var10];
                var15 = var13.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.jlLX2Z;
                var15 = var16.bind(var17)(var15);
                var7.children = var15;
                var7 = var11.bind(var4)(var8, var7);
                var5[1] = var7;
                var11 = _closure1_slot8;
                var7 = 18;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.TextWithIOSLinkWorkaround;
                var7 = {
                    'style': null,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var12 = var12.disabledBody;
                var7.style = var12;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var17 = var12.intl;
                var16 = var17.format;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var12 = var12.t;
                var15 = var12.RXSeLl;
                var12 = {};
                var18 = 19;
                var18 = var14[var18];
                var20 = var19.bind(var4)(var18);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot6;
                var18 = var18.INVITE_DISABLED;
                var18 = var19.bind(var20)(var18);
                var12.articleLink = var18;
                var12 = var16.bind(var17)(var15, var12);
                var7.children = var12;
                var7 = var11.bind(var4)(var8, var7);
                var5[2] = var7;
                var8 = _closure1_slot8;
                var6 = 13;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var7 = var6.Button;
                var6 = {
                    'variant': 'primary',
                    'size': 'lg'
                };
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["yD/zkn"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var6.onPress = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 662:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot5 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot6 = var6;
    var3 = var3.InviteStates;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 32,
        'marginBottom': 32
    };
    var3.expiredImage = var8;
    var8 = {
        'marginBottom': 8,
        'backgroundColor': 'transparent',
        'textAlign': 'center'
    };
    var3.expiredTitle = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'marginBottom': 24
    };
    var3.expiredBody = var8;
    var8 = {
        'flex': 1,
        'width': '100%',
        'flexGrow': 0,
        'paddingHorizontal': 8,
        'marginVertical': 8
    };
    var3.button = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.disabledView = var8;
    var8 = {
        'position': 'absolute',
        'alignSelf': 'center',
        'tintColor': null,
        'width': 42,
        'height': 42
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.tintColor = var11;
    var3.disabledPauseIcon = var8;
    var8 = {
        'borderRadius': null,
        'opacity': 0.2,
        'zIndex': 4294966297
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.guildIcon = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.disabledTitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 16
    };
    var3.disabledBody = var8;
    var8 = {
        'flex': 1,
        'width': '100%',
        'marginVertical': 0
    };
    var3.disabledButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/InviteError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80838: for (var _fun80838_ip = 0;;) switch (_fun80838_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.inviteError;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun80838_ip = 97;
                    continue _fun80838
                }
            case 15:
                var3 = var0.code;
                var0 = _closure1_slot5;
                var0 = var0.INVITES_DISABLED;
                if (!(var3 !== var0)) {
                    _fun80838_ip = 67;
                    continue _fun80838
                }
            case 37:
                var5 = _closure1_slot8;
                var4 = _closure1_slot12;
                var3 = {};
                var7 = var3;
                var6 = var1;
                var0 = copyDataProperties(var7, var6);
                var0 = undefined;
                var0 = var5.bind(var0)(var4, var3);
                _fun80838_ip = 95;
                continue _fun80838;
            case 67:
                var5 = _closure1_slot8;
                var4 = _closure1_slot13;
                var3 = {};
                var7 = var3;
                var6 = var1;
                var2 = copyDataProperties(var7, var6);
                var2 = undefined;
                var0 = var5.bind(var2)(var4, var3);
            case 95:
                _fun80838_ip = 128;
                continue _fun80838;
            case 97:
                var4 = _closure1_slot8;
                var3 = _closure1_slot12;
                var2 = {};
                var7 = var2;
                var6 = var1;
                var1 = copyDataProperties(var7, var6);
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 128:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3206, 3246, 10286, 10287, 10288, 1234, 3941, 4084, 1417, 4086, 10289, 7393, 5332, 1684, 2]);