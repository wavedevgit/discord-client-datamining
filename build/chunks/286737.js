/** chunk id: 286737 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(289363),
    o = n(287809),
    c = n(486020),
    d = n(409626),
    u = n(305080),
    m = n(985018),
    x = n(409861);

function h(e) {
    let {
        trackAction: t
    } = e, {
        fetchedAuthorization: n,
        hasAlreadyLinked: h,
        canStartAuthorization: f,
        startAuthorization: g,
        connectionApp: _,
        officialInvite: p
    } = (0, u.c)(), v = (0, i.bG)([o.default], () => o.default.getCurrentUser()), A = l.useCallback(() => {
        t(d.Ws.LinkAccount), g({
            analyticsLocations: ["game_profile"]
        })
    }, [t, g]);
    if (!n || null == _ || !f || h || null == v) return null;
    let j = p?.guild != null ? c.Ay.getGuildSplashURL({
        id: p.guild.id,
        splash: p.guild.splash
    }) : null;
    return (0, a.jsxs)("div", {
        className: x.uW,
        children: [(0, a.jsx)(r.Heading, {
            className: x.Gf,
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: m.intl.string(m.t["VDAhr+"])
        }), (0, a.jsxs)("div", {
            className: x.kL,
            children: [null != j ? (0, a.jsx)("img", {
                className: x.ll,
                src: j,
                alt: ""
            }) : (0, a.jsx)("div", {
                className: x.sB,
                children: (0, a.jsx)(s.default, {
                    application: _
                })
            }), (0, a.jsxs)("div", {
                className: x.hQ,
                children: [(0, a.jsxs)("div", {
                    className: x.FS,
                    children: [(0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: m.intl.formatToPlainString(m.t.hUbQT2, {
                            gameName: _.name
                        })
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: m.intl.string(m.t["JKqu+4"])
                    })]
                }), (0, a.jsx)(r.Button, {
                    variant: "secondary",
                    icon: r.A5T,
                    text: m.intl.string(m.t.jynBQ5),
                    onClick: A,
                    fullWidth: !0
                })]
            })]
        })]
    })
}