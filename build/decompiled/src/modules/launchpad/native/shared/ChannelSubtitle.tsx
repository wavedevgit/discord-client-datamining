// modules/launchpad/native/shared/ChannelSubtitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun110116: for (var _fun110116_ip = 0;;) switch (_fun110116_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.muted;
                var2 = var0.connected;
                var11 = var0.channelId;
                var10 = var0.guildId;
                var6 = var0.subtitle;
                var5 = var0.textProps;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.getChannelSubtitleData;
                var12 = var0.bind(var3)(var6);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun110116_ip = 244;
                    continue _fun110116
                }
            case 82:
                var6 = var12.type;
                var3 = 'voice';
                var8 = var3 === var6;
                if (!var8) {
                    _fun110116_ip = 101;
                    continue _fun110116
                }
            case 98:
                var8 = var2;
            case 101:
                var3 = _closure1_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var15 = var1;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var5 = 6;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.renderMessagePreviewMarkup;
                var5 = {};
                var12 = var12.subtitle;
                var5.content = var12;
                var12 = var0 != var9;
                if (!var12) {
                    _fun110116_ip = 182;
                    continue _fun110116
                }
            case 179:
                var12 = var9;
            case 182:
                var5.muted = var12;
                var5.channelId = var11;
                var5.guildId = var10;
                var8 = !var8;
                var5.disableAnimatedEmoji = var8;
                var8 = 'text-subtle';
                if (!var9) {
                    _fun110116_ip = 218;
                    continue _fun110116
                }
            case 212:
                var8 = 'text-muted';
            case 218:
                var5.color = var8;
                var6 = var6.bind(var7)(var5);
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 244:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/ChannelSubtitle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110117: for (var _fun110117_ip = 0;;) switch (_fun110117_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.subtitle;
                var9 = var0.muted;
                var11 = var0.channelId;
                var10 = var0.guildId;
                var8 = var0.connected;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun110117_ip = 240;
                    continue _fun110117
                }
            case 40:
                var6 = {
                    'variant': null,
                    'color': 'text-muted',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 1.75
                };
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var5 = undefined;
                var1 = var3.bind(var5)(var1);
                var1 = var1.bind(var5)();
                var1 = var1.messagePreview;
                var1 = var1.text;
                var1 = var1.variant;
                var6.variant = var1;
                var3 = 1;
                var1 = {};
                if (var9) {
                    _fun110117_ip = 117;
                    continue _fun110117
                }
            case 113:
                var3 = _closure1_slot3;
            case 117:
                var1.opacity = var3;
                var6.style = var1;
                var3 = 'string';
                var1 = typeof var7;
                if (!(var3 !== var1)) {
                    _fun110117_ip = 182;
                    continue _fun110117
                }
            case 136:
                var4 = _closure1_slot4;
                var3 = _closure1_slot5;
                var1 = {};
                var1.channelId = var11;
                var1.guildId = var10;
                var1.subtitle = var7;
                var1.muted = var9;
                var1.connected = var8;
                var1.textProps = var6;
                var1 = var4.bind(var5)(var3, var1);
                _fun110117_ip = 238;
                continue _fun110117;
            case 182:
                var4 = _closure1_slot4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 4;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {};
                var13 = var2;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var6 = 'children';
                var2[var6] = var7;
                var1 = var4.bind(var5)(var3, var2);
            case 238:
                return var1;
            case 240:
                return var0;
        }
    };
    var2.renderChannelSubtitle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8803, 33, 14166, 3941, 13407, 8801, 2]);