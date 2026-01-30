/** chunk id: 828904, original params: e,t,r (module,exports,require) **/
r.d(t, {
    C6: () => R,
    HI: () => S
}), r(321073), r(638769), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(23339),
    o = r(311907),
    d = r(397927),
    c = r(233545),
    u = r(684339),
    m = r(235986),
    p = r(401901),
    y = r(696451),
    h = r(430452),
    g = r(383501),
    A = r(412780),
    f = r(287809),
    v = r(427262),
    b = r(974175),
    C = r(731854),
    E = r(518959),
    x = r(473169);
let D = {
    [C.r8.NO_OVERRIDE]: "None",
    [C.r8.LOW]: "Low Quality Stream",
    [C.r8.HIGH]: "High Quality Stream"
};

function R(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(m.A, {
            basis: "50%",
            grow: 0
        }, r++)); e.length > 0;) t.push((0, n.jsx)(m.A, {
        basis: "50%",
        grow: 0,
        children: e.splice(0, 2)
    }, r++));
    return t
}
let F = {
    ssrc: 1,
    codec: 2
};

function S(e) {
    let {
        streams: t,
        context: r,
        mediaEngineConnectionId: i,
        userId: S,
        videoStreams: j,
        title: P,
        showUserInfo: N = !1,
        showSimulcastOverride: I = !1
    } = e, [k, B] = a.useState("0"), w = (0, o.bG)([g.A], () => N ? g.A.getGuildId() : null), T = (0, o.bG)([f.default], () => N && null != S ? f.default.getUser(S) : null), L = (0, o.bG)([y.Ay], () => N && null != w && null != S ? y.Ay.getNick(w, S) : null);
    if (null == t || N && null == S || 0 === t.length) return (0, n.jsx)(d.y$y, {
        type: d.y$y.Type.SPINNING_CIRCLE
    });
    let O = P;
    N && null != T && (O = "".concat(P, " — ").concat(null != L ? L : v.Ay.getName(T)));
    let M = t.map((e, t) => {
            let r, a;
            return (0, n.jsx)(d.VQ0.Item, {
                id: t.toString(),
                children: (r = (0, s.$G)(e.type), a = "", "resolution" in e && null != e.resolution && 0 !== e.resolution.width && 0 !== e.resolution.height && (a = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")), r + a)
            }, t.toString())
        }),
        G = Math.min(parseInt(k, 10), t.length - 1),
        H = t[G],
        U = function(e, t, r, a, i) {
            let s, o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                    let r = F[e],
                        n = F[t];
                    return r !== n ? void 0 === r ? 1 : void 0 === n ? -1 : r - n : A.iA[e] !== A.iA[t] ? A.iA[e] ? 1 : -1 : e > t ? 1 : -1
                })) {
                let r = e[t];
                b.R[t] || void 0 === r || o.push((0, n.jsx)(b.q7, {
                    section: a,
                    label: t,
                    value: r
                }, t))
            }
            return (0, n.jsxs)("div", {
                className: x.C2,
                children: ["video" === e.type && null != r && null != a && null != i && (null != (s = i.get(r, a, e.ssrc)) ? (0, n.jsx)("div", {
                    className: l()(E.tN, x.C2),
                    children: (0, n.jsx)(p.A, {
                        streamId: s,
                        videoComponent: h.A.getMediaEngine().Video,
                        paused: !1,
                        videoSpinnerContext: u.u.REPLAY_VIDEO_STREAM,
                        userId: a
                    })
                }) : null), R(o)]
            }, "".concat(e.type, " + ").concat(e.ssrc))
        }(H, 0, i, S, j),
        q = I && "video" === H.type && null != i && null != S && null != j && (0, n.jsx)(m.A, {
            className: x.SX,
            children: (0, n.jsx)(m.A.Child, {
                basis: "100%",
                children: (0, n.jsx)(d.l6P, {
                    label: "Simulcast Override",
                    value: A.Ay.getSimulcastDebugOverride(S, r),
                    onSelectionChange: e => {
                        c.z0(S, r, e)
                    },
                    options: Object.values(C.r8).map(e => ({
                        id: e,
                        value: e,
                        label: D[e]
                    })),
                    selectionMode: "single",
                    fullWidth: !0
                })
            })
        });
    return (0, n.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, n.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: O
        }), (0, n.jsx)(d.VQ0, {
            type: "top",
            look: "brand",
            selectedItem: k,
            onItemSelect: B,
            className: E.$H,
            children: M
        }), U, q]
    })
}