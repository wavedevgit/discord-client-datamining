/** chunk id: 613258, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(575593),
    o = n(770178),
    c = n(590180),
    d = n(929283),
    u = n(758836),
    g = n(289920);
let _ = ["1212569433839636530", "1144308439720394944", "1228251144065777765", "1343751620965564426", "1157407831348228141", "1197344326133502032", "1232071712695386162", "1144046002110738634", "1271174324375519273", "1237653964582031400", "1217625794382401577", "1462116613871636542", "1458472704469499965", "1447654091072344195", "1432550258839392376", "1409898407849365565", "1404558257065824347"],
    m = e => {
        let {
            config: t,
            baseLeft: n,
            transitioning: l
        } = e, r = window.innerHeight, a = c.A.getProduct(t.skuId), o = a?.items[0], u = a?.type, _ = n + t.horizontalJitter;
        return (0, s.jsx)("div", {
            className: g.LY,
            style: {
                top: l ? -r - 384 : t.top,
                left: l ? _ + t.transitionOffsetLeft : _,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration
            },
            children: null != o && u === i.R.AVATAR_DECORATION && (0, s.jsx)(d.i, {
                item: o
            })
        })
    },
    h = e => {
        let {
            peaking: t,
            transitioning: n,
            parentWidth: r
        } = e, [i, o] = l.useState(!1), [c, d] = l.useState([]), [h] = l.useState(() => [..._].sort(() => Math.random() - .5).map(e => ({
            skuId: e,
            top: 0 + 48 * Math.random(),
            rotation: -32 + 64 * Math.random(),
            horizontalJitter: -(20 * Math.random()),
            transitionOffsetLeft: -20 - 35 * Math.random(),
            transitionDelay: `${Math.random()/3}s`,
            transitionDuration: `${u.H1-200*Math.random()}ms`
        })));
        return l.useEffect(() => {
            if (null != r && r > 0) {
                let e = Math.max(1, Math.floor(r / 130)),
                    t = r / e;
                d(Array.from({
                    length: e
                }, (e, n) => ({
                    config: h[n % h.length],
                    baseLeft: n * t
                })))
            }
        }, [r, h]), l.useEffect(() => {
            n && setTimeout(() => o(!0), u.H1)
        }, [n]), (0, s.jsx)("div", {
            className: a()(g.rA, {
                [g.Kb]: t,
                [g.pp]: i
            }),
            children: c.map((e, t) => {
                let {
                    config: l,
                    baseLeft: r
                } = e;
                return (0, s.jsx)(m, {
                    config: l,
                    baseLeft: r,
                    transitioning: n
                }, l.skuId + t)
            })
        })
    },
    p = e => {
        let {
            peaking: t,
            transitioning: n
        } = e, r = l.useRef(null), [a, i] = l.useState(0), c = l.useCallback(() => {
            null != r.current && i(r.current.offsetWidth)
        }, []);
        return (0, o.g)(r, c), (0, s.jsx)("div", {
            ref: r,
            className: g.eL,
            children: (0, s.jsx)(h, {
                peaking: t,
                transitioning: n,
                parentWidth: a
            })
        })
    }