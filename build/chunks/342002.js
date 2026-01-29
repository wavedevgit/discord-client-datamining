/** Chunk was on 4670 **/
/** chunk id: 342002, original params: e,t,i (module,exports,require) **/
i.d(t, {
    P: () => u
});
var n = i(311907),
    l = i(419954),
    s = i(100406),
    r = i(878460),
    a = i(780964);
let u = i(431144).px.map(e => (0, l.zD)("".concat(a.X.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
    useTitle: e.label,
    useSubtitle: e.subLabel,
    useValue: () => (e => {
        let {
            categories: t
        } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
        return !!t[e]
    })(e.category),
    setValue: t => (0, s.CA)(e.category, t)
}))