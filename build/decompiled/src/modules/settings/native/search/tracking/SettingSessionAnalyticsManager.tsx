// modules/settings/native/search/tracking/SettingSessionAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.searchSessionId = var1;
            var2.searchSessionStartTime = var1;
            var1 = false;
            var2.trackedQueryEntered = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getSearchSessionId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.searchSessionId;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'initialize';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var1);
            var1 = var3.v4;
            var1 = var1.bind(var3)();
            var2.searchSessionId = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2.searchSessionStartTime = var1;
            var1 = false;
            var2.trackedQueryEntered = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'maybeTrackSettingSearchQueryEntered';
        var0.key = var5;
        var5 = function() {
            _fun88566: for (var _fun88566_ip = 0;;) switch (_fun88566_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.trackedQueryEntered;
                    if (var0) {
                        _fun88566_ip = 55;
                        continue _fun88566
                    }
                case 12:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.trackSettingSearchQueryEntered;
                    var0 = var0.bind(var2)();
                    var0 = true;
                    var1.trackedQueryEntered = var0;
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() {
            _fun88567: for (var _fun88567_ip = 0;;) switch (_fun88567_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.searchSessionStartTime;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun88567_ip = 108;
                        continue _fun88567
                    }
                case 15:
                    var2 = var1.searchSessionId;
                    if (!(var0 != var2)) {
                        _fun88567_ip = 108;
                        continue _fun88567
                    }
                case 25:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = var1.searchSessionStartTime;
                    var4 = var3 - var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.trackSettingSearchClosed;
                    var2 = var2.bind(var3)(var4);
                    var1.searchSessionId = var0;
                    var1.searchSessionStartTime = var0;
                    var0 = false;
                    var1.trackedQueryEntered = var0;
                case 108:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/search/tracking/SettingSessionAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SettingSearchSessionAnalyticsManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 491, 11468, 2]);