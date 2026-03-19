/** chunk id: 880405 params = (module,exports,require) **/
n.d(e, {
    L$: () => s,
    NP: () => a,
    Qq: () => u
}), n(323874), n(14289), n(35956);
var r = n(562465),
    i = n(73153),
    o = n(198982),
    l = n(652215);
let a = async t => {
    try {
        let e = ((await r.Bo.get({
            url: l.Rsh.SIMILAR_GAMES(t),
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
        let n = new URL(t, window.location.origin);
        return Object.entries(e).forEach(t => {
            let [e, r] = t;
            n.searchParams.set(e, r)
        }), n.toString()
    } catch {
        let [n, r] = t.split("#");
        try {
            let t = new URL(n, window.location.origin);
            return Object.entries(e).forEach(e => {
                let [n, r] = e;
                t.searchParams.set(n, r)
            }), null != r ? `${t.toString()}#${r}` : t.toString()
        } catch {
            let n = t.includes("?"),
                r = Object.entries(e).map(t => {
                    let [e, n] = t;
                    return `${encodeURIComponent(e)}=${encodeURIComponent(n)}`
                }).join("&");
            return `${t}${n?"&":"?"}${r}`
        }
    }
};

function u(t, e) {
    if (null == t) return null;
    let n = s(t),
        r = function(t) {
            try {
                let e = new URL(t);
                if ("store.steampowered.com" !== e.hostname) return null;
                let n = e.pathname.match(/^\/app\/(\d+)(\/|$)/);
                if (null != n) return `steam://store/${n[1]}`
            } catch {}
            return null
        }(t);
    return e ? r ?? n : n
}