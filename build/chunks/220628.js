/** Chunk was on 1113 **/
/** chunk id: 220628, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(64700),
    l = n(311907),
    i = n(397927),
    s = n(688810),
    a = n(987144),
    o = n(71393),
    c = n(485970),
    u = n(181940),
    d = n(299975),
    h = n(568065),
    p = n(652215);

function g(e, t, n) {
    n && (0, i.s7G)(), (0, d.h)(e, t)
}

function f(e, t) {
    let {
        analyticsLocations: n
    } = (0, s.Ay)(), {
        onToggle: i,
        isLoading: d,
        error: f
    } = (0, u.A)(e, t), m = (0, l.bG)([o.A], () => o.A.getGuild(e)), b = (0, c.A)(e, t);
    return {
        onActivate: r.useCallback(function() {
            var e;
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                {
                    shouldCloseAllModals: l = !0
                } = r;
            if (null != m && null != t) return b < t.cost ? void(0, a.g)({
                analyticsLocation: {
                    page: p.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: p.JJy.GUILD_POWERUPS_OVERVIEW_CARD
                },
                numberOfBoostsToAdd: t.cost - b,
                analyticsLocations: n,
                guild: m,
                intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                onSubscribeComplete: () => {
                    var e;
                    return null == (e = i(!0)) ? void 0 : e.then(() => {
                        g(m.id, t, l)
                    })
                }
            }) : null == (e = i(!0)) ? void 0 : e.then(() => {
                g(m.id, t, l)
            })
        }, [i, t, b, n, m]),
        isLoading: d,
        error: f
    }
}