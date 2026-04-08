/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(985018),
    r = n(887428);

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
        className: r.L,
        children: [(0, i.jsx)(l.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: r.m,
            children: s.intl.string(s.t["2aXnfa"])
        })]
    })
}