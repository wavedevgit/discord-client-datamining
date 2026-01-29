// modules/tti_analytics/native/TTIAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun39749: for (var _fun39749_ip = 0;;) switch (_fun39749_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39749_ip = 45;
                    continue _fun39749
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun39749_ip = 54;
                    continue _fun39749
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun39749_ip = 342;
                    continue _fun39749
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39749_ip = 322;
                    continue _fun39749
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39749_ip = 282;
                    continue _fun39749
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39749_ip = 269;
                    continue _fun39749
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun39749_ip = 162;
                    continue _fun39749
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun39749_ip = 178;
                    continue _fun39749
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39749_ip = 248;
                    continue _fun39749
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39749_ip = 248;
                    continue _fun39749
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39749_ip = 233;
                    continue _fun39749
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39749_ip = 246;
                    continue _fun39749
                }
            case 233:
                var8 = _closure1_slot26;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun39749_ip = 264;
                continue _fun39749;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun39749_ip = 282;
                continue _fun39749;
            case 269:
                var6 = _closure1_slot26;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun39749_ip = 322;
                    continue _fun39749
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun39749_ip = 329;
                    continue _fun39749
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39750: for (var _fun39750_ip = 0;;) switch (_fun39750_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39750_ip = 56;
                                continue _fun39750
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun39750_ip = 67;
                            continue _fun39750;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun39751: for (var _fun39751_ip = 0;;) switch (_fun39751_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39751_ip = 23;
                    continue _fun39751
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39751_ip = 33;
                    continue _fun39751
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun39751_ip = 70;
                    continue _fun39751
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39751_ip = 55;
                    continue _fun39751
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var3 = function() { // Original name: getDeviceMetadata, environment: var1
        _fun39752: for (var _fun39752_ip = 0;;) switch (_fun39752_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun39752_ip = 266;
                    continue _fun39752
                }
            case 16:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 13;
                var6 = var5[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var6);
                var6 = var7.getDeviceModel;
                var6 = var6.bind(var7)();
                var1.device_model = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getDeviceBrand;
                var6 = var6.bind(var7)();
                var1.device_brand = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getDeviceProduct;
                var6 = var6.bind(var7)();
                var1.device_product = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getDeviceManufacturer;
                var6 = var6.bind(var7)();
                var1.device_manufacturer = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getSmallestScreenWidth;
                var6 = var6.bind(var7)();
                var1.smallest_screen_width = var6;
                var7 = _closure1_slot1;
                var6 = 14;
                var6 = var5[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var1.device_performance_class = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getSocName;
                var6 = var6.bind(var7)();
                var1.soc_name = var6;
                var6 = var5[var2];
                var7 = var4.bind(var3)(var6);
                var6 = var7.getRamSize;
                var6 = var6.bind(var7)();
                var1.ram_size = var6;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.getMaxCpuFreq;
                var2 = var2.bind(var3)();
                var1.max_cpu_freq = var2;
                _closure1_slot17 = var1;
            case 266:
                var0 = _closure1_slot17;
                return var0;
        }
    };
    var _closure1_slot27 = var3;
    var0 = function() { // Original name: getRedesignScreenName, environment: var1
        _fun39753: for (var _fun39753_ip = 0;;) switch (_fun39753_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 20;
                var0 = var2[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getRootNavigationRef;
                var4 = var0.bind(var1)();
                var0 = null;
                var2 = var0 != var4;
                var1 = undefined;
                if (!var2) {
                    _fun39753_ip = 71;
                    continue _fun39753
                }
            case 46:
                var2 = var4.isReady;
                var2 = var2.bind(var4)();
                var1 = undefined;
                if (!var2) {
                    _fun39753_ip = 71;
                    continue _fun39753
                }
            case 61:
                var2 = var4.getCurrentRoute;
                var1 = var2.bind(var4)();
            case 71:
                if (!(var0 != var1)) {
                    _fun39753_ip = 807;
                    continue _fun39753
                }
            case 78:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 18;
                var2 = var2[var7];
                var5 = var4.bind(var6)(var2);
                var4 = var5.isModalOpen;
                var2 = _closure1_slot14;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun39753_ip = 801;
                    continue _fun39753
                }
            case 119:
                var4 = var1.name;
                var2 = 'panels';
                if (!(var2 !== var4)) {
                    _fun39753_ip = 365;
                    continue _fun39753
                }
            case 137:
                var5 = var1.name;
                var2 = var1.params;
                var4 = var0 == var2;
                var1 = undefined;
                if (var4) {
                    _fun39753_ip = 162;
                    continue _fun39753
                }
            case 157:
                var1 = var2.channelId;
            case 162:
                var2 = 'channel';
                if (!(var2 === var5)) {
                    _fun39753_ip = 174;
                    continue _fun39753
                }
            case 170:
                if (!(var0 == var1)) {
                    _fun39753_ip = 200;
                    continue _fun39753
                }
            case 174:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = 'redesign-';
                var2 = var4.bind(var2)(var5);
                return var2;
            case 200:
                var4 = _closure1_slot15;
                var2 = var4.has;
                var2 = var2.bind(var4)(var1);
                if (var2) {
                    _fun39753_ip = 363;
                    continue _fun39753
                }
            case 220:
                var4 = _closure1_slot9;
                var2 = var4.getChannel;
                var11 = var2.bind(var4)(var1);
                var4 = var0 != var11;
                var2 = 'unknown-channel';
                if (!var4) {
                    _fun39753_ip = 361;
                    continue _fun39753
                }
            case 247:
                var4 = var11.isThread;
                var5 = var4.bind(var11)();
                var4 = 'thread';
                if (var5) {
                    _fun39753_ip = 358;
                    continue _fun39753
                }
            case 264:
                var5 = var11.isPrivate;
                var8 = var5.bind(var11)();
                var5 = 'private_channel';
                if (var8) {
                    _fun39753_ip = 355;
                    continue _fun39753
                }
            case 283:
                var8 = var11.isGuildVocal;
                var9 = var8.bind(var11)();
                var8 = 'guild-voice';
                if (var9) {
                    _fun39753_ip = 352;
                    continue _fun39753
                }
            case 302:
                var9 = var11.isForumLikeChannel;
                var10 = var9.bind(var11)();
                var9 = 'guild-forum';
                if (var10) {
                    _fun39753_ip = 349;
                    continue _fun39753
                }
            case 321:
                var10 = var11.isDirectory;
                var11 = var10.bind(var11)();
                var10 = 'guild-text';
                if (!var11) {
                    _fun39753_ip = 346;
                    continue _fun39753
                }
            case 340:
                var10 = 'guild-directory';
            case 346:
                var9 = var10;
            case 349:
                var8 = var9;
            case 352:
                var5 = var8;
            case 355:
                var4 = var5;
            case 358:
                var2 = var4;
            case 361:
                return var2;
            case 363:
                return var1;
            case 365:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.getHistory;
                var1 = var1.bind(var2)();
                var1 = var1.location;
                var1 = var1.pathname;
                var2 = _closure1_slot13;
                var2 = var2.INDEX;
                if (!(var1 === var2)) {
                    _fun39753_ip = 430;
                    continue _fun39753
                }
            case 420:
                var2 = _closure1_slot10;
                var1 = var2.defaultRoute;
            case 430:
                var4 = var1.startsWith;
                var2 = _closure1_slot13;
                var2 = var2.LOGIN;
                var2 = var4.bind(var1)(var2);
                var4 = 'app_landing';
                var5 = var1;
                var1 = var4;
                if (var2) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 469:
                var8 = var5.startsWith;
                var2 = _closure1_slot13;
                var2 = var2.REGISTER;
                var2 = var8.bind(var5)(var2);
                var1 = var4;
                if (var2) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 499:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var7 = var4.bind(var6)(var2);
                var4 = var7.isModalOpen;
                var2 = _closure1_slot14;
                var2 = var4.bind(var7)(var2);
                var1 = 'invite';
                if (var2) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 541:
                var2 = _closure1_slot13;
                var2 = var2.FRIENDS;
                var1 = 'friends_list';
                if (!(var5 !== var2)) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 564:
                var4 = var5.startsWith;
                var2 = _closure1_slot13;
                var2 = var2.ME;
                var2 = var4.bind(var5)(var2);
                var1 = 'private_channel';
                if (var2) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 597:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var4 = var4.bind(var6)(var2);
                var2 = var4.tryParseChannelPath;
                var2 = var2.bind(var4)(var5);
                var4 = var0 != var2;
                var1 = 'other';
                if (!var4) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 642:
                var4 = var2.channelId;
                var4 = var0 != var4;
                var1 = 'channel-list';
                if (!var4) {
                    _fun39753_ip = 799;
                    continue _fun39753
                }
            case 663:
                var6 = _closure1_slot15;
                var5 = var6.has;
                var4 = var2.channelId;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun39753_ip = 794;
                    continue _fun39753
                }
            case 685:
                var5 = _closure1_slot9;
                var4 = var5.getChannel;
                var3 = var2.channelId;
                var7 = var4.bind(var5)(var3);
                var4 = var0 != var7;
                var3 = 'unknown-channel';
                if (!var4) {
                    _fun39753_ip = 789;
                    continue _fun39753
                }
            case 717:
                var4 = var7.isGuildVocal;
                var5 = var4.bind(var7)();
                var4 = 'guild-voice';
                if (var5) {
                    _fun39753_ip = 786;
                    continue _fun39753
                }
            case 736:
                var5 = var7.isForumLikeChannel;
                var6 = var5.bind(var7)();
                var5 = 'guild-forum';
                if (var6) {
                    _fun39753_ip = 783;
                    continue _fun39753
                }
            case 755:
                var6 = var7.isDirectory;
                var7 = var6.bind(var7)();
                var6 = 'guild-text';
                if (!var7) {
                    _fun39753_ip = 780;
                    continue _fun39753
                }
            case 774:
                var6 = 'guild-directory';
            case 780:
                var5 = var6;
            case 783:
                var4 = var5;
            case 786:
                var3 = var4;
            case 789:
                var1 = var3;
                _fun39753_ip = 799;
                continue _fun39753;
            case 794:
                var1 = var2.channelId;
            case 799:
                return var1;
            case 801:
                var1 = 'invite';
                return var1;
            case 807:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0, arg1) { // Original name: sharedProperties, environment: var1
        _fun39754: for (var _fun39754_ip = 0;;) switch (_fun39754_ip) {
            case 0:
                var0 = _closure1_slot4;
                var0 = var0.TTIManager;
                var3 = var0.AppOpenedTimestamp;
                var0 = {};
                var1 = _closure1_slot18;
                var0.load_id = var1;
                var1 = global;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var1 = var1 - var3;
                var0.duration_ms_since_app_opened = var1;
                var1 = arg0;
                var0.screen_name = var1;
                var1 = arg1;
                var0.has_cached_data = var1;
                var1 = _closure1_slot19;
                var3 = var1.length;
                var1 = 0;
                var3 = var3 > var1;
                var1 = null;
                if (!var3) {
                    _fun39754_ip = 102;
                    continue _fun39754
                }
            case 98:
                var1 = _closure1_slot19;
            case 102:
                var0.manifest = var1;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() { // Original name: _logLegacyAppUiViewed, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun39757: for (var _fun39757_ip = 0;;) switch (_fun39757_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39757_ip = 366;
                            continue _fun39757
                        }
                    case 13:
                        var5 = _closure1_slot29;
                        var2 = undefined;
                        var4 = arg0;
                        var1 = arg2;
                        var11 = var5.bind(var2)(var4, var1);
                        var1 = _closure1_slot4;
                        var4 = var1.TTIManager;
                        var1 = var4.getJSBundleTimestamps;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun39757_ip = 363;
                            continue _fun39757
                        }
                    case 69:
                        var10 = var1.JSBundleLoadedTimestamp;
                        var8 = var1.JSBundleParsedTimestamp;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 21;
                        var7 = var6[var4];
                        var13 = var5.bind(var2)(var7);
                        var12 = var13.markAt;
                        var14 = '🏃';
                        var7 = 'JS Bundle Loaded';
                        var7 = var12.bind(var13)(var14, var7, var10);
                        var7 = var6[var4];
                        var13 = var5.bind(var2)(var7);
                        var12 = var13.mark;
                        var7 = 'app_ui_viewed logged';
                        var7 = var12.bind(var13)(var14, var7);
                        var7 = var6[var4];
                        var14 = var5.bind(var2)(var7);
                        var13 = var14.addDetail;
                        var7 = var9 - var8;
                        var12 = var7 - 0;
                        var7 = 'Since Bundle Parsed';
                        var7 = var13.bind(var14)(var7, var12);
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var4 = global;
                        var12 = var4.Date;
                        var4 = var12.now;
                        var12 = var4.bind(var12)();
                        var4 = 20000;
                        var4 = var12 + var4;
                        var7.endTime = var4;
                        var4 = 23;
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot12;
                        var5 = var4.APP_UI_VIEWED;
                        var4 = {};
                        var17 = var4;
                        var16 = var11;
                        var11 = copyDataProperties(var17, var16);
                        var11 = _closure1_slot27;
                        var16 = var11.bind(var2)();
                        var17 = var4;
                        var11 = copyDataProperties(var17, var16);
                        var11 = var9 - var10;
                        var10 = 'duration_ms_since_required_js_bundle_loaded';
                        var4[var10] = var11;
                        var9 = var9 - var8;
                        var8 = 'duration_ms_since_required_js_bundle_parsed';
                        var4[var8] = var9;
                        var3 = _closure1_slot7;
                        var8 = var3.theme;
                        var3 = 'theme';
                        var4[var3] = var8;
                        var16 = arg1;
                        var17 = var4;
                        var3 = copyDataProperties(var17, var16);
                        var3 = {};
                        var8 = true;
                        var3.logEventProperties = var8;
                        var3 = var6.bind(var7)(var5, var4, var3);
                        return var2;
                    case 363:
                        return var1;
                    case 366:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: trackAppUIViewed2, environment: var1
        var0 = undefined;
        var3 = _closure1_slot32;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: _trackAppUIViewed, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39761: for (var _fun39761_ip = 0;;) switch (_fun39761_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39761_ip = 576;
                            continue _fun39761
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var _closure4_slot1 = var2;
                        var1 = _closure1_slot28;
                        var1 = var1.bind(var2)();
                        var7 = null;
                        var4 = var7 != var1;
                        var10 = 'unknown';
                        if (!var4) {
                            _fun39761_ip = 49;
                            continue _fun39761
                        }
                    case 46:
                        var10 = var1;
                    case 49:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 24;
                        var1 = var6[var1];
                        var1 = var4.bind(var2)(var1);
                        var4 = var1.AppStartInfo;
                        var1 = var4.getAppStartInfo;
                        var1 = var1.bind(var4)();
                        var4 = var1.appCreatedTime;
                        _closure4_slot0 = var4;
                        var12 = var1.appOpenedTime;
                        var6 = var1.extraProperties;
                        var1 = _closure1_slot4;
                        var1 = var1.TTIManager;
                        var1 = var1.getAllNativeTimestamps;
                        var4 = var7 == var1;
                        var1 = undefined;
                        if (var4) {
                            _fun39761_ip = 176;
                            continue _fun39761
                        }
                    case 132:
                        var4 = _closure1_slot4;
                        var8 = var4.TTIManager;
                        var4 = var8.getAllNativeTimestamps;
                        var9 = var4.bind(var8)();
                        var4 = var7 == var9;
                        var1 = undefined;
                        if (var4) {
                            _fun39761_ip = 176;
                            continue _fun39761
                        }
                    case 161:
                        var8 = var9.then;
                        var4 = function(arg0) { // Environment: var3
                            var4 = arg0;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 21;
                            var1 = var3[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var5 = var1.logGroups;
                            var1 = 0;
                            var1 = var5[var1];
                            var1.nativeLogs = var4;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.processNativeLogs;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                        };
                        var1 = var8.bind(var9)(var4);
                    case 176:
                        SaveGenerator(address = 180);
                    case 178:
                        return var1;
                    case 180:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun39761_ip = 573;
                            continue _fun39761
                        }
                    case 189:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 28;
                        var4 = var9[var4];
                        var8 = var8.bind(var2)(var4);
                        var4 = var8.getCumulativeCPUUsage;
                        var8 = var4.bind(var8)();
                        var9 = var7 == var8;
                        var4 = undefined;
                        if (var9) {
                            _fun39761_ip = 234;
                            continue _fun39761
                        }
                    case 228:
                        var4 = var8.usage;
                    case 234:
                        var8 = var7 != var4;
                        var9 = null;
                        if (!var8) {
                            _fun39761_ip = 246;
                            continue _fun39761
                        }
                    case 243:
                        var9 = var4;
                    case 246:
                        var4 = {};
                        var8 = _closure1_slot27;
                        var14 = var8.bind(var2)();
                        var15 = var4;
                        var8 = copyDataProperties(var15, var14);
                        if (!(var7 == var6)) {
                            _fun39761_ip = 269;
                            continue _fun39761
                        }
                    case 267:
                        var6 = {};
                    case 269:
                        var15 = var4;
                        var14 = var6;
                        var6 = copyDataProperties(var15, var14);
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 26;
                        var6 = var8[var6];
                        var11 = var7.bind(var2)(var6);
                        var6 = var11.serializeTTITracker;
                        var14 = var6.bind(var11)(var12);
                        var15 = var4;
                        var6 = copyDataProperties(var15, var14);
                        var11 = _closure1_slot18;
                        var6 = 'load_id';
                        var4[var6] = var11;
                        var6 = 'screen_name';
                        var4[var6] = var10;
                        var10 = _closure1_slot5;
                        var6 = var10.hasCache;
                        var10 = var6.bind(var10)();
                        var6 = 'has_cached_data';
                        var4[var6] = var10;
                        var6 = 'startup_cpu_usage_cumulative';
                        var4[var6] = var9;
                        var6 = _closure1_slot7;
                        var9 = var6.theme;
                        var6 = 'theme';
                        var4[var6] = var9;
                        _closure4_slot1 = var4;
                        var6 = 21;
                        var6 = var8[var6];
                        var11 = var7.bind(var2)(var6);
                        var10 = var11.mark;
                        var9 = '❗';
                        var6 = 'Track app_ui_viewed2';
                        var6 = var10.bind(var11)(var9, var6);
                        var6 = 23;
                        var6 = var8[var6];
                        var9 = var7.bind(var2)(var6);
                        var8 = var9.track;
                        var6 = _closure1_slot12;
                        var7 = var6.APP_UI_VIEWED2;
                        var6 = {};
                        var10 = true;
                        var6.logEventProperties = var10;
                        var6 = var8.bind(var9)(var7, var4, var6);
                        _closure1_slot24 = var4;
                        var6 = _closure1_slot11;
                        var6 = var6.alertStartupMetrics;
                        if (!var6) {
                            _fun39761_ip = 537;
                            continue _fun39761
                        }
                    case 494:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 29;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.openLazy;
                        var6 = {};
                        var9 = function() { // Original name: importer, environment: var3
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 31;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 30;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    _fun39765: for (var _fun39765_ip = 0;;) switch (_fun39765_ip) {
                                        case 0:
                                            var3 = _closure1_slot16;
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var0 = 'App start times';
                                            var1.title = var0;
                                            var4 = _closure4_slot1;
                                            var16 = var4.time_first_contentful_paint;
                                            var4 = _closure4_slot1;
                                            var15 = var4.time_before_js_bundle_start;
                                            var4 = _closure4_slot1;
                                            var14 = var4.android_time_creation_to_create_main_activity;
                                            var4 = _closure4_slot1;
                                            var13 = var4.app_start_type;
                                            var4 = _closure4_slot1;
                                            var4 = var4.app_launch_scenario;
                                            var5 = null;
                                            var5 = var5 != var4;
                                            var12 = '-';
                                            if (!var5) {
                                                _fun39765_ip = 95;
                                                continue _fun39765
                                            }
                                        case 92:
                                            var12 = var4;
                                        case 95:
                                            var0 = _closure4_slot1;
                                            var18 = var0.time_display_messages_with_cache_end;
                                            var0 = global;
                                            var0 = var0.HermesInternal;
                                            var10 = var0.concat;
                                            var29 = '\nFirstContentfulPaint (TTI): ';
                                            var27 = 'ms\n  • App start → JS bundle start: ';
                                            var25 = 'ms\n  • MainAppl. → MainActivity start: ';
                                            var23 = 'ms\n    • Start type: ';
                                            var21 = '\n    • Launch scenario: ';
                                            var19 = '\n(legacy) Cached msg render: ';
                                            var17 = 'ms\n              ';
                                            var28 = var16;
                                            var26 = var15;
                                            var24 = var14;
                                            var22 = var13;
                                            var20 = var12;
                                            var4 = var29[var10](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                                            var0 = var4.trimStart;
                                            var0 = var0.bind(var4)();
                                            var1.body = var0;
                                            var27 = arg0;
                                            var28 = var1;
                                            var0 = copyDataProperties(var28, var27);
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var2, var1);
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6.importer = var9;
                        var6 = var7.bind(var8)(var6);
                    case 537:
                        var5 = _closure1_slot4;
                        var6 = var5.TTIManager;
                        var5 = var6.runningTTIAutomation;
                        var5 = var5.bind(var6)();
                        if (!var5) {
                            _fun39761_ip = 570;
                            continue _fun39761
                        }
                    case 560:
                        var3 = function(arg0) { // Original name: logToDevice, environment: var3
                            var6 = {};
                            var9 = arg0;
                            var10 = var6;
                            var0 = copyDataProperties(var10, var9);
                            var2 = global;
                            var1 = var2.Date;
                            var0 = var1.now;
                            var1 = var0.bind(var1)();
                            var0 = 'logged_at';
                            var6[var0] = var1;
                            var4 = _closure1_slot8;
                            var0 = var4.getId;
                            var4 = var0.bind(var4)();
                            var0 = 'user_id';
                            var6[var0] = var4;
                            var4 = var2.Date;
                            var0 = var4.now;
                            var4 = var0.bind(var4)();
                            var _closure5_slot0 = var4;
                            var5 = _closure1_slot33;
                            var0 = undefined;
                            var8 = var5.bind(var0)(var6);
                            var7 = var8.forEach;
                            var6 = function(arg0) { // Environment: var3
                                var0 = _closure1_slot4;
                                var2 = var0.TTIManager;
                                var1 = var2.logToDevice;
                                var0 = global;
                                var4 = var0.JSON;
                                var3 = var4.stringify;
                                var0 = {};
                                var7 = arg0;
                                var8 = var0;
                                var5 = copyDataProperties(var8, var7);
                                var6 = 'app_ui_viewed';
                                var5 = 'type';
                                var0[var5] = var6;
                                var6 = _closure5_slot0;
                                var5 = 'batch_id';
                                var0[var5] = var6;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var6 = var7.bind(var8)(var6);
                            var4 = var4 + 1;
                            _closure5_slot0 = var4;
                            var6 = _closure1_slot6;
                            var4 = var6.getAllExperimentAssignments;
                            var4 = var4.bind(var6)();
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.forEach;
                            var3 = function(arg0) { // Environment: var3
                                var0 = _closure1_slot4;
                                var2 = var0.TTIManager;
                                var1 = var2.logToDevice;
                                var0 = global;
                                var4 = var0.JSON;
                                var3 = var4.stringify;
                                var0 = {};
                                var7 = arg0;
                                var8 = var0;
                                var5 = copyDataProperties(var8, var7);
                                var6 = _closure5_slot0;
                                var5 = 'batch_id';
                                var0[var5] = var6;
                                var6 = 'experiments';
                                var5 = 'type';
                                var0[var5] = var6;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure1_slot4;
                            var4 = var3.TTIManager;
                            var3 = var4.logToDevice;
                            var6 = var2.JSON;
                            var5 = var6.stringify;
                            var2 = {};
                            var7 = 'finished';
                            var2.type = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure1_slot4;
                            var2 = var1.TTIManager;
                            var1 = var2.trackTTILogged;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var3 = var3.bind(var2)(var4);
                    case 570:
                        return var2;
                    case 573:
                        return var1;
                    case 576:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: batchKeys, environment: var1
        _fun39769: for (var _fun39769_ip = 0;;) switch (_fun39769_ip) {
            case 0:
                var7 = arg0;
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var6 = var0.bind(var1)(var7);
                var0 = new Array(0);
                var1 = var6.length;
                var5 = 0;
                var1 = var5 < var1;
                var3 = 10;
                var2 = undefined;
                if (!var1) {
                    _fun39769_ip = 135;
                    continue _fun39769
                }
            case 47:
                var9 = {};
                var10 = _closure1_slot25;
                var1 = var6.slice;
                var8 = var5 + var3;
                var1 = var1.bind(var6)(var5, var8);
                var11 = var10.bind(var2)(var1);
                var10 = var11.bind(var2)();
                var1 = var10.done;
                if (var1) {
                    _fun39769_ip = 113;
                    continue _fun39769
                }
            case 85:
                var12 = var10.value;
                var1 = var7[var12];
                var9[var12] = var1;
                var12 = var11.bind(var2)();
                var1 = var12.done;
                var10 = var12;
                if (!var1) {
                    _fun39769_ip = 85;
                    continue _fun39769
                }
            case 113:
                var1 = var0.push;
                var1 = var1.bind(var0)(var9);
                var1 = var6.length;
                var5 = var8;
                if (var5 < var1) {
                    _fun39769_ip = 47;
                    continue _fun39769
                }
            case 135:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot12 = var8;
    var4 = var4.Routes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.StaticChannelRoutes;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var4 = null;
    var _closure1_slot17 = var4;
    var8 = 15;
    var8 = var6[var8];
    var9 = var5.bind(var0)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var _closure1_slot18 = var8;
    var8 = 16;
    var9 = var6[var8];
    var8 = arg3;
    var9 = var8.bind(var0)(var9);
    var8 = var9.getConstants;
    var8 = var8.bind(var9)();
    var8 = var8.Manifest;
    var _closure1_slot19 = var8;
    var8 = false;
    var _closure1_slot20 = var8;
    var10 = var7.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var13 = ['private_channel', 'guild-forum', 'guild-directory', 'guild-text', 'thread', 'redesign-guilds', 'redesign-messages'];
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot21 = var8;
    var9 = var7.Set;
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var13 = ['friends_list', 'guild-voice', 'redesign-guild-voice', 'unknown-channel', 'redesign-unknown-channel', 'channel-list', 'other'];
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot22 = var7;
    var _closure1_slot23 = var4;
    var _closure1_slot24 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tti_analytics/native/TTIAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getDeviceMetadata = var3;
    var3 = function() { // Original name: currentLoadId, environment: var1
        var0 = _closure1_slot18;
        return var0;
    };
    var2.currentLoadId = var3;
    var3 = function(arg0) { // Original name: trackAppOpened, environment: var1
        var7 = arg0;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 21;
        var2 = var4[var0];
        var0 = undefined;
        var8 = var3.bind(var0)(var2);
        var6 = var8.mark;
        var5 = '🏃';
        var2 = 'Track app_opened';
        var2 = var6.bind(var8)(var5, var2);
        var2 = 22;
        var2 = var4[var2];
        var6 = var3.bind(var0)(var2);
        var5 = var6.addBreadcrumb;
        var2 = {
            'category': 'lifecycle',
            'message': 'App opened'
        };
        var8 = {};
        var8.openFrom = var7;
        var2.data = var8;
        var2 = var5.bind(var6)(var2);
        var2 = 23;
        var2 = var4[var2];
        var5 = var3.bind(var0)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.APP_OPENED;
        var2 = {};
        var6 = _closure1_slot27;
        var11 = var6.bind(var0)();
        var12 = var2;
        var6 = copyDataProperties(var12, var11);
        var6 = 'opened_from';
        var2[var6] = var7;
        var7 = _closure1_slot18;
        var6 = 'load_id';
        var2[var6] = var7;
        var1 = _closure1_slot7;
        var6 = var1.theme;
        var1 = 'theme';
        var2[var1] = var6;
        var1 = {};
        var6 = true;
        var1.logEventProperties = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.trackAppOpened = var3;
    var3 = function() { // Original name: trackAppUIViewed, environment: var1
        _fun39772: for (var _fun39772_ip = 0;;) switch (_fun39772_ip) {
            case 0:
                var4 = arguments[0];
                var3 = arguments[1];
                var2 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun39772_ip = 28;
                    continue _fun39772
                }
            case 17:
                var5 = _closure1_slot28;
                var4 = var5.bind(var0)();
            case 28:
                var _closure2_slot0 = var4;
                if (!(var3 === var0)) {
                    _fun39772_ip = 38;
                    continue _fun39772
                }
            case 36:
                var3 = {};
            case 38:
                var _closure2_slot1 = var3;
                if (!(var2 === var0)) {
                    _fun39772_ip = 63;
                    continue _fun39772
                }
            case 46:
                var4 = _closure1_slot5;
                var3 = var4.hasCache;
                var2 = var3.bind(var4)();
            case 63:
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 24;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.AppStartInfo;
                var3 = var4.getAppUIViewed;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun39772_ip = 368;
                    continue _fun39772
                }
            case 116:
                var3 = _closure1_slot4;
                var3 = var3.TTIManager;
                var10 = var3.AppOpenedTimestamp;
                var3 = global;
                var5 = var3.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                _closure2_slot3 = var4;
                var6 = var4 - var10;
                var4 = _closure1_slot4;
                var5 = var4.TTIManager;
                var8 = null;
                var4 = var8 == var5;
                if (var4) {
                    _fun39772_ip = 186;
                    continue _fun39772
                }
            case 176:
                var7 = var5.reportFullyDrawn;
                var4 = var8 == var7;
            case 186:
                if (var4) {
                    _fun39772_ip = 199;
                    continue _fun39772
                }
            case 189:
                var4 = var5.reportFullyDrawn;
                var4 = var4.bind(var5)();
            case 199:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 21;
                var8 = var7[var4];
                var12 = var5.bind(var0)(var8);
                var11 = var12.mark;
                var9 = '❗';
                var8 = 'Track app_ui_viewed';
                var8 = var11.bind(var12)(var9, var8);
                var8 = var7[var4];
                var11 = var5.bind(var0)(var8);
                var9 = var11.addDetail;
                var8 = 'TTI';
                var8 = var9.bind(var11)(var8, var6);
                var4 = var7[var4];
                var9 = var5.bind(var0)(var4);
                var8 = var9.markAt;
                var5 = '🏃';
                var4 = 'app_opened';
                var4 = var8.bind(var9)(var5, var4, var10);
                var5 = _closure1_slot0;
                var4 = 25;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.ttiRecorded;
                var4 = var4.bind(var5)(var6);
                var4 = var3.setTimeout;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun39774: for (var _fun39774_ip = 0;;) switch (_fun39774_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun39774_ip = 79;
                                    continue _fun39774
                                }
                            case 7:
                                var3 = _closure2_slot0;
                                var2 = null;
                                var2 = var2 != var3;
                                var6 = 'unknownn';
                                if (!var2) {
                                    _fun39774_ip = 33;
                                    continue _fun39774
                                }
                            case 29:
                                var6 = _closure2_slot0;
                            case 33:
                                var9 = _closure2_slot1;
                                var8 = _closure2_slot2;
                                var7 = _closure2_slot3;
                                var1 = function() { // Original name: logLegacyAppUiViewed, environment: var1
                                    var0 = undefined;
                                    var3 = _closure1_slot30;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var2 = undefined;
                                var11 = undefined;
                                var10 = var6;
                                var1 = var11[var1](var10, var9, var8, var7, var6);
                                SaveGenerator(address = 67);
                            case 65:
                                return var1;
                            case 67:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun39774_ip = 76;
                                    continue _fun39774
                                }
                            case 73:
                                return var2;
                            case 76:
                                return var1;
                            case 79:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var0)(var2);
                var2 = 1000;
                var2 = var4.bind(var0)(var3, var2);
                var1 = function() { // Original name: scheduleTrackAppUiViewed2, environment: var1
                    _fun39776: for (var _fun39776_ip = 0;;) switch (_fun39776_ip) {
                        case 0:
                            var2 = _closure1_slot23;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun39776_ip = 109;
                                continue _fun39776
                            }
                        case 15:
                            var0 = global;
                            var7 = var0.setTimeout;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 27;
                            var2 = var4[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.Millis;
                            var6 = var2.SECOND;
                            var2 = 15;
                            var6 = var2 * var6;
                            var2 = function() { // Environment: var1
                                var3 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 26;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var1);
                                var3 = var4.setTTICallback;
                                var1 = function() { // Environment: var1
                                    var0 = true;
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure1_slot31;
                                var1 = var1.bind(var0)();
                                var1 = null;
                                _closure1_slot23 = var1;
                                return var0;
                            };
                            var2 = var7.bind(var0)(var2, var6);
                            _closure1_slot23 = var2;
                            var2 = 26;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.setTTICallback;
                            var1 = function() { // Environment: var1
                                _fun39779: for (var _fun39779_ip = 0;;) switch (_fun39779_ip) {
                                    case 0:
                                        var0 = _closure1_slot28;
                                        var4 = undefined;
                                        var5 = var0.bind(var4)();
                                        var7 = null;
                                        var0 = var7 == var5;
                                        var1 = false;
                                        if (var0) {
                                            _fun39779_ip = 275;
                                            continue _fun39779
                                        }
                                    case 27:
                                        var6 = _closure1_slot22;
                                        var0 = var6.has;
                                        var0 = var0.bind(var6)(var5);
                                        if (!var0) {
                                            _fun39779_ip = 88;
                                            continue _fun39779
                                        }
                                    case 44:
                                        var6 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var0 = 26;
                                        var0 = var8[var0];
                                        var0 = var6.bind(var4)(var0);
                                        var6 = var0.readySupplemental;
                                        var0 = var6.hasData;
                                        var0 = var0.bind(var6)();
                                        var1 = false;
                                        if (!var0) {
                                            _fun39779_ip = 275;
                                            continue _fun39779
                                        }
                                    case 88:
                                        var3 = _closure1_slot21;
                                        var0 = var3.has;
                                        var0 = var0.bind(var3)(var5);
                                        var1 = true;
                                        if (!var0) {
                                            _fun39779_ip = 275;
                                            continue _fun39779
                                        }
                                    case 110:
                                        var3 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var9 = 26;
                                        var0 = var0[var9];
                                        var0 = var3.bind(var4)(var0);
                                        var3 = var0.readySupplemental;
                                        var0 = var3.hasData;
                                        var0 = var0.bind(var3)();
                                        var3 = !var0;
                                        var0 = !var3;
                                        if (var3) {
                                            _fun39779_ip = 272;
                                            continue _fun39779
                                        }
                                    case 155:
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var9];
                                        var3 = var5.bind(var4)(var3);
                                        var5 = var3.firstContentfulPaint;
                                        var3 = var5.hasData;
                                        var3 = var3.bind(var5)();
                                        var5 = !var3;
                                        var3 = !var5;
                                        if (!var5) {
                                            _fun39779_ip = 269;
                                            continue _fun39779
                                        }
                                    case 197:
                                        var6 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var9];
                                        var5 = var6.bind(var4)(var5);
                                        var6 = var5.renderLatestMessages;
                                        var5 = var6.hasData;
                                        var5 = var5.bind(var6)();
                                        var6 = !var5;
                                        var5 = !var6;
                                        if (!var6) {
                                            _fun39779_ip = 266;
                                            continue _fun39779
                                        }
                                    case 239:
                                        var8 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var4)(var6);
                                        var6 = var6.interstitial;
                                        var5 = var7 != var6;
                                    case 266:
                                        var3 = var5;
                                    case 269:
                                        var0 = var3;
                                    case 272:
                                        var1 = var0;
                                    case 275:
                                        var0 = !var1;
                                        var0 = !var0;
                                        if (!var1) {
                                            _fun39779_ip = 328;
                                            continue _fun39779
                                        }
                                    case 284:
                                        var1 = global;
                                        var3 = var1.clearTimeout;
                                        var2 = _closure1_slot23;
                                        var2 = var3.bind(var4)(var2);
                                        var3 = var1.setTimeout;
                                        var2 = function() { // Environment: var1
                                            var1 = _closure1_slot31;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            var1 = null;
                                            _closure1_slot23 = var1;
                                            return var0;
                                        };
                                        var1 = 1000;
                                        var1 = var3.bind(var4)(var2, var1);
                                        var0 = true;
                                    case 328:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var1.bind(var0)();
            case 368:
                return var0;
        }
    };
    var2.trackAppUIViewed = var3;
    var3 = function() { // Original name: getLastTrackedAppUiViewed2Properties, environment: var1
        var0 = _closure1_slot24;
        return var0;
    };
    var2.getLastTrackedAppUiViewed2Properties = var3;
    var1 = function() { // Original name: trackAppLaunchCompleted, environment: var1
        _fun39782: for (var _fun39782_ip = 0;;) switch (_fun39782_ip) {
            case 0:
                var8 = arguments[0];
                var4 = arguments[1];
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun39782_ip = 23;
                    continue _fun39782
                }
            case 12:
                var1 = _closure1_slot28;
                var8 = var1.bind(var0)();
            case 23:
                if (!(var4 === var0)) {
                    _fun39782_ip = 44;
                    continue _fun39782
                }
            case 27:
                var2 = _closure1_slot5;
                var1 = var2.hasCache;
                var4 = var1.bind(var2)();
            case 44:
                var1 = _closure1_slot20;
                if (var1) {
                    _fun39782_ip = 169;
                    continue _fun39782
                }
            case 54:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 21;
                var1 = var5[var1];
                var9 = var3.bind(var0)(var1);
                var7 = var9.mark;
                var6 = '🏃';
                var1 = 'Track app_launch';
                var1 = var7.bind(var9)(var6, var1);
                var1 = 23;
                var1 = var5[var1];
                var7 = var3.bind(var0)(var1);
                var6 = var7.track;
                var1 = _closure1_slot12;
                var5 = var1.APP_LAUNCH_COMPLETED;
                var3 = _closure1_slot29;
                var1 = null;
                var9 = var1 != var8;
                var1 = 'unknown';
                if (!var9) {
                    _fun39782_ip = 143;
                    continue _fun39782
                }
            case 140:
                var1 = var8;
            case 143:
                var4 = var3.bind(var0)(var1, var4);
                var3 = {};
                var1 = true;
                var3.logEventProperties = var1;
                var3 = var6.bind(var7)(var5, var4, var3);
                _closure1_slot20 = var1;
            case 169:
                return var0;
        }
    };
    var2.trackAppLaunchCompleted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 4322, 1590, 3155, 1216, 1372, 3176, 803, 660, 12214, 1379, 33, 1309, 12215, 491, 1594, 1220, 3872, 3422, 3873, 20, 1207, 795, 12216, 12218, 14, 667, 12219, 3890, 3891, 1307, 2]);