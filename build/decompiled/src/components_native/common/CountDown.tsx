// components_native/common/CountDown.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun72711: for (var _fun72711_ip = 0;;) switch (_fun72711_ip) {
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
                _fun72711_ip = 76;
                continue _fun72711;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: CountDown, environment: var5
            _fun72715: for (var _fun72715_ip = 0;;) switch (_fun72715_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72715_ip = 69;
                        continue _fun72715
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun72715_ip = 105;
                    continue _fun72715;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
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
            var _closure3_slot0 = var2;
            var0 = global;
            var4 = var0.setInterval;
            var0 = undefined;
            var3 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.forceUpdate;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = 1000;
            var1 = var4.bind(var0)(var3, var1);
            var2._interval = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.clearRefreshInterval;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'clearRefreshInterval';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun72719: for (var _fun72719_ip = 0;;) switch (_fun72719_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._interval;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun72719_ip = 36;
                        continue _fun72719
                    }
                case 15:
                    var1 = global;
                    var2 = var1.clearInterval;
                    var1 = var0._interval;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun72720: for (var _fun72720_ip = 0;;) switch (_fun72720_ip) {
                case 0:
                    var9 = this;
                    var1 = var9.props;
                    var4 = var1.postDeadlineText;
                    var5 = var1.style;
                    var7 = var1.deadline;
                    var0 = var1.withUnits;
                    var3 = var1.freezeAtRemainingSeconds;
                    var1 = null;
                    var2 = var1 != var0;
                    if (!var2) {
                        _fun72720_ip = 53;
                        continue _fun72720
                    }
                case 50:
                    var2 = var0;
                case 53:
                    var0 = inf;
                    if (!(var7 !== var0)) {
                        _fun72720_ip = 861;
                        continue _fun72720
                    }
                case 70:
                    var0 = global;
                    var11 = var0.Math;
                    var10 = var11.max;
                    var6 = var0.Number;
                    var8 = undefined;
                    var7 = var6.bind(var8)(var7);
                    var12 = var0.Date;
                    var6 = var12.now;
                    var6 = var6.bind(var12)();
                    var7 = var7 - var6;
                    var6 = 0;
                    var10 = var10.bind(var11)(var6, var7);
                    var7 = 1000;
                    var11 = var10 / var7;
                    var7 = var1 != var3;
                    if (!var7) {
                        _fun72720_ip = 144;
                        continue _fun72720
                    }
                case 140:
                    var7 = var11 <= var3;
                case 144:
                    if (!var7) {
                        _fun72720_ip = 160;
                        continue _fun72720
                    }
                case 147:
                    var7 = var9.clearRefreshInterval;
                    var7 = var7.bind(var9)();
                    var11 = var3;
                case 160:
                    if (!(var11 >= var6)) {
                        _fun72720_ip = 171;
                        continue _fun72720
                    }
                case 164:
                    if (!(var1 == var4)) {
                        _fun72720_ip = 921;
                        continue _fun72720
                    }
                case 171:
                    var10 = var0.Math;
                    var9 = var10.floor;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 8;
                    var7 = var13[var3];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.Seconds;
                    var7 = var7.DAY;
                    var7 = var11 / var7;
                    var9 = var9.bind(var10)(var7);
                    var7 = new Array(4);
                    var7[0] = var9;
                    var14 = var0.Math;
                    var10 = var14.floor;
                    var9 = var13[var3];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.Seconds;
                    var9 = var9.DAY;
                    var11 = var11 % var9;
                    var9 = var13[var3];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.Seconds;
                    var9 = var9.HOUR;
                    var9 = var11 / var9;
                    var9 = var10.bind(var14)(var9);
                    var7[1] = var9;
                    var14 = var0.Math;
                    var10 = var14.floor;
                    var9 = var13[var3];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.Seconds;
                    var9 = var9.HOUR;
                    var11 = var11 % var9;
                    var9 = var13[var3];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.Seconds;
                    var9 = var9.MINUTE;
                    var9 = var11 / var9;
                    var9 = var10.bind(var14)(var9);
                    var7[2] = var9;
                    var10 = var0.Math;
                    var9 = var10.floor;
                    var3 = var13[var3];
                    var3 = var12.bind(var8)(var3);
                    var3 = var3.Seconds;
                    var3 = var3.MINUTE;
                    var3 = var11 % var3;
                    var3 = var9.bind(var10)(var3);
                    var7[3] = var3;
                    var3 = var7[var6];
                    var13 = 0;
                    if (!(var13 === var3)) {
                        _fun72720_ip = 446;
                        continue _fun72720
                    }
                case 433:
                    var3 = var7.shift;
                    var3 = var3.bind(var7)();
                    var13 = 1;
                case 446:
                    var6 = var7.map;
                    var3 = function(arg0) { // Environment: var3
                        _fun72721: for (var _fun72721_ip = 0;;) switch (_fun72721_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = 10;
                                var0 = var3;
                                if (!(var0 < var1)) {
                                    _fun72721_ip = 37;
                                    continue _fun72721
                                }
                            case 13:
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var2 = var1.concat;
                                var1 = '0';
                                var0 = var2.bind(var1)(var3);
                            case 37:
                                return var0;
                        }
                    };
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.join;
                    var12 = ':';
                    var14 = var3.bind(var6)(var12);
                    var4 = var14;
                    if (!var2) {
                        _fun72720_ip = 921;
                        continue _fun72720
                    }
                case 488:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 7;
                    var2 = var9[var1];
                    var2 = var7.bind(var8)(var2);
                    var6 = var2.intl;
                    var3 = var6.string;
                    var2 = var9[var1];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.QJyuxY;
                    var3 = var3.bind(var6)(var2);
                    var2 = new Array(4);
                    var2[0] = var3;
                    var3 = var9[var1];
                    var3 = var7.bind(var8)(var3);
                    var10 = var3.intl;
                    var6 = var10.string;
                    var3 = var9[var1];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3["1LyF1h"];
                    var3 = var6.bind(var10)(var3);
                    var2[1] = var3;
                    var3 = var9[var1];
                    var3 = var7.bind(var8)(var3);
                    var10 = var3.intl;
                    var6 = var10.string;
                    var3 = var9[var1];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.n7dksO;
                    var3 = var6.bind(var10)(var3);
                    var2[2] = var3;
                    var3 = var9[var1];
                    var3 = var7.bind(var8)(var3);
                    var6 = var3.intl;
                    var3 = var6.string;
                    var1 = var9[var1];
                    var1 = var7.bind(var8)(var1);
                    var1 = var1.t;
                    var1 = var1["6m/6nM"];
                    var1 = var3.bind(var6)(var1);
                    var2[3] = var1;
                    var1 = var14.indexOf;
                    var6 = var1.bind(var14)(var12);
                    var11 = -1;
                    var3 = var14;
                    var1 = var13;
                    if (!(var11 !== var6)) {
                        _fun72720_ip = 834;
                        continue _fun72720
                    }
                case 726:
                    var6 = var2.length;
                    var10 = '';
                    var9 = ' ';
                    var8 = var14;
                    var7 = var13;
                    var3 = var8;
                    var1 = var7;
                    if (!(var1 < var6)) {
                        _fun72720_ip = 834;
                        continue _fun72720
                    }
                case 757:
                    var13 = var8.replace;
                    var14 = var2[var7];
                    var6 = var0.HermesInternal;
                    var6 = var6.concat;
                    var6 = var6.bind(var10)(var14, var9);
                    var14 = var13.bind(var8)(var12, var6);
                    var13 = var7 + 1;
                    var6 = var14.indexOf;
                    var6 = var6.bind(var14)(var12);
                    var3 = var14;
                    var1 = var13;
                    if (!(var11 !== var6)) {
                        _fun72720_ip = 834;
                        continue _fun72720
                    }
                case 813:
                    var6 = var2.length;
                    var8 = var14;
                    var7 = var13;
                    var3 = var8;
                    var1 = var7;
                    if (var1 < var6) {
                        _fun72720_ip = 757;
                        continue _fun72720
                    }
                case 834:
                    var2 = var2[var1];
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = '';
                    var4 = var1.bind(var0)(var3, var2);
                    _fun72720_ip = 921;
                    continue _fun72720;
                case 861:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var1 = var7[var0];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.PqEzn8;
                    var4 = var1.bind(var2)(var0);
                case 921:
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'tabularNumbers': true,
                        'variant': 'text-md/semibold'
                    };
                    var0.style = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/CountDown.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 33, 1234, 667, 3901, 2]);