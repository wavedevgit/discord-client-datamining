/** chunk id: 880405, original params: t,e,r (module,exports,require) **/
r.d(e, {
    L: () => s,
    N: () => l
}), r(323874), r(14289), r(35956);
var n = r(562465),
    i = r(73153),
    o = r(198982),
    a = r(652215);
let l = async t => {
    try {
        let e = ((await n.Bo.get({
            url: a.Rsh.SIMILAR_GAMES(t),
            rejectWithError: !1
        })).body.similar_games ?? []).filter(e => e !== t);
        i.h.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: t,
            games: e
        })
    } catch (t) {
        throw new o.LG(t)
    }
}, s = t => c(t, {
    utm_source: "discord"
}), c = (t, e) => {
    try {
        let r = new URL(t, window.location.origin);
        return Object.entries(e).forEach(t => {
            let [e, n] = t;
            r.searchParams.set(e, n)
        }), r.toString()
    } catch {
        let [r, n] = t.split("#");
        try {
            let t = new URL(r, window.location.origin);
            return Object.entries(e).forEach(e => {
                let [r, n] = e;
                t.searchParams.set(r, n)
            }), null != n ? `${t.toString()}#${n}` : t.toString()
        } catch {
            let r = t.includes("?"),
                n = Object.entries(e).map(t => {
                    let [e, r] = t;
                    return `${encodeURIComponent(e)}=${encodeURIComponent(r)}`
                }).join("&");
            return `${t}${r?"&":"?"}${n}`
        }
    }
}