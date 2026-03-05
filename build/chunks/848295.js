/** chunk id: 848295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => L
}), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    N = n(652215),
    S = n(49999),
    x = n(985018),
    v = n(573785);
let y = [],
    b = e => {
        let {
            tagText: t,
            className: n
        } = e;
        return (0, i.jsx)(A.LpS, {
            className: a()(v.Tc, n),
            text: t
        })
    },
    O = e => {
        let {
            header: t,
            subHeader: n,
            imageSrc: r,
            tagText: l,
            wideStyle: s
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(v.Vr, {
                [v.tF]: s
            }),
            children: [null != l ? (0, i.jsx)(b, {
                tagText: l,
                className: v.bX
            }) : null, (0, i.jsx)("img", {
                alt: "",
                className: a()(v._n, {
                    [v.tF]: s
                }),
                src: r
            }), (0, i.jsxs)("div", {
                className: v.Zz,
                children: [(0, i.jsx)(A.Heading, {
                    variant: "heading-md/bold",
                    className: v.Hf,
                    children: t
                }), (0, i.jsx)(A.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: n
                })]
            })]
        })
    };

function L(e) {
    let {
        componentId: t,
        promotionId: n,
        className: l,
        renderModalProps: b,
        heroArt: L,
        heroArtClassName: R,
        modalTopExtra: P,
        header: j,
        headerClassName: D,
        subHeader: M,
        subHeaderExtra: w,
        featureCards: U,
        changeLogId: G,
        button: k,
        body: V
    } = e, {
        onClose: B,
        transitionState: H
    } = b, F = (0, p.GV)(), Y = U.length % 2 == 0, W = (0, d.bG)([h.A], () => h.A.useReducedMotion), [q, K] = r.useState(Date.now()), [z, $] = r.useState(0), [Q, X] = r.useState(0), [Z, J] = r.useState(!1), [ee, et] = r.useState(!0), en = r.useRef(q), ei = r.useRef(z), er = r.useRef(Q), el = r.useRef(Z), ea = r.useRef(ee), [es, eo] = r.useState(y), ed = r.useRef(!1);

    function ec() {
        let e = Date.now(),
            t = e - en.current,
            n = ei.current,
            i = er.current;
        return el.current && ($(n += t), ea.current || X(i += t)), K(e), [n, i]
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
                if ("video" !== L.type || null == L.subtitles) return;
                let e = L.subtitles?.map(async e => {
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
                eo(await Promise.all(e))
            } catch (e) {
                T.A.captureException(e), eo(y)
            }
        };
        !0 !== ed.current && e(), ed.current = !0
    }, [L, es]), r.useEffect(() => () => {
        null != es && es.forEach(e => {
            URL.revokeObjectURL(e.src)
        })
    }, [es]), r.useEffect(() => {
        en.current = q, ei.current = z, er.current = Q, el.current = Z, ea.current = ee
    }, [q, z, Q, Z, ee]), r.useEffect(() => () => {
        if ("video" === L.type || "embed" === L.type) {
            let [e, t] = ec();
            C.default.track(N.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                change_log_id: G,
                seconds_played: Math.round(e / 1e3)
            }), C.default.track(N.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                change_log_id: G,
                seconds_unmuted: Math.round(t / 1e3)
            })
        }
    }, [G, L.type]), r.useEffect(() => {
        (0, I.Vh)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
        let e = Date.now();
        return C.default.track(N.HAw.CHANGE_LOG_OPENED, {
            change_log_id: G
        }), () => {
            C.default.track(N.HAw.CHANGE_LOG_CLOSED, {
                change_log_id: G,
                seconds_open: Math.round((Date.now() - e) / 1e3)
            }), (0, I.qr)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                dismissAction: S.i.DISMISS
            })
        }
    }, [G, n]), (0, i.jsx)(A.EOs, {
        "data-migration-pending": !0,
        className: a()(v.zr, v.kv, l),
        transitionState: H,
        "aria-labelledby": F,
        parentComponent: "PremiumAnnouncementModalVariant1",
        children: (0, i.jsxs)(A.hLv, {
            color: "nitro-pink",
            children: [(0, i.jsx)("div", {
                className: v.cG,
                children: (0, i.jsx)(u.JnF, {
                    "data-migration-pending": !0,
                    onClick: async () => await B()
                })
            }), P?.(), (0, i.jsxs)(A.$mQ, {
                "data-migration-pending": !0,
                className: v.Qs,
                children: ["video" === L.type ? (0, i.jsx)(E.A, {
                    className: a()(v.Ki, R),
                    autoPlay: !W,
                    loop: !0,
                    muted: !0,
                    controls: !0,
                    controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                    src: L.src,
                    poster: L.poster,
                    onPlay: e => {
                        C.default.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: G
                        }), K(Date.now()), J(!0), et(e.currentTarget.muted)
                    },
                    onEnded: e => {
                        ec(), et(e.currentTarget.muted), J(!1)
                    },
                    onVolumeChange: e => {
                        ec(), et(e.currentTarget.muted)
                    },
                    onPause: e => {
                        ec(), et(e.currentTarget.muted), J(!1)
                    },
                    disablePictureInPicture: !0,
                    children: es?.map(e => {
                        let t = (0, x.getLanguages)().find(t => t.code === e.locale);
                        return null == t ? null : (0, i.jsx)("track", {
                            label: t.englishName,
                            kind: "captions",
                            srcLang: t.code,
                            src: e.src,
                            default: e.isDefault
                        }, e.locale)
                    })
                }) : "embed" === L.type ? (0, i.jsx)(m.rr, {
                    className: a()(v.Ki, R),
                    allowFullScreen: !1,
                    href: L.href,
                    thumbnail: L.thumbnail,
                    video: L.embed,
                    provider: g.mt.YOUTUBE,
                    maxWidth: L.embed.width,
                    maxHeight: L.embed.height,
                    renderVideoComponent: f.$o,
                    renderImageComponent: f.LL,
                    renderLinkComponent: f.bU,
                    onPlay: () => {
                        C.default.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: G
                        })
                    }
                }) : "image" === L.type ? (0, i.jsx)("img", {
                    alt: "",
                    className: a()(v.Ki, R),
                    src: L.src
                }) : null, (0, i.jsx)(A.Heading, {
                    variant: "display-md",
                    className: a()(v.TK, D),
                    children: j
                }), (0, i.jsxs)(A.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: v.uI,
                    children: [M, w?.()]
                }), null != V && "" !== V && (0, i.jsx)(A.Heading, {
                    variant: "heading-lg/semibold",
                    className: v.G3,
                    children: V
                }), U.length > 0 && (0, i.jsx)("div", {
                    className: a()(v.IS, {
                        [v.tF]: Y
                    }),
                    children: U.map((e, t) => (0, i.jsx)(O, {
                        ...e,
                        wideStyle: Y
                    }, `${e.header}_${t}`))
                }), (0, i.jsx)("div", {
                    className: v.UD,
                    children: k()
                })]
            })]
        })
    })
}