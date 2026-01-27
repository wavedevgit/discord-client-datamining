/** Chunk was on web.js **/
/** chunk id: 237248, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(64700),
    i = n(417597),
    a = n(594061),
    o = n(796774),
    s = n(209932),
    l = n(766864);

function c() {
    let e = (0, l.zZ)("useFetchSoundboardData");
    return {
        fetching: (0, i.bG)([s.A], () => s.A.isFetchingAnySounds()),
        maybeFetchData: r.useCallback(() => {
            o.E7(), a.bW.loadIfNecessary()
        }, [e.sortingStrategy])
    }
}