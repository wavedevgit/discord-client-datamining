/** Chunk was on 72756 **/
/** chunk id: 440801, original params: e,n,t (module,exports,require) **/
t.d(n, {
    N: () => p
}), t(896048);
var r = t(627968),
    l = t(64700),
    c = t(503698),
    a = t.n(c),
    i = t(397927),
    o = t(268218),
    s = t(957565),
    u = t(206314),
    d = t(829681);

function h(e) {
    let {
        text: n
    } = e, [t, c] = l.useState(!1);
    return (0, r.jsx)(i.DUT, {
        onClick: () => {
            (0, s.C)(n, () => c(!0), () => c(!1))
        },
        children: t ? (0, r.jsx)(i.A9s, {
            size: "xs",
            color: "currentColor"
        }) : (0, r.jsx)(i.TdU, {
            size: "xs",
            color: "currentColor"
        })
    })
}

function p(e) {
    let {
        language: n,
        content: l
    } = e, c = () => (0, r.jsx)("code", {
        className: a()(d.kw, "hljs"),
        children: l
    });
    return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
            className: u.Hy,
            children: [s.p5 ? (0, r.jsx)("div", {
                className: u.lB,
                children: (0, r.jsx)(h, {
                    text: l
                })
            }) : null, (0, r.jsx)(o.c2, {
                createPromise: () => Promise.resolve().then(t.bind(t, 752238)),
                webpackId: 752238,
                renderFallback: c,
                render: e => {
                    if (!(null != n && e.hasLanguage(n))) return c();
                    {
                        let t = e.highlight(n, l, !0);
                        return null == t ? c() : (0, r.jsx)("code", {
                            className: a()(d.kw, "hljs", t.language),
                            dangerouslySetInnerHTML: {
                                __html: t.value
                            }
                        })
                    }
                }
            })]
        })
    })
}