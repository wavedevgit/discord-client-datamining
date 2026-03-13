/** chunk id: 291335 params = (module,exports,require) **/
n.d(l, {
    A: () => j
});
var i = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
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
        applicationRoleConnection: l,
        locale: n,
        onApplicationClicked: t,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: f.k_,
            children: null != l.application.bot ? (0, i.jsx)(o.A, {
                user: new m.A(l.application.bot),
                size: r._3J.SIZE_16
            }) : (0, i.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, i.jsxs)("div", {
            className: f.Hd,
            children: [(0, i.jsxs)(r.DUT, {
                className: f.OB,
                onClick: () => {
                    t?.(), (0, c.transitionToGlobalDiscovery)({
                        tab: g.GlobalDiscoveryTab.APPS,
                        applicationId: l.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: s
                        }
                    })
                },
                children: [null != l.platform_name ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_name
                }) : null, null != l.platform_username ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_username
                }) : null, (0, i.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: f.nk,
                    children: h.intl.format(h.t.zIT9YA, {
                        applicationHook: () => l.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, i.jsx)("div", {
                className: f.yu,
                children: a
            }) : null]
        })]
    })
}

function j(e) {
    let {
        applicationRoleConnections: l,
        className: n,
        onClose: t
    } = e, {
        trackUserProfileAction: r
    } = (0, x.NJ)(), o = (0, a.bG)([A.default], () => A.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === l.length ? null : (0, i.jsx)("ul", {
        className: s()(f.kL, n),
        children: l.map((e, l) => (0, i.jsx)("li", {
            className: f.FI,
            children: (0, i.jsx)(I, {
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