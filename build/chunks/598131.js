/** chunk id: 598131, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ee
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
    g = n(374966),
    A = n(803957),
    h = n(905074),
    b = n(80718),
    v = n(676978),
    f = n(657679),
    T = n(932482),
    C = n(404192),
    j = n(608523),
    I = n(717612),
    N = n(748113),
    S = n(458739),
    k = n(325272),
    y = n(688927),
    E = n(796071),
    M = n(132318),
    R = n(117056),
    O = n(66535),
    G = n(12613),
    L = n(842012),
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
        onNavigateToNode: er,
        multiSelect: ei,
        reportId: es,
        textInput: ed,
        initialErrorMessage: eo
    } = e, ec = J(t, "checkbox"), eu = J(t, "text_line_resource"), e_ = X(t, "external_link"), em = X(t, "free_text"), ex = X(t, "dropdown"), ep = J(t, "text"), eg = J(t, "content_url_input"), eA = r.x.REPORT_TO_MOD.has(n.name), eh = n.name === u.tY.MEDIA_TAKEDOWN, [eb, ev] = a.useState(!1), [ef, eT] = a.useState(!1), [eC, ej] = a.useState(eo ?? ""), [eI, eN] = a.useState(() => ({})), [eS, ek] = a.useState(() => ({})), ey = a.useMemo(() => "message" === n.name ? n.record.channel_id : void 0, [n]), eE = a.useCallback(e => ({
        nodeRef: t.id,
        destination: e,
        textInput: null != em || null != ex || null != eg ? eS : void 0,
        multiSelect: null != ec ? {
            name: ec.name,
            state: eI
        } : void 0
    }), [t, em, ex, eg, ec, eI, eS]), eM = a.useMemo(() => (0, _.ks)({
        freeTextElements: em,
        dropdownElements: ex,
        multiSelectElement: ec,
        contentUrlInputElement: eg
    }, {
        textInput: eS,
        multiSelect: eI
    }), [em, ex, ec, eg, eS, eI]), eR = a.useCallback((e, t) => {
        let n = {
            ...eI
        };
        e in eI ? delete n[e] : n[e] = t, eN(n)
    }, [eI]), eO = a.useCallback(function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            r = {
                ...eS
            };
        r[e] = {
            value: t,
            isValid: n
        }, null != l && (null != a && "" !== a ? r[l] = {
            value: a,
            isValid: n
        } : delete r[l]), ek(r)
    }, [eS]), eG = a.useCallback(e => {
        en(eE(e))
    }, [en, eE]);
    a.useEffect(() => {
        null != ei && eN(ei), null != ed && ek(ed)
    }, [ei, ed]), a.useEffect(() => {
        null != eo && ej(eo)
    }, [eo]), a.useEffect(() => {
        if (null != ec) {
            let e = ec.data;
            if (null != e)
                for (let [t, n, l, a] of e) a && eN(e => ({
                    ...e,
                    [t]: n
                }))
        }
    }, [ec]);
    let eL = a.useCallback(e => {
            switch (e) {
                case $.t02.UNKNOWN_TIDA_CONTENT: {
                    let e = Q.intl.string(Q.t["2EPoxE"]);
                    ej(e), er?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                    break
                }
                case $.t02.INVALID_SIGNATURE_MISMATCH:
                    ej(Q.intl.string(Q.t.kXrnQM));
                    break;
                case $.t02.INVALID_FORM_BODY:
                    ej(Q.intl.string(Q.t.VjAAuP));
                    break;
                default:
                    eA ? ej(Q.intl.string(Y.default.psKFdJ)) : ej(Q.intl.string(Q.t.h6D8Vy))
            }
        }, [eA, er]),
        ew = a.useCallback(() => {
            let t = ["", e.successNodeId];
            ea(eE(t)).then(() => {
                ej(""), eG(t)
            }).catch(e => {
                eL(e.body?.code)
            }).finally(() => {
                ev(!1)
            })
        }, [e.successNodeId, eE, ea, eG, eL]),
        eD = a.useCallback(e => {
            switch (e.type) {
                case "done":
                case "cancel":
                    el();
                    break;
                case "next":
                    eG(["", e.target]);
                    break;
                case "submit":
                    ev(!0), ew()
            }
        }, [el, eG, ew]),
        eU = a.useCallback(e => {
            "Enter" !== e.key || eM || eb || null == t.button || (e.preventDefault(), eD(t.button))
        }, [eM, eb, t.button, eD]);
    a.useEffect(() => {
        t.is_auto_submit && !ef && (eT(!0), ea(eE(["", t.id])))
    }, [t.is_auto_submit, ef, ea, eE, t.id]);
    let eB = (0, c.fY)(ee),
        eP = null != J(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eH = (0, o.Z)(),
        eV = (0, d.GR)(),
        eF = eH && eV.length > 0 && null != J(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eU,
        children: [(0, l.jsxs)(i.rQ0, {
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
        }), (0, l.jsxs)(i.$mQ, {
            "data-migration-pending": !0,
            className: q.rf,
            children: [null != eu && (0, l.jsx)(F.A, {
                element: eu
            }), null != ep && (0, l.jsx)(V.A, {
                element: ep
            }), null != J(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(O.A, {
                message: n.record
            }), null != J(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, {
                user: n.record
            }) : null, null != J(t, "widget_preview") && "widget" === n.name ? (0, l.jsx)(z.A, {
                widget: n.widget,
                userId: n.user_id
            }) : null, null != J(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(S.A, {
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
                }), !eP && null != J(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(L.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es
                }), null != J(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(v.A, {
                    message: n.record,
                    reportId: es
                }), null != J(t, "leave_guild") && "guild" === n.name && (0, l.jsx)(R.A, {
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
            }), null != J(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, l.jsx)(I.A, {
                entry: n.record
            }), null != J(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, l.jsx)(N.A, {
                entry: n.record
            }), null != J(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, {
                entry: n.record
            }), null != ec && (0, l.jsx)(G.A, {
                element: ec,
                onChange: eR,
                state: eI
            }), Z.includes(n.name) && null != eg && (0, l.jsx)(h.A, {
                element: eg,
                onChange: eO,
                state: eS
            }), Z.includes(n.name) && null != ex && ex.length > 0 && (0, l.jsx)(f.A, {
                elements: ex,
                onChange: eO,
                state: eS
            }), Z.includes(n.name) && null != em && em.length > 0 && (0, l.jsx)(j.A, {
                elements: em,
                onChange: eO,
                state: eS
            }), (null != t.children && t.children.length > 0 || null != e_ && e_.length > 0) && (0, l.jsxs)("div", {
                className: q.qI,
                children: [(0, l.jsx)(A.A, {
                    node: t,
                    onSelectChild: eG,
                    nodeMap: e.nodeMap
                }), null != e_ && e_.length > 0 ? (0, l.jsx)(C.A, {
                    elements: e_
                }) : null]
            }), (0, l.jsx)(T.A, {
                errorMessage: eC,
                onClose: () => {
                    ej("")
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
        }), (0, l.jsx)(i.s_y, {
            "data-migration-pending": !0,
            className: q.b,
            onClick: el
        })]
    })
}