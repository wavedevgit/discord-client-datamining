/** chunk id: 291335 params = (module,exports,require) **/
i.d(l, {
    A: () => I
});
var t = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    r = i(397927),
    o = i(730134),
    d = i(169869),
    c = i(837057),
    u = i(310419),
    m = i(773669),
    x = i(427157),
    A = i(967198),
    p = i(183555),
    g = i(488995),
    f = i(985018),
    h = i(622376);

function j(e) {
    let {
        applicationRoleConnection: l,
        locale: i,
        onApplicationClicked: n,
        selectedGuildId: s
    } = e, a = (0, d.VW)(l, i);
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
            className: h.k_,
            children: null != l.application.bot ? (0, t.jsx)(o.A, {
                user: new x.A(l.application.bot),
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

function I(e) {
    let {
        applicationRoleConnections: l,
        className: i,
        onClose: n
    } = e, {
        trackUserProfileAction: r
    } = (0, p.NJ)(), o = (0, a.bG)([m.default], () => m.default.locale), d = (0, a.bG)([A.A], () => A.A.getGuildId());
    return 0 === l.length ? null : (0, t.jsx)("ul", {
        className: s()(h.kL, i),
        children: l.map((e, l) => (0, t.jsx)("li", {
            className: h.FI,
            children: (0, t.jsx)(j, {
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