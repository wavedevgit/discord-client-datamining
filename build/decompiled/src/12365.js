// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94267: for (var _fun94267_ip = 0;;) switch (_fun94267_ip) {
        case 0:
            var1 = function arg0() {
                _fun94268: for (var _fun94268_ip = 0;;) switch (_fun94268_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2;
                        if (!var1) {
                            _fun94268_ip = 56;
                            continue _fun94268
                        }
                    case 9:
                        var3 = 'object';
                        var0 = typeof var2;
                        var1 = var2;
                        if (!(var3 === var0)) {
                            _fun94268_ip = 56;
                            continue _fun94268
                        }
                    case 23:
                        var0 = var2.which;
                        if (var0) {
                            _fun94268_ip = 38;
                            continue _fun94268
                        }
                    case 32:
                        var0 = var2.keyCode;
                    case 38:
                        if (var0) {
                            _fun94268_ip = 47;
                            continue _fun94268
                        }
                    case 41:
                        var0 = var2.charCode;
                    case 47:
                        var1 = var2;
                        if (!var0) {
                            _fun94268_ip = 56;
                            continue _fun94268
                        }
                    case 53:
                        var1 = var0;
                    case 56:
                        var2 = 'number';
                        var0 = typeof var1;
                        if (!(var2 !== var0)) {
                            _fun94268_ip = 162;
                            continue _fun94268
                        }
                    case 67:
                        var0 = global;
                        var0 = var0.String;
                        var3 = undefined;
                        var6 = var0.bind(var3)(var1);
                        var4 = _closure1_slot0;
                        var0 = var6.toLowerCase;
                        var0 = var0.bind(var6)();
                        var0 = var4[var0];
                        if (var0) {
                            _fun94268_ip = 160;
                            continue _fun94268
                        }
                    case 106:
                        var4 = _closure1_slot1;
                        var2 = var6.toLowerCase;
                        var2 = var2.bind(var6)();
                        var2 = var4[var2];
                        if (var2) {
                            _fun94268_ip = 157;
                            continue _fun94268
                        }
                    case 127:
                        var5 = var6.length;
                        var4 = 1;
                        var3 = undefined;
                        if (!(var4 === var5)) {
                            _fun94268_ip = 154;
                            continue _fun94268
                        }
                    case 141:
                        var5 = var6.charCodeAt;
                        var4 = 0;
                        var3 = var5.bind(var6)(var4);
                    case 154:
                        var2 = var3;
                    case 157:
                        var0 = var2;
                    case 160:
                        return var0;
                    case 162:
                        var0 = _closure1_slot2;
                        var0 = var0[var1];
                        return var0;
                }
            };
            var2 = function arg0, arg1() {
                _fun94269: for (var _fun94269_ip = 0;;) switch (_fun94269_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = arg1;
                        if (!var0) {
                            _fun94269_ip = 20;
                            continue _fun94269
                        }
                    case 9:
                        var2 = 'object';
                        var1 = typeof var0;
                        if (!(var2 !== var1)) {
                            _fun94269_ip = 24;
                            continue _fun94269
                        }
                    case 20:
                        var1 = undefined;
                        return var1;
                    case 24:
                        var1 = var0.which;
                        if (var1) {
                            _fun94269_ip = 39;
                            continue _fun94269
                        }
                    case 33:
                        var1 = var0.keyCode;
                    case 39:
                        if (var1) {
                            _fun94269_ip = 48;
                            continue _fun94269
                        }
                    case 42:
                        var1 = var0.charCode;
                    case 48:
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun94269_ip = 140;
                            continue _fun94269
                        }
                    case 54:
                        var2 = typeof var4;
                        var0 = 'string';
                        if (!(var0 !== var2)) {
                            _fun94269_ip = 79;
                            continue _fun94269
                        }
                    case 65:
                        var0 = 'number';
                        if (!(var0 === var2)) {
                            _fun94269_ip = 124;
                            continue _fun94269
                        }
                    case 73:
                        var0 = var4 === var1;
                        return var0;
                    case 79:
                        var3 = _closure1_slot0;
                        var0 = var4.toLowerCase;
                        var0 = var0.bind(var4)();
                        var0 = var3[var0];
                        if (var0) {
                            _fun94269_ip = 134;
                            continue _fun94269
                        }
                    case 103:
                        var3 = _closure1_slot1;
                        var2 = var4.toLowerCase;
                        var2 = var2.bind(var4)();
                        var2 = var3[var2];
                        if (var2) {
                            _fun94269_ip = 128;
                            continue _fun94269
                        }
                    case 124:
                        var3 = false;
                        return var3;
                    case 128:
                        var2 = var2 === var1;
                        return var2;
                    case 134:
                        var0 = var0 === var1;
                        return var0;
                    case 140:
                        var0 = false;
                        return var0;
                }
            };
            var1.isEventKey = var2;
            var2 = arg4;
            var2.exports = var1;
            var6 = {
                'backspace': 8,
                'tab': 9,
                'enter': 13,
                'shift': 16,
                'ctrl': 17,
                'alt': 18,
                'pause/break': 19,
                'caps lock': 20,
                'esc': 27,
                'space': 32,
                'page up': 33,
                'page down': 34,
                'end': 35,
                'home': 36,
                'left': 37,
                'up': 38,
                'right': 39,
                'down': 40,
                'insert': 45,
                'delete': 46,
                'command': 91,
                'left command': 91,
                'right command': 93,
                'numpad *': 106,
                'numpad +': 107,
                'numpad -': 109,
                'numpad .': 110,
                'numpad /': 111,
                'num lock': 144,
                'scroll lock': 145,
                'my computer': 182,
                'my calculator': 183,
                ';': 186,
                '=': 187,
                ',': 188,
                '-': 189,
                '.': 190,
                '/': 191,
                '`': 192,
                '[': 219,
                '\\': 220,
                ']': 221,
                "'": 222
            };
            var12 = 13;
            var18 = 32;
            var11 = 111;
            var1.codes = var6;
            var1.code = var6;
            var _closure1_slot0 = var6;
            var5 = {
                'windows': 91,
                '⇧': 16,
                '⌥': 18,
                '⌃': 17,
                '⌘': 91,
                'ctl': 17,
                'control': 17,
                'option': 18,
                'pause': 19,
                'break': 19,
                'caps': 20,
                'return': 13,
                'escape': 27,
                'spc': 32,
                'spacebar': 32,
                'pgup': 33,
                'pgdn': 34,
                'ins': 45,
                'del': 46,
                'cmd': 91
            };
            var1.aliases = var5;
            var _closure1_slot1 = var5;
            var17 = 97;
            var16 = global;
            var15 = 48;
            var14 = 1;
            var10 = 'f';
            var7 = 96;
            var4 = 'numpad ';
            var3 = 10;
            var13 = 58;
            var8 = 123;
        case 129:
            var19 = var16.String;
            var2 = var19.fromCharCode;
            var19 = var2.bind(var19)(var17);
            var2 = var17 - var18;
            var6[var19] = var2;
            var17 = var17 + 1;
            var2 = var15;
            if (var17 < var8) {
                _fun94267_ip = 129;
                continue _fun94267
            }
        case 164:
            var8 = var2 - var15;
            var6[var8] = var2;
            var2 = var2 + 1;
            var8 = var14;
            if (var2 < var13) {
                _fun94267_ip = 164;
                continue _fun94267
            }
        case 182:
            var13 = var8 + var11;
            var2 = var10 + var8;
            var6[var2] = var13;
            var8 = var8 + 1;
            var2 = 0;
            if (var8 < var12) {
                _fun94267_ip = 182;
                continue _fun94267
            }
        case 203:
            var9 = var2 + var7;
            var8 = var4 + var2;
            var6[var8] = var9;
            var2 = var2 + 1;
            if (var2 < var3) {
                _fun94267_ip = 203;
                continue _fun94267
            }
        case 222:
            var7 = {};
            var1.title = var7;
            var1.names = var7;
            var _closure1_slot2 = var7;
            var3 = var6;
            for (var0 in var3)
                case 251: {
                    case 260: var9 = var0;
                    var8 = var6[var9];
                    var7[var8] = var9;
                    _fun94267_ip = 251;
                    continue _fun94267;
                }
        case 273:
            var3 = var5;
            for (var0 in var3)
                case 284: {
                    case 293: var8 = var0;
                    var7 = var5[var8];
                    var6[var8] = var7;
                    _fun94267_ip = 284;
                    continue _fun94267;
                }
        case 306:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);