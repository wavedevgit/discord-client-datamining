/** Chunk was on 64935 **/
/** chunk id: 571654, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => s,
    z: () => a
});
var r = n(64700),
    i = n(580630),
    l = n(985018);

function a(e) {
    return r.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? l.intl.string(l.t.ih4QMU) : t ? l.intl.string(l.t.o9xphc) : n ? l.intl.string(l.t.DWYJua) : void 0
    }, [e])
}

function s(e) {
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let {
            amount: t,
            currency: n
        } = e.price;
        return (0, i.$g)(t, n)
    }, [e])
}