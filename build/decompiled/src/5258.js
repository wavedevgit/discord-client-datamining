// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun47140: for (var _fun47140_ip = 0;;) switch (_fun47140_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = this;
            var1 = var0;
            if (!var0) {
                _fun47140_ip = 26;
                continue _fun47140
            }
        case 20:
            var1 = var0.__createBinding;
        case 26:
            if (var1) {
                _fun47140_ip = 60;
                continue _fun47140
            }
        case 29:
            var4 = global;
            var4 = var4.Object;
            var4 = var4.create;
            if (var4) {
                _fun47140_ip = 52;
                continue _fun47140
            }
        case 45:
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                _fun47143: for (var _fun47143_ip = 0;;) switch (_fun47143_ip) {
                    case 0:
                        var2 = arg2;
                        var3 = arg3;
                        var0 = undefined;
                        if (!(var0 === var3)) {
                            _fun47143_ip = 15;
                            continue _fun47143
                        }
                    case 12:
                        var3 = var2;
                    case 15:
                        var1 = arg1;
                        var2 = var1[var2];
                        var1 = arg0;
                        var1[var3] = var2;
                        return var0;
                }
            };
            _fun47140_ip = 57;
            continue _fun47140;
        case 52:
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                _fun47141: for (var _fun47141_ip = 0;;) switch (_fun47141_ip) {
                    case 0:
                        var2 = arg2;
                        var5 = arg3;
                        var0 = arg1;
                        var _closure2_slot0 = var0;
                        var _closure2_slot1 = var2;
                        var0 = undefined;
                        if (!(var0 === var5)) {
                            _fun47141_ip = 28;
                            continue _fun47141
                        }
                    case 25:
                        var5 = var2;
                    case 28:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.defineProperty;
                        var2 = {};
                        var6 = true;
                        var2.enumerable = var6;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2.get = var1;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var5, var2);
                        return var0;
                }
            };
        case 57:
            var1 = var4;
        case 60:
            var _closure1_slot0 = var1;
            var1 = var0;
            if (!var0) {
                _fun47140_ip = 76;
                continue _fun47140
            }
        case 70:
            var1 = var0.__setModuleDefault;
        case 76:
            if (var1) {
                _fun47140_ip = 110;
                continue _fun47140
            }
        case 79:
            var4 = global;
            var4 = var4.Object;
            var4 = var4.create;
            if (var4) {
                _fun47140_ip = 102;
                continue _fun47140
            }
        case 95:
            var4 = function(arg0, arg1) { // Environment: var3
                var1 = arg1;
                var0 = arg0;
                var0.default = var1;
                var0 = undefined;
                return var0;
            };
            _fun47140_ip = 107;
            continue _fun47140;
        case 102:
            var4 = function(arg0, arg1) { // Environment: var3
                var0 = global;
                var4 = var0.Object;
                var3 = var4.defineProperty;
                var2 = {};
                var0 = true;
                var2.enumerable = var0;
                var0 = arg1;
                var2.value = var0;
                var1 = arg0;
                var0 = 'default';
                var0 = var3.bind(var4)(var1, var0, var2);
                var0 = undefined;
                return var0;
            };
        case 107:
            var1 = var4;
        case 110:
            var _closure1_slot1 = var1;
            var4 = var0;
            if (!var4) {
                _fun47140_ip = 126;
                continue _fun47140
            }
        case 120:
            var4 = var0.__importStar;
        case 126:
            if (var4) {
                _fun47140_ip = 134;
                continue _fun47140
            }
        case 129:
            var4 = function(arg0) { // Environment: var3
                _fun47146: for (var _fun47146_ip = 0;;) switch (_fun47146_ip) {
                    case 0:
                        var0 = arg0;
                        if (!var0) {
                            _fun47146_ip = 15;
                            continue _fun47146
                        }
                    case 6:
                        var1 = var0.__esModule;
                        if (var1) {
                            _fun47146_ip = 125;
                            continue _fun47146
                        }
                    case 15:
                        var1 = {};
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun47146_ip = 108;
                            continue _fun47146
                        }
                    case 23:
                        var9 = var0;
                        var4 = undefined;
                        var3 = global;
                        var2 = 'default';
                        for (var6 in var9)
                            case 45: {
                                case 54: var12 = var6;
                                var11 = var2 !== var12;
                                if (!var11) {
                                    _fun47146_ip = 92;
                                    continue _fun47146
                                }
                                case 64: var13 = var3.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var11 = var13.bind(var14)(var0, var12);
                                case 92: if (!var11) {
                                    _fun47146_ip = 45;
                                    continue _fun47146
                                }
                                case 95: var11 = _closure1_slot0;
                                var11 = var11.bind(var4)(var1, var0, var12);
                                _fun47146_ip = 45;
                                continue _fun47146;
                            }
                    case 108:
                        var3 = _closure1_slot1;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var1, var0);
                        return var1;
                    case 125:
                        return var0;
                }
            };
        case 134:
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var0 = undefined;
            var2.Clipboard = var0;
            var1 = 0;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var1 = var4.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = {};
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.getString;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.getString = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.getStrings;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.getStrings = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.getImagePNG;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.getImagePNG = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.getImageJPG;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.getImageJPG = var4;
            var4 = function arg0() {
                _fun47151: for (var _fun47151_ip = 0;;) switch (_fun47151_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var1 = var1.Platform;
                        var2 = var1.OS;
                        var1 = 'ios';
                        if (!(var1 === var2)) {
                            _fun47151_ip = 50;
                            continue _fun47151
                        }
                    case 27:
                        var0 = _closure1_slot3;
                        var2 = var0.default;
                        var1 = var2.setImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.setImage = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.getImage;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.getImage = var4;
            var4 = function arg0() {
                var0 = _closure1_slot3;
                var2 = var0.default;
                var1 = var2.setString;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1.setString = var4;
            var4 = function arg0() {
                var0 = _closure1_slot3;
                var2 = var0.default;
                var1 = var2.setStrings;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1.setStrings = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.hasString;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.hasString = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.default;
                var0 = var1.hasImage;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1.hasImage = var4;
            var4 = function() {
                _fun47157: for (var _fun47157_ip = 0;;) switch (_fun47157_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var1 = var1.Platform;
                        var2 = var1.OS;
                        var1 = 'ios';
                        if (!(var1 !== var2)) {
                            _fun47157_ip = 31;
                            continue _fun47157
                        }
                    case 27:
                        var1 = undefined;
                        return var1;
                    case 31:
                        var0 = _closure1_slot3;
                        var1 = var0.default;
                        var0 = var1.hasURL;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var1.hasURL = var4;
            var4 = function() {
                _fun47158: for (var _fun47158_ip = 0;;) switch (_fun47158_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var1 = var1.Platform;
                        var2 = var1.OS;
                        var1 = 'ios';
                        if (!(var1 !== var2)) {
                            _fun47158_ip = 31;
                            continue _fun47158
                        }
                    case 27:
                        var1 = undefined;
                        return var1;
                    case 31:
                        var0 = _closure1_slot3;
                        var1 = var0.default;
                        var0 = var1.hasNumber;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var1.hasNumber = var4;
            var4 = function() {
                _fun47159: for (var _fun47159_ip = 0;;) switch (_fun47159_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var1 = var1.Platform;
                        var2 = var1.OS;
                        var1 = 'ios';
                        if (!(var1 !== var2)) {
                            _fun47159_ip = 31;
                            continue _fun47159
                        }
                    case 27:
                        var1 = undefined;
                        return var1;
                    case 31:
                        var0 = _closure1_slot3;
                        var1 = var0.default;
                        var0 = var1.hasWebURL;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var1.hasWebURL = var4;
            var4 = function arg0() {
                var0 = _closure1_slot3;
                var2 = var0.addListener;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.addListener = var4;
            var3 = function() {
                var0 = _closure1_slot3;
                var1 = var0.removeAllListeners;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1.removeAllListeners = var3;
            var2.Clipboard = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5259]);