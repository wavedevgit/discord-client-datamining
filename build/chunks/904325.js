/** chunk id: 904325 params = (module,exports,require) **/
n.d(t, {
    o: () => u
});
var i = n(64700),
    s = n(171316),
    l = n(419954),
    r = n(115063),
    a = n(253932),
    o = n(780964),
    d = n(652215),
    c = n(985018);
let u = (0, l.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => c.intl.string(c.t["7x9dyE"]),
    useValue: () => {
        let e = a.FA.useSetting();
        return i.useMemo(() => (0, r.Lx)(e), [e]).all
    },
    setValue: e => {
        a.FA.updateSetting(e ? d.yKI : d.yKI & ~d.dzt.NO_RELATION)
    },
    useDisabled: () => (0, s.uM)()
})