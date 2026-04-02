/** chunk id: 936636 params = (module,exports,require) **/
n.d(t, {
    A: () => f,
    s: () => g
});
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(808380),
    s = n(934551),
    c = n(990078),
    o = n(504186),
    d = n(985018),
    u = n(325952);

function m(e) {
    switch (e) {
        case r.Y.DESKTOP:
            return d.intl.string(d.t.KT6uCJ);
        case r.Y.XBOX:
            return d.intl.string(d.t.DDWUJp);
        case r.Y.PLAYSTATION:
            return d.intl.string(d.t.fzMz2s);
        case r.Y.NINTENDO:
            return d.intl.string(d.t.AMW8je);
        default:
            return null
    }
}

function x(e) {
    let {
        platform: t,
        ...n
    } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, a.jsx)(s.ScreenIcon, {
                size: "xs",
                ...n
            });
        case r.Y.XBOX:
            return (0, a.jsx)(s.XboxNeutralIcon, {
                size: "xs",
                ...n
            });
        case r.Y.PLAYSTATION:
            return (0, a.jsx)(s.PlaystationNeutralIcon, {
                size: "xs",
                ...n
            });
        case r.Y.NINTENDO:
            return (0, a.jsx)(s.NintendoSwitchNeutralIcon, {
                size: "xs",
                ...n
            });
        default:
            return null
    }
}

function h(e) {
    let {
        platforms: t
    } = e;
    return (0, a.jsx)("div", {
        className: i()(u.nM, u.Lc),
        style: {
            alignItems: "center"
        },
        children: t.map(e => (0, a.jsx)(c.m, {
            text: m(e),
            children: (0, a.jsx)(x, {
                platform: e
            })
        }, e))
    })
}

function g(e) {
    let {
        platform: t
    } = e;
    return (0, a.jsx)(c.m, {
        text: m(t),
        children: (0, a.jsx)(x, {
            platform: t
        })
    }, t)
}

function f(e) {
    let {
        detectedGame: t,
        className: n
    } = e, l = (0, o.A)(t);
    return 0 === l.length ? null : (0, a.jsx)("div", {
        className: i()(u.fi, u.iH, n),
        children: l.length > 0 && (0, a.jsx)(h, {
            platforms: l
        })
    })
}