/** chunk id: 871432 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(73153),
    o = n(966871),
    d = n(994500),
    c = n(291445),
    u = n(726079),
    A = n(985018);

function _() {
    let e = (0, r.bG)([d.A], () => d.A.getPendingCount() > 0);
    return a.useEffect(() => {
        s.h.dispatch({
            type: "FRIENDS_LIST_POPOUT_MOUNTED"
        })
    }, []), (0, i.jsx)(u.l, {
        popoutPosition: "bottom",
        popoutAlign: "left",
        children: (t, n, a, r) => (0, i.jsx)(o.A, {
            ...a,
            ref: r,
            onClick: t,
            icon: l.$yI,
            tooltip: A.intl.string(A.t.TdEu5X),
            showBadge: e,
            selected: n
        })
    })
}

function h() {
    let {
        hasFriendList: e
    } = (0, c.K)("friends-button");
    return e ? (0, i.jsx)(_, {}) : null
}