/** chunk id: 385465 params = (module,exports,require) **/
n.d(t, {
    d: () => c
});
var i = n(311907),
    s = n(264686),
    l = n(419954),
    r = n(803224),
    a = n(780964),
    o = n(652215),
    d = n(985018);
let c = (0, l.zD)(a.X.DESKTOP_NOTIFICATIONS, {
    useTitle: () => d.intl.string(d.t["/0WCll"]),
    useSubtitle: () => d.intl.string(d.t.wF9ih3),
    useValue: () => (0, i.bG)([r.A], () => r.A.getDesktopType()) !== o.nRU.NEVER,
    setValue: e => s.default.setDesktopType(e ? o.nRU.ALL : o.nRU.NEVER)
})