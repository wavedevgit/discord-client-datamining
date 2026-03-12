/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(985018),
    a = n(712468);

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
        className: a.L,
        children: [(0, i.jsx)(r.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            className: a.m,
            children: l.intl.string(l.t["2aXnfa"])
        })]
    })
}