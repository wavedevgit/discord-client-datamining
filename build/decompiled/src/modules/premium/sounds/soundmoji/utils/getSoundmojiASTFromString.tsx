// modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: getSoundmojiFromMessage, environment: var3
        _fun44044: for (var _fun44044_ip = 0;;) switch (_fun44044_ip) {
            case 0:
                var8 = arg1;
                var7 = arg2;
                var9 = arg3;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var5 = var0.SoundmojiRenderingExperiment;
                var4 = var5.getCurrentConfig;
                var1 = {};
                var0 = 'getSoundmojiASTFromString';
                var1.location = var0;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var5)(var1, var0);
                var0 = var0.enabled;
                if (!var0) {
                    _fun44044_ip = 139;
                    continue _fun44044
                }
            case 81:
                var1 = _closure1_slot3;
                var0 = var1.getSoundById;
                var0 = var0.bind(var1)(var9);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = arg0;
                var4 = var4.bind(var3)(var0, var1, var8);
                var5 = null;
                if (!(var5 != var7)) {
                    _fun44044_ip = 136;
                    continue _fun44044
                }
            case 132:
                if (!(var5 == var8)) {
                    _fun44044_ip = 155;
                    continue _fun44044
                }
            case 136:
                if (var4) {
                    _fun44044_ip = 141;
                    continue _fun44044
                }
            case 139:
                return var3;
            case 141:
                var6 = var5 != var0;
                var1 = undefined;
                if (!var6) {
                    _fun44044_ip = 153;
                    continue _fun44044
                }
            case 150:
                var1 = var0;
            case 153:
                return var1;
            case 155:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var6 = var6.bind(var3)(var1);
                var11 = arg4;
                var15 = undefined;
                var14 = var8;
                var13 = var7;
                var12 = var9;
                var1 = var15[var6](var14, var13, var12, var11, var10);
                if (!var4) {
                    _fun44044_ip = 244;
                    continue _fun44044
                }
            case 196:
                if (!(var5 == var1)) {
                    _fun44044_ip = 244;
                    continue _fun44044
                }
            case 200:
                var6 = _closure1_slot4;
                var4 = var6.getMessage;
                var4 = var4.bind(var6)(var8, var7);
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun44044_ip = 230;
                    continue _fun44044
                }
            case 225:
                var3 = var4.state;
            case 230:
                var2 = _closure1_slot5;
                var2 = var2.SENT;
                if (!(var3 === var2)) {
                    _fun44044_ip = 246;
                    continue _fun44044
                }
            case 244:
                return var1;
            case 246:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MessageStates;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Original name: getSoundmojiASTFromString, environment: var3
        _fun44045: for (var _fun44045_ip = 0;;) switch (_fun44045_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var0 = 1;
                var4 = var1[var0];
                var0 = 2;
                var3 = var1[var0];
                var9 = _closure1_slot6;
                var16 = var6.guildId;
                var15 = var6.channelId;
                var14 = var6.messageId;
                var12 = var6.soundboardSounds;
                var2 = undefined;
                var17 = undefined;
                var13 = var3;
                var10 = var17[var9](var16, var15, var14, var13, var12, var11);
                var9 = null;
                if (!(var9 != var10)) {
                    _fun44045_ip = 270;
                    continue _fun44045
                }
            case 68:
                var5 = var9 == var10;
                var0 = undefined;
                if (var5) {
                    _fun44045_ip = 82;
                    continue _fun44045
                }
            case 77:
                var0 = var10.name;
            case 82:
                var5 = var3;
                if (!(var9 != var0)) {
                    _fun44045_ip = 92;
                    continue _fun44045
                }
            case 89:
                var5 = var0;
            case 92:
                var0 = {};
                var7 = 'soundboard';
                var0.type = var7;
                var0.soundId = var3;
                var0.guildId = var4;
                var7 = var6.messageId;
                var0.messageId = var7;
                var6 = var6.channelId;
                var0.channelId = var6;
                var0.content = var5;
                var6 = var9 == var10;
                var5 = undefined;
                if (var6) {
                    _fun44045_ip = 148;
                    continue _fun44045
                }
            case 142:
                var5 = var10.emojiId;
            case 148:
                var0.emojiId = var5;
                var6 = var9 == var10;
                var5 = undefined;
                if (var6) {
                    _fun44045_ip = 168;
                    continue _fun44045
                }
            case 162:
                var5 = var10.emojiName;
            case 168:
                var0.emojiName = var5;
                var6 = var9 == var10;
                var5 = undefined;
                if (var6) {
                    _fun44045_ip = 188;
                    continue _fun44045
                }
            case 182:
                var5 = var10.emojiId;
            case 188:
                var6 = var9 != var5;
                var5 = undefined;
                if (!var6) {
                    _fun44045_ip = 263;
                    continue _fun44045
                }
            case 197:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var8 = var7.bind(var2)(var6);
                var7 = var8.getEmojiURL;
                var6 = {
                    'id': null,
                    'animated': false,
                    'size': 16
                };
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun44045_ip = 252;
                    continue _fun44045
                }
            case 246:
                var9 = var10.emojiId;
            case 252:
                var6.id = var9;
                var5 = var7.bind(var8)(var6);
            case 263:
                var0.emojiSrc = var5;
                return var0;
            case 270:
                var0 = {};
                var5 = 'text';
                var0.type = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.bind(var2)(var4, var3);
                var0.content = var1;
                return var0;
        }
    };
    var2.default = var3;
    var3 = /^<sound:(\d+):(\d+)>/;
    var2.soundmojiRawFormatRegex = var3;
    var2.getSoundmojiFromMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3916, 4213, 660, 4758, 4759, 4760, 4762, 1417, 2]);