/** Chunk was on 49559 **/
/** chunk id: 383797, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(338717),
    s = n(302031),
    c = n(953756),
    u = n(647901),
    d = n(612089);

function p(e) {
    let {
        components: t,
        accentColor: n,
        spoiler: a,
        renderComponents: p
    } = e, [m, f] = l.useState(a), [O, b] = l.useState(a);
    a !== m && (f(a), b(a));
    let y = e => (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
        children: l => (0, r.jsx)("div", {
            ref: l,
            className: i()(d.kL, {
                [d.dK]: e,
                [d._7]: null != n
            }),
            style: {
                "--__accent-color": n
            },
            children: (0, r.jsx)(u.x, {
                size: "reduced",
                children: p(t)
            })
        })
    });
    return null == t || 0 === t.length ? null : a ? (0, r.jsx)(s.Ay, {
        type: s.Ay.Types.ATTACHMENT,
        reason: o.Oc.SPOILER,
        obscured: O,
        onToggleObscurity: () => b(e => !e),
        children: e => y(e)
    }) : y(!1)
}