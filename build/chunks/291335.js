/** chunk id: 291335 params = (module,exports,require) **/
t.d(l, {
    A: () => v
});
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(311907),
    r = t(397927),
    o = t(730134),
    d = t(169869),
    c = t(837057),
    u = t(310419),
    m = t(773669),
    p = t(427157),
    x = t(967198),
    A = t(183555),
    g = t(488995),
    f = t(985018),
    h = t(622376);

function j(e) {
    let {
        applicationRoleConnection: l,
        locale: t,
        onApplicationClicked: i,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, t);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: h.k_,
            children: null != l.application.bot ? (0, n.jsx)(o.A, {
                user: new p.A(l.application.bot),
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
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => l.application.name
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
        applicationRoleConnections: l,
        className: t,
        onClose: i
    } = e, {
        trackUserProfileAction: r
    } = (0, A.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([x.A], () => x.A.getGuildId());
    return 0 === l.length ? null : (0, n.jsx)("ul", {
        className: s()(h.kL, t),
        children: l.map((e, l) => (0, n.jsx)("li", {
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
        }, `${l}-${e.application.id}`))
    })
}