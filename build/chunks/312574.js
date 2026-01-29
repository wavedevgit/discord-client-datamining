/** Chunk was on 4670 **/
/** chunk id: 312574, original params: e,t,i (module,exports,require) **/
i.d(t, {
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
    T = i(606275),
    c = i(222328),
    A = i(879545),
    S = i(531525),
    _ = i(985018);
let E = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => (0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        buildLayout: () => [c.I, o.u, d.X, A.D, T.h]
    }),
    g = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => []
    }),
    I = (0, l.i4)(s.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        icon: n.WindowTopOutlineIcon,
        usePredicate: u.b_,
        getLegacySearchKey: () => (0, r.WJ)("OverlayPanel") ? void 0 : S.H.OVERLAY,
        buildLayout: () => (0, r.WJ)("OverlayPanel") ? [E] : [g]
    })