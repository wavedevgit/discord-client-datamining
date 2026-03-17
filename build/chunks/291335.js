/** chunk id: 291335 params = (module,exports,require) **/
i.d(l, {
    A: () => j
});
var n = i(627968);
i(64700);
var t = i(503698),
    s = i.n(t),
    a = i(311907),
    r = i(397927),
    o = i(730134),
    d = i(169869),
    c = i(837057),
    u = i(310419),
    A = i(773669),
    m = i(427157),
    p = i(967198),
    g = i(183555),
    x = i(488995),
    h = i(985018),
    f = i(882119);

function I(e) {
    let {
        applicationRoleConnection: l,
        locale: i,
        onApplicationClicked: t,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, i);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: f.k_,
            children: null != l.application.bot ? (0, n.jsx)(o.A, {
                user: new m.A(l.application.bot),
                size: r._3J.SIZE_16
            }) : (0, n.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, n.jsxs)("div", {
            className: f.Hd,
            children: [(0, n.jsxs)(r.DUT, {
                className: f.OB,
                onClick: () => {
                    t?.(), (0, c.transitionToGlobalDiscovery)({
                        tab: x.GlobalDiscoveryTab.APPS,
                        applicationId: l.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: s
                        }
                    })
                },
                children: [null != l.platform_name ? (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_name
                }) : null, null != l.platform_username ? (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_username
                }) : null, (0, n.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: f.nk,
                    children: h.intl.format(h.t.zIT9YA, {
                        applicationHook: () => l.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, n.jsx)("div", {
                className: f.yu,
                children: a
            }) : null]
        })]
    })
}

function j(e) {
    let {
        applicationRoleConnections: l,
        className: i,
        onClose: t
    } = e, {
        trackUserProfileAction: r
    } = (0, g.NJ)(), o = (0, a.bG)([A.default], () => A.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === l.length ? null : (0, n.jsx)("ul", {
        className: s()(f.kL, i),
        children: l.map((e, l) => (0, n.jsx)("li", {
            className: f.FI,
            children: (0, n.jsx)(I, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), t()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${l}-${e.application.id}`))
    })
}