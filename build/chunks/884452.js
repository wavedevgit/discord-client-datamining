/** chunk id: 884452 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => p,
    is: () => g,
    sc: () => _
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
    m = n(116648);

function _(e, t, n, i) {
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
let p = s.memo(function(e) {
    let {
        sectionIndex: t,
        guild: n,
        guildChannels: _,
        guildChannelsVersion: g,
        selectedChannelId: p,
        disableManageChannels: f
    } = e, x = s.useCallback(() => {
        let e = _.getCategoryFromSection(_.recentsSectionNumber);
        if (null == e) return;
        let t = null,
            i = e.getShownChannelAndThreadIds();
        null != p && i.includes(p) && (t = (0, a.xb)(_)), (0, a.DD)(n.id, i, t)
    }, [n.id, p, _, g]), {
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
                name: A.intl.string(A.t.mlPMCy)
            });
        case _.recentsSectionNumber:
            return (0, i.jsx)(d.P4, {
                name: A.intl.string(A.t.gKcrqM),
                onDismiss: x
            });
        case _.voiceChannelsSectionNumber: {
            let e = _.getCategoryFromSection(_.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = _.getChannelFromSectionRow(t, 0)?.channel;
            return (0, i.jsxs)(s.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: m.ts
                }), (0, i.jsx)(d.kD, {
                    category: e,
                    channel: n
                })]
            })
        }
        case c.TF: {
            let e = _.getNamedCategoryFromSection(t);
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
            let e = _.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: f
            })
        }
    }
})