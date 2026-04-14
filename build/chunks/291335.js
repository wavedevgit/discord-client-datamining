/** chunk id: 291335 params = (module,exports,require) **/
n.d(l, {
    A: () => v
});
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(397927),
    o = n(730134),
    d = n(169869),
    c = n(837057),
    u = n(310419),
    m = n(773669),
    p = n(427157),
    x = n(967198),
    A = n(183555),
    g = n(488995),
    f = n(985018),
    h = n(622376);

function j(e) {
    let {
        applicationRoleConnection: l,
        locale: n,
        onApplicationClicked: i,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
            className: h.k_,
            children: null != l.application.bot ? (0, t.jsx)(o.A, {
                user: new p.A(l.application.bot),
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
                        applicationId: l.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: s
                        }
                    })
                },
                children: [null != l.platform_name ? (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_name
                }) : null, null != l.platform_username ? (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l.platform_username
                }) : null, (0, t.jsx)(r.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: h.nk,
                    children: f.intl.format(f.t.zIT9YA, {
                        applicationHook: () => l.application.name
                    })
                })]
            }), null != a && a.length > 0 ? (0, t.jsx)("div", {
                className: h.yu,
                children: a
            }) : null]
        })]
    })
}

function v(e) {
    let {
        applicationRoleConnections: l,
        className: n,
        onClose: i
    } = e, {
        trackUserProfileAction: r
    } = (0, A.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([x.A], () => x.A.getGuildId());
    return 0 === l.length ? null : (0, t.jsx)("ul", {
        className: s()(h.kL, n),
        children: l.map((e, l) => (0, t.jsx)("li", {
            className: h.FI,
            children: (0, t.jsx)(j, {
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