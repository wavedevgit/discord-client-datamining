/** chunk id: 427868 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(397927),
    r = n(194085),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        message: n,
        togglePopout: c,
        renderEmojiPicker: d,
        shouldShow: u
    } = e, h = l.useRef(null);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: h,
        animation: a.YNO.Animation.FADE,
        renderPopout: e => {
            let {
                closePopout: i
            } = e;
            return d(t, n, i, !1)
        },
        shouldShow: u,
        onRequestClose: c,
        position: s.Fr ? "top" : "left",
        align: s.Fr ? "center" : "top",
        clickTrap: !0,
        children: () => (0, i.jsx)(r.qv, {
            ref: h,
            label: o.intl.string(o.t.lfIHs4),
            icon: a.nm2,
            onClick: c
        }, "add-reaction")
    })
}