/** Chunk was on 54160 **/
/** chunk id: 914131, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => R
}), r(896048);
var n = r(627968),
    i = r(64700),
    a = r(284009),
    s = r.n(a),
    o = r(110259),
    l = r(417597),
    c = r(421380),
    u = r(397927),
    d = r(803306),
    m = r(631670),
    g = r(181658),
    f = r(576622),
    E = r(287809),
    p = r(954571),
    h = r(427262),
    y = r(32120),
    O = r(574454),
    S = r(871210),
    b = r(917118),
    v = r(325866),
    _ = r(350277),
    A = r(351486),
    j = r(789622),
    N = r(581735),
    x = r(652215),
    I = r(985018),
    T = r(176115);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function R(e) {
    let t, {
            source: r,
            transitionState: a,
            onClose: R,
            oneClickFlow: w = !1
        } = e,
        [L, M] = i.useState(w ? N.E.SUGGESTIONS : N.E.INFO),
        [D, G] = i.useState(!1),
        [k, U] = i.useState(null),
        [F, B] = i.useState(w ? j.iv.SUGGESTION : j.iv.NONE),
        [H, z] = i.useState(!1),
        [V, W] = i.useState(!1),
        K = i.useRef(null),
        q = (0, l.bG)([O.A], () => O.A.isCurrentUsernameInvalid()),
        Y = (0, l.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return s()(null != e, "PomeloModal: user cannot be undefined"), e
        }),
        {
            usernameSuggestion: $,
            usernameSuggestionLoading: X
        } = (0, b.G)(w ? 2e3 : void 0);
    i.useEffect(() => {
        F === j.iv.EDIT_USERNAME && W(!0), p.default.track(x.HAw.POMELO_EDIT_STEP_VIEWED, {
            source: r,
            step: F
        })
    }, [F, r]), i.useEffect(() => {
        V || H || null == $ || !($.length > 0) || J(e => {
            var t, r;
            return t = P({}, e), r = r = {
                username: $
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t
        })
    }, [$, V, H]);
    let [Z, J] = i.useState({
        username: (0, S.et)(Y),
        globalName: h.Ay.getName(Y)
    }), Q = e => {
        U(null), null != e.username && z(!0), J(t => P({}, t, e))
    }, ee = i.useMemo(() => [{
        slideId: N.E.INFO,
        next: N.E.EDIT_SCREEN,
        footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
    }, {
        slideId: N.E.EDIT_SCREEN,
        next: N.E.FINISH_LATER,
        back: N.E.INFO,
        footerButtons: [F === j.iv.PREVIEW ? "GOT_IT" : "BACK", F === j.iv.PREVIEW ? "GOT_IT" : F === j.iv.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
    }, {
        slideId: N.E.FINISH_LATER,
        back: N.E.EDIT_SCREEN
    }, {
        slideId: N.E.SUGGESTIONS,
        footerButtons: [F === j.iv.PREVIEW ? "GOT_IT" : "UPDATE"]
    }, {
        slideId: N.E.FINISH_LATER
    }], [F]), et = ee.length, er = i.useCallback(async () => {
        if (Z.globalName.length <= 0) {
            let e = I.intl.formatToPlainString(I.t.IpijXA, {
                minNum: 1,
                maxNum: 32
            });
            U(e), p.default.track(x.HAw.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal"
            });
            return
        }
        if (h.Ay.getGlobalName(Y) === Z.globalName) return void B(j.iv.EDIT_USERNAME);
        try {
            U(null), G(!0), await (0, m.gt)({
                global_name: Z.globalName
            }), B(j.iv.EDIT_USERNAME)
        } catch (t) {
            let e = new g.A(t).getAnyErrorMessage();
            p.default.track(x.HAw.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal"
            }), U(e)
        } finally {
            G(!1)
        }
    }, [Y, Z]), en = i.useCallback(async () => {
        try {
            U(null), G(!0), await y.A.createPomelo({
                username: (0, S.h_)(Z.username)
            }, w), await (0, d.eO)(Y.id), B(j.iv.PREVIEW)
        } catch (r) {
            let e = new g.A(r),
                t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRX);
            U(t), p.default.track(x.HAw.POMELO_ERRORS, {
                reason: t,
                username_error: !0,
                location: "modal",
                one_click_flow: w
            })
        } finally {
            G(!1)
        }
    }, [Z, Y.id, w]), ei = q || (0, S.C4)(Y), ea = i.useCallback(() => {
        B(ei ? j.iv.EDIT_USERNAME : j.iv.EDIT_DISPLAY_NAME), M(ee[Math.min(et - 1, L + 1)].slideId)
    }, [L, ee, et, ei]), es = i.useCallback(() => {
        U(null), L === N.E.EDIT_SCREEN ? F === j.iv.EDIT_USERNAME ? ei ? (B(j.iv.NONE), M(ee[Math.max(0, L - 1)].slideId)) : B(j.iv.EDIT_DISPLAY_NAME) : F === j.iv.EDIT_DISPLAY_NAME ? (B(j.iv.NONE), M(ee[Math.max(0, L - 1)].slideId)) : F === j.iv.PREVIEW && B(j.iv.EDIT_USERNAME) : M(ee[Math.max(0, L - 1)].slideId)
    }, [ee, L, F, ei]), eo = i.useCallback(() => {
        M(N.E.FINISH_LATER)
    }, []), el = i.useMemo(() => L === N.E.EDIT_SCREEN && F === j.iv.EDIT_DISPLAY_NAME ? er : L === N.E.EDIT_SCREEN && F === j.iv.EDIT_USERNAME ? en : L === N.E.SUGGESTIONS && F === j.iv.SUGGESTION ? en : ea, [L, F, er, en, ea]), ec = i.useMemo(() => {
        var e, t;
        return C(null != (e = null == (t = ee.find(e => e.slideId === L)) ? void 0 : t.footerButtons) ? e : [], {
            handleNext: el,
            handleBack: es,
            handleRemindMeLater: eo,
            onClose: R
        }, D, X, H)
    }, [es, eo, el, R, ee, L, D, X, H]), eu = i.useMemo(() => (0, S.Bj)(Y), [Y]);
    return i.useLayoutEffect(() => {
        (0, f.A)(Y.id, eu)
    }, [Y, eu]), i.useEffect(() => {
        var e, t;
        switch (F) {
            case j.iv.EDIT_DISPLAY_NAME:
                null == (e = K.current) || e.focusDisplayName();
                break;
            case j.iv.EDIT_USERNAME:
            case j.iv.SUGGESTION:
                null == (t = K.current) || t.focusUsername()
        }
    }, [F]), !H && null == k && (F === j.iv.EDIT_USERNAME ? t = I.intl.formatToPlainString(I.t.AJh8BR, {
        source: Y.username
    }) : F === j.iv.SUGGESTION && (X || null != $) && (t = I.intl.string(I.t["i/2SgP"]))), (0, n.jsxs)(u.EOs, {
        "data-migration-pending": !0,
        className: T.CR,
        impression: {
            impressionName: o.ImpressionNames.POMELO_LANDING,
            impressionProperties: {
                source: r,
                impression_group: o.ImpressionGroups.POMELO_FLOW,
                one_click_flow: w
            }
        },
        transitionState: a,
        size: u.rIJ.DYNAMIC,
        parentComponent: "PomeloModal",
        children: [(0, n.jsx)(c.$n, {
            "data-migration-pending": !0,
            onClick: () => {
                L === N.E.SUGGESTIONS || L === N.E.EDIT_SCREEN ? M(N.E.FINISH_LATER) : R()
            },
            size: c.$n.Sizes.MIN,
            look: c.$n.Looks.BLANK,
            className: T.G3,
            "aria-label": I.intl.string(I.t.cpT0Cq),
            children: (0, n.jsx)(u.PGe, {
                size: "custom",
                color: "currentColor",
                width: 15,
                height: 15,
                className: T.VN
            })
        }), (0, n.jsx)(u.$mQ, {
            "data-migration-pending": !0,
            className: T.hQ,
            children: (0, n.jsxs)(u.tN_, {
                activeSlide: L,
                width: 480,
                children: [(0, n.jsx)(u.q7S, {
                    id: N.E.INFO,
                    children: (0, n.jsx)(A.A, {
                        user: Y
                    })
                }), (0, n.jsx)(u.q7S, {
                    id: N.E.EDIT_SCREEN,
                    children: (0, n.jsx)(v.A, {
                        user: Y,
                        error: k,
                        editState: F,
                        userRef: K,
                        formValues: Z,
                        footerNotice: t,
                        onChangeFormValue: Q,
                        onFocusUsername: () => B(j.iv.EDIT_USERNAME),
                        onFocusDisplayName: () => B(j.iv.EDIT_DISPLAY_NAME),
                        onClose: R
                    })
                }), (0, n.jsx)(u.q7S, {
                    id: N.E.FINISH_LATER,
                    children: (0, n.jsx)(_.A, {
                        onClose: R
                    })
                }), (0, n.jsx)(u.q7S, {
                    id: N.E.SUGGESTIONS,
                    children: (0, n.jsx)(v.A, {
                        user: Y,
                        error: k,
                        editState: F,
                        userRef: K,
                        formValues: Z,
                        footerNotice: t,
                        onChangeFormValue: Q,
                        onFocusUsername: () => B(j.iv.SUGGESTION),
                        onFocusDisplayName: () => B(j.iv.EDIT_DISPLAY_NAME),
                        onClose: R,
                        usernameSuggestionLoading: X,
                        oneClickFlow: w
                    })
                })]
            })
        }), ec]
    })
}
let C = (e, t, r, i, a) => 0 === e.length ? null : (0, n.jsxs)(u.jlY, {
    "data-migration-pending": !0,
    className: T.qr,
    children: [(0, n.jsxs)("div", {
        className: T.mG,
        children: [e.includes("REMIND_ME_LATER") && (0, n.jsx)(c.$n, {
            "data-migration-pending": !0,
            className: T.I,
            type: "button",
            size: c.$n.Sizes.SMALL,
            look: c.$n.Looks.BLANK,
            color: c.$n.Colors.CUSTOM,
            onClick: t.handleRemindMeLater,
            children: I.intl.string(I.t["1mGbXA"])
        }), e.includes("NEXT") && (0, n.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.PDTjLN),
            type: "button",
            loading: r,
            onClick: t.handleNext
        }), e.includes("SUBMIT") && (0, n.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.geKm7t),
            type: "button",
            loading: r,
            onClick: t.handleNext
        }), e.includes("GET_STARTED") && (0, n.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.LhlgY9),
            type: "button",
            onClick: t.handleNext
        }), e.includes("GOT_IT") && (0, n.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t["NX+WJN"]),
            type: "button",
            onClick: t.onClose
        }), e.includes("UPDATE") && (0, n.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.VZANAD),
            type: "button",
            disabled: i && !a,
            loading: r,
            onClick: t.handleNext
        })]
    }), e.includes("BACK") && (0, n.jsx)(c.$n, {
        "data-migration-pending": !0,
        className: T.I,
        type: "button",
        size: c.$n.Sizes.SMALL,
        look: c.$n.Looks.BLANK,
        color: c.$n.Colors.CUSTOM,
        onClick: t.handleBack,
        children: I.intl.string(I.t["13/7kX"])
    })]
})