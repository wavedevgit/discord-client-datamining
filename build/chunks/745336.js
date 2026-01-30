/** chunk id: 745336, original params: e,a,n (module,exports,require) **/
n.d(a, {
    default: () => m
});
var t = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(397927),
    c = n(393033),
    o = n(36149),
    d = n(40449),
    u = n(985018),
    p = n(831498);
let m = function(e) {
    let {
        onClose: a,
        onComplete: n,
        onCancel: s,
        transitionState: m,
        webviewUrl: f
    } = e, h = (0, c.W$)(), _ = i.useCallback(() => {
        n(), a()
    }, [n, a]), g = i.useCallback(() => {
        (0, l.kBI)(d.SW) && _()
    }, [_]);
    (0, o.dZ)(g);
    let j = i.useCallback(e => {
        if (h && "" !== f) {
            var a;
            (null == e || null == (a = e.data) ? void 0 : a.eventType) === "Verification.Result" && _()
        }
    }, [f, _, h]);
    return i.useEffect(() => (window.addEventListener("message", j), () => {
        window.removeEventListener("message", j)
    }), [j]), (0, t.jsxs)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: m,
        className: r()(p.zr, p.rh),
        parentComponent: "AgeVerificationModal",
        size: l.rIJ.MEDIUM,
        children: [(0, t.jsx)(l.$mQ, {
            "data-migration-pending": !0,
            className: r()(p.Qs, p.WM),
            scrollbarType: "none",
            children: (0, t.jsx)("iframe", {
                id: "frame",
                src: f,
                className: p.pU,
                allow: "camera; microphone"
            })
        }), (0, t.jsx)(l.jlY, {
            "data-migration-pending": !0,
            children: (0, t.jsx)("div", {
                className: p.qr,
                children: (0, t.jsxs)(l.ButtonGroup, {
                    justify: "space-between",
                    fullWidthContainer: !0,
                    children: [(0, t.jsx)(l.QWc, {
                        variant: "secondary",
                        text: u.intl.string(u.t.fjKFae),
                        onClick: a
                    }), null != s && (0, t.jsx)(l.QWc, {
                        variant: "secondary",
                        text: u.intl.string(u.t["4gTnU0"]),
                        onClick: s
                    })]
                })
            })
        })]
    })
}