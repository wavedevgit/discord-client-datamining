// modules/user_settings/native/defs/UploadIntlDataSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85939: for (var _fun85939_ip = 0;;) switch (_fun85939_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85939_ip = 637;
                            continue _fun85939
                        }
                    case 10:
                        var9 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                    case 16: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 7;
                        var1 = var8[var1];
                        var3 = var6.bind(var9)(var1);
                        var2 = var3.loadJsonAsset;
                        var1 = 8;
                        var1 = var8[var1];
                        var1 = var6.bind(var9)(var1);
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 65);
                    case 63:
                        return var1;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun85939_ip = 605;
                            continue _fun85939
                        }
                    case 74:
                        var5 = var1;
                        var6 = {};
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var10 = 9;
                        var2 = var12[var10];
                        var2 = var11.bind(var9)(var2);
                        var2 = var2.intl;
                        var2 = var2.currentLocale;
                        var6.currentLocale = var2;
                        var2 = var12[var10];
                        var2 = var11.bind(var9)(var2);
                        var2 = var2.systemLocale;
                        var6.systemLocale = var2;
                        var2 = var12[var10];
                        var2 = var11.bind(var9)(var2);
                        var2 = var2.initialLocale;
                        var6.initialLocale = var2;
                        var3 = {};
                        var2 = global;
                        var14 = var2.Object;
                        var13 = var14.fromEntries;
                        var16 = var2.Object;
                        var15 = var16.keys;
                        var8 = var12[var10];
                        var8 = var11.bind(var9)(var8);
                        var8 = var8.t;
                        var16 = var15.bind(var16)(var8);
                        var15 = var16.map;
                        var8 = function(arg0) { // Environment: var8
                            var4 = arg0;
                            var0 = new Array(2);
                            var0[0] = var4;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 9;
                            var2 = var7[var1];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.reserialize;
                            var1 = var7[var1];
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                            var0[1] = var1;
                            return var0;
                        };
                        var8 = var15.bind(var16)(var8);
                        var18 = var13.bind(var14)(var8);
                        var19 = var3;
                        var8 = copyDataProperties(var19, var18);
                        var6.messagesFromIntl = var3;
                        var3 = {};
                        var19 = var3;
                        var18 = var1;
                        var8 = copyDataProperties(var19, var18);
                        var6.messagesFromFile = var3;
                        var3 = {};
                        var8 = var2.Date;
                        var13 = var8.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var8
                            }
                        });
                        var20 = var13;
                        var8 = new var20[var8](var19);
                        var13 = var8 instanceof Object ? var8 : var13;
                        var8 = var13.toISOString;
                        var8 = var8.bind(var13)();
                        var3.timestamp = var8;
                        var8 = 10;
                        var8 = var12[var8];
                        var11 = var11.bind(var9)(var8);
                        var8 = var11.isIOS;
                        var11 = var8.bind(var11)();
                        var8 = 'Android';
                        if (!var11) {
                            _fun85939_ip = 338;
                            continue _fun85939
                        }
                    case 332:
                        var8 = 'iOS';
                    case 338:
                        var3.platform = var8;
                        var11 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var8 = 6;
                        var8 = var12[var8];
                        var11 = var11.bind(var9)(var8);
                        var8 = var11.getConstants;
                        var8 = var8.bind(var11)();
                        var7 = var8;
                        var11 = var8.Manifest;
                        var8 = var11.trim;
                        var8 = var8.bind(var11)();
                        var11 = var8.length;
                        var8 = 0;
                        var8 = var11 > var8;
                        var12 = 'N/A';
                        if (!var8) {
                            _fun85939_ip = 421;
                            continue _fun85939
                        }
                    case 412:
                        var8 = var7;
                        var12 = var8.Manifest;
                    case 421:
                        var8 = var7;
                        var11 = var8.Identifier;
                        var13 = var8.Build;
                        var7 = {};
                        var14 = var8.Version;
                        var7.appVersion = var14;
                        var7.buildNumber = var13;
                        var7.manifest = var12;
                        var12 = var8.ReleaseChannel;
                        var7.releaseChannel = var12;
                        var7.identifier = var11;
                        var8 = var8.OTABuild;
                        var7.otaBuild = var8;
                        var3.clientInfo = var7;
                        var8 = var2.Object;
                        var7 = var8.keys;
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.length;
                        var3.messagesFromFileKeys = var5;
                        var7 = var2.Object;
                        var5 = var7.keys;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var10];
                        var4 = var8.bind(var9)(var4);
                        var4 = var4.t;
                        var4 = var5.bind(var7)(var4);
                        var4 = var4.length;
                        var3.messagesFromIntlKeys = var4;
                        var6.metadata = var3;
                        var5 = var2.JSON;
                        var4 = var5.stringify;
                        var3 = null;
                        var2 = 2;
                        var2 = var4.bind(var5)(var6, var3, var2);
                    case 602: // try_end0
                        return var2;
                    case 605:
                        return var1;
                    case 608: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Failed to serialize intl data: ';
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    case 637:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85943: for (var _fun85943_ip = 0;;) switch (_fun85943_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85943_ip = 429;
                            continue _fun85943
                        }
                    case 12:
                        var3 = undefined;
                        var4 = undefined;
                        var1 = function() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot9;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': true
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 10;
                        var1 = var7[var1];
                        var5 = var5.bind(var3)(var1);
                        var1 = var5.isIOS;
                        var1 = var1.bind(var5)();
                        var5 = _closure1_slot6;
                        if (var1) {
                            _fun85943_ip = 75;
                            continue _fun85943
                        }
                    case 67:
                        var1 = var5.ANDROID_APP;
                        _fun85943_ip = 81;
                        continue _fun85943;
                    case 75:
                        var1 = var5.IOS_APP;
                    case 81:
                        var4 = var1;
                    case 84: // try_start_0 // try_start_1
                        var1 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot10;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun85943_ip = 311;
                            continue _fun85943
                        }
                    case 108:
                        var8 = _closure1_slot7;
                        var7 = var8.DEBUG_LOG;
                        var5 = var4;
                        var4 = 'intl_data';
                        var8 = var7.bind(var8)(var5, var4);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 11;
                        var4 = var7[var4];
                        var4 = var5.bind(var3)(var4);
                        var7 = var4.HTTP;
                        var5 = var7.post;
                        var4 = {
                            'url': null,
                            'body': null,
                            'retries': 3,
                            'headers': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var4.url = var8;
                        var4.body = var1;
                        var8 = {};
                        var9 = 'application/json';
                        var8['Content-Type'] = var9;
                        var4.headers = var8;
                        var4 = var5.bind(var7)(var4);
                        SaveGenerator(address = 216);
                    case 214:
                        return var4;
                    case 216:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun85943_ip = 297;
                            continue _fun85943
                        }
                    case 222:
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var5 = 12;
                        var5 = var11[var5];
                        var8 = var7.bind(var3)(var5);
                        var7 = var8.open;
                        var5 = {
                            'key': 'USER_SETTINGS_INTL_DATA_UPLOADED',
                            'IconComponent': null,
                            'content': 'Internationalization data uploaded successfully.'
                        };
                        var10 = _closure1_slot0;
                        var9 = 13;
                        var9 = var11[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.CircleInformationIcon;
                        var5.IconComponent = var9;
                        var5 = var7.bind(var8)(var5);
                    case 295: // try_end0
                        _fun85943_ip = 400;
                        continue _fun85943;
                    case 297: // try_end1
                        var5 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot9;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot9;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var5 = var5.bind(var3)();
                        return var4;
                    case 311:
                        var4 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot9;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot9;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var4 = var4.bind(var3)();
                        return var1;
                    case 325: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var1 = 12;
                        var1 = var8[var1];
                        var5 = var4.bind(var3)(var1);
                        var4 = var5.open;
                        var1 = {
                            'key': 'USER_SETTINGS_INTL_DATA_UPLOAD_FAILED',
                            'IconComponent': null,
                            'content': 'Failed to upload internationalization data.'
                        };
                        var7 = _closure1_slot0;
                        var6 = 13;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.CircleInformationIcon;
                        var1.IconComponent = var6;
                        var1 = var4.bind(var5)(var1);
                    case 400: // try_end2
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot9;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot9;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1 = var1.bind(var3)();
                        return var3;
                    case 414: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var2 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot9;
                                var1 = var2.setState;
                                var0 = {
                                    'isDisabled': true,
                                    'isUploading': false
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.batchUpdates;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot9;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = false;
                                    var0.isDisabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = 5000;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 429:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ActivityIndicator;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.DebugLogCategory;
    var _closure1_slot6 = var3;
    var1 = var1.Endpoints;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.create;
    var1 = function() { // Environment: var7
        var0 = {
            'isDisabled': false,
            'isUploading': false
        };
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var _closure1_slot9 = var1;
    var1 = 14;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var8 = function() {
        var0 = 'Upload i18n data';
        return var0;
    };
    var1.title = var8;
    var8 = null;
    var1.parent = var8;
    var8 = 15;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.FileUpIcon;
    var1.IconComponent = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onPress = var8;
    var8 = 16;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.useStaffOrDeveloperSettingPredicate;
    var1.usePredicate = var8;
    var8 = function() {
        _fun85966: for (var _fun85966_ip = 0;;) switch (_fun85966_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var2 = var0.isUploading;
                var0 = null;
                if (!var2) {
                    _fun85966_ip = 40;
                    continue _fun85966
                }
            case 24:
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 40:
                return var0;
        }
    };
    var1.useTrailing = var8;
    var7 = function() {
        var1 = _closure1_slot9;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.isDisabled;
        return var0;
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/UploadIntlDataSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 660, 33, 629, 802, 1594, 1237, 1271, 1234, 478, 507, 3148, 3266, 8999, 11077, 10451, 2]);