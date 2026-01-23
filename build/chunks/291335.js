/** Chunk was on 64228 **/
/** chunk id: 291335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    a = n(730134),
    c = n(169869),
    d = n(837057),
    u = n(310419),
    p = n(773669),
    m = n(427157),
    f = n(967198),
    A = n(183555),
    x = n(488995),
    j = n(985018),
    h = n(882119);

function g(e) {
    let {
        applicationRoleConnection: t,
        locale: n,
        onApplicationClicked: i,
        selectedGuildId: r
    } = e, s = (0, c.VW)(t, n);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
            className: h.k_,
            children: null != t.application.bot ? (0, l.jsx)(a.A, {
                user: new m.A(t.application.bot),
                size: o._3J.SIZE_16
            }) : (0, l.jsx)(o._7Z, {
                color: "currentColor",
                size: "sm"
            })
        }), (0, l.jsxs)("div", {
            className: h.Hd,
            children: [(0, l.jsxs)(o.DUT, {
                className: h.OB,
                onClick: () => {
                    null == i || i(), (0, d.transitionToGlobalDiscovery)({
                        tab: x.GlobalDiscoveryTab.APPS,
                        applicationId: t.application.id,
                        newSessionState: {
                            entrypoint: {
                                name: u.sW.APPLICATION_DIRECTORY_URL
                            },
                            guildId: r
                        }
                    })
                },
                children: [null != t.platform_name ? (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_name
                }) : null, null != t.platform_username ? (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.platform_username
                }) : null, (0, l.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-default",
                    className: h.nk,
                    children: j.intl.format(j.t.zIT9YA, {
                        applicationHook: () => t.application.name
                    })
                })]
            }), null != s && s.length > 0 ? (0, l.jsx)("div", {
                className: h.yu,
                children: s
            }) : null]
        })]
    })
}

function v(e) {
    let {
        applicationRoleConnections: t,
        className: n,
        onClose: i
    } = e, {
        trackUserProfileAction: o
    } = (0, A.NJ)(), a = (0, s.bG)([p.default], () => p.default.locale), c = (0, s.bG)([f.A], () => f.A.getGuildId());
    return 0 === t.length ? null : (0, l.jsx)("ul", {
        className: r()(h.kL, n),
        children: t.map((e, t) => (0, l.jsx)("li", {
            className: h.FI,
            children: (0, l.jsx)(g, {
                applicationRoleConnection: e,
                locale: a,
                onApplicationClicked: () => {
                    o({
                        action: "PRESS_APP_CONNECTION"
                    }), i()
                },
                selectedGuildId: null != c ? c : void 0
            })
        }, "".concat(t, "-").concat(e.application.id)))
    })
}