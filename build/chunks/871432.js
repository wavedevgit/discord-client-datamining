/** chunk id: 871432 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(73153),
    o = n(966871),
    d = n(994500),
    c = n(291445),
    u = n(726079),
    A = n(985018);

function h() {
    let e = (0, a.bG)([d.A], () => d.A.getPendingCount() > 0);
    return l.useEffect(() => {
        s.h.dispatch({
            type: "FRIENDS_LIST_POPOUT_MOUNTED"
        })
    }, []), (0, i.jsx)(u.l, {
        popoutPosition: "bottom",
        popoutAlign: "left",
        children: (t, n, l, a) => (0, i.jsx)(o.A, {
            ...l,
            ref: a,
            onClick: t,
            icon: r.$yI,
            tooltip: A.intl.string(A.t.TdEu5X),
            showBadge: e,
            selected: n
        })
    })
}

function _() {
    let {
        hasFriendList: e
    } = (0, c.K)("friends-button");
    return e ? (0, i.jsx)(h, {}) : null
}