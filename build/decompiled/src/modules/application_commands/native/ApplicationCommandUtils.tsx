// modules/application_commands/native/ApplicationCommandUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BuiltInSectionId;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        _fun76005: for (var _fun76005_ip = 0;;) switch (_fun76005_ip) {
            case 0:
                var7 = arg0;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun76005_ip = 306;
                    continue _fun76005
                }
            case 12:
                var3 = var7.id;
                var2 = _closure1_slot5;
                var2 = var2.BUILT_IN;
                if (!(var2 !== var3)) {
                    _fun76005_ip = 259;
                    continue _fun76005
                }
            case 37:
                var2 = _closure1_slot5;
                var2 = var2.FRECENCY;
                if (!(var2 !== var3)) {
                    _fun76005_ip = 212;
                    continue _fun76005
                }
            case 54:
                var3 = var7.type;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var2 = var2.ApplicationCommandSectionType;
                var2 = var2.APPLICATION;
                if (!(var3 !== var2)) {
                    _fun76005_ip = 119;
                    continue _fun76005
                }
            case 97:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var2 = var3.bind(var6)(var2);
                _fun76005_ip = 210;
                continue _fun76005;
            case 119:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var5 = var4.bind(var6)(var3);
                var4 = var5.getApplicationIconSource;
                var3 = {};
                var8 = var7.id;
                var3.id = var8;
                var8 = var7.icon;
                var3.icon = var8;
                var7 = var7.application;
                var8 = var0 == var7;
                var6 = undefined;
                if (var8) {
                    _fun76005_ip = 185;
                    continue _fun76005
                }
            case 179:
                var6 = var7.bot;
            case 185:
                var3.bot = var6;
                var6 = true;
                var3.botIconFirst = var6;
                var6 = arg1;
                var3.guildMember = var6;
                var2 = var4.bind(var5)(var3);
            case 210:
                return var2;
            case 212:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var5 = undefined;
                var4 = var6.bind(var5)(var2);
                var3 = var4.makeSource;
                var2 = 5;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var3.bind(var4)(var2);
                return var2;
            case 259:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var2 = var3.makeSource;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            case 306:
                return var0;
        }
    };
    var2.getApplicationCommandsIconSource = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun76006: for (var _fun76006_ip = 0;;) switch (_fun76006_ip) {
            case 0:
                var5 = arg1;
                var6 = arg2;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var6;
                var3 = _closure1_slot4;
                var2 = var3.getUpload;
                var1 = _closure1_slot3;
                var1 = var1.SlashCommand;
                var3 = var2.bind(var3)(var5, var6, var1);
                var _closure2_slot3 = var3;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun76006_ip = 128;
                    continue _fun76006
                }
            case 63:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.channelId = var5;
                var5 = true;
                var0.disableSpoiler = var5;
                var5 = arg3;
                var0.onClose = var5;
                var4 = function() {
                    _fun76007: for (var _fun76007_ip = 0;;) switch (_fun76007_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = var6.remove;
                            var4 = _closure2_slot1;
                            var3 = _closure2_slot3;
                            var3 = var3.id;
                            var2 = _closure1_slot3;
                            var2 = var2.SlashCommand;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var2 = _closure2_slot0;
                            var3 = null;
                            var2 = var3 == var2;
                            var5 = undefined;
                            if (var2) {
                                _fun76007_ip = 136;
                                continue _fun76007
                            }
                        case 79:
                            var2 = _closure2_slot0;
                            var2 = var2.props;
                            var2 = var2.activeCommand;
                            var4 = var3 == var2;
                            var5 = undefined;
                            if (var4) {
                                _fun76007_ip = 136;
                                continue _fun76007
                            }
                        case 103:
                            var6 = var2.options;
                            var2 = var3 == var6;
                            var5 = undefined;
                            if (var2) {
                                _fun76007_ip = 136;
                                continue _fun76007
                            }
                        case 117:
                            var4 = var6.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure2_slot2;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var4.bind(var6)(var2);
                        case 136:
                            if (!(var3 != var5)) {
                                _fun76007_ip = 186;
                                continue _fun76007
                            }
                        case 140:
                            var2 = _closure2_slot0;
                            if (!(var3 != var2)) {
                                _fun76007_ip = 186;
                                continue _fun76007
                            }
                        case 148:
                            var4 = _closure2_slot0;
                            var3 = var4.insertOrJumpCommandOption;
                            var2 = {};
                            var1 = '';
                            var2.displayText = var1;
                            var8 = false;
                            var11 = var4;
                            var10 = var5;
                            var9 = undefined;
                            var7 = var2;
                            var1 = var11[var3](var10, var9, var8, var7, var6);
                        case 186:
                            return var0;
                    }
                };
                var0.onRemove = var4;
                var0.upload = var3;
                var0 = var1.bind(var2)(var0);
            case 128:
                var0 = undefined;
                return var0;
        }
    };
    var2.openCommandAttachmentPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4001, 4000, 4545, 1417, 9636, 9637, 4547, 1606, 9415, 7607, 2]);