/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968);
t(64700);
var a = t(397927),
    s = t(398590),
    l = t(345942),
    r = t(183555),
    o = t(913453),
    d = t(51943),
    c = t(985018),
    u = t(643146);

function _(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: _
    } = (0, r.NJ)(), {
        mutualGuilds: A,
        isFetching: x
    } = (0, o.A)(n);
    return (0, i.jsx)(a.IpV, {
        className: u.DK,
        fade: !0,
        children: null == A && x ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(a.y$y, {})
        }) : (null != A || x) && A?.length !== 0 ? A?.map(e => {
            let {
                guild: a,
                nick: r
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: a,
                nick: r,
                onSelect: () => {
                    var e;
                    _({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = a.id, (0, l.u)(e), t(), (0, s.jH)()
                }
            }, a.id)
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