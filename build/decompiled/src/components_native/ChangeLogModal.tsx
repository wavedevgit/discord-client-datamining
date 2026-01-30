// components_native/ChangeLogModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var4
        _fun85448: for (var _fun85448_ip = 0;;) switch (_fun85448_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot18;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun85448_ip = 51;
                    continue _fun85448
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun85448_ip = 92;
                continue _fun85448;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun85448_ip = 71;
                    continue _fun85448
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun85449: for (var _fun85449_ip = 0;;) switch (_fun85449_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun85449_ip = 76;
                continue _fun85449;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = function(arg0) { // Original name: ChangeLogScreen, environment: var4
        _fun85452: for (var _fun85452_ip = 0;;) switch (_fun85452_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.onClose;
                var9 = var0.ignoreSafeArea;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 10;
                var0 = var12[var0];
                var4 = undefined;
                var2 = var11.bind(var4)(var0);
                var1 = var2.useLegacyClassComponentStyles;
                var0 = _closure1_slot14;
                var6 = var1.bind(var2)(var0);
                var0 = 23;
                var0 = var12[var0];
                var1 = var11.bind(var4)(var0);
                var0 = var1.useCurrentChangelog;
                var0 = var0.bind(var1)();
                var7 = var0.changelog;
                var _closure2_slot0 = var7;
                var1 = var0.loaded;
                var _closure2_slot1 = var1;
                var2 = var0.clientTooOld;
                var8 = _closure1_slot1;
                var0 = 24;
                var0 = var12[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var8 = var0.width;
                var0 = 25;
                var0 = var12[var0];
                var11 = var11.bind(var4)(var0);
                var0 = var11.useNavigation;
                var11 = var0.bind(var11)();
                var _closure2_slot2 = var11;
                var0 = null;
                if (!(var0 == var10)) {
                    _fun85452_ip = 169;
                    continue _fun85452
                }
            case 162:
                var10 = function() { // Original name: e, environment: var3
                    var1 = _closure2_slot2;
                    var0 = var1.goBack;
                    var0 = var0.bind(var1)();
                    return var0;
                };
            case 169:
                var14 = _closure1_slot8;
                var13 = var14.useEffect;
                var12 = new Array(2);
                var12[0] = var7;
                var12[1] = var11;
                var11 = function() { // Environment: var3
                    _fun85454: for (var _fun85454_ip = 0;;) switch (_fun85454_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun85454_ip = 44;
                                continue _fun85454
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = function() { // Original name: headerTitle, environment: var3
                                _fun85455: for (var _fun85455_ip = 0;;) switch (_fun85455_ip) {
                                    case 0:
                                        var3 = _closure1_slot12;
                                        var5 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var0 = 26;
                                        var0 = var8[var0];
                                        var2 = undefined;
                                        var0 = var5.bind(var2)(var0);
                                        var1 = var0.NavigatorHeader;
                                        var0 = {};
                                        var4 = 27;
                                        var6 = var8[var4];
                                        var6 = var5.bind(var2)(var6);
                                        var9 = var6.intl;
                                        var7 = var9.string;
                                        var6 = var8[var4];
                                        var6 = var5.bind(var2)(var6);
                                        var6 = var6.t;
                                        var6 = var6.LRmNAl;
                                        var6 = var7.bind(var9)(var6);
                                        var0.title = var6;
                                        var6 = var8[var4];
                                        var6 = var5.bind(var2)(var6);
                                        var7 = var6.intl;
                                        var6 = var7.formatToPlainString;
                                        var4 = var8[var4];
                                        var4 = var5.bind(var2)(var4);
                                        var4 = var4.t;
                                        var5 = var4.Fb8xx2;
                                        var4 = {};
                                        var8 = _closure2_slot0;
                                        var11 = var8.date;
                                        var8 = null;
                                        if (!(var8 != var11)) {
                                            _fun85455_ip = 168;
                                            continue _fun85455
                                        }
                                    case 150:
                                        var8 = _closure2_slot0;
                                        var11 = var8.date;
                                        var8 = '';
                                        if (!(var8 === var11)) {
                                            _fun85455_ip = 198;
                                            continue _fun85455
                                        }
                                    case 168:
                                        var8 = global;
                                        var8 = var8.Date;
                                        var11 = var8.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var15 = var11;
                                        var8 = new var15[var8](var14);
                                        var8 = var8 instanceof Object ? var8 : var11;
                                        _fun85455_ip = 243;
                                        continue _fun85455;
                                    case 198:
                                        var11 = _closure1_slot1;
                                        var12 = _closure1_slot2;
                                        var10 = 28;
                                        var10 = var12[var10];
                                        var10 = var11.bind(var2)(var10);
                                        var9 = _closure2_slot0;
                                        var9 = var9.date;
                                        var10 = var10.bind(var2)(var9);
                                        var9 = var10.toDate;
                                        var8 = var9.bind(var10)();
                                    case 243:
                                        var4.date = var8;
                                        var4 = var6.bind(var7)(var5, var4);
                                        var0.subtitle = var4;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                }
                            };
                            var0.headerTitle = var3;
                            var0 = var1.bind(var2)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var13.bind(var14)(var11, var12);
                var13 = _closure1_slot8;
                var12 = var13.useEffect;
                var11 = new Array(2);
                var11[0] = var1;
                var11[1] = var7;
                var3 = function() { // Environment: var3
                    _fun85456: for (var _fun85456_ip = 0;;) switch (_fun85456_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun85456_ip = 20;
                                continue _fun85456
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun85456_ip = 24;
                                continue _fun85456
                            }
                        case 20:
                            var0 = undefined;
                            return var0;
                        case 24:
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 29;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.markChangelogAsSeen;
                                var0 = _closure2_slot0;
                                var1 = var0.id;
                                var0 = var0.date;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var12.bind(var13)(var3, var11);
                if (var2) {
                    _fun85452_ip = 457;
                    continue _fun85452
                }
            case 243:
                if (!(var0 != var7)) {
                    _fun85452_ip = 288;
                    continue _fun85452
                }
            case 247:
                var3 = _closure1_slot12;
                var2 = _closure1_slot16;
                var0 = {};
                var0.onClose = var10;
                var0.ignoreSafeArea = var9;
                var0.screenWidth = var8;
                var0.changeLog = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun85452_ip = 452;
                continue _fun85452;
            case 288:
                var3 = _closure1_slot12;
                var2 = _closure1_slot9;
                var7 = {};
                var8 = var6.empty;
                var7.style = var8;
                var10 = _closure1_slot12;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 30;
                var8 = var15[var8];
                var8 = var14.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {};
                var11 = 'text-md/semibold';
                var8.variant = var11;
                var11 = 27;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                if (var1) {
                    _fun85452_ip = 416;
                    continue _fun85452
                }
            case 386:
                var1 = var11.ZTNur7;
                var1 = var12.bind(var13)(var1);
                var8.children = var1;
                var1 = var10.bind(var4)(var9, var8);
                var7.children = var1;
                var1 = var7;
                _fun85452_ip = 446;
                continue _fun85452;
            case 416:
                var11 = var11.O1iRT8;
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7.children = var8;
                var1 = var7;
            case 446:
                var0 = var3.bind(var4)(var2, var1);
            case 452:
                _fun85452_ip = 587;
                continue _fun85452;
            case 457:
                var3 = _closure1_slot12;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = var6.empty;
                var1.style = var6;
                var7 = _closure1_slot12;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 30;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = 'heading-lg/medium';
                var5.variant = var8;
                var8 = 27;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.V9ospk;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 587:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = function() { // Original name: hideChangeLog, environment: var4
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 31;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot11;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var5 = var7[var3];
    var3 = arg3;
    var8 = var3.bind(var0)(var5);
    var _closure1_slot8 = var8;
    var3 = 6;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var13 = 8;
    var3 = var7[var13];
    var3 = var6.bind(var0)(var3);
    var3 = var3.CHANGELOG_MODAL_KEY;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot12 = var5;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 10;
    var5 = var7[var3];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createLegacyClassComponentStyles;
    var5 = {};
    var11 = {};
    var14 = 'stretch';
    var11.alignSelf = var14;
    var5.video = var11;
    var11 = {};
    var11.marginBottom = var13;
    var5.videoWrapper = var11;
    var13 = {};
    var11 = 11;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var13.borderRadius = var14;
    var14 = 'hidden';
    var13.overflow = var14;
    var5.videoSpecial = var13;
    var13 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var5.videoOverlay = var13;
    var13 = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'marginLeft': 4294967268,
        'marginTop': 4294967268,
        'borderRadius': null,
        'backgroundColor': null,
        'width': 56,
        'height': 56
    };
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var13.borderRadius = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var13.backgroundColor = var14;
    var5.playButton = var13;
    var13 = {
        'width': 21,
        'height': 21
    };
    var5.playIcon = var13;
    var13 = {
        'width': '100%',
        'height': 240,
        'alignItems': 'center',
        'paddingTop': 48
    };
    var5.empty = var13;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot14 = var5;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var5 = var9.createLegacyClassComponentStyles;
    var3 = {};
    var10 = {
        'width': 7,
        'height': 7,
        'borderRadius': 3.5,
        'marginRight': 13,
        'marginTop': 7
    };
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_STRONG;
    var10.backgroundColor = var13;
    var3.bulletPoint = var10;
    var10 = {
        'flexDirection': 'row',
        'marginLeft': 4,
        'marginBottom': 8
    };
    var3.listItem = var10;
    var10 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18,
        'flex': 1
    };
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var10.color = var11;
    var3.listText = var10;
    var10 = {
        'flexDirection': 'column',
        'flex': 1
    };
    var3.listItemContent = var10;
    var3 = var5.bind(var9)(var3);
    var _closure1_slot15 = var3;
    var5 = var8.PureComponent;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: ListItem, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot17;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun85461: for (var _fun85461_ip = 0;;) switch (_fun85461_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var10 = var1.children;
                    var1 = _closure1_slot15;
                    var0 = var0.context;
                    var3 = undefined;
                    var11 = var1.bind(var3)(var0);
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var4 = var11.listItem;
                    var0.style = var4;
                    var7 = _closure1_slot12;
                    var6 = _closure1_slot9;
                    var4 = {};
                    var8 = var11.bulletPoint;
                    var4.style = var8;
                    var6 = var7.bind(var3)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var7 = _closure1_slot12;
                    var6 = _closure1_slot9;
                    var5 = {};
                    var8 = var11.listText;
                    var5.style = var8;
                    var12 = 'function';
                    var9 = typeof var10;
                    var8 = var10;
                    if (!(var12 === var9)) {
                        _fun85461_ip = 137;
                        continue _fun85461
                    }
                case 120:
                    var9 = {};
                    var11 = var11.listText;
                    var9.style = var11;
                    var8 = var10.bind(var3)(var9);
                case 137:
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var5 = 12;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.ThemeContext;
    var3.contextType = var9;
    var9 = var8.PureComponent;
    var8 = function(arg0) { // Environment: var4
        var3 = function(arg0) { // Original name: ChangeLog, environment: var5
            var7 = this;
            var2 = 0;
            var11 = 0;
            var8 = copyRestArgs(var11);
            var0 = _closure1_slot3;
            var6 = _closure2_slot0;
            var5 = undefined;
            var0 = var0.bind(var5)(var7, var6);
            var4 = _closure1_slot17;
            var0 = new Array(0);
            var11 = var0;
            var10 = var8;
            var9 = 0;
            var8 = arraySpread(var11, var10, var9);
            var0 = var4.bind(var5)(var7, var6, var0);
            var _closure3_slot0 = var0;
            var0.mountedAt = var2;
            var4 = _closure1_slot8;
            var3 = var4.createRef;
            var3 = var3.bind(var4)();
            var0.ref = var3;
            var0.maxScrolledPercentage = var2;
            var2 = {};
            var3 = false;
            var2.ytVideoReady = var3;
            var0.state = var2;
            var2 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.contentOffset;
                var2 = var1.y;
                var1 = var0.layoutMeasurement;
                var1 = var1.height;
                var1 = var2 + var1;
                var0 = var0.contentSize;
                var0 = var0.height;
                var6 = var1 / var0;
                var1 = _closure3_slot0;
                var0 = global;
                var4 = var0.Math;
                var3 = var4.min;
                var5 = var0.Math;
                var2 = var5.max;
                var0 = var1.maxScrolledPercentage;
                var2 = var2.bind(var5)(var0, var6);
                var0 = 1;
                var0 = var3.bind(var4)(var2, var0);
                var1.maxScrolledPercentage = var0;
                var0 = undefined;
                return var0;
            };
            var0.handleScroll = var2;
            var1 = function() { // Environment: var1
                _fun85465: for (var _fun85465_ip = 0;;) switch (_fun85465_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var2 = var0.props;
                        var0 = var2.changeLog;
                        var5 = var2.screenWidth;
                        var3 = var0.video;
                        var2 = var0.image;
                        var0 = null;
                        if (!(var0 == var3)) {
                            _fun85465_ip = 49;
                            continue _fun85465
                        }
                    case 42:
                        if (!(var0 != var2)) {
                            _fun85465_ip = 233;
                            continue _fun85465
                        }
                    case 49:
                        var4 = 36;
                        var7 = var5 - var4;
                        if (!(var0 == var3)) {
                            _fun85465_ip = 68;
                            continue _fun85465
                        }
                    case 60:
                        var5 = {};
                        var5.uri = var2;
                        _fun85465_ip = 78;
                        continue _fun85465;
                    case 68:
                        var2 = {};
                        var2.videoURI = var3;
                        var5 = var2;
                    case 78:
                        var2 = _closure3_slot0;
                        var4 = var2.track;
                        var3 = _closure1_slot10;
                        var3 = var3.CHANGE_LOG_VIDEO_INTERACTED;
                        var3 = var4.bind(var2)(var3);
                        var2 = var2.ref;
                        var4 = var2.current;
                        if (!(var0 != var4)) {
                            _fun85465_ip = 229;
                            continue _fun85465
                        }
                    case 119:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openMediaModal;
                        var1 = {
                            'initialSources': null,
                            'disableDownload': true,
                            'shareable': false,
                            'analyticsSource': 'Change Log'
                        };
                        var6 = {};
                        var9 = var6;
                        var8 = var5;
                        var5 = copyDataProperties(var9, var8);
                        var5 = 'width';
                        var6[var5] = var7;
                        var5 = 9;
                        var7 = var5 * var7;
                        var5 = 16;
                        var7 = var7 / var5;
                        var5 = 'height';
                        var6[var5] = var7;
                        var5 = new Array(1);
                        var5[0] = var6;
                        var1.initialSources = var5;
                        var1.originViewOrOriginLayout = var4;
                        var1 = var2.bind(var3)(var1);
                    case 229:
                        var1 = undefined;
                        return var1;
                    case 233:
                        return var0;
                }
            };
            var0.playVideo = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var0 = var0.bind(var1)();
            var2.mountedAt = var0;
            var1 = var2.track;
            var0 = _closure1_slot10;
            var0 = var0.CHANGE_LOG_OPENED;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.track;
            var0 = _closure1_slot10;
            var0 = var0.CHANGE_LOG_CLOSED;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'track';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun85468: for (var _fun85468_ip = 0;;) switch (_fun85468_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arguments[1];
                    var6 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun85468_ip = 17;
                        continue _fun85468
                    }
                case 15:
                    var1 = {};
                case 17:
                    var2 = var6.props;
                    var2 = var2.changeLog;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun85468_ip = 265;
                        continue _fun85468
                    }
                case 37:
                    var5 = {};
                    var10 = var2.date;
                    var9 = var2.revision;
                    var7 = global;
                    var2 = var7.HermesInternal;
                    var8 = var2.concat;
                    var3 = '';
                    var2 = ':';
                    var2 = var8.bind(var3)(var10, var2, var9);
                    var5.change_log_id = var2;
                    var14 = var5;
                    var13 = var1;
                    var1 = copyDataProperties(var14, var13);
                    var2 = _closure1_slot10;
                    var2 = var2.CHANGE_LOG_CLOSED;
                    var3 = var5;
                    if (!(var4 === var2)) {
                        _fun85468_ip = 234;
                        continue _fun85468
                    }
                case 114:
                    var2 = {};
                    var10 = var7.Math;
                    var9 = var10.round;
                    var11 = var7.Date;
                    var8 = var11.now;
                    var11 = var8.bind(var11)();
                    var8 = var6.mountedAt;
                    var11 = var11 - var8;
                    var8 = 1000;
                    var8 = var11 / var8;
                    var8 = var9.bind(var10)(var8);
                    var2.seconds_open = var8;
                    var8 = var7.parseInt;
                    var9 = var6.maxScrolledPercentage;
                    var7 = var9.toPrecision;
                    var6 = 4;
                    var7 = var7.bind(var9)(var6);
                    var6 = 10;
                    var7 = var8.bind(var0)(var7, var6);
                    var6 = 100;
                    var6 = var6 * var7;
                    var2.max_scrolled_percentage = var6;
                    var14 = var2;
                    var13 = var5;
                    var5 = copyDataProperties(var14, var13);
                    var3 = var2;
                case 234:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var1 = var5[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.track;
                    var1 = var1.bind(var2)(var4, var3);
                case 265:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderVideo';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun85469: for (var _fun85469_ip = 0;;) switch (_fun85469_ip) {
                case 0:
                    var16 = this;
                    var _closure3_slot0 = var16;
                    var1 = _closure1_slot14;
                    var0 = var16.context;
                    var3 = undefined;
                    var15 = var1.bind(var3)(var0);
                    var0 = var16.props;
                    var1 = var0.changeLog;
                    var2 = var0.screenWidth;
                    var4 = var0.onClose;
                    var9 = var1.video;
                    var0 = var1.image;
                    var24 = var1.youtube_video_id;
                    var1 = var16.state;
                    var10 = var1.ytVideoReady;
                    var1 = 36;
                    var17 = var2 - var1;
                    var1 = 9;
                    var1 = var1 * var17;
                    var20 = 16;
                    var14 = var1 / var20;
                    var8 = null;
                    if (!(var8 == var9)) {
                        _fun85469_ip = 338;
                        continue _fun85469
                    }
                case 110:
                    if (!(var8 != var0)) {
                        _fun85469_ip = 125;
                        continue _fun85469
                    }
                case 114:
                    var18 = {};
                    var18.uri = var0;
                    _fun85469_ip = 348;
                    continue _fun85469;
                case 125:
                    var1 = var8 != var24;
                    var0 = null;
                    if (!var1) {
                        _fun85469_ip = 336;
                        continue _fun85469
                    }
                case 137:
                    var5 = _closure1_slot13;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var6 = var15.videoWrapper;
                    var1.style = var6;
                    var1.onAccessibilityEscape = var4;
                    var11 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var6 = 15;
                    var6 = var19[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var6.height = var14;
                    var19 = false;
                    var6.play = var19;
                    var6.videoId = var24;
                    var19 = function() { // Original name: onReady, environment: var13
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = true;
                        var0.ytVideoReady = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.onReady = var19;
                    var19 = true;
                    var6.useLocalHTML = var19;
                    var7 = var11.bind(var3)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = null;
                    if (var10) {
                        _fun85469_ip = 322;
                        continue _fun85469
                    }
                case 242:
                    var19 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var20];
                    var11 = var11.bind(var3)(var10);
                    var10 = {};
                    var20 = var15.videoOverlay;
                    var10.style = var20;
                    var20 = {};
                    var21 = global;
                    var21 = var21.HermesInternal;
                    var23 = var21.concat;
                    var22 = 'https://i.ytimg.com/vi/';
                    var21 = '/hqdefault.jpg';
                    var21 = var23.bind(var22)(var24, var21);
                    var20.uri = var21;
                    var10.source = var20;
                    var7 = var19.bind(var3)(var11, var10);
                case 322:
                    var6[1] = var7;
                    var1.children = var6;
                    var0 = var5.bind(var3)(var2, var1);
                case 336:
                    return var0;
                case 338:
                    var0 = {};
                    var0.videoURI = var9;
                    var18 = var0;
                case 348:
                    var2 = _closure1_slot12;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var5 = var15.videoWrapper;
                    var0.style = var5;
                    var0.onAccessibilityEscape = var4;
                    var6 = _closure1_slot13;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var7 = var16.ref;
                    var4.ref = var7;
                    var7 = var15.videoSpecial;
                    var4.style = var7;
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var7 = 17;
                    var7 = var19[var7];
                    var10 = var10.bind(var3)(var7);
                    var7 = {};
                    var19 = var15.video;
                    var7.style = var19;
                    var7.src = var18;
                    var7.width = var17;
                    var7.height = var14;
                    var14 = true;
                    var7.paused = var14;
                    var7.canOpenFullscreen = var14;
                    var7.unmutedOnFullScreen = var14;
                    var13 = function() { // Original name: onPress, environment: var13
                        var2 = _closure3_slot0;
                        var1 = var2.track;
                        var0 = _closure1_slot10;
                        var0 = var0.CHANGE_LOG_VIDEO_INTERACTED;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var7.onPress = var13;
                    var10 = var11.bind(var3)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var9 = var8 != var9;
                    var8 = null;
                    if (!var9) {
                        _fun85469_ip = 697;
                        continue _fun85469
                    }
                case 507:
                    var11 = _closure1_slot12;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var9 = 18;
                    var9 = var18[var9];
                    var9 = var17.bind(var3)(var9);
                    var10 = var9.PressableOpacity;
                    var9 = {
                        'accessibilityLabel': 'Play Video',
                        'accessibilityRole': 'button'
                    };
                    var13 = var15.videoOverlay;
                    var9.style = var13;
                    var13 = var16.playVideo;
                    var9.onPress = var13;
                    var14 = _closure1_slot12;
                    var20 = _closure1_slot1;
                    var12 = 19;
                    var12 = var18[var12];
                    var13 = var20.bind(var3)(var12);
                    var12 = {
                        'accessibilityLabel': 'Play Video',
                        'accessibilityRole': 'button'
                    };
                    var19 = 20;
                    var19 = var18[var19];
                    var19 = var20.bind(var3)(var19);
                    var12.source = var19;
                    var16 = var16.playVideo;
                    var12.onPress = var16;
                    var16 = var15.playButton;
                    var12.style = var16;
                    var16 = 21;
                    var16 = var18[var16];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.IconSizes;
                    var16 = var16.CUSTOM;
                    var12.iconSize = var16;
                    var15 = var15.playIcon;
                    var12.iconStyle = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var9.children = var12;
                    var8 = var11.bind(var3)(var10, var9);
                case 697:
                    var7[1] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = _closure1_slot12;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 22;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var7 = var4.props;
            var8 = var0;
            var5 = copyDataProperties(var8, var7);
            var5 = var4.renderVideo;
            var6 = var5.bind(var4)();
            var5 = 'video';
            var0[var5] = var6;
            var5 = var4.handleScroll;
            var4 = 'onScroll';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var9);
    var _closure1_slot16 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeContext;
    var8.contextType = var5;
    var5 = 33;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/ChangeLogModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() { // Original name: ChangelogModal, environment: var4
        var4 = _closure1_slot8;
        var3 = var4.useMemo;
        var2 = function() { // Environment: var1
            var0 = {};
            var1 = {};
            var2 = 'CHANGELOG';
            var1.name = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 26;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.getHeaderCloseButton;
            var2 = _closure1_slot20;
            var2 = var3.bind(var4)(var2);
            var1.headerLeft = var2;
            var2 = function() { // Original name: render, environment: var2
                var3 = _closure1_slot12;
                var2 = _closure1_slot19;
                var1 = {};
                var0 = _closure1_slot20;
                var1.onClose = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1.render = var2;
            var0.CHANGELOG = var1;
            return var0;
        };
        var1 = new Array(0);
        var4 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 32;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var4;
        var4 = 'CHANGELOG';
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var4;
    var2.ListItem = var3;
    var2.ChangeLogScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 660, 1660, 33, 1297, 671, 3118, 8801, 795, 10981, 4666, 8800, 4864, 6740, 9325, 4045, 6735, 6736, 1464, 1470, 4667, 1234, 3004, 6737, 3901, 4524, 5747, 2]);