/** chunk id: 738759, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(398590),
    r = n(345942),
    a = n(183555),
    d = n(913453),
    o = n(51943),
    c = n(985018),
    u = n(781425);

function A(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: A
    } = (0, a.NJ)(), {
        mutualGuilds: x,
        isFetching: _
    } = (0, d.A)(t);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children: null == x && _ ? (0, i.jsx)("div", {
            className: u.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : (null != x || _) && x?.length !== 0 ? x?.map(e => {
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
                    }), e = s.id, (0, r.u)(e), n(), (0, l.jH)()
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