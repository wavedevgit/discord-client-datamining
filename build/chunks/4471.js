/** chunk id: 4471 params = (module,exports,require) **/
s.d(t, {
    A: () => m
});
var n = s(627968),
    l = s(284009),
    i = s.n(l),
    a = s(311907),
    r = s(732955),
    C = s(397927),
    d = s(512213),
    c = s(303136),
    L = s(287809),
    H = s(676279),
    o = s(659746),
    M = s(985018),
    u = s(531945),
    g = s(472161),
    h = s(573080),
    p = s(780350);
let m = e => {
    let {
        type: t,
        text: s,
        buttonText: l,
        buttonLoading: m,
        hideClose: E,
        onClose: N
    } = e, f = (0, a.bG)([L.default], () => {
        let e = L.default.getCurrentUser();
        return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
    }), _ = (0, H.TM)() ? g.A : p.A, A = (e => {
        switch (e) {
            case o.Or.PREMIUM_UPDATED:
                return M.intl.string(M.t["75Wt0E"]);
            case o.Or.PREMIUM_ACTIVATED:
                return M.intl.string(M.t.QWljxE);
            default:
                return M.intl.string(M.t.X79Az5)
        }
    })(t);
    return (0, n.jsxs)("div", {
        className: u.kL,
        children: [(0, n.jsx)(C.Heading, {
            className: u.wx,
            variant: "display-md",
            color: "text-strong",
            children: A
        }), (0, n.jsxs)("div", {
            className: u.Dz,
            children: [(0, n.jsx)(c.A, {
                fallbackImage: h.A,
                className: u.d9,
                children: (0, n.jsx)("source", {
                    src: _
                })
            }), (0, n.jsx)(d.A, {
                user: f,
                isHighlighted: !0,
                nameplate: null,
                nameplateData: f.nameplate,
                className: u.M4,
                nameplatePreviewSize: "large"
            })]
        }), (0, n.jsx)("div", {
            className: u.FS,
            children: s
        }), !E && (0, n.jsx)("div", {
            className: u.qr,
            children: (0, n.jsx)(r.$nd, {
                variant: "expressive",
                fullWidth: !0,
                text: l,
                onClick: N,
                loading: m
            })
        })]
    })
}