/** chunk id: 571654 params = (module,exports,require) **/
n.d(t, {
    X: () => a,
    z: () => r
});
var i = n(64700),
    l = n(580630),
    s = n(985018);

function r(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? s.intl.string(s.t.ih4QMU) : t ? s.intl.string(s.t.o9xphc) : n ? s.intl.string(s.t.DWYJua) : void 0
    }, [e])
}

function a(e) {
    return i.useMemo(() => {
        if (e?.price == null) return;
        let {
            amount: t,
            currency: n
        } = e.price;
        return (0, l.$g)(t, n)
    }, [e])
}