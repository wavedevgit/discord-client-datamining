/** chunk id: 153739, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F7: () => c,
    tl: () => d,
    y3: () => o
});
var i = n(417597),
    s = n(287809),
    a = n(842144),
    r = n(695515),
    l = n(438732);
let o = () => {
        let e = (0, l.A)();
        return (0, i.bG)([r.A, s.default], () => {
            if (!0 !== e) return s.default.getCurrentUser();
            let t = r.A.getSelectedTeenId();
            if (null !== t) return s.default.getUser(t)
        })
    },
    c = e => (0, i.bG)([s.default], () => {
        let t = s.default.getUser(e);
        if (null != t) return t
    }),
    d = () => {
        let e = r.A.getSelectedTeenId(),
            {
                hasLoadedSettings: t,
                isLoading: n
            } = (0, i.cf)([a.A], () => ({
                hasLoadedSettings: null != e && a.A.hasSettingsForUser(e),
                isLoading: a.A.isLoading
            }));
        return null !== e && !t && !n
    }