/** chunk id: 20796, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => f
});
var l = n(627968),
    r = n(64700),
    i = n(808380),
    s = n(397927),
    a = n(429913),
    o = n(263577),
    u = n(769015),
    c = n(790381),
    d = n(266080),
    h = n(652215);
let g = {
    [i.Y.XBOX]: d.A,
    [i.Y.PLAYSTATION]: c.A
};

function f(e) {
    let {
        activities: t,
        gameProfileEntry: n,
        gameIconSize: i,
        platformIconSizePx: c
    } = e, d = r.useMemo(() => t.find(e => {
        let {
            type: t
        } = e;
        return t === h.$pd.PLAYING
    }), [t]), f = (0, a.h)(null == d ? void 0 : d.application_id);
    return null == d ? null : function(e) {
        var t;
        let {
            gameProfileEntry: n,
            gameApplication: r,
            gameIconSize: i,
            platformIconSizePx: a
        } = e, c = null == n || null == (t = n.extra) ? void 0 : t.platform, d = null != c ? g[c] : null, h = null != d ? (0, l.jsx)(d, {
            width: a,
            height: a,
            color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT
        }) : null, f = null == r ? void 0 : r.getIconURL(a), p = null != f ? (0, l.jsx)(o.V, {
            src: f,
            alt: null == r ? void 0 : r.name,
            size: a
        }) : null;
        return (0, l.jsx)(u.A, {
            game: r,
            size: i,
            unknownGameIconFallback: null != h ? h : p
        })
    }({
        gameProfileEntry: n,
        gameApplication: f,
        gameIconSize: i,
        platformIconSizePx: c
    })
}