/** chunk id: 72800 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(417597),
    o = n(932001),
    d = n(967198),
    c = n(533550),
    u = n(49999),
    A = n(826898);
let h = a.memo(function(e) {
    let {
        state: t,
        markAsDismissed: n
    } = e, {
        name: r,
        guildId: s,
        boundingRect: o
    } = t, d = a.useMemo(() => null, [r, s, n]);
    return null == d ? null : (0, i.jsx)("div", {
        className: l()(A.UX, (null == o || o.y < 0) && A.R),
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
        [n, a] = (0, o.kn)(Object.values(t).filter(e => {
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
    let r = t[n];
    return null == r ? null : (0, i.jsx)("div", {
        className: A.kL,
        children: (0, i.jsx)(h, {
            state: r,
            markAsDismissed: a
        })
    })
}