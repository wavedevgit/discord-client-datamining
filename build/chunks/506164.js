/** chunk id: 506164, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(847599),
    a = n(263518);
let o = function(e) {
    let {
        title: t,
        description: n,
        agreement: o,
        disagreement: c,
        onAgree: u,
        onDisagree: d,
        modalType: p,
        channelId: h,
        guildId: g
    } = e;
    l.useEffect(() => {
        (0, s.Bf)(p, h, g)
    }, [p, h, g]);
    let f = l.useCallback(() => {
            (0, s.mU)(s.IY.NSFW_CHANNEL_DISAGREE_CTA, p, h, g), null == d || d()
        }, [d, p, h, g]),
        m = l.useCallback(() => {
            (0, s.mU)(s.IY.NSFW_CHANNEL_AGREE_CTA, p, h, g), null == u || u()
        }, [u, p, h, g]);
    return (0, r.jsxs)(i.BJc, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: a.XG,
        children: [(0, r.jsxs)(i.BJc, {
            gap: 8,
            justify: "center",
            align: "center",
            direction: "vertical",
            children: [(0, r.jsx)(i.Text, {
                variant: "text-lg/semibold",
                className: a.DD,
                children: t
            }), (0, r.jsx)(i.Text, {
                variant: "text-md/medium",
                className: a.h_,
                color: "text-muted",
                children: n
            })]
        }), (0, r.jsxs)(i.BJc, {
            direction: "horizontal",
            justify: "center",
            align: "center",
            gap: 16,
            children: [null != c && null != d ? (0, r.jsx)(i.Button, {
                variant: "secondary",
                text: c,
                onClick: f
            }) : null, null != o && null != u ? (0, r.jsx)(i.Button, {
                onClick: m,
                text: o
            }) : null]
        })]
    })
}