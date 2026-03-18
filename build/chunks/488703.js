/** chunk id: 488703 params = (module,exports,require) **/
n.d(t, {
    A: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, i) => {
            let r = (0, l.snakeCase)(i);
            return "object" != typeof t[i] || Array.isArray(t[i]) ? n[r] = t[i] : n[r] = e(t[i]), n[r] = t[i], n
        }, {})
    },
    W: () => function e(t) {
        return null == t ? t : Object.keys(t).reduce((n, i) => {
            let r = (0, l.camelCase)(i);
            return "object" != typeof t[i] || Array.isArray(t[i]) ? n[r] = t[i] : n[r] = e(t[i]), n
        }, {})
    }
});
var l = n(735438)