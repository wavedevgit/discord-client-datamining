/** chunk id: 941673, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    ZR: () => W,
    gj: () => F
}), n(896048), n(321073), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(313961),
    u = n(734925),
    d = n(765441),
    f = n(235986),
    p = n(937008),
    _ = n(156312),
    h = n(166532),
    m = n(482132),
    g = n(871181),
    E = n(238017),
    y = n(683433),
    b = n(285719),
    O = n(650588),
    v = n(383501),
    A = n(287809),
    I = n(67480),
    S = n(403362),
    T = n(580630),
    C = n(871123),
    N = n(832163),
    w = n(44724),
    R = n(980094),
    P = n(421161),
    D = n(366523),
    L = n(652215),
    x = n(806931),
    M = n(788868),
    j = n(818348),
    k = n(985018),
    U = n(490669);

function G(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            G(e, t, n[t])
        })
    }
    return e
}
let F = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: e => (0, r.jsx)(K, V({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"])
    }
};

function B(e) {
    let t = (0, s.bG)([v.A], () => v.A.isConnected() ? v.A.getChannelId() : null),
        [n, r] = i.useState([]);
    return i.useEffect(() => {
        let n = null != t ? c.A.getParticipants(t) : [],
            i = [],
            a = new Set;
        for (let t of n) !(0, x.Xw)(t) && !(0, x.Ay)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), i.push(t));
        i.sort((e, t) => (0, x.Ay)(e) && !(0, x.Ay)(t) ? -1 : (0, x.Ay)(t) && !(0, x.Ay)(e) ? 1 : 0), r(i.map(e => e.user))
    }, [t, e]), n
}

function H(e, t, n) {
    let r = (0, d.A)(),
        a = B(e),
        l = (0, s.yK)([A.default], () => {
            var e;
            return null != (e = null == n ? void 0 : n.map(A.default.getUser).filter(S.Vq)) ? e : []
        }, [n]);
    return i.useMemo(() => o().uniqWith([...null != t ? [t] : [], ...l, ...a, ...r], (e, t) => e.id === t.id), [t, l, a, r])
}

function Y(e) {
    let {
        onStepChange: t,
        onBackClick: n,
        showBackButton: i = !1,
        disabled: a = !1,
        loading: o = !1
    } = e, {
        hasPaymentSources: s
    } = (0, _.P5)(), c = s ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Button, {
            onClick: () => t(c),
            disabled: a,
            loading: o,
            text: k.intl.string(k.t.XiOHRX)
        }), i ? (0, r.jsx)(y.A, {
            onClick: n
        }) : null]
    })
}
let W = e => {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        customGiftMessage: i = "",
        setCustomGiftMessage: a,
        giftRecipient: o,
        emojiConfetti: c,
        soundEffect: d,
        setEmojiConfetti: f,
        setSoundEffect: h,
        giftingOrigin: m,
        additionalUserIds: y
    } = (0, p.Pv)(), {
        selectedSkuId: v,
        application: S
    } = (0, _.P5)(), N = (0, s.bG)([A.default], () => A.default.getCurrentUser()), w = H(null == N ? void 0 : N.id, o, y), L = (0, s.bG)([I.A], () => null != v ? I.A.get(v) : null, [v]), x = (0, C.fq)(L), G = (0, C.xf)(L), V = (0, P.j)(L, {
        shouldFetchIfMissing: !0
    }), F = async (e, t) => {}, B = () => (0, r.jsx)(g.A, {
        onTextChange: e => null == a ? void 0 : a(e),
        pendingText: i,
        currentText: i,
        disableThemedBackground: !0,
        className: U.iX,
        innerClassName: U.pt
    }), Y = () => null != o && (m === M.vQ.USER_PROFILE_WISHLIST || m === M.vQ.DM_CHANNEL_WISHLIST) ? (0, r.jsx)(b.Z, {
        giftRecipient: o
    }) : (0, r.jsx)(u.A, {
        selectedSkuId: v,
        validateSelectedGift: F,
        recipients: w
    }), W = e => {
        null != h && h(null == e ? void 0 : e)
    }, K = () => {
        var e;
        return (0, r.jsxs)("div", {
            className: U.mT,
            children: [null != x && (0, r.jsx)(D.A, {
                containerClassName: U.T3,
                cardImage: x,
                cardBackgroundImage: G,
                altText: null != (e = null == L ? void 0 : L.name) ? e : "",
                shape: "square"
            }), (0, r.jsxs)("div", {
                className: U._T,
                children: [(0, r.jsx)(O.A, {
                    sound: d,
                    onSelect: W
                }), (0, r.jsx)(E.A, {
                    setEmojiConfetti: f,
                    emojiConfetti: null == c ? void 0 : c
                })]
            })]
        })
    }, q = () => {
        var e, t, n, i;
        if (null == L) return null;
        let a = (0, T.$g)(null != (e = null == (n = L.price) ? void 0 : n.amount) ? e : 0, null != (t = null == (i = L.price) ? void 0 : i.currency) ? t : j.Yr.USD);
        return (0, r.jsxs)("div", {
            className: U.AN,
            children: [(0, r.jsx)(l.zEo, {
                className: U.jr,
                children: k.intl.string(k.t.PpoJzt)
            }), (0, r.jsxs)("div", {
                className: U.Wx,
                children: [(0, r.jsx)("div", {
                    className: U.Xb,
                    children: null != L && null != x && (0, r.jsx)(D.A, {
                        containerClassName: U.Iy,
                        cardImage: x,
                        cardBackgroundImage: G,
                        altText: L.name,
                        shape: "square"
                    })
                }), (0, r.jsxs)("div", {
                    className: U.vz,
                    children: [null != S && (0, r.jsx)(R.Q, {
                        application: S
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-sm/semibold",
                        children: L.name
                    })]
                }), (0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: a
                })]
            })]
        })
    }, Z = () => (0, r.jsxs)("div", {
        className: U.Tc,
        children: [Y(), B(), q(), null != V && null != L && (0, r.jsx)(z, {
            handleClose: n,
            sku: L,
            guild: V
        })]
    });
    return {
        renderStepBody: () => (0, r.jsxs)("div", {
            className: U.Du,
            children: [K(), Z()]
        }),
        getLeftColumnComponent: K,
        getRightColumnComponent: Z,
        onStepChange: t,
        onBackClick: n,
        disabled: null == o || o.id === (null == N ? void 0 : N.id) || i.length > M.Jo
    }
};

function K(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        renderStepBody: i,
        onStepChange: a,
        onBackClick: o,
        disabled: s
    } = W({
        handleStepChange: t,
        handleClose: n
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.dZ, {
            children: i()
        }), (0, r.jsx)(m.UX, {
            children: (0, r.jsx)(l.jlY, {
                "data-migration-pending": !0,
                justify: f.A.Justify.BETWEEN,
                align: f.A.Align.CENTER,
                className: U.qr,
                children: (0, r.jsx)(Y, {
                    onStepChange: a,
                    onBackClick: o,
                    disabled: s
                })
            })
        })]
    })
}

function z(e) {
    let {
        handleClose: t,
        guild: n,
        sku: a
    } = e, o = i.useCallback(() => {
        (0, w.X)({
            guildId: n.id
        })
    }, [n.id]), s = i.useCallback(() => {
        var e;
        t();
        let r = null == (e = N.A.getStorefrontState(n.id)) ? void 0 : e.activePage;
        window.location.pathname.includes(L.BVt.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) || ((0, l.s7G)(), (0, w.default)({
            guildId: n.id,
            pageIndex: null != r ? r : 0,
            skuId: a.id,
            slug: a.slug
        }))
    }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: U.$O,
        children: (0, r.jsx)(l.QWc, {
            text: n.id === (0, C.zf)() ? k.intl.string(k.t.nyIcya) : k.intl.string(k.t.ImioFL),
            onMouseDown: o,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0
        })
    })
}