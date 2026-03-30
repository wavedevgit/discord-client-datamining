/** chunk id: 333782 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(793574),
    s = n(73028),
    o = n(734057),
    c = n(763754),
    d = n(888675),
    u = n(985018);

function _(e) {
    let {
        message: t,
        usernameHook: n,
        compact: _,
        isForumPost: m
    } = e, A = (0, c.Ay)(t), E = n(A), I = (0, l.bG)([o.A], () => o.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, i.jsx)(d.A, {
        compact: _,
        iconNode: (0, i.jsx)(a.R2l, {
            size: "xs",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        children: I ? u.intl.format("" === t.content ? u.t.AI1ZZr : u.t.geP3rU, {
            username: A.nick,
            usernameHook: E,
            channelName: (0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-strong",
                children: t.content
            }, `group-name-${t.id}`),
            editGroupButton: (0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-link",
                children: u.intl.string(u.t["5Q9+/L"])
            }, `edit-group-button-${t.id}`),
            onEditGroup: () => (0, s.U)(t.channel_id, r.A.GROUP_DM_SYSTEM_MESSAGE_NAME)
        }) : u.intl.format(m ? u.t.SOQ4hJ : u.t.oItgEw, {
            username: A.nick,
            usernameHook: E,
            channelName: t.content
        })
    })
}