/** chunk id: 738759 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(398590),
    l = n(345942),
    a = n(183555),
    d = n(913453),
    o = n(51943),
    c = n(985018),
    u = n(230836);

function A(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: A
    } = (0, a.NJ)(), {
        mutualGuilds: m,
        isFetching: x
    } = (0, d.A)(t);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children: null == m && x ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : (null != m || x) && m?.length !== 0 ? m?.map(e => {
            let {
                guild: s,
                nick: a
            } = e;
            return (0, i.jsx)(o.A, {
                user: t,
                guild: s,
                nick: a,
                onSelect: () => {
                    var e;
                    A({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = s.id, (0, l.u)(e), n(), (0, r.jH)()
                }
            }, s.id)
        }) : (0, i.jsxs)("div", {
            className: u.Ie,
            children: [(0, i.jsx)("div", {
                className: u.vC
            }), (0, i.jsx)("div", {
                className: u.BI,
                children: c.intl.string(c.t.zjVh8h)
            })]
        })
    })
}