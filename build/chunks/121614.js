/** chunk id: 121614, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => m
}), r(638769), r(321073), r(896048);
var n = r(627968);
r(64700);
var a = r(735438),
    i = r.n(a),
    l = r(397927),
    s = r(828904),
    o = r(974175),
    d = r(985018),
    c = r(473169);
let u = {
    userId: 1,
    dataType: 2,
    savedKB: 3,
    numFrames: 4,
    startTimestampMs: 5,
    endTimestampMs: 6,
    width: 7,
    height: 8,
    audioChannels: 9,
    sampleRate: 10
};

function m(e) {
    let {
        clips: t
    } = e;
    if (null == t) return (0, n.jsx)(l.y$y, {
        type: l.y$y.Type.SPINNING_CIRCLE
    });
    let r = i().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(o.q7, {
            label: t,
            value: e
        }, t)
    });
    return r.push((0, n.jsx)(o.q7, {
        label: "Frames Per Second",
        value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
    }, "framerate")), (0, n.jsxs)(l.BJc, {
        children: [(0, n.jsx)(l.Heading, {
            variant: "heading-md/medium",
            children: d.intl.string(d.t.MKrFKE)
        }), (0, s.C6)(r), function(e) {
            if (null != e.buffers) return e.buffers.map(e => {
                let t = [];
                for (let r of Object.keys(e).sort((e, t) => {
                        let r = u[e],
                            n = u[t];
                        return r !== n ? void 0 === r ? 1 : void 0 === n ? -1 : r - n : e > t ? 1 : -1
                    })) {
                    let a = e[r];
                    null !== a && "key" !== r && t.push((0, n.jsx)(o.q7, {
                        label: r,
                        value: a
                    }, r))
                }
                return (0, n.jsxs)("div", {
                    className: c.C2,
                    children: [(0, n.jsx)(l.Heading, {
                        variant: "heading-md/medium",
                        children: "Buffer: ".concat(e.key)
                    }), (0, s.C6)(t)]
                }, "Buffer: ".concat(e.key))
            })
        }(t)]
    })
}