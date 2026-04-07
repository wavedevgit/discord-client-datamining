/** chunk id: 718812 params = (module,exports,require) **/
l.d(t, {
    h: () => s
});
var n = l(64700),
    a = l(372684),
    i = l(985018);

function s(e) {
    return n.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case a.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? i.intl.string(i.t.Cyxddp);
                case a.Gy.PHRASE:
                    return `"${t.text}"`
            }
        }
        return i.intl.string(i.t.Cyxddp)
    }, [e.name, e.decision])
}