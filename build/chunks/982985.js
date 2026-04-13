/** chunk id: 982985 params = (module,exports,require) **/
l.d(t, {
    e: () => u,
    l: () => m
});
var n = l(627968),
    i = l(64700),
    s = l(397927),
    a = l(308528),
    r = l(993401),
    o = l(518477),
    d = l(985018);

function c(e) {
    let {
        userId: t,
        onClose: l
    } = e, n = i.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: t
        }), l?.(), (0, s.s7G)()
    }, [t, l]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: n,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: t,
        onClose: l,
        variant: i = "primary",
        ...s
    } = e, a = c({
        userId: t,
        onClose: l
    });
    return (0, n.jsx)(r.FD, {
        variant: i,
        ...a,
        ...s
    })
}

function m(e) {
    let {
        userId: t,
        onClose: l,
        variant: i = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: t,
        onClose: l
    });
    return (0, n.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: i,
        ...o,
        ...s
    })
}