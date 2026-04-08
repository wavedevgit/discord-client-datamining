/** chunk id: 848295 params = (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(110259),
    o = n(877624),
    d = n(311907),
    c = n(554146),
    u = n(732955),
    A = n(397927),
    h = n(775602),
    _ = n(139286),
    m = n(871751),
    p = n(259407),
    g = n(915089),
    E = n(607470),
    I = n(367727),
    f = n(652176),
    C = n(954571),
    T = n(728458),
    N = n(774774),
    S = n(652215),
    v = n(49999),
    x = n(985018),
    y = n(922857);
let b = [],
    O = e => {
        let {
            tagText: t,
            className: n
        } = e;
        return (0, i.jsx)(A.LpS, {
            className: l()(y.Tc, n),
            text: t
        })
    },
    L = e => {
        let {
            header: t,
            subHeader: n,
            imageSrc: r,
            tagText: a,
            wideStyle: s
        } = e;
        return (0, i.jsxs)("div", {
            className: l()(y.Vr, {
                [y.tF]: s
            }),
            children: [null != a ? (0, i.jsx)(O, {
                tagText: a,
                className: y.bX
            }) : null, (0, i.jsx)("img", {
                alt: "",
                className: l()(y._n, {
                    [y.tF]: s
                }),
                src: r
            }), (0, i.jsxs)("div", {
                className: l()(y.Zz, {
                    [y.tF]: s
                }),
                children: [(0, i.jsx)(A.Heading, {
                    variant: "heading-sm/semibold",
                    className: y.Hf,
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
        headerClassName: M,
        modalTopPill: j,
        subHeader: w,
        subHeaderExtra: U,
        featureCards: G,
        changeLogId: k,
        button: V,
        body: B
    } = e, {
        onClose: H,
        transitionState: F
    } = O, Y = (0, g.GV)(), W = G.length % 2 == 0, K = (0, d.bG)([h.A], () => h.A.useReducedMotion), [q, z] = r.useState(Date.now()), [$, Q] = r.useState(0), [X, Z] = r.useState(0), [J, ee] = r.useState(!1), [et, en] = r.useState(!0), ei = r.useRef(q), er = r.useRef($), ea = r.useRef(X), el = r.useRef(J), es = r.useRef(et), [eo, ed] = r.useState(b), ec = r.useRef(!1);

    function eu() {
        let e = Date.now(),
            t = e - ei.current,
            n = er.current,
            i = ea.current;
        return el.current && (Q(n += t), es.current || Z(i += t)), z(e), [n, i]
    }
    return (0, _.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_id: t,
            component_type: o.C.ANNOUNCEMENT_MODAL
        }
    }), r.useEffect(() => {
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
                        r = URL.createObjectURL(i);
                    return {
                        ...e,
                        src: r
                    }
                });
                ed(await Promise.all(e))
            } catch (e) {
                T.A.captureException(e), ed(b)
            }
        };
        !0 !== ec.current && e(), ec.current = !0
    }, [R, eo]), r.useEffect(() => () => {
        null != eo && eo.forEach(e => {
            URL.revokeObjectURL(e.src)
        })
    }, [eo]), r.useEffect(() => {
        ei.current = q, er.current = $, ea.current = X, el.current = J, es.current = et
    }, [q, $, X, J, et]), r.useEffect(() => () => {
        if ("video" === R.type || "embed" === R.type) {
            let [e, t] = eu();
            C.default.track(S.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                change_log_id: k,
                seconds_played: Math.round(e / 1e3)
            }), C.default.track(S.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                change_log_id: k,
                seconds_unmuted: Math.round(t / 1e3)
            })
        }
    }, [k, R.type]), r.useEffect(() => {
        (0, I.Vh)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
        let e = Date.now();
        return C.default.track(S.HAw.CHANGE_LOG_OPENED, {
            change_log_id: k
        }), () => {
            C.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                change_log_id: k,
                seconds_open: Math.round((Date.now() - e) / 1e3)
            }), (0, I.qr)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                dismissAction: v.i.DISMISS
            })
        }
    }, [k, n]), (0, i.jsx)(A.EOs, {
        "data-migration-pending": !0,
        className: l()(y.zr, y.kv, a),
        transitionState: F,
        "aria-labelledby": Y,
        parentComponent: "PremiumAnnouncementModalVariant1",
        children: (0, i.jsxs)(A.hLv, {
            color: "nitro-pink",
            children: [(0, i.jsx)("div", {
                className: y.cG,
                children: (0, i.jsx)(u.JnF, {
                    "data-migration-pending": !0,
                    onClick: async () => await H()
                })
            }), (0, i.jsxs)(A.$mQ, {
                "data-migration-pending": !0,
                className: y.Qs,
                children: ["video" === R.type ? (0, i.jsx)(E.A, {
                    className: l()(y.Ki, P),
                    autoPlay: !K,
                    loop: !0,
                    muted: !0,
                    controls: !0,
                    controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                    src: R.src,
                    poster: R.poster,
                    onPlay: e => {
                        C.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: k
                        }), z(Date.now()), ee(!0), en(e.currentTarget.muted)
                    },
                    onEnded: e => {
                        eu(), en(e.currentTarget.muted), ee(!1)
                    },
                    onVolumeChange: e => {
                        eu(), en(e.currentTarget.muted)
                    },
                    onPause: e => {
                        eu(), en(e.currentTarget.muted), ee(!1)
                    },
                    disablePictureInPicture: !0,
                    children: eo?.map(e => {
                        let t = (0, x.getLanguages)().find(t => t.code === e.locale);
                        return null == t ? null : (0, i.jsx)("track", {
                            label: t.englishName,
                            kind: "captions",
                            srcLang: t.code,
                            src: e.src,
                            default: e.isDefault
                        }, e.locale)
                    })
                }) : "embed" === R.type ? (0, i.jsx)(m.rr, {
                    className: l()(y.Ki, P),
                    allowFullScreen: !1,
                    href: R.href,
                    thumbnail: R.thumbnail,
                    video: R.embed,
                    provider: p.mt.YOUTUBE,
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
                    className: l()(y.Ki, P),
                    src: R.src
                }) : null, null != j && "" !== j ? (0, i.jsx)(N.e4, {
                    text: j,
                    colorOptions: N.at.PREMIUM_TIER_2_WHITE_FILL,
                    className: y.ON
                }) : null, (0, i.jsx)(A.Heading, {
                    variant: "display-md",
                    className: l()(y.TK, M),
                    children: D
                }), (0, i.jsxs)(A.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: y.uI,
                    children: [w, U?.()]
                }), null != B && "" !== B && (0, i.jsx)(A.Heading, {
                    variant: "heading-lg/semibold",
                    className: y.G3,
                    children: B
                }), G.length > 0 && (0, i.jsx)("div", {
                    className: l()(y.IS, {
                        [y.tF]: W
                    }),
                    children: G.map((e, t) => (0, i.jsx)(L, {
                        ...e,
                        wideStyle: W
                    }, `${e.header}_${t}`))
                }), (0, i.jsx)("div", {
                    className: y.UD,
                    children: V()
                })]
            })]
        })
    })
}