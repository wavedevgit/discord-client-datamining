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
    m = n(985018),
    A = n(234054);

function E(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l
    } = e, E = (0, o.Ay)(t), I = l(E), {
        avatarSrc: T,
        eventHandlers: {
            onMouseEnter: N,
            onMouseLeave: f
        }
    } = (0, d.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: f,
        children: (0, i.jsx)(u.A, {
            className: a()(A.rs, {
                [A.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(d.l, {
                src: T
            }),
            iconContainerClassName: A.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(A.Qs, {
                    [A.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: A.he,
                    className: a()(A.QV, A.he, {
                        [A.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: A.he,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: A.Xh,
                            children: m.intl.string(m.t.hG1StD)
                        }), (0, i.jsx)(s.A, {
                            type: _.nu.SYSTEM_DM,
                            className: A.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(A.__invalid_messageContent, {
                        [A.oE]: n
                    }),
                    children: m.intl.format(m.t.qntXNQ, {
                        username: E.nick,
                        usernameHook: I
                    })
                })]
            })
        })
    })
}