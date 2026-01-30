/** chunk id: 343552, original params: e,l,t (module,exports,require) **/
t.d(l, {
    b: () => o
});
var r = t(627968),
    n = t(803805),
    i = t(11187),
    s = t(439401),
    a = t(867525);
let o = (e, l, t, o, u) => () => {
    let d = null != l ? l : t;
    if (null == d) return null;
    let {
        url: c,
        proxyURL: h,
        width: p,
        height: m
    } = d, g = null != h && "" !== h ? h : c, f = (0, i.mW)({
        providerName: u,
        thumbnail: o
    });
    return (0, r.jsx)(s.A, {
        width: p,
        height: m,
        src: g,
        gifSrc: f,
        url: null != e && "" !== e ? e : null != h && "" !== h ? h : c,
        format: null != t ? n.TL.VIDEO : n.TL.IMAGE,
        className: a.jj
    })
}