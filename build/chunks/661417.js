/** Chunk was on 23628 **/
/** chunk id: 661417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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
    f = n(717415),
    m = n(985018);

function p(e) {
    let {
        floatRight: t
    } = e, {
        quest: n,
        sourceQuestContent: p
    } = l.useContext(f.VideoQuestModalContext), v = (0, c.go)(), E = (0, d.E0)(n.config), g = l.useCallback(() => {
        E && ((0, u.Xm)(n.id, {
            content: s.uF.VIDEO_MODAL,
            ctaContent: a.Cy.COPY_QUEST_URL,
            impressionId: v,
            sourceQuestContent: p
        }), (0, i.showToast)((0, i.createToast)(m.intl.string(m.t["+5kSoW"]), i.ToastType.SUCCESS)))
    }, [v, E, n.id, p]);
    return E ? (0, r.jsx)("div", {
        style: {
            marginLeft: t ? "auto" : void 0
        },
        children: (0, r.jsx)(o.m_, {
            text: m.intl.string(m.t.WmfZHZ),
            children: (0, r.jsx)(i.K0, {
                variant: "overlay-secondary",
                icon: i.qYV,
                "aria-label": m.intl.string(m.t.RDE0Sc),
                onClick: g
            })
        })
    }) : null
}