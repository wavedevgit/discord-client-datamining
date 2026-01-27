/** Chunk was on 77870 **/
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
    p = n(83766),
    h = n(652215),
    f = n(985018),
    g = n(495401);

function m(e, t, n, r) {
    let l = "compact" === r ? 8 : 12;
    if (e === u.PU) return l;
    if (e === u.bK) return t.features.has(h.GuildFeatures.HUB) ? 0 : l;
    if (e === n.voiceChannelsSectionNumber) {
        var i;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return 49;
        let r = null == (i = n.getChannelFromSectionRow(e, 0)) ? void 0 : i.channel;
        return null == r || r.record.type === h.rbe.GUILD_CATEGORY ? 9 : 25
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
        isFavoritesPerk: _
    } = (0, s.l)("ChannelListSection"), O = l.useCallback(() => {
        let e = m.getCategoryFromSection(m.recentsSectionNumber);
        if (null == e) return;
        let t = null,
            r = e.getShownChannelAndThreadIds();
        null != A && r.includes(A) && (t = (0, a.xb)(m)), (0, a.DD)(n.id, r, t)
    }, [n.id, A, m, b]), {
        density: j
    } = (0, i.wRf)(), v = "compact" === j ? 8 : 12;
    switch (t) {
        case u.PU:
            return (0, r.jsx)("div", {
                style: {
                    height: v
                }
            });
        case u.bK:
            if (n.features.has(h.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", {
                style: {
                    height: v
                }
            });
        case u.HP:
            return (0, r.jsx)(d.P4, {
                name: _ ? f.intl.string(f.t.mlPMCy) : f.intl.string(f.t.k8fFjp)
            });
        case m.recentsSectionNumber:
            return (0, r.jsx)(d.P4, {
                name: f.intl.string(f.t.gKcrqM),
                onDismiss: O
            });
        case m.voiceChannelsSectionNumber: {
            var x;
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null == (x = m.getChannelFromSectionRow(t, 0)) ? void 0 : x.channel;
            return (0, r.jsxs)(l.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: g.ts
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
                    inlineSpecs: p.qB,
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