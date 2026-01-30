/** chunk id: 914905, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L,
    J: () => D
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(827734),
    c = n(397927),
    u = n(608299),
    d = n(427281),
    f = n(565150),
    p = n(458517),
    _ = n(607470),
    h = n(256905),
    m = n(302031),
    g = n(734057),
    E = n(515718),
    y = n(661191),
    b = n(851023),
    O = n(349688),
    v = n(985018),
    A = n(76397);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];

function w(e) {
    let {
        alt: t,
        spoiler: n,
        renderContent: a,
        size: s
    } = e, [l, c] = i.useState(!1);
    return (0, r.jsx)(m.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(m.Ay, {
            containerStyles: s === O.L.CLIP ? {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                boxShadow: "none"
            } : void 0,
            type: m.Ay.Types.ATTACHMENT,
            onReveal: () => c(!0),
            className: o()(A.spoilerContainer, {
                [A.sizeXSmall]: s === O.L.XSMALL,
                [A.sizeXXSmall]: s === O.L.XXSMALL
            }),
            children: e => (0, r.jsxs)("div", {
                className: A.spoilerWrapper,
                children: [a(e), (0, r.jsxs)("div", {
                    className: A.tags,
                    children: [null != t && "" !== t ? (0, r.jsx)("span", {
                        className: A.altTag,
                        children: v.intl.string(v.t.QEW81z)
                    }) : null, l && n ? (0, r.jsx)("span", {
                        className: A.altTag,
                        children: v.intl.string(v.t["F+x38C"])
                    }) : null]
                })]
            })
        })
    })
}

function R(e) {
    let {
        file: t,
        alt: n,
        spoiler: a,
        size: s = O.L.MEDIUM,
        onMouseEnter: l
    } = e, [u, d] = i.useState(), [f, p] = i.useState({
        width: 0,
        height: 0
    }), _ = s === O.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === N.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image;
        return n.onload = () => {
            let {
                width: e,
                height: t
            } = (0, E.z$)(n.width, n.height);
            p({
                width: e,
                height: t
            })
        }, n.src = e, () => {
            d(void 0), p({
                width: 0,
                height: 0
            }), URL.revokeObjectURL(e)
        }
    }, [t]);
    let m = i.useCallback(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return null == u ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)("img", {
                src: u,
                className: o()(A.media, {
                    [A.spoiler]: e,
                    [A.imageSmall]: _,
                    [A.sizeXSmall]: s === O.L.XSMALL,
                    [A.sizeXXSmall]: s === O.L.XXSMALL
                }),
                "aria-hidden": !0,
                alt: null != n ? n : "",
                style: t ? f : {}
            })
        }, [u, _, s, n, f]),
        g = i.useCallback(() => {
            null != u && (0, h.R)({
                location: "ChannelAttachmentUpload",
                items: [{
                    type: "IMAGE",
                    url: u
                }],
                shouldHideMediaOptions: !0
            })
        }, [u]),
        y = (null == t ? void 0 : t.name) != null ? t.name : v.intl.string(v.t.lduvqL),
        b = null != n && "" !== n ? v.intl.formatToPlainString(v.t["8TRAzR"], {
            filename: y,
            alt: n
        }) : v.intl.formatToPlainString(v.t.lXoOEZ, {
            filename: y
        });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: o()(A.mediaContainer, {
            [A.imageSmall]: _
        }),
        children: (0, r.jsx)(c.DUT, {
            onClick: g,
            className: A.clickableMedia,
            "aria-label": b,
            children: (0, r.jsx)(w, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: m
            })
        })
    })
}

function P(e) {
    let {
        file: t,
        alt: n,
        spoiler: a,
        size: s = O.L.MEDIUM,
        onMouseEnter: l,
        onVideoLoadError: c
    } = e, [u, d] = i.useState(), f = i.useRef(null);
    return i.useEffect(() => {
        if (null == t) return;
        let e = URL.createObjectURL(t);
        return d(e), () => {
            d(void 0), URL.revokeObjectURL(e)
        }
    }, [t]), (0, r.jsx)("div", {
        onMouseEnter: l,
        className: A.mediaContainer,
        children: (0, r.jsx)(w, {
            size: s,
            alt: n,
            spoiler: a,
            renderContent: e => (0, r.jsx)(_.A, {
                ref: f,
                src: u,
                className: o()(A.media, {
                    [A.spoiler]: e,
                    [A.sizeClip]: s === O.L.CLIP,
                    [A.sizeXSmall]: s === O.L.XSMALL,
                    [A.sizeXXSmall]: s === O.L.XXSMALL
                }),
                onError: c,
                preload: "none",
                "aria-hidden": !0
            })
        })
    })
}

function D(e) {
    var t;
    let {
        upload: n,
        size: a = O.L.MEDIUM,
        onMouseEnter: s
    } = e, [l, c] = i.useState(!1);
    return n.isImage && n.item.platform === f.xz.WEB ? (0, r.jsx)(R, {
        file: n.item.file,
        alt: n.description,
        spoiler: n.spoiler,
        size: a,
        onMouseEnter: s
    }) : !l && n.isVideo && n.item.platform === f.xz.WEB ? (0, r.jsx)(P, {
        file: n.item.file,
        size: a,
        alt: n.description,
        spoiler: n.spoiler,
        onMouseEnter: s,
        onVideoLoadError: () => c(!0)
    }) : (0, r.jsx)("div", {
        onMouseEnter: s,
        className: o()(A.icon, A[null != (t = n.classification) ? t : ""], {
            [A.imageSmall]: a === O.L.SMALL,
            [A.sizeXSmall]: a === O.L.XSMALL,
            [A.sizeXXSmall]: a === O.L.XXSMALL
        }),
        children: (0, r.jsx)("div", {
            className: A.tags,
            children: n.spoiler ? (0, r.jsx)("span", {
                className: A.altTag,
                children: v.intl.string(v.t["F+x38C"])
            }) : null
        })
    })
}

function L(e) {
    let {
        channelId: t,
        draftType: n,
        upload: a,
        keyboardModeEnabled: f,
        label: _,
        size: h = O.L.MEDIUM,
        canEdit: m = !0,
        hideFileName: E = !1,
        clip: I
    } = e, T = null != I, N = (h = T ? O.L.CLIP : h) === O.L.SMALL, w = (0, s.bG)([g.A], () => {
        var e;
        return null == (e = g.A.getChannel(t)) ? void 0 : e.guild_id
    }), R = e => {
        e.stopPropagation(), (0, c.qfG)(e => (0, r.jsx)(d.default, C(S({}, e), {
            draftType: n,
            upload: a,
            channelId: t,
            onSubmit: e => {
                let {
                    name: r,
                    description: i,
                    spoiler: o
                } = e;
                u.A.update(t, a.id, n, {
                    filename: r,
                    description: i,
                    spoiler: o
                })
            }
        })))
    };
    return (0, r.jsxs)(O.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [m ? (0, r.jsx)(b.A, {
                className: o()({
                    [A.action]: N
                }),
                tooltip: T ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
                onClick: () => u.A.update(t, a.id, n, {
                    spoiler: !a.spoiler
                }),
                children: a.spoiler ? (0, r.jsx)(c.G3N, {
                    size: "md",
                    color: "currentColor",
                    className: o()({
                        [A.actionBarIcon]: N
                    })
                }) : (0, r.jsx)(c.bMW, {
                    size: "xs",
                    color: "currentColor",
                    className: o()({
                        [A.actionBarIcon]: N
                    })
                })
            }) : null, m && !T ? (0, r.jsx)(b.A, {
                className: o()({
                    [A.action]: N
                }),
                tooltip: v.intl.string(v.t.Y8ujqr),
                onClick: R,
                children: (0, r.jsx)(c.R2l, {
                    size: "xs",
                    color: "currentColor",
                    className: o()({
                        [A.actionBarIcon]: N
                    })
                })
            }) : null, (0, r.jsx)(b.A, {
                className: o()({
                    [A.action]: N
                }),
                tooltip: T ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
                onClick: () => u.A.remove(t, a.id, n),
                dangerous: !0,
                children: (0, r.jsx)(c.ucK, {
                    size: "md",
                    color: "currentColor",
                    className: o()({
                        [A.actionBarIcon]: N
                    })
                })
            })]
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: R,
        keyboardModeEnabled: f,
        size: h,
        className: o()({
            [A.attachmentItemSmall]: N
        }),
        children: [(0, r.jsx)(D, {
            upload: a,
            size: h
        }), !E && !T && (0, r.jsx)("div", {
            className: A.filenameContainer,
            "aria-hidden": !0,
            children: (0, r.jsx)(c.Text, {
                className: A.filename,
                variant: "text-sm/normal",
                children: null != _ ? _ : a.filename
            })
        }), T && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.A, {
                className: A.clipsFooter,
                createdAt: y.default.extractTimestamp(I.id),
                participantIds: I.users,
                applicationId: I.applicationId,
                title: I.name,
                guildId: w
            }), (0, r.jsx)(c.LpS, {
                color: l.A.colors.BACKGROUND_BRAND.css,
                className: A.clipsBadge,
                text: v.intl.string(v.t.oA4afG)
            })]
        })]
    })
}