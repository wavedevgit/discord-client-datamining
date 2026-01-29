/** Chunk was on 2827 **/
/** chunk id: 153739, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F7: () => c,
    tl: () => d,
    y3: () => o
});
var r = n(417597),
    i = n(287809),
    l = n(842144),
    s = n(695515),
    a = n(438732);
let o = () => {
        let e = (0, a.A)();
        return (0, r.bG)([s.A, i.default], () => {
            if (!0 !== e) return i.default.getCurrentUser();
            let t = s.A.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t)
        })
    },
    c = e => (0, r.bG)([i.default], () => {
        let t = i.default.getUser(e);
        if (null != t) return t
    }),
    d = () => {
        let e = s.A.getSelectedTeenId(),
            {
                hasLoadedSettings: t,
                isLoading: n
            } = (0, r.cf)([l.A], () => ({
                hasLoadedSettings: null != e && l.A.hasSettingsForUser(e),
                isLoading: l.A.isLoading
            }));
        return null !== e && !t && !n
    }