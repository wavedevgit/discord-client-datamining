/** Chunk was on 1113 **/
/** chunk id: 884452, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => A,
    is: () => b,
    sc: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(616075),
    a = n(637248),
    o = n(728321),
    c = n(244083),
    u = n(32603),
    d = n(823142),
    h = n(83766),
    p = n(652215),
    g = n(985018),
    f = n(495401);

function m(e, t, n, r) {
    let l = "compact" === r ? 8 : 12;
    if (e === u.PU) return l;
    if (e === u.bK) return t.features.has(p.GuildFeatures.HUB) ? 0 : l;
    if (e === n.voiceChannelsSectionNumber) {
        var i;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return 49;
        let r = null == (i = n.getChannelFromSectionRow(e, 0)) ? void 0 : i.channel;
        return null == r || r.record.type === p.rbe.GUILD_CATEGORY ? 9 : 25
    }
    return "compact" === r ? 32 : 40
}

function b(e, t) {
    switch (e) {
        case u.PU:
            return "hoisted-spacer";
        case u.bK:
            return "uncategorized-spacer";
        case u.HP:
            return "favorites";
        case t.recentsSectionNumber:
            return "recents-header";
        case t.voiceChannelsSectionNumber:
            return "voice-channels-header";
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return "category-".concat(n.id);
            return "section-".concat(e)
        }
    }
}
let A = l.memo(function(e) {
    let {
        sectionIndex: t,
        guild: n,
        guildChannels: m,
        guildChannelsVersion: b,
        selectedChannelId: A,
        disableManageChannels: y
    } = e, {
        isFavoritesPerk: O
    } = (0, s.l)("ChannelListSection"), _ = l.useCallback(() => {
        let e = m.getCategoryFromSection(m.recentsSectionNumber);
        if (null == e) return;
        let t = null,
            r = e.getShownChannelAndThreadIds();
        null != A && r.includes(A) && (t = (0, a.xb)(m)), (0, a.DD)(n.id, r, t)
    }, [n.id, A, m, b]), {
        density: x
    } = (0, i.wRf)(), j = "compact" === x ? 8 : 12;
    switch (t) {
        case u.PU:
            return (0, r.jsx)("div", {
                style: {
                    height: j
                }
            });
        case u.bK:
            if (n.features.has(p.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", {
                style: {
                    height: j
                }
            });
        case u.HP:
            return (0, r.jsx)(d.P4, {
                name: O ? g.intl.string(g.t.mlPMCy) : g.intl.string(g.t.k8fFjp)
            });
        case m.recentsSectionNumber:
            return (0, r.jsx)(d.P4, {
                name: g.intl.string(g.t.gKcrqM),
                onDismiss: _
            });
        case m.voiceChannelsSectionNumber: {
            var v;
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null == (v = m.getChannelFromSectionRow(t, 0)) ? void 0 : v.channel;
            return (0, r.jsxs)(l.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: f.ts
                }), (0, r.jsx)(d.kD, {
                    category: e,
                    channel: n
                })]
            })
        }
        case u.TF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(d.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: y,
                children: (0, r.jsx)(o.A, {
                    inlineSpecs: h.qB,
                    arrowAlignment: c.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right"
                })
            })
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(d.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: y
            })
        }
    }
})