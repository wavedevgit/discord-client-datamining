/** chunk id: 20796 params = (module,exports,require) **/
n.d(t, {
    B: () => f
});
var i = n(627968),
    l = n(64700),
    r = n(808380),
    s = n(397927),
    a = n(429913),
    o = n(263577),
    u = n(769015),
    d = n(790381),
    c = n(266080),
    h = n(243612),
    g = n(70191);
let m = {
    [r.Y.XBOX]: c.A,
    [r.Y.PLAYSTATION]: d.A
};

function f(e) {
    let {
        activities: t,
        gameProfileEntry: n,
        gameIconSize: r,
        platformIconSizePx: d
    } = e, c = (0, h.b4)(), f = l.useMemo(() => {
        let e = t.find(g.A);
        if (null != c) {
            let n = c.altId ?? c.id;
            return t.find(e => e.application_id === n) ?? e
        }
        return e
    }, [t, c]), A = (0, a.h)(f?.application_id);
    return null == f ? null : function(e) {
        let {
            gameProfileEntry: t,
            gameApplication: n,
            gameIconSize: l,
            platformIconSizePx: r
        } = e, a = t?.extra?.platform, d = null != a ? m[a] : null, c = null != d ? (0, i.jsx)(d, {
            width: r,
            height: r,
            color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT
        }) : null, h = n?.getIconURL(r), g = null != h ? (0, i.jsx)(o.V, {
            src: h,
            alt: n?.name,
            size: r
        }) : null;
        return (0, i.jsx)(u.A, {
            game: n,
            size: l,
            unknownGameIconFallback: c ?? g
        })
    }({
        gameProfileEntry: n,
        gameApplication: A,
        gameIconSize: r,
        platformIconSizePx: d
    })
}