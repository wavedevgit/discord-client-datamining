/** Chunk was on web.js **/
/** chunk id: 771273, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => m,
    B4: () => _,
    GD: () => h
});
var r = n(627968),
    i = n(64700),
    a = n(299619),
    s = n(397927),
    o = n(475743),
    l = n(998304),
    c = n(854987),
    u = n(109138),
    d = n(207289),
    f = n(934658);
let p = 500;
class _ extends EventTarget {}
let h = i.createContext(new _);

function m(e) {
    var t;
    let {
        slide: n
    } = e, _ = i.useRef(null), m = i.useRef(null), g = i.useRef(0), E = i.useRef(Date.now()), y = i.useContext(h), b = i.useContext(c.P), O = (0, s.rdh)(b.gradient[0]).hex(), v = (0, s.rdh)(b.gradient[1]).hex(), A = null != (t = (0, o.A)(b)) ? t : b, I = (0, s.rdh)(A.gradient[0]).hex(), S = (0, s.rdh)(A.gradient[1]).hex();
    return i.useEffect(() => {
        let e = () => {
            let t = _.current,
                n = m.current,
                r = null == t ? void 0 : t.getContext("2d");
            if (null != t && null != n && null != r) {
                if (n.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                    t.width = window.innerWidth, t.height = window.innerHeight, (0, u.A)(n, t, r), y.dispatchEvent(new CustomEvent("frame", {
                        detail: {
                            context: r,
                            canvas: t
                        }
                    })), r.save();
                    let e = r.createLinearGradient(0, 0, t.width, t.height),
                        i = Math.min((Date.now() - E.current) / p, 1),
                        a = i >= 1 ? O : (0, l.De)(I, O, i),
                        s = i >= 1 ? v : (0, l.De)(S, v, i);
                    e.addColorStop(0, a), e.addColorStop(1, s), r.fillStyle = e, r.globalCompositeOperation = "multiply", r.fillRect(0, 0, t.width, t.height), r.restore(), y.dispatchEvent(new CustomEvent("frameEnd", {
                        detail: {
                            context: r,
                            canvas: t
                        }
                    }))
                }
                g.current = requestAnimationFrame(e)
            }
        };
        return e(), () => cancelAnimationFrame(g.current)
    }, [v, O, y, S, I]), i.useEffect(() => {
        E.current = Date.now()
    }, [n]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("canvas", {
            className: d.J,
            ref: _
        }), (0, r.jsx)(a.A, {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: d.R,
            ref: m,
            "aria-hidden": !0,
            children: (0, r.jsx)("source", {
                src: f.A,
                type: "video/webm"
            })
        })]
    })
}