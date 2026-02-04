// modules/share/native/ShareEmbed.tsx
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
    var13 = 0;
    var6 = var5[var13];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'height': 80,
        'backgroundColor': null,
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var12 = 80;
    var10 = 4;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var8.borderColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var8.borderRadius = var14;
    var3.container = var8;
    var8 = {};
    var8.borderWidth = var13;
    var3.containerRevamp = var8;
    var8 = {};
    var8.width = var12;
    var3.thumbnail = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'paddingLeft': 12,
        'paddingRight': 24
    };
    var3.contentContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 3
    };
    var3.authorView = var8;
    var8 = {
        'height': 16,
        'width': 16,
        'borderRadius': null,
        'marginRight': 4
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.authorThumbnail = var8;
    var8 = {};
    var8.flex = var9;
    var3.loadingSpinner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/ShareEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96478: for (var _fun96478_ip = 0;;) switch (_fun96478_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.embed;
                var _closure2_slot0 = var0;
                var6 = var2.isLoadingEmbed;
                var _closure2_slot1 = var6;
                var11 = var2.isRevamp;
                var2 = _closure1_slot10;
                var4 = undefined;
                var13 = var2.bind(var4)();
                var _closure2_slot2 = var13;
                var7 = _closure1_slot3;
                var5 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = function() { // Environment: var1
                    _fun96479: for (var _fun96479_ip = 0;;) switch (_fun96479_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun96479_ip = 72;
                                continue _fun96479
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var4 = var1.thumbnail;
                            var5 = var0 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun96479_ip = 37;
                                continue _fun96479
                            }
                        case 32:
                            var1 = var4.url;
                        case 37:
                            if (!(var0 == var1)) {
                                _fun96479_ip = 68;
                                continue _fun96479
                            }
                        case 41:
                            var3 = _closure2_slot0;
                            var3 = var3.image;
                            var4 = var0 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun96479_ip = 65;
                                continue _fun96479
                            }
                        case 60:
                            var2 = var3.url;
                        case 65:
                            var1 = var2;
                        case 68:
                            if (!(var0 == var1)) {
                                _fun96479_ip = 76;
                                continue _fun96479
                            }
                        case 72:
                            var0 = undefined;
                            return var0;
                        case 76:
                            var0 = {};
                            var0.uri = var1;
                            return var0;
                    }
                };
                var19 = var5.bind(var7)(var2, var3);
                var5 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var13;
                var2 = function() { // Environment: var1
                    _fun96480: for (var _fun96480_ip = 0;;) switch (_fun96480_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!var1) {
                                _fun96480_ip = 90;
                                continue _fun96480
                            }
                        case 12:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.loadingSpinner;
                            var2.style = var5;
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.unsafe_rawColors;
                            var5 = var5.BRAND_500;
                            var2.color = var5;
                            var5 = 'large';
                            var2.size = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 90:
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var2, var3);
                var8 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var0;
                var3[1] = var13;
                var2 = function() { // Environment: var1
                    _fun96481: for (var _fun96481_ip = 0;;) switch (_fun96481_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 == var1;
                            var4 = undefined;
                            var9 = undefined;
                            if (var1) {
                                _fun96481_ip = 30;
                                continue _fun96481
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var9 = var1.author;
                        case 30:
                            if (!(var0 != var9)) {
                                _fun96481_ip = 217;
                                continue _fun96481
                            }
                        case 37:
                            var12 = var9.proxy_icon_url;
                            if (!(var0 == var12)) {
                                _fun96481_ip = 53;
                                continue _fun96481
                            }
                        case 47:
                            var12 = var9.icon_url;
                        case 53:
                            var3 = _closure1_slot8;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.authorView;
                            var1.style = var5;
                            var7 = var0 != var12;
                            if (!var7) {
                                _fun96481_ip = 135;
                                continue _fun96481
                            }
                        case 87:
                            var10 = _closure1_slot7;
                            var8 = _closure1_slot5;
                            var5 = {};
                            var11 = _closure2_slot2;
                            var11 = var11.authorThumbnail;
                            var5.style = var11;
                            var11 = {};
                            var11.uri = var12;
                            var5.source = var11;
                            var11 = 'cover';
                            var5.resizeMode = var11;
                            var7 = var10.bind(var4)(var8, var5);
                        case 135:
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot7;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 5;
                            var6 = var10[var6];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-xs/semibold',
                                'color': 'mobile-text-heading-primary',
                                'ellipsizeMode': 'tail',
                                'lineClamp': 1
                            };
                            var9 = var9.name;
                            var6.children = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 217:
                            return var0;
                    }
                };
                var17 = var8.bind(var7)(var2, var3);
                var8 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var0;
                var2 = function() { // Environment: var1
                    _fun96482: for (var _fun96482_ip = 0;;) switch (_fun96482_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var4 = undefined;
                            var5 = undefined;
                            if (var2) {
                                _fun96482_ip = 29;
                                continue _fun96482
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var5 = var1.title;
                        case 29:
                            var1 = var0 != var5;
                            var0 = null;
                            if (!var1) {
                                _fun96482_ip = 110;
                                continue _fun96482
                            }
                        case 38:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 5;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'style': null,
                                'variant': 'text-xs/semibold',
                                'color': 'mobile-text-heading-primary',
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var6 = {};
                            var7 = 1;
                            var6.marginVertical = var7;
                            var1.style = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 110:
                            return var0;
                    }
                };
                var16 = var8.bind(var7)(var2, var3);
                var _closure2_slot3 = var16;
                var8 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var0;
                var3[1] = var16;
                var2 = function() { // Environment: var1
                    _fun96483: for (var _fun96483_ip = 0;;) switch (_fun96483_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            var1 = var2 == var1;
                            var4 = undefined;
                            var5 = undefined;
                            if (var1) {
                                _fun96483_ip = 29;
                                continue _fun96483
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var5 = var1.description;
                        case 29:
                            var0 = _closure2_slot3;
                            var1 = var2 == var0;
                            var0 = null;
                            if (!var1) {
                                _fun96483_ip = 123;
                                continue _fun96483
                            }
                        case 42:
                            var1 = var2 != var5;
                            var0 = null;
                            if (!var1) {
                                _fun96483_ip = 123;
                                continue _fun96483
                            }
                        case 51:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 5;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'style': null,
                                'variant': 'text-xs/medium',
                                'color': 'text-default',
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var6 = {};
                            var7 = 1;
                            var6.marginVertical = var7;
                            var1.style = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 123:
                            return var0;
                    }
                };
                var15 = var8.bind(var7)(var2, var3);
                var3 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var1
                    _fun96484: for (var _fun96484_ip = 0;;) switch (_fun96484_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var4 = undefined;
                            var5 = undefined;
                            if (var2) {
                                _fun96484_ip = 29;
                                continue _fun96484
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var5 = var1.url;
                        case 29:
                            var1 = var0 != var5;
                            var0 = null;
                            if (!var1) {
                                _fun96484_ip = 110;
                                continue _fun96484
                            }
                        case 38:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 5;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'style': null,
                                'variant': 'text-xs/medium',
                                'color': 'text-link',
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var6 = {};
                            var7 = 1;
                            var6.marginVertical = var7;
                            var1.style = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 110:
                            return var0;
                    }
                };
                var14 = var3.bind(var7)(var1, var2);
                var9 = null;
                if (!(var9 == var0)) {
                    _fun96478_ip = 238;
                    continue _fun96478
                }
            case 230:
                var0 = null;
                if (!var6) {
                    _fun96478_ip = 423;
                    continue _fun96478
                }
            case 238:
                var3 = _closure1_slot7;
                var2 = _closure1_slot6;
                var1 = {};
                var8 = var13.container;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = undefined;
                if (!var11) {
                    _fun96478_ip = 272;
                    continue _fun96478
                }
            case 266:
                var8 = var13.containerRevamp;
            case 272:
                var7[1] = var8;
                var1.style = var7;
                if (var6) {
                    _fun96478_ip = 413;
                    continue _fun96478
                }
            case 286:
                var8 = _closure1_slot8;
                var7 = _closure1_slot9;
                var6 = {};
                var11 = var9 != var19;
                if (!var11) {
                    _fun96478_ip = 341;
                    continue _fun96478
                }
            case 303:
                var18 = _closure1_slot7;
                var12 = _closure1_slot5;
                var9 = {};
                var20 = var13.thumbnail;
                var9.style = var20;
                var9.source = var19;
                var19 = 'cover';
                var9.resizeMode = var19;
                var11 = var18.bind(var4)(var12, var9);
            case 341:
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var13.contentContainer;
                var10.style = var13;
                var13 = new Array(4);
                var13[0] = var17;
                var13[1] = var16;
                var13[2] = var15;
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var4)(var7, var6);
            case 413:
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 423:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3941, 2]);