/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(398590),
    r = t(345942),
    s = t(183555),
    d = t(913453),
    o = t(51943),
    c = t(985018),
    _ = t(643146);

function u(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: u
    } = (0, s.NJ)(), {
        mutualGuilds: p,
        isFetching: A
    } = (0, d.A)(n);
    return (0, i.jsx)(a.IpV, {
        className: _.DK,
        fade: !0,
        children: null == p && A ? (0, i.jsx)("div", {
            className: _.Ie,
            children: (0, i.jsx)(a.y$y, {})
        }) : (null != p || A) && p?.length !== 0 ? p?.map(e => {
            let {
                guild: a,
                nick: s
            } = e;
            return (0, i.jsx)(o.A, {
                user: n,
                guild: a,
                nick: s,
                onSelect: () => {
                    var e;
                    u({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = a.id, (0, r.u)(e), t(), (0, l.jH)()
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