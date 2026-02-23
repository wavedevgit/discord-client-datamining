/** chunk id: 598131, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ee
});
var l = n(627968),
    a = n(64700),
    i = n(2110),
    r = n(397927),
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
    h = n(803957),
    A = n(905074),
    b = n(80718),
    v = n(676978),
    f = n(657679),
    T = n(932482),
    j = n(404192),
    C = n(608523),
    I = n(717612),
    N = n(748113),
    S = n(458739),
    k = n(325272),
    y = n(688927),
    E = n(796071),
    M = n(132318),
    R = n(117056),
    w = n(66535),
    G = n(12613),
    O = n(842012),
    D = n(588684),
    L = n(316862),
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
let J = ["user_urf", "message_urf", "guild_urf", "media_takedown"];

function Z(e, t) {
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
        textInput: ed,
        initialErrorMessage: eo
    } = e, ec = Z(t, "checkbox"), eu = Z(t, "text_line_resource"), e_ = X(t, "external_link"), em = X(t, "free_text"), ex = X(t, "dropdown"), ep = Z(t, "text"), eg = Z(t, "content_url_input"), eh = i.x.REPORT_TO_MOD.has(n.name), eA = n.name === u.tY.MEDIA_TAKEDOWN, [eb, ev] = a.useState(!1), [ef, eT] = a.useState(!1), [ej, eC] = a.useState(eo ?? ""), [eI, eN] = a.useState(() => ({})), [eS, ek] = a.useState(() => ({})), ey = a.useMemo(() => "message" === n.name ? n.record.channel_id : void 0, [n]), eE = a.useCallback(e => ({
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
    }, [eI]), ew = a.useCallback(function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i = {
                ...eS
            };
        i[e] = {
            value: t,
            isValid: n
        }, null != l && (null != a && "" !== a ? i[l] = {
            value: a,
            isValid: n
        } : delete i[l]), ek(i)
    }, [eS]), eG = a.useCallback(e => {
        en(eE(e))
    }, [en, eE]);
    a.useEffect(() => {
        null != er && eN(er), null != ed && ek(ed)
    }, [er, ed]), a.useEffect(() => {
        null != eo && eC(eo)
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
    let eO = a.useCallback(e => {
            switch (e) {
                case $.t02.UNKNOWN_TIDA_CONTENT: {
                    let e = Q.intl.string(Q.t["2EPoxE"]);
                    eC(e), ei?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                    break
                }
                case $.t02.INVALID_SIGNATURE_MISMATCH:
                    eC(Q.intl.string(Q.t.kXrnQM));
                    break;
                case $.t02.INVALID_FORM_BODY:
                    eC(Q.intl.string(Q.t.VjAAuP));
                    break;
                default:
                    eh ? eC(Q.intl.string(Y.default.psKFdJ)) : eC(Q.intl.string(Q.t.h6D8Vy))
            }
        }, [eh, ei]),
        eD = a.useCallback(() => {
            let t = ["", e.successNodeId];
            ea(eE(t)).then(() => {
                eC(""), eG(t)
            }).catch(e => {
                eO(e.body?.code)
            }).finally(() => {
                ev(!1)
            })
        }, [e.successNodeId, eE, ea, eG, eO]),
        eL = a.useCallback(e => {
            switch (e.type) {
                case "done":
                case "cancel":
                    el();
                    break;
                case "next":
                    eG(["", e.target]);
                    break;
                case "submit":
                    ev(!0), eD()
            }
        }, [el, eG, eD]),
        eU = a.useCallback(e => {
            "Enter" !== e.key || eM || eb || null == t.button || (e.preventDefault(), eL(t.button))
        }, [eM, eb, t.button, eL]);
    a.useEffect(() => {
        t.is_auto_submit && !ef && (eT(!0), ea(eE(["", t.id])))
    }, [t.is_auto_submit, ef, ea, eE, t.id]);
    let eB = (0, c.fY)(ee),
        eP = null != Z(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eH = (0, o.Z)(),
        eV = (0, d.GR)(),
        eF = eH && eV.length > 0 && null != Z(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: q.kL,
        onKeyDown: eU,
        children: [(0, l.jsxs)(r.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            direction: s.A.Direction.VERTICAL,
            className: q.wx,
            children: [(0, l.jsx)(H.A, {
                element: Z(t, "success")
            }), (0, l.jsx)(y.A, {
                node: t,
                isModeratorReport: eh,
                isTidaReport: eA
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
            }), null != Z(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(w.A, {
                message: n.record
            }), null != Z(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, {
                user: n.record
            }) : null, null != Z(t, "widget_preview") && "widget" === n.name ? (0, l.jsx)(z.A, {
                widget: n.widget,
                userId: n.user_id
            }) : null, null != Z(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(S.A, {
                guild: n.record
            }) : null, null != Z(t, "breadcrumbs") && (0, l.jsx)(g.A, {
                isModeratorReport: eh,
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
            }(t) && (0, l.jsxs)(D.A, {
                children: [eP && (0, l.jsx)(E.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es
                }), eF && (0, l.jsx)(B.A, {
                    parents: eV
                }), null != Z(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, l.jsx)(p.A, {
                    user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es,
                    reportType: n
                }), !eP && null != Z(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(O.A, {
                    user: "user" === n.name ? n.record : n.record.author,
                    channelId: ey,
                    reportId: es
                }), null != Z(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(v.A, {
                    message: n.record,
                    reportId: es
                }), null != Z(t, "leave_guild") && "guild" === n.name && (0, l.jsx)(R.A, {
                    guildId: n.record.id,
                    reportId: es
                }), null != Z(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(b.A, {
                    application: n.record,
                    reportId: es
                }), null != Z(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(L.A, {
                    application: n.record,
                    reportId: es
                })]
            }), null != Z(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eB && (0, l.jsx)(U.A, {
                settingsUpsells: eB,
                channelId: n.record.channel_id,
                onModalClose: el,
                reportId: es,
                reportType: n,
                reportSubType: ee
            }), null != Z(t, "channel_preview") && "stage_channel" === n.name && (0, l.jsx)(P.A, {
                stageInstance: n.record
            }), null != Z(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, l.jsx)(k.A, {
                event: n.record
            }), null != Z(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, l.jsx)(I.A, {
                entry: n.record
            }), null != Z(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, l.jsx)(N.A, {
                entry: n.record
            }), null != Z(t, "app_preview") && "application" === n.name && (0, l.jsx)(x.A, {
                entry: n.record
            }), null != ec && (0, l.jsx)(G.A, {
                element: ec,
                onChange: eR,
                state: eI
            }), J.includes(n.name) && null != eg && (0, l.jsx)(A.A, {
                element: eg,
                onChange: ew,
                state: eS
            }), J.includes(n.name) && null != ex && ex.length > 0 && (0, l.jsx)(f.A, {
                elements: ex,
                onChange: ew,
                state: eS
            }), J.includes(n.name) && null != em && em.length > 0 && (0, l.jsx)(C.A, {
                elements: em,
                onChange: ew,
                state: eS
            }), (null != t.children && t.children.length > 0 || null != e_ && e_.length > 0) && (0, l.jsxs)("div", {
                className: q.qI,
                children: [(0, l.jsx)(h.A, {
                    node: t,
                    onSelectChild: eG,
                    nodeMap: e.nodeMap
                }), null != e_ && e_.length > 0 ? (0, l.jsx)(j.A, {
                    elements: e_
                }) : null]
            }), (0, l.jsx)(T.A, {
                errorMessage: ej,
                onClose: () => {
                    eC("")
                }
            })]
        }), (0, l.jsx)(m.A, {
            button: t.button,
            submitting: eb,
            disableNext: eM,
            isModeratorReport: eh,
            onClick: eL,
            onBackClicked: e.onNavigateBack,
            canNavigateBack: et.length > 0
        }), (0, l.jsx)(r.s_y, {
            "data-migration-pending": !0,
            className: q.b,
            onClick: el
        })]
    })
}