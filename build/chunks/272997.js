/** chunk id: 272997 params = (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(627363),
    a = n(769015),
    o = n(25528),
    c = n(961350),
    d = n(69555),
    u = n(266069),
    h = n(859700);

function A(e) {
    let {
        guildId: t,
        onSetActivityStatus: n
    } = e, A = (0, l.bG)([c.default], () => c.default.getId()), m = (0, o.Ay)(A, t)[0], _ = (0, r.YY)(m?.application_id).data ?? void 0, p = s.useCallback(() => {
        null != _ && ((0, d.xA)(_.id, !0), n())
    }, [_, n]);
    return null == _ ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.u, {
            label: _.name,
            icon: (0, i.jsx)(a.A, {
                game: _,
                className: h.K
            }),
            setStatus: p
        }), (0, i.jsx)("div", {
            role: "separator",
            className: h.m
        })]
    })
}