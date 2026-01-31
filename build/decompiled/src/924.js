// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var1;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var5 = var3.bind(var0)(var1);
    var3 = var5.defineIntegration;
    var1 = function(arg0) { // Environment: var4
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'ThirdPartyErrorsFilter';
        var0.name = var2;
        var2 = function arg0() {
            var3 = arg0;
            var _closure3_slot0 = var3;
            var4 = var3.on;
            var2 = 'beforeEnvelope';
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.forEachEnvelopeItem;
                var2 = arg0;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun9655: for (var _fun9655_ip = 0;;) switch (_fun9655_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'event';
                            var0 = arg1;
                            if (!(var1 === var0)) {
                                _fun9655_ip = 90;
                                continue _fun9655
                            }
                        case 14:
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var0 = var0.bind(var1)(var2);
                            var4 = undefined;
                            var1 = undefined;
                            if (!var0) {
                                _fun9655_ip = 46;
                                continue _fun9655
                            }
                        case 39:
                            var0 = 1;
                            var1 = var2[var0];
                        case 46:
                            if (!var1) {
                                _fun9655_ip = 90;
                                continue _fun9655
                            }
                        case 49:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 2;
                            var0 = var5[var0];
                            var3 = var3.bind(var4)(var0);
                            var0 = var3.stripMetadataFromStackFrames;
                            var0 = var0.bind(var3)(var1);
                            var0 = 1;
                            var2[var0] = var1;
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.on;
            var1 = 'applyFrameMetadata';
            var0 = function(arg0) { // Environment: var0
                _fun9656: for (var _fun9656_ip = 0;;) switch (_fun9656_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3.type;
                        if (var0) {
                            _fun9656_ip = 71;
                            continue _fun9656
                        }
                    case 11:
                        var1 = _closure3_slot0;
                        var0 = var1.getOptions;
                        var0 = var0.bind(var1)();
                        var2 = var0.stackParser;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var0 = var1.addMetadataToStackFrames;
                        var0 = var0.bind(var1)(var2, var3);
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.setup = var2;
        var1 = function arg0() {
            _fun9657: for (var _fun9657_ip = 0;;) switch (_fun9657_ip) {
                case 0:
                    var0 = arg0;
                    var3 = function arg0() {
                        _fun9658: for (var _fun9658_ip = 0;;) switch (_fun9658_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 3;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.getFramesFromEvent;
                                var2 = arg0;
                                var3 = var3.bind(var4)(var2);
                                if (var3) {
                                    _fun9658_ip = 46;
                                    continue _fun9658
                                }
                            case 44:
                                return var1;
                            case 46:
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    _fun9659: for (var _fun9659_ip = 0;;) switch (_fun9659_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = var3.filename;
                                            var1 = !var0;
                                            var0 = !var1;
                                            if (var1) {
                                                _fun9659_ip = 40;
                                                continue _fun9659
                                            }
                                        case 18:
                                            var2 = var3.lineno;
                                            var1 = null;
                                            if (!(var1 == var2)) {
                                                _fun9659_ip = 36;
                                                continue _fun9659
                                            }
                                        case 30:
                                            var2 = var3.colno;
                                        case 36:
                                            var0 = var1 != var2;
                                        case 40:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    _fun9660: for (var _fun9660_ip = 0;;) switch (_fun9660_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = var2.module_metadata;
                                            if (var0) {
                                                _fun9660_ip = 20;
                                                continue _fun9660
                                            }
                                        case 14:
                                            var0 = new Array(0);
                                            _fun9660_ip = 74;
                                            continue _fun9660;
                                        case 20:
                                            var3 = global;
                                            var4 = var3.Object;
                                            var3 = var4.keys;
                                            var2 = var2.module_metadata;
                                            var4 = var3.bind(var4)(var2);
                                            var3 = var4.filter;
                                            var2 = function(arg0) { // Environment: var1
                                                var2 = arg0;
                                                var1 = var2.startsWith;
                                                var0 = _closure1_slot2;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var3 = var3.bind(var4)(var2);
                                            var2 = var3.map;
                                            var1 = function(arg0) { // Environment: var1
                                                var2 = arg0;
                                                var1 = var2.slice;
                                                var0 = _closure1_slot2;
                                                var0 = var0.length;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var0 = var2.bind(var3)(var1);
                                        case 74:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var5 = var3.bind(var1)(var0);
                    if (!var5) {
                        _fun9657_ip = 168;
                        continue _fun9657
                    }
                case 23:
                    var3 = _closure2_slot0;
                    var4 = var3.behaviour;
                    var3 = 'drop-error-if-contains-third-party-frames';
                    if (!(var3 !== var4)) {
                        _fun9657_ip = 70;
                        continue _fun9657
                    }
                case 46:
                    var4 = _closure2_slot0;
                    var7 = var4.behaviour;
                    var4 = 'every';
                    var6 = 'apply-tag-if-contains-third-party-frames';
                    if (!(var6 === var7)) {
                        _fun9657_ip = 74;
                        continue _fun9657
                    }
                case 70:
                    var4 = 'some';
                case 74:
                    var4 = var5[var4];
                    var2 = function(arg0) { // Environment: var2
                        var2 = arg0;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot0;
                            var2 = var0.filterKeys;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    if (!var2) {
                        _fun9657_ip = 168;
                        continue _fun9657
                    }
                case 91:
                    var2 = _closure2_slot0;
                    var2 = var2.behaviour;
                    if (!(var3 !== var2)) {
                        _fun9657_ip = 170;
                        continue _fun9657
                    }
                case 105:
                    var1 = _closure2_slot0;
                    var2 = var1.behaviour;
                    var1 = 'drop-error-if-exclusively-contains-third-party-frames';
                    if (!(var1 !== var2)) {
                        _fun9657_ip = 170;
                        continue _fun9657
                    }
                case 125:
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var3 = var0.tags;
                    var2 = {};
                    var1 = true;
                    var2.third_party_code = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var1, var3, var2);
                    var0.tags = var1;
                case 168:
                    return var0;
                case 170:
                    var0 = null;
                    return var0;
            }
        };
        var0.processEvent = var1;
        return var0;
    };
    var1 = var3.bind(var5)(var1);
    var3 = '_sentryBundlerPluginAppKey:';
    var _closure1_slot2 = var3;
    var2.thirdPartyErrorFilterIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [881, 862, 911, 832]);