/** chunk id: 180720 params = (module,exports,require) **/
n.d(t, {
    T: () => G
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    s = n(837381),
    a = n(311907),
    o = n(397927),
    u = n(928039),
    d = n(704554),
    c = n(21119),
    h = n(594831),
    g = n(616356),
    m = n(734057),
    f = n(197305),
    A = n(994500),
    I = n(309010),
    E = n(977997),
    p = n(607567),
    _ = n(256415),
    S = n(996439),
    x = n(810412),
    T = n(914853),
    C = n(179917),
    N = n(419072),
    v = n(294809),
    y = n(316541),
    M = n(554932),
    b = n(406595),
    R = n(557404),
    D = n(652215),
    O = n(499214),
    w = n(985018),
    j = n(894564);

function k(e) {
    return Array.from(e).sort()
}
let U = (0, l.throttle)(e => {
    (0, x.Y)(D.uss.FRIENDS, {
        locked: _.default.isInstanceLocked(),
        shownUserIds: e.shownUserIds,
        liveUserIds: e.liveUserIds,
        contentInventoryIds: []
    })
}, 3e3, {
    leading: !0,
    trailing: !1
});

function L(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 0x1000193);
    return t >>> 0
}

function G() {
    let {
        onPrimaryAction: e,
        onContextMenu: t
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [n, l] = r.useState(""), _ = n.trim().toLowerCase(), [D, G] = r.useState(() => new Set), P = (0, a.bG)([N.A], () => N.A.getCollapsedSectionOverridesForTab(T.x.VOICE), []), F = (0, h.qZ)(), V = r.useMemo(() => {
        let e = new Map;
        for (let t of F) e.set(t.channel.id, t.voiceStates);
        return e
    }, [F]), z = r.useCallback(e => {
        G(t => {
            let n = new Set(t);
            return n.has(e) ? n.delete(e) : n.add(e), n
        })
    }, []), H = r.useCallback(e => {
        (0, M.G)({
            tab: T.x.VOICE,
            sectionKey: e
        })
    }, []), Y = r.useMemo(() => new Set(F.map(e => e.channel.id)), [F]), [W, B] = r.useState([]);
    (0, d.RT)(n, F, B, h.MV);
    let Z = r.useRef(null),
        X = (0, u.A)("friends-widget-voice", Z),
        [K, $] = (0, a.bG)([b.A], () => b.A.getFavoriteTargetIdsForTab(T.x.VOICE), [], S.D),
        q = r.useMemo(() => K.filter(e => Y.has(e)), [K, Y]),
        {
            friendVoiceChannelIds: J,
            recentVoiceChannelIds: Q
        } = (0, h.S4)(),
        ee = r.useMemo(() => J.filter(e => Y.has(e)), [J, Y]),
        et = r.useMemo(() => Q.filter(e => Y.has(e)), [Q, Y]),
        en = (0, a.bG)([I.A], () => I.A.getVoiceChannelId(), []),
        ei = (0, a.bG)([y.A], () => y.A.getActiveNowChannelIds({
            kind: y.u.Voice
        }), []),
        er = (0, a.bG)([f.A], () => f.A.affinities.filter(e => (e.score ?? 0) > 0).slice(0, 2).map(e => e.guildId), []),
        el = r.useMemo(() => {
            let e, t, n, i;
            return t = String((e = new Date).getDate()).padStart(2, "0"), n = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getFullYear() % 100).padStart(2, "0"), L(`${t}${n}${i}`)
        }, []),
        es = r.useMemo(() => new Set(K), [K]),
        ea = r.useMemo(() => ee.filter(e => !es.has(e)), [ee, es]),
        eo = r.useMemo(() => et.filter(e => !es.has(e)), [et, es]),
        eu = r.useMemo(() => new Set(ea), [ea]),
        ed = r.useMemo(() => ei.filter(e => !es.has(e) && !eu.has(e) && Y.has(e)), [ei, es, eu, Y]),
        ec = r.useMemo(() => {
            let e = [],
                t = new Set,
                n = n => {
                    null == n || !Y.has(n) || es.has(n) || t.has(n) || (t.add(n), e.push(n))
                };
            for (let t of (null != en && m.A.getChannel(en)?.isVocal() && n(en), eo)) {
                if (e.length >= 8) break;
                n(t)
            }
            let i = new Set(er),
                r = new Set([...es, ...ea]),
                l = F.filter(e => {
                    let n = e.channel;
                    if (!n?.isVocal?.()) return !1;
                    let l = n.getGuildId?.() ?? null;
                    return !(null == l || !i.has(l) || r.has(n.id) || t.has(n.id))
                }).map(e => {
                    var t;
                    return {
                        channelId: e.channel.id,
                        voiceUserCount: e.voiceStates?.length ?? 0,
                        shuffle: (t = e.channel.id, L(`${el}:${t}`))
                    }
                }),
                s = l.filter(e => e.voiceUserCount > 0),
                a = l.filter(e => 0 === e.voiceUserCount);
            for (let t of (s.sort((e, t) => e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle), a.sort((e, t) => e.shuffle - t.shuffle), [...s, ...a])) {
                if (e.length >= 8) break;
                n(t.channelId)
            }
            return e
        }, [F, Y, en, es, ea, eo, el, er]),
        eh = r.useMemo(() => {
            let e = e => !0 === P[e],
                t = e => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== _) return n.push({
                kind: "SEARCH_RESULTS",
                key: "SEARCH_RESULTS",
                title: w.intl.string(O.default.DUIbKP),
                count: W.length,
                rows: W.map(e => ({
                    channelId: e.channel.id,
                    voiceStates: e.voiceStates
                })),
                length: W.length
            }), n;
            if (q.length > 0 && $ > 0) {
                let i = q.map(e => ({
                        channelId: e,
                        voiceStates: V.get(e)
                    })),
                    r = e("FAVORITES") ? i.filter(t) : i;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: w.intl.string(O.default.OskevP),
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1)
                })
            }
            if (ea.length > 0) {
                let i = ea.map(e => ({
                        channelId: e,
                        voiceStates: V.get(e)
                    })),
                    r = e("FRIENDS_IN_VOICE") ? i.filter(t) : i;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: w.intl.string(O.default["C+ojiQ"]),
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1)
                })
            }
            if (ed.length > 0) {
                let i = ed.map(e => ({
                        channelId: e,
                        voiceStates: V.get(e)
                    })),
                    r = e("ACTIVE_NOW") ? i.filter(t) : i;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: w.intl.string(O.default.eiie2x),
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1)
                })
            }
            if (ec.length > 0) {
                let i = ec.map(e => ({
                        channelId: e,
                        voiceStates: V.get(e)
                    })),
                    r = e("SUGGESTED_VOICE_CHANNELS") ? i.filter(t) : i;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: w.intl.string(O.default["9ME4wE"]),
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1)
                })
            }
            return n
        }, [P, _, q, $, ed, ea, W, ec, V]),
        eg = r.useMemo(() => eh.map(e => e.length), [eh]),
        em = r.useCallback(e => {
            for (let t = 0; t < eh.length; t += 1) {
                let n = eh[t].rows.findIndex(t => t.channelId === e);
                if (-1 !== n) return {
                    section: t,
                    row: n
                }
            }
            return null
        }, [eh]),
        ef = r.useCallback(() => {
            let e = eh.findIndex(e => "FAVORITES" === e.kind);
            return -1 === e ? null : {
                section: e,
                row: void 0
            }
        }, [eh]);
    (0, R.$)({
        scrollerRef: Z,
        favoriteTargetIds: q,
        getScrollTargetForTargetId: e => em(e),
        getFallbackScrollTarget: ef,
        padding: 8,
        animate: !1
    });
    let eA = (0, x.Dk)(() => {
            let e = new Set;
            for (let t of eh)
                for (let n of t.rows) e.add(n.channelId);
            return e
        }, [eh]),
        {
            shownUserIds: eI,
            liveUserIds: eE
        } = (0, a.cf)([m.A, g.A], () => {
            let e = new Map;
            for (let t of F) e.set(t.channel.id, t.voiceStates);
            let t = new Set,
                n = new Set;
            for (let i of eA) {
                let r = m.A.getChannel(i),
                    l = r?.getGuildId?.() ?? r?.guild_id ?? null;
                for (let r of function(e, t) {
                        let n = Array.from(new Set((t ?? Object.values(E.A.getVoiceStatesForChannel(e))).map(e => e.userId)));
                        return n.sort((e, t) => {
                            let n = A.A.isFriend(e),
                                i = A.A.isFriend(t);
                            return n && !i ? -1 : !n && i ? 1 : (c.A.getUserAffinity(t)?.vcProbability ?? 0) - (c.A.getUserAffinity(e)?.vcProbability ?? 0)
                        }), n.slice(0, 4)
                    }(i, e.get(i))) t.add(r), null != l && null != g.A.getStreamForUser(r, l) && n.add(r)
            }
            return {
                shownUserIds: t,
                liveUserIds: n
            }
        }, [eA, F]),
        ep = (0, x.Dk)(() => eI, [eI]),
        e_ = (0, x.Dk)(() => eE, [eE]);
    r.useEffect(() => {
        (0 !== ep.size || 0 !== e_.size) && U({
            shownUserIds: k(ep),
            liveUserIds: k(e_)
        })
    }, [ep, e_]);
    let eS = r.useCallback(e => eh[e], [eh]),
        ex = r.useCallback(e => {
            let {
                section: t
            } = e, n = eS(t);
            if (null == n) return null;
            let r = "SEARCH_RESULTS" !== n.kind,
                l = r && !0 === P[n.key];
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.AC4, {
                    children: n.title
                }), (0, i.jsx)(C.I, {
                    title: n.title,
                    count: n.count,
                    isCollapsed: l,
                    canCollapse: r,
                    onToggle: () => H(n.key)
                })]
            })
        }, [P, eS, H]),
        eT = r.useCallback(n => {
            let r = eS(n.section);
            if (null == r) return null;
            let l = r.rows[n.row];
            if (null == l) return null;
            let s = `${r.key}:${l.channelId}`,
                a = D.has(l.channelId);
            return (0, i.jsx)(v.C, {
                channelId: l.channelId,
                listItemId: s,
                voiceStates: l.voiceStates,
                isExpanded: a,
                onToggleExpanded: z,
                shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                onPrimaryAction: e,
                onContextMenu: t
            }, s)
        }, [D, eS, t, e, z]),
        eC = r.useCallback(() => 40, []),
        eN = r.useCallback((e, t) => {
            let n = eS(e);
            if (null == n) return 50;
            if (0 === n.rows.length) return 0;
            let i = n.rows[t];
            if (null == i || !D.has(i.channelId)) return 50;
            let r = m.A.getChannel(i.channelId),
                l = Math.min((null != r ? p.Ay.getVoiceStatesForChannel(r) : []).length, 25);
            return l <= 0 ? 50 : 50 + (32 * l + (l - 1) * 2 + 8)
        }, [D, eS]),
        ev = r.useCallback(e => {
            l(e), Z.current?.scrollToTop()
        }, []);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [(0, i.jsx)("div", {
            className: j.MT,
            children: (0, i.jsx)(o.IWV, {
                query: n,
                onChange: ev,
                onClear: () => l(""),
                placeholder: w.intl.string(O.default.OV3KfO),
                size: "md"
            })
        }), (0, i.jsx)(s.hD, {
            navigator: X,
            children: (0, i.jsx)(s.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: n,
                        ...r
                    } = e;
                    return (0, i.jsx)(o.skg, {
                        children: e => (0, i.jsx)(o.B8B, {
                            innerRole: n,
                            innerAriaLabel: w.intl.string(w.t.OGiMXJ),
                            ref: e => {
                                Z.current = e, t.current = e?.getScrollerNode() ?? null
                            },
                            className: j.p_,
                            sectionHeight: eC,
                            rowHeight: eN,
                            sidebarHeight: 0,
                            renderSection: ex,
                            renderRow: eT,
                            sections: eg,
                            paddingBottom: 8,
                            ...r,
                            ...e
                        })
                    })
                }
            })
        })]
    })
}