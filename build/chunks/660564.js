/** chunk id: 660564, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(138298),
    l = n(761640),
    a = n(954571),
    s = n(203982),
    o = n(957283),
    c = n(822082),
    u = n(825869),
    d = n(652215);

function p(e) {
    let {
        index: t,
        className: n,
        channel: p,
        user: h,
        hasSingleMessageRequest: f
    } = e, {
        channelId: g
    } = (0, o.N)();
    return (0, r.jsx)(c.A, {
        index: t,
        className: n,
        isFocused: g === p.id,
        channel: p,
        user: h,
        onClick: e => {
            e.stopPropagation(), i.A.openPrivateChannelAsSidebar({
                channelId: p.id,
                baseChannelId: l.fe,
                hasSingleMessageRequest: f
            }), a.default.track(d.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                is_spam: !1,
                channel_id: p.id,
                other_user_id: h.id
            }), setTimeout(() => {
                s._.dispatch(d.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: p.id
                })
            }, 0)
        },
        children: e => (0, r.jsx)(u.v, {
            active: e,
            user: h,
            channel: p
        })
    })
}