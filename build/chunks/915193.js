/** chunk id: 915193 params = (module,exports,require) **/
n.d(e, {
    A: () => G,
    P: () => C
}), n(323874), n(14289), n(35956);
var r = n(627968),
    l = n(64700),
    c = n(284009),
    s = n.n(c),
    i = n(477450),
    a = n.n(i),
    o = n(311907),
    u = n(397927),
    d = n(964404),
    p = n(954571),
    h = n(723702),
    g = n(998218),
    w = n(652215),
    b = n(355097),
    f = n(985018);
let A = {
    [b.YL.GOOGLE]: "https://www.google.com/search?q=",
    [b.YL.BING]: "https://www.bing.com/search?q=",
    [b.YL.DUCKDUCKGO]: "https://duckduckgo.com/?q="
};

function C(t) {
    let e;
    if (1 != t.split("%s").length - 1) return !1;
    let n = t.replace("%s", "");
    try {
        if (e = new URL(n), "https:" !== e.protocol) return !1
    } catch {
        return !1
    }
    let {
        hostname: r
    } = e;
    return !("localhost" === r || a()({
        exact: !0
    }).test(r) || !r.includes(".") || t.indexOf("%s") <= e.origin.length) && !g.A.isDiscordUrl(n, !0)
}

function G(t) {
    let e = (0, o.bG)([d.Ay], () => d.Ay.searchProvider),
        n = (0, o.bG)([d.Ay], () => d.Ay.customSearchUrl),
        c = l.useCallback(() => {
            s()(null != t, "text cannot be null"), p.default.track(w.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open(function(t, e, n) {
                let r = encodeURIComponent(n);
                if (t === b.YL.CUSTOM && C(e)) return e.replace("%s", r);
                let l = A[t] ?? A[b.YL.GOOGLE];
                return `${l}${r}`
            }(e, n, t), "_blank")
        }, [t, e, n]);
    return h.isPlatformEmbedded && null != t && t?.length !== 0 ? [(0, r.jsx)(u.Drp, {
        id: "search-web",
        label: function(t) {
            switch (t) {
                case b.YL.BING:
                    return f.intl.string(f.t.Cdkg1s);
                case b.YL.DUCKDUCKGO:
                    return f.intl.string(f.t["3MXgwN"]);
                case b.YL.CUSTOM:
                    return f.intl.string(f.t.YHykMS);
                default:
                    return f.intl.string(f.t["Rd/Mko"])
            }
        }(e),
        leadingAccessory: {
            type: "icon",
            icon: u.$p$
        },
        action: c
    }, "search-web")] : null
}