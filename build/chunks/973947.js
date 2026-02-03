/** chunk id: 973947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => x
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(336060),
    h = n(584014),
    p = n(954571),
    f = n(837921),
    m = n(504292),
    g = n(656088),
    A = n(253541),
    b = n(971778),
    _ = n(774030),
    y = n(494783),
    v = n(652215),
    E = n(257645),
    O = n(985018),
    C = n(854147);

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}
let x = e => {
    let {
        voiceFilter: t,
        hasNitro: n,
        analyticsContext: i
    } = e, {
        activeVoice: x,
        mostRecentlyRequestedVoiceId: j
    } = (0, y.f)(), I = (0, _.e)(t.id), T = t.id === x, N = !t.available && !t.temporarilyAvailable, P = t.temporarilyAvailable && !n && !T, w = !T && t.id === j, [R, D] = r.useState(!1);
    r.useEffect(() => {
        let e = w ? setTimeout(() => D(w), 200) : void 0;
        return () => {
            clearTimeout(e), D(!1)
        }
    }, [w]);
    let M = (0, A.B2)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !f.Ay.canCheckVoiceFilterFilesExist()
        }),
        k = (0, s.bG)([b.A], () => b.A.isVoiceFilterDownloaded(t.id), [t]),
        L = null == I ? void 0 : I.previewSoundURLs,
        [U, G] = r.useState(0),
        {
            isPlaying: F,
            playSound: H,
            stopSound: B,
            preloadSound: V
        } = (0, h.A)(null != L ? L[U] : null, {
            soundId: t.id
        }),
        K = C[t.styleKey],
        W = r.useCallback(() => {
            n || !N ? ((0, m.OR)(x === t.id ? null : t.id, i), P && p.default.track(v.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({
                voice_filter_id: t.id
            }, (0, g.A)(i)))) : (0, d.n)()
        }, [n, N, x, t.id, i, P]),
        z = r.useCallback(() => {
            p.default.track(v.HAw.VOICE_FILTER_PREVIEW_PLAYED, S({
                voice_filter_id: t.id
            }, (0, g.A)(i))), H({
                volume: .5,
                outputChannel: E.a.VOICE
            }), (.25 > Math.random() || U > 0) && null != L && G(e => (e + 1) % L.length)
        }, [i, H, U, L, t.id]),
        Y = null != I ? O.intl.string(I.name) : "";
    return (0, l.jsxs)("div", {
        className: a()(C.filter, K, {
            [C.selected]: T,
            [C.locked]: N && !T
        }),
        children: [(0, l.jsx)(c.m, {
            asContainer: !0,
            shouldShow: M && !k,
            "aria-label": O.intl.string(O.t.SQ7qMG),
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: C.downloadRequiredContent,
                children: [(0, l.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: O.intl.string(O.t.SQ7qMG)
                }), (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: O.intl.string(O.t.TbnPVp)
                })]
            }),
            children: (0, l.jsxs)(u.DUT, {
                className: C.selector,
                onClick: () => {
                    W()
                },
                onMouseEnter: () => {
                    V()
                },
                children: [(0, l.jsxs)("div", {
                    className: C.iconTreatmentsWrapper,
                    children: [(0, l.jsxs)("div", {
                        className: a()(C.profile, {
                            [C.underDevelopment]: t.underDevelopment
                        }),
                        children: [(0, l.jsx)("img", {
                            className: C.thumbnail,
                            alt: "",
                            src: null == I ? void 0 : I.iconURL,
                            draggable: !1
                        }), (0, l.jsx)("div", {
                            className: C.insetBorder
                        })]
                    }), T && (0, l.jsx)("div", {
                        className: C.iconCircle,
                        children: (0, l.jsx)(u.yr3, {
                            size: "md",
                            color: "currentColor",
                            colorClass: C.checkmark,
                            secondaryColor: o.A.unsafe_rawColors.WHITE.css
                        })
                    }), N && !T && (0, l.jsx)("div", {
                        className: a()([C.iconCircle, C.lockedCircle]),
                        children: (0, l.jsx)(u.XAi, {
                            size: "custom",
                            height: 16,
                            width: 16,
                            color: "currentColor",
                            colorClass: C.lockedIcon
                        })
                    }), P && (0, l.jsx)("div", {
                        className: a()([C.iconCircle, C.iconBorder]),
                        children: (0, l.jsx)("div", {
                            className: a()([C.clockCircle]),
                            children: (0, l.jsx)(u.O4, {
                                size: "custom",
                                height: 16,
                                width: 16,
                                color: "currentColor",
                                colorClass: C.clockIcon
                            })
                        })
                    }), R && (0, l.jsx)("div", {
                        className: C.spinnerWrapper,
                        children: (0, l.jsx)(u.y$y, {
                            type: u.y$y.Type.CHASING_DOTS,
                            animated: !0,
                            className: C.spinner
                        })
                    })]
                }), (0, l.jsxs)("div", {
                    className: C.filterName,
                    children: [(0, l.jsxs)(u.Text, {
                        variant: "text-xs/medium",
                        color: t.underDevelopment ? "text-muted" : "text-strong",
                        children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", Y]
                    }), M && !k ? (0, l.jsx)(u.s3U, {
                        size: "xxs"
                    }) : null]
                })]
            })
        }), null != L && (0, l.jsx)(c.m, {
            asContainer: !0,
            text: O.intl.string(F ? O.t.ItuPbp : O.t["0gtbE8"]),
            children: (0, l.jsx)(u.DUT, {
                className: a()([C.hoverButtonCircle, C.previewButton], {
                    [C.visible]: F
                }),
                onClick: F ? B : z,
                "aria-label": O.intl.formatToPlainString(O.t.gDzvjd, {
                    voiceFilterName: Y
                }),
                children: F ? (0, l.jsx)(u.wFz, {
                    size: "custom",
                    height: 16,
                    width: 16,
                    color: "white"
                }) : (0, l.jsx)(u.udU, {
                    size: "custom",
                    height: 16,
                    width: 16,
                    color: "white"
                })
            })
        })]
    })
}