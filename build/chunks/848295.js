/** chunk id: 848295 params = (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(110259),
    o = n(877624),
    d = n(311907),
    c = n(554146),
    u = n(732955),
    A = n(397927),
    h = n(775602),
    _ = n(139286),
    m = n(871751),
    g = n(259407),
    p = n(915089),
    E = n(607470),
    I = n(367727),
    f = n(652176),
    C = n(954571),
    T = n(728458),
    N = n(774774),
    S = n(652215),
    x = n(49999),
    v = n(985018),
    b = n(695594);
let y = [],
    O = e => {
        let {
            tagText: t,
            className: n
        } = e;
        return (0, i.jsx)(A.LpS, {
            className: r()(b.Tc, n),
            text: t
        })
    },
    L = e => {
        let {
            header: t,
            subHeader: n,
            imageSrc: l,
            tagText: a,
            wideStyle: s
        } = e;
        return (0, i.jsxs)("div", {
            className: r()(b.Vr, {
                [b.tF]: s
            }),
            children: [null != a ? (0, i.jsx)(O, {
                tagText: a,
                className: b.bX
            }) : null, (0, i.jsx)("img", {
                alt: "",
                className: r()(b._n, {
                    [b.tF]: s
                }),
                src: l
            }), (0, i.jsxs)("div", {
                className: r()(b.Zz, {
                    [b.tF]: s
                }),
                children: [(0, i.jsx)(A.Heading, {
                    variant: "heading-sm/semibold",
                    className: b.Hf,
                    children: t
                }), (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: n
                })]
            })]
        })
    };

function R(e) {
    let {
        componentId: t,
        promotionId: n,
        className: a,
        renderModalProps: O,
        heroArt: R,
        heroArtClassName: P,
        header: D,
        headerClassName: j,
        modalTopPill: M,
        subHeader: w,
        subHeaderExtra: U,
        featureCards: G,
        changeLogId: k,
        button: V,
        body: B,
        disclaimer: H,
        disclaimerExtra: F
    } = e, {
        onClose: Y,
        transitionState: W
    } = O, K = (0, p.GV)(), q = G.length % 2 == 0, z = (0, d.bG)([h.A], () => h.A.useReducedMotion), [$, Q] = l.useState(Date.now()), [X, Z] = l.useState(0), [J, ee] = l.useState(0), [et, en] = l.useState(!1), [ei, el] = l.useState(!0), ea = l.useRef($), er = l.useRef(X), es = l.useRef(J), eo = l.useRef(et), ed = l.useRef(ei), [ec, eu] = l.useState(y), eA = l.useRef(!1);

    function eh() {
        let e = Date.now(),
            t = e - ea.current,
            n = er.current,
            i = es.current;
        return eo.current && (Z(n += t), ed.current || ee(i += t)), Q(e), [n, i]
    }
    return (0, _.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_id: t,
            component_type: o.C.ANNOUNCEMENT_MODAL
        }
    }), l.useEffect(() => {
        let e = async () => {
            try {
                if ("video" !== R.type || null == R.subtitles) return;
                let e = R.subtitles?.map(async e => {
                    let t = await fetch(e.src);
                    if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                    let n = await t.text(),
                        i = new Blob([n], {
                            type: "text/vtt"
                        }),
                        l = URL.createObjectURL(i);
                    return {
                        ...e,
                        src: l
                    }
                });
                eu(await Promise.all(e))
            } catch (e) {
                T.A.captureException(e), eu(y)
            }
        };
        !0 !== eA.current && e(), eA.current = !0
    }, [R, ec]), l.useEffect(() => () => {
        null != ec && ec.forEach(e => {
            URL.revokeObjectURL(e.src)
        })
    }, [ec]), l.useEffect(() => {
        ea.current = $, er.current = X, es.current = J, eo.current = et, ed.current = ei
    }, [$, X, J, et, ei]), l.useEffect(() => () => {
        if ("video" === R.type || "embed" === R.type) {
            let [e, t] = eh();
            C.default.track(S.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                change_log_id: k,
                seconds_played: Math.round(e / 1e3)
            }), C.default.track(S.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                change_log_id: k,
                seconds_unmuted: Math.round(t / 1e3)
            })
        }
    }, [k, R.type]), l.useEffect(() => {
        (0, I.Vh)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
        let e = Date.now();
        return C.default.track(S.HAw.CHANGE_LOG_OPENED, {
            change_log_id: k
        }), () => {
            C.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                change_log_id: k,
                seconds_open: Math.round((Date.now() - e) / 1e3)
            }), (0, I.qr)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                dismissAction: x.i.DISMISS
            })
        }
    }, [k, n]), (0, i.jsx)(A.EOs, {
        "data-migration-pending": !0,
        className: r()(b.zr, b.kv, a),
        transitionState: W,
        "aria-labelledby": K,
        parentComponent: "PremiumAnnouncementModalVariant1",
        children: (0, i.jsxs)(A.hLv, {
            color: "nitro-pink",
            children: [(0, i.jsx)("div", {
                className: b.cG,
                children: (0, i.jsx)(u.JnF, {
                    "data-migration-pending": !0,
                    onClick: async () => await Y()
                })
            }), (0, i.jsxs)(A.$mQ, {
                "data-migration-pending": !0,
                className: b.Qs,
                children: ["video" === R.type ? (0, i.jsx)(E.A, {
                    className: r()(b.Ki, P),
                    autoPlay: !z,
                    loop: !0,
                    muted: !0,
                    controls: !0,
                    controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                    src: R.src,
                    poster: R.poster,
                    onPlay: e => {
                        C.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: k
                        }), Q(Date.now()), en(!0), el(e.currentTarget.muted)
                    },
                    onEnded: e => {
                        eh(), el(e.currentTarget.muted), en(!1)
                    },
                    onVolumeChange: e => {
                        eh(), el(e.currentTarget.muted)
                    },
                    onPause: e => {
                        eh(), el(e.currentTarget.muted), en(!1)
                    },
                    disablePictureInPicture: !0,
                    children: ec?.map(e => {
                        let t = (0, v.getLanguages)().find(t => t.code === e.locale);
                        return null == t ? null : (0, i.jsx)("track", {
                            label: t.englishName,
                            kind: "captions",
                            srcLang: t.code,
                            src: e.src,
                            default: e.isDefault
                        }, e.locale)
                    })
                }) : "embed" === R.type ? (0, i.jsx)(m.rr, {
                    className: r()(b.Ki, P),
                    allowFullScreen: !1,
                    href: R.href,
                    thumbnail: R.thumbnail,
                    video: R.embed,
                    provider: g.mt.YOUTUBE,
                    maxWidth: R.embed.width,
                    maxHeight: R.embed.height,
                    renderVideoComponent: f.$o,
                    renderImageComponent: f.LL,
                    renderLinkComponent: f.bU,
                    onPlay: () => {
                        C.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: k
                        })
                    }
                }) : "image" === R.type ? (0, i.jsx)("img", {
                    alt: "",
                    className: r()(b.Ki, P),
                    src: R.src
                }) : null, null != M && "" !== M ? (0, i.jsx)(N.e4, {
                    text: M,
                    colorOptions: N.at.PREMIUM_TIER_2_WHITE_FILL,
                    className: b.ON
                }) : null, (0, i.jsx)(A.Heading, {
                    variant: "display-md",
                    className: r()(b.TK, j),
                    children: D
                }), (0, i.jsxs)(A.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: b.uI,
                    children: [w, U?.()]
                }), null != B && "" !== B && (0, i.jsx)(A.Heading, {
                    variant: "heading-lg/semibold",
                    className: b.G3,
                    children: B
                }), G.length > 0 && (0, i.jsx)("div", {
                    className: r()(b.IS, {
                        [b.tF]: q
                    }),
                    children: G.map((e, t) => (0, i.jsx)(L, {
                        ...e,
                        wideStyle: q
                    }, `${e.header}_${t}`))
                }), null != H && "" !== H && (0, i.jsxs)(A.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: b.ed,
                    children: [H, F?.()]
                }), (0, i.jsx)("div", {
                    className: b.UD,
                    children: V()
                })]
            })]
        })
    })
}