// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: isDateFormatOnly, environment: var1
        _fun112634: for (var _fun112634_ip = 0;;) switch (_fun112634_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot4;
                var0 = var0.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = 1;
                if (!var0) {
                    _fun112634_ip = 66;
                    continue _fun112634
                }
            case 27:
                var5 = var4.hasOwnProperty;
                var0 = _closure1_slot4;
                var0 = var0[var2];
                var0 = var5.bind(var4)(var0);
                if (var0) {
                    _fun112634_ip = 70;
                    continue _fun112634
                }
            case 49:
                var2 = var2 + var1;
                var0 = _closure1_slot4;
                var0 = var0.length;
                if (var2 < var0) {
                    _fun112634_ip = 27;
                    continue _fun112634
                }
            case 66:
                var0 = true;
                return var0;
            case 70:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: isTimeFormatOnly, environment: var1
        _fun112635: for (var _fun112635_ip = 0;;) switch (_fun112635_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot3;
                var0 = var0.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = 1;
                if (!var0) {
                    _fun112635_ip = 66;
                    continue _fun112635
                }
            case 27:
                var5 = var4.hasOwnProperty;
                var0 = _closure1_slot3;
                var0 = var0[var2];
                var0 = var5.bind(var4)(var0);
                if (var0) {
                    _fun112635_ip = 70;
                    continue _fun112635
                }
            case 49:
                var2 = var2 + var1;
                var0 = _closure1_slot3;
                var0 = var0.length;
                if (var2 < var0) {
                    _fun112635_ip = 27;
                    continue _fun112635
                }
            case 66:
                var0 = true;
                return var0;
            case 70:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: createDateTimeFormat, environment: var1
        _fun112636: for (var _fun112636_ip = 0;;) switch (_fun112636_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot1;
                var0 = var3.test;
                var0 = var0.bind(var3)(var5);
                if (var0) {
                    _fun112636_ip = 213;
                    continue _fun112636
                }
            case 28:
                var0 = {};
                var _closure2_slot0 = var0;
                var4 = var5.replace;
                var3 = _closure1_slot0;
                var2 = function(arg0) { // Environment: var1
                    _fun112637: for (var _fun112637_ip = 0;;) switch (_fun112637_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.charAt;
                            var1 = 0;
                            var2 = var2.bind(var0)(var1);
                            var1 = 'E';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 587;
                                continue _fun112637
                            }
                        case 27:
                            var1 = 'e';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 587;
                                continue _fun112637
                            }
                        case 38:
                            var1 = 'c';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 587;
                                continue _fun112637
                            }
                        case 49:
                            var1 = 'G';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 537;
                                continue _fun112637
                            }
                        case 60:
                            var1 = 'y';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 494;
                                continue _fun112637
                            }
                        case 71:
                            var1 = 'Y';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 494;
                                continue _fun112637
                            }
                        case 82:
                            var1 = 'u';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 494;
                                continue _fun112637
                            }
                        case 93:
                            var1 = 'U';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 494;
                                continue _fun112637
                            }
                        case 104:
                            var1 = 'M';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 444;
                                continue _fun112637
                            }
                        case 115:
                            var1 = 'L';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 444;
                                continue _fun112637
                            }
                        case 126:
                            var1 = 'd';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 401;
                                continue _fun112637
                            }
                        case 137:
                            var1 = 'a';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 393;
                                continue _fun112637
                            }
                        case 148:
                            var1 = 'h';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 350;
                                continue _fun112637
                            }
                        case 159:
                            var1 = 'H';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 350;
                                continue _fun112637
                            }
                        case 170:
                            var1 = 'k';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 350;
                                continue _fun112637
                            }
                        case 181:
                            var1 = 'K';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 350;
                                continue _fun112637
                            }
                        case 192:
                            var1 = 'm';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 307;
                                continue _fun112637
                            }
                        case 200:
                            var1 = 's';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 264;
                                continue _fun112637
                            }
                        case 208:
                            var1 = 'z';
                            if (!(var1 !== var2)) {
                                _fun112637_ip = 220;
                                continue _fun112637
                            }
                        case 216:
                            var1 = undefined;
                            return var1;
                        case 220:
                            var2 = _closure2_slot0;
                            var3 = var0.length;
                            var1 = 4;
                            var3 = var3 < var1;
                            var1 = 'long';
                            if (!var3) {
                                _fun112637_ip = 250;
                                continue _fun112637
                            }
                        case 246:
                            var1 = 'short';
                        case 250:
                            var2.timeZoneName = var1;
                            var1 = '{timeZoneName}';
                            return var1;
                        case 264:
                            var2 = _closure2_slot0;
                            var4 = var0.length;
                            var1 = 'numeric';
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun112637_ip = 293;
                                continue _fun112637
                            }
                        case 287:
                            var1 = '2-digit';
                        case 293:
                            var2.second = var1;
                            var1 = '{second}';
                            return var1;
                        case 307:
                            var2 = _closure2_slot0;
                            var4 = var0.length;
                            var1 = 'numeric';
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun112637_ip = 336;
                                continue _fun112637
                            }
                        case 330:
                            var1 = '2-digit';
                        case 336:
                            var2.minute = var1;
                            var1 = '{minute}';
                            return var1;
                        case 350:
                            var2 = _closure2_slot0;
                            var4 = var0.length;
                            var1 = 'numeric';
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun112637_ip = 379;
                                continue _fun112637
                            }
                        case 373:
                            var1 = '2-digit';
                        case 379:
                            var2.hour = var1;
                            var1 = '{hour}';
                            return var1;
                        case 393:
                            var1 = '{ampm}';
                            return var1;
                        case 401:
                            var2 = _closure2_slot0;
                            var4 = var0.length;
                            var1 = 'numeric';
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun112637_ip = 430;
                                continue _fun112637
                            }
                        case 424:
                            var1 = '2-digit';
                        case 430:
                            var2.day = var1;
                            var1 = '{day}';
                            return var1;
                        case 444:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1.month;
                            var4 = var0.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            var1 = var3[var1];
                            var2.month = var1;
                            var1 = '{month}';
                            return var1;
                        case 494:
                            var2 = _closure2_slot0;
                            var4 = var0.length;
                            var1 = 'numeric';
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun112637_ip = 523;
                                continue _fun112637
                            }
                        case 517:
                            var1 = '2-digit';
                        case 523:
                            var2.year = var1;
                            var1 = '{year}';
                            return var1;
                        case 537:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1.era;
                            var4 = var0.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            var1 = var3[var1];
                            var2.era = var1;
                            var1 = '{era}';
                            return var1;
                        case 587:
                            var1 = _closure2_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2.weekday;
                            var3 = var0.length;
                            var0 = 1;
                            var0 = var3 - var0;
                            var0 = var2[var0];
                            var1.weekday = var0;
                            var0 = '{weekday}';
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var0.pattern = var2;
                var4 = var0.pattern;
                var3 = var4.replace;
                var2 = /'([^']*)'/g;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun112638: for (var _fun112638_ip = 0;;) switch (_fun112638_ip) {
                        case 0:
                            var0 = arg1;
                            if (var0) {
                                _fun112638_ip = 10;
                                continue _fun112638
                            }
                        case 6:
                            var0 = "'";
                        case 10:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var0.pattern = var1;
                var2 = var0.pattern;
                var1 = var2.indexOf;
                var3 = '{ampm}';
                var2 = var1.bind(var2)(var3);
                var1 = -1;
                if (!(var2 > var1)) {
                    _fun112636_ip = 211;
                    continue _fun112636
                }
            case 139:
                var1 = true;
                var0.hour12 = var1;
                var1 = var0.pattern;
                var0.pattern12 = var1;
                var2 = var0.pattern;
                var1 = var2.replace;
                var4 = '';
                var3 = var1.bind(var2)(var3, var4);
                var2 = var3.replace;
                var1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                var1 = var2.bind(var3)(var1, var4);
                var0.pattern = var1;
            case 211:
                return var0;
            case 213:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var2.createDateTimeFormat = var0;
    var0 = function(arg0) { // Original name: createDateTimeFormats, environment: var1
        _fun112639: for (var _fun112639_ip = 0;;) switch (_fun112639_ip) {
            case 0:
                var0 = arg0;
                var11 = function(arg0, arg1) { // Original name: expandFormat, environment: var1
                    _fun112640: for (var _fun112640_ip = 0;;) switch (_fun112640_ip) {
                        case 0:
                            var4 = arg0;
                            var6 = arg1;
                            var0 = global;
                            var5 = var0.Array;
                            var2 = var4.match;
                            var1 = /M/g;
                            var1 = var2.bind(var4)(var1);
                            if (var1) {
                                _fun112640_ip = 46;
                                continue _fun112640
                            }
                        case 42:
                            var1 = new Array(0);
                        case 46:
                            var2 = var1.length;
                            var1 = 1;
                            var9 = var2 + var1;
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var10 = var3;
                            var2 = new var10[var5](var9, var8);
                            var7 = var2 instanceof Object ? var2 : var3;
                            var2 = var0.Array;
                            var3 = var4.match;
                            var0 = /E/g;
                            var0 = var3.bind(var4)(var0);
                            if (var0) {
                                _fun112640_ip = 116;
                                continue _fun112640
                            }
                        case 112:
                            var0 = new Array(0);
                        case 116:
                            var0 = var0.length;
                            var9 = var0 + var1;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var10 = var1;
                            var0 = new var10[var2](var9, var8);
                            var5 = var0 instanceof Object ? var0 : var1;
                            var0 = var7.length;
                            var2 = 2;
                            var4 = var6;
                            if (!(var0 > var2)) {
                                _fun112640_ip = 201;
                                continue _fun112640
                            }
                        case 160:
                            var3 = var6.replace;
                            var1 = var7.join;
                            var0 = '$1';
                            var1 = var1.bind(var7)(var0);
                            var0 = /(M|L)+/;
                            var4 = var3.bind(var6)(var0, var1);
                        case 201:
                            var1 = var5.length;
                            var0 = var4;
                            if (!(var1 > var2)) {
                                _fun112640_ip = 254;
                                continue _fun112640
                            }
                        case 213:
                            var3 = var4.replace;
                            var2 = var5.join;
                            var1 = '$1';
                            var2 = var2.bind(var5)(var1);
                            var1 = /([Eec])+/;
                            var0 = var3.bind(var4)(var1, var2);
                        case 254:
                            return var0;
                    }
                };
                var15 = var0.availableFormats;
                var14 = var0.timeFormats;
                var10 = var0.dateFormats;
                var19 = var0.medium;
                var0 = new Array(0);
                var18 = new Array(0);
                var17 = new Array(0);
                var12 = var15;
                var9 = undefined;
                var2 = undefined;
                var1 = undefined;
                var7 = undefined;
                var6 = undefined;
                for (var3 in var12)
                    case 75: {
                        var7 = var2;
                        var6 = var1;
                        case 93: var22 = var3;
                        var16 = var15.hasOwnProperty;
                        var21 = var16.bind(var15)(var22);
                        if (!var21) {
                            _fun112639_ip = 135;
                            continue _fun112639
                        }
                        case 110: var16 = _closure1_slot7;
                        var20 = var15[var22];
                        var20 = var11.bind(var9)(var22, var20);
                        var21 = var16.bind(var9)(var20);
                        var2 = var20;
                        var1 = var21;
                        case 135: var20 = var2;
                        var16 = var1;
                        var2 = var20;
                        var1 = var16;
                        if (!var21) {
                            _fun112639_ip = 75;
                            continue _fun112639
                        }
                        case 150: var21 = var0.push;
                        var21 = var21.bind(var0)(var16);
                        var21 = _closure1_slot5;
                        var21 = var21.bind(var9)(var16);
                        if (var21) {
                            _fun112639_ip = 211;
                            continue _fun112639
                        }
                        case 172: var21 = _closure1_slot6;
                        var21 = var21.bind(var9)(var16);
                        var2 = var20;
                        var1 = var16;
                        if (!var21) {
                            _fun112639_ip = 75;
                            continue _fun112639
                        }
                        case 190: var21 = var18.push;
                        var21 = var21.bind(var18)(var20);
                        var2 = var20;
                        var1 = var16;
                        _fun112639_ip = 75;
                        continue _fun112639;
                        case 211: var21 = var17.push;
                        var21 = var21.bind(var17)(var20);
                        var2 = var20;
                        var1 = var16;
                        _fun112639_ip = 75;
                        continue _fun112639;
                    }
            case 232:
                var1 = var18.length;
                var16 = 0;
                var1 = var16 < var1;
                var15 = 1;
                var13 = '{0}';
                var12 = '{1}';
                var5 = '';
                var4 = var7;
                var3 = var6;
                var2 = 0;
                var7 = var4;
                var6 = var3;
                if (!var1) {
                    _fun112639_ip = 411;
                    continue _fun112639
                }
            case 282:
                var1 = var17.length;
                var1 = var16 < var1;
                var20 = 0;
                if (!var1) {
                    _fun112639_ip = 392;
                    continue _fun112639
                }
            case 296:
                var1 = _closure1_slot7;
                var22 = var19.replace;
                var21 = var18[var2];
                var23 = var22.bind(var19)(var13, var21);
                var22 = var23.replace;
                var21 = var17[var20];
                var23 = var22.bind(var23)(var12, var21);
                var22 = var23.replace;
                var21 = /^[,\s]+|[,\s]+$/gi;
                var22 = var22.bind(var23)(var21, var5);
                var21 = var1.bind(var9)(var22);
                if (!var21) {
                    _fun112639_ip = 373;
                    continue _fun112639
                }
            case 363:
                var1 = var0.push;
                var1 = var1.bind(var0)(var21);
            case 373:
                var20 = var20 + var15;
                var1 = var17.length;
                var4 = var22;
                var3 = var21;
                if (var20 < var1) {
                    _fun112639_ip = 296;
                    continue _fun112639
                }
            case 392:
                var2 = var2 + var15;
                var1 = var18.length;
                var7 = var4;
                var6 = var3;
                if (var2 < var1) {
                    _fun112639_ip = 282;
                    continue _fun112639
                }
            case 411:
                var12 = var14;
                var2 = var7;
                var1 = var6;
                var7 = var2;
                var6 = var1;
                for (var3 in var12)
                    case 434: {
                        var7 = var2;
                        var6 = var1;
                        case 449: var18 = var3;
                        var15 = var14.hasOwnProperty;
                        var17 = var15.bind(var14)(var18);
                        if (!var17) {
                            _fun112639_ip = 491;
                            continue _fun112639
                        }
                        case 466: var15 = _closure1_slot7;
                        var16 = var14[var18];
                        var16 = var11.bind(var9)(var18, var16);
                        var17 = var15.bind(var9)(var16);
                        var2 = var16;
                        var1 = var17;
                        case 491: var16 = var2;
                        var15 = var1;
                        var2 = var16;
                        var1 = var15;
                        if (!var17) {
                            _fun112639_ip = 434;
                            continue _fun112639
                        }
                        case 506: var17 = var0.push;
                        var17 = var17.bind(var0)(var15);
                        var2 = var16;
                        var1 = var15;
                        _fun112639_ip = 434;
                        continue _fun112639;
                    }
            case 524:
                var4 = var10;
                for (var1 in var4)
                    case 535: {
                        case 544: var15 = var1;
                        var12 = var10.hasOwnProperty;
                        var14 = var12.bind(var10)(var15);
                        if (!var14) {
                            _fun112639_ip = 586;
                            continue _fun112639
                        }
                        case 561: var12 = _closure1_slot7;
                        var13 = var10[var15];
                        var13 = var11.bind(var9)(var15, var13);
                        var14 = var12.bind(var9)(var13);
                        var7 = var13;
                        var6 = var14;
                        case 586: var13 = var7;
                        var12 = var6;
                        var7 = var13;
                        var6 = var12;
                        if (!var14) {
                            _fun112639_ip = 535;
                            continue _fun112639
                        }
                        case 601: var14 = var0.push;
                        var14 = var14.bind(var0)(var12);
                        var7 = var13;
                        var6 = var12;
                        _fun112639_ip = 535;
                        continue _fun112639;
                    }
            case 619:
                return var0;
        }
    };
    var2.createDateTimeFormats = var0;
    var0 = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
    var _closure1_slot0 = var0;
    var0 = /[QxXVOvZASjgFDwWIQqH]/;
    var _closure1_slot1 = var0;
    var0 = {};
    var2 = ['numeric', '2-digit', 'short', 'long', 'narrow'];
    var0.month = var2;
    var2 = ['short', 'short', 'short', 'long', 'narrow'];
    var0.weekday = var2;
    var2 = ['short', 'short', 'short', 'long', 'narrow'];
    var0.era = var2;
    var _closure1_slot2 = var0;
    var0 = ['weekday', 'era', 'year', 'month', 'day'];
    var _closure1_slot3 = var0;
    var0 = ['hour', 'minute', 'second', 'timeZoneName'];
    var _closure1_slot4 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);