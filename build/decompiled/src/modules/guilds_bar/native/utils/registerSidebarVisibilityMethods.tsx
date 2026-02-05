// modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.setGetVisibleChannelIds;
    var _closure1_slot0 = var6;
    var3 = var3.setGetVisibleGuildIds;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun101289: for (var _fun101289_ip = 0;;) switch (_fun101289_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.current;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun101289_ip = 41;
                    continue _fun101289
                }
            case 20:
                var2 = _closure1_slot1;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    var0 = _closure2_slot0;
                    var2 = var0.getItems;
                    var4 = var2.bind(var0)();
                    var2 = var0.getScrollPosition;
                    var2 = var2.bind(var0)();
                    var _closure3_slot0 = var2;
                    var0 = var0.containerSize;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot2;
                    var2 = var3.getGuilds;
                    var2 = var2.bind(var3)();
                    var _closure3_slot2 = var2;
                    var2 = _closure1_slot3;
                    var0 = var2.getGuildsTree;
                    var0 = var0.bind(var2)();
                    var _closure3_slot3 = var0;
                    var0 = global;
                    var2 = var0.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot4 = var2;
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun101291: for (var _fun101291_ip = 0;;) switch (_fun101291_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure3_slot3;
                                var2 = var4.getNode;
                                var0 = var1.recyclerKey;
                                var2 = var2.bind(var4)(var0);
                                var0 = undefined;
                                if (!(var0 !== var2)) {
                                    _fun101291_ip = 93;
                                    continue _fun101291
                                }
                            case 33:
                                var4 = var1.layoutStart;
                                var1 = var1.layoutSize;
                                var5 = var4 + var1;
                                var1 = _closure3_slot0;
                                var1 = var5 >= var1;
                                if (!var1) {
                                    _fun101291_ip = 76;
                                    continue _fun101291
                                }
                            case 60:
                                var5 = _closure3_slot0;
                                var3 = _closure3_slot1;
                                var3 = var5 + var3;
                                var1 = var4 <= var3;
                            case 76:
                                if (!var1) {
                                    _fun101291_ip = 93;
                                    continue _fun101291
                                }
                            case 79:
                                var1 = function(arg0) { // Environment: var1
                                    _fun101292: for (var _fun101292_ip = 0;;) switch (_fun101292_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.type;
                                            var1 = _closure1_slot4;
                                            var1 = var1.FOLDER;
                                            if (!(var2 !== var1)) {
                                                _fun101292_ip = 35;
                                                continue _fun101292
                                            }
                                        case 25:
                                            var2 = new Array(1);
                                            var2[0] = var0;
                                            _fun101292_ip = 40;
                                            continue _fun101292;
                                        case 35:
                                            var2 = var0.children;
                                        case 40:
                                            var1 = var2.forEach;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun101293: for (var _fun101293_ip = 0;;) switch (_fun101293_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var2 = var0.type;
                                                        var1 = _closure1_slot4;
                                                        var1 = var1.GUILD;
                                                        var1 = var2 === var1;
                                                        if (!var1) {
                                                            _fun101293_ip = 44;
                                                            continue _fun101293
                                                        }
                                                    case 28:
                                                        var3 = var0.id;
                                                        var2 = _closure3_slot2;
                                                        var1 = var3 in var2;
                                                    case 44:
                                                        if (!var1) {
                                                            _fun101293_ip = 69;
                                                            continue _fun101293
                                                        }
                                                    case 47:
                                                        var2 = _closure3_slot4;
                                                        var1 = var2.add;
                                                        var0 = var0.id;
                                                        var0 = var1.bind(var2)(var0);
                                                    case 69:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var1.bind(var0)(var2);
                            case 93:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
            case 41:
                var0 = undefined;
                return var0;
        }
    };
    var2.registerGuildVisibilityMethod = var3;
    var1 = function arg0, arg1() {
        _fun101294: for (var _fun101294_ip = 0;;) switch (_fun101294_ip) {
            case 0:
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg0;
                var2 = var1.current;
                var _closure2_slot1 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun101294_ip = 48;
                    continue _fun101294
                }
            case 27:
                var2 = _closure1_slot0;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    var0 = _closure2_slot1;
                    var2 = var0.getItems;
                    var3 = var2.bind(var0)();
                    var2 = var0.getScrollPosition;
                    var2 = var2.bind(var0)();
                    var _closure3_slot0 = var2;
                    var0 = var0.containerSize;
                    var _closure3_slot1 = var0;
                    var0 = new Array(0);
                    var _closure3_slot2 = var0;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun101296: for (var _fun101296_ip = 0;;) switch (_fun101296_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var4 = undefined;
                            case 11: // try_start_0 // try_start_1
                                var8 = _closure2_slot0;
                                var7 = var8.getChannelFromSectionRow;
                                var3 = var1;
                                var6 = var3.section;
                                var3 = var3.item;
                                var6 = var7.bind(var8)(var6, var3);
                                var5 = var6;
                                var3 = null;
                                var6 = var3 == var6;
                                var3 = undefined;
                                if (var6) {
                                    _fun101296_ip = 62;
                                    continue _fun101296
                                }
                            case 57:
                                var3 = var5.channel;
                            case 62:
                                var2 = var3;
                            case 65: // try_end0
                                _fun101296_ip = 69;
                                continue _fun101296;
                            case 67: // catch_target0
                                CatchBlockStart(arg_register = 3);
                            case 69: // try_end1
                                var5 = var2;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun101296_ip = 160;
                                    continue _fun101296
                                }
                            case 78:
                                var5 = var1.layoutStart;
                                var4 = var5;
                                var1 = var1.layoutSize;
                                var6 = var5 + var1;
                                var5 = _closure3_slot0;
                                var5 = var6 >= var5;
                                var3 = var5;
                                if (!var5) {
                                    _fun101296_ip = 133;
                                    continue _fun101296
                                }
                            case 114:
                                var5 = var4;
                                var6 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var4 = var6 + var4;
                                var3 = var5 <= var4;
                            case 133:
                                if (!var3) {
                                    _fun101296_ip = 158;
                                    continue _fun101296
                                }
                            case 136:
                                var4 = _closure3_slot2;
                                var3 = var4.push;
                                var1 = var2;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1);
                            case 158:
                                return var0;
                            case 160:
                                return var0;
                            case 162: // catch_target1
                                CatchBlockStart(arg_register = 1);
                                var3 = var2;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun101296_ip = 175;
                                    continue _fun101296
                                }
                            case 173:
                                throw var1;
                            case 175:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var2.registerFastListChannelVisibilityMethod = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5314, 1410, 4376, 2]);