// modules/in_app_reports/native/components/NodeView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun53897: for (var _fun53897_ip = 0;;) switch (_fun53897_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53897_ip = 46;
                    continue _fun53897
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53897_ip = 55;
                    continue _fun53897
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53897_ip = 343;
                    continue _fun53897
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53897_ip = 323;
                    continue _fun53897
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53897_ip = 283;
                    continue _fun53897
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53897_ip = 270;
                    continue _fun53897
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun53897_ip = 163;
                    continue _fun53897
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53897_ip = 179;
                    continue _fun53897
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53897_ip = 249;
                    continue _fun53897
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53897_ip = 249;
                    continue _fun53897
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53897_ip = 234;
                    continue _fun53897
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53897_ip = 247;
                    continue _fun53897
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53897_ip = 265;
                continue _fun53897;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53897_ip = 283;
                continue _fun53897;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53897_ip = 323;
                    continue _fun53897
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun53897_ip = 330;
                    continue _fun53897
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53898: for (var _fun53898_ip = 0;;) switch (_fun53898_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53898_ip = 56;
                                continue _fun53898
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun53898_ip = 67;
                            continue _fun53898;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun53899: for (var _fun53899_ip = 0;;) switch (_fun53899_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53899_ip = 23;
                    continue _fun53899
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53899_ip = 33;
                    continue _fun53899
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun53899_ip = 70;
                    continue _fun53899
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53899_ip = 55;
                    continue _fun53899
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var2 = var1.elements;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var2 = var1.elements;
        var1 = 'external_link';
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.elements;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.type;
            var1 = _closure1_slot11;
            var0 = var1.includes;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var15 = 1;
    var3 = var5[var15];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REMEDIATION_ELEMENT_TYPES;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IN_APP_REPORTS_NODE;
    var _closure1_slot12 = var3;
    var11 = 8;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var3 = var3.ChannelTypes;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
        'backgroundColor': null,
        'marginTop': 30
    };
    var9 = 12;
    var10 = var5[var9];
    var10 = var14.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'marginTop': 24
    };
    var3.scrollView = var8;
    var10 = 16;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'paddingHorizontal': 16
    };
    var3.childrenContainer = var8;
    var8 = {
        'alignSelf': 'stretch',
        'marginBottom': 24,
        'paddingHorizontal': 16
    };
    var3.headerContainer = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.header = var8;
    var13 = 20;
    var8 = {
        'lineHeight': 20,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.subheader = var8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.description = var8;
    var8 = {
        'alignSelf': 'stretch',
        'backgroundColor': null,
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 1,
        'padding': 8,
        'flexDirection': 'row',
        'marginBottom': 16,
        'marginHorizontal': 16
    };
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var8.backgroundColor = var16;
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var8.borderRadius = var16;
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var8.borderColor = var16;
    var3.infoBox = var8;
    var8 = {
        'flex': 1,
        'lineHeight': 18,
        'marginStart': 8,
        'marginTop': 3
    };
    var3.infoBoxText = var8;
    var8 = {};
    var8.marginBottom = var11;
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var8.borderRadius = var16;
    var3.childButton = var8;
    var8 = {
        'minHeight': 60,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'backgroundColor': null,
        'paddingVertical': 16,
        'paddingStart': 16,
        'paddingEnd': 8
    };
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var16;
    var16 = var5[var9];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var8.borderRadius = var16;
    var3.childContainer = var8;
    var8 = {};
    var8.flex = var15;
    var3.childContent = var8;
    var8 = {};
    var8.lineHeight = var13;
    var3.childButtonText = var8;
    var8 = {
        'marginTop': 4,
        'lineHeight': 16
    };
    var3.debugText = var8;
    var8 = {};
    var13 = 13;
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var12 = var12.DISPLAY_EXTRABOLD;
    var9 = var5[var9];
    var9 = var14.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var18 = var13.bind(var0)(var12, var9, var10);
    var19 = var8;
    var9 = copyDataProperties(var19, var18);
    var9 = 'marginBottom';
    var8[var9] = var11;
    var9 = 'paddingHorizontal';
    var8[var9] = var10;
    var3.remediationHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = function arg0() {
        _fun53907: for (var _fun53907_ip = 0;;) switch (_fun53907_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.node;
                var12 = var0.header;
                var14 = var0.subheader;
                var9 = var0.description;
                var0 = _closure1_slot18;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 14;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getParser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var1.bind(var3)(var0);
                var2 = _closure1_slot17;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var10.headerContainer;
                var0.style = var4;
                var8 = null;
                var5 = var8 != var12;
                if (!var5) {
                    _fun53907_ip = 107;
                    continue _fun53907
                }
            case 99:
                var4 = '';
                var5 = var4 !== var12;
            case 107:
                if (!var5) {
                    _fun53907_ip = 174;
                    continue _fun53907
                }
            case 110:
                var11 = _closure1_slot16;
                var7 = _closure1_slot0;
                var15 = _closure1_slot3;
                var4 = 16;
                var4 = var15[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var15 = var10.header;
                var4.style = var15;
                var4.children = var12;
                var5 = var11.bind(var3)(var7, var4);
            case 174:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = var8 != var14;
                var5 = null;
                if (!var7) {
                    _fun53907_ip = 277;
                    continue _fun53907
                }
            case 191:
                var11 = var14.length;
                var7 = 0;
                var7 = var11 > var7;
                var5 = null;
                if (!var7) {
                    _fun53907_ip = 277;
                    continue _fun53907
                }
            case 207:
                var12 = _closure1_slot16;
                var11 = _closure1_slot0;
                var15 = _closure1_slot3;
                var7 = 16;
                var7 = var15[var7];
                var7 = var11.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var15 = var10.subheader;
                var7.style = var15;
                var13 = var13.bind(var3)(var14);
                var7.children = var13;
                var5 = var12.bind(var3)(var11, var7);
            case 277:
                var4[1] = var5;
                var7 = var8 != var9;
                var5 = null;
                if (!var7) {
                    _fun53907_ip = 370;
                    continue _fun53907
                }
            case 290:
                var11 = var9.length;
                var7 = 0;
                var7 = var11 > var7;
                var5 = null;
                if (!var7) {
                    _fun53907_ip = 370;
                    continue _fun53907
                }
            case 306:
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var11 = _closure1_slot3;
                var6 = 16;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var10 = var10.description;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 370:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var3 = function arg0() {
        _fun53909: for (var _fun53909_ip = 0;;) switch (_fun53909_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.node;
                var10 = var0.info;
                var0 = _closure1_slot18;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 14;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getParser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var1.bind(var4)(var0);
                var0 = null;
                var1 = var0 == var10;
                if (var1) {
                    _fun53909_ip = 296;
                    continue _fun53909
                }
            case 72:
                var3 = _closure1_slot17;
                var2 = _closure1_slot6;
                var1 = {};
                var7 = var11.infoBox;
                var6 = new Array(2);
                var6[0] = var7;
                var8 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot3;
                var13 = 17;
                var13 = var12[var13];
                var16 = var7.bind(var4)(var13);
                var15 = var16.hexWithOpacity;
                var13 = var11.infoBox;
                var14 = var13.backgroundColor;
                var13 = 0.1;
                var13 = var15.bind(var16)(var14, var13);
                var8.backgroundColor = var13;
                var6[1] = var8;
                var1.style = var6;
                var8 = _closure1_slot16;
                var5 = 18;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.CircleInformationIcon;
                var5 = {};
                var13 = 'md';
                var5.size = var13;
                var13 = var11.infoBox;
                var13 = var13.backgroundColor;
                var5.color = var13;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 16;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'interactive-text-active'
                };
                var11 = var11.infoBoxText;
                var6.style = var11;
                var9 = var9.bind(var4)(var10);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 296:
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var3 = function arg0() {
        _fun53911: for (var _fun53911_ip = 0;;) switch (_fun53911_ip) {
            case 0:
                var6 = arg0;
                var4 = var6.child;
                var _closure2_slot0 = var4;
                var1 = var6.nodeMap;
                var11 = null;
                var3 = Object.create(var11);
                var5 = 0;
                var3.child = var5;
                var3.nodeMap = var5;
                var20 = {};
                var19 = var6;
                var18 = var3;
                var0 = copyDataProperties(var20, var19, var18);
                var _closure2_slot1 = var0;
                var0 = _closure1_slot18;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var7 = _closure1_slot4;
                var0 = 2;
                var0 = var7.bind(var3)(var4, var0);
                var13 = var0[var5];
                var6 = 1;
                var0 = var0[var6];
                var10 = _closure1_slot5;
                var9 = var10.useState;
                var4 = function() { // Environment: var2
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = var2.onPress;
                        var0 = _closure2_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var4 = var9.bind(var10)(var4);
                var4 = var7.bind(var3)(var4, var6);
                var4 = var4[var5];
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 19;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.useStateFromStores;
                var9 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var9;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.get;
                    var0 = 'iar_show_report_sub_type_labels';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var6.bind(var7)(var5, var2);
                var0 = var1[var0];
                var1 = var11 == var0;
                var14 = undefined;
                if (var1) {
                    _fun53911_ip = 187;
                    continue _fun53911
                }
            case 181:
                var14 = var0.report_type;
            case 187:
                var2 = _closure1_slot16;
                var12 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 20;
                var0 = var9[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var5 = var15.childButton;
                var0.style = var5;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var0.onPress = var4;
                var6 = _closure1_slot17;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var15.childContainer;
                var4.style = var7;
                var7 = {};
                var16 = var15.childContent;
                var7.style = var16;
                var16 = 16;
                var9 = var9[var16];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var15.childButtonText;
                var9.style = var17;
                var9.children = var13;
                var12 = var2.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                if (!var10) {
                    _fun53911_ip = 341;
                    continue _fun53911
                }
            case 337:
                var10 = var11 != var14;
            case 341:
                if (!var10) {
                    _fun53911_ip = 406;
                    continue _fun53911
                }
            case 344:
                var13 = _closure1_slot16;
                var12 = _closure1_slot0;
                var11 = _closure1_slot3;
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var15 = var15.debugText;
                var11.style = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 406:
                var9[1] = var10;
                var7.children = var9;
                var9 = var6.bind(var3)(var5, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 21;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var3 = function arg0() {
        _fun53915: for (var _fun53915_ip = 0;;) switch (_fun53915_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.node;
                var7 = var1.children;
                var1 = var0.onSelectChild;
                var _closure2_slot0 = var1;
                var0 = var0.nodeMap;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot18;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var8 = null;
                var2 = var8 == var7;
                var0 = null;
                if (var2) {
                    _fun53915_ip = 118;
                    continue _fun53915
                }
            case 60:
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun53915_ip = 118;
                    continue _fun53915
                }
            case 73:
                var3 = _closure1_slot16;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var6.childrenContainer;
                var1.style = var6;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var3 = _closure1_slot4;
                    var4 = undefined;
                    var2 = 2;
                    var3 = var3.bind(var4)(var0, var2);
                    var2 = 0;
                    var8 = var3[var2];
                    var2 = 1;
                    var7 = var3[var2];
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot21;
                    var1 = {};
                    var1.child = var0;
                    var5 = _closure2_slot1;
                    var1.nodeMap = var5;
                    var0 = _closure2_slot0;
                    var1.onPress = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = '+';
                    var0 = var6.bind(var5)(var8, var0, var7);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 118:
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var3 = 51;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/NodeView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun53917: for (var _fun53917_ip = 0;;) switch (_fun53917_ip) {
            case 0:
                var18 = arg0;
                var _closure2_slot0 = var18;
                var0 = _closure1_slot18;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 22;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var10 = var18.node;
                var _closure2_slot2 = var10;
                var25 = var18.reportType;
                var _closure2_slot3 = var25;
                var24 = var18.reportSubType;
                var23 = var18.history;
                var _closure2_slot4 = var23;
                var21 = var18.nodeMap;
                var _closure2_slot5 = var21;
                var19 = var18.closeModal;
                var _closure2_slot6 = var19;
                var33 = var18.addOnCloseCallback;
                var12 = var18.onSubmit;
                var _closure2_slot7 = var12;
                var26 = var18.reportId;
                var20 = var18.onNavigate;
                var _closure2_slot8 = var20;
                var13 = _closure1_slot5;
                var9 = var13.useMemo;
                var6 = new Array(1);
                var6[0] = var25;
                var1 = function() { // Environment: var8
                    _fun53918: for (var _fun53918_ip = 0;;) switch (_fun53918_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = var0.name;
                            var2 = 'message';
                            var0 = undefined;
                            if (!(var2 === var3)) {
                                _fun53918_ip = 37;
                                continue _fun53918
                            }
                        case 22:
                            var1 = _closure2_slot3;
                            var1 = var1.record;
                            var0 = var1.channel_id;
                        case 37:
                            return var0;
                    }
                };
                var35 = var9.bind(var13)(var1, var6);
                var1 = _closure1_slot25;
                var6 = 'checkbox';
                var15 = var1.bind(var3)(var10, var6);
                var _closure2_slot9 = var15;
                var6 = 'text_line_resource';
                var34 = var1.bind(var3)(var10, var6);
                var6 = 'text';
                var32 = var1.bind(var3)(var10, var6);
                var6 = 23;
                var6 = var4[var6];
                var6 = var2.bind(var3)(var6);
                var6 = var6.ReportMenuTypeSets;
                var11 = var6.REPORT_TO_MOD;
                var9 = var11.has;
                var6 = var25.name;
                var17 = var9.bind(var11)(var6);
                var6 = var13.useState;
                var29 = false;
                var6 = var6.bind(var13)(var29);
                var28 = _closure1_slot4;
                var9 = 2;
                var6 = var28.bind(var3)(var6, var9);
                var14 = 0;
                var11 = var6[var14];
                var22 = 1;
                var6 = var6[var22];
                var _closure2_slot10 = var6;
                var6 = var13.useState;
                var6 = var6.bind(var13)(var29);
                var6 = var28.bind(var3)(var6, var9);
                var27 = var6[var14];
                var _closure2_slot11 = var27;
                var6 = var6[var22];
                var _closure2_slot12 = var6;
                var16 = var13.useState;
                var6 = function() { // Environment: var8
                    var0 = {};
                    return var0;
                };
                var6 = var16.bind(var13)(var6);
                var6 = var28.bind(var3)(var6, var9);
                var16 = var6[var14];
                var _closure2_slot13 = var16;
                var6 = var6[var22];
                var _closure2_slot14 = var6;
                var6 = var13.useState;
                var6 = var6.bind(var13)(var29);
                var6 = var28.bind(var3)(var6, var9);
                var9 = var6[var14];
                var6 = var6[var22];
                var _closure2_slot15 = var6;
                var28 = var13.useCallback;
                var22 = new Array(3);
                var22[0] = var10;
                var22[1] = var15;
                var22[2] = var16;
                var6 = function(arg0) { // Environment: var8
                    _fun53920: for (var _fun53920_ip = 0;;) switch (_fun53920_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var0.nodeRef = var1;
                            var1 = arg0;
                            var0.destination = var1;
                            var2 = _closure2_slot9;
                            var1 = null;
                            var2 = var1 != var2;
                            var1 = undefined;
                            if (!var2) {
                                _fun53920_ip = 68;
                                continue _fun53920
                            }
                        case 42:
                            var2 = {};
                            var4 = _closure2_slot9;
                            var4 = var4.name;
                            var2.name = var4;
                            var3 = _closure2_slot13;
                            var2.state = var3;
                            var1 = var2;
                        case 68:
                            var0.multiSelect = var1;
                            return var0;
                    }
                };
                var6 = var28.bind(var13)(var6, var22);
                var _closure2_slot16 = var6;
                var29 = var13.useEffect;
                var28 = new Array(1);
                var28[0] = var15;
                var22 = function() { // Environment: var8
                    _fun53921: for (var _fun53921_ip = 0;;) switch (_fun53921_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun53921_ip = 129;
                                continue _fun53921
                            }
                        case 15:
                            var1 = _closure2_slot9;
                            var1 = var1.data;
                            if (!(var0 != var1)) {
                                _fun53921_ip = 129;
                                continue _fun53921
                            }
                        case 28:
                            var10 = function arg0, arg1() {
                                _fun53922: for (var _fun53922_ip = 0;;) switch (_fun53922_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arg1;
                                        var _closure4_slot1 = var1;
                                        var2 = _closure3_slot0;
                                        var1 = true;
                                        if (!(var1 === var2)) {
                                            _fun53922_ip = 48;
                                            continue _fun53922
                                        }
                                    case 29:
                                        var2 = _closure2_slot14;
                                        var1 = undefined;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = {};
                                            var3 = arg0;
                                            var4 = var0;
                                            var1 = copyDataProperties(var4, var3);
                                            var2 = _closure4_slot0;
                                            var1 = _closure4_slot1;
                                            var0[var2] = var1;
                                            return var0;
                                        };
                                        var0 = var2.bind(var1)(var0);
                                    case 48:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = _closure1_slot23;
                            var8 = undefined;
                            var7 = var0.bind(var8)(var1);
                            var1 = var7.bind(var8)();
                            var0 = var1.done;
                            var6 = 4;
                            var5 = 0;
                            var4 = 1;
                            var3 = 2;
                            var2 = 3;
                            if (var0) {
                                _fun53921_ip = 129;
                                continue _fun53921
                            }
                        case 73:
                            var12 = var1.value;
                            var0 = _closure1_slot4;
                            var13 = var0.bind(var8)(var12, var6);
                            var12 = var13[var5];
                            var0 = var13[var4];
                            var14 = var13[var3];
                            var13 = var13[var2];
                            var _closure3_slot0 = var13;
                            var0 = var10.bind(var8)(var12, var0);
                            var12 = var7.bind(var8)();
                            var0 = var12.done;
                            var1 = var12;
                            if (!var0) {
                                _fun53921_ip = 73;
                                continue _fun53921
                            }
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = var29.bind(var13)(var22, var28);
                var28 = var13.useEffect;
                var22 = new Array(2);
                var22[0] = var0;
                var22[1] = var18;
                var18 = function() { // Environment: var8
                    var3 = _closure2_slot1;
                    var2 = var3.addListener;
                    var1 = 'beforeRemove';
                    var0 = function() { // Environment: var0
                        _fun53925: for (var _fun53925_ip = 0;;) switch (_fun53925_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var2 = var1.onNavigate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun53925_ip = 40;
                                    continue _fun53925
                                }
                            case 19:
                                var2 = _closure2_slot0;
                                var1 = var2.onNavigate;
                                var0 = '..';
                                var0 = var1.bind(var2)(var0);
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var18 = var28.bind(var13)(var18, var22);
                var22 = var13.useEffect;
                var28 = var10.is_auto_submit;
                var18 = new Array(4);
                var18[0] = var28;
                var18[1] = var27;
                var18[2] = var12;
                var12 = var10.id;
                var18[3] = var12;
                var12 = function() { // Environment: var8
                    _fun53926: for (var _fun53926_ip = 0;;) switch (_fun53926_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.is_auto_submit;
                            if (!var0) {
                                _fun53926_ip = 23;
                                continue _fun53926
                            }
                        case 16:
                            var1 = _closure2_slot11;
                            var0 = !var1;
                        case 23:
                            if (!var0) {
                                _fun53926_ip = 88;
                                continue _fun53926
                            }
                        case 26:
                            var1 = _closure2_slot12;
                            var2 = undefined;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                            var1 = _closure2_slot7;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var4 = var3.id;
                            var0.nodeRef = var4;
                            var4 = var3.id;
                            var3 = [''];
                            var3[1] = var4;
                            var0.destination = var3;
                            var0 = var1.bind(var2)(var0);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var22.bind(var13)(var12, var18);
                var18 = var13.useCallback;
                var12 = new Array(8);
                var12[0] = var10;
                var12[1] = var21;
                var12[2] = var0;
                var12[3] = var23;
                var12[4] = var20;
                var12[5] = var19;
                var12[6] = var25;
                var12[7] = var6;
                var6 = function(arg0) { // Environment: var8
                    _fun53927: for (var _fun53927_ip = 0;;) switch (_fun53927_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot4;
                            var0 = undefined;
                            var1 = 2;
                            var1 = var2.bind(var0)(var5, var1);
                            var10 = 1;
                            var4 = var1[var10];
                            var2 = _closure2_slot16;
                            var11 = var2.bind(var0)(var5);
                            var2 = _closure2_slot5;
                            var2 = var2[var4];
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun53927_ip = 426;
                                continue _fun53927
                            }
                        case 57:
                            var6 = _closure1_slot25;
                            var5 = 'skip';
                            var5 = var6.bind(var0)(var2, var5);
                            if (!(var4 != var5)) {
                                _fun53927_ip = 106;
                                continue _fun53927
                            }
                        case 75:
                            var5 = var2.button;
                            var7 = var4 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun53927_ip = 95;
                                continue _fun53927
                            }
                        case 90:
                            var6 = var5.type;
                        case 95:
                            var5 = 'next';
                            if (!(var5 !== var6)) {
                                _fun53927_ip = 389;
                                continue _fun53927
                            }
                        case 106:
                            var5 = _closure2_slot3;
                            var6 = var5.name;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var8 = 24;
                            var5 = var5[var8];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.ReportNames;
                            var5 = var5.MESSAGE;
                            if (!(var6 !== var5)) {
                                _fun53927_ip = 193;
                                continue _fun53927
                            }
                        case 151:
                            var5 = _closure2_slot3;
                            var6 = var5.name;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var5 = var5[var8];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.ReportNames;
                            var5 = var5.FIRST_DM;
                            if (!(var6 === var5)) {
                                _fun53927_ip = 308;
                                continue _fun53927
                            }
                        case 193:
                            var9 = _closure2_slot3;
                            var5 = var9.record;
                            var12 = var5.id;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var5 = 25;
                            var5 = var7[var5];
                            var8 = var6.bind(var0)(var5);
                            var7 = var8.trackWithMetadata;
                            var5 = _closure1_slot13;
                            var6 = var5.IAR_NAVIGATE;
                            var5 = {};
                            var5.message_id = var12;
                            var9 = var9.name;
                            var5.content_type = var9;
                            var9 = var2.report_type;
                            var5.report_sub_type = var9;
                            var9 = _closure2_slot2;
                            var9 = var9.id;
                            var5.current_node = var9;
                            var9 = var2.id;
                            var5.next_node = var9;
                            var5 = var7.bind(var8)(var6, var5);
                        case 308:
                            var7 = _closure2_slot1;
                            var6 = var7.push;
                            var5 = _closure1_slot12;
                            var3 = {};
                            var3.node = var2;
                            var14 = _closure2_slot4;
                            var8 = new Array(1);
                            var13 = 0;
                            var15 = var8;
                            var9 = arraySpread(var15, var14, var13);
                            var8[var9] = var11;
                            var9 = var9 + var10;
                            var3.history = var8;
                            var3 = var6.bind(var7)(var5, var3);
                            var3 = _closure2_slot8;
                            if (!(var4 != var3)) {
                                _fun53927_ip = 434;
                                continue _fun53927
                            }
                        case 373:
                            var4 = _closure2_slot8;
                            var3 = var2.key;
                            var3 = var4.bind(var0)(var3);
                            _fun53927_ip = 434;
                            continue _fun53927;
                        case 389:
                            var3 = _closure2_slot17;
                            var2 = var2.button;
                            var4 = var2.target;
                            var2 = [''];
                            var2[1] = var4;
                            var2 = var3.bind(var0)(var2);
                            return var2;
                        case 426:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)();
                        case 434:
                            return var0;
                    }
                };
                var22 = var18.bind(var13)(var6, var12);
                var _closure2_slot17 = var22;
                var12 = var13.useEffect;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var23;
                var6[2] = var0;
                var0 = function() { // Environment: var8
                    _fun53928: for (var _fun53928_ip = 0;;) switch (_fun53928_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.button;
                            var4 = null;
                            var5 = var4 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun53928_ip = 31;
                                continue _fun53928
                            }
                        case 26:
                            var3 = var2.type;
                        case 31:
                            var2 = 'done';
                            var2 = var2 === var3;
                            if (var2) {
                                _fun53928_ip = 74;
                                continue _fun53928
                            }
                        case 42:
                            var3 = _closure2_slot2;
                            var3 = var3.button;
                            var5 = var4 == var3;
                            var4 = undefined;
                            if (var5) {
                                _fun53928_ip = 66;
                                continue _fun53928
                            }
                        case 61:
                            var4 = var3.type;
                        case 66:
                            var3 = 'cancel';
                            var2 = var3 === var4;
                        case 74:
                            if (var2) {
                                _fun53928_ip = 92;
                                continue _fun53928
                            }
                        case 77:
                            var3 = _closure2_slot4;
                            var4 = var3.length;
                            var3 = 0;
                            var2 = var3 === var4;
                        case 92:
                            if (!var2) {
                                _fun53928_ip = 124;
                                continue _fun53928
                            }
                        case 95:
                            var3 = _closure2_slot1;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = _closure1_slot28;
                            var1.headerLeft = var4;
                            var1 = var2.bind(var3)(var1);
                        case 124:
                            return var0;
                    }
                };
                var0 = var12.bind(var13)(var0, var6);
                var12 = var13.useCallback;
                var6 = function(arg0) { // Environment: var8
                    _fun53929: for (var _fun53929_ip = 0;;) switch (_fun53929_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot9;
                            var1 = var3.getChannel;
                            var0 = var4.getChannelId;
                            var0 = var0.bind(var4)();
                            var6 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var6;
                            if (!var0) {
                                _fun53929_ip = 123;
                                continue _fun53929
                            }
                        case 39:
                            var3 = var6.type;
                            var1 = _closure1_slot14;
                            var1 = var1.DM;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun53929_ip = 80;
                                continue _fun53929
                            }
                        case 61:
                            var4 = var6.type;
                            var3 = _closure1_slot14;
                            var3 = var3.GROUP_DM;
                            var1 = var4 !== var3;
                        case 80:
                            if (!var1) {
                                _fun53929_ip = 120;
                                continue _fun53929
                            }
                        case 83:
                            var5 = _closure1_slot10;
                            var4 = var5.canWithPartialContext;
                            var2 = _closure1_slot15;
                            var3 = var2.MANAGE_MESSAGES;
                            var2 = {};
                            var6 = var6.id;
                            var2.channelId = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 120:
                            var0 = var1;
                        case 123:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var31 = var12.bind(var13)(var6, var0);
                var0 = 26;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIarReportSettingsUpsells;
                var27 = var0.bind(var2)(var24);
                var0 = 'ignore_users';
                var0 = var1.bind(var3)(var10, var0);
                var12 = null;
                var30 = var12 != var0;
                if (!var30) {
                    _fun53917_ip = 745;
                    continue _fun53917
                }
            case 677:
                var1 = var25.name;
                var0 = 'message';
                var0 = var0 === var1;
                if (var0) {
                    _fun53917_ip = 708;
                    continue _fun53917
                }
            case 693:
                var2 = var25.name;
                var1 = 'first_dm';
                var0 = var1 === var2;
            case 708:
                if (var0) {
                    _fun53917_ip = 724;
                    continue _fun53917
                }
            case 711:
                var2 = var25.name;
                var1 = 'user';
                var0 = var1 === var2;
            case 724:
                if (var0) {
                    _fun53917_ip = 742;
                    continue _fun53917
                }
            case 727:
                var2 = var25.name;
                var1 = 'report_to_mod_message';
                var0 = var1 === var2;
            case 742:
                var30 = var0;
            case 745:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 27;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useUserIsTeen;
                var29 = var0.bind(var1)();
                var1 = 28;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useActiveLinkUsers;
                var37 = var1.bind(var2)();
                if (!var29) {
                    _fun53917_ip = 809;
                    continue _fun53917
                }
            case 800:
                var0 = var37.length;
                var29 = var0 > var14;
            case 809:
                if (!var29) {
                    _fun53917_ip = 832;
                    continue _fun53917
                }
            case 812:
                var1 = _closure1_slot25;
                var0 = 'share_with_parents';
                var0 = var1.bind(var3)(var10, var0);
                var29 = var12 != var0;
            case 832:
                var2 = _closure1_slot17;
                var1 = _closure1_slot0;
                var19 = _closure1_slot3;
                var0 = 29;
                var0 = var19[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'style': null,
                    'bottom': true,
                    'top': true
                };
                var4 = var7.container;
                var0.style = var4;
                var13 = true;
                var6 = _closure1_slot7;
                var4 = {};
                var7 = var7.scrollView;
                var4.style = var7;
                var20 = _closure1_slot16;
                var18 = _closure1_slot1;
                var7 = 30;
                var7 = var19[var7];
                var18 = var18.bind(var3)(var7);
                var7 = {};
                var28 = _closure1_slot25;
                var19 = 'success';
                var19 = var28.bind(var3)(var10, var19);
                var7.element = var19;
                var18 = var20.bind(var3)(var18, var7);
                var7 = new Array(17);
                var7[0] = var18;
                var19 = _closure1_slot19;
                var18 = {};
                var18.node = var10;
                var18 = var20.bind(var3)(var19, var18);
                var7[1] = var18;
                var19 = _closure1_slot20;
                var18 = {};
                var18.node = var10;
                var18 = var20.bind(var3)(var19, var18);
                var7[2] = var18;
                var19 = var12 != var34;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1048;
                    continue _fun53917
                }
            case 1011:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var36 = _closure1_slot3;
                var19 = 31;
                var19 = var36[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.element = var34;
                var18 = var28.bind(var3)(var20, var19);
            case 1048:
                var7[3] = var18;
                var18 = var12 != var32;
                if (!var18) {
                    _fun53917_ip = 1096;
                    continue _fun53917
                }
            case 1059:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var34 = _closure1_slot3;
                var19 = 32;
                var19 = var34[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.element = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1096:
                var7[4] = var18;
                var19 = _closure1_slot25;
                var18 = 'message_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 == var18;
                var18 = null;
                if (var19) {
                    _fun53917_ip = 1210;
                    continue _fun53917
                }
            case 1123:
                var20 = var25.name;
                var19 = 'message';
                if (!(var19 !== var20)) {
                    _fun53917_ip = 1168;
                    continue _fun53917
                }
            case 1136:
                var20 = var25.name;
                var19 = 'first_dm';
                if (!(var19 !== var20)) {
                    _fun53917_ip = 1168;
                    continue _fun53917
                }
            case 1151:
                var20 = var25.name;
                var19 = 'report_to_mod_message';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1210;
                    continue _fun53917
                }
            case 1168:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 33;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.message = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1210:
                var7[5] = var18;
                var19 = _closure1_slot25;
                var18 = 'user_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1296;
                    continue _fun53917
                }
            case 1239:
                var20 = var25.name;
                var19 = 'user';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1296;
                    continue _fun53917
                }
            case 1254:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 34;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.user = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1296:
                var7[6] = var18;
                var19 = _closure1_slot25;
                var18 = 'channel_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1385;
                    continue _fun53917
                }
            case 1325:
                var20 = var25.name;
                var19 = 'stage_channel';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1385;
                    continue _fun53917
                }
            case 1342:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 35;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.stageInstance = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1385:
                var7[7] = var18;
                var19 = _closure1_slot25;
                var18 = 'guild_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1471;
                    continue _fun53917
                }
            case 1414:
                var20 = var25.name;
                var19 = 'guild';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1471;
                    continue _fun53917
                }
            case 1429:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 36;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.guild = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1471:
                var7[8] = var18;
                var19 = _closure1_slot25;
                var18 = 'guild_scheduled_event_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1558;
                    continue _fun53917
                }
            case 1500:
                var20 = var25.name;
                var19 = 'guild_scheduled_event';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1558;
                    continue _fun53917
                }
            case 1515:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 37;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.event = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1558:
                var7[9] = var18;
                var19 = _closure1_slot25;
                var18 = 'guild_discovery_preview';
                var18 = var19.bind(var3)(var10, var18);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 1646;
                    continue _fun53917
                }
            case 1587:
                var20 = var25.name;
                var19 = 'guild_discovery';
                var18 = null;
                if (!(var19 === var20)) {
                    _fun53917_ip = 1646;
                    continue _fun53917
                }
            case 1604:
                var28 = _closure1_slot16;
                var20 = _closure1_slot1;
                var32 = _closure1_slot3;
                var19 = 38;
                var19 = var32[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var25.record;
                var19.guild = var32;
                var18 = var28.bind(var3)(var20, var19);
            case 1646:
                var7[10] = var18;
                var20 = _closure1_slot16;
                var19 = _closure1_slot1;
                var28 = _closure1_slot3;
                var18 = 39;
                var18 = var28[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var32 = _closure1_slot25;
                var28 = 'breadcrumbs';
                var28 = var32.bind(var3)(var10, var28);
                var18.element = var28;
                var28 = var25.name;
                var18.menuName = var28;
                var18.history = var23;
                var18 = var20.bind(var3)(var19, var18);
                var7[11] = var18;
                var18 = _closure1_slot27;
                var18 = var18.bind(var3)(var10);
                if (!var18) {
                    _fun53917_ip = 2485;
                    continue _fun53917
                }
            case 1735:
                var23 = _closure1_slot17;
                var20 = _closure1_slot1;
                var28 = _closure1_slot3;
                var19 = 40;
                var19 = var28[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var32 = var30;
                if (!var32) {
                    _fun53917_ip = 1845;
                    continue _fun53917
                }
            case 1767:
                var36 = _closure1_slot16;
                var34 = _closure1_slot1;
                var38 = _closure1_slot3;
                var28 = 41;
                var28 = var38[var28];
                var34 = var34.bind(var3)(var28);
                var28 = {};
                var39 = var25.name;
                var38 = 'user';
                if (!(var38 !== var39)) {
                    _fun53917_ip = 1820;
                    continue _fun53917
                }
            case 1806:
                var38 = var25.record;
                var38 = var38.author;
                _fun53917_ip = 1826;
                continue _fun53917;
            case 1820:
                var38 = var25.record;
            case 1826:
                var28.user = var38;
                var28.channelId = var35;
                var28.reportId = var26;
                var32 = var36.bind(var3)(var34, var28);
            case 1845:
                var28 = new Array(6);
                var28[0] = var32;
                if (!var29) {
                    _fun53917_ip = 1893;
                    continue _fun53917
                }
            case 1856:
                var36 = _closure1_slot16;
                var34 = _closure1_slot1;
                var38 = _closure1_slot3;
                var32 = 42;
                var32 = var38[var32];
                var34 = var34.bind(var3)(var32);
                var32 = {};
                var32.parents = var37;
                var29 = var36.bind(var3)(var34, var32);
            case 1893:
                var28[1] = var29;
                var32 = _closure1_slot25;
                var29 = 'block_users';
                var29 = var32.bind(var3)(var10, var29);
                var29 = var12 != var29;
                if (!var29) {
                    _fun53917_ip = 1988;
                    continue _fun53917
                }
            case 1920:
                var34 = var25.name;
                var32 = 'message';
                var32 = var32 === var34;
                if (var32) {
                    _fun53917_ip = 1951;
                    continue _fun53917
                }
            case 1936:
                var36 = var25.name;
                var34 = 'first_dm';
                var32 = var34 === var36;
            case 1951:
                if (var32) {
                    _fun53917_ip = 1967;
                    continue _fun53917
                }
            case 1954:
                var36 = var25.name;
                var34 = 'user';
                var32 = var34 === var36;
            case 1967:
                if (var32) {
                    _fun53917_ip = 1985;
                    continue _fun53917
                }
            case 1970:
                var36 = var25.name;
                var34 = 'report_to_mod_message';
                var32 = var34 === var36;
            case 1985:
                var29 = var32;
            case 1988:
                if (!var29) {
                    _fun53917_ip = 2069;
                    continue _fun53917
                }
            case 1991:
                var36 = _closure1_slot16;
                var34 = _closure1_slot1;
                var37 = _closure1_slot3;
                var32 = 43;
                var32 = var37[var32];
                var34 = var34.bind(var3)(var32);
                var32 = {};
                var38 = var25.name;
                var37 = 'user';
                if (!(var37 !== var38)) {
                    _fun53917_ip = 2044;
                    continue _fun53917
                }
            case 2030:
                var37 = var25.record;
                var37 = var37.author;
                _fun53917_ip = 2050;
                continue _fun53917;
            case 2044:
                var37 = var25.record;
            case 2050:
                var32.user = var37;
                var32.channelId = var35;
                var32.reportId = var26;
                var29 = var36.bind(var3)(var34, var32);
            case 2069:
                var28[2] = var29;
                var29 = !var30;
                if (var30) {
                    _fun53917_ip = 2099;
                    continue _fun53917
                }
            case 2079:
                var32 = _closure1_slot25;
                var30 = 'mute_users';
                var30 = var32.bind(var3)(var10, var30);
                var29 = var12 != var30;
            case 2099:
                if (!var29) {
                    _fun53917_ip = 2170;
                    continue _fun53917
                }
            case 2102:
                var32 = var25.name;
                var30 = 'message';
                var30 = var30 === var32;
                if (var30) {
                    _fun53917_ip = 2133;
                    continue _fun53917
                }
            case 2118:
                var34 = var25.name;
                var32 = 'first_dm';
                var30 = var32 === var34;
            case 2133:
                if (var30) {
                    _fun53917_ip = 2149;
                    continue _fun53917
                }
            case 2136:
                var34 = var25.name;
                var32 = 'user';
                var30 = var32 === var34;
            case 2149:
                if (var30) {
                    _fun53917_ip = 2167;
                    continue _fun53917
                }
            case 2152:
                var34 = var25.name;
                var32 = 'report_to_mod_message';
                var30 = var32 === var34;
            case 2167:
                var29 = var30;
            case 2170:
                if (!var29) {
                    _fun53917_ip = 2251;
                    continue _fun53917
                }
            case 2173:
                var34 = _closure1_slot16;
                var32 = _closure1_slot1;
                var36 = _closure1_slot3;
                var30 = 44;
                var30 = var36[var30];
                var32 = var32.bind(var3)(var30);
                var30 = {};
                var37 = var25.name;
                var36 = 'user';
                if (!(var36 !== var37)) {
                    _fun53917_ip = 2226;
                    continue _fun53917
                }
            case 2212:
                var36 = var25.record;
                var36 = var36.author;
                _fun53917_ip = 2232;
                continue _fun53917;
            case 2226:
                var36 = var25.record;
            case 2232:
                var30.user = var36;
                var30.channelId = var35;
                var30.reportId = var26;
                var29 = var34.bind(var3)(var32, var30);
            case 2251:
                var28[3] = var29;
                var30 = _closure1_slot25;
                var29 = 'delete_message';
                var29 = var30.bind(var3)(var10, var29);
                var29 = var12 != var29;
                if (!var29) {
                    _fun53917_ip = 2312;
                    continue _fun53917
                }
            case 2278:
                var32 = var25.name;
                var30 = 'message';
                var30 = var30 === var32;
                if (var30) {
                    _fun53917_ip = 2309;
                    continue _fun53917
                }
            case 2294:
                var34 = var25.name;
                var32 = 'report_to_mod_message';
                var30 = var32 === var34;
            case 2309:
                var29 = var30;
            case 2312:
                if (!var29) {
                    _fun53917_ip = 2326;
                    continue _fun53917
                }
            case 2315:
                var30 = var25.record;
                var29 = var31.bind(var3)(var30);
            case 2326:
                if (!var29) {
                    _fun53917_ip = 2376;
                    continue _fun53917
                }
            case 2329:
                var32 = _closure1_slot16;
                var31 = _closure1_slot1;
                var34 = _closure1_slot3;
                var30 = 45;
                var30 = var34[var30];
                var31 = var31.bind(var3)(var30);
                var30 = {};
                var34 = var25.record;
                var30.message = var34;
                var30.reportId = var26;
                var29 = var32.bind(var3)(var31, var30);
            case 2376:
                var28[4] = var29;
                var30 = _closure1_slot25;
                var29 = 'leave_guild';
                var29 = var30.bind(var3)(var10, var29);
                var29 = var12 != var29;
                if (!var29) {
                    _fun53917_ip = 2416;
                    continue _fun53917
                }
            case 2403:
                var31 = var25.name;
                var30 = 'guild';
                var29 = var30 === var31;
            case 2416:
                if (!var29) {
                    _fun53917_ip = 2471;
                    continue _fun53917
                }
            case 2419:
                var32 = _closure1_slot16;
                var31 = _closure1_slot1;
                var34 = _closure1_slot3;
                var30 = 46;
                var30 = var34[var30];
                var31 = var31.bind(var3)(var30);
                var30 = {};
                var34 = var25.record;
                var30.guild = var34;
                var30.reportId = var26;
                var30.addCallback = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 2471:
                var28[5] = var29;
                var19.children = var28;
                var18 = var23.bind(var3)(var20, var19);
            case 2485:
                var7[12] = var18;
                var19 = _closure1_slot25;
                var18 = 'settings_upsells';
                var18 = var19.bind(var3)(var10, var18);
                var18 = var12 != var18;
                if (!var18) {
                    _fun53917_ip = 2546;
                    continue _fun53917
                }
            case 2512:
                var20 = var25.name;
                var19 = 'message';
                var19 = var19 === var20;
                if (var19) {
                    _fun53917_ip = 2543;
                    continue _fun53917
                }
            case 2528:
                var23 = var25.name;
                var20 = 'report_to_mod_message';
                var19 = var20 === var23;
            case 2543:
                var18 = var19;
            case 2546:
                if (!var18) {
                    _fun53917_ip = 2553;
                    continue _fun53917
                }
            case 2549:
                var18 = var12 != var27;
            case 2553:
                if (!var18) {
                    _fun53917_ip = 2623;
                    continue _fun53917
                }
            case 2556:
                var23 = _closure1_slot16;
                var20 = _closure1_slot1;
                var28 = _closure1_slot3;
                var19 = 47;
                var19 = var28[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.settingsUpsells = var27;
                var27 = var25.record;
                var27 = var27.channel_id;
                var19.channelId = var27;
                var19.reportId = var26;
                var19.reportType = var25;
                var19.reportSubType = var24;
                var18 = var23.bind(var3)(var20, var19);
            case 2623:
                var7[13] = var18;
                var20 = _closure1_slot16;
                var19 = _closure1_slot1;
                var23 = _closure1_slot3;
                var18 = 48;
                var18 = var23[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var18.element = var15;
                var18.state = var16;
                var23 = function arg0, arg1() {
                    _fun53930: for (var _fun53930_ip = 0;;) switch (_fun53930_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = {};
                            var3 = _closure2_slot13;
                            var6 = var2;
                            var5 = var3;
                            var4 = copyDataProperties(var6, var5);
                            var3 = var1 in var3;
                            if (var3) {
                                _fun53930_ip = 38;
                                continue _fun53930
                            }
                        case 29:
                            var3 = arg1;
                            var2[var1] = var3;
                            _fun53930_ip = 42;
                            continue _fun53930;
                        case 38:
                            var1 = delete var2[var1];
                        case 42:
                            var1 = _closure2_slot14;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var18.onPress = var23;
                var18 = var20.bind(var3)(var19, var18);
                var7[14] = var18;
                var19 = _closure1_slot22;
                var18 = {};
                var18.node = var10;
                var18.onSelectChild = var22;
                var18.nodeMap = var21;
                var18 = var20.bind(var3)(var19, var18);
                var7[15] = var18;
                var18 = _closure1_slot25;
                var23 = 'external_link';
                var18 = var18.bind(var3)(var10, var23);
                var19 = var12 != var18;
                var18 = null;
                if (!var19) {
                    _fun53917_ip = 2784;
                    continue _fun53917
                }
            case 2737:
                var21 = _closure1_slot16;
                var20 = _closure1_slot1;
                var22 = _closure1_slot3;
                var19 = 49;
                var19 = var22[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var22 = _closure1_slot26;
                var22 = var22.bind(var3)(var10, var23);
                var19.elements = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 2784:
                var7[16] = var18;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot1;
                var18 = _closure1_slot3;
                var5 = 50;
                var5 = var18[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.isModeratorReport = var17;
                if (var11) {
                    _fun53917_ip = 2892;
                    continue _fun53917
                }
            case 2840:
                var17 = var12 == var15;
                var12 = undefined;
                if (var17) {
                    _fun53917_ip = 2855;
                    continue _fun53917
                }
            case 2849:
                var12 = var15.should_submit_data;
            case 2855:
                var12 = var13 === var12;
                if (!var12) {
                    _fun53917_ip = 2889;
                    continue _fun53917
                }
            case 2862:
                var13 = global;
                var15 = var13.Object;
                var13 = var15.keys;
                var13 = var13.bind(var15)(var16);
                var13 = var13.length;
                var12 = var14 === var13;
            case 2889:
                var11 = var12;
            case 2892:
                var5.disabled = var11;
                var10 = var10.button;
                var5.button = var10;
                var5.hasError = var9;
                var8 = function arg0() {
                    _fun53931: for (var _fun53931_ip = 0;;) switch (_fun53931_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var1 = 'done';
                            if (!(var1 !== var2)) {
                                _fun53931_ip = 91;
                                continue _fun53931
                            }
                        case 16:
                            var1 = 'cancel';
                            if (!(var1 !== var2)) {
                                _fun53931_ip = 91;
                                continue _fun53931
                            }
                        case 24:
                            var1 = 'next';
                            if (!(var1 !== var2)) {
                                _fun53931_ip = 55;
                                continue _fun53931
                            }
                        case 32:
                            var1 = 'submit';
                            if (!(var1 === var2)) {
                                _fun53931_ip = 125;
                                continue _fun53931
                            }
                        case 40:
                            var2 = function() { // Environment: var1
                                var4 = _closure2_slot10;
                                var0 = undefined;
                                var3 = true;
                                var3 = var4.bind(var0)(var3);
                                var3 = _closure2_slot0;
                                var3 = var3.successNodeId;
                                var4 = [''];
                                var4[1] = var3;
                                var _closure4_slot0 = var4;
                                var3 = _closure2_slot7;
                                var2 = _closure2_slot16;
                                var2 = var2.bind(var0)(var4);
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.then;
                                var2 = function() { // Environment: var1
                                    var3 = _closure2_slot15;
                                    var0 = undefined;
                                    var2 = false;
                                    var2 = var3.bind(var0)(var2);
                                    var2 = _closure2_slot17;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.catch;
                                var2 = function() { // Environment: var1
                                    var2 = _closure2_slot15;
                                    var0 = undefined;
                                    var1 = true;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.finally;
                                var1 = function() { // Environment: var1
                                    var2 = _closure2_slot10;
                                    var0 = undefined;
                                    var1 = false;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun53931_ip = 125;
                            continue _fun53931;
                        case 55:
                            var2 = _closure2_slot17;
                            var0 = var0.target;
                            var1 = [''];
                            var1[1] = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun53931_ip = 125;
                            continue _fun53931;
                        case 91:
                            var2 = _closure2_slot17;
                            var1 = [''];
                            var0 = -1;
                            var1[1] = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4004, 1372, 3091, 6521, 6519, 660, 483, 33, 1297, 671, 4682, 4930, 3938, 3941, 3240, 3266, 566, 4904, 6522, 1469, 6516, 6514, 4302, 6524, 6528, 6529, 4736, 6532, 6533, 6534, 6535, 12116, 12117, 12118, 12119, 12120, 12121, 12122, 12123, 12125, 12126, 12127, 12128, 12129, 12130, 12131, 12132, 12133, 2]);