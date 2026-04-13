/** chunk id: 598131 params = (module,exports,require) **/
n.d(t, {
    A: () => ea
});
var a = n(627968),
    l = n(64700),
    i = n(2110),
    r = n(158954),
    s = n(397927),
    d = n(235986),
    o = n(834981),
    c = n(840387),
    u = n(319582),
    _ = n(17372),
    m = n(369053),
    p = n(482578),
    h = n(248492),
    x = n(133134),
    g = n(374966),
    A = n(803957),
    v = n(905074),
    b = n(384826),
    f = n(80718),
    T = n(676978),
    S = n(657679),
    E = n(404192),
    I = n(608523),
    C = n(717612),
    N = n(748113),
    j = n(458739),
    y = n(325272),
    k = n(688927),
    R = n(796071),
    D = n(132318),
    M = n(985879),
    O = n(117056),
    w = n(66535),
    G = n(12613),
    L = n(842012),
    U = n(666580),
    P = n(588684),
    B = n(316862),
    H = n(563218),
    F = n(617071),
    V = n(883471),
    W = n(943071),
    z = n(216033),
    K = n(908675),
    $ = n(503985),
    Q = n(145996),
    Y = n(964448),
    q = n(652215),
    Z = n(985018),
    J = n(190192),
    X = n(687404);
let ee = ["user_urf", "message_urf", "guild_urf", "media_takedown"];

function et(e, t) {
    let {
        elements: n
    } = e;
    return n.find(e => {
        let {
            type: n
        } = e;
        return n === t
    })
}

function en(e, t) {
    let {
        elements: n
    } = e;
    return n.filter(e => {
        let {
            type: n
        } = e;
        return n === t
    })
}
let ea = e => {
    let {
        node: t,
        reportType: n,
        reportSubType: ea,
        history: el,
        onSelectChild: ei,
        onModalClose: er,
        onSubmit: es,
        onNavigateToNode: ed,
        multiSelect: eo,
        reportId: ec,
        textInput: eu,
        initialErrorMessage: e_
    } = e, em = et(t, "checkbox"), ep = et(t, "text_line_resource"), eh = en(t, "external_link"), ex = en(t, "free_text"), eg = en(t, "dropdown"), eA = et(t, "country_select"), ev = et(t, "inline_notice"), eb = en(t, "radio_group"), ef = et(t, "text"), eT = et(t, "content_url_input"), eS = i.x.REPORT_TO_MOD.has(n.name), eE = n.name === _.tY.MEDIA_TAKEDOWN, [eI, eC] = l.useState(!1), [eN, ej] = l.useState(!1), [ey, ek] = l.useState(e_ ?? ""), [eR, eD] = l.useState(() => ({})), [eM, eO] = l.useState(() => ({})), ew = l.useRef(null), eG = l.useMemo(() => "message" === n.name ? n.record.channel_id : void 0, [n]), eL = l.useCallback(e => ({
        nodeRef: t.id,
        destination: e,
        textInput: null != ex || null != eg || null != eA || eb.length > 0 || null != eT ? eM : void 0,
        multiSelect: null != em ? {
            name: em.name,
            state: eR
        } : void 0
    }), [t, ex, eg, eA, eb, eT, em, eR, eM]), eU = l.useMemo(() => (0, m.ks)({
        freeTextElements: ex,
        dropdownElements: eg,
        countrySelectElement: eA,
        radioGroupElements: eb,
        multiSelectElement: em,
        contentUrlInputElement: eT
    }, {
        textInput: eM,
        multiSelect: eR
    }), [ex, eg, eA, eb, em, eT, eM, eR]), eP = l.useCallback((e, t) => {
        let n = {
            ...eR
        };
        e in eR ? delete n[e] : n[e] = t, eD(n)
    }, [eR]), eB = l.useCallback(function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0,
            l = arguments.length > 4 ? arguments[4] : void 0,
            i = {
                ...eM
            };
        i[e] = {
            value: t,
            isValid: n
        }, null != a && (null != l && "" !== l ? i[a] = {
            value: l,
            isValid: n
        } : delete i[a]), eO(i)
    }, [eM]), eH = l.useCallback(e => {
        ei(eL(e))
    }, [ei, eL]);
    l.useEffect(() => {
        null != eo && eD(eo), null != eu && eO(eu)
    }, [eo, eu]), l.useEffect(() => {
        null != e_ && ek(e_)
    }, [e_]), l.useEffect(() => {
        if ("" !== ey) {
            let e = setTimeout(() => {
                let e = ew.current?.parentElement;
                null != e && e.scrollTo({
                    top: e.scrollHeight,
                    behavior: "smooth"
                })
            }, 50);
            return () => clearTimeout(e)
        }
    }, [ey]), l.useEffect(() => {
        if (null != em) {
            let e = em.data;
            if (null != e)
                for (let [t, n, a, l] of e) l && eD(e => ({
                    ...e,
                    [t]: n
                }))
        }
    }, [em]);
    let eF = l.useCallback(e => {
            switch (e) {
                case q.t02.UNKNOWN_TIDA_CONTENT: {
                    let e = Z.intl.string(Z.t["2EPoxE"]);
                    ek(e), ed?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                    break
                }
                case q.t02.INVALID_SIGNATURE_MISMATCH:
                    ek(Z.intl.string(Z.t.kXrnQM));
                    break;
                case q.t02.INVALID_FORM_BODY:
                    ek(Z.intl.string(Z.t.VjAAuP));
                    break;
                default:
                    eS ? ek(Z.intl.string(J.default.psKFdJ)) : ek(Z.intl.string(Z.t.h6D8Vy))
            }
        }, [eS, ed]),
        eV = l.useCallback(() => {
            let t = ["", e.successNodeId];
            es(eL(t)).then(() => {
                ek(""), eH(t)
            }).catch(e => {
                eF(e.body?.code)
            }).finally(() => {
                eC(!1)
            })
        }, [e.successNodeId, eL, es, eH, eF]),
        eW = l.useCallback(e => {
            switch (e.type) {
                case "done":
                case "cancel":
                    er();
                    break;
                case "next":
                    eH(["", e.target]);
                    break;
                case "submit":
                    eC(!0), eV()
            }
        }, [er, eH, eV]),
        ez = l.useCallback(e => {
            "Enter" !== e.key || eU || eI || null == t.button || (e.preventDefault(), eW(t.button))
        }, [eU, eI, t.button, eW]);
    l.useEffect(() => {
        t.is_auto_submit && !eN && (ej(!0), es(eL(["", t.id])))
    }, [t.is_auto_submit, eN, es, eL, t.id]);
    let eK = (0, u.fY)(ea),
        e$ = null != et(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eQ = (0, c.Z)(),
        eY = (0, o.GR)(),
        eq = eQ && eY.length > 0 && null != et(t, "share_with_parents");
    return (0, a.jsxs)("div", {
        className: X.kL,
        onKeyDown: ez,
        children: [(0, a.jsx)("div", {
            className: X.U1,
            children: null != t.header && "" !== t.header ? (0, a.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.header
            }) : null
        }), (0, a.jsx)("div", {
            className: X.b,
            children: (0, a.jsx)(r.JnF, {
                onClick: er
            })
        }), (0, a.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            direction: d.A.Direction.VERTICAL,
            className: X.wx,
            children: [(0, a.jsx)(W.A, {
                element: et(t, "success")
            }), (0, a.jsx)(k.A, {
                node: t,
                isModeratorReport: eS,
                isTidaReport: eE,
                hideTitle: !0
            }), (0, a.jsx)(D.A, {
                node: t
            })]
        }), (0, a.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: X.rf,
            children: [null != ep && (0, a.jsx)(K.A, {
                element: ep
            }), null != ef && (0, a.jsx)(z.A, {
                element: ef
            }), null != et(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, a.jsx)(w.A, {
                message: n.record
            }), null != et(t, "user_preview") && "user" === n.name ? (0, a.jsx)($.A, {
                user: n.record
            }) : null, null != et(t, "widget_preview") && "widget" === n.name ? (0, a.jsx)(Q.A, {
                widget: n.widget,
                userId: n.user_id
            }) : null, null != et(t, "guild_preview") && "guild" === n.name ? (0, a.jsx)(j.A, {
                guild: n.record
            }) : null, null != et(t, "breadcrumbs") && (0, a.jsx)(g.A, {
                isModeratorReport: eS,
                history: el
            }), function(e) {
                let {
                    elements: t
                } = e;
                return t.some(e => {
                    let {
                        type: t
                    } = e;
                    return Y.T.includes(t)
                })
            }(t) && (0, a.jsxs)(P.A, {
                children: [e$ && (0, a.jsx)(R.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: eG,
                    reportId: ec
                }), eq && (0, a.jsx)(F.A, {
                    parents: eY
                }), null != et(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, a.jsx)(x.A, {
                    user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
                    channelId: eG,
                    reportId: ec,
                    reportType: n
                }), !e$ && null != et(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, a.jsx)(L.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: eG,
                    reportId: ec
                }), null != et(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, a.jsx)(T.A, {
                    message: n.record,
                    reportId: ec
                }), null != et(t, "leave_guild") && "guild" === n.name && (0, a.jsx)(O.A, {
                    guildId: n.record.id,
                    reportId: ec
                }), null != et(t, "deauthorize_app") && "application" === n.name && (0, a.jsx)(f.A, {
                    application: n.record,
                    reportId: ec
                }), null != et(t, "deauthorize_app") && "application" === n.name && (0, a.jsx)(B.A, {
                    application: n.record,
                    reportId: ec
                })]
            }), null != et(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eK && (0, a.jsx)(H.A, {
                settingsUpsells: eK,
                channelId: n.record.channel_id,
                onModalClose: er,
                reportId: ec,
                reportType: n,
                reportSubType: ea
            }), null != et(t, "channel_preview") && "stage_channel" === n.name && (0, a.jsx)(V.A, {
                stageInstance: n.record
            }), null != et(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, a.jsx)(y.A, {
                event: n.record
            }), null != et(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, a.jsx)(C.A, {
                entry: n.record
            }), null != et(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, a.jsx)(N.A, {
                entry: n.record
            }), null != et(t, "app_preview") && "application" === n.name && (0, a.jsx)(h.A, {
                entry: n.record
            }), null != em && (0, a.jsx)(G.A, {
                element: em,
                onChange: eP,
                state: eR
            }), ee.includes(n.name) && null != eT && (0, a.jsx)(v.A, {
                element: eT,
                onChange: eB,
                state: eM
            }), ee.includes(n.name) && null != eg && eg.length > 0 && (0, a.jsx)("div", {
                children: (0, a.jsx)(S.A, {
                    elements: eg,
                    onChange: eB,
                    state: eM
                })
            }), eb.map(e => (0, a.jsx)(U.A, {
                element: e,
                onChange: eB,
                state: eM
            }, e.name)), null != ev && function(e, t, n) {
                let {
                    visible_when: a
                } = e.data;
                if (null == a) return !0;
                let l = null != a.element_name ? t.elements.find(e => {
                    let {
                        name: t
                    } = e;
                    return t === a.element_name
                }) : et(t, a.element_type);
                return null != l && n?.[l.name]?.value === a.value
            }(ev, t, eM) && (0, a.jsx)(M.A, {
                element: ev
            }), null != eA && (0, a.jsx)(b.A, {
                element: eA,
                onChange: eB,
                state: eM
            }), ee.includes(n.name) && null != ex && ex.length > 0 && (0, a.jsx)(I.A, {
                elements: ex,
                onChange: eB,
                state: eM
            }), (null != t.children && t.children.length > 0 || null != eh && eh.length > 0) && (0, a.jsxs)("div", {
                className: X.qI,
                children: [(0, a.jsx)(A.A, {
                    node: t,
                    onSelectChild: eH,
                    nodeMap: e.nodeMap
                }), null != eh && eh.length > 0 ? (0, a.jsx)(E.A, {
                    elements: eh
                }) : null]
            }), "" !== ey ? (0, a.jsx)("div", {
                ref: ew,
                children: (0, a.jsx)(s.wx6, {
                    type: "critical",
                    children: ey
                })
            }) : null]
        }), (0, a.jsx)(p.A, {
            button: t.button,
            submitting: eI,
            disableNext: eU,
            isModeratorReport: eS,
            onClick: eW,
            onBackClicked: e.onNavigateBack,
            canNavigateBack: el.length > 0,
            className: X.qr
        })]
    })
}