/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968);
t(64700);
var s = t(397927),
    l = t(398590),
    r = t(345942),
    a = t(183555),
    o = t(913453),
    d = t(51943),
    c = t(985018),
    u = t(272823);

function A(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: A
    } = (0, a.NJ)(), {
        mutualGuilds: _,
        isFetching: x
    } = (0, o.A)(n);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children: null == _ && x ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : (null != _ || x) && _?.length !== 0 ? _?.map(e => {
            let {
                guild: s,
                nick: a
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: s,
                nick: a,
                onSelect: () => {
                    var e;
                    A({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = s.id, (0, r.u)(e), t(), (0, l.jH)()
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