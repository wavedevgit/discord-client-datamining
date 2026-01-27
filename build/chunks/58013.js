/** Chunk was on 86142 **/
/** chunk id: 58013, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(110259),
    l = n(397927),
    a = n(585541),
    o = n(163698),
    c = n(528685),
    u = n(524832);

function d(e) {
    let {
        transitionTo: t,
        token: n,
        width: d
    } = e, [h, p] = i.useState(u.k.START), [g, f] = i.useState(null), [_, m] = i.useState(""), A = {
        impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW
    };
    return (0, r.jsx)("div", {
        style: {
            margin: "8px"
        },
        children: (0, r.jsxs)(l.tN_, {
            activeSlide: h,
            width: d,
            onSlideReady: f,
            children: [(0, r.jsx)(l.q7S, {
                id: u.k.START,
                impressionProperties: A,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                children: (0, r.jsx)(o.A, {
                    setSlide: p,
                    transitionTo: t
                })
            }), (0, r.jsx)(l.q7S, {
                id: u.k.PASSWORD,
                impressionProperties: A,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                children: (0, r.jsx)(a.A, {
                    setOriginalEmail: m,
                    setSlide: p,
                    transitionTo: t,
                    ready: g === u.k.PASSWORD,
                    token: n
                })
            }), (0, r.jsx)(l.q7S, {
                id: u.k.SUCCESS,
                impressionProperties: A,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                children: (0, r.jsx)(c.A, {
                    email: _
                })
            })]
        })
    })
}