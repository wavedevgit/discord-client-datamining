// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var6 = function(arg0) { // Original name: getCreationDate, environment: var4
        _fun38157: for (var _fun38157_ip = 0;;) switch (_fun38157_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getStringValue;
                var0 = arg0;
                var6 = var1.bind(var3)(var0);
                var3 = var6.length;
                var1 = 8;
                var0 = var6;
                if (!(var3 >= var1)) {
                    _fun38157_ip = 118;
                    continue _fun38157
                }
            case 53:
                var1 = var6.substr;
                var4 = 4;
                var1 = var1.bind(var6)(var2, var4);
                var3 = '-';
                var2 = var1 + var3;
                var1 = var6.substr;
                var5 = 2;
                var1 = var1.bind(var6)(var4, var5);
                var1 = var2 + var1;
                var4 = var6.substr;
                var2 = 6;
                var2 = var4.bind(var6)(var2, var5);
                var1 = var1 + var3;
                var0 = var1 + var2;
            case 118:
                return var0;
        }
    };
    var5 = function(arg0) { // Original name: getCreationTime, environment: var4
        _fun38158: for (var _fun38158_ip = 0;;) switch (_fun38158_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getStringValue;
                var0 = arg0;
                var8 = var1.bind(var3)(var0);
                var1 = var8.length;
                var6 = 6;
                var0 = var8;
                if (!(var1 >= var6)) {
                    _fun38158_ip = 197;
                    continue _fun38158
                }
            case 56:
                var1 = var8.substr;
                var7 = 2;
                var1 = var1.bind(var8)(var2, var7);
                var5 = ':';
                var2 = var1 + var5;
                var1 = var8.substr;
                var1 = var1.bind(var8)(var7, var7);
                var1 = var2 + var1;
                var3 = var8.substr;
                var2 = 4;
                var2 = var3.bind(var8)(var2, var7);
                var1 = var1 + var5;
                var3 = var1 + var2;
                var4 = var8.length;
                var2 = 11;
                var1 = var3;
                if (!(var2 === var4)) {
                    _fun38158_ip = 194;
                    continue _fun38158
                }
            case 133:
                var4 = var8.substr;
                var2 = 1;
                var4 = var4.bind(var8)(var6, var2);
                var6 = var8.substr;
                var2 = 7;
                var2 = var6.bind(var8)(var2, var7);
                var2 = var4 + var2;
                var6 = var8.substr;
                var4 = 9;
                var4 = var6.bind(var8)(var4, var7);
                var2 = var2 + var5;
                var2 = var2 + var4;
                var1 = var3 + var2;
            case 194:
                var0 = var1;
            case 197:
                return var0;
        }
    };
    var7 = function(arg0) { // Original name: getEncodingName, environment: var4
        _fun38159: for (var _fun38159_ip = 0;;) switch (_fun38159_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var14 = var1.bind(var2)(var0);
                var0 = 'UTF-8';
                var1 = '\x1b%G';
                if (!(var1 !== var14)) {
                    _fun38159_ip = 304;
                    continue _fun38159
                }
            case 57:
                var1 = 'Windows-1252';
                var2 = '\x1b%5';
                if (!(var2 !== var14)) {
                    _fun38159_ip = 301;
                    continue _fun38159
                }
            case 76:
                var2 = 'UTF-8 Level 1';
                var3 = '\x1b%/G';
                if (!(var3 !== var14)) {
                    _fun38159_ip = 298;
                    continue _fun38159
                }
            case 95:
                var3 = 'UTF-8 Level 2';
                var4 = '\x1b%/H';
                if (!(var4 !== var14)) {
                    _fun38159_ip = 295;
                    continue _fun38159
                }
            case 114:
                var4 = 'UTF-8 Level 3';
                var5 = '\x1b%/I';
                if (!(var5 !== var14)) {
                    _fun38159_ip = 292;
                    continue _fun38159
                }
            case 133:
                var5 = 'ISO-8859-1';
                var6 = '\x1b/A';
                if (!(var6 !== var14)) {
                    _fun38159_ip = 289;
                    continue _fun38159
                }
            case 152:
                var6 = 'ISO-8859-2';
                var7 = '\x1b/B';
                if (!(var7 !== var14)) {
                    _fun38159_ip = 286;
                    continue _fun38159
                }
            case 168:
                var7 = 'ISO-8859-3';
                var8 = '\x1b/C';
                if (!(var8 !== var14)) {
                    _fun38159_ip = 283;
                    continue _fun38159
                }
            case 184:
                var8 = 'ISO-8859-4';
                var9 = '\x1b/D';
                if (!(var9 !== var14)) {
                    _fun38159_ip = 280;
                    continue _fun38159
                }
            case 200:
                var9 = 'ISO-8859-5';
                var10 = '\x1b/@';
                if (!(var10 !== var14)) {
                    _fun38159_ip = 277;
                    continue _fun38159
                }
            case 216:
                var10 = 'ISO-8859-6';
                var11 = '\x1b/G';
                if (!(var11 !== var14)) {
                    _fun38159_ip = 274;
                    continue _fun38159
                }
            case 232:
                var11 = 'ISO-8859-7';
                var12 = '\x1b/F';
                if (!(var12 !== var14)) {
                    _fun38159_ip = 271;
                    continue _fun38159
                }
            case 248:
                var12 = 'Unknown';
                var13 = '\x1b/H';
                if (!(var13 === var14)) {
                    _fun38159_ip = 268;
                    continue _fun38159
                }
            case 262:
                var12 = 'ISO-8859-8';
            case 268:
                var11 = var12;
            case 271:
                var10 = var11;
            case 274:
                var9 = var10;
            case 277:
                var8 = var9;
            case 280:
                var7 = var8;
            case 283:
                var6 = var7;
            case 286:
                var5 = var6;
            case 289:
                var4 = var5;
            case 292:
                var3 = var4;
            case 295:
                var2 = var3;
            case 298:
                var1 = var2;
            case 301:
                var0 = var1;
            case 304:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var1, var0, var2);
    var0 = {};
    var2 = {
        286: 'Service Identifier',
        296: 'Envelope Number',
        306: 'Product ID',
        316: 'Envelope Priority',
        356: 'UNO',
        515: 'Object Type Reference',
        516: 'Object Attribute Reference',
        517: 'Object Name',
        519: 'Edit Status',
        522: 'Urgency',
        527: 'Category',
        534: 'Fixture Identifier',
        542: 'Release Date',
        547: 'Release Time',
        549: 'Expiration Date',
        550: 'Expiration Time',
        552: 'Special Instructions',
        577: 'Originating Program',
        582: 'Program Version',
        602: 'City',
        604: 'Sub-location',
        607: 'Province/State',
        612: 'Country/Primary Location Code',
        613: 'Country/Primary Location Name',
        615: 'Original Transmission Reference',
        617: 'Headline',
        622: 'Credit',
        627: 'Source',
        628: 'Copyright Notice',
        632: 'Caption/Abstract',
        642: 'Image Type',
        647: 'Language Identifier',
        666: 'Audio Outcue',
        698: 'Short Document ID',
        699: 'Unique Document ID',
        700: 'Owner ID',
        714: 'ObjectData Preview Data'
    };
    var3 = {};
    var8 = 'Model Version';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var8;
    var2[256] = var3;
    var3 = {
        'name': 'Destination',
        'repeatable': true
    };
    var2[261] = var3;
    var3 = {};
    var8 = 'File Format';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var8;
    var2[276] = var3;
    var3 = {};
    var8 = 'File Format Version';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var8;
    var2[278] = var3;
    var3 = {};
    var8 = 'Date Sent';
    var3.name = var8;
    var3.description = var6;
    var2[326] = var3;
    var3 = {};
    var8 = 'Time Sent';
    var3.name = var8;
    var3.description = var5;
    var2[336] = var3;
    var3 = {};
    var8 = 'Coded Character Set';
    var3.name = var8;
    var3.description = var7;
    var3.encoding_name = var7;
    var2[346] = var3;
    var3 = {};
    var7 = 'ARM Identifier';
    var3.name = var7;
    var7 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var7;
    var2[376] = var3;
    var3 = {};
    var7 = 'ARM Version';
    var3.name = var7;
    var7 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var7;
    var2[378] = var3;
    var3 = {};
    var7 = 'Record Version';
    var3.name = var7;
    var7 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 8;
        var1 = var1 << var0;
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 + var0;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var7;
    var2[512] = var3;
    var3 = {};
    var7 = 'Editorial Update';
    var3.name = var7;
    var7 = function(arg0) { // Original name: description, environment: var4
        _fun38166: for (var _fun38166_ip = 0;;) switch (_fun38166_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = 'Unknown';
                var1 = '01';
                if (!(var1 === var2)) {
                    _fun38166_ip = 56;
                    continue _fun38166
                }
            case 50:
                var0 = 'Additional Language';
            case 56:
                return var0;
        }
    };
    var3.description = var7;
    var2[520] = var3;
    var3 = {
        'name': 'Subject Reference',
        'repeatable': true
    };
    var7 = function(arg0) { // Original name: description, environment: var4
        _fun38167: for (var _fun38167_ip = 0;;) switch (_fun38167_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = var2.split;
                var0 = ':';
                var3 = var1.bind(var2)(var0);
                var0 = 2;
                var2 = var3[var0];
                var4 = 3;
                var5 = var3[var4];
                var1 = '';
                var0 = var1;
                if (!var5) {
                    _fun38167_ip = 88;
                    continue _fun38167
                }
            case 76:
                var5 = var3[var4];
                var4 = '/';
                var0 = var4 + var5;
            case 88:
                var0 = var2 + var0;
                var2 = 4;
                var4 = var3[var2];
                if (!var4) {
                    _fun38167_ip = 114;
                    continue _fun38167
                }
            case 102:
                var3 = var3[var2];
                var2 = '/';
                var1 = var2 + var3;
            case 114:
                var0 = var0 + var1;
                return var0;
        }
    };
    var3.description = var7;
    var2[524] = var3;
    var3 = {
        'name': 'Supplemental Category',
        'repeatable': true
    };
    var2[532] = var3;
    var3 = {
        'name': 'Keywords',
        'repeatable': true
    };
    var2[537] = var3;
    var3 = {
        'name': 'Content Location Code',
        'repeatable': true
    };
    var2[538] = var3;
    var3 = {
        'name': 'Content Location Name',
        'repeatable': true
    };
    var2[539] = var3;
    var3 = {};
    var7 = 'Action Advised';
    var3.name = var7;
    var7 = function(arg0) { // Original name: description, environment: var4
        _fun38168: for (var _fun38168_ip = 0;;) switch (_fun38168_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var5 = var1.bind(var2)(var0);
                var0 = 'Object Kill';
                var1 = '01';
                if (!(var1 !== var5)) {
                    _fun38168_ip = 107;
                    continue _fun38168
                }
            case 52:
                var1 = 'Object Replace';
                var2 = '02';
                if (!(var2 !== var5)) {
                    _fun38168_ip = 104;
                    continue _fun38168
                }
            case 66:
                var2 = 'Object Append';
                var3 = '03';
                if (!(var3 !== var5)) {
                    _fun38168_ip = 101;
                    continue _fun38168
                }
            case 80:
                var3 = 'Unknown';
                var4 = '04';
                if (!(var4 === var5)) {
                    _fun38168_ip = 98;
                    continue _fun38168
                }
            case 92:
                var3 = 'Object Reference';
            case 98:
                var2 = var3;
            case 101:
                var1 = var2;
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var3.description = var7;
    var2[554] = var3;
    var3 = {
        'name': 'Reference Service',
        'repeatable': true
    };
    var2[557] = var3;
    var3 = {
        'name': 'Reference Date',
        'repeatable': true
    };
    var2[559] = var3;
    var3 = {
        'name': 'Reference Number',
        'repeatable': true
    };
    var2[562] = var3;
    var3 = {};
    var7 = 'Date Created';
    var3.name = var7;
    var3.description = var6;
    var2[567] = var3;
    var3 = {};
    var7 = 'Time Created';
    var3.name = var7;
    var3.description = var5;
    var2[572] = var3;
    var3 = {};
    var7 = 'Digital Creation Date';
    var3.name = var7;
    var3.description = var6;
    var2[574] = var3;
    var3 = {};
    var6 = 'Digital Creation Time';
    var3.name = var6;
    var3.description = var5;
    var2[575] = var3;
    var3 = {};
    var5 = 'Object Cycle';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38169: for (var _fun38169_ip = 0;;) switch (_fun38169_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var4 = var1.bind(var2)(var0);
                var0 = 'morning';
                var1 = 'a';
                if (!(var1 !== var4)) {
                    _fun38169_ip = 86;
                    continue _fun38169
                }
            case 50:
                var1 = 'evening';
                var2 = 'p';
                if (!(var2 !== var4)) {
                    _fun38169_ip = 83;
                    continue _fun38169
                }
            case 62:
                var2 = 'Unknown';
                var3 = 'b';
                if (!(var3 === var4)) {
                    _fun38169_ip = 80;
                    continue _fun38169
                }
            case 74:
                var2 = 'both';
            case 80:
                var1 = var2;
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var3.description = var5;
    var2[587] = var3;
    var3 = {
        'name': 'By-line',
        'repeatable': true
    };
    var2[592] = var3;
    var3 = {
        'name': 'By-line Title',
        'repeatable': true
    };
    var2[597] = var3;
    var3 = {
        'name': 'Contact',
        'repeatable': true
    };
    var2[630] = var3;
    var3 = {
        'name': 'Writer/Editor',
        'repeatable': true
    };
    var2[634] = var3;
    var3 = {};
    var5 = 'Rasterized Caption';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        var0 = arg0;
        return var0;
    };
    var3.description = var5;
    var2[637] = var3;
    var3 = {};
    var5 = 'Image Orientation';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38171: for (var _fun38171_ip = 0;;) switch (_fun38171_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringValue;
                var0 = arg0;
                var4 = var1.bind(var2)(var0);
                var0 = 'Portrait';
                var1 = 'P';
                if (!(var1 !== var4)) {
                    _fun38171_ip = 90;
                    continue _fun38171
                }
            case 52:
                var1 = 'Landscape';
                var2 = 'L';
                if (!(var2 !== var4)) {
                    _fun38171_ip = 87;
                    continue _fun38171
                }
            case 66:
                var2 = 'Unknown';
                var3 = 'S';
                if (!(var3 === var4)) {
                    _fun38171_ip = 84;
                    continue _fun38171
                }
            case 78:
                var2 = 'Square';
            case 84:
                var1 = var2;
            case 87:
                var0 = var1;
            case 90:
                return var0;
        }
    };
    var3.description = var5;
    var2[643] = var3;
    var3 = {};
    var5 = 'Audio Type';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38172: for (var _fun38172_ip = 0;;) switch (_fun38172_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getStringValue;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var1 = var0.charAt;
                var2 = var1.bind(var0)(var2);
                var3 = var0.charAt;
                var1 = 1;
                var4 = var3.bind(var0)(var1);
                var3 = 'Mono';
                var1 = '1';
                if (!(var1 !== var2)) {
                    _fun38172_ip = 99;
                    continue _fun38172
                }
            case 79:
                var3 = '';
                var1 = '2';
                if (!(var1 === var2)) {
                    _fun38172_ip = 99;
                    continue _fun38172
                }
            case 93:
                var3 = 'Stereo';
            case 99:
                var1 = 'A';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 256;
                    continue _fun38172
                }
            case 110:
                var1 = 'C';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 244;
                    continue _fun38172
                }
            case 121:
                var1 = 'M';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 232;
                    continue _fun38172
                }
            case 129:
                var1 = 'Q';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 220;
                    continue _fun38172
                }
            case 137:
                var1 = 'R';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 208;
                    continue _fun38172
                }
            case 145:
                var1 = 'S';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 196;
                    continue _fun38172
                }
            case 153:
                var1 = 'V';
                if (!(var1 !== var4)) {
                    _fun38172_ip = 184;
                    continue _fun38172
                }
            case 161:
                var2 = 'W';
                var1 = var3;
                if (!(var2 === var4)) {
                    _fun38172_ip = 266;
                    continue _fun38172
                }
            case 172:
                var2 = ', wrap';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 184:
                var2 = ', voicer';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 196:
                var2 = ', scener';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 208:
                var2 = ', raw sound';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 220:
                var2 = ', response to a question';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 232:
                var2 = ', music, transmitted by itself';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 244:
                var2 = ', question and answer session';
                var1 = var3 + var2;
                _fun38172_ip = 266;
                continue _fun38172;
            case 256:
                var2 = ', actuality';
                var1 = var3 + var2;
            case 266:
                var2 = '';
                if (!(var2 !== var1)) {
                    _fun38172_ip = 277;
                    continue _fun38172
                }
            case 274:
                var0 = var1;
            case 277:
                return var0;
        }
    };
    var3.description = var5;
    var2[662] = var3;
    var3 = {};
    var5 = 'Audio Sampling Rate';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        var0 = global;
        var3 = var0.parseInt;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var0 = var2[var0];
        var2 = undefined;
        var4 = var1.bind(var2)(var0);
        var1 = var4.getStringValue;
        var0 = arg0;
        var1 = var1.bind(var4)(var0);
        var0 = 10;
        var1 = var3.bind(var2)(var1, var0);
        var0 = ' Hz';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var5;
    var2[663] = var3;
    var3 = {};
    var5 = 'Audio Sampling Resolution';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38174: for (var _fun38174_ip = 0;;) switch (_fun38174_ip) {
            case 0:
                var0 = global;
                var3 = var0.parseInt;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var1.bind(var2)(var0);
                var1 = var4.getStringValue;
                var0 = arg0;
                var1 = var1.bind(var4)(var0);
                var0 = 10;
                var1 = var3.bind(var2)(var1, var0);
                var0 = ' bits';
                var2 = 1;
                if (!(var2 === var1)) {
                    _fun38174_ip = 74;
                    continue _fun38174
                }
            case 68:
                var0 = ' bit';
            case 74:
                var0 = var1 + var0;
                return var0;
        }
    };
    var3.description = var5;
    var2[664] = var3;
    var3 = {};
    var5 = 'Audio Duration';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38175: for (var _fun38175_ip = 0;;) switch (_fun38175_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getStringValue;
                var0 = arg0;
                var6 = var1.bind(var3)(var0);
                var3 = var6.length;
                var1 = 6;
                var0 = var6;
                if (!(var3 >= var1)) {
                    _fun38175_ip = 115;
                    continue _fun38175
                }
            case 53:
                var1 = var6.substr;
                var5 = 2;
                var1 = var1.bind(var6)(var2, var5);
                var3 = ':';
                var2 = var1 + var3;
                var1 = var6.substr;
                var1 = var1.bind(var6)(var5, var5);
                var1 = var2 + var1;
                var4 = var6.substr;
                var2 = 4;
                var2 = var4.bind(var6)(var2, var5);
                var1 = var1 + var3;
                var0 = var1 + var2;
            case 115:
                return var0;
        }
    };
    var3.description = var5;
    var2[665] = var3;
    var3 = {};
    var5 = function(arg0) { // Original name: name, environment: var4
        _fun38176: for (var _fun38176_ip = 0;;) switch (_fun38176_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.length;
                var0 = 'Record 2 destination';
                var1 = 2;
                if (!(var1 === var2)) {
                    _fun38176_ip = 25;
                    continue _fun38176
                }
            case 21:
                var0 = 'ObjectData Preview File Format';
            case 25:
                return var0;
        }
    };
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38177: for (var _fun38177_ip = 0;;) switch (_fun38177_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.length;
                var3 = 2;
                if (!(var3 !== var1)) {
                    _fun38177_ip = 52;
                    continue _fun38177
                }
            case 15:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getStringValue;
                var1 = var1.bind(var2)(var0);
                return var1;
            case 52:
                var1 = 0;
                var2 = var0[var1];
                var9 = 8;
                var4 = var2 << var9;
                var2 = 1;
                var0 = var0[var2];
                var32 = var4 + var0;
                var0 = 'No ObjectData';
                if (!(var1 !== var32)) {
                    _fun38177_ip = 634;
                    continue _fun38177
                }
            case 89:
                var1 = 'IPTC-NAA Digital Newsphoto Parameter Record';
                if (!(var2 !== var32)) {
                    _fun38177_ip = 631;
                    continue _fun38177
                }
            case 102:
                var2 = 'IPTC7901 Recommended Message Format';
                if (!(var3 !== var32)) {
                    _fun38177_ip = 628;
                    continue _fun38177
                }
            case 115:
                var3 = 'Tagged Image File Format (Adobe/Aldus Image data)';
                var4 = 3;
                if (!(var4 !== var32)) {
                    _fun38177_ip = 625;
                    continue _fun38177
                }
            case 131:
                var4 = 'Illustrator (Adobe Graphics data)';
                var5 = 4;
                if (!(var5 !== var32)) {
                    _fun38177_ip = 622;
                    continue _fun38177
                }
            case 147:
                var5 = 'AppleSingle (Apple Computer Inc)';
                var6 = 5;
                if (!(var6 !== var32)) {
                    _fun38177_ip = 619;
                    continue _fun38177
                }
            case 163:
                var6 = 'NAA 89-3 (ANPA 1312)';
                var7 = 6;
                if (!(var7 !== var32)) {
                    _fun38177_ip = 616;
                    continue _fun38177
                }
            case 179:
                var7 = 'MacBinary II';
                var8 = 7;
                if (!(var8 !== var32)) {
                    _fun38177_ip = 613;
                    continue _fun38177
                }
            case 195:
                var8 = 'IPTC Unstructured Character Oriented File Format (UCOFF)';
                if (!(var9 !== var32)) {
                    _fun38177_ip = 610;
                    continue _fun38177
                }
            case 208:
                var9 = 'United Press International ANPA 1312 variant';
                var10 = 9;
                if (!(var10 !== var32)) {
                    _fun38177_ip = 607;
                    continue _fun38177
                }
            case 224:
                var10 = 'United Press International Down-Load Message';
                var11 = 10;
                if (!(var11 !== var32)) {
                    _fun38177_ip = 604;
                    continue _fun38177
                }
            case 240:
                var11 = 'JPEG File Interchange (JFIF)';
                var12 = 11;
                if (!(var12 !== var32)) {
                    _fun38177_ip = 601;
                    continue _fun38177
                }
            case 256:
                var12 = 'Photo-CD Image-Pac (Eastman Kodak)';
                var13 = 12;
                if (!(var13 !== var32)) {
                    _fun38177_ip = 598;
                    continue _fun38177
                }
            case 272:
                var13 = 'Microsoft Bit Mapped Graphics File [*.BMP]';
                var14 = 13;
                if (!(var14 !== var32)) {
                    _fun38177_ip = 595;
                    continue _fun38177
                }
            case 288:
                var14 = 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
                var15 = 14;
                if (!(var15 !== var32)) {
                    _fun38177_ip = 592;
                    continue _fun38177
                }
            case 304:
                var15 = 'Audio plus Moving Video [*.AVI] (Microsoft)';
                var16 = 15;
                if (!(var16 !== var32)) {
                    _fun38177_ip = 589;
                    continue _fun38177
                }
            case 320:
                var16 = 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
                var17 = 16;
                if (!(var17 !== var32)) {
                    _fun38177_ip = 586;
                    continue _fun38177
                }
            case 336:
                var17 = 'Compressed Binary File [*.ZIP] (PKWare Inc)';
                var18 = 17;
                if (!(var18 !== var32)) {
                    _fun38177_ip = 583;
                    continue _fun38177
                }
            case 352:
                var18 = 'Audio Interchange File Format AIFF (Apple Computer Inc)';
                var19 = 18;
                if (!(var19 !== var32)) {
                    _fun38177_ip = 580;
                    continue _fun38177
                }
            case 368:
                var19 = 'RIFF Wave (Microsoft Corporation)';
                var20 = 19;
                if (!(var20 !== var32)) {
                    _fun38177_ip = 577;
                    continue _fun38177
                }
            case 384:
                var20 = 'Freehand (Macromedia/Aldus)';
                var21 = 20;
                if (!(var21 !== var32)) {
                    _fun38177_ip = 574;
                    continue _fun38177
                }
            case 400:
                var21 = 'Hypertext Markup Language "HTML" (The Internet Society)';
                var22 = 21;
                if (!(var22 !== var32)) {
                    _fun38177_ip = 571;
                    continue _fun38177
                }
            case 416:
                var22 = 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
                var23 = 22;
                if (!(var23 !== var32)) {
                    _fun38177_ip = 568;
                    continue _fun38177
                }
            case 432:
                var23 = 'MPEG 2 Audio Layer 3, ISO/IEC';
                var24 = 23;
                if (!(var24 !== var32)) {
                    _fun38177_ip = 565;
                    continue _fun38177
                }
            case 445:
                var24 = 'Portable Document File (*.PDF) Adobe';
                var25 = 24;
                if (!(var25 !== var32)) {
                    _fun38177_ip = 562;
                    continue _fun38177
                }
            case 458:
                var25 = 'News Industry Text Format (NITF)';
                var26 = 25;
                if (!(var26 !== var32)) {
                    _fun38177_ip = 559;
                    continue _fun38177
                }
            case 471:
                var26 = 'Tape Archive (*.TAR)';
                var27 = 26;
                if (!(var27 !== var32)) {
                    _fun38177_ip = 556;
                    continue _fun38177
                }
            case 484:
                var27 = 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
                var28 = 27;
                if (!(var28 !== var32)) {
                    _fun38177_ip = 553;
                    continue _fun38177
                }
            case 497:
                var28 = 'Ritzaus Bureau NITF version (RBNITF DTD)';
                var29 = 28;
                if (!(var29 !== var32)) {
                    _fun38177_ip = 550;
                    continue _fun38177
                }
            case 510:
                var29 = 'Corel Draw [*.CDR]';
                var30 = 29;
                if (!(var30 !== var32)) {
                    _fun38177_ip = 547;
                    continue _fun38177
                }
            case 523:
                var30 = global;
                var30 = var30.HermesInternal;
                var31 = var30.concat;
                var30 = 'Unknown format ';
                var29 = var31.bind(var30)(var32);
            case 547:
                var28 = var29;
            case 550:
                var27 = var28;
            case 553:
                var26 = var27;
            case 556:
                var25 = var26;
            case 559:
                var24 = var25;
            case 562:
                var23 = var24;
            case 565:
                var22 = var23;
            case 568:
                var21 = var22;
            case 571:
                var20 = var21;
            case 574:
                var19 = var20;
            case 577:
                var18 = var19;
            case 580:
                var17 = var18;
            case 583:
                var16 = var17;
            case 586:
                var15 = var16;
            case 589:
                var14 = var15;
            case 592:
                var13 = var14;
            case 595:
                var12 = var13;
            case 598:
                var11 = var12;
            case 601:
                var10 = var11;
            case 604:
                var9 = var10;
            case 607:
                var8 = var9;
            case 610:
                var7 = var8;
            case 613:
                var6 = var7;
            case 616:
                var5 = var6;
            case 619:
                var4 = var5;
            case 622:
                var3 = var4;
            case 625:
                var2 = var3;
            case 628:
                var1 = var2;
            case 631:
                var0 = var1;
            case 634:
                return var0;
        }
    };
    var3.description = var5;
    var2[712] = var3;
    var3 = {};
    var5 = 'ObjectData Preview File Format Version';
    var3.name = var5;
    var5 = function(arg0, arg1) { // Original name: description, environment: var4
        _fun38178: for (var _fun38178_ip = 0;;) switch (_fun38178_ip) {
            case 0:
                var0 = arg1;
                var2 = {};
                var1 = {};
                var3 = '1';
                var1['00'] = var3;
                var2['00'] = var1;
                var4 = '2';
                var5 = '4';
                var1 = {
                    '01': '1',
                    '02': '2',
                    '03': '3',
                    '04': '4'
                };
                var2['01'] = var1;
                var1 = {};
                var1['04'] = var5;
                var2['02'] = var1;
                var1 = {
                    '01': '5.0',
                    '02': '6.0'
                };
                var2['03'] = var1;
                var1 = {};
                var5 = '1.40';
                var1['01'] = var5;
                var2['04'] = var1;
                var1 = {};
                var1['01'] = var4;
                var2['05'] = var1;
                var1 = {};
                var1['01'] = var3;
                var2['06'] = var1;
                var1 = {};
                var3 = '1.02';
                var1['01'] = var3;
                var2[11] = var1;
                var1 = {
                    '01': '3.1',
                    '02': '4.0',
                    '03': '5.0',
                    '04': '5.5'
                };
                var2[20] = var1;
                var1 = {};
                var3 = '2.0';
                var1['02'] = var3;
                var2[21] = var1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 0;
                var1 = var1[var6];
                var5 = undefined;
                var7 = var4.bind(var5)(var1);
                var4 = var7.getStringValue;
                var1 = arg0;
                var1 = var4.bind(var7)(var1);
                var4 = var0["ObjectData Preview File Format"];
                if (!var4) {
                    _fun38178_ip = 287;
                    continue _fun38178
                }
            case 230:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getStringValue;
                var0 = var0["ObjectData Preview File Format"];
                var0 = var0.value;
                var0 = var3.bind(var4)(var0);
                var3 = var2[var0];
                if (!var3) {
                    _fun38178_ip = 287;
                    continue _fun38178
                }
            case 276:
                var3 = var2[var0];
                var3 = var3[var1];
                if (var3) {
                    _fun38178_ip = 289;
                    continue _fun38178
                }
            case 287:
                return var1;
            case 289:
                var0 = var2[var0];
                var0 = var0[var1];
                return var0;
        }
    };
    var3.description = var5;
    var2[713] = var3;
    var3 = {};
    var5 = 'Size Mode';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        var1 = arg0;
        var0 = 0;
        var1 = var1[var0];
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.description = var5;
    var2[1802] = var3;
    var3 = {};
    var5 = 'Max Subfile Size';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38180: for (var _fun38180_ip = 0;;) switch (_fun38180_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.length;
                var1 = 0;
                var0 = var1 < var0;
                var4 = 8;
                var3 = 0;
                var2 = 0;
                if (!var0) {
                    _fun38180_ip = 51;
                    continue _fun38180
                }
            case 24:
                var6 = var5[var2];
                var0 = var3 << var4;
                var3 = var0 + var6;
                var2 = var2 + 1;
                var0 = var5.length;
                var1 = var3;
                if (var2 < var0) {
                    _fun38180_ip = 24;
                    continue _fun38180
                }
            case 51:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.description = var5;
    var2[1812] = var3;
    var3 = {};
    var5 = 'ObjectData Size Announced';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38181: for (var _fun38181_ip = 0;;) switch (_fun38181_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.length;
                var1 = 0;
                var0 = var1 < var0;
                var4 = 8;
                var3 = 0;
                var2 = 0;
                if (!var0) {
                    _fun38181_ip = 51;
                    continue _fun38181
                }
            case 24:
                var6 = var5[var2];
                var0 = var3 << var4;
                var3 = var0 + var6;
                var2 = var2 + 1;
                var0 = var5.length;
                var1 = var3;
                if (var2 < var0) {
                    _fun38181_ip = 24;
                    continue _fun38181
                }
            case 51:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.description = var5;
    var2[1882] = var3;
    var3 = {};
    var5 = 'Maximum ObjectData Size';
    var3.name = var5;
    var4 = function(arg0) { // Original name: description, environment: var4
        _fun38182: for (var _fun38182_ip = 0;;) switch (_fun38182_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.length;
                var1 = 0;
                var0 = var1 < var0;
                var4 = 8;
                var3 = 0;
                var2 = 0;
                if (!var0) {
                    _fun38182_ip = 51;
                    continue _fun38182
                }
            case 24:
                var6 = var5[var2];
                var0 = var3 << var4;
                var3 = var0 + var6;
                var2 = var2 + 1;
                var0 = var5.length;
                var1 = var3;
                if (var2 < var0) {
                    _fun38182_ip = 24;
                    continue _fun38182
                }
            case 51:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.description = var4;
    var2[1887] = var3;
    var0.iptc = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4154]);