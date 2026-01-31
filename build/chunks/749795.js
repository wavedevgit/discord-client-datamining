/** chunk id: 749795, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(709066),
    o = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    p = n(705751),
    m = n(985018),
    f = n(234054);

function g(e) {
    let {
        message: t,
        compact: n,
        usernameHook: i
    } = e, g = (0, o.Ay)(t), _ = i(g), {
        avatarSrc: h,
        eventHandlers: {
            onMouseEnter: b,
            onMouseLeave: y
        }
    } = (0, u.a)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: b,
        onMouseLeave: y,
        children: (0, r.jsx)(d.A, {
            className: l()(f.rs, {
                [f.oE]: n
            }),
            iconNode: n ? null : (0, r.jsx)(u.l, {
                src: h
            }),
            iconContainerClassName: f.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: l()(f.Qs, {
                    [f.oE]: n
                }),
                children: [(0, r.jsx)(c.ix, {
                    message: t,
                    messageClassname: f.he,
                    className: l()(f.QV, f.he, {
                        [f.oE]: n
                    }),
                    username: (0, r.jsxs)("div", {
                        className: f.he,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: f.Xh,
                            children: m.intl.string(m.t.hG1StD)
                        }), (0, r.jsx)(s.A, {
                            type: p.nu.SYSTEM_DM,
                            className: f.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, r.jsx)("div", {
                    className: l()(f.__invalid_messageContent, {
                        [f.oE]: n
                    }),
                    children: m.intl.format(m.t.qntXNQ, {
                        username: g.nick,
                        usernameHook: _
                    })
                })]
            })
        })
    })
}