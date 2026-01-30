/** chunk id: 444529, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(938796);
var r = n(627968);
n(64700);
var l = n(665260),
    i = n(143413),
    s = n(907495),
    a = n(652215),
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
            groupId: g,
            compact: f = !1
        },
        messageWindow: m
    } = e, b = h.state === a.cmJ.SENDING, A = h.id === g, y = (0, l.Lt)(h.flags, a.pr7.EPHEMERAL), O = h.state === a.cmJ.SEND_FAILED;
    return b || y && !O ? null : (0, r.jsx)(s.A, {
        className: o.Uo,
        innerClassName: o.Mc,
        isHeader: !f && A && !(0, i.A)(h),
        isReply: !f && h.type === a.lAJ.REPLY && null != h.messageReference,
        channel: p,
        message: h,
        messageWindow: m,
        setPopout: t,
        showEmojiPicker: n,
        showEmojiBurstPicker: c,
        showMoreUtilities: u,
        isFocused: d
    })
}