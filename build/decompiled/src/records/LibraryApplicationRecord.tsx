// records/LibraryApplicationRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun30642: for (var _fun30642_ip = 0;;) switch (_fun30642_ip) {
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
                _fun30642_ip = 74;
                continue _fun30642;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.LibraryApplicationFlags;
    var _closure1_slot10 = var7;
    var7 = var6.Distributors;
    var _closure1_slot11 = var7;
    var6 = var6.SKUTypes;
    var _closure1_slot12 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: LibraryApplicationRecord, environment: var6
            _fun30646: for (var _fun30646_ip = 0;;) switch (_fun30646_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun30646_ip = 65;
                        continue _fun30646
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun30646_ip = 103;
                    continue _fun30646;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.createdAt;
                    var0.createdAt = var2;
                    var2 = var1.flags;
                    var0.flags = var2;
                    var2 = var1.branchId;
                    var0.branchId = var2;
                    var2 = var1.entitlements;
                    var0.entitlements = var2;
                    var2 = var1.branch;
                    var0.branch = var2;
                    var2 = var1.sku;
                    var0.sku = var2;
                    var1 = var1.isTestMode;
                    if (var1) {
                        _fun30646_ip = 202;
                        continue _fun30646
                    }
                case 200:
                    var1 = false;
                case 202:
                    var0.isTestMode = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var0 = {};
        var1 = 'getFlags';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.flags;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(15);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasFlag';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.flags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isHidden';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot10;
            var0 = var0.HIDDEN;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isLegacyOverlayEnabled';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot10;
            var0 = var0.OVERLAY_DISABLED;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'isOverlayV3Enabled';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot10;
            var0 = var0.OVERLAY_V3_DISABLED;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isOverlayEnabled';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun30652: for (var _fun30652_ip = 0;;) switch (_fun30652_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isLegacyOverlayEnabled;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30652_ip = 30;
                        continue _fun30652
                    }
                case 18:
                    var1 = var2.isOverlayV3Enabled;
                    var0 = var1.bind(var2)();
                case 30:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isMasterBranch';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.branchId;
            var0 = var0.id;
            var0 = var1 === var0;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'isDiscordApplication';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'isEntitled';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun30655: for (var _fun30655_ip = 0;;) switch (_fun30655_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var0 = arg1;
                    var _closure3_slot2 = var0;
                    var0 = var2.isTestMode;
                    var3 = !var0;
                    var0 = !var3;
                    if (!var3) {
                        _fun30655_ip = 60;
                        continue _fun30655
                    }
                case 38:
                    var3 = var2.entitlements;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var3 = var4.isValid;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var0 = _closure3_slot0;
                        var0 = var0.branchId;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 60:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isPreorder';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun30657: for (var _fun30657_ip = 0;;) switch (_fun30657_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.sku;
                    var0 = var0.preorderReleaseAt;
                    var2 = null;
                    var0 = var2 != var0;
                    if (var0) {
                        _fun30657_ip = 40;
                        continue _fun30657
                    }
                case 24:
                    var1 = var1.sku;
                    var1 = var1.preorderApproximateReleaseDate;
                    var0 = var2 != var1;
                case 40:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getDistributor';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = _closure1_slot11;
            var0 = var0.DISCORD;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getBranchName';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun30659: for (var _fun30659_ip = 0;;) switch (_fun30659_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.branch;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 'master';
                    if (!var2) {
                        _fun30659_ip = 35;
                        continue _fun30659
                    }
                case 24:
                    var1 = var1.branch;
                    var0 = var1.name;
                case 35:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getBranchedName';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun30660: for (var _fun30660_ip = 0;;) switch (_fun30660_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.isMasterBranch;
                    var2 = var2.bind(var0)();
                    if (var2) {
                        _fun30660_ip = 82;
                        continue _fun30660
                    }
                case 21:
                    var3 = var0.branch;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun30660_ip = 82;
                        continue _fun30660
                    }
                case 33:
                    var10 = var1.name;
                    var0 = var0.branch;
                    var8 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var11 = '';
                    var9 = ' (';
                    var7 = ')';
                    var0 = var11[var4](var10, var9, var8, var7, var6);
                    _fun30660_ip = 87;
                    continue _fun30660;
                case 82:
                    var0 = var1.name;
                case 87:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getSkuIdForAnalytics';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.sku;
            var0 = var0.id;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'getAnalyticsData';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun30662: for (var _fun30662_ip = 0;;) switch (_fun30662_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot8;
                    var1 = var3.getApplication;
                    var0 = var2.id;
                    var3 = var1.bind(var3)(var0);
                    var0 = {};
                    var1 = null;
                    var5 = var1 != var3;
                    var4 = null;
                    if (!var5) {
                        _fun30662_ip = 44;
                        continue _fun30662
                    }
                case 39:
                    var4 = var3.id;
                case 44:
                    var0.application_id = var4;
                    var4 = var1 != var3;
                    var1 = null;
                    if (!var4) {
                        _fun30662_ip = 63;
                        continue _fun30662
                    }
                case 58:
                    var1 = var3.name;
                case 63:
                    var0.application_name = var1;
                    var1 = var2.getSkuIdForAnalytics;
                    var1 = var1.bind(var2)();
                    var0.sku_id = var1;
                    var1 = var2.getDistributor;
                    var1 = var1.bind(var2)();
                    var0.launcher_platform = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var5 = {};
        var0 = 'createFromServer';
        var5.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var6
            _fun30663: for (var _fun30663_ip = 0;;) switch (_fun30663_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var1 = var4.application;
                    var1 = var1.id;
                    var0.id = var1;
                    var1 = var4.branch_id;
                    var0.branchId = var1;
                    var1 = var4.entitlements;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun30663_ip = 55;
                        continue _fun30663
                    }
                case 49:
                    var1 = new Array(0);
                    _fun30663_ip = 78;
                    continue _fun30663;
                case 55:
                    var7 = var4.entitlements;
                    var6 = var7.map;
                    var5 = function(arg0) { // Environment: var5
                        var2 = _closure1_slot9;
                        var1 = var2.createFromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var6.bind(var7)(var5);
                case 78:
                    var0.entitlements = var1;
                    var1 = var4.branch;
                    var0.branch = var1;
                    var1 = var4.flags;
                    var0.flags = var1;
                    var1 = var4.created_at;
                    var0.createdAt = var1;
                    var1 = {};
                    var5 = var4.sku;
                    var5 = var5.id;
                    var1.id = var5;
                    var5 = var4.sku;
                    var5 = var5.type;
                    var1.type = var5;
                    var5 = var4.sku;
                    var5 = var5.premium;
                    var1.premium = var5;
                    var5 = var4.sku;
                    var5 = var5.preorder_release_at;
                    var6 = var3 != var5;
                    var5 = null;
                    if (!var6) {
                        _fun30663_ip = 226;
                        continue _fun30663
                    }
                case 184:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 10;
                    var6 = var8[var6];
                    var8 = undefined;
                    var7 = var7.bind(var8)(var6);
                    var6 = var4.sku;
                    var6 = var6.preorder_release_at;
                    var5 = var7.bind(var8)(var6);
                case 226:
                    var1.preorderReleaseAt = var5;
                    var5 = var4.sku;
                    var5 = var5.preorder_approximate_release_date;
                    var5 = var3 != var5;
                    var3 = null;
                    if (!var5) {
                        _fun30663_ip = 264;
                        continue _fun30663
                    }
                case 252:
                    var4 = var4.sku;
                    var3 = var4.preorder_approximate_release_date;
                case 264:
                    var1.preorderApproximateReleaseDate = var3;
                    var0.sku = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var9 = var0;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var7 = 'createForTestMode';
        var5.key = var7;
        var6 = function(arg0) { // Original name: value, environment: var6
            var4 = arg0;
            var2 = _closure2_slot0;
            var0 = {};
            var1 = var4.id;
            var0.id = var1;
            var1 = new Array(0);
            var0.entitlements = var1;
            var1 = var4.branch;
            var1 = var1.id;
            var0.branchId = var1;
            var1 = var4.branch;
            var0.branch = var1;
            var1 = _closure1_slot10;
            var1 = var1.ENTITLED;
            var0.flags = var1;
            var1 = var4.branch;
            var1 = var1.created_at;
            var0.createdAt = var1;
            var1 = {};
            var4 = var4.skuId;
            var1.id = var4;
            var3 = _closure1_slot12;
            var3 = var3.DURABLE_PRIMARY;
            var1.type = var3;
            var3 = false;
            var1.premium = var3;
            var0.sku = var1;
            var1 = true;
            var0.isTestMode = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var6 = var1;
            var5 = var0;
            var0 = new var6[var2](var5, var4);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/LibraryApplicationRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3413, 3450, 660, 1384, 3004, 2]);