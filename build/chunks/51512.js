/** chunk id: 51512 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(180662),
    a = n(52684),
    s = n(985018);
let o = {
    [a.G.END_EARLY]: e => (0, i.jsx)(l.Drp, {
        id: "end-poll-early",
        label: s.intl.string(s.t.grdwwt),
        icon: l.O7L,
        leadingAccessory: {
            type: "icon",
            icon: l.O7L
        },
        action: () => {
            r.A.endPollEarly({
                channelId: e.channel_id,
                messageId: e.id
            })
        },
        iconProps: {
            color: "currentColor"
        }
    })
};

function d(e) {
    let t = (0, a.A)(e);
    return 0 === t.length ? null : (0, i.jsx)(i.Fragment, {
        children: t.map(t => o[t](e))
    })
}