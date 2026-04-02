/** chunk id: 475529 params = (module,exports,require) **/
n.d(t, {
    J: () => d
});
var i = n(64700),
    a = n(873263),
    l = n(403362),
    r = n(631001),
    s = n(890687),
    o = n(985018);

function d(e) {
    let {
        withClaimedQuestsTab: t = !0
    } = e, n = r.A.useField("tab"), d = (0, a.zy)(), c = (0, s.p5)();
    i.useEffect(() => {
        r.A.getState().initializeFromUrl(d.search, c)
    }, [d.search, c]);
    let u = i.useCallback(e => {
        r.A.getState().setTab(e)
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