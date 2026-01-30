/** chunk id: 320742, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    default: () => g
}), r(896048);
var n = r(627968),
    s = r(64700),
    o = r(503698),
    l = r.n(o),
    a = r(284009),
    i = r.n(a),
    c = r(397927),
    d = r(964486),
    u = r(414121),
    f = r(954571),
    p = r(10005),
    y = r(438732),
    C = r(834981),
    m = r(191627),
    x = r(652215),
    b = r(842130),
    h = r(985018),
    _ = r(482064),
    O = r(473169);
let g = e => {
    let {
        transitionState: t,
        onClose: r
    } = e, o = (0, y.A)(), [a, g] = s.useState(!1), {
        getLinkCode: v,
        isGetLinkCodeLoading: j
    } = (0, p.A)({}), E = (0, C.VE)(), T = (0, C.VT)(), S = s.useRef(T);
    i()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let N = () => {
        g(e => (f.default.track(x.HAw.FAMILY_CENTER_ACTION, {
            action: a ? m.qb.HideQRCode : m.qb.RevealQRCode
        }), !e)), a || setTimeout(() => {
            r()
        }, m.nz)
    };
    (0, d.Ay)(() => {
        v()
    }), s.useEffect(() => {
        T > S.current && r()
    }, [S, T, r]);
    let R = a && !j && null != E;
    return (0, n.jsxs)(c.dWK, {
        transitionState: t,
        onClose: r,
        children: [(0, n.jsxs)(c.$Td, {
            className: _.lm,
            color: c.Hv$.WARNING,
            children: [(0, n.jsx)(c.mir, {
                size: "sm",
                color: "currentColor"
            }), h.intl.string(b.default.iHYMAz)]
        }), (0, n.jsxs)(c.cwr, {
            children: [(0, n.jsx)(c.Text, {
                className: O.QB,
                variant: "text-lg/bold",
                color: "text-strong",
                children: h.intl.string(b.default.AVTZaN)
            }), (0, n.jsx)(c.Text, {
                className: O.SX,
                variant: "text-sm/normal",
                color: "text-default",
                children: h.intl.format(b.default.LyyCsE, {
                    link: "https://support.discord.com/hc/articles/14155060633623"
                })
            }), (0, n.jsx)("div", {
                className: _.Ac,
                children: (0, n.jsx)(c.DUT, {
                    className: l()(_.u3, {
                        [_.RK]: R
                    }),
                    onClick: N,
                    children: (0, n.jsx)(u.Lx, {
                        size: 272,
                        text: R ? E : m.EC,
                        overlaySize: u.Zs.SIZE_60,
                        className: _.R6
                    })
                })
            }), (0, n.jsx)(c.Text, {
                className: _.z_,
                variant: "text-xs/semibold",
                color: "text-default",
                children: h.intl.string(b.default.goDyoe)
            })]
        }), (0, n.jsx)(c.H7u, {
            actionsFullWidth: !0,
            actions: [{
                variant: "secondary",
                text: h.intl.string(h.t.cpT0Cq),
                onClick: r
            }, {
                variant: "primary",
                text: a ? h.intl.string(b.default.wg2xwQ) : h.intl.string(b.default["10dX6U"]),
                onClick: N,
                loading: a && j
            }]
        })]
    })
}