// actions/AuthorizedAppsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() { // Original name: fetch, environment: var3
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var3 = var6.dispatch;
        var2 = {};
        var7 = 'USER_AUTHORIZED_APPS_REQUEST';
        var2.type = var7;
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot0;
        var2 = 2;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var5 = _closure1_slot3;
        var5 = var5.OAUTH2_TOKENS;
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'USER_AUTHORIZED_APPS_UPDATE';
            var0.type = var3;
            var3 = arg0;
            var3 = var3.body;
            var0.tokens = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'USER_AUTHORIZED_APPS_UPDATE';
            var0.type = var3;
            var3 = new Array(0);
            var0.tokens = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.fetch = var6;
    var6 = function(arg0) { // Original name: fetchByApplicationId, environment: var3
        var7 = arg0;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var3 = var6.dispatch;
        var2 = {};
        var8 = 'USER_AUTHORIZED_APPS_REQUEST_BY_ID';
        var2.type = var8;
        var2.applicationId = var7;
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot0;
        var2 = 2;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var6 = _closure1_slot3;
        var5 = var6.GET_APPLICATION_TOKENS;
        var5 = var5.bind(var6)(var7);
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'USER_AUTHORIZED_APPS_UPDATE_BY_ID';
            var0.type = var3;
            var3 = arg0;
            var3 = var3.body;
            var0.tokens = var3;
            var3 = _closure2_slot0;
            var0.applicationId = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'USER_AUTHORIZED_APPS_UPDATE_BY_ID';
            var0.type = var3;
            var3 = new Array(0);
            var0.tokens = var3;
            var3 = _closure2_slot0;
            var0.applicationId = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.fetchByApplicationId = var6;
    var3 = function(arg0) { // Original name: delete, environment: var3
        var0 = this;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var7 = _closure1_slot3;
        var6 = var7.OAUTH2_TOKEN;
        var5 = arg0;
        var5 = var6.bind(var7)(var5);
        var2.url = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = var1.fetch;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.delete = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/AuthorizedAppsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 2]);