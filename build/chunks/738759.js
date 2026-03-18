/** chunk id: 738759 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(398590),
    a = n(345942),
    l = n(183555),
    o = n(913453),
    d = n(51943),
    c = n(985018),
    u = n(781425);

function _(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: _
    } = (0, l.NJ)(), {
        mutualGuilds: A,
        isFetching: m
    } = (0, o.A)(t);
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
                user: t,
                guild: s,
                nick: l,
                onSelect: () => {
                    var e;
                    _({
                        action: "PRESS_MUTUAL_GUILD"
                    }), e = s.id, (0, a.u)(e), n(), (0, r.jH)()
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