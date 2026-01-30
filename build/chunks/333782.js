/** chunk id: 333782, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(793574),
    s = n(73028),
    o = n(734057),
    c = n(763754),
    u = n(888675),
    d = n(985018);

function p(e) {
    let {
        message: t,
        usernameHook: n,
        compact: p,
        isForumPost: m
    } = e, f = (0, c.Ay)(t), g = n(f), _ = (0, i.bG)([o.A], () => {
        var e, n;
        return null != (e = null == (n = o.A.getChannel(t.channel_id)) ? void 0 : n.isGroupDM()) && e
    });
    return (0, r.jsx)(u.A, {
        compact: p,
        iconNode: (0, r.jsx)(l.R2l, {
            size: "xs",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        children: _ ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
            username: f.nick,
            usernameHook: g,
            channelName: (0, r.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-strong",
                children: t.content
            }, "group-name-".concat(t.id)),
            editGroupButton: (0, r.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-link",
                children: d.intl.string(d.t["5Q9+/L"])
            }, "edit-group-button-".concat(t.id)),
            onEditGroup: () => (0, s.U)(t.channel_id, a.A.GROUP_DM_SYSTEM_MESSAGE_NAME)
        }) : d.intl.format(m ? d.t.SOQ4hJ : d.t.oItgEw, {
            username: f.nick,
            usernameHook: g,
            channelName: t.content
        })
    })
}