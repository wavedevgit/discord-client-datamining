/** chunk id: 220628, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(688810),
    r = n(987144),
    o = n(71393),
    c = n(485970),
    d = n(181940),
    u = n(299975),
    h = n(568065),
    A = n(652215);

function m(e, t, n) {
    n && (0, l.s7G)(), (0, u.h)(e, t)
}

function p(e, t) {
    let {
        analyticsLocations: n
    } = (0, a.Ay)(), {
        onToggle: l,
        isLoading: u,
        error: p
    } = (0, d.A)(e, t), g = (0, s.bG)([o.A], () => o.A.getGuild(e)), _ = (0, c.A)(e, t);
    return {
        onActivate: i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                {
                    shouldCloseAllModals: i = !0
                } = e;
            if (null != g && null != t) return _ < t.cost ? void(0, r.g)({
                analyticsLocation: {
                    page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: A.JJy.GUILD_POWERUPS_OVERVIEW_CARD
                },
                numberOfBoostsToAdd: t.cost - _,
                analyticsLocations: n,
                guild: g,
                intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                onSubscribeComplete: () => l(!0)?.then(() => {
                    m(g.id, t, i)
                })
            }) : l(!0)?.then(() => {
                m(g.id, t, i)
            })
        }, [l, t, _, n, g]),
        isLoading: u,
        error: p
    }
}