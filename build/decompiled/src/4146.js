// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5.value = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var1, var2, var5);
    var1.OtherTypes = var0;
    var2 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = undefined;
        var1 = this;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = var3.bind(var0)(var2);
    var1.OtherTypes = var2;
    var1 = {
        'extension': 'blend',
        'mimeType': 'application/x-blender',
        'description': 'Blender File Format'
    };
    var4 = {};
    var3 = [66, 76, 69, 78, 68, 69, 82];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.BLEND = var1;
    var1 = {
        'extension': 'doc',
        'mimeType': 'application/msword',
        'description': 'Old Microsoft Word documents'
    };
    var4 = {};
    var3 = [208, 207, 17, 224, 161, 177, 26, 225];
    var4.sequence = var3;
    var3 = ['xls', 'ppt', 'msi', 'msg', 'dot', 'pps', 'xla', 'wiz'];
    var4.compatibleExtensions = var3;
    var3 = 'An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications';
    var4.description = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [219, 165, 45, 0];
    var4.sequence = var5;
    var5 = 'Microsoft Word 2.0 file format';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.DOC = var1;
    var1 = {
        'extension': 'elf',
        'mimeType': 'application/x-executable',
        'description': 'Executable and Linking Format executable file (Linux/Unix)'
    };
    var4 = {};
    var3 = [127, 69, 76, 70];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.ELF = var1;
    var1 = {
        'extension': 'exe',
        'mimeType': 'application/x-msdownload',
        'description': 'Windows/DOS executable file and its descendants'
    };
    var4 = {};
    var3 = [77, 90];
    var4.sequence = var3;
    var3 = ['acm', 'ax', 'cpl', 'com', 'dll', 'drv', 'efi', 'fon', 'iec', 'ime', 'mui', 'ocx', 'olb', 'pif', 'qts', 'qtx', 'rs', 'sys', 'scr', 'tsp', 'vbx', 'vxd'];
    var4.compatibleExtensions = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [90, 77];
    var4.sequence = var5;
    var5 = 'DOS ZM executable (rare)';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.EXE = var1;
    var1 = {
        'extension': 'indd',
        'mimeType': 'application/x-indesign',
        'description': 'Adobe InDesign document'
    };
    var4 = {};
    var3 = [6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29];
    var4.sequence = var3;
    var3 = ['indt'];
    var4.compatibleExtensions = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.INDD = var1;
    var1 = {
        'extension': 'macho',
        'mimeType': 'application/x-mach-binary',
        'description': 'Apple OS X ABI Mach-O binary file'
    };
    var4 = {};
    var3 = [254, 237, 250, 206];
    var4.sequence = var3;
    var3 = '32-bit';
    var4.description = var3;
    var3 = new Array(5);
    var3[0] = var4;
    var4 = {};
    var5 = [206, 250, 237, 254];
    var4.sequence = var5;
    var5 = '32-bit, where target system has reverse byte ordering from host running compiler';
    var4.description = var5;
    var3[1] = var4;
    var4 = {};
    var5 = [254, 237, 250, 207];
    var4.sequence = var5;
    var5 = '64-bit';
    var4.description = var5;
    var3[2] = var4;
    var4 = {};
    var5 = [207, 250, 237, 254];
    var4.sequence = var5;
    var5 = '64-bit, where target system has reverse byte ordering from host running compiler';
    var4.description = var5;
    var3[3] = var4;
    var4 = {};
    var5 = [202, 254, 186, 190];
    var4.sequence = var5;
    var5 = 'Mach-O Fat Binary';
    var4.description = var5;
    var3[4] = var4;
    var1.signatures = var3;
    var2.MACHO = var1;
    var1 = {
        'extension': 'pdf',
        'mimeType': 'application/pdf',
        'description': 'Portable Document Format'
    };
    var4 = {};
    var3 = [37, 80, 68, 70, 45];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.PDF = var1;
    var1 = {
        'extension': 'orc',
        'mimeType': 'application/x-orc',
        'description': 'Apache ORC (Optimized Row Columnar) file format for columnar storage'
    };
    var4 = {};
    var3 = [79, 82, 67];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.ORC = var1;
    var1 = {
        'extension': 'parquet',
        'mimeType': 'application/vnd.apache.parquet',
        'description': 'Apache Parquet file format for columnar storage'
    };
    var4 = {};
    var3 = [80, 65, 82, 49];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.PARQUET = var1;
    var1 = {
        'extension': 'ps',
        'mimeType': 'application/postscript',
        'description': 'PostScript document'
    };
    var4 = {};
    var3 = [37, 33, 80, 83];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.PS = var1;
    var1 = {
        'extension': 'rtf',
        'mimeType': 'application/rtf',
        'description': 'Rich Text Format word processing file'
    };
    var4 = {};
    var3 = [123, 92, 114, 116, 102, 49];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.RTF = var1;
    var1 = {
        'extension': 'sqlite',
        'mimeType': 'application/x-sqlite3',
        'description': 'SQLite database file'
    };
    var4 = {};
    var3 = [83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.SQLITE = var1;
    var1 = {
        'extension': 'stl',
        'mimeType': 'application/sla',
        'description': 'ASCII STL (STereoLithography) file for 3D printing'
    };
    var4 = {};
    var3 = [115, 111, 108, 105, 100];
    var4.sequence = var3;
    var3 = new Array(1);
    var3[0] = var4;
    var1.signatures = var3;
    var2.STL = var1;
    var1 = {
        'extension': 'ttf',
        'mimeType': 'application/x-font-ttf',
        'description': 'TrueType font file'
    };
    var4 = {};
    var3 = [116, 114, 117, 101, 0];
    var4.sequence = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [0, 1, 0, 0, 0];
    var4.sequence = var5;
    var5 = ['tte, dfont'];
    var4.compatibleExtensions = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.TTF = var1;
    var1 = {
        'extension': 'pcap',
        'mimeType': 'application/vnd.tcpdump.pcap',
        'description': 'Libpcap File Format'
    };
    var4 = {};
    var3 = [212, 195, 178, 161];
    var4.sequence = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var5 = [77, 60, 178, 161];
    var4.sequence = var5;
    var5 = 'Nanosecond resolution';
    var4.description = var5;
    var3[1] = var4;
    var1.signatures = var3;
    var2.PCAP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6]);