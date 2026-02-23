/** chunk id: 871432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(73153),
    o = n(58736),
    d = n(994500),
    c = n(291445),
    u = n(726079),
    A = n(985018);

function h(e) {
    let {
        className: t
    } = e, n = (0, l.bG)([d.A], () => d.A.getPendingCount() > 0), c = (0, a.rdh)(a.LU0.modules.chat.INPUT_ICON_SIZE);
    return r.useEffect(() => {
        s.h.dispatch({
            type: "FRIENDS_LIST_POPOUT_MOUNTED"
        })
    }, []), (0, i.jsx)(u.l, {
        popoutPosition: "bottom",
        popoutAlign: "left",
        children: (e, r, l, s) => (0, i.jsx)(o.In, {
            ...l,
            ref: s,
            className: t,
            onClick: e,
            icon: a.$yI,
            iconSize: c,
            "aria-label": A.intl.string(A.t.TdEu5X),
            tooltip: r ? null : A.intl.string(A.t.TdEu5X),
            selected: r,
            showBadge: n
        })
    })
}

function _(e) {
    let {
        className: t
    } = e, {
        hasFriendList: n
    } = (0, c.K)("friends-button");
    return n ? (0, i.jsx)(h, {
        className: t
    }) : null
}