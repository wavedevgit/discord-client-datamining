/** chunk id: 749795 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(397927),
    a = n(709066),
    o = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    _ = n(705751),
    A = n(985018),
    E = n(393239);

function m(e) {
    let {
        message: t,
        compact: n,
        usernameHook: r
    } = e, m = (0, o.Ay)(t), I = r(m), {
        avatarSrc: T,
        eventHandlers: {
            onMouseEnter: g,
            onMouseLeave: N
        }
    } = (0, u.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: g,
        onMouseLeave: N,
        children: (0, i.jsx)(d.A, {
            className: l()(E.rs, {
                [E.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(u.l, {
                src: T
            }),
            iconContainerClassName: E.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(E.Qs, {
                    [E.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: E.he,
                    className: l()(E.QV, E.he, {
                        [E.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: E.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: E.Xh,
                            children: A.intl.string(A.t.hG1StD)
                        }), (0, i.jsx)(a.A, {
                            type: _.nu.SYSTEM_DM,
                            className: E.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: l()(E.__invalid_messageContent, {
                        [E.oE]: n
                    }),
                    children: A.intl.format(A.t.qntXNQ, {
                        username: m.nick,
                        usernameHook: I
                    })
                })]
            })
        })
    })
}