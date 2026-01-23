/** Chunk was on 38663 **/
/** chunk id: 583246, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(398590),
    i = n(114212),
    a = n(345942),
    o = n(183555),
    s = n(913453),
    c = n(51943),
    u = n(782505),
    d = n(515054),
    f = n(828151);

function p(e) {
    let {
        user: t,
        onClose: n
    } = e, {
        trackUserProfileAction: p
    } = (0, o.NJ)(), {
        mutualGuilds: g,
        isFetching: m
    } = (0, s.A)(t);
    return (0, r.jsx)(d.K, {
        className: f.XG,
        fade: !0,
        children: null == g && m ? Array.from({
            length: 10
        }).map((e, t) => (0, r.jsxs)("div", {
            className: f.Y7,
            children: [(0, r.jsx)(i.FQ, {
                width: 40,
                opacity: .08
            }), (0, r.jsx)(i.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : (null != g || m) && (null == g ? void 0 : g.length) !== 0 ? null == g ? void 0 : g.map(e => {
            let {
                guild: i,
                nick: o
            } = e;
            return (0, r.jsx)(c.A, {
                user: t,
                guild: i,
                nick: o,
                onSelect: () => {
                    p({
                        action: "PRESS_MUTUAL_GUILD"
                    }), (0, a.u)(i.id), n(), (0, l.jH)()
                }
            }, i.id)
        }) : (0, r.jsx)(u.jB, {})
    })
}