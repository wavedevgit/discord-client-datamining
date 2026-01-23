/** Chunk was on 31748 **/
/** chunk id: 654820, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048), n(747238), n(134528), n(947204);
var r = n(627968),
    l = n(64700),
    i = n(520698),
    a = n(412780),
    o = n(412958);

function s(e) {
    let {
        currentUserId: t,
        participant: n
    } = e, s = (0, i.A)(n.type), [c, u] = l.useState(), [d, f] = l.useState(), [p, g] = l.useState(), m = n.id.split(":").at(-1), _ = t === m, h = l.useCallback((e, t, n) => {
        var r, l, i;
        let o = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t);
        u(null != (r = null == o ? void 0 : o.codec) ? r : "unknown"), f(void 0 === (l = null == o ? void 0 : o.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), g((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? (i = o.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
    }, []);
    return l.useEffect(() => {
        let e = () => h(m, s, _);
        e();
        let t = setInterval(e, 1e3);
        return () => clearInterval(t)
    }, [_, m, s, h]), (0, r.jsxs)("div", {
        className: o.w,
        children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("strong", {
                children: "Stream Info"
            })
        }), (0, r.jsxs)("div", {
            className: o.l,
            children: [(0, r.jsx)("span", {
                children: "Video Codec: "
            }), (0, r.jsx)("strong", {
                children: c
            })]
        }), (0, r.jsxs)("div", {
            className: o.l,
            children: [(0, r.jsx)("span", {
                children: "Resolution: "
            }), (0, r.jsx)("strong", {
                children: d
            })]
        }), _ && (0, r.jsxs)("div", {
            className: o.l,
            children: [(0, r.jsx)("span", {
                children: "Bitrate Estimate: "
            }), (0, r.jsx)("strong", {
                children: p
            })]
        })]
    })
}