// modules/safety_hub/native/SafetyHubAccountStanding.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
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
    var3 = var3.SafetyHubLinks;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AccountStandingState;
    var8 = var7.ALL_GOOD;
    var7 = {};
    var9 = '0%';
    var7.left = var9;
    var3[var8] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AccountStandingState;
    var9 = var7.LIMITED;
    var7 = {};
    var8 = '25%';
    var7.left = var8;
    var12 = {};
    var8 = 8;
    var11 = var5[var8];
    var11 = var4.bind(var0)(var11);
    var11 = var11.SUBWAY_MARKER_WIDTH;
    var13 = -0.5;
    var11 = var13 * var11;
    var12.translateX = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var7.transform = var11;
    var3[var9] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AccountStandingState;
    var9 = var7.VERY_LIMITED;
    var7 = {};
    var11 = '50%';
    var7.left = var11;
    var12 = {};
    var11 = var5[var8];
    var11 = var4.bind(var0)(var11);
    var11 = var11.SUBWAY_MARKER_WIDTH;
    var11 = var13 * var11;
    var12.translateX = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var7.transform = var11;
    var3[var9] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AccountStandingState;
    var9 = var7.AT_RISK;
    var7 = {};
    var11 = '75%';
    var7.left = var11;
    var12 = {};
    var11 = var5[var8];
    var11 = var4.bind(var0)(var11);
    var11 = var11.SUBWAY_MARKER_WIDTH;
    var11 = var13 * var11;
    var12.translateX = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var7.transform = var11;
    var3[var9] = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AccountStandingState;
    var7 = var6.SUSPENDED;
    var6 = {};
    var9 = '100%';
    var6.left = var9;
    var9 = {};
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.SUBWAY_MARKER_WIDTH;
    var8 = -var8;
    var9.translateX = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var6.transform = var8;
    var3[var7] = var6;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'rowGap': 12,
        'padding': 24,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 10;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {
        'position': 'relative',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.avatarBackground = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE;
    var8.color = var11;
    var3.good = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_WARNING;
    var8.color = var11;
    var3.limited = var8;
    var8 = {};
    var11 = '#FF7A00';
    var8.color = var11;
    var3.veryLimited = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_FEEDBACK_CRITICAL;
    var8.color = var11;
    var3.atRisk = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_FEEDBACK_CRITICAL;
    var8.color = var11;
    var3.suspended = var8;
    var8 = {
        'display': 'flex',
        'rowGap': 40,
        'width': '100%'
    };
    var3.body = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.rowGap = var11;
    var3.bodyText = var8;
    var8 = {
        'position': 'relative',
        'left': 0,
        'right': 0,
        'marginBottom': 18
    };
    var3.health = var8;
    var8 = {
        'height': 3,
        'width': '100%',
        'position': 'absolute',
        'top': 8.5
    };
    var11 = 'absolute';
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.line = var8;
    var8 = {};
    var8.position = var11;
    var3.subwayMarker = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/SafetyHubAccountStanding.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun88659: for (var _fun88659_ip = 0;;) switch (_fun88659_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getAccountStanding;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var6 = _closure1_slot4;
                var2 = var6.useState;
                var1 = 0;
                var5 = var2.bind(var6)(var1);
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = 2;
                var2 = var4.bind(var3)(var5, var2);
                var15 = var2[var1];
                var _closure2_slot1 = var15;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var1 = _closure1_slot12;
                var13 = var1.bind(var3)();
                var _closure2_slot3 = var13;
                var4 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var24
                    var0 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var2 = var6[var1];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.AccountStandingState;
                    var9 = var2.ALL_GOOD;
                    var2 = {};
                    var8 = 11;
                    var3 = var6[var8];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.t;
                    var3 = var3.uaKrRi;
                    var2.title = var3;
                    var3 = var6[var8];
                    var3 = var7.bind(var5)(var3);
                    var12 = var3.intl;
                    var11 = var12.format;
                    var3 = var6[var8];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.t;
                    var10 = var3.pEdBD4;
                    var3 = {};
                    var13 = _closure1_slot8;
                    var14 = var13.TOS_LINK;
                    var3.termsOfService = var14;
                    var13 = var13.COMMUNITY_GUIDELINES;
                    var3.communityGuidelines = var13;
                    var3 = var11.bind(var12)(var10, var3);
                    var2.description = var3;
                    var3 = var6[var8];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.t;
                    var3 = var3["/Idfao"];
                    var2.status = var3;
                    var3 = _closure2_slot3;
                    var10 = var3.good;
                    var2.style = var10;
                    var10 = 12;
                    var10 = var6[var10];
                    var10 = var7.bind(var5)(var10);
                    var10 = var10.CircleCheckIcon;
                    var2.CustomIcon = var10;
                    var0[var9] = var2;
                    var2 = var6[var1];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.AccountStandingState;
                    var9 = var2.LIMITED;
                    var2 = {};
                    var10 = var6[var8];
                    var10 = var7.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10.epkcmS;
                    var2.title = var10;
                    var10 = var6[var8];
                    var10 = var7.bind(var5)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var6[var8];
                    var10 = var7.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10["774juc"];
                    var10 = var11.bind(var12)(var10);
                    var2.description = var10;
                    var10 = var6[var8];
                    var10 = var7.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10.umleq4;
                    var2.status = var10;
                    var10 = var3.limited;
                    var2.style = var10;
                    var11 = 13;
                    var10 = var6[var11];
                    var10 = var7.bind(var5)(var10);
                    var10 = var10.CircleErrorIcon;
                    var2.CustomIcon = var10;
                    var4 = _closure1_slot1;
                    var10 = 14;
                    var12 = var6[var10];
                    var12 = var4.bind(var5)(var12);
                    var2.iconSource = var12;
                    var0[var9] = var2;
                    var2 = var6[var1];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.AccountStandingState;
                    var9 = var2.VERY_LIMITED;
                    var2 = {};
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.crzE2X;
                    var2.title = var12;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12["T/Ufh9"];
                    var12 = var13.bind(var14)(var12);
                    var2.description = var12;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.WBtMHf;
                    var2.status = var12;
                    var12 = var3.veryLimited;
                    var2.style = var12;
                    var12 = var6[var11];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.CircleErrorIcon;
                    var2.CustomIcon = var12;
                    var12 = var6[var10];
                    var12 = var4.bind(var5)(var12);
                    var2.iconSource = var12;
                    var0[var9] = var2;
                    var2 = var6[var1];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.AccountStandingState;
                    var9 = var2.AT_RISK;
                    var2 = {};
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.XRNVzO;
                    var2.title = var12;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12["hbH+9S"];
                    var12 = var13.bind(var14)(var12);
                    var2.description = var12;
                    var12 = var6[var8];
                    var12 = var7.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12["7f+4Lg"];
                    var2.status = var12;
                    var12 = var3.atRisk;
                    var2.style = var12;
                    var11 = var6[var11];
                    var11 = var7.bind(var5)(var11);
                    var11 = var11.CircleErrorIcon;
                    var2.CustomIcon = var11;
                    var10 = var6[var10];
                    var10 = var4.bind(var5)(var10);
                    var2.iconSource = var10;
                    var0[var9] = var2;
                    var1 = var6[var1];
                    var1 = var7.bind(var5)(var1);
                    var1 = var1.AccountStandingState;
                    var2 = var1.SUSPENDED;
                    var1 = {};
                    var9 = var6[var8];
                    var9 = var7.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.MExFkz;
                    var1.title = var9;
                    var9 = var6[var8];
                    var9 = var7.bind(var5)(var9);
                    var11 = var9.intl;
                    var10 = var11.string;
                    var9 = var6[var8];
                    var9 = var7.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9["2liUvt"];
                    var9 = var10.bind(var11)(var9);
                    var1.description = var9;
                    var8 = var6[var8];
                    var8 = var7.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8["0OONGB"];
                    var1.status = var8;
                    var3 = var3.suspended;
                    var1.style = var3;
                    var3 = 15;
                    var3 = var6[var3];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.CircleXIcon;
                    var1.CustomIcon = var3;
                    var3 = 16;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var1.iconSource = var3;
                    var0[var2] = var1;
                    return var0;
                };
                var1 = var4.bind(var6)(var1, var2);
                var _closure2_slot4 = var1;
                var5 = var6.useMemo;
                var4 = new Array(4);
                var4[0] = var0;
                var4[1] = var1;
                var4[2] = var15;
                var4[3] = var13;
                var2 = function() { // Environment: var24
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.entries;
                    var0 = _closure2_slot4;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun88662: for (var _fun88662_ip = 0;;) switch (_fun88662_ip) {
                            case 0:
                                var4 = arg1;
                                var5 = arg0;
                                var0 = var5[Symbol.iterator];
                                var5 = var0().next;
                                var6 = var5().value;
                                var1 = var0;
                                var3 = undefined;
                                var1 = var1 === var3;
                                var2 = undefined;
                                if (var1) {
                                    _fun88662_ip = 30;
                                    continue _fun88662
                                }
                            case 27:
                                var2 = var6;
                            case 30:
                                var11 = undefined;
                                if (var1) {
                                    _fun88662_ip = 60;
                                    continue _fun88662
                                }
                            case 35:
                                var6 = var5().value;
                                var5 = var0;
                                var5 = var5 === var3;
                                var11 = undefined;
                                var1 = var5;
                                if (var5) {
                                    _fun88662_ip = 60;
                                    continue _fun88662
                                }
                            case 54:
                                var11 = var6;
                                var1 = var5;
                            case 60:
                                if (var1) {
                                    _fun88662_ip = 66;
                                    continue _fun88662
                                }
                            case 63:
                                var0.return();
                            case 66:
                                var0 = global;
                                var1 = var0.parseInt;
                                var10 = var1.bind(var3)(var2);
                                var2 = var0.Object;
                                var1 = var2.keys;
                                var0 = _closure2_slot4;
                                var0 = var1.bind(var2)(var0);
                                var7 = var0.length;
                                var13 = var11.CustomIcon;
                                var2 = _closure1_slot9;
                                var1 = _closure1_slot5;
                                var0 = {};
                                var8 = _closure2_slot3;
                                var12 = var8.subwayMarker;
                                var6 = new Array(2);
                                var6[0] = var12;
                                var12 = _closure1_slot11;
                                var12 = var12[var10];
                                var6[1] = var12;
                                var0.style = var6;
                                var6 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 8;
                                var5 = var12[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = {};
                                var12 = {};
                                var14 = {};
                                var17 = var8.icon;
                                var18 = var14;
                                var8 = copyDataProperties(var18, var17);
                                var8 = 20;
                                var15 = 'width';
                                var14[var15] = var8;
                                var15 = 'height';
                                var14[var15] = var8;
                                var12.style = var14;
                                var14 = var11.style;
                                var14 = var14.color;
                                var12.color = var14;
                                var12 = var2.bind(var3)(var13, var12);
                                var5.selectedIcon = var12;
                                var12 = var11.style;
                                var5.style = var12;
                                var11 = var11.status;
                                var5.status = var11;
                                var9 = _closure2_slot0;
                                var9 = var9.state;
                                var9 = var10 === var9;
                                var5.isSelected = var9;
                                var5.index = var4;
                                var9 = function arg0() {
                                    _fun88663: for (var _fun88663_ip = 0;;) switch (_fun88663_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.nativeEvent;
                                            var1 = var1.layout;
                                            var3 = var1.height;
                                            var2 = _closure2_slot1;
                                            if (!(var3 > var2)) {
                                                _fun88663_ip = 59;
                                                continue _fun88663
                                            }
                                        case 31:
                                            var2 = _closure2_slot2;
                                            var0 = var0.nativeEvent;
                                            var0 = var0.layout;
                                            var1 = var0.height;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                        case 59:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var5.onLayout = var9;
                                var5.size = var8;
                                var5.numOptions = var7;
                                var5 = var2.bind(var3)(var6, var5, var4);
                                var0.children = var5;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var5.bind(var6)(var2, var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var24
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var5.bind(var6)(var4, var2);
                var8 = null;
                if (!(var8 == var12)) {
                    _fun88659_ip = 231;
                    continue _fun88659
                }
            case 209:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 19;
                var2 = var5[var2];
                var14 = var4.bind(var3)(var2);
                _fun88659_ip = 262;
                continue _fun88659;
            case 231:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getUserAvatarSource;
                var14 = var2.bind(var4)(var12);
            case 262:
                var0 = var0.state;
                var0 = var1[var0];
                var23 = var0.title;
                var16 = var0.description;
                var0 = var0.style;
                var _closure2_slot5 = var0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var13.container;
                var4 = new Array(1);
                var4[0] = var5;
                var0.style = var4;
                var5 = _closure1_slot9;
                var4 = {};
                var6 = var13.avatarBackground;
                var4.style = var6;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 20;
                var6 = var17[var10];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.source = var14;
                var14 = _closure1_slot0;
                var10 = var17[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.XXLARGE;
                var6.size = var10;
                var14 = var8 == var12;
                var10 = undefined;
                if (var14) {
                    _fun88659_ip = 402;
                    continue _fun88659
                }
            case 397:
                var10 = var12.username;
            case 402:
                var12 = var8 != var10;
                var8 = '';
                if (!var12) {
                    _fun88659_ip = 416;
                    continue _fun88659
                }
            case 413:
                var8 = var10;
            case 416:
                var6['aria-label'] = var8;
                var6 = var5.bind(var3)(var7, var6);
                var4.children = var6;
                var5 = var5.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var13.body;
                var5.style = var8;
                var8 = {};
                var10 = var13.bodyText;
                var8.style = var10;
                var12 = _closure1_slot9;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 21;
                var9 = var17[var10];
                var9 = var14.bind(var3)(var9);
                var19 = var9.Text;
                var9 = {
                    'variant': 'heading-lg/medium',
                    'color': 'text-default'
                };
                var20 = {};
                var18 = 'center';
                var20.textAlign = var18;
                var9.style = var20;
                var20 = 11;
                var20 = var17[var20];
                var20 = var14.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.format;
                var20 = {};
                var24 = function arg0, arg1() {
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var0 = _closure2_slot5;
                    var1.style = var0;
                    var0 = 'heading-lg/bold';
                    var1.variant = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var20.hook = var24;
                var20 = var21.bind(var22)(var23, var20);
                var9.children = var20;
                var19 = var12.bind(var3)(var19, var9);
                var9 = new Array(2);
                var9[0] = var19;
                var10 = var17[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var17 = {};
                var17.textAlign = var18;
                var10.style = var17;
                var10.children = var16;
                var10 = var12.bind(var3)(var14, var10);
                var9[1] = var10;
                var8.children = var9;
                var9 = var7.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var14 = var13.health;
                var10 = new Array(2);
                var10[0] = var14;
                var14 = {};
                var14.height = var15;
                var10[1] = var14;
                var9.style = var10;
                var10 = {};
                var13 = var13.line;
                var10.style = var13;
                var12 = var12.bind(var3)(var6, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var9.children = var10;
                var9 = var7.bind(var3)(var6, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 10056, 5905, 33, 5906, 11486, 1297, 671, 1234, 3232, 5355, 7476, 5337, 5849, 566, 1417, 6875, 5416, 3902, 2]);