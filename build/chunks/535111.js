/** chunk id: 535111, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => b
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(275667),
    o = n(576437),
    c = n(408486),
    u = n(769015),
    d = n(409626),
    p = n(692969),
    h = n(485599),
    g = n(985018),
    f = n(237235);

function m(e) {
    let {
        name: t,
        applicationId: n
    } = e, l = (0, p.A)({
        location: "ActivityPanelGameCard",
        applicationId: n,
        source: d.Ob.RtcPanel,
        trackEntryPointImpression: !0
    });
    return (0, r.jsx)(s.DUT, {
        onClick: l,
        className: i()(null != l && f.On),
        children: (0, r.jsx)(h.A, {
            className: f.mO,
            children: t
        })
    })
}

function b(e) {
    let {
        isStreaming: t,
        application: n,
        game: l,
        onClickNotSharing: i,
        isForceShowSharingPopout: d,
        setIsForceShowSharingPopout: p,
        ref: h,
        popoutTargetRef: b
    } = e, A = null != n ? n.name : null != l ? l.name : g.intl.string(g.t["UQMV/E"]);
    return (0, c.z)(), (0, r.jsxs)("div", {
        className: f.cm,
        children: [(0, r.jsxs)("div", {
            className: f.f9,
            children: [(0, r.jsx)(u.A, {
                className: f.Gt,
                game: n,
                pid: null == l ? void 0 : l.pid,
                ref: h
            }), t ? (0, r.jsx)(s.npA, {
                size: "md",
                color: "currentColor",
                className: f.it
            }) : null]
        }), (0, r.jsx)(o.M, {
            popoutTargetRef: b,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: p,
            children: (0, r.jsxs)("div", {
                className: f.pq,
                children: [null != A ? (0, r.jsx)(m, {
                    name: A,
                    applicationId: null == n ? void 0 : n.id
                }) : null, (0, r.jsx)(a.G, {
                    onClick: i
                })]
            })
        })]
    })
}