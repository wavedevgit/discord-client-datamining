// utils/native/ChangeLogUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var5 = var1.node;
        var7 = var1.output;
        var0 = var1.state;
        var1 = var1.styling;
        var3 = _closure1_slot6;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var3 = _closure1_slot5;
        var1 = var1.components;
        var2 = var1.Link;
        var1 = {};
        var6 = var6.link;
        var1.className = var6;
        var6 = var5.target;
        var1.target = var6;
        var6 = var5.content;
        var5 = {};
        var12 = var5;
        var11 = var0;
        var8 = copyDataProperties(var12, var11);
        var9 = true;
        var8 = 'inLink';
        var5[var8] = var9;
        var5 = var7.bind(var4)(var6, var5);
        var1.children = var5;
        var0 = var0.key;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun56605: for (var _fun56605_ip = 0;;) switch (_fun56605_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.node;
                var0 = var1.output;
                var _closure2_slot0 = var0;
                var0 = var1.state;
                var _closure2_slot1 = var0;
                var2 = var1.styling;
                var _closure2_slot2 = var2;
                var3 = _closure1_slot6;
                var4 = undefined;
                var7 = var3.bind(var4)();
                var2 = var2.components;
                var3 = var2.List;
                if (var3) {
                    _fun56605_ip = 74;
                    continue _fun56605
                }
            case 70:
                var3 = _closure1_slot3;
            case 74:
                var2 = _closure1_slot5;
                var1 = {};
                var7 = var7.list;
                var1.style = var7;
                var7 = var6.items;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot5;
                    var1 = _closure2_slot2;
                    var1 = var1.components;
                    var3 = var1.ListItem;
                    var2 = {};
                    var0 = function arg0() {
                        var9 = _closure3_slot0;
                        var8 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var2 = function arg0, arg1, arg2, arg3() {
                            var4 = arg0;
                            var0 = arg1;
                            var _closure5_slot0 = var0;
                            var0 = arg2;
                            var _closure5_slot1 = var0;
                            var0 = arg3;
                            var _closure5_slot2 = var0;
                            var2 = function() {
                                _fun56609: for (var _fun56609_ip = 0;;) switch (_fun56609_ip) {
                                    case 0:
                                        var0 = _closure5_slot4;
                                        var2 = var0.length;
                                        var0 = 0;
                                        if (!(var2 > var0)) {
                                            _fun56609_ip = 128;
                                            continue _fun56609
                                        }
                                    case 18:
                                        var3 = _closure5_slot3;
                                        var2 = var3.push;
                                        var7 = _closure1_slot5;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 7;
                                        var0 = var5[var0];
                                        var6 = undefined;
                                        var0 = var4.bind(var6)(var0);
                                        var5 = var0.LegacyText;
                                        var4 = {};
                                        var11 = _closure5_slot2;
                                        var12 = var4;
                                        var0 = copyDataProperties(var12, var11);
                                        var9 = _closure5_slot0;
                                        var8 = _closure5_slot4;
                                        var0 = _closure5_slot1;
                                        var8 = var9.bind(var6)(var8, var0);
                                        var0 = 'children';
                                        var4[var0] = var8;
                                        var0 = -1;
                                        var0 = var7.bind(var6)(var5, var4, var0);
                                        var0 = var2.bind(var3)(var0);
                                        var0 = new Array(0);
                                        _closure5_slot4 = var0;
                                    case 128:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure5_slot5 = var2;
                            var0 = new Array(0);
                            var _closure5_slot3 = var0;
                            var3 = new Array(0);
                            var _closure5_slot4 = var3;
                            var3 = var4.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun56610: for (var _fun56610_ip = 0;;) switch (_fun56610_ip) {
                                    case 0:
                                        var8 = arg0;
                                        var1 = var8.type;
                                        var0 = 'list';
                                        if (!(var0 !== var1)) {
                                            _fun56610_ip = 35;
                                            continue _fun56610
                                        }
                                    case 16:
                                        var1 = _closure5_slot4;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var8);
                                        _fun56610_ip = 103;
                                        continue _fun56610;
                                    case 35:
                                        var1 = _closure5_slot5;
                                        var6 = undefined;
                                        var1 = var1.bind(var6)();
                                        var2 = _closure5_slot3;
                                        var1 = var2.push;
                                        var5 = _closure1_slot5;
                                        var4 = _closure1_slot3;
                                        var3 = {};
                                        var7 = _closure5_slot0;
                                        var0 = _closure5_slot1;
                                        var0 = var7.bind(var6)(var8, var0);
                                        var3.children = var0;
                                        var0 = arg1;
                                        var0 = var5.bind(var6)(var4, var3, var0);
                                        var0 = var1.bind(var2)(var0);
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var0;
                        };
                        var10 = undefined;
                        var6 = arg0;
                        var0 = var10[var2](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var0.key;
                var0 = var2.bind(var4)(var3, var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun56611: for (var _fun56611_ip = 0;;) switch (_fun56611_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.node;
                var6 = var1.output;
                var0 = var1.state;
                var2 = var1.styling;
                var3 = _closure1_slot6;
                var4 = undefined;
                var7 = var3.bind(var4)();
                var8 = var2.components;
                var2 = null;
                var9 = var2 == var8;
                var3 = undefined;
                if (var9) {
                    _fun56611_ip = 62;
                    continue _fun56611
                }
            case 56:
                var3 = var8.Paragraph;
            case 62:
                if (!(var2 == var3)) {
                    _fun56611_ip = 92;
                    continue _fun56611
                }
            case 66:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var2 = var8.bind(var4)(var2);
                var3 = var2.LegacyText;
            case 92:
                var2 = _closure1_slot5;
                var1 = {};
                var7 = var7.text;
                var1.style = var7;
                var5 = var5.content;
                var5 = var6.bind(var4)(var5, var0);
                var1.children = var5;
                var0 = var0.key;
                var0 = var2.bind(var4)(var3, var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.node;
        var0 = var0.state;
        var1 = _closure1_slot6;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.image;
        var1.style = var5;
        var5 = {};
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 8;
        var7 = var9[var7];
        var8 = var8.bind(var4)(var7);
        var7 = var8.sanitizeUrl;
        var6 = var6.target;
        var6 = var7.bind(var8)(var6);
        var5.uri = var6;
        var1.source = var5;
        var0 = var0.key;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.node;
        var9 = var0.output;
        var0 = var0.state;
        var1 = _closure1_slot6;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var10.container;
        var1.style = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 7;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.LegacyText;
        var5 = {};
        var10 = var10.text;
        var5.style = var10;
        var8 = var8.content;
        var8 = var9.bind(var4)(var8, var0);
        var5.children = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1.children = var5;
        var0 = var0.key;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.View;
    var _closure1_slot3 = var7;
    var1 = var1.Image;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BLUE_345;
    var9.color = var10;
    var1.link = var9;
    var9 = {};
    var10 = 10;
    var9.marginBottom = var10;
    var1.list = var9;
    var9 = {
        'alignSelf': 'center',
        'flex': 1
    };
    var1.image = var9;
    var9 = {
        'borderLeftWidth': 2,
        'paddingLeft': 8,
        'marginBottom': 10
    };
    var10 = 5;
    var11 = var6[var10];
    var11 = var5.bind(var0)(var11);
    var11 = var11.DARK_PRIMARY_500_LIGHT_PRIMARY_300;
    var9.borderLeftColor = var11;
    var1.container = var9;
    var9 = {
        'fontSize': 14,
        'lineHeight': 18,
        'marginBottom': 8
    };
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_200_LIGHT_PRIMARY_400;
    var9.color = var10;
    var1.text = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var6[var1];
    var7 = var3.bind(var0)(var1);
    var3 = var7.createRules;
    var1 = {};
    var3 = var3.bind(var7)(var1);
    var1 = {};
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = function arg0, arg1, arg2() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var1 = {};
            var0 = arg0;
            var1.node = var0;
            var0 = arg1;
            var1.output = var0;
            var0 = arg2;
            var1.state = var0;
            var0 = _closure2_slot0;
            var1.styling = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.react = var1;
        return var0;
    };
    var1.link = var7;
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = function arg0, arg1, arg2() {
            var1 = arg0;
            var0 = arg2;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var2 = var2.components;
            var3 = var2.LHeading;
            var2 = {};
            var5 = var1.className;
            var2.className = var5;
            var6 = var1.content;
            var5 = arg1;
            var1 = undefined;
            var5 = var5.bind(var1)(var6, var0);
            var2.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var0.react = var1;
        return var0;
    };
    var1.lheading = var7;
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = function arg0, arg1, arg2() {
            var1 = arg0;
            var0 = arg2;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var2 = var2.components;
            var3 = var2.Heading;
            var2 = {};
            var5 = var1.className;
            var2.className = var5;
            var5 = var1.level;
            var2.level = var5;
            var6 = var1.content;
            var5 = arg1;
            var1 = undefined;
            var5 = var5.bind(var1)(var6, var0);
            var2.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var0.react = var1;
        return var0;
    };
    var1.heading = var7;
    var7 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = function arg0, arg1, arg2() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot8;
            var1 = {};
            var0 = arg0;
            var1.node = var0;
            var0 = arg1;
            var1.output = var0;
            var0 = arg2;
            var1.state = var0;
            var0 = _closure2_slot0;
            var1.styling = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.react = var1;
        return var0;
    };
    var1.list = var7;
    var7 = {};
    var8 = function arg0, arg1, arg2() {
        var3 = _closure1_slot5;
        var2 = _closure1_slot10;
        var1 = {};
        var0 = arg0;
        var1.node = var0;
        var0 = arg1;
        var1.output = var0;
        var0 = arg2;
        var1.state = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7.react = var8;
    var1.image = var7;
    var7 = {};
    var8 = function arg0, arg1, arg2() {
        var3 = _closure1_slot5;
        var2 = _closure1_slot11;
        var1 = {};
        var0 = arg0;
        var1.node = var0;
        var0 = arg1;
        var1.output = var0;
        var0 = arg2;
        var1.state = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var7.react = var8;
    var1.blockQuote = var7;
    var4 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = function arg0, arg1, arg2() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot9;
            var1 = {};
            var0 = arg0;
            var1.node = var0;
            var0 = arg1;
            var1.output = var0;
            var0 = arg2;
            var1.state = var0;
            var0 = _closure2_slot0;
            var1.styling = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.react = var1;
        return var0;
    };
    var1.paragraph = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/ChangeLogUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.baseRules = var3;
    var2.customRules = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4874, 3939, 4878, 3148, 2]);