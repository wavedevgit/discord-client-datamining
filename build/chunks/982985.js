/** chunk id: 982985 params = (module,exports,require) **/
n.d(l, {
    e: () => u,
    l: () => m
});
var t = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(308528),
    r = n(993401),
    o = n(518477),
    d = n(985018);

function c(e) {
    let {
        userId: l,
        onClose: n
    } = e, t = i.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: l
        }), n?.(), (0, s.s7G)()
    }, [l, n]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: t,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: l,
        onClose: n,
        variant: i = "primary",
        ...s
    } = e, a = c({
        userId: l,
        onClose: n
    });
    return (0, t.jsx)(r.FD, {
        variant: i,
        ...a,
        ...s
    })
}

function m(e) {
    let {
        userId: l,
        onClose: n,
        variant: i = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: l,
        onClose: n
    });
    return (0, t.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: i,
        ...o,
        ...s
    })
}