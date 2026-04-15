/** chunk id: 291335 params = (module,exports,require) **/
l.d(n, {
    A: () => j
});
var i = l(627968);
l(64700);
var t = l(503698),
    s = l.n(t),
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

function v(e) {
    let {
        applicationRoleConnection: n,
        locale: l,
        onApplicationClicked: t,
        selectedGuildId: s
    } = e, a = (0, d.VW)(n, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: h.k_,
            children: null != n.application.bot ? (0, i.jsx)(o.A, {
                user: new p.A(n.application.bot),
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
                    t?.(), (0, c.transitionToGlobalDiscovery)({
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
                children: [null != n.platform_name ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: n.platform_name
                }) : null, null != n.platform_username ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: n.platform_username
                }) : null, (0, i.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => n.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, i.jsx)("div", {
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
        onClose: t
    } = e, {
        trackUserProfileAction: r
    } = (0, A.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([x.A], () => x.A.getGuildId());
    return 0 === n.length ? null : (0, i.jsx)("ul", {
        className: s()(h.kL, l),
        children: n.map((e, n) => (0, i.jsx)("li", {
            className: h.FI,
            children: (0, i.jsx)(v, {
                applicationRoleConnection: e,
                locale: o,
                onApplicationClicked: () => {
                    r({
                        action: "PRESS_APP_CONNECTION"
                    }), t()
                },
                selectedGuildId: d ?? void 0
            })
        }, `${n}-${e.application.id}`))
    })
}