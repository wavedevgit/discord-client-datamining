/** chunk id: 207975, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
}), r(896048);
var n = r(64700),
    i = r(677402),
    l = r(639214),
    s = r(830012),
    a = r(654487);

function o(e, t, r) {
    let o = (0, i.H)({
        location: a.rE.STREAM_SOURCE_SELECT
    });
    return n.useMemo(() => {
        if (null == r || !o) return null;
        for (let a of r) {
            var n, i;
            let r = t.find(e => (0, s.A)(a.id, e.windowHandle));
            if ((null == r ? void 0 : r.id) == null) continue;
            let o = (0, l.L7)(e, r.id);
            if (null != o && (null == (n = o.userStatus) ? void 0 : n.enrolledAt) != null && (null == (i = o.userStatus) ? void 0 : i.completedAt) == null) return {
                source: a,
                quest: o
            }
        }
        return null
    }, [o, e, t, r])
}