/** chunk id: 291335 params = (module,exports,require) **/
l.d(n, {
    A: () => j
});
var t = l(627968);
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
    A = l(427157),
    p = l(967198),
    x = l(183555),
    g = l(488995),
    f = l(985018),
    h = l(985176);

function v(e) {
    let {
        applicationRoleConnection: n,
        locale: l,
        onApplicationClicked: i,
        selectedGuildId: s
    } = e, a = (0, d.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
            className: h.k_,
            children: null != n.application.bot ? (0, t.jsx)(o.A, {
                user: new A.A(n.application.bot),
                size: r._3J.SIZE_16
            }) : (0, t.jsx)(r._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, t.jsxs)("div", {
            className: h.Hd,
            children: [(0, t.jsxs)(r.DUT, {
                className: h.OB,
                onClick: () => {
                    i?.(), (0, c.transitionToGlobalDiscovery)({
                        tab: g.GlobalDiscoveryTab.APPS,
                        applicationId: n.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: s
                        }
                    })
                },
                children: [null != n.platform_name ? (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: n.platform_name
                }) : null, null != n.platform_username ? (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: n.platform_username
                }) : null, (0, t.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => n.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, t.jsx)("div", {
                className: h.yu,
                children: a
            }) : null]
        })]
    })
}

function j(e) {
    let {
        applicationRoleConnections: n,
        className: l,
        onClose: i
    } = e, {
        trackUserProfileAction: r
    } = (0, x.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([p.A], () => p.A.getGuildId());
    return 0 === n.length ? null : (0, t.jsx)("ul", {
        className: s()(h.kL, l),
        children: n.map((e, n) => (0, t.jsx)("li", {
            className: h.FI,
            children: (0, t.jsx)(v, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), i()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${n}-${e.application.id}`))
    })
}