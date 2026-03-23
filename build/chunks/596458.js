/** chunk id: 596458 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(342494),
    a = n(686956),
    r = n(688810),
    o = n(954571),
    c = n(652215),
    d = n(49999),
    u = n(985018);

function h(e) {
    let {
        targetElementRef: t,
        gameId: n,
        gameName: h,
        gameCommunityGuildId: A,
        markAsDismissed: m
    } = e, {
        analyticsLocations: p
    } = (0, r.Ay)();
    return s.useEffect(() => {
        o.default.track(c.HAw.GAME_COMMUNITY_UPSELL_VIEWED, {
            location_stack: p,
            application_id: n,
            guild_id: A
        })
    }, [n, A, p]), (0, i.jsx)(l.AM, {
        targetElementRef: t,
        position: "top",
        onRequestClose: () => {
            o.default.track(c.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                location_stack: p,
                application_id: n,
                guild_id: A
            }), m(d.i.USER_DISMISS)
        },
        title: u.intl.formatToPlainString(u.t.ry9SJw, {
            gameName: h
        }),
        body: u.intl.string(u.t.YPpOov),
        actions: [{
            text: u.intl.string(u.t.RVfNGU),
            onClick: () => {
                o.default.track(c.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                    location_stack: p,
                    application_id: n,
                    guild_id: A
                }), m(d.i.TAKE_ACTION), a.A.joinGuild(A, {
                    source: c.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL
                })
            }
        }]
    })
}