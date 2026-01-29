// modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0, arg1) { // Original name: useEnabledHarmTypesBitmaskForChannelAndAuthorId, environment: var1
        _fun72884: for (var _fun72884_ip = 0;;) switch (_fun72884_ip) {
            case 0:
                var8 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var8;
                var4 = _closure1_slot0;
                var14 = _closure1_slot1;
                var5 = 5;
                var2 = var14[var5];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.getEligibleHarmTypesConfigsForContext;
                var10 = var2.bind(var6)();
                var _closure2_slot2 = var10;
                var2 = 6;
                var6 = var14[var2];
                var11 = var4.bind(var3)(var6);
                var9 = var11.useStateFromStores;
                var6 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var9.bind(var11)(var7, var6);
                var _closure2_slot3 = var7;
                var6 = var14[var2];
                var12 = var4.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot4;
                var9 = new Array(2);
                var9[0] = var6;
                var6 = _closure1_slot5;
                var9[1] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getChannelTypeById;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var6 = _closure1_slot4;
                    var0 = new Array(2);
                    var0[0] = var6;
                    var5 = _closure1_slot5;
                    var0[1] = var5;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var11 = var11.bind(var12)(var9, var6);
                var _closure2_slot4 = var11;
                var2 = var14[var2];
                var13 = var4.bind(var3)(var2);
                var12 = var13.useStateFromStores;
                var2 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var2;
                var6 = new Array(1);
                var6[0] = var10;
                var2 = 7;
                var2 = var14[var2];
                var2 = var4.bind(var3)(var2);
                var15 = var2.areSettingsEqual;
                var17 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var4 = arg1;
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var1 = copyDataProperties(var6, var5);
                        var2 = var4.harmType;
                        var3 = var4.getProtoUserSettings;
                        var1 = _closure1_slot3;
                        var1 = var1.settings;
                        var1 = var3.bind(var4)(var1);
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = {};
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var19 = var13;
                var18 = var9;
                var16 = var6;
                var9 = var19[var12](var18, var17, var16, var15, var14);
                var _closure2_slot5 = var9;
                var6 = _closure1_slot2;
                var4 = var6.useMemo;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var7;
                var0 = function() { // Environment: var0
                    _fun72889: for (var _fun72889_ip = 0;;) switch (_fun72889_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun72889_ip = 93;
                                continue _fun72889
                            }
                        case 15:
                            var4 = _closure2_slot1;
                            var2 = _closure2_slot3;
                            var5 = var3 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun72889_ip = 41;
                                continue _fun72889
                            }
                        case 32:
                            var5 = _closure2_slot3;
                            var2 = var5.id;
                        case 41:
                            if (!(var4 !== var2)) {
                                _fun72889_ip = 93;
                                continue _fun72889
                            }
                        case 45:
                            var2 = _closure2_slot3;
                            if (!(var3 != var2)) {
                                _fun72889_ip = 93;
                                continue _fun72889
                            }
                        case 53:
                            var3 = _closure2_slot2;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                _fun72890: for (var _fun72890_ip = 0;;) switch (_fun72890_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = _closure2_slot5;
                                        var0 = var1.harmType;
                                        var5 = var3[var0];
                                        var3 = _closure2_slot4;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var4 = null;
                                        if (var3) {
                                            _fun72890_ip = 54;
                                            continue _fun72890
                                        }
                                    case 35:
                                        var3 = var1.getUserSettingsWithDefaults;
                                        var3 = var3.bind(var1)(var5);
                                        var2 = _closure2_slot4;
                                        var4 = var3[var2];
                                    case 54:
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 5;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var5.bind(var2)(var3);
                                        var2 = var3.shouldRedactForSettingValue;
                                        var2 = var2.bind(var3)(var4);
                                        var0 = null;
                                        if (!var2) {
                                            _fun72890_ip = 101;
                                            continue _fun72890
                                        }
                                    case 95:
                                        var0 = var1.harmType;
                                    case 101:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun72889_ip = 97;
                            continue _fun72889;
                        case 93:
                            var0 = new Array(0);
                        case 97:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var0, var2);
                var2 = var4.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun72884_ip = 315;
                    continue _fun72884
                }
            case 285:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var2 = var2.bind(var3)(var0);
                var0 = var2.contentHarmTypesToFlags;
                var0 = var0.bind(var2)(var4);
                _fun72884_ip = 347;
                continue _fun72884;
            case 315:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var0 = var1.NONE;
            case 347:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useEnabledHarmTypesBitmaskForChannelAndAuthorId = var3;
    var1 = function(arg0) { // Original name: useEnabledHarmTypesBitmaskForMessage, environment: var1
        _fun72892: for (var _fun72892_ip = 0;;) switch (_fun72892_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun72892_ip = 47;
                    continue _fun72892
                }
            case 9:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.getChannelIdAndAuthorIdFromMessage;
                var0 = var0.bind(var1)(var2);
                _fun72892_ip = 49;
                continue _fun72892;
            case 47:
                var0 = {};
            case 49:
                var3 = _closure1_slot7;
                var2 = var0.channelId;
                var1 = var0.authorId;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.useEnabledHarmTypesBitmaskForMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 1372, 3059, 1613, 4227, 566, 4237, 4228, 2]);