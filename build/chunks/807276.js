/** chunk id: 807276, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => d
});
var i = n(524136),
    s = n(70730),
    l = n(419954),
    a = n(253932),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.NjOMvh),
    useBadge: () => "beta",
    useValue: a.oz.useSetting,
    setValue: i.O,
    useSearchTerms: () => [o.intl.string(o.t.hi4dSk)],
    usePredicate: () => {
        let {
            enabled: e,
            showDmPrompts: t
        } = s.u.getConfig({
            location: "FriendAnniversaryNotifications"
        });
        return e && t
    }
})