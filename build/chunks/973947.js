/** chunk id: 973947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => C
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(827734),
    o = n(990078),
    c = n(397927),
    d = n(336060),
    u = n(584014),
    h = n(954571),
    m = n(504292),
    A = n(656088),
    g = n(774030),
    p = n(494783),
    f = n(652215),
    _ = n(257645),
    E = n(985018),
    x = n(854147);
let C = e => {
    let {
        voiceFilter: t,
        hasNitro: n,
        analyticsContext: s
    } = e, {
        activeVoice: C,
        mostRecentlyRequestedVoiceId: S
    } = (0, p.f)(), I = (0, g.e)(t.id), T = t.id === C, N = !t.available && !t.temporarilyAvailable, y = t.temporarilyAvailable && !n && !T, v = !T && t.id === S, [b, j] = l.useState(!1);
    l.useEffect(() => {
        let e = v ? setTimeout(() => j(v), 200) : void 0;
        return () => {
            clearTimeout(e), j(!1)
        }
    }, [v]);
    let R = I?.previewSoundURLs,
        [M, D] = l.useState(0),
        {
            isPlaying: O,
            playSound: L,
            stopSound: P,
            preloadSound: w
        } = (0, u.A)(null != R ? R[M] : null, {
            soundId: t.id
        }),
        k = x[t.styleKey],
        U = l.useCallback(() => {
            n || !N ? ((0, m.O)(C === t.id ? null : t.id, s), y && h.default.track(f.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, {
                voice_filter_id: t.id,
                ...(0, A.A)(s)
            })) : (0, d.n)()
        }, [n, N, C, t.id, s, y]),
        G = l.useCallback(() => {
            h.default.track(f.HAw.VOICE_FILTER_PREVIEW_PLAYED, {
                voice_filter_id: t.id,
                ...(0, A.A)(s)
            }), L({
                volume: .5,
                outputChannel: _.a.VOICE
            }), (.25 > Math.random() || M > 0) && null != R && D(e => (e + 1) % R.length)
        }, [s, L, M, R, t.id]),
        F = null != I ? E.intl.string(I.name) : "";
    return (0, i.jsxs)("div", {
        className: a()(x.filter, k, {
            [x.selected]: T,
            [x.locked]: N && !T
        }),
        children: [(0, i.jsxs)(c.DUT, {
            className: x.selector,
            onClick: () => {
                U()
            },
            onMouseEnter: () => {
                w()
            },
            children: [(0, i.jsxs)("div", {
                className: x.iconTreatmentsWrapper,
                children: [(0, i.jsxs)("div", {
                    className: a()(x.profile, {
                        [x.underDevelopment]: t.underDevelopment
                    }),
                    children: [(0, i.jsx)("img", {
                        className: x.thumbnail,
                        alt: "",
                        src: I?.iconURL,
                        draggable: !1
                    }), (0, i.jsx)("div", {
                        className: x.insetBorder
                    })]
                }), T && (0, i.jsx)("div", {
                    className: x.iconCircle,
                    children: (0, i.jsx)(c.yr3, {
                        size: "md",
                        color: "currentColor",
                        colorClass: x.checkmark,
                        secondaryColor: r.A.unsafe_rawColors.WHITE.css
                    })
                }), N && !T && (0, i.jsx)("div", {
                    className: a()([x.iconCircle, x.lockedCircle]),
                    children: (0, i.jsx)(c.XAi, {
                        size: "custom",
                        height: 16,
                        width: 16,
                        color: "currentColor",
                        colorClass: x.lockedIcon
                    })
                }), y && (0, i.jsx)("div", {
                    className: a()([x.iconCircle, x.iconBorder]),
                    children: (0, i.jsx)("div", {
                        className: a()([x.clockCircle]),
                        children: (0, i.jsx)(c.O4, {
                            size: "custom",
                            height: 16,
                            width: 16,
                            color: "currentColor",
                            colorClass: x.clockIcon
                        })
                    })
                }), b && (0, i.jsx)("div", {
                    className: x.spinnerWrapper,
                    children: (0, i.jsx)(c.y$y, {
                        type: c.y$y.Type.CHASING_DOTS,
                        animated: !0,
                        className: x.spinner
                    })
                })]
            }), (0, i.jsx)("div", {
                className: x.filterName,
                children: (0, i.jsxs)(c.Text, {
                    variant: "text-xs/medium",
                    color: t.underDevelopment ? "text-muted" : "text-strong",
                    children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", F]
                })
            })]
        }), null != R && (0, i.jsx)(o.m, {
            asContainer: !0,
            text: E.intl.string(O ? E.t.ItuPbp : E.t["0gtbE8"]),
            children: (0, i.jsx)(c.DUT, {
                className: a()([x.hoverButtonCircle, x.previewButton], {
                    [x.visible]: O
                }),
                onClick: O ? P : G,
                "aria-label": E.intl.formatToPlainString(E.t.gDzvjd, {
                    voiceFilterName: F
                }),
                children: O ? (0, i.jsx)(c.wFz, {
                    size: "custom",
                    height: 16,
                    width: 16,
                    color: "white"
                }) : (0, i.jsx)(c.udU, {
                    size: "custom",
                    height: 16,
                    width: 16,
                    color: "white"
                })
            })
        })]
    })
}