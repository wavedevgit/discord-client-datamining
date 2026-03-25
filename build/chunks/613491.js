/** chunk id: 613491 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(397927),
    a = n(935649),
    o = n(847599),
    c = n(734057),
    u = n(309010),
    d = n(849736),
    _ = n(354583),
    E = n(366098),
    T = n(418208),
    A = n(985018),
    I = n(496447);

function p(e) {
    if (!e && (0, T.Cf)()) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
    });
    let t = u.A.getVoiceChannelId();
    if (null == t) return;
    let n = c.A.getChannel(t);
    null != n && (0, d.e7)(n, e)
}

function N(e) {
    let {
        channelId: t
    } = e, n = (0, E.D3)(t) ?? 0, l = (0, E.Xk)(t) ?? 0;
    return n > 0 && l > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: A.intl.string(A.t.xlJRfv)
        })
    }) : n > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: A.intl.string(A.t.WYad9Z)
        })
    }) : l > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: A.intl.string(A.t.eHq2OF)
        })
    }) : null
}

function m() {
    let e = (0, _.A)();
    return null == e ? null : (0, i.jsxs)(s.$Td, {
        className: I.kL,
        color: s.Hv$.DEFAULT,
        children: [A.intl.string(A.t.Ul1RJQ), (0, i.jsx)(N, {
            channelId: e.id
        }), (0, i.jsxs)(s.ButtonGroup, {
            size: "sm",
            className: I.GC,
            children: [(0, i.jsx)(s.Button, {
                variant: "overlay-primary",
                text: A.intl.string(A.t.MpO0px),
                onClick: () => p(!1)
            }), (0, i.jsx)(s.Button, {
                variant: "secondary",
                onClick: () => p(!0),
                text: A.intl.string(A.t["1YDv7a"])
            })]
        })]
    })
}