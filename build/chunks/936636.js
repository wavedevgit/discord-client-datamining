/** chunk id: 936636 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(808380),
    c = n(934551),
    o = n(990078),
    d = n(985018),
    u = n(728528);
let m = [s.Y.DESKTOP, s.Y.XBOX, s.Y.PLAYSTATION, s.Y.NINTENDO];

function x(e) {
    let {
        platform: t,
        ...n
    } = e;
    switch (t) {
        case s.Y.DESKTOP:
            return (0, a.jsx)(c.ScreenIcon, {
                size: "xs",
                ...n
            });
        case s.Y.XBOX:
            return (0, a.jsx)(c.XboxNeutralIcon, {
                size: "xs",
                ...n
            });
        case s.Y.PLAYSTATION:
            return (0, a.jsx)(c.PlaystationNeutralIcon, {
                size: "xs",
                ...n
            });
        case s.Y.NINTENDO:
            return (0, a.jsx)(c.NintendoSwitchNeutralIcon, {
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
        className: r()(u.nM, u.Lc),
        style: {
            alignItems: "center"
        },
        children: t.map(e => (0, a.jsx)(o.m, {
            text: function(e) {
                switch (e) {
                    case s.Y.DESKTOP:
                        return d.intl.string(d.t.KT6uCJ);
                    case s.Y.XBOX:
                        return d.intl.string(d.t.DDWUJp);
                    case s.Y.PLAYSTATION:
                        return d.intl.string(d.t.fzMz2s);
                    case s.Y.NINTENDO:
                        return d.intl.string(d.t.AMW8je);
                    default:
                        return null
                }
            }(e),
            children: (0, a.jsx)(x, {
                platform: e
            })
        }, e))
    })
}

function f(e) {
    let {
        detectedGame: t,
        className: n
    } = e, i = l.useMemo(() => {
        let e = new Set(t.platforms),
            n = [...e];
        return !e.has(s.Y.DESKTOP) && (e.has(s.Y.MACOS) || e.has(s.Y.LINUX)) && n.push(s.Y.DESKTOP), n.filter(e => m.includes(e))
    }, [t.platforms]);
    return 0 === i.length ? null : (0, a.jsx)("div", {
        className: r()(u.fi, u.iH, n),
        children: i.length > 0 && (0, a.jsx)(h, {
            platforms: i
        })
    })
}