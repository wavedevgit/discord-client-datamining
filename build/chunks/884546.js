/** chunk id: 884546, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(397927),
    l = n(985018),
    o = n(38824);

function c(e) {
    let {
        title: t,
        children: n
    } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Heading, {
            variant: "text-md/medium",
            className: o.Vf,
            children: t
        }), n]
    })
}

function d(e) {
    let {
        children: t,
        className: n,
        layoutClassName: s,
        profilePreview: r,
        profilePreviewTitle: d,
        nameplatePreview: u
    } = e;
    return (0, i.jsx)("div", {
        className: a()(o.UA, n),
        children: (0, i.jsxs)("div", {
            className: a()(o.yt, s),
            children: [(0, i.jsx)("div", {
                className: o.Fp,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c, {
                        title: d ?? l.intl.string(l.t.Zb06yP),
                        children: r
                    }), null != u ? (0, i.jsx)(c, {
                        title: l.intl.string(l.t.x5CoXR),
                        children: u
                    }) : null]
                })
            }), (0, i.jsx)("div", {
                className: o.oB,
                children: t
            })]
        })
    })
}