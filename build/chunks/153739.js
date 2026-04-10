/** chunk id: 153739 params = (module,exports,require) **/
n.d(t, {
    F7: () => d,
    tl: () => c,
    y3: () => o
});
var i = n(417597),
    s = n(287809),
    l = n(842144),
    r = n(695515),
    a = n(438732);
let o = () => {
        let e = (0, a.A)();
        return (0, i.bG)([r.A, s.default], () => {
            if (!0 !== e) return s.default.getCurrentUser();
            let t = r.A.getSelectedTeenId();
            if (null !== t) return s.default.getUser(t)
        })
    },
    d = e => (0, i.bG)([s.default], () => {
        let t = s.default.getUser(e);
        if (null != t) return t
    }),
    c = () => {
        let e = r.A.getSelectedTeenId(),
            {
                hasLoadedSettings: t,
                isLoading: n
            } = (0, i.cf)([l.A], () => ({
                hasLoadedSettings: null != e && l.A.hasSettingsForUser(e),
                isLoading: l.A.isLoading
            }));
        return null !== e && !t && !n
    }