// modules/forums/tracking/ForumChannelAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var1);
    var1 = 1;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = function() { // Original name: ForumChannelAnalyticsManager, environment: var5
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.filterTagIds = var0;
            var0 = undefined;
            return var0;
        };
        var2.setFilterTagIds = var3;
        var3 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.sortOrder = var0;
            var0 = undefined;
            return var0;
        };
        var2.setSortOrder = var3;
        var3 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.layout = var0;
            var0 = undefined;
            return var0;
        };
        var2.setLayout = var3;
        var3 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.tagSetting = var0;
            var0 = undefined;
            return var0;
        };
        var2.setTagSetting = var3;
        var3 = function() { // Environment: var1
            _fun53381: for (var _fun53381_ip = 0;;) switch (_fun53381_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.filterTagIds;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun53381_ip = 25;
                        continue _fun53381
                    }
                case 19:
                    var0 = new Array(0);
                    _fun53381_ip = 53;
                    continue _fun53381;
                case 25:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var1 = _closure2_slot0;
                    var1 = var1.filterTagIds;
                    var0 = var2.bind(var3)(var1);
                case 53:
                    return var0;
            }
        };
        var2.getFilterTagIdsAnalytics = var3;
        var3 = function(arg0) { // Environment: var1
            _fun53382: for (var _fun53382_ip = 0;;) switch (_fun53382_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.sortOrder;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun53382_ip = 61;
                        continue _fun53382
                    }
                case 19:
                    var4 = _closure1_slot1;
                    var3 = var4.getChannel;
                    var2 = arg0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var1 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun53382_ip = 58;
                        continue _fun53382
                    }
                case 48:
                    var2 = var3.getDefaultSortOrder;
                    var1 = var2.bind(var3)();
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var2.getSortOrderAnalytics = var3;
        var3 = function(arg0) { // Environment: var1
            _fun53383: for (var _fun53383_ip = 0;;) switch (_fun53383_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.layout;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun53383_ip = 61;
                        continue _fun53383
                    }
                case 19:
                    var4 = _closure1_slot1;
                    var3 = var4.getChannel;
                    var2 = arg0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var1 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun53383_ip = 58;
                        continue _fun53383
                    }
                case 48:
                    var2 = var3.getDefaultLayout;
                    var1 = var2.bind(var3)();
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var2.getLayoutAnalytics = var3;
        var1 = function(arg0) { // Environment: var1
            _fun53384: for (var _fun53384_ip = 0;;) switch (_fun53384_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.tagSetting;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun53384_ip = 61;
                        continue _fun53384
                    }
                case 19:
                    var4 = _closure1_slot1;
                    var3 = var4.getChannel;
                    var2 = arg0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var1 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun53384_ip = 58;
                        continue _fun53384
                    }
                case 48:
                    var2 = var3.getDefaultTagSetting;
                    var1 = var2.bind(var3)();
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var2.getTagSettingAnalytics = var1;
        return var0;
    };
    var _closure1_slot2 = var1;
    var1 = var3.bind(var0)(var1);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/tracking/ForumChannelAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 1372, 2]);