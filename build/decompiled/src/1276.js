// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var2
        _fun13756: for (var _fun13756_ip = 0;;) switch (_fun13756_ip) {
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
                _fun13756_ip = 74;
                continue _fun13756;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: isRichTextTag, environment: var2
        var1 = arg0;
        var0 = 0;
        var1 = var1[var0];
        var0 = '$';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var7 = function(arg0) { // Original name: bindFormatValuesWithBuilder, environment: var2
        _fun13760: for (var _fun13760_ip = 0;;) switch (_fun13760_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.builder;
                var _closure2_slot1 = var2;
                var1 = var0.originalMessage;
                var _closure2_slot2 = var1;
                var4 = var0.nodes;
                var _closure2_slot3 = var4;
                var1 = var0.locales;
                var _closure2_slot4 = var1;
                var1 = var0.values;
                var _closure2_slot5 = var1;
                var1 = var0.dataFormatters;
                var _closure2_slot6 = var1;
                var1 = var0.formatConfig;
                var _closure2_slot7 = var1;
                var1 = var0.currentPluralValue;
                var _closure2_slot8 = var1;
                var0 = var0.keyPrefix;
                var _closure2_slot9 = var0;
                var1 = var4.length;
                var0 = 1;
                if (!(var0 === var1)) {
                    _fun13760_ip = 140;
                    continue _fun13760
                }
            case 106:
                var0 = 0;
                var1 = var4[var0];
                var3 = 'string';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun13760_ip = 140;
                    continue _fun13760
                }
            case 123:
                var1 = var2.pushLiteralText;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                _fun13760_ip = 185;
                continue _fun13760;
            case 140:
                var3 = function() { // Original name: _loop, environment: var5
                    _fun13761: for (var _fun13761_ip = 0;;) switch (_fun13761_ip) {
                        case 0:
                            var3 = undefined;
                            var15 = undefined;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot10;
                            var2 = var2[var1];
                            var13 = 'string';
                            var1 = typeof var2;
                            if (!(var13 !== var1)) {
                                _fun13761_ip = 1987;
                                continue _fun13761
                            }
                        case 33:
                            var1 = 0;
                            var7 = var2[var1];
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var10 = 6;
                            var5 = var5[var10];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Pound;
                            if (!(var7 !== var5)) {
                                _fun13761_ip = 1936;
                                continue _fun13761
                            }
                        case 81:
                            var8 = 1;
                            var11 = var2[var8];
                            var5 = _closure2_slot5;
                            var5 = var11 in var5;
                            if (var5) {
                                _fun13761_ip = 147;
                                continue _fun13761
                            }
                        case 99:
                            var5 = _closure1_slot9;
                            var5 = var5.bind(var3)(var11);
                            if (var5) {
                                _fun13761_ip = 147;
                                continue _fun13761
                            }
                        case 111:
                            var9 = _closure1_slot7;
                            var24 = _closure2_slot2;
                            var6 = var9.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var26 = var6;
                            var25 = var11;
                            var23 = var7;
                            var5 = new var26[var9](var25, var24, var23, var22);
                            var5 = var5 instanceof Object ? var5 : var6;
                            throw var5;
                        case 147:
                            var5 = _closure2_slot5;
                            var6 = var5[var11];
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Argument;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 1870;
                                continue _fun13761
                            }
                        case 191:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Date;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 1755;
                                continue _fun13761
                            }
                        case 226:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Time;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 1637;
                                continue _fun13761
                            }
                        case 262:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Number;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 1438;
                                continue _fun13761
                            }
                        case 298:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Tag;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 946;
                                continue _fun13761
                            }
                        case 334:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Select;
                            if (!(var5 !== var7)) {
                                _fun13761_ip = 735;
                                continue _fun13761
                            }
                        case 370:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var3)(var5);
                            var5 = var5.FormatJsNodeType;
                            var5 = var5.Plural;
                            if (!(var5 === var7)) {
                                _fun13761_ip = 1934;
                                continue _fun13761
                            }
                        case 406:
                            var5 = 2;
                            var10 = var2[var5];
                            var5 = 3;
                            var14 = var2[var5];
                            var5 = 4;
                            var17 = var2[var5];
                            var5 = global;
                            var7 = var5.HermesInternal;
                            var9 = var7.concat;
                            var7 = '=';
                            var7 = var9.bind(var7)(var6);
                            var9 = var7 in var10;
                            if (var9) {
                                _fun13761_ip = 526;
                                continue _fun13761
                            }
                        case 456:
                            var16 = _closure2_slot6;
                            var12 = var16.getPluralRules;
                            var9 = {};
                            var9.type = var17;
                            var17 = var12.bind(var16)(var9);
                            var16 = var17.select;
                            var9 = null;
                            var18 = var9 != var14;
                            var12 = 0;
                            if (!var18) {
                                _fun13761_ip = 497;
                                continue _fun13761
                            }
                        case 494:
                            var12 = var14;
                        case 497:
                            var12 = var6 - var12;
                            var12 = var16.bind(var17)(var12);
                            var16 = var10[var12];
                            if (!(var9 !== var16)) {
                                _fun13761_ip = 518;
                                continue _fun13761
                            }
                        case 514:
                            if (!(var3 === var16)) {
                                _fun13761_ip = 524;
                                continue _fun13761
                            }
                        case 518:
                            var16 = var10.other;
                        case 524:
                            _fun13761_ip = 530;
                            continue _fun13761;
                        case 526:
                            var16 = var10[var7];
                        case 530:
                            var12 = null;
                            if (!(var12 != var16)) {
                                _fun13761_ip = 664;
                                continue _fun13761
                            }
                        case 539:
                            var9 = _closure1_slot10;
                            var7 = {};
                            var17 = _closure2_slot1;
                            var7.builder = var17;
                            var7.nodes = var16;
                            var16 = _closure2_slot4;
                            var7.locales = var16;
                            var16 = _closure2_slot6;
                            var7.dataFormatters = var16;
                            var16 = _closure2_slot7;
                            var7.formatConfig = var16;
                            var16 = _closure2_slot5;
                            var7.values = var16;
                            var16 = var12 != var14;
                            var12 = 0;
                            if (!var16) {
                                _fun13761_ip = 606;
                                continue _fun13761
                            }
                        case 603:
                            var12 = var14;
                        case 606:
                            var12 = var6 - var12;
                            var7.currentPluralValue = var12;
                            var18 = _closure2_slot9;
                            var17 = _closure2_slot10;
                            var12 = var5.HermesInternal;
                            var16 = var12.concat;
                            var14 = '';
                            var12 = '.';
                            var12 = var16.bind(var14)(var18, var12, var17);
                            var7.keyPrefix = var12;
                            var7 = var9.bind(var3)(var7);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 664:
                            var9 = var5.Object;
                            var7 = var9.keys;
                            var10 = var7.bind(var9)(var10);
                            var9 = var10.join;
                            var7 = ', ';
                            var21 = var9.bind(var10)(var7);
                            var5 = var5.HermesInternal;
                            var10 = var5.concat;
                            var26 = '';
                            var24 = ' is not a known option for plural value ';
                            var22 = '. Valid options are ';
                            var25 = var6;
                            var23 = var11;
                            var5 = var26[var10](var25, var24, var23, var22, var21, var20);
                            throw var5;
                        case 735:
                            var5 = 2;
                            var10 = var2[var5];
                            var5 = var6 in var10;
                            if (var5) {
                                _fun13761_ip = 757;
                                continue _fun13761
                            }
                        case 749:
                            var9 = var10.other;
                            _fun13761_ip = 761;
                            continue _fun13761;
                        case 757:
                            var9 = var10[var6];
                        case 761:
                            var5 = null;
                            if (!(var5 != var9)) {
                                _fun13761_ip = 873;
                                continue _fun13761
                            }
                        case 767:
                            var7 = _closure1_slot10;
                            var5 = {};
                            var12 = _closure2_slot1;
                            var5.builder = var12;
                            var5.nodes = var9;
                            var9 = _closure2_slot4;
                            var5.locales = var9;
                            var9 = _closure2_slot6;
                            var5.dataFormatters = var9;
                            var9 = _closure2_slot7;
                            var5.formatConfig = var9;
                            var9 = _closure2_slot5;
                            var5.values = var9;
                            var17 = _closure2_slot9;
                            var16 = _closure2_slot10;
                            var9 = global;
                            var9 = var9.HermesInternal;
                            var14 = var9.concat;
                            var12 = '';
                            var9 = '.';
                            var9 = var14.bind(var12)(var17, var9, var16);
                            var5.keyPrefix = var9;
                            var5 = var7.bind(var3)(var5);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 873:
                            var5 = global;
                            var9 = var5.Object;
                            var7 = var9.keys;
                            var10 = var7.bind(var9)(var10);
                            var9 = var10.join;
                            var7 = ', ';
                            var21 = var9.bind(var10)(var7);
                            var5 = var5.HermesInternal;
                            var10 = var5.concat;
                            var26 = '';
                            var24 = ' is not a known option for select value ';
                            var22 = '. Valid options are ';
                            var25 = var6;
                            var23 = var11;
                            var5 = var26[var10](var25, var24, var23, var22, var21, var20);
                            throw var5;
                        case 946:
                            var5 = 2;
                            var5 = var2[var5];
                            var7 = 3;
                            var14 = var2[var7];
                            var9 = _closure1_slot11;
                            var7 = {};
                            var10 = _closure2_slot1;
                            var10 = var10.constructor;
                            var7.Builder = var10;
                            var7.nodes = var5;
                            var5 = _closure2_slot4;
                            var7.locales = var5;
                            var5 = _closure2_slot6;
                            var7.dataFormatters = var5;
                            var5 = _closure2_slot7;
                            var7.formatConfig = var5;
                            var5 = _closure2_slot5;
                            var7.values = var5;
                            var5 = _closure2_slot8;
                            var7.currentPluralValue = var5;
                            var16 = _closure2_slot9;
                            var12 = _closure2_slot10;
                            var5 = global;
                            var10 = var5.HermesInternal;
                            var10 = var10.concat;
                            var18 = '';
                            var17 = '.';
                            var10 = var10.bind(var18)(var16, var17, var12);
                            var7.keyPrefix = var10;
                            var10 = var9.bind(var3)(var7);
                            var7 = null;
                            if (!(var7 == var14)) {
                                _fun13761_ip = 1087;
                                continue _fun13761
                            }
                        case 1081:
                            var9 = new Array(0);
                            _fun13761_ip = 1201;
                            continue _fun13761;
                        case 1087:
                            var12 = _closure1_slot11;
                            var7 = {};
                            var16 = _closure2_slot1;
                            var16 = var16.constructor;
                            var7.Builder = var16;
                            var7.nodes = var14;
                            var14 = _closure2_slot4;
                            var7.locales = var14;
                            var14 = _closure2_slot6;
                            var7.dataFormatters = var14;
                            var14 = _closure2_slot7;
                            var7.formatConfig = var14;
                            var14 = _closure2_slot5;
                            var7.values = var14;
                            var14 = _closure2_slot8;
                            var7.currentPluralValue = var14;
                            var25 = _closure2_slot9;
                            var23 = _closure2_slot10;
                            var14 = var5.HermesInternal;
                            var16 = var14.concat;
                            var22 = '-control';
                            var26 = var18;
                            var24 = var17;
                            var14 = var26[var16](var25, var24, var23, var22, var21);
                            var7.keyPrefix = var14;
                            var9 = var12.bind(var3)(var7);
                        case 1201:
                            var7 = _closure1_slot9;
                            var7 = var7.bind(var3)(var11);
                            if (var7) {
                                _fun13761_ip = 1416;
                                continue _fun13761
                            }
                        case 1216:
                            var14 = typeof var6;
                            var7 = 'function';
                            if (!(var7 === var14)) {
                                _fun13761_ip = 1372;
                                continue _fun13761
                            }
                        case 1230:
                            var16 = _closure2_slot9;
                            var12 = _closure2_slot10;
                            var7 = var5.HermesInternal;
                            var7 = var7.concat;
                            var7 = var7.bind(var18)(var16, var17, var12);
                            var12 = var6.bind(var3)(var10, var7);
                            var16 = var5.Array;
                            var7 = var16.isArray;
                            var7 = var7.bind(var16)(var12);
                            var16 = var12;
                            if (var7) {
                                _fun13761_ip = 1295;
                                continue _fun13761
                            }
                        case 1284:
                            var7 = new Array(1);
                            var7[0] = var12;
                            var16 = var7;
                        case 1295:
                            var7 = var16;
                            var12 = var7[Symbol.iterator];
                            var7 = var12().next;
                        case 1301:
                            var16 = var7().value;
                            var17 = var12;
                            if (!(var17 !== var3)) {
                                _fun13761_ip = 1934;
                                continue _fun13761
                            }
                        case 1315: // try_start_0
                            var15 = var16;
                            var16 = typeof var16;
                            if (!(var13 !== var16)) {
                                _fun13761_ip = 1345;
                                continue _fun13761
                            }
                        case 1325:
                            var18 = _closure2_slot1;
                            var17 = var18.pushObject;
                            var16 = var15;
                            var16 = var17.bind(var18)(var16);
                            _fun13761_ip = 1363;
                            continue _fun13761;
                        case 1345:
                            var18 = _closure2_slot1;
                            var17 = var18.pushLiteralText;
                            var16 = var15;
                            var16 = var17.bind(var18)(var16);
                        case 1363: // try_end0
                            _fun13761_ip = 1301;
                            continue _fun13761;
                        case 1365: // catch_target0
                            CatchBlockStart(arg_register = 7);
                            var12.return();
                            throw var7;
                        case 1372:
                            var5 = var5.HermesInternal;
                            var13 = var5.concat;
                            var26 = 'expected a function type for a Tag formatting value, ';
                            var24 = '. got ';
                            var22 = ': ';
                            var25 = var11;
                            var23 = var14;
                            var21 = var6;
                            var5 = var26[var13](var25, var24, var23, var22, var21, var20);
                            throw var5;
                        case 1416:
                            var7 = _closure2_slot1;
                            var5 = var7.pushRichTextTag;
                            var5 = var5.bind(var7)(var11, var10, var9);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 1438:
                            var5 = 2;
                            var7 = var2[var5];
                            var5 = _closure2_slot7;
                            var5 = var5.number;
                            var5 = var7 in var5;
                            if (var5) {
                                _fun13761_ip = 1526;
                                continue _fun13761
                            }
                        case 1462:
                            var5 = null;
                            var5 = var5 != var7;
                            var11 = undefined;
                            if (!var5) {
                                _fun13761_ip = 1524;
                                continue _fun13761
                            }
                        case 1473:
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var5 = 7;
                            var9 = var12[var5];
                            var9 = var10.bind(var3)(var9);
                            var9 = var9.parseNumberSkeleton;
                            var5 = var12[var5];
                            var5 = var10.bind(var3)(var5);
                            var5 = var5.parseNumberSkeletonFromString;
                            var5 = var5.bind(var3)(var7);
                            var11 = var9.bind(var3)(var5);
                        case 1524:
                            _fun13761_ip = 1540;
                            continue _fun13761;
                        case 1526:
                            var5 = _closure2_slot7;
                            var5 = var5.number;
                            var11 = var5[var7];
                        case 1540:
                            var7 = 'number';
                            var5 = typeof var6;
                            var10 = var6;
                            if (!(var7 === var5)) {
                                _fun13761_ip = 1601;
                                continue _fun13761
                            }
                        case 1554:
                            var9 = null;
                            var5 = var9 == var11;
                            var7 = undefined;
                            if (var5) {
                                _fun13761_ip = 1571;
                                continue _fun13761
                            }
                        case 1565:
                            var7 = var11.scale;
                        case 1571:
                            var _closure2_slot0 = var7;
                            var5 = var8;
                            if (!(var9 !== var7)) {
                                _fun13761_ip = 1597;
                                continue _fun13761
                            }
                        case 1582:
                            var7 = _closure2_slot0;
                            var5 = var8;
                            if (!(var3 !== var7)) {
                                _fun13761_ip = 1597;
                                continue _fun13761
                            }
                        case 1593:
                            var5 = _closure2_slot0;
                        case 1597:
                            var10 = var6 * var5;
                        case 1601:
                            var8 = _closure2_slot1;
                            var7 = var8.pushLiteralText;
                            var9 = _closure2_slot6;
                            var5 = var9.formatNumber;
                            var5 = var5.bind(var9)(var10, var11);
                            var5 = var7.bind(var8)(var5);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 1637:
                            var5 = 2;
                            var7 = var2[var5];
                            var5 = _closure2_slot7;
                            var5 = var5.time;
                            var5 = var7 in var5;
                            if (var5) {
                                _fun13761_ip = 1705;
                                continue _fun13761
                            }
                        case 1661:
                            var5 = null;
                            var5 = var5 != var7;
                            var10 = undefined;
                            if (!var5) {
                                _fun13761_ip = 1703;
                                continue _fun13761
                            }
                        case 1672:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var5 = 7;
                            var5 = var9[var5];
                            var5 = var8.bind(var3)(var5);
                            var5 = var5.parseDateTimeSkeleton;
                            var10 = var5.bind(var3)(var7);
                        case 1703:
                            _fun13761_ip = 1719;
                            continue _fun13761;
                        case 1705:
                            var5 = _closure2_slot7;
                            var5 = var5.time;
                            var10 = var5[var7];
                        case 1719:
                            var8 = _closure2_slot1;
                            var7 = var8.pushLiteralText;
                            var9 = _closure2_slot6;
                            var5 = var9.formatTime;
                            var5 = var5.bind(var9)(var6, var10);
                            var5 = var7.bind(var8)(var5);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 1755:
                            var5 = 2;
                            var5 = var2[var5];
                            var7 = _closure2_slot7;
                            var7 = var7.date;
                            var7 = var5 in var7;
                            if (var7) {
                                _fun13761_ip = 1823;
                                continue _fun13761
                            }
                        case 1779:
                            var7 = null;
                            var7 = var7 != var5;
                            var9 = undefined;
                            if (!var7) {
                                _fun13761_ip = 1821;
                                continue _fun13761
                            }
                        case 1790:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var4 = 7;
                            var4 = var8[var4];
                            var4 = var7.bind(var3)(var4);
                            var4 = var4.parseDateTimeSkeleton;
                            var9 = var4.bind(var3)(var5);
                        case 1821:
                            _fun13761_ip = 1837;
                            continue _fun13761;
                        case 1823:
                            var4 = _closure2_slot7;
                            var4 = var4.date;
                            var9 = var4[var5];
                        case 1837:
                            var7 = _closure2_slot1;
                            var5 = var7.pushLiteralText;
                            var8 = _closure2_slot6;
                            var4 = var8.formatDate;
                            var4 = var4.bind(var8)(var6, var9);
                            var4 = var5.bind(var7)(var4);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 1870:
                            var5 = typeof var6;
                            var4 = 'object';
                            if (!(var4 !== var5)) {
                                _fun13761_ip = 1919;
                                continue _fun13761
                            }
                        case 1881:
                            var4 = 'function';
                            if (!(var4 !== var5)) {
                                _fun13761_ip = 1919;
                                continue _fun13761
                            }
                        case 1889:
                            var7 = _closure2_slot1;
                            var5 = var7.pushLiteralText;
                            var4 = global;
                            var4 = var4.String;
                            var4 = var4.bind(var3)(var6);
                            var4 = var5.bind(var7)(var4);
                            _fun13761_ip = 1934;
                            continue _fun13761;
                        case 1919:
                            var5 = _closure2_slot1;
                            var4 = var5.pushObject;
                            var4 = var4.bind(var5)(var6);
                        case 1934:
                            return var3;
                        case 1936:
                            var3 = _closure2_slot8;
                            var4 = 'number';
                            var3 = typeof var3;
                            if (!(var4 === var3)) {
                                _fun13761_ip = 1985;
                                continue _fun13761
                            }
                        case 1951:
                            var5 = _closure2_slot6;
                            var4 = var5.formatNumber;
                            var3 = _closure2_slot8;
                            var5 = var4.bind(var5)(var3);
                            var4 = _closure2_slot1;
                            var3 = var4.pushLiteralText;
                            var3 = var3.bind(var4)(var5);
                        case 1985:
                            return var1;
                        case 1987:
                            var1 = _closure2_slot1;
                            var0 = var1.pushLiteralText;
                            var0 = var0.bind(var1)(var2);
                            var0 = 0;
                            return var0;
                    }
                };
                var2 = 0;
                var _closure2_slot10 = var2;
                var0 = var4.length;
                var0 = var2 < var0;
                var1 = undefined;
                if (!var0) {
                    _fun13760_ip = 185;
                    continue _fun13760
                }
            case 165:
                var0 = var3.bind(var1)();
                var2 = var2 + 1;
                _closure2_slot10 = var2;
                var0 = var4.length;
                if (var2 < var0) {
                    _fun13760_ip = 165;
                    continue _fun13760
                }
            case 185:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var7;
    var4 = function(arg0) { // Original name: bindFormatValues, environment: var2
        _fun13762: for (var _fun13762_ip = 0;;) switch (_fun13762_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.Builder;
                var10 = var0.originalMessage;
                var3 = var0.nodes;
                var9 = var0.locales;
                var8 = var0.dataFormatters;
                var7 = var0.formatConfig;
                var6 = var0.values;
                var5 = var0.currentPluralValue;
                var0 = var0.keyPrefix;
                var1 = {};
                var1.keyPrefix = var0;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var2;
                var12 = var1;
                var1 = new var13[var4](var12, var11);
                var2 = var1 instanceof Object ? var1 : var2;
                var4 = 'string';
                var1 = typeof var3;
                if (!(var4 !== var1)) {
                    _fun13762_ip = 169;
                    continue _fun13762
                }
            case 97:
                var4 = _closure1_slot10;
                var1 = {};
                var1.builder = var2;
                var1.originalMessage = var10;
                var1.nodes = var3;
                var1.locales = var9;
                var1.dataFormatters = var8;
                var1.formatConfig = var7;
                var1.values = var6;
                var1.currentPluralValue = var5;
                var1.keyPrefix = var0;
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var0 = var2.finish;
                var0 = var0.bind(var2)();
                _fun13762_ip = 190;
                continue _fun13762;
            case 169:
                var1 = var2.pushLiteralText;
                var1 = var1.bind(var2)(var3);
                var1 = var2.finish;
                var0 = var1.bind(var2)();
            case 190:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var9[var1];
    var3 = var8.bind(var0)(var1);
    var1 = 4;
    var1 = var9[var1];
    var6 = var8.bind(var0)(var1);
    var _closure1_slot5 = var6;
    var1 = 5;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9.value = var8;
    var8 = '__esModule';
    var8 = var10.bind(var11)(var5, var8, var9);
    var5.FormatBuilder = var0;
    var5.bindFormatValuesWithBuilder = var7;
    var5.bindFormatValues = var4;
    var4 = function(arg0) { // Original name: FormatBuilder, environment: var2
        var2 = this;
        var3 = _closure1_slot6;
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        var1 = arg0;
        var2.context = var1;
        return var0;
    };
    var _closure1_slot12 = var4;
    var4 = var6.bind(var0)(var4);
    var5.FormatBuilder = var4;
    var1 = var1.Error;
    var3 = var3.bind(var0)(var1);
    var1 = function(arg0) { // Environment: var2
        var2 = function(arg0, arg1, arg2) { // Original name: MissingValueError, environment: var0
            _fun13765: for (var _fun13765_ip = 0;;) switch (_fun13765_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var5 = this;
                    var0 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var7 = global;
                    var0 = var7.HermesInternal;
                    var10 = var0.concat;
                    var15 = "No value for variable '";
                    var13 = "' was provided for the localized message '";
                    var11 = "'";
                    var14 = var2;
                    var12 = var1;
                    var0 = var15[var10](var14, var13, var12, var11, var10);
                    var10 = new Array(1);
                    var10[0] = var0;
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun13765_ip = 115;
                        continue _fun13765
                    }
                case 102:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun13765_ip = 147;
                    continue _fun13765;
                case 115:
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 147:
                    var0 = var3.bind(var4)(var5, var0);
                    var0.variableName = var2;
                    var0.originalMessage = var1;
                    var1 = arg2;
                    var0.nodeType = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot5;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var _closure1_slot7 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 162, 7, 6, 1277, 1278]);