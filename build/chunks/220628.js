/** chunk id: 220628 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(688810),
    a = n(987144),
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
    } = (0, r.Ay)(), {
        onToggle: l,
        isLoading: u,
        error: p
    } = (0, d.A)(e, t), _ = (0, s.bG)([o.A], () => o.A.getGuild(e)), g = (0, c.A)(e, t);
    return {
        onActivate: i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                {
                    shouldCloseAllModals: i = !0
                } = e;
            if (null != _ && null != t) return g < t.cost ? void(0, a.g)({
                analyticsLocation: {
                    page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: A.JJy.GUILD_POWERUPS_OVERVIEW_CARD
                },
                numberOfBoostsToAdd: t.cost - g,
                analyticsLocations: n,
                guild: _,
                intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                onSubscribeComplete: () => l(!0)?.then(() => {
                    m(_.id, t, i)
                })
            }) : l(!0)?.then(() => {
                m(_.id, t, i)
            })
        }, [l, t, g, n, _]),
        isLoading: u,
        error: p
    }
}