/** Chunk was on 41727 **/
/** chunk id: 427868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(64700),
    i = n(607399),
    s = n(397927),
    a = n(194085),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        message: n,
        togglePopout: c,
        renderEmojiPicker: u,
        shouldShow: d
    } = e, p = l.useRef(null);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: p,
        animation: s.YNO.Animation.FADE,
        renderPopout: e => {
            let {
                closePopout: r
            } = e;
            return u(t, n, r, !1)
        },
        shouldShow: d,
        onRequestClose: c,
        position: i.Fr ? "top" : "left",
        align: i.Fr ? "center" : "top",
        clickTrap: !0,
        children: () => (0, r.jsx)(a.qv, {
            ref: p,
            label: o.intl.string(o.t.lfIHs4),
            icon: s.nm2,
            onClick: c
        }, "add-reaction")
    })
}