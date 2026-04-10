/** chunk id: 286737 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    f = n(290490);

function x(e) {
    let {
        trackAction: t,
        analyticsLocations: n
    } = e, {
        fetchedAuthorization: x,
        hasAlreadyLinked: h,
        canStartAuthorization: g,
        startAuthorization: p,
        connectionApp: _,
        officialInvite: v
    } = (0, u.c)(), A = (0, i.bG)([o.default], () => o.default.getCurrentUser()), b = l.useCallback(() => {
        t(d.Ws.LinkAccount), p({
            analyticsLocations: n
        })
    }, [t, p, n]);
    if (!x || null == _ || !g || h || null == A) return null;
    let E = v?.guild != null ? c.Ay.getGuildSplashURL({
        id: v.guild.id,
        splash: v.guild.splash
    }) : null;
    return (0, a.jsxs)("div", {
        className: f.uW,
        children: [(0, a.jsx)(r.Heading, {
            className: f.Gf,
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: m.intl.string(m.t["VDAhr+"])
        }), (0, a.jsxs)("div", {
            className: f.kL,
            children: [null != E ? (0, a.jsx)("img", {
                className: f.ll,
                src: E,
                alt: "",
                draggable: !1
            }) : (0, a.jsx)("div", {
                className: f.sB,
                children: (0, a.jsx)(s.default, {
                    application: _
                })
            }), (0, a.jsxs)("div", {
                className: f.hQ,
                children: [(0, a.jsxs)("div", {
                    className: f.FS,
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
                    onClick: b,
                    fullWidth: !0
                })]
            })]
        })]
    })
}