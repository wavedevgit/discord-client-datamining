/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(397927),
    r = t(398590),
    l = t(345942),
    o = t(183555),
    s = t(913453),
    d = t(51943),
    c = t(985018),
    _ = t(643146);

function u(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: u
    } = (0, o.NJ)(), {
        mutualGuilds: p,
        isFetching: A
    } = (0, s.A)(n);
    return (0, i.jsx)(a.IpV, {
        className: _.DK,
        fade: !0,
        children: null == p && A ? (0, i.jsx)("div", {
            className: _.Ie,
            children: (0, i.jsx)(a.y$y, {})
        }) : (null != p || A) && p?.length !== 0 ? p?.map(e => {
            let {
                guild: a,
                nick: o
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: a,
                nick: o,
                onSelect: () => {
                    var e;
                    u({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = a.id, (0, l.u)(e), t(), (0, r.jH)()
                }
            }, a.id)
        }) : (0, i.jsxs)("div", {
            className: _.Ie,
            children: [(0, i.jsx)("div", {
                className: _.vC
            }), (0, i.jsx)("div", {
                className: _.BI,
                children: c.intl.string(c.t.zjVh8h)
            })]
        })
    })
}