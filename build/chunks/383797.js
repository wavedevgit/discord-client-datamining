/** Chunk was on 20941 **/
/** chunk id: 383797, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(338717),
    o = n(302031),
    c = n(953756),
    u = n(647901),
    d = n(612089);

function m(e) {
    let {
        components: t,
        accentColor: n,
        spoiler: a,
        renderComponents: m
    } = e, [f, p] = l.useState(a), [h, b] = l.useState(a);
    a !== f && (p(a), b(a));
    let g = e => (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
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
                children: m(t)
            })
        })
    });
    return null == t || 0 === t.length ? null : a ? (0, r.jsx)(o.Ay, {
        type: o.Ay.Types.ATTACHMENT,
        reason: s.Oc.SPOILER,
        obscured: h,
        onToggleObscurity: () => b(e => !e),
        children: e => g(e)
    }) : g(!1)
}