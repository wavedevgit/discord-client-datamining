/** chunk id: 285058 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(498642),
    o = n(954571),
    d = n(743790),
    c = n(10077),
    u = n(652215),
    _ = n(730844),
    m = n(985018),
    g = n(127050);

function A(e) {
    let {
        guild: t,
        isActivityRestricted: n,
        onToggleActivityRestrictedGuild: s
    } = e, o = (0, l.bG)([a.A], () => a.A.getMemberCount(t.id));
    return (0, i.jsxs)(r.BJc, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 20,
        children: [(0, i.jsx)("div", {
            className: g.FO,
            children: (0, i.jsx)(d.$, {
                guild: t,
                size: 48
            })
        }), (0, i.jsx)("div", {
            className: g.QH,
            children: (0, i.jsx)(r.dOG, {
                label: t.name,
                description: m.intl.format(m.t.zRl6XR, {
                    count: o ?? 0
                }),
                checked: !n,
                onChange: e => s({
                    checked: e,
                    guildId: t.id
                })
            })
        })]
    })
}
let h = function() {
    let {
        guilds: e,
        searchQuery: t,
        setSearchQuery: n,
        sortOrder: l,
        setSortOrder: a,
        hasActivityRestrictedGuilds: d,
        onToggleAllActivityRestrictedGuilds: h,
        onToggleActivityRestrictedGuild: x,
        isActivityRestricted: p,
        numActivityRestrictedGuilds: T,
        numTotalGuilds: E
    } = (0, c.M)(), C = (0, s.useId)();
    return (0, i.jsxs)("div", {
        className: g.iE,
        children: [(0, i.jsxs)("div", {
            className: g.N1,
            children: [(0, i.jsx)(r.IWV, {
                query: t,
                onChange: n,
                onClear: () => {
                    o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                        interaction: "search_cleared",
                        sort_order: l,
                        activity_restricted_guild_count: T,
                        total_guild_count: E
                    }), n("")
                },
                onFocus: () => o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                    interaction: "search_focused",
                    sort_order: l,
                    activity_restricted_guild_count: T,
                    total_guild_count: E
                }),
                onBlur: () => o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                    interaction: "search_blurred",
                    sort_order: l,
                    activity_restricted_guild_count: T,
                    total_guild_count: E
                }),
                placeholder: m.intl.string(m.t["H+nRYw"]),
                "aria-label": m.intl.string(m.t["5h0QOP"]),
                inputProps: {
                    "aria-controls": C,
                    "aria-expanded": !0
                }
            }), e.length > 0 && (0, i.jsxs)("div", {
                className: g.gO,
                children: [(0, i.jsx)(r.l6P, {
                    label: m.intl.string(m.t.LxVjvJ),
                    hideLabel: !0,
                    options: [{
                        id: c.c.SERVER_ORDER,
                        label: m.intl.string(m.t.STMPJ2),
                        value: c.c.SERVER_ORDER
                    }, {
                        id: c.c.RECENTLY_JOINED,
                        label: m.intl.string(m.t.CbaapP),
                        value: c.c.RECENTLY_JOINED
                    }, {
                        id: c.c.ACTIVITY_SHARING_ON,
                        label: m.intl.string(_.default.ZI51JZ),
                        value: c.c.ACTIVITY_SHARING_ON
                    }, {
                        id: c.c.ACTIVITY_SHARING_OFF,
                        label: m.intl.string(_.default["+kxafn"]),
                        value: c.c.ACTIVITY_SHARING_OFF
                    }],
                    onSelectionChange: e => {
                        o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                            interaction: "sort_order_changed",
                            sort_order: e,
                            activity_restricted_guild_count: T,
                            total_guild_count: E
                        }), a(e)
                    },
                    value: l,
                    selectionMode: "single"
                }), (0, i.jsx)(r.QWc, {
                    variant: "primary",
                    onClick: h,
                    text: d ? m.intl.string(m.t["7lxcLO"]) : m.intl.string(m.t.zh6UEs)
                })]
            })]
        }), (0, i.jsx)(r.AC4, {
            "aria-live": "polite",
            role: "region",
            children: m.intl.format(_.default.EvzDff, {
                count: e.length
            })
        }), (0, i.jsxs)("ul", {
            className: g.X1,
            id: C,
            "aria-label": m.intl.string(m.t["7hB4kg"]),
            children: [0 === e.length && (0, i.jsx)("div", {
                className: g.pb,
                children: (0, i.jsx)(r.Text, {
                    className: g.R$,
                    variant: "text-lg/medium",
                    children: m.intl.string(m.t["Xe+fJM"])
                })
            }), e.map(e => (0, i.jsx)(A, {
                guild: e,
                isActivityRestricted: p(e.id),
                onToggleActivityRestrictedGuild: x
            }, e.id))]
        })]
    })
}