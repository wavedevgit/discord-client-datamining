/** chunk id: 936636, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => h
}), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(808380),
    c = i(934551),
    o = i(990078),
    d = i(985018),
    u = i(728528);
let m = [r.Y.DESKTOP, r.Y.XBOX, r.Y.PLAYSTATION, r.Y.NINTENDO];

function x(e) {
    let {
        platform: t,
        ...i
    } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, n.jsx)(c.ScreenIcon, {
                size: "xs",
                ...i
            });
        case r.Y.XBOX:
            return (0, n.jsx)(c.XboxNeutralIcon, {
                size: "xs",
                ...i
            });
        case r.Y.PLAYSTATION:
            return (0, n.jsx)(c.PlaystationNeutralIcon, {
                size: "xs",
                ...i
            });
        case r.Y.NINTENDO:
            return (0, n.jsx)(c.NintendoSwitchNeutralIcon, {
                size: "xs",
                ...i
            });
        default:
            return null
    }
}

function g(e) {
    let {
        platforms: t
    } = e;
    return (0, n.jsx)("div", {
        className: s()(u.nM, u.Lc),
        style: {
            alignItems: "center"
        },
        children: t.map(e => (0, n.jsx)(o.m, {
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
            children: (0, n.jsx)(x, {
                platform: e
            })
        }, e))
    })
}

function h(e) {
    let {
        detectedGame: t,
        className: i
    } = e, a = l.useMemo(() => {
        let e = new Set(t.platforms),
            i = [...e];
        return !e.has(r.Y.DESKTOP) && (e.has(r.Y.MACOS) || e.has(r.Y.LINUX)) && i.push(r.Y.DESKTOP), i.filter(e => m.includes(e))
    }, [t.platforms]);
    return 0 === a.length ? null : (0, n.jsx)("div", {
        className: s()(u.fi, u.iH, i),
        children: a.length > 0 && (0, n.jsx)(g, {
            platforms: a
        })
    })
}