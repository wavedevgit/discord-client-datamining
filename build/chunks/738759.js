/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => m
});
var i = t(627968);
t(64700);
var s = t(397927),
    l = t(398590),
    a = t(345942),
    r = t(183555),
    o = t(913453),
    d = t(51943),
    c = t(985018),
    u = t(781425);

function m(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: m
    } = (0, r.NJ)(), {
        mutualGuilds: x,
        isFetching: A
    } = (0, o.A)(n);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children: null == x && A ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : (null != x || A) && x?.length !== 0 ? x?.map(e => {
            let {
                guild: s,
                nick: r
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: s,
                nick: r,
                onSelect: () => {
                    var e;
                    m({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = s.id, (0, a.u)(e), t(), (0, l.jH)()
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