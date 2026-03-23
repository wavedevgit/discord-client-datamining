/** chunk id: 585265 params = (module,exports,require) **/
e.d(t, {
    default: () => p
});
var s = e(627968);
e(64700);
var r = e(158954),
    n = e(397927),
    a = e(772538),
    d = e(61610),
    l = e(751461),
    o = e(638324),
    c = e(505653),
    u = e(355097),
    _ = e(985018);

function f(i) {
    let {
        guildId: t
    } = i;
    return (0, s.jsxs)(c.A, {
        children: [(0, s.jsx)(l.A, {
            ingress: u.bf.SERVER_PRIVACY_MODAL,
            guildId: t
        }), (0, s.jsx)(o.A, {
            ingress: u.bf.SERVER_PRIVACY_MODAL,
            guildId: t
        }), (0, s.jsx)(d.A, {
            ingress: u.bf.SERVER_PRIVACY_MODAL,
            guildId: t
        }), (0, s.jsx)(a.A, {
            ingress: u.bf.SERVER_PRIVACY_MODAL,
            guildId: t
        }), (0, s.jsx)(n.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: _.intl.format(_.t.LNsV04, {
                policyLink: "https://discord.com/safety/360043709612-our-policies"
            })
        })]
    })
}

function p(i) {
    let {
        guild: t,
        transitionState: e,
        onClose: n
    } = i, a = `${_.intl.string(_.t.BayiAo)}—${null!=t?t.name:"??"}`;
    return (0, s.jsx)(r.Modal, {
        transitionState: e,
        size: "sm",
        title: a,
        actions: [{
            onClick: () => n(),
            variant: "primary",
            text: _.intl.string(_.t.i4jeWR)
        }],
        onClose: () => Promise.resolve(n()),
        children: (0, s.jsx)(f, {
            guildId: t.id
        })
    })
}