/** chunk id: 704400 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(985018),
    s = n(987773);

function r(e) {
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
        className: s.L,
        children: [(0, i.jsx)(a.mir, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: s.m,
            children: l.intl.string(l.t["2aXnfa"])
        })]
    })
}