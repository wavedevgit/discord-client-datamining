/** chunk id: 982985 params = (module,exports,require) **/
i.d(l, {
    e: () => u,
    l: () => A
});
var n = i(627968),
    t = i(64700),
    s = i(397927),
    a = i(308528),
    r = i(993401),
    o = i(518477),
    d = i(985018);

function c(e) {
    let {
        userId: l,
        onClose: i
    } = e, n = t.useCallback(() => {
        a.A.openPrivateChannel({
            recipientIds: l
        }), i?.(), (0, s.s7G)()
    }, [l, i]);
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
        onClose: i,
        variant: t = "primary",
        ...s
    } = e, a = c({
        userId: l,
        onClose: i
    });
    return (0, n.jsx)(r.FD, {
        variant: t,
        ...a,
        ...s
    })
}

function A(e) {
    let {
        userId: l,
        onClose: i,
        variant: t = "primary",
        ...s
    } = e, {
        text: a,
        ...o
    } = c({
        userId: l,
        onClose: i
    });
    return (0, n.jsx)(r.q3, {
        tooltipText: a,
        "aria-label": a,
        variant: t,
        ...o,
        ...s
    })
}