// components_native/ChangeLogStandardTemplate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var9;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var6
        _fun55815: for (var _fun55815_ip = 0;;) switch (_fun55815_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot23;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun55815_ip = 51;
                    continue _fun55815
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun55815_ip = 92;
                continue _fun55815;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun55815_ip = 71;
                    continue _fun55815
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
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var6
        _fun55816: for (var _fun55816_ip = 0;;) switch (_fun55816_ip) {
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
            case 70: // try_end0
                _fun55816_ip = 74;
                continue _fun55816;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: LinkInner, environment: var6
        var0 = arg0;
        var10 = var0.changelogId;
        var1 = var0.target;
        var _closure2_slot0 = var1;
        var6 = var0.className;
        var4 = var0.children;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 14;
        var2 = var7[var2];
        var3 = undefined;
        var11 = var1.bind(var3)(var2);
        var9 = var11.useStateFromStores;
        var2 = _closure1_slot10;
        var8 = new Array(1);
        var8[0] = var2;
        var2 = function() { // Environment: var5
            var0 = _closure1_slot10;
            var0 = var0.locale;
            return var0;
        };
        var9 = var9.bind(var11)(var8, var2);
        var2 = 15;
        var2 = var7[var2];
        var8 = var1.bind(var3)(var2);
        var2 = var8.useChangelog;
        var2 = var2.bind(var8)(var10, var9);
        var2 = var2.changelog;
        var _closure2_slot1 = var2;
        var2 = _closure1_slot14;
        var0 = 12;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.LegacyText;
        var0 = {};
        var7 = 'link';
        var0.accessibilityRole = var7;
        var0.style = var6;
        var5 = function() { // Original name: onPress, environment: var5
            _fun55821: for (var _fun55821_ip = 0;;) switch (_fun55821_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var4 = var6.track;
                    var2 = _closure1_slot13;
                    var3 = var2.CHANGE_LOG_CTA_CLICKED;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var8 = null;
                    var7 = var8 == var7;
                    var11 = undefined;
                    if (var7) {
                        _fun55821_ip = 70;
                        continue _fun55821
                    }
                case 60:
                    var7 = _closure2_slot1;
                    var11 = var7.date;
                case 70:
                    if (!(var8 == var11)) {
                        _fun55821_ip = 111;
                        continue _fun55821
                    }
                case 74:
                    var7 = global;
                    var7 = var7.Date;
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var7
                        }
                    });
                    var15 = var9;
                    var7 = new var15[var7](var14);
                    var9 = var7 instanceof Object ? var7 : var9;
                    var7 = var9.toString;
                    var11 = var7.bind(var9)();
                case 111:
                    var7 = _closure2_slot1;
                    var9 = var8 == var7;
                    var7 = undefined;
                    if (var9) {
                        _fun55821_ip = 134;
                        continue _fun55821
                    }
                case 124:
                    var9 = _closure2_slot1;
                    var7 = var9.revision;
                case 134:
                    var8 = var8 != var7;
                    var10 = 1;
                    if (!var8) {
                        _fun55821_ip = 147;
                        continue _fun55821
                    }
                case 144:
                    var10 = var7;
                case 147:
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = ':';
                    var7 = var9.bind(var8)(var11, var7, var10);
                    var2.change_log_id = var7;
                    var7 = 'inline_link';
                    var2.cta_type = var7;
                    var5 = _closure2_slot0;
                    var2.target = var5;
                    var2 = var4.bind(var6)(var3, var2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openURL;
                    var4 = _closure1_slot0;
                    var1 = 18;
                    var1 = var6[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.sanitizeUrl;
                    var1 = var1.bind(var4)(var5);
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.onPress = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: getLinkComponent, environment: var6
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot14;
            var2 = _closure1_slot24;
            var1 = {};
            var5 = arg0;
            var6 = var1;
            var0 = copyDataProperties(var6, var5);
            var4 = _closure2_slot0;
            var0 = 'changelogId';
            var1[var0] = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot25 = var0;
    var3 = function(arg0) { // Original name: changelogRules, environment: var6
        _fun55824: for (var _fun55824_ip = 0;;) switch (_fun55824_ip) {
            case 0:
                var8 = arg0;
                var0 = arguments[1];
                var7 = undefined;
                if (!(var0 === var7)) {
                    _fun55824_ip = 14;
                    continue _fun55824
                }
            case 12:
                var0 = false;
            case 14:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = var2.bind(var7)(var1);
                if (var0) {
                    _fun55824_ip = 103;
                    continue _fun55824
                }
            case 40:
                var1 = var3.getDefaultRules;
                var0 = {};
                var2 = {};
                var4 = _closure1_slot25;
                var4 = var4.bind(var7)(var8);
                var2.Link = var4;
                var4 = _closure1_slot21;
                var2.ListItem = var4;
                var4 = _closure1_slot19;
                var2.LHeading = var4;
                var4 = _closure1_slot19;
                var2.Heading = var4;
                var0.components = var2;
                var0 = var1.bind(var3)(var0);
                _fun55824_ip = 164;
                continue _fun55824;
            case 103:
                var2 = var3.getMessageRules;
                var1 = {};
                var4 = {};
                var6 = _closure1_slot25;
                var6 = var6.bind(var7)(var8);
                var4.Link = var6;
                var6 = _closure1_slot21;
                var4.ListItem = var6;
                var6 = _closure1_slot19;
                var4.LHeading = var6;
                var5 = _closure1_slot19;
                var4.Heading = var5;
                var1.components = var4;
                var0 = var2.bind(var3)(var1);
            case 164:
                return var0;
        }
    };
    var _closure1_slot26 = var3;
    var1 = function(arg0) { // Original name: getRenderChangelog, environment: var6
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 20;
        var1 = var3[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.reactParserFor;
        var3 = _closure1_slot26;
        var0 = arg0;
        var0 = var0.id;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot27 = var1;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var9[var0];
    var0 = undefined;
    var4 = var15.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var17 = 1;
    var4 = var9[var17];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var5 = var9[var4];
    var4 = arg3;
    var10 = var4.bind(var0)(var5);
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot8 = var5;
    var11 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.LocalizedLinks;
    var _closure1_slot11 = var5;
    var5 = var4.SOCIAL_LINKS;
    var _closure1_slot12 = var5;
    var5 = var4.AnalyticEvents;
    var _closure1_slot13 = var5;
    var13 = var4.Fonts;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot14 = var5;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var5 = var9[var4];
    var12 = var8.bind(var0)(var5);
    var7 = var12.createLegacyClassComponentStyles;
    var5 = {};
    var14 = {};
    var14.flex = var17;
    var5.flex = var14;
    var16 = {};
    var14 = 18;
    var16.padding = var14;
    var14 = 11;
    var18 = var9[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOW;
    var16.backgroundColor = var18;
    var5.container = var16;
    var16 = {
        'marginBottom': 18,
        'alignSelf': 'stretch'
    };
    var5.video = var16;
    var16 = {};
    var18 = 'row';
    var16.flexDirection = var18;
    var18 = var11.hairlineWidth;
    var16.borderTopWidth = var18;
    var18 = var9[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SURFACE_HIGH;
    var16.backgroundColor = var18;
    var18 = var9[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_STRONG;
    var16.borderTopColor = var18;
    var5.footerContainer = var16;
    var16 = {
        'flex': 1,
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'paddingHorizontal': 18
    };
    var5.footer = var16;
    var16 = {
        'flex': 2,
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'flex-start'
    };
    var5.leftFooter = var16;
    var16 = {
        'flex': 0,
        'alignSelf': 'center'
    };
    var5.button = var16;
    var16 = {};
    var16.marginBottom = var4;
    var5.list = var16;
    var16 = {};
    var16.flex = var17;
    var5.scrollViewContainer = var16;
    var5 = var7.bind(var12)(var5);
    var _closure1_slot16 = var5;
    var5 = {};
    var7 = var9[var14];
    var7 = var15.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.GREEN_360;
    var5.added = var7;
    var7 = var9[var14];
    var7 = var15.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.RED_400;
    var5.fixed = var7;
    var7 = var9[var14];
    var7 = var15.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.YELLOW_300;
    var5.progress = var7;
    var7 = var9[var14];
    var7 = var15.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.BRAND_500;
    var5.improved = var7;
    var _closure1_slot17 = var5;
    var7 = var11.create;
    var5 = {};
    var12 = {
        'marginBottom': 14,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var5.lheading = var12;
    var12 = {};
    var16 = 16;
    var12.fontSize = var16;
    var13 = var13.PRIMARY_SEMIBOLD;
    var12.fontFamily = var13;
    var5.lheadingText = var12;
    var12 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'flexBasis': 'auto',
        'marginLeft': 10,
        'height': 2
    };
    var5.lheadingLine = var12;
    var5 = var7.bind(var11)(var5);
    var _closure1_slot18 = var5;
    var7 = var10.PureComponent;
    var5 = function(arg0) { // Environment: var6
        var3 = function() { // Original name: LHeading, environment: var5
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot22;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getStyles';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun55828: for (var _fun55828_ip = 0;;) switch (_fun55828_ip) {
                case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var1 = var1.props;
                    var3 = var1.className;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun55828_ip = 33;
                        continue _fun55828
                    }
                case 29:
                    var1 = undefined;
                    return var1;
                case 33:
                    var2 = var3.split;
                    var1 = ' ';
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun55829: for (var _fun55829_ip = 0;;) switch (_fun55829_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = 'marginTop';
                                if (!(var0 !== var3)) {
                                    _fun55829_ip = 52;
                                    continue _fun55829
                                }
                            case 11:
                                var0 = _closure3_slot0;
                                var1 = {};
                                var2 = _closure1_slot17;
                                var2 = var2[var3];
                                if (var0) {
                                    _fun55829_ip = 43;
                                    continue _fun55829
                                }
                            case 34:
                                var1.backgroundColor = var2;
                                var0 = var1;
                                _fun55829_ip = 50;
                                continue _fun55829;
                            case 43:
                                var1.color = var2;
                                var0 = var1;
                            case 50:
                                _fun55829_ip = 64;
                                continue _fun55829;
                            case 52:
                                var1 = {};
                                var2 = 10;
                                var1.marginTop = var2;
                                var0 = var1;
                            case 64:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.concat;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var10 = this;
            var0 = var10.props;
            var9 = var0.children;
            var3 = _closure1_slot15;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = _closure1_slot18;
            var0 = var7.lheading;
            var1.style = var0;
            var8 = _closure1_slot14;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 12;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var6.bind(var0)(var4);
            var6 = var4.LegacyText;
            var4 = {};
            var13 = var10.getStyles;
            var12 = var7.lheadingText;
            var11 = true;
            var11 = var13.bind(var10)(var12, var11);
            var4.style = var11;
            var4.children = var9;
            var6 = var8.bind(var0)(var6, var4);
            var4 = new Array(2);
            var4[0] = var6;
            var6 = _closure1_slot14;
            var5 = {};
            var9 = var10.getStyles;
            var8 = var7.lheadingLine;
            var7 = false;
            var7 = var9.bind(var10)(var8, var7);
            var5.style = var7;
            var5 = var6.bind(var0)(var2, var5);
            var4[1] = var5;
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var7);
    var _closure1_slot19 = var5;
    var4 = var9[var4];
    var12 = var8.bind(var0)(var4);
    var11 = var12.createLegacyClassComponentStyles;
    var4 = {};
    var13 = {
        'width': 7,
        'height': 7,
        'borderRadius': 3.5,
        'marginRight': 13,
        'marginTop': 7
    };
    var7 = 13;
    var16 = var9[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_STRONG;
    var13.backgroundColor = var16;
    var4.bulletPoint = var13;
    var13 = {
        'flexDirection': 'row',
        'marginLeft': 4,
        'marginBottom': 8
    };
    var4.listItem = var13;
    var13 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18,
        'flex': 1
    };
    var14 = var9[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var13.color = var14;
    var4.listText = var13;
    var13 = {
        'flexDirection': 'column',
        'flex': 1
    };
    var4.listItemContent = var13;
    var4 = var11.bind(var12)(var4);
    var _closure1_slot20 = var4;
    var11 = var10.PureComponent;
    var4 = function(arg0) { // Environment: var6
        var3 = function() { // Original name: ListItem, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot22;
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
            _fun55833: for (var _fun55833_ip = 0;;) switch (_fun55833_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var9 = var1.children;
                    var1 = _closure1_slot20;
                    var0 = var0.context;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var2 = _closure1_slot15;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var4 = var10.listItem;
                    var0.style = var4;
                    var6 = _closure1_slot14;
                    var4 = {};
                    var7 = var10.bulletPoint;
                    var4.style = var7;
                    var6 = var6.bind(var3)(var1, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var6 = _closure1_slot14;
                    var5 = {};
                    var7 = var10.listText;
                    var5.style = var7;
                    var11 = 'function';
                    var8 = typeof var9;
                    var7 = var9;
                    if (!(var11 === var8)) {
                        _fun55833_ip = 129;
                        continue _fun55833
                    }
                case 112:
                    var8 = {};
                    var10 = var10.listText;
                    var8.style = var10;
                    var7 = var9.bind(var3)(var8);
                case 129:
                    var5.children = var7;
                    var5 = var6.bind(var3)(var1, var5);
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
    var4 = var4.bind(var0)(var11);
    var _closure1_slot21 = var4;
    var11 = var9[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.ThemeContext;
    var4.contextType = var11;
    var10 = var10.PureComponent;
    var6 = function(arg0) { // Environment: var6
        var3 = function(arg0) { // Original name: ChangeLogStandardModal, environment: var5
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot22;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var2 = var0.nativeEvent;
                var0 = _closure3_slot0;
                var1 = var0.props;
                var0 = var1.onScroll;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var0.handleScroll = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'renderFooter';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot16;
            var0 = this;
            var0 = var0.context;
            var3 = undefined;
            var9 = var1.bind(var3)(var0);
            var2 = _closure1_slot14;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var0 = 21;
            var0 = var18[var0];
            var0 = var17.bind(var3)(var0);
            var1 = var0.SafeAreaPaddingView;
            var0 = {};
            var4 = true;
            var0.bottom = var4;
            var4 = var9.footerContainer;
            var0.style = var4;
            var6 = _closure1_slot14;
            var5 = _closure1_slot8;
            var4 = {};
            var7 = var9.footer;
            var4.style = var7;
            var8 = _closure1_slot15;
            var7 = {};
            var9 = var9.leftFooter;
            var7.style = var9;
            var19 = _closure1_slot14;
            var16 = _closure1_slot1;
            var10 = 22;
            var9 = var18[var10];
            var12 = var16.bind(var3)(var9);
            var9 = {};
            var15 = 'button';
            var9.accessibilityRole = var15;
            var14 = 23;
            var20 = var18[var14];
            var20 = var17.bind(var3)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var18[var14];
            var20 = var17.bind(var3)(var20);
            var20 = var20.t;
            var20 = var20["/84uiD"];
            var20 = var21.bind(var22)(var20);
            var9.accessibilityLabel = var20;
            var20 = 24;
            var20 = var18[var20];
            var20 = var16.bind(var3)(var20);
            var9.source = var20;
            var20 = function() { // Original name: onPress, environment: var13
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 17;
                var2 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var2);
                var2 = var3.openURL;
                var4 = 25;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var1 = _closure1_slot11;
                var1 = var1.TWITTER;
                var1 = var4.bind(var0)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var9.onPress = var20;
            var12 = var19.bind(var3)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var20 = _closure1_slot14;
            var12 = var18[var10];
            var19 = var16.bind(var3)(var12);
            var12 = {};
            var12.accessibilityRole = var15;
            var21 = 26;
            var21 = var18[var21];
            var21 = var16.bind(var3)(var21);
            var12.source = var21;
            var21 = var18[var14];
            var21 = var17.bind(var3)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var18[var14];
            var21 = var17.bind(var3)(var21);
            var21 = var21.t;
            var21 = var21["h0or/l"];
            var21 = var22.bind(var23)(var21);
            var12.accessibilityLabel = var21;
            var21 = function() { // Original name: onPress, environment: var13
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 17;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.openURL;
                var1 = _closure1_slot12;
                var1 = var1.FACEBOOK_URL;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var12.onPress = var21;
            var12 = var20.bind(var3)(var19, var12);
            var9[1] = var12;
            var12 = _closure1_slot14;
            var10 = var18[var10];
            var11 = var16.bind(var3)(var10);
            var10 = {};
            var10.accessibilityRole = var15;
            var15 = 27;
            var15 = var18[var15];
            var15 = var16.bind(var3)(var15);
            var10.source = var15;
            var15 = var18[var14];
            var15 = var17.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var3)(var14);
            var14 = var14.t;
            var14 = var14["5uVPyf"];
            var14 = var15.bind(var16)(var14);
            var10.accessibilityLabel = var14;
            var13 = function() { // Original name: onPress, environment: var13
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 17;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.openURL;
                var1 = _closure1_slot12;
                var1 = var1.INSTAGRAM_URL;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var10.onPress = var13;
            var10 = var12.bind(var3)(var11, var10);
            var9[2] = var10;
            var7.children = var9;
            var7 = var8.bind(var3)(var5, var7);
            var4.children = var7;
            var4 = var6.bind(var3)(var5, var4);
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var6 = this;
            var0 = var6.props;
            var8 = var0.changeLog;
            var10 = var0.video;
            var1 = _closure1_slot16;
            var0 = var6.context;
            var3 = undefined;
            var7 = var1.bind(var3)(var0);
            var2 = _closure1_slot15;
            var1 = _closure1_slot8;
            var0 = {};
            var4 = var7.flex;
            var0.style = var4;
            var5 = _closure1_slot9;
            var4 = {};
            var11 = var7.container;
            var4.contentContainerStyle = var11;
            var7 = var7.scrollViewContainer;
            var4.style = var7;
            var7 = var6.handleScroll;
            var4.onScroll = var7;
            var7 = 3;
            var4.scrollEventThrottle = var7;
            var7 = new Array(2);
            var7[0] = var10;
            var9 = _closure1_slot27;
            var10 = var9.bind(var3)(var8);
            var9 = var8.body;
            var8 = false;
            var8 = var10.bind(var3)(var9, var8);
            var7[1] = var8;
            var4.children = var7;
            var5 = var2.bind(var3)(var5, var4);
            var4 = new Array(2);
            var4[0] = var5;
            var5 = var6.renderFooter;
            var5 = var5.bind(var6)();
            var4[1] = var5;
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var10);
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ThemeContext;
    var6.contextType = var7;
    var7 = 28;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'components_native/ChangeLogStandardTemplate.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.LHeading = var5;
    var2.ListItem = var4;
    var2.changelogRules = var3;
    var2.getRenderChangelog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1676, 660, 33, 1297, 671, 4838, 3118, 632, 6736, 795, 3103, 3105, 6738, 4743, 4696, 6740, 1234, 6741, 3034, 6742, 6743, 2]);