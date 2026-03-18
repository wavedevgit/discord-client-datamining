/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(985018),
    l = n(414614);

function s(e) {
    let {
        message: t
    } = e;
    return (0, i.jsxs)(r.DUT, {
        onClick: () => {
            (0, r.mMO)(async () => {
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
        className: l.L,
        children: [(0, i.jsx)(r.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            className: l.m,
            children: a.intl.string(a.t["2aXnfa"])
        })]
    })
}