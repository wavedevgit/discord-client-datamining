/** chunk id: 72800, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(379848),
    d = n(967198),
    c = n(533550),
    u = n(49999),
    A = n(826898);
let h = r.memo(function(e) {
    let {
        state: t,
        markAsDismissed: n
    } = e, {
        name: l,
        guildId: s,
        boundingRect: o
    } = t, d = r.useMemo(() => null, [l, s, n]);
    return null == d ? null : (0, i.jsx)("div", {
        className: a()(A.UX, (null == o || o.y < 0) && A.R),
        style: null == o ? {} : {
            top: o.top,
            left: o.right - o.x
        },
        children: d
    })
});

function _() {
    let e = (0, s.bG)([d.A], () => d.A.getGuildId()),
        t = (0, c.RX)(e),
        [n, r] = (0, o.kn)(Object.values(t).filter(e => {
            let {
                disabled: t
            } = e;
            return !t
        }).map(e => {
            let {
                name: t
            } = e;
            return t
        }), u.m.SIDEBAR);
    if (null == n) return null;
    let l = t[n];
    return null == l ? null : (0, i.jsx)("div", {
        className: A.kL,
        children: (0, i.jsx)(h, {
            state: l,
            markAsDismissed: r
        })
    })
}