/** chunk id: 291335 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(397927),
    o = n(730134),
    d = n(169869),
    c = n(837057),
    u = n(310419),
    A = n(773669),
    m = n(427157),
    p = n(967198),
    x = n(183555),
    g = n(488995),
    h = n(985018),
    f = n(884293);

function I(e) {
    let {
        applicationRoleConnection: t,
        locale: n,
        onApplicationClicked: i,
        selectedGuildId: s
    } = e, a = (0, d.VW)(t, n);
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
                    i?.(), (0, c.transitionToGlobalDiscovery)({
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
        className: n,
        onClose: i
    } = e, {
        trackUserProfileAction: r
    } = (0, x.NJ)(), o = (0, a.bG)([A.default], () => A.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: s()(f.kL, n),
        children: t.map((e, t) => (0, l.jsx)("li", {
            className: f.FI,
            children: (0, l.jsx)(I, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), i()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${t}-${e.application.id}`))
    })
}