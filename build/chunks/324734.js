/** chunk id: 324734 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(271866),
    r = n(419954),
    o = n(147964),
    d = n(253932),
    c = n(780964),
    u = n(912615),
    _ = n(985018);
let m = (0, r.zD)(c.X.ADVANCED_APPLICATION_TEST_MODE, {
    useTitle: () => _.intl.string(_.t.erOqlh),
    useSubtitle: () => _.intl.string(_.t["52hMnD"]),
    usePredicate: d.Q_.useSetting,
    useValue: () => (0, s.bG)([o.A], () => null != o.A.testModeApplicationId),
    setValue: e => {
        e ? (0, l.qfG)(e => (0, i.jsx)(u.A, {
            ...e
        })) : a.cL()
    }
})