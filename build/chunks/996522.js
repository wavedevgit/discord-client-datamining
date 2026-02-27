/** chunk id: 996522, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    d = n(143413),
    c = n(734057),
    u = n(661191),
    _ = n(321045),
    m = n(456874),
    h = n(707539),
    p = n(519397),
    g = n(747926),
    A = n(652215),
    x = n(985018),
    f = n(868320);

function C(e) {
    let {
        message: t,
        compact: n
    } = e, l = (0, a.bG)([c.A], () => c.A.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(E, {
        channel: l,
        compact: n,
        isSystemMessage: (0, d.A)(t)
    })
}

function E(e) {
    var t;
    let l, d, c, {
            channel: u,
            compact: C,
            isSystemMessage: E
        } = e,
        I = (0, a.bG)([m.A], () => m.A.getCount(u.id)),
        b = (t = u, l = (0, a.bG)([m.A], () => m.A.getMostRecentMessage(t.id)), d = (0, a.bG)([m.A], () => m.A.getCount(t.id)), c = (0, h.JO)(t), t.threadMetadata?.archived ? x.intl.string(x.t.ZTo4HS) : null == d || 0 === d ? x.intl.string(x.t.HYtNyE) : null == l ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
                children: x.intl.string(x.t.ZTo4HS)
            }), (0, i.jsx)("span", {
                className: f.vE,
                children: (0, h.aK)(c)
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {
                message: l,
                channel: t
            }), (0, i.jsx)("span", {
                className: f.vE,
                children: (0, h.aK)(c)
            })]
        })),
        T = null != I && I > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: r()(f.GI, {
                [f.E]: !C,
                [f.E_]: E
            })
        }), (0, i.jsx)(s.DUT, {
            onClick: function(e) {
                e.stopPropagation(), (0, g.JA)(u, e.shiftKey)
            },
            onKeyDown: function(e) {
                e.stopPropagation();
                let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                    n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                (e.which === A.Ks6.SPACE || e.which === A.Ks6.ENTER) && (e.preventDefault(), (t || n) && (0, g.JA)(u, n))
            },
            onContextMenu: function(e) {
                (0, o.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("64719"), n.e("10178")]).then(n.bind(n, 44536));
                    return t => (0, i.jsx)(e, {
                        channel: u,
                        ...t
                    })
                })
            },
            "aria-roledescription": x.intl.string(x.t["8ipxiY"]),
            className: r()(f.kL, {
                [f.og]: E
            }),
            children: (0, i.jsxs)(s.RDc, {
                children: [(0, i.jsxs)("div", {
                    className: f.kq,
                    children: [(0, i.jsx)(s.AC4, {
                        children: x.intl.string(x.t["7Xm5QI"])
                    }), (0, i.jsx)("span", {
                        className: f.UU,
                        children: u.name
                    }), (0, i.jsx)("span", {
                        className: f.lO,
                        "aria-hidden": !T,
                        children: (0, _.ub)(I, u.id)
                    })]
                }), (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    "aria-hidden": !0,
                    lineClamp: 1,
                    color: "text-default",
                    className: f.sb,
                    children: b
                })]
            })
        })]
    })
}