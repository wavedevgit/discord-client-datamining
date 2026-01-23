/** Chunk was on 28979 **/
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
    T = i(50847),
    A = i(606275),
    d = i(222328),
    S = i(879545),
    E = i(531525),
    _ = i(985018);
let g = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => (0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        buildLayout: () => [d.I, o.u, T.X, S.D, A.h]
    }),
    c = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    I = (0, l.i4)(s.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        icon: n.WindowTopOutlineIcon,
        usePredicate: a.b_,
        getLegacySearchKey: () => (0, r.WJ)("OverlayPanel") ? void 0 : E.H.OVERLAY,
        buildLayout: () => (0, r.WJ)("OverlayPanel") ? [g] : [c]
    })