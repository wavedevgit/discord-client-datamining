/** Chunk was on web.js **/
/** chunk id: 115703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(638769);
var r = n(64700),
    i = n(429913),
    a = n(403362);
let o = 5;

function s(e) {
    return (t, n) => {
        var r, i, a, o;
        let s = null != (r = null == (a = e[t.id]) ? void 0 : a.score) ? r : 0,
            l = null != (i = null == (o = e[n.id]) ? void 0 : o.score) ? i : 0;
        return s !== l ? l - s : 0
    }
}

function l(e) {
    let t = (0, i.A)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(a.Vq), [t])
}

function c(e) {
    let t = e.gameActivity,
        n = l(e),
        i = r.useMemo(() => {
            let e = s(t);
            return n.sort(e), n
        }, [n, t]),
        a = r.useMemo(() => i.slice(0, o), [i]);
    return {
        gamesToDisplay: a,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null != (e = i[o]) ? e : null
        }, [i]),
        remainingGames: r.useMemo(() => i.slice(o), [i])
    }
}