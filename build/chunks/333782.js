/** chunk id: 333782 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(793574),
    a = n(73028),
    o = n(734057),
    c = n(763754),
    u = n(888675),
    d = n(985018);

function _(e) {
    let {
        message: t,
        usernameHook: n,
        compact: _,
        isForumPost: A
    } = e, E = (0, c.Ay)(t), m = n(E), I = (0, r.bG)([o.A], () => o.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, i.jsx)(u.A, {
        compact: _,
        iconNode: (0, i.jsx)(l.R2l, {
            size: "xs",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        children: I ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
            username: E.nick,
            usernameHook: m,
            channelName: (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-strong",
                children: t.content
            }, `group-name-${t.id}`),
            editGroupButton: (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-link",
                children: d.intl.string(d.t["5Q9+/L"])
            }, `edit-group-button-${t.id}`),
            onEditGroup: () => (0, a.U)(t.channel_id, s.A.GROUP_DM_SYSTEM_MESSAGE_NAME)
        }) : d.intl.format(A ? d.t.SOQ4hJ : d.t.oItgEw, {
            username: E.nick,
            usernameHook: m,
            channelName: t.content
        })
    })
}