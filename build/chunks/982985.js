/** chunk id: 982985 params = (module,exports,require) **/
l.d(n, {
    e: () => u,
    l: () => m
});
var t = l(627968),
    i = l(64700),
    s = l(397927),
    a = l(308528),
    r = l(993401),
    o = l(518477),
    d = l(985018);

function c(e) {
    let {
        userId: n,
        onClose: l
    } = e, t = i.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: n
        }), l?.(), (0, s.s7G)()
    }, [n, l]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: t,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: n,
        onClose: l,
        variant: i = "primary",
        ...s
    } = e, a = c({
        userId: n,
        onClose: l
    });
    return (0, t.jsx)(r.FD, {
        variant: i,
        ...a,
        ...s
    })
}

function m(e) {
    let {
        userId: n,
        onClose: l,
        variant: i = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: n,
        onClose: l
    });
    return (0, t.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: i,
        ...o,
        ...s
    })
}