/** chunk id: 738759 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968);
t(64700);
var s = t(397927),
    r = t(398590),
    a = t(345942),
    l = t(183555),
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
    } = (0, l.NJ)(), {
        mutualGuilds: A,
        isFetching: m
    } = (0, o.A)(n);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children: null == A && m ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : (null != A || m) && A?.length !== 0 ? A?.map(e => {
            let {
                guild: s,
                nick: l
            } = e;
            return (0, i.jsx)(d.A, {
                user: n,
                guild: s,
                nick: l,
                onSelect: () => {
                    var e;
                    _({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = s.id, (0, a.u)(e), t(), (0, r.jH)()
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