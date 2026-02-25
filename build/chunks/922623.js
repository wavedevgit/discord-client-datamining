/** chunk id: 922623, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(341915),
    s = n(590202),
    o = n(651892),
    u = n(717415);

function c(e) {
    let {
        handlePrimaryCtaClick: t
    } = e, {
        quest: n
    } = l.useContext(u.VideoQuestModalContext);
    return (0, r.jsx)(i.Button, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(a.uF.VIDEO_MODAL_PRIMARY_CTA, s.Cy.OPEN_GAME_LINK),
        text: (0, o.wr)(n)
    })
}