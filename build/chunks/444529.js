/** Chunk was on 77870 **/
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
            message: p,
            channel: h,
            groupId: f,
            compact: g = !1
        },
        messageWindow: m
    } = e, b = p.state === a.cmJ.SENDING, A = p.id === f, y = (0, l.Lt)(p.flags, a.pr7.EPHEMERAL), _ = p.state === a.cmJ.SEND_FAILED;
    return b || y && !_ ? null : (0, r.jsx)(s.A, {
        className: o.Uo,
        innerClassName: o.Mc,
        isHeader: !g && A && !(0, i.A)(p),
        isReply: !g && p.type === a.lAJ.REPLY && null != p.messageReference,
        channel: h,
        message: p,
        messageWindow: m,
        setPopout: t,
        showEmojiPicker: n,
        showEmojiBurstPicker: c,
        showMoreUtilities: u,
        isFocused: d
    })
}