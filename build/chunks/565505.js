/** Chunk was on 86142 **/
/** chunk id: 565505, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(228524);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(854378),
    o = n(122906),
    c = n(121623),
    u = n(768397),
    d = n(210714),
    h = n(961350),
    p = n(954571),
    g = n(900662),
    m = n(652215),
    f = n(401755),
    _ = n(985018),
    A = n(473169);

function x(e, t, n) {
    e.preventDefault(), p.default.track(m.HAw.GUILD_TEMPLATE_APP_OPENED, {
        guild_template_code: t,
        guild_template_name: n.name,
        guild_template_description: n.description,
        guild_template_guild_id: n.sourceGuildId
    });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.A.openMobileApp(n.state === f.QB.RESOLVED ? t : void 0, i)
}

function E(e) {
    let {
        code: t
    } = e, n = (0, s.bG)([o.A], () => o.A.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.d)("guild_template_mobile")
    }, []), null == n || n.state === f.QB.RESOLVING) ? (0, r.jsx)(a.Ay, {
        children: (0, r.jsx)(l.y$y, {})
    }) : n.state === f.QB.RESOLVED ? (0, r.jsxs)(a.Ay, {
        children: [(0, r.jsx)(u.A, {
            guildTemplate: n,
            tall: !0
        }), (0, r.jsx)("div", {
            className: A.QX,
            children: (0, r.jsx)(l.Button, {
                text: _.intl.string(_.t["a3Gl+e"]),
                fullWidth: !0,
                onClick: e => x(e, t, n)
            })
        })]
    }) : (0, r.jsx)(g.A, {
        text: _.intl.string(_.t["e/rZ2n"]),
        buttonCta: _.intl.string(_.t.HAvYn0),
        onClick: e => x(e, t, n)
    })
}
s.Ay.initialize()