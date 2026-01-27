/** Chunk was on web.js **/
/** chunk id: 206835, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(159001),
    a = n(780964),
    o = n(652215),
    s = n(355097);

function l() {
    let {
        guild: e,
        scrollPosition: t,
        analyticsLocation: l,
        analyticsLocations: c
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, i.V2)(e);
        {
            let {
                openUserSettings: t
            } = n(840065);
            t(a.X.PROFILE_PANEL, {
                section: o.nc_.PROFILE_CUSTOMIZATION,
                subsection: null != e ? s.Eq.GUILD : s.Eq.USER_PROFILE,
                analyticsLocation: l,
                analyticsLocations: c
            })
        }
    }, [e, t, l, c])
}
n(833336), n(628965)