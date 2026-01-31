// modules/guilds_bar/native/GuildsBarDnDStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot3 = var3;
    var3 = {
        'mode': null,
        'initialX': 0,
        'initialY': 0,
        'absoluteX': 0,
        'absoluteY': 0
    };
    var _closure1_slot4 = var3;
    var4 = -1;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createWithEqualityFn;
    var4 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var5 = undefined;
        var0.dragSpecs = var5;
        var0.overSpecs = var5;
        var0.dropSpecs = var5;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 2;
        var2 = var6[var3];
        var10 = var4.bind(var5)(var2);
        var9 = var10.makeMutable;
        var2 = 0;
        var8 = {
            'min': 0,
            'max': 0
        };
        var8 = var9.bind(var10)(var8);
        var0.dragRegion = var8;
        var8 = var6[var3];
        var9 = var4.bind(var5)(var8);
        var8 = var9.makeMutable;
        var7 = _closure1_slot4;
        var7 = var8.bind(var9)(var7);
        var0.gestureState = var7;
        var7 = var6[var3];
        var9 = var4.bind(var5)(var7);
        var8 = var9.makeMutable;
        var7 = false;
        var7 = var8.bind(var9)(var7);
        var0.dragDropInProgress = var7;
        var7 = var6[var3];
        var9 = var4.bind(var5)(var7);
        var8 = var9.makeMutable;
        var7 = {
            'start': 0,
            'end': 0
        };
        var7 = var8.bind(var9)(var7);
        var0.listInsets = var7;
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.makeMutable;
        var3 = var3.bind(var4)(var2);
        var0.scrollPosition = var3;
        var0.windowSize = var2;
        var2 = function(arg0) { // Original name: setStateShallow, environment: var1
            _fun100771: for (var _fun100771_ip = 0;;) switch (_fun100771_ip) {
                case 0:
                    var10 = arg0;
                    var _closure3_slot0 = var10;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var9 = var2.bind(var0)();
                    var _closure3_slot1 = var9;
                    var7 = var10;
                    for (var4 in var7)
                        case 37: {
                            case 46: var2 = var4;
                            var3 = var9[var2];
                            var2 = var10[var2];
                            if (var3 === var2) {
                                _fun100771_ip = 37;
                                continue _fun100771
                            }
                            case 61: var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 3;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot0;
                                var1 = {};
                                var4 = _closure3_slot1;
                                var5 = var1;
                                var3 = copyDataProperties(var5, var4);
                                var4 = _closure3_slot0;
                                var5 = var1;
                                var0 = copyDataProperties(var5, var4);
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                case 106:
                    return var0;
            }
        };
        var0.setStateShallow = var2;
        var2 = function(arg0) { // Original name: dropStart, environment: var1
            _fun100773: for (var _fun100773_ip = 0;;) switch (_fun100773_ip) {
                case 0:
                    var8 = arg0;
                    var _closure3_slot0 = var8;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var4 = var2.dropSpecs;
                    var9 = var2.gestureState;
                    var _closure3_slot1 = var9;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.addBreadcrumb;
                    var3 = {
                        'category': 'GuildsBarGesture',
                        'message': 'dropStart started'
                    };
                    var7 = {};
                    var7.newDropSpec = var8;
                    var7.dropSpecs = var4;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var7.gestureState = var8;
                    var3.data = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun100773_ip = 206;
                        continue _fun100773
                    }
                case 124:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.batchUpdates;
                    var3 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.dropSpecs = var0;
                        var0 = undefined;
                        var1.dragSpecs = var0;
                        var1.overSpecs = var0;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var4 = _closure1_slot5;
                    var4 = var5.bind(var0)(var4);
                    var4 = var3.setTimeout;
                    var3 = function() { // Environment: var1
                        _fun100775: for (var _fun100775_ip = 0;;) switch (_fun100775_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var1 = var2.get;
                                var3 = var1.bind(var2)();
                                var2 = var3.mode;
                                var1 = 'drag';
                                if (!(var1 === var2)) {
                                    _fun100775_ip = 66;
                                    continue _fun100775
                                }
                            case 29:
                                var2 = _closure3_slot1;
                                var1 = var2.set;
                                var0 = {};
                                var6 = var0;
                                var5 = var3;
                                var3 = copyDataProperties(var6, var5);
                                var4 = null;
                                var3 = 'mode';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                            case 66:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 0;
                    var1 = var4.bind(var0)(var3, var1);
                    _closure1_slot5 = var1;
                    return var0;
                case 206:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = 'GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress';
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.dropStart = var2;
        var1 = function() { // Original name: dropComplete, environment: var1
            _fun100776: for (var _fun100776_ip = 0;;) switch (_fun100776_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var3 = var1.gestureState;
                    var4 = var1.dragDropInProgress;
                    var6 = var1.dropSpecs;
                    var1 = var1.dragSpecs;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var5 = var8[var5];
                    var8 = var7.bind(var0)(var5);
                    var7 = var8.addBreadcrumb;
                    var5 = {
                        'category': 'GuildsBarGesture',
                        'message': 'dropComplete started'
                    };
                    var9 = {};
                    var10 = var3.get;
                    var10 = var10.bind(var3)();
                    var9.gestureState = var10;
                    var9.dropSpecs = var6;
                    var9.dragSpecs = var1;
                    var5.data = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun100776_ip = 250;
                        continue _fun100776
                    }
                case 124:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var6 = var8[var6];
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.batchUpdates;
                    var6 = function() { // Environment: var6
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = undefined;
                        var1.dropSpecs = var0;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                    var6 = global;
                    var6 = var6.clearTimeout;
                    var2 = _closure1_slot5;
                    var2 = var6.bind(var0)(var2);
                    if (!(var5 == var1)) {
                        _fun100776_ip = 197;
                        continue _fun100776
                    }
                case 185:
                    var2 = var4.set;
                    var1 = false;
                    var1 = var2.bind(var4)(var1);
                case 197:
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var2 = var4.mode;
                    var1 = 'drag';
                    if (!(var1 === var2)) {
                        _fun100776_ip = 250;
                        continue _fun100776
                    }
                case 219:
                    var2 = var3.set;
                    var1 = {};
                    var12 = var1;
                    var11 = var4;
                    var4 = copyDataProperties(var12, var11);
                    var4 = 'mode';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                case 250:
                    return var0;
            }
        };
        var0.dropComplete = var1;
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarDnDStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.INITIAL_GESTURE_STATE = var3;
    var3 = function(arg0, arg1) { // Original name: useItemDragState, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot6;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.shallow;
        var0 = function(arg0) { // Environment: var0
            _fun100779: for (var _fun100779_ip = 0;;) switch (_fun100779_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.dragSpecs;
                    var10 = var0.overSpecs;
                    var8 = var0.dropSpecs;
                    var1 = var0.dragDropInProgress;
                    var4 = null;
                    if (!(var4 == var7)) {
                        _fun100779_ip = 40;
                        continue _fun100779
                    }
                case 33:
                    if (!(var4 != var8)) {
                        _fun100779_ip = 364;
                        continue _fun100779
                    }
                case 40:
                    var0 = _closure2_slot1;
                    var2 = !var0;
                    if (!var2) {
                        _fun100779_ip = 137;
                        continue _fun100779
                    }
                case 53:
                    var0 = var4 == var7;
                    var3 = undefined;
                    if (var0) {
                        _fun100779_ip = 73;
                        continue _fun100779
                    }
                case 62:
                    var0 = var7.node;
                    var3 = var0.id;
                case 73:
                    var0 = _closure2_slot0;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun100779_ip = 103;
                        continue _fun100779
                    }
                case 84:
                    var9 = var4 == var10;
                    var3 = undefined;
                    if (var9) {
                        _fun100779_ip = 99;
                        continue _fun100779
                    }
                case 93:
                    var3 = var10.node;
                case 99:
                    var0 = var4 != var3;
                case 103:
                    if (var0) {
                        _fun100779_ip = 134;
                        continue _fun100779
                    }
                case 106:
                    var3 = var4 == var8;
                    var6 = undefined;
                    if (var3) {
                        _fun100779_ip = 126;
                        continue _fun100779
                    }
                case 115:
                    var3 = var8.dragNode;
                    var6 = var3.id;
                case 126:
                    var3 = _closure2_slot0;
                    var0 = var6 === var3;
                case 134:
                    var2 = var0;
                case 137:
                    var0 = _closure2_slot1;
                    var3 = !var0;
                    if (!var3) {
                        _fun100779_ip = 209;
                        continue _fun100779
                    }
                case 147:
                    var0 = var4 == var10;
                    var9 = undefined;
                    if (var0) {
                        _fun100779_ip = 167;
                        continue _fun100779
                    }
                case 156:
                    var0 = var10.node;
                    var9 = var0.id;
                case 167:
                    var0 = _closure2_slot0;
                    var0 = var9 === var0;
                    if (var0) {
                        _fun100779_ip = 206;
                        continue _fun100779
                    }
                case 178:
                    var9 = var4 == var8;
                    var6 = undefined;
                    if (var9) {
                        _fun100779_ip = 198;
                        continue _fun100779
                    }
                case 187:
                    var9 = var8.overNode;
                    var6 = var9.id;
                case 198:
                    var5 = _closure2_slot0;
                    var0 = var6 === var5;
                case 206:
                    var3 = var0;
                case 209:
                    var0 = {};
                    var0.isDragTarget = var2;
                    if (var2) {
                        _fun100779_ip = 224;
                        continue _fun100779
                    }
                case 219:
                    var2 = undefined;
                    if (!var3) {
                        _fun100779_ip = 244;
                        continue _fun100779
                    }
                case 224:
                    var6 = var4 == var8;
                    var5 = 'dropping';
                    if (!var6) {
                        _fun100779_ip = 241;
                        continue _fun100779
                    }
                case 237:
                    var5 = 'dragging';
                case 241:
                    var2 = var5;
                case 244:
                    var0.dragState = var2;
                    var2 = undefined;
                    if (!var3) {
                        _fun100779_ip = 293;
                        continue _fun100779
                    }
                case 254:
                    var9 = var4 == var8;
                    var5 = undefined;
                    if (var9) {
                        _fun100779_ip = 269;
                        continue _fun100779
                    }
                case 263:
                    var5 = var8.overState;
                case 269:
                    if (!(var4 == var5)) {
                        _fun100779_ip = 290;
                        continue _fun100779
                    }
                case 273:
                    var11 = var4 == var10;
                    var9 = undefined;
                    if (var11) {
                        _fun100779_ip = 287;
                        continue _fun100779
                    }
                case 282:
                    var9 = var10.state;
                case 287:
                    var5 = var9;
                case 290:
                    var2 = var5;
                case 293:
                    var0.overState = var2;
                    var2 = 0;
                    if (!var3) {
                        _fun100779_ip = 352;
                        continue _fun100779
                    }
                case 303:
                    var9 = var4 == var8;
                    var3 = undefined;
                    if (var9) {
                        _fun100779_ip = 318;
                        continue _fun100779
                    }
                case 312:
                    var3 = var8.itemSize;
                case 318:
                    if (!(var4 == var3)) {
                        _fun100779_ip = 340;
                        continue _fun100779
                    }
                case 322:
                    var8 = var4 == var7;
                    var6 = undefined;
                    if (var8) {
                        _fun100779_ip = 337;
                        continue _fun100779
                    }
                case 331:
                    var6 = var7.itemSize;
                case 337:
                    var3 = var6;
                case 340:
                    var4 = var4 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun100779_ip = 352;
                        continue _fun100779
                    }
                case 349:
                    var2 = var3;
                case 352:
                    var0.itemSize = var2;
                    var0.dragDropInProgress = var1;
                    return var0;
                case 364:
                    var0 = {};
                    var2 = false;
                    var0.isDragTarget = var2;
                    var2 = undefined;
                    var0.dragState = var2;
                    var0.overState = var2;
                    var2 = 0;
                    var0.itemSize = var2;
                    var0.dragDropInProgress = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useItemDragState = var3;
    var1 = function(arg0) { // Original name: useFolderBGHeightOffset, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun100781: for (var _fun100781_ip = 0;;) switch (_fun100781_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.dragSpecs;
                    var4 = var0.overSpecs;
                    var0 = var0.dropSpecs;
                    var1 = null;
                    var2 = var1 != var0;
                    var0 = 0;
                    if (var2) {
                        _fun100781_ip = 275;
                        continue _fun100781
                    }
                case 35:
                    var2 = var1 == var4;
                    var0 = 0;
                    if (var2) {
                        _fun100781_ip = 275;
                        continue _fun100781
                    }
                case 47:
                    var1 = var1 == var3;
                    var0 = 0;
                    if (var1) {
                        _fun100781_ip = 275;
                        continue _fun100781
                    }
                case 59:
                    var2 = var4.state;
                    var1 = 'self';
                    var0 = 0;
                    if (!(var1 !== var2)) {
                        _fun100781_ip = 275;
                        continue _fun100781
                    }
                case 77:
                    var1 = var3.node;
                    var2 = var1.type;
                    var1 = _closure1_slot3;
                    var1 = var1.GUILD;
                    var0 = 0;
                    if (!(var2 === var1)) {
                        _fun100781_ip = 275;
                        continue _fun100781
                    }
                case 110:
                    var1 = var3.node;
                    var2 = var1.parentId;
                    var1 = _closure2_slot0;
                    if (!(var2 !== var1)) {
                        _fun100781_ip = 197;
                        continue _fun100781
                    }
                case 133:
                    var1 = var4.node;
                    var2 = var1.parentId;
                    var1 = _closure2_slot0;
                    if (!(var2 !== var1)) {
                        _fun100781_ip = 189;
                        continue _fun100781
                    }
                case 153:
                    var1 = var4.node;
                    var7 = var1.id;
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if (!(var7 === var2)) {
                        _fun100781_ip = 195;
                        continue _fun100781
                    }
                case 174:
                    var7 = var4.state;
                    var2 = 'after';
                    var1 = 0;
                    if (!(var2 === var7)) {
                        _fun100781_ip = 195;
                        continue _fun100781
                    }
                case 189:
                    var1 = var3.itemSize;
                case 195:
                    _fun100781_ip = 272;
                    continue _fun100781;
                case 197:
                    var2 = var4.node;
                    var8 = var2.parentId;
                    var7 = _closure2_slot0;
                    var2 = 0;
                    if (!(var8 !== var7)) {
                        _fun100781_ip = 269;
                        continue _fun100781
                    }
                case 219:
                    var7 = var4.node;
                    var7 = var7.id;
                    var5 = _closure2_slot0;
                    if (!(var7 === var5)) {
                        _fun100781_ip = 253;
                        continue _fun100781
                    }
                case 238:
                    var5 = var4.state;
                    var4 = 'after';
                    var2 = 0;
                    if (!(var4 !== var5)) {
                        _fun100781_ip = 269;
                        continue _fun100781
                    }
                case 253:
                    var4 = var3.itemSize;
                    var3 = -1;
                    var2 = var3 * var4;
                case 269:
                    var1 = var2;
                case 272:
                    var0 = var1;
                case 275:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useFolderBGHeightOffset = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4340, 797, 3679, 802, 1207, 3035, 2]);