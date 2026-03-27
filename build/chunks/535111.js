/** chunk id: 535111 params = (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(275667),
    o = n(576437),
    c = n(408486),
    d = n(769015),
    u = n(409626),
    h = n(692969),
    A = n(485599),
    m = n(985018),
    _ = n(455270);

function g(e) {
    let {
        name: t,
        applicationId: n
    } = e, s = (0, h.A)({
        location: "ActivityPanelGameCard",
        applicationId: n,
        source: u.Ob.RtcPanel,
        trackEntryPointImpression: !0
    });
    return (0, i.jsx)(a.DUT, {
        onClick: s,
        className: l()(null != s && _.On),
        children: (0, i.jsx)(A.A, {
            className: _.mO,
            children: t
        })
    })
}

function p(e) {
    let {
        isStreaming: t,
        application: n,
        game: s,
        onClickNotSharing: l,
        isForceShowSharingPopout: u,
        setIsForceShowSharingPopout: h,
        ref: A,
        popoutTargetRef: p
    } = e, f = null != n ? n.name : null != s ? s.name : m.intl.string(m.t["UQMV/E"]);
    return (0, c.z)(), (0, i.jsxs)("div", {
        className: _.cm,
        children: [(0, i.jsxs)("div", {
            className: _.f9,
            children: [(0, i.jsx)(d.A, {
                className: _.Gt,
                game: n,
                pid: s?.pid,
                ref: A
            }), t ? (0, i.jsx)(a.npA, {
                size: "md",
                color: "currentColor",
                className: _.it
            }) : null]
        }), (0, i.jsx)(o.M, {
            popoutTargetRef: p,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: h,
            children: (0, i.jsxs)("div", {
                className: _.pq,
                children: [null != f ? (0, i.jsx)(g, {
                    name: f,
                    applicationId: n?.id
                }) : null, (0, i.jsx)(r.G, {
                    onClick: l
                })]
            })
        })]
    })
}