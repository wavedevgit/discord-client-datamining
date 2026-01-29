// modules/app_launcher/utils/AppLauncherUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun42793: for (var _fun42793_ip = 0;;) switch (_fun42793_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42793_ip = 45;
                    continue _fun42793
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun42793_ip = 54;
                    continue _fun42793
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun42793_ip = 342;
                    continue _fun42793
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42793_ip = 322;
                    continue _fun42793
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42793_ip = 282;
                    continue _fun42793
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42793_ip = 269;
                    continue _fun42793
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
                    _fun42793_ip = 162;
                    continue _fun42793
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun42793_ip = 178;
                    continue _fun42793
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42793_ip = 248;
                    continue _fun42793
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42793_ip = 248;
                    continue _fun42793
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42793_ip = 233;
                    continue _fun42793
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42793_ip = 246;
                    continue _fun42793
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun42793_ip = 264;
                continue _fun42793;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun42793_ip = 282;
                continue _fun42793;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun42793_ip = 322;
                    continue _fun42793
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
                    _fun42793_ip = 329;
                    continue _fun42793
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42794: for (var _fun42794_ip = 0;;) switch (_fun42794_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42794_ip = 56;
                                continue _fun42794
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
                            _fun42794_ip = 67;
                            continue _fun42794;
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
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun42795: for (var _fun42795_ip = 0;;) switch (_fun42795_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42795_ip = 23;
                    continue _fun42795
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42795_ip = 33;
                    continue _fun42795
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
                    _fun42795_ip = 70;
                    continue _fun42795
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42795_ip = 55;
                    continue _fun42795
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var6 = function(arg0) { // Original name: isRealApplication, environment: var1
        var0 = arg0;
        var1 = var0.id;
        var0 = _closure1_slot10;
        var0 = var0.BUILT_IN;
        var0 = var1 !== var0;
        return var0;
    };
    var _closure1_slot14 = var6;
    var5 = function(arg0) { // Original name: isEmbeddedApp, environment: var1
        _fun42797: for (var _fun42797_ip = 0;;) switch (_fun42797_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot14;
                var5 = undefined;
                var0 = var0.bind(var5)(var2);
                if (!var0) {
                    _fun42797_ip = 81;
                    continue _fun42797
                }
            case 20:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasFlag;
                var5 = var2.flags;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                if (!var6) {
                    _fun42797_ip = 65;
                    continue _fun42797
                }
            case 62:
                var2 = var5;
            case 65:
                var1 = _closure1_slot9;
                var1 = var1.EMBEDDED;
                var0 = var3.bind(var4)(var2, var1);
            case 81:
                return var0;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function(arg0) { // Original name: getShelfBadgeTypeIfActive, environment: var1
        _fun42798: for (var _fun42798_ip = 0;;) switch (_fun42798_ip) {
            case 0:
                var2 = _closure1_slot17;
                var3 = undefined;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                var5 = var2 == var0;
                var4 = undefined;
                if (var5) {
                    _fun42798_ip = 89;
                    continue _fun42798
                }
            case 28:
                var5 = var0.client_platform_config;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var6 = var6.bind(var3)(var0);
                var7 = _closure1_slot0;
                var0 = 11;
                var0 = var8[var0];
                var7 = var7.bind(var3)(var0);
                var0 = var7.getOS;
                var0 = var0.bind(var7)();
                var0 = var6.bind(var3)(var0);
                var4 = var5[var0];
            case 89:
                var0 = global;
                var6 = var0.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var7 = var2 == var4;
                var6 = undefined;
                if (var7) {
                    _fun42798_ip = 121;
                    continue _fun42798
                }
            case 115:
                var6 = var4.label_until;
            case 121:
                if (!(var2 != var6)) {
                    _fun42798_ip = 217;
                    continue _fun42798
                }
            case 125:
                var8 = var0.Date;
                var7 = var8.parse;
                var6 = var4.label_until;
                var6 = var7.bind(var8)(var6);
                if (!(var5 < var6)) {
                    _fun42798_ip = 217;
                    continue _fun42798
                }
            case 152:
                var7 = var2 == var4;
                var6 = undefined;
                if (var7) {
                    _fun42798_ip = 167;
                    continue _fun42798
                }
            case 161:
                var6 = var4.label_from;
            case 167:
                if (!(var2 != var6)) {
                    _fun42798_ip = 217;
                    continue _fun42798
                }
            case 171:
                var7 = var0.Date;
                var6 = var7.parse;
                var0 = var4.label_from;
                var0 = var6.bind(var7)(var0);
                if (!(var5 > var0)) {
                    _fun42798_ip = 217;
                    continue _fun42798
                }
            case 198:
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun42798_ip = 213;
                    continue _fun42798
                }
            case 207:
                var0 = var4.label_type;
            case 213:
                if (!(var2 == var0)) {
                    _fun42798_ip = 249;
                    continue _fun42798
                }
            case 217:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.EmbeddedActivityLabelTypes;
                var0 = var1.NONE;
            case 249:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var3 = function(arg0) { // Original name: getEmbeddedActivityConfig, environment: var1
        _fun42799: for (var _fun42799_ip = 0;;) switch (_fun42799_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot14;
                var5 = undefined;
                var3 = var0.bind(var5)(var2);
                var0 = null;
                if (!var3) {
                    _fun42799_ip = 64;
                    continue _fun42799
                }
            case 22:
                var3 = _closure1_slot15;
                var3 = var3.bind(var5)(var2);
                var0 = null;
                if (!var3) {
                    _fun42799_ip = 64;
                    continue _fun42799
                }
            case 36:
                var1 = _closure1_slot7;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun42799_ip = 55;
                    continue _fun42799
                }
            case 47:
                var1 = var2.embedded_activity_config;
                _fun42799_ip = 61;
                continue _fun42799;
            case 55:
                var1 = var2.embeddedActivityConfig;
            case 61:
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = ['fakeAppIconURL'];
    var _closure1_slot3 = var0;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var10[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.ApplicationFlags;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var8 = var7.BuiltInSectionId;
    var _closure1_slot10 = var8;
    var7 = 7;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.MessageSendLocation;
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = var8.BUILT_IN;
    var7.id = var8;
    var8 = 23;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/app_launcher/utils/AppLauncherUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.FAKE_BUILT_IN_APP = var7;
    var2.isRealApplication = var6;
    var6 = function(arg0) { // Original name: getSectionName, environment: var1
        _fun42800: for (var _fun42800_ip = 0;;) switch (_fun42800_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot14;
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                if (var2) {
                    _fun42800_ip = 77;
                    continue _fun42800
                }
            case 20:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.UB2gG2;
                var0 = var2.bind(var3)(var0);
                _fun42800_ip = 82;
                continue _fun42800;
            case 77:
                var0 = var1.name;
            case 82:
                return var0;
        }
    };
    var2.getSectionName = var6;
    var6 = function(arg0) { // Original name: getSectionDescription, environment: var1
        _fun42801: for (var _fun42801_ip = 0;;) switch (_fun42801_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot14;
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                if (var2) {
                    _fun42801_ip = 77;
                    continue _fun42801
                }
            case 20:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.X9fusn;
                var0 = var2.bind(var3)(var0);
                _fun42801_ip = 82;
                continue _fun42801;
            case 77:
                var0 = var1.description;
            case 82:
                return var0;
        }
    };
    var2.getSectionDescription = var6;
    var2.isEmbeddedApp = var5;
    var5 = function(arg0) { // Original name: isPartnerApplication, environment: var1
        _fun42802: for (var _fun42802_ip = 0;;) switch (_fun42802_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot14;
                var5 = undefined;
                var0 = var0.bind(var5)(var2);
                if (!var0) {
                    _fun42802_ip = 81;
                    continue _fun42802
                }
            case 20:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasFlag;
                var5 = var2.flags;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                if (!var6) {
                    _fun42802_ip = 65;
                    continue _fun42802
                }
            case 62:
                var2 = var5;
            case 65:
                var1 = _closure1_slot9;
                var1 = var1.PARTNER;
                var0 = var3.bind(var4)(var2, var1);
            case 81:
                return var0;
        }
    };
    var2.isPartnerApplication = var5;
    var5 = function(arg0) { // Original name: isPromotedApplication, environment: var1
        _fun42803: for (var _fun42803_ip = 0;;) switch (_fun42803_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot14;
                var5 = undefined;
                var0 = var0.bind(var5)(var2);
                if (!var0) {
                    _fun42803_ip = 81;
                    continue _fun42803
                }
            case 20:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasFlag;
                var5 = var2.flags;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                if (!var6) {
                    _fun42803_ip = 65;
                    continue _fun42803
                }
            case 62:
                var2 = var5;
            case 65:
                var1 = _closure1_slot9;
                var1 = var1.PROMOTED;
                var0 = var3.bind(var4)(var2, var1);
            case 81:
                return var0;
        }
    };
    var2.isPromotedApplication = var5;
    var2.getShelfBadgeTypeIfActive = var4;
    var4 = function(arg0) { // Original name: getShelfBadgeNameIfActive, environment: var1
        _fun42804: for (var _fun42804_ip = 0;;) switch (_fun42804_ip) {
            case 0:
                var2 = _closure1_slot16;
                var3 = undefined;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 12;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.EmbeddedActivityLabelTypes;
                var2 = var2.NEW;
                if (!(var2 !== var1)) {
                    _fun42804_ip = 100;
                    continue _fun42804
                }
            case 53:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.EmbeddedActivityLabelTypes;
                var0 = var0.UPDATED;
                if (!(var0 !== var1)) {
                    _fun42804_ip = 92;
                    continue _fun42804
                }
            case 86:
                var0 = '';
                return var0;
            case 92:
                var0 = 'Updated';
                return var0;
            case 100:
                var0 = 'New';
                return var0;
        }
    };
    var2.getShelfBadgeNameIfActive = var4;
    var2.getEmbeddedActivityConfig = var3;
    var3 = function(arg0) { // Original name: executeAppLauncherCommand, environment: var1
        _fun42805: for (var _fun42805_ip = 0;;) switch (_fun42805_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.command;
                var _closure2_slot0 = var0;
                var0 = var1.optionValues;
                var _closure2_slot1 = var0;
                var0 = var1.context;
                var _closure2_slot2 = var0;
                var3 = var1.commandTargetId;
                var _closure2_slot3 = var3;
                var3 = var1.maxSizeCallback;
                var _closure2_slot4 = var3;
                var3 = var1.sectionName;
                var _closure2_slot5 = var3;
                var3 = var1.commandOrigin;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun42805_ip = 111;
                    continue _fun42805
                }
            case 76:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 13;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.CommandOrigin;
                var3 = var4.APPLICATION_LAUNCHER;
            case 111:
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var1;
                var _closure2_slot8 = var1;
                var0 = var0.channel;
                _closure2_slot7 = var0;
                var0 = function() { // Environment: var2
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun42808: for (var _fun42808_ip = 0;;) switch (_fun42808_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun42808_ip = 584;
                                        continue _fun42808
                                    }
                                case 10:
                                    var9 = undefined;
                                    var5 = undefined;
                                    var7 = undefined;
                                    var3 = undefined;
                                case 18: // try_start_0
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var6[var1];
                                    var6 = var4.bind(var9)(var1);
                                    var1 = {};
                                    var8 = _closure2_slot0;
                                    var1.command = var8;
                                    var8 = _closure2_slot1;
                                    var1.optionValues = var8;
                                    var8 = _closure2_slot2;
                                    var1.context = var8;
                                    var8 = _closure2_slot3;
                                    var1.commandTargetId = var8;
                                    var8 = _closure2_slot4;
                                    var1.maxSizeCallback = var8;
                                    var8 = _closure2_slot6;
                                    var1.commandOrigin = var8;
                                    var8 = _closure2_slot5;
                                    var1.sectionName = var8;
                                    var10 = _closure1_slot8;
                                    var8 = var10.entrypoint;
                                    var8 = var8.bind(var10)();
                                    var1.source = var8;
                                    var1 = var6.bind(var9)(var1);
                                    SaveGenerator(address = 135);
                                case 133:
                                    return var1;
                                case 135:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun42808_ip = 373;
                                        continue _fun42808
                                    }
                                case 144:
                                    var5 = var1;
                                    var6 = _closure2_slot0;
                                    var8 = var6.inputType;
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var6 = 13;
                                    var6 = var11[var6];
                                    var6 = var10.bind(var9)(var6);
                                    var6 = var6.ApplicationCommandInputType;
                                    var6 = var6.BUILT_IN_TEXT;
                                    if (!(var8 === var6)) {
                                        _fun42808_ip = 370;
                                        continue _fun42808
                                    }
                                case 196:
                                    var6 = var5;
                                    var10 = null;
                                    if (!(var10 != var6)) {
                                        _fun42808_ip = 370;
                                        continue _fun42808
                                    }
                                case 208:
                                    var6 = _closure2_slot2;
                                    var6 = var6.channel;
                                    if (!(var10 != var6)) {
                                        _fun42808_ip = 370;
                                        continue _fun42808
                                    }
                                case 224:
                                    var8 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var6 = 15;
                                    var6 = var11[var6];
                                    var12 = var8.bind(var9)(var6);
                                    var11 = var12.parse;
                                    var6 = _closure2_slot7;
                                    var8 = var5;
                                    var5 = var8.content;
                                    var6 = var11.bind(var12)(var6, var5);
                                    var3 = var6;
                                    var8 = var8.tts;
                                    var7 = var8;
                                    var8 = var10 != var8;
                                    var5 = var8;
                                    if (!var8) {
                                        _fun42808_ip = 293;
                                        continue _fun42808
                                    }
                                case 290:
                                    var5 = var7;
                                case 293:
                                    var6.tts = var5;
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var5 = 16;
                                    var5 = var7[var5];
                                    var7 = var6.bind(var9)(var5);
                                    var6 = var7.sendMessage;
                                    var4 = _closure2_slot2;
                                    var4 = var4.channel;
                                    var16 = var4.id;
                                    var15 = var3;
                                    var3 = {};
                                    var2 = _closure1_slot11;
                                    var2 = var2.APP_COMMAND;
                                    var3.location = var2;
                                    var14 = true;
                                    var17 = var7;
                                    var13 = var3;
                                    var2 = var17[var6](var16, var15, var14, var13, var12);
                                case 370: // try_end0
                                    return var9;
                                case 373:
                                    return var1;
                                case 376: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var10[var2];
                                    var4 = var3.bind(var9)(var2);
                                    var3 = var4.show;
                                    var2 = {};
                                    var8 = _closure1_slot0;
                                    var5 = 8;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var11 = var6.intl;
                                    var7 = var11.string;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var6 = var6.t;
                                    var6 = var6["aHO//m"];
                                    var6 = var7.bind(var11)(var6);
                                    var2.title = var6;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var11 = var6.intl;
                                    var7 = var11.string;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var6 = var6.t;
                                    var6 = var6.kuzKHK;
                                    var6 = var7.bind(var11)(var6);
                                    var2.body = var6;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var10[var5];
                                    var5 = var8.bind(var9)(var5);
                                    var5 = var5.t;
                                    var5 = var5["5911Lb"];
                                    var5 = var6.bind(var7)(var5);
                                    var2.confirmText = var5;
                                    var5 = function() { // Original name: onConfirm, environment: var5
                                        var1 = _closure2_slot8;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var2.onConfirm = var5;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 584:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = var0.bind(var1)();
                _closure2_slot8 = var0;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.executeAppLauncherCommand = var3;
    var3 = function(arg0) { // Original name: getApplicationDetails, environment: var1
        _fun42811: for (var _fun42811_ip = 0;;) switch (_fun42811_ip) {
            case 0:
                var2 = arg0;
                var6 = arguments[1];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun42811_ip = 14;
                    continue _fun42811
                }
            case 12:
                var6 = {};
            case 14:
                var4 = var6.fakeAppIconURL;
                var1 = _closure1_slot4;
                var0 = _closure1_slot3;
                var6 = var1.bind(var5)(var6, var0);
                var0 = _closure1_slot14;
                var0 = var0.bind(var5)(var2);
                var1 = {};
                if (var0) {
                    _fun42811_ip = 185;
                    continue _fun42811
                }
            case 56:
                var0 = null;
                var7 = var0 != var4;
                if (!var7) {
                    _fun42811_ip = 68;
                    continue _fun42811
                }
            case 65:
                var0 = var4;
            case 68:
                var1.iconURL = var0;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var4 = var9[var0];
                var4 = var8.bind(var5)(var4);
                var10 = var4.intl;
                var7 = var10.string;
                var4 = var9[var0];
                var4 = var8.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.UB2gG2;
                var4 = var7.bind(var10)(var4);
                var1.name = var4;
                var4 = var9[var0];
                var4 = var8.bind(var5)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var0 = var9[var0];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.X9fusn;
                var0 = var4.bind(var7)(var0);
                var1.description = var0;
                var0 = var1;
                _fun42811_ip = 282;
                continue _fun42811;
            case 185:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 18;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.getApplicationIconURL;
                var3 = {};
                var12 = var3;
                var11 = var6;
                var6 = copyDataProperties(var12, var11);
                var7 = var2.id;
                var6 = 'id';
                var3[var6] = var7;
                var7 = var2.icon;
                var6 = 'icon';
                var3[var6] = var7;
                var3 = var4.bind(var5)(var3);
                var1.iconURL = var3;
                var3 = var2.name;
                var1.name = var3;
                var2 = var2.description;
                var1.description = var2;
                var0 = var1;
            case 282:
                return var0;
        }
    };
    var2.getApplicationDetails = var3;
    var3 = function(arg0) { // Original name: isApplicationMonetizedWithIAP, environment: var1
        _fun42812: for (var _fun42812_ip = 0;;) switch (_fun42812_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot14;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun42812_ip = 54;
                    continue _fun42812
                }
            case 26:
                var1 = _closure1_slot7;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun42812_ip = 45;
                    continue _fun42812
                }
            case 37:
                var1 = var2.is_monetized;
                _fun42812_ip = 51;
                continue _fun42812;
            case 45:
                var1 = var2.isMonetized;
            case 51:
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var2.isApplicationMonetizedWithIAP = var3;
    var3 = function(arg0) { // Original name: isApplicationAdSupported, environment: var1
        _fun42813: for (var _fun42813_ip = 0;;) switch (_fun42813_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun42813_ip = 32;
                    continue _fun42813
                }
            case 26:
                var0 = var1.displays_advertisements;
            case 32:
                return var0;
        }
    };
    var2.isApplicationAdSupported = var3;
    var3 = function(arg0) { // Original name: appLauncherShowsRecommendations, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 19;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.AppLauncherEntrypoint;
        var1 = var0.TEXT;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.appLauncherShowsRecommendations = var3;
    var3 = function(arg0) { // Original name: formatPrimaryEntryPointCommandName, environment: var1
        _fun42815: for (var _fun42815_ip = 0;;) switch (_fun42815_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var0 = '';
                if (var1) {
                    _fun42815_ip = 78;
                    continue _fun42815
                }
            case 16:
                var2 = var4.charAt;
                var1 = 0;
                var2 = var2.bind(var4)(var1);
                var1 = var2.toLocaleUpperCase;
                var2 = var1.bind(var2)();
                var3 = var4.slice;
                var1 = 1;
                var1 = var3.bind(var4)(var1);
                var4 = var2 + var1;
                var3 = var4.replaceAll;
                var2 = '_';
                var1 = ' ';
                var0 = var3.bind(var4)(var2, var1);
            case 78:
                return var0;
        }
    };
    var2.formatPrimaryEntryPointCommandName = var3;
    var3 = function(arg0) { // Original name: ensureRecommendationSectionsOnlyContainActivities, environment: var1
        _fun42816: for (var _fun42816_ip = 0;;) switch (_fun42816_ip) {
            case 0:
                var0 = new Array(0);
                var2 = _closure1_slot12;
                var6 = undefined;
                var1 = arg0;
                var5 = var2.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = 'application_directory_collection_items';
                var3 = 0;
                if (var1) {
                    _fun42816_ip = 118;
                    continue _fun42816
                }
            case 41:
                var10 = var2.value;
                var9 = var10.application_directory_collection_items;
                var8 = var9.filter;
                var1 = function(arg0) { // Environment: var7
                    _fun42817: for (var _fun42817_ip = 0;;) switch (_fun42817_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 20;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var5.bind(var3)(var0);
                            var0 = var0.ApplicationDirectoryCollectionItemType;
                            var0 = var0.APPLICATION;
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun42817_ip = 66;
                                continue _fun42817
                            }
                        case 52:
                            var2 = _closure1_slot15;
                            var1 = var1.application;
                            var0 = var2.bind(var3)(var1);
                        case 66:
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var1);
                var1 = var9.length;
                if (!(var3 !== var1)) {
                    _fun42816_ip = 103;
                    continue _fun42816
                }
            case 76:
                var8 = var0.push;
                var1 = {};
                var12 = var1;
                var11 = var10;
                var10 = copyDataProperties(var12, var11);
                var1[var4] = var9;
                var1 = var8.bind(var0)(var1);
            case 103:
                var8 = var5.bind(var6)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun42816_ip = 41;
                    continue _fun42816
                }
            case 118:
                return var0;
        }
    };
    var2.ensureRecommendationSectionsOnlyContainActivities = var3;
    var3 = function(arg0) { // Original name: getInstallAppPropsFromProfileApplication, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.applicationId = var2;
        var2 = var1.customInstallUrl;
        var0.customInstallUrl = var2;
        var2 = var1.installParams;
        var0.installParams = var2;
        var1 = var1.integrationTypesConfig;
        var0.integrationTypesConfig = var1;
        return var0;
    };
    var2.getInstallAppPropsFromProfileApplication = var3;
    var3 = function(arg0) { // Original name: getInstallAppProps, environment: var1
        _fun42819: for (var _fun42819_ip = 0;;) switch (_fun42819_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot7;
                var0 = var2 instanceof var0;
                var1 = {};
                var3 = var2.id;
                var1.applicationId = var3;
                if (var0) {
                    _fun42819_ip = 66;
                    continue _fun42819
                }
            case 28:
                var0 = var2.custom_install_url;
                var1.customInstallUrl = var0;
                var0 = var2.install_params;
                var1.installParams = var0;
                var0 = var2.integration_types_config;
                var1.integrationTypesConfig = var0;
                var0 = var1;
                _fun42819_ip = 102;
                continue _fun42819;
            case 66:
                var3 = var2.customInstallUrl;
                var1.customInstallUrl = var3;
                var3 = var2.installParams;
                var1.installParams = var3;
                var2 = var2.integrationTypesConfig;
                var1.integrationTypesConfig = var2;
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var2.getInstallAppProps = var3;
    var1 = function(arg0, arg1) { // Original name: isAppAvailableInAppLauncher, environment: var1
        _fun42820: for (var _fun42820_ip = 0;;) switch (_fun42820_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = null;
                var1 = var0 != var4;
                var5 = null;
                if (!var1) {
                    _fun42820_ip = 37;
                    continue _fun42820
                }
            case 17:
                var2 = _closure1_slot6;
                var1 = var2.getGuildState;
                var5 = var1.bind(var2)(var4);
            case 37:
                var1 = var0 != var5;
                if (!var1) {
                    _fun42820_ip = 86;
                    continue _fun42820
                }
            case 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 21;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.hasCommandIndexForApp;
                var0 = var3.id;
                var1 = var2.bind(var4)(var0, var5);
            case 86:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 22;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.isAppUserInstallable;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun42820_ip = 128;
                    continue _fun42820
                }
            case 125:
                var0 = var1;
            case 128:
                return var0;
        }
    };
    var2.isAppAvailableInAppLauncher = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 4630, 3414, 12191, 660, 4502, 1346, 1234, 1384, 7910, 478, 1636, 4504, 7944, 5545, 6484, 3956, 1417, 7694, 12192, 4501, 7770, 2]);