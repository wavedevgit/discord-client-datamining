/** chunk id: 475529, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => d
});
var i = n(64700),
    r = n(873263),
    l = n(403362),
    a = n(631001),
    s = n(890687),
    o = n(985018);

function d(e) {
    let {
        withClaimedQuestsTab: t = !0
    } = e, n = a.A.useField("tab"), d = (0, r.zy)(), c = (0, s.p5)();
    i.useEffect(() => {
        a.A.getState().initializeFromUrl(d.search, c)
    }, [d.search, c]);
    let u = i.useCallback(e => {
        a.A.getState().setTab(e)
    }, []);
    return {
        tabs: i.useMemo(() => [{
            id: s.NC.ALL,
            label: o.intl.string(o.t["0SzXmi"])
        }, t ? {
            id: s.NC.CLAIMED,
            label: o.intl.string(o.t.zyNYNB)
        } : null, t && c ? {
            id: s.NC.PREVIEW_TOOL,
            label: o.intl.string(o.t.BDUDau)
        } : null].filter(l.Vq), [t, c]),
        selectedTab: n,
        onSelectTab: u
    }
}