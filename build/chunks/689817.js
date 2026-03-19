/** chunk id: 689817 params = (module,exports,require) **/
n.d(t, {
    f: () => s
});
var i = n(64700),
    a = n(965660),
    r = n(601193),
    l = n(324580);

function s() {
    let e = r.A.useField("selectedTab"),
        t = i.useMemo(() => [l.o.FEATURED, l.o.GAMING, l.o.MUSIC, l.o.ENTERTAINMENT, l.o.TECH, l.o.EDUCATION, l.o.HUBS].map(e => ({
            id: e,
            label: (0, a.jR)(e)
        })), []),
        n = i.useCallback(e => {
            r.A.setState({
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