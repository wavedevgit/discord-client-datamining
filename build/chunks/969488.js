/** chunk id: 969488, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => E
}), n(733351), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(942381),
    d = n(417597),
    u = n(421380),
    m = n(397927),
    h = n(608299),
    g = n(775602),
    f = n(355622),
    x = n(851023),
    p = n(349688),
    b = n(915089),
    j = n(607470),
    v = n(703007),
    _ = n(218152),
    y = n(715493),
    A = n(518960),
    C = n(286911),
    O = n(985018),
    T = n(403094);
let S = [{
        name: "Media Post Thumbnail",
        extensions: ["jpg", "jpeg", "png", "gif", "webp"]
    }],
    N = (0, b.Ld)();

function w(e) {
    let {
        mediaAttachments: t,
        containerWidth: n,
        containerHeight: l
    } = e, i = (0, y.eX)({
        numAttachments: t.length,
        containerWidth: n,
        containerHeight: l
    });
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, r.jsx)("div", {
                style: i[t],
                children: !0 === e.isVideo ? (0, r.jsx)(j.A, {
                    src: e.src,
                    className: T.xn,
                    "aria-hidden": !0
                }) : (0, r.jsx)("img", {
                    src: e.src,
                    className: T.xn,
                    "aria-hidden": !0,
                    alt: null != (n = null == e ? void 0 : e.alt) ? n : ""
                })
            }, e.src)
        })
    })
}
let E = e => {
    var t;
    let {
        parentChannel: i
    } = e, {
        textAreaState: s
    } = (0, _.kU)(e => {
        let {
            textAreaState: t
        } = e;
        return {
            textAreaState: t
        }
    }, c.x), b = (0, d.bG)([g.A], () => g.A.keyboardModeEnabled), j = (0, C.A)(i, null == (t = s.textValue) ? void 0 : t.trim()), y = l.useMemo(() => j.find(e => e.isThumbnail), [j]), E = null != j && j.length > 0, I = l.useMemo(() => {
        let e = (null == j ? void 0 : j.length) > 1 ? 1.15 : 1;
        return {
            width: 153 * e,
            height: 86 * e
        }
    }, [j]), P = l.useCallback(e => {
        null != y && h.A.remove(i.id, y.id, f.oU.CREATE_FORUM_POST.drafts.type), (0, A.R)(e.currentTarget.files, i, f.oU.CREATE_FORUM_POST.drafts.type, {
            requireConfirm: !0,
            isThumbnail: !0,
            origin: "file_picker"
        }), e.currentTarget.value = null
    }, [i, y]), R = e => {
        e.stopPropagation(), (null == y ? void 0 : y.upload) != null && (0, m.mMO)(async () => {
            let e = y.upload;
            o()(null != e, "upload should not be null");
            let {
                default: t
            } = await Promise.resolve().then(n.bind(n, 427281));
            return n => {
                var l, a;
                return (0, r.jsx)(t, (l = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, n), a = a = {
                    upload: e,
                    channelId: i.id,
                    draftType: f.oU.CREATE_FORUM_POST.drafts.type,
                    onSubmit: t => {
                        let {
                            name: n,
                            description: r,
                            spoiler: l
                        } = t;
                        h.A.update(i.id, e.id, f.oU.CREATE_FORUM_POST.drafts.type, {
                            filename: n,
                            description: r,
                            spoiler: l
                        })
                    },
                    disableSpoiler: !0
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(a)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                }), l))
            }
        })
    }, k = (0, r.jsx)(v.A, {
        color: u.XD.CUSTOM,
        className: T.zL,
        innerClassName: T.Nr,
        onChange: P,
        multiple: !1,
        "aria-hidden": !0,
        filters: S,
        "aria-describedby": N,
        "aria-label": E ? O.intl.string(O.t.MxJI3f) : O.intl.string(O.t.Cbiofa),
        children: E ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(w, {
                mediaAttachments: j,
                containerWidth: I.width,
                containerHeight: I.height
            }), (0, r.jsxs)("div", {
                className: a()(T.On, {
                    [T.bP]: (null == j ? void 0 : j.length) > 2
                }),
                children: [(0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: O.intl.string(O.t.MxJI3f)
                }), null == y && (0, r.jsx)(m.R2l, {
                    size: "xs",
                    color: "currentColor",
                    className: T.IZ
                })]
            })]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.XGR, {
                size: "custom",
                width: 39,
                height: 39,
                color: "currentColor",
                className: T.T3
            }), (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: O.intl.string(O.t.Cbiofa)
            })]
        })
    });
    return (0, r.jsx)("div", {
        className: T.iT,
        style: I,
        children: null != y ? (0, r.jsx)(p.A, {
            actions: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(x.A, {
                    className: T.XI,
                    tooltip: O.intl.string(O.t.Y8ujqr),
                    onClick: R,
                    children: (0, r.jsx)(m.R2l, {
                        size: "xs",
                        color: "currentColor"
                    })
                }), (0, r.jsx)(x.A, {
                    className: T.XI,
                    tooltip: O.intl.string(O.t.vN7REz),
                    onClick: () => h.A.remove(i.id, y.id, f.oU.CREATE_FORUM_POST.drafts.type),
                    dangerous: !0,
                    children: (0, r.jsx)(m.ucK, {
                        size: "md",
                        color: "currentColor"
                    })
                })]
            }),
            draftType: f.oU.CREATE_FORUM_POST.drafts.type,
            id: y.id,
            channelId: i.id,
            handleEditModal: R,
            keyboardModeEnabled: b,
            size: p.L.SMALL,
            className: T.Xc,
            children: k
        }) : k
    })
}