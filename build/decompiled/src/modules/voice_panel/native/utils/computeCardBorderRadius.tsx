// modules/voice_panel/native/utils/computeCardBorderRadius.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var9 = var3.VoicePanelModes;
    var _closure1_slot0 = var9;
    var7 = var3.DEFAULT_BORDER_RADIUS;
    var _closure1_slot1 = var7;
    var8 = var3.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot2 = var8;
    var3 = {};
    var6 = 'function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return DEFAULT_BORDER_RADIUS;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return DEFAULT_BORDER_RADIUS;}';
    var3.code = var6;
    var1 = function arg0() {
        _fun111214: for (var _fun111214_ip = 0;;) switch (_fun111214_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.id;
                var5 = var0.mode;
                var2 = var0.focused;
                var1 = var0.isSelf;
                var4 = _closure1_slot0;
                var4 = var4.PANEL;
                if (!(var5 !== var4)) {
                    _fun111214_ip = 68;
                    continue _fun111214
                }
            case 42:
                var4 = _closure1_slot0;
                var4 = var4.PIP;
                if (!(var5 !== var4)) {
                    _fun111214_ip = 62;
                    continue _fun111214
                }
            case 56:
                var4 = _closure1_slot1;
                _fun111214_ip = 66;
                continue _fun111214;
            case 62:
                var4 = _closure1_slot2;
            case 66:
                return var4;
            case 68:
                var4 = null;
                if (!(var4 != var2)) {
                    _fun111214_ip = 81;
                    continue _fun111214
                }
            case 74:
                if (!(var2 !== var3)) {
                    _fun111214_ip = 93;
                    continue _fun111214
                }
            case 78:
                if (var1) {
                    _fun111214_ip = 87;
                    continue _fun111214
                }
            case 81:
                var1 = _closure1_slot1;
                return var1;
            case 87:
                var0 = _closure1_slot2;
                return var0;
            case 93:
                var0 = 0;
                return var0;
        }
    };
    var6 = {};
    var6.VoicePanelModes = var9;
    var6.DEFAULT_BORDER_RADIUS_PIP = var8;
    var6.DEFAULT_BORDER_RADIUS = var7;
    var1.__closure = var6;
    var6 = 10862086044187.0;
    var1.__workletHash = var6;
    var1.__initData = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/computeCardBorderRadius.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11803, 2]);