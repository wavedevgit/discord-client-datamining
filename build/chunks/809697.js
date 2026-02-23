/** chunk id: 809697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(417597),
    s = n(954571),
    a = n(899847),
    l = n(695515),
    r = n(191627),
    o = n(652215);
let c = () => ({
    selectedTab: (0, i.bG)([l.A], () => l.A.getSelectedTab()),
    handleTabChange: e => {
        a.Ay.selectTab(e), s.default.track(o.HAw.FAMILY_CENTER_ACTION, {
            action: r.qb.TabChange,
            tab: e
        })
    }
})