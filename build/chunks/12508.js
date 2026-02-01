/** chunk id: 12508, original params: t,e,i (module,exports,require) **/
i.d(e, {
    n: () => A
});
var n = i(64700),
    l = i(665260),
    s = i(171316),
    r = i(419954),
    u = i(115063),
    a = i(253932),
    o = i(780964),
    d = i(652215),
    T = i(985018);
let A = (0, r.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
    useTitle: () => T.intl.string(T.t.qsMfsH),
    useValue: () => {
        let t = a.FA.useSetting(),
            e = n.useMemo(() => (0, u.Lx)(t), [t]);
        return e.all || e.mutualGuilds
    },
    setValue: t => {
        let e = a.FA.getSetting();
        a.FA.updateSetting(t ? l.UI(e, d.dzt.MUTUAL_GUILDS) : l.iE(e, d.dzt.MUTUAL_GUILDS, d.dzt.NO_RELATION))
    },
    useDisabled: () => (0, s.uM)()
})