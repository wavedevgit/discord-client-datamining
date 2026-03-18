/** chunk id: 880405 params = (module,exports,require) **/
n.d(t, {
    L$: () => c,
    NP: () => s,
    Qq: () => d
}), n(323874), n(14289), n(35956);
var l = n(562465),
    a = n(73153),
    i = n(198982),
    r = n(652215);
let s = async e => {
    try {
        let t = ((await l.Bo.get({
            url: r.Rsh.SIMILAR_GAMES(e),
            rejectWithError: !1
        })).body.similar_games ?? []).filter(t => t !== e);
        a.h.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: t
        })
    } catch (e) {
        throw new i.LG(e)
    }
}, c = e => o(e, {
    utm_source: "discord"
}), o = (e, t) => {
    try {
        let n = new URL(e, window.location.origin);
        return Object.entries(t).forEach(e => {
            let [t, l] = e;
            n.searchParams.set(t, l)
        }), n.toString()
    } catch {
        let [n, l] = e.split("#");
        try {
            let e = new URL(n, window.location.origin);
            return Object.entries(t).forEach(t => {
                let [n, l] = t;
                e.searchParams.set(n, l)
            }), null != l ? `${e.toString()}#${l}` : e.toString()
        } catch {
            let n = e.includes("?"),
                l = Object.entries(t).map(e => {
                    let [t, n] = e;
                    return `${encodeURIComponent(t)}=${encodeURIComponent(n)}`
                }).join("&");
            return `${e}${n?"&":"?"}${l}`
        }
    }
};

function d(e, t) {
    if (null == e) return null;
    let n = c(e),
        l = function(e) {
            try {
                let t = new URL(e);
                if ("store.steampowered.com" !== t.hostname) return null;
                let n = t.pathname.match(/^\/app\/(\d+)(\/|$)/);
                if (null != n) return `steam://store/${n[1]}`
            } catch {}
            return null
        }(e);
    return t ? l ?? n : n
}