/** chunk id: 565505 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(854378),
    o = n(122906),
    c = n(121623),
    d = n(768397),
    u = n(210714),
    h = n(961350),
    _ = n(954571),
    p = n(900662),
    m = n(652215),
    g = n(401755),
    A = n(985018),
    f = n(885106);

function E(e, t, n) {
    e.preventDefault(), _.default.track(m.HAw.GUILD_TEMPLATE_APP_OPENED, {
        guild_template_code: t,
        guild_template_name: n.name,
        guild_template_description: n.description,
        guild_template_guild_id: n.sourceGuildId
    });
    let i = h.default.getFingerprint(),
        s = null != i ? i : h.default.getId();
    c.A.openMobileApp(n.state === g.QB.RESOLVED ? t : void 0, s)
}

function x(e) {
    let {
        code: t
    } = e, n = (0, r.bG)([o.A], () => o.A.getGuildTemplate(t));
    return (s.useEffect(() => {
        (0, u.d)("guild_template_mobile")
    }, []), null == n || n.state === g.QB.RESOLVING) ? (0, i.jsx)(a.Ay, {
        children: (0, i.jsx)(l.y$y, {})
    }) : n.state === g.QB.RESOLVED ? (0, i.jsxs)(a.Ay, {
        children: [(0, i.jsx)(d.A, {
            guildTemplate: n,
            tall: !0
        }), (0, i.jsx)("div", {
            className: f.QX,
            children: (0, i.jsx)(l.Button, {
                text: A.intl.string(A.t["a3Gl+e"]),
                fullWidth: !0,
                onClick: e => E(e, t, n)
            })
        })]
    }) : (0, i.jsx)(p.A, {
        text: A.intl.string(A.t["e/rZ2n"]),
        buttonCta: A.intl.string(A.t.HAvYn0),
        onClick: e => E(e, t, n)
    })
}
r.Ay.initialize()