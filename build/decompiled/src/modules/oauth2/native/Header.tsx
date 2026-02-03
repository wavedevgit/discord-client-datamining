// modules/oauth2/native/Header.tsx
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserFlags;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingBottom': 16,
        'marginHorizontal': 16,
        'borderTopLeftRadius': null,
        'borderTopRightRadius': null,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderTopLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderTopRightRadius = var11;
    var3.header = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.applicationNameWrapper = var8;
    var8 = {};
    var11 = 8;
    var8.marginLeft = var11;
    var3.logoutLink = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginBottom': 24
    };
    var3.headerIcons = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginHorizontal': 24
    };
    var3.ellipseGroup = var8;
    var8 = {
        'width': 4,
        'height': 4,
        'marginHorizontal': 2,
        'backgroundColor': null,
        'opacity': 0.1,
        'borderRadius': 2
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.backgroundColor = var9;
    var3.ellipse = var8;
    var8 = {
        'marginTop': 4,
        'marginLeft': 8
    };
    var3.botTag = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/Header.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48286: for (var _fun48286_ip = 0;;) switch (_fun48286_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var12 = var0.application;
                var8 = var0.accountScopes;
                var15 = var0.bot;
                var0 = _closure1_slot7;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 6;
                var0 = var0[var4];
                var5 = var1.bind(var3)(var0);
                var1 = var5.getApplicationIconSource;
                var0 = {};
                var6 = var12.id;
                var0.id = var6;
                var6 = var12.icon;
                var0.icon = var6;
                var7 = var1.bind(var5)(var0);
                var16 = null;
                var0 = var16 != var2;
                var18 = undefined;
                if (!var0) {
                    _fun48286_ip = 128;
                    continue _fun48286
                }
            case 100:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getUserAvatarSource;
                var18 = var0.bind(var1)(var2);
            case 128:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var14.header;
                var0.style = var4;
                var4 = {};
                var5 = var14.headerIcons;
                var4.style = var5;
                var11 = _closure1_slot5;
                var13 = _closure1_slot1;
                var6 = _closure1_slot2;
                var17 = 7;
                var5 = var6[var17];
                var10 = var13.bind(var3)(var5);
                var5 = {};
                var5.source = var7;
                var7 = _closure1_slot0;
                var19 = var6[var17];
                var19 = var7.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XLARGE;
                var5.size = var19;
                var10 = var11.bind(var3)(var10, var5);
                var5 = new Array(3);
                var5[0] = var10;
                var10 = {};
                var19 = var14.ellipseGroup;
                var10.style = var19;
                var19 = {};
                var20 = var14.ellipse;
                var19.style = var20;
                var20 = var11.bind(var3)(var1, var19);
                var19 = new Array(3);
                var19[0] = var20;
                var20 = {};
                var21 = var14.ellipse;
                var20.style = var21;
                var20 = var11.bind(var3)(var1, var20);
                var19[1] = var20;
                var20 = {};
                var21 = var14.ellipse;
                var20.style = var21;
                var20 = var11.bind(var3)(var1, var20);
                var19[2] = var20;
                var10.children = var19;
                var10 = var2.bind(var3)(var1, var10);
                var5[1] = var10;
                var10 = var6[var17];
                var13 = var13.bind(var3)(var10);
                var10 = {};
                var10.source = var18;
                var17 = var6[var17];
                var17 = var7.bind(var3)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.XLARGE;
                var10.size = var17;
                var10 = var11.bind(var3)(var13, var10);
                var5[2] = var10;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = {};
                var10 = var14.applicationNameWrapper;
                var5.style = var10;
                var10 = 8;
                var6 = var6[var10];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var12.name;
                var6.children = var12;
                var7 = var11.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var11 = var16 != var15;
                var7 = null;
                if (!var11) {
                    _fun48286_ip = 579;
                    continue _fun48286
                }
            case 471:
                var13 = _closure1_slot5;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var11 = 9;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var14 = var14.botTag;
                var11.style = var14;
                var14 = var15.public_flags;
                var14 = var16 != var14;
                if (!var14) {
                    _fun48286_ip = 568;
                    continue _fun48286
                }
            case 520:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = 10;
                var16 = var18[var16];
                var18 = var17.bind(var3)(var16);
                var17 = var18.hasFlag;
                var16 = var15.public_flags;
                var15 = _closure1_slot4;
                var15 = var15.VERIFIED_BOT;
                var14 = var17.bind(var18)(var16, var15);
            case 568:
                var11.verified = var14;
                var7 = var13.bind(var3)(var12, var11);
            case 579:
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'heading-md/normal',
                    'color': 'text-default'
                };
                var10 = var8.length;
                var8 = 0;
                if (!(!(var10 > var8))) {
                    _fun48286_ip = 707;
                    continue _fun48286
                }
            case 648:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 11;
                var10 = var13[var8];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["X+Fdpo"];
                var8 = var10.bind(var11)(var8);
                _fun48286_ip = 764;
                continue _fun48286;
            case 707:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 11;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.jFbDnJ;
                var8 = var10.bind(var11)(var9);
            case 764:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1417, 5447, 3932, 5762, 1384, 1234, 2]);