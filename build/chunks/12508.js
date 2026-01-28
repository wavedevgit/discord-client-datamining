/** Chunk was on 28979 **/
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
    T = i(652215),
    d = i(985018);
let A = (0, r.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
    useTitle: () => d.intl.string(d.t.qsMfsH),
    useValue: () => {
        let t = a.FA.useSetting(),
            e = n.useMemo(() => (0, u.Lx)(t), [t]);
        return e.all || e.mutualGuilds
    },
    setValue: t => {
        let e = a.FA.getSetting();
        a.FA.updateSetting(t ? l.UI(e, T.dzt.MUTUAL_GUILDS) : l.iE(e, T.dzt.MUTUAL_GUILDS, T.dzt.NO_RELATION))
    },
    useDisabled: () => (0, s.uM)()
})