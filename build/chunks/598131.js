/** chunk id: 598131, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ee
});
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(397927),
    s = n(235986),
    o = n(834981),
    d = n(840387),
    c = n(319582),
    u = n(17372),
    _ = n(369053),
    m = n(482578),
    x = n(248492),
    p = n(133134),
    g = n(374966),
    A = n(803957),
    h = n(905074),
    b = n(80718),
    v = n(676978),
    f = n(657679),
    T = n(932482),
    C = n(404192),
    I = n(608523),
    j = n(717612),
    S = n(748113),
    N = n(458739),
    k = n(325272),
    y = n(688927),
    E = n(796071),
    M = n(132318),
    O = n(117056),
    R = n(66535),
    L = n(12613),
    G = n(842012),
    w = n(588684),
    D = n(316862),
    U = n(563218),
    B = n(617071),
    P = n(883471),
    H = n(943071),
    V = n(216033),
    F = n(908675),
    W = n(503985),
    z = n(145996),
    K = n(964448),
    $ = n(652215),
    Q = n(985018),
    Y = n(641131),
    q = n(212335);
let Z = ["user_urf", "message_urf", "guild_urf", "media_takedown"];

function J(e, t) {
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

function X(e, t) {
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
let ee = e => {
    let {
        node: t,
        reportType: n,
        reportSubType: ee,
        history: et,
        onSelectChild: en,
        onModalClose: el,
        onSubmit: ea,
        onNavigateToNode: ei,
        multiSelect: er,
        reportId: es,
        textInput: eo,
        initialErrorMessage: ed
    } = e, ec = J(t, "checkbox"), eu = J(t, "text_line_resource"), e_ = X(t, "external_link"), em = X(t, "free_text"), ex = X(t, "dropdown"), ep = J(t, "text"), eg = J(t, "content_url_input"), eA = i.x.REPORT_TO_MOD.has(n.name), eh = n.name === u.tY.MEDIA_TAKEDOWN, [eb, ev] = a.useState(!1), [ef, eT] = a.useState(!1), [eC, eI] = a.useState(ed ?? ""), [ej, eS] = a.useState(() => ({})), [eN, ek] = a.useState(() => ({})), ey = a.useMemo(() => "message" === n.name ? n.record.channel_id : void 0, [n]), eE = a.useCallback(e => ({
        nodeRef: t.id,
        destination: e,
        textInput: null != em || null != ex || null != eg ? eN : void 0,
        multiSelect: null != ec ? {
            name: ec.name,
            state: ej
        } : void 0
    }), [t, em, ex, eg, ec, ej, eN]), eM = a.useMemo(() => (0, _.ks)({
        freeTextElements: em,
        dropdownElements: ex,
        multiSelectElement: ec,
        contentUrlInputElement: eg
    }, {
        textInput: eN,
        multiSelect: ej
    }), [em, ex, ec, eg, eN, ej]), eO = a.useCallback((e, t) => {
        let n = {
            ...ej
        };
        e in ej ? delete n[e] : n[e] = t, eS(n)
    }, [ej]), eR = a.useCallback(function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i = {
                ...eN
            };
        i[e] = {
            value: t,
            isValid: n
        }, null != l && (null != a && "" !== a ? i[l] = {
            value: a,
            isValid: n
        } : delete i[l]), ek(i)
    }, [eN]), eL = a.useCallback(e => {
        en(eE(e))
    }, [en, eE]);
    a.useEffect(() => {
        null != er && eS(er), null != eo && ek(eo)
    }, [er, eo]), a.useEffect(() => {
        null != ed && eI(ed)
    }, [ed]), a.useEffect(() => {
        if (null != ec) {
            let e = ec.data;
            if (null != e)
                for (let [t, n, l, a] of e) a && eS(e => ({
                    ...e,
                    [t]: n
                }))
        }
    }, [ec]);
    let eG = a.useCallback(e => {
            switch (e) {
                case $.t02.UNKNOWN_TIDA_CONTENT: {
                    let e = Q.intl.string(Q.t["2EPoxE"]);
                    eI(e), ei?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                    break
                }
                case $.t02.INVALID_SIGNATURE_MISMATCH:
                    eI(Q.intl.string(Q.t.kXrnQM));
                    break;
                case $.t02.INVALID_FORM_BODY:
                    eI(Q.intl.string(Q.t.VjAAuP));
                    break;
                default:
                    eA ? eI(Q.intl.string(Y.default.psKFdJ)) : eI(Q.intl.string(Q.t.h6D8Vy))
            }
        }, [eA, ei]),
        ew = a.useCallback(() => {
            let t = ["", e.successNodeId];
            ea(eE(t)).then(() => {
                eI(""), eL(t)
            }).catch(e => {
                eG(e.body?.code)
            }).finally(() => {
                ev(!1)
            })
        }, [e.successNodeId, eE, ea, eL, eG]),
        eD = a.useCallback(e => {
            switch (e.type) {
                case "done":
                case "cancel":
                    el();
                    break;
                case "next":
                    eL(["", e.target]);
                    break;
                case "submit":
                    ev(!0), ew()
            }
        }, [el, eL, ew]),
        eU = a.useCallback(e => {
            "Enter" !== e.key || eM || eb || null == t.button || (e.preventDefault(), eD(t.button))
        }, [eM, eb, t.button, eD]);
    a.useEffect(() => {
        t.is_auto_submit && !ef && (eT(!0), ea(eE(["", t.id])))
    }, [t.is_auto_submit, ef, ea, eE, t.id]);
    let eB = (0, c.fY)(ee),
        eP = null != J(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eH = (0, d.Z)(),
        eV = (0, o.GR)(),
        eF = eH && eV.length > 0 && null != J(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eU,
        children: [(0, l.jsxs)(r.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            direction: s.A.Direction.VERTICAL,
            className: q.wx,
            children: [(0, l.jsx)(H.A, {
                element: J(t, "success")
            }), (0, l.jsx)(y.A, {
                node: t,
                isModeratorReport: eA,
                isTidaReport: eh
            }), (0, l.jsx)(M.A, {
                node: t
            })]
        }), (0, l.jsxs)(r.$mQ, {
            "data-migration-pending": !0,
            className: q.rf,
            children: [null != eu && (0, l.jsx)(F.A, {
                element: eu
            }), null != ep && (0, l.jsx)(V.A, {
                element: ep
            }), null != J(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(R.A, {
                message: n.record
            }), null != J(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, {
                user: n.record
            }) : null, null != J(t, "widget_preview") && "widget" === n.name ? (0, l.jsx)(z.A, {
                widget: n.widget,
                userId: n.user_id
            }) : null, null != J(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(N.A, {
                guild: n.record
            }) : null, null != J(t, "breadcrumbs") && (0, l.jsx)(g.A, {
                isModeratorReport: eA,
                history: et
            }), function(e) {
                let {
                    elements: t
                } = e;
                return t.some(e => {
                    let {
                        type: t
                    } = e;
                    return K.T.includes(t)
                })
            }(t) && (0, l.jsxs)(w.A, {
                children: [eP && (0, l.jsx)(E.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es
                }), eF && (0, l.jsx)(B.A, {
                    parents: eV
                }), null != J(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, l.jsx)(p.A, {
                    user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es,
                    reportType: n
                }), !eP && null != J(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(G.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es
                }), null != J(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(v.A, {
                    message: n.record,
                    reportId: es
                }), null != J(t, "leave_guild") && "guild" === n.name && (0, l.jsx)(O.A, {
                    guildId: n.record.id,
                    reportId: es
                }), null != J(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(b.A, {
                    application: n.record,
                    reportId: es
                }), null != J(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(D.A, {
                    application: n.record,
                    reportId: es
                })]
            }), null != J(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eB && (0, l.jsx)(U.A, {
                settingsUpsells: eB,
                channelId: n.record.channel_id,
                onModalClose: el,
                reportId: es,
                reportType: n,
                reportSubType: ee
            }), null != J(t, "channel_preview") && "stage_channel" === n.name && (0, l.jsx)(P.A, {
                stageInstance: n.record
            }), null != J(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, l.jsx)(k.A, {
                event: n.record
            }), null != J(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, l.jsx)(j.A, {
                entry: n.record
            }), null != J(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, l.jsx)(S.A, {
                entry: n.record
            }), null != J(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, {
                entry: n.record
            }), null != ec && (0, l.jsx)(L.A, {
                element: ec,
                onChange: eO,
                state: ej
            }), Z.includes(n.name) && null != eg && (0, l.jsx)(h.A, {
                element: eg,
                onChange: eR,
                state: eN
            }), Z.includes(n.name) && null != ex && ex.length > 0 && (0, l.jsx)(f.A, {
                elements: ex,
                onChange: eR,
                state: eN
            }), Z.includes(n.name) && null != em && em.length > 0 && (0, l.jsx)(I.A, {
                elements: em,
                onChange: eR,
                state: eN
            }), (null != t.children && t.children.length > 0 || null != e_ && e_.length > 0) && (0, l.jsxs)("div", {
                className: q.qI,
                children: [(0, l.jsx)(A.A, {
                    node: t,
                    onSelectChild: eL,
                    nodeMap: e.nodeMap
                }), null != e_ && e_.length > 0 ? (0, l.jsx)(C.A, {
                    elements: e_
                }) : null]
            }), (0, l.jsx)(T.A, {
                errorMessage: eC,
                onClose: () => {
                    eI("")
                }
            })]
        }), (0, l.jsx)(m.A, {
            button: t.button,
            submitting: eb,
            disableNext: eM,
            isModeratorReport: eA,
            onClick: eD,
            onBackClicked: e.onNavigateBack,
            canNavigateBack: et.length > 0
        }), (0, l.jsx)(r.s_y, {
            "data-migration-pending": !0,
            className: q.b,
            onClick: el
        })]
    })
}