/** chunk id: 936636, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(808380),
    c = n(934551),
    o = n(990078),
    d = n(985018),
    u = n(851822);
let m = [r.Y.DESKTOP, r.Y.XBOX, r.Y.PLAYSTATION, r.Y.NINTENDO];

function x(e) {
    let {
        platform: t,
        ...n
    } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, i.jsx)(c.ScreenIcon, {
                size: "xs",
                ...n
            });
        case r.Y.XBOX:
            return (0, i.jsx)(c.XboxNeutralIcon, {
                size: "xs",
                ...n
            });
        case r.Y.PLAYSTATION:
            return (0, i.jsx)(c.PlaystationNeutralIcon, {
                size: "xs",
                ...n
            });
        case r.Y.NINTENDO:
            return (0, i.jsx)(c.NintendoSwitchNeutralIcon, {
                size: "xs",
                ...n
            });
        default:
            return null
    }
}

function g(e) {
    let {
        platforms: t
    } = e;
    return (0, i.jsx)("div", {
        className: s()(u.nM, u.Lc),
        style: {
            alignItems: "center"
        },
        children: t.map(e => (0, i.jsx)(o.m, {
            text: function(e) {
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
            }(e),
            children: (0, i.jsx)(x, {
                platform: e
            })
        }, e))
    })
}

function h(e) {
    let {
        detectedGame: t,
        className: n
    } = e, a = l.useMemo(() => {
        let e = new Set(t.platforms),
            n = [...e];
        return !e.has(r.Y.DESKTOP) && (e.has(r.Y.MACOS) || e.has(r.Y.LINUX)) && n.push(r.Y.DESKTOP), n.filter(e => m.includes(e))
    }, [t.platforms]);
    return 0 === a.length ? null : (0, i.jsx)("div", {
        className: s()(u.fi, u.iH, n),
        children: a.length > 0 && (0, i.jsx)(g, {
            platforms: a
        })
    })
}