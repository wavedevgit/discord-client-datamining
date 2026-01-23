/** Chunk was on 24947 **/
/** chunk id: 662558, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => m
}), a(896048);
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(397927),
    o = a(393033),
    c = a(36149),
    d = a(40449),
    u = a(536242),
    p = a(985018),
    f = a(138596),
    h = a(831498);
let m = function(e) {
    let {
        onClose: t,
        onComplete: a,
        transitionState: l,
        webviewUrl: m
    } = e, _ = (0, o.W$)(), [x, b] = i.useState(0), g = i.useCallback(() => {
        a(), t()
    }, [a, t]), C = i.useCallback(() => {
        (0, r.kBI)(d.SW) && g()
    }, [g]);
    (0, c.dZ)(C);
    let k = i.useCallback(e => {
            if (_ && "" !== m) {
                var t;
                (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && g()
            }
        }, [m, g, _]),
        v = i.useCallback(() => {
            b(x + 1)
        }, [x]);
    return i.useEffect(() => (window.addEventListener("message", k), () => {
        window.removeEventListener("message", k)
    }), [k]), (0, n.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: l,
        className: s()(h.zr, f.rh),
        parentComponent: "AgeVerificationExpressiveModal",
        size: r.rIJ.MEDIUM,
        children: [(0, n.jsx)(r.$mQ, {
            "data-migration-pending": !0,
            className: s()(h.Qs, h.WM),
            scrollbarType: "none",
            children: (0, n.jsx)("iframe", {
                id: "frame",
                src: m,
                className: h.pU,
                allow: "camera; microphone"
            }, x)
        }), (0, n.jsx)(r.jlY, {
            "data-migration-pending": !0,
            children: (0, n.jsxs)(r.ButtonGroup, {
                fullWidth: !0,
                children: [(0, n.jsx)(r.Button, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: r.Zge,
                    text: p.intl.string(u.default.b7Oqdu),
                    onClick: t
                }), (0, n.jsx)(r.Button, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: r.fNY,
                    text: p.intl.string(u.default["0vTx7j"]),
                    onClick: v
                })]
            })
        })]
    })
}