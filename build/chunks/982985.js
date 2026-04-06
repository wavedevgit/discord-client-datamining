/** chunk id: 982985 params = (module,exports,require) **/
t.d(l, {
    e: () => u,
    l: () => m
});
var n = t(627968),
    i = t(64700),
    s = t(397927),
    a = t(308528),
    r = t(993401),
    o = t(518477),
    d = t(985018);

function c(e) {
    let {
        userId: l,
        onClose: t
    } = e, n = i.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: l
        }), t?.(), (0, s.s7G)()
    }, [l, t]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: s.oyn,
        onClick: n,
        text: d.intl.string(d.t.zROXEV)
    }
}

function u(e) {
    let {
        userId: l,
        onClose: t,
        variant: i = "primary",
        ...s
    } = e, a = c({
        userId: l,
        onClose: t
    });
    return (0, n.jsx)(r.FD, {
        variant: i,
        ...a,
        ...s
    })
}

function m(e) {
    let {
        userId: l,
        onClose: t,
        variant: i = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: l,
        onClose: t
    });
    return (0, n.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: i,
        ...o,
        ...s
    })
}