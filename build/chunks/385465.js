/** chunk id: 385465, original params: t,e,i (module,exports,require) **/
i.d(e, {
    d: () => d
});
var n = i(311907),
    l = i(264686),
    s = i(419954),
    r = i(803224),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let d = (0, s.zD)(u.X.DESKTOP_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t["/0WCll"]),
    useSubtitle: () => o.intl.string(o.t.wF9ih3),
    useValue: () => (0, n.bG)([r.A], () => r.A.getDesktopType()) !== a.nRU.NEVER,
    setValue: t => l.default.setDesktopType(t ? a.nRU.ALL : a.nRU.NEVER)
})