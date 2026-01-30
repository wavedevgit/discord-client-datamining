/** chunk id: 559947, original params: e,A,t (module,exports,require) **/
t.d(A, {
    default: () => _
}), t(896048), t(228524);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(284009),
    s = t.n(i),
    o = t(417597),
    d = t(827734),
    u = t(73939),
    c = t(36525),
    g = t(314116),
    f = t(397927),
    p = t(686956),
    m = t(262828),
    v = t(915089),
    h = t(722888),
    b = t(809506),
    q = t(465932),
    C = t(2553),
    j = t(253932),
    U = t(317525),
    V = t(580630),
    x = t(371794),
    O = t(218394),
    y = t(464990),
    P = t(871109),
    K = t(253141),
    N = t(937409),
    I = t(500770),
    F = t(563838),
    T = t(426043),
    X = t(575077),
    W = t(692646),
    Q = t(184119),
    S = t(717040),
    Z = t(319543),
    z = t(500208),
    w = t(652215),
    L = t(705751),
    R = t(985018),
    D = t(294851);

function k(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(A) {
            var r;
            r = t[A], A in e ? Object.defineProperty(e, A, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[A] = r
        })
    }
    return e
}
let G = (0, v.Ld)(),
    E = (0, v.Ld)(),
    B = (0, v.Ld)();

function Y(e) {
    let {
        text: A,
        onChange: t,
        value: n,
        disabled: l,
        warning: i
    } = e, s = (0, v.GV)(), o = l ? "text-muted" : "text-default";
    return (0, r.jsxs)("label", {
        className: a()(D.$4, {
            [D.r9]: l
        }),
        htmlFor: s,
        children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: o,
            children: A
        }), null != i && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(f.hKd, {
                size: 4,
                horizontal: !0
            }), i]
        }), (0, r.jsx)(f.dOG, {
            onChange: t,
            checked: n,
            disabled: l,
            id: s
        })]
    })
}

function H(e, A) {
    return e.filter(e => {
        let {
            value: t,
            label: r
        } = e;
        return t.toString().includes(A) || r.includes(A)
    })
}

function M(e) {
    let {
        guildId: A,
        selectedPriceTier: t,
        setPriceTier: l,
        label: a,
        errorMessage: i
    } = e, {
        priceTiers: s
    } = (0, h._)(A, w.L_o.GUILD_PRODUCTS), o = n.useMemo(() => (null != s ? s : null != t ? [t] : []).map(e => ({
        id: e.toString(),
        value: e,
        label: (0, V.$g)(e, w.Yri.USD)
    })), [s, t]);
    return (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        label: a,
        errorMessage: i,
        value: t,
        placeholder: R.intl.string(R.t.aI4J5H),
        maxOptionsVisible: 5,
        options: o,
        onSelectionChange: l,
        customMatchSorter: H,
        required: !0
    })
}

function J(e) {
    var A, t, l, a, i, v, h, C, H, J, $, ee;
    let {
        guildId: eA,
        productId: et,
        transitionState: er,
        onClose: en
    } = e, [el, ea] = n.useState(et), ei = (0, o.bG)([P.A], () => null == el ? null : P.A.getGuildProduct(el), [el]), es = (0, o.bG)([P.A], () => P.A.getGuildProductsForGuild(eA, {
        publishedOnly: !0
    }).length, [eA]), eo = (null == ei ? void 0 : ei.published) === !0, {
        application: ed
    } = (0, m.A)(eA, L.S7.GUILD_ROLE_SUBSCRIPTIONS), eu = N.D["0"], ec = j.kt.useSetting(), eg = (0, O.j)(), ef = n.useCallback(() => {
        var e;
        return (null == ei || null == (e = ei.image_asset) ? void 0 : e.application_id) == null ? eu.data : (0, x.YE)(ei.image_asset.application_id, ei.image_asset, 600, eg && ec ? void 0 : "webp")
    }, [eu, ei, eg, ec]), {
        shouldRestrictUpdatingCreatorMonetizationSettings: ep
    } = (0, q.nq)(eA);
    n.useEffect(() => {
        ep && (en(), (0, X.p)(R.intl.string(R.t.OLf3xn), R.t["90LBVr"]))
    }, [ep, en]);
    let [em, ev] = n.useState(null != (A = null == ei ? void 0 : ei.name) ? A : ""), [eh, eb] = n.useState(null != (t = null == ei ? void 0 : ei.description) ? t : ""), [eq, eC] = n.useState(null != (l = null == ei ? void 0 : ei.price_tier) ? l : void 0), [ej, eU] = n.useState(ef), [eV, ex] = n.useState(null != (a = null == ei || null == ($ = ei.image_asset) ? void 0 : $.filename) ? a : eu.name), [eO, ey] = n.useState(!1), [eP, eK] = n.useState(), eN = n.useMemo(() => null != eq ? (0, V.$g)(eq, w.Yri.USD) : void 0, [eq]), [eI, eF] = n.useState(!0), {
        changesSaving: eT,
        saveError: eX,
        saveProductWithAttachments: eW,
        hasUnsavedAttachmentChanges: eQ,
        cancelUnusedUploads: eS
    } = (0, y.Z)(), eZ = (null == ei ? void 0 : ei.attachments) != null && (null == ei ? void 0 : ei.attachments.length) > 0, ez = null != eX ? eX : eP, ew = null != eT && "published" in eT, eL = null != eT && !ew, eR = null != (i = null == ei ? void 0 : ei.role_id) ? i : null, [eD, ek] = n.useState(), eG = null != eD || null != eR, eE = (0, o.bG)([U.A], () => null != eR && null !== eD ? U.A.getRole(eA, eR) : null != eD ? eD : void 0, [eD, eR, eA]), eB = "";
    eG && eI ? eB = R.intl.string(R.t.ih4QMU) : eG ? eB = R.intl.string(R.t.o9xphc) : eI && (eB = R.intl.string(R.t.DWYJua));
    let eY = () => {
            eF(!1), eS()
        },
        [eH, eM] = n.useState(),
        {
            changes: eJ,
            hasUnsavedChanges: e_,
            canSaveForDraft: e$,
            canSaveForPublished: e0,
            canPublishOrUnpublish: e1
        } = n.useMemo(() => (0, K.EY)({
            guildProductListing: ei,
            name: em,
            priceTier: eq,
            description: eh,
            image: ej,
            imageName: eV,
            isImageChanged: eO,
            newRoleParams: eD,
            hasSavedAttachments: eZ,
            hasUnsavedAttachmentChanges: eQ
        }), [ei, em, eq, eh, ej, eV, eO, eD, eZ, eQ]),
        e9 = n.useMemo(() => e_ || null == eH || "publish" === eH || null != ez ? null : (0, r.jsx)(f.FQk, {
            className: D.Er,
            children: (0, r.jsx)(c.A, {
                message: (0, r.jsxs)("div", {
                    className: D.Lk,
                    children: [(0, r.jsx)(f.yr3, {
                        size: "md",
                        color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                        secondaryColor: d.A.colors.WHITE.css
                    }), (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: "draft" === eH ? R.intl.string(R.t["3Rv4MB"]) : "update_publish" === eH ? R.intl.string(R.t["8fPiB3"]) : R.intl.string(R.t["3LUFnI"])
                    })]
                }),
                onReset: () => eM(void 0),
                onResetText: R.intl.string(R.t.T6QuWe)
            })
        }), [ez, e_, eH]),
        e6 = n.useCallback(() => {
            e_ ? (0, T.A)({
                title: R.intl.string(R.t.FVDhIW),
                body: R.intl.string(R.t.Hgdhwb),
                cta: R.intl.string(R.t["h0bti/"]),
                closeLabel: R.intl.string(R.t["+WYo0m"]),
                onConfirm: () => {
                    en()
                }
            }) : en()
        }, [en, e_]);
    n.useEffect(() => {
        (0, f.zbz)(z.DG, e => (0, r.jsx)(_, k({
            guildId: eA,
            productId: el
        }, e)), e6)
    }, [eA, e6, el]);
    let e3 = async e => {
        let A = (0, K.ig)({
            newRoleParams: eD
        });
        if (eK(A), null != A) return;
        let t = await eW(e);
        if (ey(!1), null != t) {
            if (null != e.name && ev(t.name), null != e.description && eb(t.description), null != eD) {
                let e = t.role_id;
                s()(null != e, "Cannot update role without role ID"), await p.A.updateRole(eA, e, eD)
            }
            ek(void 0), ea(t.id), "published" in e && !0 === e.published && en()
        }
    };
    n.useEffect(() => {
        if (null != ez) {
            var e;
            (0, W.Z)(ez, eA, null == ed || null == (e = ed.team) ? void 0 : e.id)
        }
    }, [ez, eA, ed]), n.useEffect(() => {
        e_ && eM(void 0)
    }, [e_]);
    let e7 = n.useRef(null);
    return (0, r.jsxs)(f.EOs, {
        transitionState: er,
        size: f.rIJ.DYNAMIC,
        className: D.CR,
        "aria-labelledby": G,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [(0, r.jsxs)(f.rQ0, {
            className: D.Hc,
            separator: !1,
            "data-migration-pending": !0,
            children: [(0, r.jsxs)("div", {
                className: D.TK,
                children: [(0, r.jsx)(f.Heading, {
                    id: G,
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: R.intl.string(R.t.DnNl1T)
                }), (0, r.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: R.intl.string(R.t["Tu7f+f"])
                })]
            }), (0, r.jsx)(f.s_y, {
                onClick: e6,
                className: D.__invalid_modalCloseButton,
                "data-migration-pending": !0
            })]
        }), (0, r.jsxs)(f.$mQ, {
            className: D.jE,
            scrollbarType: "none",
            "data-migration-pending": !0,
            children: [(0, r.jsx)(f.IpV, {
                children: (0, r.jsxs)("div", {
                    className: D.sj,
                    ref: e7,
                    children: [(0, r.jsx)(f.ksK, {
                        label: R.intl.string(R.t.Hsk7xT),
                        error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("name"),
                        value: em,
                        onChange: ev,
                        id: E,
                        maxLength: 100,
                        placeholder: R.intl.string(R.t["/BiYSO"]),
                        required: !0
                    }), (0, r.jsx)(b.A, {
                        label: R.intl.string(R.t.QdKLyW),
                        errorMessage: null != (v = null == ez ? void 0 : ez.getFirstFieldErrorMessage("description")) ? v : void 0,
                        id: B,
                        className: D.kj,
                        value: eh,
                        onChange: eb,
                        maxLength: 1500,
                        placeholder: R.intl.string(R.t.BFwyum),
                        showCharacterCount: eh.length > 0,
                        parentModalKey: z.DG,
                        required: !0
                    }), (0, r.jsx)(M, {
                        label: R.intl.string(R.t["CAY/vh"]),
                        errorMessage: null != (h = null == ez ? void 0 : ez.getFirstFieldErrorMessage("price_tier")) ? h : void 0,
                        guildId: eA,
                        selectedPriceTier: eq,
                        setPriceTier: eC
                    }), (0, r.jsx)(f.D0$, {
                        label: R.intl.string(R.t.sqXj60),
                        errorMessage: null != (C = null == ez ? void 0 : ez.getFirstFieldErrorMessage("image")) ? C : void 0,
                        description: R.intl.string(R.t.yOU4Vm),
                        children: (0, r.jsx)(Q.A, {
                            presetImages: N.D,
                            radioGroupAriaLabel: R.intl.string(R.t.fKzQj0),
                            image: ej,
                            imageName: eV,
                            savedImageName: null == ei || null == (ee = ei.image_asset) ? void 0 : ee.filename,
                            onChange: (e, A) => {
                                if (null != e) {
                                    var t;
                                    eU(e), ex(A), ey(e.startsWith("data:") || A !== (null == ei || null == (t = ei.image_asset) ? void 0 : t.filename))
                                }
                            }
                        })
                    }), eI ? (0, r.jsx)(f.D0$, {
                        label: R.intl.string(R.t.zLrtkN),
                        errorMessage: null != (H = null == ez ? void 0 : ez.getFirstFieldErrorMessage("attachments")) ? H : void 0,
                        children: (0, r.jsx)(F.F, {
                            onFileAdded: () => {
                                var e;
                                null == (e = e7.current) || e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "end"
                                })
                            }
                        })
                    }) : null, eG ? (0, r.jsx)(Z.Ay, {
                        error: null != (J = null == ez ? void 0 : ez.getFirstFieldErrorMessage(K.a)) ? J : void 0,
                        newRoleParams: eD,
                        setNewRoleParams: ek,
                        guildId: eA,
                        listingRoleId: eR,
                        productId: el
                    }) : null]
                })
            }), (0, r.jsx)("div", {
                className: D.cD
            }), (0, r.jsx)(f.IpV, {
                children: (0, r.jsxs)("div", {
                    className: D.mA,
                    children: [(0, r.jsx)(S.A, {
                        disabled: !e1 || !eo && es >= 50,
                        disabledTooltip: eo ? R.intl.string(R.t["0NQ00t"]) : es >= 50 ? R.intl.format(R.t.IqWPVt, {
                            maxProducts: 50
                        }) : R.intl.string(R.t["Ax89/c"]),
                        published: eo,
                        onClick: () => {
                            var e, A;
                            s()(e1, "Attempting to publish/unpublish when not allowed"), eM(eo ? "unpublish" : "publish"), e3((e = k({}, eJ), A = A = {
                                published: !eo
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, r)
                                }
                                return t
                            })(Object(A)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                            }), e))
                        },
                        submitting: ew
                    }), (0, r.jsx)("div", {
                        className: D.AC
                    }), (0, r.jsx)(f.Heading, {
                        variant: "text-xs/bold",
                        color: "text-default",
                        className: D.B9,
                        children: R.intl.string(R.t["6I7nQT"])
                    }), (0, r.jsx)(f.hKd, {
                        size: 4
                    }), (0, r.jsx)(f.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.string(R.t.Oq4dfU)
                    }), (0, r.jsx)(f.hKd, {
                        size: 16
                    }), (0, r.jsx)(I.A, {
                        imageUrl: ej,
                        name: "" === em ? R.intl.string(R.t.EmqIwl) : em,
                        description: "" === eh ? R.intl.string(R.t["11NA2L"]) : eh,
                        formattedPrice: eN,
                        role: eE,
                        productType: eB,
                        ctaComponent: (0, r.jsx)(f.Button, {
                            text: R.intl.string(R.t.xUi3BL)
                        }),
                        cardWidth: 340,
                        thumbnailHeight: 190
                    })]
                })
            })]
        }), (0, r.jsx)(f.jlY, {
            "data-migration-pending": !0,
            children: (0, r.jsxs)("div", {
                className: D.jj,
                children: [(0, r.jsxs)("div", {
                    className: D.mx,
                    children: [(0, r.jsx)(Y, {
                        text: R.intl.string(R.t.YzGIVF),
                        value: eG,
                        onChange: e => {
                            e ? ek((0, Z.Jn)()) : ek(void 0)
                        },
                        warning: null === eD ? (0, r.jsx)(Z.id, {}) : void 0,
                        disabled: null != eR
                    }), (0, r.jsx)(Y, {
                        text: R.intl.string(R.t.C6wP2Q),
                        value: eI,
                        onChange: e => {
                            e ? eF(!0) : eQ ? (0, g.A)({
                                title: R.intl.string(R.t["2WihyY"]),
                                subtitle: R.intl.string(R.t.ixRBLh),
                                confirmText: R.intl.string(R.t.N86XcP),
                                onConfirm: eY
                            }) : eY()
                        },
                        disabled: eZ
                    })]
                }), (0, r.jsx)("div", {
                    className: D.TM,
                    children: eo ? (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        text: R.intl.string(R.t.XYBEaV),
                        disabled: !e0,
                        loading: eL,
                        onClick: () => {
                            s()(e0, "cannot save changes for published product without adding all fields"), eM("update_publish"), e3(eJ)
                        }
                    }) : (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        text: R.intl.string(R.t.ZCjwob),
                        disabled: !e$,
                        loading: eL,
                        onClick: () => {
                            s()(e$, "cannot save changes without name or price tier"), eM("draft"), e3(eJ)
                        }
                    })
                })]
            })
        }), (0, r.jsx)(u.F, {
            component: "div",
            className: D.Nt,
            children: e9
        })]
    })
}

function _(e) {
    var A;
    return (0, r.jsx)(y.R, {
        guildId: e.guildId,
        editSkuId: null != (A = e.productId) ? A : void 0,
        onFileSizeError: () => (0, C.A)(z.vN),
        children: (0, r.jsx)(J, k({}, e))
    })
}