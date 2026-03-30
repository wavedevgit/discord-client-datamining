/** chunk id: 285058 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(498642),
    o = n(954571),
    d = n(743790),
    c = n(10077),
    u = n(652215),
    m = n(536482),
    _ = n(985018),
    g = n(829505);

function A(e) {
    let {
        guild: t,
        isActivityRestricted: n,
        onToggleActivityRestrictedGuild: s
    } = e, o = (0, l.bG)([r.A], () => r.A.getMemberCount(t.id));
    return (0, i.jsxs)(a.BJc, {
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
            children: (0, i.jsx)(a.dOG, {
                label: t.name,
                description: _.intl.format(_.t.zRl6XR, {
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
let x = function() {
    let {
        guilds: e,
        searchQuery: t,
        setSearchQuery: n,
        sortOrder: l,
        setSortOrder: r,
        hasActivityRestrictedGuilds: d,
        onToggleAllActivityRestrictedGuilds: x,
        onToggleActivityRestrictedGuild: h,
        isActivityRestricted: p,
        numActivityRestrictedGuilds: T,
        numTotalGuilds: f
    } = (0, c.M)(), S = (0, s.useId)();
    return (0, i.jsxs)("div", {
        className: g.iE,
        children: [(0, i.jsxs)("div", {
            className: g.N1,
            children: [(0, i.jsx)(a.IWV, {
                query: t,
                onChange: n,
                onClear: () => {
                    o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                        interaction: "search_cleared",
                        sort_order: l,
                        activity_restricted_guild_count: T,
                        total_guild_count: f
                    }), n("")
                },
                onFocus: () => o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                    interaction: "search_focused",
                    sort_order: l,
                    activity_restricted_guild_count: T,
                    total_guild_count: f
                }),
                onBlur: () => o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                    interaction: "search_blurred",
                    sort_order: l,
                    activity_restricted_guild_count: T,
                    total_guild_count: f
                }),
                placeholder: _.intl.string(_.t["H+nRYw"]),
                "aria-label": _.intl.string(_.t["5h0QOP"]),
                inputProps: {
                    "aria-controls": S,
                    "aria-expanded": !0
                }
            }), e.length > 0 && (0, i.jsxs)("div", {
                className: g.gO,
                children: [(0, i.jsx)(a.l6P, {
                    label: _.intl.string(_.t.LxVjvJ),
                    hideLabel: !0,
                    options: [{
                        id: c.c.SERVER_ORDER,
                        label: _.intl.string(_.t.STMPJ2),
                        value: c.c.SERVER_ORDER
                    }, {
                        id: c.c.RECENTLY_JOINED,
                        label: _.intl.string(_.t.CbaapP),
                        value: c.c.RECENTLY_JOINED
                    }, {
                        id: c.c.ACTIVITY_SHARING_ON,
                        label: _.intl.string(m.default.ZI51JZ),
                        value: c.c.ACTIVITY_SHARING_ON
                    }, {
                        id: c.c.ACTIVITY_SHARING_OFF,
                        label: _.intl.string(m.default["+kxafn"]),
                        value: c.c.ACTIVITY_SHARING_OFF
                    }],
                    onSelectionChange: e => {
                        o.default.track(u.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                            interaction: "sort_order_changed",
                            sort_order: e,
                            activity_restricted_guild_count: T,
                            total_guild_count: f
                        }), r(e)
                    },
                    value: l,
                    selectionMode: "single"
                }), (0, i.jsx)(a.QWc, {
                    variant: "primary",
                    onClick: x,
                    text: d ? _.intl.string(_.t["7lxcLO"]) : _.intl.string(_.t.zh6UEs)
                })]
            })]
        }), (0, i.jsx)(a.AC4, {
            "aria-live": "polite",
            role: "region",
            children: _.intl.format(m.default.EvzDff, {
                count: e.length
            })
        }), (0, i.jsxs)("ul", {
            className: g.X1,
            id: S,
            "aria-label": _.intl.string(_.t["7hB4kg"]),
            children: [0 === e.length && (0, i.jsx)("div", {
                className: g.pb,
                children: (0, i.jsx)(a.Text, {
                    className: g.R$,
                    variant: "text-lg/medium",
                    children: _.intl.string(_.t["Xe+fJM"])
                })
            }), e.map(e => (0, i.jsx)(A, {
                guild: e,
                isActivityRestricted: p(e.id),
                onToggleActivityRestrictedGuild: h
            }, e.id))]
        })]
    })
}