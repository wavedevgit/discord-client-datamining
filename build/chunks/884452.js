/** chunk id: 884452, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    is: () => g,
    sc: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(637248),
    r = n(728321),
    o = n(244083),
    c = n(32603),
    d = n(823142),
    u = n(83766),
    h = n(652215),
    A = n(985018),
    p = n(495401);

function m(e, t, n, i) {
    let s = "compact" === i ? 8 : 12;
    if (e === c.PU) return s;
    if (e === c.bK) return t.features.has(h.GuildFeatures.HUB) ? 0 : s;
    if (e === n.voiceChannelsSectionNumber) {
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return 49;
        let i = n.getChannelFromSectionRow(e, 0)?.channel;
        return null == i || i.record.type === h.rbe.GUILD_CATEGORY ? 9 : 25
    }
    return "compact" === i ? 32 : 40
}

function g(e, t) {
    switch (e) {
        case c.PU:
            return "hoisted-spacer";
        case c.bK:
            return "uncategorized-spacer";
        case c.HP:
            return "favorites";
        case t.recentsSectionNumber:
            return "recents-header";
        case t.voiceChannelsSectionNumber:
            return "voice-channels-header";
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return `category-${n.id}`;
            return `section-${e}`
        }
    }
}
let _ = s.memo(function(e) {
    let {
        sectionIndex: t,
        guild: n,
        guildChannels: m,
        guildChannelsVersion: g,
        selectedChannelId: _,
        disableManageChannels: f
    } = e, x = s.useCallback(() => {
        let e = m.getCategoryFromSection(m.recentsSectionNumber);
        if (null == e) return;
        let t = null,
            i = e.getShownChannelAndThreadIds();
        null != _ && i.includes(_) && (t = (0, a.xb)(m)), (0, a.DD)(n.id, i, t)
    }, [n.id, _, m, g]), {
        density: C
    } = (0, l.wRf)(), E = "compact" === C ? 8 : 12;
    switch (t) {
        case c.PU:
            return (0, i.jsx)("div", {
                style: {
                    height: E
                }
            });
        case c.bK:
            if (n.features.has(h.GuildFeatures.HUB)) return null;
            return (0, i.jsx)("div", {
                style: {
                    height: E
                }
            });
        case c.HP:
            return (0, i.jsx)(d.P4, {
                name: A.intl.string(A.t.k8fFjp)
            });
        case m.recentsSectionNumber:
            return (0, i.jsx)(d.P4, {
                name: A.intl.string(A.t.gKcrqM),
                onDismiss: x
            });
        case m.voiceChannelsSectionNumber: {
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = m.getChannelFromSectionRow(t, 0)?.channel;
            return (0, i.jsxs)(s.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: p.ts
                }), (0, i.jsx)(d.kD, {
                    category: e,
                    channel: n
                })]
            })
        }
        case c.TF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: f,
                children: (0, i.jsx)(r.A, {
                    inlineSpecs: u.qB,
                    arrowAlignment: o.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right"
                })
            })
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: f
            })
        }
    }
})