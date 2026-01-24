/** Chunk was on 46875 **/
/** chunk id: 964901, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => s
});
var l = n(64700),
    r = n(102597),
    i = n(904054),
    a = n(584014);

function s(e) {
    let {
        isPlaying: t,
        playSound: n,
        preloadSound: s
    } = (0, a.A)(null != e ? (0, r.A)(e.soundId) : null);
    return l.useEffect(() => {
        null != e && s()
    }, [e, s]), {
        isPlaying: t,
        playSound: l.useCallback(() => {
            var t;
            return !!n({
                volume: (0, i.A)(null != (t = null == e ? void 0 : e.volume) ? t : 1)
            })
        }, [n, null == e ? void 0 : e.volume])
    }
}