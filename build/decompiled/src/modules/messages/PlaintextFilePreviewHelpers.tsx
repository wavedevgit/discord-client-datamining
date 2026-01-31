// modules/messages/PlaintextFilePreviewHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var4 = var0.Set;
    var0 = var4.prototype;
    var3 = Object.create(var0, {
        constructor: {
            value: var4
        }
    });
    var9 = ['1c', '4d', 'abnf', 'accesslog', 'ada', 'arduino', 'ino', 'armasm', 'arm', 'avrasm', 'actionscript', 'as', 'ass', 'ssa', 'alan', 'ansi', 'i', 'log', 'ln', 'angelscript', 'asc', 'apache', 'apacheconf', 'applescript', 'osascript', 'arcade', 'asciidoc', 'adoc', 'aspectj', 'autohotkey', 'autoit', 'awk', 'mawk', 'nawk', 'gawk', 'bash', 'sh', 'zsh', 'basic', 'bbcode', 'blade', 'bnf', 'brainfuck', 'bf', 'csharp', 'cs', 'c', 'h', 'cpp', 'hpp', 'cc', 'hh', 'c++', 'h++', 'cxx', 'hxx', 'cal', 'cos', 'cls', 'cmake', 'cmake.in', 'coq', 'csp', 'css', 'csv', 'capnproto', 'capnp', 'chaos', 'kaos', 'chapel', 'chpl', 'cisco', 'clojure', 'clj', 'coffeescript', 'coffee', 'cson', 'iced', 'cpc', 'crmsh', 'crm', 'pcmk', 'crystal', 'cr', 'cypher', 'd', 'dns', 'zone', 'bind', 'dos', 'bat', 'cmd', 'dart', 'delphi', 'dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm', 'diff', 'patch', 'django', 'jinja', 'dockerfile', 'docker', 'dsconfig', 'dts', 'dust', 'dst', 'dylan', 'ebnf', 'elixir', 'ex', 'elm', 'erlang', 'erl', 'extempore', 'xtlang', 'xtm', 'fsharp', 'fs', 'fix', 'fortran', 'f90', 'f95', 'gcode', 'nc', 'gams', 'gms', 'gauss', 'gss', 'godot', 'gdscript', 'gherkin', 'gn', 'gni', 'go', 'golang', 'gf', 'golo', 'gololang', 'gradle', 'groovy', 'xml', 'html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'svg', 'http', 'https', 'haml', 'handlebars', 'hbs', 'html.hbs', 'html.handlebars', 'haskell', 'hs', 'haxe', 'hx', 'hy', 'hylang', 'ini', 'toml', 'inform7', 'i7', 'irpf90', 'json', 'java', 'jsp', 'javascript', 'js', 'jsx', 'jolie', 'iol', 'ol', 'julia', 'julia-repl', 'kotlin', 'kt', 'tex', 'leaf', 'lean', 'lasso', 'ls', 'lassoscript', 'less', 'ldif', 'lisp', 'livecodeserver', 'livescript', 'lock', 'ls', 'lua', 'makefile', 'mk', 'mak', 'make', 'markdown', 'md', 'mkdown', 'mkd', 'mathematica', 'mma', 'wl', 'matlab', 'maxima', 'mel', 'mercury', 'mirc', 'mrc', 'mizar', 'mojolicious', 'monkey', 'moonscript', 'moon', 'n1ql', 'nsis', 'never', 'nginx', 'nginxconf', 'nim', 'nimrod', 'nix', 'ocl', 'ocaml', 'ml', 'objectivec', 'mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++', 'glsl', 'openscad', 'scad', 'ruleslanguage', 'oxygene', 'pf', 'pf.conf', 'php', 'php3', 'php4', 'php5', 'php6', 'php7', 'parser3', 'perl', 'pl', 'pm', 'plaintext', 'txt', 'text', 'pony', 'pgsql', 'postgres', 'postgresql', 'powershell', 'ps', 'ps1', 'processing', 'prolog', 'properties', 'proto', 'protobuf', 'puppet', 'pp', 'python', 'py', 'gyp', 'profile', 'python-repl', 'pycon', 'k', 'kdb', 'qml', 'r', 'cshtml', 'razor', 'razor-cshtml', 'reasonml', 're', 'redbol', 'rebol', 'red', 'red-system', 'rib', 'rsl', 'graph', 'instances', 'robot', 'rf', 'rpm-specfile', 'rpm', 'spec', 'rpm-spec', 'specfile', 'ruby', 'rb', 'gemspec', 'podspec', 'thor', 'irb', 'rust', 'rs', 'SAS', 'sas', 'scss', 'sql', 'p21', 'step', 'stp', 'scala', 'scheme', 'scilab', 'sci', 'shexc', 'shell', 'console', 'smali', 'smalltalk', 'st', 'sml', 'ml', 'solidity', 'sol', 'stan', 'stanfuncs', 'stata', 'iecst', 'scl', 'structured-text', 'stylus', 'styl', 'subunit', 'supercollider', 'sc', 'srt', 'svelte', 'swift', 'tcl', 'tk', 'terraform', 'tf', 'hcl', 'tap', 'thrift', 'tp', 'tsql', 'ttml', 'twig', 'craftcms', 'typescript', 'ts', 'tsx', 'unicorn-rails-log', 'vbnet', 'vb', 'vba', 'vbscript', 'vbs', 'vhdl', 'vala', 'verilog', 'v', 'vim', 'vtt', 'axapta', 'x++', 'x86asm', 'xl', 'tao', 'xquery', 'xpath', 'xq', 'yml', 'yaml', 'zephir', 'zep'];
    var10 = var3;
    var0 = new var10[var4](var9, var8);
    var3 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot0 = var3;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/PlaintextFilePreviewHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PLAINTEXT_FILE_EXTENSIONS = var3;
    var1 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = var2.has;
        var3 = var4.split;
        var0 = '.';
        var4 = var3.bind(var4)(var0);
        var3 = var4.slice;
        var0 = -1;
        var3 = var3.bind(var4)(var0);
        var0 = 0;
        var0 = var3[var0];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isPlaintextPreviewableFile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);