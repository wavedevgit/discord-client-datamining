/** chunk id: 207975, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var s = r(64700),
    i = r(677402),
    n = r(639214),
    l = r(830012),
    a = r(654487);

function o(e, t, r) {
    let o = (0, i.H)({
        location: a.rE.STREAM_SOURCE_SELECT
    });
    return s.useMemo(() => {
        if (null == r || !o) return null;
        for (let s of r) {
            let r = t.find(e => (0, l.A)(s.id, e.windowHandle));
            if (r?.id == null) continue;
            let i = (0, n.L7)(e, r.id);
            if (null != i && i.userStatus?.enrolledAt != null && i.userStatus?.completedAt == null) return {
                source: s,
                quest: i
            }
        }
        return null
    }, [o, e, t, r])
}