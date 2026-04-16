/** chunk id: 576199 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    s = n(64700),
    a = n(435371),
    l = n(397927),
    i = n(341915),
    u = n(590202),
    o = n(971649),
    c = n(651892),
    d = n(814793),
    E = n(795068),
    m = n(985018);

function f(e) {
    let {
        floatRight: t
    } = e, {
        quest: n,
        sourceQuestContent: f
    } = s.useContext(E.a), _ = (0, o.go)(), S = (0, d.E0)(n.config), p = s.useCallback(() => {
        S && ((0, c.Xm)(n.id, {
            content: i.uF.VIDEO_MODAL,
            ctaContent: u.Cy.COPY_QUEST_URL,
            impressionId: _,
            sourceQuestContent: f
        }), (0, l.showToast)((0, l.createToast)(m.intl.string(m.t["+5kSoW"]), l.ToastType.SUCCESS)))
    }, [_, S, n.id, f]);
    return S ? (0, r.jsx)("div", {
        "data-testid": "video-quest-share-btn",
        "data-quest-id": n.id,
        style: {
            marginLeft: t ? "auto" : void 0,
            pointerEvents: "auto"
        },
        children: (0, r.jsx)(a.m_, {
            text: m.intl.string(m.t.WmfZHZ),
            children: (0, r.jsx)(l.K0, {
                variant: "overlay-secondary",
                icon: l.qYV,
                "aria-label": m.intl.string(m.t.RDE0Sc),
                onClick: p
            })
        })
    }) : null
}