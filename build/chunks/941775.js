/** chunk id: 941775 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    a = n(311907),
    l = n(397927),
    r = n(859703),
    s = n(201805),
    o = n(985018);
let d = function(e) {
    let {
        quest: t,
        analyticsCtxQuestContent: n,
        analyticsCtxSourceQuestContent: d,
        analyticsCtxQuestContentPosition: c,
        analyticsCtxQuestContentRowIndex: u,
        size: _
    } = e, m = t.id, {
        isClaiming: h
    } = (0, a.cf)([r.A], () => ({
        isClaiming: r.A.isClaimingReward(m) || r.A.isFetchingRewardCode(m)
    }), [m]), p = (0, s.ix)({
        quest: t,
        questContent: n,
        questContentPosition: c,
        questContentRowIndex: u,
        sourceQuestContent: d
    });
    return (0, i.jsx)(l.Button, {
        variant: "primary",
        fullWidth: !0,
        size: _,
        loading: h,
        onClick: p,
        text: o.intl.string(o.t.cfY4PE)
    })
}