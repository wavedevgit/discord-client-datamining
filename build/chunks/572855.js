/** chunk id: 572855 params = (module,exports,require) **/
n.d(t, {
    A: () => k
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(311907),
    s = n(990078),
    c = n(397927),
    d = n(775602),
    u = n(50268),
    _ = n(843626),
    m = n(294454),
    p = n(803316),
    A = n(465856),
    b = n(253932),
    h = n(957565),
    S = n(255438),
    g = n(307600),
    C = n(723702),
    T = n(837921),
    f = n(700331),
    E = n(454290),
    y = n(358731),
    I = n(256905),
    v = n(985018),
    x = n(517420);

function M() {
    (0, c.OoC)(I.K)
}

function O(e) {
    let {
        tooltipText: t,
        ...n
    } = e;
    return (0, a.jsx)(s.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, a.jsx)(c.K0, {
            variant: "icon-only",
            "aria-label": t,
            size: "sm",
            ...n
        })
    })
}

function R() {
    let {
        zoomed: e,
        setZoomed: t
    } = (0, E.Q)();
    return (0, a.jsx)(O, {
        onClick: () => {
            f.l.markActionPerformed(e ? f.N.ZOOM_OUT_BUTTON_PRESSED : f.N.ZOOM_IN_BUTTON_PRESSED), t(!e)
        },
        tooltipText: e ? v.intl.string(v.t.vOFof8) : v.intl.string(v.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u
    })
}

function N(e) {
    let {
        item: t
    } = e, n = t.sourceMetadata?.message, r = t.sourceMetadata?.identifier, o = i.useCallback(() => {
        if (null != n && null != r) {
            if (f.l.markActionPerformed(f.N.FORWARD_PRESSED), "embed" === r.type) return void(0, m.fO)({
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
    return null != n && null != r && (0, _.p)(n) ? (0, a.jsx)(O, {
        onClick: o,
        tooltipText: v.intl.string(v.t.I3ltXO),
        icon: c.tuI
    }) : null
}

function D(e) {
    let {
        item: t
    } = e, [n, r] = i.useState(!1), o = "VIDEO" === t.type, l = "IMAGE" === t.type, s = null != t.children, d = (0, p.e7)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(o || C.isPlatformEmbedded && !s && l && d)) return null;
    let u = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
    async function _() {
        if (f.l.markActionPerformed(f.N.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.h)({
                href: u
            }), "IMAGE" === t.type) {
            r(!0);
            try {
                let e = await T.Ay.saveImage(u, t.contentType, p.N7);
                if (e === T._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === T._0.SAVED && (f.l.trackMediaViewerImageSaved({
                    url: u,
                    success: !0
                }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.cqpdJW), c.ToastType.SUCCESS)))
            } catch (e) {
                f.l.trackMediaViewerImageSaved({
                    url: u,
                    success: !1
                }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t["8Ve/S0"]), c.ToastType.FAILURE))
            } finally {
                r(!1)
            }
        }
    }
    return (0, a.jsx)(O, {
        onClick: _,
        tooltipText: v.intl.string("VIDEO" === t.type ? v.t.JVuuz3 : v.t["S/xNKV"]),
        loading: n,
        icon: c.s3U
    })
}

function j(e) {
    let {
        item: t
    } = e;
    if (!(0, p.fW)(t.url)) return null;
    let n = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, a.jsx)(O, {
        onClick: () => {
            f.l.markActionPerformed(f.N.OPEN_LINK_PRESSED), f.l.trackMediaViewerLinkOpened({
                href: n
            }), (0, g.h)({
                href: n
            })
        },
        tooltipText: v.intl.string(v.t.q5jLJB),
        icon: c.tfB
    })
}

function P(e) {
    let {
        item: t,
        canCopyImage: n,
        canCopyLink: i,
        onClose: r,
        onSelect: o
    } = e, l = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null, s = (0, u.A)({
        id: l,
        label: v.intl.string(v.t.nwg3lR)
    }), d = function(e) {
        let {
            alt: t,
            sourceMetadata: n,
            width: i,
            height: r
        } = e, o = L(v.intl.string(v.t.ILJuBq), "name", {
            subtextLineClamp: 1
        }), l = L(v.intl.string(v.t["3Nf9u2"]), "size"), s = L(v.intl.string(v.t.eOB2eR), "alt", {
            subtextLineClamp: 2
        });
        if (n?.identifier?.type !== "attachment") return null;
        let d = (0, A.A)(n.identifier),
            u = (0, S.Xq)(n.identifier.size / 1e3);
        return (0, a.jsxs)(c.Drp, {
            id: "media-viewer-details",
            label: v.intl.string(v.t.sqBLa9),
            children: [o(d), l(v.intl.formatToPlainString(v.t.DTdonA, {
                width: i,
                height: r,
                fileSize: u
            })), s(t)]
        }, "media-viewer-details")
    }(t);
    async function _() {
        f.l.markActionPerformed(f.N.COPY_IMAGE_PRESSED);
        let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
        try {
            await T.Ay.copyImage(e, t.originalContentType ?? t.contentType), f.l.trackMediaViewerImageCopied({
                url: e,
                success: !0
            }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.bhUpvC), c.ToastType.SUCCESS))
        } catch (t) {
            f.l.trackMediaViewerImageCopied({
                url: e,
                success: !1
            }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.PTPbjx), c.ToastType.FAILURE))
        }
    }
    return (0, a.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: r,
        onSelect: o,
        children: [(0, a.jsxs)(c.rXV, {
            children: [n && (0, a.jsx)(c.Drp, {
                label: v.intl.string(v.t.tvUqWn),
                id: "media-viewer-copy-image",
                icon: c.TdU,
                leadingAccessory: {
                    type: "icon",
                    icon: c.TdU
                },
                action: _
            }, "media-viewer-copy-image"), i && (0, a.jsx)(c.Drp, {
                id: "media-viewer-copy-link",
                label: v.intl.string(v.t["92CPQ+"]),
                icon: c.qYV,
                leadingAccessory: {
                    type: "icon",
                    icon: c.qYV
                },
                action: function() {
                    f.l.markActionPerformed(f.N.COPY_LINK_PRESSED);
                    let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
                    (0, h.C)(e, () => {
                        f.l.trackMediaViewerLinkCopied({
                            href: e,
                            success: !0
                        }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t["L/PwZf"]), c.ToastType.SUCCESS))
                    }, () => {
                        f.l.trackMediaViewerLinkCopied({
                            href: e,
                            success: !1
                        }), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.uVV00B), c.ToastType.FAILURE))
                    })
                }
            }, "media-viewer-copy-link")]
        }), d, s]
    })
}

function L(e, t, n) {
    let r = i.useCallback(e => {
        (0, h.C)(e, () => (0, c.showToast)({
            message: v.intl.string(v.t.mGZ66D),
            type: c.ToastType.SUCCESS,
            id: "media-viewer-detail-copied"
        }))
    }, []);
    return i => null != i ? (0, a.jsx)(c.Drp, {
        action: () => r(i),
        label: e,
        subtext: i,
        id: t,
        ...n
    }, t) : null
}

function w(e) {
    let {
        item: t
    } = e, n = i.useRef(null), [r, o] = i.useState(!1), l = b.Q_.useSetting(), s = "IMAGE" === t.type, d = null == t.children, u = !t.animated, _ = (0, p.PK)(t.url, t.contentType, t.originalContentType), m = s && d && u && _, A = (0, p.fW)(t.url);
    return l || m || A || t.sourceMetadata?.identifier?.type === "attachment" ? (0, a.jsx)(c.YNO, {
        targetElementRef: n,
        shouldShow: r,
        align: "left",
        position: "top",
        spacing: 18,
        onRequestClose: () => o(!1),
        animation: c.YNO.Animation.NONE,
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
            return (0, a.jsx)(O, {
                buttonRef: n,
                tooltipText: v.intl.string(v.t["UKOtz+"]),
                onClick: () => {
                    f.l.markActionPerformed(f.N.MORE_BUTTON_PRESSED), o(!r)
                },
                icon: c.jNK
            })
        }
    }) : null
}
let k = i.memo(function(e) {
    let {
        item: t,
        hideMediaOptions: n
    } = e, r = (0, l.bG)([d.A], () => d.A.keyboardModeEnabled), s = i.useRef(null), c = i.useCallback(() => {
        !r && s.current?.contains(document.activeElement) && document.activeElement.blur()
    }, [r]);
    return ("IMAGE" === t.type || !n) && (0, a.jsx)(y.Ay, {
        mode: y.nY.FOCUS_SENSITIVE,
        children: e => (0, a.jsxs)("div", {
            ref: s,
            className: o()(x.uu, e),
            onClick: e => e.stopPropagation(),
            onMouseLeave: c,
            children: ["IMAGE" === t.type && (0, a.jsx)(R, {}), !n && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N, {
                    item: t
                }), (0, a.jsx)(D, {
                    item: t
                }), (0, a.jsx)(j, {
                    item: t
                }), (0, a.jsx)(w, {
                    item: t
                })]
            })]
        })
    })
})