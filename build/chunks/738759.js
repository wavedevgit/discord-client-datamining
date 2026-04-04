/** chunk id: 738759 params = (module,exports,require) **/
i.d(n, {
    A: () => _
});
var t = i(627968);
i(64700);
var a = i(397927),
    l = i(398590),
    s = i(345942),
    r = i(183555),
    d = i(913453),
    o = i(51943),
    c = i(985018),
    u = i(643146);

function _(e) {
    let {
        user: n,
        onClose: i
    } = e, {
        trackUserProfileAction: _
    } = (0, r.NJ)(), {
        mutualGuilds: A,
        isFetching: p
    } = (0, d.A)(n);
    return (0, t.jsx)(a.IpV, {
        className: u.DK,
        fade: !0,
        children: null == A && p ? (0, t.jsx)("div", {
            className: u.Ie,
            children: (0, t.jsx)(a.y$y, {})
        }) : (null != A || p) && A?.length !== 0 ? A?.map(e => {
            let {
                guild: a,
                nick: r
            } = e;
            return (0, t.jsx)(o.A, {
                user: n,
                guild: a,
                nick: r,
                onSelect: () => {
                    var e;
                    _({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = a.id, (0, s.u)(e), i(), (0, l.jH)()
                }
            }, a.id)
        }) : (0, t.jsxs)("div", {
            className: u.Ie,
            children: [(0, t.jsx)("div", {
                className: u.vC
            }), (0, t.jsx)("div", {
                className: u.BI,
                children: c.intl.string(c.t.zjVh8h)
            })]
        })
    })
}