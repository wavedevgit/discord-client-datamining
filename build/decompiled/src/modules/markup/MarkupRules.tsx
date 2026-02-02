// modules/markup/MarkupRules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
var4 = require;
        var16 = metroImportDefault;
        var2 = exports;
        var5 = dependencyMap;
        var _closure1_slot0 = var4;
        var _closure1_slot1 = var16;
        var _closure1_slot2 = var5;
        var3 = function arg0() {
            _fun43937: for(var _fun43937_ip = 0; ; ) switch(_fun43937_ip) {
case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var0 = var1[var0];
                var1 = undefined;
                var5 = var2.bind(var1)(var0);
                var4 = var5.punycodeLink;
                var2 = 1;
                var0 = var3[var2];
                var4 = var4.bind(var5)(var0);
                var0 = null;
                if(!(var0 != var4)) { _fun43937_ip = 111; continue _fun43937 }
case 52:
                var0 = {};
                var5 = 'link';
                var0.type = var5;
                var6 = {};
                var5 = 'text';
                var6.type = var5;
                var5 = var4.displayTarget;
                var6.content = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var0.content = var5;
                var4 = var4.target;
                var0.target = var4;
                var0.title = var1;
                _fun43937_ip = 132; continue _fun43937;
case 111:
                var1 = {};
                var4 = 'text';
                var1.type = var4;
                var2 = var3[var2];
                var1.content = var2;
                var0 = var1;
case 132:
                return var0;
            }
        };
        var0 = function arg0, arg1() {
            _fun43938: for(var _fun43938_ip = 0; ; ) switch(_fun43938_ip) {
case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = var4.length;
                var1 = 0;
                var0 = var1 === var0;
                if(var0) { _fun43938_ip = 66; continue _fun43938 }
case 20:
                var1 = var1 === var5;
                if(var1) { _fun43938_ip = 63; continue _fun43938 }
case 27:
                var3 = var4.charAt;
                var2 = 1;
                var2 = var5 - var2;
                var3 = var3.bind(var4)(var2);
                var2 = var3.trim;
                var3 = var2.bind(var3)();
                var2 = '';
                var1 = var2 === var3;
case 63:
                var0 = var1;
case 66:
                return var0;
            }
        };
        var _closure1_slot21 = var0;
        var0 = global;
        var7 = var0.Object;
        var6 = var7.defineProperty;
        var1 = {};
        var0 = true;
        var1.value = var0;
        var0 = '__esModule';
        var0 = var6.bind(var7)(var2, var0, var1);
        var0 = 0;
        var1 = var5[var0];
        var0 = undefined;
        var1 = var16.bind(var0)(var1);
        var _closure1_slot3 = var1;
        var9 = 1;
        var1 = var5[var9];
        var1 = var16.bind(var0)(var1);
        var _closure1_slot4 = var1;
        var1 = 2;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var _closure1_slot5 = var1;
        var1 = 3;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var _closure1_slot6 = var1;
        var1 = 4;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var _closure1_slot7 = var1;
        var1 = 5;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var _closure1_slot8 = var1;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var6 = var1.ID_REGEX;
        var _closure1_slot9 = var6;
        var6 = var1.MARKDOWN_SPOILER_REGEXP;
        var _closure1_slot10 = var6;
        var1 = var1.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
        var _closure1_slot11 = var1;
        var1 = 7;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.SUB_COMMAND_KEY_SEPARATOR;
        var _closure1_slot12 = var1;
        var1 = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
        var _closure1_slot13 = var1;
        var1 = /^$|\n *$/;
        var _closure1_slot14 = var1;
        var1 = /^ *>>> ?/;
        var _closure1_slot15 = var1;
        var1 = /^ *> ?/gm;
        var _closure1_slot16 = var1;
        var1 = /^((?:https?|steam):\\/\\/[^\s<]+[^<.,:;"'\]\s])/;
        var _closure1_slot17 = var1;
        var1 = function arg0() {
            _fun43939: for(var _fun43939_ip = 0; ; ) switch(_fun43939_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 == var2;
                var0 = undefined;
                if(var1) { _fun43939_ip = 41; continue _fun43939 }
case 31:
                var1 = var2.getGuildId;
                var0 = var1.bind(var2)();
case 41:
                return var0;
            }
        };
        var _closure1_slot18 = var1;
        var1 = function arg0() {
            _fun43940: for(var _fun43940_ip = 0; ; ) switch(_fun43940_ip) {
case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var0 = null;
                if(!(var0 == var2)) { _fun43940_ip = 63; continue _fun43940 }
case 14:
                var2 = var1.channelId;
                var2 = var0 != var2;
                var0 = null;
                if(!var2) { _fun43940_ip = 61; continue _fun43940 }
case 28:
                var4 = _closure1_slot7;
                var3 = var4.getGuild;
                var6 = _closure1_slot18;
                var5 = var1.channelId;
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var0 = var3.bind(var4)(var2);
case 61:
                _fun43940_ip = 85; continue _fun43940;
case 63:
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = var1.guildId;
                var0 = var2.bind(var3)(var1);
case 85:
                return var0;
            }
        };
        var _closure1_slot19 = var1;
        var7 = {};
        var6 = 9;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.newline;
        var7.newline = var1;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.paragraph;
        var7.paragraph = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.escape;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = function arg0, arg1, arg2() {
            _fun43941: for(var _fun43941_ip = 0; ; ) switch(_fun43941_ip) {
case 0:
                var5 = arg1;
                var2 = var5.allowEscape;
                var1 = false;
                var0 = null;
                if(!(var1 !== var2)) { _fun43941_ip = 73; continue _fun43941 }
case 17:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.defaultRules;
                var4 = var1.escape;
                var3 = var4.match;
                var2 = arg0;
                var1 = arg2;
                var0 = var3.bind(var4)(var2, var5, var1);
case 73:
                return var0;
            }
        };
        var11 = 'match';
        var1[var11] = var8;
        var7.escape = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.blockQuote;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = [' ', '>'];
        var12 = 'requiredFirstCharacters';
        var1[var12] = var8;
        var8 = function arg0, arg1() {
            _fun43942: for(var _fun43942_ip = 0; ; ) switch(_fun43942_ip) {
case 0:
                var2 = arg0;
                var0 = arg1;
                var3 = var0.prevCapture;
                var1 = var0.inQuote;
                var0 = var0.nested;
                if(var1) { _fun43942_ip = 101; continue _fun43942 }
case 27:
                if(var0) { _fun43942_ip = 101; continue _fun43942 }
case 30:
                var0 = null;
                if(!(var0 != var3)) { _fun43942_ip = 81; continue _fun43942 }
case 36:
                var1 = 0;
                var5 = var3[var1];
                var4 = _closure1_slot14;
                var3 = var4.test;
                var3 = var3.bind(var4)(var5);
                var0 = null;
                if(!var3) { _fun43942_ip = 79; continue _fun43942 }
case 64:
                var3 = _closure1_slot13;
                var1 = var3.exec;
                var0 = var1.bind(var3)(var2);
case 79:
                return var0;
case 81:
                var1 = _closure1_slot13;
                var0 = var1.exec;
                var0 = var0.bind(var1)(var2);
                return var0;
case 101:
                var0 = null;
                return var0;
            }
        };
        var1[var11] = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43943: for(var _fun43943_ip = 0; ; ) switch(_fun43943_ip) {
case 0:
                var3 = arg2;
                var0 = arg0;
                var2 = 0;
                var5 = var0[var2];
                var0 = global;
                var4 = var0.Boolean;
                var6 = _closure1_slot15;
                var1 = var6.exec;
                var1 = var1.bind(var6)(var5);
                var6 = undefined;
                var7 = var4.bind(var6)(var1);
                if(var7) { _fun43943_ip = 54; continue _fun43943 }
case 48:
                var4 = _closure1_slot16;
                _fun43943_ip = 58; continue _fun43943;
case 54:
                var4 = _closure1_slot15;
case 58:
                var1 = var5.replace;
                var0 = '';
                var5 = var1.bind(var5)(var4, var0);
                var4 = var3.inQuote;
                if(var4) { _fun43943_ip = 84; continue _fun43943 }
case 82:
                var4 = false;
case 84:
                var0 = var3.inline;
                if(var0) { _fun43943_ip = 95; continue _fun43943 }
case 93:
                var0 = false;
case 95:
                var1 = true;
                var3.inQuote = var1;
                if(var7) { _fun43943_ip = 112; continue _fun43943 }
case 106:
                var3.inline = var1;
case 112:
                var1 = arg1;
                var1 = var1.bind(var6)(var5, var3);
                var3.inQuote = var4;
                var3.inline = var0;
                var0 = var1.length;
                if(!(var2 === var0)) { _fun43943_ip = 166; continue _fun43943 }
case 142:
                var2 = var1.push;
                var0 = {'type': 'text', 'content': ' '};
                var0 = var2.bind(var1)(var0);
case 166:
                var0 = {};
                var0.content = var1;
                var1 = 'blockQuote';
                var0.type = var1;
                return var0;
            }
        };
        var10 = 'parse';
        var1[var10] = var8;
        var7.blockQuote = var1;
        var1 = 8;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var7.link = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.autolink;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var1[var10] = var3;
        var7.autolink = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.mailto;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = var5[var6];
        var14 = var16.bind(var0)(var8);
        var13 = var14.inlineRegex;
        var8 = /^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/;
        var8 = var13.bind(var14)(var8);
        var1[var11] = var8;
        var8 = ['<'];
        var1[var12] = var8;
        var8 = function arg0() {
            _fun43944: for(var _fun43944_ip = 0; ; ) switch(_fun43944_ip) {
case 0:
                var1 = arg0;
                var0 = 1;
                var2 = var1[var0];
                var3 = var1[var0];
                var1 = var3.startsWith;
                var0 = 'mailto:';
                var4 = var1.bind(var3)(var0);
                var1 = var3;
                if(var4) { _fun43944_ip = 41; continue _fun43944 }
case 37:
                var1 = var0 + var3;
case 41:
                var0 = {};
                var3 = 'link';
                var0.type = var3;
                var3 = {};
                var4 = 'text';
                var3.type = var4;
                var3.content = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var0.content = var2;
                var0.target = var1;
                return var0;
            }
        };
        var1[var10] = var8;
        var7.mailto = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.mailto;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = ['<'];
        var1[var12] = var8;
        var8 = var5[var6];
        var14 = var16.bind(var0)(var8);
        var13 = var14.inlineRegex;
        var8 = /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\\/]?(?:[0-9]|\([0-9]+\)))+)>/;
        var8 = var13.bind(var14)(var8);
        var1[var11] = var8;
        var8 = function arg0() {
            _fun43945: for(var _fun43945_ip = 0; ; ) switch(_fun43945_ip) {
case 0:
                var1 = arg0;
                var0 = 1;
                var2 = var1[var0];
                var4 = var1[var0];
                var3 = var4.replaceAll;
                var1 = /[ \\/]+/g;
                var0 = '-';
                var3 = var3.bind(var4)(var1, var0);
                var1 = var3.startsWith;
                var0 = 'tel:';
                var4 = var1.bind(var3)(var0);
                if(var4) { _fun43945_ip = 81; continue _fun43945 }
case 64:
                var5 = var3.startsWith;
                var1 = 'sms:';
                var4 = var5.bind(var3)(var1);
case 81:
                var1 = var3;
                if(var4) { _fun43945_ip = 91; continue _fun43945 }
case 87:
                var1 = var0 + var3;
case 91:
                var0 = {};
                var3 = 'link';
                var0.type = var3;
                var3 = {};
                var4 = 'text';
                var3.type = var4;
                var3.content = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var0.content = var2;
                var0.target = var1;
                return var0;
            }
        };
        var1[var10] = var8;
        var7.tel = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.url;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = ['h', 's'];
        var1[var12] = var8;
        var8 = function arg0, arg1() {
            _fun43946: for(var _fun43946_ip = 0; ; ) switch(_fun43946_ip) {
case 0:
                var0 = arg1;
                var0 = var0.inline;
                var1 = null;
                if(var0) { _fun43946_ip = 16; continue _fun43946 }
case 14:
                return var1;
case 16:
                var3 = _closure1_slot17;
                var2 = var3.exec;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                if(!(var1 != var0)) { _fun43946_ip = 167; continue _fun43946 }
case 44:
                var2 = 0;
                var6 = var0[var2];
                var1 = var6.length;
                var3 = 1;
                var10 = var1 - var3;
                var1 = var6;
                if(!(var10 >= var2)) { _fun43946_ip = 159; continue _fun43946 }
case 69:
                var4 = var6[var10];
                var9 = ')';
                var8 = '(';
                var7 = -1;
                var5 = 0;
                var1 = var6;
                if(!(var9 === var4)) { _fun43946_ip = 159; continue _fun43946 }
case 96:
                var4 = var6.indexOf;
                var4 = var4.bind(var6)(var8, var5);
                if(!(var7 !== var4)) { _fun43946_ip = 139; continue _fun43946 }
case 112:
                var5 = var4 + var3;
                var10 = var10 - 1;
                var1 = var6;
                if(!(var10 >= var2)) { _fun43946_ip = 159; continue _fun43946 }
case 126:
                var4 = var6[var10];
                var1 = var6;
                if(var9 === var4) { _fun43946_ip = 96; continue _fun43946 }
case 137:
                _fun43946_ip = 159; continue _fun43946;
case 139:
                var5 = var6.slice;
                var4 = var6.length;
                var4 = var4 - var3;
                var1 = var5.bind(var6)(var2, var4);
case 159:
                var0[var3] = var1;
                var0[var2] = var1;
case 167:
                return var0;
            }
        };
        var1[var11] = var8;
        var1[var10] = var3;
        var7.url = var1;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.strong;
        var7.strong = var1;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.em;
        var7.em = var1;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.u;
        var7.u = var1;
        var1 = var5[var6];
        var1 = var16.bind(var0)(var1);
        var1 = var1.defaultRules;
        var1 = var1.br;
        var7.br = var1;
        var3 = 10;
        var1 = var5[var3];
        var1 = var16.bind(var0)(var1);
        var7.text = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var21 = var8.inlineCode;
        var22 = var1;
        var8 = copyDataProperties(var22, var21);
        var8 = function arg0, arg1, arg2() {
            _fun43947: for(var _fun43947_ip = 0; ; ) switch(_fun43947_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var0.defaultRules;
                var2 = var0.inlineCode;
                var1 = var2.parse;
                var0 = arg0;
                var2 = var1.bind(var2)(var0, var5, var4);
                var6 = var4.parseInlineCodeChildContent;
                var1 = true;
                var0 = var2;
                if(!(var1 === var6)) { _fun43947_ip = 111; continue _fun43947 }
case 76:
                var1 = {};
                var9 = var1;
                var8 = var2;
                var6 = copyDataProperties(var9, var8);
                var2 = var2.content;
                var3 = var5.bind(var3)(var2, var4);
                var2 = 'validationChildContent';
                var1[var2] = var3;
                var0 = var1;
case 111:
                return var0;
            }
        };
        var1[var10] = var8;
        var7.inlineCode = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['¯'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = /^(¯\\_\(ツ\)_\\/¯)/;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0() {
            var0 = {};
            var1 = 'text';
            var0.type = var1;
            var2 = arg0;
            var1 = 1;
            var1 = var2[var1];
            var0.content = var1;
            return var0;
        };
        var1.parse = var8;
        var7.emoticon = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var8 = var8.codeBlock;
        var8 = var8.order;
        var1.order = var8;
        var8 = ['`'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43951: for(var _fun43951_ip = 0; ; ) switch(_fun43951_ip) {
case 0:
                var5 = arg0;
                var2 = arg2;
                var0 = {};
                var1 = 1;
                var6 = var5[var1];
                var4 = null;
                var7 = var4 != var6;
                var1 = '';
                var3 = var1;
                if(!var7) { _fun43951_ip = 34; continue _fun43951 }
case 31:
                var3 = var6;
case 34:
                var0.lang = var3;
                var3 = 2;
                var3 = var5[var3];
                var4 = var4 != var3;
                if(!var4) { _fun43951_ip = 56; continue _fun43951 }
case 53:
                var1 = var3;
case 56:
                var0.content = var1;
                var1 = var2.inQuote;
                if(var1) { _fun43951_ip = 75; continue _fun43951 }
case 69:
                var1 = var2.formatInline;
case 75:
                if(var1) { _fun43951_ip = 80; continue _fun43951 }
case 78:
                var1 = false;
case 80:
                var0.inQuote = var1;
                return var0;
            }
        };
        var1.parse = var8;
        var7.codeBlock = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = /^<@&(\d+)>/;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43953: for(var _fun43953_ip = 0; ; ) switch(_fun43953_ip) {
case 0:
                var3 = arg2;
                var4 = arg0;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var1 = var4().value;
                var1 = var0;
                var6 = undefined;
                var2 = var1 === var6;
                var1 = undefined;
                if(var2) { _fun43953_ip = 52; continue _fun43953 }
case 27:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var1 = undefined;
                var2 = var4;
                if(var4) { _fun43953_ip = 52; continue _fun43953 }
case 46:
                var1 = var5;
                var2 = var4;
case 52:
                if(var2) { _fun43953_ip = 58; continue _fun43953 }
case 55:
                var0.return();
case 58:
                var0 = var3.returnMentionIds;
                if(var0) { _fun43953_ip = 542; continue _fun43953 }
case 70:
                var0 = _closure1_slot19;
                var8 = var0.bind(var6)(var3);
                var7 = null;
                var0 = var7 != var8;
                var5 = null;
                if(!var0) { _fun43953_ip = 114; continue _fun43953 }
case 93:
                var9 = _closure1_slot6;
                var4 = var9.getRole;
                var0 = var8.id;
                var5 = var4.bind(var9)(var0, var1);
case 114:
                if(!(var7 != var5)) { _fun43953_ip = 447; continue _fun43953 }
case 121:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 12;
                var0 = var9[var0];
                var9 = var4.bind(var6)(var0);
                var4 = var9.getHasEnhancedRoleColorsForRole;
                var10 = var7 == var8;
                var0 = undefined;
                if(var10) { _fun43953_ip = 161; continue _fun43953 }
case 156:
                var0 = var8.id;
case 161:
                var4 = var4.bind(var9)(var0, var5);
                if(!var4) { _fun43953_ip = 204; continue _fun43953 }
case 170:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 13;
                var0 = var10[var0];
                var9 = var9.bind(var6)(var0);
                var0 = var9.getIsDefaultErc;
                var0 = var0.bind(var9)(var5);
                var4 = !var0;
case 204:
                var0 = {};
                var9 = 'mention';
                var0.type = var9;
                var3 = var3.channelId;
                var0.channelId = var3;
                var9 = var7 != var8;
                var3 = null;
                if(!var9) { _fun43953_ip = 237; continue _fun43953 }
case 232:
                var3 = var8.id;
case 237:
                var0.guildId = var3;
                var0.roleId = var1;
                var3 = var5.color;
                var0.roleColor = var3;
                var3 = null;
                if(!var4) { _fun43953_ip = 341; continue _fun43953 }
case 261:
                var4 = {};
                var9 = var5.colors;
                var10 = var7 == var9;
                var8 = undefined;
                if(var10) { _fun43953_ip = 283; continue _fun43953 }
case 277:
                var8 = var9.primary_color;
case 283:
                var4.primaryColor = var8;
                var9 = var5.colors;
                var10 = var7 == var9;
                var8 = undefined;
                if(var10) { _fun43953_ip = 308; continue _fun43953 }
case 302:
                var8 = var9.secondary_color;
case 308:
                var4.secondaryColor = var8;
                var8 = var5.colors;
                var9 = var7 == var8;
                var7 = undefined;
                if(var9) { _fun43953_ip = 333; continue _fun43953 }
case 327:
                var7 = var8.tertiary_color;
case 333:
                var4.tertiaryColor = var7;
                var3 = var4;
case 341:
                var0.roleColors = var3;
                var8 = var5.name;
                var3 = global;
                var4 = var3.HermesInternal;
                var4 = var4.concat;
                var7 = '@';
                var4 = var4.bind(var7)(var8);
                var0.roleName = var4;
                var4 = var5.color;
                var0.color = var4;
                var4 = var5.colorString;
                var0.colorString = var4;
                var4 = {};
                var8 = 'text';
                var4.type = var8;
                var5 = var5.name;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var7)(var5);
                var4.content = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var0.content = var3;
                return var0;
case 447:
                var0 = {};
                var3 = 'text';
                var0.type = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["YV4F/n"];
                var4 = var3.bind(var4)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '@';
                var2 = var3.bind(var2)(var4);
                var0.content = var2;
                return var0;
case 542:
                var0 = {};
                var2 = 'roleMention';
                var0.type = var2;
                var0.id = var1;
                return var0;
            }
        };
        var1.parse = var8;
        var7.roleMention = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<', '@'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            _fun43954: for(var _fun43954_ip = 0; ; ) switch(_fun43954_ip) {
case 0:
                var2 = /^<@!?(\d+)>|^(@(?:everyone|here))/;
                var1 = var2.exec;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                if(var2) { _fun43954_ip = 40; continue _fun43954 }
case 37:
                var0 = var1;
case 40:
                return var0;
            }
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43955: for(var _fun43955_ip = 0; ; ) switch(_fun43955_ip) {
case 0:
                var3 = arg0;
                var9 = arg2;
                var0 = var9.returnMentionIds;
                var1 = 1;
                if(var0) { _fun43955_ip = 447; continue _fun43955 }
case 21:
                var5 = _closure1_slot8;
                var4 = var5.getUser;
                var2 = var3[var1];
                var14 = var4.bind(var5)(var2);
                var5 = _closure1_slot5;
                var4 = var5.getChannel;
                var2 = var9.channelId;
                var10 = var4.bind(var5)(var2);
                var5 = null;
                var2 = var5 != var14;
                var4 = undefined;
                var7 = undefined;
                var11 = undefined;
                if(!var2) { _fun43955_ip = 187; continue _fun43955 }
case 77:
                var2 = var14.id;
                var6 = var14.toString;
                var6 = var6.bind(var14)();
                if(!(var5 != var10)) { _fun43955_ip = 181; continue _fun43955 }
case 95:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 14;
                var8 = var13[var8];
                var15 = var12.bind(var4)(var8);
                var13 = var15.getNickname;
                var8 = var10.getGuildId;
                var12 = var8.bind(var10)();
                var8 = var9.channelId;
                var8 = var13.bind(var15)(var12, var8, var14);
                if(!(var5 == var8)) { _fun43955_ip = 178; continue _fun43955 }
case 147:
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 15;
                var12 = var15[var12];
                var13 = var13.bind(var4)(var12);
                var12 = var13.getName;
                var8 = var12.bind(var13)(var14);
case 178:
                var6 = var8;
case 181:
                var7 = var6;
                var11 = var2;
case 187:
                var6 = var3[var1];
                var8 = var5 != var6;
                if(!var8) { _fun43955_ip = 222; continue _fun43955 }
case 198:
                var13 = _closure1_slot9;
                var12 = var13.test;
                var2 = var6.trim;
                var2 = var2.bind(var6)();
                var8 = var12.bind(var13)(var2);
case 222:
                if(!var8) { _fun43955_ip = 234; continue _fun43955 }
case 225:
                var2 = var9.unknownUserMentionPlaceholder;
                if(var2) { _fun43955_ip = 242; continue _fun43955 }
case 234:
                var2 = 0;
                var2 = var3[var2];
                _fun43955_ip = 319; continue _fun43955;
case 242:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 11;
                var12 = var15[var0];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var0 = var15[var0];
                var0 = var14.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.sKdZ6U;
                var13 = var12.bind(var13)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var12 = var0.concat;
                var0 = '@';
                var2 = var12.bind(var0)(var13);
case 319:
                var0 = {};
                var0.userId = var11;
                var11 = var9.channelId;
                var0.channelId = var11;
                var9 = var9.viewingChannelId;
                var0.viewingChannelId = var9;
                var9 = var5 == var10;
                var4 = undefined;
                if(var9) { _fun43955_ip = 364; continue _fun43955 }
case 354:
                var9 = var10.getGuildId;
                var4 = var9.bind(var10)();
case 364:
                var0.guildId = var4;
                var4 = null;
                if(!var8) { _fun43955_ip = 376; continue _fun43955 }
case 373:
                var4 = var6;
case 376:
                var0.parsedUserId = var4;
                var4 = 2;
                var4 = var3[var4];
                var0.roleName = var4;
                var4 = {};
                var6 = 'text';
                var4.type = var6;
                if(!(var5 != var7)) { _fun43955_ip = 429; continue _fun43955 }
case 407:
                var5 = global;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = '@';
                var2 = var6.bind(var5)(var7);
case 429:
                var4.content = var2;
                var2 = new Array(1);
                var2[0] = var4;
                var0.content = var2;
                return var0;
case 447:
                var2 = var3[var1];
                var0 = null;
                if(!(var0 != var2)) { _fun43955_ip = 477; continue _fun43955 }
case 457:
                var0 = {};
                var2 = 'mention';
                var0.type = var2;
                var1 = var3[var1];
                var0.id = var1;
                _fun43955_ip = 500; continue _fun43955;
case 477:
                var1 = {};
                var2 = 'mention';
                var1.type = var2;
                var2 = 0;
                var2 = var3[var2];
                var1.text = var2;
                var0 = var1;
case 500:
                return var0;
            }
        };
        var1.parse = var8;
        var7.mention = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['@'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43956: for(var _fun43956_ip = 0; ; ) switch(_fun43956_ip) {
case 0:
                var2 = arg2;
                var0 = null;
                if(!(var0 != var2)) { _fun43956_ip = 19; continue _fun43956 }
case 9:
                var1 = '';
                var0 = null;
                if(!(var1 === var2)) { _fun43956_ip = 47; continue _fun43956 }
case 19:
                var3 = /^(@silent(?![^\s]))/;
                var2 = var3.exec;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
case 47:
                return var0;
            }
        };
        var1.match = var8;
        var8 = function arg0() {
            var0 = {};
            var1 = 'silentPrefix';
            var0.type = var1;
            var2 = arg0;
            var1 = 0;
            var1 = var2[var1];
            var0.content = var1;
            return var0;
        };
        var1.parse = var8;
        var7.silentPrefix = var1;
        var1 = 16;
        var8 = var5[var1];
        var8 = var16.bind(var0)(var8);
        var8 = var8.channelMention;
        var7.channelMention = var8;
        var8 = var5[var1];
        var8 = var16.bind(var0)(var8);
        var8 = var8.channelOrMessageUrl;
        var7.channelOrMessageUrl = var8;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var1 = var1.mediaPostLink;
        var7.mediaPostLink = var1;
        var1 = 17;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var1 = var1.attachmentLink;
        var7.attachmentLink = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var8 = var8.text;
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = /^<\\/((?:(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?):([0-9]+)>/;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43959: for(var _fun43959_ip = 0; ; ) switch(_fun43959_ip) {
case 0:
                var2 = arg0;
                var7 = arg2;
                var0 = var7.returnMentionIds;
                if(var0) { _fun43959_ip = 217; continue _fun43959 }
case 18:
                var4 = 1;
                var3 = var2[var4];
                var1 = var3.split;
                var0 = ' ';
                var3 = var1.bind(var3)(var0);
                var1 = _closure1_slot4;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var0 = var1.slice;
                var10 = var0.bind(var1)(var4);
                var6 = 2;
                var8 = var2[var6];
                var3 = new Array(0);
                var9 = 0;
                var11 = var3;
                var0 = arraySpread(var11, var10, var9);
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot12;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = arg0;
                    var0 = var2.bind(var1)(var3, var0);
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = var1.join;
                var5 = '';
                var3 = var0.bind(var1)(var5);
                var1 = global;
                var0 = var1.HermesInternal;
                var0 = var0.concat;
                var3 = var0.bind(var5)(var8, var3);
                var0 = {};
                var7 = var7.channelId;
                var0.channelId = var7;
                var6 = var2[var6];
                var0.commandId = var6;
                var6 = var2[var4];
                var0.commandName = var6;
                var0.commandKey = var3;
                var3 = {};
                var6 = 'text';
                var3.type = var6;
                var4 = var2[var4];
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var4);
                var3.content = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var0.content = var1;
                return var0;
case 217:
                var0 = {};
                var1 = 'commandMention';
                var0.type = var1;
                var1 = 2;
                var1 = var2[var1];
                var0.id = var1;
                return var0;
            }
        };
        var1.parse = var8;
        var7.commandMention = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var8 = var8.text;
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0, arg1() {
            _fun43961: for(var _fun43961_ip = 0; ; ) switch(_fun43961_ip) {
case 0:
                var0 = arg1;
                var1 = var0.allowGameMentions;
                var0 = null;
                if(!var1) { _fun43961_ip = 42; continue _fun43961 }
case 14:
                var3 = /^<@\$(\d+)>/;
                var2 = var3.exec;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
case 42:
                return var0;
            }
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            _fun43962: for(var _fun43962_ip = 0; ; ) switch(_fun43962_ip) {
case 0:
                var3 = arg0;
                var1 = arg2;
                var _closure2_slot0 = var3;
                var2 = var1.channelId;
                var8 = null;
                if(!(var8 != var2)) { _fun43962_ip = 381; continue _fun43962 }
case 26:
                var2 = var1.messageId;
                if(!(var8 != var2)) { _fun43962_ip = 381; continue _fun43962 }
case 38:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 18;
                var2 = var6[var2];
                var6 = undefined;
                var7 = var5.bind(var6)(var2);
                var5 = var7.get;
                var2 = var1.channelId;
                var9 = var5.bind(var7)(var2);
                var5 = var8 == var9;
                var2 = undefined;
                if(var5) { _fun43962_ip = 102; continue _fun43962 }
case 87:
                var7 = var9.get;
                var5 = var1.messageId;
                var2 = var7.bind(var9)(var5);
case 102:
                var5 = var8 == var2;
                var7 = undefined;
                if(var5) { _fun43962_ip = 141; continue _fun43962 }
case 111:
                var5 = var2.mentionGames;
                var2 = var8 == var5;
                var7 = undefined;
                if(var2) { _fun43962_ip = 141; continue _fun43962 }
case 126:
                var2 = var5.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var2 = _closure2_slot0;
                    var0 = 1;
                    var0 = var2[var0];
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var2.bind(var5)(var0);
case 141:
                var0 = {};
                var2 = 'gameMention';
                var0.type = var2;
                var2 = 1;
                var2 = var3[var2];
                var0.applicationId = var2;
                var2 = var1.channelId;
                var0.channelId = var2;
                var5 = {};
                var2 = 'text';
                var5.type = var2;
                var2 = var8 == var7;
                var10 = undefined;
                if(var2) { _fun43962_ip = 195; continue _fun43962 }
case 190:
                var10 = var7.name;
case 195:
                if(!(var8 == var10)) { _fun43962_ip = 254; continue _fun43962 }
case 199:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 11;
                var9 = var13[var2];
                var9 = var12.bind(var6)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var2 = var13[var2];
                var2 = var12.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["11pdXZ"];
                var10 = var9.bind(var11)(var2);
case 254:
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var2 = '';
                var2 = var9.bind(var2)(var10);
                var5.content = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var0.content = var2;
                var5 = var8 != var7;
                var2 = undefined;
                if(!var5) { _fun43962_ip = 375; continue _fun43962 }
case 301:
                var5 = var7.icon_hash;
                var5 = var8 != var5;
                var2 = undefined;
                if(!var5) { _fun43962_ip = 375; continue _fun43962 }
case 316:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 19;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getApplicationIconURL;
                var4 = {};
                var8 = var7.id;
                var4.id = var8;
                var7 = var7.icon_hash;
                var4.icon = var7;
                var7 = 32;
                var4.size = var7;
                var2 = var5.bind(var6)(var4);
case 375:
                var0.icon = var2;
                return var0;
case 381:
                var0 = {};
                var2 = 'gameMention';
                var0.type = var2;
                var2 = 1;
                var2 = var3[var2];
                var0.applicationId = var2;
                var1 = var1.channelId;
                var0.channelId = var1;
                var3 = {};
                var1 = 'text';
                var3.type = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var4 = var7[var2];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2["11pdXZ"];
                var2 = var4.bind(var5)(var2);
                var3.content = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var0.content = var2;
                var0.icon = var1;
                return var0;
            }
        };
        var1.parse = var8;
        var7.gameMention = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var8 = var8.text;
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0, arg1() {
            _fun43964: for(var _fun43964_ip = 0; ; ) switch(_fun43964_ip) {
case 0:
                var0 = arg1;
                var1 = var0.allowTimeMentionInput;
                var0 = null;
                if(!var1) { _fun43964_ip = 42; continue _fun43964 }
case 14:
                var3 = /^<@time:([^>]*)>/;
                var2 = var3.exec;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
case 42:
                return var0;
            }
        };
        var1.match = var8;
        var8 = function arg0() {
            var0 = {};
            var1 = 'timestampMentionInput';
            var0.type = var1;
            var2 = arg0;
            var1 = 1;
            var1 = var2[var1];
            var0.content = var1;
            return var0;
        };
        var1.parse = var8;
        var7.timestampMentionInput = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = [':'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            _fun43966: for(var _fun43966_ip = 0; ; ) switch(_fun43966_ip) {
case 0:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 20;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var3 = var0.EMOJI_NAME_RE;
                var1 = var3.exec;
                var0 = arg0;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var3 = var4 != var1;
                var0 = null;
                if(!var3) { _fun43966_ip = 104; continue _fun43966 }
case 56:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var5 = var3.bind(var5)(var2);
                var3 = var5.convertNameToSurrogate;
                var2 = 1;
                var2 = var1[var2];
                var3 = var3.bind(var5)(var2);
                var2 = '';
                var0 = null;
                if(!(var2 !== var3)) { _fun43966_ip = 104; continue _fun43966 }
case 101:
                var0 = var1;
case 104:
                return var0;
            }
        };
        var1.match = var8;
        var8 = function arg0() {
            _fun43967: for(var _fun43967_ip = 0; ; ) switch(_fun43967_ip) {
case 0:
                var3 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 20;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var1 = var4.convertNameToSurrogate;
                var2 = 1;
                var0 = var3[var2];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var4 = 'text';
                var0.type = var4;
                var4 = null;
                if(!(var4 != var1)) { _fun43967_ip = 70; continue _fun43967 }
case 62:
                var4 = '';
                if(!(var4 === var1)) { _fun43967_ip = 97; continue _fun43967 }
case 70:
                var4 = var3[var2];
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var1 = var3.bind(var2)(var4, var2);
case 97:
                var0.content = var1;
                return var0;
            }
        };
        var1.parse = var8;
        var7.emoji = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.soundmojiRawFormatRegex;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0, arg1, arg2() {
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 21;
            var0 = var2[var0];
            var3 = undefined;
            var2 = var1.bind(var3)(var0);
            var1 = arg0;
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1.parse = var8;
        var7.soundboard = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = /^<a?:(\w+):(\d+)>/;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0() {
            var0 = {};
            var1 = 'text';
            var0.type = var1;
            var2 = arg0;
            var1 = 1;
            var3 = var2[var1];
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ':';
            var1 = var2.bind(var1)(var3, var1);
            var0.content = var1;
            return var0;
        };
        var1.parse = var8;
        var7.customEmoji = var1;
        var1 = {};
        var8 = var5[var3];
        var8 = var16.bind(var0)(var8);
        var8 = var8.order;
        var8 = var8 - var9;
        var1.order = var8;
        var8 = ['<'];
        var1.requiredFirstCharacters = var8;
        var8 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.TIMESTAMP_REGEX;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var8;
        var8 = function arg0() {
            _fun43973: for(var _fun43973_ip = 0; ; ) switch(_fun43973_ip) {
case 0:
                var6 = arg0;
                var0 = var6[Symbol.iterator];
                var6 = var0().next;
                var3 = var6().value;
                var1 = var0;
                var5 = undefined;
                var1 = var1 === var5;
                var2 = undefined;
                if(var1) { _fun43973_ip = 27; continue _fun43973 }
case 24:
                var2 = var3;
case 27:
                var4 = undefined;
                if(var1) { _fun43973_ip = 57; continue _fun43973 }
case 32:
                var7 = var6().value;
                var3 = var0;
                var3 = var3 === var5;
                var4 = undefined;
                var1 = var3;
                if(var3) { _fun43973_ip = 57; continue _fun43973 }
case 51:
                var4 = var7;
                var1 = var3;
case 57:
                var3 = undefined;
                if(var1) { _fun43973_ip = 87; continue _fun43973 }
case 62:
                var7 = var6().value;
                var6 = var0;
                var6 = var6 === var5;
                var3 = undefined;
                var1 = var6;
                if(var6) { _fun43973_ip = 87; continue _fun43973 }
case 81:
                var3 = var7;
                var1 = var6;
case 87:
                if(var1) { _fun43973_ip = 93; continue _fun43973 }
case 90:
                var0.return();
case 93:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 22;
                var0 = var6[var0];
                var1 = var1.bind(var5)(var0);
                var0 = var1.parseTimestamp;
                var0 = var0.bind(var1)(var4, var3);
                var1 = null;
                if(!(var1 != var0)) { _fun43973_ip = 146; continue _fun43973 }
case 134:
                var1 = 'timestamp';
                var0.type = var1;
                _fun43973_ip = 163; continue _fun43973;
case 146:
                var1 = {};
                var3 = 'text';
                var1.type = var3;
                var1.content = var2;
                var0 = var1;
case 163:
                return var0;
            }
        };
        var1.parse = var8;
        var7.timestamp = var1;
        var1 = {};
        var8 = var5[var6];
        var8 = var16.bind(var0)(var8);
        var8 = var8.defaultRules;
        var8 = var8.u;
        var8 = var8.order;
        var1.order = var8;
        var8 = ['~'];
        var1.requiredFirstCharacters = var8;
        var8 = var5[var6];
        var10 = var16.bind(var0)(var8);
        var9 = var10.inlineRegex;
        var8 = /^~~([\s\S]+?)~~(?!_)/;
        var8 = var9.bind(var10)(var8);
        var1.match = var8;
        var6 = var5[var6];
        var6 = var16.bind(var0)(var6);
        var6 = var6.defaultRules;
        var6 = var6.u;
        var6 = var6.parse;
        var1.parse = var6;
        var7.s = var1;
        var1 = {};
        var6 = var5[var3];
        var6 = var16.bind(var0)(var6);
        var6 = var6.order;
        var1.order = var6;
        var6 = ['|'];
        var1.requiredFirstCharacters = var6;
        var6 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var6;
        var6 = function arg0, arg1, arg2() {
            var1 = arg2;
            var0 = {};
            var3 = arg0;
            var2 = 1;
            var4 = var3[var2];
            var3 = arg1;
            var2 = undefined;
            var2 = var3.bind(var2)(var4, var1);
            var0.content = var2;
            var1 = var1.channelId;
            var0.channelId = var1;
            return var0;
        };
        var1.parse = var6;
        var7.spoiler = var1;
        var1 = {};
        var3 = var5[var3];
        var3 = var16.bind(var0)(var3);
        var3 = var3.order;
        var1.order = var3;
        var3 = ['<'];
        var1.requiredFirstCharacters = var3;
        var3 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.exec;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.match = var3;
        var3 = function arg0, arg1, arg2() {
            _fun43977: for(var _fun43977_ip = 0; ; ) switch(_fun43977_ip) {
case 0:
                var2 = arg2;
                var7 = function arg0() {
                    _fun43978: for(var _fun43978_ip = 0; ; ) switch(_fun43978_ip) {
case 0:
                        var1 = arg0;
                        var0 = null;
                        var2 = var0 == var1;
                        if(var2) { _fun43978_ip = 37; continue _fun43978 }
case 12:
                        var2 = {};
                        var3 = 'text';
                        var2.type = var3;
                        var2.content = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0 = var1;
case 37:
                        return var0;
                    }
                };
                var5 = _closure1_slot3;
                var4 = undefined;
                var1 = arg0;
                var0 = 3;
                var5 = var5.bind(var4)(var1, var0);
                var0 = 1;
                var1 = var5[var0];
                var0 = 2;
                var5 = var5[var0];
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 23;
                var8 = var9[var0];
                var10 = var6.bind(var4)(var8);
                var8 = var10.staticRouteToTranslation;
                var8 = var8.bind(var10)(var1);
                var0 = var9[var0];
                var10 = var6.bind(var4)(var0);
                var6 = var10.staticRouteToItemString;
                var0 = _closure1_slot19;
                var11 = var0.bind(var4)(var2);
                var9 = null;
                var12 = var9 == var11;
                var0 = undefined;
                if(var12) { _fun43977_ip = 116; continue _fun43977 }
case 111:
                var0 = var11.id;
case 116:
                var6 = var6.bind(var10)(var1, var5, var0);
                var0 = {};
                var10 = var9 != var6;
                var9 = '';
                if(!var10) { _fun43977_ip = 160; continue _fun43977 }
case 136:
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = ' › ';
                var9 = var11.bind(var10)(var6);
case 160:
                var9 = var8 + var9;
                var9 = var7.bind(var4)(var9);
                var0.content = var9;
                var8 = var7.bind(var4)(var8);
                var0.mainContent = var8;
                var6 = var7.bind(var4)(var6);
                var0.itemContent = var6;
                var0.itemId = var5;
                var0.id = var1;
                var3 = _closure1_slot18;
                var2 = var2.channelId;
                var2 = var3.bind(var4)(var2);
                var0.guildId = var2;
                var0.channelId = var1;
                return var0;
            }
        };
        var1.parse = var3;
        var7.staticRouteLink = var1;
        var1 = 24;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var7.heading = var1;
        var1 = 25;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var7.list = var1;
        var1 = 26;
        var1 = var5[var1];
        var1 = var16.bind(var0)(var1);
        var7.subtext = var1;
        var1 = 27;
        var3 = var5[var1];
        var6 = var16.bind(var0)(var3);
        var3 = new Array(2);
        var3[0] = var7;
        var7 = 28;
        var7 = var5[var7];
        var7 = var16.bind(var0)(var7);
        var3[1] = var7;
        var14 = var6.bind(var0)(var3);
        var _closure1_slot20 = var14;
        var15 = 29;
        var3 = var5[var15];
        var7 = var16.bind(var0)(var3);
        var6 = var7.omit;
        var3 = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard'];
        var13 = var6.bind(var7)(var14, var3);
        var3 = var5[var15];
        var7 = var16.bind(var0)(var3);
        var6 = var7.omit;
        var3 = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard', 'gameMention'];
        var12 = var6.bind(var7)(var14, var3);
        var3 = var5[var15];
        var7 = var16.bind(var0)(var3);
        var6 = var7.omit;
        var3 = ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard', 'gameMention'];
        var11 = var6.bind(var7)(var14, var3);
        var3 = var5[var15];
        var8 = var16.bind(var0)(var3);
        var7 = var8.omit;
        var3 = var5[var1];
        var6 = var16.bind(var0)(var3);
        var3 = new Array(2);
        var3[0] = var14;
        var9 = {};
        var10 = {};
        var17 = function arg0, arg1, arg2() {
            _fun43979: for(var _fun43979_ip = 0; ; ) switch(_fun43979_ip) {
case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var0 = _closure1_slot20;
                var1 = var0.codeBlock;
                var0 = var1.match;
                var0 = var0.bind(var1)(var6, var5, var4);
                var1 = null;
                if(!(var1 == var0)) { _fun43979_ip = 78; continue _fun43979 }
case 41:
                var2 = _closure1_slot20;
                var3 = var2.inlineCode;
                var2 = var3.match;
                var2 = var2.bind(var3)(var6, var5, var4);
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun43979_ip = 76; continue _fun43979 }
case 73:
                var1 = var2;
case 76:
                return var1;
case 78:
                return var0;
            }
        };
        var10.match = var17;
        var9.inlineCode = var10;
        var3[1] = var9;
        var6 = var6.bind(var0)(var3);
        var3 = ['blockQuote', 'codeBlock', 'br'];
        var10 = var7.bind(var8)(var6, var3);
        var3 = var5[var15];
        var7 = var16.bind(var0)(var3);
        var6 = var7.omit;
        var3 = ['codeBlock', 'br', 'blockQuote'];
        var9 = var6.bind(var7)(var14, var3);
        var3 = var5[var15];
        var7 = var16.bind(var0)(var3);
        var6 = var7.omit;
        var3 = ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard'];
        var7 = var6.bind(var7)(var14, var3);
        var3 = var5[var15];
        var8 = var16.bind(var0)(var3);
        var6 = var8.omit;
        var3 = ['codeBlock', 'blockQuote', 'br'];
        var8 = var6.bind(var8)(var14, var3);
        var3 = var5[var15];
        var17 = var16.bind(var0)(var3);
        var6 = var17.omit;
        var3 = ['codeBlock', 'br', 'inlineCode'];
        var3 = var6.bind(var17)(var14, var3);
        var1 = var5[var1];
        var6 = var16.bind(var0)(var1);
        var17 = {};
        var1 = {};
        var19 = -1;
        var1.order = var19;
        var19 = function arg0, arg1() {
            _fun43980: for(var _fun43980_ip = 0; ; ) switch(_fun43980_ip) {
case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = var4.parseDepth;
                var0 = null;
                if(!(var0 != var1)) { _fun43980_ip = 34; continue _fun43980 }
case 18:
                var2 = var4.parseDepth;
                var1 = 10;
                if(!(!(var2 > var1))) { _fun43980_ip = 248; continue _fun43980 }
case 34:
                var1 = var4.highlightWord;
                if(!(var0 != var1)) { _fun43980_ip = 246; continue _fun43980 }
case 47:
                var1 = var4.highlightWord;
                var1 = var1.length;
                var2 = 0;
                if(!(var2 !== var1)) { _fun43980_ip = 246; continue _fun43980 }
case 67:
                var3 = var5.indexOf;
                var1 = var4.highlightWord;
                var6 = var3.bind(var5)(var1);
                var1 = -1;
                if(!(var1 !== var6)) { _fun43980_ip = 244; continue _fun43980 }
case 97:
                var3 = _closure1_slot21;
                var9 = undefined;
                var3 = var3.bind(var9)(var5, var6);
                var8 = 1;
                var7 = var6;
                var6 = var7;
                if(var3) { _fun43980_ip = 172; continue _fun43980 }
case 124:
                var12 = var5.indexOf;
                var11 = var4.highlightWord;
                var3 = var7 + var8;
                var3 = var12.bind(var5)(var11, var3);
                var11 = _closure1_slot21;
                var11 = var11.bind(var9)(var5, var3);
                var6 = var3;
                if(var11) { _fun43980_ip = 172; continue _fun43980 }
case 162:
                var7 = var3;
                var6 = var7;
                if(var1 !== var3) { _fun43980_ip = 124; continue _fun43980 }
case 172:
                if(!(var1 !== var6)) { _fun43980_ip = 242; continue _fun43980 }
case 176:
                var1 = var5.substring;
                var3 = var1.bind(var5)(var2, var6);
                var2 = var5.substring;
                var1 = var4.highlightWord;
                var1 = var1.length;
                var1 = var6 + var1;
                var2 = var2.bind(var5)(var1);
                var1 = new Array(4);
                var1[0] = var5;
                var4 = var4.highlightWord;
                var1[1] = var4;
                var1[2] = var3;
                var1[3] = var2;
                return var1;
case 242:
                return var0;
case 244:
                return var0;
case 246:
                return var0;
case 248:
                return var0;
            }
        };
        var1.match = var19;
        var18 = function arg0, arg1, arg2() {
            _fun43981: for(var _fun43981_ip = 0; ; ) switch(_fun43981_ip) {
case 0:
                var5 = arg0;
                var7 = arg1;
                var1 = arg2;
                var2 = var1.parseDepth;
                var0 = null;
                var3 = var0 != var2;
                var0 = 0;
                if(!var3) { _fun43981_ip = 29; continue _fun43981 }
case 26:
                var0 = var2;
case 29:
                var6 = {};
                var10 = var6;
                var9 = var1;
                var1 = copyDataProperties(var10, var9);
                var3 = 1;
                var1 = var0 + var3;
                var0 = 'parseDepth';
                var6[var0] = var1;
                var0 = 2;
                var0 = var5[var0];
                var2 = undefined;
                var1 = var7.bind(var2)(var0, var6);
                var0 = 3;
                var0 = var5[var0];
                var2 = var7.bind(var2)(var0, var6);
                var0 = new Array(1);
                var10 = var0;
                var9 = var1;
                var8 = 0;
                var1 = arraySpread(var10, var9, var8);
                var4 = {};
                var6 = 'highlight';
                var4.type = var6;
                var5 = var5[var3];
                var4.content = var5;
                var0[var1] = var4;
                var8 = var1 + var3;
                var10 = var0;
                var9 = var2;
                var1 = arraySpread(var10, var9, var8);
                return var0;
            }
        };
        var1.parse = var18;
        var17.highlightWord = var1;
        var1 = new Array(2);
        var1[0] = var17;
        var15 = var5[var15];
        var17 = var16.bind(var0)(var15);
        var16 = var17.omit;
        var15 = ['url'];
        var15 = var16.bind(var17)(var14, var15);
        var1[1] = var15;
        var6 = var6.bind(var0)(var1);
        var1 = {};
        var1.RULES = var14;
        var1.CHANNEL_TOPIC_RULES = var13;
        var1.VOICE_CHANNEL_STATUS_RULES = var12;
        var1.EMBED_TITLE_RULES = var11;
        var1.INLINE_REPLY_RULES = var10;
        var1.GUILD_VERIFICATION_FORM_RULES = var9;
        var1.GUILD_EVENT_RULES = var8;
        var1.PROFILE_BIO_RULES = var7;
        var1.AUTO_MODERATION_SYSTEM_MESSAGE_RULES = var6;
        var1.NATIVE_SEARCH_RESULT_LINK_RULES = var3;
        var3 = 30;
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.fileFinishedImporting;
        var3 = 'modules/markup/MarkupRules.tsx';
        var3 = var4.bind(var5)(var3);
        var2.default = var1;
        return var0;})(undefined,undefined,undefined,undefined,undefined,undefined,[57,852,1372,1665,1410,1613,660,4511,4749,3107,4753,1234,4754,1668,3922,3197,4755,4759,4216,1417,3065,4760,4766,4767,4768,4769,4770,4747,4771,22,2]);