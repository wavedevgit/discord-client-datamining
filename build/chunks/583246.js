/** chunk id: 583246 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var a = n(398590),
    l = n(114212),
    s = n(345942),
    r = n(183555),
    o = n(913453),
    c = n(51943),
    d = n(782505),
    u = n(515054),
    m = n(913329);

function g(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: g
    } = (0, r.NJ)(), {
        mutualGuilds: p,
        isFetching: x
    } = (0, o.A)(t);
    return (0, i.jsx)(u.K, {
        className: m.XG,
        fade: !0,
        children: null == p && x ? Array.from({
            length: 10
        }).map((e, t) => (0, i.jsxs)("div", {
            className: m.Y7,
            children: [(0, i.jsx)(l.FQ, {
                width: 40,
                opacity: .08
            }), (0, i.jsx)(l.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : (null != p || x) && p?.length !== 0 ? p?.map(e => {
            let {
                guild: l,
                nick: r
            } = e;
            return (0, i.jsx)(c.A, {
                user: t,
                guild: l,
                nick: r,
                onSelect: () => {
                    g({
                        action: "PRESS_MUTUAL_GUILD"
                    }), (0, s.u)(l.id), n(), (0, a.jH)()
                }
            }, l.id)
        }) : (0, i.jsx)(d.jB, {})
    })
}