/** chunk id: 291335 params = (module,exports,require) **/
t.d(l, {
    A: () => I
});
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(311907),
    r = t(397927),
    o = t(730134),
    d = t(169869),
    c = t(837057),
    u = t(310419),
    m = t(773669),
    A = t(427157),
    p = t(967198),
    x = t(183555),
    g = t(488995),
    f = t(985018),
    h = t(884293);

function j(e) {
    let {
        applicationRoleConnection: l,
        locale: t,
        onApplicationClicked: n,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: h.k_,
            children: null != l.application.bot ? (0, i.jsx)(o.A, {
                user: new A.A(l.application.bot),
                size: r._3J.SIZE_16
            }) : (0, i.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, i.jsxs)("div", {
            className: h.Hd,
            children: [(0, i.jsxs)(r.DUT, {
                className: h.OB,
                onClick: () => {
                    n?.(), (0, c.transitionToGlobalDiscovery)({
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
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => l.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, i.jsx)("div", {
                className: h.yu,
                children: a
            }) : null]
        })]
    })
}

function I(e) {
    let {
        applicationRoleConnections: l,
        className: t,
        onClose: n
    } = e, {
        trackUserProfileAction: r
    } = (0, x.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === l.length ? null : (0, i.jsx)("ul", {
        className: s()(h.kL, t),
        children: l.map((e, l) => (0, i.jsx)("li", {
            className: h.FI,
            children: (0, i.jsx)(j, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), n()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${l}-${e.application.id}`))
    })
}