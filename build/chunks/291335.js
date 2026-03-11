/** chunk id: 291335 params = (module,exports,require) **/
i.d(t, {
    A: () => j
});
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    r = i(397927),
    o = i(730134),
    d = i(169869),
    c = i(837057),
    u = i(310419),
    A = i(773669),
    m = i(427157),
    p = i(967198),
    x = i(183555),
    g = i(488995),
    h = i(985018),
    f = i(882119);

function I(e) {
    let {
        applicationRoleConnection: t,
        locale: i,
        onApplicationClicked: n,
        selectedGuildId: s
    } = e, a = (0, d.VW)(t, i);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
            className: f.k_,
            children: null != t.application.bot ? (0, l.jsx)(o.A, {
                user: new m.A(t.application.bot),
                size: r._3J.SIZE_16
            }) : (0, l.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, l.jsxs)("div", {
            className: f.Hd,
            children: [(0, l.jsxs)(r.DUT, {
                className: f.OB,
                onClick: () => {
                    n?.(), (0, c.transitionToGlobalDiscovery)({
                        tab: g.GlobalDiscoveryTab.APPS,
                        applicationId: t.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: s
                        }
                    })
                },
                children: [null != t.platform_name ? (0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_name
                }) : null, null != t.platform_username ? (0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_username
                }) : null, (0, l.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: f.nk,
                    children: h.intl.format(h.t.zIT9YA, {
                        applicationHook: () => t.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, l.jsx)("div", {
                className: f.yu,
                children: a
            }) : null]
        })]
    })
}

function j(e) {
    let {
        applicationRoleConnections: t,
        className: i,
        onClose: n
    } = e, {
        trackUserProfileAction: r
    } = (0, x.NJ)(), o = (0, a.bG)([A.default], () => A.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: s()(f.kL, i),
        children: t.map((e, t) => (0, l.jsx)("li", {
            className: f.FI,
            children: (0, l.jsx)(I, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), n()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${t}-${e.application.id}`))
    })
}