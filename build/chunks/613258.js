/** chunk id: 613258, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => p
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(575593),
    o = s(770178),
    c = s(590180),
    d = s(929283),
    u = s(758836),
    _ = s(397250);
let g = ["1212569433839636530", "1144308439720394944", "1228251144065777765", "1343751620965564426", "1157407831348228141", "1197344326133502032", "1232071712695386162", "1144046002110738634", "1271174324375519273", "1237653964582031400", "1217625794382401577", "1462116613871636542", "1458472704469499965", "1447654091072344195", "1432550258839392376", "1409898407849365565", "1404558257065824347"],
    m = e => {
        let {
            config: t,
            baseLeft: s,
            transitioning: r
        } = e, l = window.innerHeight, i = c.A.getProduct(t.skuId), o = i?.items[0], u = i?.type, g = s + t.horizontalJitter;
        return (0, n.jsx)("div", {
            className: _.LY,
            style: {
                top: r ? -l - 384 : t.top,
                left: r ? g + t.transitionOffsetLeft : g,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration
            },
            children: null != o && u === a.R.AVATAR_DECORATION && (0, n.jsx)(d.i, {
                item: o
            })
        })
    },
    h = e => {
        let {
            peaking: t,
            transitioning: s,
            parentWidth: l
        } = e, [a, o] = r.useState(!1), [c, d] = r.useState([]), [h] = r.useState(() => [...g].sort(() => Math.random() - .5).map(e => ({
            skuId: e,
            top: 0 + 48 * Math.random(),
            rotation: -32 + 64 * Math.random(),
            horizontalJitter: -(20 * Math.random()),
            transitionOffsetLeft: -20 - 35 * Math.random(),
            transitionDelay: `${Math.random()/3}s`,
            transitionDuration: `${u.H1-200*Math.random()}ms`
        })));
        return r.useEffect(() => {
            if (null != l && l > 0) {
                let e = Math.max(1, Math.floor(l / 130)),
                    t = l / e;
                d(Array.from({
                    length: e
                }, (e, s) => ({
                    config: h[s % h.length],
                    baseLeft: s * t
                })))
            }
        }, [l, h]), r.useEffect(() => {
            s && setTimeout(() => o(!0), u.H1)
        }, [s]), (0, n.jsx)("div", {
            className: i()(_.rA, {
                [_.Kb]: t,
                [_.pp]: a
            }),
            children: c.map((e, t) => {
                let {
                    config: r,
                    baseLeft: l
                } = e;
                return (0, n.jsx)(m, {
                    config: r,
                    baseLeft: l,
                    transitioning: s
                }, r.skuId + t)
            })
        })
    },
    p = e => {
        let {
            peaking: t,
            transitioning: s
        } = e, l = r.useRef(null), [i, a] = r.useState(0), c = r.useCallback(() => {
            null != l.current && a(l.current.offsetWidth)
        }, []);
        return (0, o.g)(l, c), (0, n.jsx)("div", {
            ref: l,
            className: _.eL,
            children: (0, n.jsx)(h, {
                peaking: t,
                transitioning: s,
                parentWidth: i
            })
        })
    }