// lib/native/BundleUpdater.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.NativeModules;
    var7 = var6.NativeEventEmitter;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var9 = var8.bind(var0)(var6);
    var6 = var9.prototype;
    var8 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var12 = 'BundleUpdater';
    var13 = var8;
    var6 = new var13[var9](var12, var11);
    var6 = var6 instanceof Object ? var6 : var8;
    var _closure1_slot6 = var6;
    var3 = var3.BundleUpdaterManager;
    var _closure1_slot7 = var3;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var13 = var6;
    var12 = var3;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = {
        'downloaded': 'BundleDownloaded',
        'otaUpdateChecked': 'OtaUpdateChecked'
    };
    var _closure1_slot9 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var0 = {};
        var2 = 'getInitialBundleDownloaded';
        var0.key = var2;
        var2 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getInitialBundleDownloaded;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var2;
        var2 = new Array(11);
        var2[0] = var0;
        var0 = {};
        var5 = 'getInitialOtaUpdateChecked';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getInitialOtaUpdateChecked;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'addEventListener';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot9;
            var1 = arg0;
            var3 = var2[var1];
            var2 = _closure1_slot8;
            var1 = var2.addListener;
            var0 = arg1;
            var0 = var1.bind(var2)(var3, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'checkForUpdateAndReload';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.checkForUpdateAndReload;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'verifyOtaFiles';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.verifyOtaFiles;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'getBuildOverrideCookieContents';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getBuildOverrideCookieContents;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'setBuildOverrideCookieHeader';
        var0.key = var5;
        var5 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.setBuildOverrideCookieHeader;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'getOtaRootPath';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getOtaRootPath;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'getManifestInfo';
        var0.key = var5;
        var5 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getManifestInfo;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'emitOtaMetric';
        var0.key = var5;
        var5 = function arg0() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 5;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.match;
            var2 = arg0;
            var5 = var3.bind(var4)(var2);
            var4 = var5.with;
            var3 = {};
            var2 = 'OtaCheckAttempt';
            var3.type = var2;
            var2 = function(arg0) { // Environment: var1
                var5 = arg0;
                var3 = _closure1_slot6;
                var2 = var3.verbose;
                var1 = 'OTA check attempt';
                var1 = var2.bind(var3)(var1, var5);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var4 = var3[var1];
                var1 = undefined;
                var7 = var2.bind(var1)(var4);
                var6 = var7.track;
                var0 = _closure1_slot5;
                var4 = var0.MOBILE_OTA_CHECK_ATTEMPT;
                var0 = {};
                var8 = var5.result;
                var0.result = var8;
                var8 = var5.durationSeconds;
                var0.duration_seconds = var8;
                var8 = var5.bytesReceived;
                var0.bytes_received = var8;
                var8 = var5.error;
                var0.error = var8;
                var0 = var6.bind(var7)(var4, var0);
                var0 = 7;
                var0 = var3[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.increment;
                var4 = _closure2_slot0;
                var3 = var4.prepareOtaMetricForDatadog;
                var0 = ['result'];
                var0 = var3.bind(var4)(var5, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var4 = var4.bind(var5)(var3, var2);
            var3 = var4.with;
            var2 = {};
            var5 = 'OtaAssetDownloadAttempt';
            var2.type = var5;
            var1 = function(arg0) { // Environment: var1
                var5 = arg0;
                var3 = _closure1_slot6;
                var2 = var3.verbose;
                var1 = 'OTA asset download attempt';
                var1 = var2.bind(var3)(var1, var5);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var4 = var3[var1];
                var1 = undefined;
                var7 = var2.bind(var1)(var4);
                var6 = var7.track;
                var0 = _closure1_slot5;
                var4 = var0.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT;
                var0 = {};
                var8 = var5.result;
                var0.result = var8;
                var8 = var5.durationSeconds;
                var0.duration_seconds = var8;
                var8 = var5.error;
                var0.error = var8;
                var8 = var5.url;
                var0.url = var8;
                var8 = var5.statusCode;
                var0.status_code = var8;
                var8 = var5.bytesReceived;
                var0.bytes_received = var8;
                var0 = var6.bind(var7)(var4, var0);
                var0 = 7;
                var0 = var3[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.increment;
                var4 = _closure2_slot0;
                var3 = var4.prepareOtaMetricForDatadog;
                var0 = ['result', 'statusCode'];
                var0 = var3.bind(var4)(var5, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.exhaustive;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = 'prepareOtaMetricForDatadog';
        var0.key = var5;
        var1 = function arg0() {
            _fun79229: for (var _fun79229_ip = 0;;) switch (_fun79229_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arguments[1];
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun79229_ip = 22;
                        continue _fun79229
                    }
                case 18:
                    var3 = new Array(0);
                case 22:
                    var0 = {};
                    var2 = var2.type;
                    var0.name = var2;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var0 = _closure3_slot0;
                        var3 = var0[var4];
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '';
                        var0 = ':';
                        var0 = var2.bind(var1)(var4, var0, var3);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.tags = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[10] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/native/BundleUpdater.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 660, 3, 3459, 795, 4261, 2]);