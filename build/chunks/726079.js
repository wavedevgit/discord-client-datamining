/** chunk id: 726079, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => d
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(646881),
    s = n(92534),
    o = n(377009);

function d(e) {
    let {
        onOpen: t,
        onClose: n,
        children: d,
        popoutPosition: c,
        popoutAlign: u
    } = e, [A, h] = r.useState(!1), _ = r.useRef(null), m = r.useCallback(() => {
        h(!1), n?.()
    }, [n]), {
        handlePrimaryAction: g,
        handleContextMenu: p
    } = (0, s.B)(m), E = r.useCallback(() => {
        h(e => {
            let i = !e;
            return i ? t?.() : n?.(), i
        })
    }, [n, t]), I = r.useCallback(() => (0, i.jsx)("div", {
        className: o.k,
        children: (0, i.jsx)(a.$, {
            onPrimaryAction: g,
            onContextMenu: p
        })
    }), [p, g]);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: _,
        animation: l.YNO.Animation.NONE,
        position: c,
        align: u,
        autoInvert: !1,
        shouldShow: A,
        onRequestClose: m,
        renderPopout: I,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let {
                isShown: n
            } = t;
            return d(E, n, e, _)
        }
    })
}