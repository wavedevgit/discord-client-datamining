/** chunk id: 572855 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(311907),
    c = n(990078),
    s = n(397927),
    d = n(775602),
    _ = n(50268),
    u = n(843626),
    m = n(294454),
    p = n(803316),
    A = n(465856),
    b = n(253932),
    S = n(957565),
    h = n(255438),
    g = n(307600),
    C = n(723702),
    f = n(837921),
    T = n(700331),
    E = n(454290),
    y = n(358731),
    I = n(256905),
    v = n(985018),
    x = n(171580);

function M() {
    (0, s.OoC)(I.K)
}

function R(e) {
    let {
        tooltipText: t,
        ...n
    } = e;
    return (0, a.jsx)(c.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, a.jsx)(s.K0, {
            variant: "icon-only",
            "aria-label": t,
            size: "sm",
            ...n
        })
    })
}

function O() {
    let {
        zoomed: e,
        setZoomed: t
    } = (0, E.Q)();
    return (0, a.jsx)(R, {
        onClick: () => {
            T.l.markActionPerformed(e ? T.N.ZOOM_OUT_BUTTON_PRESSED : T.N.ZOOM_IN_BUTTON_PRESSED), t(!e)
        },
        tooltipText: e ? v.intl.string(v.t.vOFof8) : v.intl.string(v.t.Kt4gZ6),
        icon: e ? s.V0_ : s.r1u
    })
}

function N(e) {
    let {
        item: t
    } = e, n = t.sourceMetadata?.message, r = t.sourceMetadata?.identifier, o = i.useCallback(() => {
        if (null != n && null != r) {
            if (T.l.markActionPerformed(T.N.FORWARD_PRESSED), "embed" === r.type) return void(0, m.fO)({
                message: n,
                source: "media-viewer",
                forwardOptions: {
                    onlyEmbedIndices: [r.embedIndex]
                },
                onRequestSent: M
            });
            (0, m.fO)({
                message: n,
                source: "media-viewer",
                forwardOptions: {
                    onlyAttachmentIds: [r.attachmentId]
                },
                onRequestSent: M
            })
        }
    }, [n, r]);
    return null != n && null != r && (0, u.p)(n) ? (0, a.jsx)(R, {
        onClick: o,
        tooltipText: v.intl.string(v.t.I3ltXO),
        icon: s.tuI
    }) : null
}

function D(e) {
    let {
        item: t
    } = e, [n, r] = i.useState(!1), o = "VIDEO" === t.type, l = "IMAGE" === t.type, c = null != t.children, d = (0, p.e7)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(o || C.isPlatformEmbedded && !c && l && d)) return null;
    let _ = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
    async function u() {
        if (T.l.markActionPerformed(T.N.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.h)({
                href: _
            }), "IMAGE" === t.type) {
            r(!0);
            try {
                let e = await f.Ay.saveImage(_, t.contentType, p.N7);
                if (e === f._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${_}`);
                e === f._0.SAVED && (T.l.trackMediaViewerImageSaved({
                    url: _,
                    success: !0
                }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.cqpdJW), s.ToastType.SUCCESS)))
            } catch (e) {
                T.l.trackMediaViewerImageSaved({
                    url: _,
                    success: !1
                }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["8Ve/S0"]), s.ToastType.FAILURE))
            } finally {
                r(!1)
            }
        }
    }
    return (0, a.jsx)(R, {
        onClick: u,
        tooltipText: v.intl.string("VIDEO" === t.type ? v.t.JVuuz3 : v.t["S/xNKV"]),
        loading: n,
        icon: s.s3U
    })
}

function j(e) {
    let {
        item: t
    } = e;
    if (!(0, p.fW)(t.url)) return null;
    let n = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, a.jsx)(R, {
        onClick: () => {
            T.l.markActionPerformed(T.N.OPEN_LINK_PRESSED), T.l.trackMediaViewerLinkOpened({
                href: n
            }), (0, g.h)({
                href: n
            })
        },
        tooltipText: v.intl.string(v.t.q5jLJB),
        icon: s.tfB
    })
}

function P(e) {
    let {
        item: t,
        canCopyImage: n,
        canCopyLink: i,
        onClose: r,
        onSelect: o
    } = e, l = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null, c = (0, _.A)({
        id: l,
        label: v.intl.string(v.t.nwg3lR)
    }), d = function(e) {
        let {
            alt: t,
            sourceMetadata: n,
            width: i,
            height: r
        } = e, o = w(v.intl.string(v.t.ILJuBq), "name", {
            subtextLineClamp: 1
        }), l = w(v.intl.string(v.t["3Nf9u2"]), "size"), c = w(v.intl.string(v.t.eOB2eR), "alt", {
            subtextLineClamp: 2
        });
        if (n?.identifier?.type !== "attachment") return null;
        let d = (0, A.A)(n.identifier),
            _ = (0, h.Xq)(n.identifier.size / 1e3);
        return (0, a.jsxs)(s.Drp, {
            id: "media-viewer-details",
            label: v.intl.string(v.t.sqBLa9),
            children: [o(d), l(v.intl.formatToPlainString(v.t.DTdonA, {
                width: i,
                height: r,
                fileSize: _
            })), c(t)]
        }, "media-viewer-details")
    }(t);
    async function u() {
        T.l.markActionPerformed(T.N.COPY_IMAGE_PRESSED);
        let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
        try {
            await f.Ay.copyImage(e, t.originalContentType ?? t.contentType), T.l.trackMediaViewerImageCopied({
                url: e,
                success: !0
            }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.bhUpvC), s.ToastType.SUCCESS))
        } catch (t) {
            T.l.trackMediaViewerImageCopied({
                url: e,
                success: !1
            }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.PTPbjx), s.ToastType.FAILURE))
        }
    }
    return (0, a.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: r,
        onSelect: o,
        children: [(0, a.jsxs)(s.rXV, {
            children: [n && (0, a.jsx)(s.Drp, {
                label: v.intl.string(v.t.tvUqWn),
                id: "media-viewer-copy-image",
                icon: s.TdU,
                leadingAccessory: {
                    type: "icon",
                    icon: s.TdU
                },
                action: u
            }, "media-viewer-copy-image"), i && (0, a.jsx)(s.Drp, {
                id: "media-viewer-copy-link",
                label: v.intl.string(v.t["92CPQ+"]),
                icon: s.qYV,
                leadingAccessory: {
                    type: "icon",
                    icon: s.qYV
                },
                action: function() {
                    T.l.markActionPerformed(T.N.COPY_LINK_PRESSED);
                    let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
                    (0, S.C)(e, () => {
                        T.l.trackMediaViewerLinkCopied({
                            href: e,
                            success: !0
                        }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["L/PwZf"]), s.ToastType.SUCCESS))
                    }, () => {
                        T.l.trackMediaViewerLinkCopied({
                            href: e,
                            success: !1
                        }), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.uVV00B), s.ToastType.FAILURE))
                    })
                }
            }, "media-viewer-copy-link")]
        }), d, c]
    })
}

function w(e, t, n) {
    let r = i.useCallback(e => {
        (0, S.C)(e, () => (0, s.showToast)({
            message: v.intl.string(v.t.mGZ66D),
            type: s.ToastType.SUCCESS,
            id: "media-viewer-detail-copied"
        }))
    }, []);
    return i => null != i ? (0, a.jsx)(s.Drp, {
        action: () => r(i),
        label: e,
        subtext: i,
        id: t,
        ...n
    }, t) : null
}

function L(e) {
    let {
        item: t
    } = e, n = i.useRef(null), [r, o] = i.useState(!1), l = b.Q_.useSetting(), c = "IMAGE" === t.type, d = null == t.children, _ = !t.animated, u = (0, p.PK)(t.url, t.contentType, t.originalContentType), m = c && d && _ && u, A = (0, p.fW)(t.url);
    return l || m || A || t.sourceMetadata?.identifier?.type === "attachment" ? (0, a.jsx)(s.YNO, {
        targetElementRef: n,
        shouldShow: r,
        align: "left",
        position: "top",
        spacing: 18,
        onRequestClose: () => o(!1),
        animation: s.YNO.Animation.NONE,
        renderPopout: () => (0, a.jsx)(P, {
            item: t,
            canCopyImage: m,
            canCopyLink: A,
            onClose: () => o(!1)
        }),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, a.jsx)(R, {
                buttonRef: n,
                tooltipText: v.intl.string(v.t["UKOtz+"]),
                onClick: () => {
                    T.l.markActionPerformed(T.N.MORE_BUTTON_PRESSED), o(!r)
                },
                icon: s.jNK
            })
        }
    }) : null
}
let G = i.memo(function(e) {
    let {
        item: t,
        hideMediaOptions: n
    } = e, r = (0, l.bG)([d.A], () => d.A.keyboardModeEnabled), c = i.useRef(null), s = i.useCallback(() => {
        !r && c.current?.contains(document.activeElement) && document.activeElement.blur()
    }, [r]);
    return ("IMAGE" === t.type || !n) && (0, a.jsx)(y.Ay, {
        mode: y.nY.FOCUS_SENSITIVE,
        children: e => (0, a.jsxs)("div", {
            ref: c,
            className: o()(x.uu, e),
            onClick: e => e.stopPropagation(),
            onMouseLeave: s,
            children: ["IMAGE" === t.type && (0, a.jsx)(O, {}), !n && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N, {
                    item: t
                }), (0, a.jsx)(D, {
                    item: t
                }), (0, a.jsx)(j, {
                    item: t
                }), (0, a.jsx)(L, {
                    item: t
                })]
            })]
        })
    })
})