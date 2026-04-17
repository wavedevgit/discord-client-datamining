/** chunk id: 476438 params = (module,exports,require) **/
n.d(t, {
    B: () => c
});
var l = n(64700),
    a = n(989349),
    s = n.n(a),
    i = n(311907),
    r = n(832163),
    o = n(985018);

function c() {
    let e, t = (e = (0, i.bG)([r.A], () => r.A.getConfig()?.promotionEndDatetime, []), l.useMemo(() => {
        if (null == e) return null;
        let t = s()(),
            n = s()(e).diff(t, "days");
        return n <= 0 ? null : n
    }, [e]));
    return l.useMemo(() => null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, {
        days: Math.max(t, 1)
    }), [t])
}