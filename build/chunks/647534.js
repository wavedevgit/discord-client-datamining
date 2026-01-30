/** chunk id: 647534, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => l
});
var i = t(627968),
    r = t(397927);

function l(e) {
    (0, r.mMO)(async () => {
        let {
            default: n
        } = await Promise.all([t.e("63379"), t.e("72668")]).then(t.bind(t, 404128));
        return t => (0, i.jsx)(n, function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.forEach(function(n) {
                    var i;
                    i = t[n], n in e ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = i
                })
            }
            return e
        }({
            guildId: e
        }, t))
    })
}