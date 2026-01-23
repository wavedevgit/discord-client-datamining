/** Chunk was on 96811 **/
/** chunk id: 598032, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => w
}), r(896048);
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    s = r(141931),
    a = r(311907),
    o = r(397927),
    c = r(627363),
    d = r(769015),
    u = r(74848),
    f = r(430452),
    h = r(723702),
    p = r(688465),
    x = r(461430),
    m = r(56439),
    j = r(654291),
    g = r(420659),
    _ = r(753070),
    v = r(731854),
    b = r(191850),
    y = r(985018),
    S = r(607186);

function O() {
    return (0, n.jsx)("span", {
        className: S.gO,
        children: "•"
    })
}

function A(e) {
    let {
        source: t
    } = e, {
        data: r
    } = (0, c.YY)(null != t && (0, j.l)(t) ? t.id : void 0);
    return null == t ? (0, n.jsx)(o.Fzq, {
        className: S.Jd,
        size: "md",
        color: "currentColor"
    }) : (0, j.l)(t) ? (0, n.jsx)(d.A, {
        game: r,
        pid: t.pid
    }) : null == t.icon || "" === t.icon ? (0, n.jsx)(o.Fzq, {
        className: S.Jd,
        size: "md",
        color: "currentColor"
    }) : (0, n.jsx)("img", {
        src: t.icon,
        alt: "",
        className: S.pI
    })
}

function w() {
    var e, t, r, i;
    let [{
        preset: c,
        resolution: d,
        fps: j,
        muteStreamAudio: w,
        selectedSource: C,
        sourceType: E,
        audioSourceId: I
    }] = (0, p.tS)(), [N, T] = (0, u.tR)(v.oh.AUDIO_INPUT, {
        location: "StreamSettingsSummary"
    }), R = N.concat(T), [P, M] = null != (e = (0, g.A)(c)) ? e : [d, j], D = (0, x.K)(c), U = (0, m.b)(P), G = E === s.fS.CAMERA, L = null != C, k = null != C ? null == C || null == (r = C.id) ? void 0 : r.startsWith(s.fS.CAMERA) : G, F = c === _.jQ.PRESET_AUTO, H = L ? void 0 : c === _.jQ.PRESET_VIDEO ? y.intl.string(b.default.MuHUFe) : c === _.jQ.PRESET_DOCUMENTS ? y.intl.string(b.default.y0JuYR) : c === _.jQ.PRESET_AUTO ? y.intl.string(b.default.m4jtlc) : void 0, B = (0, a.bG)([f.A], () => f.A.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, n.jsxs)("div", {
        className: S.zr,
        children: [L && (0, n.jsx)(A, {
            source: C
        }), (0, n.jsxs)("div", {
            className: S.z,
            children: [(0, n.jsx)(o.Text, {
                className: S.fB,
                variant: "text-md/semibold",
                color: "text-strong",
                children: L ? null != (t = null == C ? void 0 : C.name) ? t : y.intl.string(b.default["hJMA+x"]) : D
            }), (0, n.jsxs)(o.Text, {
                className: S.kI,
                variant: "text-xs/medium",
                color: "text-muted",
                children: [L && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("span", {
                        className: S.x5,
                        children: [(0, n.jsx)(o.Zes, {
                            className: S.Kk,
                            size: "xxs",
                            color: "currentColor"
                        }), D]
                    }), (0, n.jsx)(O, {})]
                }), null != H && (0, n.jsx)("span", {
                    children: H
                }), !F && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O, {}), (0, n.jsx)("span", {
                        children: U
                    }), (0, n.jsx)(O, {}), (0, n.jsx)("span", {
                        children: "".concat(M, "fps")
                    })]
                }), w && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O, {}), (0, n.jsxs)("span", {
                        className: S.x5,
                        children: [(0, n.jsx)(o._RO, {
                            className: l()(S.Kk, S.tG),
                            size: "xxs",
                            color: "currentColor"
                        }), y.intl.string(b.default.FzMGWR)]
                    })]
                }), !w && !k && B && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O, {}), y.intl.string(b.default["n9/rUq"])]
                }), k ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O, {}), (0, n.jsx)("span", {
                        children: null == (i = R.find(e => {
                            let {
                                id: t
                            } = e;
                            return I === t
                        })) ? void 0 : i.name
                    })]
                }) : null]
            })]
        })]
    })
}