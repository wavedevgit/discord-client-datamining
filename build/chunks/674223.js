/** Chunk was on 53068 **/
/** chunk id: 674223, original params: e,n,t (module,exports,require) **/
t.d(n, {
    K_: () => O
});
var l = t(627968);
t(64700);
var a = t(311907),
    i = t(397927),
    r = t(734925),
    s = t(687033),
    o = t(235986),
    c = t(871181),
    u = t(683433),
    d = t(287809),
    p = t(67480),
    f = t(328968),
    g = t(371794),
    b = t(937008),
    j = t(156312),
    h = t(166532),
    m = t(482132),
    y = t(788868),
    v = t(985018),
    x = t(402671);
let O = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: e => (0, l.jsx)(k, function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
                var l;
                l = t[n], n in e ? Object.defineProperty(e, n, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = l
            })
        }
        return e
    }({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => v.intl.string(v.t["W685+b"])
    }
};

function P(e) {
    let {
        onStepChange: n,
        onBackClick: t,
        showBackButton: a = !1,
        disabled: r = !1,
        loading: s = !1
    } = e, {
        hasPaymentSources: o
    } = (0, j.P5)(), c = o ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.Button, {
            onClick: () => n(c),
            disabled: r,
            loading: s,
            text: v.intl.string(v.t.XiOHRX)
        }), a ? (0, l.jsx)(u.A, {
            onClick: t
        }) : null]
    })
}

function k(e) {
    var n;
    let {
        handleStepChange: t,
        handleClose: u
    } = e, {
        customGiftMessage: h = "",
        setCustomGiftMessage: v,
        giftRecipient: O
    } = (0, b.Pv)(), {
        selectedSkuId: k
    } = (0, j.P5)(), A = (0, a.bG)([d.default], () => d.default.getCurrentUser()), C = (0, a.bG)([p.A], () => null != k ? p.A.get(k) : null, [k]), T = (0, s.A)(), E = (0, a.bG)([f.A], () => null != k ? f.A.getForSKU(k) : null, [k]), I = (null == E ? void 0 : E.headerBackground) != null && (null == C ? void 0 : C.applicationId) != null ? (0, g.YE)(C.applicationId, E.headerBackground, 256) : void 0, _ = async (e, n) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m.dZ, {
            children: (0, l.jsxs)("div", {
                className: x.Du,
                children: [(0, l.jsxs)("div", {
                    className: x.mT,
                    children: [(null == C ? void 0 : C.name) != null && (0, l.jsx)(i.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: C.name
                    }), null != I && (0, l.jsx)("img", {
                        src: I,
                        alt: null != (n = null == C ? void 0 : C.name) ? n : "",
                        className: x.LC
                    })]
                }), (0, l.jsxs)("div", {
                    className: x.Tc,
                    children: [(0, l.jsx)(r.A, {
                        recipients: T,
                        selectedSkuId: k,
                        validateSelectedGift: _
                    }), (0, l.jsx)(c.A, {
                        onTextChange: e => null == v ? void 0 : v(e),
                        pendingText: h,
                        currentText: h,
                        disableThemedBackground: !0,
                        className: x.iX,
                        innerClassName: x.pt
                    })]
                })]
            })
        }), (0, l.jsx)(m.UX, {
            children: (0, l.jsx)(i.jlY, {
                "data-migration-pending": !0,
                justify: o.A.Justify.BETWEEN,
                align: o.A.Align.CENTER,
                children: (0, l.jsx)(P, {
                    onStepChange: t,
                    onBackClick: u,
                    disabled: null == O || O.id === (null == A ? void 0 : A.id) || h.length > y.Jo
                })
            })
        })]
    })
}