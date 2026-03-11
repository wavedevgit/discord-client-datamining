/** chunk id: 573956 params = (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => N
});
var i = n(627968),
    s = n(64700),
    l = n(417597),
    a = n(554146),
    r = n(827734),
    o = n(397927),
    c = n(442433),
    d = n(826673),
    u = n(591552),
    h = n(202776),
    A = n(454058),
    m = n(976860),
    p = n(222823),
    g = n(661191),
    _ = n(32603),
    f = n(652793),
    x = n(652215),
    C = n(746080),
    E = n(790782),
    I = n(985018);

function N(e) {
    let {
        guild: t,
        selected: N
    } = e, b = (0, h.A)(t), S = (0, d.JZ)(a.M.CHANNEL_BROWSER_NEW_BADGE_NUX), T = (0, l.yK)([A.A], () => Array.from(A.A.getNewChannelIds(t.id)).filter(e => A.A.shouldIndicateNewChannel(t.id, e))), v = (0, l.bG)([p.Ay], () => p.Ay.hasUnread(t.id, E.P.GUILD_ONBOARDING_QUESTION)), y = T.length > _.rR, j = (0, l.bG)([u.A, p.Ay], () => {
        let e = u.A.lastFetchedAt(t.id),
            n = p.Ay.lastMessageId(t.id, E.P.GUILD_ONBOARDING_QUESTION);
        if (null == n) return !1;
        let i = g.default.extractTimestamp(n);
        return null != e && e > i
    }), R = s.useCallback(() => {
        (0, m.pX)(x.BVt.CHANNEL(t.id, b ? C.VV.CUSTOMIZE_COMMUNITY : C.VV.CHANNEL_BROWSER))
    }, [t.id, b]), O = s.useCallback(e => {
        (0, c.L3)(e, async () => {
            let {
                default: e
            } = await n.e("30412").then(n.bind(n, 807431));
            return n => (0, i.jsx)(e, {
                ...n,
                guild: t
            })
        })
    }, [t]), L = null;
    return S && !v && !y || N || j || (L = (0, i.jsx)(o.LpS, {
        color: r.A.colors.BADGE_BACKGROUND_BRAND.css,
        text: I.intl.string(I.t.y2b7CA)
    })), (0, i.jsx)(f.G, {
        id: `channels-${t.id}`,
        renderIcon: e => (0, i.jsx)(o.kiI, {
            size: "md",
            color: "currentColor",
            className: e
        }),
        text: b ? I.intl.string(I.t.h9mGOP) : I.intl.string(I.t.et6wav),
        selected: N,
        onClick: R,
        onContextMenu: O,
        trailing: L
    })
}