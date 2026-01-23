/** Chunk was on web.js **/
/** chunk id: 582721, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(23339),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    f = n(304072),
    p = n(60587),
    _ = n(954571),
    h = n(361670),
    m = n(842086),
    g = n(378058),
    E = n(148355),
    y = n(256698),
    b = n(652215),
    O = n(985018),
    v = n(664445);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function C(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = N(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let w = (0, l.xI)(v.__invalid_stickerPickerPreviewDimensions),
    R = (0, l.xI)(v.__invalid_stickerPickerPreviewPadding),
    P = 250,
    D = i.memo(function(e) {
        let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: a = !0,
            getStickerItemProps: l,
            getStickerRowProps: A,
            gutterWidth: S,
            inspectedStickerPosition: N,
            isScrolling: D,
            isUsingKeyboardNavigation: x,
            onInspect: L,
            onSelect: j,
            rowIndex: M,
            stickerClassName: k,
            stickerDescriptors: U,
            stickerPadding: G = R,
            stickerSize: V = w,
            ownedStickerPacks: F,
            enlargeOnInteraction: B = !1,
            channel: H,
            currentUser: Y,
            checkSendability: W = !0
        } = e, {
            location: K
        } = (0, d.p)(), z = V + 2 * G, q = i.useMemo(() => ({
            gridColumnGap: S,
            gridTemplateColumns: "repeat(auto-fill, ".concat(z, "px)"),
            height: z,
            paddingRight: t ? void 0 : z
        }), [t, S, z]), Z = i.useMemo(() => ({
            width: V,
            height: V,
            padding: G
        }), [G, V]), [X, Q] = (0, f.A)(null, 300);
        return (0, r.jsx)("div", T(I({
            className: v.nM,
            style: q
        }, null == A ? void 0 : A(M)), {
            children: U.map(e => {
                var d;
                let f = e.visibleRowIndex === (null == N ? void 0 : N.rowIndex) && e.columnIndex === (null == N ? void 0 : N.columnIndex),
                    A = e.type === m.op.STICKER && B && f,
                    S = t => {
                        if ((null == D ? void 0 : D.current) === !0 || (null == x ? void 0 : x.current) === !0) return;
                        let n = t.altKey;
                        n && e.type === m.op.STICKER && !(0, g.o1)(e.sticker.id) && Q(e.sticker.id), null == j || j(e, n)
                    },
                    w = (0, o.throttle)(() => {
                        (null == D ? void 0 : D.current) === !0 || (null == x ? void 0 : x.current) === !0 || f || null == L || L(e)
                    }, P),
                    R = () => {
                        e.type === m.op.CREATE_STICKER && (_.default.track(b.HAw.OPEN_MODAL, {
                            type: b.JJy.CREATE_STICKER_MODAL,
                            location: K
                        }), (0, c.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("29143"), n.e("97010")]).then(n.bind(n, 445002));
                            return n => (0, r.jsx)(t, I({
                                guildId: e.guild_id
                            }, n))
                        }))
                    },
                    U = null != (d = null == l ? void 0 : l(e.columnIndex, M)) ? d : {},
                    {
                        ref: G,
                        tabIndex: z,
                        onFocus: q
                    } = U,
                    J = C(U, ["ref", "tabIndex", "onFocus"]);
                switch (e.type) {
                    case m.op.CREATE_STICKER:
                        return (0, r.jsx)("div", T(I({}, J), {
                            children: (0, r.jsxs)(c.DUT, {
                                "aria-label": e.name,
                                className: s()(v.wP, k, {
                                    [v.Kj]: f
                                }),
                                innerRef: G,
                                tabIndex: z,
                                onFocus: null != q ? q : w,
                                onMouseMove: w,
                                onClick: R,
                                style: Z,
                                children: [!B && (0, r.jsx)("div", {
                                    className: v.fw
                                }), (0, r.jsx)("div", {
                                    className: v.P0,
                                    children: (0, r.jsx)(c.j96, {
                                        size: "md",
                                        color: "currentColor",
                                        className: v.Kk
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "interactive-text-active",
                                    variant: "text-xs/normal",
                                    children: O.intl.string(O.t["+nEuqr"])
                                })]
                            })
                        }), e.guild_id);
                    case m.op.STICKER: {
                        let o = t && null != F && (0, g.FD)(e.sticker) && !F.has(e.sticker.pack_id),
                            l = e => {
                                (0, u.L3)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.e("46132").then(n.bind(n, 233503));
                                    return t => (0, r.jsx)(e, I({}, t))
                                })
                            };
                        return (0, i.createElement)("div", T(I({}, J), {
                            key: e.sticker.id
                        }), (0, r.jsxs)(c.DUT, {
                            className: s()(v.yI, k, {
                                [v.PV]: f,
                                [v.TV]: X === e.sticker.id
                            }),
                            innerRef: G,
                            tabIndex: z,
                            onFocus: null != q ? q : w,
                            onMouseMove: w,
                            onClick: S,
                            onContextMenu: l,
                            style: Z,
                            "data-type": p.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [(0, r.jsx)(c.AC4, {
                                children: (0, E.h)(e.sticker)
                            }), (0, r.jsxs)("div", {
                                "aria-hidden": !0,
                                children: [!B && (0, r.jsx)("div", {
                                    className: v.fw
                                }), (0, r.jsx)(E.A, {
                                    className: s()(v.SI, {
                                        [v.ot]: B && !f && null != N && -1 !== N.rowIndex && -1 !== N.columnIndex,
                                        [v.Q$]: A,
                                        [v.No]: W && !(0, h.G7)(e.sticker, Y, H)
                                    }),
                                    disableAnimation: !f && !a,
                                    enlargeOnInteraction: B,
                                    isInteracting: f,
                                    maskAsset: f,
                                    sticker: e.sticker,
                                    size: V
                                }), o ? (0, r.jsx)(y.A, {
                                    size: 20
                                }) : null]
                            })]
                        }))
                    }
                }
            })
        }))
    })