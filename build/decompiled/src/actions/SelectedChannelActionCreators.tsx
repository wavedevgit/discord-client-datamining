// actions/SelectedChannelActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.ME;
    var _closure1_slot7 = var6;
    var6 = var1.PopoutWindowKeys;
    var _closure1_slot8 = var6;
    var1 = var1.Routes;
    var _closure1_slot9 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun38727: for (var _fun38727_ip = 0;;) switch (_fun38727_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var9 = var0.channelId;
                var8 = var0.messageId;
                var7 = var0.jumpType;
                var6 = var0.preserveDrawerState;
                var5 = var0.source;
                var4 = var0.isInitialSetup;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var12 = 'CHANNEL_SELECT';
                var1.type = var12;
                var12 = _closure1_slot7;
                var10 = null;
                if (!(var11 !== var12)) {
                    _fun38727_ip = 94;
                    continue _fun38727
                }
            case 91:
                var10 = var11;
            case 94:
                var1.guildId = var10;
                var1.channelId = var9;
                var1.messageId = var8;
                var1.jumpType = var7;
                var1.preserveDrawerState = var6;
                var1.source = var5;
                var1.isInitialSetup = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.selectChannel = var6;
    var6 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.transitionTo;
        var6 = _closure1_slot9;
        var5 = var6.CHANNEL;
        var4 = _closure1_slot7;
        var1 = arg0;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.selectPrivateChannel = var6;
    var6 = function arg0() {
        _fun38729: for (var _fun38729_ip = 0;;) switch (_fun38729_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var5 = arguments[2];
                var4 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun38729_ip = 20;
                    continue _fun38729
                }
            case 18:
                var6 = false;
            case 20:
                if (!(var5 === var0)) {
                    _fun38729_ip = 26;
                    continue _fun38729
                }
            case 24:
                var5 = false;
            case 26:
                if (!(var4 === var0)) {
                    _fun38729_ip = 32;
                    continue _fun38729
                }
            case 30:
                var4 = {};
            case 32:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var9 = var2.bind(var3)(var7);
                var2 = null;
                var8 = var2 == var9;
                var3 = undefined;
                if (var8) {
                    _fun38729_ip = 70;
                    continue _fun38729
                }
            case 60:
                var8 = var9.getGuildId;
                var3 = var8.bind(var9)();
            case 70:
                if (!(var2 != var7)) {
                    _fun38729_ip = 78;
                    continue _fun38729
                }
            case 74:
                if (!(var2 == var3)) {
                    _fun38729_ip = 110;
                    continue _fun38729
                }
            case 78:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var8 = 6;
                var8 = var10[var8];
                var9 = var9.bind(var0)(var8);
                var8 = var9.endHangout;
                var8 = var8.bind(var9)();
                _fun38729_ip = 142;
                continue _fun38729;
            case 110:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var8 = 6;
                var8 = var10[var8];
                var9 = var9.bind(var0)(var8);
                var8 = var9.startHangout;
                var8 = var8.bind(var9)(var3, var7);
            case 142:
                var9 = _closure1_slot6;
                var8 = var9.isSupported;
                var8 = var8.bind(var9)();
                if (!var8) {
                    _fun38729_ip = 235;
                    continue _fun38729
                }
            case 159:
                if (!(var2 != var7)) {
                    _fun38729_ip = 187;
                    continue _fun38729
                }
            case 163:
                var8 = _closure1_slot6;
                var2 = var8.getMediaEngine;
                var8 = var2.bind(var8)();
                var2 = var8.interact;
                var2 = var2.bind(var8)();
            case 187:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 7;
                var1 = var8[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.selectVoiceChannelAdditional;
                var16 = var2;
                var15 = var7;
                var14 = var3;
                var13 = var6;
                var12 = var5;
                var11 = var4;
                var1 = var16[var1](var15, var14, var13, var12, var11, var10);
            case 235:
                return var0;
        }
    };
    var1.selectVoiceChannel = var6;
    var3 = function() {
        _fun38730: for (var _fun38730_ip = 0;;) switch (_fun38730_ip) {
            case 0:
                var5 = this;
                var2 = _closure1_slot4;
                var0 = var2.getRemoteSessionId;
                var3 = var0.bind(var2)();
                var4 = null;
                if (!(var4 != var3)) {
                    _fun38730_ip = 59;
                    continue _fun38730
                }
            case 26:
                var6 = _closure1_slot2;
                var2 = _closure1_slot3;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var0 = var2.remoteDisconnect;
                var0 = var0.bind(var2)(var3);
            case 59:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isVoicePanelEnabled;
                var2 = var2.bind(var3)();
                var3 = var5.selectVoiceChannel;
                var3 = var3.bind(var5)(var4);
                if (var2) {
                    _fun38730_ip = 148;
                    continue _fun38730
                }
            case 105:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.close;
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_CALL_POPOUT;
                var1 = var2.bind(var3)(var1);
                _fun38730_ip = 148;
                continue _fun38730;
            case 148:
                return var0;
        }
    };
    var1.disconnect = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/SelectedChannelActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3519, 1372, 3476, 660, 806, 1220, 4232, 4233, 8316, 7902, 12248, 2]);