// modules/oauth2/native/ApplicationEducation.tsx
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
        _fun48012: for (var _fun48012_ip = 0;;) switch (_fun48012_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.iconComponent;
                var8 = var0.text;
                var0 = _closure1_slot8;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.entry;
                var0.style = var4;
                var6 = null;
                var4 = var6 != var7;
                if (!var4) {
                    _fun48012_ip = 73;
                    continue _fun48012
                }
            case 56:
                var4 = {};
                var10 = var9.entryIcon;
                var4.style = var10;
                var6 = var7.bind(var3)(var4);
            case 73:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 13;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var10 = 'text-md/normal';
                var5.variant = var10;
                var9 = var9.entryText;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_FRIENDS;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.applicationEducation = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 12
    };
    var3.entry = var8;
    var8 = {};
    var8.flex = var9;
    var3.entryText = var8;
    var8 = {
        'width': 20,
        'height': 20
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var8.tintColor = var9;
    var3.entryIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/ApplicationEducation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48013: for (var _fun48013_ip = 0;;) switch (_fun48013_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.application;
                var2 = var0.accountScopes;
                var0 = _closure1_slot8;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var11 = new Array(0);
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 6;
                var1 = var0[var1];
                var1 = var3.bind(var4)(var1);
                var9 = var1.bind(var4)(var7);
                var1 = var2.includes;
                var3 = _closure1_slot0;
                var5 = 7;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var0 = var0.OAuth2Scopes;
                var0 = var0.SDK_SOCIAL_LAYER;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun48013_ip = 609;
                    continue _fun48013
                }
            case 100:
                var1 = var2.includes;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var0 = var0.OAuth2Scopes;
                var0 = var0.SDK_SOCIAL_LAYER_PRESENCE;
                var0 = var1.bind(var2)(var0);
                var13 = undefined;
                if (!var0) {
                    _fun48013_ip = 1187;
                    continue _fun48013
                }
            case 147:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var16 = 8;
                var0 = var1[var16];
                var0 = var2.bind(var4)(var0);
                var5 = var0.intl;
                if (var9) {
                    _fun48013_ip = 207;
                    continue _fun48013
                }
            case 175:
                var3 = var5.string;
                var0 = var1[var16];
                var0 = var2.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.ex4sMU;
                var0 = var3.bind(var5)(var0);
                _fun48013_ip = 250;
                continue _fun48013;
            case 207:
                var3 = var5.formatToPlainString;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["3Mau0y"];
                var1 = {};
                var10 = var7.name;
                var1.applicationName = var10;
                var0 = var3.bind(var5)(var2, var1);
            case 250:
                var5 = var11.push;
                var3 = {};
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 9;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.FriendsIcon;
                var3.iconComponent = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = var1[var16];
                var10 = var2.bind(var4)(var10);
                var14 = var10.intl;
                var12 = var14.formatToPlainString;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var2 = var1.t;
                if (var9) {
                    _fun48013_ip = 357;
                    continue _fun48013
                }
            case 332:
                var10 = var2.WNKzo9;
                var1 = {};
                var15 = _closure1_slot4;
                var1.maxFriends = var15;
                var1 = var12.bind(var14)(var10, var1);
                _fun48013_ip = 380;
                continue _fun48013;
            case 357:
                var10 = var2.z9peav;
                var2 = {};
                var15 = _closure1_slot4;
                var2.maxFriends = var15;
                var1 = var12.bind(var14)(var10, var2);
            case 380:
                var3.text = var1;
                var2 = {};
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 11;
                var1 = var12[var1];
                var1 = var10.bind(var4)(var1);
                var1 = var1.GameControllerIcon;
                var2.iconComponent = var1;
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = var1[var16];
                var12 = var10.bind(var4)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var1 = var1[var16];
                var1 = var10.bind(var4)(var1);
                var10 = var1.t;
                if (var9) {
                    _fun48013_ip = 474;
                    continue _fun48013
                }
            case 461:
                var1 = var10["feD3+i"];
                var1 = var12.bind(var14)(var1);
                _fun48013_ip = 485;
                continue _fun48013;
            case 474:
                var10 = var10["/bdaNN"];
                var1 = var12.bind(var14)(var10);
            case 485:
                var2.text = var1;
                var1 = {};
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var10 = var12.bind(var4)(var10);
                var10 = var10.SettingsIcon;
                var1.iconComponent = var10;
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = var10[var16];
                var14 = var12.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var10 = var10[var16];
                var10 = var12.bind(var4)(var10);
                var12 = var10.t;
                if (var9) {
                    _fun48013_ip = 579;
                    continue _fun48013
                }
            case 566:
                var10 = var12.YFFVM1;
                var10 = var14.bind(var15)(var10);
                _fun48013_ip = 590;
                continue _fun48013;
            case 579:
                var12 = var12.mSqazC;
                var10 = var14.bind(var15)(var12);
            case 590:
                var1.text = var10;
                var1 = var5.bind(var11)(var3, var2, var1);
                var13 = var0;
                _fun48013_ip = 1187;
                continue _fun48013;
            case 609:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var16 = 8;
                var0 = var1[var16];
                var0 = var2.bind(var4)(var0);
                var5 = var0.intl;
                if (var9) {
                    _fun48013_ip = 669;
                    continue _fun48013
                }
            case 637:
                var3 = var5.string;
                var0 = var1[var16];
                var0 = var2.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.ex4sMU;
                var0 = var3.bind(var5)(var0);
                _fun48013_ip = 712;
                continue _fun48013;
            case 669:
                var3 = var5.formatToPlainString;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["3Mau0y"];
                var1 = {};
                var7 = var7.name;
                var1.applicationName = var7;
                var0 = var3.bind(var5)(var2, var1);
            case 712:
                var7 = var11.push;
                var5 = {};
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.FriendsIcon;
                var5.iconComponent = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var16];
                var3 = var2.bind(var4)(var3);
                var12 = var3.intl;
                var10 = var12.formatToPlainString;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var2 = var1.t;
                if (var9) {
                    _fun48013_ip = 819;
                    continue _fun48013
                }
            case 794:
                var3 = var2.WNKzo9;
                var1 = {};
                var14 = _closure1_slot4;
                var1.maxFriends = var14;
                var1 = var10.bind(var12)(var3, var1);
                _fun48013_ip = 842;
                continue _fun48013;
            case 819:
                var3 = var2.z9peav;
                var2 = {};
                var14 = _closure1_slot4;
                var2.maxFriends = var14;
                var1 = var10.bind(var12)(var3, var2);
            case 842:
                var5.text = var1;
                var3 = {};
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ChatSmileIcon;
                var3.iconComponent = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = var1[var16];
                var10 = var2.bind(var4)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var2 = var1.t;
                if (var9) {
                    _fun48013_ip = 938;
                    continue _fun48013
                }
            case 923:
                var1 = var2.j7peBh;
                var1 = var10.bind(var12)(var1);
                _fun48013_ip = 951;
                continue _fun48013;
            case 938:
                var2 = var2.daY6xj;
                var1 = var10.bind(var12)(var2);
            case 951:
                var3.text = var1;
                var2 = {};
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 11;
                var1 = var12[var1];
                var1 = var10.bind(var4)(var1);
                var1 = var1.GameControllerIcon;
                var2.iconComponent = var1;
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = var1[var16];
                var12 = var10.bind(var4)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var1 = var1[var16];
                var1 = var10.bind(var4)(var1);
                var10 = var1.t;
                if (var9) {
                    _fun48013_ip = 1045;
                    continue _fun48013
                }
            case 1032:
                var1 = var10["feD3+i"];
                var1 = var12.bind(var14)(var1);
                _fun48013_ip = 1056;
                continue _fun48013;
            case 1045:
                var10 = var10["/bdaNN"];
                var1 = var12.bind(var14)(var10);
            case 1056:
                var2.text = var1;
                var1 = {};
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var10 = var12.bind(var4)(var10);
                var10 = var10.SettingsIcon;
                var1.iconComponent = var10;
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = var10[var16];
                var12 = var15.bind(var4)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var10 = var10[var16];
                var10 = var15.bind(var4)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun48013_ip = 1150;
                    continue _fun48013
                }
            case 1137:
                var9 = var10.YFFVM1;
                var9 = var12.bind(var14)(var9);
                _fun48013_ip = 1161;
                continue _fun48013;
            case 1150:
                var10 = var10.mSqazC;
                var9 = var12.bind(var14)(var10);
            case 1161:
                var1.text = var9;
                var21 = var11;
                var20 = var5;
                var19 = var3;
                var18 = var2;
                var17 = var1;
                var1 = var21[var7](var20, var19, var18, var17, var16);
                var13 = var0;
            case 1187:
                var1 = var11.length;
                var10 = null;
                var12 = 0;
                var0 = null;
                if (!(var12 !== var1)) {
                    _fun48013_ip = 1406;
                    continue _fun48013
                }
            case 1205:
                var3 = _closure1_slot6;
                var2 = _closure1_slot7;
                var1 = {};
                var7 = _closure1_slot3;
                var5 = {};
                var8 = var8.applicationEducation;
                var5.style = var8;
                var8 = var10 != var13;
                var9 = null;
                if (!var8) {
                    _fun48013_ip = 1307;
                    continue _fun48013
                }
            case 1240:
                var8 = var13.length;
                var8 = var8 > var12;
                var9 = null;
                if (!var8) {
                    _fun48013_ip = 1307;
                    continue _fun48013
                }
            case 1254:
                var12 = _closure1_slot5;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 13;
                var8 = var14[var8];
                var8 = var10.bind(var4)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var8.children = var13;
                var9 = var12.bind(var4)(var10, var8);
            case 1307:
                var8 = new Array(2);
                var8[0] = var9;
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var0 = arg0;
                    var1 = var0.iconComponent;
                    var0 = var0.text;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.iconComponent = var1;
                    var2.text = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var8[1] = var9;
                var5.children = var8;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 14;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.AuthorizeFormSeparator;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1406:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5369, 3339, 1234, 3149, 5371, 5331, 5373, 3941, 5375, 2]);