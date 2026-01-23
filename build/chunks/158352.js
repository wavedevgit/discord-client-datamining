/** Chunk was on 47841 **/
/** chunk id: 158352, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    c: () => d
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(975571),
    a = n(997509),
    o = n(652215),
    c = n(985018);

function d(e) {
    let {
        features: t,
        canManageGuild: n
    } = e, d = i.useCallback(e => {
        let n = new Set(t);
        e ? n.add(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : n.delete(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER), a.A.updateGuild({
            features: n
        })
    }, [t]);
    return (0, r.jsx)(l.nVY, {
        label: c.intl.string(c.t.FOYxgr),
        description: c.intl.format(c.t["c6Cy/h"], {
            helpdeskArticle: s.A.getArticleURL(o.MVz.CONVERSATION_SUMMARIES)
        }),
        children: (0, r.jsx)(l.dOG, {
            label: c.intl.string(c.t.vmEDQs),
            badge: "beta",
            checked: t.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
            onChange: d,
            disabled: !n
        })
    })
}