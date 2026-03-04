/** chunk id: 917987, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    J: () => l,
    s: () => i
});
var n, r = s(64700),
    l = ((n = {}).MOUNTED = "mounted", n.SORT_OUT = "sort-out", n.SORT_IN = "sort-in", n.SHUFFLE_OUT = "shuffle-out", n.SHUFFLE_IN = "shuffle-in", n.FINISHED = "finished", n);
let i = () => {
    let [e, t] = r.useState("mounted"), [s, n] = r.useState(!1), l = r.useRef(null);
    return r.useEffect(() => {
        s && "finished" === e && (null !== l.current && l.current.focus(), n(!1))
    }, [e, s]), {
        animationPhase: e,
        startAnimation: r.useCallback(e => {
            let {
                isShuffling: s,
                onOutroComplete: r,
                returnRef: i
            } = e;
            i?.current != null && (l.current = i.current, n(!0)), t(s ? "shuffle-out" : "sort-out"), setTimeout(() => {
                r(), t(s ? "shuffle-in" : "sort-in"), setTimeout(() => {
                    t("finished")
                }, s ? 200 : 300)
            }, s ? 250 : 300)
        }, [])
    }
}