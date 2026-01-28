/** Chunk was on 5606 **/
/** chunk id: 809697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(417597),
    i = n(954571),
    l = n(899847),
    s = n(695515),
    a = n(191627),
    o = n(652215);
let c = () => ({
    selectedTab: (0, r.bG)([s.A], () => s.A.getSelectedTab()),
    handleTabChange: e => {
        l.Ay.selectTab(e), i.default.track(o.HAw.FAMILY_CENTER_ACTION, {
            action: a.qb.TabChange,
            tab: e
        })
    }
})