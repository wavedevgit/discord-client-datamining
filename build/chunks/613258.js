/** chunk id: 613258, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(575593),
    o = n(331402),
    c = n(590180),
    u = n(929283),
    d = n(758836),
    g = n(289920);
let f = {
        x: 160,
        y: 160
    },
    m = [{
        left: 0,
        top: 20,
        rotation: -32,
        size: f,
        skuId: "1212569433839636530"
    }, {
        left: 110,
        top: 48,
        rotation: -24,
        size: f,
        skuId: "1144308439720394944"
    }, {
        left: 230,
        top: 12,
        rotation: 8,
        size: f,
        skuId: "1228251144065777765"
    }, {
        left: 354,
        top: 44,
        rotation: -48,
        size: f,
        skuId: "1343751620965564426"
    }, {
        left: 470,
        top: 52,
        rotation: 12,
        size: f,
        skuId: "1157407831348228141"
    }, {
        left: 600,
        top: 28,
        rotation: -4,
        size: f,
        skuId: "1197344326133502032"
    }, {
        left: 740,
        top: 12,
        rotation: -32,
        size: f,
        skuId: "1232071712695386162"
    }, {
        left: 870,
        top: 40,
        rotation: -20,
        size: f,
        skuId: "1220513977683935373"
    }, {
        left: 1010,
        top: 30,
        rotation: 15,
        size: f,
        skuId: "1144046002110738634"
    }, {
        left: 1140,
        top: 52,
        rotation: -18,
        size: f,
        skuId: "1271174324375519273"
    }, {
        left: 1270,
        top: 32,
        rotation: 25,
        size: f,
        skuId: "1237653964582031400"
    }, {
        left: 1400,
        top: 33,
        rotation: -5,
        size: f,
        skuId: "1217625794382401577"
    }],
    p = e => {
        let {
            peaking: t,
            transitioning: n,
            style: s
        } = e, f = window.innerHeight, [p, _] = l.useState(!1), b = m.map(e => {
            let {
                skuId: t
            } = e;
            return c.A.getProduct(t)
        });
        return l.useEffect(() => {
            n && setTimeout(() => {
                _(!0)
            }, d.H1)
        }, [n]), (0, r.jsx)("div", {
            style: s,
            className: a()(g.rA, {
                [g.Kb]: t,
                [g.pp]: p
            }),
            children: m.map((e, t) => {
                var l, s;
                let {
                    top: a,
                    left: c,
                    rotation: m,
                    size: p,
                    skuId: _
                } = e, h = null == (l = b[t]) ? void 0 : l.items[0], E = null == (s = b[t]) ? void 0 : s.type, v = E === i.R.AVATAR_DECORATION ? 384 : 512;
                return (0, r.jsxs)("div", {
                    className: g.LY,
                    style: {
                        top: n ? -f - v : a,
                        left: n ? "".concat(c - 75 - 350 * Math.random()) : c,
                        transform: "rotate(".concat(m, "deg)"),
                        height: p.y,
                        width: p.x,
                        transitionDelay: "".concat(Math.random() / 3, "s"),
                        transitionDuration: "".concat(d.H1 - 200 * Math.random(), "ms")
                    },
                    children: [null != h && E === i.R.AVATAR_DECORATION && (0, r.jsx)(u.i, {
                        item: h
                    }), null != h && E === i.R.PROFILE_EFFECT && (0, r.jsx)(o.A, {
                        skuId: h.skuId,
                        isHighlighted: !0
                    })]
                }, _ + t)
            })
        })
    }