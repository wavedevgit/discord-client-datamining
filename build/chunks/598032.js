/** chunk id: 598032, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => w
});
var s = r(627968);
r(64700);
var i = r(503698),
    n = r.n(i),
    l = r(141931),
    a = r(311907),
    o = r(397927),
    c = r(627363),
    d = r(769015),
    u = r(74848),
    f = r(430452),
    h = r(723702),
    x = r(688465),
    p = r(461430),
    m = r(56439),
    _ = r(654291),
    g = r(420659),
    j = r(753070),
    v = r(731854),
    A = r(191850),
    S = r(985018),
    y = r(607186);

function C() {
    return (0, s.jsx)("span", {
        className: y.gO,
        children: "•"
    })
}

function b(e) {
    let {
        source: t
    } = e, {
        data: r
    } = (0, c.YY)(null != t && (0, _.l)(t) ? t.id : void 0);
    return null == t ? (0, s.jsx)(o.Fzq, {
        className: y.Jd,
        size: "md",
        color: "currentColor"
    }) : (0, _.l)(t) ? (0, s.jsx)(d.A, {
        game: r,
        pid: t.pid
    }) : null == t.icon || "" === t.icon ? (0, s.jsx)(o.Fzq, {
        className: y.Jd,
        size: "md",
        color: "currentColor"
    }) : (0, s.jsx)("img", {
        src: t.icon,
        alt: "",
        className: y.pI
    })
}

function w() {
    let [{
        preset: e,
        resolution: t,
        fps: r,
        muteStreamAudio: i,
        selectedSource: c,
        sourceType: d,
        audioSourceId: _
    }] = (0, x.tS)(), [w, I] = (0, u.tR)(v.oh.AUDIO_INPUT, {
        location: "StreamSettingsSummary"
    }), E = w.concat(I), [N, O] = (0, g.A)(e) ?? [t, r], T = (0, p.K)(e), R = (0, m.b)(N), M = d === l.fS.CAMERA, U = null != c, G = null != c ? c?.id?.startsWith(l.fS.CAMERA) : M, L = e === j.jQ.PRESET_AUTO, D = U ? void 0 : e === j.jQ.PRESET_VIDEO ? S.intl.string(A.default.MuHUFe) : e === j.jQ.PRESET_DOCUMENTS ? S.intl.string(A.default.y0JuYR) : e === j.jQ.PRESET_AUTO ? S.intl.string(A.default.m4jtlc) : void 0, P = (0, a.bG)([f.Ay], () => f.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, s.jsxs)("div", {
        className: y.zr,
        children: [U && (0, s.jsx)(b, {
            source: c
        }), (0, s.jsxs)("div", {
            className: y.z,
            children: [(0, s.jsx)(o.Text, {
                className: y.fB,
                variant: "text-md/semibold",
                color: "text-strong",
                children: U ? c?.name ?? S.intl.string(A.default["hJMA+x"]) : T
            }), (0, s.jsxs)(o.Text, {
                className: y.kI,
                variant: "text-xs/medium",
                color: "text-muted",
                children: [U && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: y.x5,
                        children: [(0, s.jsx)(o.Zes, {
                            className: y.Kk,
                            size: "xxs",
                            color: "currentColor"
                        }), T]
                    }), (0, s.jsx)(C, {})]
                }), null != D && (0, s.jsx)("span", {
                    children: D
                }), !L && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C, {}), (0, s.jsx)("span", {
                        children: R
                    }), (0, s.jsx)(C, {}), (0, s.jsx)("span", {
                        children: `${O}fps`
                    })]
                }), i && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C, {}), (0, s.jsxs)("span", {
                        className: y.x5,
                        children: [(0, s.jsx)(o._RO, {
                            className: n()(y.Kk, y.tG),
                            size: "xxs",
                            color: "currentColor"
                        }), S.intl.string(A.default.FzMGWR)]
                    })]
                }), !i && !G && P && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C, {}), S.intl.string(A.default["n9/rUq"])]
                }), G ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C, {}), (0, s.jsx)("span", {
                        children: E.find(e => {
                            let {
                                id: t
                            } = e;
                            return _ === t
                        })?.name
                    })]
                }) : null]
            })]
        })]
    })
}