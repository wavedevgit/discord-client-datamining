// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var1 = _closure1_slot5;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun101662: for (var _fun101662_ip = 0;;) switch (_fun101662_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun101662_ip = 169;
                        continue _fun101662
                    }
                case 16:
                    var4 = _closure1_slot4;
                    var1 = var4.getAllApplicationStreamsForChannel;
                    var0 = _closure2_slot0;
                    var5 = var1.bind(var4)(var0);
                    var0 = var5.length;
                    var4 = 0;
                    var0 = var0 > var4;
                    if (!var0) {
                        _fun101662_ip = 75;
                        continue _fun101662
                    }
                case 52:
                    var7 = var5.find;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot5;
                        var1 = var2.isFriend;
                        var0 = arg0;
                        var0 = var0.ownerId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var7.bind(var5)(var1);
                    if (!(var2 == var1)) {
                        _fun101662_ip = 160;
                        continue _fun101662
                    }
                case 75:
                    var8 = _closure1_slot3;
                    var7 = var8.getEmbeddedActivitiesForChannel;
                    var6 = _closure2_slot0;
                    var7 = var7.bind(var8)(var6);
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var8.bind(var6)(var3);
                    var3 = var3.bind(var6)(var7);
                    if (!(var2 == var3)) {
                        _fun101662_ip = 148;
                        continue _fun101662
                    }
                case 125:
                    if (var0) {
                        _fun101662_ip = 132;
                        continue _fun101662
                    }
                case 128:
                    var0 = {};
                    _fun101662_ip = 146;
                    continue _fun101662;
                case 132:
                    var2 = {};
                    var4 = var5[var4];
                    var2.stream = var4;
                    var0 = var2;
                case 146:
                    _fun101662_ip = 158;
                    continue _fun101662;
                case 148:
                    var2 = {};
                    var2.activity = var3;
                    var0 = var2;
                case 158:
                    return var0;
                case 160:
                    var0 = {};
                    var0.stream = var1;
                    return var0;
                case 169:
                    var0 = {};
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun101664: for (var _fun101664_ip = 0;;) switch (_fun101664_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildId;
                var9 = var0.index;
                var14 = var0.voiceState;
                var6 = var0.fullwidth;
                var12 = var0.userId;
                var11 = var0.cardKey;
                var5 = var0.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101664_ip = 50;
                    continue _fun101664
                }
            case 48:
                var5 = false;
            case 50:
                var2 = _closure1_slot7;
                var0 = var14.channelId;
                var0 = var2.bind(var4)(var0);
                var7 = var0.stream;
                var13 = var0.activity;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun101664_ip = 220;
                    continue _fun101664
                }
            case 88:
                if (!(var0 == var13)) {
                    _fun101664_ip = 149;
                    continue _fun101664
                }
            case 92:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 7;
                var0 = var10[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.index = var9;
                var0.voiceState = var14;
                var0.fullwidth = var6;
                var0.guildId = var8;
                var0.panelVariant = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun101664_ip = 218;
                continue _fun101664;
            case 149:
                var10 = _closure1_slot6;
                var3 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 6;
                var2 = var15[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.index = var9;
                var2.voiceState = var14;
                var2.fullwidth = var6;
                var2.guildId = var8;
                var2.activity = var13;
                var2.userId = var12;
                var2.cardKey = var11;
                var2.panelVariant = var5;
                var0 = var10.bind(var4)(var3, var2);
            case 218:
                _fun101664_ip = 285;
                continue _fun101664;
            case 220:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.index = var9;
                var9 = var7.ownerId;
                var1.userId = var9;
                var1.guildId = var8;
                var1.stream = var7;
                var1.fullwidth = var6;
                var1.panelVariant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 285:
                return var0;
        }
    };
    var2.default = var3;
    var2.useCallActivityData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 3716, 3102, 33, 13264, 13275, 13276, 632, 13254, 2]);