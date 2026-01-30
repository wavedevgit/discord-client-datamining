/** chunk id: 822768, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n(607470),
    s = n(860923),
    l = n(126418);
let c = 1e4,
    u = 5e3,
    d = [128, 1792],
    f = [64, 360],
    p = [.15, .5],
    _ = [-15, 15],
    h = () => {
        let e = i.useRef(null),
            t = (0, s.A)(),
            [n, h] = i.useState(!1),
            [m, g] = i.useState([0, 0]),
            [E, y] = i.useState(.5),
            [b, O] = i.useState(0),
            [v, A] = i.useState(!1);
        return i.useEffect(() => {
            let t = null,
                r = e.current;
            if (null != r) {
                if (!1 === n) {
                    let e = Math.random() * c + u;
                    t = window.setTimeout(() => {
                        h(!0), g([(0, a.random)(d[0], d[1]), (0, a.random)(f[0], f[1])]), y((0, a.random)(p[0], p[1])), O((0, a.random)(_[0], _[1])), A(Math.random() > .5)
                    }, e)
                }
                return !0 === n && r.paused && (r.currentTime = 0, r.play()), () => {
                    window.clearTimeout(t)
                }
            }
        }, [n]), (0, r.jsx)(o.A, {
            ref: e,
            className: l.d,
            style: {
                transform: "translate(".concat(m[0], "px, ").concat(m[1], "px) scale(").concat(v ? -1 * E : E, ", ").concat(E, ") rotate(").concat(b, "deg)")
            },
            src: null == t ? void 0 : t.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                h(!1)
            }
        })
    }