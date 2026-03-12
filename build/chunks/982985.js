/** chunk id: 982985 params = (module,exports,require) **/
n.d(t, {
    e: () => u,
    l: () => A
});
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(308528),
    r = n(993401),
    o = n(518477),
    d = n(985018);

function c(e) {
    let {
        userId: t,
        onClose: n
    } = e, l = i.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: t
        }), n?.(), (0, s.s7G)()
    }, [t, n]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: l,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: t,
        onClose: n,
        variant: i = "primary",
        ...s
    } = e, a = c({
        userId: t,
        onClose: n
    });
    return (0, l.jsx)(r.FD, {
        variant: i,
        ...a,
        ...s
    })
}

function A(e) {
    let {
        userId: t,
        onClose: n,
        variant: i = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: t,
        onClose: n
    });
    return (0, l.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: i,
        ...o,
        ...s
    })
}