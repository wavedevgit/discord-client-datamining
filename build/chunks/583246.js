/** chunk id: 583246 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var a = n(398590),
    l = n(114212),
    s = n(345942),
    r = n(183555),
    o = n(913453),
    d = n(51943),
    c = n(782505),
    u = n(515054),
    g = n(913329);

function m(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: m
    } = (0, r.NJ)(), {
        mutualGuilds: x,
        isFetching: f
    } = (0, o.A)(t);
    return (0, i.jsx)(u.K, {
        className: g.XG,
        fade: !0,
        children: null == x && f ? Array.from({
            length: 10
        }).map((e, t) => (0, i.jsxs)("div", {
            className: g.Y7,
            children: [(0, i.jsx)(l.FQ, {
                width: 40,
                opacity: .08
            }), (0, i.jsx)(l.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : (null != x || f) && x?.length !== 0 ? x?.map(e => {
            let {
                guild: l,
                nick: r
            } = e;
            return (0, i.jsx)(d.A, {
                user: t,
                guild: l,
                nick: r,
                onSelect: () => {
                    m({
                        action: "PRESS_MUTUAL_GUILD"
                    }), (0, s.u)(l.id), n(), (0, a.jH)()
                }
            }, l.id)
        }) : (0, i.jsx)(c.jB, {})
    })
}