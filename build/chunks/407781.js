/** Chunk was on web.js **/
/** chunk id: 407781, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(457529);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n(883885),
    s = n.n(o),
    l = n(667050),
    c = n(194486),
    u = n(196305);
let d = async e => {
    var t;
    let {
        animationType: n,
        animationId: r,
        url: i,
        shouldResize: o
    } = e, s = null != (t = l.Bf[n]) ? t : l.Bf[c.B.BASIC], u = JSON.parse(JSON.stringify(null != r && r < s.length ? s[r] : (0, a.sample)(s)));
    return u.assets[0].p = o ? await (0, l.tm)(i) : i, u
};

function f(e) {
    let {
        containerDimensions: t,
        effect: n,
        onComplete: a
    } = e, o = i.useRef(null);
    return i.useEffect(() => {
        let e;
        return !async function() {
            if (null != o.current) {
                let t = await d(n);
                e = s().loadAnimation({
                    container: o.current,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !0,
                    animationData: t,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMax slice"
                    }
                }), n.animationType === c.B.PREMIUM && e.setSpeed(.8), e.addEventListener("complete", () => null == a ? void 0 : a(n.id))
            }
        }(), () => {
            null == e || e.destroy()
        }
    }, [a, n]), (0, r.jsx)("div", {
        className: u.Q,
        style: {
            height: t.height,
            width: t.width
        },
        ref: o
    })
}