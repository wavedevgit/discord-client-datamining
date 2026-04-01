/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968);
t(64700);
var a = t(397927),
    s = t(398590),
    r = t(345942),
    l = t(183555),
    o = t(913453),
    d = t(51943),
    c = t(985018),
    u = t(272823);

function _(e) {
    let {
        user: n,
        onClose: t
    } = e, {
        trackUserProfileAction: _
    } = (0, l.NJ)(), {
        mutualGuilds: p,
        isFetching: x
    } = (0, o.A)(n);
    return (0, i.jsx)(a.IpV, {
        className: u.DK,
        fade: !0,
        children: null == p && x ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(a.y$y, {})
        }) : (null != p || x) && p?.length !== 0 ? p?.map(e => {
            let {
                guild: a,
                nick: l
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: a,
                nick: l,
                onSelect: () => {
                    var e;
                    _({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = a.id, (0, r.u)(e), t(), (0, s.jH)()
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