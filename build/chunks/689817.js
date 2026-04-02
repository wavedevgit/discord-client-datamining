/** chunk id: 689817 params = (module,exports,require) **/
n.d(t, {
    f: () => s
});
var i = n(64700),
    l = n(965660),
    a = n(601193),
    r = n(324580);

function s() {
    let e = a.A.useField("selectedTab"),
        t = i.useMemo(() => [r.o.FEATURED, r.o.GAMING, r.o.MUSIC, r.o.ENTERTAINMENT, r.o.TECH, r.o.EDUCATION, r.o.HUBS].map(e => ({
            id: e,
            label: (0, l.jR)(e)
        })), []),
        n = i.useCallback(e => {
            a.A.setState({
                selectedTab: e
            })
        }, []);
    return i.useEffect(() => {
        null != e && t.some(t => t.id === e) || n(t[0].id)
    }, [e, t, n]), {
        tabs: t,
        selectedTab: e ?? t[0].id,
        setSelectedTab: n
    }
}