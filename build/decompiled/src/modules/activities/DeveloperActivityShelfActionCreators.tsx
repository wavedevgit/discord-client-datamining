// modules/activities/DeveloperActivityShelfActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/DeveloperActivityShelfActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleUseActivityUrlOverride = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.activityUrlOverride = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setActivityUrlOverride = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED';
        var1.type = var4;
        var4 = arg0;
        var1.applicationId = var4;
        var4 = global;
        var4 = var4.Date;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var7 = var5;
        var4 = new var7[var4](var6);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = var5.getTime;
        var4 = var4.bind(var5)();
        var1.timestamp = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.markActivityUsed = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER';
        var1.type = var4;
        var4 = arg0;
        var1.filter = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);