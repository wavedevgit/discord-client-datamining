/** chunk id: 809115 params = (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => A,
    l: () => E
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(775602),
    o = n(820883),
    c = n(837921),
    u = n(985018),
    d = n(609836);
let _ = c.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;

function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        i = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        s = r.useMemo(() => {
            let n = t || !i && !e;
            return (0, o.q)(n)
        }, [t, i, e]);
    return {
        avatarSrc: s,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => n(!0), []),
            onMouseLeave: r.useCallback(() => n(!1), [])
        }
    }
}

function E(e) {
    let {
        src: t
    } = e;
    return (0, i.jsx)("div", {
        className: d.H,
        children: (0, i.jsx)(_, {
            src: t,
            size: s._3J.SIZE_40,
            "aria-label": u.intl.string(u.t.hG1StD)
        })
    })
}