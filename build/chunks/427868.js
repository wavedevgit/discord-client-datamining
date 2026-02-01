/** chunk id: 427868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    r = n(64700),
    i = n(607399),
    a = n(397927),
    s = n(194085),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        message: n,
        togglePopout: c,
        renderEmojiPicker: u,
        shouldShow: d
    } = e, h = r.useRef(null);
    return (0, l.jsx)(a.YNO, {
        targetElementRef: h,
        animation: a.YNO.Animation.FADE,
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return u(t, n, l, !1)
        },
        shouldShow: d,
        onRequestClose: c,
        position: i.Fr ? "top" : "left",
        align: i.Fr ? "center" : "top",
        clickTrap: !0,
        children: () => (0, l.jsx)(s.qv, {
            ref: h,
            label: o.intl.string(o.t.lfIHs4),
            icon: a.nm2,
            onClick: c
        }, "add-reaction")
    })
}