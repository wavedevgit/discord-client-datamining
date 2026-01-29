/** Chunk was on 4670 **/
/** chunk id: 556907, original params: e,t,i (module,exports,require) **/
i.d(t, {
    a: () => c
});
var n = i(64700),
    l = i(665260),
    s = i(171316),
    r = i(419954),
    a = i(115063),
    u = i(253932),
    o = i(780964),
    d = i(652215),
    T = i(985018);
let c = (0, r.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
    useTitle: () => T.intl.string(T.t.NfeuZ3),
    useValue: () => {
        let e = u.FA.useSetting(),
            t = n.useMemo(() => (0, a.Lx)(e), [e]);
        return t.all || t.mutualFriends
    },
    setValue: e => {
        let t = u.FA.getSetting();
        u.FA.updateSetting(e ? l.UI(t, d.dzt.MUTUAL_FRIENDS) : l.iE(t, d.dzt.MUTUAL_FRIENDS, d.dzt.NO_RELATION))
    },
    useDisabled: () => (0, s.uM)()
})