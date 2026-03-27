/** chunk id: 654820 params = (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    s = n(520698),
    a = n(412780),
    r = n(842608);

function o(e) {
    let {
        currentUserId: t,
        participant: n
    } = e, o = (0, s.A)(n.type), [c, d] = l.useState(), [u, h] = l.useState(), [m, A] = l.useState(), g = n.id.split(":").at(-1), p = t === g, f = l.useCallback((e, t, n) => {
        var i, l;
        let s = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t);
        d(s?.codec ?? "unknown"), h(void 0 === (i = s?.resolution) || 0 === i.width && 0 === i.height ? "unknown" : i.width + " x " + i.height), A(s?.bitrateEstimate !== void 0 ? (l = s.bitrateEstimate, `${(l/1e3).toFixed(2)} Kbps`) : "unknown")
    }, []);
    return l.useEffect(() => {
        let e = () => f(g, o, p);
        e();
        let t = setInterval(e, 1e3);
        return () => clearInterval(t)
    }, [p, g, o, f]), (0, i.jsxs)("div", {
        className: r.w,
        children: [(0, i.jsx)("div", {
            children: (0, i.jsx)("strong", {
                children: "Stream Info"
            })
        }), (0, i.jsxs)("div", {
            className: r.l,
            children: [(0, i.jsx)("span", {
                children: "Video Codec: "
            }), (0, i.jsx)("strong", {
                children: c
            })]
        }), (0, i.jsxs)("div", {
            className: r.l,
            children: [(0, i.jsx)("span", {
                children: "Resolution: "
            }), (0, i.jsx)("strong", {
                children: u
            })]
        }), p && (0, i.jsxs)("div", {
            className: r.l,
            children: [(0, i.jsx)("span", {
                children: "Bitrate Estimate: "
            }), (0, i.jsx)("strong", {
                children: m
            })]
        })]
    })
}