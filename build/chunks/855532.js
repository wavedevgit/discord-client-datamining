/** chunk id: 855532, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(793574),
    a = n(73028),
    s = n(763754),
    o = n(888675),
    c = n(985018);

function u(e) {
    let {
        message: t,
        usernameHook: n,
        compact: u
    } = e, d = (0, s.Ay)(t), p = n(d);
    return (0, r.jsx)(o.A, {
        iconNode: (0, r.jsx)(i.R2l, {
            size: "xs",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        compact: u,
        children: c.intl.format(c.t["4wLp25"], {
            username: d.nick,
            usernameHook: p,
            editGroupButton: (0, r.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-link",
                children: c.intl.string(c.t["5Q9+/L"])
            }, "edit-group-button-".concat(t.id)),
            onEditGroup: () => (0, a.U)(t.channel_id, l.A.GROUP_DM_SYSTEM_MESSAGE_ICON)
        })
    })
}