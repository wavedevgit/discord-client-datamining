/** Chunk was on 39048 **/
/** chunk id: 503929, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => c
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(997509),
    a = n(652215),
    o = n(985018);

function c(e) {
    let {
        isInventoryFeedEnabled: t,
        canManageGuild: n,
        features: c
    } = e, d = i.useCallback(e => {
        let t = new Set(c);
        e ? (t.add(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)), s.A.updateGuild({
            features: t
        })
    }, [c]);
    return (0, r.jsx)(l.nVY, {
        label: o.intl.string(o.t["oQ/7Bc"]),
        description: o.intl.string(o.t.fZ0qZU),
        children: (0, r.jsx)(l.dOG, {
            label: o.intl.string(o.t.WompT5),
            checked: t,
            onChange: d,
            disabled: !n
        })
    })
}