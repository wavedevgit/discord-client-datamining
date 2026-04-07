/** chunk id: 613491 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(935649),
    o = n(847599),
    d = n(734057),
    c = n(309010),
    u = n(849736),
    h = n(354583),
    A = n(366098),
    _ = n(418208),
    m = n(985018),
    p = n(826006);

function g(e) {
    if (!e && (0, _.Cf)()) return void r.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
    });
    let t = c.A.getVoiceChannelId();
    if (null == t) return;
    let n = d.A.getChannel(t);
    null != n && (0, u.e7)(n, e)
}

function f(e) {
    let {
        channelId: t
    } = e, n = (0, A.D3)(t) ?? 0, l = (0, A.Xk)(t) ?? 0;
    return n > 0 && l > 0 ? (0, i.jsx)("div", {
        className: p.Z5,
        children: (0, i.jsx)("div", {
            className: s()(p.qQ, p.lN),
            children: m.intl.string(m.t.xlJRfv)
        })
    }) : n > 0 ? (0, i.jsx)("div", {
        className: p.Z5,
        children: (0, i.jsx)("div", {
            className: s()(p.qQ, p.lN),
            children: m.intl.string(m.t.WYad9Z)
        })
    }) : l > 0 ? (0, i.jsx)("div", {
        className: p.Z5,
        children: (0, i.jsx)("div", {
            className: s()(p.qQ, p.lN),
            children: m.intl.string(m.t.eHq2OF)
        })
    }) : null
}

function x() {
    let e = (0, h.A)();
    return null == e ? null : (0, i.jsxs)(a.$Td, {
        className: p.kL,
        color: a.Hv$.DEFAULT,
        children: [m.intl.string(m.t.Ul1RJQ), (0, i.jsx)(f, {
            channelId: e.id
        }), (0, i.jsxs)(a.ButtonGroup, {
            size: "sm",
            className: p.GC,
            children: [(0, i.jsx)(a.Button, {
                variant: "overlay-primary",
                text: m.intl.string(m.t.MpO0px),
                onClick: () => g(!1)
            }), (0, i.jsx)(a.Button, {
                variant: "secondary",
                onClick: () => g(!0),
                text: m.intl.string(m.t["1YDv7a"])
            })]
        })]
    })
}