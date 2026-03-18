/** chunk id: 598131 params = (module,exports,require) **/
n.d(t, {
    A: () => el
});
var l = n(627968),
    a = n(64700),
    r = n(2110),
    i = n(397927),
    s = n(235986),
    d = n(834981),
    o = n(840387),
    c = n(319582),
    u = n(17372),
    _ = n(369053),
    m = n(482578),
    x = n(248492),
    p = n(133134),
    h = n(374966),
    g = n(803957),
    A = n(905074),
    v = n(384826),
    f = n(80718),
    b = n(676978),
    C = n(657679),
    j = n(932482),
    T = n(404192),
    N = n(608523),
    I = n(717612),
    S = n(748113),
    y = n(458739),
    k = n(325272),
    E = n(688927),
    w = n(796071),
    R = n(132318),
    M = n(985879),
    L = n(117056),
    O = n(66535),
    G = n(12613),
    D = n(842012),
    U = n(666580),
    P = n(588684),
    B = n(316862),
    H = n(563218),
    V = n(617071),
    F = n(883471),
    W = n(943071),
    z = n(216033),
    K = n(908675),
    $ = n(503985),
    Q = n(145996),
    Y = n(964448),
    q = n(652215),
    Z = n(985018),
    J = n(641131),
    X = n(212335);
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
let el = e => {
    let {
        node: t,
        reportType: n,
        reportSubType: el,
        history: ea,
        onSelectChild: er,
        onModalClose: ei,
        onSubmit: es,
        onNavigateToNode: ed,
        multiSelect: eo,
        reportId: ec,
        textInput: eu,
        initialErrorMessage: e_
    } = e, em = et(t, "checkbox"), ex = et(t, "text_line_resource"), ep = en(t, "external_link"), eh = en(t, "free_text"), eg = en(t, "dropdown"), eA = et(t, "country_select"), ev = et(t, "inline_notice"), ef = et(t, "radio_group"), eb = et(t, "text"), eC = et(t, "content_url_input"), ej = r.x.REPORT_TO_MOD.has(n.name), eT = n.name === u.tY.MEDIA_TAKEDOWN, [eN, eI] = a.useState(!1), [eS, ey] = a.useState(!1), [ek, eE] = a.useState(e_ ?? ""), [ew, eR] = a.useState(() => ({})), [eM, eL] = a.useState(() => ({})), eO = a.useMemo(() => "message" === n.name ? n.record.channel_id : void 0, [n]), eG = a.useCallback(e => ({
        nodeRef: t.id,
        destination: e,
        textInput: null != eh || null != eg || null != eA || null != ef || null != eC ? eM : void 0,
        multiSelect: null != em ? {
            name: em.name,
            state: ew
        } : void 0
    }), [t, eh, eg, eA, ef, eC, em, ew, eM]), eD = a.useMemo(() => (0, _.ks)({
        freeTextElements: eh,
        dropdownElements: eg,
        countrySelectElement: eA,
        radioGroupElement: ef,
        multiSelectElement: em,
        contentUrlInputElement: eC
    }, {
        textInput: eM,
        multiSelect: ew
    }), [eh, eg, eA, ef, em, eC, eM, ew]), eU = a.useCallback((e, t) => {
        let n = {
            ...ew
        };
        e in ew ? delete n[e] : n[e] = t, eR(n)
    }, [ew]), eP = a.useCallback(function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            r = {
                ...eM
            };
        r[e] = {
            value: t,
            isValid: n
        }, null != l && (null != a && "" !== a ? r[l] = {
            value: a,
            isValid: n
        } : delete r[l]), eL(r)
    }, [eM]), eB = a.useCallback(e => {
        er(eG(e))
    }, [er, eG]);
    a.useEffect(() => {
        null != eo && eR(eo), null != eu && eL(eu)
    }, [eo, eu]), a.useEffect(() => {
        null != e_ && eE(e_)
    }, [e_]), a.useEffect(() => {
        if (null != em) {
            let e = em.data;
            if (null != e)
                for (let [t, n, l, a] of e) a && eR(e => ({
                    ...e,
                    [t]: n
                }))
        }
    }, [em]);
    let eH = a.useCallback(e => {
            switch (e) {
                case q.t02.UNKNOWN_TIDA_CONTENT: {
                    let e = Z.intl.string(Z.t["2EPoxE"]);
                    eE(e), ed?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                    break
                }
                case q.t02.INVALID_SIGNATURE_MISMATCH:
                    eE(Z.intl.string(Z.t.kXrnQM));
                    break;
                case q.t02.INVALID_FORM_BODY:
                    eE(Z.intl.string(Z.t.VjAAuP));
                    break;
                default:
                    ej ? eE(Z.intl.string(J.default.psKFdJ)) : eE(Z.intl.string(Z.t.h6D8Vy))
            }
        }, [ej, ed]),
        eV = a.useCallback(() => {
            let t = ["", e.successNodeId];
            es(eG(t)).then(() => {
                eE(""), eB(t)
            }).catch(e => {
                eH(e.body?.code)
            }).finally(() => {
                eI(!1)
            })
        }, [e.successNodeId, eG, es, eB, eH]),
        eF = a.useCallback(e => {
            switch (e.type) {
                case "done":
                case "cancel":
                    ei();
                    break;
                case "next":
                    eB(["", e.target]);
                    break;
                case "submit":
                    eI(!0), eV()
            }
        }, [ei, eB, eV]),
        eW = a.useCallback(e => {
            "Enter" !== e.key || eD || eN || null == t.button || (e.preventDefault(), eF(t.button))
        }, [eD, eN, t.button, eF]);
    a.useEffect(() => {
        t.is_auto_submit && !eS && (ey(!0), es(eG(["", t.id])))
    }, [t.is_auto_submit, eS, es, eG, t.id]);
    let ez = (0, c.fY)(el),
        eK = null != et(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        e$ = (0, o.Z)(),
        eQ = (0, d.GR)(),
        eY = e$ && eQ.length > 0 && null != et(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: X.kL,
        onKeyDown: eW,
        children: [(0, l.jsxs)("div", {
            className: X.U1,
            children: [null != t.header && "" !== t.header ? (0, l.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.header
            }) : null, (0, l.jsx)(i.s_y, {
                "data-migration-pending": !0,
                className: X.b,
                onClick: ei
            })]
        }), (0, l.jsxs)(i.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            direction: s.A.Direction.VERTICAL,
            className: X.wx,
            children: [(0, l.jsx)(W.A, {
                element: et(t, "success")
            }), (0, l.jsx)(E.A, {
                node: t,
                isModeratorReport: ej,
                isTidaReport: eT,
                hideTitle: !0
            }), (0, l.jsx)(R.A, {
                node: t
            })]
        }), (0, l.jsxs)(i.$mQ, {
            "data-migration-pending": !0,
            className: X.rf,
            children: [null != ex && (0, l.jsx)(K.A, {
                element: ex
            }), null != eb && (0, l.jsx)(z.A, {
                element: eb
            }), null != et(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(O.A, {
                message: n.record
            }), null != et(t, "user_preview") && "user" === n.name ? (0, l.jsx)($.A, {
                user: n.record
            }) : null, null != et(t, "widget_preview") && "widget" === n.name ? (0, l.jsx)(Q.A, {
                widget: n.widget,
                userId: n.user_id
            }) : null, null != et(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(y.A, {
                guild: n.record
            }) : null, null != et(t, "breadcrumbs") && (0, l.jsx)(h.A, {
                isModeratorReport: ej,
                history: ea
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
            }(t) && (0, l.jsxs)(P.A, {
                children: [eK && (0, l.jsx)(w.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: eO,
                    reportId: ec
                }), eY && (0, l.jsx)(V.A, {
                    parents: eQ
                }), null != et(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, l.jsx)(p.A, {
                    user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
                    channelId: eO,
                    reportId: ec,
                    reportType: n
                }), !eK && null != et(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(D.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: eO,
                    reportId: ec
                }), null != et(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(b.A, {
                    message: n.record,
                    reportId: ec
                }), null != et(t, "leave_guild") && "guild" === n.name && (0, l.jsx)(L.A, {
                    guildId: n.record.id,
                    reportId: ec
                }), null != et(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(f.A, {
                    application: n.record,
                    reportId: ec
                }), null != et(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(B.A, {
                    application: n.record,
                    reportId: ec
                })]
            }), null != et(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != ez && (0, l.jsx)(H.A, {
                settingsUpsells: ez,
                channelId: n.record.channel_id,
                onModalClose: ei,
                reportId: ec,
                reportType: n,
                reportSubType: el
            }), null != et(t, "channel_preview") && "stage_channel" === n.name && (0, l.jsx)(F.A, {
                stageInstance: n.record
            }), null != et(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, l.jsx)(k.A, {
                event: n.record
            }), null != et(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, l.jsx)(I.A, {
                entry: n.record
            }), null != et(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, l.jsx)(S.A, {
                entry: n.record
            }), null != et(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, {
                entry: n.record
            }), null != em && (0, l.jsx)(G.A, {
                element: em,
                title: ee.includes(n.name) ? Z.intl.string(Z.t.fuKUcA) : void 0,
                onChange: eU,
                state: ew
            }), ee.includes(n.name) && null != eC && (0, l.jsx)(A.A, {
                element: eC,
                onChange: eP,
                state: eM
            }), ee.includes(n.name) && null != eg && eg.length > 0 && (0, l.jsx)("div", {
                className: null != em ? X.yF : void 0,
                children: (0, l.jsx)(C.A, {
                    elements: eg,
                    onChange: eP,
                    state: eM
                })
            }), null != ef && (0, l.jsx)("div", {
                className: null != em ? X.yF : void 0,
                children: (0, l.jsx)(U.A, {
                    element: ef,
                    onChange: eP,
                    state: eM
                })
            }), null != ev && function(e, t, n) {
                let {
                    visible_when: l
                } = e.data;
                if (null == l) return !0;
                let a = et(t, l.element_type);
                return null != a && n?.[a.name]?.value === l.value
            }(ev, t, eM) && (0, l.jsx)(M.A, {
                element: ev
            }), null != eA && (0, l.jsx)(v.A, {
                element: eA,
                onChange: eP,
                state: eM
            }), ee.includes(n.name) && null != eh && eh.length > 0 && (0, l.jsx)(N.A, {
                elements: eh,
                onChange: eP,
                state: eM
            }), (null != t.children && t.children.length > 0 || null != ep && ep.length > 0) && (0, l.jsxs)("div", {
                className: X.qI,
                children: [(0, l.jsx)(g.A, {
                    node: t,
                    onSelectChild: eB,
                    nodeMap: e.nodeMap
                }), null != ep && ep.length > 0 ? (0, l.jsx)(T.A, {
                    elements: ep
                }) : null]
            }), (0, l.jsx)(j.A, {
                errorMessage: ek,
                onClose: () => {
                    eE("")
                }
            })]
        }), (0, l.jsx)(m.A, {
            button: t.button,
            submitting: eN,
            disableNext: eD,
            isModeratorReport: ej,
            onClick: eF,
            onBackClicked: e.onNavigateBack,
            canNavigateBack: ea.length > 0
        })]
    })
}