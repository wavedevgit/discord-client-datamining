/** chunk id: 571654 params = (module,exports,require) **/
n.d(t, {
    X: () => r,
    z: () => s
});
var i = n(64700),
    a = n(580630),
    l = n(985018);

function s(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? l.intl.string(l.t.ih4QMU) : t ? l.intl.string(l.t.o9xphc) : n ? l.intl.string(l.t.DWYJua) : void 0
    }, [e])
}

function r(e) {
    return i.useMemo(() => {
        if (e?.price == null) return;
        let {
            amount: t,
            currency: n
        } = e.price;
        return (0, a.$g)(t, n)
    }, [e])
}