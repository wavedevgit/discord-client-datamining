/** chunk id: 342002, original params: t,e,i (module,exports,require) **/
i.d(e, {
    P: () => u
});
var n = i(311907),
    l = i(419954),
    s = i(100406),
    a = i(878460),
    r = i(780964);
let u = i(431144).px.map(t => (0, l.zD)(`${r.X.EMAIL_LIST_ITEM_PREFIX}${t.category}`, {
    useTitle: t.label,
    useSubtitle: t.subLabel,
    useValue: () => (t => {
        let {
            categories: e
        } = (0, n.cf)([a.A], () => a.A.getEmailSettings());
        return !!e[t]
    })(t.category),
    setValue: e => (0, s.CA)(t.category, e)
}))