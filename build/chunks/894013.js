/** chunk id: 894013 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    s = n(417597),
    l = n(780964),
    r = n(840065),
    a = n(628965),
    o = n(652215),
    d = n(355097);
let c = new Set(Object.values(d.Eq)),
    u = () => {
        let e = (0, s.bG)([a.A], () => {
                let e = a.A.getSubsection();
                return null != e && c.has(e) ? e : d.Eq.USER_PROFILE
            }),
            t = i.useCallback(t => {
                e !== t && (0, r.openUserSettings)(l.X.PROFILE_PANEL, {
                    section: o.nc_.PROFILE_CUSTOMIZATION,
                    subsection: t
                })
            }, [e]);
        return {
            subsection: e,
            setSubsection: t
        }
    }