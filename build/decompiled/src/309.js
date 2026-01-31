// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var3);
    var _closure1_slot1 = var4;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = function() {
        var2 = this;
        var3 = _closure1_slot2;
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        var1 = 0;
        var2.any_blank_count = var1;
        var2.any_blank_ms = var1;
        var2.any_blank_speed_sum = var1;
        var2.mostly_blank_count = var1;
        var2.mostly_blank_ms = var1;
        var2.pixels_blank = var1;
        var2.pixels_sampled = var1;
        var2.pixels_scrolled = var1;
        var2.total_time_spent = var1;
        var2.sample_count = var1;
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = new Array(0);
    var _closure1_slot4 = var3;
    var3 = 10;
    var _closure1_slot5 = var3;
    var3 = null;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot1;
        var3 = function arg0() {
            _fun4739: for (var _fun4739_ip = 0;;) switch (_fun4739_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = null;
                    var2._anyBlankStartTime = var3;
                    var4 = false;
                    var2._enabled = var4;
                    var4 = _closure1_slot3;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2._info = var4;
                    var2._mostlyBlankStartTime = var3;
                    var2._samplesStartTime = var3;
                    var3 = arg0;
                    var2._listMetrics = var3;
                    var3 = _closure1_slot6;
                    if (var3) {
                        _fun4739_ip = 101;
                        continue _fun4739
                    }
                case 99:
                    var3 = 0;
                case 101:
                    var1 = global;
                    var4 = var1.Math;
                    var1 = var4.random;
                    var1 = var1.bind(var4)();
                    var1 = var3 > var1;
                    var2._enabled = var1;
                    var1 = var2._resetData;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var1 = 'activate';
        var0.key = var1;
        var1 = function() {
            _fun4740: for (var _fun4740_ip = 0;;) switch (_fun4740_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._enabled;
                    if (!var0) {
                        _fun4740_ip = 24;
                        continue _fun4740
                    }
                case 12:
                    var3 = var1._samplesStartTime;
                    var2 = null;
                    var0 = var2 == var3;
                case 24:
                    if (!var0) {
                        _fun4740_ip = 55;
                        continue _fun4740
                    }
                case 27:
                    var0 = _closure1_slot0;
                    var2 = var0.performance;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1._samplesStartTime = var0;
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(5);
        var2[0] = var0;
        var0 = {};
        var1 = 'deactivateAndFlush';
        var0.key = var1;
        var1 = function() {
            _fun4741: for (var _fun4741_ip = 0;;) switch (_fun4741_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._enabled;
                    if (!var2) {
                        _fun4741_ip = 158;
                        continue _fun4741
                    }
                case 17:
                    var4 = var1._samplesStartTime;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun4741_ip = 158;
                        continue _fun4741
                    }
                case 32:
                    var2 = var1._info;
                    var5 = var2.sample_count;
                    var3 = _closure1_slot5;
                    if (!(!(var5 < var3))) {
                        _fun4741_ip = 148;
                        continue _fun4741
                    }
                case 55:
                    var3 = _closure1_slot0;
                    var5 = var3.performance;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var3 = var3 - var4;
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.assign;
                    var5 = var1._info;
                    var4 = {};
                    var4.total_time_spent = var3;
                    var3 = {};
                    var3 = var6.bind(var7)(var3, var5, var4);
                    var _closure3_slot0 = var3;
                    var3 = _closure1_slot4;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._resetData;
                    var0 = var0.bind(var1)();
                    _fun4741_ip = 158;
                    continue _fun4741;
                case 148:
                    var0 = var1._resetData;
                    var0 = var0.bind(var1)();
                case 158:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'computeBlankness';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun4743: for (var _fun4743_ip = 0;;) switch (_fun4743_ip) {
                case 0:
                    var14 = arg0;
                    var13 = arg1;
                    var0 = arg2;
                    var1 = this;
                    var2 = var1._enabled;
                    if (!var2) {
                        _fun4743_ip = 988;
                        continue _fun4743
                    }
                case 24:
                    var3 = var14.getItemCount;
                    var2 = var14.data;
                    var2 = var3.bind(var14)(var2);
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun4743_ip = 988;
                        continue _fun4743
                    }
                case 49:
                    var4 = var13.last;
                    var2 = var13.first;
                    if (!(!(var4 < var2))) {
                        _fun4743_ip = 988;
                        continue _fun4743
                    }
                case 68:
                    var2 = var1._samplesStartTime;
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun4743_ip = 988;
                        continue _fun4743
                    }
                case 83:
                    var8 = var0.dOffset;
                    var7 = var0.offset;
                    var11 = var0.velocity;
                    var0 = var0.visibleLength;
                    var4 = var1._info;
                    var2 = var4.sample_count;
                    var2 = var2 + 1;
                    var4.sample_count = var2;
                    var6 = var1._info;
                    var9 = var6.pixels_sampled;
                    var4 = global;
                    var10 = var4.Math;
                    var2 = var10.round;
                    var2 = var2.bind(var10)(var0);
                    var2 = var9 + var2;
                    var6.pixels_sampled = var2;
                    var6 = var1._info;
                    var9 = var6.pixels_scrolled;
                    var12 = var4.Math;
                    var10 = var12.round;
                    var15 = var4.Math;
                    var2 = var15.abs;
                    var2 = var2.bind(var15)(var8);
                    var2 = var10.bind(var12)(var2);
                    var2 = var9 + var2;
                    var6.pixels_scrolled = var2;
                    var9 = var4.Math;
                    var6 = var9.round;
                    var10 = var4.Math;
                    var2 = var10.abs;
                    var10 = var2.bind(var10)(var11);
                    var2 = 1000;
                    var2 = var2 * var10;
                    var6 = var6.bind(var9)(var2);
                    var2 = _closure1_slot0;
                    var9 = var2.performance;
                    var2 = var9.now;
                    var2 = var2.bind(var9)();
                    var9 = var1._anyBlankStartTime;
                    if (!(var5 != var9)) {
                        _fun4743_ip = 330;
                        continue _fun4743
                    }
                case 298:
                    var10 = var1._info;
                    var11 = var10.any_blank_ms;
                    var9 = var1._anyBlankStartTime;
                    var9 = var2 - var9;
                    var9 = var11 + var9;
                    var10.any_blank_ms = var9;
                case 330:
                    var1._anyBlankStartTime = var5;
                    var9 = var1._mostlyBlankStartTime;
                    if (!(var5 != var9)) {
                        _fun4743_ip = 378;
                        continue _fun4743
                    }
                case 346:
                    var10 = var1._info;
                    var11 = var10.mostly_blank_ms;
                    var9 = var1._mostlyBlankStartTime;
                    var9 = var2 - var9;
                    var9 = var11 + var9;
                    var10.mostly_blank_ms = var9;
                case 378:
                    var1._mostlyBlankStartTime = var5;
                    var15 = var13.first;
                    var9 = var1._listMetrics;
                    var5 = var9.getCellMetrics;
                    var12 = var5.bind(var9)(var15, var14);
                    var9 = var13.last;
                    var10 = var15;
                    var5 = var12;
                    if (!(var15 <= var9)) {
                        _fun4743_ip = 509;
                        continue _fun4743
                    }
                case 424:
                    var11 = var15;
                    if (!var12) {
                        _fun4743_ip = 448;
                        continue _fun4743
                    }
                case 430:
                    var9 = var12.isMounted;
                    var11 = var15;
                    var10 = var11;
                    var5 = var12;
                    if (var9) {
                        _fun4743_ip = 509;
                        continue _fun4743
                    }
                case 448:
                    var12 = var1._listMetrics;
                    var9 = var12.getCellMetrics;
                    var12 = var9.bind(var12)(var11, var14);
                    var15 = var11 + 1;
                    var9 = var13.last;
                    var10 = var15;
                    var5 = var12;
                    if (!(var15 <= var9)) {
                        _fun4743_ip = 509;
                        continue _fun4743
                    }
                case 485:
                    var11 = var15;
                    if (!var12) {
                        _fun4743_ip = 448;
                        continue _fun4743
                    }
                case 491:
                    var9 = var12.isMounted;
                    var11 = var15;
                    var10 = var11;
                    var5 = var12;
                    if (!var9) {
                        _fun4743_ip = 448;
                        continue _fun4743
                    }
                case 509:
                    var9 = var5;
                    if (!var9) {
                        _fun4743_ip = 519;
                        continue _fun4743
                    }
                case 515:
                    var9 = var10 > var3;
                case 519:
                    var10 = 0;
                    if (!var9) {
                        _fun4743_ip = 568;
                        continue _fun4743
                    }
                case 524:
                    var11 = var4.Math;
                    var9 = var11.min;
                    var15 = var4.Math;
                    var12 = var15.max;
                    var5 = var5.offset;
                    var5 = var5 - var7;
                    var5 = var12.bind(var15)(var3, var5);
                    var10 = var9.bind(var11)(var0, var5);
                case 568:
                    var16 = var13.last;
                    var9 = var1._listMetrics;
                    var5 = var9.getCellMetrics;
                    var15 = var5.bind(var9)(var16, var14);
                    var5 = var13.first;
                    var12 = var16;
                    var9 = var15;
                    if (!(var16 >= var5)) {
                        _fun4743_ip = 693;
                        continue _fun4743
                    }
                case 608:
                    var11 = var16;
                    if (!var15) {
                        _fun4743_ip = 632;
                        continue _fun4743
                    }
                case 614:
                    var5 = var15.isMounted;
                    var11 = var16;
                    var12 = var11;
                    var9 = var15;
                    if (var5) {
                        _fun4743_ip = 693;
                        continue _fun4743
                    }
                case 632:
                    var15 = var1._listMetrics;
                    var5 = var15.getCellMetrics;
                    var15 = var5.bind(var15)(var11, var14);
                    var16 = var11 - 1;
                    var5 = var13.first;
                    var12 = var16;
                    var9 = var15;
                    if (!(var16 >= var5)) {
                        _fun4743_ip = 693;
                        continue _fun4743
                    }
                case 669:
                    var11 = var16;
                    if (!var15) {
                        _fun4743_ip = 632;
                        continue _fun4743
                    }
                case 675:
                    var5 = var15.isMounted;
                    var11 = var16;
                    var12 = var11;
                    var9 = var15;
                    if (!var5) {
                        _fun4743_ip = 632;
                        continue _fun4743
                    }
                case 693:
                    var5 = 0;
                    if (!var9) {
                        _fun4743_ip = 787;
                        continue _fun4743
                    }
                case 698:
                    var13 = var14.getItemCount;
                    var11 = var14.data;
                    var13 = var13.bind(var14)(var11);
                    var11 = 1;
                    var11 = var13 - var11;
                    var11 = var12 < var11;
                    var5 = 0;
                    if (!var11) {
                        _fun4743_ip = 787;
                        continue _fun4743
                    }
                case 730:
                    var11 = var9.offset;
                    var9 = var9.length;
                    var14 = var11 + var9;
                    var11 = var4.Math;
                    var9 = var11.min;
                    var13 = var4.Math;
                    var12 = var13.max;
                    var7 = var7 + var0;
                    var7 = var7 - var14;
                    var7 = var12.bind(var13)(var3, var7);
                    var5 = var9.bind(var11)(var0, var7);
                case 787:
                    var9 = var4.Math;
                    var7 = var9.round;
                    var5 = var10 + var5;
                    var5 = var7.bind(var9)(var5);
                    var0 = var5 / var0;
                    if (!(!(var0 > var3))) {
                        _fun4743_ip = 874;
                        continue _fun4743
                    }
                case 815:
                    var3 = 0.01;
                    var3 = var6 < var3;
                    if (var3) {
                        _fun4743_ip = 856;
                        continue _fun4743
                    }
                case 832:
                    var7 = var4.Math;
                    var4 = var7.abs;
                    var7 = var4.bind(var7)(var8);
                    var4 = 1;
                    var3 = var7 < var4;
                case 856:
                    if (!var3) {
                        _fun4743_ip = 986;
                        continue _fun4743
                    }
                case 862:
                    var3 = var1.deactivateAndFlush;
                    var3 = var3.bind(var1)();
                    _fun4743_ip = 986;
                    continue _fun4743;
                case 874:
                    var1._anyBlankStartTime = var2;
                    var4 = var1._info;
                    var3 = var4.any_blank_speed_sum;
                    var3 = var3 + var6;
                    var4.any_blank_speed_sum = var3;
                    var4 = var1._info;
                    var3 = var4.any_blank_count;
                    var3 = var3 + 1;
                    var4.any_blank_count = var3;
                    var4 = var1._info;
                    var3 = var4.pixels_blank;
                    var3 = var3 + var5;
                    var4.pixels_blank = var3;
                    var3 = 0.5;
                    if (!(var0 > var3)) {
                        _fun4743_ip = 986;
                        continue _fun4743
                    }
                case 959:
                    var1._mostlyBlankStartTime = var2;
                    var2 = var1._info;
                    var1 = var2.mostly_blank_count;
                    var1 = var1 + 1;
                    var2.mostly_blank_count = var1;
                case 986:
                    return var0;
                case 988:
                    var0 = 0;
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'enabled';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._enabled;
            return var0;
        };
        var0.value = var1;
        var2[3] = var0;
        var0 = {};
        var1 = '_resetData';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = null;
            var1._anyBlankStartTime = var0;
            var2 = _closure1_slot3;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var4 = var3;
            var2 = new var4[var2](var3);
            var2 = var2 instanceof Object ? var2 : var3;
            var1._info = var2;
            var1._mostlyBlankStartTime = var0;
            var1._samplesStartTime = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[4] = var0;
        var0 = {};
        var1 = 'addListener';
        var0.key = var1;
        var1 = function arg0() {
            _fun4746: for (var _fun4746_ip = 0;;) switch (_fun4746_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot6;
                    var2 = null;
                    if (!(var2 === var4)) {
                        _fun4746_ip = 46;
                        continue _fun4746
                    }
                case 22:
                    var2 = global;
                    var5 = var2.console;
                    var4 = var5.warn;
                    var2 = 'Call `FillRateHelper.setSampleRate` before `addListener`.';
                    var2 = var4.bind(var5)(var2);
                case 46:
                    var2 = _closure1_slot4;
                    var0 = var2.push;
                    var0 = var0.bind(var2)(var3);
                    var0 = {};
                    var1 = function() {
                        var3 = _closure1_slot4;
                        var2 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            var1 = _closure3_slot0;
                            var0 = arg0;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        _closure1_slot4 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.remove = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var6 = 'setSampleRate';
        var0.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            _closure1_slot6 = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'setMinSampleCount';
        var0.key = var6;
        var5 = function arg0() {
            var0 = arg0;
            _closure1_slot5 = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);