/** chunk id: 188072, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    default: () => b
});
var n = r(627968),
    s = r(64700),
    o = r(158954),
    i = r(311907),
    l = r(397927),
    a = r(414121),
    c = r(266080),
    d = r(975571),
    u = r(643501),
    f = r(271872),
    p = r(350701),
    m = r(544105),
    x = r(652215),
    y = r(985018),
    g = r(536518);

function h(e) {
    let {
        step: t,
        instructions: r
    } = e;
    return (0, n.jsxs)("div", {
        className: g.RA,
        children: [(0, n.jsx)("div", {
            className: g.RY,
            children: (0, n.jsx)(l.Text, {
                variant: "text-sm/semibold",
                className: g.CD,
                children: t
            })
        }), (0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-strong",
            className: g.GA,
            children: r
        })]
    })
}

function b(e) {
    let {
        channel: t,
        transitionState: r,
        onClose: b
    } = e, O = (0, i.bG)([u.default], () => null != u.default.getRemoteSessionId()), _ = (0, f.A)(t, {
        forQRCode: !0
    });
    return s.useEffect(() => {
        O && b()
    }, [O, b]), s.useEffect(() => {
        (0, p.A)(t.id, m.f$.XBOX)
    }, [t.id]), (0, n.jsx)(o.Modal, {
        title: y.intl.string(y.t["f+Aijq"]),
        subtitle: y.intl.string(y.t.mYFmDY),
        actions: [],
        onClose: b,
        transitionState: r,
        children: (0, n.jsxs)("div", {
            className: g.Nr,
            children: [(0, n.jsxs)("div", {
                className: g.O,
                children: [(0, n.jsxs)(l.Text, {
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    className: g.RA,
                    children: [(0, n.jsx)(c.A, {
                        className: g.Fp
                    }), y.intl.string(y.t.ZNlYbK)]
                }), (0, n.jsx)(h, {
                    step: 1,
                    instructions: y.intl.string(y.t.dDtkl9)
                }), (0, n.jsx)(h, {
                    step: 2,
                    instructions: y.intl.string(y.t.IWuXjC)
                }), (0, n.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: (0, n.jsx)(l.MzZ, {
                        className: g.C2,
                        href: d.A.getArticleURL(x.MVz.XBOX_CONNECTION),
                        children: y.intl.string(y.t.hvVgAZ)
                    })
                })]
            }), (0, n.jsx)(a.Ay, {
                className: g.JB,
                size: 120,
                text: _
            })]
        })
    })
}