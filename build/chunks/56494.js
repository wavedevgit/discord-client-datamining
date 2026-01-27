/** Chunk was on web.js **/
/** chunk id: 56494, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    F: () => l
});
var r = n(64700),
    i = n(311907),
    a = n(594061),
    o = n(26909),
    s = n(355097);

function l(e) {
    r.useEffect(() => {
        a.bW.loadIfUncached(s.oD.FRECENCY_AND_FAVORITES_SETTINGS)
    }, []);
    let t = (0, i.bG)([o.Ay], () => o.Ay.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, o.RG)(t, e), [t, e])
}