/** chunk id: 291335 params = (module,exports,require) **/
l.d(t, {
    A: () => v
});
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(311907),
    r = l(397927),
    o = l(730134),
    d = l(169869),
    c = l(837057),
    u = l(310419),
    m = l(773669),
    p = l(427157),
    x = l(967198),
    A = l(183555),
    g = l(488995),
    f = l(985018),
    h = l(622376);

function j(e) {
    let {
        applicationRoleConnection: t,
        locale: l,
        onApplicationClicked: i,
        selectedGuildId: s
    } = e, a = (0, d.VW)(t, l);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: h.k_,
            children: null != t.application.bot ? (0, n.jsx)(o.A, {
                user: new p.A(t.application.bot),
                size: r._3J.SIZE_16
            }) : (0, n.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, n.jsxs)("div", {
            className: h.Hd,
            children: [(0, n.jsxs)(r.DUT, {
                className: h.OB,
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
                children: [null != t.platform_name ? (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_name
                }) : null, null != t.platform_username ? (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_username
                }) : null, (0, n.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => t.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, n.jsx)("div", {
                className: h.yu,
                children: a
            }) : null]
        })]
    })
}

function v(e) {
    let {
        applicationRoleConnections: t,
        className: l,
        onClose: i
    } = e, {
        trackUserProfileAction: r
    } = (0, A.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([x.A], () => x.A.getGuildId());
    return 0 === t.length ? null : (0, n.jsx)("ul", {
        className: s()(h.kL, l),
        children: t.map((e, t) => (0, n.jsx)("li", {
            className: h.FI,
            children: (0, n.jsx)(j, {
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