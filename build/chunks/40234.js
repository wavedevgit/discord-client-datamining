/** chunk id: 40234 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var a = n(377802),
    r = n(956793),
    l = n(688810),
    s = n(384059),
    o = n(707592),
    d = n(132860),
    c = n(993838),
    u = n(106044),
    A = n(42473),
    _ = n(985018);

function h(e) {
    let {
        tooltipText: t,
        onClick: n
    } = e, {
        parentAnalyticsLocation: r
    } = (0, l.Ay)(), {
        events: o,
        Component: d
    } = (0, a.O)();
    return (0, i.jsx)(A.A, {
        tooltipText: t,
        onClick: () => {
            (0, s.X)(r, s.O.DISCONNECT), n()
        },
        ...o,
        icon: (0, i.jsx)(d, {
            size: "refresh_sm"
        })
    })
}

function m(e) {
    let {
        channel: t
    } = e;
    return (0, i.jsx)(h, {
        tooltipText: _.intl.string(_.t.SMKyih),
        onClick: () => {
            (0, u.A)(t) ? (0, c.j3)(t) : r.default.disconnect()
        }
    })
}

function g(e) {
    let {
        channel: t
    } = e;
    return (0, i.jsx)(h, {
        tooltipText: _.intl.string(_.t["6vrfgt"]),
        onClick: () => {
            (0, d.A)(t) ? (0, o.Py)(t) : r.default.disconnect()
        }
    })
}

function p(e) {
    let {
        channel: t
    } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(m, {
        channel: t
    }) : (0, i.jsx)(g, {
        channel: t
    })
}