/** chunk id: 585265 params = (module,exports,require) **/
s.d(i, {
    default: () => p
});
var e = s(627968);
s(64700);
var r = s(158954),
    n = s(397927),
    d = s(744479),
    l = s(772538),
    o = s(61610),
    a = s(751461),
    _ = s(638324),
    c = s(355097),
    u = s(985018);

function g(t) {
    let {
        guildId: i
    } = t;
    return (0, e.jsxs)(d.A, {
        children: [(0, e.jsx)(a.A, {
            ingress: c.bf.SERVER_PRIVACY_MODAL,
            guildId: i
        }), (0, e.jsx)(_.A, {
            ingress: c.bf.SERVER_PRIVACY_MODAL,
            guildId: i
        }), (0, e.jsx)(o.A, {
            ingress: c.bf.SERVER_PRIVACY_MODAL,
            guildId: i
        }), (0, e.jsx)(l.A, {
            ingress: c.bf.SERVER_PRIVACY_MODAL,
            guildId: i
        }), (0, e.jsx)(n.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: u.intl.format(u.t.LNsV04, {
                policyLink: "https://discord.com/safety/360043709612-our-policies"
            })
        })]
    })
}

function p(t) {
    let {
        guild: i,
        transitionState: s,
        onClose: n
    } = t, d = `${u.intl.string(u.t.BayiAo)}—${null!=i?i.name:"??"}`;
    return (0, e.jsx)(r.Modal, {
        transitionState: s,
        size: "sm",
        title: d,
        actions: [{
            onClick: () => n(),
            variant: "primary",
            text: u.intl.string(u.t.i4jeWR)
        }],
        onClose: () => Promise.resolve(n()),
        children: (0, e.jsx)(g, {
            guildId: i.id
        })
    })
}