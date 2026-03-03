/** chunk id: 312574, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => I
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(790076),
    u = i(682262),
    o = i(694202),
    d = i(50847),
    A = i(606275),
    T = i(222328),
    S = i(879545),
    E = i(531525),
    g = i(985018);
let c = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => (0, r.dk)("OverlayPanel"),
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        buildLayout: () => [T.I, o.u, d.X, S.D, A.h]
    }),
    _ = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, r.dk)("OverlayPanel"),
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => []
    }),
    I = (0, l.i4)(s.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        icon: n.WindowTopOutlineIcon,
        usePredicate: u.b_,
        getLegacySearchKey: () => (0, r.WJ)("OverlayPanel") ? void 0 : E.H.OVERLAY,
        buildLayout: () => (0, r.WJ)("OverlayPanel") ? [c] : [_]
    })