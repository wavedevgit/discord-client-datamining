/** chunk id: 996522 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(311907),
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
    } = e, r = (0, l.bG)([c.A], () => c.A.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == r ? null : (0, i.jsx)(I, {
        channel: r,
        compact: n,
        isSystemMessage: (0, d.A)(t)
    })
}

function I(e) {
    var t;
    let r, d, c, {
            channel: u,
            compact: C,
            isSystemMessage: I
        } = e,
        E = (0, l.bG)([m.A], () => m.A.getCount(u.id)),
        v = (t = u, r = (0, l.bG)([m.A], () => m.A.getMostRecentMessage(t.id)), d = (0, l.bG)([m.A], () => m.A.getCount(t.id)), c = (0, h.JO)(t), t.threadMetadata?.archived ? x.intl.string(x.t.ZTo4HS) : null == d || 0 === d ? x.intl.string(x.t.HYtNyE) : null == r ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
                children: x.intl.string(x.t.ZTo4HS)
            }), (0, i.jsx)("span", {
                className: f.vE,
                children: (0, h.aK)(c)
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {
                message: r,
                channel: t
            }), (0, i.jsx)("span", {
                className: f.vE,
                children: (0, h.aK)(c)
            })]
        })),
        b = null != E && E > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: a()(f.GI, {
                [f.E]: !C,
                [f.E_]: I
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
                    } = await Promise.all([n.e("94989"), n.e("64667")]).then(n.bind(n, 44536));
                    return t => (0, i.jsx)(e, {
                        channel: u,
                        ...t
                    })
                })
            },
            "aria-roledescription": x.intl.string(x.t["8ipxiY"]),
            className: a()(f.kL, {
                [f.og]: I
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
                        "aria-hidden": !b,
                        children: (0, _.ub)(E, u.id)
                    })]
                }), (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    "aria-hidden": !0,
                    lineClamp: 1,
                    color: "text-default",
                    className: f.sb,
                    children: v
                })]
            })
        })]
    })
}