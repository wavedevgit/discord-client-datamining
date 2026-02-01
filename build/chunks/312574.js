/** chunk id: 312574, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => I
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(790076),
    a = i(682262),
    o = i(694202),
    d = i(50847),
    T = i(606275),
    A = i(222328),
    S = i(879545),
    c = i(531525),
    E = i(985018);
let g = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => (0, r.dk)("OverlayPanel"),
        useTitle: () => E.intl.string(E.t["9cb1Uz"]),
        buildLayout: () => [A.I, o.u, d.X, S.D, T.h]
    }),
    _ = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, r.dk)("OverlayPanel"),
        useTitle: () => E.intl.string(E.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    I = (0, l.i4)(s.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["9cb1Uz"]),
        icon: n.WindowTopOutlineIcon,
        usePredicate: a.b_,
        getLegacySearchKey: () => (0, r.WJ)("OverlayPanel") ? void 0 : c.H.OVERLAY,
        buildLayout: () => (0, r.WJ)("OverlayPanel") ? [g] : [_]
    })