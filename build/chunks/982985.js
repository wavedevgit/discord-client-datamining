/** chunk id: 982985 params = (module,exports,require) **/
i.d(l, {
    e: () => u,
    l: () => m
});
var t = i(627968),
    n = i(64700),
    s = i(397927),
    a = i(308528),
    r = i(993401),
    o = i(518477),
    d = i(985018);

function c(e) {
    let {
        userId: l,
        onClose: i
    } = e, t = n.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: l
        }), i?.(), (0, s.s7G)()
    }, [l, i]);
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
        onClose: i,
        variant: n = "primary",
        ...s
    } = e, a = c({
        userId: l,
        onClose: i
    });
    return (0, t.jsx)(r.FD, {
        variant: n,
        ...a,
        ...s
    })
}

function m(e) {
    let {
        userId: l,
        onClose: i,
        variant: n = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: l,
        onClose: i
    });
    return (0, t.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: n,
        ...o,
        ...s
    })
}