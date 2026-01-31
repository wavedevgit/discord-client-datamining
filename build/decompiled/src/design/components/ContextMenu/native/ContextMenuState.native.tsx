// design/components/ContextMenu/native/ContextMenuState.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var6 = 0;
    var4 = var9[var6];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var5 = 1;
    var3 = var9[var5];
    var7 = var8.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = null;
        var0.menu = var1;
        return var0;
    };
    var4 = var4.bind(var7)(var3);
    var _closure1_slot3 = var4;
    var3 = {};
    var7 = 'function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}';
    var3.code = var7;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun46389: for (var _fun46389_ip = 0;;) switch (_fun46389_ip) {
                case 0:
                    var11 = arg0;
                    var10 = arg1;
                    var0 = arg2;
                    var2 = var0.pan;
                    var1 = var0.itemMeasurements;
                    var4 = var0.activeIndex;
                    var0 = var2.set;
                    var0 = var0.bind(var2)(var10);
                    var0 = var1.get;
                    var9 = var0.bind(var1)();
                    var0 = var9.length;
                    var8 = 0;
                    var0 = var8 < var0;
                    var5 = 4;
                    var7 = 2;
                    var2 = 3;
                    var6 = 1;
                    var3 = 0;
                    if (!var0) {
                        _fun46389_ip = 146;
                        continue _fun46389
                    }
                case 74:
                    var0 = var3 + var7;
                    var12 = var9[var0];
                    var0 = var3 + var2;
                    var14 = var9[var0];
                    var0 = var3 + var6;
                    var13 = var9[var0];
                    var0 = var3 + var8;
                    var1 = var9[var0];
                    var0 = var3;
                    if (!(var10 >= var13)) {
                        _fun46389_ip = 133;
                        continue _fun46389
                    }
                case 113:
                    var13 = var13 + var14;
                    if (!(var10 <= var13)) {
                        _fun46389_ip = 133;
                        continue _fun46389
                    }
                case 121:
                    if (!(var11 >= var1)) {
                        _fun46389_ip = 133;
                        continue _fun46389
                    }
                case 125:
                    var1 = var1 + var12;
                    if (!(!(var11 <= var1))) {
                        _fun46389_ip = 166;
                        continue _fun46389
                    }
                case 133:
                    var3 = var0 + var5;
                    var1 = var9.length;
                    if (var3 < var1) {
                        _fun46389_ip = 74;
                        continue _fun46389
                    }
                case 146:
                    var3 = var4.set;
                    var1 = -1;
                    var1 = var3.bind(var4)(var1);
                    var1 = undefined;
                    return var1;
                case 166:
                    var3 = var0 / var5;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var0 = var0 !== var3;
                    if (!var0) {
                        _fun46389_ip = 269;
                        continue _fun46389
                    }
                case 186:
                    var1 = var4.set;
                    var1 = var1.bind(var4)(var3);
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var2 = var1[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.runOnJS;
                    var2 = var1[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.triggerHapticFeedback;
                    var2 = var6.bind(var7)(var2);
                    var1 = var1[var5];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_LIGHT;
                    var0 = var2.bind(var3)(var1);
                case 269:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = {
            'INDEX_BOUNDS_WIDTH_OFFSET': 2,
            'INDEX_BOUNDS_HEIGHT_OFFSET': 3,
            'INDEX_BOUNDS_PAGE_Y_OFFSET': 1,
            'INDEX_BOUNDS_PAGE_X_OFFSET': 0,
            'INDEX_BOUNDS_OFFSET': 4
        };
        var4 = 3;
        var6 = 4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var7 = var3[var4];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.runOnJS;
        var2.runOnJS = var7;
        var7 = var3[var6];
        var7 = var5.bind(var4)(var7);
        var7 = var7.triggerHapticFeedback;
        var2.triggerHapticFeedback = var7;
        var3 = var3[var6];
        var3 = var5.bind(var4)(var3);
        var3 = var3.HapticFeedbackTypes;
        var2.HapticFeedbackTypes = var3;
        var0.__closure = var2;
        var2 = 10158111154044.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'design/components/ContextMenu/native/ContextMenuState.native.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 4;
    var2.INDEX_BOUNDS_OFFSET = var7;
    var2.INDEX_BOUNDS_PAGE_X_OFFSET = var6;
    var2.INDEX_BOUNDS_PAGE_Y_OFFSET = var5;
    var5 = 2;
    var2.INDEX_BOUNDS_WIDTH_OFFSET = var5;
    var5 = 3;
    var2.INDEX_BOUNDS_HEIGHT_OFFSET = var5;
    var2.ContextMenuStore = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.menu = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showContextMenu = var4;
    var4 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun46394: for (var _fun46394_ip = 0;;) switch (_fun46394_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.menu;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun46394_ip = 25;
                            continue _fun46394
                        }
                    case 15:
                        var1 = {};
                        var1.menu = var2;
                        var0 = var1;
                    case 25:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideContextMenu = var4;
    var4 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.menu;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useActiveContextMenu = var4;
    var2.updateContextMenuState = var3;
    var3 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 3;
        var4 = var8[var2];
        var3 = undefined;
        var6 = var7.bind(var3)(var4);
        var5 = var6.useSharedValue;
        var4 = -1;
        var6 = var5.bind(var6)(var4);
        var _closure2_slot0 = var6;
        var5 = var8[var2];
        var10 = var7.bind(var3)(var5);
        var9 = var10.useSharedValue;
        var5 = new Array(0);
        var5 = var9.bind(var10)(var5);
        var _closure2_slot1 = var5;
        var2 = var8[var2];
        var3 = var7.bind(var3)(var2);
        var2 = var3.useSharedValue;
        var4 = var2.bind(var3)(var4);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot0;
            var0.pan = var2;
            var2 = _closure2_slot1;
            var0.itemMeasurements = var2;
            var1 = _closure2_slot2;
            var0.activeIndex = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useContextMenuState = var3;
    var1 = function arg0() {
        _fun46399: for (var _fun46399_ip = 0;;) switch (_fun46399_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.activeIndex;
                var3 = var0.pan;
                var2 = var0.itemMeasurements;
                var0 = var4.set;
                var1 = -1;
                var0 = var0.bind(var4)(var1);
                var0 = var3.set;
                var0 = var0.bind(var3)(var1);
                var0 = var2.get;
                var0 = var0.bind(var2)();
                var1 = var0.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun46399_ip = 81;
                    continue _fun46399
                }
            case 67:
                var1 = var2.set;
                var0 = new Array(0);
                var0 = var1.bind(var2)(var0);
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var2.resetContextMenuState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 629, 802, 3679, 3238, 2]);