// modules/video_calls/native/components/RevealProvider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function arg0, arg1() {
        _fun63361: for (var _fun63361_ip = 0;;) switch (_fun63361_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 5;
                var4 = var11[var2];
                var6 = undefined;
                var10 = var3.bind(var6)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getKey;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var9 = var9.bind(var10)(var7, var4);
                var10 = _closure1_slot1;
                var4 = 6;
                var4 = var11[var4];
                var4 = var10.bind(var6)(var4);
                var7 = var4.bind(var6)(var8);
                var4 = _closure1_slot9;
                var4 = var4.bind(var6)();
                var2 = var11[var2];
                var13 = var3.bind(var6)(var2);
                var12 = var13.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var3 = var12.bind(var13)(var3, var2);
                var2 = 7;
                var2 = var11[var2];
                var10 = var10.bind(var6)(var2);
                var2 = var8.id;
                var2 = var10.bind(var6)(var2);
                if (var5) {
                    _fun63361_ip = 155;
                    continue _fun63361
                }
            case 152:
                var5 = var9;
            case 155:
                if (var5) {
                    _fun63361_ip = 161;
                    continue _fun63361
                }
            case 158:
                var5 = var7;
            case 161:
                if (var5) {
                    _fun63361_ip = 170;
                    continue _fun63361
                }
            case 164:
                var7 = null;
                var5 = var7 === var8;
            case 170:
                if (var5) {
                    _fun63361_ip = 176;
                    continue _fun63361
                }
            case 173:
                var5 = var4;
            case 176:
                if (var5) {
                    _fun63361_ip = 182;
                    continue _fun63361
                }
            case 179:
                var5 = var3;
            case 182:
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                var3 = !var3;
                var4 = !var3;
                if (var3) {
                    _fun63361_ip = 228;
                    continue _fun63361
                }
            case 225:
                var4 = var2;
            case 228:
                var _closure2_slot1 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.reveal = var2;
                    var1 = _closure2_slot1;
                    var0.prefersDeferringSystemGestures = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var3);
    var0 = 0;
    var8 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var8 = var3.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var3 = 1;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.useChannelCallStore;
    var _closure1_slot6 = var5;
    var5 = var3.focusTimeout;
    var _closure1_slot7 = var5;
    var5 = var3.resetFocusTimer;
    var _closure1_slot8 = var5;
    var3 = var3.useIsVoiceChatFocused;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot10 = var5;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var5 = var8.createContext;
    var3 = {};
    var3.reveal = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/RevealProvider.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun63365: for (var _fun63365_ip = 0;;) switch (_fun63365_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var6 = var0.children;
                var13 = var0.showStatus;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun63365_ip = 29;
                    continue _fun63365
                }
            case 27:
                var13 = false;
            case 29:
                var0 = var0.useThemedBarStyle;
                if (!(var0 === var3)) {
                    _fun63365_ip = 41;
                    continue _fun63365
                }
            case 39:
                var0 = false;
            case 41:
                var _closure2_slot0 = var3;
                var7 = _closure1_slot6;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.focus;
                    return var0;
                };
                var11 = var7.bind(var3)(var2);
                _closure2_slot0 = var11;
                var2 = _closure1_slot13;
                var4 = var2.bind(var3)(var11, var4);
                var9 = var4.reveal;
                var8 = var4.prefersDeferringSystemGestures;
                var10 = _closure1_slot3;
                var7 = var10.useEffect;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var1
                    _fun63367: for (var _fun63367_ip = 0;;) switch (_fun63367_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun63367_ip = 29;
                                continue _fun63367
                            }
                        case 13:
                            var2 = _closure1_slot7;
                            var1 = var2.stop;
                            var1 = var1.bind(var2)();
                            _fun63367_ip = 39;
                            continue _fun63367;
                        case 29:
                            var1 = _closure1_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var10)(var1, var2);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = 'light-content';
                var11 = var2;
                if (!var0) {
                    _fun63365_ip = 169;
                    continue _fun63365
                }
            case 152:
                var0 = 'dark';
                var11 = var2;
                if (!(var0 !== var1)) {
                    _fun63365_ip = 169;
                    continue _fun63365
                }
            case 163:
                var11 = 'dark-content';
            case 169:
                var2 = _closure1_slot11;
                var0 = _closure1_slot12;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var10 = _closure1_slot10;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 10;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = !var9;
                if (!var12) {
                    _fun63365_ip = 224;
                    continue _fun63365
                }
            case 221:
                var12 = !var13;
            case 224:
                var4.hidden = var12;
                var12 = true;
                var4.animated = var12;
                var4.barStyle = var11;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 11;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = !var9;
                if (!var9) {
                    _fun63365_ip = 294;
                    continue _fun63365
                }
            case 291:
                var9 = !var8;
            case 294:
                var5.prefersHidden = var9;
                var5.prefersDeferringSystemGestures = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.RevealContext = var3;
    var2.useRevealProviderValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3142, 3520, 7953, 33, 566, 7955, 7960, 478, 3247, 7961, 7963, 2]);