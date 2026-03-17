/** chunk id: 571654 params = (module,exports,require) **/
n.d(t, {
    X: () => s,
    z: () => a
});
var i = n(64700),
    l = n(580630),
    r = n(985018);

function a(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? r.intl.string(r.t.ih4QMU) : t ? r.intl.string(r.t.o9xphc) : n ? r.intl.string(r.t.DWYJua) : void 0
    }, [e])
}

function s(e) {
    return i.useMemo(() => {
        if (e?.price == null) return;
        let {
            amount: t,
            currency: n
        } = e.price;
        return (0, l.$g)(t, n)
    }, [e])
}