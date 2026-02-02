/** chunk id: 661417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    o = n(435371),
    i = n(397927),
    s = n(341915),
    a = n(590202),
    c = n(971649),
    u = n(651892),
    d = n(814793),
    p = n(717415),
    f = n(985018);

function m(e) {
    let {
        floatRight: t
    } = e, {
        quest: n,
        sourceQuestContent: m
    } = l.useContext(p.VideoQuestModalContext), v = (0, c.go)(), b = (0, d.E0)(n.config), E = l.useCallback(() => {
        b && ((0, u.Xm)(n.id, {
            content: s.uF.VIDEO_MODAL,
            ctaContent: a.Cy.COPY_QUEST_URL,
            impressionId: v,
            sourceQuestContent: m
        }), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["+5kSoW"]), i.ToastType.SUCCESS)))
    }, [v, b, n.id, m]);
    return b ? (0, r.jsx)("div", {
        style: {
            marginLeft: t ? "auto" : void 0
        },
        children: (0, r.jsx)(o.m_, {
            text: f.intl.string(f.t.WmfZHZ),
            children: (0, r.jsx)(i.K0, {
                variant: "overlay-secondary",
                icon: i.qYV,
                "aria-label": f.intl.string(f.t.RDE0Sc),
                onClick: E
            })
        })
    }) : null
}