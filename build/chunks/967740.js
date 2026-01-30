/** chunk id: 967740, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
});
var n = r(627968);
r(64700);
var l = r(201275),
    i = r(657048),
    o = r(63104);

function a(e) {
    let {
        guildId: t,
        role: r,
        size: a,
        className: c
    } = e, s = (0, l.$7)({
        guildId: t,
        roleId: r.id,
        size: a
    });
    return null != s ? (0, n.jsx)(i.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({
        className: c
    }, s)) : (0, n.jsx)(o.A, {
        color: r.colorString,
        className: c,
        size: a
    })
}