// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: rgb2hex, environment: var1
        _fun65392: for (var _fun65392_ip = 0;;) switch (_fun65392_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.length;
                var0 = '';
                var2 = 3;
                if (!(var2 === var3)) {
                    _fun65392_ip = 176;
                    continue _fun65392
                }
            case 22:
                var3 = global;
                var4 = var3.parseInt;
                var2 = 0;
                var2 = var1[var2];
                var8 = undefined;
                var7 = 10;
                var4 = var4.bind(var8)(var2, var7);
                var2 = var4.toString;
                var6 = 16;
                var9 = var2.bind(var4)(var6);
                var2 = var9.padStart;
                var5 = 2;
                var4 = '0';
                var9 = var2.bind(var9)(var5, var4);
                var2 = '#';
                var9 = var2 + var9;
                var10 = var3.parseInt;
                var2 = 1;
                var2 = var1[var2];
                var10 = var10.bind(var8)(var2, var7);
                var2 = var10.toString;
                var10 = var2.bind(var10)(var6);
                var2 = var10.padStart;
                var2 = var2.bind(var10)(var5, var4);
                var2 = var9 + var2;
                var3 = var3.parseInt;
                var1 = var1[var5];
                var3 = var3.bind(var8)(var1, var7);
                var1 = var3.toString;
                var3 = var1.bind(var3)(var6);
                var1 = var3.padStart;
                var1 = var1.bind(var3)(var5, var4);
                var0 = var2 + var1;
            case 176:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function(arg0) { // Original name: colorToHex, environment: var1
        _fun65393: for (var _fun65393_ip = 0;;) switch (_fun65393_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                if (!(var3 !== var0)) {
                    _fun65393_ip = 485;
                    continue _fun65393
                }
            case 12:
                var1 = 'none';
                if (!(var1 !== var0)) {
                    _fun65393_ip = 483;
                    continue _fun65393
                }
            case 23:
                var2 = var0.includes;
                var1 = 'rgb';
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun65393_ip = 403;
                    continue _fun65393
                }
            case 43:
                var2 = var0.includes;
                var1 = 'hsl';
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun65393_ip = 275;
                    continue _fun65393
                }
            case 63:
                var1 = var0.includes;
                var4 = '#';
                var1 = var1.bind(var0)(var4);
                if (!var1) {
                    _fun65393_ip = 156;
                    continue _fun65393
                }
            case 80:
                var2 = /^#([0-9A-Fa-f]{3}){1,2}$/i;
                var1 = var2.test;
                var1 = var1.bind(var2)(var0);
                if (var1) {
                    _fun65393_ip = 132;
                    continue _fun65393
                }
            case 107:
                var1 = global;
                var2 = var1.Error;
                var1 = 'Invalid color: ';
                var1 = var1 + var0;
                var1 = var2.bind(var3)(var1);
                throw var1;
            case 132:
                var2 = var0.length;
                var1 = 4;
                if (!(var1 !== var2)) {
                    _fun65393_ip = 216;
                    continue _fun65393
                }
            case 144:
                var2 = var0.length;
                var1 = 7;
                if (!(var1 !== var2)) {
                    _fun65393_ip = 214;
                    continue _fun65393
                }
            case 156:
                var1 = var0.toLowerCase;
                var2 = var1.bind(var0)();
                var1 = {
                    'aliceblue': '#f0f8ff',
                    'antiquewhite': '#faebd7',
                    'aqua': '#00ffff',
                    'aquamarine': '#7fffd4',
                    'azure': '#f0ffff',
                    'beige': '#f5f5dc',
                    'bisque': '#ffe4c4',
                    'black': '#000000',
                    'blanchedalmond': '#ffebcd',
                    'blue': '#0000ff',
                    'blueviolet': '#8a2be2',
                    'brown': '#a52a2a',
                    'burlywood': '#deb887',
                    'cadetblue': '#5f9ea0',
                    'chartreuse': '#7fff00',
                    'chocolate': '#d2691e',
                    'coral': '#ff7f50',
                    'cornflowerblue': '#6495ed',
                    'cornsilk': '#fff8dc',
                    'crimson': '#dc143c',
                    'cyan': '#00ffff',
                    'darkblue': '#00008b',
                    'darkcyan': '#008b8b',
                    'darkgoldenrod': '#b8860b',
                    'darkgray': '#a9a9a9',
                    'darkgreen': '#006400',
                    'darkkhaki': '#bdb76b',
                    'darkmagenta': '#8b008b',
                    'darkolivegreen': '#556b2f',
                    'darkorange': '#ff8c00',
                    'darkorchid': '#9932cc',
                    'darkred': '#8b0000',
                    'darksalmon': '#e9967a',
                    'darkseagreen': '#8fbc8f',
                    'darkslateblue': '#483d8b',
                    'darkslategray': '#2f4f4f',
                    'darkturquoise': '#00ced1',
                    'darkviolet': '#9400d3',
                    'deeppink': '#ff1493',
                    'deepskyblue': '#00bfff',
                    'dimgray': '#696969',
                    'dodgerblue': '#1e90ff',
                    'firebrick': '#b22222',
                    'floralwhite': '#fffaf0',
                    'forestgreen': '#228b22',
                    'fuchsia': '#ff00ff',
                    'gainsboro': '#dcdcdc',
                    'ghostwhite': '#f8f8ff',
                    'gold': '#ffd700',
                    'goldenrod': '#daa520',
                    'gray': '#808080',
                    'green': '#008000',
                    'greenyellow': '#adff2f',
                    'honeydew': '#f0fff0',
                    'hotpink': '#ff69b4',
                    'indianred': '#cd5c5c',
                    'indigo': '#4b0082',
                    'ivory': '#fffff0',
                    'khaki': '#f0e68c',
                    'lavender': '#e6e6fa',
                    'lavenderblush': '#fff0f5',
                    'lawngreen': '#7cfc00',
                    'lemonchiffon': '#fffacd',
                    'lightblue': '#add8e6',
                    'lightcoral': '#f08080',
                    'lightcyan': '#e0ffff',
                    'lightgoldenrodyellow': '#fafad2',
                    'lightgrey': '#d3d3d3',
                    'lightgreen': '#90ee90',
                    'lightpink': '#ffb6c1',
                    'lightsalmon': '#ffa07a',
                    'lightseagreen': '#20b2aa',
                    'lightskyblue': '#87cefa',
                    'lightslategray': '#778899',
                    'lightsteelblue': '#b0c4de',
                    'lightyellow': '#ffffe0',
                    'lime': '#00ff00',
                    'limegreen': '#32cd32',
                    'linen': '#faf0e6',
                    'magenta': '#ff00ff',
                    'maroon': '#800000',
                    'mediumaquamarine': '#66cdaa',
                    'mediumblue': '#0000cd',
                    'mediumorchid': '#ba55d3',
                    'mediumpurple': '#9370d8',
                    'mediumseagreen': '#3cb371',
                    'mediumslateblue': '#7b68ee',
                    'mediumspringgreen': '#00fa9a',
                    'mediumturquoise': '#48d1cc',
                    'mediumvioletred': '#c71585',
                    'midnightblue': '#191970',
                    'mintcream': '#f5fffa',
                    'mistyrose': '#ffe4e1',
                    'moccasin': '#ffe4b5',
                    'navajowhite': '#ffdead',
                    'navy': '#000080',
                    'oldlace': '#fdf5e6',
                    'olive': '#808000',
                    'olivedrab': '#6b8e23',
                    'orange': '#ffa500',
                    'orangered': '#ff4500',
                    'orchid': '#da70d6',
                    'palegoldenrod': '#eee8aa',
                    'palegreen': '#98fb98',
                    'paleturquoise': '#afeeee',
                    'palevioletred': '#d87093',
                    'papayawhip': '#ffefd5',
                    'peachpuff': '#ffdab9',
                    'peru': '#cd853f',
                    'pink': '#ffc0cb',
                    'plum': '#dda0dd',
                    'powderblue': '#b0e0e6',
                    'purple': '#800080',
                    'rebeccapurple': '#663399',
                    'red': '#ff0000',
                    'rosybrown': '#bc8f8f',
                    'royalblue': '#4169e1',
                    'saddlebrown': '#8b4513',
                    'salmon': '#fa8072',
                    'sandybrown': '#f4a460',
                    'seagreen': '#2e8b57',
                    'seashell': '#fff5ee',
                    'sienna': '#a0522d',
                    'silver': '#c0c0c0',
                    'skyblue': '#87ceeb',
                    'slateblue': '#6a5acd',
                    'slategray': '#708090',
                    'snow': '#fffafa',
                    'springgreen': '#00ff7f',
                    'steelblue': '#4682b4',
                    'tan': '#d2b48c',
                    'teal': '#008080',
                    'thistle': '#d8bfd8',
                    'tomato': '#ff6347',
                    'turquoise': '#40e0d0',
                    'violet': '#ee82ee',
                    'wheat': '#f5deb3',
                    'white': '#ffffff',
                    'whitesmoke': '#f5f5f5',
                    'yellow': '#ffff00',
                    'yellowgreen': '#9acd32'
                };
                var1 = var1[var2];
                if (var1) {
                    _fun65393_ip = 212;
                    continue _fun65393
                }
            case 187:
                var2 = global;
                var5 = var2.Error;
                var2 = 'Invalid color: ';
                var2 = var2 + var0;
                var2 = var5.bind(var3)(var2);
                throw var2;
            case 212:
                return var1;
            case 214:
                return var0;
            case 216:
                var1 = 1;
                var2 = var0[var1];
                var2 = var4 + var2;
                var1 = var0[var1];
                var4 = var2 + var1;
                var1 = 2;
                var2 = var0[var1];
                var2 = var4 + var2;
                var1 = var0[var1];
                var4 = var2 + var1;
                var1 = 3;
                var2 = var0[var1];
                var2 = var4 + var2;
                var1 = var0[var1];
                var1 = var2 + var1;
                return var1;
            case 275:
                var2 = var0.match;
                var1 = /^hsla*\((\d{1,3})\s*[, ]\s*(\d{1,3})%\s*[, ]\s*(\d{1,3})%.*\)/i;
                var6 = var2.bind(var0)(var1);
                var1 = null;
                if (!(var1 !== var6)) {
                    _fun65393_ip = 378;
                    continue _fun65393
                }
            case 306:
                var1 = 1;
                var2 = var6[var1];
                var1 = 360;
                var5 = var2 / var1;
                var1 = 2;
                var1 = var6[var1];
                var2 = 100;
                var4 = var1 / var2;
                var1 = 3;
                var1 = var6[var1];
                var1 = var1 / var2;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var4;
                var2[2] = var1;
                var1 = function(arg0) { // Original name: hsl2hex, environment: var1
                    _fun65394: for (var _fun65394_ip = 0;;) switch (_fun65394_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.length;
                            var3 = 3;
                            if (!(var3 === var0)) {
                                _fun65394_ip = 248;
                                continue _fun65394
                            }
                        case 18:
                            var0 = _closure1_slot0;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var4, var3);
                            var9 = 0;
                            var11 = var0[var9];
                            var8 = 1;
                            var7 = var0[var8];
                            var4 = 2;
                            var3 = var0[var4];
                            var0 = var3;
                            var5 = var0;
                            var6 = var5;
                            if (!(var9 !== var7)) {
                                _fun65394_ip = 156;
                                continue _fun65394
                            }
                        case 66:
                            var10 = function(arg0, arg1, arg2) { // Original name: hue2rgb, environment: var9
                                _fun65395: for (var _fun65395_ip = 0;;) switch (_fun65395_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = arg2;
                                        var0 = 0;
                                        var4 = var3;
                                        if (!(var4 < var0)) {
                                            _fun65395_ip = 25;
                                            continue _fun65395
                                        }
                                    case 18:
                                        var0 = 1;
                                        var4 = var3 + var0;
                                    case 25:
                                        var0 = 1;
                                        var3 = var4;
                                        if (!(var3 > var0)) {
                                            _fun65395_ip = 39;
                                            continue _fun65395
                                        }
                                    case 35:
                                        var3 = var4 - var0;
                                    case 39:
                                        var0 = 0.16666666666666666;
                                        if (!(!(var3 < var0))) {
                                            _fun65395_ip = 115;
                                            continue _fun65395
                                        }
                                    case 53:
                                        var4 = 0.5;
                                        var0 = var1;
                                        if (!(!(var3 < var4))) {
                                            _fun65395_ip = 113;
                                            continue _fun65395
                                        }
                                    case 70:
                                        var5 = 0.6666666666666666;
                                        var4 = var2;
                                        if (!(var3 < var5)) {
                                            _fun65395_ip = 110;
                                            continue _fun65395
                                        }
                                    case 87:
                                        var6 = var1 - var2;
                                        var5 = var5 - var3;
                                        var6 = var6 * var5;
                                        var5 = 6;
                                        var5 = var6 * var5;
                                        var4 = var2 + var5;
                                    case 110:
                                        var0 = var4;
                                    case 113:
                                        _fun65395_ip = 134;
                                        continue _fun65395;
                                    case 115:
                                        var4 = var1 - var2;
                                        var1 = 6;
                                        var1 = var1 * var4;
                                        var1 = var1 * var3;
                                        var0 = var2 + var1;
                                    case 134:
                                        return var0;
                                }
                            };
                            var9 = 0.5;
                            if (!(!(var3 < var9))) {
                                _fun65394_ip = 101;
                                continue _fun65394
                            }
                        case 87:
                            var12 = var3 + var7;
                            var9 = var3 * var7;
                            var9 = var12 - var9;
                            _fun65394_ip = 109;
                            continue _fun65394;
                        case 101:
                            var7 = var8 + var7;
                            var9 = var3 * var7;
                        case 109:
                            var3 = var4 * var3;
                            var8 = var3 - var9;
                            var3 = 0.3333333333333333;
                            var4 = var11 + var3;
                            var0 = var10.bind(var2)(var8, var9, var4);
                            var5 = var10.bind(var2)(var8, var9, var11);
                            var3 = var11 - var3;
                            var6 = var10.bind(var2)(var8, var9, var3);
                        case 156:
                            var1 = _closure1_slot1;
                            var4 = global;
                            var8 = var4.Math;
                            var7 = var8.round;
                            var3 = 255;
                            var0 = var3 * var0;
                            var7 = var7.bind(var8)(var0);
                            var0 = new Array(3);
                            var0[0] = var7;
                            var8 = var4.Math;
                            var7 = var8.round;
                            var5 = var3 * var5;
                            var5 = var7.bind(var8)(var5);
                            var0[1] = var5;
                            var5 = var4.Math;
                            var4 = var5.round;
                            var3 = var3 * var6;
                            var3 = var4.bind(var5)(var3);
                            var0[2] = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 248:
                            var0 = '';
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var2);
                return var1;
            case 378:
                var1 = global;
                var2 = var1.Error;
                var1 = 'Invalid color: ';
                var1 = var1 + var0;
                var1 = var2.bind(var3)(var1);
                throw var1;
            case 403:
                var2 = _closure1_slot1;
                var4 = var0.match;
                var1 = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i;
                var5 = var4.bind(var0)(var1);
                if (var5) {
                    _fun65393_ip = 463;
                    continue _fun65393
                }
            case 438:
                var1 = global;
                var4 = var1.Error;
                var1 = 'Invalid color: ';
                var1 = var1 + var0;
                var1 = var4.bind(var3)(var1);
                throw var1;
            case 463:
                var4 = var5.slice;
                var1 = 1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            case 483:
                return var0;
            case 485:
                return var0;
        }
    };
    var2.colorToHex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);