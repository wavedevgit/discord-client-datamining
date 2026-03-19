/** chunk id: 220628 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
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

function g(e, t) {
    let {
        analyticsLocations: n
    } = (0, a.Ay)(), {
        onToggle: l,
        isLoading: u,
        error: g
    } = (0, d.A)(e, t), p = (0, s.bG)([o.A], () => o.A.getGuild(e)), _ = (0, c.A)(e, t);
    return {
        onActivate: i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                {
                    shouldCloseAllModals: i = !0
                } = e;
            if (null != p && null != t) return _ < t.cost ? void(0, r.g)({
                analyticsLocation: {
                    page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: A.JJy.GUILD_POWERUPS_OVERVIEW_CARD
                },
                numberOfBoostsToAdd: t.cost - _,
                analyticsLocations: n,
                guild: p,
                intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                onSubscribeComplete: () => l(!0)?.then(() => {
                    m(p.id, t, i)
                })
            }) : l(!0)?.then(() => {
                m(p.id, t, i)
            })
        }, [l, t, _, n, p]),
        isLoading: u,
        error: g
    }
}