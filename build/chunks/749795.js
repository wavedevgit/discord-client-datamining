/** chunk id: 749795 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(397927),
    s = n(709066),
    o = n(763754),
    c = n(643204),
    d = n(809115),
    u = n(888675),
    _ = n(705751),
    A = n(985018),
    m = n(964516);

function E(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l
    } = e, E = (0, o.Ay)(t), T = l(E), {
        avatarSrc: I,
        eventHandlers: {
            onMouseEnter: N,
            onMouseLeave: g
        }
    } = (0, d.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: g,
        children: (0, i.jsx)(u.A, {
            className: a()(m.rs, {
                [m.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(d.l, {
                src: I
            }),
            iconContainerClassName: m.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(m.Qs, {
                    [m.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: m.he,
                    className: a()(m.QV, m.he, {
                        [m.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: m.he,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: m.Xh,
                            children: A.intl.string(A.t.hG1StD)
                        }), (0, i.jsx)(s.A, {
                            type: _.nu.SYSTEM_DM,
                            className: m.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(m.__invalid_messageContent, {
                        [m.oE]: n
                    }),
                    children: A.intl.format(A.t.qntXNQ, {
                        username: E.nick,
                        usernameHook: T
                    })
                })]
            })
        })
    })
}