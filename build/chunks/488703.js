/** chunk id: 488703 params = (module,exports,require) **/
n.d(t, {
    A: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, l) => {
            let a = (0, i.snakeCase)(l);
            return "object" != typeof t[l] || Array.isArray(t[l]) ? n[a] = t[l] : n[a] = e(t[l]), n[a] = t[l], n
        }, {})
    },
    W: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, l) => {
            let a = (0, i.camelCase)(l);
            return "object" != typeof t[l] || Array.isArray(t[l]) ? n[a] = t[l] : n[a] = e(t[l]), n
        }, {})
    }
});
var i = n(735438)