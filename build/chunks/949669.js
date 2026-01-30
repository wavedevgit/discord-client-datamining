/** chunk id: 949669, original params: e,t,i (module,exports,require) **/
i.d(t, {
    o: () => T
});
var n = i(64700),
    l = i(171316),
    s = i(419954),
    r = i(115063),
    a = i(253932),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let T = (0, s.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => d.intl.string(d.t["7x9dyE"]),
    useValue: () => {
        let e = a.FA.useSetting();
        return n.useMemo(() => (0, r.Lx)(e), [e]).all
    },
    setValue: e => {
        a.FA.updateSetting(e ? o.yKI : o.yKI & ~o.dzt.NO_RELATION)
    },
    useDisabled: () => (0, l.uM)()
})