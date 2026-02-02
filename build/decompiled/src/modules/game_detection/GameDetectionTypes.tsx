// modules/game_detection/GameDetectionTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var0 = function() {
        _fun30594: for (var _fun30594_ip = 0;;) switch (_fun30594_ip) {
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
                _fun30594_ip = 74;
                continue _fun30594;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var11 = 0;
    var3 = var8[var11];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var10 = 1;
    var3 = var8[var10];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var9 = 2;
    var3 = var8[var9];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var8[var3];
    var5 = var4.bind(var0)(var3);
    var3 = 6;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.createExecutable;
    var _closure1_slot5 = var3;
    var4 = {};
    var4.LINKED = var10;
    var3 = 'LINKED';
    var4[var10] = var3;
    var4.OFFICIAL = var9;
    var3 = 'OFFICIAL';
    var4[var9] = var3;
    var3 = {};
    var6 = 'Erotic';
    var3.EROTIC = var6;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun30598: for (var _fun30598_ip = 0;;) switch (_fun30598_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot3;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun30598_ip = 65;
                        continue _fun30598
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun30598_ip = 103;
                    continue _fun30598;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var3.bind(var4)(var5, var0);
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.name;
                    var0.name = var3;
                    var3 = var1.description;
                    var0.description = var3;
                    var3 = var1.icon;
                    var0.icon = var3;
                    var3 = var1.icon_hash;
                    var0.icon_hash = var3;
                    var3 = var1.aliases;
                    if (var3) {
                        _fun30598_ip = 178;
                        continue _fun30598
                    }
                case 174:
                    var3 = new Array(0);
                case 178:
                    var0.aliases = var3;
                    var3 = var1.cover_image_hash;
                    var0.cover_image_hash = var3;
                    var4 = var1.executables;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun30598_ip = 212;
                        continue _fun30598
                    }
                case 208:
                    var4 = new Array(0);
                case 212:
                    var3 = var4.map;
                    var2 = _closure1_slot5;
                    var2 = var3.bind(var4)(var2);
                    var0.executables = var2;
                    var2 = var1.overlay;
                    if (var2) {
                        _fun30598_ip = 243;
                        continue _fun30598
                    }
                case 241:
                    var2 = false;
                case 243:
                    var0.overlay = var2;
                    var2 = var1.overlayWarn;
                    if (var2) {
                        _fun30598_ip = 260;
                        continue _fun30598
                    }
                case 258:
                    var2 = false;
                case 260:
                    var0.overlayWarn = var2;
                    var2 = var1.overlayCompatibilityHook;
                    if (var2) {
                        _fun30598_ip = 277;
                        continue _fun30598
                    }
                case 275:
                    var2 = false;
                case 277:
                    var0.overlayCompatibilityHook = var2;
                    var2 = var1.hook;
                    if (var2) {
                        _fun30598_ip = 294;
                        continue _fun30598
                    }
                case 292:
                    var2 = false;
                case 294:
                    var0.hook = var2;
                    var2 = var1.supportsOutOfProcessOverlay;
                    if (var2) {
                        _fun30598_ip = 311;
                        continue _fun30598
                    }
                case 309:
                    var2 = false;
                case 311:
                    var0.supportsOutOfProcessOverlay = var2;
                    var2 = var1.thirdPartySkus;
                    if (var2) {
                        _fun30598_ip = 330;
                        continue _fun30598
                    }
                case 326:
                    var2 = new Array(0);
                case 330:
                    var0.thirdPartySkus = var2;
                    var2 = var1.themes;
                    if (var2) {
                        _fun30598_ip = 349;
                        continue _fun30598
                    }
                case 345:
                    var2 = new Array(0);
                case 349:
                    var0.themes = var2;
                    var1 = var1.linkedApplications;
                    var0.linkedApplications = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getIconURL';
        var4.key = var0;
        var0 = function arg0() {
            _fun30599: for (var _fun30599_ip = 0;;) switch (_fun30599_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2.icon;
                    var1 = null;
                    var4 = var1 == var0;
                    var0 = null;
                    if (var4) {
                        _fun30599_ip = 109;
                        continue _fun30599
                    }
                case 22:
                    var7 = var2.id;
                    var6 = var2.icon;
                    var1 = var1 != var3;
                    var5 = '';
                    if (!var1) {
                        _fun30599_ip = 67;
                        continue _fun30599
                    }
                case 43:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '?size=';
                    var5 = var2.bind(var1)(var3);
                case 67:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var13 = 'https://cdn.discordapp.com/app-icons/';
                    var11 = '/';
                    var9 = '.png';
                    var12 = var7;
                    var10 = var6;
                    var8 = var5;
                    var0 = var13[var4](var12, var11, var10, var9, var8, var7);
                case 109:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasTheme';
        var4.key = var6;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.themes;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var1.bind(var0)(var5);
    var1 = {};
    var1.NONE = var11;
    var6 = 'NONE';
    var1[var11] = var6;
    var1.WINDOWED_ONLY = var10;
    var6 = 'WINDOWED_ONLY';
    var1[var10] = var6;
    var1.ALL = var9;
    var6 = 'ALL';
    var1[var9] = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_detection/GameDetectionTypes.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.GameLinkTypes = var4;
    var2.GameTheme = var3;
    var2.GameDetectionDebugLevel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3416, 2]);