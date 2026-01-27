/** Chunk was on web.js **/
/** chunk id: 40493, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(342494),
    o = n(807098),
    s = n(49999),
    l = n(985018);

function c(e) {
    var t, n;
    let {
        onComplete: c,
        onCheckItOutClick: u,
        markAsDismissed: d,
        coachmarkConfig: f,
        children: p
    } = e, _ = (0, o.T)(null == f ? void 0 : f.asset), h = i.useRef(null), m = i.useRef(null), [g, E] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = h.current,
                    t = m.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                E(n.left + n.width / 2 - (r.left + r.width / 2))
            },
            t = new ResizeObserver(e),
            n = h.current,
            r = m.current;
        return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect()
    }, []);
    let y = {
            text: l.intl.string(l.t.RzWDqY),
            onClick: () => {
                u(), c(), d(s.i.TAKE_ACTION)
            }
        },
        b = () => {
            c(), d(s.i.USER_DISMISS)
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            ref: h,
            children: p
        }), (0, r.jsx)(a.HZ, {
            targetElementRef: h,
            shouldShow: !0,
            position: "top",
            align: "center",
            title: null != (t = null == f ? void 0 : f.header) ? t : "",
            body: null != (n = null == f ? void 0 : f.body) ? n : "",
            assetUrl: null != _ ? _ : "",
            action: y,
            caretConfig: {
                align: "custom",
                customOffset: g
            },
            onRequestClose: b,
            popoverRef: m
        })]
    })
}