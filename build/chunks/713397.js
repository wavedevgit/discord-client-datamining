/** chunk id: 713397, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(397927),
    i = n(367513),
    s = n(715989),
    a = n(985018),
    o = n(852887);

function c(e) {
    let {
        channelId: t,
        allPoppedOut: n = !1
    } = e;
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [(0, r.jsx)(s.A, {}), (0, r.jsxs)("div", {
            className: o.Qs,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-lg/normal",
                children: n ? a.intl.string(a.t.KIConm) : a.intl.format(a.t.ilLVLr, {})
            }), !n && (0, r.jsx)(l.Button, {
                variant: "secondary",
                size: "md",
                onClick: e => {
                    e.stopPropagation(), i.A.toggleVoiceParticipantsHidden(t, !1)
                },
                text: a.intl.string(a.t.kLQySL)
            })]
        })]
    })
}