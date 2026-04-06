/** chunk id: 718812 params = (module,exports,require) **/
l.d(t, {
    h: () => s
});
var a = l(64700),
    n = l(372684),
    i = l(985018);

function s(e) {
    return a.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case n.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? i.intl.string(i.t.Cyxddp);
                case n.Gy.PHRASE:
                    return `"${t.text}"`
            }
        }
        return i.intl.string(i.t.Cyxddp)
    }, [e.name, e.decision])
}