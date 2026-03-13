/** chunk id: 982985 params = (module,exports,require) **/
n.d(l, {
    e: () => u,
    l: () => A
});
var i = n(627968),
    t = n(64700),
    s = n(397927),
    a = n(308528),
    r = n(993401),
    o = n(518477),
    d = n(985018);

function c(e) {
    let {
        userId: l,
        onClose: n
    } = e, i = t.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: l
        }), n?.(), (0, s.s7G)()
    }, [l, n]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: i,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: l,
        onClose: n,
        variant: t = "primary",
        ...s
    } = e, a = c({
        userId: l,
        onClose: n
    });
    return (0, i.jsx)(r.FD, {
        variant: t,
        ...a,
        ...s
    })
}

function A(e) {
    let {
        userId: l,
        onClose: n,
        variant: t = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: l,
        onClose: n
    });
    return (0, i.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: t,
        ...o,
        ...s
    })
}