/** chunk id: 476438 params = (module,exports,require) **/
l.d(t, {
    B: () => c
});
var n = l(64700),
    a = l(989349),
    s = l.n(a),
    i = l(311907),
    r = l(832163),
    o = l(985018);

function c() {
    let e, t = (e = (0, i.bG)([r.A], () => r.A.getConfig()?.promotionEndDatetime, []), n.useMemo(() => {
        if (null == e) return null;
        let t = s()(),
            l = s()(e).diff(t, "days");
        return l <= 0 ? null : l
    }, [e]));
    return n.useMemo(() => null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, {
        days: Math.max(t, 1)
    }), [t])
}