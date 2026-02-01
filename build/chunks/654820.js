/** chunk id: 654820, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048), n(747238), n(134528), n(947204);
var l = n(627968),
    r = n(64700),
    i = n(520698),
    a = n(412780),
    s = n(412958);

function o(e) {
    let {
        currentUserId: t,
        participant: n
    } = e, o = (0, i.A)(n.type), [c, u] = r.useState(), [d, h] = r.useState(), [p, f] = r.useState(), m = n.id.split(":").at(-1), g = t === m, A = r.useCallback((e, t, n) => {
        var l, r, i;
        let s = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t);
        u(null != (l = null == s ? void 0 : s.codec) ? l : "unknown"), h(void 0 === (r = null == s ? void 0 : s.resolution) || 0 === r.width && 0 === r.height ? "unknown" : r.width + " x " + r.height), f((null == s ? void 0 : s.bitrateEstimate) !== void 0 ? (i = s.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
    }, []);
    return r.useEffect(() => {
        let e = () => A(m, o, g);
        e();
        let t = setInterval(e, 1e3);
        return () => clearInterval(t)
    }, [g, m, o, A]), (0, l.jsxs)("div", {
        className: s.w,
        children: [(0, l.jsx)("div", {
            children: (0, l.jsx)("strong", {
                children: "Stream Info"
            })
        }), (0, l.jsxs)("div", {
            className: s.l,
            children: [(0, l.jsx)("span", {
                children: "Video Codec: "
            }), (0, l.jsx)("strong", {
                children: c
            })]
        }), (0, l.jsxs)("div", {
            className: s.l,
            children: [(0, l.jsx)("span", {
                children: "Resolution: "
            }), (0, l.jsx)("strong", {
                children: d
            })]
        }), g && (0, l.jsxs)("div", {
            className: s.l,
            children: [(0, l.jsx)("span", {
                children: "Bitrate Estimate: "
            }), (0, l.jsx)("strong", {
                children: p
            })]
        })]
    })
}