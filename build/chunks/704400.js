/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(985018),
    s = n(366957);

function a(e) {
    let {
        message: t
    } = e;
    return (0, i.jsxs)(l.DUT, {
        onClick: () => {
            (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("35270").then(n.bind(n, 743461));
                return n => (0, i.jsx)(e, {
                    channelId: t.channel_id,
                    messageId: t.id,
                    ...n
                })
            })
        },
        className: s.L,
        children: [(0, i.jsx)(l.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: s.m,
            children: r.intl.string(r.t["2aXnfa"])
        })]
    })
}