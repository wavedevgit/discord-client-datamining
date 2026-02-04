// modules/user_profile/UserProfileApplicationWidgetTypes.tsx
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
        var3 = function arg0() {
            var0 = arg0;
            var2 = this;
            var4 = var0.id;
            var1 = var0.applicationId;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var0 = undefined;
            var5 = var6.bind(var0)(var2, var5);
            var2.id = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.WidgetType;
            var3 = var3.APPLICATION;
            var2.type = var3;
            var2.applicationId = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'toSubmission';
        var0.key = var1;
        var1 = function() {
            var2 = this;
            var0 = {};
            var1 = var2.id;
            var0.id = var1;
            var1 = {};
            var3 = var2.type;
            var1.type = var3;
            var2 = var2.applicationId;
            var1.application_id = var2;
            var0.data = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'isDiscardable';
        var0.key = var5;
        var5 = function() {
            var0 = false;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isValid';
        var0.key = var5;
        var5 = function() {
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isEqual';
        var0.key = var5;
        var5 = function arg0() {
            _fun87503: for (var _fun87503_ip = 0;;) switch (_fun87503_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var0 = var1 instanceof var0;
                    if (!var0) {
                        _fun87503_ip = 34;
                        continue _fun87503
                    }
                case 17:
                    var2 = var1.applicationId;
                    var1 = this;
                    var1 = var1.applicationId;
                    var0 = var2 === var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getUniqueKey';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var4 = var0.type;
            var3 = var0.applicationId;
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '';
            var0 = '-';
            var0 = var2.bind(var1)(var4, var0, var3);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getProfileAnalyticsOptions';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.type;
            var0.widgetType = var2;
            var1 = var1.applicationId;
            var0.applicationId = var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getProfileEditAnalyticsOptions';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.type;
            var0.widgetEdited = var2;
            var1 = var1.applicationId;
            var0.applicationId = var1;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/UserProfileApplicationWidgetTypes.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ApplicationWidget = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4661, 2]);