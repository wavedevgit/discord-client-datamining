/** chunk id: 685896, original params: t,e,i (module,exports,require) **/
i.d(e, {
    C: () => c
});
var n = i(627968),
    l = i(935399),
    s = i(158954),
    r = i(311907),
    a = i(793574),
    u = i(526162),
    o = i(848971),
    d = i(915089),
    A = i(419954),
    T = i(954571),
    S = i(780964),
    E = i(652215),
    g = i(788868),
    _ = i(985018);
let c = (0, A.E2)(S.X.DISPLAY_IN_APP_ICON, {
    useSearchTerms: () => [_.intl.string(_.t.gnwxvT)],
    Component: function() {
        let t = (0, d.GV)(),
            {
                ref: e,
                ...i
            } = (0, s._uI)({
                orientation: "horizontal",
                labelledBy: t
            }),
            A = (0, r.bG)([u.A], () => u.A.isUpsellPreview);
        return (0, l.Ay)(() => {
            A && T.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                type: g.e.APP_ICON_UPSELL,
                location_stack: [a.A.USER_SETTINGS]
            })
        }), (0, n.jsx)("div", {
            ...i,
            ref: e,
            children: (0, n.jsx)(s.BJc, {
                direction: "horizontal",
                wrap: !0,
                gap: 8,
                children: (0, n.jsx)(o.m, {
                    disabled: A
                })
            })
        })
    }
})