/** chunk id: 982985 params = (module,exports,require) **/
i.d(t, {
    e: () => u,
    l: () => A
});
var l = i(627968),
    n = i(64700),
    s = i(397927),
    a = i(308528),
    r = i(993401),
    o = i(518477),
    d = i(985018);

function c(e) {
    let {
        userId: t,
        onClose: i
    } = e, l = n.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: t
        }), i?.(), (0, s.s7G)()
    }, [t, i]);
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
        onClose: i,
        variant: n = "primary",
        ...s
    } = e, a = c({
        userId: t,
        onClose: i
    });
    return (0, l.jsx)(r.FD, {
        variant: n,
        ...a,
        ...s
    })
}

function A(e) {
    let {
        userId: t,
        onClose: i,
        variant: n = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: t,
        onClose: i
    });
    return (0, l.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: n,
        ...o,
        ...s
    })
}