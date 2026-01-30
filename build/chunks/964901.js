/** chunk id: 964901, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => s
});
var r = n(64700),
    l = n(102597),
    i = n(904054),
    a = n(584014);

function s(e) {
    let {
        isPlaying: t,
        playSound: n,
        preloadSound: s
    } = (0, a.A)(null != e ? (0, l.A)(e.soundId) : null);
    return r.useEffect(() => {
        null != e && s()
    }, [e, s]), {
        isPlaying: t,
        playSound: r.useCallback(() => {
            var t;
            return !!n({
                volume: (0, i.A)(null != (t = null == e ? void 0 : e.volume) ? t : 1)
            })
        }, [n, null == e ? void 0 : e.volume])
    }
}