// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.parseDateTimeSkeleton = var0;
    var3 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        var4 = arg0;
        var0 = {};
        var _closure2_slot0 = var0;
        var3 = var4.replace;
        var2 = _closure1_slot0;
        var1 = function(arg0) { // Environment: var1
            _fun13867: for (var _fun13867_ip = 0;;) switch (_fun13867_ip) {
                case 0:
                    var1 = arg0;
                    var4 = var1.length;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = 'G';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1373;
                        continue _fun13867
                    }
                case 25:
                    var0 = 'y';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1341;
                        continue _fun13867
                    }
                case 36:
                    var0 = 'Y';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1305;
                        continue _fun13867
                    }
                case 47:
                    var0 = 'u';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1305;
                        continue _fun13867
                    }
                case 58:
                    var0 = 'U';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1305;
                        continue _fun13867
                    }
                case 69:
                    var0 = 'r';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1305;
                        continue _fun13867
                    }
                case 80:
                    var0 = 'q';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1269;
                        continue _fun13867
                    }
                case 91:
                    var0 = 'Q';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1269;
                        continue _fun13867
                    }
                case 102:
                    var0 = 'M';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1230;
                        continue _fun13867
                    }
                case 113:
                    var0 = 'L';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1230;
                        continue _fun13867
                    }
                case 124:
                    var0 = 'w';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1194;
                        continue _fun13867
                    }
                case 135:
                    var0 = 'W';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1194;
                        continue _fun13867
                    }
                case 146:
                    var0 = 'd';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1155;
                        continue _fun13867
                    }
                case 157:
                    var0 = 'D';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1119;
                        continue _fun13867
                    }
                case 168:
                    var0 = 'F';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1119;
                        continue _fun13867
                    }
                case 179:
                    var0 = 'g';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1119;
                        continue _fun13867
                    }
                case 190:
                    var0 = 'E';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 1072;
                        continue _fun13867
                    }
                case 201:
                    var0 = 'e';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 995;
                        continue _fun13867
                    }
                case 212:
                    var0 = 'c';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 918;
                        continue _fun13867
                    }
                case 223:
                    var0 = 'a';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 898;
                        continue _fun13867
                    }
                case 234:
                    var0 = 'b';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 862;
                        continue _fun13867
                    }
                case 245:
                    var0 = 'B';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 862;
                        continue _fun13867
                    }
                case 256:
                    var0 = 'h';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 811;
                        continue _fun13867
                    }
                case 267:
                    var0 = 'H';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 760;
                        continue _fun13867
                    }
                case 278:
                    var0 = 'K';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 709;
                        continue _fun13867
                    }
                case 289:
                    var0 = 'k';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 658;
                        continue _fun13867
                    }
                case 300:
                    var0 = 'j';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 622;
                        continue _fun13867
                    }
                case 311:
                    var0 = 'J';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 622;
                        continue _fun13867
                    }
                case 322:
                    var0 = 'C';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 622;
                        continue _fun13867
                    }
                case 333:
                    var0 = 'm';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 583;
                        continue _fun13867
                    }
                case 344:
                    var0 = 's';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 544;
                        continue _fun13867
                    }
                case 355:
                    var0 = 'S';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 508;
                        continue _fun13867
                    }
                case 366:
                    var0 = 'A';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 508;
                        continue _fun13867
                    }
                case 377:
                    var0 = 'z';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 472;
                        continue _fun13867
                    }
                case 385:
                    var0 = 'Z';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 436;
                        continue _fun13867
                    }
                case 393:
                    var0 = 'O';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 436;
                        continue _fun13867
                    }
                case 401:
                    var0 = 'v';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 436;
                        continue _fun13867
                    }
                case 409:
                    var0 = 'V';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 436;
                        continue _fun13867
                    }
                case 417:
                    var0 = 'X';
                    if (!(var0 !== var1)) {
                        _fun13867_ip = 436;
                        continue _fun13867
                    }
                case 425:
                    var0 = 'x';
                    if (!(var0 === var1)) {
                        _fun13867_ip = 1415;
                        continue _fun13867
                    }
                case 436:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 472:
                    var1 = _closure2_slot0;
                    var0 = 4;
                    var2 = var4 < var0;
                    var0 = 'long';
                    if (!var2) {
                        _fun13867_ip = 497;
                        continue _fun13867
                    }
                case 493:
                    var0 = 'short';
                case 497:
                    var1.timeZoneName = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 508:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`S/A` (second) patterns are not supported, use `s` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 544:
                    var1 = _closure2_slot0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.second = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 583:
                    var1 = _closure2_slot0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.minute = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 622:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 658:
                    var1 = _closure2_slot0;
                    var0 = 'h24';
                    var1.hourCycle = var0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.hour = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 709:
                    var1 = _closure2_slot0;
                    var0 = 'h11';
                    var1.hourCycle = var0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.hour = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 760:
                    var1 = _closure2_slot0;
                    var0 = 'h23';
                    var1.hourCycle = var0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.hour = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 811:
                    var1 = _closure2_slot0;
                    var0 = 'h12';
                    var1.hourCycle = var0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.hour = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 862:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`b/B` (period) patterns are not supported, use `a` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 898:
                    var1 = _closure2_slot0;
                    var0 = true;
                    var1.hour12 = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 918:
                    var0 = 4;
                    if (!(!(var4 < var0))) {
                        _fun13867_ip = 959;
                        continue _fun13867
                    }
                case 925:
                    var1 = _closure2_slot0;
                    var2 = var4 - var0;
                    var0 = ['short', 'long', 'narrow', 'short'];
                    var0 = var0[var2];
                    var1.weekday = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 959:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`c..ccc` (weekday) patterns are not supported';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 995:
                    var0 = 4;
                    if (!(!(var4 < var0))) {
                        _fun13867_ip = 1036;
                        continue _fun13867
                    }
                case 1002:
                    var1 = _closure2_slot0;
                    var2 = var4 - var0;
                    var0 = ['short', 'long', 'narrow', 'short'];
                    var0 = var0[var2];
                    var1.weekday = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 1036:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`e..eee` (weekday) patterns are not supported';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 1072:
                    var1 = _closure2_slot0;
                    var0 = 'long';
                    var2 = 4;
                    if (!(var2 !== var4)) {
                        _fun13867_ip = 1108;
                        continue _fun13867
                    }
                case 1090:
                    var2 = 'short';
                    var3 = 5;
                    if (!(var3 === var4)) {
                        _fun13867_ip = 1105;
                        continue _fun13867
                    }
                case 1101:
                    var2 = 'narrow';
                case 1105:
                    var0 = var2;
                case 1108:
                    var1.weekday = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 1119:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`D/F/g` (day) patterns are not supported, use `d` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 1155:
                    var1 = _closure2_slot0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit'];
                    var0 = var0[var2];
                    var1.day = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 1194:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`w/W` (week) patterns are not supported';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 1230:
                    var1 = _closure2_slot0;
                    var0 = 1;
                    var2 = var4 - var0;
                    var0 = ['numeric', '2-digit', 'short', 'long', 'narrow'];
                    var0 = var0[var2];
                    var1.month = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 1269:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`q/Q` (quarter) patterns are not supported';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 1305:
                    var0 = global;
                    var2 = var0.RangeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`Y/u/U/r` (year) patterns are not supported, use `y` instead';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 1341:
                    var1 = _closure2_slot0;
                    var0 = 'numeric';
                    var2 = 2;
                    if (!(var2 === var4)) {
                        _fun13867_ip = 1365;
                        continue _fun13867
                    }
                case 1359:
                    var0 = '2-digit';
                case 1365:
                    var1.year = var0;
                    _fun13867_ip = 1415;
                    continue _fun13867;
                case 1373:
                    var1 = _closure2_slot0;
                    var0 = 'long';
                    var2 = 4;
                    if (!(var2 !== var4)) {
                        _fun13867_ip = 1409;
                        continue _fun13867
                    }
                case 1391:
                    var2 = 'short';
                    var3 = 5;
                    if (!(var3 === var4)) {
                        _fun13867_ip = 1406;
                        continue _fun13867
                    }
                case 1402:
                    var2 = 'narrow';
                case 1406:
                    var0 = var2;
                case 1409:
                    var1.era = var0;
                case 1415:
                    var0 = '';
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.parseDateTimeSkeleton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);