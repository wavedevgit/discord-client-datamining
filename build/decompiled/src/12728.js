// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = {
        'name': 'react-native-url-polyfill',
        'version': '2.0.0',
        'description': 'A lightweight and trustworthy URL polyfill for React Native',
        'keywords': null,
        'bugs': null,
        'homepage': 'https://github.com/charpeni/react-native-url-polyfill',
        'readme': 'https://github.com/charpeni/react-native-url-polyfill#readme',
        'repository': null,
        'main': 'index.js',
        'types': 'index.d.ts'
    };
    var0 = ['URL', 'URLSearchParams', 'polyfill', 'react native', 'whatwg-url'];
    var1.keywords = var0;
    var0 = {};
    var2 = 'https://github.com/charpeni/react-native-url-polyfill/issues';
    var0.url = var2;
    var1.bugs = var0;
    var0 = {
        'type': 'git',
        'url': 'https://github.com/charpeni/react-native-url-polyfill.git'
    };
    var1.repository = var0;
    var0 = {
        'test': 'jest',
        'lint': 'eslint .',
        'prepare': 'husky install',
        'bundle-size': 'node scripts/bundle-size'
    };
    var1.scripts = var0;
    var0 = 'Nicolas Charpentier <nicolas.charpentier079@gmail.com>';
    var1.author = var0;
    var0 = 'MIT';
    var1.license = var0;
    var0 = {};
    var2 = '8.0.0-3';
    var0['whatwg-url-without-unicode'] = var2;
    var1.dependencies = var0;
    var0 = {
        '@react-native-community/eslint-config': '3.2.0',
        'detox': '20.9.1',
        'eslint': '8.44.0',
        'eslint-plugin-prettier': '4.2.1',
        'husky': '8.0.3',
        'jest': '29.5.0',
        'lint-staged': '13.2.3',
        'metro-react-native-babel-preset': '0.76.7',
        'nanoid': '3.3.6',
        'prettier': '2.8.8',
        'react': '18.2.0',
        'react-native': '0.72.1',
        'react-native-bundle-scale': '1.1.0',
        'typescript': '5.1.6'
    };
    var1.devDependencies = var0;
    var0 = {};
    var2 = '*';
    var0['react-native'] = var2;
    var1.peerDependencies = var0;
    var0 = {};
    var2 = 'react-native';
    var0.preset = var2;
    var2 = ['/node_modules/', './platforms/'];
    var0.testPathIgnorePatterns = var2;
    var1.jest = var0;
    var0 = {};
    var2 = ['eslint --fix'];
    var0['*.js'] = var2;
    var1['lint-staged'] = var0;
    var0 = module;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);