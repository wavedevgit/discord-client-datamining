/** chunk id: 576199 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    s = n(435371),
    a = n(397927),
    l = n(341915),
    o = n(590202),
    u = n(971649),
    c = n(651892),
    d = n(814793),
    m = n(795068),
    E = n(985018);

function p(e) {
    let {
        floatRight: t
    } = e, {
        quest: n,
        sourceQuestContent: p
    } = i.useContext(m.a), _ = (0, u.go)(), f = (0, d.E0)(n.config), v = i.useCallback(() => {
        f && ((0, c.Xm)(n.id, {
            content: l.uF.VIDEO_MODAL,
            ctaContent: o.Cy.COPY_QUEST_URL,
            impressionId: _,
            sourceQuestContent: p
        }), (0, a.showToast)((0, a.createToast)(E.intl.string(E.t["+5kSoW"]), a.ToastType.SUCCESS)))
    }, [_, f, n.id, p]);
    return f ? (0, r.jsx)("div", {
        "data-testid": "video-quest-share-btn",
        "data-quest-id": n.id,
        style: {
            marginLeft: t ? "auto" : void 0
        },
        children: (0, r.jsx)(s.m_, {
            text: E.intl.string(E.t.WmfZHZ),
            children: (0, r.jsx)(a.K0, {
                variant: "overlay-secondary",
                icon: a.qYV,
                "aria-label": E.intl.string(E.t.RDE0Sc),
                onClick: v
            })
        })
    }) : null
}