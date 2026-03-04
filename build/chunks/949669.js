/** chunk id: 949669, original params: t,e,i (module,exports,require) **/
i.d(e, {
    o: () => A
});
var n = i(64700),
    l = i(171316),
    s = i(419954),
    a = i(115063),
    r = i(253932),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let A = (0, s.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => d.intl.string(d.t["7x9dyE"]),
    useValue: () => {
        let t = r.FA.useSetting();
        return n.useMemo(() => (0, a.Lx)(t), [t]).all
    },
    setValue: t => {
        r.FA.updateSetting(t ? o.yKI : o.yKI & ~o.dzt.NO_RELATION)
    },
    useDisabled: () => (0, l.uM)()
})