/** chunk id: 488703 params = (module,exports,require) **/
n.d(t, {
    A: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, a) => {
            let l = (0, i.snakeCase)(a);
            return "object" != typeof t[a] || Array.isArray(t[a]) ? n[l] = t[a] : n[l] = e(t[a]), n[l] = t[a], n
        }, {})
    },
    W: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, a) => {
            let l = (0, i.camelCase)(a);
            return "object" != typeof t[a] || Array.isArray(t[a]) ? n[l] = t[a] : n[l] = e(t[a]), n
        }, {})
    }
});
var i = n(735438)