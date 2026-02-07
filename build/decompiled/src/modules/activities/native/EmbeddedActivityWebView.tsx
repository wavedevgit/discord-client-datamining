// modules/activities/native/EmbeddedActivityWebView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var7;
    var0 = function arg0, arg1() {
        _fun65321: for (var _fun65321_ip = 0;;) switch (_fun65321_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun65321_ip = 46;
                    continue _fun65321
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun65321_ip = 55;
                    continue _fun65321
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun65321_ip = 343;
                    continue _fun65321
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun65321_ip = 323;
                    continue _fun65321
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun65321_ip = 283;
                    continue _fun65321
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun65321_ip = 270;
                    continue _fun65321
                }
            case 110:
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
                    _fun65321_ip = 163;
                    continue _fun65321
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun65321_ip = 179;
                    continue _fun65321
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun65321_ip = 249;
                    continue _fun65321
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun65321_ip = 249;
                    continue _fun65321
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun65321_ip = 234;
                    continue _fun65321
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun65321_ip = 247;
                    continue _fun65321
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun65321_ip = 265;
                continue _fun65321;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun65321_ip = 283;
                continue _fun65321;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun65321_ip = 323;
                    continue _fun65321
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun65321_ip = 330;
                    continue _fun65321
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun65322: for (var _fun65322_ip = 0;;) switch (_fun65322_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun65322_ip = 56;
                                continue _fun65322
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
                            _fun65322_ip = 67;
                            continue _fun65322;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun65323: for (var _fun65323_ip = 0;;) switch (_fun65323_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun65323_ip = 23;
                    continue _fun65323
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun65323_ip = 33;
                    continue _fun65323
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
                    _fun65323_ip = 70;
                    continue _fun65323
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun65323_ip = 55;
                    continue _fun65323
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun65324: for (var _fun65324_ip = 0;;) switch (_fun65324_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var5 = null;
                var0 = var8;
                if (!(var5 != var3)) {
                    _fun65324_ip = 113;
                    continue _fun65324
                }
            case 15:
                var2 = var3.disable;
                var6 = 0;
                var1 = 0;
                if (var2) {
                    _fun65324_ip = 110;
                    continue _fun65324
                }
            case 28:
                var2 = var3.override;
                if (!(var5 == var2)) {
                    _fun65324_ip = 82;
                    continue _fun65324
                }
            case 38:
                var4 = var3.offset;
                var2 = var8;
                if (!(var5 != var4)) {
                    _fun65324_ip = 80;
                    continue _fun65324
                }
            case 51:
                var4 = global;
                var7 = var4.Math;
                var5 = var7.max;
                var4 = var3.offset;
                var4 = var8 + var4;
                var2 = var5.bind(var7)(var6, var4);
            case 80:
                _fun65324_ip = 107;
                continue _fun65324;
            case 82:
                var4 = global;
                var5 = var4.Math;
                var4 = var5.max;
                var3 = var3.override;
                var2 = var4.bind(var5)(var6, var3);
            case 107:
                var1 = var2;
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = function arg0() {
        _fun65325: for (var _fun65325_ip = 0;;) switch (_fun65325_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.hasFrameId;
                var _closure2_slot0 = var1;
                var1 = var0.getOrCreateFrameId;
                var _closure2_slot1 = var1;
                var33 = var0.releaseFrameId;
                var _closure2_slot2 = var33;
                var2 = var0.hasInvalidUrlError;
                var _closure2_slot3 = var2;
                var7 = var0.setHasInvalidUrlError;
                var _closure2_slot4 = var7;
                var21 = var0.hadInvalidUrlError;
                var _closure2_slot5 = var21;
                var28 = var0.deepLinkQueryParams;
                var6 = undefined;
                if (!(var28 === var6)) {
                    _fun65325_ip = 79;
                    continue _fun65325
                }
            case 77:
                var28 = {};
            case 79:
                var30 = var0.activityUrl;
                var12 = var0.applicationId;
                var _closure2_slot6 = var12;
                var37 = var0.queryParams;
                var8 = var0.onActivityCrash;
                var _closure2_slot7 = var8;
                var32 = var0.onLoadError;
                var _closure2_slot8 = var32;
                var19 = var0.allowPopups;
                var17 = var0.referrerPolicy;
                var _closure2_slot9 = var17;
                var31 = var0.isPipOrGridMode;
                var _closure2_slot10 = var31;
                var15 = var0.webViewKey;
                var _closure2_slot11 = var15;
                var10 = var0.ignoreSilentHardwareSwitch;
                if (!(var10 === var6)) {
                    _fun65325_ip = 168;
                    continue _fun65325
                }
            case 166:
                var10 = true;
            case 168:
                var13 = var0.safeAreasConfig;
                var _closure2_slot12 = var13;
                var36 = var0.channelId;
                var _closure2_slot13 = var36;
                var35 = var0.guildId;
                var _closure2_slot14 = var35;
                var34 = var0.activitySessionId;
                var _closure2_slot15 = var34;
                var _closure2_slot16 = var6;
                var _closure2_slot17 = var6;
                var _closure2_slot18 = var6;
                var _closure2_slot19 = var6;
                var _closure2_slot20 = var6;
                var _closure2_slot21 = var6;
                var _closure2_slot22 = var6;
                var _closure2_slot23 = var6;
                var _closure2_slot24 = var6;
                var _closure2_slot25 = var6;
                var _closure2_slot26 = var6;
                var _closure2_slot27 = var6;
                var _closure2_slot28 = var6;
                var _closure2_slot29 = var6;
                var _closure2_slot30 = var6;
                var _closure2_slot31 = var6;
                var _closure2_slot32 = var6;
                var _closure2_slot33 = var6;
                var _closure2_slot34 = var6;
                var _closure2_slot35 = var6;
                var _closure2_slot36 = var6;
                var0 = _closure1_slot14;
                var22 = var0.bind(var6)();
                var3 = _closure1_slot6;
                var1 = var3.useContext;
                var14 = _closure1_slot0;
                var26 = _closure1_slot3;
                var0 = 11;
                var0 = var26[var0];
                var0 = var14.bind(var6)(var0);
                var0 = var0.WebViewContext;
                var16 = var1.bind(var3)(var0);
                var3 = _closure1_slot6;
                var1 = var3.useState;
                var0 = function() { // Environment: var24
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = _closure1_slot5;
                var9 = 1;
                var0 = var0.bind(var6)(var1, var9);
                var5 = 0;
                var3 = var0[var5];
                _closure2_slot16 = var3;
                var4 = _closure1_slot6;
                var1 = var4.useState;
                var0 = function() { // Environment: var24
                    _fun65327: for (var _fun65327_ip = 0;;) switch (_fun65327_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun65327_ip = 50;
                                continue _fun65327
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var0 = var2.v4;
                            var0 = var0.bind(var2)();
                            _fun65327_ip = 60;
                            continue _fun65327;
                        case 50:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = var2.bind(var1)();
                        case 60:
                            return var0;
                    }
                };
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot5;
                var0 = var0.bind(var6)(var1, var9);
                var25 = var0[var5];
                _closure2_slot17 = var25;
                var4 = _closure1_slot6;
                var1 = var4.useState;
                var0 = null;
                var4 = var1.bind(var4)(var0);
                var1 = _closure1_slot5;
                var27 = 2;
                var1 = var1.bind(var6)(var4, var27);
                var4 = var1[var5];
                _closure2_slot18 = var4;
                var1 = var1[var9];
                _closure2_slot19 = var1;
                var23 = _closure1_slot6;
                var20 = var23.useMemo;
                var18 = new Array(1);
                var18[0] = var15;
                var1 = function() { // Environment: var24
                    _fun65328: for (var _fun65328_ip = 0;;) switch (_fun65328_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun65328_ip = 58;
                                continue _fun65328
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getWebViewProxy;
                            var1 = _closure2_slot11;
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var29 = var20.bind(var23)(var1, var18);
                _closure2_slot20 = var29;
                var18 = _closure1_slot6;
                var1 = var18.useState;
                var18 = var1.bind(var18)(var0);
                var1 = _closure1_slot5;
                var18 = var1.bind(var6)(var18, var27);
                var1 = var18[var5];
                _closure2_slot21 = var1;
                var18 = var18[var9];
                _closure2_slot22 = var18;
                var23 = _closure1_slot6;
                var20 = var23.useEffect;
                var18 = new Array(3);
                var18[0] = var3;
                var18[1] = var25;
                var18[2] = var15;
                var3 = function() { // Environment: var24
                    _fun65329: for (var _fun65329_ip = 0;;) switch (_fun65329_ip) {
                        case 0:
                            var0 = _closure2_slot16;
                            if (!var0) {
                                _fun65329_ip = 20;
                                continue _fun65329
                            }
                        case 10:
                            var2 = _closure2_slot11;
                            var1 = null;
                            var0 = var1 != var2;
                        case 20:
                            if (var0) {
                                _fun65329_ip = 85;
                                continue _fun65329
                            }
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.ComponentDispatch;
                            var2 = var3.dispatch;
                            var0 = _closure1_slot11;
                            var1 = var0.IFRAME_MOUNT;
                            var0 = {};
                            var4 = _closure2_slot17;
                            var0.id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var20.bind(var23)(var3, var18);
                var23 = _closure1_slot6;
                var20 = var23.useEffect;
                var18 = new Array(2);
                var18[0] = var15;
                var18[1] = var25;
                var3 = function() { // Environment: var24
                    var0 = function() { // Environment: var0
                        _fun65331: for (var _fun65331_ip = 0;;) switch (_fun65331_ip) {
                            case 0:
                                var1 = _closure2_slot11;
                                var0 = null;
                                if (!(var0 == var1)) {
                                    _fun65331_ip = 75;
                                    continue _fun65331
                                }
                            case 13:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.ComponentDispatch;
                                var2 = var3.dispatch;
                                var0 = _closure1_slot11;
                                var1 = var0.IFRAME_UNMOUNT;
                                var0 = {};
                                var4 = _closure2_slot17;
                                var0.id = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var20.bind(var23)(var3, var18);
                var18 = _closure1_slot1;
                var3 = 15;
                var3 = var26[var3];
                var3 = var18.bind(var6)(var3);
                var23 = var3.bind(var6)();
                _closure2_slot23 = var23;
                var20 = _closure1_slot2;
                var3 = 16;
                var3 = var26[var3];
                var20 = var20.bind(var6)(var3);
                var3 = var20.getConstants;
                var3 = var3.bind(var20)();
                var20 = {};
                var42 = var20;
                var41 = var37;
                var37 = copyDataProperties(var42, var41);
                var42 = var20;
                var41 = var28;
                var28 = copyDataProperties(var42, var41);
                var28 = 'frame_id';
                var20[var28] = var25;
                var28 = _closure1_slot9;
                var37 = var28.MOBILE;
                var28 = 'platform';
                var20[var28] = var37;
                var28 = var3.Version;
                var3 = 'mobile_app_version';
                var20[var3] = var28;
                var3 = 17;
                var3 = var26[var3];
                var18 = var18.bind(var6)(var3);
                var3 = {};
                var3.allowPopups = var19;
                var37 = var18.bind(var6)(var3);
                _closure2_slot24 = var37;
                var3 = global;
                var18 = var3.URLSearchParams;
                var19 = var18.prototype;
                var19 = Object.create(var19, {
                    constructor: {
                        value: var18
                    }
                });
                var43 = var19;
                var42 = var20;
                var18 = new var43[var18](var42, var41);
                var28 = var18 instanceof Object ? var18 : var19;
                var18 = var3.HermesInternal;
                var19 = var18.concat;
                var20 = '';
                var18 = '?';
                var30 = var19.bind(var20)(var30, var18, var28);
                _closure2_slot25 = var30;
                var19 = _closure1_slot6;
                var18 = var19.useRef;
                var18 = var18.bind(var19)(var13);
                _closure2_slot26 = var18;
                var28 = _closure1_slot6;
                var19 = var28.useEffect;
                var18 = new Array(4);
                var18[0] = var30;
                var18[1] = var37;
                var18[2] = var32;
                var18[3] = var17;
                var17 = function() { // Environment: var24
                    var1 = function() { // Environment: var0
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun65335: for (var _fun65335_ip = 0;;) switch (_fun65335_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun65335_ip = 393;
                                            continue _fun65335
                                        }
                                    case 10:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var1 = 15;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var3 = var3.bind(var2)(var1);
                                        var1 = var3.getStableSafeAreaInsets;
                                        var10 = var1.bind(var3)();
                                        var1 = _closure2_slot26;
                                        var9 = var1.current;
                                        var6 = {};
                                        var11 = _closure1_slot19;
                                        var4 = null;
                                        var1 = var4 == var9;
                                        var5 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 79;
                                            continue _fun65335
                                        }
                                    case 74:
                                        var5 = var9.left;
                                    case 79:
                                        var1 = var4 == var10;
                                        var12 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 93;
                                            continue _fun65335
                                        }
                                    case 88:
                                        var12 = var10.left;
                                    case 93:
                                        var13 = var4 != var12;
                                        var1 = 0;
                                        if (!var13) {
                                            _fun65335_ip = 105;
                                            continue _fun65335
                                        }
                                    case 102:
                                        var1 = var12;
                                    case 105:
                                        var1 = var11.bind(var2)(var5, var1);
                                        var6.left = var1;
                                        var11 = _closure1_slot19;
                                        var1 = var4 == var9;
                                        var5 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 133;
                                            continue _fun65335
                                        }
                                    case 128:
                                        var5 = var9.right;
                                    case 133:
                                        var1 = var4 == var10;
                                        var12 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 147;
                                            continue _fun65335
                                        }
                                    case 142:
                                        var12 = var10.right;
                                    case 147:
                                        var13 = var4 != var12;
                                        var1 = 0;
                                        if (!var13) {
                                            _fun65335_ip = 159;
                                            continue _fun65335
                                        }
                                    case 156:
                                        var1 = var12;
                                    case 159:
                                        var1 = var11.bind(var2)(var5, var1);
                                        var6.right = var1;
                                        var11 = _closure1_slot19;
                                        var1 = var4 == var9;
                                        var5 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 187;
                                            continue _fun65335
                                        }
                                    case 182:
                                        var5 = var9.top;
                                    case 187:
                                        var1 = var4 == var10;
                                        var12 = undefined;
                                        if (var1) {
                                            _fun65335_ip = 201;
                                            continue _fun65335
                                        }
                                    case 196:
                                        var12 = var10.top;
                                    case 201:
                                        var13 = var4 != var12;
                                        var1 = 0;
                                        if (!var13) {
                                            _fun65335_ip = 213;
                                            continue _fun65335
                                        }
                                    case 210:
                                        var1 = var12;
                                    case 213:
                                        var1 = var11.bind(var2)(var5, var1);
                                        var6.top = var1;
                                        var5 = _closure1_slot19;
                                        var11 = var4 == var9;
                                        var1 = undefined;
                                        if (var11) {
                                            _fun65335_ip = 241;
                                            continue _fun65335
                                        }
                                    case 236:
                                        var1 = var9.bottom;
                                    case 241:
                                        var11 = var4 == var10;
                                        var9 = undefined;
                                        if (var11) {
                                            _fun65335_ip = 255;
                                            continue _fun65335
                                        }
                                    case 250:
                                        var9 = var10.bottom;
                                    case 255:
                                        var10 = var4 != var9;
                                        var8 = 0;
                                        if (!var10) {
                                            _fun65335_ip = 267;
                                            continue _fun65335
                                        }
                                    case 264:
                                        var8 = var9;
                                    case 267:
                                        var1 = var5.bind(var2)(var1, var8);
                                        var6.bottom = var1;
                                        var5 = _closure1_slot1;
                                        var8 = _closure1_slot3;
                                        var1 = 18;
                                        var1 = var8[var1];
                                        var5 = var5.bind(var2)(var1);
                                        var1 = {};
                                        var8 = _closure2_slot25;
                                        var1.iFrameUri = var8;
                                        var8 = _closure2_slot24;
                                        var1.iFrameSandboxAttributes = var8;
                                        var8 = _closure2_slot9;
                                        var1.referrerPolicy = var8;
                                        var1.insets = var6;
                                        var8 = _closure1_slot16;
                                        var6 = undefined;
                                        if (var8) {
                                            _fun65335_ip = 344;
                                            continue _fun65335
                                        }
                                    case 340:
                                        var6 = _closure1_slot10;
                                    case 344:
                                        var1.messageForDisallowedNavigationError = var6;
                                        var1 = var5.bind(var2)(var1);
                                        SaveGenerator(address = 358);
                                    case 356:
                                        return var1;
                                    case 358:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun65335_ip = 390;
                                            continue _fun65335
                                        }
                                    case 364:
                                        if (!(var4 == var1)) {
                                            _fun65335_ip = 378;
                                            continue _fun65335
                                        }
                                    case 368:
                                        var4 = _closure2_slot8;
                                        var4 = var4.bind(var2)();
                                        _fun65335_ip = 387;
                                        continue _fun65335;
                                    case 378:
                                        var3 = _closure2_slot22;
                                        var3 = var3.bind(var2)(var1);
                                    case 387:
                                        return var2;
                                    case 390:
                                        return var1;
                                    case 393:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var17 = var19.bind(var28)(var17, var18);
                var28 = _closure1_slot6;
                var19 = var28.useCallback;
                var18 = new Array(1);
                var18[0] = var12;
                var17 = function(arg0) { // Environment: var24
                    var0 = arg0;
                    var5 = var0.nativeEvent;
                    var2 = _closure1_slot15;
                    var1 = var2.warn;
                    var6 = _closure2_slot6;
                    var0 = global;
                    var4 = var0.JSON;
                    var3 = var4.stringify;
                    var5 = var3.bind(var4)(var5);
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'activity WebView error for appId ';
                    var0 = '. ';
                    var0 = var4.bind(var3)(var6, var0, var5);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var19 = var19.bind(var28)(var17, var18);
                var32 = _closure1_slot6;
                var28 = var32.useCallback;
                var18 = new Array(1);
                var18[0] = var12;
                var17 = function(arg0) { // Environment: var24
                    var0 = arg0;
                    var5 = var0.nativeEvent;
                    var2 = _closure1_slot15;
                    var1 = var2.warn;
                    var6 = _closure2_slot6;
                    var0 = global;
                    var4 = var0.JSON;
                    var3 = var4.stringify;
                    var5 = var3.bind(var4)(var5);
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'activity WebView render process gone for appId ';
                    var0 = '. ';
                    var0 = var4.bind(var3)(var6, var0, var5);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var17 = var28.bind(var32)(var17, var18);
                var32 = _closure1_slot6;
                var28 = var32.useCallback;
                var18 = new Array(8);
                var18[0] = var12;
                var18[1] = var36;
                var18[2] = var35;
                var18[3] = var34;
                var18[4] = var25;
                var18[5] = var33;
                var18[6] = var29;
                var18[7] = var8;
                var8 = function() { // Environment: var24
                    _fun65339: for (var _fun65339_ip = 0;;) switch (_fun65339_ip) {
                        case 0:
                            var4 = _closure1_slot15;
                            var3 = var4.warn;
                            var8 = _closure2_slot6;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'activity WebView content process terminated for appId ';
                            var0 = var5.bind(var0)(var8);
                            var0 = var3.bind(var4)(var0);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var0 = 19;
                            var3 = var5[var0];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.track;
                            var3 = _closure1_slot12;
                            var4 = var3.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED;
                            var3 = {};
                            var3.application_id = var8;
                            var8 = _closure2_slot13;
                            var3.channel_id = var8;
                            var8 = _closure2_slot14;
                            var3.guild_id = var8;
                            var8 = _closure2_slot15;
                            var3.activity_session_id = var8;
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure1_slot0;
                            var3 = 14;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var5 = var3.ComponentDispatch;
                            var4 = var5.dispatch;
                            var2 = _closure1_slot11;
                            var3 = var2.IFRAME_UNMOUNT;
                            var2 = {};
                            var6 = _closure2_slot17;
                            var2.id = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var0)();
                            var3 = _closure2_slot20;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun65339_ip = 208;
                                continue _fun65339
                            }
                        case 194:
                            var3 = _closure2_slot20;
                            var2 = var3.releaseWebView;
                            var2 = var2.bind(var3)();
                        case 208:
                            var1 = _closure2_slot7;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var18 = var28.bind(var32)(var8, var18);
                var8 = 20;
                var8 = var26[var8];
                var28 = var14.bind(var6)(var8);
                var26 = var28.useStateFromStores;
                var8 = _closure1_slot8;
                var14 = new Array(1);
                var14[0] = var8;
                var8 = function() { // Environment: var24
                    var1 = _closure1_slot8;
                    var0 = var1.getUseActivityUrlOverride;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var28 = var26.bind(var28)(var14, var8);
                _closure2_slot27 = var28;
                var26 = _closure1_slot6;
                var14 = var26.useEffect;
                var8 = new Array(3);
                var8[0] = var30;
                var8[1] = var28;
                var8[2] = var7;
                var7 = function() { // Environment: var24
                    _fun65341: for (var _fun65341_ip = 0;;) switch (_fun65341_ip) {
                        case 0: // try_start_0
                            var0 = global;
                            var4 = var0.URL;
                            var5 = _closure2_slot25;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = var3;
                            var2 = new var6[var4](var5, var4);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = _closure2_slot19;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3);
                        case 46: // try_end0
                            _fun65341_ip = 75;
                            continue _fun65341;
                        case 48: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2 = _closure2_slot27;
                            if (var2) {
                                _fun65341_ip = 62;
                                continue _fun65341
                            }
                        case 60:
                            throw var1;
                        case 62:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var14.bind(var26)(var7, var8);
                var14 = _closure1_slot6;
                var8 = var14.useEffect;
                var7 = new Array(2);
                var7[0] = var21;
                var7[1] = var2;
                var2 = function() { // Environment: var24
                    _fun65342: for (var _fun65342_ip = 0;;) switch (_fun65342_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var0 = !var0;
                            if (!var0) {
                                _fun65342_ip = 17;
                                continue _fun65342
                            }
                        case 13:
                            var0 = _closure2_slot3;
                        case 17:
                            if (!var0) {
                                _fun65342_ip = 215;
                                continue _fun65342
                            }
                        case 23:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var0 = 21;
                            var0 = var8[var0];
                            var7 = undefined;
                            var2 = var1.bind(var7)(var0);
                            var1 = var2.show;
                            var0 = {};
                            var6 = _closure1_slot0;
                            var3 = 22;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var9 = var4.intl;
                            var5 = var9.string;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.PtobXW;
                            var4 = var5.bind(var9)(var4);
                            var0.title = var4;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var9 = var4.intl;
                            var5 = var9.string;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4["55iAUT"];
                            var4 = var5.bind(var9)(var4);
                            var0.body = var4;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3.BddRzS;
                            var3 = var4.bind(var5)(var3);
                            var0.confirmText = var3;
                            var0 = var1.bind(var2)(var0);
                        case 215:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var14)(var2, var7);
                _closure2_slot28 = var0;
                var2 = var0 != var4;
                var21 = null;
                if (!var2) {
                    _fun65325_ip = 1182;
                    continue _fun65325
                }
            case 1107:
                var2 = _closure1_slot16;
                if (var2) {
                    _fun65325_ip = 1153;
                    continue _fun65325
                }
            case 1114:
                var42 = var4.origin;
                var2 = var3.HermesInternal;
                var8 = var2.concat;
                var41 = '/';
                var39 = '/activity.html';
                var43 = var20;
                var40 = var25;
                var2 = var43[var8](var42, var41, var40, var39, var38);
                _fun65325_ip = 1175;
                continue _fun65325;
            case 1153:
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var3 = 'file://';
                var2 = var7.bind(var3)(var1);
            case 1175:
                _closure2_slot28 = var2;
                var21 = var2;
            case 1182:
                var3 = _closure1_slot16;
                _closure2_slot29 = var3;
                var7 = _closure1_slot6;
                var2 = var7.useState;
                var8 = false;
                var7 = var2.bind(var7)(var8);
                var2 = _closure1_slot5;
                var7 = var2.bind(var6)(var7, var27);
                var2 = var7[var5];
                var7 = var7[var9];
                _closure2_slot30 = var7;
                var20 = _closure1_slot6;
                var14 = var20.useState;
                var7 = new Array(0);
                var14 = var14.bind(var20)(var7);
                var7 = _closure1_slot5;
                var14 = var7.bind(var6)(var14, var27);
                var7 = var14[var5];
                _closure2_slot31 = var7;
                var14 = var14[var9];
                _closure2_slot32 = var14;
                var26 = _closure1_slot6;
                var20 = var26.useEffect;
                var14 = new Array(2);
                var14[0] = var12;
                var14[1] = var3;
                var12 = function() { // Environment: var24
                    _fun65343: for (var _fun65343_ip = 0;;) switch (_fun65343_ip) {
                        case 0:
                            var1 = _closure2_slot29;
                            if (!var1) {
                                _fun65343_ip = 50;
                                continue _fun65343
                            }
                        case 12:
                            var1 = ["'self'"];
                            var _closure3_slot0 = var1;
                            var1 = function arg0, arg1() {
                                _fun65344: for (var _fun65344_ip = 0;;) switch (_fun65344_ip) {
                                    case 0:
                                        var2 = arg1;
                                        var1 = var2.match;
                                        var0 = arg0;
                                        var2 = var1.bind(var2)(var0);
                                        var0 = null;
                                        if (!(var0 !== var2)) {
                                            _fun65344_ip = 35;
                                            continue _fun65344
                                        }
                                    case 23:
                                        var1 = var2.length;
                                        var0 = 2;
                                        if (!(!(var1 >= var0))) {
                                            _fun65344_ip = 41;
                                            continue _fun65344
                                        }
                                    case 35:
                                        var0 = new Array(0);
                                        _fun65344_ip = 81;
                                        continue _fun65344;
                                    case 41:
                                        var1 = 1;
                                        var3 = var2[var1];
                                        var2 = var3.split;
                                        var1 = ' ';
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.filter;
                                        var1 = function(arg0) { // Environment: var1
                                            var2 = _closure3_slot0;
                                            var1 = var2.includes;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1);
                                    case 81:
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var1;
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun65348: for (var _fun65348_ip = 0;;) switch (_fun65348_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun65348_ip = 284;
                                                    continue _fun65348
                                                }
                                            case 10:
                                                var6 = _closure2_slot6;
                                                var7 = global;
                                                var1 = var7.HermesInternal;
                                                var5 = var1.concat;
                                                var4 = 'https://';
                                                var2 = '.';
                                                var1 = 'discordsays.com';
                                                var4 = var5.bind(var4)(var6, var2, var1);
                                                var5 = _closure1_slot0;
                                                var2 = _closure1_slot3;
                                                var1 = 23;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var1 = var5.bind(var2)(var1);
                                                var6 = var1.HTTP;
                                                var5 = var6.get;
                                                var1 = {};
                                                var7 = var7.HermesInternal;
                                                var9 = var7.concat;
                                                var8 = '';
                                                var7 = '/.discord/csp';
                                                var7 = var9.bind(var8)(var4, var7);
                                                var1.url = var7;
                                                var7 = false;
                                                var1.rejectWithError = var7;
                                                var1 = var5.bind(var6)(var1);
                                                SaveGenerator(address = 136);
                                            case 134:
                                                return var1;
                                            case 136:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                                if (var5) {
                                                    _fun65348_ip = 281;
                                                    continue _fun65348
                                                }
                                            case 145:
                                                var5 = var1.headers;
                                                var8 = var5["content-security-policy"];
                                                var7 = ['about:blank', 'file://*'];
                                                var7[2] = var4;
                                                var6 = _closure3_slot1;
                                                var5 = /frame-src (.*?);/;
                                                var11 = var6.bind(var2)(var5, var8);
                                                var10 = 3;
                                                var12 = var7;
                                                var10 = arraySpread(var12, var11, var10);
                                                var6 = _closure3_slot1;
                                                var4 = /child-src (.*?);/;
                                                var11 = var6.bind(var2)(var4, var8);
                                                var12 = var7;
                                                var4 = arraySpread(var12, var11, var10);
                                                var5 = _closure2_slot32;
                                                var6 = var7.map;
                                                var4 = function(arg0) { // Environment: var4
                                                    var1 = _closure1_slot1;
                                                    var2 = _closure1_slot3;
                                                    var0 = 24;
                                                    var0 = var2[var0];
                                                    var2 = undefined;
                                                    var1 = var1.bind(var2)(var0);
                                                    var0 = arg0;
                                                    var3 = var1.bind(var2)(var0);
                                                    var2 = var3.replace;
                                                    var1 = /\\\*/g;
                                                    var0 = '.*';
                                                    var2 = var2.bind(var3)(var1, var0);
                                                    var0 = global;
                                                    var0 = var0.HermesInternal;
                                                    var1 = var0.concat;
                                                    var0 = '^';
                                                    var0 = var1.bind(var0)(var2);
                                                    return var0;
                                                };
                                                var4 = var6.bind(var7)(var4);
                                                var4 = var5.bind(var2)(var4);
                                                var4 = _closure2_slot30;
                                                var3 = true;
                                                var3 = var4.bind(var2)(var3);
                                                return var2;
                                            case 281:
                                                return var1;
                                            case 284:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = undefined;
                            var0 = var0.bind(var1)();
                            var0 = var0.bind(var1)();
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var20.bind(var26)(var12, var14);
                var20 = _closure1_slot6;
                var14 = var20.useCallback;
                var12 = new Array(2);
                var12[0] = var21;
                var12[1] = var7;
                var7 = function(arg0) { // Environment: var24
                    _fun65351: for (var _fun65351_ip = 0;;) switch (_fun65351_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.mainDocumentURL;
                            var1 = _closure2_slot28;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun65351_ip = 37;
                                continue _fun65351
                            }
                        case 22:
                            if (!(var4 != var3)) {
                                _fun65351_ip = 37;
                                continue _fun65351
                            }
                        case 26:
                            var1 = _closure2_slot28;
                            if (!(var3 === var1)) {
                                _fun65351_ip = 283;
                                continue _fun65351
                            }
                        case 37:
                            var3 = _closure1_slot17;
                            var2 = _closure2_slot31;
                            var5 = undefined;
                            var7 = var3.bind(var5)(var2);
                            var3 = var7.bind(var5)();
                            var2 = var3.done;
                            var6 = global;
                            if (var2) {
                                _fun65351_ip = 139;
                                continue _fun65351
                            }
                        case 69:
                            var10 = var3.value;
                            var2 = var6.RegExp;
                            var8 = var2.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var8;
                            var2 = new var11[var2](var10, var9);
                            var9 = var2 instanceof Object ? var2 : var8;
                            var8 = var9.test;
                            var2 = var0.url;
                            var2 = var8.bind(var9)(var2);
                            if (var2) {
                                _fun65351_ip = 135;
                                continue _fun65351
                            }
                        case 118:
                            var8 = var7.bind(var5)();
                            var2 = var8.done;
                            var3 = var8;
                            if (var2) {
                                _fun65351_ip = 139;
                                continue _fun65351
                            }
                        case 133:
                            _fun65351_ip = 69;
                            continue _fun65351;
                        case 135:
                            var2 = true;
                            return var2;
                        case 139:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var6 = 25;
                            var2 = var2[var6];
                            var7 = var3.bind(var5)(var2);
                            var3 = var7.toURLSafe;
                            var8 = _closure1_slot8;
                            var2 = var8.getActivityUrlOverride;
                            var8 = var2.bind(var8)();
                            var9 = var4 != var8;
                            var2 = '';
                            if (!var9) {
                                _fun65351_ip = 193;
                                continue _fun65351
                            }
                        case 190:
                            var2 = var8;
                        case 193:
                            var3 = var3.bind(var7)(var2);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var6];
                            var5 = var2.bind(var5)(var1);
                            var2 = var5.toURLSafe;
                            var1 = var0.url;
                            var2 = var2.bind(var5)(var1);
                            var1 = var4 != var3;
                            if (!var1) {
                                _fun65351_ip = 242;
                                continue _fun65351
                            }
                        case 238:
                            var1 = var4 != var2;
                        case 242:
                            if (!var1) {
                                _fun65351_ip = 281;
                                continue _fun65351
                            }
                        case 245:
                            var4 = var3.origin;
                            var3 = var3.pathname;
                            var3 = var4 + var3;
                            var4 = var2.origin;
                            var2 = var2.pathname;
                            var2 = var4 + var2;
                            var1 = var3 === var2;
                        case 281:
                            return var1;
                        case 283:
                            var2 = _closure1_slot7;
                            var1 = var2.openURL;
                            var0 = var0.url;
                            var0 = var1.bind(var2)(var0);
                            var0 = false;
                            return var0;
                    }
                };
                var12 = var14.bind(var20)(var7, var12);
                var30 = var0 != var21;
                if (!var30) {
                    _fun65325_ip = 1347;
                    continue _fun65325
                }
            case 1343:
                var30 = var0 != var4;
            case 1347:
                if (!var30) {
                    _fun65325_ip = 1354;
                    continue _fun65325
                }
            case 1350:
                var30 = var0 != var1;
            case 1354:
                _closure2_slot33 = var30;
                var14 = _closure1_slot6;
                var7 = var14.useRef;
                var7 = var7.bind(var14)(var0);
                _closure2_slot34 = var7;
                var28 = _closure1_slot6;
                var26 = var28.useCallback;
                var20 = function(arg0) { // Environment: var24
                    _fun65352: for (var _fun65352_ip = 0;;) switch (_fun65352_ip) {
                        case 0:
                            var0 = _closure2_slot34;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun65352_ip = 62;
                                continue _fun65352
                            }
                        case 18:
                            var1 = var2.injectJavaScript;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 26;
                            var0 = var4[var0];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var0);
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = new Array(0);
                var28 = var26.bind(var28)(var20, var14);
                _closure2_slot35 = var28;
                var32 = _closure1_slot6;
                var26 = var32.useCallback;
                var20 = new Array(3);
                var20[0] = var15;
                var33 = var0 == var4;
                var14 = undefined;
                if (var33) {
                    _fun65325_ip = 1436;
                    continue _fun65325
                }
            case 1430:
                var14 = var4.origin;
            case 1436:
                var20[1] = var14;
                var20[2] = var28;
                var14 = function(arg0) { // Environment: var24
                    _fun65353: for (var _fun65353_ip = 0;;) switch (_fun65353_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var6 = null;
                            if (!(var6 == var1)) {
                                _fun65353_ip = 156;
                                continue _fun65353
                            }
                        case 16:
                            var1 = global;
                            var3 = var1.JSON;
                            var2 = var3.parse;
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.data;
                            var4 = var2.bind(var3)(var1);
                            var2 = 'object';
                            var1 = typeof var4;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun65353_ip = 90;
                                continue _fun65353
                            }
                        case 63:
                            var2 = _closure2_slot18;
                            var3 = var6 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun65353_ip = 86;
                                continue _fun65353
                            }
                        case 76:
                            var3 = _closure2_slot18;
                            var2 = var3.origin;
                        case 86:
                            var1 = var6 != var2;
                        case 90:
                            if (!var1) {
                                _fun65353_ip = 156;
                                continue _fun65353
                            }
                        case 93:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.handleMessage;
                            var5 = _closure2_slot18;
                            var5 = var6 == var5;
                            if (var5) {
                                _fun65353_ip = 145;
                                continue _fun65353
                            }
                        case 135:
                            var5 = _closure2_slot18;
                            var1 = var5.origin;
                        case 145:
                            var0 = _closure2_slot35;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 156:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var26.bind(var32)(var14, var20);
                var26 = _closure1_slot6;
                var20 = var26.useState;
                var26 = var20.bind(var26)(var0);
                var20 = _closure1_slot5;
                var26 = var20.bind(var6)(var26, var27);
                var20 = var26[var5];
                var26 = var26[var9];
                _closure2_slot36 = var26;
                var32 = _closure1_slot6;
                var27 = var32.useEffect;
                var26 = new Array(3);
                var26[0] = var25;
                var26[1] = var4;
                var26[2] = var1;
                var25 = function() { // Environment: var24
                    var2 = _closure2_slot36;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun65355: for (var _fun65355_ip = 0;;) switch (_fun65355_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure2_slot18;
                                var3 = null;
                                var0 = var4;
                                if (!(var3 != var1)) {
                                    _fun65355_ip = 254;
                                    continue _fun65355
                                }
                            case 22:
                                var1 = _closure2_slot17;
                                var0 = var4;
                                if (!(var3 != var1)) {
                                    _fun65355_ip = 254;
                                    continue _fun65355
                                }
                            case 36:
                                var1 = _closure2_slot21;
                                var0 = var4;
                                if (!(var3 != var1)) {
                                    _fun65355_ip = 254;
                                    continue _fun65355
                                }
                            case 50:
                                var1 = {};
                                var3 = _closure2_slot18;
                                var3 = var3.port;
                                var7 = '';
                                if (!(var7 !== var3)) {
                                    _fun65355_ip = 116;
                                    continue _fun65355
                                }
                            case 70:
                                var3 = _closure2_slot18;
                                var6 = var3.hostname;
                                var3 = _closure2_slot18;
                                var5 = var3.port;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var4 = var3.concat;
                                var3 = ':';
                                var3 = var4.bind(var7)(var6, var3, var5);
                                _fun65355_ip = 126;
                                continue _fun65355;
                            case 116:
                                var4 = _closure2_slot18;
                                var3 = var4.host;
                            case 126:
                                var1.domain = var3;
                                var3 = _closure2_slot18;
                                var4 = var3.protocol;
                                var3 = 'http:';
                                var3 = var3 === var4;
                                var1.httpAllowed = var3;
                                var3 = {};
                                var4 = 'internal';
                                var3.type = var4;
                                var5 = _closure2_slot17;
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var4 = var4.concat;
                                var7 = '/';
                                var4 = var4.bind(var7)(var5, var7);
                                var3.path = var4;
                                var6 = _closure2_slot21;
                                var5 = var6.substring;
                                var4 = _closure2_slot21;
                                var2 = var4.lastIndexOf;
                                var4 = var2.bind(var4)(var7);
                                var2 = 0;
                                var2 = var5.bind(var6)(var2, var4);
                                var3.directory = var2;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var1.pathHandlers = var2;
                                var0 = var1;
                            case 254:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var25 = var27.bind(var32)(var25, var26);
                var27 = _closure1_slot6;
                var26 = var27.useEffect;
                var25 = new Array(6);
                var25[0] = var23;
                var25[1] = var31;
                var25[2] = var30;
                var25[3] = var29;
                var25[4] = var28;
                var25[5] = var13;
                var24 = function() { // Environment: var24
                    _fun65356: for (var _fun65356_ip = 0;;) switch (_fun65356_ip) {
                        case 0:
                            var1 = _closure2_slot33;
                            if (!var1) {
                                _fun65356_ip = 37;
                                continue _fun65356
                            }
                        case 10:
                            var1 = _closure2_slot20;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun65356_ip = 37;
                                continue _fun65356
                            }
                        case 20:
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun65359: for (var _fun65359_ip = 0;;) switch (_fun65359_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun65359_ip = 431;
                                                    continue _fun65359
                                                }
                                            case 10:
                                                var1 = undefined;
                                                var2 = undefined;
                                                var4 = _closure2_slot10;
                                                if (var4) {
                                                    _fun65359_ip = 30;
                                                    continue _fun65359
                                                }
                                            case 24:
                                                var13 = _closure2_slot23;
                                                _fun65359_ip = 40;
                                                continue _fun65359;
                                            case 30:
                                                var13 = {
                                                    'top': 0,
                                                    'bottom': 0,
                                                    'left': 0,
                                                    'right': 0
                                                };
                                            case 40:
                                                var5 = {};
                                                var4 = 'safeAreaUpdateEvent';
                                                var5.type = var4;
                                                var7 = {};
                                                var8 = {};
                                                var12 = _closure1_slot19;
                                                var9 = _closure2_slot12;
                                                var6 = null;
                                                var9 = var6 == var9;
                                                var10 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 87;
                                                    continue _fun65359
                                                }
                                            case 78:
                                                var9 = _closure2_slot12;
                                                var10 = var9.left;
                                            case 87:
                                                var9 = var6 == var13;
                                                var14 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 101;
                                                    continue _fun65359
                                                }
                                            case 96:
                                                var14 = var13.left;
                                            case 101:
                                                var15 = var6 != var14;
                                                var9 = 0;
                                                if (!var15) {
                                                    _fun65359_ip = 113;
                                                    continue _fun65359
                                                }
                                            case 110:
                                                var9 = var14;
                                            case 113:
                                                var9 = var12.bind(var1)(var10, var9);
                                                var8.left = var9;
                                                var12 = _closure1_slot19;
                                                var9 = _closure2_slot12;
                                                var9 = var6 == var9;
                                                var10 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 149;
                                                    continue _fun65359
                                                }
                                            case 140:
                                                var9 = _closure2_slot12;
                                                var10 = var9.right;
                                            case 149:
                                                var9 = var6 == var13;
                                                var14 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 163;
                                                    continue _fun65359
                                                }
                                            case 158:
                                                var14 = var13.right;
                                            case 163:
                                                var15 = var6 != var14;
                                                var9 = 0;
                                                if (!var15) {
                                                    _fun65359_ip = 175;
                                                    continue _fun65359
                                                }
                                            case 172:
                                                var9 = var14;
                                            case 175:
                                                var9 = var12.bind(var1)(var10, var9);
                                                var8.right = var9;
                                                var12 = _closure1_slot19;
                                                var9 = _closure2_slot12;
                                                var9 = var6 == var9;
                                                var10 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 211;
                                                    continue _fun65359
                                                }
                                            case 202:
                                                var9 = _closure2_slot12;
                                                var10 = var9.top;
                                            case 211:
                                                var9 = var6 == var13;
                                                var14 = undefined;
                                                if (var9) {
                                                    _fun65359_ip = 225;
                                                    continue _fun65359
                                                }
                                            case 220:
                                                var14 = var13.top;
                                            case 225:
                                                var15 = var6 != var14;
                                                var9 = 0;
                                                if (!var15) {
                                                    _fun65359_ip = 237;
                                                    continue _fun65359
                                                }
                                            case 234:
                                                var9 = var14;
                                            case 237:
                                                var9 = var12.bind(var1)(var10, var9);
                                                var8.top = var9;
                                                var10 = _closure1_slot19;
                                                var9 = _closure2_slot12;
                                                var12 = var6 == var9;
                                                var9 = undefined;
                                                if (var12) {
                                                    _fun65359_ip = 273;
                                                    continue _fun65359
                                                }
                                            case 264:
                                                var12 = _closure2_slot12;
                                                var9 = var12.bottom;
                                            case 273:
                                                var14 = var6 == var13;
                                                var12 = undefined;
                                                if (var14) {
                                                    _fun65359_ip = 287;
                                                    continue _fun65359
                                                }
                                            case 282:
                                                var12 = var13.bottom;
                                            case 287:
                                                var13 = var6 != var12;
                                                var11 = 0;
                                                if (!var13) {
                                                    _fun65359_ip = 299;
                                                    continue _fun65359
                                                }
                                            case 296:
                                                var11 = var12;
                                            case 299:
                                                var9 = var10.bind(var1)(var9, var11);
                                                var8.bottom = var9;
                                                var7.insets = var8;
                                                var5.data = var7;
                                                var2 = var5;
                                            case 321: // try_start_0
                                                var8 = _closure2_slot20;
                                                var7 = var8.injectJavaScript;
                                                var9 = _closure1_slot1;
                                                var10 = _closure1_slot3;
                                                var5 = 26;
                                                var5 = var10[var5];
                                                var9 = var9.bind(var1)(var5);
                                                var5 = var2;
                                                var5 = var9.bind(var1)(var5);
                                                var5 = var7.bind(var8)(var5);
                                                SaveGenerator(address = 368);
                                            case 366:
                                                return var5;
                                            case 368:
                                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                                if (var7) {
                                                    _fun65359_ip = 376;
                                                    continue _fun65359
                                                }
                                            case 374: // try_end0
                                                _fun65359_ip = 428;
                                                continue _fun65359;
                                            case 376:
                                                return var5;
                                            case 379: // catch_target0
                                                CatchBlockStart(arg_register = 5);
                                                var5 = _closure2_slot34;
                                                var5 = var5.current;
                                                if (!(var6 != var5)) {
                                                    _fun65359_ip = 428;
                                                    continue _fun65359
                                                }
                                            case 394:
                                                var3 = _closure2_slot35;
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot3;
                                                var4 = 26;
                                                var4 = var6[var4];
                                                var4 = var5.bind(var1)(var4);
                                                var2 = var4.bind(var1)(var2);
                                                var2 = var3.bind(var1)(var2);
                                            case 428:
                                                return var1;
                                            case 431:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = undefined;
                            var0 = var0.bind(var1)();
                            var0 = var0.bind(var1)();
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = var26.bind(var27)(var24, var25);
                if (!(var0 != var21)) {
                    _fun65325_ip = 2125;
                    continue _fun65325
                }
            case 1582:
                if (!(var0 != var4)) {
                    _fun65325_ip = 2125;
                    continue _fun65325
                }
            case 1589:
                if (!var3) {
                    _fun65325_ip = 1599;
                    continue _fun65325
                }
            case 1592:
                if (!(var8 !== var2)) {
                    _fun65325_ip = 2125;
                    continue _fun65325
                }
            case 1599:
                var4 = {};
                var24 = _closure1_slot19;
                var2 = var0 == var13;
                var3 = undefined;
                if (var2) {
                    _fun65325_ip = 1619;
                    continue _fun65325
                }
            case 1614:
                var3 = var13.left;
            case 1619:
                var2 = var0 == var23;
                var25 = undefined;
                if (var2) {
                    _fun65325_ip = 1633;
                    continue _fun65325
                }
            case 1628:
                var25 = var23.left;
            case 1633:
                var26 = var0 != var25;
                var2 = 0;
                if (!var26) {
                    _fun65325_ip = 1645;
                    continue _fun65325
                }
            case 1642:
                var2 = var25;
            case 1645:
                var2 = var24.bind(var6)(var3, var2);
                var4.left = var2;
                var24 = _closure1_slot19;
                var2 = var0 == var13;
                var3 = undefined;
                if (var2) {
                    _fun65325_ip = 1673;
                    continue _fun65325
                }
            case 1668:
                var3 = var13.right;
            case 1673:
                var2 = var0 == var23;
                var25 = undefined;
                if (var2) {
                    _fun65325_ip = 1687;
                    continue _fun65325
                }
            case 1682:
                var25 = var23.right;
            case 1687:
                var26 = var0 != var25;
                var2 = 0;
                if (!var26) {
                    _fun65325_ip = 1699;
                    continue _fun65325
                }
            case 1696:
                var2 = var25;
            case 1699:
                var2 = var24.bind(var6)(var3, var2);
                var4.right = var2;
                var24 = _closure1_slot19;
                var2 = var0 == var13;
                var3 = undefined;
                if (var2) {
                    _fun65325_ip = 1727;
                    continue _fun65325
                }
            case 1722:
                var3 = var13.top;
            case 1727:
                var2 = var0 == var23;
                var25 = undefined;
                if (var2) {
                    _fun65325_ip = 1741;
                    continue _fun65325
                }
            case 1736:
                var25 = var23.top;
            case 1741:
                var26 = var0 != var25;
                var2 = 0;
                if (!var26) {
                    _fun65325_ip = 1753;
                    continue _fun65325
                }
            case 1750:
                var2 = var25;
            case 1753:
                var2 = var24.bind(var6)(var3, var2);
                var4.top = var2;
                var3 = _closure1_slot19;
                var24 = var0 == var13;
                var2 = undefined;
                if (var24) {
                    _fun65325_ip = 1781;
                    continue _fun65325
                }
            case 1776:
                var2 = var13.bottom;
            case 1781:
                var24 = var0 == var23;
                var13 = undefined;
                if (var24) {
                    _fun65325_ip = 1795;
                    continue _fun65325
                }
            case 1790:
                var13 = var23.bottom;
            case 1795:
                var23 = var0 != var13;
                var5 = 0;
                if (!var23) {
                    _fun65325_ip = 1807;
                    continue _fun65325
                }
            case 1804:
                var5 = var13;
            case 1807:
                var2 = var3.bind(var6)(var2, var5);
                var4.bottom = var2;
                var2 = _closure1_slot16;
                var13 = undefined;
                if (!var2) {
                    _fun65325_ip = 1857;
                    continue _fun65325
                }
            case 1826:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 18;
                var2 = var5[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.createInjectedJavascriptForIOS;
                var13 = var2.bind(var3)(var4);
            case 1857:
                var2 = var0 == var1;
                var1 = null;
                if (var2) {
                    _fun65325_ip = 2123;
                    continue _fun65325
                }
            case 1869:
                var2 = _closure1_slot16;
                if (var2) {
                    _fun65325_ip = 1888;
                    continue _fun65325
                }
            case 1876:
                var3 = var0 != var20;
                var2 = null;
                if (!var3) {
                    _fun65325_ip = 2120;
                    continue _fun65325
                }
            case 1888:
                var5 = _closure1_slot13;
                var4 = _closure1_slot0;
                var23 = _closure1_slot3;
                var3 = 13;
                var3 = var23[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.WebView;
                var3 = {};
                var22 = var22.webView;
                var3.style = var22;
                var3.ref = var7;
                var7 = {};
                var7.uri = var21;
                var3.source = var7;
                var21 = var0 != var20;
                var7 = undefined;
                if (!var21) {
                    _fun65325_ip = 1956;
                    continue _fun65325
                }
            case 1953:
                var7 = var20;
            case 1956:
                var3.androidAssetLoaderConfig = var7;
                var7 = ['*'];
                var3.originWhitelist = var7;
                var7 = 'never';
                var3.overScrollMode = var7;
                var3.scrollEnabled = var8;
                var7 = true;
                var3.cacheEnabled = var7;
                var3.onError = var19;
                var3.onContentProcessDidTerminate = var18;
                var3.onRenderProcessGone = var17;
                var3.webViewKey = var15;
                var3.temporaryParentNodeTag = var16;
                var15 = var0 != var15;
                var3.messagingWithWebViewKeyEnabled = var15;
                var3.onMessage = var14;
                var14 = _closure1_slot16;
                var3.allowFileAccess = var14;
                var3.injectedJavaScript = var13;
                var3.injectedJavaScriptForMainFrameOnly = var8;
                var13 = _closure1_slot16;
                var11 = undefined;
                if (!var13) {
                    _fun65325_ip = 2075;
                    continue _fun65325
                }
            case 2072:
                var11 = var12;
            case 2075:
                var3.onShouldStartLoadWithRequest = var11;
                var3.mediaPlaybackRequiresUserAction = var8;
                var3.ignoreSilentHardwareSwitch = var10;
                var3.allowsInlineMediaPlayback = var7;
                var3.minimumFontSize = var9;
                var3.bounces = var8;
                var3.allowsProtectedMedia = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 2120:
                var1 = var2;
            case 2123:
                return var1;
            case 2125:
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var1 = function() {
        var3 = _closure1_slot6;
        var2 = var3.useState;
        var0 = false;
        var4 = var2.bind(var3)(var0);
        var2 = _closure1_slot5;
        var3 = undefined;
        var0 = 2;
        var5 = var2.bind(var3)(var4, var0);
        var0 = 0;
        var2 = var5[var0];
        var0 = {};
        var0.hasInvalidUrlError = var2;
        var4 = 1;
        var4 = var5[var4];
        var0.setHasInvalidUrlError = var4;
        var4 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 28;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)(var2);
        var0.hadInvalidUrlError = var1;
        return var0;
    };
    var _closure1_slot21 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Linking;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.ActivityPlatform;
    var _closure1_slot9 = var9;
    var5 = var5.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.ComponentActions;
    var _closure1_slot11 = var9;
    var5 = var5.AnalyticEvents;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var12 = 'transparent';
    var11.backgroundColor = var12;
    var5.webView = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var9 = var8.bind(var0)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var15 = 'EmbeddedActivityWebView';
    var16 = var8;
    var5 = new var16[var9](var15, var14);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var8 = var6.bind(var0)(var5);
    var5 = var8.isIOS;
    var5 = var5.bind(var8)();
    var _closure1_slot16 = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/native/EmbeddedActivityWebView.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun65362: for (var _fun65362_ip = 0;;) switch (_fun65362_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.channelId;
                var _closure2_slot0 = var5;
                var1 = var3.currentEmbeddedActivity;
                var _closure2_slot1 = var1;
                var6 = var3.applicationId;
                var _closure2_slot2 = var6;
                var2 = {
                    'channelId': 0,
                    'currentEmbeddedActivity': 0,
                    'applicationId': 0
                };
                var12 = null;
                var17 = var2;
                var16 = null;
                var0 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var3;
                var15 = var2;
                var4 = copyDataProperties(var17, var16, var15);
                var2 = _closure1_slot21;
                var3 = undefined;
                var2 = var2.bind(var3)();
                var10 = var2.hasInvalidUrlError;
                var _closure2_slot3 = var10;
                var9 = var2.setHasInvalidUrlError;
                var8 = var2.hadInvalidUrlError;
                var _closure2_slot4 = var8;
                var7 = {};
                if (!(var12 != var1)) {
                    _fun65362_ip = 159;
                    continue _fun65362
                }
            case 115:
                var2 = var1.customId;
                if (!(var12 != var2)) {
                    _fun65362_ip = 137;
                    continue _fun65362
                }
            case 125:
                var2 = var1.customId;
                var7.custom_id = var2;
            case 137:
                var2 = var1.referrerId;
                if (!(var12 != var2)) {
                    _fun65362_ip = 159;
                    continue _fun65362
                }
            case 147:
                var2 = var1.referrerId;
                var7.referrer_id = var2;
            case 159:
                var13 = _closure1_slot6;
                var12 = var13.useEffect;
                var2 = new Array(5);
                var2[0] = var10;
                var2[1] = var8;
                var2[2] = var5;
                var2[3] = var6;
                var2[4] = var1;
                var1 = function() { // Environment: var11
                    _fun65363: for (var _fun65363_ip = 0;;) switch (_fun65363_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var0 = !var0;
                            if (!var0) {
                                _fun65363_ip = 17;
                                continue _fun65363
                            }
                        case 13:
                            var0 = _closure2_slot3;
                        case 17:
                            if (!var0) {
                                _fun65363_ip = 151;
                                continue _fun65363
                            }
                        case 23:
                            var0 = _closure2_slot0;
                            var6 = null;
                            if (!(var6 != var0)) {
                                _fun65363_ip = 74;
                                continue _fun65363
                            }
                        case 33:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 29;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.selectParticipant;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0, var6);
                        case 74:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 30;
                            var0 = var2[var0];
                            var4 = undefined;
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.leaveActivity;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var5 = var6 == var5;
                            if (var5) {
                                _fun65363_ip = 127;
                                continue _fun65363
                            }
                        case 118:
                            var5 = _closure2_slot1;
                            var4 = var5.location;
                        case 127:
                            var0.location = var4;
                            var3 = _closure2_slot2;
                            var0.applicationId = var3;
                            var3 = false;
                            var0.showFeedback = var3;
                            var0 = var1.bind(var2)(var0);
                        case 151:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var12.bind(var13)(var1, var2);
                var2 = _closure1_slot13;
                var1 = _closure1_slot20;
                var0 = {};
                var12 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hasFrameId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.hasFrameId = var12;
                var12 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getOrCreateFrameId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.getOrCreateFrameId = var12;
                var11 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.releaseFrameId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.releaseFrameId = var11;
                var0.hasInvalidUrlError = var10;
                var0.setHasInvalidUrlError = var9;
                var0.hadInvalidUrlError = var8;
                var0.deepLinkQueryParams = var7;
                var0.applicationId = var6;
                var0.channelId = var5;
                var17 = var0;
                var16 = var4;
                var4 = copyDataProperties(var17, var16);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.BaseActivityWebView = var3;
    var2.useHasInvalidUrlErrorState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 7292, 3458, 660, 33, 1297, 3, 478, 8133, 491, 5994, 1229, 8134, 1594, 8135, 8136, 795, 632, 4002, 1234, 507, 8137, 1457, 7993, 7994, 5358, 7949, 8014, 2]);