/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(985018),
    l = n(414614);

function s(e) {
    let {
        message: t
    } = e;
    return (0, i.jsxs)(a.DUT, {
        onClick: () => {
            (0, a.mMO)(async () => {
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
        children: [(0, i.jsx)(a.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: l.m,
            children: r.intl.string(r.t["2aXnfa"])
        })]
    })
}