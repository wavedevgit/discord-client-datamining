// modules/oauth2/native/AuthorizeScopes.tsx
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
        _fun48014: for (var _fun48014_ip = 0;;) switch (_fun48014_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.text;
                var13 = var0.error;
                var16 = var0.isFake;
                var0 = _closure1_slot6;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var8.scopeContainer;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var8.iconWrapper;
                var4.style = var7;
                var14 = _closure1_slot4;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                if (var16) {
                    _fun48014_ip = 154;
                    continue _fun48014
                }
            case 87:
                var7 = 6;
                var7 = var18[var7];
                var7 = var11.bind(var3)(var7);
                var9 = var7.CircleCheckIcon;
                var7 = {};
                var17 = _closure1_slot1;
                var15 = 4;
                var15 = var18[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.TEXT_MUTED;
                var7.color = var15;
                var15 = 'refresh_sm';
                var7.size = var15;
                var7 = var14.bind(var3)(var9, var7);
                _fun48014_ip = 229;
                continue _fun48014;
            case 154:
                var9 = 5;
                var9 = var18[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.CircleXIcon;
                var9 = {};
                var15 = var8.fakeScopeIcon;
                var9.style = var15;
                var17 = _closure1_slot1;
                var15 = 4;
                var15 = var18[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.TEXT_MUTED;
                var9.color = var15;
                var15 = 'refresh_sm';
                var9.size = var15;
                var7 = var14.bind(var3)(var11, var9);
            case 229:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var8.scope;
                var5.style = var8;
                var11 = _closure1_slot4;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var14 = 7;
                var8 = var8[var14];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                var15 = 'text-md/normal';
                var8.variant = var15;
                var15 = undefined;
                if (!var16) {
                    _fun48014_ip = 319;
                    continue _fun48014
                }
            case 313:
                var15 = 'text-muted';
            case 319:
                var8.color = var15;
                var8.children = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                var11 = var9 != var13;
                if (!var11) {
                    _fun48014_ip = 398;
                    continue _fun48014
                }
            case 350:
                var12 = _closure1_slot4;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var14 = 'text-xs/normal';
                var10.variant = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 398:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.scopesContainer = var8;
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.scopes = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.scopeContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'center'
    };
    var3.scope = var8;
    var8 = {
        'fontSize': 12,
        'lineHeight': 16
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var3.error = var8;
    var8 = {
        'marginRight': 12,
        'width': 20,
        'height': 20
    };
    var3.iconWrapper = var8;
    var8 = {};
    var9 = 0.6;
    var8.opacity = var9;
    var3.fakeScopeIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/AuthorizeScopes.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48015: for (var _fun48015_ip = 0;;) switch (_fun48015_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.application;
                var13 = var0.accountScopes;
                var _closure2_slot0 = var13;
                var2 = var0.requestedScopes;
                var1 = var0.integrationType;
                var3 = var0.errors;
                var _closure2_slot1 = var3;
                var4 = var0.isTrustedName;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun48015_ip = 56;
                    continue _fun48015
                }
            case 54:
                var4 = false;
            case 56:
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var5 = var5.bind(var3)(var0);
                var0 = function() { // Environment: var8
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 9;
                    var1 = var7[var0];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FAKE_SCOPES;
                    var4 = global;
                    var3 = var4.Math;
                    var2 = var3.floor;
                    var8 = var4.Math;
                    var4 = var8.random;
                    var4 = var4.bind(var8)();
                    var0 = var7[var0];
                    var0 = var6.bind(var5)(var0);
                    var0 = var0.FAKE_SCOPES;
                    var0 = var0.length;
                    var0 = var4 * var0;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1[var0];
                    return var0;
                };
                var0 = var5.bind(var3)(var0);
                var6 = var13.length;
                var5 = 0;
                if (!(var5 !== var6)) {
                    _fun48015_ip = 548;
                    continue _fun48015
                }
            case 111:
                var12 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var19 = 10;
                var0 = var0[var19];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                if (var4) {
                    _fun48015_ip = 153;
                    continue _fun48015
                }
            case 143:
                var16 = var0["1Hz+Sl"];
                _fun48015_ip = 161;
                continue _fun48015;
            case 153:
                var16 = var0.PZpY9c;
            case 161:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.ApplicationIntegrationType;
                var0 = var0.USER_INSTALL;
                var10 = var1 === var0;
                if (!var10) {
                    _fun48015_ip = 242;
                    continue _fun48015
                }
            case 200:
                var1 = var2.includes;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.OAuth2Scopes;
                var0 = var0.APPLICATIONS_COMMANDS;
                var10 = var1.bind(var2)(var0);
            case 242:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.scopesContainer;
                var0.style = var4;
                var6 = _closure1_slot4;
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'heading-sm/normal',
                    'color': 'text-default'
                };
                var7 = var7[var19];
                var7 = var14.bind(var3)(var7);
                var15 = var7.intl;
                var14 = var15.format;
                var7 = {};
                var17 = var17.name;
                var7.application = var17;
                var7 = var14.bind(var15)(var16, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var11.scopes;
                var5.style = var11;
                var11 = var13.map;
                var8 = function(arg0) { // Environment: var8
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getScopeNames;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun48018: for (var _fun48018_ip = 0;;) switch (_fun48018_ip) {
                            case 0:
                                var8 = arg1;
                                var4 = _closure1_slot4;
                                var3 = _closure1_slot7;
                                var2 = {};
                                var0 = arg0;
                                var2.text = var0;
                                var1 = undefined;
                                var7 = 0;
                                var0 = undefined;
                                if (!(var7 === var8)) {
                                    _fun48018_ip = 82;
                                    continue _fun48018
                                }
                            case 33:
                                var5 = _closure2_slot1;
                                var9 = null;
                                var10 = var9 == var5;
                                var5 = undefined;
                                if (var10) {
                                    _fun48018_ip = 79;
                                    continue _fun48018
                                }
                            case 51:
                                var10 = _closure2_slot1;
                                var6 = _closure3_slot0;
                                var6 = var10[var6];
                                var9 = var9 == var6;
                                var5 = undefined;
                                if (var9) {
                                    _fun48018_ip = 79;
                                    continue _fun48018
                                }
                            case 75:
                                var5 = var6[var7];
                            case 79:
                                var0 = var5;
                            case 82:
                                var2.error = var0;
                                var7 = _closure3_slot0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var6 = var0.concat;
                                var5 = '';
                                var0 = '-';
                                var0 = var6.bind(var5)(var7, var0, var8);
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var13)(var8);
                var8 = var11.flat;
                var11 = var8.bind(var11)();
                var8 = new Array(3);
                var8[0] = var11;
                if (!var10) {
                    _fun48015_ip = 487;
                    continue _fun48015
                }
            case 415:
                var14 = _closure1_slot4;
                var13 = _closure1_slot7;
                var11 = {};
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.Ls2XRq;
                var15 = var16.bind(var17)(var15);
                var11.text = var15;
                var10 = var14.bind(var3)(var13, var11);
            case 487:
                var8[1] = var10;
                var11 = _closure1_slot4;
                var10 = _closure1_slot7;
                var9 = {};
                var9.text = var12;
                var12 = true;
                var9.isFake = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 548:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5373, 3271, 3941, 4928, 3338, 1234, 5350, 3339, 2]);