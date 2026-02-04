// modules/media_panel/native/MediaPlaybackPanelController.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaPlaybackPanelModes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MorphablePanelModes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPanelController.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var0 = function() {
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var0 = 9;
            var3 = var12[var0];
            var1 = undefined;
            var6 = var11.bind(var1)(var3);
            var4 = var6.useSharedValue;
            var15 = _closure1_slot8;
            var3 = var15.PIP;
            var10 = var4.bind(var6)(var3);
            var _closure3_slot0 = var10;
            var3 = var12[var0];
            var6 = var11.bind(var1)(var3);
            var4 = var6.useSharedValue;
            var13 = 0;
            var3 = {
                'height': 0,
                'width': 0
            };
            var8 = var4.bind(var6)(var3);
            var3 = var12[var0];
            var6 = var11.bind(var1)(var3);
            var4 = var6.useSharedValue;
            var3 = {
                'x': 4294967295,
                'y': 4294967295
            };
            var6 = var4.bind(var6)(var3);
            var3 = var12[var0];
            var7 = var11.bind(var1)(var3);
            var4 = var7.useSharedValue;
            var3 = _closure1_slot5;
            var3 = var3.useReducedMotion;
            var7 = var4.bind(var7)(var3);
            var _closure3_slot1 = var7;
            var14 = _closure1_slot4;
            var9 = var14.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() { // Environment: var5
                var3 = function() {
                    _fun111838: for (var _fun111838_ip = 0;;) switch (_fun111838_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var2 = var0.useReducedMotion;
                            var3 = _closure3_slot1;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (!(var2 !== var1)) {
                                _fun111838_ip = 47;
                                continue _fun111838
                            }
                        case 33:
                            var1 = _closure3_slot1;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure4_slot0 = var3;
                var2 = _closure1_slot5;
                var1 = var2.addReactChangeListener;
                var1 = var1.bind(var2)(var3);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.removeReactChangeListener;
                    var0 = _closure4_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                return var0;
            };
            var3 = var9.bind(var14)(var3, var4);
            var3 = var12[var0];
            var9 = var11.bind(var1)(var3);
            var4 = var9.useSharedValue;
            var3 = true;
            var3 = var4.bind(var9)(var3);
            var4 = var12[var0];
            var9 = var11.bind(var1)(var4);
            var4 = var9.useSharedValue;
            var4 = var4.bind(var9)(var13);
            var9 = var12[var0];
            var13 = var11.bind(var1)(var9);
            var9 = var13.useDerivedValue;
            var5 = function() {
                _fun111840: for (var _fun111840_ip = 0;;) switch (_fun111840_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var2 = var0.bind(var1)();
                        var0 = _closure1_slot8;
                        var0 = var0.PIP;
                        if (!(var2 !== var0)) {
                            _fun111840_ip = 45;
                            continue _fun111840
                        }
                    case 33:
                        var0 = _closure1_slot10;
                        var0 = var0.UNDEFINED;
                        _fun111840_ip = 55;
                        continue _fun111840;
                    case 45:
                        var1 = _closure1_slot10;
                        var0 = var1.PIP;
                    case 55:
                        return var0;
                }
            };
            var14 = {};
            var14.mode = var10;
            var14.MediaPlaybackPanelModes = var15;
            var15 = _closure1_slot10;
            var14.MorphablePanelModes = var15;
            var5.__closure = var14;
            var14 = 10375114450450.0;
            var5.__workletHash = var14;
            var14 = _closure1_slot12;
            var5.__initData = var14;
            var9 = var9.bind(var13)(var5);
            var13 = _closure1_slot1;
            var2 = 10;
            var2 = var12[var2];
            var2 = var13.bind(var1)(var2);
            var5 = var2.bind(var1)();
            var2 = 11;
            var2 = var12[var2];
            var2 = var13.bind(var1)(var2);
            var5 = var2.bind(var1)(var5);
            var2 = var12[var0];
            var14 = var11.bind(var1)(var2);
            var13 = var14.useSharedValue;
            var2 = false;
            var2 = var13.bind(var14)(var2);
            var0 = var12[var0];
            var11 = var11.bind(var1)(var0);
            var1 = var11.useSharedValue;
            var0 = {
                'x': 0,
                'y': 0,
                'gestureActive': false
            };
            var1 = var1.bind(var11)(var0);
            var0 = {};
            var0.mode = var10;
            var0.morphablePanelMode = var9;
            var0.wrapperDimensions = var8;
            var0.useReducedMotion = var7;
            var0.pipState = var6;
            var0.pipAvoidanceSpecs = var5;
            var0.scrollPosition = var4;
            var0.canShowPIP = var3;
            var0.lockScrolling = var2;
            var0.wrapperOffset = var1;
            return var0;
        };
        var3 = undefined;
        var0 = var0.bind(var3)();
        var6 = var0.mode;
        var _closure2_slot0 = var6;
        var2 = var0.morphablePanelMode;
        var _closure2_slot1 = var2;
        var2 = var0.wrapperDimensions;
        var _closure2_slot2 = var2;
        var2 = var0.useReducedMotion;
        var _closure2_slot3 = var2;
        var2 = var0.pipState;
        var _closure2_slot4 = var2;
        var2 = var0.pipAvoidanceSpecs;
        var _closure2_slot5 = var2;
        var2 = var0.scrollPosition;
        var _closure2_slot6 = var2;
        var13 = var0.canShowPIP;
        var _closure2_slot7 = var13;
        var2 = var0.lockScrolling;
        var _closure2_slot8 = var2;
        var0 = var0.wrapperOffset;
        var _closure2_slot9 = var0;
        var9 = _closure1_slot4;
        var2 = var9.useRef;
        var2 = var2.bind(var9)(var3);
        var _closure2_slot10 = var2;
        var5 = var9.useState;
        var2 = var6.get;
        var2 = var2.bind(var6)();
        var5 = var5.bind(var9)(var2);
        var7 = _closure1_slot3;
        var2 = 2;
        var6 = var7.bind(var3)(var5, var2);
        var2 = 0;
        var11 = var6[var2];
        var _closure2_slot11 = var11;
        var5 = 1;
        var6 = var6[var5];
        var _closure2_slot12 = var6;
        var10 = var9.useCallback;
        var8 = new Array(2);
        var8[0] = var11;
        var8[1] = var6;
        var6 = function() { // Environment: var1
            _fun111841: for (var _fun111841_ip = 0;;) switch (_fun111841_ip) {
                case 0:
                    var3 = _closure2_slot11;
                    var0 = _closure1_slot8;
                    var0 = var0.PIP;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun111841_ip = 80;
                        continue _fun111841
                    }
                case 27:
                    var4 = _closure2_slot12;
                    var2 = _closure1_slot8;
                    var2 = var2.DISMISSED;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.userDidClosePip;
                    var1 = var1.bind(var2)();
                    var0 = true;
                case 80:
                    return var0;
            }
        };
        var6 = var10.bind(var9)(var6, var8);
        var _closure2_slot13 = var6;
        var8 = _closure1_slot7;
        var6 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.voicePanelsPIP;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var12 = var8.bind(var3)(var6);
        var _closure2_slot14 = var12;
        var10 = _closure1_slot0;
        var6 = _closure1_slot2;
        var8 = 13;
        var8 = var6[var8];
        var14 = var10.bind(var3)(var8);
        var11 = var14.useStateFromStores;
        var8 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() { // Environment: var1
            var2 = _closure1_slot6;
            var1 = var2.getActivityPanelMode;
            var1 = var1.bind(var2)();
            var0 = _closure1_slot9;
            var0 = var0.PIP;
            var0 = var1 === var0;
            return var0;
        };
        var8 = var11.bind(var14)(var10, var8);
        var _closure2_slot15 = var8;
        var11 = var9.useLayoutEffect;
        var10 = new Array(3);
        var10[0] = var13;
        var10[1] = var12;
        var10[2] = var8;
        var8 = function() { // Environment: var1
            _fun111844: for (var _fun111844_ip = 0;;) switch (_fun111844_ip) {
                case 0:
                    var2 = _closure2_slot7;
                    var1 = var2.set;
                    var0 = _closure2_slot14;
                    var0 = !var0;
                    if (!var0) {
                        _fun111844_ip = 29;
                        continue _fun111844
                    }
                case 22:
                    var3 = _closure2_slot15;
                    var0 = !var3;
                case 29:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var11.bind(var9)(var8, var10);
        var8 = var9.useState;
        var1 = function() { // Environment: var1
            var0 = {};
            var2 = _closure2_slot0;
            var0.mode = var2;
            var2 = _closure2_slot12;
            var0.setMode = var2;
            var2 = _closure2_slot1;
            var0.morphablePanelMode = var2;
            var2 = _closure2_slot2;
            var0.wrapperDimensions = var2;
            var2 = _closure2_slot3;
            var0.useReducedMotion = var2;
            var2 = _closure2_slot4;
            var0.pipState = var2;
            var2 = _closure2_slot5;
            var0.pipAvoidanceSpecs = var2;
            var2 = _closure2_slot10;
            var0.dismissToPipGestureRef = var2;
            var2 = _closure2_slot13;
            var0.dismissPanel = var2;
            var2 = _closure2_slot6;
            var0.scrollPosition = var2;
            var2 = _closure2_slot7;
            var0.canShowPIP = var2;
            var2 = _closure2_slot8;
            var0.lockScrolling = var2;
            var1 = _closure2_slot9;
            var0.wrapperOffset = var1;
            return var0;
        };
        var1 = var8.bind(var9)(var1);
        var1 = var7.bind(var3)(var1, var5);
        var5 = var1[var2];
        var2 = _closure1_slot11;
        var1 = _closure1_slot1;
        var0 = 14;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 1371, 7880, 12851, 7917, 11820, 33, 3720, 1568, 14200, 12850, 566, 14374, 2]);