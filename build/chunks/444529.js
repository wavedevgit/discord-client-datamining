/** chunk id: 444529, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(938796);
var l = n(627968);
n(64700);
var r = n(665260),
    i = n(143413),
    a = n(907495),
    s = n(652215),
    o = n(119907);

function c(e) {
    let {
        setPopout: t,
        messagePopouts: {
            emojiPicker: n,
            emojiBurstPicker: c,
            moreUtilities: u
        },
        isFocused: d,
        buttonProps: {
            message: h,
            channel: p,
            groupId: f,
            compact: m = !1
        },
        messageWindow: g
    } = e, A = h.state === s.cmJ.SENDING, b = h.id === f, _ = (0, r.Lt)(h.flags, s.pr7.EPHEMERAL), y = h.state === s.cmJ.SEND_FAILED;
    return A || _ && !y ? null : (0, l.jsx)(a.A, {
        className: o.Uo,
        innerClassName: o.Mc,
        isHeader: !m && b && !(0, i.A)(h),
        isReply: !m && h.type === s.lAJ.REPLY && null != h.messageReference,
        channel: p,
        message: h,
        messageWindow: g,
        setPopout: t,
        showEmojiPicker: n,
        showEmojiBurstPicker: c,
        showMoreUtilities: u,
        isFocused: d
    })
}