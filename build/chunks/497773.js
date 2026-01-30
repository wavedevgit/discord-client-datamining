/** chunk id: 497773, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => u
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(620140),
    a = n(38181),
    s = n(412461),
    o = n(310419),
    c = n(656106),
    d = n(652215);

function u(e) {
    let t = (0, l.bG)([a.A], () => a.A.getCategories()),
        n = (0, i.A)(),
        u = r.useMemo(() => [{
            id: n.id.toString(),
            label: n.name
        }, ...t.map(e => ({
            id: e.id.toString(),
            label: e.name
        }))], [t, n]),
        p = (0, o.R4)(),
        h = r.useCallback(e => {
            let t = u.find(t => t.id === e);
            null != t && ((0, s.TR)(d.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: t.label,
                category_id: Number(t.id),
                current_page: null == p ? void 0 : p.type
            }), (0, c.kq)({
                categoryId: e
            }))
        }, [null == p ? void 0 : p.type, u]),
        m = null != e && u.some(t => t.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: m,
        onSelectTab: h
    }
}