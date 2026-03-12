/** chunk id: 571654 params = (module,exports,require) **/
n.d(t, {
    X: () => s,
    z: () => l
});
var i = n(64700),
    r = n(580630),
    a = n(985018);

function l(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? a.intl.string(a.t.ih4QMU) : t ? a.intl.string(a.t.o9xphc) : n ? a.intl.string(a.t.DWYJua) : void 0
    }, [e])
}

function s(e) {
    return i.useMemo(() => {
        if (e?.price == null) return;
        let {
            amount: t,
            currency: n
        } = e.price;
        return (0, r.$g)(t, n)
    }, [e])
}