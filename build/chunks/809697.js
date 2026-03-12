/** chunk id: 809697 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(417597),
    s = n(954571),
    l = n(899847),
    r = n(695515),
    a = n(191627),
    o = n(652215);
let d = () => ({
    selectedTab: (0, i.bG)([r.A], () => r.A.getSelectedTab()),
    handleTabChange: e => {
        l.Ay.selectTab(e), s.default.track(o.HAw.FAMILY_CENTER_ACTION, {
            action: a.qb.TabChange,
            tab: e
        })
    }
})