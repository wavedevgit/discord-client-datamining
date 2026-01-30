/** chunk id: 809115, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => m,
    l: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(820883),
    c = n(837921),
    u = n(985018),
    d = n(906135);
let p = c.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;

function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        a = i.useMemo(() => {
            let n = t || !r && !e;
            return (0, o.q)(n)
        }, [t, r, e]);
    return {
        avatarSrc: a,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), [])
        }
    }
}

function f(e) {
    let {
        src: t
    } = e;
    return (0, r.jsx)("div", {
        className: d.H,
        children: (0, r.jsx)(p, {
            src: t,
            size: a._3J.SIZE_40,
            "aria-label": u.intl.string(u.t.hG1StD)
        })
    })
}