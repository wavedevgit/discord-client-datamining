// actions/UserActivityActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun62382: for (var _fun62382_ip = 0;;) switch (_fun62382_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62382_ip = 296;
                            continue _fun62382
                        }
                    case 16:
                        var1 = var9.metadata;
                        var4 = null;
                        if (!(var4 != var1)) {
                            _fun62382_ip = 60;
                            continue _fun62382
                        }
                    case 28:
                        var2 = global;
                        var3 = var2.Object;
                        var2 = var3.keys;
                        var2 = var2.bind(var3)(var1);
                        var3 = var2.length;
                        var2 = 0;
                        if (!(!(var3 > var2))) {
                            _fun62382_ip = 293;
                            continue _fun62382
                        }
                    case 60:
                        var3 = _closure1_slot4;
                        var2 = var3.getActivityMetadata;
                        var2 = var2.bind(var3)(var8);
                        if (!(var4 == var2)) {
                            _fun62382_ip = 290;
                            continue _fun62382
                        }
                    case 87:
                        var3 = var9.session_id;
                        if (!(var4 != var3)) {
                            _fun62382_ip = 254;
                            continue _fun62382
                        }
                    case 100:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var7 = undefined;
                        var3 = var4.bind(var7)(var3);
                        var6 = var3.HTTP;
                        var4 = var6.get;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var12 = _closure1_slot5;
                        var11 = var12.USER_ACTIVITY_METADATA;
                        var10 = var9.session_id;
                        var9 = var9.application_id;
                        var9 = var11.bind(var12)(var8, var10, var9);
                        var3.url = var9;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address = 186);
                    case 184:
                        return var3;
                    case 186:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun62382_ip = 251;
                            continue _fun62382
                        }
                    case 192:
                        var4 = var3.body;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 3;
                        var5 = var9[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'ACTIVITY_METADATA_UPDATE';
                        var5.type = var9;
                        var5.metadata = var4;
                        var5.userId = var8;
                        var5 = var6.bind(var7)(var5);
                        return var4;
                    case 251:
                        return var3;
                    case 254:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var15 = 'null/undefined session_id';
                        var16 = var4;
                        var3 = new var16[var5](var15, var14);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 290:
                        return var2;
                    case 293:
                        return var1;
                    case 296:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/UserActivityActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACTIVITY_SYNC';
        var1.type = var4;
        var4 = arg0;
        var1.activity = var4;
        var4 = arg1;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.sync = var3;
    var3 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.getSpotifyMetadataFromActivity;
        var4 = var2.bind(var3)(var5, var4);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'ACTIVITY_PLAY';
            var0.type = var3;
            var4 = _closure2_slot0;
            var0.activity = var4;
            var3 = _closure2_slot1;
            var0.userId = var3;
            var3 = arg0;
            var0.metadata = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'ACTIVITY_PLAY';
            var0.type = var3;
            var4 = _closure2_slot0;
            var0.activity = var4;
            var3 = _closure2_slot1;
            var0.userId = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.play = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getMetadata = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3569, 660, 806, 7803, 507, 2]);